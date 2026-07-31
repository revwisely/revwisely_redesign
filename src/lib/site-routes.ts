import blogData from "@/data/blog-posts.json";

/**
 * One source of truth for what the site contains, so the sitemap and llms.txt
 * cannot disagree with each other or fall behind the content.
 *
 * Insight slugs are DERIVED from blog-posts.json rather than listed. That file
 * is the same one /insights and /insights/[slug] read, so a post added there
 * shows up in both machine surfaces with no second edit. Hand-maintained URL
 * lists go stale the first week nobody remembers them.
 *
 * Static routes are listed explicitly because Next gives no runtime way to
 * enumerate the route tree, and a wrong guess here is a URL that 404s in a
 * sitemap. Add a page, add a line.
 */

export const ORIGIN = "https://www.revwisely.com";

type BlogPost = { title: string; slug: string; content: unknown };

export type Route = {
  path: string;
  /** Relative weight within this site only. Not a ranking factor. */
  priority: number;
  label?: string;
};

export const STATIC_ROUTES: Route[] = [
  { path: "/", priority: 1.0, label: "Home" },
  { path: "/maestro", priority: 0.9, label: "Maestro AI Revenue System" },
  { path: "/revenue-architecture", priority: 0.9, label: "Revenue Architecture" },
  { path: "/our-ai-agents", priority: 0.9, label: "Our AI Agents" },
  { path: "/outcome-pricing", priority: 0.8, label: "Outcome Pricing" },
  { path: "/fractional-leadership", priority: 0.8, label: "Fractional Leadership" },
  { path: "/case-study", priority: 0.8, label: "Case Studies" },
  { path: "/case-study/ai-native-workflows", priority: 0.7, label: "Case study, AI-native workflows" },
  { path: "/case-study/lowering-cost-of-sales", priority: 0.7, label: "Case study, lowering cost of sales" },
  { path: "/case-study/operational-visibility", priority: 0.7, label: "Case study, operational visibility" },
  { path: "/about", priority: 0.7, label: "About" },
  { path: "/insights", priority: 0.7, label: "Insights" },
  { path: "/newsletter", priority: 0.6, label: "Newsletter" },
  { path: "/talent", priority: 0.5, label: "Talent" },
  { path: "/talent/apply", priority: 0.4, label: "Apply" },
];

/** Every insight post, derived from the content file the pages themselves read. */
export function getInsightPosts(): { slug: string; title: string; excerpt: string }[] {
  const posts = Object.values(blogData as Record<string, BlogPost>);
  return posts
    .filter((p) => p && p.slug)
    .map((p) => ({
      slug: p.slug,
      title: p.title ?? p.slug,
      excerpt: firstParagraph(p.content),
    }));
}

/**
 * Post bodies are an array of typed blocks. Pull the first prose block for a
 * one-line summary, so llms.txt carries something more useful than a bare list
 * of titles. Defensive about shape, since a malformed post should degrade to an
 * empty summary rather than break the whole surface.
 */
function firstParagraph(content: unknown): string {
  if (!Array.isArray(content)) return "";
  for (const block of content) {
    if (block && typeof block === "object" && "text" in block) {
      const text = String((block as { text: unknown }).text ?? "")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      if (text.length > 60) {
        return text.length > 220 ? text.slice(0, 217).trimEnd() + "..." : text;
      }
    }
  }
  return "";
}
