import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Terms of Service | iRoofer Contractors',
  description:
    'Terms for using iroofercontractors.com and requesting estimates from iRoofer Contractors in Dallas, GA.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative', maxWidth: 760 }}>
        <span className="eyebrow dark">Legal</span>
        <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900 }}>Terms of Service</h1>
        <p style={{ color: '#52606b', marginTop: 8 }}>Last updated: September 3, 2026</p>

        <div style={{ color: '#52606b', fontSize: '1.05rem', lineHeight: 1.65, marginTop: 24 }}>
          <p>
            By using {brand.url} or submitting a quote request to {brand.name}, you agree to these terms.
          </p>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Services</h2>
          <p>
            The website provides information about roofing services and a way to request a free inspection or estimate.
            Submitting a form is not a contract for work. Binding work terms are set in a written estimate or contract
            we provide for a specific job.
          </p>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Estimates and pricing</h2>
          <p>
            Online content (including blog cost ranges) is educational and not a quote. Final pricing depends on
            inspection, roof size, pitch, materials, access, and other job factors.
          </p>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Accurate information</h2>
          <p>
            You agree to provide accurate contact and property details so we can reach you and assess the job safely.
          </p>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Intellectual property</h2>
          <p>
            Site text, photos, logos, and design are owned by {brand.name} or our licensors. Do not copy or reuse them
            for commercial purposes without permission.
          </p>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Disclaimer</h2>
          <p>
            The site is provided &quot;as is.&quot; We work to keep information accurate but do not warrant uninterrupted or
            error-free access. Roofing involves inherent risks; only a written agreement governs a specific project.
          </p>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Limitation of liability</h2>
          <p>
            To the fullest extent allowed by Georgia law, {brand.name} is not liable for indirect or consequential
            damages arising from use of this website. Liability for contracted roofing work is governed by that
            contract and applicable law.
          </p>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Governing law</h2>
          <p>These terms are governed by the laws of the State of Georgia, USA.</p>

          <h2 style={{ color: 'var(--ink)', fontSize: '1.35rem', marginTop: 28 }}>Contact</h2>
          <p>
            {brand.name}<br />
            152 Freedom Dr, Dallas, GA 30157<br />
            <a href={`tel:${brand.phone}`}>{brand.phone}</a> · <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
