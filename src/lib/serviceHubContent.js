import { cities } from '@/lib/brand';

/** Deep hub copy for /services/[slug] — keep gutters on its dedicated page. */
export const serviceHubContent = {
  'roof-repair': {
    eyebrow: 'Roof repair',
    h1Before: 'Stop the leak before it ',
    h1Accent: 'spreads.',
    lead:
      'Most Dallas, GA roof leaks start small — a cracked boot, lifted flashing, or a few missing shingles after a spring storm. We find the source (not just the stain), patch it to manufacturer spec, and tell you straight if repair is still the right call versus replacement.',
    bullets: [
      'Same-week leak detection with photos and a plain-English report',
      'Emergency tarping when the roof is open to weather',
      'Flashing, vent, pipe boot, and shingle repairs color-matched to your roof',
      'Honest fix-it-first advice — no pressure to replace a roof that still has life',
    ],
    processTitle: 'How a repair visit works',
    processIntro:
      'One local crew, clear scope, written price before tools come out. Most single-issue repairs finish the same day.',
    steps: [
      { n: '01', title: 'Inspect & document', body: 'On-roof inspection with photos of the failure point, attic stains if accessible, and nearby wear that could fail next season.' },
      { n: '02', title: 'Scope & price', body: 'Written repair scope with materials and labor. If replacement is smarter long-term, we say so with the numbers side by side.' },
      { n: '03', title: 'Repair & seal', body: 'Flashings reset, boots replaced, shingles woven in, and sealant used only where it belongs — not as a bandage over a bigger problem.' },
      { n: '04', title: 'Cleanup & check', body: 'Magnet sweep for nails, debris hauled, and a quick water-flow or hose check when it helps confirm the fix.' },
    ],
    faqs: [
      { q: 'Can you fix a leak without replacing the whole roof?', a: 'Often yes. Isolated flashing failures, pipe boots, and storm-lifted shingles are classic repair jobs. If decking is soft across large areas or the roof is at end of life, we will recommend replacement instead of stacking repairs.' },
      { q: 'How fast can you tarp an active leak?', a: 'For open or actively leaking roofs in our Dallas / west-metro area, we aim for same-day emergency tarping when weather and access allow, then schedule the permanent repair.' },
      { q: 'Do you repair storm damage before insurance settles?', a: 'We can tarp and stabilize immediately. Permanent repair or replacement usually waits on your adjuster’s approval so you are not fronting costs the claim should cover.' },
      { q: 'Will the repair match my existing shingles?', a: 'We color-match architectural shingles as closely as current product lines allow. Slight color difference on older roofs is normal; we place patches where they blend best.' },
    ],
    cityPrefix: 'roof-repair',
    cityLabel: 'Roof repair by city',
  },
  'roof-replacement': {
    eyebrow: 'Roof replacement',
    h1Before: 'A new roof that lasts ',
    h1Accent: 'decades.',
    lead:
      'Full tear-off to the deck, ice & water shield where it counts, synthetic underlayment, and architectural shingles installed to Owens Corning Preferred Contractor standards. Ridge venting, drip edge, and a magnet-sweep cleanup — one crew, one schedule, written warranty registration.',
    bullets: [
      'Complete tear-off and deck inspection (replace soft plywood, not cover it)',
      'Owens Corning Preferred Contractor materials & workmanship standards',
      'Ice & water shield, synthetic underlayment, ridge vents, drip edge',
      'Daily magnet sweeps and dumpster haul — lawn left clean',
    ],
    processTitle: 'From estimate to final walkthrough',
    processIntro:
      'Most single-family homes in Paulding and Cobb finish in one to two days, weather permitting. You get a firm schedule in writing before we start.',
    steps: [
      { n: '01', title: 'Measure & specify', body: 'Drone or on-roof measure, shingle options, ventilation check, and a line-item estimate — including any decking contingency.' },
      { n: '02', title: 'Tear-off & deck', body: 'Old layers come off. Soft decking is replaced, not skinned over. Ice & water at eaves and valleys, then synthetic underlayment.' },
      { n: '03', title: 'Install & vent', body: 'Architectural shingles to manufacturer pattern, starter and ridge, drip edge, and ridge ventilation sized for the attic.' },
      { n: '04', title: 'Cleanup & warranty', body: 'Magnet sweep, dumpster out, final walkthrough with photos. Manufacturer warranty registered in your name.' },
    ],
    faqs: [
      { q: 'How long does a full replacement take?', a: 'Most homes we re-roof in Dallas and nearby towns are one to two days. Steep, large, or multi-layer tear-offs can take three. Weather pauses are built into the schedule we give you.' },
      { q: 'What shingles do you install?', a: 'Primarily Owens Corning architectural lines as an Owens Corning Preferred Contractor. We can discuss premium options and color once we see the home and HOA rules if any.' },
      { q: 'Do you offer financing?', a: 'Yes for qualified homeowners. We also work insurance claims end-to-end when storm damage is the reason for replacement.' },
      { q: 'What warranty do I get?', a: 'Manufacturer warranty on the shingles (registered to you) plus our workmanship commitment. Ask for the exact terms on your product choice before we start.' },
    ],
    cityPrefix: 'roof-replacement',
    cityLabel: 'Roof replacement by city',
  },
  'storm-damage-roof-repair': {
    eyebrow: 'Storm & insurance',
    h1Before: 'Hail doesn’t wait. ',
    h1Accent: 'Neither do we.',
    lead:
      'Georgia spring and summer storms leave bruising you cannot see from the driveway. We inspect free, tarp the same day when needed, meet your adjuster on-site, and write a supplement when the first scope misses decking, soft metals, or code items.',
    bullets: [
      'Free post-storm inspection with photo documentation',
      'Same-day emergency tarping for open roofs',
      'Adjuster meet + claim supplements when the scope is short',
      'Repair or full replacement once the claim is settled',
    ],
    processTitle: 'After a storm — our playbook',
    processIntro:
      'You should not climb the roof. Ground photos help; we handle the rest so your insurance window does not close empty-handed.',
    steps: [
      { n: '01', title: 'Inspect & photo', body: 'On-roof hail/wind mapping, soft-metal checks, and attic look when accessible. You get a plain-English report.' },
      { n: '02', title: 'Tarp if needed', body: 'Active leaks get temporary protection first so interior damage stops while the claim moves.' },
      { n: '03', title: 'Meet the adjuster', body: 'We walk the roof with your carrier, explain findings, and push supplements when line items were missed.' },
      { n: '04', title: 'Repair or replace', body: 'Once approved, the same crew that documented the storm installs the fix — not a random sub who never saw the damage.' },
    ],
    faqs: [
      { q: 'Will filing a claim raise my rates?', a: 'Carriers vary. We document facts; you decide whether to file. We never file without your go-ahead.' },
      { q: 'What if the adjuster only approves a small repair?', a: 'That is common. We review the estimate line by line and supplement for missed damage, code-required items, and matching when justified.' },
      { q: 'Do you charge for the inspection?', a: 'Storm inspections for homeowners in our service area are free. Tarping for active leaks is quoted clearly if needed.' },
      { q: 'How fast should I call after hail?', a: 'Soon. Evidence weathers off, and some policies have timing expectations. Same-week inspections are typical after a local storm cell.' },
    ],
    cityPrefix: 'storm-damage-roof-repair',
    cityLabel: 'Storm response by city',
  },
  'new-construction': {
    eyebrow: 'New construction',
    h1Before: 'Roofing done right from ',
    h1Accent: 'frame-up.',
    lead:
      'Builders and homeowners building new in Dallas, Hiram, Douglasville, and the west metro need a roof crew that hits schedule, passes inspection, and matches the elevation package. We coordinate with your GC, install to code, and leave a clean site for the next trade.',
    bullets: [
      'Builder & homeowner schedule coordination',
      'Design-matched architectural shingle packages',
      'Code-compliant underlayment, flashing, and ventilation',
      'Final walkthrough, punch list, and warranty setup',
    ],
    processTitle: 'How we work with builders',
    processIntro:
      'Dry-in dates slip when roofing is late. We plan material lead times and crew days against your frame schedule so inspections stay on track.',
    steps: [
      { n: '01', title: 'Spec & takeoff', body: 'Plans review, shingle and ventilation spec, and a written takeoff your GC can put on the schedule.' },
      { n: '02', title: 'Dry-in', body: 'Underlayment, ice & water, and flashings installed so the house is dried in for other trades.' },
      { n: '03', title: 'Finish roof', body: 'Shingles, ridge, vents, and accessories to the elevation package — inspected before we leave.' },
      { n: '04', title: 'Closeout', body: 'Punch list with the builder or homeowner, warranty registration, and photo package for the file.' },
    ],
    faqs: [
      { q: 'Do you work for production builders and custom homes?', a: 'Yes. We handle one-off customs and small multi-home packages in our west-metro footprint. Call early so material lead times do not stall dry-in.' },
      { q: 'Can homeowners hire you directly on a new build?', a: 'Absolutely. Many owners manage their own build or want a preferred roofing sub. We coordinate with whoever owns the schedule.' },
      { q: 'Are you familiar with local inspection requirements?', a: 'We install to current Georgia residential code expectations for underlayment, ice barriers where required, and ventilation — and we show up for re-inspection if the county asks.' },
      { q: 'What about gutters on a new build?', a: 'We can hang seamless gutters after the roof so drip edge and fascia are done as one system. Ask for a combined quote.' },
    ],
    cityPrefix: 'new-construction',
    cityLabel: 'New construction by city',
  },
};

export function comboCities() {
  return cities.filter((c) => c.combo !== false);
}
