import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import Link from 'next/link';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: 'About iRoofer Contractors | Family-Owned Dallas GA Roofing Since 2019',
  description:
    'Meet Cristian Mendez and the iRoofer crew — family-owned in Dallas, GA since 2019. Call (470) 236-1410 or visit our contact page.',
  path: '/about',
});

const values = [
  { t: 'Local & Family-Owned', d: 'We live and work in Dallas, GA, where we roof. You get the owner’s number, not a call center.' },
  { t: 'Stand Behind Our Work', d: 'Every job has our name on it. We show up, do it right, and still answer the phone after the job is done.' },
  { t: 'Clean Job Sites', d: 'We clean up every day and sweep for nails with a magnet. Kids, pets, and lawns stay safe.' },
  { t: 'Honest Pricing', d: 'Clear prices up front. No pressure. No surprise charges for work we already planned.' },
];

// VERIFY-OR-CUT: specific review totals / star claims softened pending live GBP confirmation.
const credentials = [
  { t: 'Owens Corning Contractor Rewards Member', d: 'We install Owens Corning shingles the way Owens Corning says to.' },
  { t: 'Family-owned since 2019', d: 'Repairs, new roofs, storm claims, and new homes, for homeowners and builders west of Atlanta.' },
  { t: 'Strong Google reviews', d: 'From neighbors in Dallas, Hiram, Douglasville, and nearby towns. Read them yourself on Google.' },
];

const process = [
  { n: '01', t: 'Listen', d: 'Tell us about your leak, storm, new roof, gutters, or build.' },
  { n: '02', t: 'Inspect & document', d: 'We take photos and explain what we find in plain words.' },
  { n: '03', t: 'Write the plan', d: 'What’s included, and what could change if the wood under the shingles is soft.' },
  { n: '04', t: 'Schedule the crew', d: 'We pick a start date around the weather.' },
  { n: '05', t: 'Install or repair', d: 'New roofs go on the way the shingle maker says. Repairs get careful metal work.' },
  { n: '06', t: 'Clean up', d: 'We sweep for nails with a magnet and leave your yard clean.' },
  { n: '07', t: 'Walkthrough', d: 'Shingle warranty paperwork and simple care tips.' },
];

const faqs = [
  {
    q: 'Who owns iRoofer?',
    a: 'Cristian Mendez. Family-owned since 2019.',
  },
  {
    q: 'Where are you located?',
    a: '152 Freedom Dr, Dallas, GA 30157. Phone (470) 236-1410.',
  },
  {
    q: 'Do you only work Dallas?',
    a: 'Dallas is home. We also work often in the towns on our service areas page.',
  },
  {
    q: 'Are you a storm-chaser outfit?',
    a: 'No. We’re based in Dallas year-round.',
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
              <h1 style={{ fontSize: 'clamp(2.2rem,4.4vw,3.4rem)', fontWeight: 900 }}>About iRoofer Contractors — Cristian Mendez &amp; Crew</h1>
              <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 16 }}>
                iRoofer Contractors is a family-owned roofing company based at 152 Freedom Dr, Dallas, GA 30157. Owner {brand.owner} started it in 2019. He wanted homeowners west of Atlanta to have a local crew that shows up, tells the truth about the roof, and stands behind the work. We install Owens Corning shingles as an Owens Corning Contractor Rewards member.
              </p>
              <p style={{ color: '#52606b', marginTop: 12 }}>
                Now that you know us, let’s talk about <em>your</em> roof. Free roof checks with photos. Written plans. Clean job sites with magnet nail sweeps. The same crew from start to finish.
              </p>
              <p style={{ marginTop: 20 }}>
                <a className="btn btn-ink" href="/free-roof-check/">Get your free roof check <span className="arr">→</span></a>
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
            <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>Facts you can check</h2>
            <p style={{ color: '#52606b', marginTop: 12, maxWidth: 640 }}>
              We share what homeowners ask about: who we work with and real Google reviews. No vague &quot;best in Atlanta&quot; claims.
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
                The owner, based in Dallas, GA. Cristian does the estimates, the storm photos (by drone when it helps),
                and the crew schedule. When you call {brand.phone}, you reach the people who work on your roof,
                not a far-away call center.
              </p>
              <p style={{ color: '#52606b', marginTop: 12 }}>
                Shop &amp; office: 152 Freedom Dr, Dallas, GA 30157 (by appointment). Hours: {brand.hours.full}.
              </p>
            </div>
            <div className="rv">
              <span className="eyebrow dark">What we won’t do</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 900 }}>Straight talk</h2>
              <ul style={{ color: '#52606b', lineHeight: 1.9, marginTop: 12 }}>
                <li>Scare you into a new roof over a pipe boot we can fix</li>
                <li>Promise what insurance will pay</li>
                <li>Call ourselves &quot;#1 roofer in Atlanta&quot;</li>
                <li>Disappear after the job is done</li>
              </ul>
              <p style={{ color: '#52606b', marginTop: 20 }}>
                Service area: {brand.serviceArea.join(' · ')}.
              </p>
              <p style={{ marginTop: 16 }}>
                <Link href="/roof-repair-dallas-ga/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Roof repair Dallas →</Link>
              </p>
              <p style={{ marginTop: 8 }}>
                <Link href="/roof-replacement-dallas-ga/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Roof replacement Dallas →</Link>
              </p>
              <p style={{ marginTop: 8 }}>
                <Link href="/storm-damage-roof-repair-dallas-ga/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Storm damage Dallas →</Link>
              </p>
              <p style={{ marginTop: 8 }}>
                <Link href="/emergency-roof-repair-dallas-ga/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Emergency roof repair →</Link>
              </p>
              <p style={{ marginTop: 8 }}>
                <Link href="/dallas-ga-roofing/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Dallas, GA roofing hub →</Link>
              </p>
              <p style={{ marginTop: 8 }}>
                <Link href="/service-areas/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Service areas →</Link>
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
