import { Router } from "express";
import { z } from "zod";
import { randomUUID } from "crypto";
import { requireAuth } from "./lib/auth";
import { env } from "./config/env";
import { authService } from "./services/authService";
import { campaignService } from "./services/campaignService";
import { dashboardService } from "./services/dashboardService";
import { gmailAccountService } from "./services/gmailAccountService";
import { googleSheetsService } from "./services/googleSheetsService";
import { dedupeLeadsByEmail, parseSheetData } from "./lib/csv";
import { prisma } from "./lib/prisma";
import { campaignEvents } from "./lib/eventEmitter";

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
  startTime: z.string().datetime().optional(),
  // Follow-up messages (will use "Re: [original subject]" for threading)
  followUp2Body: z.string().optional(),
  followUp2DelayHours: z.number().int().positive().optional(),
  followUp3Body: z.string().optional(),
  followUp3DelayHours: z.number().int().positive().optional(),
  followUp4Body: z.string().optional(),
  followUp4DelayHours: z.number().int().positive().optional()
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
  emails: z.string().min(1)
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
    await prisma.audit_logs.create({
      data: {
        user_id: output.user.id,
        action: "auth.register",
        resource: "user",
        resource_id: output.user.id
      }
    });
    res.cookie("token", output.token, { httpOnly: true, sameSite: "lax" });
    res.status(201).json(output);
  });

  router.post("/auth/login", async (req, res) => {
    const input = parse(loginSchema, req.body);
    const output = await authService.login(input);
    await prisma.audit_logs.create({
      data: {
        user_id: output.user.id,
        action: "auth.login",
        resource: "user",
        resource_id: output.user.id
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

  // Server-Sent Events endpoint for real-time campaign updates
  router.get("/campaigns/events", requireAuth, (req, res) => {
    const userId = req.user.userId;
    console.log(`✅ SSE client connected: userId=${userId}`);

    // Set headers for SSE
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no"); // Disable buffering for nginx

    // Send initial connection message
    res.write(`data: ${JSON.stringify({ type: "connected" })}\n\n`);

    // Handler for campaign updates (in-memory, same process)
    const updateHandler = (event: { campaignId: string; user_id: string; timestamp: number }) => {
      if (event.user_id === userId) {
        console.log(`📤 Sending SSE update (in-memory) to userId=${userId}, campaignId=${event.campaignId}`);
        res.write(`data: ${JSON.stringify({ 
          type: "campaign:update", 
          campaignId: event.campaignId,
          timestamp: event.timestamp 
        })}\n\n`);
      }
    };

    // Register in-memory event listener
    campaignEvents.onCampaignUpdate(updateHandler);

    // Poll database for cross-process events every 2 seconds
    const pollInterval = setInterval(async () => {
      try {
        const updates = await campaignEvents.pollForUpdates();
        for (const event of updates) {
          if (event.user_id === userId) {
            console.log(`📤 Sending SSE update (from DB) to userId=${userId}, campaignId=${event.campaignId}`);
            res.write(`data: ${JSON.stringify({ 
              type: "campaign:update", 
              campaignId: event.campaignId,
              timestamp: event.timestamp 
            })}\n\n`);
          }
        }
      } catch (err) {
        console.error("Error polling for updates:", err);
      }
    }, 2000);

    // Send heartbeat every 30 seconds to keep connection alive
    const heartbeat = setInterval(() => {
      res.write(`: heartbeat\n\n`);
    }, 30000);

    // Cleanup on connection close
    req.on("close", () => {
      console.log(`🔌 SSE client disconnected: userId=${userId}`);
      clearInterval(pollInterval);
      clearInterval(heartbeat);
      campaignEvents.offCampaignUpdate(updateHandler);
    });
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
    await prisma.audit_logs.create({
      data: {
        user_id: req.user.userId,
        action: "gmail.connect",
        resource: "gmail_account",
        resource_id: account.id
      }
    });
    res.status(201).json({ account });
  });

  router.post("/gmail/disconnect", requireAuth, async (req, res) => {
    const input = parse(gmailDisconnectSchema, req.body);
    await gmailAccountService.disconnect(req.user.userId, input.accountId);
    await prisma.audit_logs.create({
      data: {
        user_id: req.user.userId,
        action: "gmail.disconnect",
        resource: "gmail_account",
        resource_id: input.accountId
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
      subject_template: input.subjectTemplate,
      body_template: input.bodyTemplate,
      daily_limit: input.dailyLimit,
      delay_min_seconds: input.delayMinSeconds,
      delay_max_seconds: input.delayMaxSeconds,
      startTime: input.startTime ? new Date(input.startTime) : undefined,
      follow_up2_body: input.followUp2Body,
      follow_up2_delay_hours: input.followUp2DelayHours,
      follow_up3_body: input.followUp3Body,
      follow_up3_delay_hours: input.followUp3DelayHours,
      follow_up4_body: input.followUp4Body,
      follow_up4_delay_hours: input.followUp4DelayHours
    });
    await prisma.audit_logs.create({
      data: {
        user_id: req.user.userId,
        action: "campaign.create",
        resource: "campaign",
        resource_id: campaign.id
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
    await prisma.audit_logs.create({
      data: {
        user_id: req.user.userId,
        action: `campaign.${input.action}`,
        resource: "campaign",
        resource_id: input.campaignId
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
    await prisma.audit_logs.create({
      data: {
        user_id: req.user.userId,
        action: "leads.upload_csv",
        resource: "campaign",
        resource_id: input.campaignId,
        metadata: {
          inserted: result.inserted
        }
      }
    });
    res.status(201).json(result);
  });
  router.post("/leads/add", requireAuth, async (req, res) => {
    const input = parse(addLeadSchema, req.body);
    const campaign = await prisma.campaigns.findFirst({ 
      where: { id: input.campaignId, user_id: req.user.userId } 
    });
    if (!campaign) {
      res.status(404).json({ error: "Campaign not found" });
      return;
    }

    // Parse emails - split by newlines and filter out empty lines
    const emailList = input.emails
      .split(/\r?\n/)
      .map(e => e.trim())
      .filter(e => e.length > 0);

    if (emailList.length === 0) {
      res.status(400).json({ error: "No valid emails provided" });
      return;
    }

    // Validate each email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const invalidEmails = emailList.filter(email => !emailRegex.test(email));
    if (invalidEmails.length > 0) {
      res.status(400).json({ error: `Invalid email(s): ${invalidEmails.join(", ")}` });
      return;
    }

    // Create leads for all emails
    const createdLeads = [];
    for (const email of emailList) {
      // Check if lead already exists
      const existingLead = await prisma.leads.findFirst({
        where: {
          campaign_id: input.campaignId,
          email: email.toLowerCase()
        }
      });

      if (!existingLead) {
        const lead = await prisma.leads.create({
          data: {
            id: randomUUID(),
            user_id: req.user.userId,
            campaign_id: input.campaignId,
            email: email.toLowerCase(),
            first_name: "",
            company_name: "",
            domain_name: "",
            custom_fields: {},
            status: "PENDING"
          }
        });
        createdLeads.push(lead);

        await prisma.audit_logs.create({
          data: {
            user_id: req.user.userId,
            action: "leads.add_manual",
            resource: "lead",
            resource_id: lead.id,
            metadata: { campaignId: input.campaignId }
          }
        });
      }
    }

    res.status(201).json({ 
      leads: createdLeads,
      inserted: createdLeads.length,
      total: emailList.length,
      skipped: emailList.length - createdLeads.length
    });
  });

  router.post("/leads/delete", requireAuth, async (req, res) => {
    const input = parse(deleteLeadSchema, req.body);

    const lead = await prisma.leads.findFirst({
      where: { id: input.leadId, user_id: req.user.userId }
    });

    if (!lead) {
      res.status(404).json({ error: "Lead not found" });
      return;
    }

    if (lead.sent_at || lead.status === "SENT" || lead.status === "SENDING") {
      res.status(400).json({ error: "Cannot delete this lead because the email has already been sent or is currently sending" });
      return;
    }

    await prisma.leads.delete({ where: { id: lead.id } });

    await prisma.audit_logs.create({
      data: {
        user_id: req.user.userId,
        action: "leads.delete",
        resource: "lead",
        resource_id: lead.id,
        metadata: { campaignId: lead.campaign_id, email: lead.email }
      }
    });

    res.json({ ok: true });
  });

  router.post("/leads/import-google-sheet", requireAuth, async (req, res) => {
    const input = parse(importGoogleSheetSchema, req.body);
    
    const campaign = await prisma.campaigns.findFirst({
      where: { id: input.campaignId, user_id: req.user.userId }
    });
    if (!campaign) {
      res.status(404).json({ error: "Campaign not found" });
      return;
    }

    const gmailAccount = await prisma.gmail_accounts.findFirst({
      where: { id: input.gmailAccountId, user_id: req.user.userId }
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
      const existingLeads = await prisma.leads.findMany({
        where: { campaign_id: input.campaignId, user_id: req.user.userId },
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
        ? await prisma.leads.createMany({
          data: leadsToInsert.map((lead) => ({
            id: randomUUID(),
            user_id: req.user.userId,
            campaign_id: input.campaignId,
            email: lead.email,
            first_name: lead.firstName,
            company_name: lead.companyName,
            domain_name: lead.domainName,
            custom_fields: lead.customFields,
            status: "PENDING" as const
          }))
        })
        : { count: 0 };

      await prisma.audit_logs.create({
        data: {
          user_id: req.user.userId,
          action: "leads.import_google_sheet",
          resource: "campaign",
          resource_id: input.campaignId,
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
    const campaign = await prisma.campaigns.findFirst({
      where: { id: campaignId, user_id: req.user.userId }
    });
    if (!campaign) {
      res.status(404).json({ error: "Campaign not found" });
      return;
    }

    const leads = await prisma.leads.findMany({
      where: { campaign_id: campaignId },
      select: {
        id: true,
        email: true,
        status: true,
        sent_at: true,
        created_at: true
      },
      orderBy: { created_at: "desc" }
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
    const campaign = await prisma.campaigns.findFirst({
      where: { id: campaignId, user_id: req.user.userId },
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
      (acc, lead) => {
        const status = lead.status || 'UNKNOWN';
        acc[status] = (acc[status] ?? 0) + 1;
        return acc;
      },
      {}
    );

    const pending = (counts['PENDING'] ?? 0) + (counts['QUEUED'] ?? 0) + (counts['SENDING'] ?? 0);
    const sent = counts['SENT'] ?? 0;
    const failed = counts['FAILED'] ?? 0;
    const total = pending + sent + failed;
    const progress = total === 0 ? 0 : Math.round(((sent + failed) / total) * 100);
    res.json({ pending, sent, failed, total, progress, status: campaign.status });
  });

  return router;
};

