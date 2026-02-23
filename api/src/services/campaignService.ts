import { CampaignStatus, LeadStatus, Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";
import { dedupeLeadsByEmail, parseLeadCsv } from "../lib/csv";

export const campaignService = {
  async createCampaign(input: {
    userId: string;
    gmailAccountId: string;
    name: string;
    subjectTemplate: string;
    bodyTemplate: string;
    dailyLimit: number;
    delayMinSeconds: number;
    delayMaxSeconds: number;
    startTime?: Date;
  }) {
    const account = await prisma.gmailAccount.findFirst({
      where: { id: input.gmailAccountId, userId: input.userId, status: "ACTIVE" }
    });
    if (!account) {
      throw new Error("Selected Gmail account is not available");
    }

    return prisma.campaign.create({
      data: {
        userId: input.userId,
        gmailAccountId: input.gmailAccountId,
        name: input.name,
        subjectTemplate: input.subjectTemplate,
        bodyTemplate: input.bodyTemplate,
        requiredVariables: [],
        dailyLimit: input.dailyLimit,
        delayMinSeconds: input.delayMinSeconds,
        delayMaxSeconds: input.delayMaxSeconds,
        startTime: input.startTime,
        status: CampaignStatus.DRAFT
      }
    });
  },

  async listCampaigns(userId: string) {
    return prisma.campaign.findMany({
      where: { userId },
      include: {
        _count: {
          select: {
            leads: true
          }
        }
      },
      orderBy: { createdAt: "desc" }
    });
  },

  async updateStatus(input: { userId: string; campaignId: string; action: "start" | "pause" | "resume" | "delete" }) {
    const campaign = await prisma.campaign.findFirst({ where: { id: input.campaignId, userId: input.userId } });
    if (!campaign) {
      throw new Error("Campaign not found");
    }

    if (input.action === "delete") {
      await prisma.campaign.delete({ where: { id: campaign.id } });
      return;
    }

    const status = input.action === "pause" ? CampaignStatus.PAUSED : CampaignStatus.ACTIVE;
    await prisma.campaign.update({ where: { id: campaign.id }, data: { status } });
  },

  async uploadLeads(input: { userId: string; campaignId: string; csv: string }) {
    const campaign = await prisma.campaign.findFirst({ where: { id: input.campaignId, userId: input.userId } });
    if (!campaign) {
      throw new Error("Campaign not found");
    }

    const leads = dedupeLeadsByEmail(parseLeadCsv(input.csv));
    const existingLeads = await prisma.lead.findMany({
      where: { campaignId: input.campaignId, userId: input.userId },
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
      await prisma.lead.createMany({
        data: leadsToInsert.map((lead) => ({
          userId: input.userId,
          campaignId: input.campaignId,
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
    const campaign = await prisma.campaign.findFirst({ where: { id: input.campaignId, userId: input.userId } });
    if (!campaign) {
      throw new Error("Campaign not found");
    }

    const lead = await prisma.lead.findFirst({ where: { id: input.leadId, userId: input.userId, campaignId: input.campaignId } });
    if (!lead) {
      throw new Error("Lead not found");
    }

    return {
      subject: campaign.subjectTemplate,
      body: campaign.bodyTemplate
    };
  }
};
