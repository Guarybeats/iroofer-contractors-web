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
    featuredLinks: [
      { href: '/roof-repair-dallas-ga/', label: 'Roof repair in Dallas, GA' },
      { href: '/roof-repair-powder-springs/', label: 'Roofing contractor in Powder Springs' },
      { href: '/roof-repair-hiram/', label: 'Roofer in Hiram, GA' },
      { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage roof repair in Dallas' },
    ],
    cityPrefix: 'roof-repair',
    cityLabel: 'Roof repair by city',
  },
  'roof-replacement': {
    eyebrow: 'Roof replacement',
    h1Before: 'A new roof that lasts ',
    h1Accent: 'decades.',
    lead:
      'Full tear-off and replacement with architectural asphalt systems installed clean and built to last. iRoofer Contractors — family-owned in Dallas since 2019 — installs as an Owens Corning Preferred contractor when that line fits the house. Written quote after inspection only; on-page estimator tools are planning-only.',
    bullets: [
      'Complete tear-off and deck inspection (replace soft plywood, not cover it)',
      'Owens Corning Preferred Contractor materials & workmanship standards when selected',
      'Ice & water shield, synthetic underlayment, ridge vents, drip edge',
      'Daily magnet sweeps and dumpster haul — lawn left clean',
    ],
    processTitle: 'From estimate to final walkthrough',
    processIntro:
      'Inspection & written proposal → material guidance → tear-off to deck as scoped → decking repairs → underlayment/flashings → shingles/ridge/vents → magnet cleanup → walkthrough + warranty paperwork. Most single-family homes in Paulding and Cobb finish in one to two days, weather permitting.',
    steps: [
      { n: '01', title: 'Measure & specify', body: 'Drone or on-roof measure, shingle options, ventilation check, and a line-item estimate — including any decking contingency.' },
      { n: '02', title: 'Tear-off & deck', body: 'Old layers come off. Soft decking is replaced, not skinned over. Ice & water at eaves and valleys, then synthetic underlayment.' },
      { n: '03', title: 'Install & vent', body: 'Architectural shingles to manufacturer pattern, starter and ridge, drip edge, and ridge ventilation sized for the attic.' },
      { n: '04', title: 'Cleanup & warranty', body: 'Magnet sweep, dumpster out, final walkthrough with photos. Manufacturer warranty registered in your name when the product line allows.' },
    ],
    faqs: [
      { q: 'How long does a full replacement take?', a: 'Most homes we re-roof in Dallas and nearby towns are one to two days. Steep, large, or multi-layer tear-offs can take three. Weather pauses are built into the schedule we give you.' },
      { q: 'What shingles do you install?', a: 'Primarily Owens Corning architectural lines as an Owens Corning Preferred Contractor when that system fits. We can discuss other architectural options and color once we see the home and HOA rules if any.' },
      { q: 'Do you offer financing?', a: 'Ask on the call for current options for qualified homeowners — we don’t invent APR claims on this page. We also support insurance documentation when storm damage is the reason for replacement.' },
      { q: 'What warranty do I get?', a: 'Manufacturer warranty on the shingles (registered to you when allowed) plus our workmanship commitment. Ask for the exact terms on your product choice before we start.' },
      { q: 'Partial vs full replacement?', a: 'Sometimes a slope can be rebuilt; often matching and long-term performance push toward a full system. We’ll say which after inspection — no scare tactics over a fixable boot.' },
    ],
    featuredLinks: [
      { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement in Dallas, GA' },
      { href: '/roof-replacement-hiram/', label: 'Roof replacement in Hiram' },
      { href: '/roof-repair-dallas-ga/', label: 'Roof repair in Dallas, GA' },
      { href: '/estimator/', label: 'Planning estimator (not a quote)' },
    ],
    deepenBlocks: [
      {
        title: 'What’s in a typical replacement conversation',
        body: 'We talk tear-off versus any overlay myth (we tear off to the deck as standard so we can see what’s underneath), decking repairs as discovered, underlayment strategy, ice and water at vulnerable details, step and chimney flashings, ridge finish, and ventilation that matches the home. Cleanup includes magnet sweeps so nails aren’t waiting in the lawn. Color selection deserves daylight and full-size samples on the roof — not a rushed brochure pick under showroom lights.',
      },
      {
        title: 'Repair path still matters',
        body: 'If you’re here because of one leak, start with an honest repair inspection first via our Dallas or Hiram repair money pages. Replacement is the right tool when the system is worn out, not when a boot failed. Storm-related replacements may include documentation and adjuster coordination — we still won’t promise claim results.',
      },
      {
        title: 'After the install',
        body: 'We walk the roof with you when possible, register manufacturer warranties when the product line allows, and leave maintenance notes (debris in valleys, keep gutters draining). Future questions: (470) 236-1410 or https://iroofercontractors.com/contact/. Same local crew standards as our repair and storm work — family-owned since 2019 under Cristian Mendez.',
      },
    ],
    cityPrefix: 'roof-replacement',
    cityLabel: 'Roof replacement by city',
  },
  'storm-damage-roof-repair': {
    eyebrow: 'Storm & insurance',
    h1Before: 'Hail doesn’t wait. ',
    h1Accent: 'Neither do we.',
    lead:
      'Wind, hail, and fallen limbs do damage that’s easy to miss from the ground. iRoofer inspects, tarps when a roof is open to weather, and documents what we find so you can decide on repair — and insurance steps if they apply. Family-owned in Dallas since 2019. Licensed, bonded, insured. CertainTeed Storm Restoration Specialist (GA) when that path fits. Owens Corning Preferred on permanent systems when selected.',
    bullets: [
      'Free post-storm inspection with photo documentation',
      'Same-day emergency tarping for open roofs when access is safe',
      'Adjuster meet + claim supplements when the scope is short — no guaranteed approvals',
      'Repair or full replacement once you choose the permanent path',
    ],
    processTitle: 'After a storm — our playbook',
    processIntro:
      'Inspect → photo documentation → emergency tarp if needed → written scope → repair vs replace → complete + cleanup. You should not climb the roof.',
    steps: [
      { n: '01', title: 'Inspect & photo', body: 'On-roof hail/wind mapping, soft-metal checks, and attic look when accessible. You get a plain-English report.' },
      { n: '02', title: 'Tarp if needed', body: 'Active leaks get temporary protection first so interior damage stops while the claim or repair plan moves.' },
      { n: '03', title: 'Meet the adjuster', body: 'We walk the roof with your carrier, explain findings, and push supplements when line items were missed — approvals still depend on your policy.' },
      { n: '04', title: 'Repair or replace', body: 'Once the scope is clear, the same crew that documented the storm installs the fix — not a random sub who never saw the damage.' },
    ],
    faqs: [
      { q: 'How soon after a storm should I call?', a: 'Soon. Evidence weathers off, and some policies have timing expectations. Same-week inspections are typical after a local storm cell. Call (470) 236-1410.' },
      { q: 'Will filing a claim raise my rates?', a: 'Carriers vary. We document facts; you decide whether to file. We never file without your go-ahead and we don’t invent rate predictions.' },
      { q: 'What if the adjuster only approves a small repair?', a: 'That is common. We review the estimate line by line and supplement for missed damage, code-required items, and matching when justified — without promising outcomes.' },
      { q: 'Do you charge for the inspection?', a: 'Storm inspections for homeowners in our service area are free. Tarping for active leaks is quoted clearly if needed.' },
      { q: 'Can you tarp the same day?', a: 'Often yes when the deck is open or water is pouring and access is safe. Permanent repair follows a written scope.' },
    ],
    featuredLinks: [
      { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage roof repair Dallas' },
      { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency roof repair Dallas' },
      { href: '/services/roof-insurance-claims/', label: 'Roof insurance claims help' },
      { href: '/roof-repair-dallas-ga/', label: 'Roof repair in Dallas, GA' },
    ],
    deepenBlocks: [
      {
        title: 'What we look for after wind and hail',
        body: 'Lifted or creased shingles, bruised mats, missing tabs, ridge caps out of line, punctures from limbs, and flashing that pulled at chimneys, walls, and boots. Interior clues — new ceiling rings, damp insulation — help confirm the path. We photograph what we find so you’re not relying on memory when the adjuster arrives. We don’t invent storm frequency charts.',
      },
      {
        title: 'Temporary protection vs permanent repair',
        body: 'If the deck is open or water is pouring, temporary tarp or covering comes first when access is safe. Permanent storm damage roof repair follows a written scope: replace damaged shingles, rebuild flashing, or discuss replacement when bruising is widespread or the roof was already near end of life. We won’t pretend a handful of bruised shingles always means a full tear-off — and we won’t ignore a slope that’s cooked.',
      },
      {
        title: 'When it’s not storm damage',
        body: 'Age, poor original flashing, and deferred maintenance can look dramatic after a rain without being a covered weather event. We’ll say so. Honest scoping protects you from filing a claim that only raises friction. Questions go to (470) 236-1410 — real replies, not a ticket black hole. Contact: https://iroofercontractors.com/contact/.',
      },
    ],
    cityPrefix: 'storm-damage-roof-repair',
    cityLabel: 'Storm response by city',
  },
  'new-construction': {
    eyebrow: 'New construction',
    h1Before: 'Roofing done right from ',
    h1Accent: 'frame-up.',
    lead:
      'New builds need the roof done on schedule and to plan — not as an afterthought. iRoofer Contractors installs new-construction roofing for homeowners and builders across Dallas, GA and the west metro. Family-owned since 2019. Cristian Mendez. Licensed, bonded, insured. Owens Corning Preferred when that system is specified.',
    bullets: [
      'Custom and production builders who need a reliable roofing partner',
      'Homeowners building or finishing a home who want one accountable crew',
      'Clear scopes, sequenced installs, and clean handoffs',
      'Code-minded underlayment, flashing, and ventilation',
    ],
    processTitle: 'How we work on new construction',
    processIntro:
      'Review plans / material specs → confirm ventilation and flashing details early → schedule against the build calendar (weather-aware) → install to manufacturer and code-minded details → cleanup and walkthrough with punch list closed.',
    steps: [
      { n: '01', title: 'Spec & takeoff', body: 'Plans review, shingle and ventilation spec, and a written takeoff your GC can put on the schedule.' },
      { n: '02', title: 'Dry-in', body: 'Underlayment, ice & water where the detail calls for it, and flashings installed so the house is dried in for other trades.' },
      { n: '03', title: 'Finish roof', body: 'Shingles, ridge, vents, and accessories to the elevation package — inspected before we leave.' },
      { n: '04', title: 'Closeout', body: 'Punch list with the builder or homeowner, warranty registration when the product line allows, and photo package for the file.' },
    ],
    faqs: [
      { q: 'Can you match builder schedules?', a: 'We plan around the build calendar and weather — talk to us early so material lead times do not stall dry-in.' },
      { q: 'Do you only use one shingle brand?', a: 'Owens Corning systems when specified/preferred; other architectural lines when the plan calls for them — ask on the estimate.' },
      { q: 'Homeowner vs builder billing?', a: 'We’ll set expectations in writing before start.' },
      { q: 'Are you familiar with local inspection requirements?', a: 'We install to current Georgia residential code expectations for underlayment, ice barriers where required, and ventilation — and we show up for re-inspection if the county asks.' },
      { q: 'What about gutters on a new build?', a: 'We can hang seamless gutters after the roof so drip edge and fascia are done as one system. Ask for a combined quote — see our gutter approach sized to the roof that feeds them.' },
    ],
    featuredLinks: [
      { href: '/services/roof-replacement/', label: 'Roof replacement service' },
      { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement Dallas' },
      { href: '/gutter-repair-replacement-dallas-ga/', label: 'Gutters Dallas' },
      { href: '/contact/', label: 'Contact iRoofer' },
    ],
    deepenBlocks: [
      {
        title: 'Materials and details we talk through early',
        body: 'Architectural asphalt systems (including Owens Corning lines when specified), underlayment choices, ice and water protection at eaves and valleys where the detail calls for it, intake and exhaust ventilation, and drip edge that actually kicks water into the gutter. Getting these decisions on paper before the trusses are loaded saves change-order noise later. Builders often care about sequencing with framers, HVAC curb/boot timing, and final punch before CO. Homeowners building a one-off care about color against brick and trim, warranty registration, and who to call if a nail pop shows up after the first season.',
      },
      {
        title: 'Coordination with other trades',
        body: 'We’d rather know about skylights, solar prep, or complex valleys before we’re on the roof with shingles staged. If a detail isn’t in the plan set, we flag it instead of improvising a leak path. West Metro Atlanta weather swings — spring storms, summer UV, wet winters — punish asphalt, flashing, and ventilation shortcuts.',
      },
      {
        title: 'Why local matters on new construction',
        body: 'Storm-chaser crews disappear when the subdivision moves on. We’re based in Dallas year-round — same phone number for the builder’s warranty callback and the homeowner’s first heavy rain. Family-owned since 2019 under Cristian Mendez. Licensed, bonded, and insured. Start a conversation: (470) 236-1410 · https://iroofercontractors.com/contact/.',
      },
    ],
    cityPrefix: 'new-construction',
    cityLabel: 'New construction by city',
  },
};

export function comboCities() {
  return cities.filter((c) => c.combo !== false);
}
