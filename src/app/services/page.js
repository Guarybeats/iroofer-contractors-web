import Link from 'next/link';
import { services, brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import Pic from '@/components/Pic';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: 'Roofing Services in Dallas, GA | Repair, Replace, Storm & More | iRoofer',
  description:
    'Roofing services for your home in Dallas GA — repair, replacement, storm, claims, gutters, new construction, emergency. Local crew since 2019. (470) 236-1410',
  path: '/services',
});

const cardExtras = {
  'roof-repair': {
    more: 'Leaks, worn flashing, cracked boots, and storm-worn shingles. We find the source and fix it so a small problem stays small.',
    money: [
      { href: '/roof-repair-dallas-ga/', label: 'Roof repair Dallas GA' },
      { href: '/roof-repair-hiram/', label: 'Hiram repair' },
    ],
  },
  'roof-replacement': {
    more: 'Full tear-off and re-roof with architectural asphalt systems installed clean and built for Georgia weather. Owens Corning Preferred contractor installs when that line fits.',
    money: [
      { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement Dallas' },
      { href: '/roof-replacement-hiram/', label: 'Hiram replacement' },
    ],
  },
  'storm-damage-roof-repair': {
    more: 'Wind, hail, and fallen limbs leave damage that is easy to miss from the ground. We inspect, tarp when the roof is open, and document findings.',
    money: [
      { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage Dallas' },
      { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency Dallas' },
    ],
  },
  'gutter-repair-replacement': {
    more: 'Sized to the roof that feeds them — capacity, fall, fascia, seamless runs.',
    money: [{ href: '/gutter-repair-replacement-dallas-ga/', label: 'Gutters Dallas' }],
  },
  'new-construction': {
    more: 'Builders and homeowners — roof installed to plan and schedule.',
    money: [{ href: '/services/new-construction/', label: 'New construction hub' }],
  },
};

const faqs = [
  {
    q: 'One crew for every service?',
    a: 'Yes — same local team standards whether it is a boot swap or a full tear-off.',
  },
  {
    q: 'Do you only serve Dallas?',
    a: 'No — Dallas is home base; Hiram, Powder Springs, Douglasville, and listed cities are regular work.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="sec-head rv" style={{ marginBottom: 56 }}>
            <span className="eyebrow dark">What we do</span>
            <h1>Roofing services for your home</h1>
            <p>
              From a quick repair to a full replacement, every job is done by the same local crew — same standards, same phone number.
              iRoofer Contractors is family-owned in Dallas, GA since 2019. Owner {brand.owner}. Licensed, bonded, and insured.
              Owens Corning Preferred when that system fits.
            </p>
            <p style={{ marginTop: 12 }}>
              <a href={`tel:${brand.phone}`} style={{ fontWeight: 800, color: 'var(--orange)' }}>{brand.phone}</a>
              {' · '}
              <Link href="/contact/" style={{ fontWeight: 700, color: 'var(--orange)' }}>https://iroofercontractors.com/contact/</Link>
            </p>
          </div>
          <div className="cards">
            {services.map((s) => {
              const extra = cardExtras[s.slug];
              return (
                <div className="card" key={s.slug} style={{ color: 'inherit' }}>
                  <Link href={`/services/${s.slug}/`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <Pic src={s.image} alt={s.title} />
                  </Link>
                  <div className="body">
                    <h2><Link href={`/services/${s.slug}/`} style={{ color: 'inherit', textDecoration: 'none' }}>{s.title}</Link></h2>
                    <p>{extra?.more || s.summary}</p>
                    {extra?.money?.length > 0 && (
                      <p style={{ marginTop: 8, fontSize: '.9rem' }}>
                        {extra.money.map((m, i) => (
                          <span key={m.href}>
                            {i > 0 ? ' · ' : ''}
                            <Link href={m.href} style={{ color: 'var(--orange)', fontWeight: 700 }}>{m.label}</Link>
                          </span>
                        ))}
                      </p>
                    )}
                    <Link href={`/services/${s.slug}/`} className="more">Learn more →</Link>
                  </div>
                </div>
              );
            })}
            <div className="card" style={{ color: 'inherit' }}>
              <div className="body">
                <h2><Link href="/emergency-roof-repair-dallas-ga/" style={{ color: 'inherit', textDecoration: 'none' }}>Emergency roof repair</Link></h2>
                <p>Active leaks and storm openings — prioritize tarp and documentation.</p>
                <p style={{ marginTop: 8, fontSize: '.9rem' }}>
                  <Link href="/emergency-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Emergency Dallas</Link>
                  {' · '}
                  <Link href="/services/roof-insurance-claims/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Insurance claims</Link>
                </p>
                <Link href="/emergency-roof-repair-dallas-ga/" className="more">Learn more →</Link>
              </div>
            </div>
            <div className="card" style={{ color: 'inherit' }}>
              <div className="body">
                <h2><Link href="/services/roof-insurance-claims/" style={{ color: 'inherit', textDecoration: 'none' }}>Roof insurance claims</Link></h2>
                <p>You file; we document, meet the adjuster, and help with supplements when the scope falls short — no guaranteed approvals.</p>
                <Link href="/services/roof-insurance-claims/" className="more">Learn more →</Link>
              </div>
            </div>
          </div>

          <div className="rv" style={{ marginTop: 48, maxWidth: 760 }}>
            <h2 style={{ fontSize: 'clamp(1.4rem,2.4vw,1.85rem)', fontWeight: 800 }}>How to choose a starting point</h2>
            <ul style={{ color: '#52606b', lineHeight: 1.9, marginTop: 12 }}>
              <li>Water indoors or open deck → emergency / storm</li>
              <li>Stain after rain, no active pour → repair</li>
              <li>Third leak this year / widespread wear → replacement</li>
              <li>Adjuster visit coming → claims + storm</li>
              <li>Overflow at the eaves → gutters (+ roof check)</li>
            </ul>
          </div>

          <div className="rv" style={{ marginTop: 36, maxWidth: 760 }}>
            <h2 style={{ fontSize: 'clamp(1.3rem,2.2vw,1.7rem)', fontWeight: 800 }}>Why a services hub still matters</h2>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 10 }}>
              Homeowners land here when they know they need &quot;a roofer&quot; but not which service page.
              Clear cards plus money URLs keep them from bouncing to a thin dead end. Every card above should stay clickable on mobile.
            </p>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 10 }}>
              <strong>Credentials:</strong> Family-owned since 2019 · {brand.owner} · Licensed, bonded, insured ·
              Owens Corning Preferred when that system fits · CertainTeed Storm Restoration Specialist (GA) on storm restoration work when applicable.
            </p>
            <p style={{ marginTop: 16 }}>
              Local money hubs:{' '}
              <Link href="/dallas-ga-roofing/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Dallas GA roofing company</Link>
              {' · '}
              <Link href="/about/" style={{ color: 'var(--orange)', fontWeight: 700 }}>About</Link>
              {' · '}
              <Link href="/contact/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Contact</Link>
            </p>
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

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Services FAQ</span>
            <h2>Quick answers</h2>
          </div>
          <div className="faq-list rv">
            {faqs.map((f, i) => (
              <div key={f.q} className={'faq-item' + (i === 0 ? ' open' : '')}>
                <button className="faq-q" aria-expanded={i === 0}>{f.q}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            Not sure which service? <a href={`tel:${brand.phone}`} style={{ fontWeight: 800, color: 'var(--orange)' }}>{brand.phone}</a>
            {' · '}
            <Link href="/contact/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Contact</Link>
          </p>
        </div>
      </section>
      <FaqSchema faq={faqs} />
    </>
  );
}
