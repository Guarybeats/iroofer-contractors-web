import { serviceHubContent } from '@/lib/serviceHubContent';
import { renderInline } from '@/components/InlineText';

/** Process steps folded in from the retired /services/{slug}/ hub (Nov 2026 dedupe). */
export default function ServiceProcess({ slug }) {
  const hub = serviceHubContent[slug];
  if (!hub?.steps?.length) return null;
  return (
    <section className="sec-light sec-pad" id="process">
      <div className="wrap">
        <div className="svc-intro rv">
          <span className="eyebrow dark">Process</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900, lineHeight: 1.08 }}>{hub.processTitle}</h2>
          {hub.processIntro && <p style={{ color: '#52606b', marginTop: 12 }}>{hub.processIntro}</p>}
        </div>
        <div className="svc-list rv" style={{ marginTop: 0 }}>
          {hub.steps.map((s) => (
            <article className={`svc${s.n === '01' ? ' open' : ''}`} key={s.n}>
              <button className="svc-head" aria-expanded={s.n === '01' ? 'true' : 'false'}>
                <span className="svc-num">{s.n}</span><span className="svc-title">{s.title}</span>
                <span className="svc-plus" aria-hidden="true" />
              </button>
              <div className="svc-body"><div className="svc-inner"><p>{renderInline(s.body)}</p></div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
