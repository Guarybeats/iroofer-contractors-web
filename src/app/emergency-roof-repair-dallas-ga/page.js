import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: 'Emergency Roof Repair Dallas GA | Active Leaks & Storm Response | iRoofer',
  description:
    'Emergency roof repair in Dallas GA — active leaks, storm openings, same-day tarp when we can. Call (470) 236-1410 or https://iroofercontractors.com/contact/',
  path: '/emergency-roof-repair-dallas-ga',
});

const steps = [
  'Do NOT climb onto a damaged roof — storm damage is often invisible from the ground.',
  'Snap ground-level photos of debris, dented gutters, and any interior water stains.',
  'Call us for a free damage inspection and a temporary tarp if you are actively leaking.',
  'We document the damage, write the scope, and meet your insurance adjuster when a claim applies — you only sign off before a single shingle moves.',
];

const process = [
  { n: '01', t: 'Triage on the phone', d: 'Is water entering now?' },
  { n: '02', t: 'Stabilize', d: 'Tarp / temporary protection when materials and access are safe.' },
  { n: '03', t: 'Document', d: 'Photos for your records and insurer if storm-related.' },
  { n: '04', t: 'Written scope', d: 'Permanent repair vs larger section vs replacement talk.' },
  { n: '05', t: 'Complete the repair', d: 'Licensed, bonded, insured crew; Owens Corning Preferred details when that system applies to permanent work.' },
  { n: '06', t: 'Follow-up', d: 'What to watch for on the next rain.' },
];

const emergencyFaqs = [
  {
    q: 'Do you offer 24/7 emergency roof repair in Dallas, GA?',
    a: 'We prioritize after-hours storm and active-leak calls as fast as crews allow. Call (470) 236-1410 and say if water is entering now.',
  },
  {
    q: 'Can you tarp the same day?',
    a: 'Often yes for open decking or active leaks when access is safe. Permanent repairs may follow once the scope is clear.',
  },
  {
    q: 'Is emergency work always a full roof replacement?',
    a: 'No. Many emergencies are tarp + targeted repair. Replacement only when the roof’s condition says so.',
  },
  {
    q: 'Will insurance cover emergency roof repairs?',
    a: 'Sudden wind or storm damage is often claim-eligible, subject to your policy and deductible. We document findings and can support the adjuster path. We do not guarantee claim approval or payout amounts.',
  },
  {
    q: 'What if I’m in Hiram or Powder Springs?',
    a: 'Same crew priority for active leaks in our listed service cities — call and confirm.',
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
                A roof failure doesn&apos;t wait for business hours. Whether a storm dropped a limb or a leak started after last night&apos;s rain,
                iRoofer Contractors prioritizes active water intrusion in Dallas and Paulding County — tarp when needed, document what failed,
                then permanent repair with a clear written scope.
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
                  Family-owned in Dallas since 2019 · {brand.owner} · Licensed · Bonded · Insured · CertainTeed Storm Restoration Specialist (GA) when that path fits
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
              Call it an emergency when water is actively entering the house, a tree or limb has opened the deck, shingles are peeled back across a slope after high wind, or a ceiling is staining and spreading during a storm. In Dallas and Paulding County, pop-up storms can turn a small lift into a soak-through attic in one afternoon.
            </p>
            <p style={{ color: '#52606b', fontSize: '1.02rem', marginTop: 12, lineHeight: 1.75 }}>
              Same-day emergency roof repair when schedule and safe access allow. If we can&apos;t arrive the same day, you get a real window and tarping guidance — not silence. Call {brand.phone} as early as you can after the storm.
            </p>
          </div>

          <div className="sec-head rv" style={{ marginTop: 48 }}>
            <span className="eyebrow dark">Our emergency process</span>
            <h2>Stabilize first, then permanent repair</h2>
          </div>
          <div className="cards" style={{ marginTop: 20 }}>
            {process.map((p) => (
              <div className="card" key={p.n}><div className="body"><h3>{p.n} · {p.t}</h3><p style={{ color: '#52606b' }}>{p.d}</p></div></div>
            ))}
          </div>

          <div className="rv" style={{ marginTop: 48, maxWidth: 780 }}>
            <h2 style={{ fontSize: 'clamp(1.4rem,2.4vw,1.85rem)', fontWeight: 800 }}>Insurance notes (honest)</h2>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 12 }}>
              Sudden wind or storm damage is often claim-eligible subject to your policy and deductible.
              We document findings and can support the adjuster path. <strong>We do not guarantee claim approval or payout amounts.</strong>
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
              <Link href="/services/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Services hub</Link>
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
      <FaqSchema faq={emergencyFaqs} />
    </>
  );
}
