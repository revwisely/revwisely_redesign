"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const audiences = [
  "B2B SaaS companies with strong product data but fragmented workflows across marketing, sales, and RevOps.",
  "Leadership teams that want real pipeline visibility and consistent execution \u2014 not more dashboards nobody trusts.",
  "Organizations adding tools faster than they\u2019re adding outcomes. The system needs redesign, not another point solution.",
];

export default function WhoIsForSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            The Fit
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
          >
            Who this is for.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 h-[2px] w-20 origin-left bg-[var(--brand-red)] opacity-40"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 text-lg leading-relaxed text-[var(--graphite)]"
          >
            The Maestro AI Revenue System&trade; is built for companies
            ready to redesign how revenue works.
          </motion.p>

          <div className="mt-10 space-y-6">
            {audiences.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 + i * 0.12 }}
                className="flex gap-4"
              >
                <div className="mt-2 shrink-0">
                  <div className="h-2 w-2 rounded-full bg-[var(--brand-red)]" />
                </div>
                <p className="text-base leading-relaxed text-[var(--graphite)]">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-12 text-xl font-bold leading-snug text-[var(--dark-graphite)]"
          >
            If growth is getting harder and more expensive despite having more
            tools and more people &mdash; the architecture is the problem.
            Maestro is the fix.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
