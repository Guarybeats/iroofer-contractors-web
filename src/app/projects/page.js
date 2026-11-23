import Link from 'next/link';
import { seo } from '@/lib/seo';
import { projects } from '@/lib/projects';
import FreeRoofCheckCta from '@/components/FreeRoofCheckCta';

export const metadata = seo({
  title: 'Completed Roofing Projects | iRoofer Contractors',
  description: 'Recent roof replacement and gutter projects from iRoofer Contractors in Dallas, Powder Springs and Austell, GA, with real job photos and the scope of work.',
  path: '/projects',
});

const MUTED = '#52606b';

function Field({ label, children }) {
  return (
    <div style={{ marginTop: 14 }}>
      <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--ink)' }}>{label}</h3>
      <div style={{ color: MUTED, lineHeight: 1.7, marginTop: 4 }}>{children}</div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <span className="eyebrow dark">Completed projects</span>
        <h1 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', fontWeight: 900, lineHeight: 1.05, marginTop: 8 }}>
          Recent roofing projects in west metro Atlanta
        </h1>
        <p style={{ color: MUTED, fontSize: '1.08rem', marginTop: 14, maxWidth: 720, lineHeight: 1.7 }}>
          These are real jobs, shot by our crew, not stock photos. We list each project by city only and keep
          homeowners&apos; names and addresses private. Each one links to the service page and the city page
          where you can read how we handle that kind of work in your area.
        </p>

        {projects.map((p) => (
          <article key={p.id} id={p.id} style={{ marginTop: 48, scrollMarginTop: 120, borderTop: '1px solid rgba(22,29,37,.12)', paddingTop: 28 }}>
            <span className="eyebrow dark">{p.city} · {p.service}</span>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 800, marginTop: 6 }}>{p.title}</h2>
            <p style={{ color: MUTED, marginTop: 10, maxWidth: 760, lineHeight: 1.7 }}>{p.summary}</p>

            <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 18, marginTop: 18 }}>
              {p.photos.map((ph) => (
                <figure key={ph.src} style={{ margin: 0 }}>
                  <img src={ph.src} alt={ph.alt} width={ph.w} height={ph.h} loading="lazy" decoding="async" style={{ width: '100%', height: 'auto', borderRadius: 8, border: '1px solid rgba(22,29,37,.1)' }} />
                  <figcaption style={{ color: MUTED, fontSize: '.9rem', marginTop: 6 }}>{p.city} · {ph.caption}</figcaption>
                </figure>
              ))}
            </div>

            <div style={{ maxWidth: 760 }}>
              <Field label="City">{p.city}</Field>
              {p.problem ? <Field label="Original problem">{p.problem}</Field> : null}
              {p.findings ? <Field label="What the inspection found">{p.findings}</Field> : null}
              <Field label="Scope of work">
                <ul style={{ paddingLeft: 22, margin: 0 }}>
                  {p.scope.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </Field>
              {p.materials?.length ? <Field label="Materials">{p.materials.join(', ')}</Field> : null}
              {p.completed ? <Field label="Completed">{p.completed}</Field> : null}
              {p.quote ? <Field label="What the homeowner said"><q>{p.quote}</q></Field> : null}
              <p style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: '.6rem 1.4rem' }}>
                <Link href={p.serviceHref} style={{ color: 'var(--orange)', fontWeight: 700 }}>{p.serviceLabel} →</Link>
                {(p.extraLinks || []).map((l) => (
                  <Link key={l.href} href={l.href} style={{ color: 'var(--orange)', fontWeight: 700 }}>{l.label} →</Link>
                ))}
                <Link href={p.cityHref} style={{ color: 'var(--orange)', fontWeight: 700 }}>{p.cityLabel} →</Link>
              </p>
            </div>
          </article>
        ))}

        <div style={{ marginTop: 48, maxWidth: 520 }}>
          <FreeRoofCheckCta />
        </div>
      </div>
    </section>
  );
}
