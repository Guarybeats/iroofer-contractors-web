import Link from 'next/link';
import { brand } from '@/lib/brand';

export const metadata = {
  alternates: { canonical: 'https://iroofercontractors.com/blog' },
  openGraph: { url: 'https://iroofercontractors.com/blog' },

  title: 'Roof Tips & News — iRoofer Contractors Blog',
  description: 'Georgia roofing insights from iRoofer Contractors. Storm damage checklists, insurance claim tips, and roof maintenance advice for Dallas, GA homeowners.',
};

const posts = [
  {
    slug: 'solar-panels-roof-dallas-ga',
    title: 'Solar Panels on Your Dallas Roof: What Homeowners Need to Know Before Installing',
    date: 'July 2027',
    excerpt: 'Solar is booming in Dallas — but we see 3–4 botched installs a year where the roof leaks within 18 months. Here is how to get it right: roof first, flashing details, warranty coordination, and removal/reinstall costs.',
    readTime: '8 min read',
    category: 'Homeowner Guide',
  },
  {
    slug: 'roof-maintenance-calendar-dallas-ga',
    title: 'Year-Round Roof Maintenance Calendar for Dallas GA Homeowners',
    date: 'June 2027',
    excerpt: 'Spring hail, summer UV, fall leaves, winter ice — each attacks your roof differently. A quarterly routine catches the small stuff before it turns into a $15,000 replacement. Here is your seasonal checklist.',
    readTime: '7 min read',
    category: 'Maintenance',
  },
  {
    slug: 'skylight-leak-repair-dallas-ga',
    title: 'Skylight Leak Repair in Dallas GA: Why They Leak, How We Fix Them, and When to Replace',
    date: 'June 2027',
    excerpt: 'Skylights are the #1 source of roof leaks we see in Dallas homes. Here is why they fail, the repair vs. replace decision matrix, and what a proper replacement includes.',
    readTime: '6 min read',
    category: 'Repairs',
  },
  {
    slug: 'how-to-choose-roofing-contractor-dallas-ga',
    title: 'How to Choose a Roofing Contractor in Dallas GA: 7 Red Flags & 5 Must-Ask Questions',
    date: 'May 2027',
    excerpt: 'After every major storm, out-of-state storm chasers flood Dallas neighborhoods. Here is how to tell pros from chasers: 7 red flags, 5 must-ask questions, and a 5-minute verification checklist.',
    readTime: '8 min read',
    category: 'Homeowner Guide',
  },
  {
    slug: 'roof-financing-options-dallas-ga',
    title: 'Roof Financing Options in Dallas GA: How to Pay for a New Roof Without Breaking the Bank',
    date: 'May 2027',
    excerpt: 'A new roof runs $8K–$30K. Most homeowners do not have that in savings. From insurance supplements to zero-interest dealer financing to HELOCs — here are the real options that work for Georgia families.',
    readTime: '7 min read',
    category: 'Cost Guide',
  },
  {
    slug: 'georgia-hail-storm-roof-checklist',
    title: 'Georgia Hail Storm Roof Checklist: What Dallas Homeowners Need to Know',
    date: 'September 2026',
    excerpt: 'North Georgia gets its share of hail storms — some the size of quarters, some larger. When the skies clear, the last thing you want is a hidden roof leak or a denied insurance claim. Follow this six-step checklist.',
    readTime: '6 min read',
    category: 'Storm Damage',
  },
  {
    slug: 'when-to-replace-vs-repair-a-roof',
    title: 'Roof Replacement vs. Roof Repair: When to Tear Off vs. Patch',
    date: 'October 2026',
    excerpt: 'After Georgia weather takes its toll, how do you know whether to patch a few shingles or tear off and start fresh? Here are the 5 questions every Dallas homeowner should ask before deciding.',
    readTime: '8 min read',
    category: 'Maintenance',
  },
  {
    slug: 'choosing-roofing-materials-dallas-ga',
    title: 'How to Choose the Right Roofing Material for Your Dallas Home',
    date: 'October 2026',
    excerpt: 'Asphalt, metal, slate, or tile — each handles Dallas heat, hail, and storms differently. Here is our guide to choosing the right material based on budget, timeline, and home style.',
    readTime: '7 min read',
    category: 'Materials',
  },
  {
    slug: 'dallas-ga-hail-storm-insurance-claims',
    title: 'Dallas GA Hail Storm: How to File an Insurance Claim That Actually Gets Paid',
    date: 'November 2026',
    excerpt: 'Hail damage is the #1 cause of denied claims in North Georgia. Here’s exactly what adjusters look for, how to document your damage, and what to do if your claim gets lowballed.',
    readTime: '10 min read',
    category: 'Storm Damage',
  },
  {
    slug: 'gutter-maintenance-dallas-ga',
    title: 'Gutters in Dallas GA: How Often to Clean, When to Replace, and Why It Matters for Your Roof',
    date: 'November 2026',
    excerpt: 'Clogged gutters cause 30% of the basement leaks and foundation issues we see in Paulding County. Here’s how to keep your gutters — and roof — working together.',
    readTime: '6 min read',
    category: 'Maintenance',
  },
  {
    slug: 'attic-ventilation-dallas-heat',
    title: 'Why Your Attic Is Oven-Hot in Dallas Summers (And What a Roof Vent Can Fix)',
    date: 'December 2026',
    excerpt: 'Poor attic ventilation costs Atlanta-area homeowners 15–25% more on summer cooling. Here’s how ridge vents, soffit vents, and powered exhaust fans can drop your electric bill.',
    readTime: '8 min read',
    category: 'Maintenance',
  },
  {
    slug: 'new-construction-roofing-dallas',
    title: 'New Construction Roofing in Dallas GA: What Builders Need to Know',
    date: 'December 2026',
    excerpt: 'From permit requirements to shingle selection to warranty coordination — a checklist for builders installing roofs on new Dallas homes.',
    readTime: '9 min read',
    category: 'New Construction',
  },
  {
    slug: 'cost-of-new-roof-2026-dallas-ga',
    title: '$8K–$30K: What Your New Roof Actually Costs in 2026 (Dallas GA Pricing)',
    date: 'January 2027',
    excerpt: 'We break down real replacement costs per square footage, material tier, and roof pitch — plus what insurance typically covers in Paulding County.',
    readTime: '12 min read',
    category: 'Cost Guide',
  },
  {
    slug: 'architectural-vs-3-tab-shingles',
    title: 'Architectural vs. 3-Tab Shingles: The $1,500 Decision That Could Save You $8,000',
    date: 'January 2027',
    excerpt: 'The difference between architectural and 3-tab shingles is more than price — it’s lifespan, warranty, and how your insurance claim gets paid.',
    readTime: '7 min read',
    category: 'Materials',
  },
  {
    slug: 'wind-damage-roof-repair-dallas',
    title: 'Wind Damage on Your Roof: How to Spot It Before the Next Storm Hits',
    date: 'February 2027',
    excerpt: 'Georgia wind gusts hit 70+ mph several times a year. Here’s how to tell if your roof is leaking, lifting, or ready to blow off entirely.',
    readTime: '6 min read',
    category: 'Storm Damage',
  },
  {
    slug: 'emergency-roof-tarping-dallas',
    title: 'Emergency Roof Tarping: What to Expect When We Come to Your Dallas Home',
    date: 'February 2027',
    excerpt: 'When a storm rips off shingles and rain is coming, emergency tarping is your only line of defense. Here’s what our 24/7 crew does — and what it costs.',
    readTime: '5 min read',
    category: 'Emergency',
  },
  {
    slug: 'emergency-roof-response-time-dallas',
    title: 'Emergency Roof Response: How Long It Takes & When to Expect a Crew',
    date: 'April 2027',
    excerpt: 'When a storm hits, response time matters. See our Dallas emergency roof arrival times, what affects service speed, and how to get help fast.',
    readTime: '5 min read',
    category: 'Emergency',
  },
  {
    slug: 'metal-roofing-pros-cons-dallas',
    title: 'Metal Roofing in Dallas: The Pros, Cons, and Hidden Costs No One Mentions',
    date: 'March 2027',
    excerpt: 'Metal roofs last 50+ years and beat hail — but they cost 2x asphalt. Here’s the full breakdown including cooling savings, installation gotchas, and noise concerns.',
    readTime: '9 min read',
    category: 'Materials',
  },
  {
    slug: 'georgia-winter-roof-inspection',
    title: 'Georgia Winter Roof Prep: The 10-Point Checklist Before the Cold Hits',
    date: 'March 2027',
    excerpt: 'Georgia winters are mild — but ice dams, freeze-thaw cycles, and hidden leaks can still cost you thousands. Here’s what to check before January freezes arrive.',
    readTime: '6 min read',
    category: 'Maintenance',
  },
  {
    slug: 'roof-warranty-what-is-covered',
    title: 'Roof Warranty Explained: What’s Covered (And What the Fine Print Hides)',
    date: 'April 2027',
    excerpt: 'Manufacturer warranties, workmanship warranties, and what happens when your roof fails after year 5. We decode the fine print so you know what you’re really getting.',
    readTime: '8 min read',
    category: 'Warranty',
  },
];

