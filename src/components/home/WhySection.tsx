"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const closingWords = ["AI-first.", "Operator-led.", "Built to stay."];

export default function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const ruleWidth = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            Why RevWisely
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
          >
            Why RevWisely.
          </motion.h2>

          {/* Scroll-driven horizontal rule */}
          <motion.div
            style={{ width: ruleWidth }}
            className="mt-8 h-px bg-gradient-to-r from-[var(--brand-red)]/30 to-[var(--light-gray)]"
          />

          {/* Staggered paragraphs */}
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-[var(--graphite)]">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Traditional consulting firms offer strategy but don&apos;t build.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              AI vendors sell tools but don&apos;t connect them to how your team
              actually operates.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Neither designs the system that ties it all together. We do.
            </motion.p>
          </div>

          {/* Closing line — word-by-word stagger */}
          <div className="mt-10 flex flex-wrap gap-x-3">
            {closingWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.55 + i * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="text-2xl font-bold text-[var(--dark-graphite)]"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
