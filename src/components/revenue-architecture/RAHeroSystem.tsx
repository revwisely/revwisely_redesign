"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, animate } from "framer-motion";

/*
 * Hero graphic for /revenue-architecture. Replaced the stock dashboard-outcomes.mp4
 * (2026-11-05): that video left three nodes blank and froze for 5 of its 8 seconds,
 * which read as a glitch. This version labels every node with the hero copy's own
 * list, fills all of them, and never holds still once built.
 *
 * Brand: white cards, graphite type, ONE red element (the revenue node).
 */

const GRAPHITE = "#41424C";
const LIGHT = "#E4E4E7";
const RED = "#C74634";

type Box = { x: number; y: number; w: number; h: number };

const right = (b: Box) => ({ x: b.x + b.w / 2, y: b.y });
const left = (b: Box) => ({ x: b.x - b.w / 2, y: b.y });
const bottom = (b: Box) => ({ x: b.x, y: b.y + b.h / 2 });
const top = (b: Box) => ({ x: b.x, y: b.y - b.h / 2 });

type Nodes = Record<"sales" | "crm" | "stack" | "auto" | "revenue" | "dash", Box>;
type Edge = { from: { x: number; y: number }; to: { x: number; y: number }; at: number; pulse: number };
type Layout = { viewBox: string; N: Nodes; EDGES: Edge[] };

// `at` = when the line draws during the build; `pulse` = offset of its live pulse.
// EDGES[3] must be automation -> revenue in every layout (the revenue tick keys off it).
function edges(N: Nodes, dir: "across" | "down"): Edge[] {
  const out = dir === "across" ? right : bottom;
  const inn = dir === "across" ? left : top;
  return [
    { from: out(N.sales), to: inn(N.auto), at: 1.0, pulse: 0 },
    { from: out(N.crm), to: inn(N.auto), at: 1.1, pulse: 0.6 },
    { from: out(N.stack), to: inn(N.auto), at: 1.2, pulse: 1.2 },
    { from: out(N.auto), to: inn(N.revenue), at: 1.8, pulse: 1.0 },
    { from: out(N.auto), to: inn(N.dash), at: 1.9, pulse: 1.6 },
    dir === "across"
      ? { from: bottom(N.revenue), to: top(N.dash), at: 2.3, pulse: 2.0 }
      : { from: right(N.revenue), to: left(N.dash), at: 2.3, pulse: 2.0 },
  ];
}

// Desktop: inputs on the left, flowing right.
const WIDE_N: Nodes = {
  sales: { x: 130, y: 115, w: 190, h: 100 },
  crm: { x: 130, y: 300, w: 190, h: 100 },
  stack: { x: 130, y: 485, w: 190, h: 100 },
  auto: { x: 405, y: 300, w: 190, h: 110 },
  revenue: { x: 670, y: 185, w: 200, h: 130 },
  dash: { x: 670, y: 440, w: 200, h: 130 },
};

// Phones: inputs across the top, flowing down, so type stays readable at ~340px wide.
const TALL_N: Nodes = {
  sales: { x: 95, y: 80, w: 166, h: 96 },
  crm: { x: 270, y: 80, w: 166, h: 96 },
  stack: { x: 445, y: 80, w: 166, h: 96 },
  auto: { x: 270, y: 300, w: 200, h: 104 },
  revenue: { x: 140, y: 520, w: 236, h: 130 },
  dash: { x: 400, y: 520, w: 236, h: 130 },
};

const LAYOUTS: Record<"wide" | "tall", Layout> = {
  wide: { viewBox: "0 0 800 600", N: WIDE_N, EDGES: edges(WIDE_N, "across") },
  tall: { viewBox: "0 0 540 620", N: TALL_N, EDGES: edges(TALL_N, "down") },
};

const BUILD_DONE = 3.2; // seconds after start when the live loop takes over
const PULSE_DUR = 1.4;
const PULSE_GAP = 1.0;
const REVENUE_START = 1.2;
const REVENUE_CAP = 1.6;

