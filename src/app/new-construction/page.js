import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

import { brand, services } from '@/lib/brand';
import { notFound } from 'next/navigation';

export const metadata = {
  alternates: { canonical: 'https://iroofercontractors.com/new-construction' },
  openGraph: { url: 'https://iroofercontractors.com/new-construction' },

  title: 'New Construction Roofing — iRoofer Contractors Dallas, GA',
  description:
    'Building a new home in North Georgia? iRoofer Contractors handles complete new-construction roofing — design-matched shingles, code-compliant installation, builder coordination. Free consultation.',
};

const service = services.find((s) => s.slug === 'new-construction') || null;

const steps = [
  'Review plans and select shingles that match your home design and budget — we recommend options that handle Georgia weather.',
  'Coordinate delivery of materials and schedule installation around your builder’s timeline so you don’t hold up the project.',
  'Install synthetic underlayment, ice & water shield, drip edge, and architectural shingles to manufacturer spec — we pass final inspection.',
  'Walk the roof with the builder and us, register the manufacturer warranty, and do a magnetic nail sweep of the entire property.',
];

export default function NewConstructionPage() {
  if (!service) notFound();

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
                New construction
              </span>
              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                  fontWeight: 900,
                  lineHeight: 1.02,
                  marginTop: 8,
                }}
              >
                New Construction Roof Installation in Dallas, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680 }}>
                Building a new home in North Georgia means every trade needs to run on schedule.
                We work directly with you, your builder, and the inspector to install a roof that
                matches your design vision, meets every code requirement, and ships on time — so
                your build doesn’t stall waiting on the weather.
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
                  href="/estimator"
                  style={{ marginLeft: 16, verticalAlign: 'middle' }}
                >
                  Request a consultation <span className="arr">→</span>
                </Link>
              </div>

              <h4 style={{ marginTop: 40, fontSize: '1.1rem' }}>
                Builder checklist — what you need before we start
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
                src={service.image}
                alt="New construction roof installation in progress — crew installing architectural shingles on a custom home in Dallas, GA"
                loading="lazy"
                style={{
                  borderRadius: 8,
                  border: '1px solid rgba(22,29,37,.1)',
                  width: '100%',
                  marginBottom: 24,
                }}
              />
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="emergency" id="new-construction-quote" source="New Construction Page" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
