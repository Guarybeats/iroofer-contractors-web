import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import RelatedGuides from '@/components/RelatedGuides';
import { brand } from '@/lib/brand';
import { seo, absoluteUrl } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

// Roof leak repair landing page for Dallas, GA + Paulding County (added 2026-10-14).
// Target: "roof leak repair Dallas GA" (+ near me, leak detection, ceiling leak, leak after rain).
// Supports /roof-repair-dallas-ga/ (general repair) without duplicating it: this page is
// about finding the source of a leak and stopping it. No prices, counts or invented stats.
// Business facts limited to what Cristian has confirmed (152 Freedom Dr, (470) 236-1410,
// family-owned since 2019, free inspections, hours Mon-Fri 9-7 / Sat 9-5 / Sun closed,
// same-day help when schedule and safe access allow; no 24/7 promise).

const PATH = '/roof-leak-repair-dallas-ga';

export const metadata = seo({
  title: 'Roof Leak Repair Dallas GA | Find & Fix Leaks | iRoofer',
  description:
    'Roof leak repair in Dallas, GA and Paulding County. We trace the leak to its source, fix it, and show you photos. Free inspection. Call (470) 236-1410.',
  path: PATH,
});

const sources = [
  { t: 'Pipe boots', d: 'The rubber collar around plumbing vents dries out and cracks in the Georgia sun. It is one of the most common leak sources we find, and usually a small repair.' },
  { t: 'Flashing at walls, chimneys and skylights', d: 'Metal flashing that has lifted, rusted or lost its sealant lets water run behind it and into the wall or ceiling below.' },
  { t: 'Valleys', d: 'Where two roof slopes meet, water is concentrated. Worn or poorly cut valley shingles and debris buildup push water under the roof.' },
  { t: 'Missing or damaged shingles', d: 'Wind, fallen limbs and hail can tear, crease or crack shingles and expose the underlayment to rain.' },
  { t: 'Roof vents and exposed nails', d: 'Cracked vent housings and nail heads that have backed out create small holes that drip with every storm.' },
  { t: 'Gutters and drip edge', d: 'Clogged or loose gutters can back water up under the roof edge, causing rot at the fascia and stains along exterior walls.' },
];

const signs = [
  'Brown or yellow water stains on the ceiling, often spreading after each rain.',
  'Paint bubbling or peeling on ceilings and upper walls.',
  'Drips or damp insulation and wood in the attic, or daylight showing through the roof deck.',
  'A musty smell or mold spots in an upstairs room or closet.',
  'Water stains around a chimney, skylight, or bathroom exhaust fan.',
  'A leak that only shows up in wind-driven rain, which usually points to flashing or a wall joint.',
];

const process = [
  { t: 'Start inside', d: 'We look at where the water shows up, then check the attic above it to follow the wet trail. Water often travels along rafters, so the stain is rarely right under the hole.' },
  { t: 'Find the source on the roof', d: 'We inspect the flashing, pipe boots, vents, valleys and shingles over that area and photograph what we find.' },
  { t: 'Explain it plainly', d: 'You get the photos, what is causing the leak, and a written estimate. If it is a small fix, we tell you that. If the roof is past repair, we tell you that too.' },
  { t: 'Fix it and check the area', d: 'We replace the failed part (boot, flashing, shingles, sealant) and check the decking underneath for soft or rotted wood.' },
];

const faqs = [
  {
    q: 'How do I find where my roof is leaking?',
    a: 'Start in the attic on a dry day with a flashlight, directly above the ceiling stain, and look for dark wood, wet insulation, or drip marks. Water usually runs along rafters before it drips, so follow the trail uphill. Stay off the roof itself. If you cannot find it, our free inspection traces the leak from the attic to its source on the roof.',
  },
  {
    q: 'What should I do right now if my roof is leaking?',
    a: 'Move belongings and electronics out of the way, put a bucket under the drip, and if the ceiling is bulging with water, poke a small hole in the center of the bulge to let it drain into the bucket. Take photos for your records. Then call (470) 236-1410. If water is pouring in, see our emergency roof repair page; we tarp the same day when the schedule and safe access allow.',
  },
  {
    q: 'How much does roof leak repair cost in Dallas, GA?',
    a: 'It depends on what is causing the leak. A cracked pipe boot or a little resealed flashing is a much smaller job than rotted decking or a failed valley. We do not quote a price before finding the source. The inspection is free and you get a written estimate before any work starts.',
  },
  {
    q: 'Can a leaking roof be repaired, or does it need replacing?',
    a: 'Most leaks come from one failed spot, like a pipe boot, flashing or a few damaged shingles, and can be repaired. Replacement makes sense when the shingles are worn out across the roof, leaks keep appearing in different places, or the decking is widely damaged. We show you photos and explain which applies to your roof.',
  },
  {
    q: 'Why does my roof only leak when it rains hard or the wind blows?',
    a: 'Leaks that show up only in heavy or wind-driven rain usually come from flashing at walls and chimneys, lifted shingles, or a gutter backing up under the roof edge. Light rain may never reach the gap. Those are often the hardest leaks to find, which is why we check the attic and the roof together.',
  },
  {
    q: 'Will homeowners insurance pay for a roof leak?',
    a: 'It depends on your policy and the cause. Policies commonly cover sudden damage, such as a storm or a fallen limb, and do not cover leaks from normal wear or aging. Check your policy or ask your agent. If the leak came from storm damage, see our roof insurance claims page for how we document it.',
  },
  {
    q: 'Do you repair roof leaks near me in Hiram and Paulding County?',
    a: 'Yes. We are based at 152 Freedom Dr in Dallas, GA 30157 and repair roof leaks across Paulding County, including Dallas and Hiram, and in nearby Powder Springs, Douglasville and Acworth. Call (470) 236-1410 to book a free inspection.',
  },
];

