"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function NewWaySection() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (!videoRef.current) return;
    if (isInView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <section className="relative overflow-hidden bg-[var(--off-white)] pb-0 pt-20 lg:pt-28">
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
              The New Way
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
            >
              The new way: a coordinated system.
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
                Humans lead strategy, relationships, and growth. AI agents handle
                the operational workflows underneath.
              </p>
              <p>
                Fewer roles. More leverage. One coordinated engine.
              </p>
            </motion.div>
          </div>

          {/* Right — video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-[var(--light-gray)] bg-white shadow-lg"
          >
            <video
              ref={videoRef}
              src="/videos/maestro-new-way.mp4"
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom curve into white */}
      <div className="relative -mb-px mt-16 lg:mt-24">
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
