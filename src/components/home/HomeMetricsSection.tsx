"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  isInView,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
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
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const metrics = [
  {
    target: 10,
    prefix: "6\u2013",
    suffix: " hrs",
    label: "back per rep, per week",
    description:
      "AI handles the operational work so your team focuses on selling.",
  },
  {
    target: 30,
    suffix: "%",
    label: "faster deal cycles",
    description:
      "Better qualification. Quicker execution. Sharper forecasting.",
  },
  {
    target: 30,
    suffix: "%",
    label: "lower cost to serve",
    description:
      "Smarter targeting and automation. Scale without scaling headcount.",
  },
  {
    target: 40,
    prefix: "20\u2013",
    suffix: "%",
    label: "faster ramp time for new hires",
    description:
      "Accelerated onboarding and execution across the revenue team.",
  },
];

export default function HomeMetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-[var(--dark-graphite)] pb-0 pt-0">
      {/* Top wave divider */}
      <div className="relative -mb-1">
        <svg
          className="block w-full"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0V40C360 80 720 80 1080 50C1260 35 1380 20 1440 10V0H0Z"
            fill="var(--off-white)"
          />
        </svg>
      </div>

      <div ref={ref} className="mx-auto max-w-[1200px] px-6 pt-12 lg:px-8 lg:pt-16">
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            Results
          </motion.p>
          <h2 className="mt-6 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-white">
            The numbers.
          </h2>
          {/* Animated accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 h-[2px] w-20 origin-left bg-[var(--brand-red)] opacity-50"
          />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative"
            >
              {/* Subtle glow behind the number */}
              <div className="pointer-events-none absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[var(--brand-red)]/5 blur-2xl" />
              <div className="relative">
                <p className="text-[clamp(2.5rem,5vw,3.5rem)] font-black leading-none tracking-tight text-white">
                  <AnimatedCounter
                    target={metric.target}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    isInView={isInView}
                  />
                </p>
                <p className="mt-2 text-sm font-semibold text-white/70">
                  {metric.label}
                </p>
                {/* Divider line that draws in */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="my-4 h-px w-full origin-left bg-white/10"
                />
                <p className="text-sm leading-relaxed text-white/40">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="relative -mb-px mt-20 lg:mt-28">
        <svg
          className="block w-full"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 80V40C360 0 720 0 1080 20C1260 30 1380 45 1440 55V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
