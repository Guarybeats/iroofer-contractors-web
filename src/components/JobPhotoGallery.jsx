// Small gallery of real job photos for a service page. Sits below the hero, so the
// images lazy-load; width/height are set to avoid layout shift. Data: src/lib/jobPhotos.js.
import { jobPhotoSets } from '@/lib/jobPhotos';

const MUTED = '#52606b';

export function JobPhotoGrid({ set, title }) {
  const s = jobPhotoSets[set];
  if (!s) return null;
  return (
    <div className="rv">
      <h2 style={{ fontSize: 'clamp(1.4rem,2.6vw,1.9rem)', fontWeight: 800, marginBottom: 6 }}>{title || s.title}</h2>
      <p style={{ color: MUTED, marginBottom: 16, maxWidth: 720 }}>
        Real photos from iRoofer jobs, shot by our crew. Each caption names the city where the photo was taken.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18, alignItems: 'start' }}>
        {s.photos.map((ph) => (
          <figure key={ph.src} style={{ margin: 0 }}>
            <img
              src={ph.src}
              alt={ph.alt}
              width={ph.w}
              height={ph.h}
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: 'auto', maxHeight: 420, objectFit: 'cover', borderRadius: 8, border: '1px solid rgba(22,29,37,.1)' }}
            />
            <figcaption style={{ color: MUTED, fontSize: '.9rem', marginTop: 6 }}>
              {ph.label ? <strong style={{ color: 'var(--ink)' }}>{ph.label}: </strong> : null}
              {ph.caption} · {ph.city}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function JobPhotoGallery({ set, title }) {
  if (!jobPhotoSets[set]) return null;
  return (
    <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <JobPhotoGrid set={set} title={title} />
      </div>
    </section>
  );
}
