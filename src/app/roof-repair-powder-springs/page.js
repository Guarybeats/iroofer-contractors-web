import Link from 'next/link';
import RelatedGuides from '@/components/RelatedGuides';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { localCopy } from '@/lib/localCopy';
import { FaqSchema } from '@/components/LocalSeo';
import { renderInline } from '@/components/InlineText';
import CopySection from '@/components/CopySection';

export const metadata = seo({
  title: "Roof Repair Contractor in Powder Springs, GA | iRoofer",
  description: "Leaks, pipe boots, flashing & storm-worn shingles fixed by a family-owned crew that works to Powder Springs' permit rules. Call (470) 236-1410.",
  path: '/roof-repair-powder-springs',
});

// Page-specific copy lives in src/lib/localCopy.js — one entry per service x city.
// Do not inline generic template text here; see the header of that file for why.
const copy = localCopy['roof-repair']['powder-springs'];
const faqs = copy.faq;

export default function Page() {
  return (
    <>
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <Link href="/services/roof-repair/" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>
                ← Roof Repair
              </Link>
              <span className="eyebrow dark" style={{ marginTop: 16, display: 'inline-block' }}>Powder Springs, GA</span>
              <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02, marginTop: 8 }}>
                Roof Repair Contractor in Powder Springs, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680, lineHeight: 1.7 }}>
                Roof leaking in Powder Springs? We find where the water is actually getting in (a cracked pipe boot, a valley, flashing at a sidewall, wind-lifted shingles) and fix that, with photos and a written price before we start. iRoofer Contractors is family-owned in nearby Dallas since 2019. Call (470) 236-1410 or book at <Link href="/contact/" style={{ color: 'var(--orange)', fontWeight: 700 }}>https://iroofercontractors.com/contact/</Link>.
              </p>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680, lineHeight: 1.7 }}>
                {renderInline(copy.intro)}
              </p>
              <div className="cta" style={{ marginTop: 28 }}>
                <a className="bigphone" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }} href={`tel:${brand.phone}`}>{brand.phone}</a>
                <Link className="btn btn-solid" href="/contact/" style={{ marginLeft: 16, verticalAlign: 'middle' }}>Get a free quote <span className="arr">→</span></Link>
              </div>

            </div>

            <div className="rv">
              <img src="/assets/service-repair.webp?v=3" alt="Roof Repair in Powder Springs, GA by iRoofer Contractors" loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%', marginBottom: 24 }} />
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="contact" id="roof-repair-powder-springs-quote" source="Roof Repair Powder Springs GA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {copy.sections.map((sec) => (
            <CopySection key={sec.h} sec={sec} />
          ))}
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Powder Springs, GA Roof Repair FAQ</span>
            <h2>Questions Powder Springs homeowners ask us</h2>
          </div>
          <div className="faq-list rv">
            {faqs.map((f, i) => (
              <div key={f.q} className={'faq-item' + (i === 0 ? ' open' : '')}>
                <button className="faq-q" aria-expanded={i === 0}>{f.q}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{renderInline(f.a)}</p></div></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/service-areas/powder-springs/" className="btn btn-ink">More about our Powder Springs service area <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">More Powder Springs roofing services</span>
            <h2>Other services we offer in Powder Springs, GA</h2>
          </div>
          <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))' }}>
            <Link key="roof-replacement" href="/roof-replacement-powder-springs/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Roof Replacement in Powder Springs</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="new-construction" href="/new-construction-powder-springs/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>New Construction in Powder Springs</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="gutter-repair-replacement" href="/gutter-repair-replacement-powder-springs/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Gutter Repair & Replacement in Powder Springs</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="storm-damage-roof-repair" href="/storm-damage-roof-repair-powder-springs/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Storm Damage Roof Repair in Powder Springs</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <RelatedGuides slug="roof-repair" heading="Local roofing guides" />
        </div>
      </section>
      <FaqSchema faq={faqs} />
    </>
  );
}
