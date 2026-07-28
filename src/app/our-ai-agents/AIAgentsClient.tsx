"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { openCalendly } from "@/lib/calendly";
import ParticleCanvas from "@/components/ParticleCanvas";

/* ─── Data ─── */

const teams = [
  {
    label: "Strategy Team",
    agents: [
      {
        num: 1,
        name: "Brand Voice",
        desc: "Defines and enforces a consistent tone, style, and language across all content and channels.",
      },
      {
        num: 2,
        name: "Positioning Angles",
        desc: "Generates differentiated messaging angles that make your product stand out to specific audiences.",
      },
      {
        num: 3,
        name: "Keyword Research",
        desc: "Identifies high-intent search terms that align with your ICP and drive qualified traffic.",
      },
      {
        num: 4,
        name: "Direct Response",
        desc: "Crafts conversion-focused messaging designed to drive immediate action from prospects.",
      },
      {
        num: 5,
        name: "Lead Magnet",
        desc: "Creates high-value assets that capture attention and convert visitors into leads.",
      },
      {
        num: 6,
        name: "Discovery Agent",
        desc: "Extracts customer insights, pains, and use cases from calls, notes, and data to inform strategy.",
      },
      {
        num: 7,
        name: "Community Seeding Agent",
        desc: "Identifies and places content into relevant communities to spark awareness and early engagement.",
      },
    ],
  },
  {
    label: "Content Team",
    agents: [
      {
        num: 8,
        name: "SEO Content",
        desc: "Produces search-optimized articles designed to rank, attract, and convert inbound traffic.",
      },
      {
        num: 9,
        name: "Email Sequences",
        desc: "Builds automated email flows that nurture leads and move them toward conversion.",
      },
      {
        num: 10,
        name: "Newsletter",
        desc: "Creates consistent, high-value content that builds audience trust and ongoing engagement.",
      },
      {
        num: 11,
        name: "Content Atomizer",
        desc: "Breaks long-form content into multiple short-form assets for distribution across channels.",
      },
      {
        num: 12,
        name: "Technical SEO Agent",
        desc: "Optimizes site structure, indexing, and performance to improve search visibility.",
      },
      {
        num: 13,
        name: "Blog Publishing Agent",
        desc: "Formats, uploads, and publishes content with proper structure, metadata, and SEO standards.",
      },
      {
        num: 14,
        name: "AEO Agent",
        desc: "Optimizes content for AI-driven answer engines to increase visibility in generated responses.",
      },
      {
        num: 15,
        name: "Landing Page Builder Agent",
        desc: "Designs and deploys conversion-optimized landing pages aligned to specific campaigns.",
      },
      {
        num: 16,
        name: "Comparison Page Agent",
        desc: "Creates competitive comparison pages that position your offering clearly against alternatives.",
      },
      {
        num: 17,
        name: "Inbound Attribution Agent",
        desc: "Tracks and attributes inbound conversions to the channels and content that drove them.",
      },
      {
        num: 18,
        name: "Social Scheduling Agent",
        desc: "Distributes content across platforms at the right time and cadence for maximum reach.",
      },
      {
        num: 19,
        name: "Content Refresh Agent",
        desc: "Updates existing content to improve rankings, accuracy, and ongoing performance.",
      },
    ],
  },
  {
    label: "Creative Team",
    agents: [
      {
        num: 20,
        name: "Creative Strategist",
        desc: "Defines the creative direction and concepts that guide content and campaign execution.",
      },
      {
        num: 21,
        name: "Image Gen",
        desc: "Generates on-brand visual assets to support content, campaigns, and product storytelling.",
      },
      {
        num: 22,
        name: "Social Graphics",
        desc: "Creates platform-specific visuals designed to increase engagement and shareability.",
      },
      {
        num: 23,
        name: "Product Photo",
        desc: "Produces clean, compelling product imagery for use across marketing and sales assets.",
      },
      {
        num: 24,
        name: "Product Video",
        desc: "Creates video content that demonstrates product value and drives understanding.",
      },
      {
        num: 25,
        name: "Talking Head",
        desc: "Generates or enhances human-led video content for authority, trust, and storytelling.",
      },
      {
        num: 26,
        name: "Ad Creative Agent",
        desc: "Develops and iterates ad creatives designed to capture attention and drive clicks.",
      },
      {
        num: 27,
        name: "Ad Performance Agent",
        desc: "Analyzes ad performance and continuously optimizes creative and targeting for ROI.",
      },
    ],
  },
  {
    label: "Quality Gate",
    agents: [
      {
        num: 28,
        name: "Visual QA",
        desc: "Ensures all visual assets meet brand, quality, and formatting standards before publishing.",
      },
      {
        num: 29,
        name: "Brand Voice QA",
        desc: "Validates that all content aligns with defined brand voice and messaging guidelines.",
      },
      {
        num: 30,
        name: "Fact-Check / Claims QA",
        desc: "Verifies accuracy of statements, data, and claims to reduce risk and maintain credibility.",
      },
      {
        num: 31,
        name: "Platform Compliance QA",
        desc: "Ensures content meets platform-specific rules, policies, and advertising requirements.",
      },
    ],
  },
  {
    label: "Analytics Team",
    agents: [
      {
        num: 32,
        name: "CRO Analytics",
        desc: "Analyzes user behavior and conversion data to identify and improve performance bottlenecks.",
      },
      {
        num: 33,
        name: "Competitor Intel",
        desc: "Monitors competitor activity, messaging, and positioning to inform strategy and differentiation.",
      },
      {
        num: 34,
        name: "Customer Sentiment Intelligence Agent",
        desc: "Continuously listens across Reddit, G2, X, and forums, then classifies and routes structured market intelligence to downstream agents.",
      },
    ],
  },
  {
    label: "GTM Outbound System",
    agents: [
      {
        num: 35,
        name: "GTM Orchestrator",
        desc: "Central coordinator that routes inbound signals through the pipeline for outreach execution.",
      },
      {
        num: 36,
        name: "Signal + Enrichment Agent",
        desc: "Ingests website-visitor signals, deduplicates against existing leads, stores them, and fills data gaps.",
      },
      {
        num: 37,
        name: "ICP Scorer",
        desc: "Runs the 100-point ICP scoring model against enriched leads and assigns a three-tier routing decision.",
      },
    ],
  },
  {
    label: "Maestro Video Studio",
    agents: [
      {
        num: 38,
        name: "Director",
        desc: "Reads the source content and writes the treatment—core idea, arc, runtime—then picks the style that fits the message.",
      },
      {
        num: 39,
        name: "Editor",
        desc: "Builds the boardomatic with real timing for every beat, enforcing a story-spine so nothing floats.",
      },
      {
        num: 40,
        name: "Designer",
        desc: "Produces fully designed styleframes of the hero moment, rendering two directions for a quick human A-or-B pick.",
      },
      {
        num: 41,
        name: "Animator",
        desc: "Builds the composition under a strict contract—one motion system, real numbers from the content, no invented figures.",
      },
      {
        num: 42,
        name: "Look Critic",
        desc: "Reviews brand compliance and flags the AI-slop tells—static frames, style drift, and empty decoration.",
      },
      {
        num: 43,
        name: "Timing Critic",
        desc: "Checks that every beat earns its seconds and that the hook lands within the first two seconds.",
      },
      {
        num: 44,
        name: "Finisher",
        desc: "Handles audio, renders the final file, verifies it against delivery specs, and cuts platform variants for each channel.",
      },
    ],
  },
  {
    label: "Maestro PM",
    agents: [
      {
        num: 45,
        name: "Transcript Extractor",
        desc: "Reads the meeting transcript and pulls out the decisions, commitments, blockers, and dependencies discussed.",
      },
      {
        num: 46,
        name: "Work Prioritizer",
        desc: "Separates real commitments from passing ideas, maps dependencies, and gives each item an owner and priority.",
      },
      {
        num: 47,
        name: "CRM Executor",
        desc: "Writes the meeting's outcomes into the CRM so the system of record reflects what the room decided.",
      },
      {
        num: 48,
        name: "Task Executor",
        desc: "Creates internal tasks in the system of record and dedupes against open work so recurring topics update one item.",
      },
      {
        num: 49,
        name: "Follow-up Drafter",
        desc: "Drafts the follow-up communications from the meeting and holds them for a human to review before anything sends.",
      },
      {
        num: 50,
        name: "Loop Reporter",
        desc: "Assembles status from the live state of the work, so the next meeting starts from current reality.",
      },
    ],
  },
];

