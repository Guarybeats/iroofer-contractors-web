import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'About iRoofer Contractors | Dallas, GA Roofers',
  description:
    'Meet iRoofer Contractors—family-owned Dallas GA roofers since 2019. Licensed, bonded, insured. Call Cristian’s crew at (470) 236-1410.',
  path: '/about',
});

const values = [
  { t: 'Local & Family-Owned', d: 'Dallas, GA roots — we live and work where we roof. You get the owner’s number, not a call center.' },
  { t: 'Stand Behind Our Work', d: 'Every job carries our name. We show up, do it right, and answer the phone after the dumpster leaves.' },
  { t: 'Clean Job Sites', d: 'Daily cleanup and magnetic nail sweeps — kids, pets, and lawns stay safe.' },
  { t: 'Honest Pricing', d: 'Clear, upfront estimates. No pressure, no surprise change orders for work we already scoped.' },
];

const credentials = [
  { t: 'Owens Corning Preferred Contractor', d: 'Trained crews and manufacturer-backed shingle systems installed to spec.' },
  { t: 'Licensed · Bonded · Insured', d: 'Fully covered for residential roofing across our west-metro service area.' },
  { t: '150+ roofs since 2019', d: 'Repairs, full replacements, storm claims, and new construction for homeowners and builders.' },
  { t: '5.0 on Google (54+ reviews)', d: 'Neighbors in Dallas, Hiram, Douglasville, and nearby towns — read them on our Google Business Profile.' },
];

export default function AboutPage() {
  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="faq-grid" style={{ alignItems: 'center' }}>
          <div className="rv">
            <span className="eyebrow dark">About us</span>
            <h1 style={{ fontSize: 'clamp(2.2rem,4.4vw,3.4rem)', fontWeight: 900 }}>About iRoofer Contractors</h1>
            <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 16 }}>
              iRoofer Contractors was founded in 2019 by {brand.owner}, a Dallas, GA roofer who
              built the company on a simple idea: show up on time, do the work right, and stand behind it.
              Since then we’ve completed {brand.roofsCompleted}+ roofs across Dallas, Douglasville, Hiram and the west metro —
              with no high-pressure sales and no surprise charges, just honest roofing from people who
              live and work in the same neighborhoods you do.
            </p>
            <p style={{ color: '#52606b', marginTop: 12 }}>
              From storm repairs to full replacements and new construction, we treat every roof like it’s
              on our own home — because in a town this size, it usually is. Drone documentation, clear
              insurance scopes, and a crew that cleans up with magnets are part of how we work, not extras.
            </p>
            <p style={{ marginTop: 20 }}>
              <a className="btn btn-ink" href="/contact/">Talk to Cristian’s crew <span className="arr">→</span></a>
              {' '}
              <a className="btn btn-ghost" href='https://maps.app.goo.gl/oZg9a1cuNvUi3Ut99' target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8 }}>Google reviews</a>
            </p>
          </div>
          <div className="rv" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {values.map((v) => (
              <div key={v.t} style={{ background: '#fff', border: '1px solid rgba(22,29,37,.10)', borderRadius: 8, padding: '1.4rem' }}>
                <h2 style={{ color: 'var(--ink)', fontFamily: 'var(--display)', fontSize: '1.2rem', marginBottom: 6 }}>{v.t}</h2>
                <p style={{ color: '#52606b', fontSize: '.95rem', margin: 0 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sec-head rv" style={{ marginTop: 64 }}>
          <span className="eyebrow dark">Experience & trust</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>Credentials you can verify</h2>
          <p style={{ color: '#52606b', marginTop: 12, maxWidth: 640 }}>
            We publish what homeowners actually ask for — licensing posture, manufacturer standing, and real Google reviews — not vague “best in Atlanta” claims.
          </p>
        </div>
        <div className="cards" style={{ marginTop: 24 }}>
          {credentials.map((c) => (
            <div className="card" key={c.t}><div className="body"><h3>{c.t}</h3><p style={{ color: '#52606b' }}>{c.d}</p></div></div>
          ))}
        </div>

        <div className="faq-grid" style={{ marginTop: 64, alignItems: 'start' }}>
          <div className="rv">
            <span className="eyebrow dark">Who you’ll work with</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>{brand.owner}</h2>
            <p style={{ color: '#52606b', marginTop: 12 }}>
              Owner-operator based in Dallas, GA. Cristian runs estimates, storm documentation (including drone
              photos when they help the claim), and crew scheduling. When you call {brand.phone}, you’re reaching
              the people who will be on your roof — not a national dispatch desk.
            </p>
            <p style={{ color: '#52606b', marginTop: 12 }}>
              Shop &amp; office: 152 Freedom Dr, Dallas, GA 30157 (by appointment). Hours: {brand.hours.full}.
            </p>
          </div>
          <div className="rv">
            <span className="eyebrow dark">Service area</span>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 900 }}>West Metro Atlanta</h2>
            <p style={{ color: '#52606b', marginTop: 12 }}>
              {brand.serviceArea.join(' · ')}.
            </p>
            <p style={{ marginTop: 16 }}>
              <Link href="/service-areas/" style={{ fontWeight: 700, color: 'var(--orange)' }}>See all service areas →</Link>
            </p>
            <p style={{ marginTop: 8 }}>
              <Link href="/dallas-ga-roofing/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Dallas, GA roofing hub →</Link>
            </p>
            <p style={{ marginTop: 8 }}>
              <Link href="/services/roof-insurance-claims/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Roof insurance claim help →</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
