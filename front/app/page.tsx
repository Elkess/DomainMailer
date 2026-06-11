"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("domainmailer_token");
    router.replace(token ? "/dashboard" : "/login");
  }, [router]);

  return <div className="text-sm text-slate-400">Loading...</div>;
}
