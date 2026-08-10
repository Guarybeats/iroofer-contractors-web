import Link from 'next/link';
import { brand } from '@/lib/brand';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata = {
  title: 'Georgia Hail Storm Roof Checklist: What Dallas Homeowners Need to Know | iRoofer Contractors',
  description:
    'After a Georgia hail storm hits Dallas, follow our 6-step checklist: safety, photos, tarp, claim, inspection, repair. Written by Cristian Mendez, founder of iRoofer Contractors.',
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
    d: 'If the damage is minor (a few dents, no granule loss), repairs may suffice. If 30%+ of shingles are struck or you see granule loss, replacement is usually the right call. We use GAF-certified materials and follow manufacturer + local building codes. Your warranty stays intact.',
  },
];

export default function BlogStormChecklist() {
  return (
    <article className="sec-light sec-pad">
      <div className="wrap">
        <div className="rv">
          <span className="eyebrow dark">September 2026</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', fontWeight: 900, lineHeight: 1.05 }}>
            Georgia Hail Storm Roof Checklist: What Dallas Homeowners Need to Know
          </h1>
          <p style={{ color: '#52606b', marginTop: 12, fontSize: '1.05rem' }}>
            By Cristian Mendez — founder of iRoofer Contractors, a local family-owned roofing company serving Dallas, GA and the North Georgia metro since 2019.
          </p>
          <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 12 }}>
            North Georgia gets its share of hail storms — some the size of quarters, some larger. When the skies clear, the last thing you want is a hidden roof leak or a denied insurance claim. Follow this six-step checklist, written by a local Dallas roofer who has inspected hundreds of storm-damaged roofs.
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

        <RelatedPosts slug="georgia-hail-storm-roof-checklist" />
      </div>
    </article>
  );
}
