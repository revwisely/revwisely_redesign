"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const TIMER_DURATION = 6000;

const tabs = [
  {
    title: "Marketing",
    roles: [
      "VP of Marketing",
      "Demand Gen Manager",
      "Content Marketing Manager",
      "SEO Specialist",
      "Paid Media Buyer",
      "Marketing Ops Analyst",
      "Social Media Manager",
      "Email Marketing Specialist",
    ],
  },
  {
    title: "Sales",
    roles: [
      "VP of Sales",
      "Sales Manager",
      "Account Executive (x2)",
      "SDR / BDR (x2)",
      "Sales Ops Analyst",
      "Sales Enablement Lead",
    ],
  },
  {
    title: "RevOps",
    roles: [
      "VP of Revenue Operations",
      "CRM Administrator",
      "Data Analyst",
      "Marketing Automation Specialist",
      "BI / Reporting Analyst",
      "Integration Engineer",
      "Revenue Enablement Lead",
    ],
  },
];

const painPoints = [
  { icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z", label: "Fragmented systems" },
  { icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z", label: "Delayed insights" },
  { icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z", label: "Rising payroll costs" },
  { icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z", label: "Misaligned teams" },
  { icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z", label: "Unscalable growth" },
];

function RolePanel({ tab }: { tab: (typeof tabs)[0] }) {
  return (
    <motion.div
      key={tab.title}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 lg:p-10 backdrop-blur-sm"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--brand-red)]/10 blur-3xl" />

      <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
        {tab.title} Team
      </p>

      <div className="space-y-3">
        {tab.roles.map((role, i) => (
          <motion.div
            key={role}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.05 + i * 0.06 }}
            className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.04] px-5 py-3.5 transition-colors duration-200 hover:bg-white/[0.08]"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
              <svg className="h-4 w-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <span className="text-[15px] font-medium text-white/80">{role}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-6 text-sm text-white/30"
      >
        {tab.roles.length} specialized roles required
      </motion.p>
    </motion.div>
  );
}

export default function SystemSection() {
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
    <section id="system" className="relative bg-[var(--dark-graphite)] pb-0 pt-20 lg:pt-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 lg:mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            The Old Way
          </p>
          <h2 className="mt-6 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-white">
            The Old Way:
            <br />
            Scale by Hiring
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/50">
            Traditional revenue growth means adding headcount for every function.
            Before long, 20+ specialized roles. And teams still struggle to coordinate.
          </p>
        </motion.div>

        {/* Interactive two-column layout */}
        <motion.div
          className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Left — tabs with progress bar */}
          <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.02] p-3 lg:p-4">
            {tabs.map((tab, i) => (
              <button
                key={tab.title}
                onClick={() => handleClick(i)}
                className={`group relative w-full rounded-xl px-6 py-5 text-left transition-all duration-300 ${
                  active === i ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
                }`}
              >
                {/* Progress bar */}
                <div className="absolute left-0 top-2 bottom-2 w-[3px] overflow-hidden rounded-full bg-white/[0.06]">
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
                    active === i ? "text-white" : "text-white/40 group-hover:text-white/60"
                  }`}>
                    {tab.title}
                  </span>
                  <span className={`text-sm tabular-nums transition-colors duration-300 ${
                    active === i ? "text-white/60" : "text-white/20"
                  }`}>
                    {tab.roles.length} roles
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right — role panel */}
          <div className="min-h-[420px]">
            <AnimatePresence mode="wait">
              <RolePanel key={active} tab={tabs[active]} />
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Pain points row */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-4 lg:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {painPoints.map((point) => (
            <div
              key={point.label}
              className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5"
            >
              <svg className="h-4 w-4 text-[var(--brand-red)]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={point.icon} />
              </svg>
              <span className="text-sm text-white/50">{point.label}</span>
            </div>
          ))}
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
