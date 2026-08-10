// Reusable Google Maps embed for a service-area city page.
// Uses a privacy-friendly map embed (no API key, no third-party cookies by default).
// wepar='0' keeps the Google UI minimal; the embed is lazy-loaded.
export default function CityMap({ city, state = 'GA', className }) {
  const q = encodeURIComponent(`${city}, ${state}`);
  const src = `https://www.google.com/maps?q=${q}&output=embed&z=11&wepar=0`;

  return (
    <div
      className={className}
      style={{
        marginTop: 28,
        borderRadius: 10,
        overflow: 'hidden',
        border: '1px solid rgba(22,29,37,.12)',
        boxShadow: '0 8px 24px rgba(22,29,37,.08)',
      }}
    >
      <iframe
        title={`Map of ${city}, ${state} service area`}
        src={src}
        width="100%"
        height="340"
        style={{ border: 0, display: 'block' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div
        style={{
          background: 'var(--ink, #161d25)',
          color: '#fff',
          fontSize: '.85rem',
          padding: '10px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        <span>
          iRoofer Contractors serves <strong>{city}, {state}</strong> &amp; surrounding communities.
        </span>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            `${city}, ${state}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#fff',
            background: 'var(--orange, #ff5c1c)',
            padding: '6px 12px',
            borderRadius: 6,
            fontWeight: 700,
            whiteSpace: 'nowrap',
          }}
        >
          Get directions →
        </a>
      </div>
    </div>
  );
}
