import { google } from "googleapis";
import { prisma } from "../lib/prisma";
import { decrypt } from "../lib/security";

export const googleSheetsService = {
  async readSheet(accountId: string, spreadsheetId: string, range: string = "Sheet1!A:A"): Promise<string[][]> {
    const account = await prisma.gmail_accounts.findUnique({
      where: { id: accountId },
      select: { refresh_token_encrypted: true, email: true }
    });

    if (!account?.refresh_token_encrypted) {
      throw new Error("Gmail account not found or not authenticated");
    }

    const oauth = new google.auth.OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      process.env.GMAIL_REDIRECT_URI
    );

    oauth.setCredentials({
      refresh_token: decrypt(account.refresh_token_encrypted)
    });

    const sheets = google.sheets({ version: "v4", auth: oauth });

    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range
      });

      return (response.data.values || []) as string[][];
    } catch (error: any) {
      const statusCode = Number(error?.code ?? error?.response?.status ?? 500);
      const apiMessage = String(error?.response?.data?.error?.message ?? error?.message ?? "");
      const reason = String(error?.response?.data?.error?.errors?.[0]?.reason ?? "");

      if (statusCode === 401) {
        throw new Error("Google authorization expired. Reconnect your Gmail account, then try importing again.");
      }

      if (statusCode === 404) {
        throw new Error("Google Sheet not found. Check the Sheet URL/ID and make sure the file still exists.");
      }

      if (statusCode === 403) {
        const apiDisabled =
          reason.toLowerCase() === "accessnotconfigured" ||
          /has not been used in project|is disabled|access not configured/i.test(apiMessage);

        if (apiDisabled) {
          throw new Error(
            "Google Sheets API is not enabled for this OAuth app. Enable Google Sheets API in Google Cloud Console for your client ID, then reconnect Gmail and retry."
          );
        }

        const missingScope =
          reason.toLowerCase() === "insufficientpermissions" ||
          /insufficient authentication scopes?/i.test(apiMessage);

        if (missingScope) {
          throw new Error(
            "Your Gmail connection does not have Google Sheets permission. Reconnect this Gmail account and grant Sheets access, then retry."
          );
        }

        throw new Error(
          `Access denied. Share the sheet with ${account.email} (Viewer) or set it to "Anyone with the link".`
        );
      }

      throw new Error(`Failed to read Google Sheet: ${error.message}`);
    }
  },

  extractSpreadsheetId(urlOrId: string): string {
    const input = urlOrId.trim();

    // Handle full Google Sheets URL variants.
    const urlMatch = input.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    if (urlMatch?.[1]) {
      return urlMatch[1];
    }

    // Detect publish links like /spreadsheets/d/e/... which do not contain spreadsheetId.
    if (/\/spreadsheets\/d\/e\//.test(input)) {
      throw new Error("Unsupported Google Sheets publish link. Use the normal sheet URL from your browser address bar.");
    }

    // Handle URLs that include ?id=<spreadsheetId>
    try {
      const parsed = new URL(input);
      const idFromQuery = parsed.searchParams.get("id")?.trim();
      if (idFromQuery) {
        return idFromQuery;
      }
    } catch {
      // Not a URL, continue with raw-id fallback.
    }

    // Assume it's already just the ID
    return input;
  }
};
