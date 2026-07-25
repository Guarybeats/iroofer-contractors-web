import { notFound } from 'next/navigation';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { getCity, cities, services, brand } from '@/lib/brand';

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }) {
  const c = getCity(params.city);
  if (!c) return {};
  const title = `Roofing in ${c.name}, ${c.state} — iRoofer Contractors`;
  const desc = `Local roofing in ${c.name}, ${c.state} (${c.county}). ${c.blurb} Free inspection, honest pricing, 5★ rated. Call ${brand.phone}.`;
  return { title, description: desc };
}

export default function CityPage({ params }) {
  const c = getCity(params.city);
  if (!c) notFound();

  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <Link href="/service-areas" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>← All service areas</Link>
        <div className="faq-grid" style={{ marginTop: 18, alignItems: 'start' }}>
          <div className="rv">
            <span className="eyebrow dark">Service area</span>
            <h2 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', fontWeight: 900 }}>Roofing in {c.name}, {c.state}</h2>
            <p style={{ color: 'var(--orange)', fontWeight: 800, marginTop: -8, textTransform: 'uppercase', letterSpacing: '.04em' }}>{c.county}</p>
            <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 8 }}>
              iRoofer Contractors is a local, family-owned roofer serving {c.name} and nearby communities. {c.blurb} We handle roof repair, full replacement, new construction, and storm &amp; insurance claims — with free inspections and honest, upfront pricing.
            </p>
            <h3 style={{ fontSize: '1.4rem', marginTop: 28, marginBottom: 10 }}>Roofing services in {c.name}</h3>
            <ul style={{ lineHeight: 2, color: '#52606b' }}>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} style={{ color: 'var(--ink)', fontWeight: 700 }}>{s.title}</Link> in {c.name}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: 18 }}>
              <a className="btn btn-ink" href="/estimator">Get an instant roof estimate <span className="arr">→</span></a>
            </p>
            <p style={{ marginTop: 10, color: '#52606b' }}>
              Other nearby areas: {cities.filter((x) => x.slug !== c.slug).map((x, i, arr) => (
                <span key={x.slug}>
                  <Link href={`/service-areas/${x.slug}`} style={{ color: 'var(--orange)' }}>{x.name}</Link>{i < arr.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </div>
          <div className="rv">
            <img src="/assets/hero.jpg" alt={`Roofing work in ${c.name}, ${c.state}`} style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)' }} />
            <div style={{ maxWidth: 460, margin: '32px auto 0' }}>
              <QuoteForm variant="detail" id={`quote-${c.slug}`} source={`Service Area: ${c.name}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
