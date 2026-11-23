// Shared layout for exterior-painting and siding city pages.
// All body copy comes from src/lib/tradeCopy.js. Do not put city-swap paragraphs here.
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { FaqSchema } from '@/components/LocalSeo';
import { renderInline } from '@/components/InlineText';
import CopySection from '@/components/CopySection';
import { JobPhotoGrid } from '@/components/JobPhotoGallery';

export default function TradeCityPage({ copy, photoSet }) {
  return (
    <>
      <FaqSchema faq={copy.faq} />
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <Link href={copy.hubHref} className="lander-back">
                ← {copy.hubLabel}
              </Link>
              <span className="eyebrow dark lander-eyebrow">{copy.eyebrow}</span>
              <h1 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.4rem)', fontWeight: 900, lineHeight: 1.08, marginTop: 8 }}>
                {copy.h1}
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 14, maxWidth: 680, lineHeight: 1.7 }}>
                {renderInline(copy.intro)}
              </p>
              <p style={{ marginTop: 22 }}>
                <a className="btn btn-ink" href="/contact/">Get a free visit <span className="arr">→</span></a>
                {' '}
                <a className="btn btn-ghost" href={`tel:${brand.phone}`}>{brand.phone}</a>
              </p>
            </div>
            <div className="rv">
              <QuoteForm variant="contact" id={copy.formId} source={copy.formSource} />
            </div>
          </div>

          {photoSet ? (
            <div style={{ marginTop: 48 }}>
              <JobPhotoGrid set={photoSet} />
            </div>
          ) : null}

          <div style={{ marginTop: 48 }}>
            {copy.sections.map((sec) => (
              <CopySection key={sec.h} sec={sec} />
            ))}
          </div>

          <div className="rv" style={{ marginTop: 12 }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 12 }}>Also in {copy.cityName}</h2>
            <p>
              {copy.related.map((link, i) => (
                <span key={link.href}>
                  {i > 0 ? ' · ' : null}
                  <Link href={link.href} style={{ color: 'var(--orange)', fontWeight: 700 }}>{link.label}</Link>
                </span>
              ))}
            </p>
          </div>

          <div className="faq-list rv" style={{ marginTop: 40 }}>
            <h2 style={{ fontSize: 'clamp(1.4rem,2.4vw,1.9rem)', fontWeight: 800, marginBottom: 12 }}>Questions</h2>
            {copy.faq.map((f, i) => (
              <div className={i === 0 ? 'faq-item open' : 'faq-item'} key={f.q}>
                <button className="faq-q" aria-expanded={i === 0}>{f.q}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{renderInline(f.a)}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
