"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const TIMER_DURATION = 6000;

const tabs = [
  {
    title: "Marketing Agents",
    items: [
      "Content Strategy & Generation Agent",
      "SEO & Keyword Intelligence Agent",
      "Paid Media Optimization Agent",
      "Demand Gen Workflow Agent",
      "Social Listening & Publishing Agent",
      "Email Nurture Sequence Agent",
    ],
  },
  {
    title: "Sales Agents",
    items: [
      "Lead Scoring & Prioritization Agent",
      "Outbound Sequence Agent",
      "Call Prep & Intelligence Agent",
      "Pipeline Forecasting Agent",
      "Proposal & Contract Agent",
      "Follow-Up & Re-Engagement Agent",
    ],
  },
  {
    title: "RevOps Agents",
    items: [
      "CRM Hygiene & Enrichment Agent",
      "Data Sync & Integration Agent",
      "Reporting & Dashboard Agent",
      "Attribution & Signal Detection Agent",
      "Workflow Orchestration Agent",
    ],
  },
  {
    title: "Humans",
    items: [
      "Revenue Architect (Strategic Design)",
      "Account Executive (Relationship & Close)",
      "Creative Director (Brand & Voice)",
      "Customer Success Lead (Retention)",
      "CEO / Founder (Vision & Priorities)",
    ],
  },
];

function ItemPanel({ tab }: { tab: (typeof tabs)[0] }) {
  const isHuman = tab.title === "Humans";

  return (
    <motion.div
      key={tab.title}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative h-full overflow-hidden rounded-2xl border border-[var(--light-gray)] bg-[var(--off-white)] p-8 lg:p-10"
    >
      <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
        {tab.title}
      </p>

      <div className="space-y-3">
        {tab.items.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.05 + i * 0.06 }}
            className="flex items-center gap-3 rounded-xl border border-[var(--light-gray)] bg-white px-5 py-3.5 transition-colors duration-200 hover:border-[var(--brand-red)]/20 hover:shadow-sm"
          >
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
              isHuman ? "bg-[var(--dark-graphite)]/5" : "bg-[var(--brand-red)]/5"
            }`}>
              {isHuman ? (
                <svg className="h-4 w-4 text-[var(--dark-graphite)]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              ) : (
                <svg className="h-4 w-4 text-[var(--brand-red)]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                </svg>
              )}
            </div>
            <span className="text-[15px] font-medium text-[var(--dark-graphite)]">{item}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-6 text-sm text-[var(--graphite)]/60"
      >
        {tab.items.length} {isHuman ? "strategic roles" : "automated capabilities"}
      </motion.p>
    </motion.div>
  );
}

export default function NewWaySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % tabs.length);
    setTimerKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const id = setTimeout(advance, TIMER_DURATION);
    return () => clearTimeout(id);
  }, [active, timerKey, isInView, advance]);

  const handleClick = (i: number) => {
    setActive(i);
    setTimerKey((k) => k + 1);
  };

  return (
    <section id="new-way" className="relative bg-white pb-0 pt-20 lg:pt-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 lg:mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            The New Way
          </p>
          <h2 className="mt-6 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]">
            Revenue as a
            <br />
            Coordinated System
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--graphite)]">
            AI agents handle execution. Humans focus on strategy, relationships, and
            creative direction. The system runs leaner, faster, and smarter.
          </p>
        </motion.div>

        {/* Interactive two-column layout — light theme */}
        <motion.div
          className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Left — tabs with progress bar */}
          <div className="flex flex-col justify-center rounded-2xl border border-[var(--light-gray)] bg-[var(--off-white)] p-3 lg:p-4">
            {tabs.map((tab, i) => (
              <button
                key={tab.title}
                onClick={() => handleClick(i)}
                className={`group relative w-full rounded-xl px-6 py-5 text-left transition-all duration-300 ${
                  active === i ? "bg-white shadow-sm" : "hover:bg-white/60"
                }`}
              >
                {/* Progress bar */}
                <div className="absolute left-0 top-2 bottom-2 w-[3px] overflow-hidden rounded-full bg-[var(--light-gray)]">
                  {active === i && (
                    <motion.div
                      key={`progress-${i}-${timerKey}`}
                      className="w-full rounded-full bg-[var(--brand-red)]"
                      initial={{ height: "0%" }}
                      animate={{ height: "100%" }}
                      transition={{ duration: TIMER_DURATION / 1000, ease: "linear" }}
                    />
                  )}
                </div>

                <div className="flex items-baseline justify-between">
                  <span className={`text-lg font-medium transition-colors duration-300 ${
                    active === i ? "text-[var(--dark-graphite)]" : "text-[var(--graphite)]/50 group-hover:text-[var(--graphite)]"
                  }`}>
                    {tab.title}
                  </span>
                  <span className={`text-sm tabular-nums transition-colors duration-300 ${
                    active === i ? "text-[var(--graphite)]" : "text-[var(--graphite)]/30"
                  }`}>
                    {tab.items.length} {tab.title === "Humans" ? "roles" : "agents"}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right — item panel */}
          <div className="min-h-[420px]">
            <AnimatePresence mode="wait">
              <ItemPanel key={active} tab={tabs[active]} />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Bottom curve */}
      <div className="relative mt-24 lg:mt-32">
        <svg
          className="block w-full"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120V60C240 0 480 0 720 30C960 60 1200 60 1440 30V120H0Z"
            fill="var(--off-white)"
          />
        </svg>
      </div>
    </section>
  );
}
