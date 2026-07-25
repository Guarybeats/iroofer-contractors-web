import './globals.css';
import { brand } from '@/lib/brand';

export const metadata = {
  title: `${brand.name} — ${brand.tagline}`,
  description: brand.pitch,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={brand.fonts.import} rel="stylesheet" />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="/">
          <img src="/assets/logo.svg" alt={`${brand.name} logo`} />
          <span>{brand.shortName}</span>
        </a>
        <ul className="nav-links">
          <li><a href="/#home">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a className="btn" href="/#quote">Free Quote</a></li>
        </ul>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="col">
          <img src="/assets/logo.svg" alt={brand.name} style={{ height: 40, filter: 'brightness(0) invert(1)' }} />
          <p className="small" style={{ maxWidth: 280, marginTop: 12 }}>{brand.pitch}</p>
        </div>
        <div className="col">
          <h4>Services</h4>
          <p><a href="/services/roof-repair">Roof Repair</a></p>
          <p><a href="/services/roof-replacement">Roof Replacement</a></p>
          <p><a href="/services/new-construction">New Construction</a></p>
        </div>
        <div className="col">
          <h4>Contact</h4>
          <p>{brand.location}</p>
          <p>Serving: {brand.serviceArea.slice(0, 4).join(', ')} & more</p>
          <p><a href={`tel:${brand.phone}`}>{brand.phone}</a></p>
        </div>
      </div>
      <div className="container small" style={{ paddingBottom: 30 }}>
        © {new Date().getFullYear()} {brand.name}. Local & family-owned.
      </div>
    </footer>
  );
}
