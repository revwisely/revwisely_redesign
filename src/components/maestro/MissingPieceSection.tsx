"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function MissingPieceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — headline */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
            >
              The Gap
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
            >
              The missing piece:
              <br />
              revenue infrastructure.
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
            />
          </div>

          {/* Right — narrative */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg leading-relaxed text-[var(--graphite)]"
            >
              Most companies experimenting with AI run into the same problem.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 text-lg leading-relaxed text-[var(--graphite)]"
            >
              They deploy tools. They test workflows. They automate small tasks.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-5 text-2xl font-bold text-[var(--dark-graphite)]"
            >
              But nothing connects.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-5 text-lg leading-relaxed text-[var(--graphite)]"
            >
              Without a clear architecture, AI remains a collection of isolated
              experiments rather than part of a coordinated revenue engine.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-8 text-lg font-bold text-[var(--dark-graphite)]"
            >
              This is where the Maestro AI Revenue System&trade; comes in.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
