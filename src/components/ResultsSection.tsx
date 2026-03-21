"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({
  target,
  suffix = "",
  isInView,
}: {
  target: number;
  suffix?: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1500;
    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const metrics = [
  { target: 3, suffix: "\u00d7", label: "pipeline growth" },
  { target: 90, suffix: " days", label: "to full system deployment" },
  { target: 10, suffix: " hrs", label: "weekly time reclaimed per operator" },
  { target: 30, suffix: "%", label: "lower cost of customer acquisition" },
];

export default function ResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="results" className="relative bg-[var(--off-white)] py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            What Changes
          </p>
          <h2 className="mt-6 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]">
            Measurable Results
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--graphite)]">
            What companies experience after deploying the Maestro AI Revenue System.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="flex flex-wrap justify-between gap-y-12">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <p className="whitespace-nowrap text-[clamp(2.5rem,5vw,4rem)] font-black leading-none tracking-tight text-[var(--dark-graphite)]">
                <AnimatedCounter
                  target={metric.target}
                  suffix={metric.suffix}
                  isInView={isInView}
                />
              </p>
              <p className="mt-3 text-sm text-[var(--graphite)]">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
