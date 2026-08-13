// Generates dedicated city x service landing pages for every combination.
// Run: node scripts/gen-city-service-pages.mjs
// Reads cities + services from src/lib/brand.js (re-declared here to avoid ESM path fiddling).
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const APP = join(ROOT, 'src/app');
const SITEMAP = join(ROOT, 'public/sitemap.xml');

// ---- Cities (mirrors src/lib/brand.js cities) ----
const cities = [
  { slug: 'dallas-ga', name: 'Dallas', state: 'GA', county: 'Paulding County', note: 'As the town we call home, Dallas homeowners get priority scheduling and the crew chief on every job.' },
  { slug: 'douglasville', name: 'Douglasville', state: 'GA', county: 'Douglas County', note: 'Douglasville sees its share of spring straight-line winds off the ridge — we document hail and wind damage for your claim.' },
  { slug: 'hiram', name: 'Hiram', state: 'GA', county: 'Paulding County', note: 'Hiram families trust us for architectural shingle replacements that match the neighborhood and hold up to Georgia summers.' },
  { slug: 'powder-springs', name: 'Powder Springs', state: 'GA', county: 'Cobb County', note: 'In Powder Springs we handle everything from single-slope ranch reroofs to steep two-story tear-offs.' },
  { slug: 'marietta', name: 'Marietta', state: 'GA', county: 'Cobb County', note: 'Marietta’s mix of historic homes and new builds means we tailor every scope to the property.' },
  { slug: 'acworth', name: 'Acworth', state: 'GA', county: 'Cobb County', note: 'Acworth lakefront and in-town homes alike call us for fast leak tracing and clean tear-offs.' },
  { slug: 'kennesaw', name: 'Kennesaw', state: 'GA', county: 'Cobb County', note: 'Kennesaw homeowners and small businesses rely on us for honest pricing and a real person on the phone.' },
  { slug: 'austell', name: 'Austell', state: 'GA', county: 'Cobb County', note: 'When a storm hits Austell we tarp the same day and meet your adjuster on-site.' },
];

// ---- Services (mirrors src/lib/brand.js services) ----
const services = [
  {
    slug: 'roof-repair', title: 'Roof Repair',
    img: '/assets/service-repair.webp',
    blurb: 'From storm damage to worn flashing, we find the source and fix it right — so a small problem stays small.',
    q: 'the leak before it spreads', outcome: 'a small problem stays small',
  },
  {
    slug: 'roof-replacement', title: 'Roof Replacement',
    img: '/assets/service-replacement.webp',
    blurb: 'Full tear-off and replacement with GAF-certified architectural asphalt shingles, installed clean and built to last.',
    q: 'a full tear-off and replacement', outcome: 'a roof that lasts decades',
  },
  {
    slug: 'new-construction', title: 'New Construction',
    img: '/assets/service-newconstruction.webp',
    blurb: 'We partner with builders and homeowners on new builds to install a roof that matches the design and the budget.',
    q: 'a roof done right from frame-up', outcome: 'a roof matched to your build',
  },
  {
    slug: 'storm-damage-roof-repair', title: 'Storm Damage Roof Repair',
    img: '/assets/storm-damage.webp',
    blurb: 'Hail, wind, or tree damage from a Georgia storm? We inspect, document storm damage, and handle your insurance claim.',
    q: 'storm damage repair and insurance help', outcome: 'a restored roof and a clean claim',
  },
  {
    slug: 'gutter-repair-replacement', title: 'Gutter Repair & Replacement',
    img: '/assets/service-gutters-main.webp',
    blurb: 'Clogged or failing gutters are the #1 cause of preventable roof and foundation damage. We repair, realign, and replace.',
    q: 'gutter repair and replacement', outcome: 'water flowing away from your home',
  },
];

