import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import LocalSeo from '@/components/LocalSeo';
import { brand, getCity } from '@/lib/brand';

export const metadata = {
  title: '24/7 Emergency Roof Repair Dallas, GA | Iroofer Contractors',
  description:
    'Storm-damaged roof in Dallas, GA? Our crew is on call 24/7 for emergency roof repair, tarping, and insurance claim support. Call now.',
};

const checklist = [
  'Do NOT climb onto a damaged roof — damage is often invisible from the ground.',
  'Snap ground-level photos of granule loss, dented gutters, and any interior leaks.',
  'Call us for a free damage inspection and temporary tarp if you are leaking.',
  'We write the scope, meet your insurance adjuster, and you sign off before a single shingle moves.',
];

export default function EmergencyPage() {
  return (
    <>
      <LocalSeo />
      <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="faq-grid" style={{ alignItems: 'start' }}>
          <div className="rv">
            <span className="eyebrow dark">Emergency response</span>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, margin: 0 }}>
              Emergency Roof Repair in Dallas, GA
            </h1>
            <h2 style={{ fontSize: 'clamp(1.2rem,2.4vw,1.8rem)', fontWeight: 700, marginTop: 24 }}>
              24/7 storm damage — same-day service
            </h2>
            <p style={{ color: '#52606b', marginTop: 16 }}>
              A roof failure never waits for business hours. Whether a storm just dropped a tree or a
              sudden leak started after last night&apos;s rain, we respond within 24 hours — often
              much faster. We tarp, document, and file your insurance claim so you are not footing
              the bill upfront.
            </p>
            <div className="cta" style={{ marginTop: 24 }}>
              <a
                className="bigphone"
                style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }}
                href={`tel:${brand.phone}`}
              >
                {brand.phone}
              </a>
              <Link className="btn btn-solid" href="/#contact" style={{ marginLeft: 16, verticalAlign: 'middle' }}>
                Request emergency tarp <span className="arr">→</span>
              </Link>
            </div>

            <h4 style={{ marginTop: 32, fontSize: '1.1rem' }}>After a storm — do this now</h4>
            <ol style={{ marginTop: 12, lineHeight: 1.6 }}>
              {checklist.map((step) => (
                <li key={step.substring(0, 20)}>{step}</li>
              ))}
            </ol>

            <div style={{ marginTop: 28, padding: '1.2rem', background: '#fff', border: '1px solid rgba(22,29,37,.08)', borderRadius: 8 }}>
              <strong style={{ color: '#0b3d16' }}>iROOFER CONTRACTORS</strong>
              <div style={{ color: '#52606b', fontSize: '.9rem', marginTop: 4 }}>
                Licensed · Bonded · Insured | Dallas, GA since 2019
              </div>
              <div style={{ marginTop: 6 }}>
                <a href={`tel:${brand.phone}`} style={{ color: 'var(--orange)', fontWeight: 700 }}>{brand.phone}</a> ·{' '}
                <a href={`mailto:${brand.email}`} style={{ color: 'var(--orange)', fontWeight: 700 }}>{brand.email}</a>
              </div>
            </div>
          </div>

          <div className="rv">
            <QuoteForm variant="emergency" id="emergency" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
