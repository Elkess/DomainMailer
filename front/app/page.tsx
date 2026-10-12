"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("domainmailer_token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="flex flex-col gap-12 py-2">
      {/* Top Navbar */}
      <header className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/90 px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600 font-bold text-white shadow-md shadow-sky-600/30">
            DM
          </div>
          <span className="text-xl font-bold tracking-tight text-white">DomainMailer</span>
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <a href="#purpose" className="text-slate-300 hover:text-white transition hidden md:inline">Purpose</a>
          <a href="#features" className="text-slate-300 hover:text-white transition hidden md:inline">Features</a>
          <a href="#google-compliance" className="text-slate-300 hover:text-white transition hidden sm:inline">Google Compliance</a>
          <Link href="/privacy" className="text-slate-300 hover:text-white transition hidden sm:inline">Privacy</Link>
          <Link href="/terms" className="text-slate-300 hover:text-white transition hidden sm:inline">Terms</Link>

          {isAuthenticated ? (
            <Link
              href="/dashboard"
              className="rounded-lg bg-sky-600 px-4 py-2 font-medium text-white transition hover:bg-sky-500"
            >
              Go to Dashboard
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="rounded-lg border border-slate-700 px-3.5 py-1.5 font-medium text-slate-200 transition hover:bg-slate-800"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="rounded-lg bg-sky-600 px-3.5 py-1.5 font-medium text-white transition hover:bg-sky-500"
              >
                Get Started
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-3.5 py-1 text-xs font-medium text-sky-400 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          Outbound Domain Sales SaaS
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          DomainMailer
        </h1>
        <p className="mt-3 text-xl font-medium text-sky-400 sm:text-2xl">
          Safe &amp; Automated Email Outreach for Domain Sellers
        </p>
        <p className="mt-5 text-base text-slate-300 sm:text-lg leading-relaxed max-w-2xl mx-auto">
          <strong>DomainMailer</strong> is a dedicated outbound sales communication platform built for domain investors, brokers, and owners to safely manage and dispatch personalized domain outreach campaigns directly through their own Gmail accounts.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {isAuthenticated ? (
            <Link
              href="/dashboard"
              className="rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-500"
            >
              Open Your Dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/register"
                className="rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-500"
              >
                Get Started Free
              </Link>
              <Link
                href="/login"
                className="rounded-lg border border-slate-700 bg-slate-900/60 px-6 py-3 font-semibold text-slate-200 transition hover:bg-slate-800"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Application Purpose Section */}
      <section id="purpose" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white">Application Purpose</h2>
        <p className="mt-3 text-slate-300 leading-relaxed">
          The purpose of <strong>DomainMailer</strong> is to help domain owners market their digital assets efficiently and responsibly. By automating campaign schedules and honoring Google sending quotas, DomainMailer eliminates manual emailing errors while safeguarding sender reputation.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
            <h3 className="font-semibold text-sky-400 mb-1">Targeted Campaigns</h3>
            <p className="text-sm text-slate-300">Organize domain portfolios and send personalized email inquiries to prospective buyers with custom templates.</p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
            <h3 className="font-semibold text-sky-400 mb-1">Gmail OAuth Sending</h3>
            <p className="text-sm text-slate-300">Send directly through your authenticated Gmail account using Google OAuth 2.0 without risky SMTP relays.</p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
            <h3 className="font-semibold text-sky-400 mb-1">Rate Limits &amp; Anti-Spam</h3>
            <p className="text-sm text-slate-300">Enforce strict per-user daily send limits, staggered delivery intervals, and error throttling to protect mailbox health.</p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
            <h3 className="font-semibold text-sky-400 mb-1">Status Tracking</h3>
            <p className="text-sm text-slate-300">Track sent emails, queued messages, and campaign progress with real-time analytics.</p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Key Platform Features</h2>
          <p className="mt-2 text-sm text-slate-400">Everything needed to conduct professional domain outreach safely</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-950 text-sky-400 font-bold mb-4 border border-sky-800/40">
              01
            </div>
            <h3 className="text-lg font-semibold text-white">Direct Gmail OAuth</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Connect your Google account in seconds via official Google OAuth 2.0. No password sharing or SMTP setup required.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-950 text-sky-400 font-bold mb-4 border border-sky-800/40">
              02
            </div>
            <h3 className="text-lg font-semibold text-white">Template Management</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Craft individualized templates with personalized merge tags for domains, pricing, and contact information.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-950 text-sky-400 font-bold mb-4 border border-sky-800/40">
              03
            </div>
            <h3 className="text-lg font-semibold text-white">Automated Throttling</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Automatic throttling and daily quotas prevent mailbox burnout and preserve Gmail sender reputation.
            </p>
          </div>
        </div>
      </section>

      {/* Google API Services Compliance Section */}
      <section id="google-compliance" className="rounded-2xl border border-sky-900/50 bg-sky-950/20 p-6 sm:p-8">
        <div className="inline-flex items-center gap-2 rounded-md bg-sky-900/50 px-3 py-1 text-xs font-semibold text-sky-300 border border-sky-700/50 mb-3">
          Google OAuth &amp; API Compliance Disclosure
        </div>

        <h2 className="text-2xl font-bold text-white">Google API Services User Data Policy Compliance</h2>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          <strong>DomainMailer</strong> adheres strictly to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 underline hover:text-sky-300"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements:
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2 text-sm text-slate-300">
          <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-4">
            <h4 className="font-semibold text-sky-300 mb-1">Scope: gmail.send</h4>
            <p className="text-xs leading-relaxed text-slate-400">
              DomainMailer requests <code className="rounded bg-slate-800 px-1 py-0.5 text-sky-300">https://www.googleapis.com/auth/gmail.send</code> solely to send outreach emails explicitly initiated by you.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-4">
            <h4 className="font-semibold text-sky-300 mb-1">No Inbox Scanning or Storage</h4>
            <p className="text-xs leading-relaxed text-slate-400">
              We do <strong>NOT</strong> access, read, scan, or store your private incoming emails or inbox messages.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-4">
            <h4 className="font-semibold text-sky-300 mb-1">No Third-Party Sharing</h4>
            <p className="text-xs leading-relaxed text-slate-400">
              Google user data is never shared, transferred, or sold to third parties, advertising platforms, or AI/ML model training sets.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-4">
            <h4 className="font-semibold text-sky-300 mb-1">Revocation &amp; Control</h4>
            <p className="text-xs leading-relaxed text-slate-400">
              You can disconnect your account or revoke DomainMailer permissions at any time via your{" "}
              <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-sky-400 underline hover:text-sky-300">
                Google Account Security Settings
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 text-center">
        <h3 className="text-lg font-semibold text-white">Contact &amp; Support</h3>
        <p className="mt-1 text-sm text-slate-400">
          For questions, legal, or verification inquiries:{" "}
          <a href="mailto:mohammedamineelkess@gmail.com" className="text-sky-400 underline hover:text-sky-300">
            mohammedamineelkess@gmail.com
          </a>
        </p>
        <div className="mt-3 flex justify-center gap-4 text-xs text-slate-400">
          <Link href="/privacy" className="hover:text-slate-200 underline">Privacy Policy</Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-slate-200 underline">Terms of Service</Link>
        </div>
      </section>
    </div>
  );
}
