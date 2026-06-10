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

const coreChanges = [
  { n: "01", title: "Segment customers more clearly", body: "Define distinct tiers — key, midmarket, emerging, and academic — so each gets the right level of coverage." },
  { n: "02", title: "Rebalance territories", body: "Redistribute accounts so territory size and opportunity are aligned across the team." },
  { n: "03", title: "Clarify roles and ownership", body: "Remove ambiguity around who owns what, so every account and activity has a clear owner." },
  { n: "04", title: "Lower-cost coverage model", body: "Move smaller accounts to a coverage model that doesn't require the same resources as enterprise deals." },
  { n: "05", title: "Add dedicated sales management", body: "Bring in focused management to coach, inspect, and support the team day to day." },
  { n: "06", title: "Redesign compensation", body: "Align incentives to reward accountability, not just activity, so the right behaviors drive results." },
];

const productivityInitiatives = [
  "Simplifying order forms",
  "Cleaning up Salesforce data",
  "Automating renewals",
  "Standardizing SOWs",
  "Establishing clear CRM usage rules",
  "Using AI to assist with follow-ups",
  "Improving visibility into customer activity",
  "Adding next-best-action guidance",
  "Automatically capturing call data",
];

const outcomes = [
  "Sales expense reduced from 43% to 28%",
  "Revenue growth increased to 15%",
  "Clear sales roles and ownership",
  "Better territory and account alignment",
  "Defined customer segmentation across key, midmarket, emerging, and academic accounts",
  "Reduced manual work for sales reps",
  "Improved data quality and visibility",
  "Created a foundation for automation and AI-native workflows",
];

