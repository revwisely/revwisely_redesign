"use client";

import { useState, useEffect, useRef } from "react";
import { openCalendly } from "@/lib/calendly";

const serviceLinks = [
  { label: "Maestro AI Revenue System\u2122", href: "/maestro" },
  { label: "Revenue Architecture Build", href: "/revenue-architecture" },
  { label: "Fractional Revenue Leadership", href: "/fractional-leadership" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-sm border-b border-[var(--light-gray)]"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-[var(--brand-red)]">
              Rev
            </span>
            <span className="text-xl font-bold tracking-tight text-[var(--graphite)]">
              Wisely
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 md:flex">
            {/* Services dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="group relative flex items-center gap-1 text-sm text-[var(--graphite)] transition-colors duration-200 hover:text-[var(--dark-graphite)]"
              >
                Services
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[var(--brand-red)] transition-all duration-250 ease-out group-hover:w-full" />
              </button>

              {/* Dropdown panel */}
              {servicesOpen && (
                <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-[var(--light-gray)] bg-white p-2 shadow-xl">
                  {serviceLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setServicesOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm text-[var(--graphite)] transition-colors duration-150 hover:bg-[var(--off-white)] hover:text-[var(--dark-graphite)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Insights */}
            <a
              href="/insights"
              className="group relative text-sm text-[var(--graphite)] transition-colors duration-200 hover:text-[var(--dark-graphite)]"
            >
              Insights
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[var(--brand-red)] transition-all duration-250 ease-out group-hover:w-full" />
            </a>

          </div>

          {/* Desktop CTA */}
          <button
            onClick={openCalendly}
            className="hidden rounded-lg bg-[var(--brand-red)] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[var(--brand-red-hover)] md:inline-flex"
          >
            Contact
          </button>

          {/* Mobile hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-[2px] w-5 bg-[var(--dark-graphite)] transition-all duration-200 ${
                  mobileOpen ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-[var(--dark-graphite)] transition-all duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-[var(--dark-graphite)] transition-all duration-200 ${
                  mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-[var(--light-gray)] pb-6 pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              {/* Services accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-[var(--graphite)] transition-colors hover:bg-[var(--off-white)]"
              >
                Services
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="ml-3 flex flex-col gap-1 border-l-2 border-[var(--light-gray)] pl-3">
                  {serviceLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                      className="rounded-lg px-3 py-2 text-sm text-[var(--graphite)] transition-colors hover:bg-[var(--off-white)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              <a
                href="/insights"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-[var(--graphite)] transition-colors hover:bg-[var(--off-white)]"
              >
                Insights
              </a>


              <button
                onClick={() => { setMobileOpen(false); openCalendly(); }}
                className="mt-3 inline-flex justify-center rounded-lg bg-[var(--brand-red)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-red-hover)]"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
