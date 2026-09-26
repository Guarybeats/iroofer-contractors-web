import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('hiram');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Hiram GA Roof Repair & Replacement | Storm Damage | iRoofer Contractors',
  description:
    'Hiram roof repair, replacement, and storm help from iRoofer in nearby Dallas, GA. Free inspection. Call (470) 236-1410 or contact us online.',
  alternates: { canonical: `${brand.url}/service-areas/hiram/` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/hiram/`,
    title: 'Hiram GA Roof Repair & Replacement | Storm Damage | iRoofer Contractors',
    description:
      'Hiram roof repair, replacement, and storm help from iRoofer in nearby Dallas, GA. Free inspection. Call (470) 236-1410.',
  },
};

const intro = [
  'Hiram sits close to our Dallas shop — short drive from 152 Freedom Dr for inspections and installs. iRoofer Contractors is family-owned since 2019: licensed, bonded, insured. Whether you need a leak fixed, a full replace, or storm documentation, we write scopes you can actually read.',
  'Ready to talk about your roof? Visit https://iroofercontractors.com/contact/ or call (470) 236-1410 — Cristian and the iRoofer crew will get you a clear next step.',
];

const sections = [
  {
    h2: 'Roof repair in Hiram',
    paras: [
      'Boot failures, valley leaks, and wind-lifted shingles are common Paulding County repair calls. We inspect free, photo-document, and repair the failure — not just the stain on the ceiling. Deeper process on /roof-repair-hiram/; Dallas hub also useful at /roof-repair-dallas-ga/.',
      'Active leaks get tarping priority when the roof is open to weather — see /emergency-roof-repair-dallas-ga/.',
    ],
  },
  {
    h2: 'Roof replacement in Hiram',
    paras: [
      'When repairs no longer make sense — age, multiple slopes failing, soft decking — we tear off and install architectural shingles as an Owens Corning Preferred Contractor when that line is selected. Written estimate before tear-off. Money pages: /roof-replacement-hiram/ and /roof-replacement-dallas-ga/.',
      'Most Hiram homes are a one- to two-day job once materials are staged. We bring shingle boards so color and profile match the street, and we register manufacturer warranty paperwork when the product line allows.',
    ],
  },
  {
    h2: 'Storm damage in Hiram',
    paras: [
      'After a cell moves through Paulding County, we check for uplift, missing tabs, and soft-metal impact you cannot see from the yard. CertainTeed Storm Restoration Specialist (GA) applies on storm scopes. Documentation for claims: /storm-damage-roof-repair-hiram/, /storm-damage-roof-repair-dallas-ga/, and /services/roof-insurance-claims/.',
      'If the damage will not support a claim, we say so and quote the repair — a denied claim should not leave you without a dry house.',
    ],
  },
  {
    h2: 'Local voice, not agency filler',
    paras: [
      'We are Cristian’s crew from Dallas — not a national call center. Hiram jobs get the same cleanup standards, magnetic nail sweeps, and the same phone number you can actually reach: (470) 236-1410. Nearby cities: Dallas, Powder Springs, Douglasville — see /service-areas/.',
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
    q: 'Do you have Hiram-specific repair and replace pages?',
    a: 'Yes — /roof-repair-hiram/ and /roof-replacement-hiram/ for deeper scopes; this SA page is the city overview.',
  },
  {
    q: 'How soon can you inspect in Hiram?',
    a: 'Call or use the contact form — Hiram is a short run from Dallas, so scheduling is usually straightforward.',
  },
  {
    q: 'Do you help with insurance after storm damage?',
    a: 'Yes — photos, diagram, scope, adjuster meeting on request.',
  },
  {
    q: 'Are you licensed?',
    a: 'Licensed, bonded, and insured. Family-owned since 2019.',
  },
];

const relatedLinks = [
  { href: '/roof-repair-hiram/', label: 'Roof repair in Hiram' },
  { href: '/roof-replacement-hiram/', label: 'Roof replacement in Hiram' },
  { href: '/storm-damage-roof-repair-hiram/', label: 'Storm damage roof repair Hiram' },
  { href: '/roof-repair-dallas-ga/', label: 'Roof repair Dallas GA' },
  { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement Dallas GA' },
  { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage Dallas GA' },
  { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency roof repair' },
  { href: '/services/roof-insurance-claims/', label: 'Insurance claims help' },
  { href: '/contact/', label: 'Contact iRoofer' },
];

export default function HiramPage() {
  return (
    <CityAreaPage
      city={city}
      h1="Roof Repair, Replacement & Storm Damage in Hiram, GA"
      intro={intro}
      sections={sections}
      neighborhoods={neighborhoods}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
