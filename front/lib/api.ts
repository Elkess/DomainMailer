export const apiBase = process.env.NEXT_PUBLIC_API_URL;

export interface Summary {
  totalCampaigns: number;
  activeCampaigns: number;
  sentToday: number;
  successRate: number;
  failedLeads: number;
  accountStats: Array<{ id: string; email: string; status: string }>;
}

export interface Campaign {
  id: string;
  name: string;
  status: "DRAFT" | "ACTIVE" | "PAUSED" | "COMPLETED" | "FAILED";
  dailyLimit: number;
  startTime?: string | null;
  subjectTemplate?: string;
  bodyTemplate?: string;
  delayMinSeconds?: number;
  delayMaxSeconds?: number;
  followUp2Body?: string | null;
  followUp2DelayHours?: number | null;
  followUp3Body?: string | null;
  followUp3DelayHours?: number | null;
  followUp4Body?: string | null;
  followUp4DelayHours?: number | null;
}

export interface CampaignStats {
  pending: number;
  sent: number;
  failed: number;
  total: number;
  progress: number;
  status: Campaign["status"];
}

const getToken = () => (typeof window === "undefined" ? "" : localStorage.getItem("domainmailer_token") ?? "");
export const setToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("domainmailer_token", token);
  }
};

export const clearToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("domainmailer_token");
  }
};

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const token = getToken();
  const response = await fetch(`${apiBase}${path}`, {
    ...init,
    headers: {
      "content-type": "application/json",
      ...(token ? { authorization: `Bearer ${token}` } : {}),
      ...(init?.headers ?? {})
    }
  });

  if (!response.ok) {
    const payload = await response.json().catch(() => ({ error: "Request failed" }));
    throw new Error(payload.error ?? "Request failed");
  }

  return response.json() as Promise<T>;
}

export const api = {
  register: (email: string, password: string) => request<{ token: string; user: { id: string; email: string } }>("/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password })
  }),
  login: (email: string, password: string) => request<{ token: string; user: { id: string; email: string } }>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password })
  }),
  me: () => request<{ user: { id: string; email: string } }>("/auth/me"),
  getSummary: () => request<Summary>("/dashboard/summary"),
  getCampaigns: async () => (await request<{ items: Campaign[] }>("/campaigns")).items,
  getCampaignStats: (campaignId: string) => request<CampaignStats>(`/campaigns/${campaignId}/stats`),
  getGmailAccounts: async () => (await request<{ items: Array<{ id: string; email: string; status: string }> }>("/gmail/accounts")).items,
  getGmailOAuthUrl: () => request<{ url: string }>("/gmail/oauth-url"),
  disconnectGmail: (accountId: string) => request<{ ok: true }>("/gmail/disconnect", {
    method: "POST",
    body: JSON.stringify({ accountId })
  }),
  createCampaign: (payload: {
    gmailAccountId: string;
    name: string;
    subjectTemplate: string;
    bodyTemplate: string;
    dailyLimit: number;
    delayMinSeconds: number;
    delayMaxSeconds: number;
    startTime?: string;
    followUp2Subject?: string;
    followUp2Body?: string;
    followUp2DelayHours?: number;
    followUp3Subject?: string;
    followUp3Body?: string;
    followUp3DelayHours?: number;
    followUp4Subject?: string;
    followUp4Body?: string;
    followUp4DelayHours?: number;
  }) => request<{ campaign: Campaign }>("/campaigns", { method: "POST", body: JSON.stringify(payload) }),
  campaignAction: (campaignId: string, action: "start" | "pause" | "resume" | "delete") =>
    request("/campaigns/action", { method: "POST", body: JSON.stringify({ campaignId, action }) }),
  uploadLeads: (campaignId: string, csv: string) =>
    request<{ inserted: number }>("/leads/upload-csv", { method: "POST", body: JSON.stringify({ campaignId, csv }) }),
  importGoogleSheet: (campaignId: string, gmailAccountId: string, sheetUrl: string, range?: string) =>
    request<{ inserted: number }>("/leads/import-google-sheet", { 
      method: "POST", 
      body: JSON.stringify({ campaignId, gmailAccountId, sheetUrl, range }) 
    }),
  addLead: (campaignId: string, lead: { emails: string }) =>
    request<{ leads: Array<{ id: string }>; inserted: number; total: number; skipped: number }>("/leads/add", { method: "POST", body: JSON.stringify({ campaignId, ...lead }) }),
  deleteLead: (leadId: string) =>
    request<{ ok: true }>("/leads/delete", { method: "POST", body: JSON.stringify({ leadId }) }),
  getLeads: (campaignId: string) =>
    request<{ leads: Array<{ id: string; email: string; status: string; sentAt: string | null; createdAt: string }> }>(`/campaigns/${campaignId}/leads`)
};
