"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { openCalendly } from "@/lib/calendly";

export default function FLHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-24"
    >
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-[1200px] px-6 lg:px-8"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <motion.div style={{ y: contentY }}>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
            >
              Fractional Sales Leadership
            </motion.p>

            <h1 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--dark-graphite)]">
              <motion.span
                className="block whitespace-nowrap"
                initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
                animate={isInView ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" } : {}}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                A CRO in the system.
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
                animate={isInView ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" } : {}}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Not on the sideline.
              </motion.span>
            </h1>

            <motion.p
              className="mt-6 max-w-[480px] text-lg leading-relaxed text-[var(--graphite)]"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Executive-level revenue leadership — embedded in your business,
              without the full-time hire.
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              <button
                onClick={openCalendly}
                className="inline-flex rounded-full bg-[var(--dark-graphite)] px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-[var(--brand-red)]"
              >
                Book a Conversation
              </button>
            </motion.div>
          </motion.div>

          {/* Right — hero image */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[var(--light-gray)] bg-[var(--off-white)] shadow-lg">
              <div className="aspect-[4/3] w-full">
                <img
                  src="/images/fl-hero.jpg"
                  alt="Fractional sales leadership"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.classList.add("flex", "items-center", "justify-center");
                    const placeholder = document.createElement("div");
                    placeholder.className = "text-center p-8";
                    placeholder.innerHTML = '<p class="text-sm text-[var(--graphite)]/40">Hero image placeholder</p><p class="mt-1 text-xs text-[var(--graphite)]/30">Recommended: 800x600</p>';
                    target.parentElement!.appendChild(placeholder);
                  }}
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-[var(--brand-red)]/5" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
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
