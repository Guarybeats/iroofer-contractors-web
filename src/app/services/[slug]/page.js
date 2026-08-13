import { notFound } from 'next/navigation';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { getService, services, brand } from '@/lib/brand';
import { seo } from '@/lib/seo';

export function generateStaticParams() {
  // gutter-repair-replacement has a dedicated static page — exclude it here
  // so the dynamic route doesn't collide with it during static export.
  return services
    .filter((s) => s.slug !== 'gutter-repair-replacement')
    .map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getService(params.slug);
  if (!service) return {};
  return seo({
    title: `${service.title} in Dallas, GA & Metro Atlanta | iRoofer Contractors`,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetail({ params }) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <Link href="/services" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>← All services</Link>
        <div className="faq-grid" style={{ marginTop: 18, alignItems: 'start' }}>
          <div className="rv">
            <span className="eyebrow dark">Roofing service</span>
            <h1 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', fontWeight: 900 }}>{service.title}</h1>
            <p style={{ color: 'var(--orange)', fontWeight: 800, marginTop: -8, textTransform: 'uppercase', letterSpacing: '.04em' }}>{service.tagline}</p>
            <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 8 }}>{service.summary}</p>
            <ul style={{ lineHeight: 2, marginTop: 16, color: '#52606b' }}>
              {service.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <p style={{ marginTop: 18 }}>
              <a className="btn btn-ink" href="/#contact">Get a free quote for {service.title} <span className="arr">→</span></a>
            </p>
          </div>
          <div className="rv">
            <img src={service.image} alt={service.title} loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%' }} />
            <div style={{ maxWidth: 460, margin: '32px auto 0' }}>
              <QuoteForm variant="detail" id={`quote-${service.slug}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
