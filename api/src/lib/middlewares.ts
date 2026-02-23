import { NextFunction, Request, Response } from "express";
import rateLimit from "express-rate-limit";
import { env } from "../config/env";

export const apiRateLimit = rateLimit({
  windowMs: env.API_RATE_LIMIT_WINDOW_MS,
  limit: env.API_RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests" }
});

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  const message = err.message || "Internal server error";
  if (message === "Invalid payload") {
    res.status(400).json({ error: message });
    return;
  }

  if (
    message.includes("not found") ||
    message.includes("Invalid credentials") ||
    message.includes("already in use") ||
    message.includes("disabled") ||
    message.includes("Missing")
  ) {
    res.status(400).json({ error: message });
    return;
  }

  res.status(500).json({ error: env.NODE_ENV === "development" ? message : "Internal server error" });
};
