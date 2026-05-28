# 10XBeta marketing site

Static multi-page site for 10xbeta.com. Mockup / spec build.

## Stack

Plain static HTML + CSS + a small `script.js`. No build step. Deploys to Vercel as-is.

## Structure

```
/
├─ index.html          home
├─ develop.html        the Lab
├─ manufacture.html    the Factory
├─ ai.html             10XLAB AI
├─ work.html           selected work grid
├─ venture.html        venture studio (secondary)
├─ about.html
├─ contact.html
├─ styles.css          all CSS
├─ script.js           chevron pattern + home hero cross-fade
├─ vercel.json         cleanUrls: true (so /develop not /develop.html)
└─ images/
   ├─ hero/             transparent PNGs for home hero rotation
   ├─ work/             product photos for Work grid
   ├─ lab/              lab interior + team photos
   └─ platform/         Platform OS screenshots (for AI page)
```

Header and footer markup repeats across pages on purpose. No templating, no build. The price of static HTML is duplication; the benefit is zero build complexity.

## Active nav state

Each page sets `aria-current="page"` on its own nav link. Styling lives in `styles.css` (`.navlinks a[aria-current="page"]`).

## Hero cross-fade

Only on the home page. `index.html` has a `#hero-stage` with four `.cyc` children. `script.js` cycles them on a 4s interval with a 1.1s CSS opacity transition. Currently they are placeholder boxes — swap each `.prodph` div for an `<img>` pointing at `/images/hero/[product].png` once transparent PNGs are uploaded.

## Chevron pattern

Decorative SVG drawn into any `svg.chevfield` element on page load by `script.js`. Each hero has one.

## Images

All image slots are currently labeled dashed-box placeholders. To wire real images in, find each `.ph` or `.prodph` or `.wimg` element and replace with `<img src="/images/..." alt="...">`. Filenames the markup expects are listed inside each `images/*/.gitkeep`.

## Deploy

Vercel → Add New → Project → import this repo. No framework preset, no build command. `vercel.json` handles clean URLs. Every push to `main` auto-deploys.

## What this is and is not

- This is a working mockup / build spec.
- It is intentionally simple: no JS framework, no build pipeline, no CMS.
- It is ready to attach a custom domain to in Vercel, OR to hand to a designer / Framer build as the visual + copy spec.

## Conventions

- Brand tokens (CSS variables) live at the top of `styles.css`.
- Navy `#061A2E`, blue `#0387D1`. Fonts: Barlow (heads), Inter (body).
- No em-dashes anywhere in visible prose (style rule).
