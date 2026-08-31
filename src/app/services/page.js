import Link from 'next/link';
import { services } from '@/lib/brand';
import { seo } from '@/lib/seo';
import Pic from '@/components/Pic';

export const metadata = seo({
  title: 'Roofing Services in Dallas, GA | Repair & Replace',
  description:
    'iRoofer Contractors’ roofing services in Dallas, GA and Metro Atlanta — repair, replacement, new construction, gutters, 24/7 storm response.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="sec-head rv" style={{ marginBottom: 56 }}>
          <span className="eyebrow dark">What we do</span>
          <h1>Roofing services for your home</h1>
          <p>From a quick repair to a full replacement, every job is done by the same local crew — with the same warranty and the same phone number.</p>
        </div>
        <div className="cards">
          {services.map((s) => (
            <Link className="card" key={s.slug} href={`/services/${s.slug}/`} style={{ color: 'inherit' }}>
              <Pic src={s.image} alt={s.title} />
              <div className="body">
                <h2>{s.title}</h2>
                <p>{s.summary}</p>
                <span className="more">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 36, borderTop: '1px solid #e6e9ee', paddingTop: 20 }}>
          <p style={{ fontSize: '.8rem', letterSpacing: '.04em', textTransform: 'uppercase', color: '#8ea2b4', marginBottom: 10 }}>Guides &amp; calculators</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <Link href="/blog/roof-repair-cost-dallas-ga/" className="chip" style={{ textDecoration: 'none' }}>Roof repair cost Dallas GA</Link>
            <Link href="/blog/cost-of-new-roof-2026-dallas-ga/" className="chip" style={{ textDecoration: 'none' }}>New roof cost 2026</Link>
            <Link href="/blog/when-to-replace-vs-repair-a-roof/" className="chip" style={{ textDecoration: 'none' }}>Replace vs. repair guide</Link>
            <Link href="/blog/dallas-ga-hail-storm-insurance-claims/" className="chip" style={{ textDecoration: 'none' }}>File an insurance claim</Link>
            <Link href="/estimator/" className="chip" style={{ textDecoration: 'none' }}>Free roof estimate</Link>
          </div>
        </div>
        <div style={{ marginTop: 36, borderTop: '1px solid #e6e9ee', paddingTop: 20 }}>
          <p style={{ fontSize: '.8rem', letterSpacing: '.04em', textTransform: 'uppercase', color: '#8ea2b4', marginBottom: 10 }}>Service areas</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <Link href="/service-areas/dallas-ga/" className="chip" style={{ textDecoration: 'none' }}>Dallas, GA</Link>
            <Link href="/service-areas/douglasville/" className="chip" style={{ textDecoration: 'none' }}>Douglasville</Link>
            <Link href="/service-areas/hiram/" className="chip" style={{ textDecoration: 'none' }}>Hiram</Link>
            <Link href="/service-areas/powder-springs/" className="chip" style={{ textDecoration: 'none' }}>Powder Springs</Link>
            <Link href="/service-areas/marietta/" className="chip" style={{ textDecoration: 'none' }}>Marietta</Link>
            <Link href="/service-areas/kennesaw/" className="chip" style={{ textDecoration: 'none' }}>Kennesaw</Link>
            <Link href="/service-areas/acworth/" className="chip" style={{ textDecoration: 'none' }}>Acworth</Link>
            <Link href="/service-areas/austell/" className="chip" style={{ textDecoration: 'none' }}>Austell</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
