import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import FreeRoofCheckCta from '@/components/FreeRoofCheckCta';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: 'Emergency Roof Repair Dallas GA | Tarping & Active Leaks | iRoofer',
  description:
    'Active roof leak in Dallas, GA? Tarping and urgent sealing when scheduling allows. Call (470) 236-1410.',
  path: '/emergency-roof-repair-dallas-ga',
});

const steps = [
  'Do NOT climb on a damaged roof. Storm damage is often hard to see from the ground.',
  'Take photos from the ground of debris, dented gutters, and any water stains inside.',
  'Call us for a free damage check, and a tarp if water is coming in.',
  'We take photos, write up the plan, and meet your insurance adjuster if you file a claim. Nothing starts until you say yes.',
];

const process = [
  { n: '01', t: 'Quick call', d: 'Is water entering now?' },
  { n: '02', t: 'Cover it', d: 'We put on a tarp or other cover when it is safe.' },
  { n: '03', t: 'Take photos', d: 'Photos for you, and for your insurance if a storm did it.' },
  { n: '04', t: 'Written scope', d: 'A written plan: a small repair, a bigger section, or a new roof.' },
  { n: '05', t: 'Complete the repair', d: 'Our own crew does the work, the way the shingle maker says to.' },
  { n: '06', t: 'Follow-up', d: 'We tell you what to watch for the next time it rains.' },
];

const emergencyFaqs = [
  {
    q: 'Can you promise to be here within the hour?',
    a: 'No. We come as fast as our schedule and the weather allow. We won’t make up a time we can’t keep.',
  },
  {
    q: 'Is tarping the final fix?',
    a: 'No. A tarp just protects the roof for now. The real fix comes next, with a written plan. See /roof-repair-dallas-ga/ or /roof-replacement-dallas-ga/.',
  },
  {
    q: 'What are your hours for emergency roof repair in Dallas, GA?',
    a: 'Our hours are Mon–Fri 9–7 and Sat 9–5. We are closed Sunday. Active leaks and storm damage go to the front of the line. We help the same day when our schedule allows. Call (470) 236-1410 and tell us if water is coming in now.',
  },
  {
    q: 'Can you tarp the same day?',
    a: 'Often, yes, if the roof is open or leaking and it is safe to get up. The full fix comes once the plan is clear.',
  },
  {
    q: 'Is emergency work always a full roof replacement?',
    a: 'No. Many emergencies just need a tarp and a small repair. We only suggest a new roof when the roof truly needs it.',
  },
  {
    q: 'Will insurance cover emergency roof repairs?',
    a: 'Sudden wind or storm damage is often covered. It depends on your policy and deductible. We take photos and can work with your adjuster. We can’t promise a claim will be approved or how much it will pay.',
  },
  {
    q: 'What if I’m in Hiram or Powder Springs?',
    a: 'Yes. Active leaks in the towns we serve get the same fast help. Call to confirm.',
  },
];

