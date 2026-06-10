import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CaseStudyClient from "./CaseStudyClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Study: Moving to AI-Native Workflows | RevWisely",
  description:
    "How RevWisely cut operational costs 30–50% and accelerated workflows 2–5x by redesigning revenue operations as a unified, AI-native system.",
};

export default function AINativeWorkflowsPage() {
  return (
    <>
      <Navbar />
      <CaseStudyClient />
      <Footer />
    </>
  );
}
