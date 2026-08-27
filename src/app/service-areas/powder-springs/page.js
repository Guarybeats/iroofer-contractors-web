import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('powder-springs');

export const metadata = {
  title: 'Roofing in Powder Springs, GA — Repair, Replacement & Tree Damage | iRoofer Contractors',
  description:
    'Family-owned roofer serving Powder Springs, GA (Cobb County). Ranch and two-story replacements, tree and limb damage repair, ventilation upgrades, gutters, storm claims. Free inspection — call (470) 236-1410.',
  alternates: { canonical: `${brand.url}/service-areas/powder-springs` },
  openGraph: {
    url: `${brand.url}/service-areas/powder-springs`,
    title: 'Roofing in Powder Springs, GA — iRoofer Contractors',
    description:
      'Powder Springs roof repair, replacement and limb-damage response from a family-owned crew based in Dallas, GA. Free photo reports.',
  },
};

const intro = [
  'iRoofer Contractors serves Powder Springs from our shop in Dallas, GA. Powder Springs is a mature Cobb County town — a lot of 1970s and 1980s ranches and split-levels alongside newer two-story subdivisions, and a heavy tree canopy over most of it.',
  'We handle roof repair, full replacement, new-construction roofing, gutters, and storm and insurance claim documentation. Inspections are free and come back as dated photos with plain notes on what needs doing now and what can wait a season.',
];

const sections = [
  {
    h2: 'Trees: the biggest single risk to a Powder Springs roof',
    paras: [
      'The tree canopy that makes these neighborhoods pleasant is also the main thing that damages their roofs. We see three patterns repeatedly: abrasion where limbs rub shingles in the wind and scrub the granules off in a stripe, impact damage from falling limbs during summer storms, and constant leaf litter packing valleys and gutters so water backs up under the shingles instead of shedding.',
      'Limb strikes need care because the visible dent is not always the extent of the damage — decking can be cracked under an intact-looking shingle. When we inspect after a limb comes down we check the deck from the attic side where we can get access, not just the surface, and we photograph everything for your claim.',
    ],
  },
  {
    h2: 'Ranches, split-levels and steep two-stories',
    paras: [
      'Powder Springs housing spans a wide range of roof geometry, and the right approach differs across it. Single-slope ranch roofs are straightforward but often have low-slope porch or carport sections tied into them, which need a different detail than the main field — a place where sealant gets used as a shortcut and fails.',
      'Split-levels bring their own weak point: the tie-in where the upper roof meets the lower wall, which is where a large share of local leaks originate. On the newer two-story subdivisions the challenges are pitch and access rather than detailing. We quote the actual geometry of your house instead of pricing by square footage alone, and steep-slope staging is in the number from the start.',
    ],
  },
  {
    h2: 'Older roofs, previous layers and deck condition',
    paras: [
      'On homes of this age we frequently find a previous shingle layer left in place under the current one, plank decking rather than plywood, missing or undersized drip edge, and chimney flashing that was sealed with caulk instead of stepped in properly. All of it affects how a new roof fastens and how long it lasts.',
      'We look for these signs at the estimate and tell you what we expect to find, so the price reflects the real job. Once the deck is exposed we photograph it — if sheathing or rot repair is needed, you see the reason before you approve it.',
    ],
  },
  {
    h2: 'Ventilation, gutters and cooling bills',
    paras: [
      'Attic ventilation on homes of this era was usually built to the minimum, and decades of added insulation have often blocked what intake there was. The result is a superheated attic in July, shingles aging from underneath, and an HVAC system fighting the roof all afternoon.',
      'We balance intake and exhaust during replacements, which is inexpensive at that point and awkward to retrofit later. We also check gutter pitch and downspout discharge on every inspection — under a heavy canopy, gutters clog faster than owners expect, and overflow rots fascia and soaks the foundation.',
    ],
  },
];

const neighborhoods = [
  'Downtown Powder Springs',
  'Silver Comet Trail corridor',
  'Macland Road area',
  'Lost Mountain side',
  'Florence Road',
  'Hiram–Powder Springs Road',
];

const faq = [
  {
    q: 'A limb fell on my roof. Do I need a full replacement?',
    a: 'Not usually, but it needs a proper look. The visible damage can hide cracked decking underneath, so we inspect the surface and the deck from the attic side where access allows, photograph everything for your claim, and quote the repair if a repair will do.',
  },
  {
    q: 'Branches are touching my roof. Does that really matter?',
    a: 'Yes. Limbs rubbing in the wind scrub granules off the shingles in a stripe, which shortens roof life in that area significantly. Trimming back overhanging limbs is one of the cheapest things you can do for your roof.',
  },
  {
    q: 'I have a carport with a flat roof tied into my shingles. Can you do both?',
    a: 'Yes — and that transition is exactly where shortcuts fail. Low-slope sections need a different detail than the steep field above them, not sealant over the seam.',
  },
  {
    q: 'My house was built in the 1970s. What should I expect?',
    a: 'Commonly a previous shingle layer left in place, plank decking, missing drip edge, or caulked chimney flashing. We flag what we expect at the estimate and photograph the deck once it is open, so any additional work is visible rather than asserted.',
  },
  {
    q: 'Why is my upstairs so hot even with good insulation?',
    a: 'Usually blocked or undersized attic intake ventilation, often insulation packed over the soffit vents. We check intake and exhaust balance on every inspection and correct it during a replacement.',
  },
];

export default function PowderSpringsPage() {
  return <CityAreaPage city={city} intro={intro} sections={sections} neighborhoods={neighborhoods} faq={faq} />;
}
