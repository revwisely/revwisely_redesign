"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ParticleCanvas from "@/components/ParticleCanvas";

/* ─── Reusable hook ─── */

function useSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, isInView };
}

/* ─── Data ─── */

const workItems = [
  "Diagnosing growth bottlenecks across sales, services, and operations",
  "Designing go-to-market and professional services models",
  "Redesigning revenue processes and operating cadence",
  "Building and integrating systems, data flows, and tooling",
  "Implementing AI-enabled workflows that actually get adopted",
  "Supporting execution through real organizational change",
];

const engagementTypes = [
  {
    title: "Defined Initiatives",
    desc: "Join a client team for a defined initiative",
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z",
  },
  {
    title: "Diagnostic & Design",
    desc: "Lead diagnostic and design phases",
    icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Build & Execute",
    desc: "Build, integrate, and support systems through execution and iteration",
    icon: "M11.42 15.17l-5.66-5.66a2 2 0 010-2.83l.17-.17a2 2 0 012.83 0l5.66 5.66m-8.49 8.49l-2.83-2.83a2 2 0 010-2.83l8.49-8.49a2 2 0 012.83 0l2.83 2.83a2 2 0 010 2.83l-8.49 8.49a2 2 0 01-2.83 0z",
  },
];

const roles = [
  {
    title: "Senior Strategy &\nProcess Consultants",
    desc: "You\u2019ve operated inside revenue organizations or complex operating environments. You can diagnose messy problems, design pragmatic solutions, and guide teams through change. You move easily between strategy and execution.",
  },
  {
    title: "Business &\nData Analysts",
    desc: "You are fluent in data, systems, and operational detail. You turn ambiguity into structure, insights into decisions, and models into action. You\u2019re as comfortable with stakeholders as you are with datasets.",
  },
  {
    title: "Full-Stack\nGTM Engineers",
    desc: "You build. You integrate. You make systems work. You\u2019re excited by workflow automation, data pipelines, AI-enabled tools, and pragmatic engineering that supports real operators\u2014not demos.",
  },
];

const thriveTraits = [
  "You think in systems, not just tasks",
  "You\u2019re comfortable with ambiguity and incomplete data",
  "You care more about impact than polish",
  "You can explain complex ideas simply",
  "You respect operators and how hard execution really is",
  "You want to keep learning without climbing a political ladder",
];

const whyJoin = [
  {
    title: "Real Client Impact",
    desc: "You work on problems that matter, with leaders who are ready to act.",
  },
  {
    title: "Exposure Without Chaos",
    desc: "Multiple clients and revenue models\u2014without constant travel or internal competition.",
  },
  {
    title: "Senior, Low-Ego Teams",
    desc: "You collaborate alongside experienced practitioners who value clarity, honesty, and follow-through.",
  },
  {
    title: "Competitive Compensation",
    desc: "We stay close to the market and pay accordingly for senior talent.",
  },
  {
    title: "Sustainable Pace",
    desc: "Great work requires focus, boundaries, and a life outside of work.",
  },
];

/* ─── Hero ─── */

