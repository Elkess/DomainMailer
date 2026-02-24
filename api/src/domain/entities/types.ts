export type CampaignStatus = "draft" | "running" | "paused" | "completed" | "error";
export type LeadStatus = "pending" | "sending" | "sent" | "failed";
export type EmailAccountStatus = "active" | "disabled";

export interface EmailAccount {
  id: string;
  userId: string;
  email: string;
  accessTokenEncrypted: string;
  refreshTokenEncrypted: string;
  tokenExpiry: Date;
  status: EmailAccountStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface Campaign {
  id: string;
  userId: string;
  emailAccountId: string;
  name: string;
  subjectTemplate: string;
  bodyTemplate: string;
  requiredVariables: string[];
  dailyLimit: number;
  delayMinSeconds: number;
  delayMaxSeconds: number;
  maxRetryAttempts: number;
  status: CampaignStatus;
  startTime?: Date | null;
  followUp2Body?: string | null;
  followUp2DelayHours?: number | null;
  followUp3Body?: string | null;
  followUp3DelayHours?: number | null;
  followUp4Body?: string | null;
  followUp4DelayHours?: number | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Lead {
  id: string;
  campaignId: string;
  companyName: string;
  email: string;
  customFields: Record<string, string>;
  status: LeadStatus;
  attemptCount: number;
  lastAttemptAt: Date | null;
  nextRetryAt: Date | null;
  sentAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface SendLog {
  id: string;
  campaignId: string;
  leadId: string;
  emailAccountId: string;
  status: "success" | "failure" | "rate_limited";
  responseCode: string | null;
  responseBody: string | null;
  errorMessage: string | null;
  createdAt: Date;
}
