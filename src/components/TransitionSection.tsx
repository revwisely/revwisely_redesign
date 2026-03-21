"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TransitionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-[var(--off-white)] py-24 lg:py-36">
      <div ref={ref} className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-[1.2] tracking-tight text-[var(--dark-graphite)]"
            >
              AI changes the structure of revenue organizations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold italic leading-snug text-[var(--brand-red)]"
            >
              Agents execute. Humans design.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 text-lg leading-relaxed text-[var(--graphite)]"
            >
              A central Revenue Orchestrator coordinates workflows across systems,
              data, and teams — replacing fragmented handoffs with a single,
              intelligent operating layer.
            </motion.p>
          </div>

          {/* Right — image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[var(--light-gray)]"
          >
            {/* Replace src with actual image when ready */}
            <div className="flex h-full w-full items-center justify-center text-sm text-[var(--graphite)]/40">
              <svg className="mr-2 h-5 w-5 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
              </svg>
              Image placeholder
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
