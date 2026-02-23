import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DomainMailer",
  description: "Multi-user domain outreach SaaS"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
      </body>
    </html>
  );
}
