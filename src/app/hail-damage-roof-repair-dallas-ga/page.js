import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import RelatedGuides from '@/components/RelatedGuides';
import { brand } from '@/lib/brand';
import { seo, absoluteUrl } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

// Hail-specific landing page for Dallas, GA + Paulding County (added 2026-10-10).
// Copy rules: only verifiable facts. Business facts limited to what Cristian has
// confirmed (152 Freedom Dr, (470) 236-1410, 5.0 Google rating, family-owned since
// 2019, Owens Corning Contractor Rewards member, free inspections, same-day tarping
// when schedule allows). No review counts, job counts or invented stats.
// Georgia law references checked 2026-10-10:
//   O.C.G.A. § 10-1-393.12 (FindLaw text): 5-business-day cancel right after a written
//     insurer denial; no payment required before that period except written-acknowledged
//     emergency services; roofers may not represent/negotiate a homeowner's claim
//     (licensed public adjusters excepted).
//   Georgia Secretary of State reference "Public Adjusters, Roofing Contractors and
//     Homeowners": submitting an inflated quote to cover a deductible can be insurance
//     fraud under O.C.G.A. § 33-1-9 for both contractor and homeowner.

const PATH = '/hail-damage-roof-repair-dallas-ga';

export const metadata = seo({
  title: 'Hail Damage Roof Repair Dallas GA | Claim Help | iRoofer',
  description:
    'Hail damage roof inspection in Dallas, GA and Paulding County. Free inspection, photo documentation and honest claim guidance. Call (470) 236-1410.',
  path: PATH,
});

const signs = [
  { t: 'Bruised or pocked shingles', d: 'Hail knocks granules off asphalt shingles, leaving dark, roughly round spots that can feel soft where the mat underneath is fractured.' },
  { t: 'Granules piling up', d: 'A heavy layer of sand-like granules at downspouts or in gutters right after a storm means the shingle surface took impact.' },
  { t: 'Dents on soft metal', d: 'Fresh dents in gutters, downspouts, roof vents or AC condenser fins tell you hail was big enough to check the roof.' },
  { t: 'Cracked, split or missing pieces', d: 'Brittle shingles can crack under impact, and the wind that comes with hail can crease or tear off tabs.' },
  { t: 'Damage you can see from the yard', d: 'Torn window screens, chipped paint or spatter marks on siding are easy ground-level clues.' },
];

const afterStorm = [
  'Stay off the roof. Everything you need can be photographed from the ground.',
  'Photograph dented gutters and vents, granules at downspouts, hail next to a coin for scale, and any ceiling stains. Note the storm&apos;s date and time.',
  'If water is coming in, move belongings, set out buckets and call us for a temporary tarp. Keep receipts for anything you spend protecting the house.',
  'Book a free roof inspection before you sign anything, so you know whether there is real hail damage before deciding on a claim.',
  'If the damage is real, report it to your insurer and ask what your policy requires. Every policy sets its own deadlines, so read yours.',
];

const faqs = [
  {
    q: 'How do I know if hail damaged my roof in Dallas, GA?',
    a: 'From the ground, look for dented gutters, downspouts, vents and AC fins, granules washing out of the downspouts, and torn screens. On the roof itself, hail leaves dark, granule-free bruises and sometimes cracked shingles. We offer a free inspection and show you photos of what we find, including when we find nothing worth a claim.',
  },
  {
    q: 'Should I call my insurance company or a roofer first?',
    a: 'Many homeowners have the roof inspected first so they know whether the damage is real before they report it. Either order is fine. What matters is that you report real storm damage promptly and follow the notice requirements in your own policy.',
  },
  {
    q: 'Will you negotiate my claim with the insurance company?',
    a: 'No. Georgia law (O.C.G.A. § 10-1-393.12) does not allow a residential roofing contractor to represent you or negotiate your claim; only a licensed public adjuster can do that. What we do is document the damage with photos, write a clear repair scope, and be on the roof to point out what we found when your adjuster inspects, if you want us there.',
  },
  {
    q: 'Can a roofer pay or waive my deductible?',
    a: 'You are responsible for your deductible. The Georgia Secretary of State warns that sending your insurer a contractor quote for more than you will actually pay, to cover the deductible, can be insurance fraud for both the homeowner and the contractor. Be wary of anyone who offers to "take care of" it.',
  },
  {
    q: 'What if my claim is denied after I sign a contract?',
    a: 'Under Georgia law, if your roofing contract is to be paid from insurance proceeds, you can cancel it in writing before midnight on the fifth business day after you receive written notice from your insurer that all or part of the claim is not covered. The roofer cannot require payment before that window closes, except for emergency work you acknowledged in writing.',
  },
  {
    q: 'Do you inspect for hail in Hiram, Powder Springs and Acworth?',
    a: 'Yes. We are based at 152 Freedom Dr in Dallas and inspect roofs across Paulding County, including Hiram, and nearby Powder Springs and Acworth. Call (470) 236-1410 to get on the schedule.',
  },
];

