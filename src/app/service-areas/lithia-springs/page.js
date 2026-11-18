import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('lithia-springs');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Lithia Springs GA Roof Repair & Replacement | iRoofer',
  description:
    'Roof repair, replacement, storm and hail damage help and gutters in Lithia Springs, GA (Douglas County). Family-owned since 2019. Call (470) 236-1410.',
  alternates: { canonical: `${brand.url}/service-areas/lithia-springs/` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/lithia-springs/`,
    title: 'Lithia Springs GA Roof Repair & Replacement | iRoofer',
    description:
      'Lithia Springs roof repair, replacement, storm documentation and gutter work from a family-owned crew based in Dallas, GA.',
  },
};

const intro = [
  'Lithia Springs is the east end of Douglas County: the I-20 and Thornton Road corridor, the old town along Bankhead Highway, and the wooded neighborhoods around Sweetwater Creek State Park. It sits between Douglasville and Austell, and it is a straight run down from our shop.',
  'iRoofer Contractors — family-owned since 2019 — serves Lithia Springs from Dallas, GA. We handle roof repair, full replacement, storm and hail damage inspections with insurance documentation, and gutters. It starts with a free roof check and a straight answer about what your roof needs.',
];

const sections = [
  {
    h2: 'Unincorporated Douglas County: what that means for your roof',
    paras: [
      'Lithia Springs is not an incorporated city, so roofing permits and inspections run through Douglas County rather than a city hall. We pull the permit with the county, schedule the inspection, and keep the paperwork with your job file.',
      'If you are near the Austell or Douglasville line, the jurisdiction can be different from what your mailing address suggests. We check your parcel before we quote a replacement, so the permit and inspection go to the right office.',
    ],
  },
  {
    h2: 'Trees, creeks and gutters near Sweetwater Creek',
    paras: [
      'The streets around Sweetwater Creek State Park and Mount Vernon Road are heavy with hardwoods and pines. That brings two roof problems: limbs that come down in a storm, and gutters that clog every fall. Packed gutters hold water against the fascia and let it back up under the first course of shingles, and on a sloped, wooded lot the overflow often ends up against the foundation.',
      'On every Lithia Springs inspection we look at overhanging limbs, gutter pitch and where the downspouts actually drain. Gutter repair, re-hanging, replacement and guards are covered on [gutter repair and replacement](/gutter-repair-replacement-dallas-ga/).',
    ],
  },
  {
    id: 'roof-repair',
    h2: 'Roof repair in Lithia Springs',
    paras: [
      'A lot of Lithia Springs homes were built decades ago along Bankhead Highway, Lee Road and Thornton Road, with newer subdivisions filled in around them. On older roofs we see cracked pipe boots, worn valleys, flashing that was caulked instead of stepped, and earlier repairs that never matched. Many of these are repairable without replacing the whole roof.',
      'We find where the water is getting in, photograph it, and give you a written repair scope. More on our approach: [roof repair services](/roof-repair-dallas-ga/) and [roof leak repair](/roof-leak-repair-dallas-ga/).',
    ],
  },
  {
    h2: 'Storm and hail damage along the I-20 corridor',
    paras: [
      'Spring and summer storms that build west of Atlanta often run the I-20 corridor straight through Douglas County. Straight-line wind lifts shingles and ridge caps, hail bruises shingles and dents vents, and falling limbs punch through decking. Some of it shows right away; some shows up as a leak weeks later.',
      'We inspect free after a storm, tarp an open roof, and document with dated photos, soft-metal checks and a written scope. We meet your adjuster on site when you file, and we tell you plainly when a claim will not hold. See [storm damage roof repair](/storm-damage-roof-repair-dallas-ga/), [hail damage inspections](/hail-damage-roof-repair-dallas-ga/) and [roof insurance claims help](/services/roof-insurance-claims/).',
    ],
  },
  {
    h2: 'Full replacement when repair is not the honest answer',
    paras: [
      'When the roof is worn out, we tear off to the deck, replace damaged wood you can see in photos, and install architectural shingles with new underlayment, flashing and ventilation. As an Owens Corning Contractor Rewards Member, we install Owens Corning shingles when they fit the house. Details on [roof replacement](/roof-replacement-dallas-ga/). Nearby: [roofing in Douglasville](/service-areas/douglasville/) and [roofing in Austell](/service-areas/austell/).',
    ],
  },
];

const neighborhoods = [
  'Thornton Road / I-20 corridor',
  'Bankhead Highway (old town)',
  'Lee Road',
  'Sweetwater Creek State Park area',
  'Mount Vernon Road',
  'Austell and Douglasville edges',
];

const faq = [
  {
    q: 'Do you serve Lithia Springs?',
    a: 'Yes. Lithia Springs is part of our regular west-metro service area, worked from our shop in Dallas, GA. Call (470) 236-1410 or use https://iroofercontractors.com/contact/.',
  },
  {
    q: 'Who handles roofing permits in Lithia Springs?',
    a: 'Lithia Springs is unincorporated, so permits go through Douglas County. We confirm the jurisdiction for your address and pull the permit for you.',
  },
  {
    q: 'A limb hit my roof. What should I do first?',
    a: 'If water is coming in, call us at (470) 236-1410. When it is safe to get on the roof, we tarp the opening and photograph the damage before it is covered, so your insurance claim is documented.',
  },
  {
    q: 'Will you help with my insurance claim?',
    a: 'Yes. We document the damage, write a scope, and meet the adjuster. Your policy and your insurer decide what is paid, so we cannot promise approval — we tell you honestly when a claim may not hold.',
  },
  {
    q: 'Is the roof check free?',
    a: 'Yes. Free, no pressure, with dated photos. Book a [free roof check](/free-roof-check/). We do not publish prices; you get a written price after we see the roof.',
  },
];

const relatedLinks = [
  { href: '/roof-repair-dallas-ga/', label: 'Roof repair' },
  { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement' },
  { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage roof repair' },
  { href: '/hail-damage-roof-repair-dallas-ga/', label: 'Hail damage inspection' },
  { href: '/services/roof-insurance-claims/', label: 'Insurance claims help' },
  { href: '/gutter-repair-replacement-dallas-ga/', label: 'Gutter repair & replacement' },
  { href: '/service-areas/douglasville/', label: 'Roofing in Douglasville' },
  { href: '/service-areas/austell/', label: 'Roofing in Austell' },
  { href: '/free-roof-check/', label: 'Free roof check' },
  { href: '/contact/', label: 'Contact iRoofer' },
];

export default function LithiaSpringsPage() {
  return (
    <CityAreaPage
      city={city}
      h1="Roof Repair, Replacement & Storm Damage in Lithia Springs, GA"
      intro={intro}
      sections={sections}
      neighborhoods={neighborhoods}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
