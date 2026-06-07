# 10XBeta Marketing Site — Session Log

> **⚠️ READ FIRST IF YOU ARE A NEW CLAUDE SESSION**
>
> - This is the **static marketing website** for `10xbeta.com` — repo `krugerfz/10xbeta-site`.
> - It is **separate** from `krugerfz/vs-os` (Platform OS) and shares **none** of its infrastructure.
> - **No database. No Supabase. No backend. No auth. No `session_log` table.** This site is
>   plain HTML + CSS + JS, served as static files from Vercel.
> - **Do NOT query the vs-os Supabase project** (`aocwdelrdmonddsvvtys`) for context on this
>   repo. Those module sessions (OE, VEN, NDC, FUND, DASH, PLATFORM) are a different project
>   on a different track and have nothing to do with this site.
> - **This file (`SESSION_LOG.md`) IS the session log** for this repo. Read it top-to-bottom
>   when picking up a session. The most recent session is at the bottom.
> - **Default opening from Frederick:** `"10xbeta-site session"` or similar. Treat that as
>   the cue to (a) read this file, (b) read `README.md` for tech-stack orientation, and
>   (c) optionally `GET` the latest repo state for any files mentioned in the most recent
>   session's "open items."
> - **Tech stack:** static HTML + CSS + JS, no build step, deployed to Vercel with
>   `vercel.json` cleanUrls. See `README.md` for layout.
> - **Operational independence:** Frederick handles all internal team communication on
>   his own schedule. Do not suggest he "consult" or "check with" colleagues as a decision
>   step in any session output.

This repo holds the marketing website (separate from `krugerfz/vs-os`, which is Platform OS).
Sessions logged here in the same structured style as Platform OS module sessions, but with no
DB persistence — this markdown file is the only durable session record.

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
3. **`59b7b15d`** Session 002 log.

### Architecture decisions
- **Real anchor-tag nav** (`<a href="/develop">`), not JS. Active state via `aria-current="page"`.
- **No build step, no templating.** Header and footer markup repeats verbatim across pages.
  Accepted cost of static HTML.
- **Hero cross-fade contained on home only.** `script.js` early-returns if `#hero-stage` is absent.
- **Work cards hardcoded as static HTML** (3 on home, 6 on `/work`). No more JS render loop.
- **Each page has `<title>` + meta description.** `lang=en`, viewport meta.
- **`vercel.json` cleanUrls: true** so `/develop` resolves (not `/develop.html`).

---

## Session 003 — 2026-05-28 — First images wired, then hero redesign

**Status:** complete (capability-stack hero shipped, awaiting Frederick's reaction +
remaining work images)
**Owner:** Frederick Kruger (COO)

### Produced — two commits to `main`

1. **`ddcb4169`** First real images wired:
   - `Spiro_01.png` (1MB transparent) uploaded to `/images/hero/`, wired into the hero
     `.cyc` slot as a single static product (no cycle, since only one image).
   - `platform_01.png` (2MB) uploaded to `/images/platform/`, wired into the AI page
     Platform OS slot as a `.screen` (rounded card with shadow + border).
   - Added `.prodimg` and `.screen` classes to `styles.css`.
   - `script.js` updated to guard `cycleHero` so it skips the interval when
     `slides.length <= 1` (prevents the single-slide fade flash).

2. **`00f8651f`** Hero redesign after Frederick said the single product on navy was
   not landing:
   - Replaced hero-right with new **Capability Stack** SVG/CSS visual: five
     translucent navy layer-cards (Hardware / App / Platform / AI / Manufacturing),
     each with a thin-stroke blue icon and 3px blue left border, animating in
     sequentially (stagger ~0.13s, total ~0.48s + foot), capped by a small
     "ONE TEAM. ONE ROOF." caption fading in at 0.85s.
   - New CSS classes added: `.cap-stack`, `.cap-stack .layer`, `.cap-stack .lico`,
     `.cap-stack .llabel`, `.cap-stack .stack-foot`, `@keyframes layerIn`.
   - `Spiro_01.png` moved off the hero and into the **Work grid as the Spiro Wave
     card thumbnail** (referenced from its existing `/images/hero/Spiro_01.png` path;
     no file relocation needed). Added `.workcard .wimg img` CSS to render product
     images cleanly inside the existing card chrome.
   - Spiro card now appears on both `index.html` (home grid, first card of 3) and
     `work.html` (Work grid, first card of 6).

