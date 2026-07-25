import { notFound } from 'next/navigation';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { getService, services, brand } from '@/lib/brand';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetail({ params }) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <section className="block">
      <div className="container">
        <Link href="/services" style={{ fontWeight: 600 }}>← All services</Link>
        <div className="service-hero" style={{ marginTop: 18 }}>
          <div>
            <h1>{service.title}</h1>
            <p style={{ color: 'var(--rust-600)', fontWeight: 700, marginTop: -8 }}>{service.tagline}</p>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem' }}>{service.summary}</p>
            <ul style={{ lineHeight: 2 }}>
              {service.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <p style={{ marginTop: 12 }}>
              <Link className="btn" href="/#quote">Get a free quote for {service.title}</Link>
            </p>
          </div>
          <img src={service.image} alt={service.title} />
        </div>

        <div style={{ maxWidth: 460, margin: '40px auto 0' }}>
          <QuoteForm variant="detail" id={`quote-${service.slug}`} />
        </div>
      </div>
    </section>
  );
}
