"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function MaestroTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-[var(--off-white)] py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-hidden rounded-3xl bg-[var(--dark-graphite)] p-10 lg:p-16"
        >
          {/* Animated floating glow orbs */}
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--brand-red)]/10 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[var(--brand-red)]/5 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left — staggered copy */}
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
              >
                Featured
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-white"
              >
                Introducing the Maestro AI Revenue System&trade;
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-6 text-base leading-relaxed text-white/60"
              >
                Signal detection, intelligence, and execution — working as one
                system across your entire revenue operation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mt-4 text-base leading-relaxed text-white/60"
              >
                Built for companies that want to scale revenue without scaling
                complexity.
              </motion.p>
              <motion.a
                href="/maestro"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--dark-graphite)] transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:shadow-white/10 hover:scale-105"
              >
                See how Maestro works
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </motion.a>
            </div>

            {/* Right — visual placeholder with entrance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src="/images/home-maestro-teaser.jpeg"
                alt="Maestro AI Revenue System"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
