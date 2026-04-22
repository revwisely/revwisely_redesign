import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FLHero from "@/components/fractional-leadership/FLHero";
import FLProblem from "@/components/fractional-leadership/FLProblem";
import FLWhatThisIs from "@/components/fractional-leadership/FLWhatThisIs";
import FLResponsibilities from "@/components/fractional-leadership/FLResponsibilities";
import FLConnects from "@/components/fractional-leadership/FLConnects";
import FLWhoIsFor from "@/components/fractional-leadership/FLWhoIsFor";
import FLCTA from "@/components/fractional-leadership/FLCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fractional Sales Leadership | RevWisely",
  description:
    "Executive-level revenue leadership embedded in your business without the full-time hire. A CRO in the system, not on the sideline.",
};

export default function FractionalLeadershipPage() {
  return (
    <>
      <Navbar />
      <FLHero />
      <FLProblem />
      <FLWhatThisIs />
      <FLResponsibilities />
      <FLConnects />
      <FLWhoIsFor />
      <FLCTA />
      <Footer />
    </>
  );
}
