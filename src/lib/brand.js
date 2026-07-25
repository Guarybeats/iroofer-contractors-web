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
  serviceArea: [
    'Dallas, GA', 'Douglasville', 'Hiram', 'Powder Springs',
    'Marietta', 'Acworth', 'Kennesaw', 'Austell'
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
    { num: 'A+', lbl: 'BBB Rating' },
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
    summary:
      'Full tear-off and replacement with architectural asphalt shingles, installed clean and built to last.',
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
    summary:
      'We partner with builders and homeowners on new builds to install a roof that matches the design and the budget.',
    bullets: [
      'Builder & homeowner coordination',
      'Design-matched shingle selection',
      'Code-compliant installation',
      'Final walkthrough & warranty setup'
    ]
  }
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}

// Service-area cities for local SEO (Dallas, GA + surrounding Paulding/Cobb/Douglas counties)
export const cities = [
  { slug: 'dallas-ga', name: 'Dallas', state: 'GA', county: 'Paulding County', blurb: 'our home base — same-day roof inspections across Dallas and across the county line.' },
  { slug: 'douglasville', name: 'Douglasville', state: 'GA', county: 'Douglas County', blurb: 'fast storm-response and full replacements for Douglasville homeowners.' },
  { slug: 'hiram', name: 'Hiram', state: 'GA', county: 'Paulding County', blurb: 'roof repair and replacement crews working Hiram neighborhoods weekly.' },
  { slug: 'powder-springs', name: 'Powder Springs', state: 'GA', county: 'Cobb County', blurb: 'architectural shingle replacements and storm claims help in Powder Springs.' },
  { slug: 'marietta', name: 'Marietta', state: 'GA', county: 'Cobb County', blurb: 'insurance-backed roof rebuilds and new construction roofing in Marietta.' },
  { slug: 'acworth', name: 'Acworth', state: 'GA', county: 'Cobb County', blurb: 'leak repair, ventilation upgrades and full tear-offs across Acworth.' },
  { slug: 'kennesaw', name: 'Kennesaw', state: 'GA', county: 'Cobb County', blurb: 'local, family-owned roofing for Kennesaw homes and small businesses.' },
  { slug: 'austell', name: 'Austell', state: 'GA', county: 'Cobb County', blurb: 'emergency tarping and honest estimates for Austell property owners.' },
];

export function getCity(slug) {
  return cities.find((c) => c.slug === slug);
}
