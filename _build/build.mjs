// Assembles the final HTML pages in the site root from src/layout.html,
// src/partials/*.html and src/pages/*.html. Run with `npm run build`.
//
//  - Each page starts with a <!--META {...} --> JSON block (title, description, nav, file).
//  - <!--@ name --> includes src/partials/name.html.
//  - <i data-icon="truck" class="..."></i> becomes an inline Lucide SVG (no icon library on the live site).
//  - {{KEY}} is replaced from SITE below.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, 'src');
const out = join(here, '..');

// ---- Site settings (edit these, then rebuild) ----
const SITE = {
  SITE_URL: 'https://YOURDOMAIN.com', // PLACEHOLDER: your live domain, no trailing slash
  EMAIL: 'info@YOURDOMAIN.com',       // PLACEHOLDER: your real email
  WA_NUMBER: '254757710635',
  WA_DISPLAY: '+254 757 710 635',
  IG_HANDLE: 'skylink_global_network',
  IG_URL: 'https://instagram.com/skylink_global_network',
  YEAR: String(new Date().getFullYear()),
  VERSION: Date.now().toString(36), // cache-buster for CSS/JS, changes on every build
};

const WHATSAPP_SVG =
  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>';

const iconDir = join(here, 'node_modules', 'lucide-static', 'icons');
const iconCache = new Map();
function icon(name, cls = '') {
  let svg;
  if (name === 'whatsapp') svg = WHATSAPP_SVG;
  else {
    if (!iconCache.has(name)) {
      const raw = readFileSync(join(iconDir, `${name}.svg`), 'utf8')
        .replace(/<!--.*?-->/s, '')
        .replace(/\s*\n\s*/g, ' ')
        .replace(/ class="[^"]*"/, '')
        .replace(/ width="24" height="24"/, '')
        .trim();
      iconCache.set(name, raw);
    }
    svg = iconCache.get(name);
  }
  const attrs = `${cls ? ` class="${cls}"` : ''} aria-hidden="true" focusable="false"`;
  return svg.replace('<svg', `<svg${attrs}`);
}

const read = (p) => readFileSync(p, 'utf8');
const partials = Object.fromEntries(
  readdirSync(join(src, 'partials')).map((f) => [f.replace(/\.html$/, ''), read(join(src, 'partials', f))]),
);
const layout = read(join(src, 'layout.html'));

function render(html, vars) {
  // includes (allow nesting one level deep)
  for (let i = 0; i < 2; i++) {
    html = html.replace(/<!--@\s*([\w-]+)\s*-->/g, (_, n) => {
      if (!(n in partials)) throw new Error(`Unknown partial: ${n}`);
      return partials[n];
    });
  }
  html = html.replace(/\{\{(\w+)\}\}/g, (m, k) => (k in vars ? vars[k] : m));
  html = html.replace(/<i data-icon="([\w-]+)"(?: class="([^"]*)")?><\/i>/g, (_, n, c) => icon(n, c));
  return html;
}

const navKeys = ['home', 'transport', 'trade', 'about', 'contact'];
const built = [];

for (const file of readdirSync(join(src, 'pages'))) {
  const raw = read(join(src, 'pages', file));
  const m = raw.match(/^<!--META\s*([\s\S]*?)-->\s*/);
  if (!m) throw new Error(`${file}: missing <!--META {...} --> header`);
  const meta = JSON.parse(m[1]);
  const body = raw.slice(m[0].length);

  const vars = {
    ...SITE,
    TITLE: meta.title,
    DESCRIPTION: meta.description,
    PATH: meta.file === 'index.html' ? '' : meta.file,
    BASE: meta.base ?? '',
    ROBOTS: meta.noindex ? 'noindex, follow' : 'index, follow',
  };
  for (const k of navKeys) vars[`NAV_${k.toUpperCase()}`] = meta.nav === k ? ' aria-current="page"' : '';

  let html = layout.replace('<!--CONTENT-->', body);
  html = render(html, vars);
  const unresolved = html.match(/\{\{\w+\}\}|<!--@[^>]*-->|<i data-icon/g);
  if (unresolved) throw new Error(`${file}: unresolved tokens ${[...new Set(unresolved)].join(', ')}`);

  writeFileSync(join(out, meta.file), html);
  if (!meta.noindex) built.push(meta);
  console.log('built', meta.file);
}

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const order = ['index.html', 'transport.html', 'trade.html', 'about.html', 'contact.html'];
built.sort((a, b) => order.indexOf(a.file) - order.indexOf(b.file));
const urls = built
  .map((p) => {
    const loc = `${SITE.SITE_URL}/${p.file === 'index.html' ? '' : p.file}`;
    const pr = p.file === 'index.html' ? '1.0' : '0.8';
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${pr}</priority>\n  </url>`;
  })
  .join('\n');
writeFileSync(
  join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /_build/\n\nSitemap: ${SITE.SITE_URL}/sitemap.xml\n`);
console.log('built sitemap.xml, robots.txt');
