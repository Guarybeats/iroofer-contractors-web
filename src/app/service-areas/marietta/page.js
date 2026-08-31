import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('marietta');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Roofing in Marietta, GA | Repair & Replacement | iRoofer',
  description:
    'Family-owned roofer serving Marietta, GA (Cobb County). Older-home repairs, full replacements, new construction, storm claims. Free inspection: (470) 236-1410.',
  alternates: { canonical: `${brand.url}/service-areas/marietta` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/marietta`,
    title: 'Roofing in Marietta, GA — iRoofer Contractors',
    description:
      'Marietta roof repair, replacement and storm claim help from a family-owned crew based in Dallas, GA. Free inspections with photo reports.',
  },
};

const intro = [
  'iRoofer Contractors has worked Marietta for years out of our Dallas, GA shop. No other city on our map has this much variety: 1920s and 1950s homes in and around the Marietta Square, mid-century ranches off Roswell Road and Powers Ferry, and new infill construction on the same streets. A scope that fits one of those roofs is wrong for the other two.',
  'We handle roof repair, full replacement, new-construction roofing, gutters, and storm and insurance claim documentation. Inspections are free, photo-documented, and honest about what the roof actually needs — including when the answer is that it needs nothing yet.',
];

const sections = [
  {
    h2: 'Older Marietta homes: what we find under the shingles',
    paras: [
      'On pre-1970s Marietta houses the shingles are rarely the whole story. We regularly open roofs to find plank decking rather than plywood, layers from a previous nail-over, undersized or missing drip edge, and chimney flashing that was sealed instead of stepped. Any of those change the job, so we look for them at the inspection and put the likely findings in the estimate rather than surprising you mid-tear-off.',
      'Plank decking in particular matters: gaps between boards affect how shingles fasten and may require sheathing over the planks. We tell you before we start whether we expect that cost, and we photograph the deck once it is exposed so you can see exactly what you are paying for.',
    ],
  },
  {
    h2: 'Marietta Square, historic character and matching a roof to the house',
    paras: [
      'Around the Square and in the older neighborhoods nearby, a roof is part of the architecture. Color and shingle profile matter, and on some properties exterior changes come with local review or neighborhood expectations. We bring shingle boards to the inspection, spec the exact product and color in writing, and pick options that suit the period of the house instead of defaulting to the same builder-grade shingle on every job.',
      'Steep, cut-up rooflines are common in this part of town — dormers, porch roofs, and low-slope rear additions tied into steep main roofs. Those tie-ins need the right detail for each slope, not one product stretched across both.',
    ],
  },
  {
    h2: 'Cobb County storms and insurance claim documentation',
    paras: [
      'Marietta sits in the path of the spring and summer cells that track across Cobb County, and wind damage here is often partial: a few slopes stripped, ridge caps lifted, or fasteners backed out while the rest of the roof looks untouched. That is exactly the kind of loss that gets underpaid when it is poorly documented.',
      'We photograph with dates, mark damage on a roof diagram, test soft metals for impact, write a scope of work an adjuster can verify, and meet the adjuster on site. If the damage does not support a claim, we say so and quote the repair directly — a denied claim costs you time and gets your roof no closer to fixed.',
    ],
  },
  {
    h2: 'Ventilation and the leaks that are not shingle failures',
    paras: [
      'Two Marietta patterns come up again and again in our repair calls. The first is bonus rooms and additions where a lower roof meets a wall — the tie-in flashing there fails long before the shingles do. The second is attic ventilation that was never sized correctly, which bakes the underside of the deck through Georgia summers, shortens shingle life, and drives up cooling costs.',
      'We correct intake and exhaust ventilation as part of every replacement, rebuild tie-in and step flashing instead of caulking it, and confirm gutters and downspouts move water away from the foundation. Repairing the roof and leaving the airflow and drainage broken just books the next repair.',
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
    q: 'My Marietta home was built in the 1950s. Does that complicate a roof replacement?',
    a: 'Sometimes, and it is better to know up front. Older Marietta roofs often have plank decking, previous nail-over layers, missing drip edge, or sealed chimney flashing. We check for all of that at the free inspection and tell you what we expect to find, so the estimate reflects the real job.',
  },
  {
    q: 'Can you match a shingle to an older or historic Marietta home?',
    a: 'Yes. We bring shingle boards to the inspection, discuss profile and color against the age and style of the house, and put the exact product and color in the written scope — useful if your property is subject to local review or neighborhood expectations.',
  },
  {
    q: 'Do you handle storm and insurance claims in Cobb County?',
    a: 'Yes. We document damage with dated photos and a roof diagram, write the scope of work, meet your adjuster on site, and handle supplements. If the damage will not support a claim, we tell you and quote the repair instead.',
  },
  {
    q: 'How quickly can you get to a Marietta leak?',
    a: 'Active leaks are our priority calls — we respond for emergency tarping and get the water stopped first, then schedule the permanent repair once we can see the full picture in dry conditions.',
  },
  {
    q: 'Are you local, or do you just advertise in Marietta?',
    a: 'We are based in Dallas, GA — a real shop about 25 miles west — and Marietta has been part of our regular service area for years. You can see our Google reviews and reach the same crew chief through the whole job.',
  },
];

export default function MariettaPage() {
  return <CityAreaPage city={city} intro={intro} sections={sections} neighborhoods={neighborhoods} faq={faq} />;
}
