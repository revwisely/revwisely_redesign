"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ParticleCanvas from "@/components/ParticleCanvas";
import { openCalendly } from "@/lib/calendly";

function useSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, isInView };
}

const impactStats = [
  { value: "30–50%", label: "Reduction in operational costs" },
  { value: "2–5x", label: "Faster workflow execution" },
  { value: "20–40%", label: "Improvement in conversion rates" },
  { value: "15–30%", label: "Increase in pipeline velocity" },
  { value: "20–40%", label: "Reduction in SaaS and vendor spend" },
  { value: "70–90%", label: "Faster detection and response" },
];

const buildSteps = [
  {
    n: "01",
    title: "Map the work",
    body: "We traced how work actually moved through the business — surfacing fragmentation, delays, and unclear ownership across marketing, sales, and RevOps.",
  },
  {
    n: "02",
    title: "Define the outcome",
    body: "Every meaningful signal captured, analyzed and governed, and acted on in near real time — across the full revenue lifecycle.",
  },
  {
    n: "03",
    title: "Decompose into agents",
    body: "Workflows broken into core functions — collection, analysis, detection, routing, tracking, reporting — each assigned to a specialized agent.",
  },
  {
    n: "04",
    title: "Orchestrate and ship",
    body: "Agents wired into a unified system, tested against real historical data, and held to defined accuracy thresholds before going live.",
  },
];

