import { prisma } from "../lib/prisma";
import { decrypt, encrypt } from "../lib/security";
import { gmailService } from "./gmailService";

const GmailAccountStatus = { ACTIVE: 'ACTIVE', REVOKED: 'REVOKED', ERROR: 'ERROR' } as const;

export const gmailAccountService = {
  createAuthUrl(userId: string): string {
    return gmailService.createAuthUrl(userId);
  },

  async connect(userId: string, code: string) {
    const oauthData = await gmailService.exchangeCode(code);
    const { randomUUID } = await import("crypto");

    // Check if account already exists
    const existing = await prisma.gmail_accounts.findFirst({
      where: {
        user_id: userId,
        email: oauthData.email
      }
    });

    if (existing) {
      return prisma.gmail_accounts.update({
        where: { id: existing.id },
        data: {
          refresh_token_encrypted: encrypt(oauthData.refreshToken),
          access_token_encrypted: encrypt(oauthData.accessToken),
          access_token_expires_at: oauthData.expiresAt,
          status: GmailAccountStatus.ACTIVE
        }
      });
    }

    return prisma.gmail_accounts.create({
      data: {
        id: randomUUID(),
        user_id: userId,
        email: oauthData.email,
        refresh_token_encrypted: encrypt(oauthData.refreshToken),
        access_token_encrypted: encrypt(oauthData.accessToken),
        access_token_expires_at: oauthData.expiresAt,
        status: GmailAccountStatus.ACTIVE
      }
    });
  },

  async disconnect(userId: string, accountId: string) {
    await prisma.gmail_accounts.updateMany({
      where: { id: accountId, user_id: userId },
      data: { status: GmailAccountStatus.ERROR }
    });
  },

  async list(userId: string) {
    return prisma.gmail_accounts.findMany({ where: { user_id: userId }, orderBy: { created_at: "desc" } });
  },

  async getDecryptedCredentials(userId: string, accountId: string) {
    const account = await prisma.gmail_accounts.findFirst({ where: { id: accountId, user_id: userId } });
    if (!account) {
      throw new Error("Gmail account not found");
    }

    return {
      account,
      refreshToken: decrypt(account.refresh_token_encrypted),
      accessToken: account.access_token_encrypted ? decrypt(account.access_token_encrypted) : ""
    };
  }
};
