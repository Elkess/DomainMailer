"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { api, Campaign, apiBase } from "../../../../lib/api";

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
  const [countdown, setCountdown] = useState<string>("");

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
    loadLeads(); // Load leads to determine current step
  }, [campaignId]);

  useEffect(() => {
    if (showLeads) {
      loadLeads();
    }
  }, [showLeads]);

  // Countdown timer effect
  useEffect(() => {
    if (!campaign?.startTime) return;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const start = new Date(campaign.startTime!).getTime();
      const distance = start - now;

      if (distance <= 0) {
        setCountdown("Started");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (days > 0) {
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else if (hours > 0) {
        setCountdown(`${hours}h ${minutes}m ${seconds}s`);
      } else if (minutes > 0) {
        setCountdown(`${minutes}m ${seconds}s`);
      } else {
        setCountdown(`${seconds}s`);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [campaign?.startTime]);

  // Determine current sequence step based on leads
  const getCurrentStep = (): number => {
    if (!leads || leads.length === 0) return 1;
    
    // Find the maximum sequence step completed among all leads
    const maxStepCompleted = Math.max(...leads.map(lead => lead.currentSequenceStep || 0));
    
    // Check if all leads have completed this step (are SENT)
    const allCompletedMaxStep = leads.every(lead => 
      (lead.currentSequenceStep || 0) === maxStepCompleted && lead.status === "SENT"
    );
    
    // If all leads completed the max step, we're now working on the next step
    // Otherwise, we're still working on the current max step
    const nextStep = allCompletedMaxStep ? maxStepCompleted + 1 : maxStepCompleted || 1;
    
    // Cap at step 4 (don't show step 5)
    return Math.min(nextStep, 4);
  };

  // SSE for real-time updates
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const eventSource = new EventSource(`${apiBase.replace('/api', '')}/api/campaigns/events?token=${token}`);

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
              {campaign.status === "COMPLETED" && (
                <button
                  onClick={() => handleCampaignAction("start")}
                  className="rounded bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-500 transition"
                >
                  Resume Campaign
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
          <h2 className="mb-4 text-lg font-semibold text-sky-400">Current Step</h2>
          
          {/* Countdown Timer */}
          {campaign.startTime && new Date(campaign.startTime) > new Date() && countdown !== "Started" && (
            <div className="mb-4 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <div className="text-sm font-semibold text-amber-400">Campaign starts in</div>
                    <div className="text-xs text-amber-300/70">Scheduled: {new Date(campaign.startTime).toLocaleString()}</div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-amber-400 tabular-nums">
                  {countdown}
                </div>
              </div>
            </div>
          )}

          {countdown === "Started" && (
            <div className="mb-4 rounded-lg border border-green-500/30 bg-green-500/10 p-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">✅</div>
                <div className="text-sm font-semibold text-green-400">Campaign Started</div>
              </div>
            </div>
          )}
          
          {/* Current Step Display */}
          {(() => {
            const currentStep = getCurrentStep();
            const stepBodies = [
              { number: 1, label: "Initial Email", body: campaign.bodyTemplate, subject: campaign.subjectTemplate },
              { number: 2, label: "Follow-up #2", body: campaign.followUp2Body, subject: `Re: ${campaign.subjectTemplate}`, delay: campaign.followUp2DelayHours },
              { number: 3, label: "Follow-up #3", body: campaign.followUp3Body, subject: `Re: ${campaign.subjectTemplate}`, delay: campaign.followUp3DelayHours },
              { number: 4, label: "Follow-up #4 (Final)", body: campaign.followUp4Body, subject: `Re: ${campaign.subjectTemplate}`, delay: campaign.followUp4DelayHours }
            ];
            
            const currentStepData = stepBodies[currentStep - 1];
            
            if (!currentStepData?.body && currentStep > 1) {
              return null; // Skip if no follow-up configured for this step
            }

            return (
              <div className="rounded-lg border border-sky-500/30 bg-slate-950 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-sky-300">{currentStepData.label}</h3>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-bold text-sky-400">
                      Step {currentStep}/4
                    </span>
                    {currentStepData.delay && (
                      <span className="rounded bg-amber-500/20 px-2 py-1 text-xs text-amber-400">
                        After {currentStepData.delay}h
                      </span>
                    )}
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-xs text-slate-400">Subject:</div>
                  <div className="rounded border border-slate-800 bg-slate-900 p-2 text-sm text-slate-200">
                    {currentStepData.subject || "No subject"}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Body:</div>
                  <div className="whitespace-pre-wrap rounded border border-slate-800 bg-slate-900 p-3 text-xs text-slate-300">
                    {currentStepData.body || "No body template"}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Campaign Configuration */}
          <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-xs text-slate-400">Daily Limit</div>
              <div className="font-semibold text-slate-200">{campaign.dailyLimit ?? "Not set"} emails/day</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Delay Between Emails</div>
              <div className="font-semibold text-slate-200">
                {campaign.delayMinSeconds && campaign.delayMaxSeconds 
                  ? `${campaign.delayMinSeconds}-${campaign.delayMaxSeconds}s` 
                  : "Not set"}
              </div>
            </div>
            {campaign.startTime && (
              <div>
                <div className="text-xs text-slate-400">
                  {new Date(campaign.startTime) <= new Date() ? "Started At" : "Scheduled Start"}
                </div>
                <div className="font-semibold text-slate-200">{new Date(campaign.startTime).toLocaleString()}</div>
              </div>
            )}
          </div>
        </section>

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
