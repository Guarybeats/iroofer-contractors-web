import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Roof Replacement in Marietta, GA | iRoofer',
  description:
    'Full roof replacement in Marietta, GA — architectural & premium shingles, tear-off, deck inspection, and manufacturer warranty. Local, family-owned, 5★ on Google. Free estimate: (470) 236-1410.',
  path: '/roof-replacement-marietta-ga',
});

const faqs = [
  { q: 'How long does a roof replacement take in Marietta?', a: 'Most Marietta homes (1,800–3,200 sq ft) are torn off and re-roofed in one to two days, weather permitting. We protect your landscaping and run a daily magnet nail-sweep.' },
  { q: 'What shingle do you recommend for Marietta homes?', a: 'Architectural asphalt shingles (GAF or CertainTeed) are our default — 25–30 year lifespan, Class 3 impact rating, and they match most Marietta neighborhood aesthetics. Premium and metal options are available.' },
  { q: 'Do you handle Marietta permit and code requirements?', a: 'Yes. We pull the Cobb County roofing permit, follow current code for underlayment and ridge ventilation, and leave you with the inspection sign-off.' },
  { q: 'Can you work with my insurance if the replacement is storm-related?', a: 'Absolutely. If hail or wind caused the damage, we document it, meet your adjuster, and handle supplements so your payout covers a full replacement rather than a patch.' },
  { q: 'What does a roof replacement cost in Marietta, GA?', a: 'Most full replacements run $8,000–$30,000 depending on size, pitch, and material. See our new roof cost guide for per-square pricing and real local quotes.' },
];

export default function RoofReplacementMariettaPage() {
  return (
    <>
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <Link href="/services/roof-replacement" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>
                ← Roof Replacement
              </Link>
              <span className="eyebrow dark" style={{ marginTop: 16, display: 'inline-block' }}>Marietta, GA</span>
              <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02, marginTop: 8 }}>
                Roof Replacement in Marietta, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680 }}>
                From historic Marietta squares to new builds near the Dobbins corridor, a roof replacement is an investment we treat seriously.
                Full tear-off, deck inspection, synthetic underlayment, and ridge vents — installed clean and built to last, backed by a
                manufacturer warranty on the shingles.
              </p>
              <p style={{ color: '#52606b', fontSize: '.98rem', marginTop: 12, maxWidth: 680, borderLeft: '3px solid var(--orange)', paddingLeft: 12 }}>
                Local note: Cobb County&apos;s tree canopy and spring storms make proper ventilation and impact-rated shingles matter here. We&apos;ve re-roofed everything from 1920s Craftsman homes near the square to large colonials out toward East Cobb — matching HOA-approved colors and clearing the permit inspection first try.
              </p>
              <div className="cta" style={{ marginTop: 28 }}>
                <a className="bigphone" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }} href={`tel:${brand.phone}`}>{brand.phone}</a>
                <Link className="btn btn-solid" href="/#contact" style={{ marginLeft: 16, verticalAlign: 'middle' }}>Get a free quote <span className="arr">→</span></Link>
              </div>

              <div style={{ marginTop: 32, padding: '1.3rem', background: '#fff', border: '1px solid rgba(22,29,37,.08)', borderRadius: 8 }}>
                <strong style={{ color: '#0b3d16' }}>What Marietta homeowners say</strong>
                <p style={{ color: '#52606b', fontSize: '.95rem', marginTop: 8, fontStyle: 'italic' }}>
                  “They guide me and was kind and caring so helpful not only with my roof repairs but other things also that I wouldn’t know.
                  They are my new roofing company and I will stick with them.”
                </p>
                <div style={{ color: '#8ea2b4', fontSize: '.85rem', marginTop: 4 }}>— A first-time homeowner, Marietta, GA</div>
              </div>
            </div>

            <div className="rv">
              <img src="/assets/service-replacement.webp" alt="Local Marietta, GA roof replacement — full tear-off and architectural shingle install by iRoofer Contractors" loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%', marginBottom: 24 }} />
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="contact" id="marietta-replacement-quote" source="Roof Replacement Marietta GA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Marietta, GA roof replacement FAQ</span>
            <h2>Questions Marietta homeowners ask us</h2>
          </div>
          <div className="faq-list rv">
            {faqs.map((f, i) => (
              <div className={`faq-item${i === 0 ? ' open' : ''}`} key={i}>
                <button className="faq-q" aria-expanded={i === 0 ? 'true' : 'false'}>{f.q}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/service-areas/marietta" className="btn btn-ink">More about our Marietta service area <span className="arr">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
