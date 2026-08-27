import { OG_IMAGE } from '@/lib/seo';
import Link from 'next/link';
import { brand } from '@/lib/brand';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: 'Georgia Hail Storm Roof Checklist (6 Steps)',
  description:
    'After a Georgia hail storm hits Dallas, follow our 6-step checklist: safety, photos, tarp, claim, inspection, repair. Years of roofing experience across Dallas, GA and the greater Atlanta metro.',
  alternates: { canonical: 'https://iroofercontractors.com/blog/georgia-hail-storm-roof-checklist' },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }], url: 'https://iroofercontractors.com/blog/georgia-hail-storm-roof-checklist' },
};

const steps = [
  {
    n: '1',
    t: 'Stay Safe — Wait It Out',
    d: 'Hail can crack windows, dent siding, and — most dangerously — weaken shingles invisibly. Stay inside, away from windows. Do not climb onto the roof. Storm damage is often hidden and can be unstable.',
  },
  {
    n: '2',
    t: 'Photograph Everything',
    d: 'Take ground-level photos of your roof, gutters, and siding before you do anything else. Look for dents in gutters, granule loss in drains, dented or missing shingles, and hail marks on siding or fences. These photos are evidence for your insurance claim — and most insurers require them within 48 hours of the storm.',
  },
  {
    n: '3',
    t: 'Call for a Free Storm-Damage Inspection',
    d: 'Call a local roofer (not a call center) who knows Georgia storms. We at iRoofer Contractors respond within 24 hours after a hail event in Dallas, Douglasville, Hiram, or anywhere in our service area. A legitimate roofer will do a free, no-pressure inspection and tell you honestly whether a claim is worth filing.',
  },
  {
    n: '4',
    t: 'Document — Don’t Commit',
    d: 'If your roofer recommends a claim, ask them to write a detailed scope of loss. Get it in writing. Do not sign anything until you have your insurance adjuster’s contact info and your policy number handy. In Georgia, you have one year to file wind/hail claims — don’t wait.',
  },
  {
    n: '5',
    t: 'Meet the Adjuster On-Site',
    d: 'Your roofer should be there when the insurance adjuster arrives. We walk the roof together, point out the hail hits and granule loss, and make sure nothing gets missed. This is your money — don’t let the adjuster rush through a 2-minute inspection.',
  },
  {
    n: '6',
    t: 'Repair or Replace — the Right Way',
    d: 'If the damage is minor (a few dents, no granule loss), repairs may suffice. If 30%+ of shingles are struck or you see granule loss, replacement is usually the right call. We use manufacturer-approved materials and follow manufacturer + local building codes. Your warranty stays intact.',
  },
];

export default function BlogStormChecklist() {
  return (
    <article className="sec-light sec-pad">
      <div className="wrap">
        <div className="rv">
          <span className="eyebrow dark">October 2025</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', fontWeight: 900, lineHeight: 1.05 }}>
            Georgia Hail Storm Roof Checklist: What Dallas Homeowners Need to Know
          </h1>
          <p style={{ color: '#52606b', marginTop: 12, fontSize: '1.05rem' }}>
            North Georgia gets its share of hail storms — some the size of quarters, some larger. When the skies clear, the last thing you want is a hidden roof leak or a denied insurance claim. Follow this six-step checklist, written by Iroofer Contractors.
          </p>
          <p className="byline">
            By iRoofer Contractors
          </p>
        </div>

        <div className="rv" style={{ marginTop: 48 }}>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 24 }}>
            {steps.map((s) => (
              <li key={s.n} style={{ display: 'flex', gap: 20, alignItems: 'flexStart' }}>
                <span style={{
                  minWidth: 48, height: 48, borderRadius: '50%', background: 'var(--orange)', color: '#fff',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--display)', fontSize: '1.4rem', fontWeight: 800, flexShrink: 0,
                }}>{s.n}</span>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: 0 }}>{s.t}</h3>
                  <p style={{ color: '#52606b', fontSize: '.95rem', lineHeight: 1.6, margin: '8px 0 0' }}>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rv" style={{ marginTop: 48, padding: '2rem', background: '#fff', border: '1px solid rgba(22,29,37,.1)', borderRadius: 8 }}>
          <h3 style={{ marginTop: 0, fontSize: '1.3rem' }}>Need help after a storm?</h3>
          <p style={{ color: '#52606b' }}>
            If you're in Dallas, GA or the surrounding area and your roof has taken a hit, we're here to help.
            Call{' '}
            <a href={`tel:${brand.phone}`} style={{ color: 'var(--orange)', fontWeight: 600 }}>{brand.phone}</a>
            {' '}for a free, no-pressure storm-damage inspection. We’ll document the damage, explain your options, and handle the insurance process from start to finish.
          </p>
          <Link href="/emergency-roof-repair-dallas-ga" className="btn btn-solid" style={{ display: 'inline-block', marginTop: 16 }}>
            Get emergency roof help <span className="arr">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
