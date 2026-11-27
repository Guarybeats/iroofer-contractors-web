import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('mableton');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Mableton GA Roof Repair, Replacement & Storm | iRoofer',
  description:
    'Roof repair, replacement, storm and hail damage help and gutters in Mableton, GA (south Cobb). Family-owned since 2019. Free roof check: (470) 236-1410.',
  alternates: { canonical: `${brand.url}/service-areas/mableton/` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'New roof on a home by iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/mableton/`,
    title: 'Mableton GA Roof Repair, Replacement & Storm | iRoofer',
    description:
      'Mableton roof repair, replacement, storm documentation and gutter work from a family-owned crew based in Dallas, GA.',
  },
};

const intro = [
  'Mableton sits in south Cobb between Austell and Smyrna, with the Silver Comet Trail running through town, the Chattahoochee River on its east side, and Six Flags Over Georgia at its southern edge. It is also Cobb County’s newest and largest city, and that changes a few things about how a roofing job gets done here.',
  'iRoofer Contractors — family-owned since 2019 — works Mableton from our shop in Dallas, GA. We do roof repair, full replacement, storm and hail damage inspections with insurance documentation, and gutter work. Every job starts with a free roof check: dated photos and plain notes on what needs doing now and what can wait.',
];

const sections = [
  {
    h2: 'A new city means a new permit office',
    paras: [
      'Mableton voted to become a city in November 2022, and since March 2025 the City of Mableton — not Cobb County — handles zoning, code enforcement and building permits inside city limits. Plenty of homes with a Mableton mailing address sit outside those limits, and plenty of homeowners still assume Cobb County is the office to call.',
      'Before we schedule a replacement we confirm which office covers your parcel and pull the permit there, so the inspection is booked with the right people and your paperwork is clean if you ever sell or file a claim.',
    ],
  },
  {
    h2: 'Older ranches and newer subdivisions, side by side',
    paras: [
      'Drive Floyd Road, Mableton Parkway or Veterans Memorial Highway and you pass mid-century brick ranches, split-levels, and newer subdivisions within a few minutes of each other. The roofs age differently. On the older homes we often find layers that were never torn off, worn pipe boots, and chimney or wall flashing that was caulked instead of stepped; on newer builds, the usual early problems are ridge vents and builder-grade flashing details.',
      'We tell you at the estimate what we expect to find under the shingles, and we photograph the deck once it is exposed, so any wood repair is something you can see — not a surprise line item.',
    ],
  },
  {
    id: 'roof-repair',
    h2: 'Roof repair in Mableton',
    paras: [
      'Most Mableton calls are not storms. They are a stain on a bedroom ceiling, a drip around a bathroom vent, or shingles in the yard after a windy night. Pipe boots, step flashing, valleys and lifted shingles fail on their own schedule, and they are usually fixable without a new roof.',
      'We trace the leak to its source, show you photos, and give you a written repair scope. If repair is the honest answer, that is what we quote. How we scope repairs is laid out on [roof repair services](/roof-repair-dallas-ga/), and [roof leak repair](/roof-leak-repair-dallas-ga/) covers tracking down stubborn leaks.',
    ],
  },
  {
    h2: 'Storm and hail damage, and insurance help',
    paras: [
      'Storms tracking northeast out of Douglas County cross south Cobb on their way toward the river, and wind, hail and limb strikes here are often partial: one or two slopes, a ridge, a dented vent. That kind of loss is easy to miss from the ground and easy to under-document.',
      'After a storm we inspect free, tarp when the roof is open, and document with dated photos, soft-metal checks and a written scope. We can meet your adjuster on the roof when you file. If the damage will not support a claim, we say so and quote the repair. Details: [storm damage roof repair](/storm-damage-roof-repair-dallas-ga/), [hail damage inspections](/hail-damage-roof-repair-dallas-ga/) and [roof insurance claims help](/services/roof-insurance-claims/).',
    ],
  },
  {
    h2: 'Replacement and gutters',
    paras: [
      'When a roof is past honest repair we do a full tear-off, check the deck, and install architectural shingles. As an Owens Corning Contractor Rewards Member, we install Owens Corning shingles when they fit the house and the budget. See [roof replacement](/roof-replacement-dallas-ga/).',
      'Mableton has a lot of mature hardwoods along its creeks and older streets, which means gutters that fill fast in the fall. Clogged or back-pitched gutters push water under the shingle edge and down the fascia. We clean, re-hang, and replace gutters and downspouts — see [gutter repair and replacement](/gutter-repair-replacement-dallas-ga/).',
    ],
  },
];

const neighborhoods = [
  'Floyd Road / Mable House area',
  'Mableton Parkway',
  'Veterans Memorial Highway',
  'Silver Comet Trail corridor',
  'Six Flags side',
  'Chattahoochee River side',
];

const faq = [
  {
    q: 'Do you work in Mableton?',
    a: 'Yes, Mableton is part of our regular west-metro service area, worked from our shop in Dallas, GA. Call (470) 236-1410 or [request a free roof inspection](/contact/).',
  },
  {
    q: 'Who issues the roofing permit in Mableton — the city or Cobb County?',
    a: 'Inside Mableton city limits, the City of Mableton has handled building permits since March 2025. Some homes with a Mableton mailing address are outside the city and still go through Cobb County. We check your address and pull the permit with the right office.',
  },
  {
    q: 'Is a roof check really free?',
    a: 'Yes, we inspect, take dated photos, and tell you what we found — repair, replacement, or nothing needed yet. No pressure. Book a [free roof check](/free-roof-check/).',
  },
  {
    q: 'Can you help with a storm or hail insurance claim?',
    a: 'Yes, we document the damage, write a scope an adjuster can verify, and meet the adjuster on site. Your policy and your insurer decide what is covered, so we cannot promise a result, and we tell you when a claim may not hold.',
  },
  {
    q: 'Do you list prices online?',
    a: 'No, every roof is different. You get a written price after we see the roof.',
  },
];

const relatedLinks = [
  { href: '/roof-repair-dallas-ga/', label: 'Roof repair' },
  { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement' },
  { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage roof repair' },
  { href: '/hail-damage-roof-repair-dallas-ga/', label: 'Hail damage inspection' },
  { href: '/services/roof-insurance-claims/', label: 'Insurance claims help' },
  { href: '/gutter-repair-replacement-dallas-ga/', label: 'Gutter repair & replacement' },
  { href: '/service-areas/austell/', label: 'Roofing in Austell' },
  { href: '/service-areas/powder-springs/', label: 'Roofing in Powder Springs' },
  { href: '/free-roof-check/', label: 'Free roof check' },
  { href: '/contact/', label: 'Contact iRoofer' },
];

export default function MabletonPage() {
  return (
    <CityAreaPage
      city={city}
      h1="Roof Repair, Replacement & Storm Damage in Mableton, GA"
      intro={intro}
      sections={sections}
      neighborhoods={neighborhoods}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
