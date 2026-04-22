"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function NewsletterClient() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <main className="bg-white pb-20 pt-32 lg:pb-28 lg:pt-40">
      <div ref={ref} className="mx-auto max-w-[600px] px-6 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
        >
          Stay Sharp
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--dark-graphite)]"
        >
          The RevWisely
          <br />
          Newsletter
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-8 h-[2px] w-16 bg-[var(--brand-red)] opacity-40"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 text-lg leading-relaxed text-[var(--graphite)]"
        >
          Insights on AI-powered revenue systems, RevOps, and
          go-to-market strategy. No fluff&mdash;just what operators
          and leaders need to know.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12"
        >
          {status === "success" ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 px-6 py-8">
              <p className="text-base font-semibold text-green-800">
                You&apos;re in. Look for the newsletter in your inbox every Tuesday.
              </p>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-[var(--light-gray)] bg-[var(--off-white)] px-6 py-4 text-base text-[var(--dark-graphite)] outline-none transition-colors placeholder:text-[var(--graphite)]/50 focus:border-[var(--brand-red)]"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--brand-red)] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[var(--brand-red-hover)] hover:shadow-lg disabled:opacity-60"
                >
                  {status === "loading" ? "Subscribing\u2026" : "Subscribe"}
                </button>
              </div>

              {status === "error" && (
                <p className="mt-4 text-sm text-red-600">{errorMsg}</p>
              )}
            </>
          )}
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-6 text-sm text-[var(--graphite)]/50"
        >
          No spam. Unsubscribe anytime.
        </motion.p>
      </div>
    </main>
  );
}
