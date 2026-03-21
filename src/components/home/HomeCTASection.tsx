"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ParticleCanvas from "@/components/ParticleCanvas";
import { openCalendly } from "@/lib/calendly";

export default function HomeCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="cta"
      className="section-dark relative overflow-hidden py-20 lg:py-28"
    >
      <ParticleCanvas
        particleCount={150}
        enableShapeFormation={true}
        followCursor={false}
        className="z-0"
      />

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8"
      >
        {/* Staggered headline lines */}
        <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.15] tracking-tight text-white">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30, clipPath: "inset(0 0 100% 0)" }}
            animate={isInView ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Growth should get easier
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30, clipPath: "inset(0 0 100% 0)" }}
            animate={isInView ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            as you scale. Not harder.
          </motion.span>
        </h2>

        <motion.p
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/60"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          We work with companies that are ready to move from effort-driven
          revenue to system-driven growth. If that sounds like the right
          conversation, let&apos;s have it.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <button
            onClick={openCalendly}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-semibold text-[var(--dark-graphite)] transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:shadow-white/10 hover:scale-105"
          >
            Book a Conversation
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
          <motion.p
            className="text-sm text-white/40"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            30 minutes. No pitch deck. We&apos;ll map where your revenue engine can go from here.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
