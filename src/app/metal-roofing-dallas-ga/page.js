import Link from 'next/link';
import RelatedGuides from '@/components/RelatedGuides';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo, absoluteUrl } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

// Metal roofing service page (added 2026-11-03, SEO autopilot Nov 2026).
// Target: "metal roofing dallas ga". Cristian confirmed iRoofer installs metal roofs and supplied
// the drone photos (standing-seam commercial projects). Do not name the businesses or locations
// in the photos. No prices, warranties, speed promises, or stats.

const PATH = '/metal-roofing-dallas-ga';

export const metadata = seo({
  title: "Metal Roofing in Dallas, GA | Standing Seam | iRoofer Contractors",
  description: "Standing-seam metal roofing in Dallas, GA and West Metro Atlanta for commercial buildings and homes. Free inspection and written scope. Call (470) 236-1410.",
  path: PATH,
});

const intro = "iRoofer Contractors installs standing-seam metal roofing in Dallas, GA and across West Metro Atlanta. We've put metal roofs on commercial buildings, and we install metal on homes too. Every job starts with a free inspection and a written scope, so you know what goes on your roof before any work begins.";
const photos = [
  { src: '/assets/metal-roof-commercial-1.webp', alt: 'Drone view of a standing-seam metal hip roof on a brick commercial storefront installed by iRoofer Contractors' },
  { src: '/assets/metal-roof-commercial-2.webp', alt: 'Aerial photo of a standing-seam metal roof on a brick commercial building, West Metro Atlanta' },
  { src: '/assets/metal-roof-commercial-3.webp', alt: 'Standing-seam metal hip roof section on a brick shopping center surrounded by flat roofs, drone photo' },
];
const sections = [
  {
    "h": "Standing-seam metal roofing for commercial buildings",
    "p": "Standing-seam panels run from the ridge to the eave with raised seams that lock together, so the fasteners sit hidden instead of punched through the face of the panel. The photos on this page are standing-seam hip roofs we installed on brick commercial storefronts. Hips, ridges, and the joints where metal meets brick walls or flat roof sections need careful flashing, and that's where we spend our time."
  },
  {
    "h": "Metal roofing for homes",
    "p": "We also install metal roofing on houses in Dallas, Hiram, Powder Springs, and nearby towns. Some homeowners want metal for the whole roof. Others use it on a porch, a low-slope section, or an accent area over a bay window. We'll walk the roof with you and tell you plainly whether metal makes sense for your house."
  },
  {
    "h": "Metal or shingles?",
    "p": "Metal costs more up front than asphalt shingles, and the right choice depends on your building, your budget, and how long you plan to stay. We compare both honestly in our guide to metal roofing pros and cons, and we'll put the options side by side in writing after the inspection."
  },
  {
    "h": "What you get",
    "p": "A free inspection, photos of your current roof, and a written scope that lists the panel type, the trim and flashing details, and how cleanup is handled. The price is in writing before anything starts."
  }
];
const faqs = [
  { "q": "Do you install standing-seam metal roofs?", "a": "Yes. We install standing-seam metal roofing on commercial buildings and homes in Dallas, GA and West Metro Atlanta." },
  { "q": "Do you do residential metal roofs?", "a": "Yes. We install metal on full roofs and on sections like porches and low-slope areas." },
  { "q": "How much does a metal roof cost?", "a": "It depends on the roof's size, pitch, panel type, and trim details. We don't publish prices. You get a written price after a free inspection." },
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
  description: 'Standing-seam metal roofing installation for commercial buildings and homes in Dallas, GA and West Metro Atlanta, with a free inspection and written scope.',
  image: photos.map((p) => absoluteUrl(p.src)),
  provider: {
    '@type': ['RoofingContractor', 'LocalBusiness'],
    '@id': `${brand.url}/#business`,
    name: brand.name,
    telephone: brand.phone,
    address: { '@type': 'PostalAddress', streetAddress: '152 Freedom Dr', addressLocality: 'Dallas', addressRegion: 'GA', postalCode: '30157', addressCountry: 'US' },
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
                Metal Roofing in Dallas, GA: Standing Seam for Commercial &amp; Homes
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
              <img src={photos[0].src} alt={photos[0].alt} width="1600" height="900" fetchPriority="high" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%', marginBottom: 24 }} />
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
            <span className="eyebrow dark">Our work</span>
            <h2>Standing-seam metal roofs we installed</h2>
          </div>
          <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))' }}>
            {photos.map((p) => (
              <img key={p.src} src={p.src} alt={p.alt} width="1600" height="900" loading="lazy" style={{ borderRadius: 8, width: '100%', height: 'auto' }} />
            ))}
          </div>
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
