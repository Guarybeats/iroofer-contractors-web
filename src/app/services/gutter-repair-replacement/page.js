import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import FreeRoofCheckCta from '@/components/FreeRoofCheckCta';
import RelatedGuides from '@/components/RelatedGuides';
import PriceDisclaimer from '@/components/PriceDisclaimer';
import { services, brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { renderInline } from '@/components/InlineText';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: 'Gutter Repair & Replacement | Dallas, GA Roofers',
  description:
    'Sagging, leaking or clogged gutters damage roof, fascia and foundation. We repair and replace seamless gutters in Dallas, GA & Metro Atlanta.',
  path: '/services/gutter-repair-replacement',
});

const gallery = [
  { src: '/assets/service-gutters-main.webp?v=2', fallback: '/assets/service-gutters-main.jpg?v=2', alt: 'Seamless gutter installation on a Dallas, GA home', cap: 'Seamless gutter install', tag: 'New gutters' },
  { src: '/assets/service-gutters-repair.webp?v=2', fallback: '/assets/service-gutters-repair.jpg?v=2', alt: 'Repairing a sagging gutter run in Paulding County', cap: 'Gutter repair & realignment', tag: 'Repair' },
  { src: '/assets/service-gutters-clean.webp?v=2', fallback: '/assets/service-gutters-clean.jpg?v=2', alt: 'Clearing leaves and debris from an overflowing gutter', cap: 'Cleaning & leaf guard', tag: 'Protection' },
];

const servicesList = [
  { n: '01', title: 'Gutter Cleaning', body: 'We scoop out the gutters and flush the downspouts. We clear clogs and make sure water flows. While we’re up there, we look for sagging runs, open seams, or missing end caps.' },
  { n: '02', title: 'Repair & Realignment', body: 'Gutters that sag, leak at the seams, or pull away from the board behind them (the fascia)? We re-hang them, re-seal them, and fix the slope so water drains instead of sitting.' },
  { n: '03', title: 'Full Seamless Replacement', body: 'Old, small, or dented gutters come down. New seamless aluminum gutters go up, cut to fit your roof. We set the slope, downspouts, and hangers right. No seams in the middle to leak.' },
  { n: '04', title: 'Downspout & Drainage', body: 'Downspouts that dump water by the foundation can make a basement or crawlspace damp. We move or extend them so water lands away from your home.' },
  { n: '05', title: 'Leaf Guard & Gutter Covers', body: 'Dallas has lots of pines and oaks. Gutter guards mean you clean far less often. We have several styles and pick the right one for your trees and roof.' },
  { n: '06', title: 'Fascia & Soffit Repair', body: 'If the board behind your gutters (the fascia) is rotten, we replace it first. That gives new gutters something solid to hold on to. One trip, one crew.' },
];

const faqs = [
  { q: 'How often should gutters be cleaned in Dallas, GA?', a: 'Most Dallas homes need it twice a year: once after spring pollen, and again after the fall leaves drop. Homes under lots of pines or oaks may need it every 3–4 months. Clogged gutters are a common cause of rotten fascia, leaks at the roof edge, and a damp foundation.' },
  { q: 'Gutter repair vs. replacement — how do I know which I need?', a: 'We look for free and tell you straight. One leak, one sagging section, or a few open seams can usually be fixed for much less. Rust all over, gutters too small for your roof, or damage on more than half the run usually means new gutters. That often costs less than a year of patches.' },
  { q: 'Do seamless gutters really matter?', a: 'Yes. Gutters with seams can leak at every joint. Seamless gutters are made on site from one long piece per run. The only joints are at corners and downspouts. For long runs or second-story gutters, that makes a big difference.' },
  { q: 'Will you work with my insurance for gutter damage?', a: 'Storm damage to gutters, like hail dents, bent downspouts, or gutters torn off by wind, can be part of a claim. It depends on your policy. We take photos, meet the adjuster at your home, and add the gutters to your roof claim when it’s all from one storm.' },
  { q: 'Can you do gutters and a roof at the same time?', a: 'Yes, and it’s often the smart way to do it. When we hang new gutters right after a new roof, one crew does the drip edge, the roof layers, and the gutters. The fascia is also easy to check then.' },
];