export default function EmergencyPage() {
  return (
    <>
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <Link
                href="/services/"
                style={{
                  fontWeight: 700,
                  color: 'var(--orange)',
                  letterSpacing: '.04em',
                  textTransform: 'uppercase',
                  fontSize: '.8rem',
                }}
              >
                ← All services
              </Link>
              <span className="eyebrow dark" style={{ marginTop: 16, display: 'inline-block' }}>
                Emergency response
              </span>
              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                  fontWeight: 900,
                  lineHeight: 1.02,
                  marginTop: 8,
                }}
              >
                Emergency Roof Repair in Dallas, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680 }}>
                When water is coming in, stop the rain first. iRoofer Contractors is family-owned in Dallas since 2019. We put active leaks first and tarp them when needed. Then we move to the real fix on{' '}
                <Link href="/roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>/roof-repair-dallas-ga/</Link>
                {' '}or storm photos and paperwork on{' '}
                <Link href="/storm-damage-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>/storm-damage-roof-repair-dallas-ga/</Link>.
                Call <strong>(470) 236-1410</strong> now or use{' '}
                <Link href="/contact/" style={{ color: 'var(--orange)', fontWeight: 700 }}>https://iroofercontractors.com/contact/</Link>.
                We come as fast as our schedule and the weather allow.
              </p>

              <div className="cta" style={{ marginTop: 28 }}>
                <a
                  className="bigphone"
                  style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }}
                  href={`tel:${brand.phone}`}
                >
                  {brand.phone}
                </a>
                <Link
                  className="btn btn-solid"
                  href="/contact/"
                  style={{ marginLeft: 16, verticalAlign: 'middle' }}
                >
                  Request emergency help <span className="arr">→</span>
                </Link>
              </div>

              <h2 style={{ marginTop: 40, fontSize: '1.1rem' }}>
                After a storm — do this now
              </h2>
              <ol style={{ marginTop: 12, lineHeight: 1.7, color: '#52606b' }}>
                {steps.map((step) => (
                  <li key={step.substring(0, 30)}>{step}</li>
                ))}
              </ol>

              <div
                style={{
                  marginTop: 32,
                  padding: '1.3rem',
                  background: '#fff',
                  border: '1px solid rgba(22,29,37,.08)',
                  borderRadius: 8,
                }}
              >
                <strong style={{ color: '#0b3d16' }}>iRoofer Contractors</strong>
                <div style={{ color: '#52606b', fontSize: '.9rem', marginTop: 4 }}>
                  Family-owned in Dallas since 2019 · {brand.owner} · 152 Freedom Dr, Dallas, GA 30157
                </div>
                <div style={{ marginTop: 6 }}>
                  <a href={`tel:${brand.phone}`} style={{ color: 'var(--orange)', fontWeight: 700 }}>{brand.phone}</a>
                  {' · '}
                  <a href={`mailto:${brand.email}`} style={{ color: 'var(--orange)', fontWeight: 700 }}>{brand.email}</a>
                </div>
              </div>
            </div>

            <div className="rv">
              <img
                src="/assets/emergency-tarp.webp?v=2"
                alt="Roofing crew installing a blue emergency tarp on a storm-damaged roof"
                loading="lazy"
                style={{
                  borderRadius: 8,
                  border: '1px solid rgba(22,29,37,.1)',
                  width: '100%',
                  marginBottom: 24,
                }}
              />
              <FreeRoofCheckCta />
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="emergency" id="emergency-quote" source="Emergency Page" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rv" style={{ maxWidth: 780 }}>
            <h2 style={{ fontSize: 'clamp(1.5rem,2.6vw,2rem)', fontWeight: 800, lineHeight: 1.15 }}>
              What counts as an emergency roof repair in Dallas
            </h2>
            <p style={{ color: '#52606b', fontSize: '1.02rem', marginTop: 12, lineHeight: 1.75 }}>
              It’s an emergency when water is coming into the house. It’s also an emergency when a tree or limb has punched a hole in the roof, wind has peeled back a row of shingles, or a ceiling stain is growing during a storm. In Dallas and Paulding County, a quick storm can turn one loose shingle into a wet attic in one afternoon.
            </p>
            <p style={{ color: '#52606b', fontSize: '1.02rem', marginTop: 12, lineHeight: 1.75 }}>
              We offer same-day emergency roof repair when our schedule allows and it is safe. If we can&apos;t come the same day, we give you a real time and tips to protect your home. Call {brand.phone} as soon as you can after the storm.
            </p>
          </div>

          <div className="sec-head rv" style={{ marginTop: 48 }}>
            <span className="eyebrow dark">Our emergency process</span>
            <h2>Cover it first, then fix it for good</h2>
          </div>
          <div className="cards" style={{ marginTop: 20 }}>
            {process.map((p) => (
              <div className="card" key={p.n}><div className="body"><h3>{p.n} · {p.t}</h3><p style={{ color: '#52606b' }}>{p.d}</p></div></div>
            ))}
          </div>

          <div className="rv" style={{ marginTop: 48, maxWidth: 780 }}>
            <h2 style={{ fontSize: 'clamp(1.4rem,2.4vw,1.85rem)', fontWeight: 800 }}>Straight talk on insurance</h2>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 12 }}>
              Sudden wind or storm damage is often covered. It depends on your policy and deductible.
              We take photos and can work with your adjuster. <strong>We can’t promise a claim will be approved or how much it will pay.</strong>
              {' '}More:{' '}
              <Link href="/services/roof-insurance-claims/" style={{ color: 'var(--orange)', fontWeight: 700 }}>roof insurance claims</Link>
              {' · '}
              <Link href="/storm-damage-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>storm damage Dallas</Link>
            </p>
            <p style={{ color: '#52606b', marginTop: 16, lineHeight: 1.8 }}>
              Also useful:{' '}
              <Link href="/roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof repair Dallas</Link>
              {' · '}
              <Link href="/contact/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Contact</Link>
              {' · '}
              <Link href="/services/" style={{ color: 'var(--orange)', fontWeight: 700 }}>All services</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Emergency FAQ</span>
            <h2>Questions homeowners ask us</h2>
          </div>
          <div className="faq-list rv">
            {emergencyFaqs.map((f, i) => (
              <div key={f.q} className={'faq-item' + (i === 0 ? ' open' : '')}>
                <button className="faq-q" aria-expanded={i === 0}>{f.q}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            <a href={`tel:${brand.phone}`} style={{ fontWeight: 800, color: 'var(--orange)' }}>{brand.phone}</a>
            {' · '}
            <Link href="/contact/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Contact</Link>
          </p>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Related pages</span>
            <h2>Helpful links after a Dallas emergency</h2>
          </div>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem 1.4rem', marginTop: 8, listStyle: 'none', padding: 0 }}>
            <li><Link href="/storm-damage-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '.95rem' }}>Storm damage roof repair Dallas GA →</Link></li>
            <li><Link href="/roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '.95rem' }}>Roof repair in Dallas GA →</Link></li>
            <li><Link href="/services/storm-damage-roof-repair/" style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '.95rem' }}>Storm &amp; insurance service hub →</Link></li>
            <li><Link href="/dallas-ga-roofing/" style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '.95rem' }}>All Dallas GA roofing services →</Link></li>
          </ul>
          <div style={{ marginTop: 28 }}>
            <Link href="/dallas-ga-roofing/" className="btn btn-ink">Dallas GA roofing hub <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      <FaqSchema faq={emergencyFaqs} />
    </>
  );
}
