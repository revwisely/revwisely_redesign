"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const layers = [
  {
    label: "01",
    title: "Signal Layer",
    description: "Captures and interprets revenue signals across every channel.",
    bullets: [
      "Intent data aggregation",
      "Behavioral scoring",
      "Cross-channel signal mapping",
      "Real-time trigger detection",
    ],
    icon: "M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
  },
  {
    label: "02",
    title: "Intelligence Layer",
    description: "Analyzes patterns and recommends actions humans approve.",
    bullets: [
      "Pipeline pattern recognition",
      "Conversion probability modeling",
      "Resource allocation optimization",
      "Anomaly & risk detection",
    ],
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    label: "03",
    title: "Execution Layer",
    description: "Agents carry out coordinated actions across the revenue stack.",
    bullets: [
      "Automated outreach sequences",
      "Content generation & distribution",
      "CRM updates & enrichment",
      "Cross-system workflow orchestration",
    ],
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="relative bg-[var(--off-white)] py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            Architecture
          </p>
          <h2 className="mt-6 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]">
            How the Maestro
            <br />
            System Works
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--graphite)]">
            Three coordinated layers that turn fragmented revenue activity into
            an intelligent, self-improving system.
          </p>
        </motion.div>

        {/* 3 Layer Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 lg:p-10"
            >
              {/* Large faded number */}
              <span className="absolute -top-4 -right-2 text-[96px] font-black leading-none text-[var(--dark-graphite)] opacity-[0.04] transition-opacity group-hover:opacity-[0.08]">
                {layer.label}
              </span>

              {/* Icon */}
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-red)]/5">
                <svg
                  className="h-6 w-6 text-[var(--brand-red)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={layer.icon} />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-[var(--dark-graphite)]">
                {layer.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--graphite)]">
                {layer.description}
              </p>

              {/* Bullet list */}
              <ul className="mt-6 space-y-2.5">
                {layer.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-[var(--graphite)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)] opacity-50" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div className="mt-8 h-0.5 w-full rounded-full bg-[var(--brand-red)] opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          className="mt-20 text-center text-2xl font-bold text-[var(--dark-graphite)]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          Signal. Intelligence. Execution. One system.
        </motion.p>
      </div>
    </section>
  );
}
