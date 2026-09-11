import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand, cities } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: 'Dallas GA Roofing Company & Contractor | iRoofer Contractors',
  description:
    'Dallas GA roofing company — local contractor for repair, replacement, storm & claims. Family-owned since 2019. (470) 236-1410 · https://iroofercontractors.com/contact/',
  path: '/dallas-ga-roofing',
});

// Qualitative FAQs — dollar ranges from prior live FAQ softened/cut (VERIFY-OR-CUT).
const faqs = [
  {
    q: 'What does a Dallas roofing contractor visit include?',
    a: 'On-roof look when safe, photos, and plain-English next steps — repair, monitor, or replace. We put a real figure in writing after inspection; this hub does not publish a fixed public price list.',
  },
  {
    q: 'Do you publish prices here?',
    a: 'No fixed public price list on this hub. Planning factors live on the estimator and cost content labeled not-a-quote; real numbers after an on-site inspection.',
  },
  {
    q: 'Repair or replace?',
    a: 'Isolated failures repair; widespread wear or repeated leaks often replace. We’ll say which after we see the roof.',
  },
  {
    q: 'Do you handle insurance claims for storm damage?',
    a: 'You file; we document with photos, meet your adjuster on-site, and help with supplements when the scope falls short. Approvals depend on your policy — we don’t guarantee claim outcomes.',
  },
  {
    q: 'What do Georgia storms do to roofs here?',
    a: 'Spring and summer bring hail, straight-line winds, and falling limbs. Common results: dented shingles, granule loss, lifted flashing, and hidden leaks that show up weeks later. We catch them early with a free inspection.',
  },
  {
    q: 'Which areas do you serve around Dallas, GA?',
    a: 'Dallas, Douglasville, Hiram, Powder Springs, Marietta, Kennesaw, Acworth, Austell, Roswell, Alpharetta, Canton, plus greater west Metro Atlanta (Paulding, Douglas, and Cobb counties).',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — fully licensed, bonded, and insured. Owens Corning Preferred when that system is selected. We pull local permits when required and leave you with clear paperwork.',
  },
];

function faqItem(open) {
  return 'faq-item' + (open ? ' open' : '');
}

