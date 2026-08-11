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

        <div style={{ marginTop: 18 }}>
          <span className="eyebrow dark">Service area · {c.county}</span>
          <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02 }}>Roofing in {c.name}, {c.state}</h1>
          <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680 }}>
            iRoofer Contractors is a local, family-owned roofer serving {c.name} and nearby communities. {c.blurb} We handle roof repair, full replacement, new construction, and storm &amp; insurance claims — with free inspections and honest, upfront pricing.
          </p>
          <p style={{ color: '#52606b', fontSize: '1.02rem', marginTop: 12, maxWidth: 680, borderLeft: '3px solid var(--orange)', paddingLeft: 14 }}>
            {c.localNote}
          </p>
        </div>

        <div className="cards" style={{ marginTop: 36 }}>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="svc-card">
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{s.title} in {c.name}</h3>
              <p style={{ color: '#52606b', marginTop: 8, fontSize: '.95rem' }}>{s.summary}</p>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>Get a quote →</span>
            </Link>
          ))}
        </div>

        <div className="faq-grid" style={{ marginTop: 44, alignItems: 'start' }}>
          <div className="rv">
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 900 }}>Why {c.name} homeowners choose iRoofer</h2>
            <ul style={{ lineHeight: 2.1, color: '#52606b', marginTop: 12 }}>
              <li>Local &amp; family-owned — we live and roof in {c.county}.</li>
              <li>Free, no-pressure roof inspections with photos.</li>
              <li>Honest upfront pricing — no surprise line items.</li>
              <li>Storm &amp; insurance claim help, including adjuster meetings.</li>
              <li>Daily cleanup and magnetic nail sweeps on every job.</li>
              <li>5★ rated on Google with {brand.reviewCount} verified reviews.</li>
            </ul>
            <p style={{ marginTop: 18 }}>
              <a className="btn btn-ink" href="/estimator">Get an instant roof estimate <span className="arr">→</span></a>
            </p>
            <p style={{ marginTop: 14, color: '#52606b' }}>
              Other nearby areas: {cities.filter((x) => x.slug !== c.slug).map((x, i, arr) => (
                <span key={x.slug}>
                  <Link href={`/service-areas/${x.slug}`} style={{ color: 'var(--orange)' }}>{x.name}</Link>{i < arr.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </div>
          <div className="rv">
            <img src="/assets/hero.webp" alt={`Roofing work in ${c.name}, ${c.state}`} style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%' }} loading="eager" decoding="async" />
            <div style={{ maxWidth: 460, margin: '32px auto 0' }}>
              <QuoteForm variant="detail" id={`quote-${c.slug}`} source={`Service Area: ${c.name}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
