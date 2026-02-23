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
      <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3">
        <div className="font-semibold">DomainMailer</div>
        <div className="flex items-center gap-4 text-sm">
          <Link className={pathname.includes("dashboard") ? "text-sky-400" : "text-slate-300"} href="/dashboard">
            Dashboard
          </Link>
          <Link className={pathname.includes("campaigns") ? "text-sky-400" : "text-slate-300"} href="/campaigns">
            Campaigns
          </Link>
          <button
            className="rounded-md border border-slate-700 px-3 py-1 text-slate-300"
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
