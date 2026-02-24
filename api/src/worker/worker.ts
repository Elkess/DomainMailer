import { CampaignStatus, GmailAccountStatus, LeadStatus, Prisma } from "@prisma/client";
import { env } from "../config/env";
import { logger } from "../lib/logger";
import { prisma } from "../lib/prisma";
import { decrypt, encrypt } from "../lib/security";
import { gmailService } from "../services/gmailService";
import { campaignEvents } from "../lib/eventEmitter";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const nowStartOfDay = () => new Date(new Date().setHours(0, 0, 0, 0));
const oneMinuteAgo = () => new Date(Date.now() - 60_000);

const randomDelayMs = (minSeconds: number, maxSeconds: number): number => {
  const min = Math.max(0, minSeconds);
  const max = Math.max(min, maxSeconds);
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
};;

const retryDelayMs = (attemptCount: number): number => {
  const seconds = Math.min(3600, Math.pow(2, Math.max(1, attemptCount)));
  return seconds * 1000;
};

const canRetry = (lead: { attemptCount: number; lastAttemptAt: Date | null }): boolean => {
  if (!lead.lastAttemptAt) {
    return true;
  }
  const nextAt = lead.lastAttemptAt.getTime() + retryDelayMs(lead.attemptCount);
  return Date.now() >= nextAt;
};

const isCampaignAllowedNow = (campaign: { startTime: Date | null }): boolean => {
  if (!campaign.startTime) {
    return true;
  }
  return campaign.startTime.getTime() <= Date.now();
};

const getRemainingSlots = async (campaign: { id: string; userId: string; dailyLimit: number }) => {
  const [campaignSentToday, userSentToday, globalSentToday, minuteSent] = await Promise.all([
    prisma.emailLog.count({ where: { campaignId: campaign.id, status: "sent", createdAt: { gte: nowStartOfDay() } } }),
    prisma.emailLog.count({ where: { userId: campaign.userId, status: "sent", createdAt: { gte: nowStartOfDay() } } }),
    prisma.emailLog.count({ where: { status: "sent", createdAt: { gte: nowStartOfDay() } } }),
    prisma.emailLog.count({ where: { status: "sent", createdAt: { gte: oneMinuteAgo() } } })
  ]);

  const campaignRemaining = Math.max(0, campaign.dailyLimit - campaignSentToday);
  const userRemaining = Math.max(0, env.USER_DAILY_MAX_LIMIT - userSentToday);
  const globalRemaining = Math.max(0, env.GLOBAL_DAILY_MAX_LIMIT - globalSentToday);
  const minuteRemaining = Math.max(0, env.PER_MINUTE_MAX_SEND - minuteSent);
  return Math.min(campaignRemaining, userRemaining, globalRemaining, minuteRemaining);
};

const pickNextLead = async (campaign: { id: string; userId: string }) => {
  const pending = await prisma.lead.findFirst({
    where: { campaignId: campaign.id, userId: campaign.userId, status: LeadStatus.PENDING },
    orderBy: { createdAt: "asc" }
  });
  if (pending) {
    return pending;
  }

  const failed = await prisma.lead.findMany({
    where: { campaignId: campaign.id, userId: campaign.userId, status: LeadStatus.FAILED },
    orderBy: { lastAttemptAt: "asc" },
    take: 10
  });

  return failed.find((lead) => canRetry(lead)) ?? null;
};

