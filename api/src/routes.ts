import { Router } from "express";
import { z } from "zod";
import { requireAuth } from "./lib/auth";
import { env } from "./config/env";
import { authService } from "./services/authService";
import { campaignService } from "./services/campaignService";
import { dashboardService } from "./services/dashboardService";
import { gmailAccountService } from "./services/gmailAccountService";
import { googleSheetsService } from "./services/googleSheetsService";
import { dedupeLeadsByEmail, parseSheetData } from "./lib/csv";
import { prisma } from "./lib/prisma";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

const loginSchema = registerSchema;

const createCampaignSchema = z.object({
  gmailAccountId: z.string().uuid(),
  name: z.string().min(1),
  subjectTemplate: z.string().min(1),
  bodyTemplate: z.string().min(1),
  dailyLimit: z.number().int().positive(),
  delayMinSeconds: z.number().int().min(0),
  delayMaxSeconds: z.number().int().min(0),
  startTime: z.string().datetime().optional()
});

const campaignActionSchema = z.object({
  campaignId: z.string().uuid(),
  action: z.enum(["start", "pause", "resume", "delete"])
});

const uploadLeadsSchema = z.object({
  campaignId: z.string().uuid(),
  csv: z.string().min(1)
});

const importGoogleSheetSchema = z.object({
  campaignId: z.string().uuid(),
  gmailAccountId: z.string().uuid(),
  sheetUrl: z.string().min(1),
  range: z.string().optional()
});

const addLeadSchema = z.object({
  campaignId: z.string().uuid(),
  email: z.string().email()
});

const deleteLeadSchema = z.object({
  leadId: z.string().uuid()
});

const previewSchema = z.object({
  campaignId: z.string().uuid(),
  leadId: z.string().uuid()
});

const gmailConnectSchema = z.object({
  code: z.string().min(1)
});

const gmailDisconnectSchema = z.object({
  accountId: z.string().uuid()
});

const parse = <T>(schema: z.ZodType<T>, body: unknown): T => {
  const result = schema.safeParse(body);
  if (!result.success) {
    throw new Error("Invalid payload");
  }
  return result.data;
};

