import Link from 'next/link';
import { cities, brand, cityPath } from '@/lib/brand';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Roofing Service Areas Near Dallas, GA | Repair, Replacement & Storm | iRoofer',
  description: `iRoofer Contractors serves Dallas, Douglasville, Hiram, Powder Springs, Marietta, Acworth, Kennesaw, and more. Local repair, replacement, storm help. Call ${brand.phone}.`,
  path: '/service-areas',
});

const needLinks = [
  { href: '/roof-repair-dallas-ga/', label: 'Roof repair' },
  { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement' },
  { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage' },
  { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency' },
  { href: '/services/roof-insurance-claims/', label: 'Insurance claims' },
  { href: '/services/new-construction/', label: 'New construction' },
];

const cityHints = {
  'dallas-ga': 'Home base — repair, replacement, storm, gutters, new construction',
  douglasville: 'Storm interest rising; repair & replace from the same Dallas crew',
  hiram: 'Link city repair/replace money pages — short drive from the shop',
  'powder-springs': 'Local SA + Dallas money URLs',
  marietta: 'Counter vanity “roofer” dump with repair/replace/storm framing',
  acworth: 'Also appears in emergency near-me query patterns',
  kennesaw: 'Climbing interest — repair/replace/storm paths',
};

export default function ServiceAreas() {
  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <span className="eyebrow dark">Where we roof</span>
        <h1 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', fontWeight: 900 }}>
          Where We Roof — Service Areas Across West Metro Atlanta
        </h1>
        <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 8, maxWidth: 680 }}>
          iRoofer Contractors works from Dallas, GA — 152 Freedom Dr — across Paulding, Cobb, and nearby north-metro cities. Family-owned since 2019. Licensed, bonded, insured. Pick your city below, or tell us what the roof needs: repair, full replacement, or storm damage documentation.
        </p>
        <p style={{ marginTop: 18 }}>
          <a className="btn btn-ink" href="/contact/">Get a free roof inspection <span className="arr">→</span></a>
          {' '}
          <a className="btn btn-ghost" href={`tel:${brand.phone}`} style={{ marginLeft: 8 }}>{brand.phone}</a>
        </p>

        <div style={{ marginTop: 36, maxWidth: 880 }}>
          <h2 style={{ fontSize: 'clamp(1.3rem,2.6vw,1.6rem)', fontWeight: 800, marginBottom: 12 }}>Need-based shortcuts</h2>
          <p style={{ color: '#52606b', marginBottom: 12 }}>If you know the problem, jump to a Dallas money URL or the services hub:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem 1rem' }}>
            {needLinks.map((l) => (
              <Link key={l.href} href={l.href} className="chip" style={{ fontWeight: 700 }}>{l.label} →</Link>
            ))}
            <Link href="/services/" className="chip" style={{ fontWeight: 700 }}>All services →</Link>
          </div>
        </div>

        <div className="cards" style={{ marginTop: 36, gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))' }}>
          {cities.map((c) => (
            <Link key={c.slug} href={cityPath(c)} className="svc-card">
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800 }}>{c.name}, {c.state}</h2>
              <p style={{ color: '#52606b', marginTop: 6, fontSize: '.95rem' }}>
                {c.county} · {cityHints[c.slug] || c.blurb || 'Repair, replacement & storm help'}
              </p>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>
                Repair · Replace · Storm →
              </span>
            </Link>
          ))}
        </div>

        <p style={{ color: '#52606b', marginTop: 36, maxWidth: 720, lineHeight: 1.7, borderLeft: '3px solid var(--orange)', paddingLeft: 14 }}>
          Family-owned since 2019 · Licensed, bonded, insured · Owens Corning Preferred · CertainTeed Storm Restoration Specialist (GA) on storm work · Based in Dallas, GA · Owner Cristian Mendez
        </p>
        <p style={{ marginTop: 20, color: '#52606b' }}>
          Ready to talk about your roof? Visit{' '}
          <Link href="/contact/" style={{ color: 'var(--orange)', fontWeight: 700 }}>https://iroofercontractors.com/contact/</Link>
          {' '}or call {brand.phone}.
        </p>
      </div>
    </section>
  );
}
