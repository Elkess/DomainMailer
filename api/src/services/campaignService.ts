import { Prisma } from "../generated/client";
import { randomUUID } from "crypto";
import { prisma } from "../lib/prisma";
import { dedupeLeadsByEmail, parseLeadCsv } from "../lib/csv";

// Use strings instead of Prisma enums for SQLite compatibility
const CampaignStatus = { DRAFT: 'DRAFT', ACTIVE: 'ACTIVE', PAUSED: 'PAUSED', COMPLETED: 'COMPLETED' } as const;
const LeadStatus = { PENDING: 'PENDING', QUEUED: 'QUEUED', SENDING: 'SENDING', SENT: 'SENT', FAILED: 'FAILED' } as const;

const mapCampaign = (campaign: {
  id: string;
  name: string;
  status: string | null;
  daily_limit: number;
  start_time: Date | null;
  subject_template: string;
  body_template: string;
  delay_min_seconds: number;
  delay_max_seconds: number;
  follow_up2_body: string | null;
  follow_up2_delay_hours: number | null;
  follow_up3_body: string | null;
  follow_up3_delay_hours: number | null;
  follow_up4_body: string | null;
  follow_up4_delay_hours: number | null;
  gmail_accounts: { email: string; status: string | null };
}) => ({
  id: campaign.id,
  name: campaign.name,
  status: campaign.status,
  dailyLimit: campaign.daily_limit,
  startTime: campaign.start_time?.toISOString() || null,
  subjectTemplate: campaign.subject_template,
  bodyTemplate: campaign.body_template,
  delayMinSeconds: campaign.delay_min_seconds,
  delayMaxSeconds: campaign.delay_max_seconds,
  followUp2Body: campaign.follow_up2_body,
  followUp2DelayHours: campaign.follow_up2_delay_hours,
  followUp3Body: campaign.follow_up3_body,
  followUp3DelayHours: campaign.follow_up3_delay_hours,
  followUp4Body: campaign.follow_up4_body,
  followUp4DelayHours: campaign.follow_up4_delay_hours,
  gmailAccountEmail: campaign.gmail_accounts.email,
  gmailAccountStatus: campaign.gmail_accounts.status
});

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
    follow_up2_body?: string;
    follow_up2_delay_hours?: number;
    follow_up3_body?: string;
    follow_up3_delay_hours?: number;
    follow_up4_body?: string;
    follow_up4_delay_hours?: number;
  }) {
    const account = await prisma.gmail_accounts.findFirst({
      where: { id: input.gmailAccountId, user_id: input.userId, status: "ACTIVE" }
    });
    if (!account) {
      throw new Error("Selected Gmail account is not available");
    }

    // Always create as DRAFT first. The frontend will activate after all leads are loaded.
    const status = CampaignStatus.DRAFT;

    const campaign = await prisma.campaigns.create({
      data: {
        id: randomUUID(),
        user_id: input.userId,
        gmail_account_id: input.gmailAccountId,
        name: input.name,
        subject_template: input.subject_template,
        body_template: input.body_template,
        required_variables: JSON.stringify([]),
        daily_limit: input.daily_limit,
        delay_min_seconds: input.delay_min_seconds,
        delay_max_seconds: input.delay_max_seconds,
        start_time: input.startTime,
        follow_up2_body: input.follow_up2_body,
        follow_up2_delay_hours: input.follow_up2_delay_hours,
        follow_up3_body: input.follow_up3_body,
        follow_up3_delay_hours: input.follow_up3_delay_hours,
        follow_up4_body: input.follow_up4_body,
        follow_up4_delay_hours: input.follow_up4_delay_hours,
        status
      },
      include: {
        gmail_accounts: {
          select: {
            email: true,
            status: true
          }
        }
      }
    });

    return mapCampaign(campaign as any);
  },

  async listCampaigns(userId: string) {
    const campaigns = await prisma.campaigns.findMany({
      where: { user_id: userId },
      select: {
        id: true,
        name: true,
        status: true,
        daily_limit: true,
        start_time: true,
        subject_template: true,
        body_template: true,
        delay_min_seconds: true,
        delay_max_seconds: true,
        gmail_accounts: {
          select: {
            email: true,
            status: true
          }
        },
        follow_up2_body: true,
        follow_up2_delay_hours: true,
        follow_up3_body: true,
        follow_up3_delay_hours: true,
        follow_up4_body: true,
        follow_up4_delay_hours: true,
        _count: {
          select: {
            leads: true
          }
        }
      },
      orderBy: { created_at: "desc" }
    });

    // Map snake_case fields to camelCase for frontend
    return campaigns.map((campaign) => ({
      ...mapCampaign(campaign as any),
      _count: campaign._count
    }));
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
          id: randomUUID(),
          user_id: input.userId,
          campaign_id: input.campaignId,
          company_name: lead.companyName,
          domain_name: lead.domainName,
          first_name: lead.firstName,
          email: lead.email,
          custom_fields: JSON.stringify(lead.customFields),
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

