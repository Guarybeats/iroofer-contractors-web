/**
 * Regenerates public/sitemap.xml from the static export in out/.
 *
 * Why: the sitemap used to be hand-maintained, which let it drift out of sync
 * with the actual pages (missing URLs, duplicate <loc> entries, no <lastmod>).
 *
 * Source of truth for URLs .... every out/**\/index.html produced by `next build`
 * Source of truth for metadata  sitemap.meta.json (priority, changefreq, images)
 * lastmod .................... last git commit date of the page's source file
 *
 * Usage:  npm run build && node scripts/gen-sitemap.mjs
 *         node scripts/gen-sitemap.mjs --check   (CI: fail if out of sync)
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://iroofercontractors.com';
const EXCLUDE = new Set(['/404/', '/admin/']);
const DEFAULTS = { priority: '0.5', changefreq: 'monthly', images: [] };

async function htmlRoutes(dir, prefix = '/') {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) out.push(...(await htmlRoutes(join(dir, entry.name), `${prefix}${entry.name}/`)));
    else if (entry.name === 'index.html') out.push(prefix);
  }
  return out;
}

function sourceFileFor(route) {
  const clean = route.replace(/^\/|\/$/g, '');
  const direct = join(ROOT, 'src/app', clean, 'page.js');
  if (existsSync(direct)) return direct;
  // dynamic routes, e.g. /services/roof-repair/ -> src/app/services/[slug]/page.js
  const parts = clean.split('/');
  for (let i = parts.length - 1; i >= 0; i--) {
    const candidate = join(ROOT, 'src/app', ...parts.slice(0, i), '[slug]', 'page.js');
    if (existsSync(candidate)) return candidate;
  }
  return null;
}

function lastmod(route) {
  const file = sourceFileFor(route);
  if (!file) return null;
  try {
    return execFileSync('git', ['log', '-1', '--format=%cs', '--', file], { cwd: ROOT }).toString().trim() || null;
  } catch {
    return null;
  }
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function build(routes, meta) {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
  ];
  for (const route of routes) {
    const m = { ...DEFAULTS, ...(meta[route] || {}) };
    const mod = lastmod(route);
    lines.push(
      `<url><loc>${BASE}${route}</loc>` +
        (mod ? `<lastmod>${mod}</lastmod>` : '') +
        `<changefreq>${m.changefreq}</changefreq><priority>${m.priority}</priority>` +
        (m.images.length ? '' : '</url>')
    );
    for (const img of m.images) {
      lines.push(`  <image:image><image:loc>${esc(img.loc)}</image:loc><image:title>${esc(img.title)}</image:title></image:image>`);
    }
    if (m.images.length) lines.push('</url>');
  }
  lines.push('</urlset>', '');
  return lines.join('\n');
}

async function main() {
  const outDir = join(ROOT, 'out');
  if (!existsSync(outDir)) throw new Error('out/ not found — run `npm run build` first');

  const routes = (await htmlRoutes(outDir))
    .filter((r) => !EXCLUDE.has(r))
    .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

  const meta = JSON.parse(readFileSync(join(ROOT, 'sitemap.meta.json'), 'utf8'));
  const unknown = Object.keys(meta).filter((k) => !routes.includes(k));
  if (unknown.length) console.warn(`warn: sitemap.meta.json has entries for routes that no longer exist: ${unknown.join(', ')}`);

  const xml = build(routes, meta);
  const target = join(ROOT, 'public/sitemap.xml');

  if (process.argv.includes('--check')) {
    const current = existsSync(target) ? readFileSync(target, 'utf8') : '';
    if (current !== xml) {
      console.error('sitemap.xml is out of sync with out/ — run: node scripts/gen-sitemap.mjs');
      process.exit(1);
    }
    console.log(`sitemap.xml in sync (${routes.length} URLs)`);
    return;
  }

  writeFileSync(target, xml);
  console.log(`wrote public/sitemap.xml — ${routes.length} URLs`);
}

main();
