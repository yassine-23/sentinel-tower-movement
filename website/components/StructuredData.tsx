export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "Earth's Immune System",
    alternateName: 'Sentinel Tower Movement',
    description:
      'An open founding coalition repurposing retired wind turbine blades into wildfire response infrastructure. The method is published open-source; the coalition seeks technical validation, institutional partners, blade suppliers, and a first measurable pilot.',
    url: 'https://earthsimmunesystem.com',
    foundingDate: '2025',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@earthsimmunesystem.com',
      contactType: 'General Inquiries',
      availableLanguage: ['English'],
    },
    sameAs: ['https://github.com/yassine-23/sentinel-tower-movement'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is the sentinel tower system deployed today?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not yet. The method is published as an open-source blueprint with a fully cited data dossier. The founding coalition is seeking technical validation, institutional partners, blade suppliers, and a host for a first measurable pilot. No performance claims will be made until they are measured in the field and published.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does the method propose?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Repurposing decommissioned wind turbine blades — which owners currently pay to bury or downcycle — as vertical sentinel masts on buried water-tank foundations, arranged in a lattice through fire-prone landscapes. Each node pre-positions sensing, water, and drone response inside the forest, targeting detection-to-first-drop in under ten minutes. That figure is a design target, not a measured result.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why wind turbine blades?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Roughly 43 million tonnes of blade waste is projected worldwide by 2050, and owners pay substantial sums per blade for disposal. Peer-reviewed research and built precedents (blade bridges in Ireland and Poland, a blade power-pole in Kansas) show decommissioned blades retain excellent structural properties, making them a negative-cost mast material.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
