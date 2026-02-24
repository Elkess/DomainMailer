import { CampaignStatus, GmailAccountStatus, LeadStatus, Prisma } from "@prisma/client";
import { randomUUID } from "crypto";
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

const isCampaignAllowedNow = (campaign: { start_time: Date | null }): boolean => {
  if (!campaign.start_time) {
    return true;
  }
  return campaign.start_time.getTime() <= Date.now();
};

const getRemainingSlots = async (campaign: { id: string; user_id: string; daily_limit: number }) => {
  const [campaignSentToday, userSentToday, globalSentToday, minuteSent] = await Promise.all([
    prisma.email_logs.count({ where: { campaign_id: campaign.id, status: "sent", created_at: { gte: nowStartOfDay() } } }),
    prisma.email_logs.count({ where: { user_id: campaign.user_id, status: "sent", created_at: { gte: nowStartOfDay() } } }),
    prisma.email_logs.count({ where: { status: "sent", created_at: { gte: nowStartOfDay() } } }),
    prisma.email_logs.count({ where: { status: "sent", created_at: { gte: oneMinuteAgo() } } })
  ]);

  const campaignRemaining = Math.max(0, campaign.daily_limit - campaignSentToday);
  const userRemaining = Math.max(0, env.USER_DAILY_MAX_LIMIT - userSentToday);
  const globalRemaining = Math.max(0, env.GLOBAL_DAILY_MAX_LIMIT - globalSentToday);
  const minuteRemaining = Math.max(0, env.PER_MINUTE_MAX_SEND - minuteSent);
  return Math.min(campaignRemaining, userRemaining, globalRemaining, minuteRemaining);
};

const pickNextLead = async (campaign: { id: string; user_id: string }) => {
  const pending = await prisma.leads.findFirst({
    where: { campaign_id: campaign.id, user_id: campaign.user_id, status: LeadStatus.PENDING },
    orderBy: { created_at: "asc" }
  });
  if (pending) {
    return pending;
  }

  // Retry failed leads
  const failed = await prisma.leads.findFirst({
    where: { campaign_id: campaign.id, user_id: campaign.user_id, status: LeadStatus.FAILED },
    orderBy: { created_at: "asc" }
  });

  return failed ?? null;
};

