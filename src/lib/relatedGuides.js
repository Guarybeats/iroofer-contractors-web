// Internal-link map: service slug -> local blog guides.
// Keeps service pages linked into the /blog cluster for internal-link equity.
//
// Each service has a pool of guides. City pages pass `city`, and getGuides() picks a
// different three-guide window per city so the same link list is not repeated on every
// page in a service group (Nov 2026 dedupe). Pages without `city` get the first three.
export const guidesByService = {
  'roof-repair': [
    { href: '/blog/roof-repair-cost-dallas-ga', title: 'What roof repair really involves in Dallas, GA' },
    { href: '/blog/when-to-replace-vs-repair-a-roof', title: 'Replace or repair? How to tell' },
    { href: '/blog/wind-damage-roof-repair-dallas', title: 'Wind damage roof repair, step by step' },
  ],
  'roof-replacement': [
    { href: '/blog/when-to-replace-vs-repair-a-roof', title: 'Replace or repair? How to tell' },
    { href: '/blog/architectural-vs-3-tab-shingles', title: 'Architectural vs 3-tab shingles' },
    { href: '/blog/how-to-choose-roofing-contractor-dallas-ga', title: 'How to choose a roofing contractor in Dallas, GA' },
    { href: '/blog/roof-warranty-what-is-covered', title: 'Manufacturer vs workmanship warranties, explained' },
    { href: '/blog/cost-of-new-roof-2026-dallas-ga', title: 'What sets the price of a new roof' },
    { href: '/blog/metal-roofing-pros-cons-dallas', title: 'Metal roofing: the trade-offs' },
    { href: '/blog/attic-ventilation-dallas-heat', title: 'Why the attic gets so hot in summer' },
  ],
  'new-construction': [
    { href: '/blog/new-construction-roofing-dallas', title: 'New construction roofing in Dallas, GA' },
    { href: '/blog/choosing-roofing-materials-dallas-ga', title: 'Choosing roofing materials for a Georgia build' },
    { href: '/blog/attic-ventilation-dallas-heat', title: 'Attic ventilation and Georgia heat' },
    { href: '/blog/architectural-vs-3-tab-shingles', title: 'Picking between architectural and 3-tab shingles' },
    { href: '/blog/metal-roofing-pros-cons-dallas', title: 'Is a metal roof worth it on a new house?' },
    { href: '/blog/solar-panels-roof-dallas-ga', title: 'Planning a roof that may carry solar later' },
    { href: '/blog/roof-warranty-what-is-covered', title: 'What a roof warranty does and does not cover' },
  ],
  'gutter-repair-replacement': [
    { href: '/blog/gutter-maintenance-dallas-ga', title: 'Gutter maintenance calendar for Dallas, GA' },
    { href: '/blog/roof-maintenance-calendar-dallas-ga', title: 'Year-round roof maintenance calendar' },
    { href: '/blog/skylight-leak-repair-dallas-ga', title: 'Tracking down a skylight leak' },
    { href: '/blog/water-stain-on-ceiling-roof-leak', title: 'Is that ceiling stain the roof or the gutter?' },
    { href: '/blog/georgia-winter-roof-inspection', title: 'Winter prep for roofs and gutters' },
    { href: '/blog/georgia-hail-storm-roof-checklist', title: 'Checking gutters and roof after hail' },
    { href: '/blog/wind-damage-roof-repair-dallas', title: 'Spotting wind damage at the roof edge' },
  ],
  'storm-damage-roof-repair': [
    { href: '/blog/georgia-hail-storm-roof-checklist', title: 'Georgia hail storm roof checklist' },
    { href: '/blog/emergency-roof-tarping-dallas', title: 'Emergency roof tarping: what happens first' },
    { href: '/blog/wind-damage-roof-repair-dallas', title: 'Wind damage roof repair, step by step' },
    { href: '/blog/how-to-choose-storm-damage-roofer', title: 'How to pick a storm roofer you can trust' },
    { href: '/blog/dallas-ga-hail-storm-insurance-claims', title: 'Documenting a hail claim, start to finish' },
    { href: '/blog/hail-damage-repair-or-replace-georgia', title: 'After hail: repair or replace?' },
    { href: '/blog/emergency-roof-response-time-dallas', title: 'What decides how fast a crew can get to you' },
  ],
  'roof-insurance-claims': [
    { href: '/blog/dallas-ga-hail-storm-insurance-claims', title: 'Hail storm insurance claims in Dallas, GA' },
    { href: '/blog/georgia-hail-storm-roof-checklist', title: 'Georgia hail storm roof checklist' },
    { href: '/blog/emergency-roof-tarping-dallas', title: 'Emergency roof tarping: what happens first' },
  ],
};

const CITY_ORDER = ['dallas-ga', 'hiram', 'douglasville', 'powder-springs', 'marietta', 'kennesaw', 'acworth', 'austell'];

export function getGuides(slug, city) {
  const pool = guidesByService[slug] || [];
  if (!city || pool.length <= 3) return pool.slice(0, 3);
  const i = Math.max(0, CITY_ORDER.indexOf(city));
  const start = i % pool.length;
  return [0, 1, 2].map((k) => pool[(start + k * 2) % pool.length]);
}

// Per-city label for the guide list, so the eyebrow is not the same string on every page.
export const guideHeading = {
  'dallas-ga': 'Guides from our Dallas shop',
  hiram: 'Worth reading before you call',
  douglasville: 'Reading for Douglas County homeowners',
  'powder-springs': 'Before you hire anyone, read these',
  marietta: 'More from our roofing notes',
  kennesaw: 'Short guides that answer the next question',
  acworth: 'Further reading',
  austell: 'Related how-to guides',
};