export default function CaseStudyClient() {
  const hero = useSection();
  const legacy = useSection();
  const shift = useSection();
  const system = useSection();
  const example = useSection();
  const built = useSection();
  const impact = useSection();
  const meaning = useSection();
  const cta = useSection();

  return (
    <main>
      {/* SECTION 1: Hero */}
      <section className="bg-white pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div ref={hero.ref} className="mx-auto max-w-[860px] px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={hero.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            RevWisely Case Study
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2.25rem,4.8vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--dark-graphite)]"
          >
            Moving to AI-Native
            <br />
            Workflows Is Transformative
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={hero.isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 text-xl leading-relaxed text-[var(--graphite)]"
          >
            Cut operational costs by 30–50% and accelerate workflows 2–5x with
            AI-native systems.
          </motion.p>

          {/* Headline stat row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {[
              { v: "35+", l: "Specialized agents" },
              { v: "3", l: "Functions, one system" },
              { v: "0", l: "Handoffs required" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-[var(--light-gray)] bg-[var(--off-white)] p-6"
              >
                <div className="text-3xl font-bold tracking-tight text-[var(--dark-graphite)]">
                  {s.v}
                </div>
                <div className="mt-1 text-sm text-[var(--graphite)]">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Legacy Operating Model */}
      <section className="bg-[var(--off-white)] py-20 lg:py-28">
        <div ref={legacy.ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={legacy.isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
              >
                The Legacy Operating Model
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={legacy.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
              >
                Work moved through people,
                <br />
                not systems.
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={legacy.isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
              />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={legacy.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-8 space-y-5 text-base leading-relaxed text-[var(--graphite)]"
              >
                <p>
                  Not long ago, we ran our business the way most companies still
                  do. A lead came in, someone reviewed it, another person
                  researched the account, and a third decided whether it was
                  worth pursuing. From there, it was routed, followed up on,
                  logged in the CRM, and discussed in pipeline meetings.
                </p>
                <p>
                  Across marketing, sales, and RevOps, the pattern repeated —
                  and more importantly, it fragmented. Marketing generated
                  signals. Sales interpreted them. RevOps tried to reconcile
                  everything after the fact.
                </p>
                <p>
                  Nothing was fundamentally broken — which is exactly why it
                  never improved. Every step required coordination. Every
                  decision required a human. Every handoff introduced delay or
                  inconsistency.
                </p>
                <p className="text-lg font-semibold text-[var(--dark-graphite)]">
                  The constraint wasn&apos;t effort or tooling. It was the
                  design of the workflow itself.
                </p>
              </motion.div>
            </div>

            {/* Right — fragmentation visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={legacy.isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="lg:sticky lg:top-28"
            >
              <div className="rounded-2xl border border-[var(--light-gray)] bg-white p-8 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--graphite)]/60">
                  The Glue
                </p>
                <h3 className="mt-3 text-xl font-bold text-[var(--dark-graphite)]">
                  What was holding it together
                </h3>
                <ul className="mt-6 space-y-3">
                  {[
                    "Spreadsheets",
                    "Slack threads",
                    "CRM updates",
                    "Recurring meetings",
                    "Manual research",
                    "Lead-scoring debates",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-[var(--light-gray)] pb-3 text-sm text-[var(--graphite)] last:border-0 last:pb-0"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-red)]/60" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm italic leading-relaxed text-[var(--graphite)]/80">
                  &ldquo;A slightly faster version of the same system, layered
                  with more software but unchanged at its core.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Shift */}
      <section className="bg-white py-20 lg:py-28">
        <div ref={shift.ref} className="mx-auto max-w-[860px] px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={shift.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            The Shift to AI-Native
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={shift.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
          >
            If this workflow didn&apos;t exist,
            <br />
            how would we design it today?
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={shift.isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={shift.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 space-y-5 text-base leading-relaxed text-[var(--graphite)]"
          >
            <p>
              That question forced a different mindset. Instead of asking where
              AI could assist, we asked where humans shouldn&apos;t be doing the
              work at all. The answer was uncomfortable — but clarifying.
            </p>
            <p>
              Entire steps disappeared. Manual research was eliminated. Lead
              scoring debates went away. Internal coordination around ownership
              and next steps became unnecessary. We didn&apos;t automate the
              workflow — we removed the need for much of it to exist in its
              original form.
            </p>
            <p>
              Rather than inserting AI into existing steps, we redesigned
              workflows so execution happened automatically. Humans stepped in
              only where judgment, context, or relationships truly mattered.
            </p>
          </motion.div>

          {/* Pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={shift.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 border-l-2 border-[var(--brand-red)] pl-6"
          >
            <p className="text-2xl font-semibold leading-snug tracking-tight text-[var(--dark-graphite)]">
              The workflow wasn&apos;t broken inside marketing, sales, or
              RevOps. It was broken between them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: The System */}
      <section className="relative overflow-hidden bg-[var(--dark-graphite)] pb-0 pt-20 lg:pt-28">
        <div ref={system.ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="mx-auto max-w-[800px]">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={system.isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
            >
              The System
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={system.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-white"
            >
              One coordinated layer
              <br />
              of execution.
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={system.isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-50"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={system.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 space-y-5 text-base leading-relaxed text-white/70"
            >
              <p>
                Most organizations approach AI as a collection of tools or
                plugins. That falls short because real workflows are not
                single-threaded — they span multiple steps, decisions, and data
                sources.
              </p>
              <p>
                Instead of disconnected automations, we build a system using a
                framework we call{" "}
                <span className="font-semibold text-white">Maestro AI</span>: a
                coordinated set of more than 35 specialized agents operating
                across marketing, sales, and RevOps as a single layer of
                execution — not three separate functions.
              </p>
            </motion.div>
          </div>

          {/* Pipeline diagram */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={system.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-3"
          >
            {[
              {
                k: "Signals",
                t: "Capture & Enrich",
                d: "Form submissions, product usage, campaigns, customer interactions.",
              },
              {
                k: "Decision",
                t: "Evaluate & Route",
                d: "Fit, intent, risk, opportunity — what should happen next.",
              },
              {
                k: "Execution",
                t: "Act Automatically",
                d: "Routing, outreach, pipeline updates, follow-up workflows.",
              },
              {
                k: "Monitoring",
                t: "Track & Refine",
                d: "Outcomes captured, the system continuously improves.",
              },
            ].map((s, i) => (
              <div key={s.k} className="relative">
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
                    Stage {i + 1}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-white">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {s.d}
                  </p>
                </div>
                {i < 3 && (
                  <div className="absolute right-[-10px] top-1/2 hidden -translate-y-1/2 text-white/30 md:block">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M13 6l6 6-6 6"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={system.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mx-auto mt-12 max-w-[700px] text-center text-lg italic leading-relaxed text-white/70"
          >
            In this model, humans don&apos;t execute workflows — they supervise
            them. If a team is still coordinating work, it&apos;s not operating
            a system. It&apos;s managing dependencies.
          </motion.p>
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

      {/* SECTION 5: Example — Sentiment */}
      <section className="bg-[var(--off-white)] py-20 lg:py-28">
        <div ref={example.ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="mx-auto max-w-[800px]">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={example.isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
            >
              Example In Practice
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={example.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
            >
              From manual sentiment tracking
              <br />
              to real-time action.
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={example.isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={example.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 text-base leading-relaxed text-[var(--graphite)]"
            >
              Customer sentiment is a useful example because it spans the entire
              business — and is rarely operationalized effectively. It
              originates in marketing and product signals, surfaces in sales
              conversations, and is governed through RevOps.
            </motion.p>
          </div>

          {/* Before / After */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={example.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8"
          >
            {/* Before */}
            <div className="rounded-2xl border border-[var(--light-gray)] bg-white p-8 shadow-sm lg:p-10">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[var(--graphite)]/20 bg-[var(--off-white)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--graphite)]">
                  Before
                </span>
                <span className="text-xs text-[var(--graphite)]/60">
                  Traditional approach
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[var(--dark-graphite)]">
                Fragmented across systems and teams.
              </h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--graphite)]">
                {[
                  "Feedback scattered across calls, tickets, surveys, product data, Slack.",
                  "Analysis happens in batches — weekly or monthly reports.",
                  "Action is inconsistent. Churn risks go unnoticed.",
                  "Expansion signals get buried; product feedback rarely reaches the roadmap.",
                  "Ownership unclear, follow-up depends on someone remembering.",
                ].map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--graphite)]/40" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic text-[var(--graphite)]/70">
                The organization listens — but slowly and unevenly.
              </p>
            </div>

            {/* After */}
            <div className="rounded-2xl border border-[var(--brand-red)]/30 bg-[var(--brand-red-light)] p-8 shadow-sm lg:p-10">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[var(--brand-red)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                  After
                </span>
                <span className="text-xs text-[var(--brand-red)]">
                  AI-native model
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[var(--dark-graphite)]">
                Continuously captured, instantly acted on.
              </h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--graphite)]">
                {[
                  "All signals captured continuously across every channel.",
                  "Agents ingest, normalize, evaluate sentiment and urgency.",
                  "Patterns identified, risks and opportunities flagged in real time.",
                  "Routed across the revenue system with full context and next steps.",
                  "Outcomes tracked automatically — the system keeps improving.",
                ].map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-red)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic text-[var(--graphite)]">
                No reports to wait for. The system acts as signals emerge.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: How We Made It Happen */}
      <section className="bg-white py-20 lg:py-28">
        <div ref={built.ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="mx-auto max-w-[800px]">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={built.isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
            >
              How We Made It Happen
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={built.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
            >
              Redesign first.
              <br />
              Automate second.
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={built.isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={built.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 text-base leading-relaxed text-[var(--graphite)]"
            >
              This transformation required redesigning the work itself — not
              automating the old version of it. Each workflow had to meet
              defined accuracy thresholds before going live. If it didn&apos;t
              meet the bar, it didn&apos;t ship.
            </motion.p>
          </div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={built.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {buildSteps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                animate={built.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.12 }}
                className="rounded-2xl border border-[var(--light-gray)] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="text-sm font-bold tracking-tight text-[var(--brand-red)]">
                  {step.n}
                </div>
                <h3 className="mt-4 text-lg font-bold text-[var(--dark-graphite)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--graphite)]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* SECTION 7: Impact */}
      <section className="bg-[var(--off-white)] py-20 lg:py-28">
        <div ref={impact.ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="mx-auto max-w-[800px] text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={impact.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
            >
              The Impact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={impact.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
            >
              Measurable
              <br />
              and structural.
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={impact.isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
            />
          </div>

          {/* Stat grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={impact.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {impactStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={impact.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
                className="rounded-2xl border border-[var(--light-gray)] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
              >
                <div className="text-4xl font-bold tracking-tight text-[var(--brand-red)] lg:text-5xl">
                  {s.value}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-[var(--graphite)]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Secondary insights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={impact.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mx-auto mt-16 max-w-[800px] space-y-5 text-base leading-relaxed text-[var(--graphite)]"
          >
            <p className="text-lg font-semibold text-[var(--dark-graphite)]">
              The most important change isn&apos;t captured in a single metric.
              It&apos;s the shift from a system dependent on human coordination
              to one that runs continuously and predictably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: What This Means */}
      <section className="bg-white py-20 lg:py-28">
        <div ref={meaning.ref} className="mx-auto max-w-[860px] px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={meaning.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            What This Means
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={meaning.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
          >
            Not adopting AI tools.
            <br />
            Redesigning how work happens.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={meaning.isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={meaning.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 space-y-5 text-base leading-relaxed text-[var(--graphite)]"
          >
            <p>
              Most companies still operate in a model where marketing, sales,
              and RevOps execute separately — and software attempts to connect
              them after the fact. Adding AI to that model produces incremental
              gains, but leaves the underlying system unchanged. That&apos;s why
              so many organizations remain pilot-rich and transformation-poor.
            </p>
            <p>
              The alternative is to redesign workflows so execution happens
              within a unified system that spans marketing, sales, and RevOps
              from the start. In that model, AI executes and humans guide.
            </p>
            <p>
              Once this shift happens, the advantages compound. Systems improve
              over time. Work scales without proportional increases in
              headcount. Decisions happen faster and with better information.
            </p>
            <p className="text-lg font-semibold text-[var(--dark-graphite)]">
              The opportunity isn&apos;t to add more AI. It&apos;s to build a
              system where AI-native workflows run the business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 10: CTA */}
      <section className="section-dark relative overflow-hidden py-20 lg:py-28">
        <ParticleCanvas
          particleCount={150}
          enableShapeFormation={true}
          followCursor={false}
          className="z-0"
        />

        <div
          ref={cta.ref}
          className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={cta.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
              Ready to redesign?
            </p>
            <h2 className="mt-6 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.15] tracking-tight text-white">
              Let&apos;s build your
              <br />
              AI-native operating model.
            </h2>

            <div className="mt-12">
              <button
                onClick={openCalendly}
                className="inline-flex rounded-full bg-white px-10 py-4 text-base font-semibold text-[var(--dark-graphite)] transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:scale-105"
              >
                Book a Conversation
              </button>
            </div>

            <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-white/50">
              30 minutes. No pitch deck. Just clarity.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
