"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { clearToken } from "../../lib/api";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("domainmailer_token");
    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3">
        <div className="font-semibold text-center sm:text-left">DomainMailer</div>
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 text-sm">
          <Link 
            className={`px-3 py-1.5 rounded-md transition ${pathname.includes("dashboard") ? "text-sky-400 bg-slate-800" : "text-slate-300 hover:bg-slate-800"}`} 
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link 
            className={`px-3 py-1.5 rounded-md transition ${pathname.includes("campaigns") ? "text-sky-400 bg-slate-800" : "text-slate-300 hover:bg-slate-800"}`} 
            href="/campaigns"
          >
            Campaigns
          </Link>
          <button
            className="rounded-md border border-slate-700 px-3 py-1.5 text-slate-300 hover:bg-slate-800 transition"
            onClick={() => {
              clearToken();
              router.replace("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
