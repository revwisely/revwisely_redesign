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
};

export function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }));
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

  return (
    <>
      <Navbar />
      <BlogPostClient title={post.title} content={post.content} image={image} />
      <Footer />
    </>
  );
}