/* ─── Reusable hook ─── */

function useSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, isInView };
}

/* ─── Hero ─── */

function Hero() {
  const { ref, isInView } = useSection();

  return (
    <section className="bg-white pb-10 pt-32 lg:pb-16 lg:pt-40">
      <div ref={ref} className="mx-auto max-w-[800px] px-6 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
        >
          Our Production Environment
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--dark-graphite)]"
        >
          AI Agents We Use
          <br />
          in Production
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-8 h-[2px] w-16 bg-[var(--brand-red)] opacity-40"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 space-y-6"
        >
          <p className="text-lg leading-relaxed text-[var(--graphite)]">
            We&apos;re often asked by colleagues, prospects, and clients which
            AI agents we actually use in production. This list is our
            answer&mdash;a living view of the system we run. We update it
            continuously as agents improve, new capabilities are added, and the
            system evolves.
          </p>
          <p className="text-lg leading-relaxed text-[var(--graphite)]">
            These agents are built on the same architecture that underpins the{" "}
            <a
              href="/maestro"
              className="font-semibold text-[var(--brand-red)] underline decoration-[var(--brand-red)]/30 underline-offset-4 transition-colors hover:text-[var(--dark-graphite)] hover:decoration-[var(--dark-graphite)]/30"
            >
              Maestro AI Revenue System&#8482;
            </a>
            . As a business and technical consultancy, we design and tailor this
            system to fit real workflows across RevOps, marketing, and
            sales&mdash;not as theory, but in production environments.
          </p>
          <p className="text-lg leading-relaxed text-[var(--graphite)]">
            In our implementation, each agent owns a specific part of the
            workflow&mdash;from strategy to execution to quality to
            analytics&mdash;so nothing slips, nothing stalls, and every action
            compounds. The result isn&apos;t more activity. It&apos;s
            coordinated execution that turns signals into outcomes, consistently
            and at scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Team Section ─── */

