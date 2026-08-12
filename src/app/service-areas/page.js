import Link from 'next/link';
import { cities, brand } from '@/lib/brand';

export const metadata = {
  title: `Service Areas — iRoofer Contractors`,
  description: `Local roofing across Dallas, GA and the greater Atlanta metro — Douglasville, Hiram, Powder Springs, Marietta, Acworth, Kennesaw, Austell. Free inspection: ${brand.phone}.`,
};

export default function ServiceAreas() {
  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <span className="eyebrow dark">Where we roof</span>
        <h1 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', fontWeight: 900 }}>Service Areas</h1>
        <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 8, maxWidth: 640 }}>
          iRoofer Contractors is based in Dallas, GA and serves homeowners and builders across Paulding, Douglas &amp; Cobb counties. Tap your town for local roofing help.
        </p>
        <div className="cards" style={{ marginTop: 28, gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))' }}>
          {cities.map((c) => (
            <Link key={c.slug} href={`/service-areas/${c.slug}`} className="svc-card">
              <h4 style={{ fontSize: '1.35rem', fontWeight: 800 }}>{c.name}, {c.state}</h4>
              <p style={{ color: '#52606b', marginTop: 6, fontSize: '.95rem' }}>{c.county} · {c.blurb}</p>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>Get a quote →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
