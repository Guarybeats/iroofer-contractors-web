import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: 'Emergency Roof Repair Dallas GA | 24/7 | iRoofer',
  description:
    'Storm-damaged roof in Dallas, GA? On call 24/7 for emergency repair, tarping and insurance claim support. Same-day response, free inspection.',
  path: '/emergency-roof-repair-dallas-ga',
});

const steps = [
  'Do NOT climb onto a damaged roof — storm damage is often invisible from the ground.',
  'Snap ground-level photos of debris, dented gutters, and any interior water stains.',
  'Call us for a free damage inspection and a temporary tarp if you are actively leaking.',
  'We document the damage, write the scope, and meet your insurance adjuster — you only sign off before a single shingle moves.',
];


const emergencyFaqs = [
  {
    q: 'Do you offer 24/7 emergency roof repair in Dallas, GA?',
    a: 'We prioritize after-hours storm and active-leak calls as fast as crews allow. Call (470) 236-1410 and tell us if water is entering now.',
  },
  {
    q: 'Can you tarp my roof the same day?',
    a: 'Often yes for open decking or active leaks when materials and access are safe. Permanent repairs may follow once the scope is clear.',
  },
  {
    q: 'Will insurance cover emergency roof repairs?',
    a: 'Sudden wind or storm damage is often claim-eligible, subject to your policy. We document findings; we don’t guarantee claim approval.',
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
                24/7 emergency
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
                A roof failure never waits for business hours. Whether a storm just dropped a tree or
                a leak started after last night's rain, we respond within 24 hours — often much
                faster. We tarp, document, and file your insurance claim so you aren't footing the
                bill upfront.
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
                  href="/#contact"
                  style={{ marginLeft: 16, verticalAlign: 'middle' }}
                >
                  Request emergency tarp <span className="arr">→</span>
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
                  Licensed · Bonded · Insured | Dallas, GA since 2019
                </div>
                <div style={{ marginTop: 6 }}>
                  <a
                    href={`tel:${brand.phone}`}
                    style={{ color: 'var(--orange)', fontWeight: 700 }}
                  >
                    {brand.phone}
                  </a>
                  {' · '}
                  <a
                    href={`mailto:${brand.email}`}
                    style={{ color: 'var(--orange)', fontWeight: 700 }}
                  >
                    {brand.email}
                  </a>
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
              iRoofer Contractors responds locally for emergency roof repair in Dallas, GA. We prioritize active leaks first: temporary tarp when needed, photo documentation for your records (and your insurer if the damage is storm-related), then a clear written scope for permanent repair. Owner Cristian Mendez’s licensed, bonded, and insured crew explains repair versus replacement without pressure.
            </p>
            <p style={{ color: '#52606b', fontSize: '1.02rem', marginTop: 12, lineHeight: 1.75 }}>
              Same-day emergency roof repair is available when the schedule and weather allow—call (470) 236-1410 as early as you can after the storm. If we cannot reach you the same day, we will give you a real arrival window and tarping guidance so the next rain does less damage.
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
        </div>
      </section>
      <FaqSchema faq={emergencyFaqs} />
    </>
  );
}
