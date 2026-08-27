import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('douglasville');

export const metadata = {
  title: 'Roofing in Douglasville, GA — Storm Damage, Repair & Replacement | iRoofer Contractors',
  description:
    'Family-owned roofer serving Douglasville, GA (Douglas County). Wind and hail claim documentation, roof repair, full replacement, new construction and gutters. Free inspection — call (470) 236-1410.',
  alternates: { canonical: `${brand.url}/service-areas/douglasville` },
  openGraph: {
    url: `${brand.url}/service-areas/douglasville`,
    title: 'Roofing in Douglasville, GA — iRoofer Contractors',
    description:
      'Douglasville storm damage documentation, roof repair and replacement from a family-owned crew based in Dallas, GA. Free photo reports.',
  },
};

const intro = [
  'iRoofer Contractors serves Douglasville from our shop in Dallas, GA, straight down Highway 61. Douglas County is one of our busiest storm markets: cells organizing west of Atlanta tend to hit here first, and Douglasville takes a lot of straight-line wind in spring and early summer.',
  'We handle roof repair, full replacement, new-construction roofing, gutters, and storm and insurance claim documentation. Inspections are free and photo-documented, and we are direct about whether you have a claim, a repair, or a roof that is fine for now.',
];

const sections = [
  {
    h2: 'Straight-line wind damage and what it actually looks like',
    paras: [
      'Most Douglasville wind losses are not obvious from the driveway. What we find on the roof is creased shingles that have been folded back and laid down again, ridge caps lifted or missing, fasteners backed out along a single slope, and torn mats at rakes and eaves where the wind got underneath. From the ground, all of that can look like an intact roof.',
      'Wind damage is also directional — it usually concentrates on the slopes that faced the storm — which is why a proper inspection covers every plane rather than the one the homeowner noticed. A creased shingle has lost its seal and will leak in the next hard rain even though it is still technically in place.',
    ],
  },
  {
    h2: 'Insurance claims: documentation is the whole game',
    paras: [
      'We have seen more Douglasville claims underpaid for poor documentation than denied for lack of damage. So we do it properly: dated photographs of every affected slope, soft-metal test squares on vents, gutter aprons and downspouts, damage marked on a roof diagram, and a written scope of work an adjuster can verify against the same evidence.',
      'Then we meet your adjuster on the roof rather than leaving you to interpret their report alone, and we handle supplements when items are missed. Where we differ from the crews that show up after a storm: if the damage does not support a claim, we tell you and quote the repair directly. We would rather do a small honest repair than help you spend a deductible on a filing that gets denied.',
    ],
  },
  {
    h2: 'The I-20 corridor and the storm-chaser problem',
    paras: [
      'Every significant Douglas County storm brings out-of-state crews canvassing neighborhoods within days. Some are legitimate. Many will be gone before your warranty means anything, and some ask you to sign a contingency agreement that binds you to them regardless of what your insurer decides.',
      'Our advice, whether you hire us or not: get a dated photo report from a company with a verifiable local address and local reviews, read anything before you sign it, and never let someone onto your roof who cannot tell you where their shop is. We are at 152 Freedom Dr in Dallas, GA, and we will still be answering that number next season.',
    ],
  },
  {
    h2: 'Replacements, ventilation and the ridge',
    paras: [
      'Douglasville has a lot of 1990s and 2000s subdivision housing now reaching shingle end-of-life, much of it with minimum-spec attic ventilation. Unbalanced airflow bakes the deck through Georgia summers, shortens shingle life, and raises cooling costs — and it is cheap to correct during a replacement, expensive to fix afterwards.',
      'We also pay attention to the ridge and hip detailing on replacements, since that is where wind damage repeatedly starts here. Properly fastened ridge caps and correctly sized ventilation are the difference between a roof that shrugs off the next storm and one that we see again in two years.',
    ],
  },
];

const neighborhoods = [
  'Downtown Douglasville',
  'Arbor Place / Chapel Hill',
  'Highway 78 corridor',
  'Fairplay & Mount Vernon',
  'Bill Arp Road area',
  'Lithia Springs side',
];

const faq = [
  {
    q: 'How do I know if the last storm damaged my roof?',
    a: 'Often you cannot tell from the ground — wind damage shows as creased shingles, lifted ridge caps, backed-out fasteners, and torn mats at the edges. A free inspection gives you dated photos of every slope so you know either way.',
  },
  {
    q: 'Should I file a claim?',
    a: 'Only if the evidence supports one. We inspect first and tell you honestly. If it does, we document it properly and meet your adjuster. If it does not, we quote the repair directly instead of putting you through a filing that ends in a denial.',
  },
  {
    q: 'A crew knocked on my door after the storm. Should I sign their paperwork?',
    a: 'Not on the spot. Many contingency agreements commit you to that contractor no matter how the claim turns out. Get a second opinion from a local company with a real address and local reviews, and read the document first.',
  },
  {
    q: 'What is a creased shingle and why does it matter?',
    a: 'Wind lifts the shingle, folds it back, and it lays down again looking normal — but the seal strip is broken and the mat is damaged. It will leak in the next driving rain, and it is the single most commonly missed form of wind damage.',
  },
  {
    q: 'How long does a Douglasville roof replacement take?',
    a: 'Most single-family homes are one to two days. Steep pitches, multiple planes, or deck repairs found at tear-off can add a day. You get the expected window at the estimate and a same-day call if anything under the shingles changes it.',
  },
];

export default function DouglasvillePage() {
  return <CityAreaPage city={city} intro={intro} sections={sections} neighborhoods={neighborhoods} faq={faq} />;
}
