---
name: Skylink Global Network
description: Black cloth printed in one yellow; a human-run connection service for trucks, loads and suppliers across Africa.
colors:
  cloth-black: "#0A0A0A"
  charcoal: "#16181D"
  signal-yellow: "#FFD200"
  signal-yellow-deep: "#E6B800"
  logo-blue: "#1E5FD9"
  logo-blue-deep: "#184FB8"
  wordmark-blue: "#3B7BEA"
  return-sky: "#2EA3F2"
  fuel-orange: "#F5A300"
  fuel-orange-ink: "#B45309"
  whatsapp-green: "#25D366"
  check-green: "#22C55E"
  paper-white: "#FFFFFF"
  grey-wash: "#F4F5F7"
  light-alt-wash: "#ECEEF2"
  dust-grey: "#B9BEC9"
  slate-grey: "#5B6170"
  field-stroke: "#858B97"
  error-red: "#B3261E"
typography:
  display:
    fontFamily: "Anton, Oswald, 'Bebas Neue', Impact, sans-serif"
    fontSize: "clamp(2.4rem, 5.4vw + .25rem, 6rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "0.01em"
  headline-page:
    fontFamily: "Anton, Oswald, 'Bebas Neue', Impact, sans-serif"
    fontSize: "clamp(2.75rem, 6vw + .5rem, 6rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Anton, Oswald, 'Bebas Neue', Impact, sans-serif"
    fontSize: "clamp(2.25rem, 3.6vw + 1rem, 4.25rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.01em"
  title:
    fontFamily: "Anton, Oswald, 'Bebas Neue', Impact, sans-serif"
    fontSize: "clamp(1.5rem, 1.2vw + 1rem, 2rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.01em"
  lead:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(1.0625rem, .3vw + 1rem, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "0.2em"
rounded:
  control: "12px"
  panel: "16px"
  pill: "9999px"
spacing:
  gutter-mobile: "20px"
  gutter: "32px"
  section-mobile: "80px"
  section-tablet: "96px"
  section: "128px"
  container: "72rem"
components:
  button-yellow:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.cloth-black}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
    height: "52px"
  button-yellow-hover:
    backgroundColor: "{colors.signal-yellow-deep}"
  button-blue:
    backgroundColor: "{colors.logo-blue}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
    height: "52px"
  button-blue-hover:
    backgroundColor: "{colors.logo-blue-deep}"
  button-dark:
    backgroundColor: "{colors.cloth-black}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
    height: "52px"
  button-dark-hover:
    backgroundColor: "{colors.charcoal}"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.cloth-black}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
    height: "52px"
  button-large:
    padding: "12px 28px"
    height: "58px"
  route-chip:
    textColor: "{colors.paper-white}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  route-chip-active:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.cloth-black}"
    rounded: "{rounded.pill}"
  badge-load-1:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.cloth-black}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  badge-load-2:
    backgroundColor: "{colors.return-sky}"
    textColor: "{colors.cloth-black}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  input:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.cloth-black}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
    height: "52px"
  tab-active:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.cloth-black}"
    rounded: "{rounded.control}"
    height: "56px"
  nav-link-current:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.cloth-black}"
    padding: "8px 12px"
  form-panel:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.cloth-black}"
    rounded: "{rounded.panel}"
    padding: "36px"
  step-number:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.cloth-black}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    size: "64px"
---

# Design System: Skylink Global Network

## Overview

**Creative North Star: "The Printed Cloth"**

Every page is printed like a kanga: a black cloth carrying one yellow ink, with Skylink's message set where the cloth's saying goes. The saying is the message band: Anton capitals held between two double rules, spanning the width of its field. Around it, the content reads as a working sheet for a driver on an Android phone in sunlight: big condensed headings, plain Poppins prose, thumb-sized actions, and one WhatsApp message as the end of every path.

The cloth has no printed border. The decorative border strips (pindo) were removed by the user on 2026-10-22 because they pulled attention from content; frames are not part of this system and must not be reintroduced. What remains is the field and its print: message bands, the lane line that only appears where something moves in sequence (Load 1 solid, Load 2 dashed), hairline lists instead of boxed cards, and stock photos whose provenance is stitched to them with a running-stitch seam.

