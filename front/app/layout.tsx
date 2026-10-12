import "./globals.css";
import type { Metadata, Viewport } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DomainMailer",
  description: "Multi-user domain outreach SaaS",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between overflow-x-hidden bg-slate-950 text-slate-100">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 flex-1">{children}</div>
        <footer className="w-full border-t border-slate-800/80 py-4 text-center text-xs text-slate-500">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 sm:justify-between">
            <p>© {new Date().getFullYear()} DomainMailer. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-slate-300 underline transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-slate-300 underline transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
