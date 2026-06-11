import { Router, Request } from "express";
import { CampaignService } from "../../application/services/campaignService";
import { EmailAccountService } from "../../application/services/emailAccountService";
import { CampaignRepository, LeadRepository } from "../../domain/ports/repositories";
import { requireUser, validateBody } from "./middlewares";
import { db } from "../../infrastructure/db/pool";
import {
  addLeadSchema,
  campaignActionSchema,
  createCampaignSchema,
  deleteLeadSchema,
  parseLeadsCsv,
  updateLeadSchema,
  uploadCsvSchema
} from "./schemas";

// Extend Express Request type
interface AuthenticatedRequest extends Request {
  user: {
    id: string;
    userId: string;
    email: string;
  };
}

export const createRouter = (deps: {
  emailAccountService: EmailAccountService;
  campaignService: CampaignService;
  campaignRepository: CampaignRepository;
  leadRepository: LeadRepository;
}) => {
  const router = Router();

  router.get("/health", (_req, res) => {
    res.json({ ok: true });
  });

  router.get("/oauth/gmail/url", requireUser, (req, res) => {
    const url = deps.emailAccountService.createAuthUrl((req as AuthenticatedRequest).user.userId);
    res.json({ url });
  });

  router.get("/oauth/gmail/callback", async (req, res, next) => {
    try {
      const code = String(req.query.code ?? "");
      const state = String(req.query.state ?? "");
      if (!code || !state) {
        res.status(400).json({ error: "Missing code or state" });
        return;
      }
      const account = await deps.emailAccountService.connectGmailAccount(state, code);
      res.json({ account });
    } catch (error) {
      next(error);
    }
  });

  router.get("/email-accounts", requireUser, async (req, res, next) => {
    try {
      const items = await deps.emailAccountService.listAccounts((req as AuthenticatedRequest).user.userId);
      res.json({ items });
    } catch (error) {
      next(error);
    }
  });

  router.post("/campaigns", requireUser, validateBody(createCampaignSchema), async (req, res, next) => {
    try {
      const campaign = await deps.campaignService.createCampaign({ userId: (req as AuthenticatedRequest).user.userId, ...req.body });
      res.status(201).json({ campaign });
    } catch (error) {
      next(error);
    }
  });

  router.get("/campaigns", requireUser, async (req, res, next) => {
    try {
      const items = await deps.campaignRepository.listByUser((req as AuthenticatedRequest).user.userId);
      res.json({ items });
    } catch (error) {
      next(error);
    }
  });

  router.post("/campaigns/action", requireUser, validateBody(campaignActionSchema), async (req, res, next) => {
    try {
      await deps.campaignService.setCampaignStatus(req.body);
      res.json({ ok: true });
    } catch (error) {
      next(error);
    }
  });

  router.get("/campaigns/:campaignId/progress", requireUser, async (req, res, next) => {
    try {
      const campaignId = String(req.params.campaignId ?? "");
      const counts = await deps.campaignRepository.getCounts(campaignId);
      const total = counts.pending + counts.sending + counts.sent + counts.failed;
      
      // Calculate progress including followups
      let progress = 0;
      if (total > 0) {
        // Get campaign to check for configured followups
        const campaignResult = await db.query(
          `SELECT follow_up2_body, follow_up3_body, follow_up4_body FROM campaigns WHERE id = $1`,
          [campaignId]
        );
        
        if (campaignResult.rowCount > 0) {
          const campaign = campaignResult.rows[0];
          
          // Count number of configured followup sequences
          const followupCount = [
            campaign.follow_up2_body,
            campaign.follow_up3_body,
            campaign.follow_up4_body
          ].filter(body => body && body.trim().length > 0).length;
          
          // Total expected emails = leads * (1 initial + followups)
          const totalExpectedEmails = total * (1 + followupCount);
          
          // Count actual sent emails from email_logs
          const sentResult = await db.query(
            `SELECT COUNT(*)::text AS count FROM email_logs WHERE campaign_id = $1 AND status = 'sent'`,
            [campaignId]
          );
          const sentEmailCount = parseInt(sentResult.rows[0]?.count || '0', 10);
          
          progress = Math.round((sentEmailCount / totalExpectedEmails) * 100);
        }
      }
      
      res.json({ ...counts, total, progress });
    } catch (error) {
      next(error);
    }
  });

  router.post("/leads", requireUser, validateBody(addLeadSchema), async (req, res, next) => {
    try {
      const lead = await deps.campaignService.addLead(req.body);
      res.status(201).json({ lead });
    } catch (error) {
      next(error);
    }
  });

  router.put("/leads", requireUser, validateBody(updateLeadSchema), async (req, res, next) => {
    try {
      await deps.leadRepository.updateOne(req.body);
      res.json({ ok: true });
    } catch (error) {
      next(error);
    }
  });

  router.delete("/leads", requireUser, validateBody(deleteLeadSchema), async (req, res, next) => {
    try {
      await deps.leadRepository.deleteOne(req.body.leadId);
      res.json({ ok: true });
    } catch (error) {
      next(error);
    }
  });

  router.post("/leads/upload-csv", requireUser, validateBody(uploadCsvSchema), async (req, res, next) => {
    try {
      const leads = parseLeadsCsv(req.body.csv);
      await deps.campaignService.uploadLeads(req.body.campaignId, leads);
      res.status(201).json({ inserted: leads.length });
    } catch (error) {
      next(error);
    }
  });

  router.get("/dashboard/summary", requireUser, async (req, res, next) => {
    try {
      const authReq = req as AuthenticatedRequest;
      const summary = await deps.campaignRepository.getDashboardSummary(authReq.user.userId);
      const campaigns = await deps.campaignRepository.listByUser(authReq.user.userId);
      const running = campaigns.filter((item) => item.status === "running");
      const dailyLimit = running.reduce((sum, item) => sum + item.dailyLimit, 0);
      const remainingDailyLimit = Math.max(0, dailyLimit - summary.sentToday);
      res.json({
        ...summary,
        remainingDailyLimit
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
};