const relatedLinks = [
  { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage roof repair in Dallas GA' },
  { href: '/services/storm-damage-roof-repair/', label: 'Storm damage roof repair hub' },
  { href: '/services/roof-repair/', label: 'Roof repair across Metro Atlanta' },
  { href: '/roof-repair-dallas-ga/', label: 'Roof repair in Dallas GA' },
  { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency roof repair and tarping' },
  { href: '/services/roof-insurance-claims/', label: 'Roof insurance claims help' },
  { href: '/storm-damage-roof-repair-hiram/', label: 'Storm damage repair in Hiram' },
  { href: '/storm-damage-roof-repair-powder-springs/', label: 'Storm damage repair in Powder Springs' },
  { href: '/storm-damage-roof-repair-acworth/', label: 'Storm damage repair in Acworth' },
  { href: '/contact/', label: 'Book a free roof inspection' },
];

// Page-scoped Service node tied to the global RoofingContractor/LocalBusiness entity
// (rendered site-wide by LocalSeo in layout.js). Keep in sync with the copy above.
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${absoluteUrl(PATH)}#service`,
  name: 'Hail Damage Roof Inspection and Repair in Dallas, GA',
  serviceType: 'Hail damage roof repair',
  url: absoluteUrl(PATH),
  description:
    'Free hail damage roof inspections with photo documentation, same-day tarping when schedule allows, and repair or replacement for homeowners in Dallas, GA and Paulding County.',
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
    { '@type': 'City', name: 'Acworth' },
    { '@type': 'AdministrativeArea', name: 'Paulding County' },
  ],
};

const p = { color: '#52606b', fontSize: '1.02rem', marginTop: 12, lineHeight: 1.75 };
const h2 = { fontSize: 'clamp(1.5rem,2.6vw,2rem)', fontWeight: 800, lineHeight: 1.15 };
const a = { color: 'var(--orange)', fontWeight: 700 };

