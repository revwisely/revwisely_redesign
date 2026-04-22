import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TalentClient from "./TalentClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Talent | RevWisely",
  description:
    "Join a close-knit team of strategic doers. We partner with senior consultants, analysts, and engineers who want to do meaningful work inside complex, high-impact client environments.",
};

export default function TalentPage() {
  return (
    <>
      <Navbar />
      <TalentClient />
      <Footer />
    </>
  );
}
