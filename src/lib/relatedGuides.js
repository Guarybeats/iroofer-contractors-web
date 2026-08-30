// Internal-link map: service slug -> local blog guides.
// Keeps service pages linked into the /blog cluster for internal-link equity.
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
  ],
  'new-construction': [
    { href: '/blog/new-construction-roofing-dallas', title: 'New construction roofing in Dallas, GA' },
    { href: '/blog/choosing-roofing-materials-dallas-ga', title: 'Choosing roofing materials for a Georgia build' },
    { href: '/blog/attic-ventilation-dallas-heat', title: 'Attic ventilation and Georgia heat' },
  ],
  'gutter-repair-replacement': [
    { href: '/blog/gutter-maintenance-dallas-ga', title: 'Gutter maintenance calendar for Dallas, GA' },
    { href: '/blog/roof-maintenance-calendar-dallas-ga', title: 'Year-round roof maintenance calendar' },
    { href: '/blog/skylight-leak-repair-dallas-ga', title: 'Tracking down a skylight leak' },
  ],
  'storm-damage-roof-repair': [
    { href: '/blog/georgia-hail-storm-roof-checklist', title: 'Georgia hail storm roof checklist' },
    { href: '/blog/emergency-roof-tarping-dallas', title: 'Emergency roof tarping: what happens first' },
    { href: '/blog/wind-damage-roof-repair-dallas', title: 'Wind damage roof repair, step by step' },
  ],
  'roof-insurance-claims': [
    { href: '/blog/dallas-ga-hail-storm-insurance-claims', title: 'Hail storm insurance claims in Dallas, GA' },
    { href: '/blog/georgia-hail-storm-roof-checklist', title: 'Georgia hail storm roof checklist' },
    { href: '/blog/emergency-roof-tarping-dallas', title: 'Emergency roof tarping: what happens first' },
  ],
};

export function getGuides(slug) {
  return guidesByService[slug] || [];
}
