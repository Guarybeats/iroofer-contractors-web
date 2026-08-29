import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import RelatedGuides from '@/components/RelatedGuides';
import PriceDisclaimer from '@/components/PriceDisclaimer';
import { services, brand } from '@/lib/brand';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Gutter Repair & Replacement | Dallas, GA Roofers',
  description:
    'Sagging, leaking, or clogged gutters damage your roof, fascia, and foundation. iRoofer Contractors repairs, realigns, and replaces seamless gutters in Dallas, GA & Metro Atlanta. Free inspection — call (470) 236-1410.',
  path: '/services/gutter-repair-replacement',
});

const gallery = [
  { src: '/assets/service-gutters-main.webp', fallback: '/assets/service-gutters-main.jpg', alt: 'Seamless gutter installation on a Dallas, GA home', cap: 'Seamless gutter install', tag: 'New gutters' },
  { src: '/assets/service-gutters-repair.webp', fallback: '/assets/service-gutters-repair.jpg', alt: 'Repairing a sagging gutter run in Paulding County', cap: 'Gutter repair & realignment', tag: 'Repair' },
  { src: '/assets/service-gutters-clean.webp', fallback: '/assets/service-gutters-clean.jpg', alt: 'Clearing leaves and debris from an overflowing gutter', cap: 'Cleaning & leaf guard', tag: 'Protection' },
];

const servicesList = [
  { n: '01', title: 'Gutter Cleaning', body: 'Scooped and flushed to the downspouts, with clogs cleared and water flow verified. We can also identify damage while we’re up there — sagging runs, open seams, or missing end caps that will fail later.' },
  { n: '02', title: 'Repair & Realignment', body: 'Sagging gutters, popped seams, leaking joints, and gutters pulling away from the fascia — we re-hang, re-seal, and true the slope so water drains instead of pooling.' },
  { n: '03', title: 'Full Seamless Replacement', body: 'Old, undersized, or dented gutters come down and new seamless aluminum goes up — custom-cut to your roofline with correct fall, downspouts, and hangers. No splice seams to leak.' },
  { n: '04', title: 'Downspout & Drainage', body: 'Extensions that dump against the foundation are a fixable cause of basement and crawlspace moisture. We reroute or extend downspouts so water lands away from your home.' },
  { n: '05', title: 'Leaf Guard & Gutter Covers', body: 'Dallas is full of pines and oaks. Gutter guards cut cleaning frequency dramatically — we carry several styles and match the right one to your tree coverage and roof slope.' },
  { n: '06', title: 'Fascia & Soffit Repair', body: 'Rotting fascia behind failing gutters gets replaced before new gutters go up, so the new run has something solid to fasten to. Done together, it’s one trip, one crew.' },
];

const faqs = [
  { q: 'How often should gutters be cleaned in Dallas, GA?', a: 'Most Dallas homes need cleaning twice a year — after spring pollen and tree bloom, and again after fall leaves drop. Homes under heavy pine or oak can need every 3–4 months. Clogged gutters are the #1 cause of the fascia rot, roof-edge leaks, and foundation moisture we fix.' },
  { q: 'Gutter repair vs. replacement — how do I know which I need?', a: 'We inspect free and give it to you straight. Isolated leaks, a sagging section, or popped seams usually repair for a fraction of the cost. Widespread rust-through, gutters that are undersized for your roof, or damage across more than half the run usually point to replacement — often cheaper than a year of piecemeal patches.' },
  { q: 'Do seamless gutters really matter?', a: 'Yes. Seamed gutters leak at every joint — that’s where most gutter failures start. Seamless gutters are formed on-site from a single piece per run, so the only joints are at corners and downspouts. For Dallas homes with long runs or second-story gutters, it’s a big reliability upgrade.' },
  { q: 'Will you work with my insurance for gutter damage?', a: 'Storm damage to gutters — dents from hail, mangled downspouts, or gutters torn off by wind — is claimable. We document the damage, meet the adjuster on-site, and include the gutters in your roofing scope when it’s all one storm claim.' },
  { q: 'Can you do gutters and a roof at the same time?', a: 'Absolutely — and it’s usually the smarter way to do it. New gutters hung right after a re-roof means the drip edge, underlayment, and gutters are done by one crew with one warranty, and the fascia is already exposed for inspection.' },
];