Sections alternate dark and light, per the user's brief: "Alternate dark (black) and light (white/grey) sections the way our posts do." Dark is the default theme; a sun/moon toggle in the header repaints the dark non-photo fields to white for readers who prefer it, while photo sections, the yellow section and the forms print the same in both.

**Key Characteristics:**
- Black cloth, one yellow ink, logo blue as the secondary voice.
- Message bands (Anton capitals between 7px double rules) carry the user's exact taglines.
- The lane line: solid for Load 1 out, dashed for Load 2 back, drawn once when the route enters view.
- Hairline rows and columns, not boxed cards; panels only where content is a real unit (a form).
- Full-bleed stock photography under a darkening overlay, always captioned as stock on a seamed note.
- No frames, no border strips, no decorative shadows.

## Colors

A two-ink print: near-black cloth and signal yellow do almost all the work, logo blue speaks second, and every other hue has a single job.

### Primary
- **Signal Yellow** (`signal-yellow`): the one ink. Key phrases inside display headings, message-band rules on dark, the current nav item, active route chip, active tab, step numbers, Load 1 badge and lane, the dispatch icons, focus outlines on dark. Also floods one full section per page (the yellow field), where text turns black. Pressed/hover state uses **Deep Yellow** (`signal-yellow-deep`).

### Secondary
- **Logo Blue** (`logo-blue`): the yellow's stand-in on any light ground. Key phrases, icon strokes, focus rings, links, caret and checkbox accent on white or grey; the blue button. Hover deepens to `logo-blue-deep`.
- **Wordmark Blue** (`wordmark-blue`): only the text-logo "Skylink" on black, a lighter step so the wordmark passes 3:1 at large size.

### Tertiary
- **Return Sky** (`return-sky`): Load 2 only: the dashed return lane and its badge. On light grounds the return lane prints in logo blue.
- **Fuel Orange** (`fuel-orange`): cost and warning signals on dark (the fuel cost line, placeholder boxes). On light grounds it becomes `fuel-orange-ink`.
- **WhatsApp Green** (`whatsapp-green`): the WhatsApp action, everywhere and only there (buttons, floating button, header icon). Text on it is black.
- **Check Green** (`check-green`): the round tick beside benefit lists.

### Neutral
- **Cloth Black** (`cloth-black`): page ground in dark theme, all text on yellow and white, buttons on light/yellow.
- **Charcoal** (`charcoal`): dark button hover and the rare dark sub-surface.
- **Paper White** (`paper-white`): light sections, forms, page ground in light theme.
- **Grey Wash** (`grey-wash`): the alternate light section (how-it-works, form backdrops).
- **Light Alt Wash** (`light-alt-wash`): what alternate dark fields become in light theme.
- **Dust Grey** (`dust-grey`): secondary text on black (AA on black and charcoal).
- **Slate Grey** (`slate-grey`): secondary text on white and grey; input hover stroke.
- **Field Stroke** (`field-stroke`): resting input border. **Error Red** (`error-red`): validation messages.

Hairlines are white at 8 to 12% on dark and black at 8 to 12% on light; they are alpha values, not tokens.

### Named Rules
**The One Ink Rule.** Yellow is the only accent on a dark field. Blue, sky, orange and green each own one job and never decorate.

**The Never Yellow On White Rule.** Yellow text never sits on white or grey. On any light ground, the key phrase, icon and focus colour switch to logo blue; in light theme every yellow text on a repainted field becomes blue. Yellow as a fill (buttons, chips, badges, the yellow section) with black text is fine. Every text pair meets WCAG AA.

**The Two Loads Rule.** Load 1 is yellow and solid; Load 2 is sky and dashed. This pairing is the meaning of the lane and is not reused for anything else.

## Typography

**Display Font:** Anton (with Oswald, Bebas Neue, Impact)
**Body Font:** Poppins (with system-ui, Segoe UI, Roboto)

**Character:** Heavy upright condensed capitals shout the message like a printed saying; Poppins underneath is round, plain and easy for a driver reading English on a phone.

