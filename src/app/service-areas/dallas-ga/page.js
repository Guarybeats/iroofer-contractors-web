import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('dallas-ga');

export const metadata = {
  title: 'Roofing in Dallas, GA — Roof Repair, Replacement & Storm Claims | iRoofer Contractors',
  description:
    'iRoofer Contractors is based in Dallas, GA (Paulding County) at 152 Freedom Dr. Roof repair, full replacement, new construction, gutters and storm claim help. Free photo-documented inspection — call (470) 236-1410.',
  alternates: { canonical: `${brand.url}/service-areas/dallas-ga` },
  openGraph: {
    url: `${brand.url}/service-areas/dallas-ga`,
    title: 'Roofing in Dallas, GA — iRoofer Contractors',
    description:
      'Your local Dallas, GA roofer — family-owned since 2019, based at 152 Freedom Dr. Free inspections, honest answers, 5★ rated on Google.',
  },
};

const intro = [
  'Dallas is not a service area for us — it is home. iRoofer Contractors operates out of 152 Freedom Dr, Dallas, GA 30157, which means when a Paulding County homeowner calls about water coming through a ceiling, we are minutes away rather than an hour out on the interstate.',
  'We handle roof repair, full replacement, new-construction roofing, gutters, and storm and insurance claim documentation for homes across Dallas and the rest of the county. Inspections are free, photo-documented, and honest about what your roof actually needs — including when the answer is that it needs nothing yet.',
];

const sections = [
  {
    h2: 'Being the local roofer changes how the work goes',
    paras: [
      'Dallas homeowners get first call on the schedule and the same crew chief from the estimate through the final walkthrough. Because our material, dumpsters, and crews all stage from here, we are not coordinating a job in Paulding County around a shop two counties away — which is why local leaks usually get tarped the same day.',
      'It also means we are accountable in a way a storm-chasing crew is not. Cristian answers the phone, we are at a fixed address you can drive past, and our Google reviews are from your neighbors. If something is not right after we leave, we come back — we are going to keep running into you at the store.',
    ],
  },
  {
    h2: 'Paulding County growth: new subdivisions and 20-year-old roofs',
    paras: [
      'Dallas has grown fast, and that growth shows up on rooflines. The subdivisions built out along Highway 92, 61 and 278 in the early 2000s are now hitting shingle end-of-life together, often with builder-grade three-tab shingles and attic ventilation designed to the bare minimum. Whole streets need attention within a couple of seasons of each other.',
      'The signs are easy to spot before a leak starts: granule buildup where downspouts discharge, shingle edges curling on the south and west slopes, nail heads showing on ridge caps, and dark streaking that returns after cleaning. Catching a roof at that stage means a planned replacement on your schedule instead of an emergency during the next storm.',
      'On the other end of town there is steady new construction, and we work directly with builders and owners on those installs — matching the roof to the design, keeping to the build schedule, and registering the manufacturer warranty at handover.',
    ],
  },
  {
    h2: 'Storms over Paulding County and how claims really get approved',
    paras: [
      'Paulding sits where west Georgia storm cells organize before they reach Atlanta, and we see the full range: straight-line wind that strips slopes and lifts ridge caps, hail that bruises mats without breaking them, and the tree-limb strikes that come with a heavily wooded county.',
      'What decides a claim is evidence, not damage. We photograph with dates, test soft metals like vents and gutter aprons for impact dents, mark affected slopes on a roof diagram, write a scope of work an adjuster can verify on site, and meet the adjuster on the roof. If we do not believe the damage supports a claim, we tell you straight and quote the repair directly — a denied claim costs you weeks and leaves the roof exactly as it was.',
    ],
  },
  {
    h2: 'Ventilation, gutters, and the repair after the repair',
    paras: [
      'The two problems we correct most often on Dallas roofs are not shingle failures. The first is attic airflow: too little intake at the eaves feeding a ridge vent, which superheats the deck through July and August, shortens shingle life, and pushes cooling bills up. The second is tie-in flashing where a lower roof or porch meets a wall, which is where water gets in on additions and bonus rooms long before the field of the roof gives out.',
      'We fix both as part of a replacement — balanced intake and exhaust, rebuilt step and tie-in flashing instead of sealant over the top of it — and we check that gutters and downspouts actually carry water clear of the foundation. Replacing shingles while leaving the airflow and drainage broken just schedules the next visit.',
    ],
  },
];

const neighborhoods = [
  'Downtown Dallas & the courthouse square',
  'Highway 92 corridor',
  'Highway 61 / 278 subdivisions',
  'Seven Hills',
  'Nebo & Yorkville side',
  'Braswell / New Hope',
];

const faq = [
  {
    q: 'Where exactly are you located in Dallas?',
    a: 'Our address is 152 Freedom Dr, Dallas, GA 30157, and our phone is (470) 236-1410. We are a real local business with a fixed address, not a call center routing leads to whoever is available.',
  },
  {
    q: 'How fast can you get to a leak in Dallas?',
    a: 'Dallas is our home base, so active leaks are normally same-day. We stop the water first with emergency tarping, then come back to do the permanent repair once the roof is dry enough to see the full picture.',
  },
  {
    q: 'How do I know whether I need a repair or a full replacement?',
    a: 'A free inspection settles it. We check shingle condition and flexibility, flashing and valleys, decking, and attic ventilation, then send photos with plain notes. If a repair is the right call, we quote the repair — we do not sell replacements to roofs that do not need one.',
  },
  {
    q: 'Do you do new-construction roofing for builders in Paulding County?',
    a: 'Yes. We work with local builders and owner-builders, coordinate with your schedule and inspector, match the roof to the design, and complete a final walkthrough with warranty registration.',
  },
  {
    q: 'Do you help with storm and insurance claims?',
    a: 'Yes — dated photo documentation, a roof diagram, a written scope of work, and we meet your adjuster on site. If the damage will not support a claim, we say so up front and quote the repair instead.',
  },
  {
    q: 'How long have you been roofing in Dallas?',
    a: 'iRoofer Contractors is family-owned and has been working out of Dallas since 2019, with a 5★ average across 54 verified Google reviews.',
  },
];

export default function DallasGaPage() {
  return <CityAreaPage city={city} intro={intro} sections={sections} neighborhoods={neighborhoods} faq={faq} />;
}
