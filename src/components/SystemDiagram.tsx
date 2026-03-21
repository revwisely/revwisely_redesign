"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const layers = [
  {
    label: "STRATEGY",
    components: [
      { name: "Sales Process", desc: "Structured motions & pipeline design" },
      { name: "Marketing Ops", desc: "Demand gen & content alignment" },
    ],
  },
  {
    label: "OPERATIONS",
    components: [
      { name: "CRM Design", desc: "Data architecture & workflow logic" },
      { name: "Automation", desc: "Sequencing, triggers & routing" },
    ],
  },
  {
    label: "INTELLIGENCE",
    components: [
      { name: "AI Workflows", desc: "Prospecting, enablement & reporting" },
      { name: "Tech Stack", desc: "Integration & orchestration layer" },
    ],
  },
];

export default function SystemDiagram({ dark = false }: { dark?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const cardBg = dark ? "bg-white/5 border-white/10" : "bg-white border-[var(--light-gray)]";
  const cardText = dark ? "text-white" : "text-[var(--dark-graphite)]";
  const cardDesc = dark ? "text-white/50" : "text-[var(--graphite)]/70";
  const labelColor = dark ? "text-white/40" : "text-[var(--graphite)]/60";
  const arrowColor = dark ? "text-white/20" : "text-[var(--graphite)]/30";

  return (
    <div ref={ref}>
      {/* Desktop: 3-column layered pipeline */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-5">
          {layers.map((layer, layerIdx) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: layerIdx * 0.15,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <p className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] ${labelColor}`}>
                {layer.label}
              </p>
              <div className="flex flex-col gap-3">
                {layer.components.map((comp) => (
                  <div
                    key={comp.name}
                    className={`rounded-xl border border-l-[3px] border-l-[var(--brand-red)] px-5 py-4 transition-all duration-300 hover:scale-[1.02] ${cardBg}`}
                  >
                    <p className={`text-sm font-semibold ${cardText}`}>
                      {comp.name}
                    </p>
                    <p className={`mt-1 text-xs leading-relaxed ${cardDesc}`}>
                      {comp.desc}
                    </p>
                  </div>
                ))}
              </div>

              {layerIdx < 2 && (
                <div className="mt-3 flex justify-end">
                  <svg
                    width="24"
                    height="12"
                    viewBox="0 0 24 12"
                    className={`translate-x-[18px] ${arrowColor}`}
                  >
                    <line x1="0" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="1.5" />
                    <polygon points="16,2 22,6 16,10" fill="currentColor" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-[var(--brand-red)]/30" />
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--brand-red)]/60">
            Data flows from strategy through operations into intelligence
          </p>
          <div className="h-px w-12 bg-[var(--brand-red)]/30" />
        </div>
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden">
        <div className="flex flex-col gap-8">
          {layers.map((layer, layerIdx) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: layerIdx * 0.15, duration: 0.6 }}
            >
              <p className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] ${labelColor}`}>
                {layer.label}
              </p>
              <div className="flex flex-col gap-3">
                {layer.components.map((comp) => (
                  <div
                    key={comp.name}
                    className={`rounded-xl border border-l-[3px] border-l-[var(--brand-red)] px-5 py-4 ${cardBg}`}
                  >
                    <p className={`text-sm font-semibold ${cardText}`}>{comp.name}</p>
                    <p className={`mt-1 text-xs leading-relaxed ${cardDesc}`}>{comp.desc}</p>
                  </div>
                ))}
              </div>
              {layerIdx < 2 && (
                <div className="flex justify-center py-3">
                  <svg width="12" height="24" viewBox="0 0 12 24" className={arrowColor}>
                    <line x1="6" y1="0" x2="6" y2="18" stroke="currentColor" strokeWidth="1.5" />
                    <polygon points="2,16 6,22 10,16" fill="currentColor" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
