"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { openCalendly } from "@/lib/calendly";

export default function MaestroHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white"
    >
      {/* Curved background — fills from top, gentle arc curving away at bottom like Slack */}
      <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H1440V700Q1440 900 720 900Q0 900 0 700Z"
            fill="var(--off-white)"
          />
        </svg>
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-[900px] px-6 text-center"
      >
        <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--dark-graphite)]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
            animate={isInView ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Revenue Should Scale With Systems
          </motion.span>
          <motion.span
            className="block whitespace-nowrap"
            initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
            animate={isInView ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Not Headcount
          </motion.span>
        </h1>

        <motion.p
          className="mx-auto mt-6 max-w-[600px] text-lg leading-relaxed text-[var(--graphite)]"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          The Maestro AI Revenue System&trade; replaces fragmented GTM workflows
          with a coordinated revenue engine. AI handles the operational work.
          Your team focuses on growth.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          <button
            onClick={openCalendly}
            className="inline-flex rounded-full bg-[var(--dark-graphite)] px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-[var(--brand-red)]"
          >
            Request a Maestro Walkthrough
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <svg className="h-6 w-6 text-[var(--graphite)]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
