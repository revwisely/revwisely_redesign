import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | RevWisely",
  description:
    "Revenue strategy, AI-native operations, and GTM insights from the RevWisely team.",
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
