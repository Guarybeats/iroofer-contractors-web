import { notFound } from 'next/navigation';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import RelatedGuides from '@/components/RelatedGuides';
import Pic from '@/components/Pic';
import { getService, services, brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { serviceHubContent, comboCities } from '@/lib/serviceHubContent';

export function generateStaticParams() {
  return services
    .filter((s) => s.slug !== 'gutter-repair-replacement')
    .filter((s) => serviceHubContent[s.slug] || true)
    .map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getService(params.slug);
  if (!service) return {};
  // Lock "roof repair Dallas GA" on /roof-repair-dallas-ga/ — hub stays metro-wide.
  const isRepairHub = service.slug === 'roof-repair';
  return seo({
    title: isRepairHub
      ? `${service.title} | Metro Atlanta | iRoofer`
      : `${service.title} | Dallas, GA & Metro Atlanta`,
    description:
      service.metaDesc ||
      (isRepairHub
        ? 'Roof leak, flashing, and shingle repair across Metro Atlanta. For Dallas, GA jobs see our local roof repair page. Free inspection.'
        : service.summary),
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetail({ params }) {
  const service = getService(params.slug);
  if (!service) notFound();
  const hub = serviceHubContent[service.slug];
  const related = services.filter((s) => s.slug !== service.slug);
  const cityList = comboCities();

  // Fallback: keep a minimal layout if a new service slug is added without hub copy
  if (!hub) {
    return (
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <Link href="/services/" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>← All services</Link>
          <div className="faq-grid" style={{ marginTop: 18, alignItems: 'start' }}>
            <div className="rv">
              <span className="eyebrow dark">Roofing service</span>
              <h1 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', fontWeight: 900 }}>{service.title}</h1>
              <p style={{ color: 'var(--orange)', fontWeight: 800, marginTop: -8, textTransform: 'uppercase', letterSpacing: '.04em' }}>{service.tagline}</p>
              <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 8 }}>{service.summary}</p>
              <ul style={{ lineHeight: 2, marginTop: 16, color: '#52606b' }}>
                {service.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <p style={{ marginTop: 18 }}>
                <a className="btn btn-ink" href="/#contact">Get a free quote for {service.title} <span className="arr">→</span></a>
              </p>
              <RelatedGuides slug={service.slug} />
            </div>
            <div className="rv">
              <Pic src={service.image} alt={service.title} style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%' }} />
              <div style={{ maxWidth: 460, margin: '32px auto 0' }}>
                <QuoteForm variant="detail" id={`quote-${service.slug}`} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <Link href="/services/" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>← All services</Link>

        <div className="faq-grid" style={{ marginTop: 18, alignItems: 'center' }}>
          <div className="rv">
            <span className="eyebrow dark">{hub.eyebrow}</span>
            <h1 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', fontWeight: 900, lineHeight: 1.04 }}>{hub.h1Before}<span className="ac">{hub.h1Accent}</span></h1>
            <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 14, maxWidth: 640 }}>{hub.lead}</p>
            <ul style={{ lineHeight: 2.1, color: '#52606b', marginTop: 16 }}>
              {hub.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <p style={{ marginTop: 20 }}>
              <a className="btn btn-ink" href={`#quote-${service.slug}`}>Get a free {service.title.toLowerCase()} quote <span className="arr">→</span></a>
              <RelatedGuides slug={service.slug} />
            </p>
          </div>
          <div className="rv">
            <Pic src={service.image} alt={service.title} style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%' }} />
          </div>
        </div>

        <div className="svc-grid" style={{ marginTop: 64 }}>
          <div className="svc-intro rv">
            <span className="eyebrow dark">Process</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900, lineHeight: 1.08 }}>{hub.processTitle}</h2>
            <p style={{ color: '#52606b', marginTop: 12 }}>{hub.processIntro}</p>
          </div>
          <div className="svc-list rv" style={{ marginTop: 0 }}>
            {hub.steps.map((s) => (
              <article className={`svc${s.n === '01' ? ' open' : ''}`} key={s.n}>
                <button className="svc-head" aria-expanded={s.n === '01' ? 'true' : 'false'}>
                  <span className="svc-num">{s.n}</span><span className="svc-title">{s.title}</span>
                  <span className="svc-plus" aria-hidden="true" />
                </button>
                <div className="svc-body"><div className="svc-inner"><p>{s.body}</p></div></div>
              </article>
            ))}
          </div>
        </div>

        {hub.featuredLinks?.length > 0 && (
          <div className="rv" style={{ marginTop: 56 }}>
            <span className="eyebrow dark">City pages</span>
            <p style={{ color: '#52606b', marginTop: 8, maxWidth: 640 }}>
              Jump to the local page for your city and service:
            </p>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem 1.4rem', marginTop: 12, listStyle: 'none', padding: 0 }}>
              {hub.featuredLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '.95rem' }}>{l.label} →</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {hub.cityPrefix && (
          <div className="rv" style={{ marginTop: 56 }}>
            <span className="eyebrow dark">{hub.cityLabel}</span>
            <div className="chips" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 12 }}>
              {cityList.map((c) => (
                <Link key={c.slug} href={`/${hub.cityPrefix}-${c.slug}/`} className="chip">
                  {c.name}, {c.state} →
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="faq-grid" style={{ marginTop: 64, alignItems: 'start' }}>
          <div className="rv">
            <span className="eyebrow dark">Good to know</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>Questions we hear every week.</h2>
            <p style={{ color: '#52606b', marginTop: 12 }}>A real person — not a call center — answers the phone.</p>
            <div className="faq-call">
              <div className="lbl">Talk to a roofer</div>
              <a href={`tel:${brand.phone}`}>{brand.phone}</a>
            </div>
          </div>
          <div className="faq-list rv">
            {hub.faqs.map((f, i) => (
              <div className={`faq-item${i === 0 ? ' open' : ''}`} key={f.q}>
                <button className="faq-q" aria-expanded={i === 0 ? 'true' : 'false'}>{f.q}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 560, margin: '64px auto 0' }} id={`quote-${service.slug}`}>
          <QuoteForm variant="detail" id={`quote-form-${service.slug}`} source={`${service.title} Hub`} title={`Get Your Free ${service.title} Quote`} />
        </div>

        <div className="sec-head rv" style={{ marginTop: 64 }}>
          <span className="eyebrow dark">Related</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>Other services</h2>
        </div>
        <div className="cards" style={{ marginTop: 24 }}>
          {related.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}/`} className="card" style={{ color: 'inherit', textDecoration: 'none' }}>
              <img src={s.webp || s.image} alt={s.title} loading="lazy" />
              <div className="body">
                <h3>{s.title}</h3>
                <p style={{ color: '#52606b' }}>{s.summary}</p>
                <span className="more">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
