import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('hiram');

export const metadata = {
  title: 'Roofing in Hiram, GA — Roof Repair & Replacement | iRoofer Contractors',
  description:
    'Family-owned roofer serving Hiram, GA (Paulding County) — minutes from our Dallas, GA shop. Roof repair, architectural shingle replacement, gutters and storm claim help. Free inspection — call (470) 236-1410.',
  alternates: { canonical: `${brand.url}/service-areas/hiram` },
  openGraph: {
    url: `${brand.url}/service-areas/hiram`,
    title: 'Roofing in Hiram, GA — iRoofer Contractors',
    description:
      'Hiram roof repair and replacement from a family-owned crew based minutes away in Dallas, GA. Free photo-documented inspections.',
  },
};

const intro = [
  'Hiram is about as close to home as it gets for us — a few minutes down Highway 92 from our shop at 152 Freedom Dr in Dallas. We are on Hiram roofs most weeks, which is why we can usually be at a leak the same day you call rather than the middle of next week.',
  'We handle roof repair, full replacement, new-construction roofing, gutters, and storm and insurance claim documentation. Inspections are free, photo-documented, and honest — if your roof has years left, the report will say so.',
];

const sections = [
  {
    h2: 'A neighbor, not a call center',
    paras: [
      'Being this close changes the practical details of the job. Materials and dumpsters stage from a shop minutes away, so delivery timing is not a guessing game. If weather stops work at noon, we can secure the roof and be back the next morning. And if you find something you are not happy with after the crew leaves, we can be back that day.',
      'It also means our reputation in Hiram is not built on advertising. Most of our work here comes from neighbors who saw the crew on a nearby roof or found us in our Google reviews — 54 of them, 5★ average — and the same crew chief runs your job from estimate to final walkthrough.',
    ],
  },
  {
    h2: 'Architectural shingle replacements that match the street',
    paras: [
      'Most Hiram replacements are family homes in subdivisions where the neighborhood has a consistent look, and where a badly chosen shingle stands out for twenty years. We bring shingle boards to the inspection so you can see profile and color against your brick, siding and trim in daylight rather than picking from a phone screen.',
      'The install itself is where longevity comes from: full tear-off to the deck, synthetic underlayment, correct starter and drip edge, and properly fastened ridge and hip caps. Most Hiram homes are a one- to two-day job, and we register the manufacturer warranty for you at completion.',
    ],
  },
  {
    h2: 'Georgia summers are what actually kill shingles here',
    paras: [
      'Paulding County roofs rarely fail from cold. They fail from heat cycling — a deck that reaches extreme temperatures every afternoon in July and August, with shingles expanding and contracting above it. The main defense is attic ventilation that is genuinely balanced, with enough intake at the eaves to feed whatever exhaust is at the ridge.',
      'We find minimum-spec or blocked intake ventilation on a large share of the Hiram roofs we open — often soffit vents choked with insulation. Correcting it during a replacement costs very little, extends shingle life, and takes measurable load off your air conditioning.',
    ],
  },
  {
    h2: 'Repairs, gutters and storm claims',
    paras: [
      'Not every roof needs replacing. Plenty of Hiram calls are a boot flashing that has cracked with age, a pipe collar, a valley that needs rebuilding, or a section of ridge cap that lifted in a gust. We quote the repair when the repair is the right answer, and we will tell you roughly how much life is left in the rest of the roof so you can plan.',
      'For storm damage we photograph with dates, test soft metals for impact, mark damage on a roof diagram, write the scope, and meet your adjuster on site. Gutters get checked on every visit too, since overflowing or back-pitched gutters rot fascia and soak the foundation regardless of how good the shingles are.',
    ],
  },
];

const neighborhoods = [
  'Highway 92 corridor',
  'Hiram / Dallas line',
  'Bill Carruth Parkway area',
  'Nebo Road',
  'Cedarcrest side',
  'Old Cartersville Road',
];

const faq = [
  {
    q: 'How quickly can you get to Hiram?',
    a: 'Hiram is minutes from our Dallas, GA shop, so active leaks are normally same-day. We stop the water first, then schedule the permanent repair once the roof is dry enough to diagnose properly.',
  },
  {
    q: 'Can I see shingle colors before I decide?',
    a: 'Yes. We bring shingle boards to the free inspection so you can hold options against your brick, siding and trim in daylight, and the exact product and color goes into the written scope.',
  },
  {
    q: 'Why does my upstairs stay so hot in the summer?',
    a: 'Very often it is attic ventilation rather than insulation — blocked or undersized intake at the soffits starving the ridge vent. We check intake and exhaust balance on every inspection and correct it during a replacement, when it is cheap to do.',
  },
  {
    q: 'Does my roof need replacing or just a repair?',
    a: 'Plenty of Hiram calls turn out to be a cracked boot flashing, a pipe collar, a valley, or lifted ridge caps. If a repair is right we quote the repair, and we tell you how much life the rest of the roof has so you can plan ahead.',
  },
  {
    q: 'How long does a replacement take?',
    a: 'Most Hiram homes are one to two days. Deck repairs found at tear-off or steeper, more complex rooflines can add a day — we call you the same day if anything under the shingles changes the plan.',
  },
];

export default function HiramPage() {
  return <CityAreaPage city={city} intro={intro} sections={sections} neighborhoods={neighborhoods} faq={faq} />;
}
