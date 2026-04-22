"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Types ─── */

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  currentRole: string;
  currentCompany: string;
  yearsExperience: string;
  availability: string;
  workPreference: string;
  rateRange: string;
  primaryExpertise: string;
  skills: string;
  industries: string;
  summary: string;
  resume: File | null;
}

const initial: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  linkedin: "",
  location: "",
  currentRole: "",
  currentCompany: "",
  yearsExperience: "",
  availability: "",
  workPreference: "",
  rateRange: "",
  primaryExpertise: "",
  skills: "",
  industries: "",
  summary: "",
  resume: null,
};

/* ─── Reusable components ─── */

const inputClass =
  "w-full rounded-lg border border-[var(--light-gray)] bg-white px-4 py-3 text-sm text-[var(--dark-graphite)] placeholder:text-[var(--graphite)]/40 outline-none transition-all duration-200 focus:border-[var(--brand-red)] focus:ring-2 focus:ring-[var(--brand-red)]/10";

const labelClass =
  "mb-1.5 block text-sm font-semibold text-[var(--dark-graphite)]";

const selectClass =
  "w-full appearance-none rounded-lg border border-[var(--light-gray)] bg-white px-4 py-3 text-sm text-[var(--dark-graphite)] outline-none transition-all duration-200 focus:border-[var(--brand-red)] focus:ring-2 focus:ring-[var(--brand-red)]/10";

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-red)]/10 text-sm font-bold text-[var(--brand-red)]">
        {number}
      </div>
      <h2 className="text-xl font-bold text-[var(--dark-graphite)]">
        {title}
      </h2>
    </div>
  );
}

/* ─── Page ─── */