### Hierarchy
- **Display** (400, `typography.display`, 0.86): home hero message band only.
- **Headline Page** (400, `typography.headline-page`, 0.9): inner page titles over the photo header.
- **Headline** (400, `typography.headline`, 0.9): section titles and message bands. Uppercase, balanced wrap, one key phrase in yellow (blue on light).
- **Title** (400, `typography.title`, 1): step titles and sub-section heads; also the dispatch-bar titles (1.6 to 1.85rem) and mobile menu links (2rem).
- **Lead** (400, `typography.lead`, 1.6): the intro paragraph under a heading, held to a 34rem measure.
- **Body** (400 / 500 / 600, 1rem, 1.65): reading text; list item heads at 1.125rem semibold; FAQ questions 1.125rem semibold.
- **Label** (600, 0.75 to 0.8rem, 0.2em, uppercase): reserved for the user's pinned tagline lines (see rule below).

The scale steps by a perfect fourth (1.333).

### Named Rules
**The Upright Capitals Rule.** Display type is always Anton, uppercase, weight 400, never italic, never tracked wider than 0.01em. Poppins is never set in capitals for headings.

**The Pinned Label Rule.** The wide-spaced uppercase label exists because the user pinned it verbatim: "Small labels/eyebrows: uppercase with wide letter-spacing (0.2em), like 'WE SIMPLY CONNECT THE RIGHT PEOPLE.'" It carries only the user's own tagline lines ("We simply connect the right people.", "Business | Travel | Logistics | Opportunities"). It is not a section kicker: never invent label text above headings.

## Layout

A single centred container (max 72rem) with 20px gutters on phones and 32px from 640px up. Sections breathe vertically at 80px / 96px / 128px (mobile / 640px / 1024px); a dark field following another dark field tightens its top to 56 to 80px and is separated by a 1px hairline. Pages run as a sequence of full-width fields alternating black, white or grey wash, one yellow field, and full-bleed photo fields.

Headers sit transparent over the photo and turn to translucent black (80%, blurred) once scrolled; the first section pads by the 4.5rem header height. The home hero fills 100svh; inner-page photo headers are 62svh (72svh at 1024px) with the title anchored low. Two-column layouts use a 12-column grid at 1024px (typically 5/7 or 6/6); everything stacks to one column on phones with thumb-reachable full-width buttons. Hairline grids reflow 1 → 2 → 3 or 4 columns.

## Elevation & Depth

The cloth is flat. Depth comes from photography under dark gradient overlays and from the dark/light field alternation, not from shadows. Shadows exist only where an object genuinely floats above the cloth.

### Shadow Vocabulary
- **Form lift** (`box-shadow: 0 30px 60px -30px rgba(0,0,0,.55)`): the white form panel resting on a grey or dark field.
- **Light card** (`box-shadow: 0 1px 2px rgba(10,10,10,.04), 0 12px 32px -18px rgba(10,10,10,.18)`): the single white card on a light field.
- **Floating action** (`box-shadow: 0 12px 30px -10px rgba(0,0,0,.6)`): the fixed WhatsApp button.
- **Field focus** (`box-shadow: 0 0 0 4px rgba(30,95,217,.18)`): input focus halo.

### Named Rules
**The Flat Cloth Rule.** Sections, lists and bands never carry shadows. If an element is not a form, a floating button or the one light card, it is flat.

## Shapes

Two corner sizes and the circle: controls (buttons, inputs, tabs, dispatch icons) at 12px, panels and photos at 16px, and full pills only for chips, badges and market tags. Icons sit in 1.5px outlined circles (48px, or 40px small). Rules are the main geometry: 7px double rules above and below a message band, a 3px double rule around the cost line, 1px hairlines between list rows, a 5px x 3rem yellow bar under section titles, and the 4px lane line (22px dash, 16px gap). No frames or border strips enclose a page or section.

## Components

### Buttons
Solid, square-shouldered blocks that say exactly what happens next.
- **Shape:** gently rounded (`rounded.control`), minimum 52px tall (58px large), semibold 0.95rem Poppins with an optional 20px leading icon.
- **Primary:** yellow on dark fields, black on yellow/light fields, blue as the alternate on light; WhatsApp green with black text for every WhatsApp action.
- **Hover / Focus:** fill deepens over 200ms; press nudges down 1px; focus is a 3px outline offset 3px (yellow on dark, blue on light, black on yellow).
- **Ghost:** 2px border at 30% of the text colour, solid on hover; used beside a primary only.

