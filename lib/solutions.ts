export type Solution = {
  slug: string;
  name: string;
  short: string; // one-liner used in nav/list
  audience: string; // who in trucking buys from them
  hero: {
    eyebrow: string;
    headlineWhite: string;
    headlineGrey: string;
    sub: string;
  };
  metaTitle: string; // <title>
  metaDescription: string;
  painPoints: { title: string; body: string }[]; // 3
  whyAsamblor: { title: string; body: string }[]; // 4
  carriexFilters: string[]; // 6-8 specific CarrieX filter examples
  sampleTarget: {
    label: string; // e.g. "Sample ICP — Single-truck owner-operators with <24mo MC, Midwest"
    filters: { k: string; v: string }[]; // 4-6 k/v
    estimatedRecords: string; // e.g. "~62,000 verified contacts"
  };
  exampleOutreach?: {
    subject: string;
    body: string;
  }; // kept in data for internal reference; not rendered publicly
  faqs: { q: string; a: string }[]; // 4-5
  related: string[]; // slugs of related solutions
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "owner-operator-recruiting",
    name: "Owner-Operator Recruiting",
    short: "Add lease-on owner-operators to your fleet — asset-light, no agency commissions.",
    audience: "Motor carriers, dispatch authorities, and asset carriers scaling fleet capacity through lease-on owner-operators rather than buying trucks or hiring company drivers.",
    hero: {
      eyebrow: "For motor carriers & dispatch authorities",
      headlineWhite: "Add lease-on owner-operators to your fleet—",
      headlineGrey: "asset-light, no agency commissions.",
      sub: "The fastest way to scale a motor-carrier revenue base without buying iron, hiring company drivers, or paying $750+ per signed driver to an agency. Asamblor owns the data layer, runs the outbound, and routes interested owner-ops directly into your CRM.",
    },
    metaTitle: "Owner-Operator Recruiting — Done-For-You Acquisition Infrastructure",
    metaDescription: "Scale your lease-on owner-operator fleet without job boards or agency fees. Asamblor builds and runs your outbound pipeline using 4.5M+ verified carrier records from CarrieX.",
    painPoints: [
      { title: "Agency fees destroy fleet-growth margins", body: "Driver-recruiting agencies charge $750+ per signed owner-operator. Add 50 owner-ops to your authority and you've burned $37K+ — money that should fund another truck, dispatcher, or back-office hire." },
      { title: "Job boards return ghost leads", body: "DAT, Truckstop, and indeed-style boards generate volume, not quality. Most applicants are tire-kickers, already signed, or never had the truck they claimed. Recruiters waste 60–80% of their week chasing leads that don't sign." },
      { title: "The best owner-ops aren't shopping", body: "Owner-operators who run consistent freight aren't browsing job boards — they're already moving for another authority that's underpaying them or has wrong-direction freight. You have to reach them directly, with a specific lease-on offer, at the right moment." },
    ],
    whyAsamblor: [
      { title: "Own the data layer", body: "CarrieX surfaces 4.5M+ verified owner-operator records with authority age, equipment type, OOS status, domicile, and active operating area. No buying lists from third-party brokers." },
      { title: "Authority-age + equipment match", body: "Filter for owner-ops with the right MC age (most carriers prefer 180-day+ active authorities), the equipment you dispatch (reefer, dry van, flatbed, step-deck), and a clean OOS history. Outreach reaches only carriers your dispatch can actually use." },
      { title: "Vetting forms route ready-to-sign leads", body: "Replies land in your CRM with MC#, USDOT#, equipment, insurance carrier, current lane preference, and percentage-vs-mileage preference. Your driver-recruiter opens a 'ready to send paperwork' call, not a discovery call." },
      { title: "You own the infrastructure forever", body: "Domains, mailboxes, CRM pipelines, vetting forms, and the historical lead database all stay yours. When the engagement ends, you keep a permanent business asset — not a list you rented." },
    ],
    carriexFilters: [
      "Power-unit count (1–2 = owner-ops, 3–10 = small-fleet partnerships)",
      "MC authority age (sweet spot: 180–730 days)",
      "Trailer / equipment type (dry van, reefer, flatbed, step-deck, power-only)",
      "Domicile state + operating area / lane match",
      "Out-of-service status",
      "Last known inspection date + result",
      "Authority status (active, clean, no recent revocations)",
      "Driver count vs. power units (isolate true owner-drivers)",
    ],
    sampleTarget: {
      label: "Sample ICP — Single-truck reefer owner-operators with MC active 6–24 months, operating in TX, OK, LA, AR, MS",
      filters: [
        { k: "Power units", v: "1" },
        { k: "Equipment", v: "Reefer" },
        { k: "MC age", v: "180–730 days" },
        { k: "Operating area", v: "TX, OK, LA, AR, MS" },
        { k: "OOS status", v: "Clean" },
        { k: "Driver count", v: "1 (true owner-driver)" },
      ],
      estimatedRecords: "~4,200 verified owner-ops",
    },
    exampleOutreach: {
      subject: "{{first_name}} — lease-on opportunity for {{mc_number}} (consistent reefer freight)",
      body:
        "Quick one. Your MC ({{mc_number}}) shows {{days_since_active}} days active running reefer out of {{state}}. We're {{carrier_name}} ({{carrier_mc}}) and we have steady reefer freight on the lanes you already run — looking to add 3–5 owner-ops to our authority this quarter.\n\nPercentage: {{pct_offered}}, weekly settlements, fuel discount, plate program, no forced dispatch.\n\nIf this fits, 60-second intake to get the conversation started: {{intake_link}}\n\nReply STOP to opt out anytime.",
    },
    faqs: [
      { q: "How is this different from a driver-recruiting agency?", a: "Agencies charge $750+ per signed owner-op and own the leads, domains, and data. Asamblor charges a flat monthly retainer (projected cost per signed owner-op under $50) and every domain, mailbox, CRM pipeline, and historical lead is yours to keep. You stop renting recruiting and start owning acquisition infrastructure." },
      { q: "How many owner-ops can you typically sign per month?", a: "Depends entirely on your offer (percentage, lane mix, settlement terms) and the size of your ICP. A typical mid-market motor carrier with a competitive package and a regional ICP signs 8–25 owner-ops per month from a single Asamblor pipeline after the first 60-day ramp." },
      { q: "Can you target by equipment type?", a: "Yes — build separate pipelines per equipment. Reefer owner-ops, flatbed owner-ops, step-deck, and power-only each get different sequences with equipment-specific lane and rate positioning. Different domains, different copy, much higher reply rates than generic outreach." },
      { q: "What if we want to grow beyond owner-ops into CDL company drivers?", a: "Asamblor runs both pipelines in parallel — see our [CDL driver hiring solution](/solutions/cdl-driver-hiring). Different audience (individual drivers vs. independent MCs), different sourcing channels, but the same outbound infrastructure and CRM." },
      { q: "How long until first signed owner-op?", a: "Typical timeline: 14–21 days from kickoff to first live outbound (covers ICP onboarding, CarrieX data extraction, domain warmup, CRM build). First signed owner-op usually lands in weeks 3–6 depending on offer competitiveness." },
    ],
    related: ["cdl-driver-hiring", "factoring-companies", "compliance-consultants"],
  },

  {
    slug: "cdl-driver-hiring",
    name: "CDL Truck Driver Hiring",
    short: "Fill seats with vetted CDL company drivers — done-for-you, owned by you.",
    audience: "Motor carriers and fleet operators that need to hire CDL company drivers (CDL-A and CDL-B) for OTR, regional, dedicated, and local routes — and want a real acquisition pipeline instead of paying per-applicant on job boards.",
    hero: {
      eyebrow: "For motor carriers hiring CDL drivers",
      headlineWhite: "Truck driver hiring infrastructure—",
      headlineGrey: "built, run, and owned for your fleet.",
      sub: "Same Asamblor delivery model that powers owner-operator acquisition, applied to driver hiring. We mine CarrieX for the right audience, run multi-channel outbound on your behalf, and deliver qualified driver applicants directly into your CRM. You stop renting Indeed clicks and start owning a driver-acquisition engine.",
    },
    metaTitle: "Truck Driver Hiring Infrastructure — Done-For-You CDL Recruiting Pipeline",
    metaDescription: "Asamblor builds and runs CDL truck driver hiring pipelines for motor carriers. Mined from CarrieX, delivered multi-channel, routed straight into your CRM — without per-applicant board fees.",
    painPoints: [
      { title: "Job boards burn cash on tire-kickers", body: "Indeed, ZipRecruiter, and TruckersReport charge $50–$120 per applicant. Of those, 40–60% never reply, 20% don't have a valid CDL, and the rest are already in someone else's pipeline. Real cost-per-hire on boards alone runs $1,500–$4,000+." },
      { title: "Recruiters can't scale geographic hiring", body: "You need drivers in specific terminals or operating regions, not nationwide blasts. Boards don't filter by home-base radius the way you actually hire. Recruiters spend hours sorting applicants who would never accept the run." },
      { title: "Wrong-fit hires destroy retention math", body: "A driver hired without matching lane, pay structure, or home-time expectations churns in 60–120 days at $5K–$15K per loss. Without a targeting layer, the same boards that filled the seat refill it three months later." },
    ],
    whyAsamblor: [
      { title: "Same engine as owner-op recruiting — different mining strategy", body: "Asamblor's outbound infrastructure (sending domains, mailbox warmup, 10DLC SMS, CRM pipelines, vetting forms, recruiter routing) is identical to our owner-op pipeline. What changes is the CarrieX mining strategy — we build the driver audience around carrier hiring signals, fleet driver-to-power-unit ratios, geographic operating data, and equipment match." },
      { title: "Geo-targeted by terminal and operating region", body: "Driver pipelines are built around your terminals or operating regions, not nationally. Home-base radius targeting (50/100/200 miles) is the single biggest predictor of driver acceptance and retention." },
      { title: "Equipment + endorsement match before reply", body: "Every campaign filters for the right CDL class, endorsements (hazmat, tanker, doubles/triples, TWIC), equipment experience (reefer, flatbed, tanker, OTR/regional/dedicated), and experience tier. Your recruiter receives applicants who actually fit the job description." },
      { title: "DQ-file-ready intake", body: "Replies route through a vetting form capturing CDL class + state, endorsements, experience years, MVR consent, accident/violation history, home-base ZIP, and run-type preference. Your recruiter opens a qualification call, not an introduction." },
    ],
    carriexFilters: [
      "Carrier hiring intent signals (under-driver fleets, recent driver turnover)",
      "Drivers-employed vs. power-units ratio (sourcing-gap indicator)",
      "Equipment type the carrier operates (dry van, reefer, flatbed, tanker, doubles)",
      "Carrier domicile + operating area (matches your terminal radius)",
      "Authority age + carrier maturity (active hiring vs. retention plays)",
      "Recent OOS / driver-violation history (turnover proxy)",
      "Commodity / endorsement requirements per route",
      "Owner-operators considering a transition to company-driver roles (highest-converting candidate pool)",
    ],
    sampleTarget: {
      label: "Sample ICP — CDL-A driver outreach centered on Atlanta, GA: 200-mile home-base radius, dry van + reefer, 1+ year experience, clean MVR",
      filters: [
        { k: "CDL class", v: "CDL-A" },
        { k: "Home-base radius", v: "200 miles from Atlanta, GA" },
        { k: "Experience", v: "≥ 1 year (no student drivers)" },
        { k: "Equipment match", v: "Dry van or reefer" },
        { k: "Endorsements", v: "Optional: hazmat, tanker" },
        { k: "MVR / accident history", v: "Clean (no accidents last 3 years)" },
      ],
      estimatedRecords: "~3,800 sourcing-eligible candidates per cohort",
    },
    exampleOutreach: {
      subject: "{{first_name}} — CDL-A run out of {{home_city}}: weekly home time, {{pay_rate}}",
      body:
        "Quick one, {{first_name}}. We&apos;re {{carrier_name}} and we&apos;re hiring CDL-A drivers based in {{home_metro}} for {{run_type}} freight ({{equipment}}). Pay is {{pay_rate}} with weekly home time, no-touch freight, late-model {{truck_year}} equipment, full benefits.\n\nIf this fits, here&apos;s a 4-minute intake — we send a full CDL application after: {{intake_link}}\n\nNot looking right now? Reply STOP and you won&apos;t hear from us again.",
    },
    faqs: [
      { q: "Is this the same as your owner-operator recruiting service?", a: "Same delivery infrastructure (outbound, CRM, vetting forms, recruiter routing) — different audience and a different CarrieX mining strategy. Owner-op pipelines reach independent MCs offering lease-on opportunities. Driver-hiring pipelines reach CDL drivers (including owner-ops considering a company-driver role) for company-driver roles. Many motor carriers run both in parallel." },
      { q: "How is this different from Indeed, ZipRecruiter, or DriveMyWay?", a: "Job boards charge per applicant ($50–$120 each); real cost-per-hire ends up $1,500–$4,000+ with the tire-kicker rate. Asamblor charges a flat monthly retainer, runs outbound + paid channels under one engine, and the entire pipeline + CRM stays yours. Cost-per-hire typically drops 40–60% within 90 days." },
      { q: "Can you target by terminal location or home-base ZIP?", a: "Yes — geographic targeting is the single most important filter for company-driver hiring. Pipelines are built around your terminals or operating region, with radius targeting (50/100/200 miles) tuned to your retention data." },
      { q: "Can we run both owner-op and CDL pipelines at the same time?", a: "Yes — and most growing motor carriers do exactly that. Owner-op recruiting fills the asset-light track; CDL hiring fills company-driver capacity. Same Asamblor delivery, two separate sequences, shared CRM. See the [owner-operator recruiting solution](/solutions/owner-operator-recruiting) for the lease-on side." },
      { q: "What about DOT regulatory compliance?", a: "Outbound complies with CAN-SPAM (email) and TCPA / 10DLC (SMS) by default. Once a driver applies through the vetting form, DOT regulatory steps (DQ file, MVR pull, drug screen, road test) remain your responsibility — Asamblor delivers a vetted applicant, you handle the hiring compliance." },
    ],
    related: ["owner-operator-recruiting", "cdl-schools", "compliance-consultants"],
  },

  {
    slug: "freight-brokers",
    name: "Freight Brokers",
    short: "Onboard the right carriers for your lanes before competitors do.",
    audience: "3PLs, freight brokerages, and digital load boards selling capacity to motor carriers.",
    hero: {
      eyebrow: "For freight brokers & 3PLs",
      headlineWhite: "Onboard the right carriers for your lanes—",
      headlineGrey: "before competitors do.",
      sub: "Reach active MC authorities with the trailer types, lanes, and authority age you actually want to onboard. Skip the load-board bidding war and build a private carrier book.",
    },
    metaTitle: "Asamblor for Freight Brokers — Carrier Acquisition Pipeline",
    metaDescription: "Build a private carrier book of active MCs matched to your lanes and trailer types. Cold-outbound from 4.5M+ verified CarrieX records, with onboarding-ready vetting forms.",
    painPoints: [
      { title: "Load-board bid wars eat margin", body: "DAT and Truckstop bids race rates to the floor. The carriers you actually want to work with regularly aren't refreshing the board every 90 seconds — they're already moving for someone else's brokerage." },
      { title: "Carrier packets are a one-shot deal", body: "When you finally reach a carrier with the right lane, they need to be onboarded today, not next week. Manual MC verification, insurance pulls, and W-9 collection slows the relationship to a crawl." },
      { title: "Churn destroys the broker book", body: "A carrier who hauls one load and ghosts is worse than no carrier. Without filtering for active operating history, fleet size, and trailer match, you waste onboarding time on dead authorities." },
    ],
    whyAsamblor: [
      { title: "Filter by trailer + lane + authority age", body: "Pull lists of carriers with reefer, flatbed, step-deck, or power-only by state, lane, fleet size, and MC age — no scraping, no stale data." },
      { title: "Onboarding-ready vetting forms", body: "Every reply lands in your CRM with MC#, DOT#, insurance carrier, trailer type, and lane preferences pre-captured. No back-and-forth before first load." },
      { title: "Build a private carrier book", body: "Replace bid-wars with a renewable database of carriers who already responded to your outreach. Same engine reaches owner-operators and small fleets that never refresh load boards." },
      { title: "Compliance handled", body: "Email infrastructure is SPF/DKIM/DMARC-correct on day one; SMS is 10DLC-registered; opt-outs flow back into a single suppression list across all brokerages on the platform." },
    ],
    carriexFilters: [
      "MC authority age (days / years since granted)",
      "Trailer type (dry van, reefer, flatbed, step-deck, power-only, tanker, hazmat)",
      "Fleet size (power units owned, drivers employed)",
      "Domicile state + operating radius",
      "Active out-of-service status",
      "Insurance carrier + filing status",
      "Last known inspection date",
      "Authority type (motor carrier of property vs. freight forwarder)",
    ],
    sampleTarget: {
      label: "Sample ICP — Reefer carriers, 2–8 power units, Texas/Oklahoma domicile, MC active 6–36 months",
      filters: [
        { k: "Trailer type", v: "Reefer" },
        { k: "Fleet size", v: "2–8 power units" },
        { k: "Domicile", v: "TX, OK" },
        { k: "MC age", v: "180–1095 days" },
        { k: "OOS status", v: "Active (not out of service)" },
      ],
      estimatedRecords: "~14,800 verified MCs",
    },
    exampleOutreach: {
      subject: "Reefer lanes out of Laredo — recurring weekly volume",
      body:
        "Quick one: I run carrier sales at [Brokerage] and we've picked up recurring reefer freight out of Laredo into the Midwest. Looking at your MC ({{mc_number}}) and your equipment mix, this looks like a clean lane fit.\n\nRather than ping you on the load board, would you rather get a private email when these come open?\n\nIf yes, here's a 60-second carrier packet so we're set up before the next one drops: {{vetting_link}}",
    },
    faqs: [
      { q: "How do you avoid reaching carriers that bought a paper MC?", a: "We filter on authority age, last inspection date, and operating history pulled from CarrieX. Dormant or recycled authorities are exactly the noise we cut — if an MC hasn't shown an inspection or insurance filing in 12+ months, it doesn't go in the outbound list." },
      { q: "Can we exclude carriers we already onboarded?", a: "Yes. Upload your existing carrier book (MC# or DOT#) as a suppression list. We dedupe at the campaign level, so existing carriers never see the outbound — they only see your normal lane offers." },
      { q: "How fast can we onboard a carrier who replies?", a: "Replies land in your CRM with MC#, DOT#, insurance carrier, equipment, and contact data pre-filled from the vetting form and CarrieX enrichment. A dispatcher can verify and book the same day." },
      { q: "Does this replace our load-board spend?", a: "Most clients keep load boards for spot freight and use Asamblor to build the carrier book that handles their recurring lanes. The two work in parallel — load boards are reactive; Asamblor is proactive." },
    ],
    related: ["dispatch-services", "factoring-companies", "compliance-consultants"],
  },

  {
    slug: "insurance-sales",
    name: "Commercial Trucking Insurance",
    short: "Hit new-authority and renewal-window carriers at the exact moment they shop.",
    audience: "Independent insurance agencies and MGAs writing commercial auto liability for motor carriers.",
    hero: {
      eyebrow: "For commercial trucking insurance",
      headlineWhite: "Hit new-authority and renewal-window carriers—",
      headlineGrey: "at the exact moment they shop.",
      sub: "New MCs spend $8K–$18K in year one. At year-2 renewal, brokers who shop save them 20–40%. Asamblor reaches both windows on autopilot, with insurance-grade compliance filters.",
    },
    metaTitle: "Asamblor for Trucking Insurance Brokers — New Authority + Renewal Outreach",
    metaDescription: "Reach new MC authorities and renewal-window carriers with timed cold outreach from 4.5M+ verified CarrieX records. Filter by authority age, OOS status, and insurance filing.",
    painPoints: [
      { title: "Renewal windows are invisible", body: "By the time a carrier asks for a quote, they've already collected three from competitors. Without authority-age tracking and filing-date triggers, you only see the carriers who walked into your office — never the ones you should have called first." },
      { title: "New MCs are gold but hard to find", body: "Brand-new authorities need a $750K–$1M policy before they can move freight. The agency that calls them in the first 30 days writes the book. Without a real-time data layer, you only hear about new MCs after a competitor has already quoted them." },
      { title: "OOS recoveries need fast outreach", body: "Carriers coming off out-of-service status are often re-shopping insurance because their old carrier dropped them. That window is 7–14 days. Manual prospecting misses it every time." },
    ],
    whyAsamblor: [
      { title: "Authority-age + renewal triggers", body: "We segment MCs by days since authority granted, days to insurance-filing renewal, and recent OOS recovery — so your outbound hits the exact 30-day window when a carrier is shopping." },
      { title: "Trailer + commodity filters", body: "Build separate funnels for general freight, reefer, hazmat, auto-hauler, and flatbed — your underwriting appetite drives the targeting, not a one-size-fits-all blast." },
      { title: "Multi-channel without TCPA risk", body: "Email opens the door; SMS only fires after the carrier clicks or replies — staying inside TCPA's express-consent boundary for B2B follow-up." },
      { title: "Quote-ready vetting form", body: "Every reply captures MC#, USDOT#, current carrier, expiration date, garaging state, and power-unit count — your underwriter quotes from a clean intake, not a discovery call." },
    ],
    carriexFilters: [
      "Authority age — granted in last 30/60/90 days",
      "BOC-3 / MCS-150 filing dates",
      "Insurance carrier on file (BMC-91 / 91X filings)",
      "Days to insurance-filing renewal",
      "Recent OOS status changes (within last 14/30 days)",
      "Commodity hauled (general freight, reefer, hazmat, auto, household goods)",
      "Power-unit count + drivers employed",
      "Garaging state + operating area",
    ],
    sampleTarget: {
      label: "Sample ICP — Newly-active MCs in TX, FL, GA, NC; 1–5 power units; general freight; activated in the last 45 days",
      filters: [
        { k: "Authority status", v: "Active, activated in last 45 days" },
        { k: "States", v: "TX, FL, GA, NC" },
        { k: "Power units", v: "1–5" },
        { k: "Commodity", v: "General freight (not hazmat)" },
        { k: "Current insurance", v: "Filed but not yet renewed" },
      ],
      estimatedRecords: "~3,200 newly-activated MCs/month",
    },
    exampleOutreach: {
      subject: "{{first_name}} — quick question on your insurance at MC #{{mc_number}}",
      body:
        "I'm not going to pitch — just a fast question. Your authority shows ~{{days_since_active}} days active and the BMC-91 is filed with {{current_carrier}}.\n\nMost new authorities renew their first policy 20–40% lower the second year if they shop. We work with Progressive, Sentry, and Great West and write that segment every week.\n\nWorth a 5-min quote when you're inside 60 days of renewal? Reply RENEW and we'll send a short intake form.",
    },
    faqs: [
      { q: "Is cold outreach to motor carriers compliant?", a: "Verified business contact data on motor carriers is public B2B information. We use it for outreach to the business contact on file in CarrieX, with CAN-SPAM-compliant email (physical mailing address, single-click unsubscribe) and TCPA-compliant SMS (10DLC-registered, only after express interest signal)." },
      { q: "Can we target only the carriers in our appetite?", a: "Yes. We build a separate pipeline per appetite — e.g. general freight 1–5 power units in your states, vs. hazmat 6+ power units. Different sending domains keep deliverability healthy per segment." },
      { q: "How many MCs activate per month nationally?", a: "Roughly 6,000–8,000 new motor carrier authorities activate per month nationally. Filtered through CarrieX by commodity, state, and power-unit count, a typical insurance agency's appetite covers 1,500–3,500 of those per month — exactly the volume Asamblor is built for." },
      { q: "What happens to opt-outs?", a: "STOP, UNSUBSCRIBE, and email unsubscribe clicks flow into a single suppression list applied across every campaign on the platform. A carrier who opts out never sees your name again, even if they appear in a future ICP pull." },
    ],
    related: ["compliance-consultants", "factoring-companies", "freight-brokers"],
  },

  {
    slug: "fuel-card-providers",
    name: "Fuel Card Programs",
    short: "Get cards in the hands of the small fleets and owner-ops that fuel the most.",
    audience: "Fuel-card programs, fuel network providers, and discount-fuel networks selling to motor carriers.",
    hero: {
      eyebrow: "For fuel card programs",
      headlineWhite: "Get cards in the hands of the carriers—",
      headlineGrey: "that actually fuel the most.",
      sub: "Fuel is 30%+ of an owner-operator's cost. The carriers with the highest annual gallons aren't searching for fuel cards — they're moving freight. Asamblor reaches them by route, fleet size, and equipment.",
    },
    metaTitle: "Asamblor for Fuel Card Providers — Targeted Carrier Acquisition",
    metaDescription: "Sign more owner-operators and small fleets to your fuel card program with outbound built on 4.5M+ verified CarrieX records. Filter by lane, fleet size, and annual fuel volume estimates.",
    painPoints: [
      { title: "The biggest fuel buyers don't shop", body: "An owner-operator running 120K miles/year on diesel doesn't have time to compare fuel cards — they take what their last broker or factor handed them. Reaching them requires going to them, not waiting for inbound." },
      { title: "Geographic relevance is everything", body: "Your network only helps carriers who actually run your lanes. A card with great Pilot/Flying J coverage is irrelevant to a carrier running TA/Petro lanes — but generic outreach can't tell the difference." },
      { title: "Card-program activation needs trust", body: "Carriers don't sign up for fuel cards from cold emails alone. The sales cycle needs follow-up via SMS, a real human callback, and a quick application — and most providers can't operationalize all three." },
    ],
    whyAsamblor: [
      { title: "Lane + network match", body: "Filter carriers by domicile state and typical operating radius, then match to your strongest network coverage. A carrier running TX→GA reefer is a different funnel than a Pacific Northwest dry-van fleet." },
      { title: "Volume proxy filtering", body: "Power-unit count × typical operating radius × commodity gives a usable annual-gallons estimate. Target the carriers most likely to push $5K–$50K monthly through a card, not the dormant ones." },
      { title: "Multi-channel close", body: "Email → SMS → vetting form → application link → recruiter callback. Each step pre-qualifies and reduces the friction your application team handles." },
      { title: "Partner-product upsell ready", body: "Once a carrier is in your CRM, the same engine can layer maintenance discounts, factoring partnerships, and roadside-service offers — without spinning up new sending infrastructure." },
    ],
    carriexFilters: [
      "Domicile state + operating radius",
      "Fleet size (power units)",
      "Commodity / trailer type",
      "MC age (mature fleets with stable spend)",
      "Authority status (active, not out of service)",
      "Estimated annual mileage band",
      "Carrier classification (interstate vs. intrastate)",
      "Existing factoring relationship (for joint-offer pitches)",
    ],
    sampleTarget: {
      label: "Sample ICP — Owner-operators and 2–5 unit fleets, dry van + reefer, domiciled in the Midwest, MC active 1+ year",
      filters: [
        { k: "Fleet size", v: "1–5 power units" },
        { k: "Equipment", v: "Dry van or reefer" },
        { k: "Domicile", v: "IL, IN, OH, MI, WI, MO" },
        { k: "MC age", v: "≥ 365 days" },
        { k: "OOS status", v: "Clean" },
      ],
      estimatedRecords: "~47,500 verified carriers",
    },
    exampleOutreach: {
      subject: "Are you saving $0.30+/gal at {{network_brand}} yet?",
      body:
        "Short and direct, {{first_name}}.\n\nMost carriers your size on this lane fuel 2,500–4,500 gallons a month. Our network gives an average $0.30–$0.85/gal discount at the truck stops you already pull into ({{nearest_network_stops}}) — that's $750–$3,800/mo back in your pocket.\n\nApplication is 4 minutes, card ships in 3 days. {{apply_link}}\n\nReply STOP to opt out anytime.",
    },
    faqs: [
      { q: "Do you target by actual fuel volume?", a: "Not directly — fuel volume isn't a published carrier attribute. We use power-unit count × operating radius × commodity (all in CarrieX) as a proxy for annual gallons. It's the same model fuel-network sales teams use internally, just automated and scaled." },
      { q: "Can we run partner-offer campaigns?", a: "Yes. Once a carrier signs the card, the same CRM and outbound infrastructure can promote partner products (maintenance, factoring, roadside). Same engine, additional revenue streams without rebuilding deliverability." },
      { q: "How do you avoid getting blacklisted by fleet-card competitors?", a: "We never scrape competitor card-program member lists. CarrieX pulls only from public regulatory and state-level authority filings — so your outbound is to the carrier, not to a competitor's customer list." },
      { q: "Can SMS be used for fuel-card promotions?", a: "Yes, but only after the carrier has signaled interest (email reply or click). 10DLC-registered numbers, opt-out language on every send, and same-day STOP processing keep the program inside TCPA limits for B2B follow-up." },
    ],
    related: ["factoring-companies", "truck-stops", "compliance-consultants"],
  },

  {
    slug: "dispatch-services",
    name: "Dispatch Services",
    short: "Sign owner-operators who need a dispatcher today—not next quarter.",
    audience: "Independent dispatch services and dispatch agencies working under their own MC or as 1099 dispatchers for owner-operators.",
    hero: {
      eyebrow: "For dispatch services",
      headlineWhite: "Sign owner-operators who need a dispatcher today—",
      headlineGrey: "not next quarter.",
      sub: "The owner-op who just lost their broker, or just got their MC, is the highest-LTV customer you'll ever sign. Reach them in the first 14 days, before another dispatcher does.",
    },
    metaTitle: "Asamblor for Dispatch Services — Owner-Operator Acquisition Pipeline",
    metaDescription: "Reach owner-operators in their first 90 days of authority, or right after they exit a brokerage relationship. Outbound built on 4.5M+ verified CarrieX records.",
    painPoints: [
      { title: "Owner-ops sign with the first dispatcher who calls", body: "A new owner-op with an active MC and no freight is a customer for life — IF you reach them first. Most dispatch services are still posting Facebook ads and hoping; the smart ones call the carrier directly." },
      { title: "Referrals don't scale past 8–10 trucks", body: "Word-of-mouth gets you the first dozen owner-ops; growing past that needs systematic outbound. Dispatchers who try cold-calling burn out in 60 days." },
      { title: "Bad-fit clients destroy your margins", body: "An owner-op without consistent equipment, a clean MC, or any operating history is a churn risk that costs you more than they pay. Without filtering, you onboard one and replace them every other month." },
    ],
    whyAsamblor: [
      { title: "Target single-truck and 2-truck owner-ops", body: "Filter for power-unit count 1–2, MC age, and active authority — the exact carrier profile that needs a dispatcher but can't justify a salaried one." },
      { title: "New-MC trigger window", body: "Receive a rolling list of authorities activated in the last 14–60 days. That's the window before they sign with a 3PL or another dispatcher." },
      { title: "Equipment-type matching", body: "Your dispatchers know reefer rates and reefer lanes — or they know flatbed, or auto-haul. Build a separate pipeline per equipment type so your pitch always matches what the carrier hauls." },
      { title: "Done-for-you compliance", body: "TCPA-compliant SMS, 10DLC-registered sending, CAN-SPAM-correct email — every send is set up so you don't risk a regulatory issue on top of dispatch operations." },
    ],
    carriexFilters: [
      "Power-unit count (1–2 owner-ops, 3–5 small fleets)",
      "MC authority age (0–60 days, 60–180 days, 180–365 days)",
      "Trailer type",
      "Domicile state and operating area",
      "Out-of-service status",
      "Last known inspection",
      "Driver count (helps distinguish owner-drivers from carriers using contracted drivers)",
      "Authority status (active, not revoked, not suspended)",
    ],
    sampleTarget: {
      label: "Sample ICP — Single-truck reefer owner-operators with MC active 14–90 days, domiciled in TX, GA, FL, NC, SC",
      filters: [
        { k: "Power units", v: "1" },
        { k: "Equipment", v: "Reefer" },
        { k: "MC age", v: "14–90 days" },
        { k: "Domicile", v: "TX, GA, FL, NC, SC" },
        { k: "Authority status", v: "Active and clean" },
      ],
      estimatedRecords: "~1,800 owner-ops per 90-day cohort",
    },
    exampleOutreach: {
      subject: "Reefer lanes for {{mc_number}} — are you booking your own?",
      body:
        "Quick one, {{first_name}}.\n\nYour authority is ~{{days_since_active}} days active and you're running reefer out of {{state}}. The first 90 days is when most owner-ops either stick with a dispatcher or end up bouncing between load boards.\n\nWe dispatch reefer exclusively. Avg gross/mile for our owner-ops last month was {{benchmark_rate}}. Flat percentage, no contract.\n\n10 minutes? {{book_link}}",
    },
    faqs: [
      { q: "Can we target only owner-ops, not larger carriers?", a: "Yes — filter by power-unit count = 1 or 1–2, and drivers employed = 0 or 1. That isolates true owner-operators vs. carriers running contracted drivers." },
      { q: "What if we only dispatch one trailer type?", a: "Build separate pipelines per equipment. A reefer-only dispatch and a flatbed-only dispatch should never share the same outbound — different value props, different lane economics, different pitches." },
      { q: "How fresh is the new-MC data?", a: "FMCSA publishes new-authority data daily. CarrieX ingests and de-dupes within 24 hours, so a carrier whose MC activated on Monday is in your Wednesday outbound, not next month." },
      { q: "Do dispatched owner-ops respond to cold outreach?", a: "Yes — particularly in the first 60 days post-activation when they don't have a steady relationship. Reply rates on tightly targeted, equipment-matched outreach run 4–9% in our experience, far above generic recruiting." },
    ],
    related: ["factoring-companies", "fuel-card-providers", "compliance-consultants"],
  },

  {
    slug: "repair-shops",
    name: "Truck Repair Shops",
    short: "Build a repeat-customer base of fleets in your service radius.",
    audience: "Heavy-duty truck and trailer repair shops, mobile mechanics, and PM service providers.",
    hero: {
      eyebrow: "For truck repair shops & mobile service",
      headlineWhite: "Build a repeat-customer base of fleets—",
      headlineGrey: "inside your service radius.",
      sub: "The fleet that finds you when their truck breaks down on the side of I-80 is a one-shot customer. The fleet you reached before that breakdown becomes a 10-year account.",
    },
    metaTitle: "Asamblor for Truck Repair Shops — Geo-Targeted Fleet Acquisition",
    metaDescription: "Reach motor carriers domiciled or running through your service radius before their next breakdown. Outbound built on 4.5M+ verified CarrieX records, filtered by geography and equipment.",
    painPoints: [
      { title: "Walk-ins are random; the book never compounds", body: "A breakdown customer might never come back. Without proactive outreach to fleets in your area, your shop is rebuilding its book every quarter instead of compounding it." },
      { title: "Yellow pages and Google Maps don't reach fleet decision-makers", body: "Fleet managers and owner-ops choose shops based on referrals, prior relationships, or a known DOT inspection contact. None of that comes from a paid Google listing." },
      { title: "Mobile service is a feature you can't pitch without a list", body: "If you offer mobile repair, on-site PM, or after-hours service, that's a high-margin differentiator — but only if the fleets in your radius know you offer it. They won't find it on your website." },
    ],
    whyAsamblor: [
      { title: "Geographic radius targeting", body: "Pull carriers domiciled within 50, 100, or 250 miles of your shop — or carriers whose authority filings show operations on the corridor your shop serves." },
      { title: "Equipment-specific outreach", body: "A reefer-specialist shop and a heavy-haul/flatbed specialist need different pitches. Filter by trailer type so your outreach mentions the equipment you actually service." },
      { title: "Fleet-size segments matched to service model", body: "Owner-ops and 2-truck fleets need PM and breakdown response; 10–50 truck fleets need scheduled DOT inspections and warranty work. Different pitches, different cadence — same engine." },
      { title: "Service-call follow-up automated", body: "When a fleet replies, every contact captured (DOT#, equipment, primary driver phone) lands in your CRM. Next service interval triggers an automated 'time for PM' reminder." },
    ],
    carriexFilters: [
      "Carrier domicile state + ZIP radius",
      "Power-unit count",
      "Trailer / equipment type",
      "MC authority age (mature fleets buy more PM)",
      "OOS recent history (recent CSA flags = service demand)",
      "Last inspection date + result",
      "Hazmat / commodity (some shops can't service hazmat)",
      "Carrier classification (for-hire vs. private)",
    ],
    sampleTarget: {
      label: "Sample ICP — Carriers with 3–20 power units, dry van + reefer, domiciled within 150 miles of Atlanta, GA",
      filters: [
        { k: "Power units", v: "3–20" },
        { k: "Equipment", v: "Dry van, reefer" },
        { k: "Domicile radius", v: "150 miles from ATL (30303)" },
        { k: "MC age", v: "≥ 12 months" },
        { k: "OOS status", v: "Any (recent OOS = lead signal)" },
      ],
      estimatedRecords: "~2,400 carriers in radius",
    },
    exampleOutreach: {
      subject: "PM schedule for {{dot_number}} — clean DOT inspections in 2 hrs",
      body:
        "{{first_name}}, you run {{power_units}} trucks out of {{city}}. We do DOT inspections, PM, and after-hours emergency response within {{shop_radius}} miles — same-day appointments most weeks.\n\nLast 3 inspections at your DOT showed {{recent_violations}} — a couple of easy fixes before your next pull.\n\nWant me to send a PM calendar template + walk-in pricing? Reply YES.",
    },
    faqs: [
      { q: "How do you identify carriers in our exact service radius?", a: "CarrieX records include each carrier's principal place of business (street, ZIP). We compute distance from your shop's ZIP, filter to your radius, and only include carriers with the equipment you service." },
      { q: "Can we segment by recent OOS or CSA violations?", a: "Yes. Recent OOS status and inspection violations are tracked in CarrieX. Carriers with recent flags are higher-intent for PM and inspection services, so we can segment them into a higher-priority funnel." },
      { q: "How does this work for mobile-only service?", a: "Mobile repair is actually the strongest fit — you're selling 'no downtime' to fleets that lose $700–$1,200/day per truck out of service. Your radius is wider (operating-area, not just domicile), and the value prop is very specific." },
      { q: "What CRM integrations are supported?", a: "Most shops use Shop4D, Mitchell 1, or RepairLink for shop management. Asamblor's lead capture lands in any modern CRM (HubSpot, Pipedrive, Close, custom) — your shop management stays untouched, leads route to the right service writer." },
    ],
    related: ["tire-dealers", "equipment-suppliers", "compliance-consultants"],
  },

  {
    slug: "tire-dealers",
    name: "Commercial Tire Dealers",
    short: "Reach the fleets buying tires this quarter, before your competitor does.",
    audience: "Commercial tire dealers, retreaders, and tire-service networks selling to motor carriers.",
    hero: {
      eyebrow: "For commercial tire dealers & retreaders",
      headlineWhite: "Reach the fleets buying tires this quarter—",
      headlineGrey: "before your competitor does.",
      sub: "A mid-sized fleet replaces 80–200 commercial tires a year. The dealer who calls them before the next purchase wins the account — every other dealer gets nothing.",
    },
    metaTitle: "Asamblor for Commercial Tire Dealers — Fleet & Owner-Op Acquisition",
    metaDescription: "Reach carriers with the equipment and mileage profile that drives commercial tire turnover. Outbound from 4.5M+ verified CarrieX records, targeted by region and fleet size.",
    painPoints: [
      { title: "Tire buying happens on a schedule you can't see", body: "Fleets cycle drive tires every 250K–400K miles, steers every 100K–150K. Without knowing the fleet's age and equipment, you have no idea when a 40-truck fleet is about to issue a tire order." },
      { title: "National accounts already own the big fleets", body: "Goodyear, Michelin, and Continental have national accounts on the top 100 carriers. The opportunity is in the mid-market — 5–50 truck fleets that no national rep is calling weekly." },
      { title: "Retreads need a fleet-policy conversation", body: "Selling retread programs requires reaching the fleet maintenance manager, not whoever picks up the phone. Cold calling shop lines doesn't work; targeted email + form intake does." },
    ],
    whyAsamblor: [
      { title: "Mid-market fleet targeting", body: "Filter to fleets with 5–50 power units — too big for owner-op DIY, too small for national accounts. That's the sweet spot for independent and regional tire dealers." },
      { title: "Equipment-aware pitch", body: "Reefer fleets, flatbed fleets, and tanker fleets have different tire-spec needs and replacement intervals. Outreach mentions actual equipment, not 'your tires.'" },
      { title: "Service-radius matching", body: "Tire service is logistically local. Filter carriers domiciled within service range, or whose primary operating corridor passes through your service network." },
      { title: "Fleet-policy form intake", body: "Replies route to a vetting form that captures fleet size, equipment mix, current tire program, and next anticipated purchase window — your salesperson opens the call with the right context." },
    ],
    carriexFilters: [
      "Power-unit count (5–50 = mid-market sweet spot)",
      "Trailer / equipment type",
      "Carrier domicile + service-area radius",
      "Authority age (mature fleets with predictable purchase cycles)",
      "OOS status",
      "Operating corridor inference (lanes from inspection data)",
      "Commodity hauled",
      "Carrier classification",
    ],
    sampleTarget: {
      label: "Sample ICP — Mid-market dry van + flatbed fleets, 8–40 power units, domiciled within 300 miles of Charlotte, NC",
      filters: [
        { k: "Power units", v: "8–40" },
        { k: "Equipment", v: "Dry van, flatbed" },
        { k: "Domicile radius", v: "300 miles from Charlotte, NC" },
        { k: "MC age", v: "≥ 2 years" },
        { k: "OOS status", v: "Active and clean" },
      ],
      estimatedRecords: "~1,950 verified fleets",
    },
    exampleOutreach: {
      subject: "Next tire order for {{dot_number}} — fleet discount + retread program",
      body:
        "{{first_name}}, I work with {{shop_name}} — we run a tire program for mid-market fleets in the Carolinas. {{power_units}} trucks at your DOT, mostly {{equipment}}.\n\nWe carry Michelin, Bridgestone, Hankook, plus an in-house retread for drives. Fleet pricing is roughly $40–$120/tire below dealer list, and we do mobile mounting at your yard.\n\nWorth a 10-minute call to scope your next order? {{book_link}}",
    },
    faqs: [
      { q: "Why filter by carrier domicile vs. operating area?", a: "Tire service is delivered locally — drop-and-roll, mobile mount, or yard service. A carrier domiciled in your state is a service-able account; a carrier passing through is not." },
      { q: "Can we target by tire brand currently used?", a: "Not directly — tire brand isn't a tracked carrier attribute. But fleets in certain commodity / equipment classes (all filterable in CarrieX) have known buying patterns (e.g. refrigerated produce fleets favor specific reefer-tire SKUs). We segment by proxy and let the salesperson uncover the actual brand on the discovery call." },
      { q: "How does retread program outreach differ?", a: "Retreads need an environmental + cost-per-mile pitch. We build a separate sequence targeting fleet maintenance contacts (vs. owner-decision-makers), with subject lines like 'cost-per-mile comparison.' Different pitch, same engine." },
      { q: "What about tire-dealer franchise networks?", a: "Multi-location dealers can run a single pipeline with sub-segmentation by service location. Replies from carriers in the Charlotte radius route to Charlotte sales; Atlanta radius routes to Atlanta. One engine, multiple territories." },
    ],
    related: ["repair-shops", "equipment-suppliers", "fuel-card-providers"],
  },

  {
    slug: "factoring-companies",
    name: "Factoring Companies",
    short: "Hit new MCs and small fleets the week their cash-flow gets tight.",
    audience: "Freight factoring companies offering invoice factoring to carriers and owner-operators.",
    hero: {
      eyebrow: "For freight factoring companies",
      headlineWhite: "Hit new MCs and small fleets—",
      headlineGrey: "the week their cash flow gets tight.",
      sub: "Owner-ops on net-30 to net-90 broker terms hit a cash wall by week 6. Factoring isn't sold — it's positioned at the right moment. Asamblor reaches that moment, every week.",
    },
    metaTitle: "Asamblor for Factoring Companies — New MC & Small Fleet Acquisition",
    metaDescription: "Reach new motor carriers and 1–5 truck fleets at the moment they need same-day invoice funding. Outbound built on 4.5M+ verified CarrieX records, targeted by authority age and fleet size.",
    painPoints: [
      { title: "First-90-day cash-flow gap is invisible", body: "An owner-op activates an MC, hauls their first 3 loads, then waits 45 days for the first broker check. By week 6 they're behind on fuel and the truck payment. That's the conversation factoring should be in — and it's almost always too late." },
      { title: "Recourse vs. non-recourse needs different audiences", body: "Recourse factoring fits established owner-ops with good freight; non-recourse fits new MCs with broker-credit risk. Without segmentation, your sales team pitches the wrong product to half the leads." },
      { title: "Lost accounts go to whoever is in front of them", body: "When a carrier outgrows or sours on a factor, the next factor with a clean pitch wins. Without a constant top-of-funnel of new MCs, you lose more than you gain every quarter." },
    ],
    whyAsamblor: [
      { title: "New-MC trigger (first 14–60 days)", body: "Pull a rolling list of authorities activated in the last 14, 30, or 60 days — your highest-intent factoring leads, before your competitors get there." },
      { title: "Owner-op vs. small fleet segmentation", body: "Single-truck owner-ops need cash-flow positioning; 5–15 truck small fleets need same-day funding + fuel-advance integration. Different sequences, same database." },
      { title: "Fuel-card + factoring bundle ready", body: "Once a carrier signs your factoring, the same engine can promote fuel cards, dispatch services, and insurance partnerships — a multi-product CRM motion without rebuilding outbound for each." },
      { title: "Suppression of competitor customers", body: "If you have a list of carriers already factoring with you, we apply that as a global suppression — no cannibalization, no duplicate outreach." },
    ],
    carriexFilters: [
      "MC authority age (0–14 / 14–60 / 60–180 / 180+ days)",
      "Power-unit count (1, 1–2, 3–5, 5–15 segments)",
      "Trailer / equipment type",
      "Domicile state",
      "Authority status (active, clean, no recent revocations)",
      "Operating commodity (general freight = cleanest factoring credit)",
      "OOS recent history",
      "Carrier classification (interstate vs. intrastate)",
    ],
    sampleTarget: {
      label: "Sample ICP — Single-truck owner-ops, MC active 14–60 days, general freight, domiciled in TX, FL, GA, NC, IL",
      filters: [
        { k: "Power units", v: "1" },
        { k: "MC age", v: "14–60 days" },
        { k: "Commodity", v: "General freight" },
        { k: "Domicile", v: "TX, FL, GA, NC, IL" },
        { k: "OOS status", v: "Clean" },
      ],
      estimatedRecords: "~1,400 owner-ops per cohort",
    },
    exampleOutreach: {
      subject: "{{first_name}} — net-45 broker terms eating your week?",
      body:
        "You're {{days_since_active}} days into your authority. By now you've probably hauled 4–6 loads, and the first broker check is still floating.\n\nWe pay 96% of an invoice in 24 hours, flat 2% fee, no minimums, no contract. Recourse and non-recourse both available depending on broker credit.\n\nIf you want to keep moving without waiting on net-45, here's the 3-minute application: {{apply_link}}\n\nReply STOP to opt out.",
    },
    faqs: [
      { q: "How do you identify new MCs without buying lists?", a: "New authority activations are public regulatory events published daily. CarrieX ingests, dedupes, and structures them within 24 hours. We never buy lead lists from third-party brokers — every record comes through CarrieX from public regulatory filings." },
      { q: "Can we run different products by carrier profile?", a: "Yes. Recourse factoring to mature carriers, non-recourse to new MCs, fuel-advance bundles to high-mileage owner-ops — each gets a separate funnel with the right positioning." },
      { q: "What's the typical response rate?", a: "Tightly-targeted new-MC outreach (14–60 day window, owner-op profile, no competitor suppression overlap) runs 5–10% reply rates. Most factoring teams convert 8–18% of replies to signed applications when the intake form is short." },
      { q: "Does this work for non-recourse / spot factoring?", a: "Yes — and it's actually a cleaner fit. Spot factoring sells well to carriers with one good load and credit-risk freight; we segment by commodity and broker exposure to surface those leads." },
    ],
    related: ["fuel-card-providers", "insurance-sales", "dispatch-services"],
  },

  {
    slug: "tech-vendors",
    name: "Trucking Tech Vendors (TMS, ELD, Dashcam)",
    short: "Reach fleet decision-makers without paying $40 per lead to industry directories.",
    audience: "TMS, ELD, dashcam, telematics, route optimization, and load-board SaaS vendors selling to motor carriers.",
    hero: {
      eyebrow: "For trucking tech vendors",
      headlineWhite: "Reach fleet decision-makers directly—",
      headlineGrey: "without $40-per-lead directory fees.",
      sub: "Industry directories charge $30–$80 per click, send the same lead to 4 competitors, and never show you which fleets actually have the equipment to use your product. CarrieX does.",
    },
    metaTitle: "Asamblor for Trucking Tech Vendors — Fleet Decision-Maker Outreach",
    metaDescription: "Reach fleet operators who match your ICP (size, equipment, authority age) directly. Outbound built on 4.5M+ verified CarrieX records, no shared-lead directories.",
    painPoints: [
      { title: "Directory leads are shared 3–5 ways", body: "Buying leads from FreightWaves, Truckinginfo, or CCJ means competing with the same vendor every time. The carrier gets 5 demo requests in 48 hours and ghosts all of them." },
      { title: "Generic webinars don't filter by power-unit count", body: "Your TMS makes sense for a 25-truck fleet; it's overkill for a single owner-op. ELD compliance hits at different thresholds. Without sizing the prospect upfront, your SDR team burns 80% of calls on unqualified leads." },
      { title: "Mid-market fleets are unreachable through paid channels", body: "10–100 truck fleets don't go to TCA events, don't fill out Capterra forms, and don't click LinkedIn ads. They run the business 14 hours a day. The only way to reach them is direct outbound to the verified operations email in CarrieX." },
    ],
    whyAsamblor: [
      { title: "Fleet-size + equipment-type targeting", body: "Build separate funnels for owner-ops (1 truck, simple TMS need), small fleets (5–25 trucks, ELD + dispatch tools), and mid-market (25–200 trucks, full TMS + telematics + safety platform)." },
      { title: "Authority age + technology adoption proxy", body: "Newer MCs are more open to modern SaaS (no legacy systems to displace). Mature fleets respond better to ROI-led pitches. Segment by MC age and pitch differently." },
      { title: "Demo-ready vetting forms", body: "Every reply captures fleet size, current systems (ELD provider, TMS), pain points, and decision-maker role. Your SDR opens a qualified call, not a discovery call." },
      { title: "Direct-to-decision-maker, not switchboard", body: "CarrieX-verified contact data is the operations / safety / owner email — not a switchboard. Outreach lands in the inbox of the person who actually approves software purchases." },
    ],
    carriexFilters: [
      "Power-unit count (segment by ICP)",
      "Authority age (technology-adoption proxy)",
      "Carrier classification (interstate carriers must run ELD)",
      "Commodity (hazmat = compliance-focused pitch)",
      "Trailer type",
      "Domicile state + operating region",
      "OOS / inspection history (safety-platform pitch)",
      "Authority type (motor carrier, freight forwarder, broker)",
    ],
    sampleTarget: {
      label: "Sample ICP — Mid-market dry-van fleets, 25–100 power units, US-wide, MC active 3+ years",
      filters: [
        { k: "Power units", v: "25–100" },
        { k: "Equipment", v: "Dry van" },
        { k: "MC age", v: "≥ 3 years" },
        { k: "Geography", v: "All 48 states + interstate operating area" },
        { k: "OOS status", v: "Clean (signals operational maturity)" },
      ],
      estimatedRecords: "~4,800 mid-market fleets",
    },
    exampleOutreach: {
      subject: "Quick question for {{dot_number}} — what TMS are you on?",
      body:
        "{{first_name}}, you run {{power_units}} dry-van trucks at {{dot_number}}. Not a pitch — just a fast question.\n\nOur platform handles dispatch, fuel reporting, IFTA, and driver scoring in one place. Fleets your size usually displace 3–4 separate tools and cut 6–10 hours of admin a week.\n\nIf you're not happy with your current TMS, here's a 12-minute demo slot: {{demo_link}}. If you are, totally fine to ignore.",
    },
    faqs: [
      { q: "Can we exclude fleets already using a competitor?", a: "We can't see installed software directly. But we can suppress your existing customer list, and after first reply your SDR identifies competitor usage on the discovery call — letting us refine the next ICP pull." },
      { q: "How is this better than Capterra or G2 leads?", a: "Capterra leads are shared with 3–5 competitors and cost $35–$120 each. Outbound to a CarrieX-filtered ICP costs a fraction per qualified reply, and the lead is exclusive to you." },
      { q: "What about LinkedIn outbound?", a: "LinkedIn is brilliant for enterprise software, weak for trucking — fleet ops people aren't on LinkedIn. The decision-maker is reached through the verified business email CarrieX surfaces for each carrier." },
      { q: "Can we run product-launch campaigns?", a: "Yes — segment the database by ICP and run timed launch campaigns to that segment. Same engine, different messaging cadence. Most vendors run one always-on funnel + 2–3 quarterly launch pushes." },
    ],
    related: ["compliance-consultants", "equipment-suppliers", "factoring-companies"],
  },

  {
    slug: "truck-stops",
    name: "Truck Stops & Travel Centers",
    short: "Drive loyalty-program enrollment from carriers actually running your corridors.",
    audience: "Truck stop chains, travel centers, and parking / shower networks selling loyalty programs to fleets.",
    hero: {
      eyebrow: "For truck stops & travel centers",
      headlineWhite: "Drive loyalty enrollments from carriers—",
      headlineGrey: "actually running your corridors.",
      sub: "A carrier who never runs I-40 will never use your I-40 locations. Outbound to corridor-relevant fleets and owner-ops turns parking, fuel, and shower revenue into a managed account base.",
    },
    metaTitle: "Asamblor for Truck Stops — Corridor-Targeted Loyalty Enrollment",
    metaDescription: "Sign more carriers and owner-ops to your loyalty program. Outbound built on 4.5M+ verified CarrieX records, filtered by domicile, operating corridor, and fleet size.",
    painPoints: [
      { title: "Loyalty programs are only as valuable as the network match", body: "A carrier running Northeast lanes will never use a Texas-heavy network. Generic loyalty marketing wastes spend on carriers who can't structurally use your locations." },
      { title: "Walk-up enrollment is reactive and slow", body: "Cashier-driven signups capture maybe 1 in 30 fueling customers. Outbound enrollment with a digital signup link gets the customer enrolled before their next visit." },
      { title: "Reserved parking + amenities need pre-sold customers", body: "Premium parking, premium showers, and reserved bays only generate revenue if the carrier knows about them in advance. Outbound is the only way to reach a carrier before they arrive." },
    ],
    whyAsamblor: [
      { title: "Corridor-match targeting", body: "Identify carriers whose authority filings and inspection data place them on the corridors your network covers — I-35, I-10, I-95, I-80 — instead of generic national blasts." },
      { title: "Owner-op vs. fleet ops contact", body: "Owner-ops decide their own fueling; large-fleet drivers are pushed by a corporate program. Segment the outreach and pitch accordingly — direct loyalty signup vs. fleet-program negotiation." },
      { title: "Multi-product bundle support", body: "Loyalty card, fuel program, parking subscription, and shower-credit subscription can all be cross-sold once a carrier is enrolled — same engine, no new outbound infrastructure required." },
      { title: "Suppression of enrolled members", body: "Carriers already enrolled never get re-pitched. We dedupe against your member list at every campaign send." },
    ],
    carriexFilters: [
      "Domicile state + operating area",
      "Operating corridor inference (from inspection locations)",
      "Power-unit count (owner-op vs. fleet ops pitch)",
      "Trailer / equipment type",
      "MC authority age",
      "Carrier classification (interstate = long-haul = highest network use)",
      "OOS status",
      "Commodity (long-haul OTR profiles vs. regional)",
    ],
    sampleTarget: {
      label: "Sample ICP — Long-haul OTR carriers, 1–10 power units, dry van + reefer, with inspections logged along I-40 / I-35 / I-10 in the last 12 months",
      filters: [
        { k: "Power units", v: "1–10" },
        { k: "Equipment", v: "Dry van, reefer" },
        { k: "Corridor activity", v: "I-40, I-35, I-10 (inspections in last 12 mo.)" },
        { k: "Classification", v: "Interstate" },
        { k: "MC age", v: "≥ 6 months" },
      ],
      estimatedRecords: "~28,000 corridor-active carriers",
    },
    exampleOutreach: {
      subject: "{{first_name}} — premium parking on I-40 (no walking from the back lot)",
      body:
        "You run {{equipment}} and your last inspections were on the I-40 corridor. Quick offer:\n\nOur loyalty program ({{program_name}}) gives reserved parking, free showers, and {{fuel_discount}}/gal off across {{location_count}} locations on your route — most are I-40 between Memphis and Albuquerque.\n\n90-second enrollment, no card to carry: {{enroll_link}}\n\nReply STOP to opt out anytime.",
    },
    faqs: [
      { q: "How do you know which corridors a carrier runs?", a: "CarrieX tracks the inspection location for each carrier. A carrier with 12 months of inspections clustered along I-40 is verifiably an I-40 operator. We aggregate that signal per MC and surface corridor relevance for your outreach." },
      { q: "Can we run regional campaigns vs. national?", a: "Yes — pull only carriers active on a specific corridor or in a specific region. A Western network and an Eastern network should never share the same outbound." },
      { q: "What about fleet-level enterprise sales?", a: "Mid-market and large fleets (50+ trucks) buy fuel-network access centrally. Same engine, different sequence: outreach to the fuel manager, longer cycle, but each signed fleet is worth dozens of owner-op enrollments." },
      { q: "How is this different from generic email marketing?", a: "Generic email marketing blasts everyone equally. Asamblor sends to carriers who structurally use your network and filters by fleet size, equipment, and corridor — so reply rates and enrollment rates run materially higher." },
    ],
    related: ["fuel-card-providers", "factoring-companies", "tire-dealers"],
  },

  {
    slug: "equipment-suppliers",
    name: "Equipment Suppliers (Trailers, Trucks, Parts)",
    short: "Reach fleets expanding or replacing iron before they hit the dealer lot.",
    audience: "Trailer and tractor dealers, used-equipment sellers, parts distributors, and lift-axle / suspension specialists.",
    hero: {
      eyebrow: "For equipment dealers & parts distributors",
      headlineWhite: "Reach fleets expanding or replacing iron—",
      headlineGrey: "before they hit the dealer lot.",
      sub: "A growing fleet adds 1–3 trucks a year and replaces a trailer every 5–8. The dealer who's in front of them at the buying moment wins the deal — everyone else competes on price after the spec is locked.",
    },
    metaTitle: "Asamblor for Equipment Suppliers — Fleet Buying-Cycle Outreach",
    metaDescription: "Reach motor carriers in their equipment-buying window. Outbound built on 4.5M+ verified CarrieX records, filtered by fleet growth proxy, equipment type, and geography.",
    painPoints: [
      { title: "Buying windows are private until they're closed", body: "A fleet adding a 3rd truck doesn't post an RFQ — they ask their cousin, call the dealer they bought from last time, or hit Craigslist. The deal is gone before competitive dealers know there was a deal." },
      { title: "Parts and aftermarket need recurring contact", body: "A fleet buys parts every week. Without a constant top-of-funnel of new fleet contacts, your parts business is a one-shot every time a truck rolls in." },
      { title: "Used-equipment buyers are even harder to reach", body: "Used-tractor buyers are price-sensitive small fleets and owner-ops. They're not on auction sites looking; they're on the road. Outbound is the only way to put a unit in front of them." },
    ],
    whyAsamblor: [
      { title: "Fleet-growth proxy targeting", body: "Carriers whose power-unit count has grown 2+ in the last 12 months are buying. Carriers with mature MC and stable size are renewing. Different funnels, different pitches." },
      { title: "Equipment-spec match", body: "Reefer-fleet outreach mentions reefer trailers and TRU specs; flatbed outreach mentions deck length and tare weight. The pitch has to know the equipment to land." },
      { title: "Regional / dealer-network targeting", body: "Pull carriers within reasonable delivery distance of your dealership or service network. Equipment sales are logistically constrained — outbound has to be too." },
      { title: "Inventory-driven campaigns", body: "When you take in a specific unit (e.g., a 2021 reefer trailer), the same engine can fire a targeted outbound to carriers who match the spec — turning aged inventory into closed deals." },
    ],
    carriexFilters: [
      "Power-unit count growth (12-month delta)",
      "Trailer / equipment type",
      "Authority age (mature fleets = recurring replacement)",
      "Domicile state + delivery radius",
      "OOS history (recent OOS = equipment-replacement signal)",
      "Carrier classification (for-hire = revenue scale)",
      "Commodity (drives equipment spec)",
      "Existing fleet age (proxy from MC age + size)",
    ],
    sampleTarget: {
      label: "Sample ICP — Reefer fleets, 3–15 power units, grew 1+ unit in last 12 months, domiciled within 400 miles of Dallas, TX",
      filters: [
        { k: "Power units", v: "3–15" },
        { k: "Equipment", v: "Reefer" },
        { k: "Growth", v: "+1 or more power units in last 12 mo." },
        { k: "Domicile radius", v: "400 miles from Dallas, TX" },
        { k: "MC age", v: "≥ 18 months" },
      ],
      estimatedRecords: "~1,150 growing reefer fleets",
    },
    exampleOutreach: {
      subject: "Adding to the reefer fleet at {{dot_number}}?",
      body:
        "{{first_name}}, your fleet grew {{growth_count}} units this year — clearly business is good.\n\nWe just took in a 2022 Carrier Vector 8500 (reefer trailer, 28K miles) — clean truck, in-house financing if you want, or cash discount. If you're looking at adding another reefer in the next quarter, worth a 5-minute look at the unit and the numbers.\n\nPhotos + spec sheet here: {{listing_link}}",
    },
    faqs: [
      { q: "How do you estimate fleet growth from public data?", a: "Carriers file a biennial update that reports power-unit count. CarrieX stores the historical series, and by comparing year-over-year filings we identify the carriers whose power-unit count has grown — those are the active buyers." },
      { q: "Can we run inventory-specific campaigns?", a: "Yes. Send us the inventory spec (year, make, model, equipment type), we build an ICP that matches it, and the campaign goes live in days. Aged inventory closes faster than waiting on walk-ins." },
      { q: "What about parts and aftermarket?", a: "Parts business is recurring, so the play is different — sign the fleet to a parts account, then layer recurring promotions. Same engine, same data, longer-cycle CRM motion." },
      { q: "Does this work for used-truck dealers?", a: "It's actually one of the cleanest fits. Used buyers are owner-ops and small fleets who never see your billboard or print ad. Targeted outbound with photos and price puts the unit in front of them before they go to TruckPaper." },
    ],
    related: ["repair-shops", "tire-dealers", "truck-leasing"],
  },

  {
    slug: "cdl-schools",
    name: "CDL Schools & Training Programs",
    short: "Fill more seats by reaching career-switchers and pre-CDL drivers near your campus.",
    audience: "Truck-driving schools, CDL training programs, and carrier-sponsored training networks.",
    hero: {
      eyebrow: "For CDL schools & training programs",
      headlineWhite: "Fill more seats with career-switchers—",
      headlineGrey: "in your campus radius.",
      sub: "CDL enrollment is a referral business. The graduates of next semester come from the carriers, dispatchers, and small fleets in your area today. Asamblor reaches them with a co-marketing motion you can scale.",
    },
    metaTitle: "Asamblor for CDL Schools — Carrier & Driver Acquisition Pipeline",
    metaDescription: "Reach motor carriers and owner-ops in your campus radius to drive CDL student enrollments via referral and direct outreach. Built on 4.5M+ verified CarrieX records.",
    painPoints: [
      { title: "Paid student-recruitment ads are getting more expensive", body: "Mass-market advertising for CDL programs has lost effectiveness. Facebook CPLs run $40–$120 per app, with completion rates under 15%. The unit economics are getting worse every year." },
      { title: "The best leads come through carrier referrals", body: "Carriers know which of their drivers need an upgrade, who's about to lose their CDL, and which young employees are interested in a trucking career. Without a relationship with the carriers in your radius, you miss every one of those leads." },
      { title: "Tuition-reimbursement programs need carrier partners", body: "The fastest way to fill a seat is a tuition-reimbursement deal with a carrier who hires the graduate. Building those partnerships one-by-one is slow without a way to reach 50–200 carriers in your area systematically." },
    ],
    whyAsamblor: [
      { title: "Carrier-radius targeting", body: "Pull every motor carrier domiciled within 50, 100, or 200 miles of your campus. That's your referral base — schools partner with these carriers, carriers refer drivers, drivers fill seats." },
      { title: "Owner-op outreach for upgrade students", body: "Owner-operators sometimes need their hazmat, tanker, or doubles/triples endorsement. Direct outreach with endorsement-specific programs converts at rates you can't get from generic display ads." },
      { title: "Tuition-reimbursement partnership pipeline", body: "Outbound to fleet HR / safety leads can launch a tuition-reimbursement program (you train, they hire). Same engine, different sequence, much higher LTV than a single student app." },
      { title: "Dual audience without rebuilding", body: "Carriers and drivers are different audiences with different pitches. Asamblor handles both in parallel pipelines without doubling your infrastructure." },
    ],
    carriexFilters: [
      "Carrier domicile state + ZIP radius",
      "Power-unit count (size of driver hiring need)",
      "Authority age (growing fleets hire more)",
      "Trailer type (specialized endorsements: hazmat, tanker, doubles)",
      "OOS history (signals safety / driver-quality issues)",
      "Driver count vs. power units (under-driver fleets are hiring)",
      "Operating commodity (hazmat → endorsement training need)",
      "Carrier classification (for-hire grows faster than private)",
    ],
    sampleTarget: {
      label: "Sample ICP — Carriers within 150 miles of campus, 3–25 power units, hiring (drivers < power units), all equipment types",
      filters: [
        { k: "Domicile radius", v: "150 miles from campus ZIP" },
        { k: "Power units", v: "3–25" },
        { k: "Hiring signal", v: "Drivers < power units (under-staffed)" },
        { k: "MC age", v: "≥ 12 months" },
        { k: "Authority status", v: "Active" },
      ],
      estimatedRecords: "~1,600 hiring carriers in radius",
    },
    exampleOutreach: {
      subject: "Drivers in {{state}} — partnership pitch from {{school_name}}",
      body:
        "{{first_name}}, you run {{power_units}} trucks at {{dot_number}} but only show {{driver_count}} drivers on the MCS-150 — sounds like you're hiring.\n\nWe train new CDL-A drivers in {{nearest_city}}, 4-week program, full Class A. We can set up a tuition-reimbursement deal: you commit to interview our grads, we steer hiring-ready students your way.\n\nWorth a 10-minute call? {{book_link}}",
    },
    faqs: [
      { q: "Can the same engine recruit students directly?", a: "Partially. CarrieX tracks carriers (regulated business entities), not private individuals — so direct outreach to prospective students is outside the data scope. But owner-operators (single-person MCs) are reachable, which covers the upgrade-endorsement market and the driver-becoming-owner-op market." },
      { q: "What's the typical campus-radius hiring carrier count?", a: "A typical mid-sized campus has 1,500–4,000 hiring-eligible carriers in a 150-mile radius. Pulling, segmenting, and engaging that list manually is impossible; Asamblor turns it into a constant outbound pipeline." },
      { q: "How do tuition-reimbursement partnerships scale through this?", a: "Each signed carrier partnership produces 2–8 trained drivers per year. Sign 20 partners, you fill 80–160 seats annually with much lower per-student CAC than paid ads." },
      { q: "What about carrier-sponsored CDL programs?", a: "Same model in reverse: large carriers (Schneider, Roehl) run their own. Smaller carriers can't, but they would love to sponsor reimbursement programs with local schools — and that partnership is exactly what targeted outbound can build." },
    ],
    related: ["compliance-consultants", "dispatch-services", "equipment-suppliers"],
  },

  {
    slug: "truck-leasing",
    name: "Truck Leasing & Lease-Purchase",
    short: "Put owner-operator candidates into trucks before they go to the big carriers.",
    audience: "Truck leasing companies, lease-purchase programs, and independent truck financing.",
    hero: {
      eyebrow: "For truck leasing & lease-purchase",
      headlineWhite: "Put owner-operator candidates into trucks—",
      headlineGrey: "before the big carriers grab them.",
      sub: "Every driver with 2+ years of experience eventually thinks about going independent. Reach them when they're thinking — not after Schneider or Prime signs them to a 24-month lease.",
    },
    metaTitle: "Asamblor for Truck Leasing — Owner-Op Candidate Pipeline",
    metaDescription: "Reach drivers and small fleets in the owner-operator transition window. Outbound built on 4.5M+ verified CarrieX records, with lease-fit and credit-screening intake.",
    painPoints: [
      { title: "Mega-carrier lease programs lock candidates in", body: "Schneider, Werner, and Prime offer captive lease programs that look attractive to a new owner-op — but lock them into a single dispatcher and lane mix. Independent leasing has to reach the candidate before they sign that paperwork." },
      { title: "Credit-screened candidates are hard to identify upfront", body: "Most outbound to drivers wastes 60% of effort on people who can't qualify. A short pre-qualification form filters before your team invests time." },
      { title: "Used-truck inventory needs a buyer pipeline", body: "Aged inventory on a used-truck lot is dead capital. A buyer pipeline that matches drivers to specific units in your inventory turns aged stock into closed leases in weeks." },
    ],
    whyAsamblor: [
      { title: "Owner-op transition signal", body: "Drivers running for a carrier with their own MC paperwork in progress, or single-truck owner-ops with no current authority, are the prime lease candidates. Filter for that profile, not generic 'truck driver.'" },
      { title: "Equipment-match outreach", body: "Reefer-experienced drivers fit reefer-leasing pitches; flatbed drivers fit flatbed leases. The pitch needs to match the equipment the candidate already runs." },
      { title: "Credit pre-screen built into the funnel", body: "Replies route to a vetting form with credit-soft-pull options, employment history, and current truck details. Your sales team only calls candidates who could plausibly qualify." },
      { title: "Inventory-driven campaigns", body: "Specific used-truck units get matched to filtered candidate lists in days. Aged inventory becomes a sales pipeline instead of carrying cost." },
    ],
    carriexFilters: [
      "Power-unit count (1 = owner-op already; 0 = candidate)",
      "MC authority age (newest authorities = first-truck buyers)",
      "Trailer / equipment type",
      "Domicile state",
      "OOS status",
      "Authority status (active, pending, revoked = re-entry candidates)",
      "Operating commodity",
      "Carrier classification",
    ],
    sampleTarget: {
      label: "Sample ICP — Single-truck owner-ops with MC active 30–180 days, dry van or reefer, domiciled in TX, OK, AR, LA",
      filters: [
        { k: "Power units", v: "1" },
        { k: "MC age", v: "30–180 days" },
        { k: "Equipment", v: "Dry van or reefer" },
        { k: "Domicile", v: "TX, OK, AR, LA" },
        { k: "Authority status", v: "Active" },
      ],
      estimatedRecords: "~3,400 lease-candidate owner-ops",
    },
    exampleOutreach: {
      subject: "{{first_name}} — first 6 months on your authority, time for a second truck?",
      body:
        "Most owner-ops who make it past the first 90 days start thinking about a second truck around month 6. We finance second-truck purchases (and trade-up purchases) with no factory-program lock-in — your dispatch and lanes stay yours.\n\nIf you're hauling consistent freight and want to add a unit, the pre-qual is 4 minutes (soft credit pull): {{apply_link}}\n\nReply STOP to opt out.",
    },
    faqs: [
      { q: "Can we exclude lease candidates already with mega-carriers?", a: "Indirectly — carriers leased to a mega-carrier program operate under that carrier's MC, not their own. By filtering for active independent MCs, we naturally exclude most captive-lease drivers." },
      { q: "What about lease-purchase to driver candidates (not MCs)?", a: "Individual driver data isn't tracked at carrier level — drivers are people, not regulated entities. CarrieX reaches the owner-op population (single-MC entities), which is the highest-converting lease segment. For individual drivers, the play is partnerships with CDL schools." },
      { q: "How fast can a candidate close a lease through this funnel?", a: "Pre-qualified candidate in 2–3 days, approved lease in 7–14 days depending on credit and unit. Most lease teams convert 12–25% of qualified replies." },
      { q: "Can we run this alongside our existing dealer relationships?", a: "Yes — the engine is additive. Dealer floor traffic continues; Asamblor builds a parallel inbound queue from carriers who would never have walked onto your lot." },
    ],
    related: ["equipment-suppliers", "factoring-companies", "dispatch-services"],
  },

  {
    slug: "compliance-consultants",
    name: "DOT Compliance Consultants",
    short: "Sign mid-sized fleets that need a safety manager but can't justify hiring one.",
    audience: "DOT compliance firms, safety management services, IFTA / permitting / IRP services, and fleet safety consultants.",
    hero: {
      eyebrow: "For DOT compliance services",
      headlineWhite: "Sign mid-sized fleets that need a safety manager—",
      headlineGrey: "but can't justify hiring one.",
      sub: "Owner-ops handle their own. Mega-fleets have an in-house safety director. The 5–50 truck fleet in between is your customer — and they only call after a CSA flag or a failed audit.",
    },
    metaTitle: "Asamblor for DOT Compliance Consultants — Mid-Market Fleet Acquisition",
    metaDescription: "Sign 5–50 truck fleets needing DOT compliance, CSA management, IFTA, IRP, and safety services. Outbound built on 4.5M+ verified CarrieX records.",
    painPoints: [
      { title: "Compliance buyers don't buy until they bleed", body: "Most mid-market fleets wait for a CSA flag, a roadside violation, or a failed compliance audit before they call. Reaching them at that moment is reactive; building a pipeline at the moment of risk is proactive — and lucrative." },
      { title: "Owner-ops and mega-fleets are the wrong customer", body: "Owner-ops self-serve; mega-fleets have salaried safety teams. The 5–50 truck fleet is the perfect customer — they have enough compliance burden to justify a service and not enough volume to hire in-house." },
      { title: "Trigger events are invisible without monitoring", body: "A fleet's OOS status, recent inspection violations, or upcoming biennial-update deadline are all surfaced inside CarrieX — but nobody is watching the fleet's record looking for the buying moment." },
    ],
    whyAsamblor: [
      { title: "OOS / CSA trigger targeting", body: "Carriers with recent out-of-service status changes or rising CSA scores are immediate buyers. We surface them weekly so your outreach hits exactly when the fleet is feeling the pain." },
      { title: "Mid-market fleet filter", body: "Pull 5–50 power unit fleets with active authority — your exact ICP. Owner-ops and 100+ unit fleets get excluded automatically so your funnel only contains real prospects." },
      { title: "Service-specific funnels", body: "IFTA filing, IRP, permitting, audit prep, drug & alcohol consortium, and CSA management each get a separate sequence. Carriers self-select into the service they actually need." },
      { title: "Audit-prep timing", body: "Carriers approaching their MCS-150 biennial deadline or a new-entrant safety audit are highest intent. Filtered outreach hits 30 days before the deadline." },
    ],
    carriexFilters: [
      "Power-unit count (5–50 = sweet spot)",
      "Recent OOS status changes (last 14/30/60 days)",
      "Recent inspection violations / CSA score deltas",
      "MCS-150 update due dates (biennial)",
      "New-entrant safety audit due date",
      "Commodity (hazmat = higher compliance need)",
      "Domicile state (jurisdiction-specific permits)",
      "Authority age (new MCs need compliance setup)",
    ],
    sampleTarget: {
      label: "Sample ICP — Mid-market fleets, 5–25 power units, MCS-150 update due in next 45 days, with recent CSA-flagged inspections",
      filters: [
        { k: "Power units", v: "5–25" },
        { k: "MCS-150 due", v: "Within 45 days" },
        { k: "Recent CSA flag", v: "≥ 1 inspection violation in last 90 days" },
        { k: "Authority status", v: "Active" },
        { k: "Geography", v: "Configurable per consultant" },
      ],
      estimatedRecords: "~600 high-intent fleets per cohort",
    },
    exampleOutreach: {
      subject: "{{dot_number}} — MCS-150 due in {{days_to_due}} days + 2 recent CSA flags",
      body:
        "{{first_name}}, your MCS-150 biennial is due {{due_date}} and you've had {{violation_count}} CSA-flagged inspections in the last 90 days.\n\nWe handle MCS-150 updates, CSA score management, driver qualification files, drug & alcohol consortium, and audit prep for fleets your size. Flat monthly retainer; no audit fees.\n\nWorth a 15-minute call to get ahead of the next audit? {{book_link}}",
    },
    faqs: [
      { q: "How do you track MCS-150 due dates?", a: "MCS-150 is biennial; FMCSA publishes the last filing date per MC. CarrieX computes the next-due date and surfaces carriers within 30–60 days of the deadline. Pure public-data play." },
      { q: "Can we target only carriers with recent CSA issues?", a: "Yes. CSA inspection data is public. Filter by recent violations, OOS rate, or BASIC category thresholds — then build a sequence that leads with the specific risk indicator." },
      { q: "What about new-entrant safety audits?", a: "Every new MC must pass a new-entrant safety audit within 18 months of activation. Carriers in months 9–18 of authority are the perfect ICP for audit-prep services. We segment by authority age and surface this cohort monthly." },
      { q: "Does this work for IFTA / permitting services?", a: "Yes. Filter by domicile state and interstate operating area — IFTA service buyers are interstate carriers in certain state combinations. Same engine, different positioning." },
    ],
    related: ["insurance-sales", "tech-vendors", "freight-brokers"],
  },
];

export const SOLUTION_SLUGS = SOLUTIONS.map((s) => s.slug);

export function getSolution(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}

export function getRelated(slugs: string[]): Solution[] {
  return slugs.map((s) => getSolution(s)).filter((x): x is Solution => !!x);
}
