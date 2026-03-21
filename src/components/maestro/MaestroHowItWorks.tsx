"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const layers = [
  {
    number: "01",
    name: "Signal",
    description:
      "Continuous monitoring across your revenue ecosystem. CRM activity, product usage, pipeline movement, marketing engagement, funding announcements, hiring signals, account-level changes.",
    summary:
      "Your team sees what\u2019s happening \u2014 in real time.",
    color: "var(--brand-red)",
  },
  {
    number: "02",
    name: "Intelligence",
    description:
      "AI detects patterns and opportunities that would normally go unnoticed. Expansion signals from product usage. Pipeline risk before deals stall. Churn signals ahead of renewals.",
    summary:
      "Early warnings with clear context. Not surprises during pipeline reviews.",
    color: "var(--dark-graphite)",
  },
  {
    number: "03",
    name: "Execution",
    description:
      "Insights route to the right owner. Account summaries generate automatically. Opportunities get prioritized. Next actions get recommended.",
    summary: "Less time searching. More time closing.",
    color: "var(--graphite)",
  },
];

export default function MaestroHowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[var(--off-white)] py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            The Architecture
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
          >
            Three layers. One system.
          </motion.h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
              className="group relative rounded-2xl border border-[var(--light-gray)] bg-white p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="mb-6 flex items-center gap-4">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: layer.color }}
                >
                  {layer.number}
                </span>
                <h3 className="text-2xl font-bold text-[var(--dark-graphite)]">
                  {layer.name}
                </h3>
              </div>

              <div
                className="mb-6 h-[2px] w-12 opacity-40 transition-all duration-300 group-hover:w-20"
                style={{ backgroundColor: layer.color }}
              />

              <p className="text-base leading-relaxed text-[var(--graphite)]">
                {layer.description}
              </p>

              <p className="mt-6 text-sm font-semibold text-[var(--dark-graphite)]">
                {layer.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
