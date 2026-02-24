import { CampaignStatus, LeadStatus, Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";
import { dedupeLeadsByEmail, parseLeadCsv } from "../lib/csv";

export const campaignService = {
  async createCampaign(input: {
    userId: string;
    gmailAccountId: string;
    name: string;
    subject_template: string;
    body_template: string;
    daily_limit: number;
    delay_min_seconds: number;
    delay_max_seconds: number;
    startTime?: Date;
    followUp2Body?: string;
    followUp2DelayHours?: number;
    followUp3Body?: string;
    followUp3DelayHours?: number;
    followUp4Body?: string;
    followUp4DelayHours?: number;
  }) {
    const account = await prisma.gmail_accounts.findFirst({
      where: { id: input.gmailAccountId, user_id: input.userId, status: "ACTIVE" }
    });
    if (!account) {
      throw new Error("Selected Gmail account is not available");
    }

    // If campaign has a scheduled startTime, set it to ACTIVE immediately
    // The worker will check if it's time to start sending via isCampaignAllowedNow()
    const status = input.startTime ? CampaignStatus.ACTIVE : CampaignStatus.DRAFT;

    return prisma.campaigns.create({
      data: {
        user_id: input.userId,
        gmail_account_id: input.gmailAccountId,
        name: input.name,
        subject_template: input.subjectTemplate,
        body_template: input.bodyTemplate,
        required_variables: [],
        daily_limit: input.dailyLimit,
        delay_min_seconds: input.delayMinSeconds,
        delay_max_seconds: input.delayMaxSeconds,
        start_time: input.startTime,
        follow_up2_body: input.followUp2Body,
        follow_up2_delay_hours: input.followUp2DelayHours,
        follow_up3_body: input.followUp3Body,
        follow_up3_delay_hours: input.followUp3DelayHours,
        follow_up4_body: input.followUp4Body,
        follow_up4_delay_hours: input.followUp4DelayHours,
        status
      }
    });
  },

  async listCampaigns(userId: string) {
    return prisma.campaigns.findMany({
      where: { user_id: userId },
      include: {
        _count: {
          select: {
            leads: true
          }
        }
      },
      orderBy: { created_at: "desc" }
    });
  },

  async updateStatus(input: { userId: string; campaignId: string; action: "start" | "pause" | "resume" | "delete" }) {
    const campaign = await prisma.campaigns.findFirst({ where: { id: input.campaignId, user_id: input.userId } });
    if (!campaign) {
      throw new Error("Campaign not found");
    }

    if (input.action === "delete") {
      await prisma.campaigns.delete({ where: { id: campaign.id } });
      return;
    }

    const status = input.action === "pause" ? CampaignStatus.PAUSED : CampaignStatus.ACTIVE;
    await prisma.campaigns.update({ where: { id: campaign.id }, data: { status } });
  },

  async uploadLeads(input: { userId: string; campaignId: string; csv: string }) {
    const campaign = await prisma.campaigns.findFirst({ where: { id: input.campaignId, user_id: input.userId } });
    if (!campaign) {
      throw new Error("Campaign not found");
    }

    const leads = dedupeLeadsByEmail(parseLeadCsv(input.csv));
    const existingLeads = await prisma.leads.findMany({
      where: { campaign_id: input.campaignId, user_id: input.userId },
      select: { email: true }
    });
    const existingEmails = new Set(existingLeads.map((lead) => lead.email.trim().toLowerCase()));
    const leadsToInsert = leads.filter((lead) => {
      const normalizedEmail = lead.email.trim().toLowerCase();
      if (existingEmails.has(normalizedEmail)) {
        return false;
      }
      existingEmails.add(normalizedEmail);
      return true;
    });

    if (leadsToInsert.length > 0) {
      await prisma.leads.createMany({
        data: leadsToInsert.map((lead) => ({
          userId: input.userId,
          campaign_id: input.campaignId,
          companyName: lead.companyName,
          domainName: lead.domainName,
          firstName: lead.firstName,
          email: lead.email,
          customFields: lead.customFields,
          status: LeadStatus.PENDING
        }))
      });
    }

    return { inserted: leadsToInsert.length };
  },

  async previewTemplate(input: { userId: string; campaignId: string; leadId: string }) {
    const campaign = await prisma.campaigns.findFirst({ where: { id: input.campaignId, user_id: input.userId } });
    if (!campaign) {
      throw new Error("Campaign not found");
    }

    const lead = await prisma.leads.findFirst({ where: { id: input.leadId, user_id: input.userId, campaign_id: input.campaignId } });
    if (!lead) {
      throw new Error("Lead not found");
    }

    return {
      subject: campaign.subject_template,
      body: campaign.body_template
    };
  }
};

