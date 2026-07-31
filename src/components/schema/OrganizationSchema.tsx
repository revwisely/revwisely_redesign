import { ORIGIN } from "@/lib/site-routes";

/**
 * Site-level structured data. This is how an answer engine resolves RevWisely
 * as an entity instead of inferring one from prose, and the site carried none
 * of it. Only VideoObject was present anywhere.
 *
 * Organization and WebSite are facts about the site rather than about a page, so
 * they belong on the homepage once, not repeated everywhere. Emitted as one
 * @graph so the two nodes can reference each other by @id.
 */
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${ORIGIN}/#organization`,
        name: "RevWisely",
        url: `${ORIGIN}/`,
        description:
          "RevWisely designs AI-native revenue systems that scale on structure, not headcount. Creators of the Maestro AI Revenue System.",
        knowsAbout: [
          "AI revenue systems",
          "Revenue operations",
          "Go-to-market architecture",
          "AI agents",
          "Outcome-based pricing",
          "Fractional revenue leadership",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${ORIGIN}/#website`,
        url: `${ORIGIN}/`,
        name: "RevWisely",
        publisher: { "@id": `${ORIGIN}/#organization` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
