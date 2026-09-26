import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('kennesaw');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Kennesaw GA Roof Repair & Replacement | Storm Damage | iRoofer',
  description:
    'Kennesaw roof repair, replacement, and storm help from iRoofer Contractors (Dallas, GA). Call (470) 236-1410 or book via our contact page.',
  alternates: { canonical: `${brand.url}/service-areas/kennesaw/` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/kennesaw/`,
    title: 'Kennesaw GA Roof Repair & Replacement | Storm Damage | iRoofer',
    description:
      'Kennesaw roof repair, replacement, and storm help from iRoofer Contractors in Dallas, GA. Call (470) 236-1410.',
  },
};

const intro = [
  'Kennesaw interest is climbing — meet that with clear repair / replace / storm paths, not a thin “we roof Kennesaw” stub. iRoofer Contractors is family-owned in Dallas since 2019: Cristian Mendez, licensed, bonded, insured. Regular Cobb County work from 152 Freedom Dr.',
  'Ready to talk about your roof? Visit https://iroofercontractors.com/contact/ or call (470) 236-1410.',
];

const sections = [
  {
    h2: 'Roof repair in Kennesaw',
    paras: [
      'Localized leaks, wind tabs, and flashing failures — inspected and fixed with photos in the file. City money page: /roof-repair-kennesaw/. Fallback: /roof-repair-dallas-ga/. Emergency tarping when open to weather: /emergency-roof-repair-dallas-ga/.',
    ],
  },
  {
    h2: 'Roof replacement in Kennesaw',
    paras: [
      'Full tear-off and architectural systems; Owens Corning Preferred when that line is selected. See /roof-replacement-kennesaw/ and /roof-replacement-dallas-ga/. We flag decking issues, ventilation gaps, and cut-up roof details at inspection so the written scope matches the real house — not a surprise mid-job.',
    ],
  },
  {
    h2: 'Storm damage',
    paras: [
      'North Cobb cells: document, tarp, repair or replace as the roof deserves. CertainTeed Storm Restoration Specialist (GA) on storm work. Paths: /storm-damage-roof-repair-kennesaw/, /storm-damage-roof-repair-dallas-ga/, /services/roof-insurance-claims/. If damage will not support a claim, we say so and quote the repair.',
    ],
  },
  {
    h2: 'Neighborhoods and roof types around Kennesaw',
    paras: [
      'Kennesaw stock ranges from older ranch homes to steeper two-stories and newer subdivisions near the mountain and major corridors. Steeper pitches and cut-up roofs need careful flashing at walls, chimneys, and dormers. Older decks may hide prior nail-overs. We call those out at inspection so your estimate reflects the real teardown.',
      'Shoppers often compare Cobb cities — /service-areas/marietta/, /service-areas/acworth/, hub /service-areas/. Services overview: /services/. Keep this page on repair / replacement / storm with strong CTAs to /contact/ — not a bare-“roofer” vanity dump.',
    ],
  },
];

const neighborhoods = [
  'Downtown Kennesaw',
  'Kennesaw Mountain side',
  'Frey Road / Barrett Parkway edge',
  'Jiles Road corridor',
  'North Main / Old Highway 41',
  'Woodstock / Acworth edges',
];

const faq = [
  {
    q: 'Are the Kennesaw repair/replace URLs live?',
    a: 'Yes — /roof-repair-kennesaw/ and /roof-replacement-kennesaw/. Dallas money URLs remain useful deepen pages.',
  },
  {
    q: 'Do you chase storm leads only?',
    a: 'No — repair and planned replacement are core work; storm is one path.',
  },
  {
    q: 'How do I schedule?',
    a: 'https://iroofercontractors.com/contact/ or (470) 236-1410.',
  },
  {
    q: 'Where is the shop?',
    a: '152 Freedom Dr, Dallas, GA 30157 — family-owned since 2019.',
  },
];

const relatedLinks = [
  { href: '/roof-repair-kennesaw/', label: 'Roof repair in Kennesaw' },
  { href: '/roof-replacement-kennesaw/', label: 'Roof replacement in Kennesaw' },
  { href: '/storm-damage-roof-repair-kennesaw/', label: 'Storm damage Kennesaw' },
  { href: '/roof-repair-dallas-ga/', label: 'Roof repair Dallas GA' },
  { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement Dallas GA' },
  { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage Dallas GA' },
  { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency roof repair' },
  { href: '/services/roof-insurance-claims/', label: 'Insurance claims help' },
  { href: '/service-areas/marietta/', label: 'Marietta service area' },
  { href: '/contact/', label: 'Contact iRoofer' },
];

export default function KennesawPage() {
  return (
    <CityAreaPage
      city={city}
      h1="Roof Repair, Replacement & Storm Damage in Kennesaw, GA"
      intro={intro}
      sections={sections}
      neighborhoods={neighborhoods}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
