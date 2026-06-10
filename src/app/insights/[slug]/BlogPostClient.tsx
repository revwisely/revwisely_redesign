"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { openCalendly } from "@/lib/calendly";

interface BlogPostClientProps {
  title: string;
  content: { type: string; text: string }[];
  image: string | null;
}

export default function BlogPostClient({ title, content, image }: BlogPostClientProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main className="bg-white pt-24 pb-20">
      <div ref={ref} className="mx-auto max-w-[800px] px-6 lg:px-8">
        {/* Back link */}
        <motion.a
          href="/insights"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--graphite)] transition-colors hover:text-[var(--brand-red)]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Insights
        </motion.a>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-[var(--dark-graphite)]"
        >
          {title}
        </motion.h1>

        {/* Hero image */}
        {image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 overflow-hidden rounded-2xl"
          >
            <img
              src={image}
              alt={title}
              className="w-full object-cover"
            />
          </motion.div>
        )}

        {/* Article body */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10"
        >
          {content.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={i}
                  className="mb-4 mt-10 text-xl font-bold leading-snug text-[var(--dark-graphite)] first:mt-0"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "banner") {
              const parts = block.text.split(/\{\{(.+?)\}\}/);
              return (
                <div key={i} className="my-10 rounded-2xl border border-[var(--brand-red)]/20 bg-[var(--brand-red-light)] p-8">
                  <p className="text-base leading-relaxed text-[var(--dark-graphite)]">
                    {parts.map((part, j) =>
                      j % 2 === 1 ? (
                        <a
                          key={j}
                          onClick={openCalendly}
                          className="cursor-pointer font-semibold text-[var(--brand-red)] underline decoration-[var(--brand-red)]/30 underline-offset-4 transition-colors hover:text-[var(--dark-graphite)] hover:decoration-[var(--dark-graphite)]/30"
                        >
                          {part}
                        </a>
                      ) : (
                        <span key={j} dangerouslySetInnerHTML={{ __html: part }} />
                      )
                    )}
                  </p>
                </div>
              );
            }
            if (block.type === "cta") {
              const parts = block.text.split(/\{\{(.+?)\}\}/);
              return (
                <p key={i} className="mb-5 text-base leading-relaxed text-[var(--graphite)]">
                  {parts.map((part, j) =>
                    j % 2 === 1 ? (
                      <a
                        key={j}
                        onClick={openCalendly}
                        className="cursor-pointer font-semibold text-[var(--brand-red)] underline decoration-[var(--brand-red)]/30 underline-offset-4 transition-colors hover:text-[var(--dark-graphite)] hover:decoration-[var(--dark-graphite)]/30"
                      >
                        {part}
                      </a>
                    ) : (
                      <span key={j}>{part}</span>
                    )
                  )}
                </p>
              );
            }
            if (block.type === "list_item") {
              return (
                <div key={i} className="mb-2 flex gap-3 pl-1">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" />
                  <p
                    className="text-base leading-relaxed text-[var(--graphite)]"
                    dangerouslySetInnerHTML={{ __html: block.text }}
                  />
                </div>
              );
            }
            return (
              <p
                key={i}
                className="mb-5 text-base leading-relaxed text-[var(--graphite)]"
                dangerouslySetInnerHTML={{ __html: block.text }}
              />
            );
          })}
        </motion.article>

        {/* Bottom CTA */}
        <div className="mt-16 border-t border-[var(--light-gray)] pt-10 text-center">
          <p className="text-lg font-bold text-[var(--dark-graphite)]">
            Want to talk about your revenue system?
          </p>
          <button
            onClick={openCalendly}
            className="mt-4 inline-flex rounded-full bg-[var(--dark-graphite)] px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-[var(--brand-red)]"
          >
            Book a Conversation
          </button>
        </div>
      </div>
    </main>
  );
}
