"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const deliverables = [
  {
    title: "Revenue Blueprint",
    description:
      "A full architectural design of your AI-native revenue system — ICP, positioning, process maps, and technology requirements.",
    icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
  },
  {
    title: "AI Agent Design",
    description:
      "Custom-designed AI agents for marketing, sales, and RevOps — scoped, built, and integrated into your workflows.",
    icon: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z",
  },
  {
    title: "CRM Integration",
    description:
      "CRM architecture, data models, automation triggers, and pipeline logic — engineered to run in production, not theory.",
    icon: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
  },
  {
    title: "Signal Detection",
    description:
      "Intent data, behavioral triggers, and cross-channel signal mapping that identify who is ready to buy — before they tell you.",
    icon: "M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
  },
  {
    title: "GTM Automation",
    description:
      "Automated go-to-market motions — outbound sequences, nurture campaigns, content workflows — running without manual intervention.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    title: "Operating Model",
    description:
      "The governance layer — dashboards, KPIs, review cadences, and escalation paths that keep humans in control of the system.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative bg-white py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            What We Deliver
          </p>
          <h2 className="mt-6 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]">
            What RevWisely Delivers
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--graphite)]">
            We are not an AI tool vendor. We design the system — then build it
            inside your business.
          </p>
        </motion.div>

        {/* 6 Deliverable Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--light-gray)] bg-[var(--off-white)] p-8 transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-1 lg:p-10"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                <svg
                  className="h-6 w-6 text-[var(--brand-red)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={item.icon} />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-[var(--dark-graphite)]">
                {item.title}
              </h3>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-[var(--graphite)]">
                {item.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-8 h-0.5 w-full rounded-full bg-[var(--brand-red)] opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
