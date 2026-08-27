import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('kennesaw');

export const metadata = {
  title: 'Roofing in Kennesaw, GA — Repair, Replacement & Storm Response | iRoofer Contractors',
  description:
    'Family-owned roofer serving Kennesaw, GA (Cobb County). Roof repair, full replacement, small-business and HOA-neighborhood roofing, storm claim help. Free photo-documented inspection — call (470) 236-1410.',
  alternates: { canonical: `${brand.url}/service-areas/kennesaw` },
  openGraph: {
    url: `${brand.url}/service-areas/kennesaw`,
    title: 'Roofing in Kennesaw, GA — iRoofer Contractors',
    description:
      'Kennesaw roof repair and replacement from a family-owned crew based in Dallas, GA. Free inspections, photo reports, honest answers.',
  },
};

const intro = [
  'Kennesaw is one of our closest markets — a short run east from our Dallas, GA shop, which is why we can usually get someone on a Kennesaw roof quickly when water is coming in. The town is mostly 1990s and 2000s subdivision housing with HOAs, plus small commercial and retail buildings along Cobb Parkway and around Kennesaw State.',
  'We handle roof repair, full replacement, new-construction roofing, gutters, and storm and insurance claim documentation for both homes and small business properties. Inspections are free and come back as dated photos with plain notes.',
];

const sections = [
  {
    h2: 'Subdivision roofs aging out on the same schedule',
    paras: [
      'Because so much of Kennesaw was built in a compressed period, entire streets reach shingle end-of-life together. If several neighbors replaced last season, yours is likely in the same window. The signs to watch are granule accumulation in gutters and at downspout outlets, curling on the south and west slopes, exposed fastener heads on ridge caps, and streaking that returns after cleaning.',
      'HOA covenants apply in most of these neighborhoods. We put manufacturer, product line, and exact color in the written scope so your architectural request has real specifics, hold the material order until you have approval, and agree dumpster placement and crew parking before day one.',
    ],
  },
  {
    h2: 'Small business and light commercial roofs',
    paras: [
      'Kennesaw has a lot of owner-operated buildings — shops, offices, and service bays along Cobb Parkway and the side streets off it. Those roofs are usually a mix of steep-slope shingle on the street-facing section and low-slope membrane behind it, and the failures almost always start where the two meet, or at rooftop HVAC curbs and drains.',
      'For commercial work we schedule around your open hours where we can, keep entrances and parking clear, and document conditions for your property insurer. We will tell you honestly whether a section can be repaired or whether it is time to plan a replacement, and we do not quote a full tear-off for a problem that is confined to one detail.',
    ],
  },
  {
    h2: 'Storm response and honest claim advice',
    paras: [
      'When a cell tracks over Cobb County, Kennesaw fills up with out-of-town crews knocking doors within days. Our position is simple: before you sign anything, get a dated photo report from a local company with a real address, and read any contingency agreement carefully — those often bind you to one contractor no matter how the claim turns out.',
      'When we inspect after a storm we test soft metals for impact, mark bruised or torn mats on a roof diagram, photograph everything with dates, and write a scope of work an adjuster can verify. If the damage will not support a claim, we say so and quote the repair directly rather than pushing you into a filing that ends in a denial.',
    ],
  },
  {
    h2: 'Ventilation, gutters and roof lifespan in Georgia heat',
    paras: [
      'The single most common problem we find on Kennesaw replacements is attic ventilation that was built to the minimum and never balanced. Too little intake at the eaves with ridge vent above it starves airflow, superheats the deck through July and August, shortens shingle life, and raises cooling bills. It is inexpensive to correct during a replacement and expensive to ignore.',
      'Gutters are the other quiet culprit. Overflowing or back-pitched gutters rot fascia and soak the ground at the foundation. We check drainage on every inspection and include gutter and downspout correction in the scope when the roof work would otherwise leave the real problem in place.',
    ],
  },
];

const neighborhoods = [
  'Downtown Kennesaw / Main Street',
  'Legacy Park',
  'Barrett Parkway corridor',
  'Kennesaw State area',
  'Stilesboro & Old 41',
  'Brookstone side',
];

const faq = [
  {
    q: 'How fast can you get to Kennesaw for a leak?',
    a: 'Kennesaw is close to our Dallas, GA base, so active leaks are usually same-day or next-morning calls. We stop the water first with emergency tarping, then schedule the permanent repair once the roof is dry enough to see the full picture.',
  },
  {
    q: 'My neighborhood has an HOA. Does that slow the job down?',
    a: 'It adds a step, not a delay, if it is handled early. We give you the manufacturer, product line, and exact color for your architectural request, hold the material order until you have approval, and plan dumpster placement and parking to fit the covenants.',
  },
  {
    q: 'Do you work on small commercial buildings in Kennesaw?',
    a: 'Yes — shops, offices, and service buildings with steep-slope shingle, low-slope membrane, or a combination of both. We schedule around your open hours where possible and document conditions for your property insurer.',
  },
  {
    q: 'A storm crew knocked on my door. Should I let them inspect?',
    a: 'Get a second opinion from a local company with a verifiable address before you sign anything, and read contingency agreements closely. We will give you a free dated photo report of your own roof either way.',
  },
  {
    q: 'Does my roof need replacing, or can it be repaired?',
    a: 'That depends on shingle condition, flashing and valley integrity, deck condition, and ventilation — all of which we check at the free inspection. If a repair is the right answer we quote the repair. We do not sell replacements to roofs that do not need one.',
  },
];

export default function KennesawPage() {
  return <CityAreaPage city={city} intro={intro} sections={sections} neighborhoods={neighborhoods} faq={faq} />;
}
