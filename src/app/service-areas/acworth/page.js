import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('acworth');

export const metadata = {
  title: 'Roofing in Acworth, GA — Roof Repair, Replacement & Leak Detection | iRoofer Contractors',
  description:
    'Family-owned roofer serving Acworth, GA (Cobb County). Leak tracing, full tear-offs, ventilation upgrades, gutters and storm claim help near Lake Acworth and Allatoona. Free inspection — call (470) 236-1410.',
  alternates: { canonical: `${brand.url}/service-areas/acworth` },
  openGraph: {
    url: `${brand.url}/service-areas/acworth`,
    title: 'Roofing in Acworth, GA — iRoofer Contractors',
    description:
      'Acworth roof repair, replacement and leak detection from a family-owned crew based in Dallas, GA. Free photo-documented inspections.',
  },
};

const intro = [
  'iRoofer Contractors works Acworth from our shop in Dallas, GA, a short run west. Acworth is a lake town with two very different sides to it: the older cottages and in-town streets near the historic depot, and the lakefront and near-lake homes around Lake Acworth and Lake Allatoona, many of them heavily shaded by mature hardwoods.',
  'We handle roof repair, full replacement, new-construction roofing, gutters, and storm and insurance claim documentation. Every Acworth inspection is free and comes back as dated photos with plain notes, so you can see the roof for yourself instead of taking a salesman at his word.',
];

const sections = [
  {
    h2: 'Shade, moisture and lake-adjacent roofs',
    paras: [
      'Heavy tree cover is the defining feature of roofing near the lakes. Shaded north-facing slopes stay damp long after the rest of the roof dries, which encourages algae streaking and moss along shingle edges, and constant leaf litter in valleys holds water where it should be shedding. None of that is cosmetic — a valley packed with debris backs water under the shingles.',
      'When we inspect an Acworth roof we look specifically at valley cleanliness, the condition of shingle edges on shaded slopes, and whether overhanging limbs are abrading the surface every time the wind blows. Trimming back branches and keeping valleys clear buys years of roof life for almost nothing, and we will tell you that even when it means we do not sell you a roof this year.',
    ],
  },
  {
    h2: 'Leak tracing on complicated older rooflines',
    paras: [
      'In-town Acworth homes have often been added onto more than once, and each addition creates a tie-in where a lower roof meets a wall. In our experience that flashing — not the field of the roof — is where most Acworth leaks start, along with chimney counter-flashing that was sealed with caulk rather than properly stepped in.',
      'A stain on a ceiling is rarely directly under the entry point, so we trace the actual water path from the attic side where we can, rather than patching the nearest visible spot and hoping. That is slower on the day and cheaper over the life of the roof.',
    ],
  },
  {
    h2: 'Clean tear-offs on tight and sloped lots',
    paras: [
      'Lake-area lots are frequently narrow, sloped, or landscaped right up to the drip edge, and driveways are often shared or steep. We plan staging before the truck arrives: tarps and plywood over beds and walkways, protection around A/C units and boat trailers, materials placed where they will not block access, and rolling magnets across the whole perimeter at the end of every day — twice on the final day.',
      'Docks, decks, and lawns near the water get the same care. Debris that ends up in the lake is not something a magnet fixes later.',
    ],
  },
  {
    h2: 'Ventilation upgrades that actually change the numbers',
    paras: [
      'Most Acworth homes we open have unbalanced attic ventilation — a ridge vent installed above soffits that were never opened up enough to feed it. The result is a superheated attic in a Georgia summer, shingles cooking from underneath, and an HVAC system working against the roof.',
      'We correct intake and exhaust together during a replacement, which is inexpensive at that stage and impossible to retrofit cheaply afterwards. We also check that gutters and downspouts discharge well away from the foundation, since a lake-country lot with poor drainage will find its way into a crawlspace eventually.',
    ],
  },
];

const neighborhoods = [
  'Historic downtown & the depot',
  'Lake Acworth',
  'Lake Allatoona shoreline',
  'Cobb Parkway / Old 41',
  'Baker Road area',
  'Brookstone side',
];

const faq = [
  {
    q: 'Why does the shaded side of my Acworth roof look so much worse?',
    a: 'Shaded slopes stay wet longer, which encourages algae, moss and debris buildup along shingle edges and in valleys. It often looks like failure when it is really a moisture and maintenance issue — an inspection will tell you which one you have.',
  },
  {
    q: 'Should I have trees trimmed back before a new roof?',
    a: 'Yes, wherever limbs touch or overhang the roof. Branches abrade shingles in the wind and drop the debris that clogs valleys and gutters. Trimming before a replacement protects the new roof from day one.',
  },
  {
    q: 'My ceiling stain is in the middle of the room. Can you find the leak?',
    a: 'That is normal — water travels along decking and framing before it shows. We trace the path from the attic side where access allows, so the repair addresses the entry point rather than the stain.',
  },
  {
    q: 'How do you protect landscaping and the lawn on a tear-off?',
    a: 'Tarps and plywood over beds and walkways, protection around A/C units and anything parked nearby, staged material placement, and rolling magnet sweeps across the perimeter at the end of each day.',
  },
  {
    q: 'Do you handle storm claims in Cobb County?',
    a: 'Yes. We document damage with dated photos and a roof diagram, test soft metals for impact, write the scope of work, and meet your adjuster on site. If the damage will not support a claim, we tell you and quote the repair instead.',
  },
];

export default function AcworthPage() {
  return <CityAreaPage city={city} intro={intro} sections={sections} neighborhoods={neighborhoods} faq={faq} />;
}