export default function GutterPage() {
  const related = services.filter((s) => s.slug !== 'gutter-repair-replacement');

  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <Link href="/services" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>← All services</Link>

        <div className="faq-grid" style={{ marginTop: 18, alignItems: 'center' }}>
          <div className="rv">
            <span className="eyebrow dark">Gutter repair & replacement</span>
            <h1 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', fontWeight: 900, lineHeight: 1.04 }}>Protect your roof, fascia &amp; <span className="ac">foundation.</span></h1>
            <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 14, maxWidth: 640 }}>
              Clogged or failing gutters are the #1 cause of preventable roof and foundation damage in Dallas, GA — water has nowhere to go but back under your shingles and against your slab. We repair, realign, and replace gutters and downspouts so water flows <strong>away</strong> from your home, not into it.
            </p>
            <ul style={{ lineHeight: 2.1, color: '#52606b', marginTop: 16 }}>
              <li>Free, no-pressure gutter inspection with photos</li>
              <li>Seamless aluminum replacement, custom-cut on-site</li>
              <li>Storm &amp; insurance claim help for hail/wind gutter damage</li>
              <li>Done by the same local crew that roofs your home</li>
            </ul>
            <p style={{ marginTop: 20 }}>
              <a className="btn btn-ink" href="#gutter-quote">Get a free gutter inspection <span className="arr">→</span></a>
              <RelatedGuides slug="gutter-repair-replacement" />
            </p>
          </div>
          <div className="rv">
            <img src="/assets/service-gutters-main.webp" alt="Seamless gutter installation on a Dallas, GA home" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%' }} loading="eager" decoding="async" />
          </div>
        </div>

        {/* GALLERY */}
        <div className="blog-grid" style={{ marginTop: 56 }}>
          {gallery.map((g) => (
            <figure key={g.src} className="gcard" style={{ borderRadius: 8, margin: 0, height: 240 }}>
              <img src={g.src} alt={g.alt} loading="lazy" decoding="async" />
              <figcaption className="cap"><span>{g.tag}</span><b>{g.cap}</b></figcaption>
            </figure>
          ))}
        </div>

        {/* SERVICES LIST */}
        <div className="svc-grid" style={{ marginTop: 64 }}>
          <div className="svc-intro rv">
            <span className="eyebrow dark">What we do</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900, lineHeight: 1.08 }}>Every gutter job, one local crew.</h2>
            <p style={{ color: '#52606b', marginTop: 12 }}>
              Whether it’s a full seamless replacement or a single clog, the same Dallas-based crew handles it — with honest pricing and a written scope before any work starts.
            </p>
          </div>
          <div className="svc-list rv" style={{ marginTop: 0 }}>
            {servicesList.map((s) => (
              <article className={`svc${s.n === '01' ? ' open' : ''}`} key={s.n}>
                <button className="svc-head" aria-expanded={s.n === '01' ? 'true' : 'false'}>
                  <span className="svc-num">{s.n}</span><span className="svc-title">{s.title}</span>
                  <span className="svc-plus" aria-hidden="true" />
                </button>
                <div className="svc-body"><div className="svc-inner"><p>{s.body}</p></div></div>
              </article>
            ))}
          </div>
        </div>

        {/* WHAT IT COSTS */}
        <div className="sec-head rv" style={{ marginTop: 64 }}>
          <span className="eyebrow dark">Ballpark pricing</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>What gutter work costs in Dallas, GA</h2>
          <p style={{ color: '#52606b', marginTop: 12, maxWidth: 640 }}>Rough ranges for Paulding and Cobb counties — your exact quote comes after a free inspection, no obligation.</p>
        </div>
        <PriceDisclaimer />
        <div className="cards" style={{ marginTop: 24 }}>
          <div className="card"><div className="body"><h3>Gutter Cleaning</h3><p style={{ color: '#52606b' }}>Per-run cleaning with flush-through, clog removal, and a quick damage check.</p><span className="more">$1.50–$3.00 per linear ft</span></div></div>
          <div className="card"><div className="body"><h3>Repair & Realignment</h3><p style={{ color: '#52606b' }}>Sagging runs, popped seams, and leaking joints re-hung and re-sealed.</p><span className="more">$150–$400 per repair</span></div></div>
          <div className="card"><div className="body"><h3>Seamless Replacement</h3><p style={{ color: '#52606b' }}>New seamless aluminum, custom-cut, with downspouts, hangers, and fall set right.</p><span className="more">$6–$9 per linear ft installed</span></div></div>
          <div className="card"><div className="body"><h3>Leaf Guard / Gutter Covers</h3><p style={{ color: '#52606b' }}>Guard styles matched to your tree cover, installed on new or existing gutters.</p><span className="more">$4–$8 per linear ft</span></div></div>
          <div className="card"><div className="body"><h3>Downspout Reroute</h3><p style={{ color: '#52606b' }}>Extensions and reroutes that stop water from pooling against the foundation.</p><span className="more">$75–$200 per downspout</span></div></div>
          <div className="card"><div className="body"><h3>Fascia Repair</h3><p style={{ color: '#52606b' }}>Rotted fascia replaced before new gutters hang, so the fasteners bite into solid wood.</p><span className="more">$6–$10 per linear ft</span></div></div>
        </div>

        {/* FAQ */}
        <div className="faq-grid" style={{ marginTop: 64, alignItems: 'start' }}>
          <div className="rv">
            <span className="eyebrow dark">Good to know</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>Gutter questions we hear every week.</h2>
            <p style={{ color: '#52606b', marginTop: 12 }}>
              Still unsure? A real person — not a call center — will answer the phone.
            </p>
            <div className="faq-call">
              <div className="lbl">Talk to a roofer</div>
              <a href={`tel:${brand.phone}`}>{brand.phone}</a>
            </div>
          </div>
          <div className="faq-list rv">
            {faqs.map((f, i) => (
              <div className={`faq-item${i === 0 ? ' open' : ''}`} key={i}>
                <button className="faq-q" aria-expanded={i === 0 ? 'true' : 'false'}>{f.q}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
        </div>

        {/* QUOTE */}
        <div style={{ maxWidth: 560, margin: '64px auto 0' }} id="gutter-quote">
          <QuoteForm variant="detail" id="quote-gutters" source="Gutter Service Page" title="Get Your Free Gutter Quote" />
        </div>

        {/* RELATED SERVICES */}
        <div className="sec-head rv" style={{ marginTop: 64 }}>
          <span className="eyebrow dark">Keep your home dry</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>Related services</h2>
        </div>
        <div className="cards" style={{ marginTop: 24 }}>
          {related.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card" style={{ color: 'inherit', textDecoration: 'none' }}>
              <img src={s.webp} alt={s.title} loading="lazy" />
              <div className="body">
                <h3>{s.title}</h3>
                <p style={{ color: '#52606b' }}>{s.summary}</p>
                <span className="more">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
