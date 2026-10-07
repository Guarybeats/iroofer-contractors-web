// Google Maps embed pinned to the iRoofer shop (152 Freedom Dr, Dallas, GA 30157).
//
// Spec: site-audit "near me" gap #5 (2026-10-07), §1. Embed URL form A (q= name +
// address, output=embed, no API key). CSP frame-src already allows www.google.com.
//
// LCP / CLS rules — do not change without re-running mobile Lighthouse on /contact/:
//   - Only render this BELOW the fold. Never in a hero, never preloaded.
//   - Keep loading="lazy" so the Google frame loads only when scrolled near.
//   - The wrapper reserves its box (aspect-ratio + min-height) so nothing shifts.
//   - Used on /contact/ and /dallas-ga-roofing/ only. Do not add to city landers.
// Same GBP short link as GBP_URL in LocalSeo.jsx (that file is 'use client', so the
// constant is not imported into this server component).
const GBP_URL = 'https://maps.app.goo.gl/oZg9a1cuNvUi3Ut99';

export const SHOP_MAP_SRC =
  'https://www.google.com/maps?q=iRoofer%20Contractors%2C%20152%20Freedom%20Dr%2C%20Dallas%2C%20GA%2030157&output=embed';

export default function ShopMap({ heading = 'Find our Dallas shop', headingId = 'map-h', showHeading = true, className = '', style }) {
  return (
    <section
      className={`map-section ${className}`.trim()}
      {...(showHeading ? { 'aria-labelledby': headingId } : { 'aria-label': 'Map: iRoofer Contractors shop in Dallas, GA' })}
      style={style}
    >
      {showHeading ? (
        <h2 id={headingId} style={{ fontSize: 'clamp(1.4rem,2.4vw,1.85rem)', fontWeight: 800 }}>{heading}</h2>
      ) : null}
      <div
        className="map-embed"
        style={{
          width: '100%',
          maxWidth: 960,
          aspectRatio: '16 / 9',
          minHeight: 320,
          marginTop: showHeading ? 16 : 0,
          borderRadius: 10,
          overflow: 'hidden',
          border: '1px solid rgba(22,29,37,.12)',
          background: '#e9edf1',
        }}
      >
        <iframe
          src={SHOP_MAP_SRC}
          title="Map: iRoofer Contractors, 152 Freedom Dr, Dallas, GA 30157"
          width="100%"
          height="360"
          style={{ border: 0, display: 'block', width: '100%', height: '100%' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <p className="map-note" style={{ color: '#52606b', marginTop: 12, fontSize: '.95rem' }}>
        152 Freedom Dr, Dallas, GA 30157 · shop visits by appointment ·{' '}
        <a href={GBP_URL} target="_blank" rel="noopener" style={{ color: 'var(--orange)', fontWeight: 700 }}>
          Open in Google Maps
        </a>
      </p>
    </section>
  );
}
