import type { Metadata } from "next";
import blogData from "@/data/blog-posts.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostClient from "./BlogPostClient";

const data = blogData as Record<string, {
  title: string;
  slug: string;
  content: { type: string; text: string }[];
}>;

// Image map for posts that have hero images
const imageMap: Record<string, string> = {
  "why-ai-agents-underperform": "/images/blog/why-ai-agents-underperform.jpeg",
  "same-ai-four-different-jobs": "/images/blog/same-ai-four-different-jobs.jpeg",
  "the-human-premium": "/images/blog/the-human-premium.jpeg",
  "stop-training-people-to-use-ai": "/images/blog/stop-training-people-to-use-ai.jpeg",
  "the-ai-consulting-model-is-broken": "/images/blog/the-ai-consulting-model-is-broken.jpeg",
  "the-end-of-lead-lists": "/images/blog/the-end-of-lead-lists.jpeg",
  "when-meetings-start-doing-the-work": "/images/blog/when-meetings-start-doing-the-work.jpeg",
  "your-newest-team-member-is-digital": "/images/blog/your-newest-team-member-is-digital.jpeg",
  "ai-changed-the-sales-job-not-the-salesperson": "/images/blog/ai-changed-the-sales-job-not-the-salesperson.jpeg",
  "the-moment-ai-stopped-feeling-like-software": "/images/blog/the-moment-ai-stopped-feeling-like-software.jpeg",
  "how-to-choose-an-ai-workflow-transformation-partner": "/images/blog/how-to-choose-an-ai-workflow-transformation-partner.jpeg",
  "first-ai-workflow-leaves-the-nest": "/images/blog/first-ai-workflow-leaves-the-nest.jpeg",
  "your-saas-problem-isnt-saas-its-workflow-sprawl": "/images/blog/your-saas-problem-isnt-saas-its-workflow-sprawl.jpeg",
  "implementing-ai-native-workflows-week-5": "/images/blog/implementing-ai-native-workflows-week-5.jpeg",
  "the-moment-ai-stops-feeling-like-a-demo": "/images/blog/the-moment-ai-stops-feeling-like-a-demo.jpeg",
  "implementing-ai-native-workflows-week-3": "/images/blog/ai-native-onboarding-week-3.jpeg",
  "ai-native-onboarding-week-2": "/images/blog/ai-native-onboarding-week-2.jpeg",
  "letter-from-chris-ceo": "/images/blog/letter-from-chris-ceo.jpeg",
  "david-can-beat-goliath-again": "/images/blog/david-can-beat-goliath-again.jpeg",
  "salesforce-just-changed-the-rules": "/images/blog/salesforce-just-changed-the-rules.jpeg",
  "the-cro-ceo-relationship-is-broken": "/images/blog/the-cro-ceo-relationship-is-broken.jpeg",
  "the-new-builder-of-the-revenue-engine": "/images/blog/the-new-builder.jpeg",
  "the-missing-capability-behind-most-ai-initiatives": "/images/blog/missing-capability.jpeg",
  "how-to-build-a-one-person-marketing-department": "/images/blog/one-person-marketing.png",
  "an-ai-gtm-engineer-should-be-your-next-marketing-hire": "/images/blog/ai-gtm-engineer.png",
  "bad-revenue-when-growth-makes-the-business-worse": "/images/blog/bad-revenue.png",
  "revop-as-a-competitive-advantage-in-the-age-of-ai": "/images/blog/revop-competitive-advantage.png",
  "you-think-you-know-but-you-dont": "/images/blog/you-think-you-know.png",
  "the-modern-sales-kickoff-in-the-age-of-ai": "/images/blog/modern-sales-kickoff.png",
  "the-ai-roi-debate-is-over-now-the-work-begins": "/images/blog/ai-roi-debate.png",
  "ai-year-in-review-2025": "/images/blog/ai-year-review-2025.png",
  "how-b2b-saas-teams-should-actually-build-professional-services": "/images/blog/b2b-professional-services.png",
  "launching-services-as-an-upmarket-strategy": "/images/blog/services-upmarket-strategy.png",
  "customer-satisfaction-is-a-revenue-strategy": "/images/blog/customer-satisfaction.png",
  "the-saas-pricing-reset": "/images/blog/saas-pricing-reset.png",
  "how-id-use-ai-to-launch-a-service-business-today": "/images/blog/ai-launch-service-business.png",
  "5-ways-to-scale-your-gtm-without-more-headcount": "/images/blog/scale-gtm-no-headcount.png",
  "why-ai-isnt-working-at-your-company-yet": "/images/blog/ai-not-working-yet.png",
  "stop-studying-ai-start-using-it": "/images/blog/stop-studying-ai.png",
  "the-sales-os-how-to-reclaim-8-hours-a-week-for-every-rep": "/images/blog/sales-os-reclaim-hours.png",
  "building-revenue-generating-ai-agents-our-system": "/images/blog/building-ai-agents.png",
  "ai-gtm-engineer-job-description": "/images/blog/ai-gtm-engineer-job-description.jpeg",
  "ai-doesnt-fail-leadership-does": "/images/blog/ai-doesnt-fail-leadership-does.jpeg",
  "the-ai-trap-that-most-companies-fall-into": "/images/blog/ai-trap-companies-fall-into.jpeg",
  "tie-ai-to-value-before-you-build": "/images/blog/tie-ai-to-value-before-you-build.png",
  "a-speed-quality-price-reality-check": "/images/blog/a-speed-quality-price-reality-check.png",
  "stop-guessing-your-ai-roadmap": "/images/blog/stop-guessing-your-ai-roadmap.png",
  "get-ai-literate": "/images/blog/get-ai-literate.png",
  "loyalty-hangs-in-the-balance": "/images/blog/loyalty-hangs-in-the-balance.png",
  "hiring-guide-ai-skills-every-sales-rep-must-have": "/images/blog/hiring-guide-ai-skills-every-sales-rep-must-have.png",
  "why-most-ai-fails-and-how-to-make-sure-yours-doesnt": "/images/blog/why-most-ai-fails-and-how-to-make-sure-yours-doesnt.png",
  "ai-first-revenue-growth-how-small-teams-win-big": "/images/blog/ai-first-revenue-growth-how-small-teams-win-big.png",
  "can-ai-deliver-smarter-territory-planning-yes": "/images/blog/can-ai-deliver-smarter-territory-planning-yes.png",
  "what-is-fake-ai-and-how-to-spot-it": "/images/blog/what-is-fake-ai-and-how-to-spot-it.png",
  "5-plays-every-cro-must-master": "/images/blog/5-plays-every-cro-must-master.png",
  "the-vp-of-sales-who-saves-or-sinks-you": "/images/blog/the-vp-of-sales-who-saves-or-sinks-you.png",
  "7-strategies-to-cut-the-cost-of-sales--without-killing-growth": "/images/blog/7-strategies-to-cut-the-cost-of-sales--without-killing-growth.png",
  "how-to-stand-out-in-a-crowded-market": "/images/blog/how-to-stand-out-in-a-crowded-market.png",
  "ai-gold-or-fools-gold": "/images/blog/ai-gold-or-fools-gold.png",
  "im-a-cro-these-are-my-top-chatgpt-use-cases": "/images/blog/im-a-cro-these-are-my-top-chatgpt-use-cases.png",
  "rethink-how-work-gets-done-with-ai": "/images/blog/rethink-how-work-gets-done-with-ai.png",
  "software-sales-efficiency-blueprint-part-2": "/images/blog/software-sales-efficiency-blueprint-part-2.png",
  "gamechanger-ai-project-consultant-for-smbs": "/images/blog/gamechanger-ai-project-consultant-for-smbs.png",
  "software-sales-efficiency-blueprint-part-3": "/images/blog/software-sales-efficiency-blueprint-part-3.png",
  "how-to-build-a-modern-sales-channel-program": "/images/blog/how-to-build-a-modern-sales-channel-program.png",
  "how-to-build-durable-advantage-in-the-age-of-ai": "/images/blog/how-to-build-durable-advantage-in-the-age-of-ai.png",
  "week-to-minutes-how-ai-fixes-the-broken-market-research-process": "/images/blog/week-to-minutes-how-ai-fixes-the-broken-market-research-process.png",
  "automating-ai-workflows-with-n8n-a-real-world-example-for-b2b-sales-enablement": "/images/blog/automating-ai-workflows-with-n8n-a-real-world-example-for-b2b-sales-enablement.png",
  "5-automations-that-move-the-needle-for-operations": "/images/blog/5-automations-that-move-the-needle-for-operations.png",
  "how-to-create-urgency-in-software-sales": "/images/blog/how-to-create-urgency-in-software-sales.png",
  "the-modern-sales-playbook-2025-edition": "/images/blog/the-modern-sales-playbook-2025-edition.png",
  "top-challenges-vexing-cros-today": "/images/blog/top-challenges-vexing-cros-today.png",
  "want-to-appear-in-llm-results-follow-these-5-steps": "/images/blog/want-to-appear-in-llm-results-follow-these-5-steps.png",
  "sales-enablement-is-dead-its-buyer-enablement-now": "/images/blog/sales-enablement-is-dead-its-buyer-enablement-now.png",
  "19-genai-use-cases-for-customer-success-teams": "/images/blog/19-genai-use-cases-for-customer-success-teams.png",
  "how-to-build-a-software-renewal-program": "/images/blog/how-to-build-a-software-renewal-program.png",
  "software-sales-efficiency-blueprint-part-1": "/images/blog/software-sales-efficiency-blueprint-part-1.png",
  "stopping-happy-ears-a-guide-for-sales-leaders": "/images/blog/stopping-happy-ears-a-guide-for-sales-leaders.png",
  "mastering-sales-pipeline-management-for-steady-growth": "/images/blog/mastering-sales-pipeline-management-for-steady-growth.png",
  "ai-automation-fuels-profitable-growth-in-2025": "/images/blog/ai-automation-fuels-profitable-growth-in-2025.png",
  "fight-complexity-why-simplicity-matters": "/images/blog/fight-complexity-why-simplicity-matters.png",
  "optimizing-upselling-and-cross-selling-with-data-analytics": "/images/blog/optimizing-upselling-and-cross-selling-with-data-analytics.png",
  "achieve-more-with-one-unifying-go-to-market-message": "/images/blog/achieve-more-with-one-unifying-go-to-market-message.png",
  "how-sales-vps-can-use-ai-to-bootstrap-revenue-growth": "/images/blog/how-sales-vps-can-use-ai-to-bootstrap-revenue-growth.png",
  "6-ai-critical-success-factors-for-revenue-leaders": "/images/blog/6-ai-critical-success-factors-for-revenue-leaders.png",
  "ai-adoption--which-company-are-you": "/images/blog/ai-adoption--which-company-are-you.png",
  "20-gen-ai-use-cases-for-sales-teams": "/images/blog/20-gen-ai-use-cases-for-sales-teams.png",
  "ai-ops-lab-streamline-revenue-operations": "/images/blog/ai-ops-lab-streamline-revenue-operations.png",
  "how-sales-and-marketing-teams-become-ai-native": "/images/blog/how-sales-and-marketing-teams-become-ai-native.png",
  "how-to-get-sales-unstuck-strategies-for-overcoming-stagnation-and-driving-growth": "/images/blog/how-to-get-sales-unstuck-strategies-for-overcoming-stagnation-and-driving-growth.png",
  "how-to-create-an-ai-assisted-lead-generation-engine": "/images/blog/how-to-create-an-ai-assisted-lead-generation-engine.png",
  "the-psychology-behind-building-a-strong-sales-culture": "/images/blog/the-psychology-behind-building-a-strong-sales-culture.png",
  "unlock-early-stage-growth-for-startups-with-fractional-sales-leadership": "/images/blog/unlock-early-stage-growth-for-startups-with-fractional-sales-leadership.png",
  "innovative-new-training-methods-for-sales-team": "/images/blog/innovative-new-training-methods-for-sales-team.png",
  "how-sales-leaders-can-navigate-uncertainty-and-maintain-momentum-in-times-of-crisis": "/images/blog/how-sales-leaders-can-navigate-uncertainty-and-maintain-momentum-in-times-of-crisis.png",
  "failure-is-a-blessing-how-sales-setbacks-can-fuel-insight-and-learning": "/images/blog/failure-is-a-blessing-how-sales-setbacks-can-fuel-insight-and-learning.png",
  "breaking-down-silos-how-to-build-a-cohesive-sales-and-marketing-team": "/images/blog/breaking-down-silos-how-to-build-a-cohesive-sales-and-marketing-team.png",
  "the-psychology-of-color-in-sales-presentations": "/images/blog/the-psychology-of-color-in-sales-presentations.png",
  "the-art-of-storytelling-in-sales": "/images/blog/the-art-of-storytelling-in-sales.png",
  "harnessing-the-power-of-referrals-the-quickest-most-reliable-way-to-grow-sales": "/images/blog/harnessing-the-power-of-referrals-the-quickest-most-reliable-way-to-grow-sales.png",
  "mapping-the-customer-journey-how-b2b-saas-companies-can-identify-and-fix-pain-points": "/images/blog/mapping-the-customer-journey-how-b2b-saas-companies-can-identify-and-fix-pain-points.png",
  "gamification-in-sales-leadership-innovative-ways-to-boost-motivation": "/images/blog/gamification-in-sales-leadership-innovative-ways-to-boost-motivation.png",
  "the-evolution-of-revenue-enablement-beyond-traditional-sales-support": "/images/blog/the-evolution-of-revenue-enablement-beyond-traditional-sales-support.png",
  "sales-strategies-for-staying-resilient-during-economic-downturns": "/images/blog/sales-strategies-for-staying-resilient-during-economic-downturns.png",
  "creative-destruction-hits-the-sdr-role": "/images/blog/creative-destruction-hits-the-sdr-role.png",
  "automate-everything-between-sales-meetings": "/images/blog/automate-everything-between-sales-meetings.png",
  "science-of-the-deal-review": "/images/blog/science-of-the-deal-review.png",
  "the-new-gtm-playbook": "/images/blog/the-new-gtm-playbook.png",
  "how-fractional-sales-leaders-can-drive-your-companys-revenue-growth": "/images/blog/how-fractional-sales-leaders-can-drive-your-companys-revenue-growth.png",
  "b2b-growth-marketing-tactics": "/images/blog/b2b-growth-marketing-tactics.png",
  "what-is-sales-enablement": "/images/blog/what-is-sales-enablement.png",
  "sales-enablement-best-practices-of-top-performing-companies": "/images/blog/sales-enablement-best-practices-of-top-performing-companies.png",
  "the-top-5-qualities-of-highly-effective-sales-leaders": "/images/blog/the-top-5-qualities-of-highly-effective-sales-leaders.png",
  "how-content-marketing-drives-sales-growth": "/images/blog/how-content-marketing-drives-sales-growth.png",
  "the-best-practices-that-make-account-executives-great": "/images/blog/the-best-practices-that-make-account-executives-great.png",
  "10-strategies-for-motivating-your-sales-team": "/images/blog/10-strategies-for-motivating-your-sales-team.png",
  "how-modern-sales-pros-work-smarter-not-harder": "/images/blog/how-modern-sales-pros-work-smarter-not-harder.png",
  "calculating-the-roi-of-sales-consultants": "/images/blog/calculating-the-roi-of-sales-consultants.png",
  "account-segmentation": "/images/blog/account-segmentation.png",
  "why-you-need-design-thinking-to-develop-ai-solutions": "/images/blog/why-you-need-design-thinking-to-develop-ai-solutions.png",
  "how-ai-can-give-marketers-a-critical-boost": "/images/blog/how-ai-can-give-marketers-a-critical-boost.png",
  "how-to-start-the-ai-journey-a-common-dilemma": "/images/blog/how-to-start-the-ai-journey-a-common-dilemma.png",
  "ai-is-remaking-revenue-enablement": "/images/blog/ai-is-remaking-revenue-enablement.png",
  "fractional-sales-leadership-is-here": "/images/blog/fractional-sales-leadership-is-here.png",
  "recognize-saas-sprawl": "/images/blog/recognize-saas-sprawl.png",
  "ignite-ai-workshop": "/images/blog/ignite-ai-workshop.png",
  "ai-predicts-the-top-10-ai-trends-in-2024": "/images/blog/ai-predicts-the-top-10-ai-trends-in-2024.png",
  "avoid-common-hubspot-missteps": "/images/blog/avoid-common-hubspot-missteps.png",
  "building-a-champion-within-your-prospects-organization": "/images/blog/building-a-champion-within-your-prospects-organization.png",
  "how-cros-and-sales-vps-use-ai-for-revenue-growth": "/images/blog/how-cros-and-sales-vps-use-ai-for-revenue-growth.png",
  "ready-to-hire-your-first-sales-vp-or-not-quite": "/images/blog/ready-to-hire-your-first-sales-vp-or-not-quite.png",
  "how-ai-is-accelerating-the-push-for-efficiency-in-customer-success": "/images/blog/how-ai-is-accelerating-the-push-for-efficiency-in-customer-success.png",
  "6-qualities-make-sales-managers-great": "/images/blog/6-qualities-make-sales-managers-great.png",
  "the-10-best-ai-hacks-for-sales-ops-leaders": "/images/blog/the-10-best-ai-hacks-for-sales-ops-leaders.png",
  "the-ultimate-guide-to-project-management-and-technical-program-management": "/images/blog/the-ultimate-guide-to-project-management-and-technical-program-management.png",
  "the-ultimate-guide-to-product-led-growth": "/images/blog/the-ultimate-guide-to-product-led-growth.png",
  "master-technical-program-management": "/images/blog/master-technical-program-management.png",
  "application-data": "/images/blog/application-data.png",
  "the-ultimate-guide-to-growing-channel-sales": "/images/blog/the-ultimate-guide-to-growing-channel-sales.png",
  "creating-the-modern-b2b-ecommerce-experience": "/images/blog/creating-the-modern-b2b-ecommerce-experience.png",
  "most-b2b-content-falls-short-and-sales-suffer": "/images/blog/most-b2b-content-falls-short-and-sales-suffer.png",
  "the-ultimate-guide-to-social-media-marketing": "/images/blog/the-ultimate-guide-to-social-media-marketing.png",
  "voice-of-the-customer": "/images/blog/voice-of-the-customer.png",
  "price-waterfall": "/images/blog/price-waterfall.png",
  "a-step-by-step-guide-to-building-a-sales-channel-program": "/images/blog/a-step-by-step-guide-to-building-a-sales-channel-program.png",
  "impact-personalization-marketing": "/images/blog/impact-personalization-marketing.png",
  "revenue-operations-faq": "/images/blog/revenue-operations-faq.png",
  "the-ultimate-guide-to-digital-marketing": "/images/blog/the-ultimate-guide-to-digital-marketing.png",
  "saas-application-sprawl": "/images/blog/saas-application-sprawl.png",
  "sales-channel": "/images/blog/sales-channel.png",
  "using-emotion-to-make-sales-presentations-great": "/images/blog/using-emotion-to-make-sales-presentations-great.png",
  "future-of-sales-prospecting": "/images/blog/future-of-sales-prospecting.png",
  "collaborative-drag-and-5-steps-leaders-can-take-to-avoid-it": "/images/blog/collaborative-drag-and-5-steps-leaders-can-take-to-avoid-it.png",
  "the-risk-of-doing-nothing-is-bigger-than-you-think": "/images/blog/the-risk-of-doing-nothing-is-bigger-than-you-think.jpeg",
};

