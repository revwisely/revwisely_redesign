"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const featuredPost = {
  title: "The New Builder of the Revenue Engine",
  image: "/images/blog/the-new-builder.jpeg",
  slug: "the-new-builder-of-the-revenue-engine",
};

const sidebarPosts = [
  { title: "Sales Coverage Strategy", slug: "sales-coverage-strategy" },
  { title: "AI-Driven Revenue Teams", slug: "ai-driven-revenue-teams" },
  { title: "The Sales Rep of the Future", slug: "the-sales-rep-of-the-future" },
  { title: "When to Hire a Business Sales Consultant", slug: "when-to-hire-a-business-sales-consultant" },
];

const posts = [
  {
    title: "The Missing Capability Behind Most AI Initiatives",
    image: "/images/blog/missing-capability.jpeg",
    slug: "the-missing-capability-behind-most-ai-initiatives",
  },
  {
    title: "How to Build a One-Person Marketing Department",
    image: "/images/blog/one-person-marketing.png",
    slug: "how-to-build-a-one-person-marketing-department",
  },
  {
    title: "An AI GTM Engineer Should Be Your Next Marketing Hire",
    image: "/images/blog/ai-gtm-engineer.png",
    slug: "an-ai-gtm-engineer-should-be-your-next-marketing-hire",
  },
  {
    title: "Bad Revenue: When Growth Makes the Business Worse",
    image: "/images/blog/bad-revenue.png",
    slug: "bad-revenue-when-growth-makes-the-business-worse",
  },
  {
    title: "RevOps as a Competitive Advantage in the Age of AI",
    image: "/images/blog/revop-competitive-advantage.png",
    slug: "revop-as-a-competitive-advantage-in-the-age-of-ai",
  },
  {
    title: "You Think You Know. But You Don\u2019t.",
    image: "/images/blog/you-think-you-know.png",
    slug: "you-think-you-know-but-you-dont",
  },
  {
    title: "The Modern Sales Kickoff in the Age of AI",
    image: "/images/blog/modern-sales-kickoff.png",
    slug: "the-modern-sales-kickoff-in-the-age-of-ai",
  },
  {
    title: "The AI ROI Debate Is Over. Now the Work Begins.",
    image: "/images/blog/ai-roi-debate.png",
    slug: "the-ai-roi-debate-is-over-now-the-work-begins",
  },
  {
    title: "AI Year in Review 2025",
    image: "/images/blog/ai-year-review-2025.png",
    slug: "ai-year-in-review-2025",
  },
  {
    title: "How B2B SaaS Teams Should Actually Build Professional Services",
    image: "/images/blog/b2b-professional-services.png",
    slug: "how-b2b-saas-teams-should-actually-build-professional-services",
  },
  {
    title: "Launching Services as an Upmarket Strategy",
    image: "/images/blog/services-upmarket-strategy.png",
    slug: "launching-services-as-an-upmarket-strategy",
  },
  {
    title: "Customer Satisfaction Is a Revenue Strategy",
    image: "/images/blog/customer-satisfaction.png",
    slug: "customer-satisfaction-is-a-revenue-strategy",
  },
  {
    title: "The SaaS Pricing Reset",
    image: "/images/blog/saas-pricing-reset.png",
    slug: "the-saas-pricing-reset",
  },
  {
    title: "How I\u2019d Use AI to Launch a Service Business Today",
    image: "/images/blog/ai-launch-service-business.png",
    slug: "how-id-use-ai-to-launch-a-service-business-today",
  },
  {
    title: "5 Ways to Scale Your GTM Without More Headcount",
    image: "/images/blog/scale-gtm-no-headcount.png",
    slug: "5-ways-to-scale-your-gtm-without-more-headcount",
  },
  {
    title: "Why AI Isn\u2019t Working at Your Company\u2026 Yet",
    image: "/images/blog/ai-not-working-yet.png",
    slug: "why-ai-isnt-working-at-your-company-yet",
  },
  {
    title: "Stop Studying AI. Start Using It.",
    image: "/images/blog/stop-studying-ai.png",
    slug: "stop-studying-ai-start-using-it",
  },
  {
    title: "The Sales OS: How to Reclaim 8 Hours a Week for Every Rep",
    image: "/images/blog/sales-os-reclaim-hours.png",
    slug: "the-sales-os-how-to-reclaim-8-hours-a-week-for-every-rep",
  },
  {
    title: "Building Revenue-Generating AI Agents: Our System",
    image: "/images/blog/building-ai-agents.png",
    slug: "building-revenue-generating-ai-agents-our-system",
  },
];

export default function ContentPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Navbar />
      <main className="bg-white pt-24">
        <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">

          {/* Featured post title — centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="pb-10"
          >
            <a href={`/insights/${featuredPost.slug}`} className="group">
              <h1 className="text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-[var(--dark-graphite)] transition-colors duration-200 group-hover:text-[var(--brand-red)]">
                {featuredPost.title}
              </h1>
            </a>
          </motion.div>

          {/* Two-column: Featured image left + sidebar right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-20 grid items-end gap-10 lg:grid-cols-[1fr_380px]"
          >
            {/* Left — featured post image */}
            <a href={`/insights/${featuredPost.slug}`} className="group block overflow-hidden rounded-xl">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>

            {/* Right — Featured Posts sidebar */}
            <div className="rounded-2xl bg-[var(--off-white)] p-8">
              <h3 className="border-b border-[var(--light-gray)] pb-4 text-lg font-bold text-[var(--dark-graphite)]">
                Featured Posts
              </h3>
              <div className="divide-y divide-[var(--light-gray)]">
                {sidebarPosts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/insights/${post.slug}`}
                    className="block py-4 text-base font-semibold text-[var(--dark-graphite)] transition-colors duration-200 hover:text-[var(--brand-red)]"
                  >
                    {post.title}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Blog section */}
          <div className="pb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 text-2xl font-bold text-[var(--dark-graphite)]"
            >
              Blog
            </motion.h2>

            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {posts.map((post, i) => (
                <motion.a
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.04 }}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-3 text-sm font-bold leading-snug text-[var(--dark-graphite)] transition-colors duration-200 group-hover:text-[var(--brand-red)]">
                    {post.title}
                  </h3>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
