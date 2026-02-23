import { CampaignRepository, LeadRepository } from "../../domain/ports/repositories";
import { extractVariables } from "./templateEngine";

export class CampaignService {
  constructor(
    private readonly campaignRepository: CampaignRepository,
    private readonly leadRepository: LeadRepository
  ) {}

  async createCampaign(input: {
    userId: string;
    emailAccountId: string;
    name: string;
    subjectTemplate: string;
    bodyTemplate: string;
    dailyLimit: number;
    delayMinSeconds: number;
    delayMaxSeconds: number;
    maxRetryAttempts: number;
  }) {
    const requiredVariables = [...new Set([...extractVariables(input.subjectTemplate), ...extractVariables(input.bodyTemplate)])];
    return this.campaignRepository.create({
      ...input,
      requiredVariables,
      status: "draft"
    });
  }

  async addLead(input: {
    campaignId: string;
    companyName: string;
    email: string;
    customFields: Record<string, string>;
  }) {
    return this.leadRepository.createOne({
      campaignId: input.campaignId,
      companyName: input.companyName,
      email: input.email,
      customFields: input.customFields,
      status: "pending",
      attemptCount: 0,
      lastAttemptAt: null,
      nextRetryAt: null,
      sentAt: null
    });
  }

  async uploadLeads(campaignId: string, leads: Array<{ companyName: string; email: string; customFields: Record<string, string> }>) {
    await this.leadRepository.createMany(
      leads.map((lead) => ({
        campaignId,
        companyName: lead.companyName,
        email: lead.email,
        customFields: lead.customFields,
        status: "pending",
        attemptCount: 0,
        lastAttemptAt: null,
        nextRetryAt: null,
        sentAt: null
      }))
    );
  }

  async setCampaignStatus(input: { campaignId: string; action: "start" | "pause" | "resume" }) {
    const campaign = await this.campaignRepository.findById(input.campaignId);
    if (!campaign) {
      throw new Error("Campaign not found");
    }
    if (input.action === "start") {
      await this.campaignRepository.setStatus(campaign.id, "running");
      return;
    }
    if (input.action === "pause") {
      await this.campaignRepository.setStatus(campaign.id, "paused");
      return;
    }
    await this.campaignRepository.setStatus(campaign.id, "running");
  }
}
