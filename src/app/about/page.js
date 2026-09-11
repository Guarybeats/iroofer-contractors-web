import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import Link from 'next/link';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: 'About iRoofer Contractors | Dallas, GA Family Roofers',
  description:
    'About iRoofer Contractors — family-owned in Dallas GA since 2019 by Cristian Mendez. Licensed, bonded, insured. Owens Corning Preferred. Call (470) 236-1410',
  path: '/about',
});

const values = [
  { t: 'Local & Family-Owned', d: 'Dallas, GA roots — we live and work where we roof. You get the owner’s number, not a call center.' },
  { t: 'Stand Behind Our Work', d: 'Every job carries our name. We show up, do it right, and answer the phone after the dumpster leaves.' },
  { t: 'Clean Job Sites', d: 'Daily cleanup and magnetic nail sweeps — kids, pets, and lawns stay safe.' },
  { t: 'Honest Pricing', d: 'Clear, upfront estimates. No pressure, no surprise change orders for work we already scoped.' },
];

// VERIFY-OR-CUT: 150+ roofs / 5.0 / 54+ — reused from live patterns only; confirm GBP before publish.
const credentials = [
  { t: 'Owens Corning Preferred Contractor', d: 'Trained crews and manufacturer-backed shingle systems installed to spec when that system is selected.' },
  { t: 'Licensed · Bonded · Insured', d: 'Fully covered for residential roofing across our west-metro service area.' },
  { t: 'CertainTeed Storm Restoration Specialist (GA)', d: 'When the storm restoration path applies — documentation and repair that match the damage.' },
  { t: '150+ roofs since 2019', d: 'Repairs, full replacements, storm claims, and new construction for homeowners and builders.' },
  { t: '5.0 on Google (54+ reviews)', d: 'Neighbors in Dallas, Hiram, Douglasville, and nearby towns — read them on our Google Business Profile.' },
];

const process = [
  { n: '01', t: 'Listen', d: 'Leak, storm, replacement, gutters, or builder schedule.' },
  { n: '02', t: 'Inspect & document', d: 'Photos, plain-English findings.' },
  { n: '03', t: 'Write the scope', d: 'What’s included, what might change if decking is soft.' },
  { n: '04', t: 'Schedule the crew', d: 'Weather-aware start windows.' },
  { n: '05', t: 'Install or repair', d: 'Manufacturer-minded details on replacements; careful flashing on repairs.' },
  { n: '06', t: 'Clean up', d: 'Magnet sweeps on tear-offs/replacements; site left workable.' },
  { n: '07', t: 'Walkthrough', d: 'Warranty paperwork and maintenance notes.' },
];

