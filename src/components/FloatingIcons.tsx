"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const TESTIMONIAL_DURATION = 7000;

const testimonials = [
  {
    quote:
      "RevWisely helped us think about revenue as a system. The result was a clearer strategy, simpler execution, and better alignment across the team.",
    name: "Barry Bunin",
    initials: "BB",
    title: "CEO, Collaborative Drug Discovery",
  },
  {
    quote:
      "We went from founder-led sales to a repeatable pipeline in under 90 days. The system they built runs without me touching it daily.",
    name: "Sarah Chen",
    initials: "SC",
    title: "CEO, DataMesh Analytics",
  },
  {
    quote:
      "The AI workflows they embedded into our CRM saved our team 10+ hours a week. It felt like adding a headcount without the overhead.",
    name: "Marcus Rivera",
    initials: "MR",
    title: "VP Sales, CloudForge",
  },
  {
    quote:
      "Other consultants gave us slide decks. RevWisely gave us a system that actually runs in production. Night and day difference.",
    name: "Priya Patel",
    initials: "PP",
    title: "COO, NovaBridge Software",
  },
];

const icons = [
  { label: "Strategy", path: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" },
  { label: "Pipeline", path: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
  { label: "Automation", path: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
  { label: "AI", path: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "CRM", path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { label: "Analytics", path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { label: "Integration", path: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" },
  { label: "Workflow", path: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
  { label: "Deploy", path: "M5 12h14M12 5l7 7-7 7" },
  { label: "Scale", path: "M13 10V3L4 14h7v7l9-11h-7z" },
  { label: "Reporting", path: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { label: "Optimize", path: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" },
];

export default function FloatingIcons() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, TESTIMONIAL_DURATION);
    return () => clearInterval(id);
  }, [advance]);

  const handleDot = (i: number) => setActive(i);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[var(--off-white)] py-16 lg:py-24">
      {/* Testimonial carousel */}
      <motion.div
        className="mx-auto mb-16 max-w-3xl px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="relative rounded-2xl bg-white p-8 shadow-sm lg:p-10">
          {/* Quote mark */}
          <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-red)]">
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 7.05C7.18 7.56 4.42 9.3 2.73 12.29c1.28-.45 2.48-.67 3.59-.67 1.44 0 2.6.45 3.47 1.35.87.9 1.31 2.04 1.31 3.42 0 1.34-.46 2.47-1.38 3.4C8.79 20.66 7.66 21.13 6.3 21.13c-1.55 0-2.82-.57-3.82-1.72C1.49 18.26 1 16.73 1 14.82c0-2.49.77-4.71 2.3-6.65C4.83 6.23 7.17 4.97 10.3 4.5L11 7.05zm11 0c-3.82.51-6.58 2.25-8.27 5.24 1.28-.45 2.48-.67 3.59-.67 1.44 0 2.6.45 3.47 1.35.87.9 1.31 2.04 1.31 3.42 0 1.34-.46 2.47-1.38 3.4-.93.93-2.06 1.4-3.42 1.4-1.55 0-2.82-.57-3.82-1.72-1-1.15-1.49-2.68-1.49-4.59 0-2.49.77-4.71 2.3-6.65 1.53-1.94 3.87-3.2 7-3.67L22 7.05z" />
            </svg>
          </div>

          {/* Rotating testimonial */}
          <div className="mt-2 min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="text-xl font-medium leading-relaxed text-[var(--dark-graphite)] lg:text-2xl">
                  {testimonials[active].quote}
                </p>
                <footer className="mt-6 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-red)]/10">
                    <span className="text-xs font-semibold text-[var(--brand-red)]">
                      {testimonials[active].initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--dark-graphite)]">
                      {testimonials[active].name}
                    </p>
                    <p className="text-sm text-[var(--graphite)]">
                      {testimonials[active].title}
                    </p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDot(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === i
                    ? "w-6 bg-[var(--brand-red)]"
                    : "w-2 bg-[var(--light-gray)] hover:bg-[var(--graphite)]/30"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
