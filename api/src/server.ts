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
import { logger } from "./lib/logger";

const app = express();

app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));
app.use(
  cors({
    origin: [env.FRONTEND_URL, ""],
    credentials: true
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "2mb" }));
app.use(apiRateLimit);

app.use("/api", createRoutes());
app.use(errorHandler);

app.listen(env.PORT, () => {
  logger.info("DomainMailer API server started", {
    port: env.PORT,
    frontendUrl: env.FRONTEND_URL,
    nodeEnv: env.NODE_ENV
  });
});

// Process-level error handlers
process.on("unhandledRejection", (reason: unknown, promise: Promise<unknown>) => {
  const formatted = reason instanceof Error ? reason : new Error(String(reason));
  logger.error("UNHANDLED PROMISE REJECTION", {
    error: formatted.message,
    stack: formatted.stack,
    promise: String(promise)
  });
});

process.on("uncaughtException", (error: Error) => {
  logger.error("UNCAUGHT EXCEPTION", {
    error: error.message,
    stack: error.stack
  });
  // Give logger time to flush, then exit
  setTimeout(() => process.exit(1), 1000);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
  logger.warn("SIGTERM received, shutting down gracefully...");
  await campaignEvents.close();
  await prisma.$disconnect();
  logger.info("Server shutdown complete");
  process.exit(0);
});

process.on("SIGINT", async () => {
  logger.warn("SIGINT received, shutting down gracefully...");
  await campaignEvents.close();
  await prisma.$disconnect();
  logger.info("Server shutdown complete");
  process.exit(0);
});
