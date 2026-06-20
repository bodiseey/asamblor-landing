import LandingPage from "@/components/landing/LandingPage";

const SITE_URL = "https://www.asamblor.com";

const FAQ = [
  {
    q: "What does Asamblor actually do for a trucking fleet?",
    a: "Asamblor is a done-for-you acquisition engine for trucking companies. We build, run, and own the recruiting pipeline that finds, vets, and routes verified owner-operators or CDL drivers directly into your CRM — using multi-channel outbound (email, SMS, web forms, telephony) layered on top of 4.5M+ verified carrier records from the CarrieX database.",
  },
  {
    q: "How is Asamblor different from a driver recruiting agency?",
    a: "Traditional agencies charge $750+ per signed driver and own the leads, the domains, and the data. Asamblor charges a flat monthly fee with a projected cost per signed owner-operator under $50, and every domain, mailbox, CRM pipeline, and historical lead is yours to keep. You stop renting leads and start owning the infrastructure.",
  },
  {
    q: "Where does the owner-operator data come from?",
    a: "Asamblor is powered by CarrieX (carriex.io), our sister product — a proprietary trucking data platform with 4.5M+ verified carrier records including authority status, equipment, insurance, out-of-service status, and verified contact information. We don't buy lists; we own the data layer.",
  },
  {
    q: "How many outbound touches per month does Asamblor send?",
    a: "A standard Asamblor pipeline delivers up to 75,000 targeted outbound touches per month across email, SMS, and web forms. Volume scales with sending domain count, mailbox warmup status, and the size of the ICP filter applied through CarrieX.",
  },
  {
    q: "Is Asamblor's outreach TCPA and CAN-SPAM compliant?",
    a: "Yes. Email sequences include physical mailing address, single-click unsubscribe, and proper SPF/DKIM/DMARC. SMS is 10DLC or toll-free registered per jurisdiction and only fires after an explicit interest signal (email reply or link click), staying within TCPA's express-consent boundaries for B2B outreach.",
  },
  {
    q: "How long does it take to launch a pipeline?",
    a: "From kickoff to first live outbound: typically 14–21 days. That window covers ICP onboarding, CarrieX data extraction, sending-stack provisioning (domains, mailboxes, DNS), CRM pipeline build, and the initial domain warmup window required for high inbox placement.",
  },
  {
    q: "What's a lease-on owner-operator and why target them?",
    a: "A lease-on owner-operator is an independent contractor who owns their truck but runs freight under a motor carrier's MC/DOT authority. The carrier earns 10–25% of load revenue without buying equipment, hiring company drivers, or taking financing risk — making lease-on the fastest asset-light growth channel for trucking companies.",
  },
];

export default function Home() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Asamblor",
    legalName: "CarrieX Labs LLC",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    description:
      "Done-for-you acquisition infrastructure for trucking fleets — owner-operator and CDL driver recruiting pipelines powered by 4.5M+ verified carrier records.",
    foundingDate: "2024",
    sameAs: ["https://carriex.io"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "1012 Marquez Place, Ste. 106-B",
      addressLocality: "Santa Fe",
      addressRegion: "NM",
      postalCode: "87505",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "office@asamblor.com",
        availableLanguage: ["English"],
        areaServed: ["US", "CA"],
      },
      {
        "@type": "ContactPoint",
        contactType: "privacy",
        email: "privacy@asamblor.com",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "legal",
        email: "legal@asamblor.com",
        availableLanguage: ["English"],
      },
    ],
    knowsAbout: [
      "Owner-operator recruiting",
      "CDL driver recruiting",
      "Trucking outbound marketing",
      "CRM pipeline engineering",
      "Lease-on driver acquisition",
      "Cold email infrastructure",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Asamblor",
    description:
      "Acquisition infrastructure for modern trucking fleets — built, run, and owned for you.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/#service`,
    name: "Asamblor — Trucking Acquisition Infrastructure",
    serviceType: "Done-for-you owner-operator and CDL driver recruiting",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    audience: { "@type": "BusinessAudience", audienceType: "Trucking fleet owners, motor carriers, logistics companies" },
    description:
      "End-to-end recruiting pipeline for trucking companies: ICP onboarding, CarrieX data mining (4.5M+ records), outbound infrastructure (75,000+ monthly touches), CRM pipeline engineering, and real-time qualified-lead routing.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        description: "Flat monthly retainer — projected cost per signed owner-operator under $50.",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Recruiting pipeline tracks",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Owner-operator lease-on pipeline" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "CDL company driver pipeline" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trucking service-provider B2B pipeline" } },
      ],
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#faq .lp-faq-item summary", "#faq .lp-faq-item div"],
    },
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${SITE_URL}/#howto`,
    name: "How Asamblor builds your acquisition infrastructure",
    description: "Six-stage done-for-you process to launch a motor-carrier acquisition pipeline.",
    totalTime: "P21D",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "750" },
    tool: [
      { "@type": "HowToTool", name: "CarrieX trucking data platform" },
      { "@type": "HowToTool", name: "Email sending infrastructure (SPF/DKIM/DMARC)" },
      { "@type": "HowToTool", name: "10DLC-registered SMS" },
    ],
    step: [
      { "@type": "HowToStep", name: "Onboarding & targeting", text: "We interview the client to capture the exact ICP: authority type, lanes, trailer types, fleet-size filters, geographic targeting, authority age, OOS status." },
      { "@type": "HowToStep", name: "Data mining via CarrieX", text: "Mine 4.5M+ verified trucking records to produce a clean, deduped, verified list of carriers and owner-operators matching the ICP exactly." },
      { "@type": "HowToStep", name: "Outbound infrastructure build", text: "Provision sending domains, warm mailboxes, configure SPF/DKIM/DMARC, register 10DLC telephony, build vetting forms and CRM pipeline." },
      { "@type": "HowToStep", name: "Multi-channel engagement", text: "Run up to 75,000 targeted outbound touches per month across email, SMS, and web forms; SMS fires only on explicit intent signals." },
      { "@type": "HowToStep", name: "CRM pipeline & automation", text: "Qualified leads land in the client's CRM with full context, automations handle stage transitions and re-engagement." },
      { "@type": "HowToStep", name: "Real-time team notifications", text: "Bots ping the recruiter, dispatcher, or ops team the moment a hot lead replies or a vetting form is submitted." },
    ],
  };

  const founder = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    name: "George Bodistean",
    jobTitle: "Founder",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    sameAs: ["https://carriex.io"],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, founder, website, service, faq, howTo, breadcrumb],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <LandingPage faq={FAQ} />
    </>
  );
}