export default function GutterPage() {
  const related = services.filter((s) => s.slug !== 'gutter-repair-replacement');

  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <Link href="/services/" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>← All services</Link>

        <div className="faq-grid" style={{ marginTop: 18, alignItems: 'center' }}>
          <div className="rv">
            <span className="eyebrow dark">Gutter repair & replacement</span>
            <h1 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', fontWeight: 900, lineHeight: 1.04 }}>Gutter Repair &amp; Replacement in <span className="ac">Dallas, GA</span></h1>
            <p style={{ fontSize: 'clamp(1.2rem,2.2vw,1.6rem)', fontWeight: 800, lineHeight: 1.2, marginTop: 10 }}>Protect your roof, fascia &amp; foundation.</p>
            <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 14, maxWidth: 640 }}>
              When gutters clog or fail in Dallas, GA, water has nowhere to go. It backs up under your shingles and pools by your foundation. We fix, re-hang, and replace gutters and downspouts so water flows <strong>away</strong> from your home, not into it.
            </p>
            <ul style={{ lineHeight: 2.1, color: '#52606b', marginTop: 16 }}>
              <li>Free, no-pressure gutter inspection with photos</li>
              <li>Seamless aluminum replacement, custom-cut on-site</li>
              <li>Help with insurance claims for hail or wind damage</li>
              <li>Done by the same local crew that roofs your home</li>
            </ul>
            <p style={{ marginTop: 20 }}>
              <a className="btn btn-ink" href="#gutter-quote">Get a free gutter inspection <span className="arr">→</span></a>
              <RelatedGuides slug="gutter-repair-replacement" />
            </p>
          </div>
          <div className="rv">
            <img src="/assets/service-gutters-main.webp?v=2" alt="Seamless gutter installation on a Dallas, GA home" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%' }} loading="eager" decoding="async" />
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
              New seamless gutters or one clog, the same Dallas crew does it. You get an honest price and a written plan before we start.
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


        <div className="rv" style={{ marginTop: 56 }}>
          <span className="eyebrow dark">Dallas pages</span>
          <h2 style={{ fontSize: 'clamp(1.4rem,2.4vw,1.8rem)', fontWeight: 800, marginTop: 8 }}>Gutter work tied to your Dallas roof</h2>
          <p style={{ color: '#52606b', marginTop: 8, maxWidth: 640 }}>
            The same local crew from 152 Freedom Dr. We can do gutters, drip edge, and roofing together when that makes more sense.
          </p>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem 1.4rem', marginTop: 12, listStyle: 'none', padding: 0 }}>
            <li><Link href="/gutter-repair-replacement-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '.95rem' }}>Gutter repair &amp; replacement Dallas GA →</Link></li>
            <li><Link href="/roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '.95rem' }}>Roof repair in Dallas GA →</Link></li>
            <li><Link href="/roof-replacement-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '.95rem' }}>Roof replacement in Dallas GA →</Link></li>
            <li><Link href="/dallas-ga-roofing/" style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '.95rem' }}>All Dallas GA roofing services →</Link></li>
          </ul>
        </div>

        {/* WHAT IT COSTS */}
        <div className="sec-head rv" style={{ marginTop: 64 }}>
          <span className="eyebrow dark">Pricing</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>What gutter work costs in Dallas, GA</h2>
          <p style={{ color: '#52606b', marginTop: 12, maxWidth: 640 }}>We don’t post prices online. Length, height, downspouts, the wood behind the gutters, and guard style all change the price. You get a written quote after a free check. No obligation.</p>
        </div>
        <PriceDisclaimer />
        <div className="cards" style={{ marginTop: 24 }}>
          <div className="card"><div className="body"><h3>Gutter Cleaning</h3><p style={{ color: '#52606b' }}>We clean each run, flush it, clear clogs, and check for damage.</p></div></div>
          <div className="card"><div className="body"><h3>Repair & Realignment</h3><p style={{ color: '#52606b' }}>We re-hang sagging runs and re-seal leaky seams.</p></div></div>
          <div className="card"><div className="body"><h3>Seamless Replacement</h3><p style={{ color: '#52606b' }}>New seamless aluminum, cut to fit, with downspouts and hangers set right.</p></div></div>
          <div className="card"><div className="body"><h3>Leaf Guard / Gutter Covers</h3><p style={{ color: '#52606b' }}>Guards picked for your trees, put on new or old gutters.</p></div></div>
          <div className="card"><div className="body"><h3>Downspout Reroute</h3><p style={{ color: '#52606b' }}>We extend or move downspouts so water doesn’t pool by your foundation.</p></div></div>
          <div className="card"><div className="body"><h3>Fascia Repair</h3><p style={{ color: '#52606b' }}>We replace rotten fascia before new gutters go up, so they hold tight.</p></div></div>
        </div>

        {/* FAQ */}
        <div className="faq-grid" style={{ marginTop: 64, alignItems: 'start' }}>
          <div className="rv">
            <span className="eyebrow dark">Good to know</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>Gutter questions we hear every week.</h2>
            <p style={{ color: '#52606b', marginTop: 12 }}>
              Still not sure? Call us. A real person answers, not a call center.
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
                <div className="faq-a"><div><p>{renderInline(f.a)}</p></div></div>
              </div>
            ))}
          </div>
        </div>

        {/* QUOTE */}
        <FreeRoofCheckCta />
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
            <Link key={s.slug} href={`/services/${s.slug}/`} className="card" style={{ color: 'inherit', textDecoration: 'none' }}>
              <img src={s.webp} alt={s.imageAlt || s.title} loading="lazy" />
              <div className="body">
                <h3>{s.title}</h3>
                <p style={{ color: '#52606b' }}>{s.summary}</p>
                <span className="more">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FaqSchema faq={faqs} />
    </section>
  );
}