export default function BlogPage() {
  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative', maxWidth: 880, margin: '0 auto' }}>
        <div className="sec-head rv" style={{ marginBottom: 48 }}>
          <span className="eyebrow dark">From the roof</span>
          <h1 style={{ fontSize: 'clamp(2.2rem,5vw,3.2rem)', fontWeight: 900, lineHeight: 1.05 }}>
            Roof Tips &amp; News
          </h1>
          <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 12, maxWidth: 640 }}>
            Storm damage checklists, insurance claim tips, and roof maintenance advice — written by
            Cristian Mendez, a local Dallas, GA roofer with 150+ roofs under his belt since 2019.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 36 }}>
          {posts.map((p) => (
            <article key={p.slug} style={{
              background: '#fff', border: '1px solid rgba(22,29,37,.08)',
              borderRadius: 8, padding: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,.02)'
            }}>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '.8rem', fontWeight: 700, color: 'var(--orange)',
                  textTransform: 'uppercase', letterSpacing: '.04em'
                }}>{p.category}</span>
                <span style={{ color: '#8ea2b4', fontSize: '.85rem' }}>{p.date} · {p.readTime}</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.3rem,2.5vw,1.6rem)', fontWeight: 800, margin: '0 0 12px' }}>
                <Link href={`/blog/${p.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {p.title}
                </Link>
              </h2>
              <p style={{ color: '#52606b', fontSize: '.95rem', lineHeight: 1.6, margin: '0 0 16px' }}>
                {p.excerpt}
              </p>
              <Link href={`/blog/${p.slug}`} style={{
                color: 'var(--orange)', fontWeight: 700, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 4
              }}>
                Read the full article <span style={{ fontSize: '1.2rem' }}>→</span>
              </Link>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: 'center', color: '#8ea2b4', fontSize: '.9rem' }}>
          More posts coming soon — sign up for our monthly roof-care newsletter.
        </div>
      </div>
    </section>
  );
}
