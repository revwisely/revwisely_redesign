import type { Metadata } from "next";

// This layout carries the metadata because src/app/insights/page.tsx is a
// client component and cannot export it. The layout also wraps
// /insights/[slug], where these act only as a default. That route defines its
// own generateMetadata with a per-post canonical, so the index canonical below
// cannot leak onto individual posts.
export const metadata: Metadata = {
  title: "Insights | RevWisely",
  description:
    "Revenue strategy, AI-native operations, and GTM insights from the RevWisely team.",
  alternates: { canonical: "/insights" },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
