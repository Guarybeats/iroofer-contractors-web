import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
function faqItem(open){ return 'faq-item' + (open ? ' open' : ''); }
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: "New Construction in Dallas, GA | iRoofer Contractors",
  description: "New Construction in Dallas, GA — We partner with builders and homeowners on new builds to install a roof that matches the design and the budget. Local, family-owned, 5★ on Google, free inspection. Call (470) 236-1410.",
  path: '/new-construction-dallas-ga',
});

const faqs = [
  {
    "q": "Do you offer new construction in Dallas, GA?",
    "a": "Yes. New Construction is one of our core services across Paulding County and the greater Atlanta metro. As the town we call home, Dallas homeowners get priority scheduling and the crew chief on every job."
  },
  {
    "q": "How fast can you start a new construction job in Dallas?",
    "a": "Most Dallas jobs are scheduled within 24–72 hours after a free inspection. Emergency leaks get priority scheduling."
  },
  {
    "q": "Do you handle permits for Dallas, GA?",
    "a": "Yes. We pull the local roofing permit, follow current code for underlayment and ventilation, and leave you with the inspection sign-off."
  },
  {
    "q": "Will my insurance cover this in Paulding County?",
    "a": "If the damage is storm- or hail-related, it often is. We document everything, meet your adjuster on-site, and handle supplements so your payout reflects the true scope."
  },
  {
    "q": "What does new construction cost in Dallas, GA?",
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
              <Link href="/services/new-construction" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>
                ← New Construction
              </Link>
              <span className="eyebrow dark" style={{ marginTop: 16, display: 'inline-block' }}>Dallas, GA</span>
              <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02, marginTop: 8 }}>
                New Construction in Dallas, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680 }}>
                We partner with builders and homeowners on new builds to install a roof that matches the design and the budget. In Dallas, GA (Paulding County) we bring the same local crew, the same warranty,
                and the same phone number to every job. As the town we call home, Dallas homeowners get priority scheduling and the crew chief on every job.
              </p>
              <div className="cta" style={{ marginTop: 28 }}>
                <a className="bigphone" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }} href={`tel:${brand.phone}`}>{brand.phone}</a>
                <Link className="btn btn-solid" href="/#contact" style={{ marginLeft: 16, verticalAlign: 'middle' }}>Get a free quote <span className="arr">→</span></Link>
              </div>

              <div style={{ marginTop: 32, padding: '1.3rem', background: '#fff', border: '1px solid rgba(22,29,37,.08)', borderRadius: 8 }}>
                <strong style={{ color: '#0b3d16' }}>What Dallas homeowners say</strong>
                <p style={{ color: '#52606b', fontSize: '.95rem', marginTop: 8, fontStyle: 'italic' }}>
                  “They did very well with my old roof. The house looks new! Cristian and the crew went that extra mile on everything! I highly recommend them. It poured down rain this morning, and there were NO LEAKS.”
                </p>
                <div style={{ color: '#8ea2b4', fontSize: '.85rem', marginTop: 4 }}>— Jill Kerns, Dallas, GA</div>
              </div>
            </div>

            <div className="rv">
              <img src="/assets/service-newconstruction.webp" alt="New Construction in Dallas, GA by iRoofer Contractors" loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%', marginBottom: 24 }} />
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="contact" id="new-construction-dallas-ga-quote" source="New Construction Dallas GA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Dallas, GA New Construction FAQ</span>
            <h2>Questions Dallas homeowners ask us</h2>
          </div>
          <div className="faq-list rv">
              <div className={faqItem(true)}>
                <button className="faq-q" aria-expanded={true}>{"Do you offer new construction in Dallas, GA?"}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{"Yes. New Construction is one of our core services across Paulding County and the greater Atlanta metro. As the town we call home, Dallas homeowners get priority scheduling and the crew chief on every job."}</p></div></div>
              </div>
              <div className={faqItem(false)}>
                <button className="faq-q" aria-expanded={false}>{"How fast can you start a new construction job in Dallas?"}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{"Most Dallas jobs are scheduled within 24–72 hours after a free inspection. Emergency leaks get priority scheduling."}</p></div></div>
              </div>
              <div className={faqItem(false)}>
                <button className="faq-q" aria-expanded={false}>{"Do you handle permits for Dallas, GA?"}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{"Yes. We pull the local roofing permit, follow current code for underlayment and ventilation, and leave you with the inspection sign-off."}</p></div></div>
              </div>
              <div className={faqItem(false)}>
                <button className="faq-q" aria-expanded={false}>{"Will my insurance cover this in Paulding County?"}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{"If the damage is storm- or hail-related, it often is. We document everything, meet your adjuster on-site, and handle supplements so your payout reflects the true scope."}</p></div></div>
              </div>
              <div className={faqItem(false)}>
                <button className="faq-q" aria-expanded={false}>{"What does new construction cost in Dallas, GA?"}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{"It depends on size, pitch, and material — we give a free, written quote after inspection. Most repairs run $250–$3,500; full replacements $8,000–$30,000."}</p></div></div>
              </div>
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/service-areas/dallas-ga" className="btn btn-ink">More about our Dallas service area <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">More Dallas roofing services</span>
            <h2>Other services we offer in Dallas, GA</h2>
          </div>
          <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))' }}>
            <Link key="roof-repair" href="/roof-repair-dallas-ga" className="svc-card">
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Roof Repair in Dallas</h4>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="roof-replacement" href="/roof-replacement-dallas-ga" className="svc-card">
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Roof Replacement in Dallas</h4>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="storm-damage-roof-repair" href="/storm-damage-roof-repair-dallas-ga" className="svc-card">
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Storm Damage Roof Repair in Dallas</h4>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="gutter-repair-replacement" href="/gutter-repair-replacement-dallas-ga" className="svc-card">
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Gutter Repair & Replacement in Dallas</h4>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
          </div>
        </div>
      </section>
      <FaqSchema faq={faqs} />
    </>
  );
}
