// Single source of truth for site copy. Mirrors design-system/brand.md + tokens.json.
export const brand = {
  name: 'iRoofer Contractors',
  shortName: 'iRoofer',
  owner: 'Cristian Mendez',
  founded: 2019,
  roofsCompleted: 150,
  tagline: 'Local, family-owned roofing you can trust',
  location: 'Dallas, GA',
  phone: '(470) 236-1410',
  email: 'iroofercontractors@gmail.com',
  url: 'https://iroofercontractors.com',
  hours: {
    weekdays: 'MON–FRI 9am–7pm',
    saturday: 'SAT 9am–5pm',
    sunday: 'SUN Closed',
    full: 'MON–FRI 9am–7pm | SAT 9am–5pm | SUN Closed',
  },
  serviceArea: [
    'Dallas, GA', 'Douglasville', 'Hiram', 'Powder Springs',
    'Marietta', 'Acworth', 'Kennesaw', 'Austell',
    'Roswell', 'Alpharetta', 'Canton'
  ],
  pitch:
    'iRoofer Contractors is a local, family-owned roofing company serving Dallas, GA and the greater Atlanta metro. ' +
    'Roof repair, full replacement, and new-construction roofing with honest pricing, clean job sites, and work we stand behind.',
  rating: '5★',
  reviewCount: '54',
  fonts: {
    import: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap'
  },
  trust: [
    { num: '54', lbl: '5-Star Google Reviews' },
    { num: '5★', lbl: 'Average Rating' },
    { num: '100%', lbl: 'Local & Family-Owned' }
  ]
};

export const services = [
  {
    slug: 'roof-repair',
    title: 'Roof Repair',
    tagline: 'Stop the leak before it spreads.',
    image: '/assets/service-repair.jpg',
    webp: '/assets/service-repair.webp',
    summary:
      'From storm damage to worn flashing, we find the source and fix it right — so a small problem stays small.',
    bullets: [
      'Emergency leak detection & tarping',
      'Shingle, flashing & vent repairs',
      'Storm and wind damage assessment',
      'Honest fix-it-first advice (no upsell)'
    ]
  },
  {
    slug: 'roof-replacement',
    title: 'Roof Replacement',
    tagline: 'A new roof that lasts decades.',
    image: '/assets/service-replacement.jpg',
    webp: '/assets/service-replacement.webp',
    summary:
      'Full tear-off and replacement with architectural asphalt shingles installed by an Owens Corning Preferred Contractor, installed clean and built to last. Backed by the manufacturer’s warranty on the shingles.',
    bullets: [
      'Complete tear-off & deck inspection',
      'Architectural & premium shingle options',
      'Synthetic underlayment & ridge vents',
      'Daily cleanup — magnets for nails'
    ]
  },
  {
    slug: 'new-construction',
    title: 'New Construction',
    tagline: 'Roofing done right from frame-up.',
    image: '/assets/service-newconstruction.jpg',
    webp: '/assets/service-newconstruction.webp',
    summary:
      'We partner with builders and homeowners on new builds to install a roof that matches the design and the budget.',
    bullets: [
      'Builder & homeowner coordination',
      'Design-matched shingle selection',
      'Code-compliant installation',
      'Final walkthrough & warranty setup'
    ]
  },
  {
    slug: 'gutter-repair-replacement',
    title: 'Gutter Repair & Replacement',
    tagline: 'Protect your roof, fascia, and foundation.',
    image: '/assets/service-gutters-main.jpg',
    webp: '/assets/service-gutters-main.webp',
    summary:
      'Clogged or failing gutters are the #1 cause of preventable roof and foundation damage in Dallas, GA. We repair, realign, and replace gutters and downspouts so water flows away from your home.',
    bullets: [
      'Gutter cleaning, repair & realignment',
      'Full seamless gutter replacement',
      'Downspout & drainage correction',
      'Leaf-guard & gutter guard options'
    ]
  },
  {
    slug: 'storm-damage-roof-repair',
    title: 'Storm Damage Roof Repair',
    tagline: '24/7 storm response across west Metro Atlanta.',
    image: '/assets/storm-damage.jpg',
    webp: '/assets/storm-damage.webp',
    summary:
      'Wind, hail, and fallen limbs do damage that is easy to miss from the ground. We inspect free, tarp the same day when a roof is open to the weather, and document everything you need for your claim.',
    bullets: [
      'Free post-storm roof inspection',
      'Same-day emergency tarping',
      'Hail and wind damage documentation for your claim',
      'Full repair or replacement once the claim is settled'
    ]
  }
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}

