import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('hiram');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Hiram, GA Roofing | Repair, Inspection & Gutters | iRoofer',
  description:
    'Hiram roof repair, inspections, replacement, storm and gutter help from a family-owned crew minutes away in Dallas, GA. Call (470) 236-1410.',
  alternates: { canonical: `${brand.url}/service-areas/hiram/` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/hiram/`,
    title: 'Hiram, GA Roofing | Repair, Inspection & Gutters | iRoofer',
    description:
      'Hiram roof repair, inspections, replacement, storm and gutter help from a family-owned crew minutes away in Dallas, GA. Call (470) 236-1410.',
  },
};

const intro = [
  'Hiram is a short drive from our shop at 152 Freedom Dr in Dallas, and it’s part of our regular service area. iRoofer Contractors is family-owned since 2019. Below you’ll find the right page for what your roof needs: a repair, an inspection, a full replacement, storm help, or gutters.',
  'Not sure which one it is? That’s what the free inspection is for. Visit https://iroofercontractors.com/contact/ or call (470) 236-1410.',
];

const sections = [
  {
    h2: 'Roof repair in Hiram',
    paras: [
      'Leaks, cracked pipe boots, worn valleys under tree cover, flashing at walls and chimneys, wind-lifted shingles. We find the real entry point, photograph it, and fix that. See [roof repair in Hiram](/roof-repair-hiram/).',
    ],
  },
  {
    h2: 'Roof inspection in Hiram',
    paras: [
      'After a storm, when a stain is growing, or when you just want to know where your roof stands: a free inspection with photos and a written finding (repair it, watch it, or plan a replacement). See [roof inspection in Hiram](/roof-repair-hiram/#roof-inspection).',
    ],
  },
  {
    h2: 'Roof replacement in Hiram',
    paras: [
      'When repairs stop making sense: full tear-off to the deck, decking repaired as found, Owens Corning systems when that line fits. See [roof replacement in Hiram](/roof-replacement-hiram/).',
    ],
  },
  {
    h2: 'Storm damage in Hiram',
    paras: [
      'Hail and wind damage documented slope by slope for your adjuster, with tarping first if the roof is open. See [storm damage roof repair in Hiram](/storm-damage-roof-repair-hiram/).',
    ],
  },
  {
    h2: 'Gutters in Hiram',
    paras: [
      'Overflowing or pulling-away gutters soak fascia and the edge of the roof deck. We repair, re-pitch and replace gutters as part of the same roof system. See [gutter repair & replacement in Hiram](/gutter-repair-replacement-hiram/).',
    ],
  },
  {
    h2: 'Roofing in Hiram: what’s different here',
    paras: [
      'Hiram is in Paulding County, so roofing permits go through the county’s Building & Permitting office in Dallas, and they’re only required when work is structural (sheathing, rafters, trusses). A lot of Hiram streets sit under mature trees, which is hard on valleys and gutters. Many subdivisions were built in phases, so whole streets reach the end of their roofs around the same time. We work along the Highway 92 corridor, Bill Carruth Parkway, Nebo Road, the Cedarcrest side, Old Cartersville Road, and the Hiram–Dallas line. Building new? See [new construction roofing in Hiram](/new-construction-hiram/).',
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
    q: 'Are you based in Hiram?',
    a: 'We’re based in Dallas (152 Freedom Dr) and serve Hiram regularly. Same crew, same standards.',
  },
  {
    q: 'Which page should I use: repair, inspection or replacement?',
    a: 'If you know what’s wrong, use the matching page above. If you don’t, book a free inspection. We’ll tell you whether it’s a repair, something to watch, or time to plan a replacement.',
  },
  {
    q: 'Do you install and repair gutters in Hiram?',
    a: 'Yes. Gutter repair, re-pitching and replacement, sized to the roof that feeds them. See our Hiram gutter page or call (470) 236-1410.',
  },
  {
    q: 'Do you help with insurance after storm damage?',
    a: 'Yes: photos, diagram, scope, adjuster meeting on request.',
  },
];

const relatedLinks = [
  { href: '/roof-repair-hiram/', label: 'Roof repair in Hiram' },
  { href: '/roof-repair-hiram/#roof-inspection', label: 'Roof inspection in Hiram' },
  { href: '/roof-replacement-hiram/', label: 'Roof replacement in Hiram' },
  { href: '/storm-damage-roof-repair-hiram/', label: 'Storm damage roof repair in Hiram' },
  { href: '/gutter-repair-replacement-hiram/', label: 'Gutter repair & replacement in Hiram' },
  { href: '/new-construction-hiram/', label: 'New construction roofing in Hiram' },
  { href: '/services/roof-insurance-claims/', label: 'Insurance claims help' },
  { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency roof repair' },
  { href: '/contact/', label: 'Contact iRoofer' },
];

export default function HiramPage() {
  return (
    <CityAreaPage
      city={city}
      h1="Roofing & Gutters in Hiram, GA: Find the Right Service"
      intro={intro}
      sections={sections}
      neighborhoods={neighborhoods}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
