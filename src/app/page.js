import Link from 'next/link';
import { Archivo, Source_Sans_3 } from 'next/font/google';
import QuoteForm from '@/components/QuoteForm';
import HeroForm from '@/components/HeroForm';
import ReviewButton from '@/components/ReviewButton';
import { brand, cities } from '@/lib/brand';
import { renderInline } from '@/components/InlineText';
import { plainText } from '@/lib/inlineLinks';
import { GBP_URL } from '@/components/LocalSeo';
import { seo } from '@/lib/seo';
import s from './home.module.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  display: 'swap',
  variable: '--font-archivo',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-source-sans',
});

export const metadata = seo({
  title: 'Roof Repair & Replacement in Dallas, GA | iRoofer',
  description: 'Family-owned Dallas, GA roofer since 2019: roof repair, replacement, and storm and hail damage with insurance photos. Free inspection. Call (470) 236-1410.',
  path: '/',
});

const dallasLinks = [
  { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement in Dallas, GA' },
  { href: '/roof-repair-dallas-ga/', label: 'Roof repair / leak repair in Dallas, GA' },
  { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm & hail damage roof repair Dallas' },
  { href: '/services/roof-insurance-claims/', label: 'Insurance claims help' },
  { href: '/', label: 'Dallas roofing company hub' },
  { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency roof repair Dallas' },
  { href: '/gutter-repair-replacement-dallas-ga/', label: 'Gutter repair & replacement' },
  { href: '/metal-roofing-dallas-ga/', label: 'Metal roofing in Dallas, GA' },
  { href: '/roof-replacement-hiram/', label: 'Roof replacement in Hiram' },
  { href: '/service-areas/hiram/#roof-repair', label: 'Roof repair / inspection in Hiram' },
  { href: '/blog/roof-replacement-cost-dallas-ga/', label: 'Roof replacement cost factors' },
];

const faqs = [
  { q: 'Do you do roof repair in Dallas, GA?', a: 'Yes. Leaks, loose flashing, pipe boots, and storm wear are everyday work for us. Start at [roof repair in Dallas, GA](/roof-repair-dallas-ga/). Not sure what you need? Book a [free roof check](/free-roof-check/).' },
  { q: 'Do you replace roofs in Dallas, GA?', a: 'Yes. See [roof replacement in Dallas, GA](/roof-replacement-dallas-ga/). It shows what we do, how it works, and what comes next.' },
  { q: 'Hail or wind after a Dallas storm?', a: 'See [storm damage roof repair in Dallas](/storm-damage-roof-repair-dallas-ga/) and [roof insurance claims help](/services/roof-insurance-claims/). We take photos of the damage. What insurance approves depends on your policy, so we can’t promise a result.' },
  { q: 'Need Hiram help?', a: 'Go to [roof repair in Hiram](/service-areas/hiram/#roof-repair) or [roof replacement in Hiram](/roof-replacement-hiram/). It’s the same crew from Dallas. Call (470) 236-1410.' },
  { q: 'Looking for a Dallas roofing contractor?', a: 'Pick the service you need: repair, new roof, or storm. You can also call (470) 236-1410 or use https://iroofercontractors.com/contact/.' },
  { q: 'How long does a full replacement take?', a: 'It depends on the size and steepness of the roof, how many old layers come off, wood repairs, and weather. We give you a real schedule in writing before we start.' },
  { q: 'Do I need to be home during the work?', a: 'No. All the work is outside. We text you photos as we go and walk the job with you when you’re free.' },
  { q: 'Are you based in Dallas, or just advertising here?', a: 'We are based here, at 152 Freedom Dr, Dallas, GA 30157. Family-owned since 2019.' },
  { q: 'Do you publish prices here?', a: 'No. Every roof is different. You get a real price in writing after a free roof check. Ask for one at https://iroofercontractors.com/contact/ or call (470) 236-1410.' },
  { q: 'What do Georgia storms do to roofs here?', a: 'Spring and summer bring hail, strong winds, and falling limbs. That can mean dented shingles, lost shingle grit, loose flashing, and hidden leaks that show up weeks later. A free roof check catches them early.' },
  { q: 'Which areas do you serve around Dallas, GA?', a: 'Dallas, Douglasville, Hiram, Powder Springs, Marietta, Kennesaw, Acworth, Austell, Mableton, Lithia Springs, Roswell, Alpharetta, Canton, plus greater west Metro Atlanta (Paulding, Douglas, and Cobb counties).' },
  { q: 'Is the roof inspection really free?', a: 'Yes. The inspection and the written estimate are free, with no obligation. We photograph what we find and walk you through it, whether you hire us or not.' },
  { q: '¿Hablan español?', a: '¡Sí! Todo el proceso (inspección, estimado y trabajo) puede hacerse en español. Llame o mande un texto al (470) 236-1410.' },
];

const TEL = `tel:${brand.phone}`;

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
);

const heroPoints = [
  'Free inspection & written estimate',
  'Photos of your roof with every visit',
  'Storm & insurance-claim help',
  'Bilingual team — Hablamos español',
  'Owens Corning Contractor Rewards member',
];

const quickAnswers = [
  { q: 'Who is iRoofer Contractors?', a: `A family-owned roofing company based at 152 Freedom Dr, Dallas, GA 30157, owned by ${brand.owner} and serving Paulding County and west metro Atlanta since 2019.` },
  { q: 'What roofing services are offered?', a: 'Roof replacement, roof repair and leak repair, storm damage help with insurance claims, gutters, emergency tarping, and free roof inspections.' },
  { q: 'How much is a roof inspection?', a: 'Free. Every inspection includes photos of your roof and a straight, written estimate. No pressure and no obligation, whether you hire us or not.' },
  { q: 'Which cities does iRoofer serve?', a: 'Dallas, Hiram, Douglasville, Powder Springs, Marietta, Kennesaw, Acworth, Austell, Mableton, and Lithia Springs, across Paulding, Cobb, and Douglas counties.', link: { href: '/service-areas/', label: 'See every service area →' } },
  { q: 'How do I contact iRoofer?', a: `Call or text ${brand.phone}, or email ${brand.email}. Hours: Mon–Fri 9am–7pm, Sat 9am–5pm.` },
  { q: 'Is iRoofer rated & bilingual?', a: 'Yes. Rated 5.0★ from 54 Google reviews, and the team works in English and Spanish (hablamos español) for every inspection and estimate.' },
];

const icon = {
  replace: <path d="M3 11 12 4l9 7M5 10v10h14V10M10 20v-6h4v6" />,
  repair: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5Z" />,
  storm: <path d="M7 16a5 5 0 1 1 1-9.9A6 6 0 0 1 19 9a4 4 0 0 1-1 7.9M13 12l-3 5h4l-3 5" />,
  gutter: <path d="M3 7h18l-2 4H5L3 7Zm14 4v9M17 20h3" />,
  inspect: <path d="M11 4a7 7 0 1 0 4.9 12l4.6 4.5M8 11l2 2 4-4" />,
  emergency: <path d="M12 3 2 20h20L12 3Zm0 6v5m0 3h.01" />,
};

const serviceCards = [
  { key: 'replace', title: 'Roof Replacement', body: 'A full new roof when repairs no longer make sense: quality shingles, clean tear-off, and a tidy yard when we leave.',
    bullets: ['Architectural shingles', 'Full tear-off & deck check', 'Written estimate first'],
    links: [{ href: '/roof-replacement-dallas-ga/', label: 'Roof replacement in Dallas, GA →' }] },
  { key: 'repair', title: 'Roof Repair & Leak Repair', body: 'Stain on the ceiling? Drip in the attic? We find the real source of the leak, not just the spot where it shows up.',
    bullets: ['Leak detection & repair', 'Missing or damaged shingles', 'Flashing & pipe boots'],
    links: [{ href: '/roof-repair-dallas-ga/', label: 'Roof repair in Dallas, GA →' }, { href: '/roof-leak-repair-dallas-ga/', label: 'Roof leak repair →' }] },
  { key: 'storm', title: 'Storm & Hail Damage Help', body: 'Georgia storms hit hard. We document wind and hail damage with photos and help you through the insurance process.',
    bullets: ['Free storm inspection', 'Photo documentation', 'Claim support'],
    links: [{ href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage roof repair →' }, { href: '/services/roof-insurance-claims/', label: 'Insurance claims help →' }] },
  { key: 'gutter', title: 'Gutter Repair & Replacement', body: 'Clogged or pulling-away gutters quietly rot fascia and send water toward your foundation. We repair and replace them.',
    bullets: ['Seamless gutter installs', 'Gutter repairs', 'Downspout drainage'],
    links: [{ href: '/gutter-repair-replacement-dallas-ga/', label: 'Gutter repair & replacement →' }] },
  { key: 'inspect', title: 'Free Roof Inspections', body: "Buying, selling, or just not sure? Get an honest look at your roof's condition with photos and a clear report.",
    bullets: ['Full photo report', 'Repair vs. replace advice', 'No-pressure, written findings'],
    links: [{ href: '/services/roof-inspection/', label: 'Roof inspections →' }] },
  { key: 'emergency', title: 'Emergency Roof Repair', body: 'Water coming in right now? We tarp openings and stop the water first, then inspect and put the fix in writing.',
    bullets: ['Emergency tarping', 'Storm and limb-strike damage', 'Photos for your insurer'],
    links: [{ href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency roof repair →' }] },
];

const moreServices = [
  { href: '/services/new-construction/', label: 'New construction roofing' },
  { href: '/services/siding/', label: 'Siding repair & replacement' },
  { href: '/services/exterior-painting/', label: 'Exterior painting & staining' },
  { href: '/metal-roofing-dallas-ga/', label: 'Metal roofing' },
  { href: '/hail-damage-roof-repair-dallas-ga/', label: 'Hail damage roof repair' },
];

const steps = [
  { t: 'Call or request online', d: <>Call or text <a href={TEL}>{brand.phone}</a> or use the form at the top. Tell us what you&rsquo;re seeing: a leak, missing shingles, storm worries.</> },
  { t: 'Free inspection with photos', d: 'We check shingles, flashing, vents, and attic signs, and photograph everything we find.' },
  { t: 'Straight, written estimate', d: "You see the photos and a clear written price before deciding anything. If a repair is all you need, that's what we quote." },
  { t: 'Clean, careful work', d: 'Our crew protects your landscaping, does the work right, and cleans up when the job is done.' },
];

const areaSlugs = ['douglasville', 'hiram', 'powder-springs', 'marietta', 'acworth', 'kennesaw', 'austell', 'mableton', 'lithia-springs'];
const areaCards = areaSlugs
  .map((slug) => cities.find((c) => c.slug === slug))
  .filter(Boolean)
  .map((c) => ({ ...c, href: `/service-areas/${c.slug}/`, blurb: c.blurb.charAt(0).toUpperCase() + c.blurb.slice(1) }));

const guides = [
  { href: '/blog/roof-replacement-cost-dallas-ga/', label: 'Roof replacement cost factors' },
  { href: '/blog/roof-repair-cost-dallas-ga/', label: 'Roof repair cost Dallas GA' },
  { href: '/blog/when-to-replace-vs-repair-a-roof/', label: 'Replace vs. repair guide' },
  { href: '/blog/dallas-ga-hail-storm-insurance-claims/', label: 'How to file an insurance claim' },
  { href: '/blog/georgia-hail-storm-roof-checklist/', label: 'Hail damage inspection checklist' },
];

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: plainText(f.a) },
    })),
  };

  return (
    <div className={`${s.home} ${archivo.variable} ${sourceSans.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* TOP INFO BAR */}
      <div className={s.topbar}>
        <div className={s.wrap}>
          <div>Serving <b>Dallas, GA</b> &amp; Paulding County &nbsp;·&nbsp; <b>Hablamos español</b></div>
          <div>Mon–Fri 9am–7pm · Sat 9am–5pm · Call or text <a href={TEL}>470-236-1410</a></div>
        </div>
      </div>

      {/* HERO */}
      <section className={s.hero} id="home">
        <div className={s.wrap}>
          <div className={s.heroGrid}>
            <div>
              <a className={s.ratingPill} href={GBP_URL} target="_blank" rel="noopener noreferrer" aria-label="Read iRoofer Contractors reviews on Google">
                <span className={s.stars} aria-hidden="true">★★★★★</span> 5.0 · 54 Google reviews · Dallas, GA
              </a>
              <h1>Roof repair &amp; replacement in Dallas, GA — <em>get a free roof inspection</em> before a small problem becomes a big bill.</h1>
              <p className={s.lede}>
                iRoofer Contractors is a family-owned roofing company in Dallas, GA, serving Paulding County since 2019 with repairs, replacements, and storm damage help. {brand.owner}&rsquo;s crew inspects your roof, shows you photos of what we find, and gives you a straight, written estimate. No pressure, no obligation.
              </p>
              <div className={`${s.ctas} hero-cta`}>
                <a className={`${s.btn} ${s.btnAccent}`} href={TEL}>Call {brand.phone}</a>
                <a className={`${s.btn} ${s.btnLight}`} href="#book">Book My Free Inspection</a>
              </div>
              <ul className={s.points}>
                {heroPoints.map((p) => <li key={p}><Check />{p}</li>)}
              </ul>
            </div>
            <div className={s.heroSide}>
              <div className={s.heroPhoto}>
                <img src="/assets/hero.webp?v=3" alt="iRoofer crew installing architectural shingles on a Georgia home in Dallas" width={800} height={600} loading="eager" decoding="async" fetchPriority="high" />
              </div>
              <div className={s.formCard} id="book">
                <HeroForm />
                <p className={s.formNote}>Prefer to talk? Call or text <a href={TEL}><b>{brand.phone}</b></a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY STRIP */}
      <div className={s.emerg}>
        <div className={s.wrap}>
          <p><b>Active leak or storm damage right now?</b> Don&rsquo;t wait on it. We tarp openings and stop the water first, then inspect.</p>
          <a className={`${s.btn} ${s.btnNavy}`} href={TEL}>Call {brand.phone} now</a>
        </div>
      </div>

      {/* STAT STRIP */}
      <div className={s.trust} aria-label="At a glance">
        <div className={s.wrap}>
          <a className={s.trustItem} href={GBP_URL} target="_blank" rel="noopener noreferrer"><b>5.0 ★</b><span>Google rating</span></a>
          <a className={s.trustItem} href={GBP_URL} target="_blank" rel="noopener noreferrer"><b>54</b><span>Google reviews</span></a>
          <a className={s.trustItem} href="/free-roof-check/"><b>Free</b><span>Inspection &amp; estimate</span></a>
          <div className={s.trustItem}><b>EN / ES</b><span>Bilingual service</span></div>
        </div>
      </div>

      {/* QUICK ANSWERS */}
      <section className={s.sec} id="glance" aria-labelledby="glance-h">
        <div className={s.wrap}>
          <div className={s.secHead}>
            <div className={s.kicker}>Quick answers</div>
            <h2 id="glance-h">iRoofer Contractors — roofing in Dallas, GA, at a glance</h2>
          </div>
          <div className={s.cardGrid}>
            {quickAnswers.map((x) => (
              <article className={s.card} key={x.q}>
                <h3>{x.q}</h3>
                <p>{x.a}</p>
                {x.link ? <Link className={s.cardLink} href={x.link.href}>{x.link.label}</Link> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`${s.sec} ${s.secAlt}`} id="services" aria-labelledby="services-h">
        <div className={s.wrap}>
          <div className={s.secHead}>
            <div className={s.kicker}>What we do</div>
            <h2 id="services-h">Roofing services in Dallas, GA — repair, replacement, storm damage &amp; gutters</h2>
            <p>Need a roofer for a leak today, or a full roof replacement? One local Paulding County crew handles it all. We install Owens Corning shingles as an Owens Corning Contractor Rewards member.</p>
          </div>
          <div className={s.cardGrid}>
            {serviceCards.map((c) => (
              <article className={s.card} key={c.title}>
                <div className={s.svcIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icon[c.key]}</svg>
                </div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <ul>{c.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                <div className={s.cardLinks}>
                  {c.links.map((l) => <Link className={s.cardLink} href={l.href} key={l.href}>{l.label}</Link>)}
                </div>
              </article>
            ))}
          </div>
          <div className={s.moreLinks}>
            <p>Also from the same local crew:</p>
            <ul className={s.linkList}>
              {moreServices.map((l) => <li key={l.href}><Link href={l.href}>{l.label} →</Link></li>)}
            </ul>
          </div>
          <div className={s.moreLinks}>
            <p>Straight to the service you need in Dallas and Paulding County:</p>
            <ul className={s.linkList}>
              {dallasLinks.filter((l) => l.href !== '/').map((l) => <li key={l.href}><Link href={l.href}>{l.label} →</Link></li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* FREE TOOLS */}
      <section className={`${s.sec} ${s.tools}`} id="tools" aria-labelledby="tools-h">
        <div className={s.wrap}>
          <div className={s.secHead}>
            <div className={s.kicker}>Free homeowner tools</div>
            <h2 id="tools-h">Not sure what&rsquo;s going on up there? Start here.</h2>
            <p>Two quick, free tools for Paulding County homeowners to help you decide whether it&rsquo;s time to call us.</p>
          </div>
          <div className={s.toolGrid}>
            <div className={s.tool}>
              <h3>Free Roof Check</h3>
              <p>Take the quick repair-or-replace quiz, then book a free, no-pressure roof check. You get photos and a short written summary.</p>
              <a className={`${s.btn} ${s.btnNavy}`} href="/free-roof-check/">Start my free roof check →</a>
            </div>
            <div className={s.tool}>
              <h3>Roof Estimate Guide</h3>
              <p>See what drives the cost of a new roof in Dallas, GA and how our estimate works. Your real number comes from a free on-site inspection.</p>
              <a className={`${s.btn} ${s.btnNavy}`} href="/estimator/">Open the estimator →</a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={s.sec} id="process" aria-labelledby="process-h">
        <div className={s.wrap}>
          <div className={s.split}>
            <div>
              <div className={s.secHead} style={{ marginBottom: 14 }}>
                <div className={s.kicker}>How it works</div>
                <h2 id="process-h">From first call to finished roof — in 4 simple steps</h2>
              </div>
              <ol className={s.steps}>
                {steps.map((st, i) => (
                  <li className={s.step} key={st.t}>
                    <div className={s.stepNum}>{i + 1}</div>
                    <div><h3>{st.t}</h3><p>{st.d}</p></div>
                  </li>
                ))}
              </ol>
            </div>
            <div className={s.work} id="work">
              <div className={s.secHead} style={{ marginBottom: 14 }}>
                <div className={s.kicker}>Recent work</div>
                <h2>A Dallas, GA replacement we completed</h2>
                <p>Real job photos from a home we re-roofed, not stock.</p>
              </div>
              <figure>
                <img src="/assets/cc-dallas-replacement-ridge.webp?v=1" width={1280} height={720} alt="Finished architectural shingle roof and ridge on a Dallas, GA home after an iRoofer replacement" loading="lazy" decoding="async" />
                <figcaption>Finished architectural shingles and ridge, Dallas, GA.</figcaption>
              </figure>
              <figure>
                <img src="/assets/cc-dallas-replacement-shingles.webp?v=1" width={1280} height={720} alt="Close-up of new architectural shingles, pipe boot, and ridge vent on a Dallas, GA roof" loading="lazy" decoding="async" />
                <figcaption>New shingles, pipe boot, and ridge vent up close.</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className={`${s.sec} ${s.secAlt}`} id="reviews" aria-labelledby="reviews-h">
        <div className={s.wrap}>
          <div className={s.secHead}>
            <div className={s.kicker}>Our Google rating</div>
            <h2 id="reviews-h">Your Dallas, GA neighbors already checked us out</h2>
            <p>Rated by homeowners in the Dallas, GA area on Google. Read the full reviews there, then call and judge for yourself.</p>
          </div>
          <div className={s.revGrid}>
            <div className={s.revScore}>
              <div className={s.revBig}>5.0</div>
              <div className={s.stars} aria-hidden="true">★★★★★</div>
              <div><a href={GBP_URL} target="_blank" rel="noopener noreferrer"><b>54 reviews</b> on Google ↗</a></div>
              <div className={s.revSmall}>Owens Corning Contractor Rewards Member</div>
              <a className={`${s.btn} ${s.btnLight}`} href={GBP_URL} target="_blank" rel="noopener noreferrer" style={{ marginTop: 12 }}>Read our Google reviews ↗</a>
            </div>
            <div className={s.revCards}>
              <div className={s.revCard}><h3>How we work: straight answers</h3><p>Every visit comes with photos and a clear explanation before any work is quoted. No guessing, no pressure.</p></div>
              <div className={s.revCard}><h3>How we work: local &amp; reachable</h3><p>We&rsquo;re based right here in Dallas, GA. When you call {brand.phone}, you reach the team that will actually be on your roof.</p></div>
              <div className={s.revCard}><h3>How we work: bilingual &amp; easy</h3><p>English or Spanish, whichever is easier for your family. <i>Atención en español para todas nuestras inspecciones y estimados.</i></p></div>
            </div>
          </div>
          <div className={s.revCta}>
            <ReviewButton variant="ink" label="Leave us a Google review" />
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className={s.sec} id="areas" aria-labelledby="areas-h">
        <div className={s.wrap}>
          <div className={s.secHead}>
            <div className={s.kicker}>Service areas</div>
            <h2 id="areas-h">Roofing service areas around Dallas, GA</h2>
            <p>We work from our home base at 152 Freedom Dr in Dallas, GA, across Paulding, Cobb, and Douglas counties. Tap a city for its own page.</p>
          </div>
          <div className={s.areasGrid}>
            <Link className={`${s.areaCard} ${s.areaHome}`} href="/roof-repair-dallas-ga/">
              <div className={s.areaCounty}>Paulding County</div>
              <h3>Dallas, GA<span className={s.homeBadge}>★ Home base</span></h3>
              <p>Our home base at 152 Freedom Dr. The full crew for repair, replacement, storm help, gutters, and new construction.</p>
              <span className={s.areaMore}>Roof repair in Dallas, GA →</span>
            </Link>
            {areaCards.map((c) => (
              <Link className={s.areaCard} href={c.href} key={c.slug}>
                <div className={s.areaCounty}>{c.county}</div>
                <h3>{c.name}, {c.state}</h3>
                <p>{c.blurb}</p>
                <span className={s.areaMore}>Roofing in {c.name} →</span>
              </Link>
            ))}
          </div>
          <p className={s.areasNote}>
            <Link href="/service-areas/">See all service areas →</Link> Don&rsquo;t see your town? Call <a href={TEL}>{brand.phone}</a>. If we can&rsquo;t help, we&rsquo;ll tell you who can.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${s.sec} ${s.secAlt}`} id="faq" aria-labelledby="faq-h">
        <div className={s.wrap}>
          <div className={s.faqWrap}>
            <div className={s.secHead} style={{ marginBottom: 16 }}>
              <div className={s.kicker}>Questions</div>
              <h2 id="faq-h">Questions we hear every week</h2>
            </div>
            {faqs.map((f, i) => (
              <details className={s.faqItem} key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <div className={s.faqA}><p>{renderInline(f.a)}</p></div>
              </details>
            ))}
            <div className={s.guides}>
              <p>Popular guides</p>
              <div className={s.chips}>
                {guides.map((g) => <Link className={s.chip} href={g.href} key={g.href}>{g.label}</Link>)}
                <Link className={s.chip} href="/blog/">All articles</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className={s.final}>
        <div className={s.wrap}>
          <h2>Your roof won&rsquo;t fix itself — but the first step is free.</h2>
          <p>One call gets you a free inspection, real photos of your roof, and a straight written estimate. No pressure either way.</p>
          <div className={s.ctas}>
            <a className={`${s.btn} ${s.btnNavy}`} href={TEL}>Call {brand.phone}</a>
            <a className={`${s.btn} ${s.btnLight}`} href="#contact">Request a free inspection</a>
          </div>
        </div>
      </div>

      {/* CONTACT (existing lead form, same /api/leads submission) */}
      <section className={s.contact} id="contact" aria-labelledby="contact-h">
        <div className={s.wrap}>
          <div className={s.contactGrid}>
            <div>
              <div className={s.kicker}>Let&rsquo;s talk</div>
              <h2 id="contact-h">Talk to a real roofer.</h2>
              <p className={s.contactLead}>Tell us what&rsquo;s going on and we&rsquo;ll get back to you. Free roof checks, free quotes, no pressure. Hablamos español.</p>
              <ul className={s.cinfo}>
                <li><span>Call or text</span><a href={TEL}>{brand.phone}</a></li>
                <li><span>Email</span><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
                <li><span>Shop &amp; office</span><b>152 Freedom Dr, Dallas, GA 30157</b></li>
                <li><span>Hours</span><b>Mon–Fri 9am–7pm · Sat 9am–5pm</b></li>
              </ul>
            </div>
            <div className={s.contactForm}>
              <QuoteForm variant="contact" id="cform" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