const processSingleLead = async (campaignId: string): Promise<void> => {
  const campaign = await prisma.campaign.findFirst({
    where: { id: campaignId, status: CampaignStatus.ACTIVE },
    include: { gmailAccount: true }
  });

  if (!campaign || !isCampaignAllowedNow(campaign)) {
    return;
  }

  if (campaign.gmailAccount.status !== GmailAccountStatus.ACTIVE) {
    await prisma.campaign.update({ where: { id: campaign.id }, data: { status: CampaignStatus.FAILED } });
    return;
  }

  const remaining = await getRemainingSlots(campaign);
  if (remaining <= 0) {
    return;
  }

  const lead = await pickNextLead(campaign);
  if (!lead) {
    const openCount = await prisma.lead.count({
      where: {
        campaignId: campaign.id,
        userId: campaign.userId,
        status: { in: [LeadStatus.PENDING, LeadStatus.QUEUED, LeadStatus.SENDING] }
      }
    });
    if (openCount === 0) {
      await prisma.campaign.update({ where: { id: campaign.id }, data: { status: CampaignStatus.COMPLETED } });
    }
    return;
  }

  await prisma.lead.update({ where: { id: lead.id }, data: { status: LeadStatus.SENDING, lastAttemptAt: new Date() } });

  const subject = campaign.subjectTemplate;
  const body = campaign.bodyTemplate;

  let accessToken = campaign.gmailAccount.accessTokenEncrypted ? decrypt(campaign.gmailAccount.accessTokenEncrypted) : "";
  const refreshToken = decrypt(campaign.gmailAccount.refreshTokenEncrypted);
  let expiresAt = campaign.gmailAccount.accessTokenExpiresAt ?? new Date(0);

  if (!accessToken || expiresAt.getTime() <= Date.now() + 60_000) {
    const refreshed = await gmailService.refreshAccessToken(refreshToken);
    if (!refreshed) {
      await prisma.gmailAccount.update({ where: { id: campaign.gmailAccountId }, data: { status: GmailAccountStatus.DISCONNECTED } });
      await prisma.campaign.update({ where: { id: campaign.id }, data: { status: CampaignStatus.FAILED } });
      await prisma.lead.update({ where: { id: lead.id }, data: { status: LeadStatus.FAILED, attemptCount: { increment: 1 } } });
      return;
    }
    accessToken = refreshed.accessToken;
    expiresAt = refreshed.expiresAt;
    await prisma.gmailAccount.update({
      where: { id: campaign.gmailAccountId },
      data: {
        accessTokenEncrypted: encrypt(accessToken),
        accessTokenExpiresAt: expiresAt
      }
    });
  }

  const response = await gmailService.sendMail({
    accessToken,
    refreshToken,
    expiresAt,
    from: campaign.gmailAccount.email,
    to: lead.email,
    subject,
    body
  });

  if (response.ok) {
    await prisma.lead.update({
      where: { id: lead.id },
      data: { status: LeadStatus.SENT, sentAt: new Date(), attemptCount: { increment: 1 } }
    });
    await prisma.emailLog.create({
      data: {
        userId: campaign.userId,
        campaignId: campaign.id,
        leadId: lead.id,
        gmailAccountId: campaign.gmailAccountId,
        status: "sent",
        providerCode: String(response.statusCode),
        providerBody: response.body,
        bounceStatus: "pending"
      }
    });
    
    // Emit event for real-time update
    logger.info(`📤 Emitting campaign update event: campaignId=${campaign.id}, userId=${campaign.userId}`);
    await campaignEvents.emitCampaignUpdate(campaign.id, campaign.userId);
    
    await sleep(randomDelayMs(campaign.delayMinSeconds, campaign.delayMaxSeconds));
    return;
  }

  const updateData: Prisma.CampaignUpdateInput = { failureCount: { increment: 1 } };
  if (response.rateLimited) {
    updateData.status = CampaignStatus.PAUSED;
    await prisma.gmailAccount.update({ where: { id: campaign.gmailAccountId }, data: { status: GmailAccountStatus.RATE_LIMITED } });
  }
  await prisma.campaign.update({ where: { id: campaign.id }, data: updateData });

  const campaignAfter = await prisma.campaign.findUnique({ where: { id: campaign.id } });
  if ((campaignAfter?.failureCount ?? 0) >= env.CAMPAIGN_FAILURE_PAUSE_THRESHOLD) {
    await prisma.campaign.update({ where: { id: campaign.id }, data: { status: CampaignStatus.PAUSED } });
  }

  await prisma.lead.update({ where: { id: lead.id }, data: { status: LeadStatus.FAILED, attemptCount: { increment: 1 } } });
  await prisma.emailLog.create({
    data: {
      userId: campaign.userId,
      campaignId: campaign.id,
      leadId: lead.id,
      gmailAccountId: campaign.gmailAccountId,
      status: "failed",
      providerCode: String(response.statusCode),
      providerBody: response.body,
      errorMessage: response.rateLimited ? "Gmail 429 rate limit" : "Send failed",
      bounceStatus: "pending"
    }
  });

  // Emit event for real-time update on failure too
  logger.info(`📤 Emitting campaign update event (failed): campaignId=${campaign.id}, userId=${campaign.userId}`);
  await campaignEvents.emitCampaignUpdate(campaign.id, campaign.userId);

  await sleep(randomDelayMs(campaign.delayMinSeconds, campaign.delayMaxSeconds));
};

let running = true;

const runLoop = async (): Promise<void> => {
  logger.info("✅ Worker started in DB polling mode");
  logger.info("📡 Using PostgreSQL for cross-process events");
  
  while (running) {
    try {
      const activeCampaigns = await prisma.campaign.findMany({ where: { status: CampaignStatus.ACTIVE }, select: { id: true } });
      for (const campaign of activeCampaigns) {
        if (!running) {
          break;
        }
        await processSingleLead(campaign.id);
      }
      await sleep(2000);
    } catch (error: any) {
      logger.error("Worker loop error", { error: error.message });
      await sleep(3000);
    }
  }
};

const shutdown = async () => {
  logger.info("⚠️  Shutting down worker...");
  running = false;
  await campaignEvents.close();
  await prisma.$disconnect();
  logger.info("✅ Worker shutdown complete");
  process.exit(0);
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

runLoop().catch((error: Error) => {
  logger.error("Worker failed to start", { error: error.message });
  process.exit(1);
});