export const createRoutes = () => {
  const router = Router();

  router.get("/health", (_req, res) => {
    res.json({ ok: true });
  });

  router.post("/auth/register", async (req, res) => {
    const input = parse(registerSchema, req.body);
    const output = await authService.register(input);
    await prisma.auditLog.create({
      data: {
        userId: output.user.id,
        action: "auth.register",
        resource: "user",
        resourceId: output.user.id
      }
    });
    res.cookie("token", output.token, { httpOnly: true, sameSite: "lax" });
    res.status(201).json(output);
  });

  router.post("/auth/login", async (req, res) => {
    const input = parse(loginSchema, req.body);
    const output = await authService.login(input);
    await prisma.auditLog.create({
      data: {
        userId: output.user.id,
        action: "auth.login",
        resource: "user",
        resourceId: output.user.id
      }
    });
    res.cookie("token", output.token, { httpOnly: true, sameSite: "lax" });
    res.json(output);
  });

  router.get("/auth/me", requireAuth, async (req, res) => {
    res.json({ user: { id: req.user.userId, email: req.user.email } });
  });

  router.post("/auth/logout", requireAuth, (_req, res) => {
    res.clearCookie("token");
    res.json({ ok: true });
  });

  router.get("/gmail/oauth-url", requireAuth, (req, res) => {
    const url = gmailAccountService.createAuthUrl(req.user.userId);
    res.json({ url });
  });

  router.get("/oauth/gmail/callback", async (req, res) => {
    const code = String(req.query.code ?? "");
    const state = String(req.query.state ?? "");
    if (!code || !state) {
      res.status(400).json({ error: "Missing code or state" });
      return;
    }
    await gmailAccountService.connect(state, code);
    res.redirect(`${env.FRONTEND_URL}/campaigns`);
  });

  router.post("/gmail/connect", requireAuth, async (req, res) => {
    const input = parse(gmailConnectSchema, req.body);
    const account = await gmailAccountService.connect(req.user.userId, input.code);
    await prisma.auditLog.create({
      data: {
        userId: req.user.userId,
        action: "gmail.connect",
        resource: "gmail_account",
        resourceId: account.id
      }
    });
    res.status(201).json({ account });
  });

  router.post("/gmail/disconnect", requireAuth, async (req, res) => {
    const input = parse(gmailDisconnectSchema, req.body);
    await gmailAccountService.disconnect(req.user.userId, input.accountId);
    await prisma.auditLog.create({
      data: {
        userId: req.user.userId,
        action: "gmail.disconnect",
        resource: "gmail_account",
        resourceId: input.accountId
      }
    });
    res.json({ ok: true });
  });

  router.get("/gmail/accounts", requireAuth, async (req, res) => {
    const items = await gmailAccountService.list(req.user.userId);
    res.json({ items });
  });

  router.post("/campaigns", requireAuth, async (req, res) => {
    const input = parse(createCampaignSchema, req.body);
    const campaign = await campaignService.createCampaign({
      userId: req.user.userId,
      gmailAccountId: input.gmailAccountId,
      name: input.name,
      subjectTemplate: input.subjectTemplate,
      bodyTemplate: input.bodyTemplate,
      dailyLimit: input.dailyLimit,
      delayMinSeconds: input.delayMinSeconds,
      delayMaxSeconds: input.delayMaxSeconds,
      startTime: input.startTime ? new Date(input.startTime) : undefined
    });
    await prisma.auditLog.create({
      data: {
        userId: req.user.userId,
        action: "campaign.create",
        resource: "campaign",
        resourceId: campaign.id
      }
    });
    res.status(201).json({ campaign });
  });

  router.get("/campaigns", requireAuth, async (req, res) => {
    const items = await campaignService.listCampaigns(req.user.userId);
    res.json({ items });
  });

  router.post("/campaigns/action", requireAuth, async (req, res) => {
    const input = parse(campaignActionSchema, req.body);
    await campaignService.updateStatus({ userId: req.user.userId, campaignId: input.campaignId, action: input.action });
    await prisma.auditLog.create({
      data: {
        userId: req.user.userId,
        action: `campaign.${input.action}`,
        resource: "campaign",
        resourceId: input.campaignId
      }
    });
    res.json({ ok: true });
  });

  router.post("/leads/upload-csv", requireAuth, async (req, res) => {
    const input = parse(uploadLeadsSchema, req.body);
    const result = await campaignService.uploadLeads({
      userId: req.user.userId,
      campaignId: input.campaignId,
      csv: input.csv
    });
    await prisma.auditLog.create({
      data: {
        userId: req.user.userId,
        action: "leads.upload_csv",
        resource: "campaign",
        resourceId: input.campaignId,
        metadata: {
          inserted: result.inserted
        }
      }
    });
    res.status(201).json(result);
  });
  router.post("/leads/add", requireAuth, async (req, res) => {
    const input = parse(addLeadSchema, req.body);
    const campaign = await prisma.campaign.findFirst({ 
      where: { id: input.campaignId, userId: req.user.userId } 
    });
    if (!campaign) {
      res.status(404).json({ error: "Campaign not found" });
      return;
    }

    const lead = await prisma.lead.create({
      data: {
        userId: req.user.userId,
        campaignId: input.campaignId,
        email: input.email,
        firstName: "",
        companyName: "",
        domainName: "",
        customFields: {},
        status: "PENDING"
      }
    });

    await prisma.auditLog.create({
      data: {
        userId: req.user.userId,
        action: "leads.add_manual",
        resource: "lead",
        resourceId: lead.id,
        metadata: { campaignId: input.campaignId }
      }
    });

    res.status(201).json({ lead });
  });

  router.post("/leads/delete", requireAuth, async (req, res) => {
    const input = parse(deleteLeadSchema, req.body);

    const lead = await prisma.lead.findFirst({
      where: { id: input.leadId, userId: req.user.userId }
    });

    if (!lead) {
      res.status(404).json({ error: "Lead not found" });
      return;
    }

    if (lead.sentAt || lead.status === "SENT" || lead.status === "SENDING") {
      res.status(400).json({ error: "Cannot delete this lead because the email has already been sent or is currently sending" });
      return;
    }

    await prisma.lead.delete({ where: { id: lead.id } });

    await prisma.auditLog.create({
      data: {
        userId: req.user.userId,
        action: "leads.delete",
        resource: "lead",
        resourceId: lead.id,
        metadata: { campaignId: lead.campaignId, email: lead.email }
      }
    });

    res.json({ ok: true });
  });

  router.post("/leads/import-google-sheet", requireAuth, async (req, res) => {
    const input = parse(importGoogleSheetSchema, req.body);
    
    const campaign = await prisma.campaign.findFirst({
      where: { id: input.campaignId, userId: req.user.userId }
    });
    if (!campaign) {
      res.status(404).json({ error: "Campaign not found" });
      return;
    }

    const gmailAccount = await prisma.gmailAccount.findFirst({
      where: { id: input.gmailAccountId, userId: req.user.userId }
    });
    if (!gmailAccount) {
      res.status(404).json({ error: "Gmail account not found" });
      return;
    }

    try {
      const spreadsheetId = googleSheetsService.extractSpreadsheetId(input.sheetUrl);
      const range = input.range || "Sheet1!A:A";
      const rows = await googleSheetsService.readSheet(input.gmailAccountId, spreadsheetId, range);
      
      const leads = dedupeLeadsByEmail(parseSheetData(rows));
      const existingLeads = await prisma.lead.findMany({
        where: { campaignId: input.campaignId, userId: req.user.userId },
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

      const inserted = leadsToInsert.length > 0
        ? await prisma.lead.createMany({
          data: leadsToInsert.map((lead) => ({
            userId: req.user.userId,
            campaignId: input.campaignId,
            email: lead.email,
            firstName: lead.firstName,
            companyName: lead.companyName,
            domainName: lead.domainName,
            customFields: lead.customFields,
            status: "PENDING" as const
          }))
        })
        : { count: 0 };

      await prisma.auditLog.create({
        data: {
          userId: req.user.userId,
          action: "leads.import_google_sheet",
          resource: "campaign",
          resourceId: input.campaignId,
          metadata: {
            inserted: inserted.count,
            spreadsheetId
          }
        }
      });

      res.status(201).json({ inserted: inserted.count });
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to import from Google Sheet" });
    }
  });

  router.get("/campaigns/:campaignId/leads", requireAuth, async (req, res) => {
    const campaignId = String(req.params.campaignId ?? "");
    const campaign = await prisma.campaign.findFirst({
      where: { id: campaignId, userId: req.user.userId }
    });
    if (!campaign) {
      res.status(404).json({ error: "Campaign not found" });
      return;
    }

    const leads = await prisma.lead.findMany({
      where: { campaignId: campaignId },
      select: {
        id: true,
        email: true,
        status: true,
        sentAt: true,
        createdAt: true
      },
      orderBy: { createdAt: "desc" }
    });

    res.json({ leads });
  });

  router.post("/templates/preview", requireAuth, async (req, res) => {
    const input = parse(previewSchema, req.body);
    const preview = await campaignService.previewTemplate({
      userId: req.user.userId,
      campaignId: input.campaignId,
      leadId: input.leadId
    });
    res.json(preview);
  });

  router.get("/dashboard/summary", requireAuth, async (req, res) => {
    const summary = await dashboardService.getSummary(req.user.userId);
    res.json(summary);
  });

  router.get("/campaigns/:campaignId/stats", requireAuth, async (req, res) => {
    const campaignId = String(req.params.campaignId ?? "");
    const campaign = await prisma.campaign.findFirst({
      where: { id: campaignId, userId: req.user.userId },
      include: {
        leads: {
          select: {
            status: true
          }
        }
      }
    });
    if (!campaign) {
      res.status(404).json({ error: "Campaign not found" });
      return;
    }

    const counts = campaign.leads.reduce<Record<string, number>>(
      (acc, lead: { status: string }) => {
        acc[lead.status] = (acc[lead.status] ?? 0) + 1;
        return acc;
      },
      {}
    );

    const pending = (counts.PENDING ?? 0) + (counts.QUEUED ?? 0) + (counts.SENDING ?? 0);
    const sent = counts.SENT ?? 0;
    const failed = counts.FAILED ?? 0;
    const total = pending + sent + failed;
    const progress = total === 0 ? 0 : (sent + failed) / total;
    res.json({ pending, sent, failed, total, progress, status: campaign.status });
  });

  return router;
};
