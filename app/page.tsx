"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="w-full px-6 py-5 border-b border-[#e5e7eb]">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-[15px] font-semibold tracking-tight text-[#0a0a0a]">
            InagenAI
          </span>
          <nav className="flex items-center gap-6 text-sm text-[#6b7280]">
            <Link href="/privacy" className="hover:text-[#0a0a0a] transition-colors duration-150">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#0a0a0a] transition-colors duration-150">
              Terms
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-2xl w-full text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#e5e7eb] text-[13px] text-[#6b7280] mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] inline-block" />
            Coming soon
          </div>

          {/* Heading */}
          <h1 className="text-[42px] sm:text-[56px] font-semibold tracking-[-0.04em] leading-[1.1] text-[#0a0a0a] mb-6">
            Something new<br />
            <span className="text-[#9ca3af]">is on its way.</span>
          </h1>

          {/* Sub */}
          <p className="text-[17px] text-[#6b7280] leading-relaxed max-w-md mx-auto mb-12">
            A giant leap is coming soon. Be the first to know when we go live.
          </p>

          {/* Email form */}
          {status === "success" ? (
            <div className="flex items-center justify-center gap-2 text-[14px] text-[#6b7280]">
              <svg className="w-4 h-4 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>You&apos;re on the list. We&apos;ll be in touch.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-sm mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={status === "loading"}
                className="w-full sm:flex-1 px-4 py-2.5 text-[14px] rounded-lg border border-[#e5e7eb] bg-white text-[#0a0a0a] placeholder-[#9ca3af] outline-none focus:border-[#0a0a0a] transition-colors duration-150 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto px-5 py-2.5 text-[14px] font-medium rounded-lg bg-[#0a0a0a] text-white hover:bg-[#222] transition-colors duration-150 cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Saving…" : "Notify me"}
              </button>
              {status === "error" && (
                <p className="w-full text-[13px] text-red-500 text-left -mt-1">{errorMsg}</p>
              )}
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-[#e5e7eb]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#9ca3af]">
          <span>&copy; {new Date().getFullYear()} InagenAI. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-[#6b7280] transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#6b7280] transition-colors duration-150">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