// Dallas, GA testimonials (from reviews.js) — reused as the area voice for all pages.
const testimonials = [
  { q: '“They did very well with my old roof. The house looks new! Cristian and the crew went that extra mile on everything! I highly recommend them. It poured down rain this morning, and there were NO LEAKS.”', who: 'Jill Kerns, Dallas, GA' },
  { q: '“Iroofer Contractors in Dallas, GA, were a total lifesaver! My roof was shot, and they came to the rescue. The crew was super friendly and knowledgeable. The quality of their work is top-notch.”', who: 'Carlos Duran, Dallas, GA' },
  { q: '“This was a blessing. Chris was amazing and very patient with me being a new homeowner. He explained everything 100 percent — even the insurance part. The crew was on time and quick. Happy homeowner.”', who: 'Amaka Allen, Dallas, GA' },
  { q: '“Cristian was extremely professional and had excellent customer service skills. From the roof inspection to roof installation, it was an awesome experience.”', who: 'Kay Hillery, Dallas, GA' },
];

function faqsFor(svc, city) {
  return [
    { q: `Do you offer ${svc.title.toLowerCase()} in ${city.name}, ${city.state}?`, a: `Yes. ${svc.title} is one of our core services across ${city.county} and the greater Atlanta metro. ${city.note}` },
    { q: `How fast can you start a ${svc.title.toLowerCase()} job in ${city.name}?`, a: `Most ${city.name} jobs are scheduled within 24–72 hours after a free inspection. ${svc.title === 'Storm Damage Roof Repair' ? 'For active storm leaks we offer same-day tarping.' : 'Emergency leaks get priority scheduling.'}` },
    { q: `Do you handle permits for ${city.name}, ${city.state}?`, a: `Yes. We pull the local roofing permit, follow current code for underlayment and ventilation, and leave you with the inspection sign-off.` },
    { q: `Will my insurance cover this in ${city.county}?`, a: `If the damage is storm- or hail-related, it often is. We document everything, meet your adjuster on-site, and handle supplements so your payout reflects the true scope.` },
    { q: `What does ${svc.title.toLowerCase()} cost in ${city.name}, ${city.state}?`, a: `It depends on size, pitch, and material — we give a free, written quote after inspection. Most repairs run $250–$3,500; full replacements $8,000–$30,000.` },
  ];
}