export default function ApplyClient() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [form, setForm] = useState<FormData>(initial);
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    setForm((prev) => ({ ...prev, resume: file }));
    setFileName(file?.name || "");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: connect to API / form service
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ─── Success state ─── */
  if (submitted) {
    return (
      <main className="bg-white pb-20 pt-32 lg:pt-40">
        <div className="mx-auto max-w-[600px] px-6 text-center lg:px-8">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand-red)]/10">
            <svg
              className="h-10 w-10 text-[var(--brand-red)]"
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
          </div>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-[var(--dark-graphite)]">
            Profile Submitted
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--graphite)]">
            Thank you for completing your consultant profile. Our team will
            review your information and reach out when we have an opportunity
            that aligns with your experience and interests.
          </p>
          <a
            href="/talent"
            className="mt-10 inline-flex rounded-full bg-[var(--dark-graphite)] px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-[var(--brand-red)]"
          >
            Back to Talent
          </a>
        </div>
      </main>
    );
  }

  /* ─── Form ─── */
  return (
    <main className="bg-[var(--off-white)] pb-20 pt-32 lg:pt-40">
      <div ref={ref} className="mx-auto max-w-[780px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            Talent Community
          </p>
          <h1 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-[var(--dark-graphite)]">
            Consultant Profile
          </h1>
          <p className="mx-auto mt-4 max-w-[520px] text-base leading-relaxed text-[var(--graphite)]">
            Tell us about yourself so we can match you with the right
            opportunities. All fields marked with * are required.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-12"
        >
          {/* ─── Section 1: Personal Info ─── */}
          <div className="rounded-2xl border border-[var(--light-gray)] bg-white p-8 lg:p-10">
            <SectionHeading number="1" title="Personal Information" />

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={labelClass}>
                  First Name <span className="text-[var(--brand-red)]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="First name"
                  value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Last Name <span className="text-[var(--brand-red)]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Email <span className="text-[var(--brand-red)]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input
                  type="tel"
                  placeholder="(555) 555-5555"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>LinkedIn Profile</label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/yourname"
                  value={form.linkedin}
                  onChange={(e) => update("linkedin", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Location</label>
                <input
                  type="text"
                  placeholder="City, State"
                  value={form.location}
                  onChange={(e) => update("location", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* ─── Section 2: Work History & Requirements ─── */}
          <div className="rounded-2xl border border-[var(--light-gray)] bg-white p-8 lg:p-10">
            <SectionHeading number="2" title="Work History & Requirements" />

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={labelClass}>
                  Current / Most Recent Role{" "}
                  <span className="text-[var(--brand-red)]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. VP of Revenue Operations"
                  value={form.currentRole}
                  onChange={(e) => update("currentRole", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Current / Most Recent Company
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  value={form.currentCompany}
                  onChange={(e) => update("currentCompany", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Years of Experience{" "}
                  <span className="text-[var(--brand-red)]">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={form.yearsExperience}
                    onChange={(e) => update("yearsExperience", e.target.value)}
                    className={selectClass}
                  >
                    <option value="">Select</option>
                    <option value="3-5">3 &ndash; 5 years</option>
                    <option value="5-10">5 &ndash; 10 years</option>
                    <option value="10-15">10 &ndash; 15 years</option>
                    <option value="15+">15+ years</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--graphite)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <label className={labelClass}>
                  Availability{" "}
                  <span className="text-[var(--brand-red)]">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={form.availability}
                    onChange={(e) => update("availability", e.target.value)}
                    className={selectClass}
                  >
                    <option value="">Select</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="project-based">Project-based</option>
                    <option value="flexible">Flexible</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--graphite)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <label className={labelClass}>Work Preference</label>
                <div className="relative">
                  <select
                    value={form.workPreference}
                    onChange={(e) => update("workPreference", e.target.value)}
                    className={selectClass}
                  >
                    <option value="">Select</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="on-site">On-site</option>
                    <option value="no-preference">No preference</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--graphite)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <label className={labelClass}>Rate Range</label>
                <input
                  type="text"
                  placeholder="e.g. $150 - $200 / hr"
                  value={form.rateRange}
                  onChange={(e) => update("rateRange", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* ─── Section 3: Expertise ─── */}
          <div className="rounded-2xl border border-[var(--light-gray)] bg-white p-8 lg:p-10">
            <SectionHeading number="3" title="Expertise" />

            <div className="space-y-5">
              <div>
                <label className={labelClass}>
                  Primary Area of Expertise{" "}
                  <span className="text-[var(--brand-red)]">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={form.primaryExpertise}
                    onChange={(e) =>
                      update("primaryExpertise", e.target.value)
                    }
                    className={selectClass}
                  >
                    <option value="">Select your primary area</option>
                    <option value="strategy-process">
                      Strategy &amp; Process Consulting
                    </option>
                    <option value="business-data-analysis">
                      Business &amp; Data Analysis
                    </option>
                    <option value="gtm-engineering">
                      Full-Stack GTM Engineering
                    </option>
                    <option value="revenue-operations">
                      Revenue Operations
                    </option>
                    <option value="sales-leadership">Sales Leadership</option>
                    <option value="marketing-operations">
                      Marketing Operations
                    </option>
                    <option value="other">Other</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--graphite)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <label className={labelClass}>Key Skills</label>
                <input
                  type="text"
                  placeholder="e.g. CRM architecture, sales process design, HubSpot, Salesforce, Python"
                  value={form.skills}
                  onChange={(e) => update("skills", e.target.value)}
                  className={inputClass}
                />
                <p className="mt-1 text-xs text-[var(--graphite)]/60">
                  Comma-separated list of your top skills and tools
                </p>
              </div>

              <div>
                <label className={labelClass}>Industries</label>
                <input
                  type="text"
                  placeholder="e.g. SaaS, FinTech, Healthcare, Manufacturing"
                  value={form.industries}
                  onChange={(e) => update("industries", e.target.value)}
                  className={inputClass}
                />
                <p className="mt-1 text-xs text-[var(--graphite)]/60">
                  Industries where you have meaningful experience
                </p>
              </div>

              <div>
                <label className={labelClass}>
                  Tell us what you&apos;re best at{" "}
                  <span className="text-[var(--brand-red)]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your strengths, the kind of work you enjoy most, and what sets you apart."
                  value={form.summary}
                  onChange={(e) => update("summary", e.target.value)}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>
          </div>

          {/* ─── Section 4: Resume Upload ─── */}
          <div className="rounded-2xl border border-[var(--light-gray)] bg-white p-8 lg:p-10">
            <SectionHeading number="4" title="Resume" />

            <div>
              <label className={labelClass}>
                Upload Your Resume{" "}
                <span className="text-[var(--brand-red)]">*</span>
              </label>

              <input
                ref={fileRef}
                type="file"
                required
                accept=".pdf,.doc,.docx"
                onChange={handleFile}
                className="hidden"
              />

              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border-2 border-dashed border-[var(--light-gray)] bg-[var(--off-white)] px-6 py-10 transition-colors duration-200 hover:border-[var(--brand-red)]/40 hover:bg-[var(--brand-red)]/[0.02]"
              >
                <svg
                  className="h-8 w-8 text-[var(--graphite)]/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                <div className="text-left">
                  {fileName ? (
                    <p className="text-sm font-semibold text-[var(--dark-graphite)]">
                      {fileName}
                    </p>
                  ) : (
                    <>
                      <p className="text-sm font-semibold text-[var(--dark-graphite)]">
                        Click to upload your resume
                      </p>
                      <p className="text-xs text-[var(--graphite)]/60">
                        PDF, DOC, or DOCX &mdash; max 10 MB
                      </p>
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* ─── Submit ─── */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex rounded-full bg-[var(--dark-graphite)] px-10 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-[var(--brand-red)]"
            >
              Submit Your Profile
            </button>
            <p className="mt-4 text-xs text-[var(--graphite)]/60">
              Your information is kept confidential and only shared with our
              internal team.
            </p>
          </div>
        </motion.form>
      </div>
    </main>
  );
}
