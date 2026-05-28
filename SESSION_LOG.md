# 10XBeta Marketing Site — Session Log

This repo holds the marketing website (separate from `krugerfz/vs-os`, which is Platform OS).
Sessions logged here in the same structured style as Platform OS module sessions, even though
this is not a Platform OS module.

---

## Session 001 — 2026-05-28 — Brand collateral + clickable website mockup

**Status:** in_progress (handoff pending images + Vercel deploy)
**Surface:** claude.ai web (planning + build)
**Owner:** Frederick Kruger (COO)

### What this session produced

**Three matched-pair PPTX decks** (identical brand chrome: navy #061A2E, blue #0387D1,
Barlow headings, Inter body, chevron pattern, white+blue logo). Built with pptxgenjs.
Files delivered to Frederick (not in this repo — they live in the chat outputs):
- `10XBeta_Productized_Services_v3.pptx` — 20 slides. Full lab build partner. Audience:
  VCs, TTOs, founders. Spine: vertically integrated (Hardware/App/Platform/AI/Mfg).
  Two moment slides: "Built for purpose" (sale or scale / license or spinout) and
  "Vertically integrated". Studio-vs-services fence REMOVED. Phase ladder Pre-Seed→Exit.
- `10XLAB_AI_v1.pptx` — 14 slides. Custom AI tools for operating companies. Audience:
  CEO/founder investors who saw Platform OS. Moat = three skills nobody combines
  (workflow→UI, embedded agents, regulated discipline). Moment slide: "You own it when
  we leave." Discover/Build/Own. Pricing: $40-80K / $200-400K / $20-40K-mo (MOST CHOSEN
  on middle). Anonymized clients A (consumer products) + B (services business).
- `10XBeta_Manufacturing_v1.pptx` — 12 slides. Market-entry manufacturing. Spine: "We own
  the process. Not the machines." Volume curve: Prototype 1-50 / Market entry 50-5,000
  ("where we live") / Scale 5,000+. "One brain. Many factories." CTA: "Send us your
  design. We'll tell you how to make it." Em-dashes scrubbed from this deck.

**Clickable website mockup** — single-file `index.html`, the deliverable this repo will hold.
- Tab nav: Develop · Manufacture · AI · Work · Venture · About · [Start a project]
- Leads with lab + mfg services; Venture demoted to its own tab (was the whole identity
  on the current live Framer site).
- HERO (locked): "From zero to one, in regulated environments." /
  "Hardware, software, AI, and manufacturing under one roof."
  Two-column: copy left, cycling transparent-product PNGs right (cross-fade ~4s, blue
  radial glow, dot indicators). Chevron pattern behind.
- Each tab built from matching deck. Develop + AI + Manufacture each end with a "Why us"
  comparison table.
- ALL PRICING REMOVED from the site (decks keep pricing; site does not).
- Problem sections simplified to statements (not detailed medtech-specific cards). Generalized
  away from startup-only / medtech-only language (no "kill the round", no 510k/KOL specifics).
  Develop phases renamed Define/Prove/Build/Launch (kept TRL progression).
- Inline SVG line icons (brand blue, thin stroke) on home doors, Develop traps, AI skills,
  AI engagement phases.
- All images are currently LABELED PLACEHOLDERS (dashed boxes / transparent-PNG slots).

### Key locked decisions
- "From zero to one, in regulated environments" replaces FDA-clearance-narrow framing.
  Medtech is PROOF, not the box. Covers FDA/ISO/IEC/MIL-STD/HIPAA/DoD.
- Vertically integrated ALWAYS = hardware + app + web platform + AI + manufacturing.
- No em-dashes anywhere in visible prose (user rule). MFG deck scrubbed; services v3 + AI v1
  still contain em-dashes (NOT yet scrubbed — open item).
- This marketing site repo is SEPARATE from vs-os (Platform OS). Different deploy cadence.
- Contacts: Marcel Botha CEO marcel.botha@10xbeta.com +1 617 852 7555 / Frederick Kruger COO
  frederick.kruger@10xbeta.com +1 917 573 6502 / 63 Flushing Ave Bldg 303 Ste 807
  Brooklyn NY 11205.

### Image strategy (decided)
- Hero rotation = transparent product PNGs (need background removed BEFORE upload; Claude
  cannot edit images). remove.bg / Canva / Photoshop. Glow + small size hide imperfections.
- Work grid / lab / Platform OS screenshots = backgrounds OK, no cutout needed.
- Repo folder structure to create: /images/hero, /images/work, /images/lab, /images/platform.
  Lowercase-hyphen filenames (spiro-wave.png, k-o2.png, lab-interior.jpg, etc.).
- Several products already exist as cutouts on the current Framer site (framerusercontent.com).

### Deploy plan (decided)
- New repo `krugerfz/10xbeta-site` (this repo), separate from vs-os.
- Deploy via Vercel: import repo, no build step, static index.html → live testing URL.
- This HTML is a SPEC for the team's Framer rebuild (most likely), OR could be the real site
  if they attach the domain directly to Vercel and skip Framer.
- Animations: serve as MP4/WebM not literal GIF (10-20x smaller). Autoplay muted loop playsinline,
  animate only in-view.

### Current state / what is done
- index.html mockup fully built with placeholders. Lives in chat outputs, NOT yet pushed here.
- Repo created (empty until this commit).

### OPEN ITEMS / next session pickup
1. Frederick uploads images to /images/{hero,work,lab,platform} with simple filenames.
2. Claude reads repo to discover filenames, wires REAL images into index.html replacing all
   placeholders, pushes finished index.html + assets to this repo.
3. Frederick imports repo to Vercel → live testing URL → hands repo+URL to team for domain.
4. (Optional) scrub em-dashes from services v3 + AI v1 decks for consistency with MFG deck.
5. (Optional) hover-to-play product loops on Work grid (next motion layer; one motion/viewport rule).
6. (Optional) full Framer homepage copy rewrite spec for Develop/Manufacture/Venture architecture.

### Notes on the current live site (www.10xbeta.com, Framer) being replaced/restructured
- Currently leads with "Venture Studio / HealthTech" identity, Fund→Build→Manufacture→Co-Invest
  order (investor journey), "Portfolio" nav, "Accelerating the future of connected care" hero.
- Has a broken "0 companies / 0+ pipeline" stat (Framer data bug) — must fix or remove.
- MFG page undersells: says "in-house manufacturing" but real model is process-ownership +
  partner network; "Flexible MOQ" buried as advantage #3.
- New architecture flips to capability-forward (Develop/Manufacture/AI lead, Venture secondary),
  "Work" replaces "Portfolio".