// Posts whose hero is a click-to-play video instead of a still image.
const videoMap: Record<
  string,
  { src: string; poster: string; duration: string; uploadDate: string }
> = {
  "the-future-belongs-to-ai-workflow-companies": {
    src: "/videos/ai-workflow-hero.mp4",
    poster: "/images/ai-workflow-hero-poster.jpg",
    duration: "PT27S",
    uploadDate: "2026-07-27",
  },
  // Poster is the post's original still, so the insights card and the post hero match.
  "why-ai-agents-underperform": {
    src: "/videos/why-ai-agents-underperform.mp4",
    poster: "/images/blog/why-ai-agents-underperform.jpeg",
    duration: "PT31.5S",
    uploadDate: "2026-09-08",
  },
  "same-ai-four-different-jobs": {
    src: "/videos/same-ai-four-different-jobs.mp4",
    poster: "/images/blog/same-ai-four-different-jobs.jpeg",
    duration: "PT29S",
    uploadDate: "2026-08-31",
  },
  "the-human-premium": {
    src: "/videos/the-human-premium.mp4",
    poster: "/images/blog/the-human-premium.jpeg",
    duration: "PT30S",
    uploadDate: "2026-08-24",
  },
  "how-to-make-ai-videos-that-dont-look-like-ai": {
    src: "/videos/plugin-capability-reel.mp4",
    poster: "/images/blog/how-to-make-ai-videos-that-dont-look-like-ai.jpeg",
    duration: "PT42S",
    uploadDate: "2026-08-12",
  },
};

