"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import ParticleCanvas from "@/components/ParticleCanvas";
import { openCalendly } from "@/lib/calendly";

const caseStudies = [
  {
    label: "AI-Native Revenue Operations",
    title: "Moving to AI-Native\nWorkflows Is Transformative",
    description:
      "How RevWisely cut operational costs 30–50% and accelerated workflows 2–5x by redesigning revenue operations as a unified, AI-native system with 35+ specialized agents.",
    stats: [
      { value: "30–50%", label: "Cost reduction" },
      { value: "2–5x", label: "Faster execution" },
      { value: "35+", label: "Specialized agents" },
    ],
    href: "/case-study/ai-native-workflows",
  },
  {
    label: "Operational Visibility & AI Readiness",
    title: "Strengthening Operational\nVisibility at Scale",
    description:
      "How RevWisely embedded fractional Business Operations leadership to create executive visibility across 20+ initiatives at a vertical SaaS and fintech company serving 250,000+ professionals.",
    stats: [
      { value: "20+", label: "Initiatives tracked" },
      { value: "250K+", label: "Platform users" },
      { value: "600+", label: "Employees" },
    ],
    href: "/case-study/operational-visibility",
  },
  {
    label: "Revenue System Redesign",
    title: "Lowering Cost of Sales and\nBuilding a Scalable Engine",
    description:
      "How RevWisely reduced sales expense from 43% to 28% of revenue and increased profitability 5x by redesigning the revenue system at a life sciences software company.",
    stats: [
      { value: "43→28%", label: "Sales expense" },
      { value: "5x", label: "Profitability gain" },
      { value: "15%", label: "Revenue growth" },
    ],
    href: "/case-study/lowering-cost-of-sales",
  },
];

function useSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, isInView };
}

export default function CaseStudyLandingClient() {
  const hero = useSection();
  const grid = useSection();
  const cta = useSection();

  return (
    <main>
      {/* Hero */}
      <section className="bg-white pb-10 pt-32 lg:pb-16 lg:pt-40">
        <div ref={hero.ref} className="mx-auto max-w-[800px] px-6 text-center lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            Case Studies
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--dark-graphite)]"
          >
            Real Systems.
            <br />
            Real Results.
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={hero.isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-8 h-[2px] w-16 bg-[var(--brand-red)] opacity-40"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 text-lg leading-relaxed text-[var(--graphite)]"
          >
            We don&apos;t just advise&mdash;we embed. These are real engagements
            where RevWisely partnered with companies to redesign operations,
            build systems, and deliver measurable impact.
          </motion.p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="bg-[var(--off-white)] py-20 lg:py-28">
        <div ref={grid.ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.href}
                initial={{ opacity: 0, y: 40 }}
                animate={grid.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.15 }}
              >
                <Link href={cs.href} className="group block">
                  <div className="overflow-hidden rounded-2xl border border-[var(--light-gray)] bg-white p-8 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl lg:p-12">
                    <div className="grid items-center gap-10 lg:grid-cols-[1fr_280px]">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
                          {cs.label}
                        </p>
                        <h2 className="mt-4 whitespace-pre-line text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]">
                          {cs.title}
                        </h2>
                        <p className="mt-5 max-w-[600px] text-base leading-relaxed text-[var(--graphite)]">
                          {cs.description}
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-red)] transition-colors group-hover:text-[var(--brand-red-hover)]">
                          Read case study
                          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 lg:gap-4">
                        {cs.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="rounded-xl border border-[var(--light-gray)] bg-[var(--off-white)] p-4 text-center lg:text-left"
                          >
                            <div className="text-2xl font-bold tracking-tight text-[var(--dark-graphite)] lg:text-3xl">
                              {stat.value}
                            </div>
                            <div className="mt-1 text-xs text-[var(--graphite)]">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark relative overflow-hidden py-20 lg:py-28">
        <ParticleCanvas
          particleCount={150}
          enableShapeFormation={true}
          followCursor={false}
          className="z-0"
        />

        <div ref={cta.ref} className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={cta.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.15] tracking-tight text-white">
              Your System Could
              <br />
              Be Next
            </h2>
            <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-white/60">
              Every engagement starts with understanding how work actually moves
              through your business. From there, we build.
            </p>

            <div className="mt-12">
              <button
                onClick={openCalendly}
                className="inline-flex rounded-full bg-white px-10 py-4 text-base font-semibold text-[var(--dark-graphite)] transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
              >
                Book a Conversation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