### Key learnings & design pivot
- **Single transparent product PNG on dark background + radial glow = dated 2018-era
  SaaS aesthetic.** Works only with a hero-quality cutout; anything less reads as
  awkward. For medtech / hardware lab / venture studio sites, capability-forward
  imagery beats product-forward imagery in the hero. The brand spine
  ("vertically integrated, five layers, one roof") is itself a visual — show it.
- **Spiro_01.png works much better as a small thumbnail than as a hero feature.**
  Cutout imperfections forgive at small size; product-as-grid-item is appropriate
  for a "selected work" card.
- **No live web research available this session** (GitHub MCP tools only;
  `web_search` not in this surface's tool set). Hero redesign was informed by
  Claude's training knowledge of current B2B technical site design patterns
  (Lattice, Hardware Club, Octant Bio, Form Bio, Convelo, Inflect, Cradle).
  Worth flagging next session if true web research is needed — start the session
  in a surface that has search access.

### Current repo state

```
/
├── index.html              ✅ home, NEW capability-stack hero
├── develop.html            ✅
├── manufacture.html        ✅
├── ai.html                 ✅ platform_01.png wired as .screen
├── work.html               ✅ Spiro_01.png wired into Spiro card
├── venture.html            ✅
├── about.html              ✅
├── contact.html            ✅
├── styles.css              ✅ now includes .cap-stack + .screen + .workcard img
├── script.js               ✅ cycleHero guarded for single-slide case
├── vercel.json             ✅
├── .gitignore              ✅
├── README.md               ✅
├── SESSION_LOG.md          ✅ Sessions 001 + 002 + 003 logged
└── /images/
   ├── hero/Spiro_01.png        ✅ 1MB (now consumed by Work grid only)
   ├── work/.gitkeep            ⏳ awaiting K-O2, PARADIGM, Cryo Medica, Validose, Gynocular
   ├── lab/.gitkeep             ⏳ awaiting lab-interior.jpg, team.jpg
   └── platform/platform_01.png ✅ 2MB
```

### Open items / next session

1. **Frederick's reaction to capability stack hero.** Things to judge:
   - Density (5 cards may feel busy — could drop to 3: Hardware/Platform/Manufacturing)
   - Icon clarity at 22px (AI node-network + Hardware chip are the riskiest)
   - Animation pace
   - Spiro thumbnail on white in Work grid (cutout halo will be more visible
     here than it was in hero)
2. **Vercel deploy** — confirm Frederick imported repo to Vercel and got a
   testing URL. (Was open at end of Session 002.)
3. **Remaining work images** — upload to `/images/work/` with lowercase-hyphen
   filenames (`k-o2.jpg`, `paradigm.jpg`, `cryo-medica.jpg`, `validose.jpg`,
   `gynocular.jpg`). JPGs fine, backgrounds OK. Claude will wire all five in
   one push.
4. **Lab/team images** — upload to `/images/lab/` (`lab-interior.jpg` for home
   Why-us split, `team.jpg` for About page).
5. **If capability stack does not land** — alternative hero directions to try:
   wide facility/lab photograph with dark gradient overlay; typography-only
   hero with chevron background only; abstract animated technical pattern
   (mesh gradient + nodes); bento grid of small tiles.
6. (Optional, carried from Session 002) Scrub em-dashes from services v3 +
   AI v1 decks for consistency with MFG deck.
7. (Optional) Hover-to-play product video loops on Work grid (MP4/WebM, not GIF).

### Decisions locked this session

- **Hero pattern is now SVG-based Capability Stack** (5 layers, sequential
  fade-in, "ONE TEAM. ONE ROOF." caption beneath). The previous single-product
  hero pattern is deprecated.
- **Work card thumbnails use white background with the product PNG inside**
  via `.workcard .wimg img { max-width: 100%; max-height: 100%; object-fit: contain; }`.
  Markup pattern: `<div class="wimg" style="background:#fff;"><img src="..."></div>`.
- **Spiro_01.png stays at `/images/hero/Spiro_01.png`** even though it's
  consumed by the Work grid. Acceptable repo hygiene compromise — moving the
  file would require delete + create operations and break any future hero
  re-introduction. The path is referenced explicitly from both home and work
  page Spiro cards.
- **`script.js` cycleHero guarded** for `slides.length <= 1` — when more hero
  images arrive, multiple `.cyc` divs in the markup will re-enable cycling
  automatically (no JS change required).

---

## Notes on current live site being replaced

- Live `www.10xbeta.com` (Framer) leads with Venture Studio / HealthTech identity,
  Fund→Build→Manufacture→Co-Invest order. Has broken "0 companies / 0+ pipeline" Framer data bug.
- New architecture flips capability-forward (Develop/Manufacture/AI lead, Venture secondary,
  "Work" replaces "Portfolio").
