import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ApplyClient from "./ApplyClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Consultant Profile | RevWisely",
  description:
    "Complete your consultant profile to join the RevWisely talent community. We match senior practitioners to high-impact client engagements.",
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <ApplyClient />
      <Footer />
    </>
  );
}
