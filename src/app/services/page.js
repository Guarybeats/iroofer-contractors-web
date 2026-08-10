import Link from 'next/link';
import { services, brand } from '@/lib/brand';

export const metadata = {
  alternates: { canonical: 'https://iroofercontractors.com/services' },
  openGraph: { url: 'https://iroofercontractors.com/services' },

  title: 'Roofing Services — iRoofer Contractors',
  description: `Dallas, GA roofing services since 2019. Roof repair, full replacement, new construction, and storm & insurance claims. Same local crew, same warranty, same phone number. ${brand.phone}`,
};

export default function ServicesPage() {
  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="sec-head rv" style={{ marginBottom: 56 }}>
          <span className="eyebrow dark">What we do</span>
          <h1 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', fontWeight: 900 }}>Roofing Services — iRoofer Contractors</h1>
          <p style={{ color: '#52606b', fontSize: '1.02rem', marginTop: 12, maxWidth: 680 }}>
            From a quick repair to a full replacement, every job is done by the same local crew —
            with the same warranty and the same phone number. Based in Dallas, GA, we serve residential
            homeowners and builders across Paulding, Douglas, and Cobb counties.
          </p>
        </div>
        <div className="cards">
          {services.map((s) => (
            <Link className="card" key={s.slug} href={`/services/${s.slug}`} style={{ color: 'inherit' }}>
              <picture>
                <source srcSet={s.webp} type="image/webp" />
                <img src={s.image} alt={s.title} loading="lazy" />
              </picture>
              <div className="body">
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <span className="more">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO CONTENT */}
        <div style={{ marginTop: 48, maxWidth: 880, fontSize: '0.95rem', lineHeight: 1.7, color: '#52606b' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem,3vw,1.8rem)', fontWeight: 800, marginBottom: 20 }}>
            Dallas, GA roofing services — what we handle
          </h2>
          <p style={{ marginBottom: 12 }}>
            Whether you need a small repair after a Georgia storm or a full roof replacement on your
            Dallas home, iRoofer Contractors brings 150+ completed roofs of experience to every job.
            We're a locally owned, family-operated company founded in 2019, and we treat every roof
            like it belongs to one of our neighbors — because in a town this size, it usually does.
          </p>
          <p style={{ marginBottom: 12 }}>
            <strong>Roof repair in Dallas, GA</strong> — From storm damage and hail dents to worn
            flashing and mysterious leaks, we trace the source and fix it right. Most Dallas emergency
            repairs are completed the same day, with a 2-year workmanship warranty.
          </p>
          <p style={{ marginBottom: 12 }}>
            <strong>Roof replacement in Dallas, GA</strong> — Full tear-off to the deck, ice & water
            shield, synthetic underlayment, and architectural shingles installed to manufacturer spec.
            We handle the permit, coordinate with your Dallas inspector, and do a magnetic nail sweep
            so your family and pets stay safe.
          </p>
          <p style={{ marginBottom: 12 }}>
            <strong>New construction roofing in Dallas, GA</strong> — We partner with local builders
            and homeowners to install design-matched roofs on new homes. From shingle selection to
            final walkthrough and warranty setup — we keep your build on schedule.
          </p>
          <p style={{ marginBottom: 12 }}>
            <strong>Storm &amp; insurance claim assistance in Dallas, GA</strong> — After a Georgia
            storm, we document all damage with photos, write a full scope of work, and meet your
            insurance adjuster on-site. We handle supplements and paperwork so you're never fronting
            the cost.
          </p>
          <p>
            Based in Dallas (470-236-1410), we serve Dallas and all of Paulding County with free,
            no-pressure roof inspections. Call today — we answer our own phones.
          </p>
        </div>
      </div>
    </section>
  );
}
