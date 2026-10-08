import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('powder-springs');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Powder Springs GA Roof Repair & Replacement | iRoofer',
  description:
    'Powder Springs roofing from iRoofer Contractors in Dallas, GA — repair, replacement, storm help. Call (470) 236-1410 or visit our contact page.',
  alternates: { canonical: `${brand.url}/service-areas/powder-springs/` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/powder-springs/`,
    title: 'Powder Springs GA Roof Repair & Replacement | iRoofer',
    description:
      'Powder Springs roofing from iRoofer Contractors in Dallas, GA — repair, replacement, storm help. Call (470) 236-1410.',
  },
};

const intro = [
  'Powder Springs is on our regular west-metro map from Dallas. iRoofer Contractors — family-owned since 2019 by Cristian Mendez — handles repair, full replacement, and storm documentation. Shop: 152 Freedom Dr, Dallas, GA 30157.',
  'Ready to talk about your roof? Visit https://iroofercontractors.com/contact/ or call (470) 236-1410.',
];

const sections = [
  {
    h2: 'Roof repair in Powder Springs',
    paras: [
      'Leaks at penetrations, aging flashing, and wind-lifted tabs are the usual suspects. We photograph the failure and repair it so you are not repainting ceilings every season. See [roof repair in Powder Springs](/roof-repair-powder-springs/), or [roof repair in Dallas, GA](/roof-repair-dallas-ga/) for the full process.',
    ],
  },
  {
    h2: 'Roof replacement',
    paras: [
      'End-of-life roofs get a full tear-off and architectural install. Owens Corning Preferred when that line is the install. See /roof-replacement-powder-springs/ and /roof-replacement-dallas-ga/.',
    ],
  },
  {
    h2: 'Storm damage',
    paras: [
      'After Cobb/Paulding-edge cells, we inspect for uplift and impact, tarp if needed, and document for insurance when appropriate. Paths: /storm-damage-roof-repair-powder-springs/, /storm-damage-roof-repair-dallas-ga/, /services/roof-insurance-claims/, /emergency-roof-repair-dallas-ga/.',
    ],
  },
  {
    h2: 'What Powder Springs roofs tend to need',
    paras: [
      'Many Powder Springs homes sit in wooded lots where leaf load, shade, and limb risk matter as much as shingle age. Gutters clog, valleys hold debris, and soft spots show up where water sat too long. When we inspect, we look at the roof system — shingles, flashing, ventilation, and drainage — not just the color of the granules from the street.',
      'If gutters are part of the problem, see [gutter repair in Powder Springs](/gutter-repair-replacement-powder-springs/) or [gutter repair in Dallas, GA](/gutter-repair-replacement-dallas-ga/). Nearby cities: Dallas, Hiram, Marietta, Austell, Douglasville — see [all service areas](/service-areas/). Use the contact form with your address and a few photos, or call (470) 236-1410. The written estimate after we see the roof is the number that matters.',
    ],
  },
];

const neighborhoods = [
  'Downtown Powder Springs',
  'Macland Road corridor',
  'C.H. James Parkway area',
  'Lost Mountain side',
  'Dallas Highway edge',
  'Brownsville Road',
];

const faq = [
  {
    q: 'How far is Powder Springs from your shop?',
    a: 'Short drive from Dallas — we schedule Powder Springs regularly.',
  },
  {
    q: 'Do you have a Powder Springs repair URL?',
    a: 'Yes — see [roof repair in Powder Springs](/roof-repair-powder-springs/). Our Dallas service pages go deeper on process.',
  },
  {
    q: 'Emergency leak?',
    a: 'Call (470) 236-1410 — tarping priority when the roof is open.',
  },
];

const relatedLinks = [
  { href: '/roof-repair-powder-springs/', label: 'Roof repair contractor in Powder Springs' },
  { href: '/roof-replacement-powder-springs/', label: 'Roof replacement in Powder Springs, GA' },
  { href: '/storm-damage-roof-repair-powder-springs/', label: 'Storm damage Powder Springs' },
  { href: '/roof-repair-dallas-ga/', label: 'Roof repair Dallas GA' },
  { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement Dallas GA' },
  { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage Dallas GA' },
  { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency roof repair' },
  { href: '/services/roof-insurance-claims/', label: 'Insurance claims help' },
  { href: '/contact/', label: 'Contact iRoofer' },
];

export default function PowderSpringsPage() {
  return (
    <CityAreaPage
      city={city}
      h1="Roof Repair, Replacement & Storm Damage in Powder Springs, GA"
      intro={intro}
      sections={sections}
      neighborhoods={neighborhoods}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
