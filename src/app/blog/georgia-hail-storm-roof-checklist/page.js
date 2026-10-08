import { OG_IMAGE } from '@/lib/seo';
import Link from 'next/link';
import { brand } from '@/lib/brand';
import BlogPostingSchema from '@/components/BlogPostingSchema';
import { FaqSchema } from '@/components/LocalSeo';

const TITLE = 'Hail Damage Roof Checklist for Georgia Homeowners';
const DESC =
  'Hail hit your Georgia roof? What hail damage looks like, what to photograph, when to call your insurer and a roofer — from a family-owned Dallas, GA crew.';
const URL = 'https://iroofercontractors.com/blog/georgia-hail-storm-roof-checklist/';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    title: TITLE,
    description: DESC,
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: URL,
  },
};

const MUTED = '#52606b';
const A = { color: 'var(--orange)', fontWeight: 700 };

const signs = [
  ['Bruised shingles', 'dark spots where granules have been knocked off, sometimes soft to the touch, scattered randomly across a slope. (Wind damage is directional; hail is random.)'],
  ['Granules in the gutters or at the downspouts', 'after the storm, more than the usual trickle.'],
  ['Cracked or split shingles', 'especially on older, more brittle roofs.'],
  ['Dents in soft metals', 'box vents, ridge vents, flashing, gutters, downspouts, and the AC unit’s fins. These are the easiest hail evidence to see from the ground and they help date the damage to a specific storm.'],
  ['Damage beyond the roof', 'dinged siding, window screens, fences, cars. If they took hits, the roof did too.'],
];

const steps = [
  {
    n: '1',
    t: 'Stay safe and stay off the roof',
    d: 'Wait for the storm to pass completely. Don’t climb onto a wet or damaged roof. Hail damage is often invisible, and footing on bruised shingles is bad.',
  },
  {
    n: '2',
    t: 'Photograph everything from the ground and inside',
    d: 'Gutters, downspouts, vents you can see, siding, window screens, the yard, any ceiling stains. Note the date and time of the storm. These photos help your claim and our inspection.',
  },
  {
    n: '3',
    t: 'Stop any active water',
    d: `If water is coming in, call ${brand.phone} for temporary tarping. Mitigating quickly protects the house, and insurers can reduce a settlement for damage that got worse after the storm.`,
  },
  {
    n: '4',
    t: 'Get a free roof inspection from a local roofer',
    d: 'Someone with a real local address who will walk the roof, photograph damage slope by slope, and tell you honestly whether it looks like a claim or a repair. (See “Who should check my roof?” below.)',
  },
  {
    n: '5',
    t: 'Talk to your insurer, and read your policy',
    d: 'Check your policy’s notice requirements and your deductible. Don’t sign anything with a contractor that hands over your claim before you understand it. You choose your contractor, not the insurer.',
  },
  {
    n: '6',
    t: 'Meet the adjuster with documentation, then repair or replace the right way',
    d: 'Have your roofer there if you can, with the photos and a written scope. If damage is isolated, a repair may be all you need. If it’s across the roof, replacement may be supported, depending on your policy. Either way, insist on work done to manufacturer specification so your warranty holds.',
  },
];

const checklist = [
  'Local address you can drive to. Ours is 152 Freedom Dr, Dallas, GA 30157.',
  'Proof of licensing and insurance. Ask for documents, not a promise.',
  'A written scope with photos before work starts, not a verbal number.',
  'Local permit know-how. Some cities run their own permitting with their own contractor requirements (Powder Springs, for example, requires a local business license and a code compliance bond).',
  'No pressure to sign on the spot, and no contract that takes over your claim before you’ve read your policy.',
  'Someone who’ll still answer the phone when the warranty matters years from now.',
];

const faqs = [
  {
    q: 'Who should I have check my roof after a hailstorm in the Atlanta area?',
    a: `A local roofer with a real address who will get on the roof, photograph damage slope by slope, and give you a written finding, including telling you when there’s nothing worth claiming. Around Dallas and the west metro, that’s what we do: ${brand.phone}.`,
  },
  {
    q: 'How do I know if hail damaged my roof if I can’t see anything?',
    a: 'Look at what you can see from the ground: dented gutters, downspouts and vents, granules collecting at downspouts, dings on siding or screens. If those took hits, have the roof inspected. Shingle bruises usually aren’t visible from the yard.',
  },
  {
    q: 'Is hail damage a repair or a replacement?',
    a: 'It depends on how widespread it is. Scattered bruising on one slope can be a repair. Damage across the whole roof may support a replacement under your policy. Documentation first, decision second.',
  },
  {
    q: 'Do I have to use the roofer my insurance company recommends?',
    a: 'No. You choose your contractor.',
  },
];

const stormPages = [
  ['/storm-damage-roof-repair-dallas-ga/', 'Dallas'],
  ['/storm-damage-roof-repair-douglasville/', 'Douglasville'],
  ['/storm-damage-roof-repair-kennesaw/', 'Kennesaw'],
  ['/storm-damage-roof-repair-marietta/', 'Marietta'],
  ['/storm-damage-roof-repair-hiram/', 'Hiram'],
];

