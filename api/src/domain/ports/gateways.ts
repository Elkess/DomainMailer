export interface GmailSendResult {
  ok: boolean;
  statusCode: number;
  responseBody: string;
  rateLimited: boolean;
  authExpired: boolean;
}

export interface GmailGateway {
  sendMail(input: {
    fromEmail: string;
    toEmail: string;
    subject: string;
    body: string;
    accessToken: string;
    refreshToken: string;
    tokenExpiry: Date;
  }): Promise<GmailSendResult>;
  refreshToken(refreshToken: string): Promise<{ accessToken: string; refreshToken: string; tokenExpiry: Date } | null>;
}

export interface OAuthGateway {
  getAuthUrl(state: string): string;
  exchangeCode(code: string): Promise<{
    email: string;
    accessToken: string;
    refreshToken: string;
    tokenExpiry: Date;
  }>;
}
