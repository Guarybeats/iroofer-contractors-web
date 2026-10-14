import Link from 'next/link';
import RelatedGuides from '@/components/RelatedGuides';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: "Free Roof Inspection in Dallas, GA | iRoofer Contractors",
  description: "Free roof inspection in Dallas, GA and West Metro Atlanta: on-roof or drone check, photo documentation, and a plain-English report. Call (470) 236-1410.",
  path: '/services/roof-inspection',
});

const intro = "A roof can look fine from the driveway and still have lifted flashing, cracked pipe boots, or hail bruising that turns into a leak next season. iRoofer Contractors, family-owned in Dallas since 2019, inspects roofs free across Paulding, Cobb, and Douglas counties. You get photos of what we found and a straight answer on whether it needs a repair, a replacement, or nothing at all.";
const sections = [
  {
    "h": "What we check on the roof",
    "p": "Shingles for missing, creased, or bruised tabs; flashing at chimneys, walls, and valleys; pipe boots and vents; ridge and starter courses; and soft spots in the decking. When the roof is too steep or fragile to walk, we use a drone to get close-up photos without risking more damage."
  },
  {
    "h": "What we check below the roof",
    "p": "When the attic is accessible we look for water stains, daylight at the decking, and ventilation problems that cook shingles from underneath in a Georgia summer. Gutters and fascia get a look too, since overflow there often shows up as a roof complaint."
  },
  {
    "h": "What you get afterward",
    "p": "Photos of each problem area and a plain-English summary of what we found. If something needs work, you get a written scope and price before any tools come out. If the roof is in good shape, we tell you that too."
  },
  {
    "h": "After a storm and for insurance claims",
    "p": "After hail or high wind, we document damage with dated photos your adjuster can act on. Whether a claim makes sense depends on your policy and the damage, and we will tell you plainly if we do not think it rises to a claim."
  },
  {
    "h": "Buying or selling a home",
    "p": "A pre-listing or pre-purchase inspection shows the roof's real condition before it becomes a negotiation surprise. We note the visible age and wear and the repairs that would extend its life."
  }
];
const faqs = [
  {
    "q": "Is the roof inspection really free?",
    "a": "Yes. Inspections are free and come with no obligation to hire us for the work."
  },
  {
    "q": "Do you use drones?",
    "a": "Yes, when it helps. Drones get close-up photos of steep or fragile roofs without walking on them. On most roofs we also inspect in person."
  },
  {
    "q": "Will you help with my insurance claim?",
    "a": "We document storm damage with photos and can meet your adjuster on the roof. Coverage and approval depend on your policy and your carrier."
  },
  {
    "q": "What areas do you inspect?",
    "a": "Dallas and Hiram in Paulding County, plus Powder Springs, Marietta, Kennesaw, Acworth, Austell, Douglasville and nearby West Metro Atlanta towns."
  },
  {
    "q": "How do I book?",
    "a": "Call (470) 236-1410 or use the form on this page. We are open Monday to Friday 9am to 7pm and Saturday 9am to 5pm."
  }
];
const relatedLinks = [
  {
    "href": "/dallas-ga-roofing/",
    "label": "Dallas GA roofing hub"
  },
  {
    "href": "/paulding-county-roofing/",
    "label": "Paulding County roofing"
  },
  {
    "href": "/services/roof-insurance-claims/",
    "label": "Roof insurance claims"
  },
  {
    "href": "/blog/georgia-hail-storm-roof-checklist/",
    "label": "Georgia hail storm roof checklist"
  },
  {
    "href": "/blog/georgia-winter-roof-inspection/",
    "label": "Georgia winter roof inspection guide"
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
              <Link href="/services/" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>
                ← All services
              </Link>
              <span className="eyebrow dark" style={{ marginTop: 16, display: 'inline-block' }}>Free roof inspection</span>
              <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02, marginTop: 8 }}>
                Free Roof Inspection in Dallas, GA & West Metro Atlanta
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
              <img src="/assets/service-repair.webp?v=3" alt="Roof inspection by iRoofer Contractors in Dallas, GA" loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%', marginBottom: 24 }} />
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="contact" id="roof-inspection-quote" source="Roof Inspection" />
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
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Roof Repair in Dallas, GA</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="/roof-replacement-dallas-ga/" href="/roof-replacement-dallas-ga/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Roof Replacement in Dallas, GA</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="/storm-damage-roof-repair-dallas-ga/" href="/storm-damage-roof-repair-dallas-ga/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Storm Damage Roof Repair in Dallas, GA</h3>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>
            </Link>
            <Link key="/emergency-roof-repair-dallas-ga/" href="/emergency-roof-repair-dallas-ga/" className="svc-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Emergency Roof Repair in Dallas, GA</h3>
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
          <RelatedGuides slug="roof-repair" heading="Local roofing guides" />
        </div>
      </section>
      <FaqSchema faq={faqs} />
    </>
  );
}
