import QuoteForm from '@/components/QuoteForm';
import { brand, services } from '@/lib/brand';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg" style={{ backgroundImage: "url('/assets/hero.jpg')" }} />
        <div className="container hero-inner">
          <div>
            <h1>Local, family-owned roofing you can trust.</h1>
            <p className="lead">
              iRoofer Contractors serves Dallas, GA and the greater Atlanta metro with honest roof
              repair, replacement, and new-construction roofing. Clean job sites. Fair pricing.
              Work we stand behind.
            </p>
            <div className="badges">
              {brand.trust.map((t) => (
                <span className="badge" key={t.lbl}>{t.num} · {t.lbl}</span>
              ))}
            </div>
          </div>
          <QuoteForm variant="top" id="quote" />
        </div>
      </section>

      {/* TRUST */}
      <section className="block" style={{ paddingTop: 40, paddingBottom: 20 }}>
        <div className="container">
          <div className="trust-row">
            {brand.trust.map((t) => (
              <div className="trust-item" key={t.lbl}>
                <div className="num">{t.num}</div>
                <div className="lbl">{t.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="block" id="services">
        <div className="container">
          <div className="section-head">
            <h2>What we do</h2>
            <p>Three core roofing services for homeowners across the Atlanta metro.</p>
          </div>
          <div className="cards">
            {services.map((s) => (
              <a className="card" key={s.slug} href={`/services/${s.slug}`} style={{ color: 'inherit' }}>
                <img src={s.image} alt={s.title} />
                <div className="body">
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <span className="more">Learn more →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="block" style={{ background: 'var(--slate-50)' }} id="location">
        <div className="container section-head">
          <h2>Serving the Atlanta metro</h2>
          <p>Based in Dallas, GA — we cover Paulding, Cobb, and Douglas counties and beyond.</p>
          <div className="badges" style={{ justifyContent: 'center', marginTop: 14 }}>
            {brand.serviceArea.map((a) => <span className="badge" key={a} style={{ color: 'var(--slate-700)', background: '#fff', borderColor: 'var(--slate-200)' }}>{a}</span>)}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="block">
        <div className="container">
          <div className="cta-bottom">
            <h2>Ready for an honest roof quote?</h2>
            <p style={{ color: 'var(--slate-200)', maxWidth: 520, margin: '0 auto 22px' }}>
              Scrolled this far? That’s the sign. Get your free, no-pressure estimate from a local crew.
            </p>
            <div style={{ maxWidth: 460, margin: '0 auto' }}>
              <QuoteForm variant="bottom" id="quote-bottom" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
