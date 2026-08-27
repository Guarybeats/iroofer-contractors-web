import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('canton');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Roofing in Canton, GA | Repair & Replacement | iRoofer',
  description:
    'Family-owned roofer serving Canton, GA (Cherokee County). Hail and wind damage inspections, insurance claim documentation, roof repair, full replacement and gutters. Free inspection — call (470) 236-1410.',
  alternates: { canonical: `${brand.url}/service-areas/canton` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/canton`,
    title: 'Roofing in Canton, GA — iRoofer Contractors',
    description:
      'Canton hail damage inspections, roof repair and replacement from a family-owned crew based in Dallas, GA. Free photo-documented reports.',
  },
};

const intro = [
  'iRoofer Contractors serves Canton and north Cherokee County from our shop in Dallas, GA. Canton is the reason we watch hail reports as closely as we watch wind: storm cores tracking along the north Georgia foothills regularly drop hail on Cherokee County that never reaches Atlanta at all.',
  'We handle hail and wind damage inspections, insurance claim documentation, roof repair, full replacement, new-construction roofing, and gutters. Inspections are free and come back as dated photos with plain notes — including an honest read on whether you have a claim.',
];

const sections = [
  {
    h2: 'What hail damage actually looks like on a Canton roof',
    paras: [
      'Hail damage is the most misunderstood loss in roofing, because the thing adjusters look for is often invisible from the ground. On an asphalt shingle, a hail hit shows as a bruise — a soft spot where the mat has been fractured and granules knocked loose — not usually a hole. Those bruises can be felt more reliably than they can be seen, and they let water through years later.',
      'The corroborating evidence matters just as much. We check soft metals — vent caps, gutter aprons, downspouts, flashing, and any metal trim — for the round dents that establish hail actually fell at that address and roughly how large it was. Without that supporting evidence, a bruised-mat claim is much harder to get approved.',
    ],
  },
  {
    h2: 'Claim documentation that stands up',
    paras: [
      'Our Canton inspection is built around what an adjuster has to verify: dated photographs of every slope, marked test squares, soft-metal dent photos, hail size estimates where we can support them, and damage plotted on a roof diagram, followed by a written scope of work tied to that evidence.',
      'Then we meet your adjuster on the roof, walk the same test squares with them, and handle supplements if items are missed. And when the evidence is not there, we say so — north Cherokee gets enough real hail that nobody needs to be talked into a claim they will lose.',
    ],
  },
  {
    h2: 'The storm-chaser season in Cherokee County',
    paras: [
      'A hail event in Canton is followed within days by out-of-town crews canvassing subdivisions. Some do good work. Many will not be reachable when a workmanship issue shows up two winters later, and some ask homeowners to sign contingency agreements that commit them to that contractor regardless of the claim outcome.',
      'Before you sign anything: get a dated photo report from a company with a verifiable local address and local reviews, and read the paperwork. We are at 152 Freedom Dr in Dallas, GA, family-owned since 2019, with 54 verified 5★ Google reviews — and we will still be at that number after the season ends.',
    ],
  },
  {
    h2: 'Replacements built for foothill weather',
    paras: [
      'North Cherokee sits higher and gets more genuine winter weather than the metro does, so ice and water protection at the eaves and valleys matters more here, along with correct starter courses and properly fastened ridge and hip caps for the wind that comes off the ridgelines.',
      'We also correct attic ventilation as part of every replacement — balanced intake and exhaust rather than a ridge vent starved by blocked soffits. Canton has a lot of newer subdivision housing built to minimum ventilation spec, and getting the airflow right is the cheapest thing available for extending shingle life through a Georgia summer.',
    ],
  },
];

const neighborhoods = [
  'Downtown Canton',
  'I-575 corridor',
  'Hickory Flat side',
  'Bridgemill',
  'Ball Ground / north Cherokee',
  'Etowah River area',
];

const faq = [
  {
    q: 'How do I know if I have hail damage? My roof looks fine.',
    a: 'That is normal — hail damage on asphalt shingles is usually a bruised mat rather than a hole, and it is easier to feel than to see from the ground. We check soft metals like vent caps and gutter aprons for dents as corroborating evidence, and give you dated photos either way.',
  },
  {
    q: 'How long do I have to file a hail claim?',
    a: 'That depends on your policy and insurer, so check your documents — but the practical answer is sooner is better. Evidence degrades, and later filings draw more scrutiny about when the damage occurred. A free inspection now gives you a dated record even if you wait to file.',
  },
  {
    q: 'Will you meet my insurance adjuster?',
    a: 'Yes. We walk the roof with the adjuster, show the same marked test squares and soft-metal evidence we documented, and handle supplements when items get missed in the first estimate.',
  },
  {
    q: 'Are you local to Canton?',
    a: 'We are based at 152 Freedom Dr, Dallas, GA — west of Canton in Paulding County — and north Cherokee is part of our regular service area. You get a fixed local address, local reviews, and the same crew chief through the whole job.',
  },
  {
    q: 'Does Canton weather change what you install?',
    a: 'Somewhat. North Cherokee sits higher and sees more real winter weather, so eave and valley water protection and properly fastened ridge and hip caps matter more here. We also balance attic intake and exhaust ventilation on every replacement.',
  },
];

export default function CantonPage() {
  return <CityAreaPage city={city} intro={intro} sections={sections} neighborhoods={neighborhoods} faq={faq} />;
}