// Share/Open Graph image per slug. Falls back to the post's hero still.
// Video posts have no imageMap entry, so their share image lives here.
const shareImageMap: Record<string, string> = {
  "the-future-belongs-to-ai-workflow-companies":
    "/images/blog/the-future-belongs-to-ai-workflow-companies.jpeg",
  "how-to-make-ai-videos-that-dont-look-like-ai":
    "/images/blog/how-to-make-ai-videos-that-dont-look-like-ai.jpeg",
};

export function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = data[slug];

  if (!post) {
    return { title: "Post not found | RevWisely" };
  }

  const firstParagraph = post.content.find((b) => b.type === "paragraph")?.text ?? "";
  const description =
    firstParagraph.length > 160
      ? `${firstParagraph.slice(0, 157).trimEnd()}…`
      : firstParagraph;

  const shareImage = shareImageMap[slug] || imageMap[slug] || null;
  const title = `${post.title} | RevWisely`;

  return {
    title,
    description,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: `/insights/${slug}`,
      ...(shareImage ? { images: [{ url: shareImage }] } : {}),
    },
    twitter: {
      card: shareImage ? "summary_large_image" : "summary",
      title: post.title,
      description,
      ...(shareImage ? { images: [shareImage] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = data[slug];

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center bg-white pt-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[var(--dark-graphite)]">Post not found</h1>
            <a href="/insights" className="mt-4 inline-block text-[var(--brand-red)] hover:underline">
              Back to Insights
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const image = imageMap[slug] || null;
  const videoMeta = videoMap[slug] || null;
  const video = videoMeta ? { src: videoMeta.src, poster: videoMeta.poster } : null;

  const videoJsonLd = videoMeta
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: post.title,
        thumbnailUrl: videoMeta.poster,
        contentUrl: videoMeta.src,
        duration: videoMeta.duration,
        uploadDate: videoMeta.uploadDate,
      }
    : null;

  return (
    <>
      {videoJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
        />
      )}
      <Navbar />
      <BlogPostClient
        title={post.title}
        content={post.content}
        image={image}
        video={video}
      />
      <Footer />
    </>
  );
}
