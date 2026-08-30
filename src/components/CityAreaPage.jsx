// Shared layout for a /service-areas/<city> page.
//
// The older city pages (acworth, austell, hiram, ...) each inline ~1,200 words of
// the same template with the city name swapped in — near-duplicate content that
// competes with itself in search. New and reworked city pages use this component
// instead: the chrome (map, service cards, trust list, quote form) is shared, and
// every page supplies its own genuinely local copy via `sections`, `neighborhoods`
// and `faq`. Do not copy another city's paragraphs in here.
import Link from 'next/link';
import CityMap from '@/components/CityMap';
import CitySchema from '@/components/CitySchema';
import QuoteForm from '@/components/QuoteForm';
import ReviewButton from '@/components/ReviewButton';
import { brand, services, cities } from '@/lib/brand';

const MUTED = '#52606b';

export default function CityAreaPage({ city, intro, sections = [], neighborhoods = [], faq = [] }) {
  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <CitySchema city={city} faq={faq} />
      <div className="wrap" style={{ position: 'relative' }}>
        <Link
          href="/service-areas/"
          style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}
        >
          ← All service areas
        </Link>

        <div style={{ marginTop: 18 }}>
          <span className="eyebrow dark">Service area · {city.county}</span>
          <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02 }}>
            Roofing in {city.name}, {city.state}
          </h1>
          {intro.map((p, i) => (
            <p key={i} style={{ color: MUTED, fontSize: i === 0 ? '1.1rem' : '1.02rem', marginTop: 14, maxWidth: 680, lineHeight: 1.7 }}>
              {p}
            </p>
          ))}
          <p style={{ color: MUTED, fontSize: '1.02rem', marginTop: 16, maxWidth: 680, borderLeft: '3px solid var(--orange)', paddingLeft: 14, lineHeight: 1.7 }}>
            {city.localNote}
          </p>
        </div>

        <CityMap city={city.name} state={city.state} />

        <div className="cards" style={{ marginTop: 36 }}>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}/`} className="svc-card">
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{s.title} in {city.name}</h2>
              <p style={{ color: MUTED, marginTop: 8, fontSize: '.95rem' }}>{s.summary}</p>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>
                Get a quote →
              </span>
            </Link>
          ))}
        </div>

        {sections.map((sec, i) => (
          <div key={i} style={{ marginTop: 44, maxWidth: 880 }}>
            <h2 style={{ fontSize: 'clamp(1.4rem,3vw,1.8rem)', fontWeight: 800, marginBottom: 14 }}>{sec.h2}</h2>
            {sec.paras.map((p, j) => (
              <p key={j} style={{ color: MUTED, fontSize: '1.02rem', lineHeight: 1.75, marginBottom: 14 }}>
                {p}
              </p>
            ))}
          </div>
        ))}

        <div className="faq-grid" style={{ marginTop: 44, alignItems: 'start' }}>
          <div className="rv">
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 900 }}>
              Why {city.name} homeowners choose iRoofer
            </h2>
            <ul style={{ lineHeight: 2.1, color: MUTED, marginTop: 12 }}>
              <li>Local &amp; family-owned, based in Dallas, GA since {brand.founded}.</li>
              <li>Free, no-pressure roof inspections with photo documentation.</li>
              <li>Honest upfront pricing — no surprise line items.</li>
              <li>Storm &amp; insurance claim help, including adjuster meetings.</li>
              <li>Daily cleanup and magnetic nail sweeps on every job.</li>
              <li>5★ rated on Google with {brand.reviewCount} verified reviews.</li>
            </ul>
            {neighborhoods.length > 0 && (
              <p style={{ marginTop: 18, color: MUTED }}>
                <strong style={{ color: 'var(--ink)' }}>Where we work in {city.name}:</strong>{' '}
                {neighborhoods.join(' · ')}
              </p>
            )}
            <p style={{ marginTop: 18 }}>
              <a className="btn btn-ink" href="/estimator/">
                Get an instant roof estimate <span className="arr">→</span>
              </a>
            </p>
            <p style={{ marginTop: 14, color: MUTED }}>
              Other nearby areas:{' '}
              {cities
                .filter((x) => x.slug !== city.slug)
                .map((x, i, arr) => (
                  <span key={x.slug}>
                    <Link href={`/service-areas/${x.slug}/`} style={{ color: 'var(--orange)' }}>{x.name}</Link>
                    {i < arr.length - 1 ? ', ' : ''}
                  </span>
                ))}
            </p>
          </div>
          <div className="rv">
            <picture>
              <source srcSet="/assets/hero.webp?v=2" type="image/webp" />
              <img
                src="/assets/hero.jpg?v=2"
                alt={`iRoofer Contractors roofing crew working in ${city.name}, ${city.state}`}
                loading="lazy"
                style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%' }}
              />
            </picture>
            <div style={{ maxWidth: 460, margin: '32px auto 0' }}>
              <QuoteForm variant="detail" id={`quote-${city.slug}`} source={`Service Area: ${city.name}`} />
            </div>
          </div>
        </div>

        {faq.length > 0 && (
          <div style={{ marginTop: 48, maxWidth: 880 }}>
            <h2 style={{ fontSize: 'clamp(1.4rem,3vw,1.8rem)', fontWeight: 800, marginBottom: 20 }}>
              Roofing in {city.name} — common questions
            </h2>
            <div style={{ display: 'grid', gap: 18 }}>
              {faq.map((f, i) => (
                <div key={i}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 6, color: 'var(--ink)' }}>{f.q}</h3>
                  <p style={{ margin: 0, color: MUTED, lineHeight: 1.7 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <ReviewButton variant="orange" label="Leave us a Google review" />
        </div>
      </div>
    </section>
  );
}
