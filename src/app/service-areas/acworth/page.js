import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('acworth');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Acworth GA Roof Repair, Replacement & Emergency Help | iRoofer',
  description:
    'Acworth roof repair, replacement, storm damage, and emergency tarping from iRoofer in Dallas, GA. Call (470) 236-1410 or contact us online.',
  alternates: { canonical: `${brand.url}/service-areas/acworth/` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/acworth/`,
    title: 'Acworth GA Roof Repair, Replacement & Emergency Help | iRoofer',
    description:
      'Acworth roof repair, replacement, storm damage, and emergency tarping from iRoofer in Dallas, GA. Call (470) 236-1410.',
  },
};

const intro = [
  'Acworth searches often mix “roof repair near me” with emergency intent — active leaks, overnight wind, a tree limb. iRoofer Contractors answers from Dallas, GA (152 Freedom Dr): family-owned since 2019, licensed, bonded, insured. We tarp when the roof is open, then schedule the permanent fix.',
  'Ready to talk about your roof? Visit https://iroofercontractors.com/contact/ or call (470) 236-1410.',
];

const sections = [
  {
    h2: 'Emergency and urgent leaks in Acworth',
    paras: [
      'If water is coming in now, call (470) 236-1410. Priority is stop the water — tarping and temporary protection — then a dry-weather inspection for the permanent repair. Process page: /emergency-roof-repair-dallas-ga/.',
      'We do not invent minute-by-minute response guarantees in copy. We do prioritize open roofs and active leaks, and we will tell you honestly what we can do the same day.',
    ],
  },
  {
    h2: 'Standard roof repair',
    paras: [
      'Flashing, boots, and localized shingle failure still make up plenty of Acworth calls that are not true emergencies. See /roof-repair-acworth/ and /roof-repair-dallas-ga/ for how we find the source and fix it so a small problem stays small.',
    ],
  },
  {
    h2: 'Replacement & storm',
    paras: [
      'End-of-life roofs: /roof-replacement-acworth/ and /roof-replacement-dallas-ga/. Owens Corning Preferred on qualifying installs. Storm cells across north Cobb: /storm-damage-roof-repair-acworth/, /storm-damage-roof-repair-dallas-ga/, and /services/roof-insurance-claims/. CertainTeed Storm Restoration Specialist (GA) on storm scopes — dated photos, roof diagram, adjuster meeting on request.',
    ],
  },
  {
    h2: 'Nearby and why a Dallas shop covers Acworth',
    paras: [
      'Kennesaw, Marietta, Canton edges, and the Dallas hub — /service-areas/kennesaw/, /service-areas/marietta/, /service-areas/, /dallas-ga-roofing/. Cristian Mendez’s crew runs the same cleanup standards (magnetic nail sweeps, daily tidy) whether the job is five minutes or a longer drive from 152 Freedom Dr.',
    ],
  },
];

const neighborhoods = [
  'Downtown Acworth / Main Street',
  'Lake Acworth area',
  'Highway 92 corridor',
  'Baker Road / Cowan Road',
  'North Acworth',
  'Allatoona edge',
];

const faq = [
  {
    q: 'Do you handle after-hours emergencies?',
    a: 'Call the main number — active leaks and open roofs are prioritized. We will tell you what we can do same day.',
  },
  {
    q: 'Is Acworth in your regular area?',
    a: 'Yes.',
  },
  {
    q: 'Insurance after a storm?',
    a: 'We document and can meet adjusters; we also say when a claim will not hold.',
  },
  {
    q: 'Licensed and insured?',
    a: 'Yes — licensed, bonded, and insured. Family-owned since 2019.',
  },
];

const relatedLinks = [
  { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency roof repair Dallas GA' },
  { href: '/roof-repair-acworth/', label: 'Roof repair in Acworth' },
  { href: '/roof-replacement-acworth/', label: 'Roof replacement in Acworth' },
  { href: '/storm-damage-roof-repair-acworth/', label: 'Storm damage Acworth' },
  { href: '/roof-repair-dallas-ga/', label: 'Roof repair Dallas GA' },
  { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage Dallas GA' },
  { href: '/services/roof-insurance-claims/', label: 'Insurance claims help' },
  { href: '/service-areas/kennesaw/', label: 'Kennesaw service area' },
  { href: '/contact/', label: 'Contact iRoofer' },
];

export default function AcworthPage() {
  return (
    <CityAreaPage
      city={city}
      h1="Roof Repair, Replacement & Storm Damage in Acworth, GA"
      intro={intro}
      sections={sections}
      neighborhoods={neighborhoods}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
