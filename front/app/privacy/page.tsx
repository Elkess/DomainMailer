import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — DomainMailer",
  description: "DomainMailer privacy policy and Google API Services disclosure"
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <main className="mx-auto w-full max-w-3xl rounded-xl border border-slate-800 bg-slate-900 p-6 sm:p-10">
        <h1 className="mb-2 text-3xl font-bold text-center">Privacy Policy</h1>
        <p className="mb-8 text-center text-sm text-slate-400">Last updated: October 12, 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-300">
          <section>
            <h2 className="mb-2 text-lg font-semibold text-slate-100">1. Introduction</h2>
            <p>
              DomainMailer (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a SaaS platform
              for domain sellers to send safe, tracked email outreach campaigns through their own
              Gmail accounts. This policy describes how we collect, handle, and protect your data.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-slate-100">2. Information We Collect</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Account Credentials:</strong> Email and hashed password for authentication.</li>
              <li><strong>OAuth Tokens:</strong> Google OAuth 2.0 access &amp; refresh tokens when connecting Gmail.</li>
              <li><strong>Campaign Data:</strong> Outbound email templates, recipient lists, schedules, and delivery logs.</li>
            </ul>
          </section>

          <section className="rounded-lg border border-sky-800/40 bg-sky-950/30 p-4">
            <h2 className="mb-2 text-lg font-semibold text-sky-300">
              3. Google API Services User Data Policy Compliance
            </h2>
            <p className="mb-2">
              DomainMailer&apos;s use and transfer of information received from Google APIs will adhere to the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline hover:text-sky-300"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>
            <ul className="list-disc space-y-1 pl-5 text-slate-300">
              <li>We request the <code className="rounded bg-slate-800 px-1 text-xs">gmail.send</code> scope solely to dispatch user-initiated outreach emails.</li>
              <li>We do <strong>not</strong> read, scan, index, or store incoming inbox messages.</li>
              <li>We do <strong>not</strong> transfer or sell Google user data to third parties, advertising platforms, or AI/ML model training sets.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-slate-100">4. How We Use and Protect Data</h2>
            <p>
              Tokens are encrypted at rest in PostgreSQL with strict tenant isolation. Passwords are
              hashed via bcrypt. Network communication uses HTTPS/TLS. Sending queues apply rate
              limiting to safeguard sender reputation.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-slate-100">5. Managing &amp; Revoking Access</h2>
            <p>
              You can disconnect your account at any time or revoke DomainMailer&apos;s access directly via your{" "}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline hover:text-sky-300"
              >
                Google Account Security Settings
              </a>
              . Upon account deletion, all stored tokens and personal data are permanently deleted.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-slate-100">6. Contact Us</h2>
            <p>
              If you have questions about this policy, reach us at{" "}
              <a href="mailto:privacy@domainmailer.com" className="text-sky-400 underline hover:text-sky-300">
                privacy@domainmailer.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-8 flex justify-center gap-4 border-t border-slate-800 pt-6 text-sm">
          <Link href="/" className="text-sky-400 hover:text-sky-300 underline">Home</Link>
          <span className="text-slate-600">•</span>
          <Link href="/terms" className="text-sky-400 hover:text-sky-300 underline">Terms of Service</Link>
          <span className="text-slate-600">•</span>
          <Link href="/login" className="text-sky-400 hover:text-sky-300 underline">Sign In</Link>
        </div>
      </main>
    </div>
  );
}
