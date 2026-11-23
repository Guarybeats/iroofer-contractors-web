import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('hiram');

const TITLE = 'Roofing Contractor in Hiram, GA | iRoofer';
const DESC =
  'Roof repair and replacement in Hiram, GA from a family-owned Dallas crew since 2019. Free inspections, plus storm checks, gutters and siding. (470) 236-1410.';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${brand.url}/service-areas/hiram/` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/hiram/`,
    title: TITLE,
    description: DESC,
  },
};

const intro = [
  'Need roof repair or a roof replacement in Hiram? iRoofer Contractors is a family-owned roofing contractor based a short drive away in Dallas, GA, working in Hiram since 2019. Most Hiram calls are one of two jobs: fixing a leak or storm-worn spot on a roof that still has years left, or replacing a roof that has reached the end. We tell you which one yours is, with photos.',
  'Start with a free inspection at https://iroofercontractors.com/contact/ or call (470) 236-1410.',
];

const sections = [
  {
    h2: 'Roof repair in Hiram',
    paras: [
      'Leaks, cracked pipe boots, worn valleys under tree cover, flashing at walls and chimneys, wind-lifted shingles. We trace the water back to where it actually gets in, photograph it, and fix that spot so a small repair stays small. If water is coming in now, we tarp first. The full repair guide for Hiram homes, with what we check and how a visit works, is in the [roof repair in Hiram](/service-areas/hiram/#roof-repair) section below.',
    ],
  },
  {
    h2: 'Roof replacement in Hiram',
    paras: [
      'When repairs stop making sense: full tear-off to the deck, decking repaired as found, then underlayment, flashing, ventilation and Owens Corning shingles installed as an Owens Corning Contractor Rewards member. Many Hiram subdivisions were built in phases, so whole streets reach the end of their roofs around the same time. If yours is one of them, see [roof replacement in Hiram](/roof-replacement-hiram/) for how the job runs.',
    ],
  },
  {
    h2: 'Repair or replace? How we decide on a Hiram roof',
    paras: [
      {
        items: [
          'Repair: the problem is local (one boot, one valley, one stretch of flashing, a few wind-damaged tabs) and the rest of the roof is sound.',
          'Replace: wear shows on several slopes, the same roof keeps leaking in different places, or the decking underneath has gone soft.',
          'Either way, you get dated photos and a written scope, and the decision is yours.',
        ],
      },
    ],
  },
  {
    h2: 'Supporting services in Hiram: storm inspections, gutters and siding',
    paras: [
      'The roof is the main job. These are the services that keep it working, done by the same crew:',
      {
        items: [
          'Storm inspections: hail and wind damage documented slope by slope for your adjuster, with tarping first if the roof is open. See [storm damage roof repair in Hiram](/storm-damage-roof-repair-hiram/) and the [roof inspection in Hiram](/service-areas/hiram/#roof-inspection) details.',
          'Gutters: overflowing or pulling-away gutters soak fascia and the edge of the roof deck. We repair, re-pitch and replace them sized to the roof. See [gutter repair & replacement in Hiram](/gutter-repair-replacement-hiram/).',
          'Siding: torn panels and water at the roof-to-wall joint, handled alongside the roof. See [siding in Hiram](/siding-hiram/).',
        ],
      },
    ],
  },
  {
    h2: 'Roofing in Hiram: what’s different here',
    paras: [
      'Hiram is in Paulding County, so roofing permits go through the county’s Building & Permitting office in Dallas, and they’re only required when work is structural (sheathing, rafters, trusses). A lot of Hiram streets sit under mature trees, which is hard on valleys and gutters. We work along the Highway 92 corridor, Bill Carruth Parkway, Nebo Road, the Cedarcrest side, Old Cartersville Road, and the Hiram–Dallas line. Building new? See [new construction roofing in Hiram](/new-construction-hiram/).',
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
    a: 'We’re based in Dallas and serve Hiram regularly. Same crew, same standards.',
  },
  {
    q: 'Do I need a roof repair or a replacement?',
    a: 'Book a free inspection and we’ll tell you with photos: a repair, something to watch, or time to plan a replacement. A local problem on a sound roof is usually a repair; wear across several slopes usually points to replacement.',
  },
  {
    q: 'Do you install and repair gutters in Hiram?',
    a: 'Yes, Gutter repair, re-pitching and replacement, sized to the roof that feeds them. See our Hiram gutter page or call (470) 236-1410.',
  },
  {
    q: 'Do you help with insurance after storm damage?',
    a: 'Yes: dated photos, a roof diagram, a written scope, and an adjuster meeting on request. Your policy decides what’s covered, so we don’t promise an outcome.',
  },
];

const relatedLinks = [
  { href: '/service-areas/hiram/#roof-repair', label: 'Roof repair in Hiram' },
  { href: '/service-areas/hiram/#roof-inspection', label: 'Roof inspection in Hiram' },
  { href: '/siding-hiram/', label: 'Siding in Hiram' },
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
      h1="Roof Repair & Replacement in Hiram, GA"
      intro={intro}
      sections={sections}
      neighborhoods={neighborhoods}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
