import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('roswell');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Roofing in Roswell, GA | Repair & Replacement | iRoofer',
  description:
    'Family-owned roofer serving Roswell, GA (Fulton County). Steep-slope replacements and historic-district repairs. Free inspection: (470) 236-1410.',
  alternates: { canonical: `${brand.url}/service-areas/roswell` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/roswell`,
    title: 'Roofing in Roswell, GA — iRoofer Contractors',
    description:
      'Roswell roof repair, replacement and storm claim help from a family-owned crew based in Dallas, GA. Free inspections, photo-documented reports.',
  },
};

const intro = [
  'iRoofer Contractors works Roswell out of our Dallas, GA shop, and it is one of the more technically demanding towns on our map. The housing stock runs from mid-1980s two-story colonials with steep front elevations to infill new builds off Holcomb Bridge, plus the older cottages around the Canton Street district — three very different roofs that each need a different approach.',
  'We handle roof repair, full replacement, new-construction roofing, gutters, and storm and insurance claim documentation. Every Roswell inspection is free and comes back to you as photos with plain-English notes, not a sales pitch — if the honest answer is that your roof has years left, that is what the report will say.',
];

const sections = [
  {
    h2: 'Steep slopes and tall elevations',
    paras: [
      'A large share of Roswell homes are two-story with pitches steeper than 8/12, which changes the job before a single shingle comes off. Steep-slope work needs roof jacks and staging rather than simple ladder access, and it takes longer per square than the ranch-style roofs we replace in Paulding County. We quote that reality up front instead of discovering it on day one and coming back with a change order.',
      'Height also affects tear-off logistics. On tight Roswell lots we stage materials where they will not block a shared driveway, use tarps and plywood to protect landscaping and A/C units below the drip edge, and sweep with rolling magnets at the end of every day — twice on the last day, because a nail in a Roswell cul-de-sac is a nail in someone else\u2019s tire.',
    ],
  },
  {
    h2: 'Historic-district and architectural-review work',
    paras: [
      'Roswell has a designated historic district around Canton Street and Mimosa Boulevard where exterior changes, roofing included, can fall under local review. Color, profile, and sometimes material are all in scope. We keep the conversation simple: we bring shingle boards to your inspection, tell you which options are realistic for a reviewed property, and put the exact product and color in the written scope so there is no ambiguity when the paperwork is submitted.',
      'If your home is not in the district but sits in one of Roswell\u2019s HOA neighborhoods, the same discipline applies — approved color in writing, dumpster placement agreed in advance, crews parked where the covenants allow.',
    ],
  },
  {
    h2: 'Storm damage and insurance claims in Fulton County',
    paras: [
      'North Fulton catches hard spring and summer cells moving in from the northwest. What actually decides a Roswell claim is not the size of the storm but the quality of the evidence: dated photographs, soft-metal test squares on vents and gutter aprons, bruised mats marked on a roof diagram, and a scope of work that matches what an adjuster can verify on site.',
      'We inspect for that evidence first and tell you honestly whether a claim is worth filing. If it is, we write the scope, meet your adjuster on the roof, and handle supplements. If it is not, we quote the repair directly so you are not spending a deductible chasing a claim that will be denied.',
    ],
  },
  {
    h2: 'Ventilation, gutters and the things that cause the next leak',
    paras: [
      'Plenty of Roswell leaks are not shingle failures at all. Older additions and bonus rooms over garages are common local weak points — the tie-in flashing where a lower roof meets a wall is where water usually finds its way in. Undersized attic ventilation is the other recurring issue, and it quietly shortens shingle life through Georgia summers while pushing cooling bills up.',
      'When we replace a Roswell roof we correct intake and exhaust ventilation as part of the job, re-flash tie-ins properly rather than caulking over them, and check that gutters and downspouts actually carry water away from the foundation. Fixing the roof and leaving the drainage broken just schedules the next repair.',
    ],
  },
];

const neighborhoods = [
  'Historic Roswell / Canton Street',
  'Martin\u2019s Landing',
  'Willeo & Riverside',
  'Holcomb Bridge corridor',
  'Crabapple',
  'Roswell East',
];

const faq = [
  {
    q: 'Do you actually service Roswell, or just the Paulding County area?',
    a: 'We service Roswell regularly. Our shop is in Dallas, GA and Roswell is a scheduled route for us across north Fulton — inspections are booked the same as anywhere else in our service area, and you get the same crew chief on site for the whole job.',
  },
  {
    q: 'My Roswell home is in the historic district. Can you still replace the roof?',
    a: 'Yes. We will show you shingle options that suit a reviewed property, put the exact product and color in the written scope, and give you the documentation you need for architectural review or your HOA before any material is ordered.',
  },
  {
    q: 'How long does a two-story Roswell roof replacement take?',
    a: 'Most single-family replacements are a one- to two-day job. Steep two-story elevations, multiple roof planes, or deck repairs found at tear-off can push it to three. We tell you the expected window at the estimate and let you know the same day if anything under the shingles changes it.',
  },
  {
    q: 'Can you help with a Roswell storm claim after wind or hail?',
    a: 'Yes. We document damage with dated photos and a roof diagram, write the scope of work, and meet your insurance adjuster on site. If we do not believe the damage supports a claim, we say so and quote the repair directly instead.',
  },
  {
    q: 'What does a roof inspection cost in Roswell?',
    a: 'Nothing. Inspections are free with no obligation, and you get the photo report whether or not you hire us.',
  },
];

export default function RoswellPage() {
  return <CityAreaPage city={city} intro={intro} sections={sections} neighborhoods={neighborhoods} faq={faq} />;
}
