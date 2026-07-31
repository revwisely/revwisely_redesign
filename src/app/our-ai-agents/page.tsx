import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AIAgentsClient from "./AIAgentsClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Agents We Use in Production | RevWisely",
  description:
    "A living view of the AI agents we run in production across strategy, content, creative, quality, analytics, GTM outbound, video, and delivery \u2014 built on the Maestro AI Revenue System\u2122 architecture.",
  alternates: { canonical: "/our-ai-agents" },
};

export default function AIAgentsPage() {
  return (
    <>
      <Navbar />
      <AIAgentsClient />
      <Footer />
    </>
  );
}
