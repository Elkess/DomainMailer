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
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
        <div className="text-center font-semibold sm:text-left">DomainMailer</div>
        <div className="flex w-full flex-col gap-2 text-sm sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
          <Link 
            className={`rounded-md px-3 py-2 text-center transition sm:py-1.5 ${pathname.includes("dashboard") ? "text-sky-400 bg-slate-800" : "text-slate-300 hover:bg-slate-800"}`} 
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link 
            className={`rounded-md px-3 py-2 text-center transition sm:py-1.5 ${pathname.includes("campaigns") ? "text-sky-400 bg-slate-800" : "text-slate-300 hover:bg-slate-800"}`} 
            href="/campaigns"
          >
            Campaigns
          </Link>
          <button
            className="rounded-md border border-slate-700 px-3 py-2 text-slate-300 transition hover:bg-slate-800 sm:py-1.5"
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