// Service-area cities for local SEO (Dallas, GA + surrounding Paulding/Cobb/Douglas/
// Cherokee/north Fulton counties).
//
// IMPORTANT: every city listed here must also have its own page at
// src/app/service-areas/<slug>/page.js. The generic [city] dynamic route was removed
// because it collided with those dedicated pages and the static export picked the
// winner unpredictably (some cities silently shipped the short generic template).
// Adding a city here without creating its page means the service-areas index links
// to a 404 — create the page in the same change, using components/CityAreaPage.jsx.
export const cities = [
  { slug: 'dallas-ga', name: 'Dallas', state: 'GA', county: 'Paulding County', blurb: 'our home base — same-day roof inspections across Dallas and across the county line.',
    localNote: 'As the town we call home, Dallas homeowners get priority scheduling and the crew chief on every job. From historic downtown to the new subdivisions off Hwy 92, we know the rooflines here.' },
  { slug: 'douglasville', name: 'Douglasville', state: 'GA', county: 'Douglas County', blurb: 'fast storm-response and full replacements for Douglasville homeowners.',
    localNote: 'Douglasville sees its share of spring straight-line winds off the ridge. We document hail and wind damage for your insurance claim and rebuild to manufacturer spec.' },
  { slug: 'hiram', name: 'Hiram', state: 'GA', county: 'Paulding County', blurb: 'roof repair and replacement crews working Hiram neighborhoods weekly.',
    localNote: 'Hiram families trust us for architectural shingle replacements that match the neighborhood and hold up to Georgia summers. Most jobs done in one to two days.' },
  { slug: 'powder-springs', name: 'Powder Springs', state: 'GA', county: 'Cobb County', blurb: 'architectural shingle replacements and storm claims help in Powder Springs.',
    localNote: 'In Powder Springs we handle everything from single-slope ranch reroofs to steep two-story tear-offs, plus ridge-vent and attic ventilation upgrades that cut cooling bills.' },
  { slug: 'marietta', name: 'Marietta', state: 'GA', county: 'Cobb County', blurb: 'insurance-backed roof rebuilds and new construction roofing in Marietta.',
    localNote: 'Marietta’s mix of historic homes and new builds means we tailor every scope — from gentle repairs on older roofs to full code-compliant installs on new construction.' },
  { slug: 'acworth', name: 'Acworth', state: 'GA', county: 'Cobb County', blurb: 'leak repair, ventilation upgrades and full tear-offs across Acworth.',
    localNote: 'Acworth lakefront and in-town homes alike call us for fast leak tracing and clean tear-offs — we protect your landscaping and run a daily magnet nail-sweep.' },
  { slug: 'kennesaw', name: 'Kennesaw', state: 'GA', county: 'Cobb County', blurb: 'local, family-owned roofing for Kennesaw homes and small businesses.',
    localNote: 'Kennesaw homeowners and small businesses rely on us for honest pricing and a real person on the phone — no call center, no surprise line items.' },
  { slug: 'austell', name: 'Austell', state: 'GA', county: 'Cobb County', blurb: 'emergency tarping and honest estimates for Austell property owners.',
    localNote: 'When a storm hits Austell we tarp the same day and meet your adjuster on-site, so your claim is documented before the next rain.' },
  { slug: 'roswell', name: 'Roswell', state: 'GA', county: 'Fulton County', combo: false, blurb: 'steep-slope replacements, historic-district repairs and storm claims in Roswell.',
    localNote: 'Roswell mixes 1980s Martin\u2019s Landing and Willeo Road two-story homes with the Canton Street historic district, where architectural review limits what can go on a roof. We spec shingles that pass review and still carry a full manufacturer warranty.' },
  { slug: 'alpharetta', name: 'Alpharetta', state: 'GA', county: 'Fulton County', combo: false, blurb: 'HOA-compliant roof replacements and leak diagnostics across Alpharetta.',
    localNote: 'Most Alpharetta work comes with an HOA architectural packet and a tight window for dumpster placement. We handle the submittal, stage materials off the street, and keep crews off the neighbors\u2019 lawns.' },
  { slug: 'canton', name: 'Canton', state: 'GA', county: 'Cherokee County', combo: false, blurb: 'hail-belt inspections and full tear-offs for Canton and north Cherokee homes.',
    localNote: 'North Cherokee catches hail cores that miss Atlanta entirely. We inspect for soft metal dents and bruised mats \u2014 the evidence adjusters actually accept \u2014 before you file.' },
];

export function getCity(slug) {
  return cities.find((c) => c.slug === slug);
}
