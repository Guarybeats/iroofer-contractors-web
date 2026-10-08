import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('marietta');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Marietta, GA Roofing: Repair, Replacement & Storm | iRoofer',
  description:
    'Marietta roof repair, replacement & storm help from a family-owned crew in nearby Dallas, GA. City vs. Cobb permits sorted first. Call (470) 236-1410.',
  alternates: { canonical: `${brand.url}/service-areas/marietta/` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/marietta/`,
    title: 'Marietta, GA Roofing: Repair, Replacement & Storm | iRoofer',
    description:
      'Marietta roof repair, replacement & storm help from a family-owned crew in nearby Dallas, GA. City vs. Cobb permits sorted first. Call (470) 236-1410.',
  },
};

const intro = [
  'Leak that showed up after the last storm? Roof that’s simply worn out? Hail or wind damage you need documented for insurance? iRoofer Contractors handles all three across Marietta, from homes near the Square to East Cobb two-stories. We’re family-owned in Dallas, GA since 2019, and we install as an Owens Corning Preferred Contractor when that system fits the house.',
  'Every job starts with a free inspection, photos of what we find, and a written scope. Visit https://iroofercontractors.com/contact/ or call (470) 236-1410.',
];

const sections = [
  {
    h2: 'Roof repair in Marietta',
    paras: [
      'Most repair calls east of our shop come down to flashing at walls and chimneys, worn valleys, lifted ridge caps, or a cracked pipe boot, not the whole roof. On older homes near the Square and mid-century Cobb houses, the leak usually starts at a tie-in or flashing detail. We find the real entry point, photograph it, and quote the repair in writing. Details: [roof repair in Marietta](/roof-repair-marietta/).',
    ],
  },
  {
    h2: 'Roof replacement in Marietta',
    paras: [
      'When the roof is at the end of its life, we tear off to the deck and rebuild it properly. Before we quote, we confirm whether your address is permitted by the City of Marietta or Cobb County, and whether historic review applies. Full replacement details, including older plank-decked homes and East Cobb HOAs: [roof replacement in Marietta](/roof-replacement-marietta/).',
    ],
  },
  {
    h2: 'Storm damage and emergency roof repair in Marietta',
    paras: [
      'Spring and summer cells cross Cobb County often enough that partial wind and hail damage is common: a few slopes lifted, ridge caps loose, dented gutters and vents. Water coming in? Call (470) 236-1410 and say it’s active. We tarp the same day when the schedule and safe access allow. Then we document slope by slope with dated photos, write a scope your adjuster can check, and meet the adjuster on site if you want us there. If the damage won’t support a claim, we’ll tell you and quote the repair. Details: [storm damage roof repair in Marietta](/storm-damage-roof-repair-marietta/) · [emergency roof repair](/emergency-roof-repair-dallas-ga/).',
    ],
  },
  {
    h2: 'Marietta neighborhoods and the roofs we see',
    paras: [
      'Marietta Square and the historic corridors: steep, cut-up roofs and period-sensitive color and profile choices. East Cobb along Roswell Road and Powers Ferry: mid-century ranches and later two-stories, many under HOA rules. The Whitlock Avenue corridor, west Marietta, and the Kennesaw Mountain side. On older homes, expect a conversation about plank decking and chimney flashing. On newer builds, ventilation and gutter discharge matter as much as the shingle. Gutters: [gutter repair in Marietta](/gutter-repair-replacement-marietta/). Same family-owned crew, same cleanup and magnetic nail sweeps wherever the job is.',
    ],
  },
];

const neighborhoods = [
  'Marietta Square & historic district',
  'East Cobb / Roswell Road',
  'Powers Ferry',
  'Whitlock Avenue corridor',
  'West Marietta',
  'Kennesaw Mountain side',
];

const faq = [
  {
    q: 'Do you work in Marietta regularly?',
    a: 'Yes: repairs, replacements, storm work, gutters and new-construction roofs across Marietta and East Cobb, from our shop at 152 Freedom Dr in Dallas.',
  },
  {
    q: 'Who permits a roof replacement at a Marietta address?',
    a: 'It depends on the tax district in the county parcel lookup: “(4) MARIETTA” means the City of Marietta, “(9) UNINCORPORATED” means Cobb County. Historic districts can also require a Certificate of Appropriateness. We confirm before we quote.',
  },
  {
    q: 'How fast can you get to a Marietta leak?',
    a: 'Active leaks are a priority. We tarp the same day when the schedule and safe access allow, then schedule the permanent repair once we can inspect it dry.',
  },
  {
    q: 'Do you help with Cobb County insurance claims?',
    a: 'Yes: dated photos, roof diagram, written scope, adjuster meeting on request. If it won’t support a claim, we tell you and quote the repair.',
  },
  {
    q: 'Are you local?',
    a: 'Yes. Shop at 152 Freedom Dr, Dallas, GA 30157. Family-owned since 2019.',
  },
];

const relatedLinks = [
  { href: '/roof-repair-marietta/', label: 'Roof repair in Marietta, GA' },
  { href: '/roof-replacement-marietta/', label: 'Roof replacement in Marietta, GA' },
  { href: '/storm-damage-roof-repair-marietta/', label: 'Storm damage roof repair in Marietta' },
  { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency roof repair' },
  { href: '/gutter-repair-replacement-marietta/', label: 'Gutter repair in Marietta' },
  { href: '/services/roof-insurance-claims/', label: 'Insurance claims help' },
  { href: '/service-areas/kennesaw/', label: 'Kennesaw service area' },
  { href: '/contact/', label: 'Contact iRoofer' },
];

export default function MariettaPage() {
  return (
    <CityAreaPage
      city={city}
      h1="Roofing in Marietta, GA: Repair, Replacement & Storm Help"
      intro={intro}
      sections={sections}
      neighborhoods={neighborhoods}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
