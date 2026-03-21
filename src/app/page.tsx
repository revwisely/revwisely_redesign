import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HomeProblemSection from "@/components/home/HomeProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import HomeMetricsSection from "@/components/home/HomeMetricsSection";
import HomeServicesSection from "@/components/home/HomeServicesSection";
import HomeTestimonialsSection from "@/components/home/HomeTestimonialsSection";
import WhySection from "@/components/home/WhySection";
import MaestroTeaser from "@/components/home/MaestroTeaser";
import HomeCTASection from "@/components/home/HomeCTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RevWisely | Revenue Should Scale With Systems, Not Headcount",
  description:
    "We design revenue systems that scale with AI built in from day one. Fractional leadership, revenue architecture, and the Maestro AI Revenue System.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHeroSection />
      <HomeProblemSection />
      <SolutionSection />
      <HomeMetricsSection />
      <HomeServicesSection />
      <HomeTestimonialsSection />
      <WhySection />
      <MaestroTeaser />
      <HomeCTASection />
      <Footer />
    </>
  );
}
