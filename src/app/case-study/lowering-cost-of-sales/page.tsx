import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import LoweringCostClient from "./LoweringCostClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Study: Lowering Cost of Sales at a Life Sciences Software Company | RevWisely",
  description:
    "How RevWisely reduced sales expense from 43% to 28% of revenue and increased profitability 5x by redesigning the revenue system at a life sciences software company.",
};

export default function LoweringCostOfSalesPage() {
  return (
    <>
      <Navbar />
      <LoweringCostClient />
      <Footer />
    </>
  );
}
