import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutClient from "./AboutClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | RevWisely",
  description:
    "RevWisely is a revenue consulting firm built for how growth works now — with AI at the center, not bolted on after the fact.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutClient />
      <Footer />
    </>
  );
}
