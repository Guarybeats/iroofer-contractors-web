import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'About iRoofer Contractors | Local Dallas, GA Roofers Since 2019',
  description:
    'iRoofer Contractors is a family-owned Dallas, GA roofing company founded in 2019 by Cristian Mendez. Honest pricing, clean job sites, and 150+ roofs across the west metro.',
  path: '/about',
});

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
            <h1 style={{ fontSize: 'clamp(2.2rem,4.4vw,3.4rem)', fontWeight: 900 }}>About iRoofer Contractors</h1>
            <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 16 }}>
              iRoofer Contractors was founded in 2019 by Cristian Mendez, a Dallas, GA roofer who
              built the company on a simple idea: show up on time, do the work right, and stand behind it.
              Since then we’ve completed 150+ roofs across Dallas, Douglasville, Hiram and the west metro —
              with no high-pressure sales and no surprise charges, just honest roofing from people who
              live and work in the same neighborhoods you do.
            </p>
            <p style={{ color: '#52606b', marginTop: 12 }}>
              From storm repairs to full replacements and new construction, we treat every roof like it’s
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
      </div>
    </section>
  );
}