function pageFor(svc, city, t, allServices) {
  const slug = `${svc.slug}-${city.slug}`;
  const title = `${svc.title} in ${city.name}, ${city.state} | iRoofer Contractors`;
  const desc = `${svc.title} in ${city.name}, ${city.state} — ${svc.blurb} Local, family-owned, 5★ on Google, free inspection. Call (470) 236-1410.`;
  const faqs = faqsFor(svc, city);
  const faqItems = faqs.map((f, i) =>
    `              <div className={faqItem(${i === 0})}>\n                <button className="faq-q" aria-expanded={${i === 0}}>{${JSON.stringify(f.q)}}<span className="pm" aria-hidden="true" /></button>\n                <div className="faq-a"><div><p>{${JSON.stringify(f.a)}}</p></div></div>\n              </div>`
  ).join('\n');

  const siblingLinks = allServices
    .filter((s) => s.slug !== svc.slug)
    .map((s) =>
      `            <Link key="${s.slug}" href="/${s.slug}-${city.slug}" className="svc-card">\n              <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>${s.title} in ${city.name}</h4>\n              <span className="arr" style={{ color: 'var(--orange)', fontWeight: 800, marginTop: 12, display: 'inline-block' }}>View →</span>\n            </Link>`
    ).join('\n');

  return `import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(desc)},
  path: '/${slug}',
});

const faqs = ${JSON.stringify(faqs, null, 2)};

export default function Page() {
  return (
    <>
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <Link href="/services/${svc.slug}" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>
                ← ${svc.title}
              </Link>
              <span className="eyebrow dark" style={{ marginTop: 16, display: 'inline-block' }}>${city.name}, ${city.state}</span>
              <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02, marginTop: 8 }}>
                ${svc.title} in ${city.name}, ${city.state}
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680 }}>
                ${svc.blurb} In ${city.name}, ${city.state} (${city.county}) we bring the same local crew, the same warranty,
                and the same phone number to every job. ${city.note}
              </p>
              <div className="cta" style={{ marginTop: 28 }}>
                <a className="bigphone" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }} href={\`tel:\${brand.phone}\`}>{brand.phone}</a>
                <Link className="btn btn-solid" href="/#contact" style={{ marginLeft: 16, verticalAlign: 'middle' }}>Get a free quote <span className="arr">→</span></Link>
              </div>

              <div style={{ marginTop: 32, padding: '1.3rem', background: '#fff', border: '1px solid rgba(22,29,37,.08)', borderRadius: 8 }}>
                <strong style={{ color: '#0b3d16' }}>What ${city.name} homeowners say</strong>
                <p style={{ color: '#52606b', fontSize: '.95rem', marginTop: 8, fontStyle: 'italic' }}>
                  ${t.q}
                </p>
                <div style={{ color: '#8ea2b4', fontSize: '.85rem', marginTop: 4 }}>— ${t.who}</div>
              </div>
            </div>

            <div className="rv">
              <img src="${svc.img}" alt="${svc.title} in ${city.name}, ${city.state} by iRoofer Contractors" loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%', marginBottom: 24 }} />
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="contact" id="${slug}-quote" source="${svc.title} ${city.name} ${city.state}" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">${city.name}, ${city.state} ${svc.title} FAQ</span>
            <h2>Questions ${city.name} homeowners ask us</h2>
          </div>
          <div className="faq-list rv">
${faqItems}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/service-areas/${city.slug}" className="btn btn-ink">More about our ${city.name} service area <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">More ${city.name} roofing services</span>
            <h2>Other services we offer in ${city.name}, ${city.state}</h2>
          </div>
          <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))' }}>
${siblingLinks}
          </div>
        </div>
      </section>
      <FaqSchema faq={faqs} />
    </>
  );
}
`;
}

// ---- generate ----
const generatedUrls = [];
let count = 0;
for (const svc of services) {
  for (const city of cities) {
    const slug = `${svc.slug}-${city.slug}`;
    const dir = join(APP, slug);
    mkdirSync(dir, { recursive: true });
    const t = testimonials[count % testimonials.length];
    // faqItemHelper must be defined (after imports) in generated source.
    const src = pageFor(svc, city, t, services)
      .replace('import { seo } from \'@/lib/seo\';', 'import { seo } from \'@/lib/seo\';\nfunction faqItem(open){ return \'faq-item\' + (open ? \' open\' : \'\'); }');
    writeFileSync(join(dir, 'page.js'), src);
    generatedUrls.push({ slug, img: svc.img, imgTitle: `${svc.title} in ${city.name}, ${city.state} by iRoofer Contractors` });
    count++;
  }
}

// ---- update sitemap ----
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
if (existsSync(SITEMAP)) {
  let xml = readFileSync(SITEMAP, 'utf8');
  const marker = '<!-- CITY-SERVICE-PAGES -->';
  const block = generatedUrls
    .map((u) =>
      `  <url><loc>https://iroofercontractors.com/${u.slug}</loc><changefreq>weekly</changefreq><priority>0.9</priority>\n    <image:image><image:loc>https://iroofercontractors.com${u.img}</image:loc><image:title>${esc(u.imgTitle)}</image:title></image:image>\n  </url>`
    )
    .join('\n');
  if (xml.includes(marker)) {
    xml = xml.replace(new RegExp('<!-- CITY-SERVICE-PAGES -->[\\s\\S]*?<!-- /CITY-SERVICE-PAGES -->'), `${marker}\n${block}\n  <!-- /CITY-SERVICE-PAGES -->`);
  } else {
    xml = xml.replace('</urlset>', `${marker}\n${block}\n  <!-- /CITY-SERVICE-PAGES -->\n</urlset>`);
  }
  writeFileSync(SITEMAP, xml);
}

console.log('Generated', count, 'city/service pages and updated sitemap.');
