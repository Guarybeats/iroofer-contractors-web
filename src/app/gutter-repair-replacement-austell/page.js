import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
function faqItem(open){ return 'faq-item' + (open ? ' open' : ''); }
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: 'Gutter Repair & Replacement in Austell, GA',
  description: "Gutter Repair & Replacement in Austell, GA — Clogged or failing gutters are the #1 cause of preventable roof and foundation damage. We repair, realign, and replace. Local, family-owned, 5★ on Google, free inspection. Call (470) 236-1410.",
  path: '/gutter-repair-replacement-austell',
});

const faqs = [
  {
    "q": "Do you offer gutter repair & replacement in Austell, GA?",
    "a": "Yes. Gutter Repair & Replacement is one of our core services across Cobb County and the greater Atlanta metro. When a storm hits Austell we tarp the same day and meet your adjuster on-site."
  },
  {
    "q": "How fast can you start a gutter repair & replacement job in Austell?",
    "a": "Most Austell jobs are scheduled within 24–72 hours after a free inspection. Emergency leaks get priority scheduling."
  },
  {
    "q": "Do you handle permits for Austell, GA?",
    "a": "Yes. We pull the local roofing permit, follow current code for underlayment and ventilation, and leave you with the inspection sign-off."
  },
  {
    "q": "Will my insurance cover this in Cobb County?",
    "a": "If the damage is storm- or hail-related, it often is. We document everything, meet your adjuster on-site, and handle supplements so your payout reflects the true scope."
  },
  {
    "q": "What does gutter repair & replacement cost in Austell, GA?",
    "a": "It depends on size, pitch, and material — we give a free, written quote after inspection. Most repairs run $250–$3,500; full replacements $8,000–$30,000."
  }
];

export default function Page() {
  return (
    <>
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <Link href="/services/gutter-repair-replacement" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>
                ← Gutter Repair & Replacement
              </Link>
              <span className="eyebrow dark" style={{ marginTop: 16, display: 'inline-block' }}>Austell, GA</span>
              <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02, marginTop: 8 }}>
                Gutter Repair & Replacement in Austell, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680 }}>
                Clogged or failing gutters are the #1 cause of preventable roof and foundation damage. We repair, realign, and replace. In Austell, GA (Cobb County) we bring the same local crew, the same warranty,
                and the same phone number to every job. When a storm hits Austell we tarp the same day and meet your adjuster on-site.
              </p>
              <div className="cta" style={{ marginTop: 28 }}>
                <a className="bigphone" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }} href={`tel:${brand.phone}`}>{brand.phone}</a>
                <Link className="btn btn-solid" href="/#contact" style={{ marginLeft: 16, verticalAlign: 'middle' }}>Get a free quote <span className="arr">→</span></Link>
              </div>

              <div style={{ marginTop: 32, padding: '1.3rem', background: '#fff', border: '1px solid rgba(22,29,37,.08)', borderRadius: 8 }}>
                <strong style={{ color: '#0b3d16' }}>What Austell homeowners say</strong>
                <p style={{ color: '#52606b', fontSize: '.95rem', marginTop: 8, fontStyle: 'italic' }}>
                  “Cristian was extremely professional and had excellent customer service skills. From the roof inspection to roof installation, it was an awesome experience.”
                </p>
                <div style={{ color: '#8ea2b4', fontSize: '.85rem', marginTop: 4 }}>— Kay Hillery, Dallas, GA</div>
              </div>
            </div>

            <div className="rv">
              <img src="/assets/service-gutters-main.webp" alt="Gutter Repair & Replacement in Austell, GA by iRoofer Contractors" loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%', marginBottom: 24 }} />
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="contact" id="gutter-repair-replacement-austell-quote" source="Gutter Repair & Replacement Austell GA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Austell, GA Gutter Repair & Replacement FAQ</span>
            <h2>Questions Austell homeowners ask us</h2>
          </div>
          <div className="faq-list rv">
              <div className={faqItem(true)}>
                <button className="faq-q" aria-expanded={true}>{"Do you offer gutter repair & replacement in Austell, GA?"}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{"Yes. Gutter Repair & Replacement is one of our core services across Cobb County and the greater Atlanta metro. When a storm hits Austell we tarp the same day and meet your adjuster on-site."}</p></div></div>
              </div>
              <div className={faqItem(false)}>
                <button className="faq-q" aria-expanded={false}>{"How fast can you start a gutter repair & replacement job in Austell?"}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{"Most Austell jobs are scheduled within 24–72 hours after a free inspection. Emergency leaks get priority scheduling."}</p></div></div>
              </div>
              <div className={faqItem(false)}>
                <button className="faq-q" aria-expanded={false}>{"Do you handle permits for Austell, GA?"}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{"Yes. We pull the local roofing permit, follow current code for underlayment and ventilation, and leave you with the inspection sign-off."}</p></div></div>
              </div>
              <div className={faqItem(false)}>
                <button className="faq-q" aria-expanded={false}>{"Will my insurance cover this in Cobb County?"}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{"If the damage is storm- or hail-related, it often is. We document everything, meet your adjuster on-site, and handle supplements so your payout reflects the true scope."}</p></div></div>
              </div>
              <div className={faqItem(false)}>
                <button className="faq-q" aria-expanded={false}>{"What does gutter repair & replacement cost in Austell, GA?"}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{"It depends on size, pitch, and material — we give a free, written quote after inspection. Most repairs run $250–$3,500; full replacements $8,000–$30,000."}</p></div></div>
              </div>
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/service-areas/austell" className="btn btn-ink">More about our Austell service area <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">More Austell roofing services</span>
            <h2>Other services we offer in Austell, GA</h2>
          </div>
          <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))' }}>
            <Link key="roof-repair" href="/roof-repair-austell" className="svc-card">
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Roof Repair in Austell</h4>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="roof-replacement" href="/roof-replacement-austell" className="svc-card">
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Roof Replacement in Austell</h4>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="new-construction" href="/new-construction-austell" className="svc-card">
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>New Construction in Austell</h4>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="storm-damage-roof-repair" href="/storm-damage-roof-repair-austell" className="svc-card">
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Storm Damage Roof Repair in Austell</h4>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
          </div>
        </div>
      </section>
      <FaqSchema faq={faqs} />
    </>
  );
}
