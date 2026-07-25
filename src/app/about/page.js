import { brand } from '@/lib/brand';

export default function AboutPage() {
  return (
    <section className="block">
      <div className="container">
        <div className="section-head">
          <h1>About iRoofer Contractors</h1>
          <p>Local, family-owned, and proud of the roofs we put our name on.</p>
        </div>
        <div className="service-hero">
          <div>
            <p style={{ fontSize: '1.05rem' }}>
              We’re a Dallas, GA roofing company built on a simple idea: show up on time, do the
              work right, and stand behind it. No高压 sales, no surprise charges — just honest
              roofing from people who live and work in the same neighborhoods you do.
            </p>
            <p style={{ color: 'var(--muted)' }}>
              Whether it’s a stubborn leak, a storm-damaged roof, or a brand-new build, we treat
              every job like it’s on our own home.
            </p>
            <div className="trust-row" style={{ justifyContent: 'flex-start' }}>
              {brand.trust.map((t) => (
                <div className="trust-item" key={t.lbl}>
                  <div className="num">{t.num}</div>
                  <div className="lbl">{t.lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <img src="/assets/team.jpg" alt="iRoofer Contractors team" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)' }} />
        </div>
      </div>
    </section>
  );
}
