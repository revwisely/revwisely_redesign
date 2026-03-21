"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import ParticleCanvas from "@/components/ParticleCanvas";
import { openCalendly } from "@/lib/calendly";

export default function HomeHeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Scroll-driven parallax: content drifts up + fades as user scrolls past
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
      <ParticleCanvas
        particleCount={350}
        followCursor={false}
        className="z-0"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-[900px] px-6 text-center"
      >
        {/* Headline — each line staggers in separately */}
        <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--dark-graphite)]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
            animate={
              isInView
                ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }
                : {}
            }
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Revenue builders.
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
            animate={
              isInView
                ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }
                : {}
            }
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            AI practitioners.
          </motion.span>
        </h1>

        {/* Subheadline fades up */}
        <motion.p
          className="mx-auto mt-6 max-w-[620px] text-lg leading-relaxed text-[var(--graphite)]"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          We design revenue systems that scale — with AI built in
          from day one.
        </motion.p>

        {/* CTA group */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <button
            onClick={openCalendly}
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--dark-graphite)] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[var(--brand-red)] hover:shadow-xl hover:shadow-[var(--brand-red)]/10"
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
            className="text-sm text-[var(--graphite)]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            30 minutes. No pitch deck. Just clarity on where your revenue engine can go.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="h-6 w-6 text-[var(--graphite)]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
