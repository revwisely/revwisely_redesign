"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { openCalendly } from "@/lib/calendly";
import ParticleCanvas from "@/components/ParticleCanvas";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      {/* Particle background — full viewport */}
      <ParticleCanvas
        particleCount={350}
        followCursor={false}
        className="z-0"
      />

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-[900px] px-6 text-center"
      >
        {/* Brand mark */}
        <motion.div
          className="mb-8"
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="text-lg font-bold tracking-tight text-[var(--brand-red)]">
            Rev
          </span>
          <span className="text-lg font-bold tracking-tight text-[var(--graphite)]">
            Wisely
          </span>
        </motion.div>

        {/* Big centered headline */}
        <motion.h1
          className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--dark-graphite)]"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Revenue Should Scale With Systems<br /><span className="whitespace-nowrap">Not Headcount</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-6 max-w-[600px] text-lg leading-relaxed text-[var(--graphite)]"
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          The Maestro AI Revenue System&trade; turns fragmented GTM workflows into a
          coordinated revenue engine where AI agents execute and humans focus on
          strategy, relationships, and growth.
        </motion.p>

        {/* CTAs — centered row */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={openCalendly}
            className="inline-flex rounded-full bg-[var(--dark-graphite)] px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-[var(--brand-red)]"
          >
            Book a Conversation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
