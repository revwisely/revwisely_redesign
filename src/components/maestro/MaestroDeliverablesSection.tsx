"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const deliverables = [
  {
    title: "Revenue system blueprint",
    description:
      "How your entire revenue operation works as one coordinated system.",
  },
  {
    title: "AI agent design",
    description:
      "Which workflows become AI agents, and how they integrate with your team\u2019s daily execution.",
  },
  {
    title: "Signal detection frameworks",
    description:
      "The layer that monitors accounts, pipeline, and market activity in real time.",
  },
  {
    title: "CRM and data integration",
    description:
      "Connected systems. Clean data. Signals captured across your revenue ecosystem.",
  },
  {
    title: "GTM workflow automation",
    description:
      "The operational tasks that slow your team down, handled by agents.",
  },
  {
    title: "Operating model design",
    description:
      "How marketing, sales, and RevOps work together inside the new system.",
  },
];

export default function MaestroDeliverablesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[var(--off-white)] py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            The Deliverables
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
          >
            What we deliver.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-[var(--graphite)]"
          >
            We design and implement the Maestro AI Revenue System&trade;.
            Our work typically includes:
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 h-[2px] w-20 origin-left bg-[var(--brand-red)] opacity-40"
          />
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6">
          {deliverables.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group flex gap-5 rounded-xl border border-[var(--light-gray)] bg-white p-6 transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mt-0.5 shrink-0">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-red)]">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--dark-graphite)]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--graphite)]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mx-auto mt-12 max-w-3xl text-lg font-bold text-[var(--dark-graphite)]"
        >
          We&apos;re not an AI tool vendor. We design the system.
        </motion.p>
      </div>
    </section>
  );
}
