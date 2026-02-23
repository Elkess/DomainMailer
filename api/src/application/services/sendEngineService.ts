import { Campaign } from "../../domain/entities/types";
import { GmailGateway } from "../../domain/ports/gateways";
import { CampaignRepository, EmailAccountRepository, LeadRepository, SendLogRepository } from "../../domain/ports/repositories";
import { logger } from "../../infrastructure/logging/logger";
import { decrypt, encrypt } from "../../infrastructure/security/encryption";
import { renderTemplate } from "./templateEngine";

const randomDelayMs = (minSeconds: number, maxSeconds: number): number => {
  const min = Math.max(0, minSeconds);
  const max = Math.max(min, maxSeconds);
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class SendEngineService {
  constructor(
    private readonly campaignRepository: CampaignRepository,
    private readonly leadRepository: LeadRepository,
    private readonly emailAccountRepository: EmailAccountRepository,
    private readonly sendLogRepository: SendLogRepository,
    private readonly gmailGateway: GmailGateway
  ) {}

  async recoverAfterCrash(): Promise<void> {
    const recovered = await this.leadRepository.recoverStuckSendingLeads();
    if (recovered > 0) {
      logger.warn("Recovered stuck sending leads", { recovered });
    }
  }

  async processNextCampaign(): Promise<boolean> {
    const campaign = await this.campaignRepository.fetchNextRunnableCampaign();
    if (!campaign) {
      return false;
    }

    await this.processCampaign(campaign);
    return true;
  }

  private async processCampaign(campaign: Campaign): Promise<void> {
    const emailAccount = await this.emailAccountRepository.findById(campaign.emailAccountId);
    if (!emailAccount || emailAccount.status !== "active") {
      await this.campaignRepository.setStatus(campaign.id, "error");
      logger.error("Campaign cannot run due to inactive email account", { campaignId: campaign.id });
      return;
    }

    const sentToday = await this.campaignRepository.getSentCountToday(campaign.id);
    if (sentToday >= campaign.dailyLimit) {
      return;
    }

    const lead = await this.leadRepository.reserveNextLeadForSending({
      campaignId: campaign.id,
      maxRetryAttempts: campaign.maxRetryAttempts
    });

    if (!lead) {
      const counts = await this.campaignRepository.getCounts(campaign.id);
      if (counts.pending === 0 && counts.sending === 0) {
        await this.campaignRepository.setStatus(campaign.id, "completed");
      }
      return;
    }

    const data: Record<string, string> = {
      company_name: lead.companyName,
      email: lead.email,
      sender_name: emailAccount.email,
      ...lead.customFields
    };

    let subject: string;
    let body: string;
    try {
      subject = renderTemplate(campaign.subjectTemplate, data);
      body = renderTemplate(campaign.bodyTemplate, data);
    } catch (error: any) {
      await this.leadRepository.markFailedForRetry({
        leadId: lead.id,
        attemptCount: lead.attemptCount + 1,
        maxRetryAttempts: campaign.maxRetryAttempts
      });
      await this.sendLogRepository.create({
        campaignId: campaign.id,
        leadId: lead.id,
        emailAccountId: emailAccount.id,
        status: "failure",
        responseCode: null,
        responseBody: null,
        errorMessage: error.message
      });
      return;
    }

    let accessToken = decrypt(emailAccount.accessTokenEncrypted);
    let refreshToken = decrypt(emailAccount.refreshTokenEncrypted);
    let tokenExpiry = emailAccount.tokenExpiry;

    if (tokenExpiry.getTime() < Date.now() + 30_000) {
      const refreshed = await this.gmailGateway.refreshToken(refreshToken);
      if (!refreshed) {
        await this.emailAccountRepository.disable(emailAccount.id);
        await this.campaignRepository.setStatus(campaign.id, "error");
        await this.sendLogRepository.create({
          campaignId: campaign.id,
          leadId: lead.id,
          emailAccountId: emailAccount.id,
          status: "failure",
          responseCode: "401",
          responseBody: null,
          errorMessage: "OAuth refresh failed. Account disabled"
        });
        return;
      }
      accessToken = refreshed.accessToken;
      refreshToken = refreshed.refreshToken;
      tokenExpiry = refreshed.tokenExpiry;
      await this.emailAccountRepository.updateTokens({
        accountId: emailAccount.id,
        accessTokenEncrypted: encrypt(accessToken),
        refreshTokenEncrypted: encrypt(refreshToken),
        tokenExpiry
      });
    }

    const result = await this.gmailGateway.sendMail({
      fromEmail: emailAccount.email,
      toEmail: lead.email,
      subject,
      body,
      accessToken,
      refreshToken,
      tokenExpiry
    });

    if (result.ok) {
      await this.leadRepository.markSent(lead.id);
      await this.sendLogRepository.create({
        campaignId: campaign.id,
        leadId: lead.id,
        emailAccountId: emailAccount.id,
        status: "success",
        responseCode: String(result.statusCode),
        responseBody: result.responseBody,
        errorMessage: null
      });
      await sleep(randomDelayMs(campaign.delayMinSeconds, campaign.delayMaxSeconds));
      return;
    }

    if (result.rateLimited) {
      await this.campaignRepository.setStatus(campaign.id, "paused");
      await this.emailAccountRepository.disable(emailAccount.id);
      await this.leadRepository.markFailedForRetry({
        leadId: lead.id,
        attemptCount: lead.attemptCount + 1,
        maxRetryAttempts: campaign.maxRetryAttempts
      });
      await this.sendLogRepository.create({
        campaignId: campaign.id,
        leadId: lead.id,
        emailAccountId: emailAccount.id,
        status: "rate_limited",
        responseCode: String(result.statusCode),
        responseBody: result.responseBody,
        errorMessage: "Gmail rate limit reached. Campaign paused and account disabled"
      });
      logger.warn("Campaign paused due to Gmail rate limit", { campaignId: campaign.id, emailAccountId: emailAccount.id });
      return;
    }

    if (result.authExpired) {
      const refreshed = await this.gmailGateway.refreshToken(refreshToken);
      if (!refreshed) {
        await this.emailAccountRepository.disable(emailAccount.id);
        await this.campaignRepository.setStatus(campaign.id, "error");
      } else {
        await this.emailAccountRepository.updateTokens({
          accountId: emailAccount.id,
          accessTokenEncrypted: encrypt(refreshed.accessToken),
          refreshTokenEncrypted: encrypt(refreshed.refreshToken),
          tokenExpiry: refreshed.tokenExpiry
        });
      }
    }

    await this.leadRepository.markFailedForRetry({
      leadId: lead.id,
      attemptCount: lead.attemptCount + 1,
      maxRetryAttempts: campaign.maxRetryAttempts
    });
    await this.sendLogRepository.create({
      campaignId: campaign.id,
      leadId: lead.id,
      emailAccountId: emailAccount.id,
      status: "failure",
      responseCode: String(result.statusCode),
      responseBody: result.responseBody,
      errorMessage: "Failed to send via Gmail"
    });
  }
}
