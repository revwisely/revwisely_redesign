import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import RAHero from "@/components/revenue-architecture/RAHero";
import RAProblemSection from "@/components/revenue-architecture/RAProblemSection";
import RAWhatWeBuild from "@/components/revenue-architecture/RAWhatWeBuild";
import RADeliverablesSection from "@/components/revenue-architecture/RADeliverablesSection";
import RAHowWeWork from "@/components/revenue-architecture/RAHowWeWork";
import RAWhatChanges from "@/components/revenue-architecture/RAWhatChanges";
import RAMaestroConnect from "@/components/revenue-architecture/RAMaestroConnect";
import RAWhoIsFor from "@/components/revenue-architecture/RAWhoIsFor";
import RACTA from "@/components/revenue-architecture/RACTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Revenue Infrastructure | RevWisely",
  description:
    "We design and deploy the RevOps foundation inside your business. Sales processes, CRM, automation, tech stack, and dashboards — all in production, all running.",
  alternates: { canonical: "/revenue-architecture" },
};

export default function RevenueArchitecturePage() {
  return (
    <>
      <Navbar />
      <RAHero />
      <RAProblemSection />
      <RAWhatWeBuild />
      <RADeliverablesSection />
      <RAHowWeWork />
      <RAWhatChanges />
      <RAMaestroConnect />
      <RAWhoIsFor />
      <RACTA />
      <Footer />
    </>
  );
}
