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
    <main className="mx-auto mt-12 max-w-md rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h1 className="mb-6 text-2xl font-semibold">Create account</h1>
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
      <p className="mt-4 text-sm text-slate-400">
        Already have an account? <Link href="/login" className="text-sky-400">Sign in</Link>
      </p>
    </main>
  );
}
