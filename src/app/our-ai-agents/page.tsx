import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AIAgentsClient from "./AIAgentsClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Agents We Use in Production | RevWisely",
  description:
    "A living view of the AI agents we run in production across strategy, content, creative, quality, and analytics \u2014 built on the Maestro AI Revenue System\u2122 architecture.",
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
