import { Campaign, EmailAccount, Lead } from "../entities/types";

export interface EmailAccountRepository {
  create(input: {
    userId: string;
    email: string;
    accessTokenEncrypted: string;
    refreshTokenEncrypted: string;
    tokenExpiry: Date;
  }): Promise<EmailAccount>;
  findById(id: string): Promise<EmailAccount | null>;
  updateTokens(input: {
    accountId: string;
    accessTokenEncrypted: string;
    refreshTokenEncrypted: string;
    tokenExpiry: Date;
  }): Promise<void>;
  disable(id: string): Promise<void>;
  listByUser(userId: string): Promise<EmailAccount[]>;
}

export interface CampaignRepository {
  create(input: Omit<Campaign, "id" | "createdAt" | "updatedAt">): Promise<Campaign>;
  findById(id: string): Promise<Campaign | null>;
  setStatus(id: string, status: Campaign["status"]): Promise<void>;
  listByUser(userId: string): Promise<Campaign[]>;
  fetchNextRunnableCampaign(): Promise<Campaign | null>;
  getSentCountToday(campaignId: string): Promise<number>;
  getCounts(campaignId: string): Promise<{ pending: number; sending: number; sent: number; failed: number }>;
  getDashboardSummary(userId: string): Promise<{
    totalCampaigns: number;
    activeCampaigns: number;
    sentToday: number;
    successRate: number;
    failedLeads: number;
  }>;
}

export interface LeadRepository {
  createMany(input: Array<Omit<Lead, "id" | "createdAt" | "updatedAt">>): Promise<void>;
  createOne(input: Omit<Lead, "id" | "createdAt" | "updatedAt">): Promise<Lead>;
  updateOne(input: {
    leadId: string;
    companyName: string;
    email: string;
    customFields: Record<string, string>;
  }): Promise<void>;
  deleteOne(leadId: string): Promise<void>;
  reserveNextLeadForSending(input: {
    campaignId: string;
    maxRetryAttempts: number;
  }): Promise<Lead | null>;
  markSent(leadId: string): Promise<void>;
  markFailedForRetry(input: {
    leadId: string;
    attemptCount: number;
    maxRetryAttempts: number;
  }): Promise<void>;
  recoverStuckSendingLeads(): Promise<number>;
}

export interface SendLogRepository {
  create(input: {
    campaignId: string;
    leadId: string;
    emailAccountId: string;
    status: "success" | "failure" | "rate_limited";
    responseCode: string | null;
    responseBody: string | null;
    errorMessage: string | null;
  }): Promise<void>;
}
