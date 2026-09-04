import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Privacy Policy | iRoofer Contractors',
  description:
    'How iRoofer Contractors collects and uses contact information from quote forms, calls, and analytics on iroofercontractors.com.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative', maxWidth: 760 }}>
        <span className="eyebrow dark">Legal</span>
        <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900 }}>Privacy Policy</h1>
        <p style={{ color: '#52606b', marginTop: 8 }}>Last updated: September 3, 2026</p>

        <div style={{ color: '#52606b', fontSize: '1.05rem', lineHeight: 1.65, marginTop: 24 }}>
          <p>
            {brand.name} (&quot;we,&quot; &quot;us&quot;) operates {brand.url}. This policy explains what we collect when you
            request a roofing quote, call or email us, or browse the site.
          </p>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Who we are</h2>
          <p>
            {brand.name}<br />
            152 Freedom Dr, Dallas, GA 30157<br />
            Phone: <a href={`tel:${brand.phone}`}>{brand.phone}</a><br />
            Email: <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </p>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Information we collect</h2>
          <ul>
            <li>Contact details you submit (name, phone, email, property address, service needed, message).</li>
            <li>Call or text records when you reach us at {brand.phone}.</li>
            <li>Basic analytics (pages viewed, approximate location, device/browser) via Google Analytics (GA4).</li>
            <li>Technical logs needed to operate and secure the website.</li>
          </ul>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>How we use it</h2>
          <ul>
            <li>To respond to quote and inspection requests and schedule work.</li>
            <li>To communicate about your project, insurance documentation, or follow-ups you asked for.</li>
            <li>To improve the website and measure marketing performance.</li>
            <li>To comply with law and protect against fraud or abuse.</li>
          </ul>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Sharing</h2>
          <p>
            We do not sell your personal information. We may share details with service providers who help us run the
            business (for example, form/lead delivery, email/SMS, analytics, or insurance adjusters when you ask us to
            help with a claim). We may disclose information if required by law.
          </p>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Cookies and analytics</h2>
          <p>
            The site uses Google Analytics (measurement ID present on pages) and similar tools to understand traffic.
            You can block cookies in your browser; some site features may still work without them.
          </p>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Data retention</h2>
          <p>
            Lead and project records are kept as long as needed to serve you and meet legal or insurance requirements,
            then deleted or archived when no longer needed.
          </p>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Your choices</h2>
          <p>
            Email or call us to update or delete contact information we hold about you, or to ask what we have on file.
            For analytics opt-out, use browser controls or Google&apos;s published opt-out tools.
          </p>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Children</h2>
          <p>This site is for homeowners and property decision-makers; we do not knowingly collect data from children under 13.</p>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Changes</h2>
          <p>We may update this policy; the &quot;Last updated&quot; date above will change when we do.</p>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Contact</h2>
          <p>
            Questions about privacy: <a href={`mailto:${brand.email}`}>{brand.email}</a> or{' '}
            <a href={`tel:${brand.phone}`}>{brand.phone}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
