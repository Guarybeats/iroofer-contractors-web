import './globals.css';
import Script from 'next/script';
import { brand } from '@/lib/brand';
import SiteScripts from '@/components/SiteScripts';
import LocalSeo from '@/components/LocalSeo';
import WebMcpTools from '@/components/WebMcpTools';
import { GBP_URL } from '@/components/LocalSeo';

export const metadata = {
  metadataBase: new URL('https://iroofercontractors.com'),
  title: `iRoofer Contractors | Roof Repair & Replacement Dallas GA`,
  description: `iRoofer Contractors — local Dallas, GA roofer for repair, replacement & storm damage. 5★ on Google, free inspection. Call (470) 236-1410.`,
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/assets/icon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/assets/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [{ url: '/assets/icon-180.png', sizes: '180x180' }],
  },
  alternates: { canonical: 'https://iroofercontractors.com/' },
  openGraph: {
    type: 'website',
    url: 'https://iroofercontractors.com/',
    siteName: 'iRoofer Contractors',
    title: `iRoofer Contractors | Roof Repair & Replacement Dallas GA`,
    description: `Local Dallas, GA roofer for repair, replacement & storm damage. 5★ on Google, free inspection. Call (470) 236-1410.`,
    locale: 'en_US',
    images: [{ url: 'https://iroofercontractors.com/assets/hero.jpg', alt: 'iRoofer Contractors roofing a home in Dallas, GA', width: 1280, height: 960 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@irooferc',
    creator: '@irooferc',
    title: `iRoofer Contractors | Roof Repair & Replacement Dallas GA`,
    description: `Local Dallas, GA roofer for repair, replacement & storm damage. 5★ on Google, free inspection. Call (470) 236-1410.`,
    images: ['https://iroofercontractors.com/assets/hero.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=Public+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <LocalSeo />
        {/* Google Analytics 4 (Measurement ID: G-EC6HCLKMEN) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EC6HCLKMEN"
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-EC6HCLKMEN');`}
        </Script>
      </head>
      <body>
        {/* TOP TICKER */}
        <div className="topbar" aria-hidden="true">
          <div className="track">
            <div className="set">
              <div className="item"><b>{brand.rating}</b> {brand.reviewCount} Reviews</div>
              <div className="item">Licensed · Bonded · Insured</div>
              <div className="item">24/7 Emergency Storm Response</div>
              <div className="item">Free No-Pressure Roof Inspections</div>
              <div className="item">Family-Owned &amp; Operated Since 2019</div>
            </div>
            <div className="set" aria-hidden="true">
              <div className="item"><b>{brand.rating}</b> {brand.reviewCount} Reviews</div>
              <div className="item">Licensed · Bonded · Insured</div>
              <div className="item">24/7 Emergency Storm Response</div>
              <div className="item">Free No-Pressure Roof Inspections</div>
              <div className="item">Family-Owned &amp; Operated Since 2019</div>
            </div>
          </div>
        </div>

        {/* HEADER */}
        <header className="site-head" id="head">
          <div className="wrap nav">
            <a className="brand" href="/">
              <img className="brand-logo" src="/assets/logo.webp" alt={`${brand.name} logo`} loading="eager" decoding="async" />
            </a>
            <nav className="menu" aria-label="Primary">
              <a className="lnk" href="/#services">Services</a>
              <a className="lnk" href="/service-areas/">Service Areas</a>
              <a className="lnk" href="/estimator/">Instant Quote</a>
              <a className="lnk" href="/emergency-roof-repair-dallas-ga/">Emergency</a>
              <a className="lnk" href="/storm-damage-roof-repair-dallas-ga/">Storm Damage</a>
              <a className="lnk" href="/#work">Our Work</a>
              <a className="lnk" href="/#process">Process</a>
              <a className="lnk" href="/#reviews">Reviews</a>
              <a className="lnk" href="/blog/">Blog</a>
              <a className="lnk" href="/#faq">FAQ</a>
            </nav>
            <div className="head-cta">
              <a className="head-phone" href={`tel:${brand.phone}`} aria-label={`Call ${brand.name}`}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.25 1Z"/></svg>
                {brand.phone}
              </a>
              <a className="btn btn-solid" href="/#contact">Free Estimate <span className="arr">→</span></a>
              <button className="burger" id="burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
            </div>
          </div>
        </header>

        {/* MOBILE NAV */}
        <nav className="mnav" id="mnav" aria-label="Mobile">
          <a href="/#services">Services</a>
          <a href="/estimator/">Instant Quote</a>
          <a href="/emergency-roof-repair-dallas-ga/">Emergency</a>
          <a href="/storm-damage-roof-repair-dallas-ga/">Storm Damage</a>
          <a href="/#work">Our Work</a>
          <a href="/#process">Process</a>
          <a href="/#reviews">Reviews</a>
          <a href="/blog/">Blog</a>
          <a href="/#faq">FAQ</a>
          <a href="/#contact">Contact</a>
          <a className="mphone" href={`tel:${brand.phone}`}>{brand.phone}</a>
        </nav>

        <WebMcpTools />

        <main>{children}</main>

        {/* FOOTER */}
        <footer>
          <div className="wrap">
            <div className="foot-grid">
              <div className="foot-brand">
                <img className="brand-logo" src="/assets/logo.webp" alt={brand.name} style={{ height: 52 }} loading="eager" decoding="async" />
                <p>A local, family-owned roofing company built on showing up, doing it right, and standing behind the work — one Dallas, GA roof at a time.</p>
                <div className="socials">
                  <a href="https://www.facebook.com/iroofercontractors" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2h-3c-3 0-4 1.8-4 4.5V10H7v4h3v8h3Z"/></svg></a>
                  <a href="https://www.instagram.com/iroofercontractors" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
                  <a href="https://twitter.com/irooferc" target="_blank" rel="noopener noreferrer" aria-label="X"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.3 8.4L23 22h-6.8l-5.3-6.9L4.8 22H2l7.8-9L1.5 2h6.9l4.8 6.3L18.9 2Zm-2.4 18h1.9L7.6 3.9H5.6L16.5 20Z"/></svg></a>
                  <a href={GBP_URL} target="_blank" rel="noopener noreferrer" aria-label="Google"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11v3h4.3c-.4 2-2 3-4.3 3a4 4 0 1 1 0-8c1 0 1.9.4 2.6 1l2.2-2.2A7 7 0 1 0 12 19c4 0 6.7-2.8 6.7-6.8 0-.4 0-.8-.1-1.2H12Z"/></svg></a>
                </div>
              </div>
              <div className="foot-col">
                <h2>Services</h2>
                <a href="/services/roof-repair/">Roof Repair</a>
                <a href="/services/roof-replacement/">Roof Replacement</a>
                <a href="/services/new-construction/">New Construction</a>
                <a href="/emergency-roof-repair-dallas-ga/">Emergency Roof Repair</a>
                <a href="/storm-damage-roof-repair-dallas-ga/">Storm &amp; Insurance</a>
                <a href="/#faq">FAQ</a>
              </div>
              <div className="foot-col">
                <h2>Company</h2>
                <a href="/#work">Our Work</a>
                <a href="/#process">Our Process</a>
                <a href="/#reviews">Reviews</a>
                <a href="/about/">About Us</a>
                <a href="/blog/">Blog</a>
                <a href="/privacy/">Privacy Policy</a>
                <a href="/terms/">Terms of Service</a>
                <a href="/#contact">Contact</a>
              </div>
              <div className="foot-col">
                <h2>Service Areas</h2>
                <a href="/service-areas/dallas-ga/">Dallas, GA</a>
                <a href="/service-areas/douglasville/">Douglasville</a>
                <a href="/service-areas/hiram/">Hiram</a>
                <a href="/service-areas/powder-springs/">Powder Springs</a>
                <a href="/service-areas/marietta/">Marietta</a>
                <a href="/service-areas/kennesaw/">Kennesaw</a>
                <a href="/service-areas/acworth/">Acworth</a>
                <a href="/service-areas/austell/">Austell</a>
                <a href="/service-areas/">All areas →</a>
              </div>
              <div className="foot-col">
                <h2>Local services</h2>
                <a href="/roof-repair-dallas-ga/">Roof Repair Dallas, GA</a>
                <a href="/roof-replacement-marietta/">Roof Replacement Marietta, GA</a>
                <a href="/storm-damage-roof-repair-kennesaw/">Storm Damage Kennesaw, GA</a>
                <a href="/storm-damage-roof-repair-dallas-ga/">Storm Damage Dallas, GA</a>
                <a href="/emergency-roof-repair-dallas-ga/">Emergency Repair Dallas, GA</a>
              </div>
              <div className="foot-col">
                <h2>Get in touch</h2>
                <a href={`tel:${brand.phone}`}>{brand.phone}</a>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
                <a href="/#contact">152 Freedom Dr<br />Dallas, GA 30157</a>
                <p className="lic foot-hours">
                  {brand.hours.weekdays}<br />
                  {brand.hours.saturday}<br />
                  {brand.hours.sunday}
                </p>
                <p className="lic">Fully licensed · bonded · insured<br />© {new Date().getFullYear()} {brand.name}</p>
              </div>
            </div>
            <div className="foot-bottom">
              <span>Built tough in Dallas, GA.</span>
              <span>Licensed, bonded &amp; insured · <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a> · <a href="/contact/">Contact</a></span>
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
