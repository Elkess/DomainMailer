import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

export interface AuthUser {
  userId: string;
  email: string;
}

export const signAuthToken = (payload: AuthUser): string => {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN as jwt.SignOptions["expiresIn"] });
};

export const verifyAuthToken = (token: string): AuthUser => {
  return jwt.verify(token, env.JWT_SECRET) as AuthUser;
};

export const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.header("authorization");
  const cookieToken = req.cookies?.token;
  const queryToken = req.query.token as string | undefined;
  const token = authHeader?.startsWith("Bearer ") ? authHeader.substring(7) : cookieToken || queryToken;

  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const payload = verifyAuthToken(token);
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};
