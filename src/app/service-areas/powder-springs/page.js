import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('powder-springs');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Residential Roofing in Powder Springs, GA | iRoofer',
  description:
    'Residential roofing for Powder Springs, GA homes: roof repair, replacement and storm inspections from a family-owned Dallas crew. Call (470) 236-1410.',
  alternates: { canonical: `${brand.url}/service-areas/powder-springs/` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/powder-springs/`,
    title: 'Residential Roofing in Powder Springs, GA | iRoofer',
    description:
    'Residential roofing for Powder Springs, GA homes: roof repair, replacement and storm inspections from a family-owned Dallas crew. Call (470) 236-1410.',
  },
};

const intro = [
  'We roof houses in Powder Springs: ranches off Macland Road, two-stories toward Lost Mountain, and the wooded lots where limbs and leaves wear a roof down early. iRoofer Contractors is a family-owned residential crew from 152 Freedom Dr, Dallas, GA 30157, run by Cristian Mendez since 2019. We handle [roof repair](/roof-repair-powder-springs/), [full replacement](/roof-replacement-powder-springs/) and storm inspections on homes.',
  'Gutters or fascia the real problem? Head to [gutter repair & replacement in Powder Springs](/gutter-repair-replacement-powder-springs/). For your roof, use [https://iroofercontractors.com/contact/](/contact/) or call (470) 236-1410.',
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
      'End-of-life roofs get a full tear-off and architectural install. We install Owens Corning shingles as an Owens Corning Contractor Rewards member when that line is selected. See /roof-replacement-powder-springs/ and /roof-replacement-dallas-ga/.',
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
      h1="Residential Roofing in Powder Springs, GA"
      intro={intro}
      sections={sections}
      neighborhoods={neighborhoods}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
