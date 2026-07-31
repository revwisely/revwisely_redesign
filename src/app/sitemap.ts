import type { MetadataRoute } from "next";
import { ORIGIN, STATIC_ROUTES, getInsightPosts } from "@/lib/site-routes";

/**
 * Generated at build time from the same content the pages read, so adding a
 * post puts it in the sitemap with no second edit and no chance of the two
 * disagreeing.
 *
 * lastModified is deliberately omitted on insight posts. blog-posts.json
 * carries no date field, and inventing one would tell crawlers a page changed
 * when it did not. An absent lastModified is honest, a wrong one is worse than
 * none.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${ORIGIN}${route.path === "/" ? "/" : route.path}`,
    priority: route.priority,
  }));

  const postEntries = getInsightPosts().map((post) => ({
    url: `${ORIGIN}/insights/${post.slug}`,
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
