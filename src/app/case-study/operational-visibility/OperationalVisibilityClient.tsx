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

const outcomes = [
  "Executive visibility across 20+ active initiatives, including status, risks, and capacity",
  "Replacement of manual reporting with centralized dashboards and structured updates",
  "More consistent execution across Salesforce, AI, and operational projects",
  "Stronger alignment across Business Operations, Customer Operations, and leadership",
  "Faster progress during a period of competing priorities",
  "Clear documentation to support both current work and future phases",
  "Improved readiness for AI-enabled service workflows, including Agentforce expansion",
  "Clear business case that supported meaningful growth of the Business Operations team",
];

const challenges = [
  "Manual reporting across multiple workstreams",
  "Repetitive administrative work that slowed progress",
  "Limited visibility into project status, risks, blockers, and team capacity",
  "Inconsistent documentation across initiatives",
  "Competing priorities across teams and leadership",
  "Pressure to support AI initiatives without disrupting current operations",
];

export default function OperationalVisibilityClient() {
  const hero = useSection();
  const challenge = useSection();
  const approach = useSection();
  const impact = useSection();
  const bottom = useSection();
  const cta = useSection();

  return (
    <main>
      {/* Hero */}
      <section className="bg-white pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div ref={hero.ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_340px] lg:gap-20">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
              >
                Case Study
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-6 text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--dark-graphite)]"
              >
                Strengthening Operational Visibility
                <br className="hidden lg:block" />
                {" "}and AI-Enabled Customer
                <br className="hidden lg:block" />
                {" "}Operations
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={hero.isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
              />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-8 space-y-5 text-base leading-relaxed text-[var(--graphite)]"
              >
                <p>
                  A vertical SaaS and fintech company engaged RevWisely to provide
                  embedded fractional Business Operations leadership during a period
                  of rapid growth and rising complexity.
                </p>
                <p>
                  The company operates a multi-product platform serving more than
                  250,000 professionals, supported by a team of 600+ employees, with
                  a growing footprint across SaaS and embedded payments. As the
                  business scaled, so did the number of initiatives needed to support
                  Customer Operations, Salesforce optimization, and AI-enabled
                  service workflows.
                </p>
                <p>
                  Several important projects were already in motion. This was not a
                  turnaround. The work was happening. But leadership needed more
                  structure&mdash;clear visibility into what was actually going on,
                  stronger operating discipline, and consistency in how work was
                  managed and communicated.
                </p>
              </motion.div>
            </div>

            {/* Sidebar — engagement snapshot */}
            <motion.aside
              initial={{ opacity: 0, y: 30 }}
              animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:sticky lg:top-28"
            >
              <div className="rounded-2xl border border-[var(--light-gray)] bg-[var(--off-white)] p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--graphite)]/60">
                  Engagement Snapshot
                </p>
                <div className="mt-6 space-y-5">
                  {[
                    { label: "Industry", value: "Vertical SaaS & Fintech" },
                    { label: "Platform Users", value: "250,000+" },
                    { label: "Employees", value: "600+" },
                    { label: "Active Initiatives", value: "20+" },
                    { label: "Engagement Type", value: "Fractional BizOps Leadership" },
                  ].map((item) => (
                    <div key={item.label} className="border-b border-[var(--light-gray)] pb-4 last:border-0 last:pb-0">
                      <div className="text-xs font-medium uppercase tracking-wider text-[var(--graphite)]/50">
                        {item.label}
                      </div>
                      <div className="mt-1 text-base font-semibold text-[var(--dark-graphite)]">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-[var(--off-white)] py-20 lg:py-28">
        <div ref={challenge.ref} className="mx-auto max-w-[860px] px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={challenge.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            The Challenge
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={challenge.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
          >
            The problem was
            <br />
            not effort. It was coordination.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={challenge.isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={challenge.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 text-base leading-relaxed text-[var(--graphite)]"
          >
            At the time of engagement, the Business Operations and Customer
            Operations teams were managing 20+ active initiatives across
            Salesforce, AI-enabled workflows, and core operations, while also
            handling day-to-day execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={challenge.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 grid gap-3 sm:grid-cols-2"
          >
            {challenges.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={challenge.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 + i * 0.07 }}
                className="flex items-start gap-3 rounded-xl border border-[var(--light-gray)] bg-white p-5"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-red)]/10 text-xs font-bold text-[var(--brand-red)]">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-[var(--graphite)]">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={challenge.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-8 text-base leading-relaxed text-[var(--graphite)]"
          >
            Although the progress was real, there was no shared system to see it,
            manage it, or scale it.
          </motion.p>
        </div>
      </section>

      {/* The Approach */}
      <section className="bg-white py-20 lg:py-28">
        <div ref={approach.ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="mx-auto max-w-[860px]">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={approach.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
            >
              The RevWisely Approach
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={approach.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
            >
              Bring structure to
              <br />
              what already existed.
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={approach.isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
            />

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={approach.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 text-base leading-relaxed text-[var(--graphite)]"
            >
              RevWisely embedded directly within the Business Operations function,
              providing fractional leadership and hands-on support across multiple
              active initiatives. The goal was not to rebuild everything. It was to
              bring structure to what already existed.
            </motion.p>
          </div>

          {/* Two-column approach cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={approach.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-14 grid max-w-[1000px] gap-8 lg:grid-cols-2"
          >
            {/* Salesforce & Ops */}
            <div className="rounded-2xl border border-[var(--light-gray)] bg-[var(--off-white)] p-8 lg:p-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-red)]/10">
                <svg className="h-5 w-5 text-[var(--brand-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-[var(--dark-graphite)]">
                Salesforce &amp; Operations
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  "Standardized project documentation, scopes, and charters",
                  "Built executive-ready status reporting",
                  "Replaced fragmented updates with centralized dashboards",
                  "Improved communication across stakeholders and teams",
                  "Created clear visibility into risks, blockers, and dependencies",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--graphite)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Initiatives */}
            <div className="rounded-2xl border border-[var(--light-gray)] bg-[var(--off-white)] p-8 lg:p-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-red)]/10">
                <svg className="h-5 w-5 text-[var(--brand-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-[var(--dark-graphite)]">
                AI Initiatives &amp; Agentforce
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  "Project status and roadmap visibility",
                  "Defect tracking and resolution",
                  "Impact and progress reporting",
                  "Requirements for future phases",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--graphite)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={approach.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mt-14 max-w-[860px] border-l-2 border-[var(--brand-red)] pl-6"
          >
            <p className="text-xl font-semibold leading-snug tracking-tight text-[var(--dark-graphite)]">
              The focus was simple: create a system that could handle multiple
              initiatives at once&mdash;and keep working as the business grew.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="relative overflow-hidden bg-[var(--dark-graphite)] py-20 lg:py-28">
        <div ref={impact.ref} className="mx-auto max-w-[860px] px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={impact.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            Business Impact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={impact.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-white"
          >
            From scattered updates to
            <br />
            a single operating picture.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={impact.isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-50"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={impact.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 space-y-5 text-base leading-relaxed text-white/70"
          >
            <p>
              The engagement moved the organization away from manual, fragmented
              reporting and toward a system that leadership could actually see
              and use.
            </p>
            <p>
              Instead of pulling updates from different teams, leaders had
              centralized dashboards and structured reporting that showed
              project status, risks, and team capacity in one place. That shift
              changed how the business operated.
            </p>
            <p className="text-lg font-semibold text-white">
              For the first time, leadership could clearly see the volume,
              complexity, and connections between the work required to support
              Customer Operations.
            </p>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={impact.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Key Outcomes
            </p>
            <div className="mt-6 space-y-0 divide-y divide-white/10">
              {outcomes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={impact.isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.06 }}
                  className="flex items-start gap-4 py-4"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-red)]/20 text-xs font-bold text-[var(--brand-red)]">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-white/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="bg-white py-20 lg:py-28">
        <div ref={bottom.ref} className="mx-auto max-w-[860px] px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={bottom.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            The Bottom Line
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={bottom.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
          >
            Visible. Structured.
            <br />
            Scalable.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={bottom.isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={bottom.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 space-y-5 text-base leading-relaxed text-[var(--graphite)]"
          >
            <p>
              This engagement was about making the existing work visible,
              structured, and scalable.
            </p>
            <p>
              By bringing consistency to how initiatives were tracked,
              communicated, and managed, RevWisely helped turn a growing set of
              disconnected efforts into a coordinated operating system.
              Leadership gained the clarity needed to make decisions, allocate
              resources, and support the next phase of growth.
            </p>
            <p className="text-lg font-semibold text-[var(--dark-graphite)]">
              With that foundation in place, the organization is now better
              positioned to scale Customer Operations and move forward with
              AI-enabled workflows&mdash;on top of a system that can actually
              support them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark relative overflow-hidden py-20 lg:py-28">
        <ParticleCanvas
          particleCount={150}
          enableShapeFormation={true}
          followCursor={false}
          className="z-0"
        />

        <div ref={cta.ref} className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={cta.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
              Need Operational Clarity?
            </p>
            <h2 className="mt-6 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.15] tracking-tight text-white">
              Let&apos;s bring structure
              <br />
              to your operations.
            </h2>
            <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-white/60">
              Whether it&apos;s operational visibility, AI readiness, or scaling
              what already works&mdash;we can help.
            </p>

            <div className="mt-12">
              <button
                onClick={openCalendly}
                className="inline-flex rounded-full bg-white px-10 py-4 text-base font-semibold text-[var(--dark-graphite)] transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
              >
                Book a Conversation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
