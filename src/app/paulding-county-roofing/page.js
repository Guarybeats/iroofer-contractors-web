import Link from 'next/link';
import RelatedGuides from '@/components/RelatedGuides';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: "Paulding County Roofing Contractor | iRoofer Contractors",
  description: "Roof repair, replacement, and storm damage help across Paulding County, GA, from a family-owned roofer based in Dallas since 2019. Free inspection.",
  path: '/paulding-county-roofing',
});

const intro = "iRoofer Contractors is based at 152 Freedom Dr in Dallas, the Paulding County seat, and has roofed homes here since 2019. Whether you are in Dallas, Hiram, or out along Hwy 278 and Hwy 92, you get a local crew that can be on your roof quickly, a free inspection with photos, and a written price before any work starts.";
const sections = [
  {
    "h": "Roof repair across Paulding County",
    "p": "Leaks, lifted flashing, cracked pipe boots, and missing shingles are most of what we fix in Paulding County. We find the source, repair it to manufacturer spec, and tell you honestly when a repair is no longer worth it."
  },
  {
    "h": "Roof replacement",
    "p": "Full tear-off, decking inspection, synthetic underlayment, ice and water shield at eaves and valleys, and architectural shingles. We install Owens Corning shingles as an Owens Corning Contractor Rewards member when that line fits the home."
  },
  {
    "h": "Storm and hail damage",
    "p": "Spring storms move through Paulding County every year. After hail or high wind we inspect for free, tarp when a roof is open to the weather, and document damage with photos you can share with your insurance adjuster."
  },
  {
    "h": "New construction in Paulding County",
    "p": "We work with builders and homeowners on new homes across the county, from plan review and dry-in to the finished roof and closeout photos."
  },
  {
    "h": "Just across the county line",
    "p": "Paulding borders Cobb and Douglas counties, so we also cover Powder Springs, Acworth, Kennesaw, Marietta, Austell, and Douglasville with the same crew and the same free inspection."
  }
];
const faqs = [
  {
    "q": "Are you actually based in Paulding County?",
    "a": "Yes. Our office is at 152 Freedom Dr in Dallas, GA 30157, the Paulding County seat."
  },
  {
    "q": "Which Paulding County towns do you serve?",
    "a": "Dallas and Hiram, plus the unincorporated areas around them. We have dedicated pages for both."
  },
  {
    "q": "Is the inspection free?",
    "a": "Yes. Roof inspections are free with no obligation."
  },
  {
    "q": "Do you help with insurance claims?",
    "a": "We document storm damage with photos and can meet your adjuster. Approval depends on your policy and your carrier."
  },
  {
    "q": "How do I reach you?",
    "a": "Call (470) 236-1410, Monday to Friday 9am to 7pm and Saturday 9am to 5pm, or use the form on this page."
  }
];
const relatedLinks = [
  {
    "href": "/dallas-ga-roofing/",
    "label": "Dallas GA roofing"
  },
  {
    "href": "/service-areas/hiram/",
    "label": "Roofing in Hiram"
  },
  {
    "href": "/services/roof-inspection/",
    "label": "Free roof inspection"
  },
  {
    "href": "/services/roof-insurance-claims/",
    "label": "Roof insurance claims"
  },
  {
    "href": "/service-areas/powder-springs/",
    "label": "Roofing in Powder Springs"
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
              <Link href="/service-areas/" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>
                ← Service areas
              </Link>
              <span className="eyebrow dark" style={{ marginTop: 16, display: 'inline-block' }}>Paulding County, GA</span>
              <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02, marginTop: 8 }}>
                Paulding County Roofing: Repair, Replacement & Storm Damage
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680, lineHeight: 1.7 }}>
                {intro}
              </p>
              <div className="cta" style={{ marginTop: 28 }}>
                <a className="bigphone" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }} href={`tel:${brand.phone}`}>{brand.phone}</a>
                <Link className="btn btn-solid" href="/contact/" style={{ marginLeft: 16, verticalAlign: 'middle' }}>Get a free inspection <span className="arr">→</span></Link>
              </div>
            </div>

            <div className="rv">
              <img src="/assets/service-replacement.webp?v=3" alt="Roof replacement on a Paulding County, GA home by iRoofer Contractors" loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%', marginBottom: 24 }} />
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="contact" id="paulding-county-quote" source="Paulding County Roofing" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {sections.map((sec) => (
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
            <span className="eyebrow dark">FAQ</span>
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
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Services</span>
            <h2>Where to go next</h2>
          </div>
          <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))' }}>
            <Link key="/roof-repair-dallas-ga/" href="/roof-repair-dallas-ga/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Roof Repair in Dallas</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="/roof-repair-hiram/" href="/roof-repair-hiram/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Roof Repair in Hiram</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="/roof-replacement-dallas-ga/" href="/roof-replacement-dallas-ga/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Roof Replacement in Dallas</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="/roof-replacement-hiram/" href="/roof-replacement-hiram/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Roof Replacement in Hiram</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="/storm-damage-roof-repair-dallas-ga/" href="/storm-damage-roof-repair-dallas-ga/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Storm Damage in Dallas</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="/storm-damage-roof-repair-hiram/" href="/storm-damage-roof-repair-hiram/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Storm Damage in Hiram</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="/new-construction-dallas-ga/" href="/new-construction-dallas-ga/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>New Construction in Dallas</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="/gutter-repair-replacement-dallas-ga/" href="/gutter-repair-replacement-dallas-ga/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Gutters in Dallas</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
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
          <RelatedGuides slug="roof-replacement" heading="Local roofing guides" />
        </div>
      </section>
      <FaqSchema faq={faqs} />
    </>
  );
}
