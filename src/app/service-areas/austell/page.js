import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('austell');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Roofing in Austell, GA | Repair & Replacement | iRoofer',
  description:
    'Family-owned roofer serving Austell, GA (Cobb County). Emergency tarping, roof repair, full replacement, gutters and drainage, storm claim documentation. Free inspection — call (470) 236-1410.',
  alternates: { canonical: `${brand.url}/service-areas/austell` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/austell`,
    title: 'Roofing in Austell, GA — iRoofer Contractors',
    description:
      'Austell roof repair, emergency tarping and replacement from a family-owned crew based in Dallas, GA. Free photo-documented inspections.',
  },
};

const intro = [
  'iRoofer Contractors serves Austell from our base in Dallas, GA. Austell sits along the Cobb and Douglas county line in the Sweetwater Creek basin, and water is the theme of roofing here — not just what comes through the roof, but where it goes once it leaves the gutters.',
  'We handle emergency tarping, roof repair, full replacement, new-construction roofing, gutter and downspout work, and storm and insurance claim documentation. Inspections are free and come back as dated photos with plain notes on what needs doing now versus what can wait.',
];

const sections = [
  {
    h2: 'Drainage matters more here than almost anywhere we work',
    paras: [
      'Austell has a long history with high water in the creek bottoms, and while a roofer cannot change a floodplain, we can make sure your roof is not adding to the problem. Overflowing or back-pitched gutters dump hundreds of gallons at the foundation during a single Georgia thunderstorm, right where you least want it on a low-lying lot.',
      'On every Austell inspection we check gutter pitch, downspout capacity, and where the water actually discharges — not just whether the shingles are intact. Correcting drainage is usually the cheapest part of the job and the part that protects the most house.',
    ],
  },
  {
    h2: 'Emergency tarping and same-week repairs',
    paras: [
      'When a storm opens a roof, the priority is stopping water before the next band arrives — drywall, insulation, and framing all get expensive fast. We tarp properly, fastened and lapped to shed water rather than draped and weighted, and we photograph the damage before it is covered so your claim is documented before the repair changes the evidence.',
      'Once the roof is dry we come back and do the permanent repair with a clear scope, so you are not living under a blue tarp for a month waiting on a contractor who has moved on to the next neighborhood.',
    ],
  },
  {
    h2: 'Older Austell housing stock: what we find under the shingles',
    paras: [
      'Much of Austell was built well before current code, and we regularly find plank decking instead of plywood, a previous layer left in place under the current shingles, missing or undersized drip edge, and chimney flashing that was caulked rather than stepped. Each of those affects how a new roof fastens and performs.',
      'We look for these at the estimate and tell you what we expect to find, so the number you get reflects the real job. When the deck is exposed we photograph it, so if sheathing or rot repair is needed you can see exactly what you are paying for rather than taking our word for a change order.',
    ],
  },
  {
    h2: 'Storm claims along the county line',
    paras: [
      'Austell catches the cells that track up the I-20 corridor, and wind damage here is often partial — a couple of slopes stripped, ridge caps lifted, fasteners backed out — which is exactly the kind of loss that gets underpaid when it is documented poorly.',
      'We photograph with dates, test soft metals such as vents and gutter aprons for impact, mark the affected slopes on a roof diagram, write a scope an adjuster can verify, and meet the adjuster on the roof. If the damage will not support a claim we say so and quote the repair directly, rather than sending you into a process that ends in a denial.',
    ],
  },
];

const neighborhoods = [
  'Downtown Austell',
  'Sweetwater Creek area',
  'Veterans Memorial Highway corridor',
  'Clarkdale',
  'Riverside / Six Flags side',
  'Powder Springs Road',
];

const faq = [
  {
    q: 'Can you tarp my roof today?',
    a: 'For active leaks we prioritize same-day emergency tarping. We fasten and lap the tarp so it actually sheds water, and we photograph the damage before covering it so your insurance claim is documented first.',
  },
  {
    q: 'My gutters overflow every heavy rain. Is that a roof problem?',
    a: 'It is a roof-system problem, and on a low-lying Austell lot it matters. Overflow usually means clogged, back-pitched, or undersized gutters and downspouts. We check pitch, capacity, and where water discharges on every inspection, and correct it as part of the scope.',
  },
  {
    q: 'My house is older. Will you find surprises during the tear-off?',
    a: 'Sometimes, which is why we look first. Plank decking, an old layer left underneath, missing drip edge and caulked chimney flashing are all common in Austell. We flag what we expect at the estimate and photograph the deck once it is exposed.',
  },
  {
    q: 'Do you handle insurance claims?',
    a: 'Yes — dated photos, soft-metal impact testing, a roof diagram, a written scope, and we meet your adjuster on site. If we do not think the damage supports a claim, we tell you and quote the repair instead.',
  },
  {
    q: 'Are you actually local to Austell?',
    a: 'We are based at 152 Freedom Dr in Dallas, GA — about 20 miles northwest — and Austell has been part of our regular service area for years. Same crew chief through the whole job, and a real phone number that we answer.',
  },
];

export default function AustellPage() {
  return <CityAreaPage city={city} intro={intro} sections={sections} neighborhoods={neighborhoods} faq={faq} />;
}
