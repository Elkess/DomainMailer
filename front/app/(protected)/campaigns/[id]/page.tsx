"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { api, Campaign } from "../../../../lib/api";

interface CampaignStats {
  pending: number;
  sent: number;
  failed: number;
  progress: number;
}

export default function CampaignDetailPage() {
  const params = useParams();
  const router = useRouter();
  const campaignId = params.id as string;
  
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [stats, setStats] = useState<CampaignStats | null>(null);
  const [leads, setLeads] = useState<Array<{ id: string; email: string; status: string; sentAt: string | null; createdAt: string; currentSequenceStep?: number }>>([]);
  const [loading, setLoading] = useState(true);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [error, setError] = useState("");
  const [showLeads, setShowLeads] = useState(false);

  const loadCampaign = async () => {
    try {
      setLoading(true);
      const [campaignData, statsData] = await Promise.all([
        api.getCampaigns(),
        api.getCampaignStats(campaignId)
      ]);
      const camp = campaignData.find(c => c.id === campaignId);
      if (!camp) {
        setError("Campaign not found");
        return;
      }
      setCampaign(camp);
      setStats(statsData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadLeads = async () => {
    try {
      setLoadingLeads(true);
      const { leads: leadsData } = await api.getLeads(campaignId);
      setLeads(leadsData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoadingLeads(false);
    }
  };

  useEffect(() => {
    loadCampaign();
  }, [campaignId]);

  useEffect(() => {
    if (showLeads) {
      loadLeads();
    }
  }, [showLeads]);

  // SSE for real-time updates
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const eventSource = new EventSource(`http://localhost:4000/api/campaigns/events?token=${token}`);

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.campaignId === campaignId) {
        loadCampaign();
        if (showLeads) {
          loadLeads();
        }
      }
    };

    eventSource.onerror = () => {
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [campaignId, showLeads]);

  const handleCampaignAction = async (action: "start" | "pause" | "delete") => {
    try {
      if (action === "delete" && !confirm("Are you sure you want to delete this campaign?")) {
        return;
      }
      await api.campaignAction(campaignId, action);
      if (action === "delete") {
        router.push("/campaigns");
      } else {
        await loadCampaign();
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const onDeleteLead = async (leadId: string) => {
    if (!confirm("Delete this lead?")) return;
    try {
      await api.deleteLead(leadId);
      await loadLeads();
      await loadCampaign();
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-slate-400">Loading campaign...</div>
      </div>
    );
  }

  if (!campaign || !stats) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-red-400">{error || "Campaign not found"}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Back button */}
        <button
          onClick={() => router.push("/campaigns")}
          className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition"
        >
          <span>←</span> Back to Campaigns
        </button>

        {/* Error message */}
        {error && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Campaign Header */}
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-sky-400">{campaign.name}</h1>
              <div className="mt-2 flex items-center gap-2 text-sm">
                <span className={`rounded px-2 py-1 text-xs font-semibold ${
                  campaign.status === "ACTIVE" ? "bg-green-500/20 text-green-400" :
                  campaign.status === "PAUSED" ? "bg-yellow-500/20 text-yellow-400" :
                  campaign.status === "DRAFT" ? "bg-slate-500/20 text-slate-400" :
                  "bg-blue-500/20 text-blue-400"
                }`}>
                  {campaign.status}
                </span>
                {campaign.status === "ACTIVE" && campaign.startTime && new Date(campaign.startTime) > new Date() && (
                  <span className="rounded bg-amber-500/20 px-2 py-1 text-xs text-amber-400">
                    ⏰ Starts: {new Date(campaign.startTime).toLocaleString()}
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              {campaign.status === "DRAFT" && (
                <button
                  onClick={() => handleCampaignAction("start")}
                  className="rounded bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-500 transition"
                >
                  Start Campaign
                </button>
              )}
              {campaign.status === "ACTIVE" && (
                <button
                  onClick={() => handleCampaignAction("pause")}
                  className="rounded bg-yellow-600 px-4 py-2 text-sm font-semibold text-white hover:bg-yellow-500 transition"
                >
                  Pause
                </button>
              )}
              {campaign.status === "PAUSED" && (
                <button
                  onClick={() => handleCampaignAction("start")}
                  className="rounded bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-500 transition"
                >
                  Resume
                </button>
              )}
              <button
                onClick={() => handleCampaignAction("delete")}
                className="rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500 transition"
              >
                Delete
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            <div className="rounded-lg bg-slate-950 p-4">
              <div className="text-xs text-slate-400">Pending</div>
              <div className="text-2xl font-bold text-slate-200">{stats.pending}</div>
            </div>
            <div className="rounded-lg bg-slate-950 p-4">
              <div className="text-xs text-slate-400">Sent</div>
              <div className="text-2xl font-bold text-green-400">{stats.sent}</div>
            </div>
            <div className="rounded-lg bg-slate-950 p-4">
              <div className="text-xs text-slate-400">Failed</div>
              <div className="text-2xl font-bold text-red-400">{stats.failed}</div>
            </div>
            <div className="rounded-lg bg-slate-950 p-4">
              <div className="text-xs text-slate-400">Progress</div>
              <div className="text-2xl font-bold text-sky-400">{stats.progress}%</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-green-500 transition-all duration-500"
              style={{ width: `${stats.progress}%` }}
            ></div>
          </div>
        </section>

        {/* Campaign Settings Section */}
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-lg font-semibold text-sky-400">Campaign Settings</h2>
          
          {/* Initial Email Template */}
          {campaign.subjectTemplate && (
            <div className="mb-4 rounded-lg border border-slate-700 bg-slate-950 p-4">
              <h3 className="mb-2 text-sm font-semibold text-sky-300">Initial Email (Step 1)</h3>
              <div className="mb-2">
                <div className="text-xs text-slate-400">Subject:</div>
                <div className="rounded border border-slate-800 bg-slate-900 p-2 text-sm text-slate-200">
                  {campaign.subjectTemplate}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400">Body:</div>
                <div className="whitespace-pre-wrap rounded border border-slate-800 bg-slate-900 p-3 text-xs text-slate-300">
                  {campaign.bodyTemplate}
                </div>
              </div>
            </div>
          )}

          {/* Daily Limit & Timing */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-xs text-slate-400">Daily Limit</div>
              <div className="font-semibold text-slate-200">{campaign.dailyLimit} emails/day</div>
            </div>
            {campaign.startTime && (
              <div>
                <div className="text-xs text-slate-400">Scheduled Start</div>
                <div className="font-semibold text-slate-200">{new Date(campaign.startTime).toLocaleString()}</div>
              </div>
            )}
          </div>
        </section>

        {/* Follow-up Settings Section */}
        {(campaign.followUp2Body || campaign.followUp3Body || campaign.followUp4Body) && (
          <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-lg font-semibold text-sky-400">Follow-up Sequence</h2>
            <p className="mb-4 text-xs text-slate-400">These follow-ups will be sent automatically if recipients don't reply.</p>
            <div className="space-y-4">
              {campaign.followUp2Body && (
                <div className="rounded-lg border border-slate-700 bg-slate-950 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-sky-300">Follow-up #2</h3>
                    <span className="rounded bg-sky-500/20 px-2 py-1 text-xs text-sky-400">
                      Sent after {campaign.followUp2DelayHours || 72} hours
                    </span>
                  </div>
                  <div className="mb-2">
                    <div className="text-xs text-slate-400">Subject:</div>
                    <div className="rounded border border-slate-800 bg-slate-900 p-2 text-xs text-slate-300">
                      Re: {campaign.subjectTemplate || "(original subject)"}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Body:</div>
                    <div className="whitespace-pre-wrap rounded border border-slate-800 bg-slate-900 p-3 text-xs text-slate-300">
                      {campaign.followUp2Body}
                    </div>
                  </div>
                </div>
              )}
              {campaign.followUp3Body && (
                <div className="rounded-lg border border-slate-700 bg-slate-950 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-sky-300">Follow-up #3</h3>
                    <span className="rounded bg-sky-500/20 px-2 py-1 text-xs text-sky-400">
                      Sent after {campaign.followUp3DelayHours || 72} hours
                    </span>
                  </div>
                  <div className="mb-2">
                    <div className="text-xs text-slate-400">Subject:</div>
                    <div className="rounded border border-slate-800 bg-slate-900 p-2 text-xs text-slate-300">
                      Re: {campaign.subjectTemplate || "(original subject)"}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Body:</div>
                    <div className="whitespace-pre-wrap rounded border border-slate-800 bg-slate-900 p-3 text-xs text-slate-300">
                      {campaign.followUp3Body}
                    </div>
                  </div>
                </div>
              )}
              {campaign.followUp4Body && (
                <div className="rounded-lg border border-slate-700 bg-slate-950 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-sky-300">Follow-up #4 (Final)</h3>
                    <span className="rounded bg-sky-500/20 px-2 py-1 text-xs text-sky-400">
                      Sent after {campaign.followUp4DelayHours || 72} hours
                    </span>
                  </div>
                  <div className="mb-2">
                    <div className="text-xs text-slate-400">Subject:</div>
                    <div className="rounded border border-slate-800 bg-slate-900 p-2 text-xs text-slate-300">
                      Re: {campaign.subjectTemplate || "(original subject)"}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Body:</div>
                    <div className="whitespace-pre-wrap rounded border border-slate-800 bg-slate-900 p-3 text-xs text-slate-300">
                      {campaign.followUp4Body}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Leads Section */}
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-sky-400">Recipients</h2>
            <button
              onClick={() => setShowLeads(!showLeads)}
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800 transition"
            >
              {showLeads ? "Hide" : "Show"} Recipients
            </button>
          </div>

          {showLeads && (
            <div className="space-y-2">
              {loadingLeads ? (
                <div className="text-center text-slate-400">Loading recipients...</div>
              ) : leads.length === 0 ? (
                <div className="text-center text-slate-400">No recipients yet</div>
              ) : (
                leads.map((lead) => (
                  <div
                    key={lead.id}
                    className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950 p-3"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div className="font-medium text-slate-200">{lead.email}</div>
                        {lead.currentSequenceStep && lead.currentSequenceStep > 0 && (
                          <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] font-semibold text-sky-400">
                            Email {lead.currentSequenceStep}/4
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-400">
                        {lead.status} {lead.sentAt && `• Sent ${new Date(lead.sentAt).toLocaleString()}`}
                      </div>
                    </div>
                    <button
                      onClick={() => onDeleteLead(lead.id)}
                      className="rounded border border-slate-700 px-2 py-1 text-xs text-red-400 hover:bg-slate-800 transition"
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
