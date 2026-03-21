"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function RAProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-[var(--off-white)] py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-[var(--light-gray)] bg-white shadow-md">
              <div className="aspect-[4/3] w-full">
                <img
                  src="/images/ra-problem.jpg"
                  alt="Fragmented revenue tools"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.classList.add("flex", "items-center", "justify-center");
                    const placeholder = document.createElement("div");
                    placeholder.className = "text-center p-8";
                    placeholder.innerHTML = '<p class="text-sm text-[var(--graphite)]/40">Problem image placeholder</p><p class="mt-1 text-xs text-[var(--graphite)]/30">Recommended: 800×600</p>';
                    target.parentElement!.appendChild(placeholder);
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right — narrative */}
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
              className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
            >
              The gap between
              <br />
              strategy and execution.
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 space-y-5 text-base leading-relaxed text-[var(--graphite)]"
            >
              <p>
                Most companies have a revenue strategy. It lives in a deck
                somewhere.
              </p>
              <p>
                Sales processes live in people&apos;s heads. CRMs are configured
                for data entry, not pipeline intelligence. Marketing and sales
                run on parallel tracks.
              </p>
              <p>
                Tools get added. Automations get stitched together. But without
                a real foundation, every addition just adds complexity.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
