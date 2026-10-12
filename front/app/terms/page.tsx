import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — DomainMailer",
  description: "DomainMailer terms and conditions of service"
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <main className="mx-auto w-full max-w-3xl rounded-xl border border-slate-800 bg-slate-900 p-6 sm:p-10">
        <h1 className="mb-2 text-3xl font-bold text-center">Terms of Service</h1>
        <p className="mb-8 text-center text-sm text-slate-400">Last updated: October 12, 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-300">
          <section>
            <h2 className="mb-2 text-lg font-semibold text-slate-100">1. Acceptance of Terms</h2>
            <p>
              By accessing or using DomainMailer (&quot;the Service&quot;), you agree to be bound by
              these Terms of Service. If you do not agree to these terms, you may not access or use
              the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-slate-100">2. Description of Service</h2>
            <p>
              DomainMailer provides a multi-user software platform designed to manage and send
              permission-based domain sale outreach emails using the user&apos;s own connected Gmail
              account via Google OAuth 2.0.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-slate-100">3. Acceptable Use &amp; Anti-Spam Policy</h2>
            <p className="mb-2">
              You agree to use DomainMailer solely for legitimate, professional outbound communication.
              You represent and warrant that:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                You will comply with all applicable laws, including the CAN-SPAM Act, GDPR, CASL, and
                local anti-spam regulations.
              </li>
              <li>
                You will not use the Service to send unsolicited bulk spam, phishing attempts,
                malicious links, deceptive headers, or unlawful content.
              </li>
              <li>
                You will honor all opt-out or unsubscribe requests promptly.
              </li>
              <li>
                You will comply with Google&apos;s Acceptable Use Policies when using Gmail API integration.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-slate-100">4. Quotas, Throttling &amp; Safety Limits</h2>
            <p>
              DomainMailer enforces automated safeguards including per-user daily send limits, global
              rate throttling, and automatic pause triggers on elevated bounce or error rates.
              Bypassing or attempting to circumvent these safety limits is strictly prohibited and
              may result in immediate account termination.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-slate-100">5. User Accounts &amp; Security</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials.
              You agree to notify us immediately of any unauthorized access or security breach.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-slate-100">6. Disclaimer of Warranties &amp; Limitation of Liability</h2>
            <p>
              The Service is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;. DomainMailer
              makes no warranty that email deliveries will be uninterrupted, error-free, or meet any
              specific deliverability rate. In no event shall DomainMailer be liable for indirect,
              incidental, or consequential damages resulting from the use or inability to use the
              Service.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-slate-100">7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate these Terms of
              Service or Google&apos;s developer policies without prior notice.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-slate-100">8. Contact Information</h2>
            <p>
              For legal inquiries or questions regarding these Terms, contact us at{" "}
              <a href="mailto:mohammedamineelkess@gmail.com" className="text-sky-400 underline hover:text-sky-300">
                mohammedamineelkess@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-8 flex justify-center gap-4 border-t border-slate-800 pt-6 text-sm">
          <Link href="/privacy" className="text-sky-400 hover:text-sky-300 underline">Privacy Policy</Link>
          <span className="text-slate-600">•</span>
          <Link href="/login" className="text-sky-400 hover:text-sky-300 underline">Back to Login</Link>
        </div>
      </main>
    </div>
  );
}
