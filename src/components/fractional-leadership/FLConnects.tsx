"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    label: "Revenue Infrastructure",
    href: "/revenue-architecture",
    description: "Need the system built from scratch? We design and deploy the full revenue infrastructure.",
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z",
  },
  {
    label: "Maestro AI Revenue System",
    href: "/maestro",
    description: "Ready for AI? The Maestro system turns your operation into an AI-native revenue engine.",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
  },
];

export default function FLConnects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[var(--off-white)] py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            The Ecosystem
          </p>
          <h2 className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]">
            Leadership that runs
            <br />
            the system.
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-[540px] text-base leading-relaxed text-[var(--graphite)]"
          >
            Revenue Infrastructure builds the foundation. Maestro adds the
            AI agent layer. Fractional Sales Leadership keeps it all
            performing and compounding over time.
          </motion.p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-[900px] gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.a
              key={service.label}
              href={service.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              className="group rounded-2xl border border-[var(--light-gray)] bg-white p-8 transition-all duration-300 hover:border-[var(--brand-red)]/20 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-red)]/10 transition-colors duration-300 group-hover:bg-[var(--brand-red)]/15">
                <svg
                  className="h-6 w-6 text-[var(--brand-red)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[var(--dark-graphite)]">
                {service.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--graphite)]">
                {service.description}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-red)] transition-colors">
                Learn more
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