const relatedLinks = [
  { href: '/roof-repair-dallas-ga/', label: 'Roof repair in Dallas GA' },
  { href: '/services/roof-repair/', label: 'Roof repair across Metro Atlanta' },
  { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency roof repair and tarping' },
  { href: '/services/roof-inspection/', label: 'Roof inspection' },
  { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage roof repair' },
  { href: '/hail-damage-roof-repair-dallas-ga/', label: 'Hail damage roof repair' },
  { href: '/blog/skylight-leak-repair-dallas-ga/', label: 'Skylight leak repair guide' },
  { href: '/roof-repair-hiram/', label: 'Roof repair in Hiram' },
  { href: '/roof-repair-powder-springs/', label: 'Roof repair in Powder Springs' },
  { href: '/contact/', label: 'Book a free roof inspection' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${absoluteUrl(PATH)}#service`,
  name: 'Roof Leak Repair in Dallas, GA',
  serviceType: 'Roof leak repair',
  url: absoluteUrl(PATH),
  description:
    'Roof leak detection and repair for homes in Dallas, GA and Paulding County: free inspection, photo documentation, and repair of pipe boots, flashing, valleys, vents and shingles.',
  provider: {
    '@type': ['RoofingContractor', 'LocalBusiness'],
    '@id': `${brand.url}/#business`,
    name: brand.name,
    telephone: brand.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '152 Freedom Dr',
      addressLocality: 'Dallas',
      addressRegion: 'GA',
      postalCode: '30157',
      addressCountry: 'US',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Dallas', containedInPlace: { '@type': 'AdministrativeArea', name: 'Paulding County' } },
    { '@type': 'City', name: 'Hiram', containedInPlace: { '@type': 'AdministrativeArea', name: 'Paulding County' } },
    { '@type': 'City', name: 'Powder Springs' },
    { '@type': 'City', name: 'Douglasville' },
    { '@type': 'City', name: 'Acworth' },
    { '@type': 'AdministrativeArea', name: 'Paulding County' },
  ],
};

const p = { color: '#52606b', fontSize: '1.02rem', marginTop: 12, lineHeight: 1.75 };
const h2 = { fontSize: 'clamp(1.5rem,2.6vw,2rem)', fontWeight: 800, lineHeight: 1.15 };
const a = { color: 'var(--orange)', fontWeight: 700 };
const ul = { marginTop: 14, lineHeight: 1.7, color: '#52606b', paddingLeft: 20 };

export default function RoofLeakRepairPage() {
  return (
    <>
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <Link href="/roof-repair-dallas-ga/" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>
                ← Roof Repair Dallas, GA
              </Link>
              <span className="eyebrow dark" style={{ marginTop: 16, display: 'inline-block' }}>Dallas, GA &amp; Paulding County</span>
              <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02, marginTop: 8 }}>
                Roof Leak Repair in Dallas, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680, lineHeight: 1.7 }}>
                Water stain on the ceiling? Dripping after every storm? iRoofer Contractors finds where your roof is leaking and fixes it, for homes in Dallas, GA (30157 and 30132), Hiram and across Paulding County. We are a family-owned roofer based at 152 Freedom Dr in Dallas. The inspection is free, and you see photos of the problem before you decide anything.
              </p>
              <div className="cta" style={{ marginTop: 28 }}>
                <a className="bigphone" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }} href={`tel:${brand.phone}`}>{brand.phone}</a>
                <Link className="btn btn-solid" href="/contact/" style={{ marginLeft: 16, verticalAlign: 'middle' }}>Book a free leak inspection <span className="arr">→</span></Link>
              </div>
            </div>

            <div className="rv">
              <img src="/assets/service-repair.webp" alt="Roof leak repair on a Dallas, GA home by iRoofer Contractors" loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%', marginBottom: 24 }} />
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="contact" id="roof-leak-repair-dallas-ga-quote" source="Roof Leak Repair Dallas GA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
            <h2 style={h2}>Signs your roof is leaking</h2>
            <p style={p}>
              A roof leak rarely announces itself with a steady drip. More often it starts as a faint stain that grows a little with every rain, while the decking and insulation above it stay wet. Watch for:
            </p>
            <ul style={ul}>
              {signs.map((s) => (
                <li key={s.substring(0, 30)} style={{ marginBottom: 10 }}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
            <h2 style={h2}>Where roof leaks come from</h2>
            <p style={p}>
              Most leaks start at a joint or opening in the roof, not in the middle of a field of shingles. These are the places we check first on Dallas and Paulding County homes:
            </p>
            <ul style={ul}>
              {sources.map((s) => (
                <li key={s.t} style={{ marginBottom: 10 }}><strong style={{ color: '#161d25' }}>{s.t}.</strong> {s.d}</li>
              ))}
            </ul>
          </div>

          <div className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
            <h2 style={h2}>How we find and fix a roof leak</h2>
            <ol style={ul}>
              {process.map((s) => (
                <li key={s.t} style={{ marginBottom: 10 }}><strong style={{ color: '#161d25' }}>{s.t}.</strong> {s.d}</li>
              ))}
            </ol>
            <p style={p}>
              Patching the ceiling without fixing the roof only hides the problem, so we always start at the source. If your leak is around a skylight, our <Link href="/blog/skylight-leak-repair-dallas-ga/" style={a}>skylight leak repair guide</Link> covers the common causes.
            </p>
          </div>

          <div className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
            <h2 style={h2}>Water coming in right now?</h2>
            <p style={p}>
              Move valuables, set out buckets, and stay off the roof, especially when it is wet. Then call {brand.phone} and tell us water is entering now. Our hours are {brand.hours.full}, and we prioritize active leaks, with same-day tarping when the schedule and safe access allow. See <Link href="/emergency-roof-repair-dallas-ga/" style={a}>emergency roof repair in Dallas, GA</Link> for more.
            </p>
          </div>

          <div className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
            <h2 style={h2}>Roof leak repair cost</h2>
            <p style={p}>
              The price depends entirely on the cause: a cracked pipe boot is a quick fix, while rotted decking under a failed valley takes more work. We do not guess before we find the source. After the free inspection you get photos and a written estimate. If the leak came from a storm or a fallen limb, our <Link href="/services/roof-insurance-claims/" style={a}>roof insurance claims</Link> page explains how we document it for your insurer.
            </p>
          </div>

          <div className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
            <h2 style={h2}>Repair or replace a leaking roof?</h2>
            <p style={p}>
              One leak from one failed spot is a repair. When leaks keep appearing in different places, the shingles are worn across the whole roof, or the decking is soft in several areas, a new roof is usually the better money. We will tell you which one fits your roof, and if it is replacement, see <Link href="/roof-replacement-dallas-ga/" style={a}>roof replacement in Dallas, GA</Link>.
            </p>
          </div>

          <div className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
            <h2 style={h2}>Roof leak repair near you in Paulding County</h2>
            <p style={p}>
              Our shop is in Dallas, so homes across Paulding County, including Hiram, are close by. We also repair leaks in Powder Springs, Douglasville and Acworth. For other repairs like flashing, pipe boots and storm wear, see our <Link href="/roof-repair-dallas-ga/" style={a}>roof repair in Dallas, GA</Link> page.
            </p>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Roof leak FAQ</span>
            <h2>Roof leak questions from Dallas, GA homeowners</h2>
          </div>
          <div className="faq-list rv">
            {faqs.map((f, i) => (
              <div key={f.q} className={'faq-item' + (i === 0 ? ' open' : '')}>
                <button className="faq-q" aria-expanded={i === 0}>{f.q}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/contact/" className="btn btn-solid">Book a free leak inspection <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Related pages</span>
            <h2>Helpful links for homeowners</h2>
          </div>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem 1.4rem', marginTop: 8, listStyle: 'none', padding: 0 }}>
            {relatedLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '.95rem' }}>{l.label} →</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <RelatedGuides slug="roof-repair" heading="Local roofing guides" />
        </div>
      </section>
      <FaqSchema faq={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
