"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const responsibilities = [
  {
    number: "01",
    title: "Revenue Strategy & Prioritization",
    body: "Where to focus. What to stop. How to sequence the next 90 days of GTM execution.",
  },
  {
    number: "02",
    title: "Sales & Marketing Alignment",
    body: "Pipeline reviews, lead handoffs, shared definitions of qualified — all coordinated across teams.",
  },
  {
    number: "03",
    title: "Pipeline Management & Forecasting",
    body: "Stage hygiene, deal inspection, velocity tracking, and forecasts leadership can actually trust.",
  },
  {
    number: "04",
    title: "Performance Management & Coaching",
    body: "Weekly 1:1s, rep scorecards, and accountability rhythms that help your team improve — not just report.",
  },
  {
    number: "05",
    title: "Architecture Oversight",
    body: "CRM structure, automation workflows, reporting infrastructure — making sure the system under the team actually works.",
  },
  {
    number: "06",
    title: "Executive Communication",
    body: "Board-ready revenue updates, investor narratives, and cross-functional alignment at the leadership level.",
  },
];

export default function FLResponsibilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            The Scope
          </p>
          <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]">
            What your revenue
            <br />
            leader owns.
          </h2>
          <p className="mt-6 max-w-[540px] text-base leading-relaxed text-[var(--graphite)]">
            We work alongside your team in several ways.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {responsibilities.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
              className="group flex gap-5 rounded-2xl border border-[var(--light-gray)] bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Number accent */}
              <div className="shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-red)]/10 text-sm font-bold text-[var(--brand-red)] transition-colors duration-300 group-hover:bg-[var(--brand-red)]/15">
                  {item.number}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-base font-bold text-[var(--dark-graphite)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--graphite)]">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
