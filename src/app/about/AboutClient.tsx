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

export default function AboutClient() {
  const hero = useSection();
  const who = useSection();
  const believe = useSection();
  const work = useSection();
  const audience = useSection();
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
            About RevWisely
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--dark-graphite)]"
          >
            We build revenue systems.
            <br />
            Then we make them smarter.
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
            className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--graphite)]"
          >
            <p>
              RevWisely is a revenue consulting firm built for how growth works
              now — with AI at the center, not bolted on after the fact.
            </p>
            <p>
              We design, build, and run the systems that turn revenue from a
              people problem into a scalable operation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Who We Are */}
      <section className="relative overflow-hidden bg-[var(--off-white)] py-20 lg:py-28">
        <div ref={who.ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — copy */}
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={who.isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
              >
                Who We Are
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={who.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
              >
                A decade of building
                <br />
                what works.
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={who.isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
              />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={who.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-8 space-y-5 text-base leading-relaxed text-[var(--graphite)]"
              >
                <p>
                  RevWisely has been in the revenue trenches for over 10
                  years — long before AI entered the conversation.
                  We&apos;ve built go-to-market strategies, fixed broken
                  pipelines, stood up RevOps from scratch, and led revenue
                  teams through every stage of growth.
                </p>
                <p>
                  That experience is the foundation. AI is what we&apos;ve
                  built on top of it.
                </p>
                <p>
                  We&apos;re not a startup chasing a trend. We&apos;re
                  operators who&apos;ve done the work long enough to know what
                  actually scales — and what just sounds good on a slide.
                </p>
              </motion.div>
            </div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={who.isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl border border-[var(--light-gray)] bg-white shadow-lg">
                <div className="aspect-[4/3] w-full">
                  <img
                    src="/images/about-who-we-are.jpg"
                    alt="RevWisely team at work"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.classList.add("flex", "items-center", "justify-center");
                      const placeholder = document.createElement("div");
                      placeholder.className = "text-center p-8";
                      placeholder.innerHTML = '<p class="text-sm text-[var(--graphite)]/40">Image placeholder</p><p class="mt-1 text-xs text-[var(--graphite)]/30">Recommended: 800x600</p>';
                      target.parentElement!.appendChild(placeholder);
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-[var(--brand-red)]/5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: What We Believe */}
      <section className="relative overflow-hidden bg-[var(--dark-graphite)] pb-0 pt-20 lg:pt-28">
        <div ref={believe.ref} className="mx-auto max-w-[800px] px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={believe.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            What We Believe
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={believe.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-white"
          >
            Revenue shouldn&apos;t depend
            <br />
            on heroics.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={believe.isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-50"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={believe.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 space-y-5 text-base leading-relaxed text-white/60"
          >
            <p>
              Most companies grow by adding people. More reps. More managers.
              More tools for those people to half-use.
            </p>
            <p>
              We think there&apos;s a better model. One where the architecture
              does the heavy lifting — where AI handles execution, humans lead
              strategy, and the system compounds over time.
            </p>
            <p className="text-lg font-semibold text-white">
              That&apos;s what we build.
            </p>
          </motion.div>
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

      {/* SECTION 4: How We Work */}
      <section className="bg-[var(--off-white)] py-20 lg:py-28">
        <div ref={work.ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={work.isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              <div className="overflow-hidden rounded-2xl border border-[var(--light-gray)] bg-white shadow-lg">
                <div className="aspect-[4/3] w-full">
                  <img
                    src="/images/about-how-we-work.jpg"
                    alt="Embedded in the business"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.classList.add("flex", "items-center", "justify-center");
                      const placeholder = document.createElement("div");
                      placeholder.className = "text-center p-8";
                      placeholder.innerHTML = '<p class="text-sm text-[var(--graphite)]/40">Image placeholder</p><p class="mt-1 text-xs text-[var(--graphite)]/30">Recommended: 800x600</p>';
                      target.parentElement!.appendChild(placeholder);
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-[var(--brand-red)]/5" />
            </motion.div>

            {/* Right — copy */}
            <div className="order-1 lg:order-2">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={work.isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
              >
                How We Work
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={work.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
              >
                Operators, not advisors.
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={work.isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
              />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={work.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-8 space-y-5 text-base leading-relaxed text-[var(--graphite)]"
              >
                <p>
                  We don&apos;t hand over a strategy deck and wish you luck. We
                  embed in the business. We sit in the pipeline reviews, run the
                  systems, and own the outcome alongside your team.
                </p>
                <p>
                  Three ways in: fractional revenue leadership, full revenue
                  architecture builds, and Maestro — our AI-powered revenue
                  system that replaces the roles you can&apos;t afford to keep
                  hiring for.
                </p>
              </motion.div>

              {/* Service links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={work.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-6"
              >
                {[
                  { label: "Fractional Sales Leadership", href: "/fractional-leadership" },
                  { label: "Revenue Infrastructure", href: "/revenue-architecture" },
                  { label: "Maestro AI Revenue System", href: "/maestro" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold text-[var(--brand-red)] underline decoration-[var(--brand-red)]/30 underline-offset-4 transition-colors hover:text-[var(--dark-graphite)] hover:decoration-[var(--dark-graphite)]/30"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Who We Work With */}
      <section className="bg-white py-20 lg:py-28">
        <div ref={audience.ref} className="mx-auto max-w-[800px] px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={audience.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]"
          >
            Who We Work With
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={audience.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark-graphite)]"
          >
            Built for companies
            <br />
            in the messy middle.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={audience.isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={audience.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 space-y-5 text-base leading-relaxed text-[var(--graphite)]"
          >
            <p>
              Past the scrappy early stage. Not yet at enterprise scale. Growing
              fast enough that what worked last year is already breaking.
            </p>
            <p>
              If your revenue engine needs more than a tweak — if it needs
              architecture — that&apos;s where we come in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: CTA */}
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
              Let&apos;s talk about where your
              <br />
              revenue engine can go.
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
