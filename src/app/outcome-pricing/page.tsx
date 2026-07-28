import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import OutcomePricingClient from "./OutcomePricingClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Outcome Pricing™ | RevWisely",
  description:
    "RevWisely created Outcome Pricing™ so customers pay for results, not time. Payments are tied to production-ready AI workflows delivered — not billable hours.",
};

export default function OutcomePricingPage() {
  return (
    <>
      <Navbar />
      <OutcomePricingClient />
      <Footer />
    </>
  );
}
