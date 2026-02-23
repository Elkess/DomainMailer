import { google } from "googleapis";
import { env } from "../config/env";

const ensureGmailEnabled = (): void => {
  if (!env.GMAIL_ENABLED) {
    throw new Error("Gmail integration is disabled. Ask the admin to configure Google OAuth credentials.");
  }
};

const createOAuth = () => new google.auth.OAuth2(env.GMAIL_CLIENT_ID, env.GMAIL_CLIENT_SECRET, env.GMAIL_REDIRECT_URI);

const encodeMessage = (from: string, to: string, subject: string, body: string): string => {
  const lines = [
    `From: ${from}`,
    `To: ${to}`,
    "Content-Type: text/plain; charset=utf-8",
    "MIME-Version: 1.0",
    `Subject: ${subject}`,
    "",
    body
  ];

  return Buffer.from(lines.join("\n"))
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
};

export const gmailService = {
  createAuthUrl(state: string): string {
    ensureGmailEnabled();
    return createOAuth().generateAuthUrl({
      access_type: "offline",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/gmail.send", 
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/spreadsheets.readonly"
      ],
      state
    });
  },

  async exchangeCode(code: string): Promise<{
    email: string;
    refreshToken: string;
    accessToken: string;
    expiresAt: Date;
  }> {
    ensureGmailEnabled();
    const oauth = createOAuth();
    const tokenResponse = await oauth.getToken(code);
    const accessToken = tokenResponse.tokens.access_token;
    const refreshToken = tokenResponse.tokens.refresh_token;
    const expiry = tokenResponse.tokens.expiry_date;

    if (!accessToken || !refreshToken || !expiry) {
      throw new Error("Missing OAuth credentials");
    }

    oauth.setCredentials({ access_token: accessToken });
    const profile = await google.oauth2({ version: "v2", auth: oauth }).userinfo.get();

    if (!profile.data.email) {
      throw new Error("Unable to fetch Gmail email");
    }

    return { email: profile.data.email, refreshToken, accessToken, expiresAt: new Date(expiry) };
  },

  async refreshAccessToken(refreshToken: string): Promise<{ accessToken: string; expiresAt: Date } | null> {
    ensureGmailEnabled();
    const oauth = createOAuth();
    oauth.setCredentials({ refresh_token: refreshToken });
    try {
      const refreshed = await oauth.refreshAccessToken();
      if (!refreshed.credentials.access_token || !refreshed.credentials.expiry_date) {
        return null;
      }
      return {
        accessToken: refreshed.credentials.access_token,
        expiresAt: new Date(refreshed.credentials.expiry_date)
      };
    } catch {
      return null;
    }
  },

  async sendMail(input: {
    accessToken: string;
    refreshToken: string;
    expiresAt: Date;
    from: string;
    to: string;
    subject: string;
    body: string;
  }): Promise<{ ok: boolean; statusCode: number; body: string; rateLimited: boolean; unauthorized: boolean }> {
    ensureGmailEnabled();
    const oauth = createOAuth();
    oauth.setCredentials({
      access_token: input.accessToken,
      refresh_token: input.refreshToken,
      expiry_date: input.expiresAt.getTime()
    });

    try {
      const gmail = google.gmail({ version: "v1", auth: oauth });
      const raw = encodeMessage(input.from, input.to, input.subject, input.body);
      const response = await gmail.users.messages.send({ userId: "me", requestBody: { raw } });
      return {
        ok: true,
        statusCode: 200,
        body: JSON.stringify(response.data),
        rateLimited: false,
        unauthorized: false
      };
    } catch (error: any) {
      const statusCode = Number(error?.code ?? error?.response?.status ?? 500);
      return {
        ok: false,
        statusCode,
        body: JSON.stringify(error?.response?.data ?? error?.message ?? "Unknown Gmail error"),
        rateLimited: statusCode === 429,
        unauthorized: statusCode === 401
      };
    }
  }
};
