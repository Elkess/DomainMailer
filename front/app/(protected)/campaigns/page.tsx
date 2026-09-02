"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { api, Campaign, apiBase } from "../../../lib/api";

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
  const router = useRouter();
  const [campaigns, setCampaigns] = useState<CampaignWithStats[]>([]);
  const campaignsRef = useRef<CampaignWithStats[]>([]);
  const [accounts, setAccounts] = useState<Array<{ id: string; email: string; status: string }>>([]);
  const [error, setError] = useState("");
  const [creating, setCreating] = useState(false);
  const [selectedCampaigns, setSelectedCampaigns] = useState<Set<string>>(new Set());
  const [deleting, setDeleting] = useState(false);
  const [resuming, setResuming] = useState(false);
  const [pausing, setPausing] = useState(false);
  const [uploadingCsv, setUploadingCsv] = useState(false);
  const [importingSheet, setImportingSheet] = useState(false);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [sheetForm, setSheetForm] = useState({ url: "", range: "Sheet1!A:Z" });
  const [collapsed, setCollapsed] = useState({
    gmailAccounts: true,
    createForm: true,
    recipients: true,
    followUps: true,
    campaignList: false,
  });

  const [form, setForm] = useState({
    gmailAccountId: "",
    name: "",
    subjectTemplate: "Interested in your domain",
    bodyTemplate: "Hello,\n\nI hope this message finds you well. I am interested in discussing a potential opportunity with your company.\n\nBest regards",
    dailyLimit: 40,
    delayMinSeconds: 60,
    delayMaxSeconds: 120,
    schedulingMode: "now" as "now" | "scheduled",
    startDateTime: "",
    emails: "",
    // Follow-up messages (will use "Re: [original subject]" for threading)
    followUp2Body: "Hi again,\n\nI wanted to follow up on my previous email. Are you interested in discussing this opportunity?\n\nBest regards",
    followUp2DelayHours: 72,
    followUp3Body: "Hello,\n\nJust checking in one more time. Would love to hear your thoughts.\n\nBest regards",
    followUp3DelayHours: 72,
    followUp4Body: "Hi,\n\nThis will be my last follow-up. If you're interested, please let me know.\n\nBest regards",
    followUp4DelayHours: 72
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

  const refreshSingleCampaign = async (campaignId: string) => {
    try {
      const stats = await api.getCampaignStats(campaignId);
      setCampaigns((prev) => {
        const updated = prev.map((campaign) =>
          campaign?.item?.id === campaignId ? { ...campaign, stats } : campaign
        );
        campaignsRef.current = updated;
        return updated;
      });
    } catch (err: any) {
      console.error("Failed to refresh campaign:", err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // Connect to Server-Sent Events for real-time updates
  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("domainmailer_token") : null;
    if (!token) return;

    const eventSource = new EventSource(`${apiBase}/campaigns/events?token=${encodeURIComponent(token)}`);

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "campaign:update" && data.campaignId) {
          refreshSingleCampaign(data.campaignId);
        }
      } catch (err) {
        console.error("Failed to parse SSE event:", err);
      }
    };

    eventSource.onerror = () => {
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const onCreateCampaign = async (event: FormEvent) => {
    event.preventDefault();
    setCreating(true);
    setError("");
    try {
      const payload: any = {
        gmailAccountId: form.gmailAccountId,
        name: form.name,
        subjectTemplate: form.subjectTemplate,
        bodyTemplate: form.bodyTemplate,
        dailyLimit: form.dailyLimit,
        delayMinSeconds: form.delayMinSeconds,
        delayMaxSeconds: form.delayMaxSeconds
      };
      
      // Only set startTime for scheduled campaigns since campaign is created as DRAFT first
      if (form.schedulingMode === "scheduled" && form.startDateTime) {
        payload.startTime = new Date(form.startDateTime).toISOString();
      }
      
      // Add follow-up messages if provided
      if (form.followUp2Body) {
        payload.followUp2Body = form.followUp2Body;
        payload.followUp2DelayHours = form.followUp2DelayHours;
      }
      if (form.followUp3Body) {
        payload.followUp3Body = form.followUp3Body;
        payload.followUp3DelayHours = form.followUp3DelayHours;
      }
      if (form.followUp4Body) {
        payload.followUp4Body = form.followUp4Body;
        payload.followUp4DelayHours = form.followUp4DelayHours;
      }
      
      const { campaign } = await api.createCampaign(payload);
      
      // Add leads (required - at least one method must be provided)
      let leadsAdded = false;
      
      // 1. Upload CSV if provided
      if (csvFile) {
        try {
          const text = await csvFile.text();
          await api.uploadLeads(campaign.id, text);
          leadsAdded = true;
        } catch (csvErr: any) {
          console.error("Failed to upload CSV:", csvErr);
          setError(`Campaign created but failed to upload CSV: ${csvErr.message}`);
        }
      }
      
      // 2. Import from Google Sheets if provided
      if (sheetForm.url.trim()) {
        try {
          await api.importGoogleSheet(campaign.id, form.gmailAccountId, sheetForm.url, sheetForm.range);
          leadsAdded = true;
        } catch (sheetErr: any) {
          console.error("Failed to import from Google Sheets:", sheetErr);
          setError(`Campaign created but failed to import from Google Sheets: ${sheetErr.message}`);
        }
      }
      
      // 3. Add manual emails if provided
      if (form.emails.trim()) {
        try {
          await api.addLead(campaign.id, { emails: form.emails });
          leadsAdded = true;
        } catch (emailErr: any) {
          console.error("Failed to add emails:", emailErr);
          setError(`Campaign created but failed to add emails: ${emailErr.message}`);
        }
      }
      
      if (!leadsAdded) {
        setError("Campaign created but no leads were added. Please add recipients manually.");
      } else {
        // Activate the campaign now that all leads are loaded
        await api.campaignAction(campaign.id, "start");
      }
      
      // Reset form
      setForm((prev) => ({ ...prev, name: "", startDateTime: "", schedulingMode: "now", emails: "" }));
      setCsvFile(null);
      setSheetForm({ url: "", range: "Sheet1!A:Z" });
      
      // Just refresh the single new campaign's stats instead of everything
      try {
        const stats = await api.getCampaignStats(campaign.id);
        const newCampaignWithStats = { item: campaign, stats };
        setCampaigns((prev) => {
          const updated = [newCampaignWithStats, ...prev];
          campaignsRef.current = updated;
          return updated;
        });
      } catch {
        await load();
      }
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

  const onDisconnectAccount = async (accountId: string) => {
    if (!confirm("Disconnect this Gmail account?")) return;
    try {
      await api.disconnectGmail(accountId);
      await load();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const toggleCampaignSelection = (campaignId: string) => {
    setSelectedCampaigns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(campaignId)) {
        newSet.delete(campaignId);
      } else {
        newSet.add(campaignId);
      }
      return newSet;
    });
  };

  const toggleSelectAll = () => {
    if (selectedCampaigns.size === campaigns.length) {
      setSelectedCampaigns(new Set());
    } else {
      setSelectedCampaigns(new Set(campaigns.map((c) => c.item.id)));
    }
  };

  const onDeleteSelected = async () => {
    if (selectedCampaigns.size === 0) return;
    
    if (!confirm(`Delete ${selectedCampaigns.size} campaign(s)? This action cannot be undone.`)) return;
    
    setDeleting(true);
    setError("");
    try {
      await Promise.all(
        Array.from(selectedCampaigns).map((campaignId) => 
          api.campaignAction(campaignId, "delete")
        )
      );
      setSelectedCampaigns(new Set());
      await load();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setDeleting(false);
    }
  };

  const onResumeSelected = async () => {
    if (selectedCampaigns.size === 0) return;
    const targets = campaigns.filter((c) => selectedCampaigns.has(c.item.id) && c.item.status === "PAUSED");
    if (targets.length === 0) {
      setError("No paused campaigns selected to resume.");
      return;
    }
    if (!confirm(`Resume ${targets.length} campaign(s)?`)) return;
    setResuming(true);
    setError("");
    try {
      await Promise.all(targets.map((t) => api.campaignAction(t.item.id, "resume")));
      setSelectedCampaigns(new Set());
      await load();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setResuming(false);
    }
  };

  const onPauseSelected = async () => {
    if (selectedCampaigns.size === 0) return;
    const targets = campaigns.filter((c) => selectedCampaigns.has(c.item.id) && c.item.status === "ACTIVE");
    if (targets.length === 0) {
      setError("No active campaigns selected to pause.");
      return;
    }
    if (!confirm(`Pause ${targets.length} campaign(s)?`)) return;
    setPausing(true);
    setError("");
    try {
      await Promise.all(targets.map((t) => api.campaignAction(t.item.id, "pause")));
      setSelectedCampaigns(new Set());
      await load();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setPausing(false);
    }
  };

  const selectedPausedCount = campaigns.filter((c) => selectedCampaigns.has(c.item.id) && c.item.status === "PAUSED").length;
  const selectedActiveCount = campaigns.filter((c) => selectedCampaigns.has(c.item.id) && c.item.status === "ACTIVE").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-sky-400">Campaigns</h1>
          {campaigns.length > 0 && (
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></div>
              <span>Live updates</span>
            </div>
          )}
        </div>

        {error && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Gmail Accounts */}
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCollapsed((p) => ({ ...p, gmailAccounts: !p.gmailAccounts }))}
                className="text-slate-400 hover:text-slate-200 transition text-lg leading-none"
              >
                {collapsed.gmailAccounts ? "▶" : "▼"}
              </button>
              <h2 className="text-lg font-semibold text-sky-400">Gmail Accounts</h2>
            </div>
            {!collapsed.gmailAccounts && (
              <button
                onClick={onConnectGmail}
                className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500 transition"
              >
                + Connect Gmail
              </button>
            )}
          </div>
          {!collapsed.gmailAccounts && (
          <div className="mt-4 space-y-2">
            {accounts.length === 0 ? (
              <p className="text-sm text-slate-400">No Gmail accounts connected yet.</p>
            ) : (
              accounts.map((account) => {
                const needsReconnect = account.status === "ERROR" || account.status === "REVOKED";
                return (
                  <div key={account.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-lg border border-slate-800 bg-slate-950 p-3">
                    <div>
                      <div className="font-medium text-slate-200 break-all">{account.email}</div>
                      <div className="text-xs text-slate-400">
                        {needsReconnect ? "Reconnect needed" : account.status}
                      </div>
                    </div>
                    {needsReconnect ? (
                      <button
                        onClick={onConnectGmail}
                        className="w-fit rounded bg-amber-600 px-3 py-1 text-xs font-semibold text-white hover:bg-amber-500 transition"
                      >
                        Reconnect Gmail
                      </button>
                    ) : (
                      <button
                        onClick={() => onDisconnectAccount(account.id)}
                        className="w-fit rounded border border-slate-700 px-3 py-1 text-xs text-slate-400 hover:bg-slate-800 transition"
                      >
                        Disconnect
                      </button>
                    )}
                  </div>
                );
              })
            )}
          </div>
          )}
        </section>

        {/* Create Campaign Form */}
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => setCollapsed((p) => ({ ...p, createForm: !p.createForm }))}
              className="text-slate-400 hover:text-slate-200 transition text-lg leading-none"
            >
              {collapsed.createForm ? "▶" : "▼"}
            </button>
            <h2 className="text-lg font-semibold text-sky-400">Create New Campaign</h2>
          </div>
          {!collapsed.createForm && (
          <form className="grid gap-6 md:grid-cols-2" onSubmit={onCreateCampaign}>
            <div className="flex flex-col gap-1.5 md:col-span-2 sm:col-span-1">
              <label className="text-xs font-medium uppercase tracking-wider text-slate-400">Campaign Name</label>
              <input 
                className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" 
                placeholder="e.g. Domain Sales Q1" 
                value={form.name} 
                onChange={(e) => setForm({ ...form, name: e.target.value })} 
                required
              />
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2 sm:col-span-1">
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

            <div className="flex flex-col gap-1.5 md:col-span-2 sm:col-span-1">
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

            <div className="grid grid-cols-2 gap-4 md:col-span-2 sm:col-span-1">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-400">Min Delay (sec)</label>
                <input 
                  className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" 
                  type="number" 
                  placeholder="60" 
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
                  placeholder="120" 
                  value={form.delayMaxSeconds} 
                  onChange={(e) => setForm({ ...form, delayMaxSeconds: Number(e.target.value) })}
                  required 
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-xs font-medium uppercase tracking-wider text-slate-400">Campaign Start</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm transition hover:border-sky-500">
                  <input 
                    type="radio" 
                    name="schedulingMode" 
                    value="now" 
                    checked={form.schedulingMode === "now"}
                    onChange={(e) => setForm({ ...form, schedulingMode: "now" })}
                    className="accent-sky-500"
                  />
                  <span>Start Immediately</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm transition hover:border-sky-500">
                  <input 
                    type="radio" 
                    name="schedulingMode" 
                    value="scheduled" 
                    checked={form.schedulingMode === "scheduled"}
                    onChange={(e) => {
                      const currentDateTime = new Date().toISOString().slice(0, 16);
                      setForm({ 
                        ...form, 
                        schedulingMode: "scheduled",
                        startDateTime: form.startDateTime || currentDateTime
                      });
                    }}
                    className="accent-sky-500"
                  />
                  <span>Schedule for Later</span>
                </label>
              </div>
              {form.schedulingMode === "scheduled" && (
                <input 
                  className="mt-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" 
                  type="datetime-local" 
                  value={form.startDateTime} 
                  onChange={(e) => setForm({ ...form, startDateTime: e.target.value })}
                  required={form.schedulingMode === "scheduled"}
                  min={new Date().toISOString().slice(0, 16)}
                />
              )}
            </div>

            {/* Email Recipients Section - REQUIRED */}
            <div className="md:col-span-2 rounded-lg border border-amber-600 bg-amber-950/20 p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => setCollapsed((p) => ({ ...p, recipients: !p.recipients }))}
                  className="text-slate-400 hover:text-slate-200 transition text-lg leading-none"
                >
                  {collapsed.recipients ? "▶" : "▼"}
                </button>
                <h3 className="text-base font-semibold text-amber-400">📧 Add Recipients (Required)</h3>
              </div>
              {!collapsed.recipients && (
              <>
              <p className="mb-6 text-xs text-slate-400">Add at least one email address to create the campaign. Choose from CSV upload, Google Sheets, or manual entry.</p>
              
              {/* Upload CSV */}
              <div className="mb-6">
                <h4 className="mb-2 text-sm font-semibold text-slate-300">Upload CSV File</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <label className="inline-block cursor-pointer rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-sm hover:bg-slate-800 transition text-center sm:text-left">
                    {csvFile ? csvFile.name : "Choose CSV File"}
                    <input
                      type="file"
                      accept=".csv"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) setCsvFile(file);
                      }}
                    />
                  </label>
                  {csvFile && (
                    <button
                      type="button"
                      onClick={() => setCsvFile(null)}
                      className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 transition"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Import from Google Sheets */}
              <div className="mb-6">
                <h4 className="mb-2 text-sm font-semibold text-slate-300">Import from Google Sheets</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    className="flex-1 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm transition focus:border-sky-500 focus:outline-none"
                    placeholder="Google Sheets URL"
                    value={sheetForm.url}
                    onChange={(e) => setSheetForm({ ...sheetForm, url: e.target.value })}
                  />
                  <input
                    type="text"
                    className="w-full sm:w-32 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm transition focus:border-sky-500 focus:outline-none"
                    placeholder="Sheet1!A:Z"
                    value={sheetForm.range}
                    onChange={(e) => setSheetForm({ ...sheetForm, range: e.target.value })}
                  />
                </div>
              </div>

              {/* Add Manually */}
              <div>
                <h4 className="mb-2 text-sm font-semibold text-slate-300">Add Manually</h4>
                <textarea
                  className="w-full min-h-[120px] rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm transition focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  placeholder="Enter email addresses (one per line)&#10;example1@domain.com&#10;example2@company.com&#10;example3@business.org"
                  value={form.emails}
                  onChange={(e) => setForm({ ...form, emails: e.target.value })}
                />
              </div>
              
              <p className="mt-4 text-[10px] text-amber-400/80">⚠️ At least one recipient method must be provided (CSV, Google Sheets, or manual entry)</p>
              </>
              )}
            </div>

            {/* Follow-up Messages Section */}
            <div className="md:col-span-2 rounded-lg border border-slate-700 bg-slate-950 p-4">
              <div className="flex items-center gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => setCollapsed((p) => ({ ...p, followUps: !p.followUps }))}
                  className="text-slate-400 hover:text-slate-200 transition text-lg leading-none"
                >
                  {collapsed.followUps ? "▶" : "▼"}
                </button>
                <h3 className="text-sm font-semibold text-amber-400">📧 Follow-up Sequence (Optional)</h3>
              </div>
              {!collapsed.followUps && (
              <>
              <p className="mb-4 text-xs text-slate-400">Set up to 3 follow-up messages that will be sent as replies if the recipient doesn't respond. Each follow-up will stop if they reply.</p>
              
              {/* Follow-up 2 */}
              <div className="mb-6 rounded-lg border border-slate-800 bg-slate-900 p-4">
                <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h4 className="text-xs font-semibold text-sky-400">Follow-up #2</h4>
                  <div className="flex items-center gap-2">
                    <label className="text-xs text-slate-400">Send after</label>
                    <input 
                      type="number" 
                      className="w-16 rounded border border-slate-700 bg-slate-950 px-2 py-1 text-xs transition focus:border-sky-500 focus:outline-none"
                      value={form.followUp2DelayHours}
                      onChange={(e) => setForm({ ...form, followUp2DelayHours: Number(e.target.value) })}
                      min="1"
                    />
                    <span className="text-xs text-slate-400">hours</span>
                  </div>
                </div>
                <p className="mb-2 text-[10px] text-slate-400">Subject will be: Re: {form.subjectTemplate}</p>
                <textarea 
                  className="w-full min-h-[80px] rounded border border-slate-800 bg-slate-950 px-3 py-2 text-xs transition focus:border-sky-500 focus:outline-none"
                  placeholder="Follow-up message..."
                  value={form.followUp2Body}
                  onChange={(e) => setForm({ ...form, followUp2Body: e.target.value })}
                />
              </div>

              {/* Follow-up 3 */}
              <div className="mb-6 rounded-lg border border-slate-800 bg-slate-900 p-4">
                <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h4 className="text-xs font-semibold text-sky-400">Follow-up #3</h4>
                  <div className="flex items-center gap-2">
                    <label className="text-xs text-slate-400">Send after</label>
                    <input 
                      type="number" 
                      className="w-16 rounded border border-slate-700 bg-slate-950 px-2 py-1 text-xs transition focus:border-sky-500 focus:outline-none"
                      value={form.followUp3DelayHours}
                      onChange={(e) => setForm({ ...form, followUp3DelayHours: Number(e.target.value) })}
                      min="1"
                    />
                    <span className="text-xs text-slate-400">hours</span>
                  </div>
                </div>
                <p className="mb-2 text-[10px] text-slate-400">Subject will be: Re: {form.subjectTemplate}</p>
                <textarea 
                  className="w-full min-h-[80px] rounded border border-slate-800 bg-slate-950 px-3 py-2 text-xs transition focus:border-sky-500 focus:outline-none"
                  placeholder="Follow-up message..."
                  value={form.followUp3Body}
                  onChange={(e) => setForm({ ...form, followUp3Body: e.target.value })}
                />
              </div>

              {/* Follow-up 4 */}
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
                <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h4 className="text-xs font-semibold text-sky-400">Follow-up #4 (Final)</h4>
                  <div className="flex items-center gap-2">
                    <label className="text-xs text-slate-400">Send after</label>
                    <input 
                      type="number" 
                      className="w-16 rounded border border-slate-700 bg-slate-950 px-2 py-1 text-xs transition focus:border-sky-500 focus:outline-none"
                      value={form.followUp4DelayHours}
                      onChange={(e) => setForm({ ...form, followUp4DelayHours: Number(e.target.value) })}
                      min="1"
                    />
                    <span className="text-xs text-slate-400">hours</span>
                  </div>
                </div>
                <p className="mb-2 text-[10px] text-slate-400">Subject will be: Re: {form.subjectTemplate}</p>
                <textarea 
                  className="w-full min-h-[80px] rounded border border-slate-800 bg-slate-950 px-3 py-2 text-xs transition focus:border-sky-500 focus:outline-none"
                  placeholder="Follow-up message..."
                  value={form.followUp4Body}
                  onChange={(e) => setForm({ ...form, followUp4Body: e.target.value })}
                />
              </div>
              </>
              )}
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
          )}
        </section>

        {/* Campaigns List */}
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => setCollapsed((p) => ({ ...p, campaignList: !p.campaignList }))}
              className="text-slate-400 hover:text-slate-200 transition text-lg leading-none"
            >
              {collapsed.campaignList ? "▶" : "▼"}
            </button>
            <h2 className="text-lg font-semibold text-sky-400">Your Campaigns</h2>
          </div>
          {!collapsed.campaignList && (
            <>
              <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                {campaigns.length > 0 && (
                  <div className="flex flex-wrap items-center gap-3">
                    {selectedCampaigns.size > 0 && (
                      <>
                        <span className="text-sm text-slate-400">
                          {selectedCampaigns.size} selected
                        </span>
                        <button
                          onClick={onResumeSelected}
                          disabled={resuming || pausing || deleting || selectedPausedCount === 0}
                          className="rounded-lg bg-green-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-green-500 transition disabled:opacity-50"
                        >
                          {resuming ? "Resuming..." : "Resume Selected"}
                        </button>
                        <button
                          onClick={onPauseSelected}
                          disabled={pausing || resuming || deleting || selectedActiveCount === 0}
                          className="rounded-lg bg-yellow-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-yellow-500 transition disabled:opacity-50"
                        >
                          {pausing ? "Pausing..." : "Pause Selected"}
                        </button>
                        <button
                          onClick={onDeleteSelected}
                          disabled={deleting || resuming || pausing}
                          className="rounded-lg bg-red-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-500 transition disabled:opacity-50"
                        >
                          {deleting ? "Deleting..." : "Delete Selected"}
                        </button>
                      </>
                    )}
                    <button
                      onClick={toggleSelectAll}
                      className="rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-400 hover:bg-slate-800 transition"
                    >
                      {selectedCampaigns.size === campaigns.length ? "Deselect All" : "Select All"}
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {campaigns.length === 0 ? (
                  <p className="col-span-full text-center text-slate-400">No campaigns yet. Create one above!</p>
                ) : (
                  campaigns.map(({ item, stats }) => {
                    if (!item?.id) return null;
                    const startDate = item.startTime ? new Date(item.startTime) : null;
                    return (
                      <div
                        key={item.id}
                        className={`relative rounded-lg border bg-slate-950 p-4 transition ${
                          selectedCampaigns.has(item.id)
                            ? "border-sky-500 ring-2 ring-sky-500/20"
                            : "border-slate-800 hover:border-sky-500 hover:bg-slate-900"
                        }`}
                      >
                        <div className="absolute top-3 right-3 z-10">
                          <input
                            type="checkbox"
                            checked={selectedCampaigns.has(item.id)}
                            onChange={(e) => {
                              e.stopPropagation();
                              toggleCampaignSelection(item.id);
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className="h-5 w-5 cursor-pointer rounded border-slate-700 bg-slate-900 text-sky-500 focus:ring-2 focus:ring-sky-500"
                          />
                        </div>
                        <div
                          onClick={() => router.push(`/campaigns/${item.id}`)}
                          className="cursor-pointer pr-10"
                        >
                          <div className="mb-3">
                            <h3 className="font-semibold text-slate-200 break-all">{item.name}</h3>
                            {item.gmailAccountEmail && (
                              <div className="mt-1 text-xs text-slate-400 break-all">
                                Sender: {item.gmailAccountEmail}
                                {item.gmailAccountStatus && item.gmailAccountStatus !== "ACTIVE" && (
                                  <span className="ml-2 rounded bg-amber-500/20 px-2 py-0.5 text-[10px] text-amber-400">
                                    {item.gmailAccountStatus}
                                  </span>
                                )}
                              </div>
                            )}
                            <div className="mt-1 flex flex-wrap items-center gap-2">
                              <span className={`rounded px-2 py-0.5 text-[10px] font-semibold ${
                                item.status === "ACTIVE" ? "bg-green-500/20 text-green-400" :
                                item.status === "PAUSED" ? "bg-yellow-500/20 text-yellow-400" :
                                item.status === "DRAFT" ? "bg-slate-500/20 text-slate-400" :
                                "bg-blue-500/20 text-blue-400"
                              }`}>
                                {item.status}
                              </span>
                              {item.status === "ACTIVE" && startDate && startDate > new Date() && (
                                <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[10px] text-amber-400">
                                  ⏰ Scheduled
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="mb-3 grid grid-cols-1 gap-2 text-xs sm:grid-cols-3">
                            <div>
                              <div className="text-slate-400">Pending</div>
                              <div className="font-semibold text-slate-200">{stats.pending}</div>
                            </div>
                            <div>
                              <div className="text-slate-400">Sent</div>
                              <div className="font-semibold text-green-400">{stats.sent}</div>
                            </div>
                            <div>
                              <div className="text-slate-400">Failed</div>
                              <div className="font-semibold text-red-400">{stats.failed}</div>
                            </div>
                          </div>

                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                            <div
                              className="h-full bg-gradient-to-r from-sky-500 to-green-500 transition-all duration-500"
                              style={{ width: `${stats.progress}%` }}
                            ></div>
                          </div>

                          <div className="mt-2 text-right text-xs text-slate-400">{stats.progress}% complete</div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}