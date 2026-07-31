import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import OperationalVisibilityClient from "./OperationalVisibilityClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Study: Operational Visibility & AI-Enabled Customer Ops | RevWisely",
  description:
    "How RevWisely embedded fractional Business Operations leadership to create executive visibility across 20+ initiatives at a vertical SaaS and fintech company.",
  alternates: { canonical: "/case-study/operational-visibility" },
};

export default function OperationalVisibilityPage() {
  return (
    <>
      <Navbar />
      <OperationalVisibilityClient />
      <Footer />
    </>
  );
}
