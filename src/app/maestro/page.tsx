import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MaestroHero from "@/components/maestro/MaestroHero";
import SetupSection from "@/components/maestro/SetupSection";
import OldWaySection from "@/components/maestro/OldWaySection";
import NewWaySection from "@/components/maestro/NewWaySection";
import WhatMaestroIsSection from "@/components/maestro/WhatMaestroIsSection";
import MaestroHowItWorks from "@/components/maestro/MaestroHowItWorks";
import WhatChangesSection from "@/components/maestro/WhatChangesSection";
import MaestroDeliverablesSection from "@/components/maestro/MaestroDeliverablesSection";
import WhoIsForSection from "@/components/maestro/WhoIsForSection";
import MaestroCTA from "@/components/maestro/MaestroCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Maestro AI Revenue System | RevWisely",
  description:
    "Signal detection, intelligence, and execution working as one system across your entire revenue operation. Built for companies that want to scale revenue without scaling complexity.",
};

export default function MaestroPage() {
  return (
    <>
      <Navbar />
      <MaestroHero />
      <SetupSection />
      <OldWaySection />
      <NewWaySection />
      <WhatMaestroIsSection />
      <MaestroHowItWorks />
      <WhatChangesSection />
      <MaestroDeliverablesSection />
      <WhoIsForSection />
      <MaestroCTA />
      <Footer />
    </>
  );
}
