import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const rateStore = new Map<string, { count: number; resetAt: number }>();

export const requireUser = (req: Request, res: Response, next: NextFunction): void => {
  const userId = req.header("x-user-id");
  if (!userId || userId.trim() === "") {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  req.user = { id: userId, userId: userId, email: "" };
  next();
};

export const apiRateLimit = (windowMs: number, maxRequests: number) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const key = `${req.ip}:${req.path}`;
    const now = Date.now();
    const current = rateStore.get(key);

    if (!current || now > current.resetAt) {
      rateStore.set(key, { count: 1, resetAt: now + windowMs });
      next();
      return;
    }

    if (current.count >= maxRequests) {
      res.status(429).json({ error: "Too many requests" });
      return;
    }

    current.count += 1;
    rateStore.set(key, current);
    next();
  };
};

export const validateBody = <T>(schema: z.ZodSchema<T>) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Invalid request body", issues: parsed.error.issues });
      return;
    }
    req.body = parsed.data;
    next();
  };
};

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
};
