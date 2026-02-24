import "express-async-errors";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env";
import { errorHandler, apiRateLimit } from "./lib/middlewares";
import { createRoutes } from "./routes";
import { campaignEvents } from "./lib/eventEmitter";
import { prisma } from "./lib/prisma";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "2mb" }));
app.use(apiRateLimit);

app.use("/api", createRoutes());
app.use(errorHandler);

// Create notifications table if it doesn't exist
async function initDatabase() {
  try {
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS campaign_notifications (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        campaign_id UUID NOT NULL,
        user_id UUID NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);
    await prisma.$executeRawUnsafe(`
      CREATE INDEX IF NOT EXISTS idx_campaign_notifications_created 
      ON campaign_notifications(created_at DESC)
    `);
    console.log("✅ Database tables initialized");
  } catch (err) {
    console.error("❌ Failed to initialize database:", err);
  }
}

initDatabase();

app.listen(env.PORT, () => {
  console.log(`✅ DomainMailer API running on port ${env.PORT}`);
  console.log(`📡 Using PostgreSQL for cross-process events`);
  console.log(`🔗 Frontend URL: ${env.FRONTEND_URL}`);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('⚠️  SIGTERM received, closing connections...');
  await campaignEvents.close();
  process.exit(0);
});
