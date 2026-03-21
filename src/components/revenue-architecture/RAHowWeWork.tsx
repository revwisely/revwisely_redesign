"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const phases = [
  {
    number: "01",
    title: "Discovery & Assessment",
    body: "We audit your current revenue operation. Process, systems, data, team structure, tooling. We find what\u2019s working, what\u2019s breaking, and where the gaps are.",
  },
  {
    number: "02",
    title: "Architecture Design",
    body: "We design the full system. Sales process, CRM schema, automation logic, integration map, reporting framework. Documented and reviewed with your team before we build.",
  },
  {
    number: "03",
    title: "Build & Deploy",
    body: "We build it inside your business. CRM, workflows, dashboards, integrations \u2014 all in production. Your live environment, not a sandbox.",
  },
  {
    number: "04",
    title: "Enablement & Handoff",
    body: "We train your team, document everything, and hand it off running. The system should work without us. That\u2019s the point.",
  },
];

export default function RAHowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            The Process
          </p>
          <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]">
            How the engagement works.
          </h2>
        </motion.div>

        <div className="mx-auto mt-16 max-w-3xl">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              className="group relative flex gap-6 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="relative flex shrink-0 flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--brand-red)]/20 bg-white text-sm font-bold text-[var(--brand-red)] transition-colors duration-300 group-hover:border-[var(--brand-red)]/50 group-hover:bg-[var(--brand-red)]/5">
                  {phase.number}
                </div>
                {i < phases.length - 1 && (
                  <div className="mt-3 h-full w-px bg-gradient-to-b from-[var(--brand-red)]/20 to-[var(--light-gray)]" />
                )}
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="text-xl font-bold text-[var(--dark-graphite)]">
                  {phase.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--graphite)]">
                  {phase.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
