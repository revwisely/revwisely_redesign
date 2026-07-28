"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import ParticleCanvas from "@/components/ParticleCanvas";
import { openCalendly } from "@/lib/calendly";

// How long each testimonial stays before rotating to the next.
const ROTATE_MS = 8000;

type HeroTestimonial = {
  quote: string;
  name: string;
  title: string;
  linkedin: string;
  image?: string;
};

const heroTestimonials: HeroTestimonial[] = [
  {
    quote: "They helped us accelerate sales while improving the unit economics of our business.",
    name: "Barry Bunin",
    title: "CEO and President",
    linkedin: "https://www.linkedin.com/in/collaborativediscovery/",
    image: "/images/testimonials/barry-bunin.jpg",
  },
  {
    quote: "They showed us a better way to scale revenue with AI, instead of headcount.",
    name: "Andrew DeMille",
    title: "COO",
    linkedin: "https://www.linkedin.com/in/andrewdemille/",
    image: "/images/testimonials/andrew-demille.jpg",
  },
  {
    quote: "The AI workflow they built is now part of how we operate every day.",
    name: "Matt Maher Peterson",
    title: "CTO",
    linkedin: "https://www.linkedin.com/in/matt-maher-peterson-62780973/",
    image: "/images/testimonials/matt-maher-peterson.jpg",
  },
  {
    quote: "Unlike other firms, they didn't just add AI to our process—they redesigned the process itself.",
    name: "Daniel Howard",
    title: "CEO",
    linkedin: "https://www.linkedin.com/in/danielbhoward/",
    image: "/images/testimonials/daniel-howard.jpg",
  },
  {
    quote: "Based on the results, I wish we'd put Maestro AI workflows into production six months ago.",
    name: "Monty Hudon",
    title: "SVP Business Development",
    linkedin: "https://www.linkedin.com/in/montyhudson/",
    image: "/images/testimonials/monty-hudon.jpg",
  },
  {
    quote: "They helped us stop thinking about AI as a technology and start thinking about AI as a workforce system.",
    name: "Martin Wilson",
    title: "CEO",
    linkedin: "https://www.linkedin.com/in/martinrexwilson/",
    image: "/images/testimonials/martin-wilson.jpg",
  },
];

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function HomeHeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Auto-rotate the hero testimonial.
  useEffect(() => {
    const id = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % heroTestimonials.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const activeTestimonial = heroTestimonials[testimonialIndex];

  // Scroll-driven parallax: content drifts up + fades as user scrolls past
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white"
    >
      <ParticleCanvas
        particleCount={350}
        followCursor={false}
        className="z-0"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-[900px] px-6 text-center"
      >
        {/* Headline — each line staggers in separately */}
        <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--dark-graphite)]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
            animate={
              isInView
                ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }
                : {}
            }
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Revenue builders.
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
            animate={
              isInView
                ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }
                : {}
            }
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            AI practitioners.
          </motion.span>
        </h1>

        {/* Subheadline fades up */}
        <motion.p
          className="mx-auto mt-6 max-w-[620px] text-lg leading-relaxed text-[var(--graphite)]"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          We build AI-native workflows for companies with ambition.
        </motion.p>

        {/* CTA group */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <button
            onClick={openCalendly}
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--dark-graphite)] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[var(--brand-red)] hover:shadow-xl hover:shadow-[var(--brand-red)]/10"
          >
            Book a Conversation
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
          <motion.p
            className="text-sm text-[var(--graphite)]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            30 minutes. No pitch deck. Just a clear path to real results.
          </motion.p>
        </motion.div>

        {/* Rotating testimonial — sits just below the hero copy */}
        <motion.div
          className="mx-auto mt-6 w-full max-w-[460px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
        <AnimatePresence mode="wait">
          <motion.a
            key={testimonialIndex}
            href={activeTestimonial.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="group flex items-center gap-3 rounded-3xl border border-[var(--light-gray)] bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur transition-colors duration-300 hover:border-[var(--brand-red)]/40"
          >
            {activeTestimonial.image ? (
              <img
                src={activeTestimonial.image}
                alt={activeTestimonial.name}
                className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
              />
            ) : (
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--dark-graphite)] text-xs font-bold text-white">
                {initials(activeTestimonial.name)}
              </span>
            )}
            <span className="min-w-0 text-left">
              <span className="line-clamp-2 text-sm italic leading-snug text-[var(--dark-graphite)]">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </span>
              <span className="mt-0.5 block truncate text-xs text-[var(--graphite)]">
                {activeTestimonial.name} · {activeTestimonial.title}
              </span>
            </span>
          </motion.a>
        </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
