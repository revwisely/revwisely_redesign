"use client";

import { openCalendly } from "@/lib/calendly";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--light-gray)] bg-[var(--off-white)] py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center">
              <span className="text-lg font-bold tracking-tight text-[var(--brand-red)]">
                Rev
              </span>
              <span className="text-lg font-bold tracking-tight text-[var(--graphite)]">
                Wisely
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--graphite)]">
              Creators of the Maestro AI Revenue System&#8482;
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--dark-graphite)]">
              Services
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="/maestro"
                  className="text-sm text-[var(--graphite)] transition-colors duration-200 hover:text-[var(--brand-red)]"
                >
                  Maestro AI Revenue System&#8482;
                </a>
              </li>
              <li>
                <a
                  href="/revenue-architecture"
                  className="text-sm text-[var(--graphite)] transition-colors duration-200 hover:text-[var(--brand-red)]"
                >
                  Revenue Architecture
                </a>
              </li>
              <li>
                <a
                  href="/fractional-leadership"
                  className="text-sm text-[var(--graphite)] transition-colors duration-200 hover:text-[var(--brand-red)]"
                >
                  Fractional Leadership
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--dark-graphite)]">
              Resources
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="/insights"
                  className="text-sm text-[var(--graphite)] transition-colors duration-200 hover:text-[var(--brand-red)]"
                >
                  Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--dark-graphite)]">
              Contact
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <button
                  onClick={openCalendly}
                  className="text-sm text-[var(--graphite)] transition-colors duration-200 hover:text-[var(--brand-red)]"
                >
                  Book a Conversation
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--light-gray)] pt-8 md:flex-row">
          <p className="text-xs text-[var(--graphite)]">
            &copy; {new Date().getFullYear()} RevWisely. All rights reserved.
          </p>
          <p className="text-xs italic text-[var(--brand-red)]">
            The Maestro AI Revenue System.
          </p>
        </div>
      </div>
    </footer>
  );
}
