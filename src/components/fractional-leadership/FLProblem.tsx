"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FLProblem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-[var(--dark-graphite)] pb-0 pt-20 lg:pt-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <div className="aspect-[4/3] w-full">
                <img
                  src="/images/fl-problem.jpg"
                  alt="Team without revenue leadership"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.classList.add("flex", "items-center", "justify-center");
                    const placeholder = document.createElement("div");
                    placeholder.className = "text-center p-8";
                    placeholder.innerHTML = '<p class="text-sm text-white/30">Image placeholder</p><p class="mt-1 text-xs text-white/20">Recommended: 800x600</p>';
                    target.parentElement!.appendChild(placeholder);
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right — copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
            >
              The Problem
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-white"
            >
              Founder-led sales got you here.
              <br />
              Scaling needs a system.
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-50"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 space-y-5 text-base leading-relaxed text-white/60"
            >
              <p>
                Instinct and grit got you to this point. But what got you here
                won&apos;t scale. Sales and marketing aren&apos;t aligned. Pipeline
                reviews feel like guesswork. The team is growing but the revenue
                motion isn&apos;t growing with it.
              </p>
              <p>
                You don&apos;t need more reps. You need someone designing
                the system they sell in.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="relative mt-20 lg:mt-28">
        <svg
          className="block w-full"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120V60C240 0 480 0 720 30C960 60 1200 60 1440 30V120H0Z"
            fill="var(--off-white)"
          />
        </svg>
      </div>
    </section>
  );
}
