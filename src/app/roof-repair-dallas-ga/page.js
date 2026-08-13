import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Roof Repair in Dallas, GA | Leak & Storm Fixes | iRoofer Contractors',
  description:
    'Local roof repair in Dallas, GA — leak fixes, shingle & flashing repair, storm damage, and emergency tarping. Family-owned, 5★ on Google, free inspection. Call (470) 236-1410.',
  path: '/roof-repair-dallas-ga',
});

const faqs = [
  { q: 'How fast can you repair a roof leak in Dallas, GA?', a: 'For active leaks we offer same-day emergency tarping and usually schedule the repair within 24–48 hours. Most Dallas ranch and two-story repairs are completed in a single visit.' },
  { q: 'Do you charge for a roof repair inspection in Dallas?', a: 'No. Every repair starts with a free, no-pressure inspection. We show you photos of the damage and a written price before any work begins.' },
  { q: 'Can you repair just a few missing shingles after a storm?', a: 'Yes. If the damage is isolated to one slope or a small area and the rest of the roof is sound, we patch-match architectural shingles instead of recommending a full replacement.' },
  { q: 'Will my Dallas homeowner’s insurance cover the repair?', a: 'If the damage is storm- or hail-related, it often is. We document everything for your claim and meet your adjuster on-site. If it’s below your deductible, we’ll tell you straight.' },
  { q: 'What does a typical roof repair cost in Dallas, GA?', a: 'Most repairs run $250–$3,500. A single leak patch is usually $250–$600; valley or chimney flashing runs $600–$1,400. See our roof repair cost guide for full ranges.' },
];

export default function RoofRepairDallasPage() {
  return (
    <>
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <Link href="/services/roof-repair" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>
                ← Roof Repair
              </Link>
              <span className="eyebrow dark" style={{ marginTop: 16, display: 'inline-block' }}>Dallas, GA</span>
              <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02, marginTop: 8 }}>
                Roof Repair in Dallas, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680 }}>
                A leak in a Dallas home rarely waits. Whether it’s a blown-off shingle off Hwy 92, a pipe-boot leak in a Silver Comet
                subdivision, or storm damage after a Paulding County straight-line wind, we find the source and fix it right — so a small
                problem stays small. Free inspection, honest pricing, local crew.
              </p>
              <div className="cta" style={{ marginTop: 28 }}>
                <a className="bigphone" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }} href={`tel:${brand.phone}`}>{brand.phone}</a>
                <Link className="btn btn-solid" href="/#contact" style={{ marginLeft: 16, verticalAlign: 'middle' }}>Get a free quote <span className="arr">→</span></Link>
              </div>

              <div style={{ marginTop: 32, padding: '1.3rem', background: '#fff', border: '1px solid rgba(22,29,37,.08)', borderRadius: 8 }}>
                <strong style={{ color: '#0b3d16' }}>What Dallas homeowners say</strong>
                <p style={{ color: '#52606b', fontSize: '.95rem', marginTop: 8, fontStyle: 'italic' }}>
                  “I roofers were very professional and competitively priced. The project manager/owner is knowledgeable, experienced and patient.
                  He led through each step of the process of repairing and replacing my roof. I highly recommend Iroofers.”
                </p>
                <div style={{ color: '#8ea2b4', fontSize: '.85rem', marginTop: 4 }}>— Tyrone DeNeal, Sr., Dallas, GA</div>
              </div>
            </div>

            <div className="rv">
              <img src="/assets/service-repair.webp" alt="Local Dallas, GA roof repair — shingle and flashing fix by iRoofer Contractors" loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%', marginBottom: 24 }} />
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="contact" id="dallas-repair-quote" source="Roof Repair Dallas GA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Dallas, GA roof repair FAQ</span>
            <h2>Questions Dallas homeowners ask us</h2>
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
            <Link href="/service-areas/dallas-ga" className="btn btn-ink">More about our Dallas, GA service area <span className="arr">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
