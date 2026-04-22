"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function RAMaestroConnect() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-[var(--dark-graphite)] py-20 lg:py-28">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-red)]/5 blur-[120px]" />

      <div ref={ref} className="relative mx-auto max-w-[900px] px-6 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
        >
          What Comes Next
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white"
        >
          Ready for AI?
          <br />
          This is where it starts.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-8 h-[1px] w-20 origin-center bg-[var(--brand-red)] opacity-50"
        />

        <div className="mx-auto mt-10 max-w-[640px] space-y-6 text-lg leading-relaxed text-white/50">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            A well-built revenue infrastructure is valuable on its own.
            It&apos;s also the foundation that makes AI possible.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Some clients start here and never need Maestro — they just needed
            their RevOps built properly. Others use this as the first step
            toward a full AI-enabled operation.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            Both paths start with infrastructure that actually works.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <a
            href="/maestro"
            className="group inline-flex items-center gap-2 text-base font-semibold text-white transition-colors duration-300 hover:text-[var(--brand-red)]"
          >
            Explore the Maestro AI Revenue System&trade;
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