function Hero() {
  const { ref, isInView } = useSection();

  return (
    <section className="bg-white pb-10 pt-32 lg:pb-16 lg:pt-40">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
            >
              Talent Community
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--dark-graphite)]"
            >
              Work Your Way
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
            />
          </div>

          {/* Right — Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl border border-[var(--light-gray)] bg-[var(--off-white)] p-8 lg:p-10"
          >
            <svg
              className="mb-4 h-8 w-8 text-[var(--brand-red)] opacity-30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.2 11 15c0 1.934-1.567 3.5-3.5 3.5-1.199 0-2.344-.611-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.2 21 15c0 1.934-1.567 3.5-3.5 3.5-1.199 0-2.344-.611-2.917-1.179z" />
            </svg>
            <p className="text-lg leading-relaxed text-[var(--graphite)] italic">
              Our talent community is made up of individual contributors with
              the experience to work independently&mdash;whether you&apos;re
              deepening your craft or applying it more selectively over time.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img
                src="/images/blog/chrispreston.png"
                alt="Chris Preston"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold text-[var(--dark-graphite)]">
                  Chris Preston
                </p>
                <p className="text-xs text-[var(--graphite)]">CEO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Intro ─── */

function Intro() {
  const { ref, isInView } = useSection();

  return (
    <section className="bg-[var(--off-white)] py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[800px] px-6 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-[var(--dark-graphite)]"
        >
          Join a close-knit team
          <br />
          of strategic doers
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 space-y-6"
        >
          <p className="text-lg leading-relaxed text-[var(--graphite)]">
            At RevWisely, we help companies redesign how revenue really
            works&mdash;strategy, process, data, tooling, and execution. We
            don&apos;t sell advice in isolation. We build systems that get
            implemented.
          </p>
          <p className="text-lg leading-relaxed text-[var(--graphite)]">
            We partner with senior consultants, analysts, and engineers who want
            to do meaningful work inside complex, high-impact client
            environments&mdash;without the politics, churn, or theater of
            traditional consulting.
          </p>
          <p className="text-lg leading-relaxed text-[var(--graphite)]">
            If you care about outcomes more than optics, you&apos;ll feel at
            home here.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="/talent/apply"
            className="inline-flex rounded-full bg-[var(--dark-graphite)] px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-[var(--brand-red)]"
          >
            Complete Your Consultant Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Work You'll Do ─── */

function WorkSection() {
  const { ref, isInView } = useSection();

  return (
    <section className="bg-white py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-[var(--dark-graphite)]"
        >
          Work you&apos;ll do&mdash;and that
          <br />
          you&apos;ve done before
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 h-[2px] w-12 origin-left bg-[var(--brand-red)] opacity-40"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-[700px] text-lg leading-relaxed text-[var(--graphite)]"
        >
          This is a hands-on, high-trust environment. You&apos;ll be close to
          decision-makers. Your thinking will turn into action quickly.
          RevWisely teams work with business and functional leaders to solve
          hard revenue problems, including:
        </motion.p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              className="flex gap-4 rounded-2xl border border-[var(--light-gray)] bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="mt-1 shrink-0">
                <div className="h-2 w-2 rounded-full bg-[var(--brand-red)]" />
              </div>
              <p className="text-sm leading-relaxed text-[var(--graphite)]">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How We Work With Talent ─── */

function HowWeWork() {
  const { ref, isInView } = useSection();

  return (
    <section className="bg-[var(--off-white)] py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-[var(--dark-graphite)]"
        >
          How RevWisely works
          <br />
          with talent
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 h-[2px] w-12 origin-left bg-[var(--brand-red)] opacity-40"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-[700px] text-lg leading-relaxed text-[var(--graphite)]"
        >
          We are not a traditional staffing firm. We assemble small, senior
          delivery teams around clearly defined client outcomes. Engagements
          are scoped, intentional, and focused on impact&mdash;not open-ended
          staff augmentation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-4 text-lg leading-relaxed text-[var(--graphite)]"
        >
          Depending on your role and availability, you may:
        </motion.p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {engagementTypes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="rounded-2xl border border-[var(--light-gray)] bg-white p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-red)]/10">
                <svg
                  className="h-6 w-6 text-[var(--brand-red)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={item.icon}
                  />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[var(--dark-graphite)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--graphite)]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Roles ─── */

function Roles() {
  const { ref, isInView } = useSection();

  return (
    <section className="bg-white py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-[var(--dark-graphite)]"
        >
          The roles we
          <br />
          typically hire
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 h-[2px] w-12 origin-left bg-[var(--brand-red)] opacity-40"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-[700px] text-lg leading-relaxed text-[var(--graphite)]"
        >
          We hire experienced practitioners across three core profiles:
        </motion.p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="rounded-2xl border border-[var(--light-gray)] bg-[var(--off-white)] p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <h3 className="whitespace-pre-line text-xl font-bold leading-tight text-[var(--dark-graphite)]">
                {role.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--graphite)]">
                {role.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Profile CTA ─── */

function ProfileCTA() {
  const { ref, isInView } = useSection();

  return (
    <section className="bg-[var(--off-white)] py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[800px] px-6 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-[var(--dark-graphite)]"
        >
          Complete your
          <br />
          consultant profile!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 text-lg leading-relaxed text-[var(--graphite)]"
        >
          When you complete a consultant profile with us, our team gains a
          better understanding of who you are and what you are passionate about.
          We work behind the scenes to align your superpowers with
          project-based opportunities that will enable you to work your way and
          drive meaningful impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="/talent/apply"
            className="inline-flex rounded-full bg-[var(--dark-graphite)] px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-[var(--brand-red)]"
          >
            Complete Your Consultant Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Who Thrives ─── */

function WhoThrives() {
  const { ref, isInView } = useSection();

  return (
    <section className="bg-white py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-[var(--dark-graphite)]"
        >
          Who thrives at RevWisely
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 h-[2px] w-12 origin-left bg-[var(--brand-red)] opacity-40"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-[700px] text-lg leading-relaxed text-[var(--graphite)]"
        >
          You&apos;ll thrive here if you&apos;re a thoughtful, collaborative
          human who takes responsibility seriously.
        </motion.p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {thriveTraits.map((trait, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              className="flex items-center gap-4 rounded-xl border border-[var(--light-gray)] bg-white p-5 transition-shadow duration-300 hover:shadow-md"
            >
              <svg
                className="h-5 w-5 shrink-0 text-[var(--brand-red)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p className="text-sm font-medium text-[var(--dark-graphite)]">
                {trait}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Join ─── */

function WhyJoin() {
  const { ref, isInView } = useSection();

  return (
    <section className="bg-[var(--off-white)] py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-[var(--dark-graphite)]"
        >
          Why do people
          <br />
          join RevWisely
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 h-[2px] w-12 origin-left bg-[var(--brand-red)] opacity-40"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyJoin.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              className="rounded-2xl border border-[var(--light-gray)] bg-white p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <h3 className="text-base font-bold text-[var(--dark-graphite)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--graphite)]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Get Started CTA ─── */

function GetStarted() {
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
            How to Get Started
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-white/60">
            When you complete a consultant profile, we learn how you think,
            what you&apos;re great at, and where you want to grow. From there,
            we match talent to real client needs&mdash;not generic job
            descriptions.
          </p>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/60">
            Our process is selective by design. We work with a small group of
            practitioners&mdash;and we invest in them.
          </p>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/40">
            If that sounds right to you, we&apos;d love to learn more.
          </p>

          <div className="mt-12">
            <a
              href="/talent/apply"
              className="inline-flex rounded-full bg-white px-10 py-4 text-base font-semibold text-[var(--dark-graphite)] transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
            >
              Complete Your Consultant Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ─── */

export default function TalentClient() {
  return (
    <main>
      <Hero />
      <Intro />
      <WorkSection />
      <HowWeWork />
      <Roles />
      <ProfileCTA />
      <WhoThrives />
      <WhyJoin />
      <GetStarted />
    </main>
  );
}
