import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: 'Roofing in Dallas, GA | iRoofer Contractors',
  description:
    'Roof repair, replacement, storm restoration, and insurance-claim help in Dallas, GA and Paulding County. Local, family-owned, 54 Google reviews at 5.0. Free inspection.',
  path: '/dallas-ga-roofing',
});

const faqs = [
  {
    q: 'What does roof repair cost in Dallas, GA?',
    a: 'Most Dallas, GA roof repairs run $250–$3,500 depending on size, pitch, and material. We give a free, written quote after a same-day inspection — no pressure, no obligation.',
  },
  {
    q: 'How much is a full roof replacement near Dallas, GA?',
    a: 'Full tear-off and re-roof with GAF architectural shingles typically runs $8,000–$30,000. Price depends on square footage, pitch, ventilation, and any rotten decking we find.',
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
              Roofing in Dallas, GA
            </h1>
            <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 720 }}>
              iRoofer Contractors is a local, family-owned roofing company based in Dallas, Georgia. We handle roof repair, full
              replacement, new-construction roofing, storm restoration, and insurance claims across the west Atlanta metro —
              with free inspections and a real person on the phone.
            </p>
            <div className="cta" style={{ marginTop: 24 }}>
              <a className="bigphone" href="tel:(470) 236-1410" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }}>
                (470) 236-1410
              </a>
              <Link className="btn btn-solid" href="/#contact" style={{ marginLeft: 16, verticalAlign: 'middle' }}>
                Get a free quote <span className="arr">→</span>
              </Link>
            </div>
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
              <Link href="/roof-repair-dallas-ga" className="chip">Dallas roof repair →</Link>
            </div>
            <div className="card">
              <h3>Roof Replacement</h3>
              <p>Full tear-off and re-roof with GAF-certified architectural asphalt shingles, installed clean and built to last.</p>
              <Link href="/roof-replacement-dallas-ga" className="chip">Dallas roof replacement →</Link>
            </div>
            <div className="card">
              <h3>Storm & Hail Damage</h3>
              <p>Free inspections, same-day emergency tarping, and insurance documentation after Georgia storms.</p>
              <Link href="/storm-damage-roof-repair-dallas-ga" className="chip">Storm damage help →</Link>
            </div>
            <div className="card">
              <h3>Gutters</h3>
              <p>Repair, realignment, and replacement of gutters and downspouts so water flows away from your home.</p>
              <Link href="/gutter-repair-replacement-dallas-ga" className="chip">Gutter services →</Link>
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
            {['Dallas', 'Douglasville', 'Hiram', 'Powder Springs', 'Marietta', 'Kennesaw', 'Acworth', 'Austell'].map((c) => (
              <Link key={c} href={`/service-areas/${c.toLowerCase().replace(/ /g, '-')}`} className="chip">
                {c}, GA →
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