const processSingleLead = async (campaignId: string): Promise<void> => {
  const campaign = await prisma.campaigns.findFirst({
    where: { id: campaignId, status: CampaignStatus.ACTIVE },
    include: { gmail_accounts: true }
  });

  if (!campaign || !isCampaignAllowedNow(campaign)) {
    return;
  }

  if (campaign.gmail_accounts.status !== GmailAccountStatus.ACTIVE) {
    await prisma.campaigns.update({ where: { id: campaign.id }, data: { status: CampaignStatus.PAUSED } });
    return;
  }

  const remaining = await getRemainingSlots(campaign);
  if (remaining <= 0) {
    return;
  }

  const lead = await pickNextLead(campaign);
  if (!lead) {
    const openCount = await prisma.leads.count({
      where: {
        campaign_id: campaign.id,
        user_id: campaign.user_id,
        status: { in: [LeadStatus.PENDING, LeadStatus.QUEUED, LeadStatus.SENDING] }
      }
    });
    if (openCount === 0) {
      await prisma.campaigns.update({ where: { id: campaign.id }, data: { status: CampaignStatus.COMPLETED } });
    }
    return;
  }

  await prisma.leads.update({ where: { id: lead.id }, data: { status: LeadStatus.SENDING } });

  const subject = campaign.subject_template;
  const body = campaign.body_template;

  let accessToken = campaign.gmail_accounts.access_token_encrypted ? decrypt(campaign.gmail_accounts.access_token_encrypted) : "";
  const refreshToken = decrypt(campaign.gmail_accounts.refresh_token_encrypted);
  let expiresAt = campaign.gmail_accounts.access_token_expires_at ?? new Date(0);

  if (!accessToken || expiresAt.getTime() <= Date.now() + 60_000) {
    const refreshed = await gmailService.refreshAccessToken(refreshToken);
    if (!refreshed) {
      await prisma.gmail_accounts.update({ where: { id: campaign.gmail_account_id }, data: { status: GmailAccountStatus.ERROR } });
      await prisma.campaigns.update({ where: { id: campaign.id }, data: { status: CampaignStatus.PAUSED } });
      await prisma.leads.update({ where: { id: lead.id }, data: { status: LeadStatus.FAILED } });
      return;
    }
    accessToken = refreshed.accessToken;
    expiresAt = refreshed.expiresAt;
    await prisma.gmail_accounts.update({
      where: { id: campaign.gmail_account_id },
      data: {
        access_token_encrypted: encrypt(accessToken),
        access_token_expires_at: expiresAt
      }
    });
  }

  const response = await gmailService.sendMail({
    accessToken,
    refreshToken,
    expiresAt,
    from: campaign.gmail_accounts.email,
    to: lead.email,
    subject,
    body
  });

  if (response.ok) {
    await prisma.leads.update({
      where: { id: lead.id },
      data: { status: LeadStatus.SENT, sent_at: new Date() }
    });
    await prisma.email_logs.create({
      data: {
        id: randomUUID(),
        user_id: campaign.user_id,
        campaign_id: campaign.id,
        lead_id: lead.id,
        gmail_account_id: campaign.gmail_account_id,
        subject: subject,
        body: body,
        status: "sent",
        bounce_status: "pending"
      }
    });
    
    // Emit event for real-time update
    logger.info(`📤 Emitting campaign update event: campaignId=${campaign.id}, userId=${campaign.user_id}`);
    await campaignEvents.emitCampaignUpdate(campaign.id, campaign.user_id);
    return;
  }

  const updateData: Prisma.campaignsUpdateInput = { failure_count: { increment: 1 } };
  if (response.rateLimited) {
    updateData.status = CampaignStatus.PAUSED;
    await prisma.gmail_accounts.update({ where: { id: campaign.gmail_account_id }, data: { status: GmailAccountStatus.ERROR } });
  }
  await prisma.campaigns.update({ where: { id: campaign.id }, data: updateData });

  const campaignAfter = await prisma.campaigns.findUnique({ where: { id: campaign.id } });
  if ((campaignAfter?.failure_count ?? 0) >= env.CAMPAIGN_FAILURE_PAUSE_THRESHOLD) {
    await prisma.campaigns.update({ where: { id: campaign.id }, data: { status: CampaignStatus.PAUSED } });
  }

  await prisma.leads.update({ where: { id: lead.id }, data: { status: LeadStatus.FAILED } });
  await prisma.email_logs.create({
    data: {
      id: randomUUID(),
      user_id: campaign.user_id,
      campaign_id: campaign.id,
      lead_id: lead.id,
      gmail_account_id: campaign.gmail_account_id,
      subject: subject,
      body: body,
      status: "failed",
      error_message: response.rateLimited ? "Gmail 429 rate limit" : "Send failed",
      bounce_status: "pending"
    }
  });

  // Emit event for real-time update on failure too
  logger.info(`📤 Emitting campaign update event (failed): campaignId=${campaign.id}, userId=${campaign.user_id}`);
  await campaignEvents.emitCampaignUpdate(campaign.id, campaign.user_id);
};

let running = true;

// Shuffle array helper for randomization
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const runLoop = async (): Promise<void> => {
  logger.info("✅ Worker started in DB polling mode");
  logger.info("📡 Using PostgreSQL for cross-process events");
  logger.info("🎲 Using randomized campaign processing to avoid sending patterns");
  
  while (running) {
    try {
      const activeCampaigns = await prisma.campaigns.findMany({ 
        where: { status: CampaignStatus.ACTIVE }, 
        select: { id: true, delay_min_seconds: true, delay_max_seconds: true } 
      });
      
      if (activeCampaigns.length === 0) {
        await sleep(5000);
        continue;
      }
      
      // Shuffle campaigns to randomize which one sends first
      const shuffledCampaigns = shuffleArray(activeCampaigns);
      
      // Process only ONE lead from ONE random campaign per iteration
      // This ensures emails are spaced out and never sent all at once
      const campaign = shuffledCampaigns[0];
      if (running) {
        await processSingleLead(campaign.id);
        
        // Add random delay between iterations (3-8 seconds by default)
        // This ensures different campaigns don't fire at predictable times
        const minDelay = Math.max(3, campaign.delay_min_seconds);
        const maxDelay = Math.max(minDelay + 5, campaign.delay_max_seconds);
        const randomWait = randomDelayMs(minDelay, maxDelay);
        await sleep(randomWait);
      }
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
