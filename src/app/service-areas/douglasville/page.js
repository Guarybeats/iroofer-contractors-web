import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('douglasville');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Douglasville GA Roof Repair, Replacement & Storm Damage | iRoofer',
  description:
    'Douglasville roof repair, replacement, and storm documentation from iRoofer Contractors in Dallas, GA. Call (470) 236-1410 or request an inspection online.',
  alternates: { canonical: `${brand.url}/service-areas/douglasville/` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/douglasville/`,
    title: 'Douglasville GA Roof Repair, Replacement & Storm Damage | iRoofer',
    description:
      'Douglasville storm damage documentation, roof repair and replacement from a family-owned crew based in Dallas, GA.',
  },
};

const intro = [
  'Douglasville homeowners call us from just west/southwest of our Dallas shop when wind, age, or a stubborn leak shows up. iRoofer Contractors — Cristian Mendez, family-owned since 2019 — is licensed, bonded, and insured. Storm work is a natural fit here: CertainTeed Storm Restoration Specialist (GA) when we are documenting and repairing weather damage.',
  'Ready to talk about your roof? Visit https://iroofercontractors.com/contact/ or call (470) 236-1410.',
];

const sections = [
  {
    h2: 'Storm damage roof repair in Douglasville',
    paras: [
      'Cells that track across Douglas County leave the same patterns we see in Paulding and Cobb: partial uplift, ridge issues, and debris strikes that look minor until the next rain. We inspect free, tarp when the roof is open, and document for insurance when a claim makes sense.',
      'Deep process: /storm-damage-roof-repair-douglasville/, /storm-damage-roof-repair-dallas-ga/, /services/roof-insurance-claims/, and /emergency-roof-repair-dallas-ga/. We do not invent storm approval rates — we document honestly and tell you when a claim will not hold.',
    ],
  },
  {
    h2: 'Everyday roof repair',
    paras: [
      'Not every Douglasville call is a storm. Pipe boots, step flashing, and valley wear fail on their own schedule. /roof-repair-douglasville/ and /roof-repair-dallas-ga/ explain how we scope repairs; the same crew runs Douglasville jobs.',
    ],
  },
  {
    h2: 'Full replacement',
    paras: [
      'When the roof is past honest repair, we replace — architectural shingles, deck checked, Owens Corning Preferred when that product is selected. See /roof-replacement-douglasville/ and /roof-replacement-dallas-ga/.',
    ],
  },
  {
    h2: 'Repair vs storm vs replace — pick the honest path',
    paras: [
      'Douglasville homeowners often call after a loud night of wind and then discover the leak was already forming at a boot or valley. We separate weather damage from wear so you are not filing a claim for something that belongs on a repair invoice — or skipping a claim when documentation would help.',
      'Gutters and drainage matter here too: /gutter-repair-replacement-douglasville/ or /gutter-repair-replacement-dallas-ga/. New builds: /services/new-construction/. Nearby SA pages: Dallas, Hiram, Powder Springs, Austell — /service-areas/. Short drive from 152 Freedom Dr, Dallas, GA 30157.',
    ],
  },
];

const neighborhoods = [
  'Downtown Douglasville',
  'I-20 corridor',
  'Chapel Hill',
  'Arbor Place area',
  'Bright Star / Mirror Lake',
  'Highway 92 / Highway 5 edges',
];

const faq = [
  {
    q: 'Do you respond after Douglasville storms?',
    a: 'Yes — inspection, tarping when needed, documentation for claims when appropriate.',
  },
  {
    q: 'Is Douglasville a regular service area?',
    a: 'Yes. Listed on our service-areas hub with the rest of the west-metro map.',
  },
  {
    q: 'Who do I call?',
    a: '(470) 236-1410 or https://iroofercontractors.com/contact/',
  },
  {
    q: 'Do you invent storm approval rates in marketing?',
    a: 'No — we document honestly and tell you when a claim will not hold.',
  },
];

const relatedLinks = [
  { href: '/storm-damage-roof-repair-douglasville/', label: 'Storm damage roof repair Douglasville' },
  { href: '/roof-repair-douglasville/', label: 'Roof repair in Douglasville' },
  { href: '/roof-replacement-douglasville/', label: 'Roof replacement in Douglasville' },
  { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage Dallas GA' },
  { href: '/roof-repair-dallas-ga/', label: 'Roof repair Dallas GA' },
  { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency roof repair' },
  { href: '/services/roof-insurance-claims/', label: 'Insurance claims help' },
  { href: '/contact/', label: 'Contact iRoofer' },
];

export default function DouglasvillePage() {
  return (
    <CityAreaPage
      city={city}
      h1="Roof Repair, Replacement & Storm Damage in Douglasville, GA"
      intro={intro}
      sections={sections}
      neighborhoods={neighborhoods}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
