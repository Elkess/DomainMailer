import dotenv from "dotenv";
import { z } from "zod";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(4000),
  DATABASE_URL: z.string().min(1),
  REDIS_URL: z.string().optional().default(""),
  JWT_SECRET: z.string().min(24),
  JWT_EXPIRES_IN: z.string().default("7d"),
  BCRYPT_ROUNDS: z.coerce.number().default(12),
  TOKEN_ENCRYPTION_KEY: z.string().min(32),
  API_RATE_LIMIT_WINDOW_MS: z.coerce.number().default(60000),
  API_RATE_LIMIT_MAX: z.coerce.number().default(100),
  USER_DAILY_MAX_LIMIT: z.coerce.number().default(300),
  GLOBAL_DAILY_MAX_LIMIT: z.coerce.number().default(5000),
  PER_MINUTE_MAX_SEND: z.coerce.number().default(20),
  CAMPAIGN_FAILURE_PAUSE_THRESHOLD: z.coerce.number().default(5),
  GMAIL_ENABLED: z
    .string()
    .optional()
    .transform((value) => (value ?? "true").toLowerCase() === "true"),
  GMAIL_CLIENT_ID: z.string().default(""),
  GMAIL_CLIENT_SECRET: z.string().default(""),
  GMAIL_REDIRECT_URI: z.string().url(),
  FRONTEND_URL: z.string().url()
});

const parsed = envSchema.parse(process.env);

if (parsed.GMAIL_ENABLED && (!parsed.GMAIL_CLIENT_ID || !parsed.GMAIL_CLIENT_SECRET)) {
  throw new Error("Gmail OAuth is enabled but GMAIL_CLIENT_ID / GMAIL_CLIENT_SECRET are missing");
}

export const env = parsed;
