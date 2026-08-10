import { brand } from '@/lib/brand';

export const metadata = {
  alternates: { canonical: 'https://iroofercontractors.com/about' },
  openGraph: { url: 'https://iroofercontractors.com/about' },

  title: 'About — iRoofer Contractors',
  description: `${brand.owner}, founder of iRoofer Contractors. Family-owned roofing in Dallas, GA since 2019. 150+ roofs completed. Licensed · Bonded · Insured. ${brand.phone}.`,
};

const values = [
  { t: 'Local & Family-Owned', d: 'Dallas, GA roots — we live and work where we roof.' },
  { t: 'Stand Behind Our Work', d: 'Every job carries our name — we show up, do it right, and answer the phone after.' },
  { t: 'Clean Job Sites', d: 'Daily cleanup and magnetic nail sweeps, every time.' },
  { t: 'Honest Pricing', d: 'Clear, upfront estimates. No pressure, no surprises.' },
];

export default function AboutPage() {
  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="faq-grid" style={{ alignItems: 'center' }}>
          <div className="rv">
            <span className="eyebrow dark">About us</span>
            <h1 style={{ fontSize: 'clamp(2.2rem,4.4vw,3.4rem)', fontWeight: 900 }}>About iRoofer Contractors — Dallas, GA Roofing</h1>
            <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 16 }}>
              iRoofer Contractors was founded in 2019 by Cristian Mendez, a Dallas, GA roofer who
              built the company on a simple idea: show up on time, do the work right, and stand behind it.
              Since then we've completed 150+ roofs across Dallas, Douglasville, Hiram and the west metro —
              with no high-pressure sales and no surprise charges, just honest roofing from people who
              live and work in the same neighborhoods you do.
            </p>
            <p style={{ color: '#52606b', marginTop: 12 }}>
              From storm repairs to full replacements and new construction, we treat every roof like it's
              on our own home — because in a town this size, it usually is.
            </p>
          </div>
          <div className="rv" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {values.map((v) => (
              <div key={v.t} style={{ background: '#fff', border: '1px solid rgba(22,29,37,.10)', borderRadius: 8, padding: '1.4rem' }}>
                <h4 style={{ color: 'var(--ink)', fontFamily: 'var(--display)', fontSize: '1.2rem', marginBottom: 6 }}>{v.t}</h4>
                <p style={{ color: '#52606b', fontSize: '.95rem', margin: 0 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO CONTENT */}
        <div style={{ marginTop: 48, maxWidth: 880, fontSize: '0.95rem', lineHeight: 1.7, color: '#52606b' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem,3vw,1.8rem)', fontWeight: 800, marginBottom: 20 }}>
            About our Dallas, GA roofing company
          </h2>
          <p style={{ marginBottom: 12 }}>
            Cristian Mendez started iRoofer Contractors in 2019 after a decade in the Dallas, GA
            roofing industry. He saw too many homeowners stuck between expensive, high-pressure
            contractors and DIY disasters. So iRoofer was built on three rules: honest pricing,
            clean job sites, and a workmanship warranty we actually honor.
          </p>
          <p style={{ marginBottom: 12 }}>
            Today, our crew handles 150+ roofs per year across Dallas, Douglasville, Hiram, and
            the greater Atlanta metro. We're licensed, bonded, and insured in Georgia, and we
            carry manufacturer warranties from GAF, Owens Corning, and CertainTeed.
          </p>
          <p style={{ marginBottom: 12 }}>
            <strong>What sets us apart:</strong>
            We're not a call center — Cristian and the field crew answer every call. We don't
            subcontract. Every roof is installed by the same local team that inspected it, and
            we do a magnetic nail sweep of your property before we leave so your kids and pets
            are safe.
          </p>
          <p>
            Based in Dallas, GA ({brand.phone}). Proudly serving North Georgia since 2019.
          </p>
        </div>
      </div>
    </section>
  );
}
