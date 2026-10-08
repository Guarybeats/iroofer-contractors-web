import { OG_IMAGE } from '@/lib/seo';
import CityAreaPage from '@/components/CityAreaPage';
import { getCity, brand } from '@/lib/brand';

const city = getCity('kennesaw');

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Roof Replacement & Repair in Kennesaw, GA | iRoofer',
  description:
    'Replacing or repairing a roof in Kennesaw? Free inspection, written scope, and Kennesaw permits handled. Family-owned Dallas, GA crew. (470) 236-1410',
  alternates: { canonical: `${brand.url}/service-areas/kennesaw/` },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: `${brand.url}/service-areas/kennesaw/`,
    title: 'Roof Replacement & Repair in Kennesaw, GA | iRoofer',
    description:
      'Replacing or repairing a roof in Kennesaw? Free inspection, written scope, and Kennesaw permits handled. Family-owned Dallas, GA crew. (470) 236-1410',
  },
};

const intro = [
  'Whether your Kennesaw roof needs a full replacement, a repair, or a look after the last storm, it starts the same way: a free inspection, photos of what we find, and a written scope you can actually read. iRoofer Contractors is family-owned in Dallas, GA since 2019, and we work across north Cobb from our shop at 152 Freedom Dr.',
  'Ready to talk about your roof? Visit https://iroofercontractors.com/contact/ or call (470) 236-1410. Cristian and the crew will give you a straight answer.',
];

const sections = [
  {
    h2: 'Roof replacement in Kennesaw',
    paras: [
      'When a roof is at the end of its life (wear across several slopes, leaks in more than one place, soft decking, or storm damage everywhere), patching just moves the next leak. A Kennesaw replacement with us means a full tear-off to the deck, decking repairs as found (with photos), underlayment and ice-and-water membrane where water actually gets in, new flashing at every wall, chimney and pipe, balanced ventilation, and shingles installed to the manufacturer’s specification. We’re an Owens Corning Preferred Contractor when that system fits the house. Daily cleanup and a magnetic nail sweep, then a walkthrough and warranty registration at the end.',
      'Kennesaw homes range from older ranches to steeper two-stories and newer subdivisions. On steep, cut-up roofs, dormers and wall tie-ins are where a replacement is won or lost, and on older decks we often find prior nail-overs. We call those out at inspection so the price reflects the real job, not a surprise change order. Full details: [roof replacement in Kennesaw](/roof-replacement-kennesaw/).',
    ],
  },
  {
    h2: 'Kennesaw permits and the historic district',
    paras: [
      'The City of Kennesaw runs its own Building Services department and takes permit applications online only. If your home is in the historic district, the Certificate of Appropriateness has to be approved before the building permit application, and it covers exterior work like a roof. We check which rules apply to your address at inspection, so the schedule doesn’t stall at the permit counter.',
    ],
  },
  {
    h2: 'Roof repair in Kennesaw',
    paras: [
      'Not every roof needs replacing. Localized leaks, a cracked pipe boot, failed flashing at a wall, or wind-lifted tabs on an otherwise sound roof are repairs. We find the actual entry point (often not right above the stain), photograph it, and quote the fix in writing. More: [roof repair in Kennesaw](/roof-repair-kennesaw/).',
    ],
  },
  {
    h2: 'Storm damage and emergency roof repair in Kennesaw',
    paras: [
      'Roof open after a storm, or water coming in? Call (470) 236-1410 and say it’s active. We tarp the same day when the schedule and safe access allow, then document the damage slope by slope for your adjuster. If the damage won’t support a claim, we’ll tell you and quote the repair. Full process: [storm and emergency roof repair in Kennesaw](/storm-damage-roof-repair-kennesaw/).',
    ],
  },
  {
    h2: 'Where we work around Kennesaw',
    paras: [
      'Downtown Kennesaw, the Kennesaw Mountain side, Frey Road and Barrett Parkway, the Jiles Road corridor, North Main and Old Highway 41, out to the Acworth and Woodstock edges. Comparing nearby Cobb cities? See our [Marietta](/service-areas/marietta/) and [Acworth](/service-areas/acworth/) pages, or every city on the [service areas](/service-areas/) hub.',
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
    q: 'Do you do full roof replacements in Kennesaw?',
    a: 'Yes. Full tear-off to the deck, decking repairs as found, new underlayment, flashing and ventilation, and shingles installed to spec. Free measured inspection and a written proposal first.',
  },
  {
    q: 'How much does a roof replacement cost in Kennesaw?',
    a: 'It depends on size, pitch, how many layers come off, decking condition and the shingle you choose. We don’t quote over the phone. We measure, inspect, and put the number in writing for free.',
  },
  {
    q: 'Who issues roofing permits in Kennesaw?',
    a: 'The City of Kennesaw’s Building Services, online only. In the historic district, the Certificate of Appropriateness must be approved before the permit application. We handle it.',
  },
  {
    q: 'Can you help with an emergency leak in Kennesaw?',
    a: 'Yes. Call (470) 236-1410 and say water is coming in. Active leaks go ahead of routine work, and we tarp the same day when the schedule and safe access allow.',
  },
  {
    q: 'Where is your shop?',
    a: '152 Freedom Dr, Dallas, GA 30157. Family-owned since 2019.',
  },
];

const relatedLinks = [
  { href: '/roof-replacement-kennesaw/', label: 'Roof replacement in Kennesaw, GA' },
  { href: '/roof-repair-kennesaw/', label: 'Roof repair in Kennesaw' },
  { href: '/storm-damage-roof-repair-kennesaw/', label: 'Storm & emergency roof repair in Kennesaw' },
  { href: '/gutter-repair-replacement-kennesaw/', label: 'Gutter repair in Kennesaw' },
  { href: '/services/roof-insurance-claims/', label: 'Insurance claims help' },
  { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency roof repair (Dallas & west metro)' },
  { href: '/service-areas/marietta/', label: 'Marietta service area' },
  { href: '/service-areas/acworth/', label: 'Acworth service area' },
  { href: '/contact/', label: 'Contact iRoofer' },
];

export default function KennesawPage() {
  return (
    <CityAreaPage
      city={city}
      h1="Roof Replacement, Repair & Storm Help in Kennesaw, GA"
      intro={intro}
      sections={sections}
      neighborhoods={neighborhoods}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
