"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { api, Campaign } from "../../../lib/api";

interface CampaignWithStats {
  item: Campaign;
  stats: {
    pending: number;
    sent: number;
    failed: number;
    progress: number;
  };
}

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<CampaignWithStats[]>([]);
  const campaignsRef = useRef<CampaignWithStats[]>([]);
  const [accounts, setAccounts] = useState<Array<{ id: string; email: string; status: string }>>([]);
  const [error, setError] = useState("");
  const [creating, setCreating] = useState(false);
  const [uploadingFor, setUploadingFor] = useState<string | null>(null);
  const [addingLeadFor, setAddingLeadFor] = useState<string | null>(null);
  const [viewingLeadsFor, setViewingLeadsFor] = useState<string | null>(null);
  const viewingLeadsForRef = useRef<string | null>(null);
  const [importingSheetFor, setImportingSheetFor] = useState<string | null>(null);
  const [sheetForm, setSheetForm] = useState({ url: "", range: "Sheet1!A:Z" });
  const [leads, setLeads] = useState<Array<{ id: string; email: string; status: string; sentAt: string | null; createdAt: string }>>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [leadForm, setLeadForm] = useState({
    emails: ""
  });
  const [form, setForm] = useState({
    gmailAccountId: "",
    name: "",
    subjectTemplate: "Interested in your domain",
    bodyTemplate: "Hello,\n\nI hope this message finds you well. I am interested in discussing a potential opportunity with your company.\n\nBest regards",
    dailyLimit: 30,
    delayMinSeconds: 15,
    delayMaxSeconds: 40
  });

  const load = async () => {
    try {
      const [campaignItems, gmailAccounts] = await Promise.all([api.getCampaigns(), api.getGmailAccounts()]);
      setAccounts(gmailAccounts);
      if (!form.gmailAccountId && gmailAccounts.length > 0) {
        setForm((prev) => ({ ...prev, gmailAccountId: gmailAccounts[0].id }));
      }
      const stats = await Promise.all(campaignItems.map((campaign) => api.getCampaignStats(campaign.id)));
      const campaignsWithStats = campaignItems.map((item, index) => ({ item, stats: stats[index] }));
      setCampaigns(campaignsWithStats);
      campaignsRef.current = campaignsWithStats;
    } catch (err: any) {
      setError(err.message);
    }
  };

  const refreshStats = async () => {
    try {
      if (campaignsRef.current.length === 0) return;
      
      const stats = await Promise.all(
        campaignsRef.current.map((campaign) => api.getCampaignStats(campaign.item.id))
      );
      const updatedCampaigns = campaignsRef.current.map((campaign, index) => ({
        ...campaign,
        stats: stats[index]
      }));
      setCampaigns(updatedCampaigns);
      campaignsRef.current = updatedCampaigns;
    } catch (err: any) {
      // Silently fail for background updates
      console.error("Failed to refresh stats:", err);
    }
  };

  const refreshSingleCampaign = async (campaignId: string) => {
    try {
      console.log(`🔄 Refreshing campaign: ${campaignId}, currently viewing leads for: ${viewingLeadsForRef.current}`);
      const stats = await api.getCampaignStats(campaignId);
      setCampaigns((prev) => {
        const updated = prev.map((campaign) => 
          campaign.item.id === campaignId ? { ...campaign, stats } : campaign
        );
        campaignsRef.current = updated;
        return updated;
      });
      
      // Also refresh leads if viewing this campaign
      if (viewingLeadsForRef.current === campaignId) {
        console.log(`📋 Refreshing leads for campaign: ${campaignId}`);
        await loadLeads(campaignId);
      } else {
        console.log(`⏭️  Not refreshing leads (viewingLeadsFor=${viewingLeadsForRef.current})`);
      }
    } catch (err: any) {
      console.error("❌ Failed to refresh campaign:", err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // Connect to Server-Sent Events for real-time updates
  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("domainmailer_token") : null;
    if (!token) return;

    const apiBase = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";
    const eventSource = new EventSource(`${apiBase}/campaigns/events?token=${encodeURIComponent(token)}`);

    eventSource.onopen = () => {
      console.log("✅ SSE connection established - Live updates active");
    };

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("📨 SSE event received:", JSON.stringify(data, null, 2));
        
        if (data.type === "connected") {
          console.log("✅ Initial connection event received");
        } else if (data.type === "campaign:update" && data.campaignId) {
          console.log(`🔄 Refreshing campaign: ${data.campaignId}`);
          // Refresh only the specific campaign that changed
          refreshSingleCampaign(data.campaignId);
        } else {
          console.log("⚠️ Unknown event type:", data.type);
        }
      } catch (err) {
        console.error("❌ Failed to parse SSE event:", err, "Raw data:", event.data);
      }
    };

    eventSource.onerror = (error) => {
      console.error("❌ SSE connection error:", error);
      eventSource.close();
    };

    return () => {
      console.log("🔌 SSE connection closed");
      eventSource.close();
    };
  }, []);

  const onCreateCampaign = async (event: FormEvent) => {
    event.preventDefault();
    setCreating(true);
    setError("");
    try {
      await api.createCampaign(form);
      setForm((prev) => ({ ...prev, name: "" }));
      await load();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setCreating(false);
    }
  };

  const onConnectGmail = async () => {
    try {
      const data = await api.getGmailOAuthUrl();
      window.open(data.url, "_blank", "width=900,height=800");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const onUploadCSV = async (campaignId: string, file: File) => {
    setUploadingFor(campaignId);
    setError("");
    try {
      const text = await file.text();
      const result = await api.uploadLeads(campaignId, text);
      alert(`Successfully uploaded ${result.inserted} leads!`);
      await load();
      if (viewingLeadsFor === campaignId) {
        await loadLeads(campaignId);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploadingFor(null);
    }
  };

  const onImportGoogleSheet = async (event: FormEvent) => {
    event.preventDefault();
    if (!importingSheetFor || !form.gmailAccountId) return;
    
    setError("");
    try {
      const result = await api.importGoogleSheet(
        importingSheetFor, 
        form.gmailAccountId, 
        sheetForm.url, 
        sheetForm.range
      );
      alert(`Successfully imported ${result.inserted} leads from Google Sheet!`);
      setSheetForm({ url: "", range: "Sheet1!A:Z" });
      setImportingSheetFor(null);
      await load();
      if (viewingLeadsFor === importingSheetFor) {
        await loadLeads(importingSheetFor);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const onAddLead = async (event: FormEvent) => {
    event.preventDefault();
    if (!addingLeadFor) return;
    
    setError("");
    try {
      const result = await api.addLead(addingLeadFor, leadForm);
      const message = result.skipped > 0 
        ? `Successfully added ${result.inserted} lead(s)! (${result.skipped} duplicate(s) skipped)`
        : `Successfully added ${result.inserted} lead(s)!`;
      alert(message);
      setLeadForm({ emails: "" });
      setAddingLeadFor(null);
      await load();
      if (viewingLeadsFor === addingLeadFor) {
        await loadLeads(addingLeadFor);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const onDeleteLead = async (campaignId: string, leadId: string) => {
    setError("");
    try {
      await api.deleteLead(leadId);
      await load();
      if (viewingLeadsFor === campaignId) {
        await loadLeads(campaignId);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const loadLeads = async (campaignId: string) => {
    console.log(`📨 Loading leads for campaign: ${campaignId}`);
    setLoadingLeads(true);
    try {
      const result = await api.getLeads(campaignId);
      console.log(`✅ Loaded ${result.leads.length} leads`);
      setLeads(result.leads);
    } catch (err: any) {
      console.error("❌ Failed to load leads:", err);
      setError(err.message);
    } finally {
      setLoadingLeads(false);
    }
  };

  const toggleViewLeads = async (campaignId: string) => {
    if (viewingLeadsFor === campaignId) {
      setViewingLeadsFor(null);
      viewingLeadsForRef.current = null;
      setLeads([]);
    } else {
      setViewingLeadsFor(campaignId);
      viewingLeadsForRef.current = campaignId;
      await loadLeads(campaignId);
    }
  };

  if (error) {
    return <p className="text-rose-400">{error}</p>;
  }

  return (
    <div className="space-y-5">
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold">Gmail Accounts</h2>
          <button className="rounded-md bg-sky-600 px-3 py-1 text-sm" onClick={onConnectGmail}>
            Connect Gmail
          </button>
        </div>
        <div className="space-y-2">
          {accounts.map((account) => (
            <div key={account.id} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm">
              <span>{account.email}</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">{account.status}</span>
                <button
                  className="rounded border border-slate-700 px-2 py-1"
                  onClick={async () => {
                    await api.disconnectGmail(account.id);
                    await load();
                  }}
                >
                  Disconnect
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="mb-4 text-lg font-semibold text-sky-400">Create New Campaign</h2>
        <form className="grid gap-6 md:grid-cols-2" onSubmit={onCreateCampaign}>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-slate-400">Campaign Name</label>
            <input 
              className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" 
              placeholder="e.g. Domain Sales Q1" 
              value={form.name} 
              onChange={(e) => setForm({ ...form, name: e.target.value })} 
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-slate-400">Gmail Sending Account</label>
            <select 
              className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" 
              value={form.gmailAccountId} 
              onChange={(e) => setForm({ ...form, gmailAccountId: e.target.value })}
              required
            >
              <option value="">Select an account</option>
              {accounts.filter((account) => account.status === "ACTIVE").map((account) => (
                <option key={account.id} value={account.id}>
                  {account.email}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-xs font-medium uppercase tracking-wider text-slate-400">Email Subject</label>
            <input 
              className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" 
              placeholder="e.g. Interested in your domain" 
              value={form.subjectTemplate} 
              onChange={(e) => setForm({ ...form, subjectTemplate: e.target.value })}
              required 
            />
          </div>

          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-xs font-medium uppercase tracking-wider text-slate-400">Email Message (Body)</label>
            <textarea 
              className="min-h-[120px] rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" 
              placeholder="Write your message here..." 
              value={form.bodyTemplate} 
              onChange={(e) => setForm({ ...form, bodyTemplate: e.target.value })}
              required 
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-slate-400">Daily Sending Limit</label>
            <input 
              className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" 
              type="number" 
              placeholder="30" 
              value={form.dailyLimit} 
              onChange={(e) => setForm({ ...form, dailyLimit: Number(e.target.value) })}
              required 
            />
            <p className="text-[10px] text-slate-500">Maximum emails to send every 24 hours.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium uppercase tracking-wider text-slate-400">Min Delay (sec)</label>
              <input 
                className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" 
                type="number" 
                placeholder="15" 
                value={form.delayMinSeconds} 
                onChange={(e) => setForm({ ...form, delayMinSeconds: Number(e.target.value) })}
                required 
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium uppercase tracking-wider text-slate-400">Max Delay (sec)</label>
              <input 
                className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" 
                type="number" 
                placeholder="40" 
                value={form.delayMaxSeconds} 
                onChange={(e) => setForm({ ...form, delayMaxSeconds: Number(e.target.value) })}
                required 
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <button 
              disabled={creating} 
              className="w-full rounded-lg bg-sky-600 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-sky-500 active:scale-[0.98] disabled:opacity-50"
            >
              {creating ? "Creating..." : "Launch Campaign"}
            </button>
          </div>
        </form>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900 p-4">
        <h2 className="mb-2 text-sm font-semibold">Add Recipients</h2>
        <p className="mb-3 text-xs text-slate-400">Add recipient email addresses. Your message will be sent to all recipients as-is (no personalization).</p>
        
        <div className="mb-3">
          <h3 className="mb-1 text-xs font-semibold text-sky-400">1. Upload CSV File</h3>
          <p className="mb-2 text-xs text-slate-400">Your CSV file should have an email column:</p>
          <div className="rounded-lg bg-slate-950 p-3 font-mono text-xs text-slate-300">
            email<br />
            john@example.com<br />
            jane@business.com
          </div>
        </div>

        <div className="mb-3">
          <h3 className="mb-1 text-xs font-semibold text-sky-400">2. Import from Google Sheets</h3>
          <p className="mb-2 text-xs text-slate-400">Import emails directly from a Google Sheet. The sheet must have an "email" column:</p>
          <div className="rounded-lg bg-slate-950 p-3 font-mono text-xs text-slate-300">
            email<br />
            john@example.com<br />
            jane@business.com
          </div>
          <div className="mt-2 space-y-1 text-[10px] text-slate-500">
            <p><strong>Step 1:</strong> In your Google Sheet, click "Share" → Set to "Anyone with the link" → "Viewer"</p>
            <p><strong>Step 2:</strong> Copy the sheet URL</p>
            <p><strong>Step 3:</strong> Paste the URL in the import form and specify which tab/columns to read (e.g., Sheet1!A:Z)</p>
          </div>
        </div>

        <div>
          <h3 className="mb-1 text-xs font-semibold text-sky-400">3. Add Manually</h3>
          <p className="text-xs text-slate-400">Click "Add Lead" button on any campaign to add recipients. You can add multiple emails at once (one per line).</p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold">Campaigns</h2>
          {campaigns.length > 0 && (
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></div>
              <span>Live updates</span>
            </div>
          )}
        </div>
        <div className="space-y-3">
          {campaigns.map(({ item, stats }) => (
            <div key={item.id} className="rounded-lg border border-slate-800 bg-slate-950 p-3">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-slate-400">{item.status}</div>
                </div>
                <div className="flex items-center gap-2">
                  <label className="cursor-pointer rounded border border-slate-700 px-2 py-1 text-xs hover:bg-slate-800">
                    {uploadingFor === item.id ? "Uploading..." : "Upload CSV"}
                    <input
                      type="file"
                      accept=".csv"
                      className="hidden"
                      disabled={uploadingFor === item.id}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) onUploadCSV(item.id, file);
                      }}
                    />
                  </label>
                  <button 
                    className="rounded border border-slate-700 px-2 py-1 text-xs hover:bg-slate-800" 
                    onClick={() => setImportingSheetFor(importingSheetFor === item.id ? null : item.id)}
                  >
                    {importingSheetFor === item.id ? "Cancel" : "Google Sheet"}
                  </button>
                  <button 
                    className="rounded border border-slate-700 px-2 py-1 text-xs hover:bg-slate-800" 
                    onClick={() => toggleViewLeads(item.id)}
                  >
                    {viewingLeadsFor === item.id ? "Hide Leads" : "View Leads"}
                  </button>
                  <button 
                    className="rounded border border-slate-700 px-2 py-1 text-xs hover:bg-slate-800" 
                    onClick={() => setAddingLeadFor(addingLeadFor === item.id ? null : item.id)}
                  >
                    {addingLeadFor === item.id ? "Cancel" : "Add Lead"}
                  </button>
                  <button className="rounded border border-slate-700 px-2 py-1 text-xs" onClick={async () => { await api.campaignAction(item.id, item.status === "ACTIVE" ? "pause" : "start"); await load(); }}>
                    {item.status === "ACTIVE" ? "Pause" : "Start"}
                  </button>
                  <button className="rounded border border-slate-700 px-2 py-1 text-xs" onClick={async () => { await api.campaignAction(item.id, "delete"); await load(); }}>
                    Delete
                  </button>
                </div>
              </div>
              
              {addingLeadFor === item.id && (
                <form onSubmit={onAddLead} className="mb-2 rounded-lg border border-slate-700 bg-slate-900 p-3">
                  <h3 className="mb-2 text-xs font-semibold text-sky-400">Add New Lead(s)</h3>
                  <p className="mb-2 text-[10px] text-slate-400">Enter one or more email addresses (one per line):</p>
                  <div className="flex flex-col gap-2">
                    <textarea
                      className="flex-1 rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm min-h-[100px] font-mono"
                      placeholder="recipient1@example.com&#10;recipient2@example.com&#10;recipient3@example.com"
                      value={leadForm.emails}
                      onChange={(e) => setLeadForm({ emails: e.target.value })}
                      required
                    />
                    <div className="flex gap-2">
                      <button type="button" onClick={() => setAddingLeadFor(null)} className="flex-1 rounded border border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-800">
                        Cancel
                      </button>
                      <button type="submit" className="flex-1 rounded bg-sky-600 px-4 py-2 text-sm font-medium hover:bg-sky-500">
                        Add Lead(s)
                      </button>
                    </div>
                  </div>
                </form>
              )}
              
              {importingSheetFor === item.id && (
                <form onSubmit={onImportGoogleSheet} className="mb-2 rounded-lg border border-slate-700 bg-slate-900 p-3">
                  <h3 className="mb-2 text-xs font-semibold text-sky-400">Import from Google Sheets</h3>
                  <div className="space-y-2">
                    <div>
                      <input
                        className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm"
                        placeholder="https://docs.google.com/spreadsheets/d/your-sheet-id/edit"
                        value={sheetForm.url}
                        onChange={(e) => setSheetForm({ ...sheetForm, url: e.target.value })}
                        required
                      />
                      <p className="mt-1 text-[10px] text-slate-500">Share your sheet: Click "Share" → "Anyone with the link" → "Viewer"</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <input
                          className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm"
                          placeholder="Sheet1!A:Z (which tab and columns to read)"
                          value={sheetForm.range}
                          onChange={(e) => setSheetForm({ ...sheetForm, range: e.target.value })}
                        />
                        <p className="mt-1 text-[10px] text-slate-500">Format: TabName!ColumnRange. Examples: Sheet1!A:Z or Leads!A1:B100</p>
                      </div>
                      <button type="submit" className="rounded bg-sky-600 px-4 py-2 text-sm font-medium hover:bg-sky-500">
                        Import
                      </button>
                    </div>
                  </div>
                </form>
              )}
              
              <div className="mb-1 h-2 rounded-full bg-slate-800">
                <div className="h-2 rounded-full bg-sky-500" style={{ width: `${Math.round(stats.progress * 100)}%` }} />
              </div>
              <div className="text-xs text-slate-400">Sent: {stats.sent} • Failed: {stats.failed} • Pending: {stats.pending}</div>
              
              {viewingLeadsFor === item.id && (
                <div className="mt-3 rounded-lg border border-slate-700 bg-slate-900 p-3">
                  <h3 className="mb-2 text-xs font-semibold text-sky-400">Recipients</h3>
                  {loadingLeads ? (
                    <p className="text-xs text-slate-400">Loading...</p>
                  ) : leads.length === 0 ? (
                    <p className="text-xs text-slate-400">No recipients yet. Add some using the buttons above.</p>
                  ) : (
                    <div className="max-h-60 space-y-2 overflow-y-auto">
                      {leads.map((lead) => (
                        <div key={lead.id} className="flex items-center justify-between rounded border border-slate-700 bg-slate-950 px-3 py-2">
                          <span className="text-sm">{lead.email}</span>
                          <div className="flex items-center gap-2">
                            {lead.status === "SENT" && (
                              <span className="rounded bg-green-900/30 px-2 py-1 text-xs text-green-400">✓ Sent</span>
                            )}
                            {lead.status === "PENDING" && (
                              <span className="rounded bg-slate-700 px-2 py-1 text-xs text-slate-300">⏳ Pending</span>
                            )}
                            {lead.status === "QUEUED" && (
                              <span className="rounded bg-blue-900/30 px-2 py-1 text-xs text-blue-400">⏱ Queued</span>
                            )}
                            {lead.status === "SENDING" && (
                              <span className="rounded bg-yellow-900/30 px-2 py-1 text-xs text-yellow-400">📤 Sending</span>
                            )}
                            {lead.status === "FAILED" && (
                              <span className="rounded bg-red-900/30 px-2 py-1 text-xs text-red-400">✗ Failed</span>
                            )}
                            {lead.sentAt && (
                              <span className="text-xs text-slate-500">{new Date(lead.sentAt).toLocaleString()}</span>
                            )}
                            {!lead.sentAt && lead.status !== "SENT" && lead.status !== "SENDING" && (
                              <button
                                className="rounded border border-slate-700 px-2 py-1 text-xs hover:bg-slate-800"
                                onClick={() => onDeleteLead(item.id, lead.id)}
                              >
                                Delete
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
