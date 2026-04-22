"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function OldWaySection() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Auto-play video when section is visible
  useEffect(() => {
    if (!videoRef.current) return;
    if (isInView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <section className="relative overflow-hidden bg-[var(--dark-graphite)] pb-0 pt-20 lg:pt-28">
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
              The Old Way
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-white"
            >
              The old way: scale by hiring.
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-50"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 space-y-5 text-base leading-relaxed text-white/60"
            >
              <p>
                22 specialized roles across marketing, sales, and RevOps.
                Fragmented systems. Delayed insights. Reactive pipeline management.
              </p>
              <p>
                More people. More complexity. Same problems.
              </p>
            </motion.div>
          </div>

          {/* Right — video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
          >
            <video
              ref={videoRef}
              src="/videos/maestro-old-way.mp4"
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="relative mt-20 lg:mt-28">
        <svg
          className="block w-full"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120V60C240 0 480 0 720 30C960 60 1200 60 1440 30V120H0Z"
            fill="var(--off-white)"
          />
        </svg>
      </div>
    </section>
  );
}
