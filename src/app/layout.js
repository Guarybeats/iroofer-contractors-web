import './globals.css';
import { brand } from '@/lib/brand';
import SiteScripts from '@/components/SiteScripts';

export const metadata = {
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description: brand.pitch,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: brand.url,
    siteName: brand.name,
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.pitch,
    images: [
      {
        url: `${brand.url}/assets/logo.png`,
        width: 337,
        height: 200,
        alt: brand.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.pitch,
    images: [`${brand.url}/assets/logo.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={brand.url} />
        <meta name="theme-color" content="#161d25" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32" />
        <link rel="icon" href="/assets/logo.png" type="image/png" sizes="337x200" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=Public+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* TOP TICKER */}
        <div className="topbar" aria-hidden="true">
          <div className="track">
            <div className="set">
              <div className="item">Family-Owned &amp; Operated Since 2019</div>
              <div className="item">Licensed · Bonded · Insured</div>
              <div className="item"><b>{brand.rating}</b> {brand.reviewCount} Reviews</div>
              <div className="item">Free No-Pressure Roof Inspections</div>
              <div className="item">24/7 Emergency Storm Response</div>
            </div>
            <div className="set" aria-hidden="true">
              <div className="item">Family-Owned &amp; Operated Since 2019</div>
              <div className="item">Licensed · Bonded · Insured</div>
              <div className="item"><b>{brand.rating}</b> {brand.reviewCount} Reviews</div>
              <div className="item">Free No-Pressure Roof Inspections</div>
              <div className="item">24/7 Emergency Storm Response</div>
            </div>
          </div>
        </div>

        {/* HEADER */}
        <header className="site-head" id="head">
          <div className="wrap nav">
            <a className="brand" href="/">
              <img className="brand-logo" src="/assets/logo.png" alt={`${brand.name} logo`} />
            </a>
            <nav className="menu" aria-label="Primary">
              <a className="lnk" href="/#services">Services</a>
              <a className="lnk" href="/service-areas">Service Areas</a>
              <a className="lnk" href="/blog">Blog</a>
              <a className="lnk" href="/estimator">Instant Quote</a>
              <a className="lnk" href="/emergency-roof-repair-dallas-ga">Emergency</a>
              <a className="lnk" href="/storm-damage-roof-repair-dallas-ga">Storm Damage</a>
              <a className="lnk" href="/#work">Our Work</a>
              <a className="lnk" href="/#process">Process</a>
              <a className="lnk" href="/#reviews">Reviews</a>
              <a className="lnk" href="/#faq">FAQ</a>
            </nav>
            <div className="head-cta">
              <a className="head-phone" href={`tel:${brand.phone}`} aria-label={`Call ${brand.name}`}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.25 1Z"/></svg>
                {brand.phone}
              </a>
              <span className="head-hours" aria-label="Business hours">{brand.hours.weekdays}</span>
              <a className="btn btn-solid" href="/estimator">Free Estimate <span className="arr">→</span></a>
              <button className="burger" id="burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
            </div>
          </div>
        </header>

        {/* MOBILE NAV */}
        <nav className="mnav" id="mnav" aria-label="Mobile">
          <a href="#services">Services</a>
          <a href="/estimator">Instant Quote</a>
          <a href="/emergency-roof-repair-dallas-ga">Emergency</a>
          <a href="/storm-damage-roof-repair-dallas-ga">Storm Damage</a>
          <a href="/service-areas">Service Areas</a>
          <a href="/blog">Blog</a>
          <a href="/services">All Services</a>
          <a href="/#work">Our Work</a>
          <a href="/#reviews">Reviews</a>
          <a href="/#faq">FAQ</a>
          <a className="mphone" href={`tel:${brand.phone}`}>{brand.phone}</a>
        </nav>

        <main>{children}</main>

        {/* FOOTER */}
        <footer>
          <div className="wrap">
            <div className="foot-grid">
              <div className="foot-brand">
                <img className="brand-logo" src="/assets/logo.png" alt={brand.name} style={{ height: 52 }} />
                <p>A local, family-owned roofing company built on showing up, doing it right, and standing behind the work — one Dallas, GA roof at a time.</p>
                <div className="socials">
                  <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2h-3c-3 0-4 1.8-4 4.5V10H7v4h3v8h3Z"/></svg></a>
                  <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
                  <a href="#" aria-label="Google"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11v3h4.3c-.4 2-2 3-4.3 3a4 4 0 1 1 0-8c1 0 1.9.4 2.6 1l2.2-2.2A7 7 0 1 0 12 19c4 0 6.7-2.8 6.7-6.8 0-.4 0-.8-.1-1.2H12Z"/></svg></a>
                  <a href="#" aria-label="Nextdoor"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 4 5 3v6l-5 3-5-3V9l5-3Z"/></svg></a>
                </div>
              </div>
              <div className="foot-col">
                <h5>Services</h5>
                <a href="/services/roof-repair">Roof Repair</a>
                <a href="/services/roof-replacement">Roof Replacement</a>
                <a href="/services/new-construction">New Construction</a>
                <a href="/blog">Blog</a>
                <a href="/emergency-roof-repair-dallas-ga">Emergency Roof Repair</a>
                <a href="/storm-damage-roof-repair-dallas-ga">Storm &amp; Insurance</a>
                <a href="/#faq">FAQ</a>
              </div>
              <div className="foot-col">
                <h5>Company</h5>
                <a href="/#work">Our Work</a>
                <a href="/#process">Our Process</a>
                <a href="/#reviews">Reviews</a>
                <a href="/about">About Us</a>
                <a href="/#contact">Contact</a>
              </div>
              <div className="foot-col">
                <h5>Get in touch</h5>
                <a href={`tel:${brand.phone}`}>{brand.phone}</a>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
                <a href="/#contact">{brand.location}</a>
                <div className="hours">
                  <strong>Hours:</strong> {brand.hours.weekdays} · {brand.hours.saturday} · {brand.hours.sunday}
                </div>
                <p className="lic">Fully licensed · bonded · insured<br />© {new Date().getFullYear()} {brand.name}</p>
              </div>
            </div>
            <div className="foot-bottom">
              <span>Built tough in Dallas, GA.</span>
              <span><a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Warranty</a></span>
            </div>
          </div>
        </footer>

        {/* FLOATING */}
        <a className="fab" href={`tel:${brand.phone}`} aria-label={`Call ${brand.name}`}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.25 1Z"/></svg>
        </a>
        <button id="toTop" aria-label="Back to top">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </button>

        <SiteScripts />
      </body>
    </html>
  );
}
