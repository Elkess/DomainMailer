import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(4000),
  DATABASE_URL: z.string().min(1),
  ENCRYPTION_KEY: z.string().min(32),
  SESSION_SECRET: z.string().min(16),
  API_RATE_LIMIT_WINDOW_MS: z.coerce.number().default(60000),
  API_RATE_LIMIT_MAX: z.coerce.number().default(120),
  GMAIL_CLIENT_ID: z.string().min(1),
  GMAIL_CLIENT_SECRET: z.string().min(1),
  GMAIL_REDIRECT_URI: z.string().url(),
  FRONTEND_URL: z.string().url(),
  WORKER_POLL_INTERVAL_MS: z.coerce.number().default(5000)
});

export const env = envSchema.parse(process.env);
