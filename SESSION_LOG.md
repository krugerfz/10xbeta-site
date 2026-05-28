# 10XBeta Marketing Site — Session Log

This repo holds the marketing website (separate from `krugerfz/vs-os`, which is Platform OS).
Sessions logged here in the same structured style as Platform OS module sessions.

---

## Session 001 — 2026-05-28 — Brand collateral + clickable website mockup

**Status:** complete (mockup delivered, then refactored in Session 002)
**Owner:** Frederick Kruger (COO)

### Produced

Three matched-pair PPTX decks (chat outputs, not in this repo):
- `10XBeta_Productized_Services_v3.pptx` (20 slides, full lab build partner)
- `10XLAB_AI_v1.pptx` (14 slides, custom AI tools, Discover/Build/Own pricing in deck)
- `10XBeta_Manufacturing_v1.pptx` (12 slides, "we own the process not the machines", volume curve)

Single-file `index.html` clickable mockup pushed at commit `acc32f13` (later replaced in Session 002).

### Locked decisions
- **Hero:** "From zero to one, in regulated environments." / "Hardware, software, AI, and manufacturing under one roof."
- "Regulated environments" replaces FDA-narrow framing. Medtech is proof, not the box.
- Vertically integrated = hardware + app + platform + AI + manufacturing.
- No em-dashes in visible prose. MFG deck scrubbed; services v3 + AI v1 still have em-dashes (open item).
- Marketing site repo SEPARATE from `vs-os` (Platform OS).
- Nav: Develop · Manufacture · AI · Work · Venture · About · [Start a project]. Venture demoted to one tab.
- Pricing removed from site (kept in decks).
- Problem sections simplified to statements, generalized away from startup/medtech-only.
- Develop phases: Define / Prove / Build / Launch (kept TRL progression).
- Hero rotation = transparent product PNGs (cut backgrounds BEFORE upload; Claude cannot edit images).
- Work grid / lab / Platform OS images: backgrounds OK.
- Animations to serve as MP4/WebM not GIF.

### Contacts
Marcel Botha CEO marcel.botha@10xbeta.com +1 617 852 7555.
Frederick Kruger COO frederick.kruger@10xbeta.com +1 917 573 6502.
63 Flushing Ave Bldg 303 Ste 807, Brooklyn NY 11205.

---

## Session 002 — 2026-05-28 — Multi-page refactor (Option 2 build)

**Status:** complete (ready for Vercel deploy, image wiring next session)
**Owner:** Frederick Kruger (COO)

### Produced — three commits to `main`

1. **`f947dd55`** Infrastructure: `styles.css` (full CSS extracted), `script.js` (chevron + hero
   cross-fade; no SPA `go()`), `vercel.json` (cleanUrls), `.gitignore`, four `images/*/.gitkeep`
   files with expected filenames.
2. **`8e8c8573`** Eight page files + README:
   - `index.html` (home, hero cross-fade)
   - `develop.html` `manufacture.html` `ai.html` `work.html` `venture.html` `about.html` `contact.html`
   - `README.md` (developer-facing)
3. (This commit) Session 002 log.

### Architecture decisions
- **Real anchor-tag nav** (`<a href="/develop">`), not JS. Active state via `aria-current="page"`.
- **No build step, no templating.** Header and footer markup repeats verbatim across pages.
  Accepted cost of static HTML.
- **Hero cross-fade contained on home only.** `script.js` early-returns if `#hero-stage` is absent.
- **Work cards hardcoded as static HTML** (3 on home, 6 on `/work`). No more JS render loop.
- **Each page has `<title>` + meta description.** `lang=en`, viewport meta.
- **`vercel.json` cleanUrls: true** so `/develop` resolves (not `/develop.html`).

### Current repo state

```
/
├── index.html  develop.html  manufacture.html  ai.html
├── work.html   venture.html  about.html        contact.html
├── styles.css  script.js     vercel.json       .gitignore
├── README.md   SESSION_LOG.md
└── /images/
   ├── hero/.gitkeep    work/.gitkeep    lab/.gitkeep    platform/.gitkeep
```

### Still placeholder

All images = labeled dashed boxes. Hero cycles four `.prodph` divs with `<br>`-separated labels.
To wire real images: replace each `.prodph`/`.ph`/`.wimg` div with `<img src="/images/...">`.
Expected filenames are listed in each `.gitkeep`.

### Open items / next session

1. **Frederick:** import repo to Vercel (no build, no framework preset) → testing URL.
2. **Frederick:** upload images to `/images/{hero,work,lab,platform}`. Hero PNGs need transparent
   backgrounds.
3. **Claude:** read repo to discover filenames, swap placeholders for `<img>` tags, push.
4. (Optional) scrub em-dashes from services v3 + AI v1 decks.
5. (Optional) hover-to-play product loops on Work grid (MP4/WebM, not GIF).
6. (Optional) Framer copy rewrite spec if team prefers Framer over static HTML.

### Notes on current live site being replaced

- Live `www.10xbeta.com` (Framer) leads with Venture Studio / HealthTech identity,
  Fund→Build→Manufacture→Co-Invest order. Has broken "0 companies / 0+ pipeline" Framer data bug.
- New architecture flips capability-forward (Develop/Manufacture/AI lead, Venture secondary,
  "Work" replaces "Portfolio").
