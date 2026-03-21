"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const audiences = [
  {
    title: "Founders leading revenue themselves.",
    body: "You\u2019re closing deals, managing pipeline, and trying to lead the company at the same time. A fractional revenue leader takes the operational weight so you can focus on vision and growth.",
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  },
  {
    title: "Companies between revenue leaders.",
    body: "Your last VP Sales left. Your next one isn\u2019t hired yet. In the meantime, pipeline doesn\u2019t pause. We keep the revenue motion running while you take your time making the right hire.",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
  },
  {
    title: "Teams with the system but not the leader.",
    body: "You\u2019ve built the CRM. You\u2019ve hired the reps. But nobody is running the operating rhythm, inspecting the pipeline, or holding the team accountable to the process.",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
  },
];

export default function FLWhoIsFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-white py-20 lg:py-28">
      {/* Top curve from off-white */}
      <div className="absolute inset-x-0 -top-px">
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

      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            The Fit
          </p>
          <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]">
            Who this is for.
          </h2>
        </motion.div>

        <div className="mt-14 space-y-6">
          {audiences.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
              className="group grid items-start gap-6 rounded-2xl border border-[var(--light-gray)] bg-white p-8 transition-shadow duration-300 hover:shadow-lg md:grid-cols-[auto_1fr] md:gap-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-red)]/10 transition-colors duration-300 group-hover:bg-[var(--brand-red)]/15">
                <svg
                  className="h-7 w-7 text-[var(--brand-red)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-bold leading-snug text-[var(--dark-graphite)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--graphite)]">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