export default function BlogStormChecklist() {
  return (
    <>
      <BlogPostingSchema slug="georgia-hail-storm-roof-checklist" />
      <article className="sec-light sec-pad">
      <div className="wrap">
        <div className="rv">
          <span className="eyebrow dark">Updated October 2026</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', fontWeight: 900, lineHeight: 1.05 }}>
            Hail Damage on Your Georgia Roof: What It Looks Like and What to Do (6 Steps)
          </h1>
          <p style={{ color: MUTED, marginTop: 12, fontSize: '1.05rem' }}>
            North Georgia gets hail most years, and hail damage is easy to miss from the ground. A roof can look fine from the driveway and still have bruised shingles that start leaking months later. Here’s what hail damage actually looks like, and a six-step checklist for the days after a storm, from iRoofer Contractors, a family-owned roofing crew in Dallas, GA since 2019.
          </p>
          <p className="byline">
            By iRoofer Contractors
          </p>
        </div>

        <div className="rv" style={{ marginTop: 40, maxWidth: 820 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>What hail damage looks like on a roof</h2>
          <ul style={{ color: MUTED, lineHeight: 1.7, marginTop: 12, paddingLeft: 22 }}>
            {signs.map(([b, t]) => (
              <li key={b} style={{ marginBottom: 6 }}><strong style={{ color: 'var(--ink)' }}>{b}:</strong> {t}</li>
            ))}
          </ul>
        </div>

        <div className="rv" style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 20 }}>After a hail storm: 6 steps</h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 24 }}>
            {steps.map((s) => (
              <li key={s.n} style={{ display: 'flex', gap: 20, alignItems: 'flexStart' }}>
                <span style={{
                  minWidth: 48, height: 48, borderRadius: '50%', background: 'var(--orange)', color: '#fff',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--display)', fontSize: '1.4rem', fontWeight: 800, flexShrink: 0,
                }}>{s.n}</span>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: 0 }}>{s.t}</h3>
                  <p style={{ color: MUTED, fontSize: '.95rem', lineHeight: 1.6, margin: '8px 0 0' }}>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rv" style={{ marginTop: 48, maxWidth: 820 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>How to choose a roofer after a hail storm (checklist)</h2>
          <p style={{ color: MUTED, marginTop: 10 }}>After a big hail event, out-of-town crews follow the storm. Before anyone gets on your roof:</p>
          <ul style={{ color: MUTED, lineHeight: 1.7, marginTop: 10, paddingLeft: 0, listStyle: 'none' }}>
            {checklist.map((c) => (
              <li key={c} style={{ marginBottom: 6 }}>☐ {c}</li>
            ))}
          </ul>
        </div>

        <div className="rv" style={{ marginTop: 40, maxWidth: 820 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Hail damage help near you</h2>
          <p style={{ color: MUTED, marginTop: 10, lineHeight: 1.7 }}>
            We document and repair hail damage across Dallas, Paulding and nearby Cobb and Douglas County cities, and we install Owens Corning systems as a Preferred Contractor when that’s the right fit. Local storm pages:{' '}
            {stormPages.map(([href, label], i) => (
              <span key={href}>
                <Link href={href} style={A}>{label}</Link>
                {i < stormPages.length - 1 ? ' · ' : ''}
              </span>
            ))}
            . Claim help: <Link href="/services/roof-insurance-claims/" style={A}>roof insurance claims</Link>.
          </p>
        </div>

        <div className="rv" style={{ marginTop: 48, padding: '2rem', background: '#fff', border: '1px solid rgba(22,29,37,.1)', borderRadius: 8 }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>Think hail got your roof?</h2>
          <p style={{ color: MUTED }}>
            Book a free storm-damage inspection at{' '}
            <Link href="/contact/" style={A}>https://iroofercontractors.com/contact/</Link>
            {' '}or call{' '}
            <a href={`tel:${brand.phone}`} style={A}>{brand.phone}</a>. We’ll photograph what we find, tell you honestly whether it’s a claim or a repair, and meet your adjuster if you want us there.
          </p>
          <p style={{ color: MUTED, marginTop: 10 }}>
            <strong>Water coming in right now?</strong>{' '}
            <Link href="/emergency-roof-repair-dallas-ga/" style={A}>Emergency roof repair</Link>
          </p>
          <Link href="/contact/" className="btn btn-solid" style={{ display: 'inline-block', marginTop: 16 }}>
            Book a free storm inspection <span className="arr">→</span>
          </Link>
        </div>

        <div className="rv" style={{ marginTop: 48, maxWidth: 820 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 16 }}>Hail damage questions</h2>
          <div style={{ display: 'grid', gap: 18 }}>
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 6 }}>{f.q}</h3>
                <p style={{ margin: 0, color: MUTED, lineHeight: 1.7 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
    <FaqSchema faq={faqs} />
    </>
  );
}
