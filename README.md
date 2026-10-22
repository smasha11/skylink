# Skylink Global Network: website

Static marketing site (HTML + compiled Tailwind CSS + vanilla JS). No server code and no build step on the host: upload the files and it works.

## What to upload

Upload **everything in this folder except `_build/`, `.impeccable/`, `README.md`, `PRODUCT.md` and `DESIGN.md`** (those are build and design records):

```
index.html  transport.html  trade.html  about.html  contact.html  404.html
sitemap.xml  robots.txt  .htaccess
assets/css/style.css
assets/js/main.js
assets/img/  (your images + favicon.svg + network-lines.svg)
```

## Placeholders to replace

| What | Where | How |
|---|---|---|
| **Domain** `https://YOURDOMAIN.com` | canonical/OG tags, JSON-LD, `sitemap.xml`, `robots.txt` | Edit `SITE_URL` in `_build/build.mjs`, then rebuild (see below) |
| **Email** `info@YOURDOMAIN.com` | footer (all pages), contact page, JSON-LD | Edit `EMAIL` in `_build/build.mjs`, then rebuild |
| **Logo** | `assets/img/logo-white.png` (header/footer), `assets/img/logo.png` (SEO) | Just upload: the text logo swaps out automatically |
| **Favicon** | `assets/img/favicon.svg`, `assets/img/apple-touch-icon.png` | Replace the placeholder "S" icon |
| **Testimonial** | Home page, "Why Skylink" section: `[TESTIMONIAL — add real quote]` | `_build/src/pages/index.html` |
| **Vetting steps** | About page: "How we check our connections" (4 steps) | Check they match how you really vet partners; edit in `_build/src/pages/about.html` |

## Editing content

Pages are generated from `_build/src/` so the header, footer and SEO tags stay identical everywhere.

1. Edit files in `_build/src/pages/` (page content) or `_build/src/partials/` (header, footer, CTA, pillars).
2. Rebuild:
   ```
   cd _build
   npm install        # first time only
   npm run build      # regenerates the .html pages, sitemap, robots.txt and assets/css/style.css
   ```
3. Re-upload the changed `.html` files and `assets/css/style.css`.

Quick fix without Node? You can edit the generated `.html` files directly. Just remember that the next `npm run build` overwrites them, so copy the change into `_build/src/` too.

Brand colours live in two places that must match: `:root` in `_build/input.css` and `_build/tailwind.config.cjs`.

## Photos

All photos are in place: home hero, the driver, plus the Transport, Trade and About heroes. To replace one, put the
new original in `_build/images-src/` with the same name, then run `npm run images` and `npm run build` in `_build/`.
See `assets/img/README.md`.

## Forms → WhatsApp

Every form validates in the browser, then opens `wa.me/254757710635` with a pre-filled message, e.g.:

```
New TRUCK availability
Location: Nairobi
Destination: Mombasa
Truck type: Container / trailer
Capacity: 30 t
Available: Mon, 12 Oct 2026
Return load wanted: Yes, when available
Name: …
Phone: 0712 345 678
```

To move to a real backend or form service later, replace the body of `sendLead()` at the top of `assets/js/main.js`. Every form already goes through that one function.

## Upload to Hostinger (hPanel)

1. Log in to **hPanel** → **Websites** → your domain → **Manage**.
2. Open **Files → File Manager** and go into **`public_html`**.
3. Delete Hostinger's default `default.php` / `index.php` if present.
4. Click **Upload** → **Folder**/**Files** and upload the items listed under *What to upload*, keeping the folder structure (`assets/css`, `assets/js`, `assets/img`).
   - Tip: zip them on your computer, upload the zip, then right-click → **Extract** inside `public_html`.
   - `.htaccess` starts with a dot and may be hidden. Turn on "Show hidden files" in File Manager to check it uploaded.
5. **Security → SSL**: install the free SSL certificate. Once it's active, open `.htaccess` and un-comment the 3 "Force HTTPS" lines.
6. Visit `https://yourdomain.com`, open the menu, submit one form, and try a broken link like `/test` to see the 404 page.
7. Submit `https://yourdomain.com/sitemap.xml` in **Google Search Console** (and set up a Google Business Profile for "Nairobi, Kenya").

**FTP alternative:** hPanel → **Files → FTP Accounts** gives host/user/password. Connect with FileZilla and drag the same files into `public_html`.
