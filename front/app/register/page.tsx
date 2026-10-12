"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { api, setToken } from "../../lib/api";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await api.register(email, password);
      setToken(result.token);
      router.replace("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <main className="mx-auto w-full max-w-md rounded-xl border border-slate-800 bg-slate-900 p-6">
        <div className="mb-6 text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 font-bold text-white text-sm">
              DM
            </div>
            <span className="text-xl font-bold tracking-tight text-white">DomainMailer</span>
          </Link>
          <h1 className="text-xl font-semibold text-slate-200">Create your account</h1>
          <p className="text-xs text-slate-400 mt-1">Multi-user outreach SaaS for domain sellers</p>
        </div>
        <form className="space-y-4" onSubmit={onSubmit}>
          <input
            className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error ? <p className="text-sm text-rose-400">{error}</p> : null}
          <button disabled={loading} className="w-full rounded-md bg-sky-600 px-3 py-2 font-medium">
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>
        <p className="mt-4 text-sm text-slate-400 text-center">
          Already have an account? <Link href="/login" className="text-sky-400">Sign in</Link>
        </p>
        <div className="mt-6 border-t border-slate-800 pt-4 text-center text-xs text-slate-500">
          By registering, you agree to our{" "}
          <Link href="/terms" className="text-slate-400 underline hover:text-slate-300">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-slate-400 underline hover:text-slate-300">
            Privacy Policy
          </Link>
          .
        </div>
      </main>
    </div>
  );
}
