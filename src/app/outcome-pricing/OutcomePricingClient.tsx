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

export default function OutcomePricingClient() {
  const hero = useSection();
  const oldModel = useSection();
  const performs = useSection();
  const intro = useSection();
  const relationship = useSection();
  const category = useSection();
  const cta = useSection();

  return (
    <main>
      {/* SECTION 1: Hero */}
      <section className="bg-white pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div ref={hero.ref} className="mx-auto max-w-[800px] px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={hero.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            Outcome Pricing&#8482;
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--dark-graphite)]"
          >
            It&rsquo;s time to change how
            <br />
            AI consulting gets paid.
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
            className="mt-8 text-lg leading-relaxed text-[var(--graphite)]"
          >
            <p>
              We created Outcome Pricing&#8482; because customers should pay for
              results, not time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: The old model */}
      <section className="bg-[var(--off-white)] py-20 lg:py-28">
        <div ref={oldModel.ref} className="mx-auto max-w-[800px] px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={oldModel.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            The Old Model
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={oldModel.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
          >
            For decades, you paid
            <br />
            for effort.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={oldModel.isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={oldModel.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 space-y-5 text-base leading-relaxed text-[var(--graphite)]"
          >
            <p>
              For decades, professional services have operated under a simple
              assumption: customers pay for effort. Whether billed by the hour,
              on a time-and-materials basis, or as a fixed-fee engagement, the
              economics were the same. More consultants and more hours justified
              higher fees because human labor was the source of value.
            </p>
            <p className="text-lg font-semibold text-[var(--dark-graphite)]">
              Artificial intelligence doesn&rsquo;t simply make consultants
              faster. It changes what customers are buying.
            </p>
            <p>
              Writing proposals faster, summarizing meetings, and producing
              reports more efficiently are useful productivity gains, but they
              are incremental. The real transformation is that AI enables
              companies to build operational capabilities that continuously
              perform work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: AI performs the work */}
      <section className="bg-white py-20 lg:py-28">
        <div ref={performs.ref} className="mx-auto max-w-[800px] px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={performs.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            What Changed
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={performs.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
          >
            AI doesn&rsquo;t just advise.
            <br />
            It performs the work.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={performs.isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={performs.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 space-y-5 text-base leading-relaxed text-[var(--graphite)]"
          >
            <p>
              An AI-native workflow can continuously gather information, analyze
              data, make decisions, trigger actions, and keep business systems
              up to date without constant human intervention. Unlike traditional
              workflows that depend on people, these systems actively perform
              work across sales, marketing, customer success, operations, and
              finance. They do not simply document how work should be performed.
              They perform the work.
            </p>
            <p>
              That distinction has profound implications for how these services
              should be sold and purchased.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Introducing Outcome Pricing */}
      <section className="relative overflow-hidden bg-[var(--dark-graphite)] pb-0 pt-20 lg:pt-28">
        <div ref={intro.ref} className="mx-auto max-w-[800px] px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={intro.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            Introducing Outcome Pricing&#8482;
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={intro.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-white"
          >
            Pay as outcomes
            <br />
            are delivered.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={intro.isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-50"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={intro.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 space-y-5 text-base leading-relaxed text-white/60"
          >
            <p>
              If AI changes where value comes from, it should also change how
              customers pay for it. Outcome Pricing&#8482; is the commercial
              expression of this simple belief.
            </p>
            <p>
              Instead of billing by the hour or charging a fixed project fee,
              payments are tied to clearly defined outcomes. As each outcome is
              delivered, payment follows. Our commercial success is directly
              linked to our ability to deliver production-ready AI
              workflows&mdash;not simply to the number of hours invested in
              building them.
            </p>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={intro.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 border-l-2 border-[var(--brand-red)] pl-6 text-xl font-semibold leading-snug text-white"
          >
            Traditional consulting rewards activity. Outcome Pricing&#8482;
            rewards execution.
          </motion.blockquote>
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

      {/* SECTION 5: A different relationship */}
      <section className="bg-[var(--off-white)] py-20 lg:py-28">
        <div ref={relationship.ref} className="mx-auto max-w-[800px] px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={relationship.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            A Different Relationship
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={relationship.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
          >
            You&rsquo;re not buying advice.
            <br />
            You&rsquo;re buying capacity.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={relationship.isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={relationship.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 space-y-5 text-base leading-relaxed text-[var(--graphite)]"
          >
            <p>
              This approach changes the relationship between provider and
              customer. Traditional consulting contracts often reward activity.
              Outcome Pricing&#8482; rewards execution. It creates a shared
              incentive to move quickly, remove obstacles, and deliver working
              AI-native workflows that become part of the customer&rsquo;s daily
              operations.
            </p>
            <p>
              An AI-native workflow is not a presentation, strategy document, or
              set of recommendations. It is a permanent business capability.
              Once deployed, it continues to research prospects, maintain CRM
              data, generate content, analyze customer conversations, and
              monitor customer health. Customers are not buying advice. They are
              investing in an operating capability that expands their
              business&rsquo;s capacity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: A new category */}
      <section className="bg-white py-20 lg:py-28">
        <div ref={category.ref} className="mx-auto max-w-[800px] px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={category.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            A New Category
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={category.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
          >
            A new category deserves
            <br />
            a new commercial model.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={category.isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={category.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 space-y-5 text-base leading-relaxed text-[var(--graphite)]"
          >
            <p>
              That is why we believe AI workflow companies represent a
              fundamentally different category from traditional consulting firms.
              They are not simply delivering expertise more efficiently; they are
              building systems that create enduring business capabilities.
            </p>
            <p className="text-lg font-semibold text-[var(--dark-graphite)]">
              A new category deserves a new commercial model.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
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
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.15] tracking-tight text-white">
              Rewarding outcomes over effort.
              <br />
              Capability over billable hours.
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/50">
              The AI era deserves a commercial model that rewards outcomes over
              effort and business capability over billable hours. Schedule a
              consultation to learn how Outcome Pricing&#8482; can help
              accelerate your AI transformation.
            </p>

            <div className="mt-12">
              <button
                onClick={openCalendly}
                className="inline-flex rounded-full bg-white px-10 py-4 text-base font-semibold text-[var(--dark-graphite)] transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
              >
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
