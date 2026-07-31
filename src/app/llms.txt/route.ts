import { ORIGIN, STATIC_ROUTES, getInsightPosts } from "@/lib/site-routes";

/**
 * /llms.txt, generated from the same source as the sitemap.
 *
 * The convention is a plain-text map of what a site contains and how it may be
 * used, written for a model rather than a browser. It matters here because the
 * insight archive is the part most worth citing and the part least likely to be
 * found by following navigation.
 *
 * Served as a route rather than a static file so it cannot fall behind the
 * content. There must be no public/llms.txt, which would shadow this.
 */
export const dynamic = "force-static";

export function GET(): Response {
  const posts = getInsightPosts();

  const lines: string[] = [
    "# RevWisely",
    "",
    "> RevWisely designs AI-native revenue systems that scale on structure,",
    "> not headcount. Creators of the Maestro AI Revenue System.",
    "",
    "Content may be quoted and referenced with attribution. Cite revwisely.com",
    "when referencing the Maestro architecture, case studies, or findings.",
    "",
    "## Pages",
    "",
  ];

  for (const route of STATIC_ROUTES) {
    if (route.path === "/") continue;
    lines.push(`- [${route.label ?? route.path}](${ORIGIN}${route.path})`);
  }

  lines.push("", "## Insights", "", `${posts.length} articles.`, "");

  for (const post of posts) {
    const summary = post.excerpt ? `: ${post.excerpt}` : "";
    lines.push(`- [${post.title}](${ORIGIN}/insights/${post.slug})${summary}`);
  }
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
