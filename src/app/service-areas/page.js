import Link from 'next/link';
import { cities, brand, cityPath } from '@/lib/brand';
import { seo } from '@/lib/seo';
import QuoteForm from '@/components/QuoteForm';

export const metadata = seo({
  title: 'Roofing Service Areas Near Dallas, GA | iRoofer',
  description: 'Family-owned Dallas, GA roofer since 2019. Repair, replacement & storm help in Hiram, Douglasville, Powder Springs, Marietta & Kennesaw. (470) 236-1410',
  path: '/service-areas',
});

const needLinks = [
  { href: '/roof-repair-dallas-ga/', label: 'Roof repair' },
  { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement' },
  { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage' },
  { href: '/hail-damage-roof-repair-dallas-ga/', label: 'Hail damage' },
  { href: '/roof-leak-repair-dallas-ga/', label: 'Roof leaks' },
  { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency' },
  { href: '/services/roof-insurance-claims/', label: 'Insurance claims' },
  { href: '/services/new-construction/', label: 'New construction' },
];

const cityHints = {
  'dallas-ga': 'Home base: repair, replacement, storm, gutters, new construction',
  douglasville: 'Repair, replacement & storm help in Douglas County',
  hiram: 'Repair, inspections, replacement & gutters, minutes from our shop',
  'powder-springs': 'Repair & replacement to Powder Springs’ own permit rules',
  marietta: 'Repair, replacement & storm help, city or Cobb permits',
  acworth: 'Leak repair, tear-offs & limb-strike tarping',
  kennesaw: 'Repair, replacement & storm help in north Cobb',
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
          iRoofer Contractors works from Dallas, GA — 152 Freedom Dr — across Paulding, Cobb, and nearby north-metro cities. Family-owned since 2019. Pick your city below, or tell us what the roof needs: repair, full replacement, or storm damage documentation.
        </p>
        <p style={{ marginTop: 18 }}>
          <a className="btn btn-ink" href="/contact/">Get a free roof inspection <span className="arr">→</span></a>
          {' '}
          <a className="btn btn-ghost" href={`tel:${brand.phone}`} style={{ marginLeft: 8 }}>{brand.phone}</a>
        </p>

        <div style={{ marginTop: 36, maxWidth: 880 }}>
          <h2 style={{ fontSize: 'clamp(1.3rem,2.6vw,1.6rem)', fontWeight: 800, marginBottom: 12 }}>Need-based shortcuts</h2>
          <p style={{ color: '#52606b', marginBottom: 12 }}>If you know the problem, jump straight to the service:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem 1rem' }}>
            {needLinks.map((l) => (
              <Link key={l.href} href={l.href} className="chip" style={{ fontWeight: 700 }}>{l.label} →</Link>
            ))}
            <Link href="/paulding-county-roofing/" className="chip" style={{ fontWeight: 700 }}>Paulding County roofing →</Link>
            <Link href="/services/siding/" className="chip" style={{ fontWeight: 700 }}>Siding →</Link>
            <Link href="/services/exterior-painting/" className="chip" style={{ fontWeight: 700 }}>Exterior painting →</Link>
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

        <div className="rv" style={{ marginTop: 48, maxWidth: 820 }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 800 }}>Town by town</h2>
          <p style={{ color: '#52606b', marginTop: 12, lineHeight: 1.75 }}>
            We work from a real shop in Dallas, not a call center that farms jobs out. The notes below are the same local details we publish on each city page — Paulding, Cobb, Douglas, Cherokee, and north Fulton. If your town is next door and not listed, call (470) 236-1410 and ask. If we can get there and do the work right, we will tell you.
          </p>
          {cities.map((c) => (
            <article key={c.slug} style={{ marginTop: 28 }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                <Link href={cityPath(c)} style={{ color: 'var(--ink)' }}>{c.name}, {c.state}</Link>
                <span style={{ fontWeight: 600, color: '#52606b' }}> · {c.county}</span>
              </h3>
              <p style={{ color: '#52606b', marginTop: 8, lineHeight: 1.75 }}>{c.localNote || c.blurb}</p>
              <p style={{ marginTop: 8 }}>
                <Link href={cityPath(c)} style={{ color: 'var(--orange)', fontWeight: 700 }}>{c.name} roofing page →</Link>
              </p>
            </article>
          ))}
        </div>

        <div className="rv" style={{ marginTop: 48, maxWidth: 820 }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 800 }}>What we do in these cities</h2>
          <p style={{ color: '#52606b', marginTop: 12, lineHeight: 1.75 }}>
            Roof repair, roof replacement, storm-damage inspections, new-construction roofing, gutter repair and replacement, siding repair and replacement, and exterior painting and staining. Emergency tarping is available when the roof is open and it is safe to get on it — we do not promise 24/7 coverage. Insurance documentation is available after a storm; what a policy pays is up to the carrier, not us.
          </p>
          <p style={{ color: '#52606b', marginTop: 12, lineHeight: 1.75 }}>
            Dallas is home base: 152 Freedom Dr, Dallas, GA 30157. Family-owned since 2019 by Cristian Mendez. Hours are {brand.hours.full}. We install all major shingle brands, including Owens Corning.
          </p>
        </div>

        <div style={{ maxWidth: 460, marginTop: 48 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 12 }}>Ask about your address</h2>
          <QuoteForm variant="contact" id="service-areas-quote" source="Service areas" />
        </div>

                <p style={{ color: '#52606b', marginTop: 36, maxWidth: 720, lineHeight: 1.7, borderLeft: '3px solid var(--orange)', paddingLeft: 14 }}>
          Family-owned since 2019 · All Major Shingle Brands Installed · Based in Dallas, GA · Owner Cristian Mendez
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