export default function HailDamagePage() {
  return (
    <>
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <Link href="/storm-damage-roof-repair-dallas-ga/" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>
                ← Storm Damage Roof Repair
              </Link>
              <span className="eyebrow dark" style={{ marginTop: 16, display: 'inline-block' }}>Dallas, GA &amp; Paulding County</span>
              <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02, marginTop: 8 }}>
                Hail Damage Roof Repair in Dallas, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680, lineHeight: 1.7 }}>
                Hail damage is easy to miss from the driveway and easy to oversell from a stranger&apos;s ladder. iRoofer Contractors is a family-owned roofer based at 152 Freedom Dr in Dallas, rated 5.0 on Google. After a storm we inspect your roof free, photograph exactly what we find, and tell you plainly whether it looks like a claim, a simple repair, or nothing to worry about.
              </p>
              <div className="cta" style={{ marginTop: 28 }}>
                <a className="bigphone" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }} href={`tel:${brand.phone}`}>{brand.phone}</a>
                <Link className="btn btn-solid" href="/contact/" style={{ marginLeft: 16, verticalAlign: 'middle' }}>Book a free inspection <span className="arr">→</span></Link>
              </div>
            </div>

            <div className="rv">
              <img src="/assets/storm-damage.webp?v=2" alt="Hail damage roof inspection on a Dallas, GA home by iRoofer Contractors" loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%', marginBottom: 24 }} />
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="contact" id="hail-damage-roof-repair-dallas-ga-quote" source="Hail Damage Roof Repair Dallas GA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
            <h2 style={h2}>Signs of hail damage on a roof</h2>
            <p style={p}>
              Thunderstorms in west Metro Atlanta can drop hail on one subdivision and miss the next street, so a neighbor&apos;s new roof says little about yours. Here is what we look for, starting with what you can check without a ladder.
            </p>
            <ul style={{ marginTop: 14, lineHeight: 1.7, color: '#52606b', paddingLeft: 20 }}>
              {signs.map((s) => (
                <li key={s.t} style={{ marginBottom: 10 }}><strong style={{ color: '#161d25' }}>{s.t}.</strong> {s.d}</li>
              ))}
            </ul>
            <p style={p}>
              Not every dark spot is hail. Blistering, normal aging and old repairs can look similar, which is why we photograph each finding instead of just handing you a number.
            </p>
          </div>

          <div className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
            <h2 style={h2}>What to do after a hail storm</h2>
            <ol style={{ marginTop: 14, lineHeight: 1.7, color: '#52606b', paddingLeft: 20 }}>
              {afterStorm.map((step) => (
                <li key={step.substring(0, 30)} style={{ marginBottom: 10 }}>{step}</li>
              ))}
            </ol>
            <p style={p}>
              If a storm has opened the roof and water is entering now, go straight to our <Link href="/emergency-roof-repair-dallas-ga/" style={a}>emergency roof repair</Link> page or call {brand.phone}. We tarp the same day when the schedule and safe access allow.
            </p>
          </div>

          <div className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
            <h2 style={h2}>How hail insurance claims work in Georgia</h2>
            <p style={p}>
              Most homeowners policies cover sudden hail damage, but the details live in your own policy. Check your declarations page for the deductible: some policies carry a separate wind and hail deductible, and some write it as a percentage of the home&apos;s insured value instead of a flat dollar amount. If the repair costs less than the deductible, a claim will not pay anything, and we will tell you so.
            </p>
            <p style={p}>
              A typical claim runs like this: you report the loss, the insurer sends an adjuster to inspect, and you receive an estimate. Many replacement-cost policies pay the actual cash value first and release the held-back depreciation after the work is finished and invoiced. We document the damage, write a clear scope of repair, and can be on the roof when the adjuster inspects so the damage we found is pointed out in person.
            </p>
            <p style={p}>
              Georgia law adds protections. Under O.C.G.A. § 10-1-393.12 you can cancel an insurance-funded roofing contract within five business days of a written denial from your insurer, and roofers may not negotiate your claim for you; that belongs to you or a licensed public adjuster. You are also responsible for your deductible, so a roofer who offers to absorb it is a red flag. The FAQ below covers the details.
            </p>
            <p style={p}>
              For a deeper walk-through, read our <Link href="/blog/dallas-ga-hail-storm-insurance-claims/" style={a}>hail storm insurance claims guide</Link> or see how we help on the <Link href="/services/roof-insurance-claims/" style={a}>roof insurance claims</Link> page.
            </p>
          </div>

          <div className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
            <h2 style={h2}>Hail inspections across Paulding County and nearby</h2>
            <p style={p}>
              Our shop is in Dallas, so homes across Paulding County, including Hiram, are close by, and we also work in nearby Powder Springs and Acworth. You deal with the same family-owned company for the inspection, the repair and any follow-up. When a roof needs replacing, shingles are installed by an Owens Corning Contractor Rewards member.
            </p>
            <p style={p}>
              If we find wear rather than hail, we quote a <Link href="/services/roof-repair/" style={a}>roof repair</Link> directly instead of steering you into a claim. For wind or fallen-limb damage, see our broader <Link href="/storm-damage-roof-repair-dallas-ga/" style={a}>storm damage roof repair</Link> page.
            </p>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Hail damage FAQ</span>
            <h2>Questions Dallas homeowners ask after a hail storm</h2>
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
            <Link href="/contact/" className="btn btn-solid">Book a free hail inspection <span className="arr">→</span></Link>
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
          <RelatedGuides slug="storm-damage-roof-repair" heading="Local roofing guides" />
        </div>
      </section>
      <FaqSchema faq={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