### Chips
- **Style:** route chips are 44px pills with a 1px white/20% border and a two-way arrow between city names.
- **State:** one corridor at a time; the pressed chip fills yellow with black text and redraws the route.

### Cards / Containers
- **Corner Style:** `rounded.panel`.
- **Background:** white form panel (36px padding, 20px on phones); one white card on light fields; a solid black panel for the transporter-network invite.
- **Shadow Strategy:** see Elevation; form lift only.
- **Rule:** boxes are for real units (a form). Lists of things use hairlines.

### Inputs / Fields
- **Style:** white, 1.5px `field-stroke` border, `rounded.control`, 52px minimum; labels semibold black above, optional marked in slate.
- **Focus:** border turns logo blue with the 4px blue halo.
- **Error:** border `#C62828`, message in error red below. Forms look identical in both themes.

### Navigation
- **Desktop:** centred links (0.92rem medium, white 90% with a soft text shadow over photo); current page is a yellow block with black text. Right side: round sun/moon theme toggle and the "WhatsApp Us" pill, both translucent black with a 1px inset white hairline.
- **Mobile:** 44px round icon buttons; the menu opens as a black sheet of 60px Anton links (2rem) separated by hairlines, current link yellow, and a full-width WhatsApp button.

### Message Band (ujumbe)
The cloth's saying: centred (or left-aligned) Anton capitals at headline, page or display size, padded 0.9 to 1.4rem, between 7px double yellow rules. On yellow, white or grey fields and in light theme the rules print black. On the hero it sits on 72% black over the photo. Carries only the user's exact taglines; one key phrase may print in yellow.

### The Lane
The only structural device, used only where something moves in sequence. The route shows two cities in display capitals with Load 1 as a solid yellow lane and Load 2 as a dashed sky lane, drawn once on scroll (1.1s, `cubic-bezier(.65,0,.35,1)`, return leg 0.9s later; static under reduced motion). The timeline list hangs items from a dashed vertical lane with ringed stops; the three steps are joined by a dashed horizontal lane between yellow number discs. On light grounds lanes print in black ink and the return in blue.

### Dispatch Bar
The hero's primary choice: a 16px-rounded split bar (translucent black, blurred, 1px white/15% border) with "Have a load?" and "Have a truck?" halves, each with a yellow icon tile; a half floods yellow on hover/focus and its icon tile inverts.

### Hairline Lists
Manifest (category grid), pillars (columns divided by vertical hairlines), FAQ rows (64px summaries with a plus that turns 45 degrees) and contact rows (88px with outlined icon circle that fills yellow on hover) are all separated by 1px hairlines at 12%, never boxed.

### Seamed Caption
Provenance stitched to its photo: a 1.5px running-stitch line (7px stitch, 5px gap) above the caption, or a small 75% white note on the photo itself. Every stock photo says it is stock.

## Do's and Don'ts

### Do:
- **Do** keep dark as the default theme and let the header toggle switch to light; in light theme repaint only dark non-photo fields, keep photo sections, the yellow field and forms unchanged.
- **Do** switch every yellow text to logo blue on white or grey grounds.
- **Do** set the user's exact taglines in message bands between 7px double rules.
- **Do** use the lane only for real sequences: Load 1 solid yellow, Load 2 dashed sky.
- **Do** separate list items with 1px hairlines and reserve panels for forms.
- **Do** caption every stock photo as stock on a seamed note.
- **Do** keep touch targets at 44px or more and every text pair at WCAG AA.

### Don't:
- **Don't** reintroduce frames or the printed border strips (pindo); the user removed them on 2026-10-22 because they pulled attention from content.
- **Don't** put yellow text on white or grey.
- **Don't** invent label kickers above headings; the spaced label carries only the user's pinned tagline lines.
- **Don't** box lists into cards or add shadows to sections and bands.
- **Don't** use WhatsApp green, sky or orange for anything but their single job.
- **Don't** set display type in anything but upright Anton capitals.
