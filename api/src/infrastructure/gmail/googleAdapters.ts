import { gmail_v1, google } from "googleapis";
import { GmailGateway, GmailSendResult, OAuthGateway } from "../../domain/ports/gateways";
import { env } from "../config/env";

const createOAuthClient = () =>
  new google.auth.OAuth2(env.GMAIL_CLIENT_ID, env.GMAIL_CLIENT_SECRET, env.GMAIL_REDIRECT_URI);

const buildRawMessage = (fromEmail: string, toEmail: string, subject: string, body: string): string => {
  const message = [
    `From: ${fromEmail}`,
    `To: ${toEmail}`,
    "Content-Type: text/plain; charset=utf-8",
    "MIME-Version: 1.0",
    `Subject: ${subject}`,
    "",
    body
  ].join("\n");

  return Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
};

export class GoogleOAuthGateway implements OAuthGateway {
  getAuthUrl(state: string): string {
    const client = createOAuthClient();
    return client.generateAuthUrl({
      access_type: "offline",
      prompt: "consent",
      scope: ["https://www.googleapis.com/auth/gmail.send", "https://www.googleapis.com/auth/userinfo.email"],
      state
    });
  }

  async exchangeCode(code: string): Promise<{ email: string; accessToken: string; refreshToken: string; tokenExpiry: Date }> {
    const client = createOAuthClient();
    const tokenResponse = await client.getToken(code);
    const accessToken = tokenResponse.tokens.access_token;
    const refreshToken = tokenResponse.tokens.refresh_token;
    const expiryDate = tokenResponse.tokens.expiry_date;

    if (!accessToken || !refreshToken || !expiryDate) {
      throw new Error("Invalid OAuth token response");
    }

    client.setCredentials({ access_token: accessToken });
    const oauth2 = google.oauth2({ version: "v2", auth: client });
    const profile = await oauth2.userinfo.get();
    if (!profile.data.email) {
      throw new Error("Unable to resolve Gmail account email");
    }

    return {
      email: profile.data.email,
      accessToken,
      refreshToken,
      tokenExpiry: new Date(expiryDate)
    };
  }
}

export class GoogleGmailGateway implements GmailGateway {
  async sendMail(input: {
    fromEmail: string;
    toEmail: string;
    subject: string;
    body: string;
    accessToken: string;
    refreshToken: string;
    tokenExpiry: Date;
  }): Promise<GmailSendResult> {
    const client = createOAuthClient();
    client.setCredentials({
      access_token: input.accessToken,
      refresh_token: input.refreshToken,
      expiry_date: input.tokenExpiry.getTime()
    });

    const gmail = google.gmail({ version: "v1", auth: client });
    const raw = buildRawMessage(input.fromEmail, input.toEmail, input.subject, input.body);

    try {
      const result = await gmail.users.messages.send({ userId: "me", requestBody: { raw } });
      return {
        ok: true,
        statusCode: 200,
        responseBody: JSON.stringify(result.data),
        rateLimited: false,
        authExpired: false
      };
    } catch (error: any) {
      const statusCode = Number(error?.code ?? error?.response?.status ?? 500);
      const responseBody = JSON.stringify(error?.response?.data ?? error?.message ?? "Unknown error");

      return {
        ok: false,
        statusCode,
        responseBody,
        rateLimited: statusCode === 429,
        authExpired: statusCode === 401
      };
    }
  }

  async refreshToken(refreshToken: string): Promise<{ accessToken: string; refreshToken: string; tokenExpiry: Date } | null> {
    const client = createOAuthClient();
    client.setCredentials({ refresh_token: refreshToken });
    try {
      const response = await client.refreshAccessToken();
      const tokens = response.credentials;
      if (!tokens.access_token || !tokens.expiry_date) {
        return null;
      }
      return {
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token ?? refreshToken,
        tokenExpiry: new Date(tokens.expiry_date)
      };
    } catch {
      return null;
    }
  }
}
