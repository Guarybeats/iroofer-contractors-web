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
  title: 'Hail Damage Roof Repair & Inspection Dallas GA | iRoofer',
  description:
    'Hail damage roof repair and free inspection in Dallas, GA and Paulding County. Photo documentation and honest insurance claim help. Call (470) 236-1410.',
  path: PATH,
});

// Keyword map (Google autocomplete research, 2026-10-10). "Dallas" suggestions skew to
// Dallas, TX, so the page anchors to Dallas, GA / Paulding County / Hiram / 30157 & 30132.
//   primary: hail damage roof repair (+ near me), hail damage roof inspection (+ near me),
//            hail damage roofers / roofing companies hail damage
//   H2s:     what hail damage looks like on a roof; repair vs replacement (how much hail
//            damage to replace roof); hail damage roof repair cost; hail damage roof insurance
//            claim / deductible / does insurance cover; hail damage roof repair scams;
//            metal roofing hail damage
// No dollar figures on this page on purpose: cost depends on the inspection.

const signs = [
  { t: 'Bruised or pocked shingles', d: 'Hail knocks granules off asphalt shingles, leaving dark, roughly round spots that can feel soft where the mat underneath is fractured.' },
  { t: 'Granules piling up', d: 'A heavy layer of sand-like granules at downspouts or in gutters right after a storm means the shingle surface took impact.' },
  { t: 'Dents on soft metal', d: 'Fresh dents in gutters, downspouts, roof vents or AC condenser fins tell you hail was big enough to check the roof.' },
  { t: 'Cracked, split or missing pieces', d: 'Brittle shingles can crack under impact, and the wind that comes with hail can crease or tear off tabs.' },
  { t: 'Damage you can see from the yard', d: 'Torn window screens, chipped paint or spatter marks on siding are easy ground-level clues.' },
];

const afterStorm = [
  'Stay off the roof. Everything you need can be photographed from the ground.',
  'Photograph dented gutters and vents, granules at downspouts, hail next to a coin for scale, and any ceiling stains. Note the storm\u2019s date and time.',
  'If water is coming in, move belongings, set out buckets and call us for a temporary tarp. Keep receipts for anything you spend protecting the house.',
  'Book a free hail damage roof inspection before you sign anything, so you know whether there is real damage before deciding on a claim.',
  'If the damage is real, report it to your insurer and ask what your policy requires. Every policy sets its own deadlines, so read yours.',
];

const costFactors = [
  'How many slopes took hail hits, and whether the damage is spread across the roof or limited to one or two faces.',
  'Roof size, pitch and height, which drive labor, safety equipment and disposal.',
  'The shingle or roofing material, and whether a matching product is still available for a repair.',
  'What sits under the shingles: decking condition, underlayment and any older layers found once work starts.',
  'Damaged accessories such as vents, pipe boots, flashing, ridge caps and gutters.',
  'Permit requirements for replacement work in your city or county.',
];

const scamFlags = [
  'A door-knocker shows up right after a storm, says your roof is "totaled" and wants a signature today.',
  'An offer to "cover," "waive" or "absorb" your deductible.',
  'A request for a large payment up front, before any material is delivered or any work starts.',
  'No local office you can drive to, out-of-state plates, or only a cell number and a first name.',
  'Pressure to sign a contract that lets the roofer "handle" or negotiate your insurance claim.',
];

