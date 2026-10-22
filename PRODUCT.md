# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: truck owners and transporters** (owner-drivers to small fleets) on routes across Africa. Situation: they have just delivered a load and now lose time, fuel and money calling, messaging and waiting to find the next one, sometimes driving back empty. Job: get a load for the trip, and a return load on the way back when available. Most arrive from Instagram on Android phones.
- **Cargo owners / businesses** who need something moved and want a suitable truck without hunting for one.
- **Trade buyers** (wholesalers, importers, distributors, contractors, business buyers) across Africa, with Kenya and Nigeria as current focus markets, who send product + quantity + destination/specifications.
- **Suppliers** (manufacturers, wholesalers, verified suppliers) in China, India, Japan and other markets who want to reach African buyers.

Order of priority confirmed by the owner: truck owners first; trade is the second service.

## Product Purpose

Skylink Global Network is a Nairobi-based B2B connection business. It does not own trucks or sell goods: it connects the right people and earns from the match. Success is a visitor sending a WhatsApp request (truck availability, cargo request, buyer request, supplier registration or general enquiry) that Skylink can act on.

## Positioning

A human-run connection service, not a load board or marketplace app: the visitor tells Skylink what they need in one message and Skylink does the searching, for both directions of a trip when available. One network serves transport (load matching) and trade (supplier sourcing).

## Operating Context

- Contact happens on WhatsApp (+254 757 710 635, wa.me/254757710635); forms only prepare a pre-filled WhatsApp message. Instagram: @skylink_global_network.
- Example corridor used in marketing: Nairobi ⇄ Mombasa (Load 1 out, Load 2 back), but coverage is any route across Africa, within one country or across borders.
- Verified supplier connections today: tiles, sanitary ware, rice and spices from India. Categories: steel, hardware, mechanical, electrical & plumbing, building/construction materials, industrial products, furniture and other wholesale.

## Capabilities and Constraints

- Static site: plain HTML pages generated from `_build/src` (build.mjs), compiled Tailwind v3 CSS, vanilla JS; no backend. Uploaded to Hostinger shared hosting by FTP/File Manager with no build step on the host.
- Forms validate in the browser and open WhatsApp; `sendLead()` in `assets/js/main.js` is the single swap point for a future backend.
- Pages: Home, Transport (truck owner + cargo owner forms, FAQ), Trade (buyer + supplier forms, FAQ), About (founder story), Contact, 404.
- Return loads are always "when available"; never promise guaranteed loads.
- Travel appears in the tagline only; it is not an active service and has no page.
- Email address and domain are still placeholders (info@YOURDOMAIN.com, https://YOURDOMAIN.com).

## Brand Commitments

- Name: Skylink Global Network. Logo: "Skylink" wordmark (blue) with "GLOBAL NETWORK" spaced caps beneath; owner will supply logo files.
- Tagline line: BUSINESS | TRAVEL | LOGISTICS | OPPORTUNITIES.
- Exact taglines to reuse: "Real Connections. Real Movement." · "We simply connect the right people." · "Connecting businesses. Creating global opportunities." · "Moving businesses forward." · "Let's build strong business connections together." · "Let's connect the right buyer with the right supplier."
- Trust pillars: Verified Network · Direct Connections · Save Time · More Opportunities.
- Pinned in the original brief, verbatim: "The overall look is **bold black + bright yellow**, with logo blue as the secondary colour. Alternate dark (black) and light (white/grey) sections the way our posts do." Also: "Small labels/eyebrows: uppercase with wide letter-spacing (0.2em), like 'WE SIMPLY CONNECT THE RIGHT PEOPLE.'" and "yellow underline accents under section titles".
- Pinned in the original brief: bold black + bright yellow (#0A0A0A / #FFD200) with logo blue (#1E5FD9) secondary and the full token list in `_build/input.css`; heavy condensed all-caps display type (Anton) with a key phrase in yellow; Poppins or Inter for body; never yellow text on white; WCAG AA contrast.
- Voice: clear, simple English a truck owner reads easily on a phone. Founder: Sara Mohamed; business run on honest, halal principles.

## Evidence on Hand

- Photos in `_build/images-src/`: hero trucks at sunset, aerial highway, port containers, warehouse loading, tired driver at roadside (stock/AI-generated scenes, not Skylink's own operations), and a founder portrait of Sara Mohamed supplied by the owner on 2026-10-22 (replaces an earlier unconfirmed stock-style photo).
- Founder story text from the owner (About page).
- **Absent, must not be fabricated:** testimonials, customer or partner names/logos, statistics, years in business. Placeholders stay marked until the owner supplies real ones.

## Product Principles

1. Truck owners first: the first screen speaks to a driver with an empty trip ahead.
2. One message is enough: every path ends in a pre-filled WhatsApp message, with as few fields as the match needs.
3. Honest promises: "when available", no invented proof, Skylink connects and does not own trucks or sell goods.
4. Built for a phone on mobile data: fast, legible in sunlight, thumb-reachable actions.

## Accessibility & Inclusion

WCAG AA contrast on every text/background pair, visible focus, labelled inputs, keyboard-navigable menu, reduced-motion respected. Audience reads English on Android phones, often on slower connections.
