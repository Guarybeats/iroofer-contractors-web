import { OG_IMAGE } from '@/lib/seo';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import { brand } from '@/lib/brand';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  alternates: { canonical: 'https://iroofercontractors.com/blog/roof-maintenance-calendar-dallas-ga' },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }], url: 'https://iroofercontractors.com/blog/roof-maintenance-calendar-dallas-ga' },

  title: 'Roof Maintenance Calendar | Dallas, GA Homeowners',
  description: 'A seasonal checklist: what to inspect, clean, and repair each quarter to extend your roof life and catch small issues before they become expensive leaks.',
};

const post = {
  slug: 'roof-maintenance-calendar-dallas-ga',
  title: 'Year-Round Roof Maintenance Calendar for Dallas GA Homeowners',
  date: 'June 2027',
  readTime: '7 min read',
  category: 'Maintenance',
};

const seasons = [
  {
    name: 'SPRING (March–May)',
    emoji: '🌱',
    tasks: [
      { t: 'Gutter clean-out', d: 'Remove winter debris. Check downspout flow — clogged gutters back up under shingles.', diy: true },
      { t: 'Visual roof scan', d: 'From ground with binoculars: look for missing, curled, or granule-bald shingles.', diy: true },
      { t: 'Attic check', d: 'Daylight through deck? Water stains on rafters? Mold smell? These mean leaks.', diy: true },
      { t: 'Flashing inspection', d: 'Chimney, vents, skylights — sealant cracked? Gaps? Re-caulk with polyurethane.', diy: false },
      { t: 'Trim overhanging branches', d: '6+ ft clearance. Branches scrape granules; falling limbs puncture decks.', diy: false },
    ],
  },
  {
    name: 'SUMMER (June–August)',
    emoji: '☀️',
    tasks: [
      { t: 'Post-storm walkaround', d: 'After every severe thunderstorm: check yard for shingle pieces, granule piles at downspouts.', diy: true },
      { t: 'Ventilation verification', d: 'Ridge vent + soffit vents flowing? Hot attic = baked shingles + higher AC bills.', diy: false },
      { t: 'Moss/algae check', d: 'North-facing slopes in shade — green streaks? Zinc/copper strips or professional soft-wash.', diy: false },
      { t: 'Skylight condensation', d: 'If interior glass sweats, add a bath fan or crack the skylight vent.', diy: true },
    ],
  },
  {
    name: 'FALL (September–November)',
    emoji: '🍂',
    tasks: [
      { t: 'Full gutter clean', d: 'Critical — leaf dams cause ice dams in January. Install guards if trees overhang.', diy: true },
      { t: 'Pre-winter roof inspection', d: 'Pro inspection now beats emergency tarp in January. We check 30+ points.', diy: false },
      { t: 'Seal pipe boots', d: 'Rubber boots around vent pipes dry-rot in 5–7 years. $15 part, $200 labor if ignored.', diy: false },
      { t: 'Chimney cricket check', d: 'Wide chimney needs a cricket (diverter) to shed water. Missing = guaranteed leak.', diy: false },
    ],
  },
  {
    name: 'WINTER (December–February)',
    emoji: '❄️',
    tasks: [
      { t: 'Ice dam watch', d: 'Icicles = heat loss. Rake snow off lower 3 ft of roof after heavy falls (from ground with roof rake).', diy: true },
      { t: 'Interior leak scan', d: 'Check ceilings after freeze-thaw cycles. Stains = active leak. Call immediately.', diy: true },
      { t: 'Attic frost check', d: 'Frost on nails/sheathing = ventilation failure. Fix before spring melt.', diy: false },
      { t: 'Emergency plan', d: 'Save our number: {brand.phone}. 24/7 tarp service if a tree limb comes through.', diy: true },
    ],
  },
];

export default function BlogPostPage() {
  return (
    <>
      <article className="post">
        <div className="tex" aria-hidden="true" />
        <div className="wrap">
          <div className="post-head rv">
            <span className="eyebrow dark">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="byline">
              By iRoofer Contractors
            </p>
            <p className="meta">{post.date} · {post.readTime}</p>
          </div>

          <div className="post-body rv">
            <p>Georgia weather doesn't take a season off. Spring hail, summer UV, fall leaves, winter ice — each attacks your roof differently. A quarterly routine catches the small stuff before it turns into a $15,000 replacement. Here's your calendar.</p>

            <p style={{ background: '#e8f5e9', padding: '16px', borderRadius: 6, border: '1px solid #c8e6c9', marginBottom: '24px' }}>
              <strong>Golden rule:</strong> Never walk a steep or wet roof. Binoculars from the ground + attic check = 80% of what you need. Call a pro for the rest.
            </p>

            {seasons.map((season) => (
              <section key={season.name} style={{ marginBottom: 40 }}>
                <h2 style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '1.6rem' }}>
                  <span style={{ fontSize: '2rem' }}>{season.emoji}</span>
                  {season.name}
                </h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 12 }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--orange)' }}>
                      <th style={{ padding: '10px', textAlign: 'left', width: '30%' }}>Task</th>
                      <th style={{ padding: '10px', textAlign: 'left' }}>Why It Matters</th>
                      <th style={{ padding: '10px', textAlign: 'center', width: '12%' }}>DIY?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {season.tasks.map((task, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '10px', fontWeight: 600 }}>{task.t}</td>
                        <td style={{ padding: '10px', color: '#52606b' }}>{task.d}</td>
                        <td style={{ padding: '10px', textAlign: 'center' }}>
                          {task.diy ? (
                            <span style={{ color: '#2e7d32', fontWeight: 700 }}>✅ Yes</span>
                          ) : (
                            <span style={{ color: '#c62828', fontWeight: 700 }}>🔧 Pro</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            ))}

            <h2>Annual Pro Inspection: What We Check (That You Can't)</h2>
            <ul>
              <li>Shingle adhesion pull-test (wind uplift resistance)</li>
              <li>Flashing integrity at every penetration</li>
              <li>Attic ventilation balance (intake vs. exhaust CFM)</li>
              <li>Deck moisture meter readings</li>
              <li>Fastener pattern & corrosion check</li>
              <li>Warranty compliance verification</li>
            </ul>
            <p>We provide a 12-page photo report with priority ratings. $199 — waived if you hire us for any repair.</p>

            <h2>Quick-Reference: When to Call Immediately</h2>
            <ul>
              <li>Water dripping inside (active leak)</li>
              <li>Shingles in yard after storm</li>
              <li>Sagging ridge or ceiling</li>
              <li>Granules washing out downspouts by the handful</li>
              <li>Daylight visible through roof deck in attic</li>
            </ul>

            <h2>Stay Ahead of the Weather</h2>
            <p>Join our seasonal reminder list — we'll text you when it's time for each quarterly check, plus storm alerts for Dallas GA.</p>
            <RelatedPosts slug="roof-maintenance-calendar-dallas-ga" />
            <p><Link href="/estimator" className="btn btn-solid">Schedule Annual Inspection →</Link></p>
          </div>
        </div>
      </article>
    </>
  );
}