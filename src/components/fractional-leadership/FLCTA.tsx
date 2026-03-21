"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ParticleCanvas from "@/components/ParticleCanvas";
import { openCalendly } from "@/lib/calendly";

export default function FLCTA() {
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.15] tracking-tight text-white">
            The system works better
            <br />
            when someone&apos;s leading it.
          </h2>
          <div className="mt-12">
            <button
              onClick={openCalendly}
              className="inline-flex rounded-full bg-white px-10 py-4 text-base font-semibold text-[var(--dark-graphite)] transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:scale-105"
            >
              Book a Conversation
            </button>
          </div>

          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-white/50">
            30 minutes. We&apos;ll talk about where your revenue operation is
            today and what leadership looks like for what&apos;s next.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
