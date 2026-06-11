import { z } from "zod";

export const disconnectGmailSchema = z.object({
  accountId: z.string().uuid()
});

export const createCampaignSchema = z.object({
  emailAccountId: z.string().uuid(),
  name: z.string().min(1),
  subjectTemplate: z.string().min(1),
  bodyTemplate: z.string().min(1),
  dailyLimit: z.number().int().positive().max(500),
  delayMinSeconds: z.number().int().min(0).max(600),
  delayMaxSeconds: z.number().int().min(0).max(600),
  maxRetryAttempts: z.number().int().min(1).max(10)
});

export const addLeadSchema = z.object({
  campaignId: z.string().uuid(),
  companyName: z.string().min(1),
  email: z.string().email(),
  customFields: z.record(z.string()).default({})
});

export const updateLeadSchema = z.object({
  leadId: z.string().uuid(),
  companyName: z.string().min(1),
  email: z.string().email(),
  customFields: z.record(z.string()).default({})
});

export const deleteLeadSchema = z.object({
  leadId: z.string().uuid()
});

export const campaignActionSchema = z.object({
  campaignId: z.string().uuid(),
  action: z.enum(["start", "pause", "resume"])
});

export const uploadCsvSchema = z.object({
  campaignId: z.string().uuid(),
  csv: z.string().min(1)
});

export const parseLeadsCsv = (csv: string): Array<{ companyName: string; email: string; customFields: Record<string, string> }> => {
  const lines = csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (lines.length < 2) {
    return [];
  }

  const headers = lines[0].split(",").map((h) => h.trim());
  const companyIndex = headers.indexOf("company_name");
  const emailIndex = headers.indexOf("email");

  if (companyIndex === -1 || emailIndex === -1) {
    throw new Error("CSV must include company_name and email columns");
  }

  return lines.slice(1).map((line) => {
    const values = line.split(",").map((v) => v.trim());
    const customFields: Record<string, string> = {};
    headers.forEach((header, index) => {
      if (header !== "company_name" && header !== "email") {
        customFields[header] = values[index] ?? "";
      }
    });
    return {
      companyName: values[companyIndex] ?? "",
      email: values[emailIndex] ?? "",
      customFields
    };
  });
};
