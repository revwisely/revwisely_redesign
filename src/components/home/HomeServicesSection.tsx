"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Fractional Sales Leadership",
    description:
      "Executive-level revenue leadership without the full-time hire. We align teams, manage pipeline, and ensure the system delivers results. Embedded in your business, not advising from the outside.",
    cta: "Learn more",
    href: "/fractional-leadership",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    tagline: "Strategic leadership that keeps the system performing.",
  },
  {
    title: "Revenue Infrastructure",
    description:
      "The RevOps foundation. Structured sales processes, CRM architecture, automation, tech stack integration, and dashboards \u2014 designed, deployed, and running in production.",
    cta: "Learn more",
    href: "/revenue-architecture",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    tagline: "Architecture designed, deployed, and operational.",
  },
  {
    title: "Maestro AI Revenue System\u2122",
    description:
      "AI agents that run your revenue operation. Signal detection, intelligence, and execution \u2014 designed as one coordinated system across marketing, sales, and RevOps.",
    cta: "Explore the Maestro system",
    href: "/maestro",
    icon: "M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    tagline: "The system that makes everything else work.",
  },
];

// Each card enters from a slightly different angle
const cardVariants = [
  { initial: { opacity: 0, y: 50, x: -20 } },
  { initial: { opacity: 0, y: 60 } },
  { initial: { opacity: 0, y: 50, x: 20 } },
];

export default function HomeServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative bg-white py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          className="mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            Services
          </motion.p>
          <h2 className="mt-6 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]">
            Three ways we work with you.
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 h-[2px] w-20 origin-left bg-[var(--brand-red)] opacity-40"
          />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={cardVariants[i].initial}
              animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--light-gray)] bg-[var(--off-white)] p-8 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 lg:p-10"
            >
              {/* Icon with hover animation */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:scale-110">
                <svg
                  className="h-6 w-6 text-[var(--brand-red)] transition-transform duration-500 group-hover:rotate-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={service.icon} />
                </svg>
              </div>

              <h3 className="text-xl font-bold leading-snug text-[var(--dark-graphite)]">
                {service.title}
              </h3>

              <p className="mt-4 flex-grow text-sm leading-relaxed text-[var(--graphite)]">
                {service.description}
              </p>

              <p className="mt-6 text-sm font-medium italic text-[var(--dark-graphite)]">
                {service.tagline}
              </p>

              {/* CTA link with animated arrow */}
              <a
                href={service.href}
                className="group/link mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-red)] transition-colors duration-200 hover:text-[var(--dark-graphite)]"
              >
                {service.cta}
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              {/* Bottom accent that slides in on hover */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-red)]/0 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
