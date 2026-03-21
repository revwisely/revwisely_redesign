"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const problems = [
  {
    title: "Growth depends on people.",
    description:
      "Your best rep leaves, pipeline leaves with them. Sales is personality-driven. Marketing generates activity. Nobody can tell you what\u2019s actually working.",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
  },
  {
    title: "Complexity scales faster than revenue.",
    description:
      "More tools. More dashboards. More roles. The org gets bigger. The results don\u2019t.",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
  },
  {
    title: "AI is everywhere. Connected nowhere.",
    description:
      "A tool here. An automation there. Nothing is orchestrated. The potential is obvious. The architecture doesn\u2019t exist yet.",
    icon: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z",
  },
];

export default function HomeProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Headline drifts slower than cards for parallax depth
  const headlineY = useTransform(scrollYProgress, [0, 1], [50, -30]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [80, -20]);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Headline with parallax */}
        <motion.div
          style={{ y: headlineY }}
          className="mb-16 lg:mb-20"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            The Problem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 max-w-3xl text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
          >
            Revenue has never been
            <br />
            harder to grow.
          </motion.h2>
          {/* Animated accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 h-[2px] w-20 origin-left bg-[var(--brand-red)] opacity-40"
          />
        </motion.div>

        {/* Cards with independent parallax */}
        <motion.div style={{ y: cardsY }} className="grid gap-6 lg:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 50, rotateX: 8 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group rounded-3xl border border-[var(--light-gray)] bg-[var(--off-white)] p-8 transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-1 lg:p-10"
              style={{ perspective: 800 }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:scale-110">
                <svg
                  className="h-6 w-6 text-[var(--brand-red)] transition-transform duration-500 group-hover:rotate-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={problem.icon} />
                </svg>
              </div>

              <h3 className="text-lg font-bold leading-snug text-[var(--dark-graphite)]">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--graphite)]">
                {problem.description}
              </p>

              {/* Bottom accent that slides in on hover */}
              <div className="mt-6 h-[2px] w-0 rounded-full bg-[var(--brand-red)] opacity-30 transition-all duration-500 group-hover:w-12" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
