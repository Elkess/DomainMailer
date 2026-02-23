import { GmailAccountStatus } from "@prisma/client";
import { prisma } from "../lib/prisma";
import { decrypt, encrypt } from "../lib/security";
import { gmailService } from "./gmailService";

export const gmailAccountService = {
  createAuthUrl(userId: string): string {
    return gmailService.createAuthUrl(userId);
  },

  async connect(userId: string, code: string) {
    const oauthData = await gmailService.exchangeCode(code);

    return prisma.gmailAccount.upsert({
      where: {
        userId_email: {
          userId,
          email: oauthData.email
        }
      },
      update: {
        refreshTokenEncrypted: encrypt(oauthData.refreshToken),
        accessTokenEncrypted: encrypt(oauthData.accessToken),
        accessTokenExpiresAt: oauthData.expiresAt,
        status: GmailAccountStatus.ACTIVE
      },
      create: {
        userId,
        email: oauthData.email,
        refreshTokenEncrypted: encrypt(oauthData.refreshToken),
        accessTokenEncrypted: encrypt(oauthData.accessToken),
        accessTokenExpiresAt: oauthData.expiresAt,
        status: GmailAccountStatus.ACTIVE
      }
    });
  },

  async disconnect(userId: string, accountId: string) {
    await prisma.gmailAccount.updateMany({
      where: { id: accountId, userId },
      data: { status: GmailAccountStatus.DISCONNECTED }
    });
  },

  async list(userId: string) {
    return prisma.gmailAccount.findMany({ where: { userId }, orderBy: { createdAt: "desc" } });
  },

  async getDecryptedCredentials(userId: string, accountId: string) {
    const account = await prisma.gmailAccount.findFirst({ where: { id: accountId, userId } });
    if (!account) {
      throw new Error("Gmail account not found");
    }

    return {
      account,
      refreshToken: decrypt(account.refreshTokenEncrypted),
      accessToken: account.accessTokenEncrypted ? decrypt(account.accessTokenEncrypted) : ""
    };
  }
};
