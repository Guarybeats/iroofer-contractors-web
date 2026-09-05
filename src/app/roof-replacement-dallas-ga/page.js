import Link from 'next/link';
import RelatedGuides from '@/components/RelatedGuides';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { localCopy } from '@/lib/localCopy';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: "Roof Replacement Dallas GA | Owens Corning",
  description: "Roof replacement in Dallas, GA when patches fail. Owens Corning Preferred & CertainTeed storm specialist. Licensed local crew. Call (470) 236-1410.",
  path: '/roof-replacement-dallas-ga',
});

// Page-specific copy lives in src/lib/localCopy.js — one entry per service x city.
// Do not inline generic template text here; see the header of that file for why.
const copy = localCopy['roof-replacement']['dallas-ga'];
const faqs = copy.faq;
const relatedLinks = [
              { href: '/dallas-ga-roofing/', label: 'Dallas GA roofing' },
              { href: '/services/roof-replacement/', label: 'roof replacement services' },
              { href: '/roof-repair-dallas-ga/', label: 'roof repair in Dallas' },
              { href: '/service-areas/dallas-ga/', label: 'Dallas service area' },
              { href: '/', label: 'iRoofer Contractors home' }
            ];

export default function Page() {
  return (
    <>
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <Link href="/services/roof-replacement/" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>
                ← Roof Replacement
              </Link>
              <span className="eyebrow dark" style={{ marginTop: 16, display: 'inline-block' }}>Dallas, GA</span>
              <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02, marginTop: 8 }}>
                Roof Replacement in Dallas, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680, lineHeight: 1.7 }}>
                {copy.intro}
              </p>
              <div className="cta" style={{ marginTop: 28 }}>
                <a className="bigphone" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }} href={`tel:${brand.phone}`}>{brand.phone}</a>
                <Link className="btn btn-solid" href="/#contact" style={{ marginLeft: 16, verticalAlign: 'middle' }}>Get a free quote <span className="arr">→</span></Link>
              </div>

              <div style={{ marginTop: 32, padding: '1.3rem', background: '#fff', border: '1px solid rgba(22,29,37,.08)', borderRadius: 8 }}>
                <strong style={{ color: '#0b3d16' }}>What Dallas Homeowners Say</strong>
                <p style={{ color: '#52606b', fontSize: '.95rem', marginTop: 8, fontStyle: 'italic' }}>
                  {copy.socialProofPlaceholder || '[CITY REVIEW PLACEHOLDER]'}
                </p>
                <p style={{ color: '#8ea2b4', fontSize: '.85rem', marginTop: 8 }}>
                  Paste 1–2 real local reviews here. Do not invent quotes or add star ratings/counts to titles or metas.
                </p>
              </div>
            </div>

            <div className="rv">
              <img src="/assets/service-replacement.webp?v=2" alt="Roof Replacement in Dallas, GA by iRoofer Contractors" loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%', marginBottom: 24 }} />
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="contact" id="roof-replacement-dallas-ga-quote" source="Roof Replacement Dallas GA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {copy.sections.map((sec) => (
            <div key={sec.h} className="rv" style={{ maxWidth: 780, marginBottom: 34 }}>
              <h2 style={{ fontSize: 'clamp(1.5rem,2.6vw,2rem)', fontWeight: 800, lineHeight: 1.15 }}>{sec.h}</h2>
              <p style={{ color: '#52606b', fontSize: '1.02rem', marginTop: 12, lineHeight: 1.75 }}>{sec.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Dallas, GA FAQ</span>
            <h2>Questions homeowners ask us</h2>
          </div>
          <div className="faq-list rv">
            {faqs.map((f, i) => (
              <div key={f.q} className={'faq-item' + (i === 0 ? ' open' : '')}>
                <button className="faq-q" aria-expanded={i === 0}>{f.q}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/service-areas/dallas-ga/" className="btn btn-ink">More about our Dallas service area <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Related pages</span>
            <h2>Helpful links for homeowners</h2>
          </div>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem 1.4rem', marginTop: 8, listStyle: 'none', padding: 0 }}>
            {relatedLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '.95rem' }}>{l.label} →</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">More services</span>
            <h2>Other services nearby</h2>
          </div>
          <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))' }}>
            <Link key="roof-repair" href="/roof-repair-dallas-ga/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Roof Repair in Dallas</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="new-construction" href="/new-construction-dallas-ga/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>New Construction in Dallas</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="gutter-repair-replacement" href="/gutter-repair-replacement-dallas-ga/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Gutter Repair & Replacement in Dallas</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="storm-damage-roof-repair" href="/storm-damage-roof-repair-dallas-ga/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Storm Damage Roof Repair in Dallas</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <RelatedGuides slug="roof-replacement" heading="Local roofing guides" />
        </div>
      </section>
      <FaqSchema faq={faqs} />
    </>
  );
}
