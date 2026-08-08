import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand, services, cities } from '@/lib/brand';

export const metadata = {
  title: 'Roofing in Acworth, GA — iRoofer Contractors',
  description:
    'Local roofing in Dallas, GA (Paulding County). Our home base — same-day roof inspections across Dallas and across the county line. Free inspection, honest pricing, 5★ rated. Call (470) 236-1410.',
};

const city = {
  slug: 'acworth',
  name: 'Acworth',
  state: 'GA',
  county: 'Cobb County',
  blurb: 'leak repair, ventilation upgrades and full tear-offs across Acworth.',
  localNote: 'Acworth lakefront and in-town homes alike call us for fast leak tracing and clean tear-offs — we protect your landscaping and run a daily magnet nail-sweep.',
};

export default function AcworthPage() {
  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <Link href="/service-areas" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>← All service areas</Link>

        <div style={{ marginTop: 18 }}>
          <span className="eyebrow dark">Service area · {city.county}</span>
          <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02 }}>Roofing in {city.name}, {city.state}</h1>
          <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680 }}>
            iRoofer Contractors is a local, family-owned roofer serving {city.name} and nearby communities. {city.blurb} We handle roof repair, full replacement, new construction, and storm &amp; insurance claims — with free inspections and honest, upfront pricing.
          </p>
          <p style={{ color: '#52606b', fontSize: '1.02rem', marginTop: 12, maxWidth: 680, borderLeft: '3px solid var(--orange)', paddingLeft: 14 }}>
            {city.localNote}
          </p>
        </div>

        <div className="cards" style={{ marginTop: 36 }}>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="svc-card">
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{s.title} in {city.name}</h3>
              <p style={{ color: '#52606b', marginTop: 8, fontSize: '.95rem' }}>{s.summary}</p>
              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>Get a quote →</span>
            </Link>
          ))}
        </div>

        {/* SEO CONTENT BLOCKS */}
        <div style={{ marginTop: 48, maxWidth: 880 }}>
          <h2 style={{ fontSize: 'clamp(1.4rem,3vw,1.8rem)', fontWeight: 800, marginBottom: 16 }}>
            Trusted roofing services in {city.name}, {city.state}
          </h2>
          <p style={{ color: '#52606b', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: 16 }}>
            As a locally owned roofing company based in {city.county}, iRoofer Contractors understands the
            unique weather challenges that {city.name} homeowners face. From severe thunderstorms and hail
            to summer heat expansion and winter ice, we build and repair roofs that stand up to Georgia
            weather year after year.
          </p>
          <p style={{ color: '#52606b', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: 16 }}>
            We specialize in {city.name} roof repair, full roof replacement, new construction roofing, and
            storm &amp; insurance claim assistance. Every {city.name} roof inspection is free, with no
            obligation, and we walk you through every step — from permitting and material selection to
            the final warranty walkthrough.
          </p>
        </div>

        <div className="faq-grid" style={{ marginTop: 44, alignItems: 'start' }}>
          <div className="rv">
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 900 }}>Why {city.name} homeowners choose iRoofer</h2>
            <ul style={{ lineHeight: 2.1, color: '#52606b', marginTop: 12 }}>
              <li>Local &amp; family-owned — we live and roof in {city.county}.</li>
              <li>Free, no-pressure roof inspections with photos.</li>
              <li>Honest upfront pricing — no surprise line items.</li>
              <li>Storm &amp; insurance claim help, including adjuster meetings.</li>
              <li>Daily cleanup and magnetic nail sweeps on every job.</li>
              <li>5★ rated on Google with {brand.reviewCount} verified reviews.</li>
            </ul>
            <p style={{ marginTop: 18 }}>
              <a className="btn btn-ink" href="/estimator">Get an instant roof estimate <span className="arr">→</span></a>
            </p>
            <p style={{ marginTop: 14, color: '#52606b' }}>
              Other nearby areas: {cities.filter((x) => x.slug !== city.slug).map((x, i, arr) => (
                <span key={x.slug}>
                  <Link href={`/service-areas/${x.slug}`} style={{ color: 'var(--orange)' }}>{x.name}</Link>{i < arr.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </div>
          <div className="rv">
            <picture>
              <source srcSet="/assets/hero.webp" type="image/webp" />
              <img src="/assets/hero.jpg" alt="Roofing work in Acworth, GA" loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%' }} />
            </picture>
            <div style={{ maxWidth: 460, margin: '32px auto 0' }}>
              <QuoteForm variant="detail" id={`quote-${city.slug}`} source={`Service Area: ${city.name}`} />
            </div>
          </div>
        </div>

        {/* SEO KEYWORDS SECTION */}
        <div style={{ marginTop: 48, maxWidth: 880, fontSize: '0.95rem', lineHeight: 1.7, color: '#52606b' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem,3vw,1.8rem)', fontWeight: 800, marginBottom: 20 }}>
            {city.name} roofing services — what you need to know
          </h2>
          <p style={{ marginBottom: 12 }}>
            Whether you need emergency roof repair in {city.name}, a full roof replacement on your
            {city.name} home, or new construction roofing for a builder project, iRoofer Contractors
            brings the same family-owned service to every {city.name} neighborhood. We're licensed,
            bonded, and insured in Georgia, and we carry the manufacturer warranties that protect
            your investment for decades.
          </p>
          <p style={{ marginBottom: 12 }}>
            <strong>Roof repair in {city.name}</strong> — From storm damage and hail dents to worn
            flashing and mysterious leaks, we trace the source and fix it right. Most {city.name}
            emergency repairs are completed the same day, with a 2-year workmanship warranty.
          </p>
          <p style={{ marginBottom: 12 }}>
            <strong>Roof replacement in {city.name}</strong> — Full tear-off to the deck, ice & water
            shield, synthetic underlayment, and architectural shingles installed to manufacturer spec.
            We handle the permit, coordinate with your {city.name} inspector, and do a magnetic nail
            sweep so your family and pets stay safe.
          </p>
          <p style={{ marginBottom: 12 }}>
            <strong>New construction roofing in {city.name}</strong> — We partner with local builders
            and homeowners to install design-matched roofs on new homes. From shingle selection to
            final walkthrough and warranty setup — we keep your build on schedule.
          </p>
          <p style={{ marginBottom: 12 }}>
            <strong>Storm &amp; insurance claim help in {city.name}</strong> — After a Georgia storm,
            we document all damage with photos, write a full scope of work, and meet your insurance
            adjuster on-site. We handle supplements and paperwork so you're never fronting the cost.
          </p>
          <p>
            Based in Dallas ({brand.phone}), we serve {city.name} and all of {city.county} with free,
            no-pressure roof inspections. Call today — we answer our own phones.
          </p>
        </div>

        {/* LOCAL FAQ SECTION */}
        <div style={{ marginTop: 48, maxWidth: 880 }}>
          <h2 style={{ fontSize: 'clamp(1.4rem,3vw,1.8rem)', fontWeight: 800, marginBottom: 20 }}>
            Frequently asked questions about roofing in {city.name}, {city.state}
          </h2>
          <div style={{ display: 'grid', gap: 16 }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 6, color: 'var(--ink)' }}>
                How much does a roof replacement cost in {city.name}?
              </h3>
              <p style={{ margin: 0 }}>
                Most residential roof replacements in {city.name} range from $3,500 to $12,000
                depending on roof size, pitch, and materials. We provide a detailed, line-item-free
                estimate after a free on-site inspection — no surprises.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 6, color: 'var(--ink)' }}>
                What roofing materials do you recommend for {city.name} weather?
              </h3>
              <p style={{ margin: 0 }}>
                For {city.name} homes we typically recommend architectural asphalt shingles (Class A
                fire rating) with ice &amp; water shield in the eaves and synthetic underlayment.
                This combination handles Georgia's heat, hail, and occasional winter ice best.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 6, color: 'var(--ink)' }}>
                Do you offer emergency roof repair in {city.name}?
              </h3>
              <p style={{ margin: 0 }}>
                Yes — 24/7 emergency tarping and storm damage repair for {city.name} homeowners. We
                respond same-day for active leaks, document damage for insurance, and complete
                permanent repairs within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
