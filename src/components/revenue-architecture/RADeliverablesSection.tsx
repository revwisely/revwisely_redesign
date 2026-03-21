"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const TIMER_DURATION = 7000;

const deliverables = [
  {
    title: "Structured Sales Process Design",
    body: "Your sales motion as a repeatable system. Stages, exit criteria, qualification frameworks, handoff protocols \u2014 configured in your CRM.",
    highlights: [
      "Defined stages and exit criteria",
      "Qualification frameworks",
      "Handoff protocols in CRM",
    ],
  },
  {
    title: "CRM Architecture & Configuration",
    body: "CRM designed for pipeline intelligence, not data storage. Real-time visibility into what\u2019s working and what\u2019s stalling.",
    highlights: [
      "Custom objects and properties",
      "Pipeline intelligence reporting",
      "Real-time leadership visibility",
    ],
  },
  {
    title: "Tech Stack Integration",
    body: "Your tools connected into one operational layer. Clean data. One source of truth.",
    highlights: [
      "Unified operational layer",
      "Clean data flow across tools",
      "Single source of truth",
    ],
  },
  {
    title: "Automation & Operational Workflows",
    body: "Lead routing, task creation, notification triggers, deal progression, reporting cadences \u2014 built to run without manual intervention.",
    highlights: [
      "Lead routing and task creation",
      "Deal progression automation",
      "Reporting cadences",
    ],
  },
  {
    title: "Performance Dashboards & Reporting",
    body: "Dashboards designed around decisions, not vanity metrics. Pipeline health, conversion rates, rep performance, forecast accuracy \u2014 visible in real time.",
    highlights: [
      "Pipeline health and forecast accuracy",
      "Rep performance tracking",
      "Real-time decision support",
    ],
  },
];

function DeliverablePanel({ item }: { item: (typeof deliverables)[0] }) {
  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative h-full overflow-hidden rounded-2xl border border-[var(--light-gray)] bg-[var(--off-white)] p-8 lg:p-10"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--brand-red)]/5 blur-3xl" />

      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
        Deliverable
      </p>

      <h3 className="text-xl font-bold text-[var(--dark-graphite)]">
        {item.title}
      </h3>

      <p className="mt-4 text-base leading-relaxed text-[var(--graphite)]">
        {item.body}
      </p>

      <div className="mt-8 space-y-3">
        {item.highlights.map((hl, i) => (
          <motion.div
            key={hl}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
            className="flex items-center gap-3 rounded-xl border border-[var(--light-gray)] bg-white px-5 py-3.5"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-red)]/10">
              <svg className="h-3 w-3 text-[var(--brand-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <span className="text-sm font-medium text-[var(--dark-graphite)]">{hl}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function RADeliverablesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % deliverables.length);
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
    <section className="relative bg-[var(--off-white)] py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            The Build
          </p>
          <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]">
            What the build includes.
          </h2>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Left — tabs */}
          <div className="flex flex-col justify-center rounded-2xl border border-[var(--light-gray)] bg-white p-3 lg:p-4">
            {deliverables.map((item, i) => (
              <button
                key={item.title}
                onClick={() => handleClick(i)}
                className={`group relative w-full rounded-xl px-6 py-4 text-left transition-all duration-300 ${
                  active === i ? "bg-[var(--off-white)] shadow-sm" : "hover:bg-[var(--off-white)]/60"
                }`}
              >
                <div className="absolute bottom-2 left-0 top-2 w-[3px] overflow-hidden rounded-full bg-[var(--light-gray)]">
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
                <span className={`text-base font-medium transition-colors duration-300 ${
                  active === i ? "text-[var(--dark-graphite)]" : "text-[var(--graphite)]/50 group-hover:text-[var(--graphite)]"
                }`}>
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right — panel */}
          <div className="min-h-[440px]">
            <AnimatePresence mode="wait">
              <DeliverablePanel key={active} item={deliverables[active]} />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