export default function DallasGaRoofingPage() {
  return (
    <main>
      <section className="sec-pad" style={{ paddingTop: 96, background: 'linear-gradient(180deg,#fff, #f4f7fa)' }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Dallas, GA · Paulding County</span>
            <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02, marginTop: 8 }}>
              Dallas, GA Roofing Company
            </h1>
            <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 720 }}>
              iRoofer Contractors is a local, family-owned roofing company and roofing contractor based in Dallas, Georgia.
              Use this hub to jump to the right money page — repair, replacement, storm, claims, gutters, emergency —
              with free inspections and a real person on the phone.
            </p>
            <div className="cta" style={{ marginTop: 24 }}>
              <a className="bigphone" href="tel:(470) 236-1410" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }}>
                (470) 236-1410
              </a>
              <Link className="btn btn-solid" href="/contact/" style={{ marginLeft: 16, verticalAlign: 'middle' }}>
                Get a free quote <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">How to use this hub</span>
            <h2>Pick the money URL that matches your problem</h2>
            <p style={{ color: '#52606b', maxWidth: 720 }}>
              Search &quot;Dallas GA roofing company&quot; should land somewhere that routes clearly — not thin duplicate paragraphs on every URL.
            </p>
          </div>
          <ul style={{ color: '#52606b', lineHeight: 1.9, maxWidth: 720 }}>
            <li>Leaking or stained ceilings → repair money page</li>
            <li>Full tear-off curiosity → replacement money page</li>
            <li>After a storm → storm / emergency / claims</li>
            <li>Overflowing eaves → gutters</li>
            <li>Who are these people → about</li>
          </ul>

          <div className="sec-head rv" style={{ marginTop: 48 }}>
            <span className="eyebrow dark">What we do</span>
            <h2>Roofing services in Dallas, GA</h2>
          </div>
          <div className="cards">
            <div className="card">
              <h3>Roof Repair</h3>
              <p>Leaks, storm damage, flashing, vents, and shingle repair. We find the source and fix it right so a small problem stays small.</p>
              <Link href="/roof-repair-dallas-ga/" className="chip">Roof repair Dallas GA →</Link>
            </div>
            <div className="card">
              <h3>Roof Replacement</h3>
              <p>Full tear-off and re-roof with architectural asphalt shingles installed by an Owens Corning Preferred Contractor, installed clean and built to last.</p>
              <Link href="/roof-replacement-dallas-ga/" className="chip">Roof replacement Dallas GA →</Link>
            </div>
            <div className="card">
              <h3>Storm &amp; Hail Damage</h3>
              <p>Free inspections, same-day emergency tarping when we can, and insurance documentation after Georgia storms.</p>
              <Link href="/storm-damage-roof-repair-dallas-ga/" className="chip">Storm damage roof repair Dallas →</Link>
              <Link href="/emergency-roof-repair-dallas-ga/" className="chip">Emergency →</Link>
              <Link href="/blog/wind-damage-roof-repair-dallas/" className="chip">Wind damage guide →</Link>
            </div>
            <div className="card">
              <h3>Insurance claims</h3>
              <p>You file; we document, meet the adjuster, and help with supplements — no guaranteed approvals.</p>
              <Link href="/services/roof-insurance-claims/" className="chip">Claims help →</Link>
            </div>
            <div className="card">
              <h3>Gutters</h3>
              <p>Repair, realignment, and replacement of gutters and downspouts so water flows away from your home.</p>
              <Link href="/gutter-repair-replacement-dallas-ga/" className="chip">Gutter services →</Link>
            </div>
            <div className="card">
              <h3>Nearby Hiram</h3>
              <p>Same crew standards across the county line.</p>
              <Link href="/roof-repair-hiram/" className="chip">Hiram repair →</Link>
              <Link href="/roof-replacement-hiram/" className="chip">Hiram replacement →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-pad" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <span className="eyebrow dark">Why a Dallas-based contractor</span>
              <h2>Year-round local accountability</h2>
              <p style={{ color: '#52606b', marginTop: 12, lineHeight: 1.75 }}>
                iRoofer Contractors — {brand.owner}, family-owned since 2019, shop at 152 Freedom Dr, Dallas, GA 30157.
                Licensed, bonded, insured. Owens Corning Preferred when selected. We work Paulding and nearby west-metro cities every week — not as a one-week storm blitz.
              </p>
              <p style={{ color: '#52606b', marginTop: 12, lineHeight: 1.75 }}>
                Dallas and Paulding roofs see tree cover, humidity, and fast-moving storms. That mix ages flashing and asphalt faster than a brochure timeline.
                A local roofing company that answers the phone after the job matters as much as the shingle brand on the invoice.
              </p>
              <p style={{ color: '#52606b', marginTop: 12, lineHeight: 1.75 }}>
                Read live Google reviews on the Business Profile. We don&apos;t invent testimonials on this hub.
              </p>
              <p style={{ marginTop: 16 }}>
                <Link href="/about/" style={{ fontWeight: 700, color: 'var(--orange)' }}>About iRoofer →</Link>
                {' · '}
                <Link href="/services/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Services hub →</Link>
              </p>
            </div>
            <div className="rv">
              <span className="eyebrow dark">Process in one breath</span>
              <h2>Inspect → scope → schedule → clean up</h2>
              <ol style={{ lineHeight: 1.8, color: '#52606b', marginTop: 12 }}>
                <li>Inspect and photograph</li>
                <li>Written scope</li>
                <li>Schedule the crew</li>
                <li>Repair or replace</li>
                <li>Cleanup and walkthrough</li>
              </ol>
              <p style={{ color: '#52606b', marginTop: 12 }}>
                Storm jobs add documentation and adjuster coordination when you choose that path:
                photos → inspection → adjuster meetup → written scope → install.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Where we work</span>
            <h2>Service area around Dallas, GA</h2>
          </div>
          <div className="chips" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {cities.slice(0, 8).map((c) => (
              <Link key={c.slug} href={`/service-areas/${c.slug}/`} className="chip">
                {c.name}, {c.state} →
              </Link>
            ))}
          </div>
          <p style={{ color: '#52606b', marginTop: 16, maxWidth: 680 }}>
            Plus greater west Metro Atlanta — Paulding, Douglas, and Cobb counties. Not sure if you&apos;re in range? Call (470) 236-1410.
          </p>
        </div>
      </section>

      <section className="sec-pad" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="rv" style={{ maxWidth: 460, margin: '0 auto' }}>
            <QuoteForm variant="contact" id="dallas-ga-roofing-quote" source="Dallas GA Roofing Hub" />
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Dallas, GA roofing FAQ</span>
            <h2>Questions homeowners ask us</h2>
          </div>
          <div className="faq-list rv">
            {faqs.map((f, i) => (
              <div className={faqItem(i === 0)} key={f.q}>
                <button className="faq-q" aria-expanded={i === 0}>{f.q}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24, color: '#52606b' }}>
            Pick the money URL that matches your problem, or call (470) 236-1410 and describe it in one sentence — leak, storm, replace, or gutters.{' '}
            <Link href="/contact/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Contact</Link>
          </p>
        </div>
      </section>

      <FaqSchema faq={faqs} />
    </main>
  );
}
