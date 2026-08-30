import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: '24/7 Emergency Roof Repair Dallas, GA | Iroofer Contractors',
  description:
    'Storm-damaged roof in Dallas, GA? Our crew is on call 24/7 for emergency roof repair, tarping, and insurance claim support. Same-day response, free inspection. Call now.',
  path: '/emergency-roof-repair-dallas-ga',
});

const steps = [
  'Do NOT climb onto a damaged roof — storm damage is often invisible from the ground.',
  'Snap ground-level photos of debris, dented gutters, and any interior water stains.',
  'Call us for a free damage inspection and a temporary tarp if you are actively leaking.',
  'We document the damage, write the scope, and meet your insurance adjuster — you only sign off before a single shingle moves.',
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
                src="/assets/emergency-tarp.webp"
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
    </>
  );
}
