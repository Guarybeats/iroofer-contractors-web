import Link from 'next/link';

/**
 * Shared "free roof check" offer banner. Rendered on the homepage, service hubs,
 * and city/service money pages so every page points at /free-roof-check/.
 */
export default function FreeRoofCheckCta({ style }) {
  return (
    <aside
      className="rv frc-cta"
      aria-label="Free roof check offer"
      style={{
        margin: '40px 0',
        padding: '22px 24px',
        borderRadius: 10,
        background: '#161d25',
        color: '#f3f5f4',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        ...style,
      }}
    >
      <div style={{ maxWidth: 560 }}>
        <p style={{ fontWeight: 900, fontSize: '1.3rem', margin: 0, color: '#fff' }}>Not sure what your roof needs?</p>
        <p style={{ margin: '6px 0 0', color: '#c9d2da' }}>
          Get a free, no-pressure roof check. You get photos and a short written summary.
        </p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        <Link className="btn btn-solid" href="/free-roof-check/">Book a free roof check <span className="arr">→</span></Link>
        <Link className="btn btn-ghost" href="/free-roof-check/#price-range" style={{ color: '#f3f5f4' }}>See your price range in 60 seconds</Link>
      </div>
    </aside>
  );
}
