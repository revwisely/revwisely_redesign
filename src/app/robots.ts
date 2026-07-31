import type { MetadataRoute } from "next";
import { ORIGIN } from "@/lib/site-routes";

/**
 * revwisely.com served no robots.txt at all, so crawler policy was whatever
 * each crawler assumed. Allowing everything is the same posture either way, but
 * stated rather than inferred.
 *
 * Every AI agent below is named deliberately. RevWisely publishes case studies
 * and implementation writing, and being quotable by an answer engine is the
 * point of publishing it. A structured overview lives at /llms.txt.
 */
export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot-Extended",
    "CCBot",
  ];

  return {
    rules: [
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${ORIGIN}/sitemap.xml`,
  };
}
