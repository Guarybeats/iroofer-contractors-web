import Link from 'next/link';
import { services, brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import Pic from '@/components/Pic';
import FreeRoofCheckCta from '@/components/FreeRoofCheckCta';
import { FaqSchema } from '@/components/LocalSeo';
import { renderInline } from '@/components/InlineText';

export const metadata = seo({
  title: 'Roofing Services in Dallas, GA: Repair, Replace & Storm',
  description:
    'Roofing services for your home in Dallas GA — repair, replacement, storm, claims, gutters, new construction, emergency. Local since 2019. (470) 236-1410',
  path: '/services',
});

const cardExtras = {
  'roof-repair': {
    more: 'Leaks, worn metal flashing, cracked pipe boots, and storm-worn shingles. We find where the water gets in and fix it, so a small problem stays small.',
    money: [
      { href: '/roof-repair-dallas-ga/', label: 'Roof repair Dallas GA' },
      { href: '/roof-repair-hiram/', label: 'Hiram repair' },
    ],
  },
  'roof-replacement': {
    more: 'We take the old roof off and put on a new one, built for Georgia weather. We keep the job clean. We install Owens Corning shingles as an Owens Corning Contractor Rewards member when they fit.',
    money: [
      { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement Dallas' },
      { href: '/roof-replacement-hiram/', label: 'Hiram replacement' },
    ],
  },
  'storm-damage-roof-repair': {
    more: 'Wind, hail, and fallen limbs can hurt a roof in ways you can’t see from the ground. We check it, tarp it if it’s open, and take photos.',
    money: [
      { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage Dallas' },
      { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency Dallas' },
    ],
  },
  'gutter-repair-replacement': {
    more: 'Gutters sized to fit your roof, sloped to drain, and hung tight on seamless runs.',
    money: [{ href: '/gutter-repair-replacement-dallas-ga/', label: 'Gutters Dallas' }],
  },
  'new-construction': {
    more: 'For builders and homeowners. We put the roof on to plan and on schedule.',
    money: [{ href: '/services/new-construction/', label: 'New construction hub' }],
  },
};

const faqs = [
  {
    q: 'One crew for every service?',
    a: 'Yes. The same local team does it all, from a small pipe boot fix to a full new roof.',
  },
  {
    q: 'Do you only serve Dallas?',
    a: 'No. Dallas is home. We also work in Hiram, Powder Springs, Douglasville, and the other towns listed here every week.',
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
              From a quick fix to a new roof, the same local crew does every job. Same care, same phone number.
              iRoofer Contractors is family-owned in Dallas, GA since 2019. The owner is {brand.owner}.
              We install Owens Corning shingles as an Owens Corning Contractor Rewards member when they fit.
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
                    <Pic src={s.image} alt={s.imageAlt || s.title} />
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
                <p>Leaking now, or a storm opened your roof? We tarp it first and take photos.</p>
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
                <p>You file the claim. We take photos, meet the adjuster, and ask for missed items. We can’t promise what gets approved.</p>
                <Link href="/services/roof-insurance-claims/" className="more">Learn more →</Link>
              </div>
            </div>
          </div>

          <FreeRoofCheckCta />

          <div className="rv" style={{ marginTop: 48, maxWidth: 760 }}>
            <h2 style={{ fontSize: 'clamp(1.4rem,2.4vw,1.85rem)', fontWeight: 800 }}>How to choose a starting point</h2>
            <ul style={{ color: '#52606b', lineHeight: 1.9, marginTop: 12 }}>
              <li>Water coming inside, or a hole in the roof → emergency or storm</li>
              <li>A stain after rain, but no water pouring in → repair</li>
              <li>Third leak this year, or wear all over → new roof</li>
              <li>Insurance adjuster coming soon → claims and storm</li>
              <li>Gutters spilling over → gutters (and a roof check)</li>
            </ul>
          </div>

          <div className="rv" style={{ marginTop: 36, maxWidth: 760 }}>
            <h2 style={{ fontSize: 'clamp(1.4rem,2.4vw,1.85rem)', fontWeight: 800 }}>What a service visit includes</h2>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 10 }}>
              First, we come out and look for free. We walk the roof when it is safe. When it is not, we check from the ground. We look at the metal flashing, pipe boots, and valleys. We look inside too, for ceiling stains, daylight in the attic, or wet wood. That way our advice fits your house.
            </p>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 10 }}>
              You get photos and a written plan in plain words. It tells you what to do: repair, tarp, new roof, or nothing for now.
            </p>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 10 }}>
              Nothing starts until you say yes. We only write up insurance papers when there is real storm damage. We can’t promise a claim will be approved.
            </p>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 10 }}>
              Call or text{' '}
              <a href={`tel:${brand.phone}`} style={{ fontWeight: 800, color: 'var(--orange)' }}>{brand.phone}</a>
              {' or send the address and what you are seeing at '}
              <Link href="/contact/" style={{ fontWeight: 700, color: 'var(--orange)' }}>https://iroofercontractors.com/contact/</Link>
              . If water is coming in now, tell us first thing so we come to you first.
            </p>
          </div>

          <div className="rv" style={{ marginTop: 36, maxWidth: 760 }}>
            <h2 style={{ fontSize: 'clamp(1.3rem,2.2vw,1.7rem)', fontWeight: 800 }}>Not sure where to start?</h2>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 10 }}>
              That’s OK. Book a <Link href="/free-roof-check/" style={{ color: 'var(--orange)', fontWeight: 700 }}>free roof check</Link> and we will tell you what your roof needs.
              No pressure. You get photos and a short written summary.
            </p>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 10 }}>
              <strong>About us:</strong> Family-owned since 2019 · {brand.owner} ·
              We install Owens Corning shingles as an Owens Corning Contractor Rewards member when they fit.
            </p>
            <p style={{ marginTop: 16 }}>
              Learn more:{' '}
              <Link href="/dallas-ga-roofing/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Dallas GA roofing company</Link>
              {' · '}
              <Link href="/about/" style={{ color: 'var(--orange)', fontWeight: 700 }}>About</Link>
              {' · '}
              <Link href="/contact/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Contact</Link>
            </p>
          </div>

          <div style={{ marginTop: 36, borderTop: '1px solid #e6e9ee', paddingTop: 20 }}>
            <p style={{ fontSize: '.8rem', letterSpacing: '.04em', textTransform: 'uppercase', color: '#8ea2b4', marginBottom: 10 }}>Guides & calculators</p>
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
              <Link href="/dallas-ga-roofing/" className="chip" style={{ textDecoration: 'none' }}>Dallas, GA</Link>
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
                <div className="faq-a"><div><p>{renderInline(f.a)}</p></div></div>
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
