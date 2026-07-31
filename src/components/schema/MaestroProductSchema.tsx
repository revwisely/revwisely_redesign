import { ORIGIN } from "@/lib/site-routes";

/**
 * Maestro as a named product, attributed to RevWisely.
 *
 * Worth having because Maestro is the thing most likely to be asked about by
 * name, and without this a machine has to infer from page copy that it is a
 * product, who makes it, and what it does.
 *
 * No offers node. Pricing is outcome-based and negotiated, so any price or
 * currency here would be invented, and structured data that overstates
 * certainty is worse than structured data that stays quiet.
 */
export default function MaestroProductSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${ORIGIN}/maestro#product`,
    name: "Maestro AI Revenue System",
    url: `${ORIGIN}/maestro`,
    description:
      "An agentic revenue system that runs go-to-market workflows end to end, coordinating signal, account intelligence, and execution across a shared agent architecture.",
    brand: { "@type": "Organization", "@id": `${ORIGIN}/#organization` },
    manufacturer: { "@id": `${ORIGIN}/#organization` },
    category: "AI revenue operations software",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