export default function LoweringCostClient() {
  const hero = useSection();
  const challenge = useSection();
  const approach = useSection();
  const productivity = useSection();
  const impact = useSection();
  const bottom = useSection();
  const cta = useSection();

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[var(--dark-graphite)] pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div ref={hero.ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_320px] lg:gap-20">
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
                className="mt-6 text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white"
              >
                Lowering Cost of Sales and
                <br className="hidden lg:block" />
                {" "}Building a Scalable
                <br className="hidden lg:block" />
                {" "}Revenue System
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={hero.isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-50"
              />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-8 space-y-5 text-base leading-relaxed text-white/70"
              >
                <p>
                  A life sciences software company brought in RevWisely to improve
                  how its revenue engine worked. The company sells a platform used
                  by drug discovery teams to manage and analyze scientific data. The
                  product is strong, customers are happy, and the market opportunity
                  is significant.
                </p>
                <p>
                  Revenue was growing, but the underlying system was starting to
                  show strain. The cost to sell was too high, and scaling the
                  business was getting harder instead of easier. This wasn&apos;t a
                  turnaround situation. The business was working&mdash;but not
                  efficiently enough to support the next phase of growth.
                </p>
              </motion.div>
            </div>

            {/* Hero stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 lg:grid-cols-1"
            >
              {[
                { value: "43% → 28%", label: "Sales expense\nas % of revenue" },
                { value: "5x", label: "Profitability\nimprovement" },
                { value: "15%", label: "Revenue\ngrowth" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold tracking-tight text-white lg:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 whitespace-pre-line text-xs text-white/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-white py-20 lg:py-28">
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
            A model that worked
            <br />
            but didn&apos;t scale.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={challenge.isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={challenge.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 space-y-5 text-base leading-relaxed text-[var(--graphite)]"
          >
            <p>
              Over time, the sales organization had evolved into a model that
              worked in practice but didn&apos;t scale well. The total cost of
              sales and marketing had climbed to 42% globally&mdash;well above
              typical SaaS benchmarks.
            </p>
            <p>
              At the same time, several structural issues were holding the team
              back: roles were unclear, territories were uneven, and small and
              large accounts were treated the same. Reps were working hard, but a
              large portion of their time wasn&apos;t spent actually selling.
            </p>
            <p>
              Instead, it went to administrative tasks, internal coordination, CRM
              updates, and manual follow-ups. Data was often incomplete or hard to
              access, which slowed down decision-making and made forecasting less
              reliable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={challenge.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 border-l-2 border-[var(--brand-red)] pl-6"
          >
            <p className="text-xl font-semibold leading-snug tracking-tight text-[var(--dark-graphite)]">
              The issue wasn&apos;t effort. It was how the system was designed
              and where time was being spent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Approach — 6 Core Changes */}
      <section className="bg-[var(--off-white)] py-20 lg:py-28">
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
              Redesign the system,
              <br />
              not just the pieces.
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
              RevWisely embedded directly with leadership to redesign the system.
              The focus was on aligning the right resources to the right work so
              that effort translated directly into revenue. The work centered
              around six core changes.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={approach.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {coreChanges.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                animate={approach.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
                className="rounded-2xl border border-[var(--light-gray)] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="text-sm font-bold tracking-tight text-[var(--brand-red)]">
                  {step.n}
                </div>
                <h3 className="mt-3 text-base font-bold text-[var(--dark-graphite)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--graphite)]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={approach.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mx-auto mt-12 max-w-[860px] text-base leading-relaxed text-[var(--graphite)]"
          >
            This wasn&apos;t theoretical work. RevWisely helped build the full
            operating model, including account lists, territory plans, role
            definitions, compensation structures, financial models, and a clear
            change plan. The goal was to create something the business could
            actually run on&mdash;not just a set of recommendations.
          </motion.p>
        </div>
      </section>

      {/* Creating More Selling Time */}
      <section className="bg-white py-20 lg:py-28">
        <div ref={productivity.ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={productivity.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
              >
                Creating More Selling Time
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={productivity.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
              >
                Give reps more
                <br />
                time to sell.
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={productivity.isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
              />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={productivity.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-8 space-y-5 text-base leading-relaxed text-[var(--graphite)]"
              >
                <p>
                  As the engagement progressed, the focus expanded beyond
                  structure to productivity. At the time, reps were spending
                  significant time on non-selling activities&mdash;CRM updates,
                  onboarding support, internal communication, and manual data
                  work.
                </p>
                <p>
                  Reducing this burden became a major lever for improving
                  performance without adding headcount.
                </p>
              </motion.div>
            </div>

            {/* Initiatives list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={productivity.isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="lg:sticky lg:top-28"
            >
              <div className="rounded-2xl border border-[var(--light-gray)] bg-[var(--off-white)] p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--graphite)]/60">
                  Key Initiatives
                </p>
                <ul className="mt-6 space-y-3">
                  {productivityInitiatives.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-[var(--light-gray)] pb-3 text-sm text-[var(--graphite)] last:border-0 last:pb-0"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={productivity.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mx-auto mt-12 max-w-[860px] text-base leading-relaxed text-[var(--graphite)]"
          >
            Together, these changes reduced friction in day-to-day work,
            automated repetitive tasks, and made it easier for reps to focus on
            high-value activities. The system began to guide behavior instead of
            relying on individuals to manage everything manually.
          </motion.p>
        </div>
      </section>

      {/* Business Impact */}
      <section className="bg-[var(--off-white)] py-20 lg:py-28">
        <div ref={impact.ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="mx-auto max-w-[800px] text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={impact.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
            >
              Business Impact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={impact.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
            >
              Lower cost. Continued growth.
              <br />
              Stronger foundation.
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={impact.isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto mt-6 h-[2px] w-16 bg-[var(--brand-red)] opacity-40"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={impact.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 text-base leading-relaxed text-[var(--graphite)]"
            >
              As changes were implemented, the results followed. The company
              didn&apos;t reduce costs by slowing down growth. It improved
              efficiency while continuing to grow.
            </motion.p>
          </div>

          {/* Headline metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={impact.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-14 grid gap-6 sm:grid-cols-3"
          >
            {[
              { value: "15pt", label: "Reduction in sales expense as % of revenue", sub: "43% → 28%" },
              { value: "5x", label: "Increase in profitability as sales accelerated", sub: "" },
              { value: "15%", label: "Revenue growth rate achieved", sub: "" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={impact.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="rounded-2xl border border-[var(--light-gray)] bg-white p-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
              >
                <div className="text-4xl font-bold tracking-tight text-[var(--brand-red)] lg:text-5xl">
                  {s.value}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-[var(--graphite)]">
                  {s.label}
                </div>
                {s.sub && (
                  <div className="mt-2 text-xs font-semibold text-[var(--dark-graphite)]">
                    {s.sub}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Outcomes list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={impact.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mx-auto mt-14 max-w-[800px]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--graphite)]/50">
              Key Outcomes
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {outcomes.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-[var(--light-gray)] bg-white p-4"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-red)]/10 text-xs font-bold text-[var(--brand-red)]">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-[var(--graphite)]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={impact.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mx-auto mt-10 max-w-[800px] text-center text-lg font-semibold text-[var(--dark-graphite)]"
          >
            Most importantly, sales reps now spend more of their time on
            activities that directly drive revenue.
          </motion.p>
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
            Not more leads. Not more tools.
            <br />
            A better system.
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
              The company didn&apos;t need more leads, more tools, or more
              people. It needed a better system for how work gets done across
              the revenue organization.
            </p>
            <p>
              By redesigning roles, territories, workflows, and incentives,
              RevWisely helped turn a high-cost sales model into a more
              efficient and scalable revenue engine. The result was lower cost,
              continued growth, and a stronger foundation for the future.
            </p>
            <p className="text-lg font-semibold text-[var(--dark-graphite)]">
              This is what scale looks like when the system delivers the real
              operating leverage.
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
              Ready to lower your cost of sales?
            </p>
            <h2 className="mt-6 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.15] tracking-tight text-white">
              Let&apos;s build your
              <br />
              scalable revenue system.
            </h2>
            <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-white/60">
              30 minutes. No pitch deck. Just clarity on where your revenue
              system can improve.
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
