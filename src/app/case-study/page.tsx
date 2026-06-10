import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CaseStudyLandingClient from "./CaseStudyLandingClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Studies | RevWisely",
  description:
    "Real engagements where RevWisely partnered with companies to redesign operations, build systems, and deliver measurable impact.",
};

export default function CaseStudyPage() {
  return (
    <>
      <Navbar />
      <CaseStudyLandingClient />
      <Footer />
    </>
  );
}