function TeamSection({
  team,
  index,
}: {
  team: (typeof teams)[number];
  index: number;
}) {
  const { ref, isInView } = useSection();
  const isAlt = index % 2 === 1;

  return (
    <section className={isAlt ? "bg-[var(--off-white)] py-20 lg:py-28" : "bg-white py-20 lg:py-28"}>
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-[var(--dark-graphite)]"
        >
          {team.label}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 h-[2px] w-12 origin-left bg-[var(--brand-red)] opacity-40"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {team.agents.map((agent, i) => (
            <motion.div
              key={agent.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
              className="group flex gap-5 rounded-2xl border border-[var(--light-gray)] bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-red)]/10 text-sm font-bold text-[var(--brand-red)]">
                  {agent.num}
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--dark-graphite)]">
                  {agent.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--graphite)]">
                  {agent.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */

function AgentsCTA() {
  const { ref, isInView } = useSection();

  return (
    <section className="section-dark relative overflow-hidden py-20 lg:py-28">
      <ParticleCanvas
        particleCount={150}
        enableShapeFormation={true}
        followCursor={false}
        className="z-0"
      />

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.15] tracking-tight text-white">
            Revenue Systems
            <br />
            That Scale
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-white/60">
            We are passionate about how AI agents can power workflows. Grow
            faster, operate more efficiently, and reduce reliance on headcount.
          </p>

          <div className="mt-12">
            <button
              onClick={openCalendly}
              className="inline-flex rounded-full bg-white px-10 py-4 text-base font-semibold text-[var(--dark-graphite)] transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
            >
              Schedule a Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ─── */

export default function AIAgentsClient() {
  return (
    <main>
      <Hero />
      {teams.map((team, i) => (
        <TeamSection key={team.label} team={team} index={i} />
      ))}
      <AgentsCTA />
    </main>
  );
}
