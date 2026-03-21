"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Eyebrow + headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 lg:mb-16 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            The Problem
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]">
            Turn Revenue Into an Engine
            <br />
            Not a Guessing Game
          </h2>
        </motion.div>

        {/* Centered narrative prose with parallax */}
        <motion.div
          style={{ y }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 text-lg leading-relaxed text-[var(--graphite)]"
          >
            <p>
              For years, companies scaled the same way. Need more pipeline?
              Hire more SDRs. Need more content? Hire more marketers. Need
              better data? Hire more analysts.
            </p>
            <p>
              Every function grew by adding headcount. Every new system added
              complexity. And every leader spent more time managing people and
              tools than actually building revenue.
            </p>
            <p>
              The result: bloated teams, fragmented systems, and revenue
              engines that feel heavier the bigger they get.
            </p>
          </motion.div>

          {/* Bold closing callout */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 text-2xl font-bold text-[var(--dark-graphite)]"
          >
            The Maestro AI Revenue System&trade; changes that.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
