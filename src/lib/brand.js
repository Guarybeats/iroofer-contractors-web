// Single source of truth for site copy. Mirrors design-system/brand.md + tokens.json.
export const brand = {
  name: 'iRoofer Contractors',
  shortName: 'iRoofer',
  tagline: 'Local, family-owned roofing you can trust',
  location: 'Dallas, GA',
  phone: '(770) 555-0142',
  email: 'hello@iroofercontractors.com',
  url: 'https://iroofercontractors.com',
  serviceArea: [
    'Dallas, GA', 'Douglasville', 'Hiram', 'Powder Springs',
    'Marietta', 'Acworth', 'Kennesaw', 'Austell'
  ],
  pitch:
    'iRoofer Contractors is a local, family-owned roofing company serving Dallas, GA and the greater Atlanta metro. ' +
    'Roof repair, full replacement, and new-construction roofing with honest pricing, clean job sites, and work we stand behind.',
  fonts: {
    import: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap'
  },
  trust: [
    { num: 'A+', lbl: 'BBB Rating' },
    { num: '500+', lbl: '5-Star Reviews' },
    { num: '4.7★', lbl: 'Average Rating' },
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
      'Full tear-off and replacement with architectural asphalt shingles, installed clean and backed by our workmanship.',
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
