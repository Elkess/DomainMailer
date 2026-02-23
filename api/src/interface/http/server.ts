import cookieParser from "cookie-parser";
import cors from "cors";
import csrf from "csurf";
import express from "express";
import helmet from "helmet";
import { CampaignService } from "../../application/services/campaignService";
import { EmailAccountService } from "../../application/services/emailAccountService";
import { env } from "../../infrastructure/config/env";
import { GoogleOAuthGateway } from "../../infrastructure/gmail/googleAdapters";
import {
  PostgresCampaignRepository,
  PostgresEmailAccountRepository,
  PostgresLeadRepository
} from "../../infrastructure/repositories/postgresRepositories";
import { apiRateLimit, errorHandler } from "./middlewares";
import { createRouter } from "./routes";

const app = express();
app.use(helmet());
app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(cookieParser(env.SESSION_SECRET));
app.use(apiRateLimit(env.API_RATE_LIMIT_WINDOW_MS, env.API_RATE_LIMIT_MAX));

const csrfProtection = csrf({ cookie: true });
app.use((req, res, next) => {
  if (["GET", "HEAD", "OPTIONS"].includes(req.method)) {
    next();
    return;
  }
  if (req.is("application/json") && req.header("x-user-id")) {
    next();
    return;
  }
  csrfProtection(req, res, next);
});

app.get("/api/csrf-token", csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

const emailAccountRepository = new PostgresEmailAccountRepository();
const campaignRepository = new PostgresCampaignRepository();
const leadRepository = new PostgresLeadRepository();
const oauthGateway = new GoogleOAuthGateway();

const emailAccountService = new EmailAccountService(emailAccountRepository, oauthGateway);
const campaignService = new CampaignService(campaignRepository, leadRepository);

app.use(
  "/api",
  createRouter({
    emailAccountService,
    campaignService,
    campaignRepository,
    leadRepository
  })
);
app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`API server running on port ${env.PORT}`);
});