const faqs = [
  {
    q: 'Does insurance cover hail damage to a roof in Georgia?',
    a: 'Most Georgia homeowners policies cover sudden hail damage to a roof, but they do not cover normal wear and aging, and the details depend on your own policy. Some policies carry a separate wind and hail deductible, some pay older roofs at actual cash value, and some exclude cosmetic damage. Read your declarations page or ask your agent. We can inspect first so you know whether there is real hail damage before you file.',
  },
  {
    q: 'How much hail damage is needed to replace a roof?',
    a: 'There is no single number that applies to every roof. Adjusters commonly mark a test square on each slope and count the hail hits that broke or bruised the shingle, then decide whether a slope can be repaired or should be replaced. The threshold varies by insurer and policy. Damage across several slopes, or shingles that can no longer be matched, often points toward replacement; isolated hits usually mean a repair.',
  },
  {
    q: 'What does hail damage look like on a roof?',
    a: 'On asphalt shingles, hail leaves dark, roughly round spots where granules were knocked off, sometimes with a soft, bruised feel or a crack. From the ground, look for dented gutters, downspouts, vents and AC fins, granules washing out of the downspouts, and torn screens. Blistering and normal aging can look similar, so we photograph each finding during a free hail damage roof inspection.',
  },
  {
    q: 'How much does hail damage roof repair cost?',
    a: 'It depends on how many slopes were hit, the size and pitch of the roof, the material, decking condition and damaged accessories like vents and flashing. We do not quote a price before seeing the roof. The inspection is free and you get a written estimate. If the work is paid through insurance, you are responsible for your deductible.',
  },
  {
    q: 'Who pays the deductible on a hail damage roof claim?',
    a: 'You do. The deductible is the homeowner\u2019s share of the claim. The Georgia Secretary of State warns that sending your insurer a contractor quote for more than you will actually pay, to cover the deductible, can be insurance fraud under O.C.G.A. \u00a7 33-1-9 for both the homeowner and the contractor. Be wary of any roofer who offers to waive or absorb it.',
  },
  {
    q: 'How do I avoid hail damage roof repair scams?',
    a: 'Do not sign on the spot after a storm. Choose a roofer with a local address you can visit, check the company on the Georgia Secretary of State website, get a written estimate, and avoid anyone who offers to waive your deductible, wants a large payment up front, or says they will negotiate your claim. Georgia law also lets you cancel an insurance-funded roofing contract within five business days of a written denial from your insurer.',
  },
  {
    q: 'Can a roofer negotiate my hail damage insurance claim in Georgia?',
    a: 'No. Georgia law (O.C.G.A. \u00a7 10-1-393.12) does not allow a residential roofing contractor to represent you or negotiate your claim; only you or a licensed public adjuster can do that. What we do is document the damage with photos, write a clear repair scope, and be on the roof when your adjuster inspects, if you want us there.',
  },
  {
    q: 'Do you do hail damage roof inspections near me in Hiram and Paulding County?',
    a: 'Yes. We are based at 152 Freedom Dr in Dallas, GA 30157 and inspect roofs across Paulding County, including Dallas and Hiram, and nearby Powder Springs and Acworth. The inspection is free. Call (470) 236-1410 to get on the schedule.',
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
                Book a free hail damage roof inspection in Dallas, GA (30157 and 30132) and across Paulding County, including Hiram. iRoofer Contractors is a family-owned roofer based at 152 Freedom Dr in Dallas, Georgia, rated 5.0 on Google. After a storm we inspect your roof, photograph exactly what we find, and tell you plainly whether it looks like an insurance claim, a simple hail damage roof repair, or nothing to worry about.
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
            <h2 style={h2}>What hail damage looks like on a roof</h2>
            <p style={p}>
              Thunderstorms in west Metro Atlanta can drop hail on one Paulding County subdivision and miss the next street, so a neighbor&apos;s new roof says little about yours. If you are wondering how to tell if you have roof hail damage, here is what we look for, starting with what you can check without a ladder.
            </p>
            <ul style={{ marginTop: 14, lineHeight: 1.7, color: '#52606b', paddingLeft: 20 }}>
              {signs.map((s) => (
                <li key={s.t} style={{ marginBottom: 10 }}><strong style={{ color: '#161d25' }}>{s.t}.</strong> {s.d}</li>
              ))}
            </ul>
            <p style={p}>
              Not every dark spot is hail. Blistering, normal aging and old repairs can look similar, which is why every hail damage roof inspection we do comes with dated photos of each finding instead of just a verdict. Those photos are your own hail damage roof pictures to keep, whether or not you hire us.
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
            <h2 style={h2}>Repair or replacement: how much hail damage means a new roof</h2>
            <p style={p}>
              A few scattered hits can usually be fixed with a hail damage roof repair: the damaged shingles are replaced and sealed in. Hail damage roof replacement comes into the picture when the damage is spread across several slopes, when the shingle mat is fractured widely enough that repairs would leave a patchwork, or when the existing shingle can no longer be matched.
            </p>
            <p style={p}>
              On an insurance claim, the adjuster decides what the policy pays for. Adjusters commonly mark a test square on each slope and count the hits that broke or bruised the shingle, and the number that leads to a slope or full replacement varies by insurer and policy. There is no single count that applies to every roof, so be cautious of anyone who promises a free new roof before an adjuster has seen it.
            </p>
            <p style={p}>
              When a roof does need replacing, shingles are installed by an Owens Corning Contractor Rewards member. See our <Link href="/roof-replacement-dallas-ga/" style={a}>roof replacement in Dallas, GA</Link> page for how a full replacement works.
            </p>
          </div>

          <div className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
            <h2 style={h2}>Hail damage roof repair cost</h2>
            <p style={p}>
              We do not publish a flat price for hail work, because two roofs on the same street can take very different damage. The hail damage roof repair cost, or the hail damage roof replacement cost when it comes to that, depends on:
            </p>
            <ul style={{ marginTop: 14, lineHeight: 1.7, color: '#52606b', paddingLeft: 20 }}>
              {costFactors.map((c) => (
                <li key={c.substring(0, 30)} style={{ marginBottom: 10 }}>{c}</li>
              ))}
            </ul>
            <p style={p}>
              The inspection is free and you get a written estimate before any work starts. If the job is paid through insurance, the hail damage roof deductible is yours to pay; the insurer pays the rest according to your policy. If the repair costs less than your deductible, we will tell you a claim will not pay anything and quote the repair directly.
            </p>
          </div>

          <div className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
            <h2 style={h2}>Hail damage roof insurance claims in Georgia</h2>
            <p style={p}>
              Does insurance cover hail damage to a roof? Most homeowners policies cover sudden hail damage, but not normal wear and aging, and the details live in your own policy. Check your declarations page for the deductible: some policies carry a separate wind and hail deductible, and some write it as a percentage of the home&apos;s insured value instead of a flat dollar amount. Some policies also pay older roofs at actual cash value or exclude purely cosmetic damage.
            </p>
            <p style={p}>
              A typical hail damage roof insurance claim runs like this: you report the loss, the insurer sends an adjuster to inspect, and you receive an estimate. Many replacement-cost policies pay the actual cash value first and release the held-back depreciation after the work is finished and invoiced. We document the damage, write a clear scope of repair, and can be on the roof when the adjuster inspects so the damage we found is pointed out in person.
            </p>
            <p style={p}>
              Georgia law adds protections. Under O.C.G.A. § 10-1-393.12 you can cancel an insurance-funded roofing contract before midnight on the fifth business day after you receive written notice from your insurer that all or part of the claim is not covered, and the roofer cannot require payment before that window closes except for emergency work you acknowledged in writing. Roofers may not negotiate your claim for you; that belongs to you or a licensed public adjuster. You are also responsible for your deductible.
            </p>
            <p style={p}>
              For a deeper walk-through, read our <Link href="/blog/dallas-ga-hail-storm-insurance-claims/" style={a}>hail storm insurance claims guide</Link> or see how we help on the <Link href="/services/roof-insurance-claims/" style={a}>roof insurance claims</Link> page.
            </p>
          </div>

          <div className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
            <h2 style={h2}>How to avoid hail damage roof repair scams</h2>
            <p style={p}>
              After a big storm, out-of-town crews often canvass neighborhoods door to door. Some do honest work; others disappear before the warranty matters. Watch for these warning signs:
            </p>
            <ul style={{ marginTop: 14, lineHeight: 1.7, color: '#52606b', paddingLeft: 20 }}>
              {scamFlags.map((x) => (
                <li key={x.substring(0, 30)} style={{ marginBottom: 10 }}>{x}</li>
              ))}
            </ul>
            <p style={p}>
              Waiving a deductible is not a favor. The Georgia Secretary of State warns that inflating a quote to cover your deductible can be insurance fraud under O.C.G.A. § 33-1-9, for the homeowner as well as the contractor. Before you sign, look the company up on the Georgia Secretary of State website, ask for proof of insurance, get the estimate in writing, and make sure there is a local address you can drive to. Ours is 152 Freedom Dr, Dallas, GA 30157, and you can reach us at {brand.phone}.
            </p>
          </div>

          <div className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
            <h2 style={h2}>Metal roofs and hail damage</h2>
            <p style={p}>
              Metal roofing generally stands up to hail better than asphalt shingles, but it is not hail-proof. Large hail can dent panels even when they still keep water out, and some insurance policies exclude that kind of cosmetic metal roofing hail damage, paying only when the roof&apos;s function is affected. If you have a metal roof, check your policy for a cosmetic damage exclusion before a storm, and have the roof inspected for punctures, lifted seams and damaged fasteners or flashing after one.
            </p>
          </div>

          <div className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
            <h2 style={h2}>Hail damage roof inspection near you in Paulding County</h2>
            <p style={p}>
              Our shop is in Dallas, GA, so homes across Paulding County, including Hiram, are close by, and we also work in nearby Powder Springs and Acworth. Unlike roofing companies that follow hail storms from state to state, you deal with the same family-owned local hail damage roofers for the inspection, the repair and any follow-up.
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
            <h2>Hail damage roof questions from Dallas, GA homeowners</h2>
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
