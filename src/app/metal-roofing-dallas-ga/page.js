import Link from 'next/link';
import RelatedGuides from '@/components/RelatedGuides';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo, absoluteUrl } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

// Metal roofing service page (added 2026-11-03; made residential-only 2026-11-24 per owner:
// no commercial work in any copy). No photos until the owner supplies a residential metal job.
// No prices, warranty terms, specs, speed promises, or stats.

const PATH = '/metal-roofing-dallas-ga';

export const metadata = seo({
  title: "Metal Roofing in Dallas, GA | Homes | iRoofer Contractors",
  description: "Residential metal roofing for homes in Dallas, GA and West Metro Atlanta. Full roofs, porches and low-slope sections. Free inspection. Call (470) 236-1410.",
  path: PATH,
});

const intro = "iRoofer Contractors installs metal roofing on homes in Dallas, GA and across West Metro Atlanta. Some homeowners want metal over the whole house. Others use it on a porch, a low-slope section or an accent area. Every job starts with a free inspection and a written scope, so you know what goes on your roof before any work begins.";
const photos = [];
const sections = [
  {
    "h": "Metal roofing for homes",
    "p": "We install metal roofing on houses in Dallas, Hiram, Powder Springs and nearby towns. Standing-seam panels run from the ridge to the eave with raised seams that lock together, so the fasteners sit hidden instead of punched through the face of the panel. Hips, valleys, chimneys and the joints where metal meets shingles or siding need careful flashing, and that's where we spend our time."
  },
  {
    "h": "Full roof or just one section",
    "p": "A full metal roof isn't the only option. Metal works well on a covered porch, a low-slope addition, or the small roof over a bay window, where shingles struggle to shed water. We'll walk the roof with you and tell you plainly whether metal makes sense for your house, and where."
  },
  {
    "h": "Metal or shingles?",
    "p": "Metal costs more up front than asphalt shingles, and the right choice depends on your house, your budget and how long you plan to stay. We compare both honestly in our guide to metal roofing pros and cons, and we'll put the options side by side in writing after the inspection."
  },
  {
    "h": "What you get",
    "p": "A free inspection, photos of your current roof, and a written scope that lists the trim and flashing details and how cleanup is handled. The price is in writing before anything starts, and we stand behind our work with a written warranty."
  }
];
const faqs = [
  { "q": "Do you install metal roofs on homes?", "a": "Yes. We install residential metal roofing in Dallas, GA and West Metro Atlanta, on full roofs and on sections like porches and low-slope areas." },
  { "q": "How much does a metal roof cost?", "a": "It depends on the roof's size, pitch, panel type and trim details. We don't publish prices. You get a written price after a free inspection." },
  { "q": "Can metal go over my existing shingles?", "a": "Sometimes, depending on the roof's condition and local code. We'll check the decking and tell you after the inspection." },
  { "q": "How do I get started?", "a": "Call (470) 236-1410 or use the form on this page. We are open Monday to Friday 9am to 7pm and Saturday 9am to 5pm." }
];
const relatedLinks = [
  { "href": "/blog/metal-roofing-pros-cons-dallas/", "label": "Metal roofing pros and cons" },
  { "href": "/blog/choosing-roofing-materials-dallas-ga/", "label": "Choosing roofing materials" },
  { "href": "/roof-replacement-dallas-ga/", "label": "Roof replacement in Dallas, GA" },
  { "href": "/services/roof-inspection/", "label": "Free roof inspection" },
  { "href": "/contact/", "label": "Contact iRoofer" }
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${absoluteUrl(PATH)}#service`,
  name: 'Metal Roofing in Dallas, GA',
  serviceType: 'Metal roofing installation',
  url: absoluteUrl(PATH),
  description: 'Residential metal roofing installation for homes in Dallas, GA and West Metro Atlanta, with a free inspection and written scope.',
  provider: {
    '@type': ['RoofingContractor', 'LocalBusiness'],
    '@id': `${brand.url}/#business`,
    name: brand.name,
    telephone: brand.phone,
    address: { '@type': 'PostalAddress', addressLocality: 'Dallas', addressRegion: 'GA', postalCode: '30157', addressCountry: 'US' },
  },
  areaServed: [
    { '@type': 'City', name: 'Dallas', containedInPlace: { '@type': 'AdministrativeArea', name: 'Paulding County' } },
    { '@type': 'City', name: 'Hiram' },
    { '@type': 'City', name: 'Powder Springs' },
    { '@type': 'City', name: 'Douglasville' },
    { '@type': 'City', name: 'Marietta' },
    { '@type': 'AdministrativeArea', name: 'Paulding County' },
  ],
};

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
              <span className="eyebrow dark" style={{ marginTop: 16, display: 'inline-block' }}>Metal roofing</span>
              <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02, marginTop: 8 }}>
                Metal Roofing for Homes in Dallas, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680, lineHeight: 1.7 }}>
                {intro}
              </p>
              <div className="cta" style={{ marginTop: 28 }}>
                <a className="bigphone" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }} href={`tel:${brand.phone}`}>{brand.phone}</a>
                <Link className="btn btn-solid" href="/contact/" style={{ marginLeft: 16, verticalAlign: 'middle' }}>Get a free metal roof quote <span className="arr">→</span></Link>
              </div>
            </div>

            <div className="rv">
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="contact" id="metal-roofing-quote" source="Metal Roofing" />
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
            <h2>Metal roofing questions</h2>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
