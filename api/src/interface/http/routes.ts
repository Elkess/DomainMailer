import { Router } from "express";
import { CampaignService } from "../../application/services/campaignService";
import { EmailAccountService } from "../../application/services/emailAccountService";
import { CampaignRepository, LeadRepository } from "../../domain/ports/repositories";
import { requireUser, validateBody } from "./middlewares";
import {
  addLeadSchema,
  campaignActionSchema,
  createCampaignSchema,
  deleteLeadSchema,
  parseLeadsCsv,
  updateLeadSchema,
  uploadCsvSchema
} from "./schemas";

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
    const url = deps.emailAccountService.createAuthUrl(req.user.id);
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
      const items = await deps.emailAccountService.listAccounts(req.user.id);
      res.json({ items });
    } catch (error) {
      next(error);
    }
  });

  router.post("/campaigns", requireUser, validateBody(createCampaignSchema), async (req, res, next) => {
    try {
      const campaign = await deps.campaignService.createCampaign({ userId: req.user.id, ...req.body });
      res.status(201).json({ campaign });
    } catch (error) {
      next(error);
    }
  });

  router.get("/campaigns", requireUser, async (req, res, next) => {
    try {
      const items = await deps.campaignRepository.listByUser(req.user.id);
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
      const campaignId = req.params.campaignId;
      const counts = await deps.campaignRepository.getCounts(campaignId);
      const total = counts.pending + counts.sending + counts.sent + counts.failed;
      const progress = total === 0 ? 0 : Math.round(((counts.sent + counts.failed) / total) * 100);
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
      const summary = await deps.campaignRepository.getDashboardSummary(req.user.id);
      const campaigns = await deps.campaignRepository.listByUser(req.user.id);
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
