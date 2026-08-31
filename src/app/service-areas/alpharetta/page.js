import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('alpharetta');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Roofing in Alpharetta, GA | Repair & Replacement | iRoofer',
  description:
    'Family-owned roofer serving Alpharetta, GA (Fulton County). HOA-compliant replacement, leak diagnostics and gutters. Free inspection: (470) 236-1410.',
  alternates: { canonical: `${brand.url}/service-areas/alpharetta` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/alpharetta`,
    title: 'Roofing in Alpharetta, GA — iRoofer Contractors',
    description:
      'Alpharetta roof replacement and repair from a family-owned crew based in Dallas, GA. HOA paperwork handled, free inspections, photo reports.',
  },
};

const intro = [
  'iRoofer Contractors serves Alpharetta from our base in Dallas, GA. Alpharetta is a covenant-heavy town: most of the neighborhoods we work in — Windward, Ellard, Haynes Bridge, the newer builds around Avalon — have an HOA with an approved materials list and rules about how a job site may look while the work is happening. The roofing part is straightforward. Getting it approved and staged without annoying your neighbors is where contractors go wrong.',
  'We do roof repair, full replacement, new-construction roofing, gutter work, and storm and insurance claim documentation. Inspections are free and come back as dated photos with plain notes, so you can see the condition of your own roof rather than take our word for it.',
];

const sections = [
  {
    h2: 'HOA submittals, handled before we order material',
    paras: [
      'Nearly every Alpharetta replacement starts with an architectural request. We put the manufacturer, product line, and exact color in the written scope so the submittal has real specifics in it, and we hold the material order until you have approval in hand. That one step avoids the most expensive mistake in this market: a driveway full of shingles that the covenant does not allow.',
      'We also plan the visible side of the job in advance — where the dumpster sits, which day it arrives and leaves, where crews park, and how the street looks at the end of each day. If your HOA restricts container placement or working hours, tell us at the estimate and we will build the schedule around it.',
    ],
  },
  {
    h2: 'Roofs built in the 1990s and 2000s are aging out together',
    paras: [
      'Large parts of Alpharetta went up in a compressed window, which means whole streets hit shingle end-of-life at roughly the same time. If three houses on your cul-de-sac replaced their roofs last year, yours is probably in the same window. The tells are granule loss in the gutters, shingle edges curling on the south and west elevations, and dark streaks that keep coming back after cleaning.',
      'That timing also brings out storm-chaser crews going door to door after any weather event. Our advice, whether you hire us or not: get a dated photo report from a local company with a real address before you sign anything, and never sign a contingency agreement you have not read. We answer our own phone in Dallas, GA, and we are still here after the season ends.',
    ],
  },
  {
    h2: 'Complex rooflines, tie-ins and skylights',
    paras: [
      'Alpharetta homes tend to have busy rooflines — multiple gables, dormers, bonus rooms over garages, and a lot of valley footage. Every one of those transitions is a potential leak, and in our experience most Alpharetta leak calls come from flashing and valley details, not from the field of the roof.',
      'On repairs we trace the actual water path rather than patching the nearest stain, and on replacements we rebuild valleys, step flashing, and skylight curbs properly instead of relying on sealant. We correct attic intake and exhaust ventilation at the same time, which is the cheapest thing you can do to protect a new roof through a Georgia summer.',
    ],
  },
  {
    h2: 'Storm and hail claims in north Fulton',
    paras: [
      'North Fulton gets wind and hail most springs, and Alpharetta claims turn on documentation quality. We check soft metals — vents, gutter aprons, downspouts — for impact dents, mark bruised mats on a roof diagram, photograph everything with dates, and write a scope of work an adjuster can verify from the same evidence.',
      'We will tell you plainly if the damage does not support a claim. In that case we quote the repair directly rather than sending you into a process that ends in a denial and a wasted deductible.',
    ],
  },
];

const neighborhoods = [
  'Windward',
  'Avalon & downtown Alpharetta',
  'Haynes Bridge',
  'Ellard & Rivermont',
  'Crabapple / Milton line',
  'Old Milton Parkway corridor',
];

const faq = [
  {
    q: 'Will you handle my HOA architectural approval?',
    a: 'We prepare the specifics your HOA needs — manufacturer, product line, exact color, and the scope of work — and we hold the material order until approval is granted. The submittal is filed by you as the homeowner, since most Alpharetta HOAs only accept requests from the owner of record.',
  },
  {
    q: 'How do I know whether my Alpharetta roof needs replacing or just repair?',
    a: 'A free inspection answers it. We look at granule loss, shingle flexibility, flashing and valley condition, decking, and ventilation, then send photos with notes. If a repair is the right call, we quote the repair — we do not sell replacements to homes that do not need one.',
  },
  {
    q: 'A crew knocked on my door after the last storm. Should I sign?',
    a: 'Not without a second opinion. Get a dated photo report from a local company with a verifiable address and reviews, and read any contingency agreement carefully before signing — those documents often commit you to one contractor regardless of the claim outcome.',
  },
  {
    q: 'Do you work with builders on new construction in Alpharetta?',
    a: 'Yes. We install new-construction roofing for builders and homeowners, coordinate with your schedule and inspector, match the roof to the design, and complete a final walkthrough with warranty registration.',
  },
  {
    q: 'How long will my roof replacement take?',
    a: 'Most Alpharetta homes are one to two days. Steeper pitches, heavy valley footage, or deck repairs found at tear-off can extend it. You get the expected window at the estimate and a same-day call if anything under the shingles changes it.',
  },
];

export default function AlpharettaPage() {
  return <CityAreaPage city={city} intro={intro} sections={sections} neighborhoods={neighborhoods} faq={faq} />;
}