function Card({
  layout,
  b,
  label,
  at,
  start,
  instant,
  children,
}: {
  layout: string;
  b: Box;
  label: string;
  at: number;
  start: boolean;
  instant: boolean;
  children?: React.ReactNode;
}) {
  return (
    <motion.g
      initial={instant ? false : { opacity: 0, y: 12 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: instant ? 0 : at, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <rect
        x={b.x - b.w / 2}
        y={b.y - b.h / 2}
        width={b.w}
        height={b.h}
        rx={16}
        fill="#FFFFFF"
        stroke="#ECECEC"
        filter={`url(#ra-card-shadow-${layout})`}
      />
      <text
        x={b.x - b.w / 2 + 20}
        y={b.y - b.h / 2 + 32}
        fontSize={19}
        fontWeight={600}
        fill={GRAPHITE}
        style={{ letterSpacing: "-0.01em" }}
      >
        {label}
      </text>
      {children}
    </motion.g>
  );
}

export default function RAHeroSystem({
  start,
  layout = "wide",
  className = "",
}: {
  start: boolean;
  layout?: "wide" | "tall";
  className?: string;
}) {
  const { viewBox, N, EDGES } = LAYOUTS[layout];
  const revenuePulse = EDGES[3].pulse;
  const reduce = useReducedMotion() ?? false;
  const [live, setLive] = useState(false);
  const [counted, setRevenue] = useState(0);
  const revenue = reduce ? REVENUE_START : counted;

  // Build: count revenue up, then hand over to the live loop.
  useEffect(() => {
    if (!start || reduce) return;
    const count = animate(0, REVENUE_START, {
      duration: 1.3,
      delay: 2.0,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: setRevenue,
    });
    const t = setTimeout(() => setLive(true), BUILD_DONE * 1000);
    return () => {
      count.stop();
      clearTimeout(t);
    };
  }, [start, reduce]);

  // Live: revenue ticks up each time a pulse lands on it, capped so it stays plausible.
  useEffect(() => {
    if (!live) return;
    const cycle = (PULSE_DUR + PULSE_GAP) * 1000;
    let iv: ReturnType<typeof setInterval> | undefined;
    const first = setTimeout(() => {
      const tick = () => setRevenue((v) => Math.min(REVENUE_CAP, +(v + 0.01).toFixed(2)));
      tick();
      iv = setInterval(tick, cycle);
    }, (revenuePulse + PULSE_DUR) * 1000);
    return () => {
      clearTimeout(first);
      if (iv) clearInterval(iv);
    };
  }, [live, revenuePulse]);

  const instant = reduce;
  const s = start || reduce;

  return (
    <svg
      viewBox={viewBox}
      className={`absolute inset-0 h-full w-full ${className}`}
      role="img"
      aria-label="Sales process, CRM and tech stack feed automation, which drives revenue and dashboards"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <defs>
        <filter id={`ra-card-shadow-${layout}`} x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.06" />
        </filter>
        <filter id={`ra-red-glow-${layout}`} x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor={RED} floodOpacity="0.28" />
        </filter>
      </defs>

      {/* Lines */}
      {EDGES.map((e, i) => (
        <motion.line
          key={`edge-${i}`}
          x1={e.from.x}
          y1={e.from.y}
          x2={e.to.x}
          y2={e.to.y}
          stroke="#D4D4D8"
          strokeWidth={2}
          initial={instant ? false : { pathLength: 0, opacity: 0 }}
          animate={s ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: instant ? 0 : e.at, ease: "easeOut" }}
        />
      ))}

      {/* Live pulses travelling each line */}
      {live &&
        EDGES.map((e, i) => (
          <motion.circle
            key={`pulse-${i}`}
            r={5}
            fill={GRAPHITE}
            initial={{ cx: e.from.x, cy: e.from.y, opacity: 0 }}
            animate={{
              cx: [e.from.x, e.to.x],
              cy: [e.from.y, e.to.y],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: PULSE_DUR,
              delay: e.pulse,
              repeat: Infinity,
              repeatDelay: PULSE_GAP,
              ease: "easeInOut",
              opacity: { duration: PULSE_DUR, times: [0, 0.15, 0.85, 1], delay: e.pulse, repeat: Infinity, repeatDelay: PULSE_GAP },
            }}
          />
        ))}

      {/* Sales process: stage funnel */}
      <Card layout={layout} b={N.sales} label="Sales process" at={0.6} start={s} instant={instant}>
        {[118, 92, 66, 40].map((w, i) => (
          <motion.rect
            key={i}
            x={N.sales.x - N.sales.w / 2 + 20}
            y={N.sales.y + 2 + i * 10}
            width={w}
            height={6}
            rx={3}
            fill={i === 3 ? GRAPHITE : LIGHT}
            style={{ originX: 0 }}
            initial={instant ? false : { scaleX: 0 }}
            animate={s ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: instant ? 0 : 0.9 + i * 0.08 }}
          />
        ))}
      </Card>

      {/* CRM: records, one highlighted row cycling */}
      <Card layout={layout} b={N.crm} label="CRM" at={0.75} start={s} instant={instant}>
        {[0, 1, 2].map((i) => {
          const y = N.crm.y + 2 + i * 13;
          const x0 = N.crm.x - N.crm.w / 2 + 20;
          return (
            <g key={i}>
              <circle cx={x0 + 4} cy={y + 3} r={4} fill={LIGHT} />
              <motion.rect
                x={x0 + 14}
                y={y}
                width={i === 1 ? 96 : 120}
                height={6}
                rx={3}
                fill={LIGHT}
                style={{ originX: 0 }}
                initial={instant ? false : { scaleX: 0 }}
                animate={s ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: instant ? 0 : 1.05 + i * 0.08 }}
              />
            </g>
          );
        })}
        {live && (
          <motion.rect
            x={N.crm.x - N.crm.w / 2 + 34}
            width={120}
            height={6}
            rx={3}
            fill={GRAPHITE}
            style={{ originX: 0 }}
            initial={{ y: N.crm.y + 2, scaleX: 0 }}
            animate={{
              y: [N.crm.y + 2, N.crm.y + 2, N.crm.y + 15, N.crm.y + 15, N.crm.y + 28, N.crm.y + 28],
              scaleX: [0, 1, 0, 1, 0, 1],
            }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.34, 0.54, 0.68, 0.88] }}
          />
        )}
      </Card>

      {/* Tech stack: layered blocks */}
      <Card layout={layout} b={N.stack} label="Tech stack" at={0.9} start={s} instant={instant}>
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={i}
            x={N.stack.x - N.stack.w / 2 + 20 + i * 14}
            y={N.stack.y + 2 + i * 11}
            width={92}
            height={8}
            rx={3}
            fill={i === 2 ? GRAPHITE : LIGHT}
            initial={instant ? false : { opacity: 0, x: -10 }}
            animate={s ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: instant ? 0 : 1.2 + i * 0.1 }}
          />
        ))}
      </Card>

      {/* Automation: running ring */}
      <Card layout={layout} b={N.auto} label="Automation" at={1.3} start={s} instant={instant}>
        <circle cx={N.auto.x - N.auto.w / 2 + 38} cy={N.auto.y + 20} r={15} fill="none" stroke={LIGHT} strokeWidth={5} />
        <motion.circle
          cx={N.auto.x - N.auto.w / 2 + 38}
          cy={N.auto.y + 20}
          r={15}
          fill="none"
          stroke={GRAPHITE}
          strokeWidth={5}
          strokeLinecap="round"
          strokeDasharray="30 64"
          style={{ originX: "50%", originY: "50%" }}
          animate={live ? { rotate: 360 } : {}}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
        <text
          x={N.auto.x - N.auto.w / 2 + 66}
          y={N.auto.y + 26}
          fontSize={16}
          fill={GRAPHITE}
          opacity={0.7}
        >
          {live || reduce ? "Running" : "Starting"}
        </text>
      </Card>

      {/* Revenue: the one red element */}
      <motion.g
        initial={instant ? false : { opacity: 0, y: 12 }}
        animate={s ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: instant ? 0 : 1.9, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <rect
          x={N.revenue.x - N.revenue.w / 2}
          y={N.revenue.y - N.revenue.h / 2}
          width={N.revenue.w}
          height={N.revenue.h}
          rx={16}
          fill={RED}
          filter={`url(#ra-red-glow-${layout})`}
        />
        <text
          x={N.revenue.x - N.revenue.w / 2 + 22}
          y={N.revenue.y - N.revenue.h / 2 + 30}
          fontSize={15}
          fontWeight={600}
          fill="#FFFFFF"
          opacity={0.85}
          style={{ letterSpacing: "0.12em" }}
        >
          REVENUE
        </text>
        <motion.text
          key={live ? Math.round(revenue * 100) : "build"}
          x={N.revenue.x - N.revenue.w / 2 + 22}
          y={N.revenue.y + 18}
          fontSize={40}
          fontWeight={700}
          fill="#FFFFFF"
          style={{ letterSpacing: "-0.02em" }}
          initial={live ? { opacity: 0.6 } : false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          ${revenue.toFixed(2)}M
        </motion.text>
        <motion.polyline
          points={`${N.revenue.x - 78},${N.revenue.y + 48} ${N.revenue.x - 48},${N.revenue.y + 40} ${N.revenue.x - 20},${N.revenue.y + 44} ${N.revenue.x + 10},${N.revenue.y + 32} ${N.revenue.x + 40},${N.revenue.y + 34} ${N.revenue.x + 78},${N.revenue.y + 22}`}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={instant ? false : { pathLength: 0 }}
          animate={s ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, delay: instant ? 0 : 2.1, ease: "easeOut" }}
        />
      </motion.g>

      {/* Dashboards: bars that keep moving */}
      <Card layout={layout} b={N.dash} label="Dashboards" at={2.1} start={s} instant={instant}>
        {[0.45, 0.7, 0.55, 0.9, 0.65, 1].map((h, i) => {
          const base = N.dash.y + 46;
          const max = 54;
          const x = N.dash.x - N.dash.w / 2 + 22 + i * 27;
          const alt = [0.6, 0.5, 0.85, 0.7, 0.95, 0.8][i];
          return (
            <motion.rect
              key={i}
              x={x}
              width={16}
              rx={3}
              fill={i === 5 ? GRAPHITE : LIGHT}
              initial={instant ? { y: base - h * max, height: h * max } : { y: base, height: 0 }}
              animate={
                live
                  ? { y: [base - h * max, base - alt * max, base - h * max], height: [h * max, alt * max, h * max] }
                  : s
                    ? { y: base - h * max, height: h * max }
                    : {}
              }
              transition={
                live
                  ? { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }
                  : { duration: 0.6, delay: instant ? 0 : 2.4 + i * 0.06, ease: "easeOut" }
              }
            />
          );
        })}
      </Card>
    </svg>
  );
}
