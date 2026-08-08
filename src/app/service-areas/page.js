import Link from 'next/link';
import { cities, brand } from '@/lib/brand';

export const metadata = {
  title: 'Service Areas — iRoofer Contractors',
  description: `Local roofing across Dallas, GA and the greater Atlanta metro — Douglasville, Hiram, Powder Springs, Marietta, Acworth, Kennesaw, Austell. Free inspection: ${brand.phone}.`,
};

export default function ServiceAreas() {
  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <span className="eyebrow dark">Where we roof</span>
        <h1 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', fontWeight: 900 }}>Service Areas — iRoofer Contractors</h1>
        <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 8, maxWidth: 640 }}>
          iRoofer Contractors is based in Dallas, GA and serves homeowners and builders across Paulding, Douglas &amp; Cobb counties. Tap your town for local roofing help.
        </p>
        <div className="cards" style={{ marginTop: 28, gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))' }}>
          {cities.map((c) => (
            <Link key={c.slug} href={`/service-areas/${c.slug}`} className="svc-card">
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>{c.name}, {c.state}</h3>
              <p style={{ color: '#52606b', marginTop: 6, fontSize: '.95rem' }}>{c.county} · {c.blurb}</p>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>Roofing in {c.name} →</span>
            </Link>
          ))}
        </div>

        {/* SEO CONTENT */}
        <div style={{ marginTop: 48, maxWidth: 880, fontSize: '0.95rem', lineHeight: 1.7, color: '#52606b' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem,3vw,1.8rem)', fontWeight: 800, marginBottom: 20 }}>
            Serving North Georgia and the greater Atlanta metro
          </h2>
          <p style={{ marginBottom: 12 }}>
            As a family-owned roofing company based in Dallas, GA, iRoofer Contractors serves
            homeowners and builders across Paulding County, Douglas County, and Cobb County. From
            historic neighborhoods in Marietta and Kennesaw to new subdivisions in Hiram and
            Acworth, we bring the same honest pricing and expert craftsmanship to every {brand.name}
            job.
          </p>
          <p style={{ marginBottom: 12 }}>
            Each service area has its own challenges — the wind corridors off Kennesaw Mountain,
            the freeze-thaw cycles in Marietta, and the hail corridors that sweep through Dallas
            in spring. We know these areas intimately because we live and work here, and we tailor
            every roof inspection and replacement to the specific conditions your home faces.
          </p>
          <p style={{ marginBottom: 12 }}>
            <strong>Free roof inspections</strong> across all service areas — we'll assess damage
            from storms, hail, wind, or age, and give you a clear, written estimate with no
            pressure. <strong>Free same-day emergency tarping</strong> for active leaks.
          </p>
          <p>
            Based in Dallas, GA ({brand.phone}). Serving {cities.map((c) => c.name).join(', ')},
            and surrounding areas with free, no-pressure roof inspections. Call today — we answer
            our own phones.
          </p>
        </div>
      </div>
    </section>
  );
}
