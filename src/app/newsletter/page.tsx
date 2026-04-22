import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import NewsletterClient from "./NewsletterClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Newsletter | RevWisely",
  description:
    "Subscribe to the RevWisely newsletter for insights on AI-powered revenue systems, RevOps, and go-to-market strategy.",
};

export default function NewsletterPage() {
  return (
    <>
      <Navbar />
      <NewsletterClient />
      <Footer />
    </>
  );
}
