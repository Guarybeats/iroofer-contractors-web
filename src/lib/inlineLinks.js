// Plain-text helpers for copy strings that contain internal links.
//
// Copy in localCopy.js, CityAreaPage `intro`/`paras`/`faq` and similar string data
// can reference other pages in two ways:
//   1. Markdown-style anchors: "[roof repair in Hiram](/roof-repair-hiram/)"
//   2. Bare site paths:         "see /roof-replacement-hiram/"
// Rendered as plain strings, both printed raw slugs to homeowners. renderInline()
// (components/InlineText.jsx) turns them into real links with readable anchor text;
// plainText() below produces the same readable text for JSON-LD (FAQPage etc.).

const SITE = 'https://iroofercontractors.com';

const CITY = {
  'dallas-ga': 'Dallas, GA',
  hiram: 'Hiram',
  douglasville: 'Douglasville',
  'powder-springs': 'Powder Springs',
  marietta: 'Marietta',
  kennesaw: 'Kennesaw',
  acworth: 'Acworth',
  austell: 'Austell',
  roswell: 'Roswell',
  alpharetta: 'Alpharetta',
  canton: 'Canton',
};

const FIXED = {
  '/': 'our homepage',
  '/contact/': 'our contact page',
  '/estimator/': 'our free estimate request',
  '/about/': 'about iRoofer',
  '/blog/': 'our roofing blog',
  '/services/': 'all roofing services',
  '/service-areas/': 'all service areas',
  '/dallas-ga-roofing/': 'Dallas, GA roofing',
  '/new-construction/': 'new construction roofing',
  '/emergency-roof-repair-dallas-ga/': 'emergency roof repair',
  '/services/roof-insurance-claims/': 'roof insurance claims help',
  '/services/roof-repair/': 'roof repair services',
  '/services/roof-replacement/': 'roof replacement services',
  '/services/new-construction/': 'new construction roofing services',
  '/services/gutter-repair-replacement/': 'gutter repair and replacement',
  '/services/storm-damage-roof-repair/': 'storm damage roof repair services',
};

const PREFIX = [
  ['storm-damage-roof-repair-', 'storm damage roof repair in '],
  ['gutter-repair-replacement-', 'gutter repair in '],
  ['roof-replacement-', 'roof replacement in '],
  ['roof-repair-', 'roof repair in '],
  ['new-construction-', 'new construction roofing in '],
];

function titleCase(slug) {
  return slug.split('-').map((w) => (w.length > 2 ? w[0].toUpperCase() + w.slice(1) : w)).join(' ');
}

/** Human anchor text for an internal path ("/roof-repair-hiram/" → "roof repair in Hiram"). */
export function pathLabel(path) {
  const p = path.endsWith('/') ? path : `${path}/`;
  if (FIXED[p]) return FIXED[p];
  let m = p.match(/^\/service-areas\/([a-z0-9-]+)\/$/);
  if (m) return `our ${CITY[m[1]] || titleCase(m[1])} service area`;
  m = p.match(/^\/blog\/([a-z0-9-]+)\/$/);
  if (m) return `our guide: ${titleCase(m[1]).replace(/\bGa\b/g, 'GA')}`;
  m = p.match(/^\/([a-z0-9-]+)\/$/);
  if (m) {
    for (const [pre, lbl] of PREFIX) {
      if (m[1].startsWith(pre)) {
        const c = m[1].slice(pre.length);
        if (CITY[c]) return lbl + CITY[c];
      }
    }
    return titleCase(m[1]).toLowerCase();
  }
  return p;
}

// [text](href) | https://iroofercontractors.com/path/ | bare /path/ (must contain a slash-terminated segment)
const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|https:\/\/iroofercontractors\.com(\/[a-z0-9\-/#]*)?|(?<![\w.:/])(\/(?:[a-z0-9-]+\/)+(?:#[a-z0-9-]+)?)(?![\w])/g;

/** Normalise an href to a site-relative path when it points at this site. */
export function internalHref(href) {
  if (href.startsWith(SITE)) return href.slice(SITE.length) || '/';
  return href;
}

/**
 * Split a copy string into parts: { text } or { href, label, keepUrl }.
 */
export function inlineParts(str) {
  if (typeof str !== 'string') return [{ text: str }];
  const parts = [];
  let last = 0;
  for (const m of str.matchAll(TOKEN)) {
    if (m.index > last) parts.push({ text: str.slice(last, m.index) });
    if (m[1]) {
      parts.push({ href: internalHref(m[2]), label: m[1] });
    } else if (m[0].startsWith('https://')) {
      // Full site URL (e.g. the /contact/ CTA) stays visible as written, but clickable.
      let url = m[0];
      let trail = '';
      // Don't swallow sentence punctuation into the link.
      while (/[.,;:]$/.test(url)) { trail = url.slice(-1) + trail; url = url.slice(0, -1); }
      parts.push({ href: internalHref(url), label: url });
      if (trail) parts.push({ text: trail });
    } else {
      const path = m[4];
      const [base, hash] = path.split('#');
      parts.push({ href: path, label: pathLabel(base) + (hash ? '' : '') });
    }
    last = m.index + m[0].length;
  }
  if (last < str.length) parts.push({ text: str.slice(last) });
  return parts;
}

/** Same readable text as renderInline, without markup — for JSON-LD and meta. */
export function plainText(str) {
  if (typeof str !== 'string') return str;
  return inlineParts(str).map((p) => (p.text !== undefined ? p.text : p.label)).join('');
}
