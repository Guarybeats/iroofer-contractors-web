import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand, cities } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: 'Roofing in Dallas, GA | iRoofer Contractors',
  description:
    'Dallas, GA roofing company for repair, replacement, storm restoration and insurance claims in Paulding County. Family-owned. Free inspection.',
  path: '/dallas-ga-roofing',
});

const faqs = [
  {
    q: 'What does roof repair cost in Dallas, GA?',
    a: 'Most Dallas, GA roof repairs run $250–$3,500 depending on size, pitch, and material. We give a free, written quote after a same-day inspection — no pressure, no obligation. For Dallas leak and repair jobs, start at https://iroofercontractors.com/roof-repair-dallas-ga/ — these are planning ranges, not a quote.',
  },
  {
    q: 'How much is a full roof replacement near Dallas, GA?',
    a: 'Full tear-off and re-roof with architectural asphalt shingles typically runs $8,000–$30,000. Price depends on square footage, pitch, ventilation, and any rotten decking we find. These are general planning ranges for the Dallas, GA area, not a quote — we put the real figure in writing after an on-site inspection.',
  },
  {
    q: 'Do you handle insurance claims for storm damage?',
    a: 'Yes. We document the damage with photos, meet your adjuster on-site, and handle supplements so your payout reflects the true scope. Most hail and wind damage above your deductible is covered.',
  },
  {
    q: 'What do Georgia storms do to roofs here?',
    a: 'Spring and summer bring hail, straight-line winds, and falling limbs off the ridge. Common results: dented shingles, granule loss, lifted flashing, and hidden leaks that show up weeks later. We catch them early with a free inspection.',
  },
  {
    q: 'Which areas do you serve around Dallas, GA?',
    a: 'Dallas, Douglasville, Hiram, Powder Springs, Marietta, Kennesaw, Acworth, and Austell, plus greater west Metro Atlanta (Paulding, Douglas, and Cobb counties).',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — fully licensed, bonded, and insured. We pull local permits, follow current code for underlayment and ventilation, and leave you with the inspection sign-off.',
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
              iRoofer Contractors is a local, family-owned roofing company at 152 Freedom Dr, Dallas, GA 30157.
              This hub covers our full Dallas menu — repair, replacement, storm restoration, gutters, new construction,
              and insurance claims across Paulding County and west Metro Atlanta — with free inspections and a real
              person on the phone at (470) 236-1410. Need a leak fixed today? Start on the Roof repair Dallas GA page.
            </p>
            <div className="cta" style={{ marginTop: 24 }}>
              <a className="bigphone" href="tel:(470) 236-1410" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }}>
                (470) 236-1410
              </a>
              <Link className="btn btn-solid" href="/#contact" style={{ marginLeft: 16, verticalAlign: 'middle' }}>
                Get a free quote <span className="arr">→</span>
              </Link>
            </div>
            <p style={{ marginTop: 16 }}>
              <Link href="/roof-repair-dallas-ga/" className="chip">Roof repair Dallas GA (money page) →</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">What we do</span>
            <h2>Roofing services in Dallas, GA</h2>
          </div>
          <div className="cards">
            <div className="card">
              <h3>Roof Repair</h3>
              <p>Leaks, storm damage, flashing, vents, and shingle repair. We find the source and fix it right so a small problem stays small.</p>
              <Link href="/roof-repair-dallas-ga/" className="chip">Roof repair Dallas GA →</Link>
              <Link href="/services/roof-repair/" className="chip">Roof repair service hub →</Link>
            </div>
            <div className="card">
              <h3>Roof Replacement</h3>
              <p>Full tear-off and re-roof with architectural asphalt shingles installed by an Owens Corning Preferred Contractor, installed clean and built to last.</p>
              <Link href="/roof-replacement-dallas-ga/" className="chip">Roof replacement Dallas GA →</Link>
              <Link href="/services/roof-replacement/" className="chip">Replacement service hub →</Link>
            </div>
            <div className="card">
              <h3>Storm & Hail Damage</h3>
              <p>Free inspections, same-day emergency tarping, and insurance documentation after Georgia storms.</p>
              <Link href="/storm-damage-roof-repair-dallas-ga/" className="chip">Storm damage roof repair Dallas →</Link>
              <Link href="/emergency-roof-repair-dallas-ga/" className="chip">Emergency roof repair Dallas →</Link>
              <Link href="/blog/wind-damage-roof-repair-dallas/" className="chip">Wind damage roof repair →</Link>
            </div>
            <div className="card">
              <h3>Gutters</h3>
              <p>Repair, realignment, and replacement of gutters and downspouts so water flows away from your home.</p>
              <Link href="/gutter-repair-replacement-dallas-ga/" className="chip">Gutter repair &amp; replacement Dallas →</Link>
              <Link href="/services/gutter-repair-replacement/" className="chip">Gutter service hub →</Link>
            </div>
            <div className="card">
              <h3>New Construction</h3>
              <p>Dry-in on the builder&apos;s schedule with Owens Corning Preferred Contractor installs and Paulding County inspection coordination.</p>
              <Link href="/new-construction-dallas-ga/" className="chip">New construction Dallas GA →</Link>
              <Link href="/services/new-construction/" className="chip">New construction hub →</Link>
            </div>
            <div className="card">
              <h3>Dallas service area</h3>
              <p>Neighborhood notes, storm claim process, and how we work from 152 Freedom Dr across Paulding County.</p>
              <Link href="/service-areas/dallas-ga/" className="chip">Dallas GA service area →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-pad" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">The claim process</span>
            <h2>How to file a roof insurance claim in Dallas, GA</h2>
          </div>
          <ol style={{ lineHeight: 1.8, color: '#52606b', maxWidth: 720 }}>
            <li>After a storm, take ground-level photos: dented gutters, granules in the drain, missing shingles, interior stains.</li>
            <li>Call us for a free Dallas storm inspection — we document everything and tell you if a claim is worth filing.</li>
            <li>We meet your adjuster on-site, write the full scope, and handle supplements so you're not chasing paperwork.</li>
            <li>You get a clear written estimate and a clean, warranty-backed install — no surprise line items.</li>
          </ol>
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
            Plus greater west Metro Atlanta — Paulding, Douglas, and Cobb counties. Not sure if you're in range? Call (470) 236-1410.
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


      <section className="sec-pad" style={{ background: '#fff', paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Internal links</span>
            <h2>Jump to the Dallas page you need</h2>
          </div>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem 1.4rem', listStyle: 'none', padding: 0 }}>
            <li><Link href="/roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof repair Dallas GA →</Link></li>
            <li><Link href="/roof-replacement-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof replacement Dallas GA →</Link></li>
            <li><Link href="/storm-damage-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Storm damage Dallas GA →</Link></li>
            <li><Link href="/emergency-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Emergency repair Dallas GA →</Link></li>
            <li><Link href="/gutter-repair-replacement-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Gutters Dallas GA →</Link></li>
            <li><Link href="/new-construction-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>New construction Dallas GA →</Link></li>
            <li><Link href="/service-areas/dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Service area Dallas GA →</Link></li>
            <li><Link href="/services/" style={{ color: 'var(--orange)', fontWeight: 700 }}>All services →</Link></li>
          </ul>
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
        </div>
      </section>

      <FaqSchema faq={faqs} />
    </main>
  );
}