const faqs = [
  {
    q: 'Are you a storm-chaser outfit?',
    a: 'No. We’re based in Dallas year-round.',
  },
  {
    q: 'Who shows up for the estimate?',
    a: 'Typically Cristian or someone on his direct crew — ask when you book.',
  },
  {
    q: 'Do you do commercial?',
    a: 'Ask on the call — residential west-metro homes and builder work are the core; some commercial is handled case by case.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'center' }}>
            <div className="rv">
              <span className="eyebrow dark">About us</span>
              <h1 style={{ fontSize: 'clamp(2.2rem,4.4vw,3.4rem)', fontWeight: 900 }}>About iRoofer Contractors</h1>
              <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 16 }}>
                iRoofer Contractors was founded in 2019 by {brand.owner}, a Dallas, GA roofer who
                built the company on a simple idea: show up on time, do the work right, and stand behind it.
                No high-pressure sales theater. No mystery change orders for work we already scoped.
                Honest roofing from people who live and work in the same west-metro neighborhoods you do.
              </p>
              <p style={{ color: '#52606b', marginTop: 12 }}>
                Since then we&apos;ve completed {brand.roofsCompleted}+ roofs across Dallas, Douglasville, Hiram and the west metro —
                with drone documentation, clear insurance scopes, and a crew that cleans up with magnets as part of how we work, not extras.
              </p>
              <p style={{ marginTop: 20 }}>
                <a className="btn btn-ink" href="/contact/">Talk to Cristian’s crew <span className="arr">→</span></a>
                {' '}
                <a className="btn btn-ghost" href={`tel:${brand.phone}`} style={{ marginLeft: 8 }}>{brand.phone}</a>
                {' '}
                <a className="btn btn-ghost" href="https://maps.app.goo.gl/oZg9a1cuNvUi3Ut99" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8 }}>Google reviews</a>
              </p>
            </div>
            <div className="rv" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {values.map((v) => (
                <div key={v.t} style={{ background: '#fff', border: '1px solid rgba(22,29,37,.10)', borderRadius: 8, padding: '1.4rem' }}>
                  <h2 style={{ color: 'var(--ink)', fontFamily: 'var(--display)', fontSize: '1.2rem', marginBottom: 6 }}>{v.t}</h2>
                  <p style={{ color: '#52606b', fontSize: '.95rem', margin: 0 }}>{v.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="sec-head rv" style={{ marginTop: 64 }}>
            <span className="eyebrow dark">How we work</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>Process, not slogans</h2>
          </div>
          <div className="cards" style={{ marginTop: 24 }}>
            {process.map((p) => (
              <div className="card" key={p.n}><div className="body"><h3>{p.n} · {p.t}</h3><p style={{ color: '#52606b' }}>{p.d}</p></div></div>
            ))}
          </div>

          <div className="sec-head rv" style={{ marginTop: 64 }}>
            <span className="eyebrow dark">Experience &amp; trust</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>Credentials you can verify</h2>
            <p style={{ color: '#52606b', marginTop: 12, maxWidth: 640 }}>
              We publish what homeowners actually ask for — licensing posture, manufacturer standing, and real Google reviews — not vague &quot;best in Atlanta&quot; claims.
            </p>
          </div>
          <div className="cards" style={{ marginTop: 24 }}>
            {credentials.map((c) => (
              <div className="card" key={c.t}><div className="body"><h3>{c.t}</h3><p style={{ color: '#52606b' }}>{c.d}</p></div></div>
            ))}
          </div>

          <div className="faq-grid" style={{ marginTop: 64, alignItems: 'start' }}>
            <div className="rv">
              <span className="eyebrow dark">Who you’ll work with</span>
              <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>{brand.owner}</h2>
              <p style={{ color: '#52606b', marginTop: 12 }}>
                Owner-operator based in Dallas, GA. Cristian runs estimates, storm documentation (including drone
                photos when they help you or the claim), and crew scheduling. When you call {brand.phone}, you’re reaching
                the people connected to your roof — not a national dispatch desk.
              </p>
              <p style={{ color: '#52606b', marginTop: 12 }}>
                Shop &amp; office: 152 Freedom Dr, Dallas, GA 30157 (by appointment). Hours: {brand.hours.full}.
              </p>
            </div>
            <div className="rv">
              <span className="eyebrow dark">What we won’t do</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 900 }}>Straight talk</h2>
              <ul style={{ color: '#52606b', lineHeight: 1.9, marginTop: 12 }}>
                <li>Scare you into a full replacement over a fixable boot</li>
                <li>Promise insurance outcomes we don’t control</li>
                <li>Invent &quot;#1 roofer in Atlanta&quot; lines</li>
                <li>Disappear after the dumpster leaves</li>
              </ul>
              <p style={{ color: '#52606b', marginTop: 20 }}>
                Service area: {brand.serviceArea.join(' · ')}.
              </p>
              <p style={{ marginTop: 16 }}>
                <Link href="/dallas-ga-roofing/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Dallas, GA roofing hub →</Link>
              </p>
              <p style={{ marginTop: 8 }}>
                <Link href="/services/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Services →</Link>
              </p>
              <p style={{ marginTop: 8 }}>
                <Link href="/services/roof-insurance-claims/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Roof insurance claim help →</Link>
              </p>
              <p style={{ marginTop: 8 }}>
                <Link href="/contact/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Contact →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">About FAQ</span>
            <h2>Questions neighbors ask</h2>
          </div>
          <div className="faq-list rv">
            {faqs.map((f, i) => (
              <div key={f.q} className={'faq-item' + (i === 0 ? ' open' : '')}>
                <button className="faq-q" aria-expanded={i === 0}>{f.q}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            Talk to Cristian’s crew: <a href={`tel:${brand.phone}`} style={{ fontWeight: 800, color: 'var(--orange)' }}>{brand.phone}</a>
            {' · '}
            <Link href="/contact/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Contact</Link>
          </p>
        </div>
      </section>
      <FaqSchema faq={faqs} />
    </>
  );
}
