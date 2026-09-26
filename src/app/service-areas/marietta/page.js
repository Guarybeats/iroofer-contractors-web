import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('marietta');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Roof Repair & Replacement in Marietta, GA | Storm Damage | iRoofer',
  description:
    'Local Marietta roof repair, full replacement, and storm damage help from iRoofer Contractors in Dallas, GA. Free photo inspection. Call (470) 236-1410 or contact us online.',
  alternates: { canonical: `${brand.url}/service-areas/marietta/` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/marietta/`,
    title: 'Roof Repair & Replacement in Marietta, GA | Storm Damage | iRoofer',
    description:
      'Marietta roof repair, replacement and storm claim help from a family-owned crew based in Dallas, GA. Free inspections with photo reports.',
  },
};

const intro = [
  'Marietta homeowners searching for a “roofer” usually need something more specific: a leak fixed this week, a worn roof replaced before the next cell, or storm damage documented for insurance. iRoofer Contractors — family-owned in Dallas, GA since 2019 — works Marietta regularly from our shop at 152 Freedom Dr. We are licensed, bonded, and insured, and we install as an Owens Corning Preferred Contractor when architectural shingles are the right fit.',
  'If you landed here from a broad “roofer” search, use the paths below. Repair, replacement, and storm are the jobs we actually schedule — not a generic listing. Ready to talk? Visit https://iroofercontractors.com/contact/ or call (470) 236-1410.',
];

const sections = [
  {
    h2: 'Roof repair in Marietta (keep a small problem small)',
    paras: [
      'Active leaks, lifted ridge caps, failed step flashing at walls and chimneys, and worn valleys are the calls we take most often east of our Dallas shop. On older Square-area and mid-century Cobb County homes, the leak source is often flashing or a tie-in — not the whole shingle field. We inspect free, photograph what we find, and quote the repair in writing before anyone climbs with a nail gun.',
      'For open roofs or active water, we prioritize tarping first, then schedule the permanent fix once conditions are dry enough to see the full picture. City money page: /roof-repair-marietta/. Emergency path: /emergency-roof-repair-dallas-ga/. Dallas deepen: /roof-repair-dallas-ga/.',
    ],
  },
  {
    h2: 'Full roof replacement in Marietta',
    paras: [
      'When the roof is at end of life — widespread granule loss, multiple prior repairs, soft decking, or insurance settling a full replace — we tear off, inspect the deck, and install architectural asphalt with details that match the house. Historic and older Marietta stock often means plank decking, nail-over layers, or steep cut-up roofs with dormers; we flag those at inspection so the estimate reflects the real job.',
      'Manufacturer warranty on the shingles plus our written workmanship coverage comes with the install. Owens Corning Preferred status applies when we install that line. Deepen: /roof-replacement-marietta/ and /roof-replacement-dallas-ga/.',
    ],
  },
  {
    h2: 'Storm damage & insurance documentation (Cobb County)',
    paras: [
      'Spring and summer cells track across Cobb County often enough that partial wind damage is common: a few slopes stripped, ridge caps lifted, soft metals dinged while the rest looks fine from the street. That is exactly the loss that gets underpaid when photos and scopes are thin.',
      'We photograph with dates, mark damage on a roof diagram, write a scope an adjuster can verify, and meet the adjuster on site when you want us there. If the damage will not support a claim, we say so and quote the repair directly. CertainTeed Storm Restoration Specialist (GA) credentials apply when storm work is the natural fit. Related: /storm-damage-roof-repair-marietta/, /storm-damage-roof-repair-dallas-ga/, and /services/roof-insurance-claims/.',
    ],
  },
  {
    h2: 'Neighborhoods & roof types we see in Marietta',
    paras: [
      'Marietta Square & historic corridors — period-sensitive color/profile choices; steep, cut-up roofs. East Cobb / Roswell Road / Powers Ferry — mid-century and later ranch and two-story stock. Whitlock Avenue corridor & west Marietta. Kennesaw Mountain side neighborhoods.',
      'Older homes: expect plank decking and sealed chimney flashing conversations at inspection. Newer builds: ventilation and gutter discharge matter as much as the shingle brand. Gutters: /gutter-repair-replacement-marietta/ or /gutter-repair-replacement-dallas-ga/. We are Cristian Mendez’s family-owned crew — same cleanup standards and magnetic nail sweeps whether the job is in Marietta or five minutes from our Dallas shop.',
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
    q: 'Do you chase bare “roofer” leads, or do you actually work Marietta jobs?',
    a: 'We work Marietta regularly — repair, replacement, storm, gutters, and new-construction roofs. Broad search terms often land here; we redirect you to the service that matches your roof.',
  },
  {
    q: 'How fast can you get to a Marietta leak?',
    a: 'Active leaks are priority. We tarp when the roof is open to weather, then schedule the permanent repair once we can inspect dry.',
  },
  {
    q: 'Do you help with Cobb County insurance claims?',
    a: 'Yes — dated photos, roof diagram, written scope, adjuster meeting on request. If it will not support a claim, we tell you and quote repair.',
  },
  {
    q: 'Are you local?',
    a: 'Yes. Shop at 152 Freedom Dr, Dallas, GA 30157. Family-owned since 2019. Licensed, bonded, insured.',
  },
];

const relatedLinks = [
  { href: '/roof-repair-marietta/', label: 'Roof repair in Marietta' },
  { href: '/roof-replacement-marietta/', label: 'Roof replacement in Marietta' },
  { href: '/storm-damage-roof-repair-marietta/', label: 'Storm damage roof repair Marietta' },
  { href: '/roof-repair-dallas-ga/', label: 'Roof repair Dallas GA' },
  { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement Dallas GA' },
  { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage Dallas GA' },
  { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency roof repair' },
  { href: '/services/roof-insurance-claims/', label: 'Insurance claims help' },
  { href: '/contact/', label: 'Contact iRoofer' },
];

export default function MariettaPage() {
  return (
    <CityAreaPage
      city={city}
      h1="Roof Repair, Replacement & Storm Damage in Marietta, GA"
      intro={intro}
      sections={sections}
      neighborhoods={neighborhoods}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
