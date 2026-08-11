import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';

export const metadata = {
  title: 'Storm Damage Roof Repair & Insurance Claims | Dallas, GA Roofing',
  description:
    'Hail, wind, or tree damage from a Georgia storm? We inspect, document storm damage, and handle your roof insurance claim for a full roof restoration. Free estimate, 24-hour emergency response in Dallas, GA.',
};

const steps = [
  'Stay inside and keep away from windows — storm-damaged roofs can be unstable.',
  'Take ground-level photos: dented gutters, granules in drains, missing shingles, and any interior leaks or water stains.',
  'Call us for a free storm-damage inspection — we’ll document everything and tell you if a claim is worth filing.',
  'We meet your insurance adjuster on-site, write the full scope, and handle supplements so you’re not chasing paperwork.',
];

export default function StormDamagePage() {
  return (
    <>

      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <Link
                href="/services"
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
                Storm damage
              </span>
              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                  fontWeight: 900,
                  lineHeight: 1.02,
                  marginTop: 8,
                }}
              >
                Storm Damage Roof Repair in Dallas, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680 }}>
                North Georgia weather can turn on a roof fast — hail the size of golf balls, 70-mph
                wind gusts, or a falling oak limb. When the sky clears, the last thing you want is
                a hidden leak or a failed insurance claim. We inspect, document, and restore your
                roof so you can close with confidence.
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
                  Request tarp <span className="arr">→</span>
                </Link>
              </div>

              <h4 style={{ marginTop: 40, fontSize: '1.1rem' }}>
                After a storm — do this now
              </h4>
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
                src="/assets/storm-damage.webp"
                alt="Storm-damaged asphalt shingle roof after a Georgia hail storm"
                loading="lazy"
                style={{
                  borderRadius: 8,
                  border: '1px solid rgba(22,29,37,.1)',
                  width: '100%',
                  marginBottom: 24,
                }}
              />
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="emergency" id="storm-quote" source="Storm Damage Page" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
