"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FLWhatThisIs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[var(--off-white)] py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
            >
              The Model
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
            >
              Not advisory. Operational.
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
                We step into the revenue leadership role. Pipeline reviews,
                strategy sessions, team meetings, cross-functional alignment
                — all operational.
              </p>
              <p>
                We lead from inside the business, not from the outside.
              </p>
              <p className="text-lg font-bold text-[var(--dark-graphite)]">
                Same expertise as a full-time CRO. Deployed fractionally.
              </p>
            </motion.div>
          </div>

          {/* Right — image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[var(--light-gray)] bg-white shadow-lg">
              <div className="aspect-[4/3] w-full">
                <img
                  src="/images/fl-what-this-is.jpg"
                  alt="Revenue leader working with team"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.classList.add("flex", "items-center", "justify-center");
                    const placeholder = document.createElement("div");
                    placeholder.className = "text-center p-8";
                    placeholder.innerHTML = '<p class="text-sm text-[var(--graphite)]/40">Image placeholder</p><p class="mt-1 text-xs text-[var(--graphite)]/30">Recommended: 800x600</p>';
                    target.parentElement!.appendChild(placeholder);
                  }}
                />
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-[var(--brand-red)]/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
