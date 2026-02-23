"use client";

import { useEffect, useState } from "react";
import { api, Summary } from "../../../lib/api";

export default function DashboardPage() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .getSummary()
      .then(setSummary)
      .catch((err: any) => setError(err.message));
  }, []);

  if (error) {
    return <p className="text-rose-400">{error}</p>;
  }

  if (!summary) {
    return <p className="text-slate-400">Loading dashboard...</p>;
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-3 md:grid-cols-3">
        <StatCard label="Total Campaigns" value={summary.totalCampaigns} />
        <StatCard label="Active Campaigns" value={summary.activeCampaigns} />
        <StatCard label="Sent Today" value={summary.sentToday} />
        <StatCard label="Success Rate" value={`${summary.successRate}%`} />
        <StatCard label="Failed Leads" value={summary.failedLeads} />
      </div>

      <section className="rounded-xl border border-slate-800 bg-slate-900 p-4">
        <div className="mb-3 text-sm font-semibold text-slate-200">Connected Gmail Accounts</div>
        <div className="space-y-2">
          {summary.accountStats.map((account) => (
            <div key={account.id} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm">
              <span>{account.email}</span>
              <span className="text-slate-400">{account.status}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
    </div>
  );
}
