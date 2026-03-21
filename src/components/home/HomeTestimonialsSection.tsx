"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const TESTIMONIAL_DURATION = 7000;

const testimonials = [
  {
    quote:
      "Revwisely is an extension of our team, helping us go-to-market faster and more effectively than we could do on our own.",
    name: "Dr. Navya Davuluri",
    image: "/images/testimonial-navya.png",
    title: "CEO, Numo Health",
  },
  {
    quote:
      "Revwisely has the marketing expertise we need in the moment \u2014 strategy, content creation, campaign execution.",
    name: "Don Lanum",
    image: "/images/testimonial-don.png",
    title: "Sales and Marketing, Apana",
  },
  {
    quote:
      "We chose Revwisely to help create a partner strategy to reach more customers \u2014 and they delivered across the board.",
    name: "Amrit Robbins",
    image: "/images/testimonial-amrit.png",
    title: "CEO, Axiom Cloud",
  },
  {
    quote:
      "Revwisely gave us exactly what we needed: project and technical program management expertise.",
    name: "Abe Wang",
    image: "/images/testimonial-abe.png",
    title: "Marketing Director, CDD Vault",
  },
];

export default function HomeTestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, TESTIMONIAL_DURATION);
    return () => clearInterval(id);
  }, [advance]);

  const handleDot = (i: number) => setActive(i);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[var(--off-white)] py-16 lg:py-24">
      <motion.div
        className="mx-auto max-w-3xl px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="relative rounded-2xl bg-white p-8 shadow-sm lg:p-10">
          {/* Quote mark */}
          <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-red)]">
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 7.05C7.18 7.56 4.42 9.3 2.73 12.29c1.28-.45 2.48-.67 3.59-.67 1.44 0 2.6.45 3.47 1.35.87.9 1.31 2.04 1.31 3.42 0 1.34-.46 2.47-1.38 3.4C8.79 20.66 7.66 21.13 6.3 21.13c-1.55 0-2.82-.57-3.82-1.72C1.49 18.26 1 16.73 1 14.82c0-2.49.77-4.71 2.3-6.65C4.83 6.23 7.17 4.97 10.3 4.5L11 7.05zm11 0c-3.82.51-6.58 2.25-8.27 5.24 1.28-.45 2.48-.67 3.59-.67 1.44 0 2.6.45 3.47 1.35.87.9 1.31 2.04 1.31 3.42 0 1.34-.46 2.47-1.38 3.4-.93.93-2.06 1.4-3.42 1.4-1.55 0-2.82-.57-3.82-1.72-1-1.15-1.49-2.68-1.49-4.59 0-2.49.77-4.71 2.3-6.65 1.53-1.94 3.87-3.2 7-3.67L22 7.05z" />
            </svg>
          </div>

          <div className="mt-2 min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="text-xl font-medium leading-relaxed text-[var(--dark-graphite)] lg:text-2xl">
                  {testimonials[active].quote}
                </p>
                <footer className="mt-6 flex items-center gap-4">
                  <img
                    src={testimonials[active].image}
                    alt={testimonials[active].name}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[var(--dark-graphite)]">
                      {testimonials[active].name}
                    </p>
                    <p className="text-sm text-[var(--graphite)]">
                      {testimonials[active].title}
                    </p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDot(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === i
                    ? "w-6 bg-[var(--brand-red)]"
                    : "w-2 bg-[var(--light-gray)] hover:bg-[var(--graphite)]/30"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
