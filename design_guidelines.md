---
name: 10XBeta Platform OS Design Guidelines
description: 10XBeta Platform OS design system — brand foundation, application palette, component primitives, and module shell architecture
version: 3.10
last_updated: 2026-05-06
brand_owner: Charlene Walton (charlene.walton@10xbeta.com)
platform_owner: Frederick Kruger (frederick.kruger@10xbeta.com)
source: Copied from krugerfz/vs-os/design_guidelines.md
---

> **⚠️ READ FIRST — Scope for the marketing site project**
>
> This file is copied verbatim from `krugerfz/vs-os/design_guidelines.md` (canonical source,
> owned by Charlene Walton). It documents the full 10XBeta Platform OS design system across
> three layers. For the marketing site (`krugerfz/10xbeta-site`, this repo), only a subset
> applies:
>
> **Applies to the marketing site:**
> - **Layer 1 — Brand Foundation** in full (mission, values, tone of voice, primary palette,
>   typography stack, brand patterns, sub-brand hierarchy, photography, logo files).
> - **Layer 2 — Light Mode tokens only** (the marketing site is light-mode-only; no theme
>   switching, no dark mode).
> - **Status palette** if/when the marketing site needs status badges (none used currently).
>
> **Does NOT apply** to the marketing site:
> - **Dark Mode tokens, Module Accent Palette, Technical Surfaces** — Platform OS app-UI
>   concerns. The marketing site has no modules.
> - **Component Primitives (Layer 3)** — Platform OS density specs (44/32/28 touch tiers,
>   14px body, `--text-*` token names, `--space-*` tokens, the "Big Six" component specs).
>   The marketing site uses its own scale and tokens defined inline in `styles.css` (60px h1,
>   17–19px body, pixel-shorthand styling).
> - **Module Shell** — entirely Platform OS architecture (TopBar, ModuleHeader, ModuleTabs).
> - **Auth Contract** — marketing site has no auth, no sign-in surface.
> - **Tooling assumptions** (Next.js, Tailwind, `lucide-react`, `<ThemeProvider>`,
>   `next/font`) — marketing site is plain static HTML + CSS + JS, no framework, no build
>   step. Fonts load via Google Fonts CDN in `styles.css`.
>
> **Precedence when in conflict:**
> 1. **Brand always wins.** Layer 1 decisions (palette hex values, typography stack,
>    tone of voice, sub-brand hierarchy) are canonical and override any marketing-site
>    decision that contradicts them.
> 2. For marketing-site-specific UI patterns (hero structure, capability stack, work
>    card grid, page layout), the site's `styles.css` and `SESSION_LOG.md` decisions
>    are the source of truth. They are not in scope for this document.
> 3. For brand-level questions or changes, contact Charlene Walton
>    (`charlene.walton@10xbeta.com`). Do not modify Layer 1 content in this file —
>    update it in `vs-os` and re-copy.
>
> **Why this file lives in two repos:** the brand doc is canonical in `vs-os` because
> that is where Charlene maintains it. A copy is mirrored here so the marketing-site
> Claude project can reference it without cross-repo lookups. If `vs-os/design_guidelines.md`
> is updated, mirror the change here (or note the drift in `SESSION_LOG.md`).

---

# 10XBeta Platform OS Design Guidelines

This document is the source of truth for visual design across all Platform OS modules. It is structured in three layers, in order of authority:

1. **Brand layer** — official 10XBeta brand foundation. Cannot be overridden.
2. **Application layer** — Platform OS extensions for UI-specific needs (mode tokens, module accents, status colors).
3. **Component layer** — concrete primitives (spacing, type, components) that all modules build with.

When a decision could go multiple ways, the higher layer wins. The brand always wins.

---

# Layer 1 — Brand Foundation

Source of truth: 10XBeta Brand Guidelines 2026.03 (Charlene Walton, Brand & Visual Designer).

## Mission

> Accelerate the future of connected care.

10XBeta Venture Studio connects founders, capital, and resources to streamline development from concept to market in the HealthTech space.

## Values

1. **Relentless Innovation** — challenge the status quo with bold ideas and breakthrough technologies.
2. **Execution with Speed & Precision** — move fast without compromising regulatory and technical excellence.
3. **Collaboration Without Boundaries** — cross-disciplinary teamwork between engineers, designers, investors, founders.
4. **Trust & Transparency** — integrity, openness, and accountability in every relationship.
5. **Structured De-risking** — repeatable processes that turn uncertainty into clarity.
6. **Impact-Driven Excellence** — life-changing technologies that improve patient outcomes.

## Tone of Voice

Every visual and verbal decision should reflect these four qualities:

- **Bold** — speak with confidence and conviction. No hedging. Lead with clarity and authority on what we know.
- **Human** — warmth and empathy even in technical contexts. Behind every product is a patient.
- **Precise** — every element earns its place. Communicate complex concepts in clear, direct form.
- **Forward-looking** — emphasize possibilities, breakthroughs, and the future being built.

In UI design this translates to: dense data layouts (precision), confident type and accent color (bold), occasional moments of warmth in copy and empty states (human), forward visual motion in patterns and transitions (forward-looking).

## Primary Palette

| Color | Hex | RGB | CMYK | Pantone |
|---|---|---|---|---|
| Midnight Blue | `#061A2E` | 6 / 26 / 46 | 94 / 79 / 52 / 65 | 289 C |
| Brand Blue | `#0387D1` | 3 / 135 / 209 | 80 / 37 / 0 / 0 | 285 C |
| White | `#FFFFFF` | 255 / 255 / 255 | 0 / 0 / 0 / 0 | — |

**Brand Blue is sacred.** It is the brand mark color. It appears in the wordmark "X" character, the brand patterns, primary CTAs, active states, brand icons, and the four sub-brand wordmark accents. It does not change between light and dark mode.

**Note on navy in source SVG files:** Charlene's exported SVG library uses `#00214C` for the dark navy fill in `dark-blue` and `blue-*` variants, which differs slightly from the `#061A2E` Midnight Blue in this spec and the brand guide PDF. Both files are committed as-is from source; worth confirming with the brand team whether `#00214C` is intentional or worth re-aligning at source.

## Typography Stack

The brand uses three fonts with strict role separation:

- **GT Walsheim Bold / Regular** — logos and wordmarks ONLY. Licensed font, never used in UI text or body copy.
- **Barlow** (Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800) — headings, display type, and presentation surfaces. Free Google Font. Used for `h1`–`h6`, hero/display copy, and presentation slides.
- **Inter** (Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800) — all body / UI / labels / buttons. Free Google Font. Inter is specifically optimized for small UI sizes (12–16px) with hinting and spacing tuned for screen reading.

Both Barlow and Inter are loaded via `next/font` in `app/layout.tsx` — the font binaries are inlined into the bundle, eliminating the Google Fonts CDN round-trip and FOUT on first paint.

**Why the Barlow + Inter split** (Charlene's call, 2026-04): Barlow is the brand display face — it carries personality at heading sizes (24px+) where its character shows. At body sizes (12–14px) Barlow's letter shapes and spacing become harder to read in dense data surfaces. Inter is the modern open-source standard for UI body text (used by Linear, Notion, GitHub, Vercel, Stripe) and is engineered for exactly that use case. The split preserves brand identity in headings while keeping body copy crisp.

Wiring (already in `globals.css`):

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-barlow), system-ui, sans-serif;
}
/* body inherits Inter from <body style={{ fontFamily: 'var(--font-inter)' }}> */
```

For monospace contexts (timestamps, IDs, code, diff/audit blocks): `ui-monospace, "JetBrains Mono", "Fira Code", monospace`. System stack — uses SF Mono on macOS, Cascadia Code on Windows, falls back gracefully. No extra font load.

## Brand Patterns

The brand has three signature pattern systems, all built from brand blue and midnight navy. Use them as backgrounds, hero accents, login screens, loading visuals, empty-state illustrations, and marketing materials. Do not use them as decoration in dense UI surfaces — they are statement-making, not utility.

1. **Chevron arrow `>`** — directional, forward-motion. Single mark or repeating set. Reads as "advance" or "accelerate."
2. **Quarter-circle arcs** — softer, organic counterpart to the chevron. Often tiled into repeating fields.
3. **Diagonal parallelograms** — striped/banded compositions in navy + blue + white.

## Sub-Brand Hierarchy

10XBeta has four sub-brand identities that appear in their own wordmark treatments. Three of them map to Platform OS modules.

| Sub-Brand | VS-OS Module | Wordmark Pattern |
|---|---|---|
| 10XBeta Venture Studio | VEN | Parent brand wordmark |
| 10XLAB | LAB | "10X" + "LAB" in midnight, "X" character in brand blue |
| 10XMFG | MFG | "10X" + "MFG" in midnight, "X" character in brand blue |
| 10XHOLDINGS | (no module) | Same wordmark pattern |

Where a module corresponds to a sub-brand, the module visually inherits brand blue as its accent (see Application Layer → Module Accents).

## Photography

Scientific, lab, and clinical contexts. Treated with a brand-blue duotone overlay for cohesion. Always shows people in relationship to technology — never technology alone, never people alone. Avoid stock-photo medical clichés.

## Logo Files

Two marks, both sourced from Charlene Walton's official 10XBeta Logo - Digital library:

- **Full wordmark (10XBETA)** — primary brand identity. Used wherever the brand has space to breathe.
- **Abbreviated mark (10X)** — used wherever the full wordmark would be visually overpowering or space-constrained: favicons, app icons, mobile topbar, badges, social avatars, OG image corners.

Both marks live under `frontend/public/brand/`. Off-palette variants (orange, yellow, red, torque/cyan) from the source library are intentionally excluded.

The "X" in both marks is **the brand mark itself** — a quarter-arc + chevron arrow. It is not a typed letter X. Always render via the components below; never recreate either mark in CSS or with a typed X character (the visual result will be wrong).

### Full wordmark — `<Wordmark />`

Source SVGs at `frontend/public/brand/`:

| Path | Composition | Use |
|---|---|---|
| `/brand/10XBETA_Logo_RGB_white-blue.svg` | White wordmark, brand blue X | Dark mode default (app shell, login on dark hero) |
| `/brand/10XBETA_Logo_RGB_dark-blue.svg` | Navy wordmark, brand blue X | Light mode default |
| `/brand/alt/10XBETA_Logo_RGB_blue-white.svg` | Brand blue wordmark, white X | Dark hero / marketing |
| `/brand/alt/10XBETA_Logo_RGB_blue-dark.svg` | Brand blue wordmark, navy X | Light hero / marketing |

Component at `frontend/components/brand/Wordmark.tsx`. Aspect ratio derives from the SVG viewBox (~5.74:1):

```tsx
import { Wordmark } from '@/components/brand/Wordmark'

// App shell topbar (theme-aware automatically — see Theme Switching below)
<Wordmark height={32} priority />

// Hero / marketing (blue-dominant variant)
<Wordmark variant="alt-blue-white" height={48} />
```

The default variant is theme-agnostic: it renders both the dark and light SVGs and lets CSS hide whichever doesn't match the current `data-theme` on `<html>`. The alt variants are theme-specific by intent (blue-dominant compositions for hero/marketing surfaces).

### Abbreviated mark — `<LogoMark />`

Source SVGs at `frontend/public/brand/abbreviated/`:

| Path | Composition | Use |
|---|---|---|
| `/brand/abbreviated/10X_Logo_RGB_white-blue.svg` | White "10", brand blue X | Dark mode default |
| `/brand/abbreviated/10X_Logo_RGB_dark-blue.svg` | Navy "10", brand blue X | Light mode default |
| `/brand/abbreviated/alt/10X_Logo_RGB_blue-white.svg` | Brand blue "10", white X | Dark hero |
| `/brand/abbreviated/alt/10X_Logo_RGB_blue-dark.svg` | Brand blue "10", navy X | Light hero |

Component at `frontend/components/brand/LogoMark.tsx`. Same prop API as `<Wordmark />`. Aspect ratio ~2.42:1:

```tsx
import { LogoMark } from '@/components/brand/LogoMark'

// Compact nav, dense surfaces (theme-aware automatically)
<LogoMark height={32} />

// Hero / marketing (blue-dominant)
<LogoMark variant="alt-blue-white" height={48} />
```

### When to use which

| Use case | Component |
|---|---|
| Desktop app shell topbar | `<Wordmark />` |
| Mobile compact topbar | `<LogoMark />` |
| Login splash, hero | `<Wordmark />` (large) |
| Favicon, app icon, OS tile | `<LogoMark />` (or the standalone `app/icon.svg`, see Favicon below) |
| OG image / social card | `<LogoMark />` (corner) or `<Wordmark />` (centered) |
| Sub-brand pages (10XLAB, 10XMFG marketing) | Sub-brand wordmark (TBD) |

### Wordmarks are external-facing only

The 10XBETA wordmark, 10X abbreviated mark, and any sub-brand variants (10XLAB, 10XMFG) belong on **external surfaces**: the app shell topbar, login splash, favicons, marketing pages, sub-brand service pages, investor materials. They do **not** belong inside Platform OS modules to differentiate them from each other. Modules are differentiated by name, accent color, and tile icon — not by sub-brand wordmark badges. Sub-brand identities of LAB and MFG are 10XBeta service offerings users see externally; the in-platform module is separate from the externally branded service.

### PNG fallbacks

Not currently in the repo for either mark. SVG is sufficient for all UI surfaces (Next.js renders SVG via `next/image`). PNG fallbacks are only needed for email signatures, social media cards, or print contexts — add them via the GitHub web UI when those use cases arrive. Charlene's libraries have them ready under each `/colors/{variant}/` folder.

### Favicon

Wired at `frontend/app/icon.svg`. Squares the abbreviated 10X mark by wrapping it in a 1018×1018 viewBox with a brand-navy background and ~10% breathing room on all sides. SVG scales cleanly to all favicon sizes (16×16 to 512×512). Next.js auto-emits the appropriate `<link rel="icon">` based on this file's presence in `app/`. The legacy `favicon.ico` from the Next.js boilerplate has been removed so this is the unambiguous source.

Known caveat: at very small sizes (16×16 in legacy browser tabs), the "10X" lettering becomes difficult to read against the navy background. A logomark-only variant (just the X = arc + chevron, no "10") would be more legible at that size, but requires either source from Charlene or a hand-extracted square crop. Acceptable trade-off for now since modern browsers default to 32×32+ for tab favicons.

For Apple touch icons (iOS home screen), `apple-icon.svg` is wired alongside the favicon (DASH-9, 2026-05-05). Geometry is currently a verbatim copy of `icon.svg`; tighter padding for iOS context (the OS doesn't add much chrome of its own) is a future polish.

---

# Layer 2 — Application Palette

Platform OS extends the brand with palettes that encode UI-specific meaning. These are derived from and cohesive with the brand, not independent of it.

## Mode Tokens

Both light and dark mode supported. Default is dark. User preference persists (localStorage).

### Dark Mode (default)

```css
--bg: #061A2E;
--bg-card: #0A2440;
--bg-elevated: #0F2D4F;
--bg-sunken: #030F1C;
--border: #1A3551;
--border-strong: #2A4A6E;
--text: #FFFFFF;
--text-secondary: #E5E9EC;
--text-muted: #9BA3AB;
--text-dim: #CDD1D5;       /* Legacy alias — prefer --text-secondary in new code */
--accent: #0387D1;
--accent-hover: #0AA0F5;
--accent-glow: rgba(3, 135, 209, 0.25);
--shadow-card: none;
--shadow-elevated: 0 8px 24px rgba(0, 0, 0, 0.32);
```

### Light Mode

```css
--bg: #F4F8FC;             /* Tinted page bg — avoids pure-white fatigue, adds brand cast */
--bg-card: #FFFFFF;        /* Cards stay pure white — pop against tinted page */
--bg-elevated: #F8F9FA;
--bg-sunken: #F0F2F5;
--border: #E6E8EA;
--border-strong: #CDD1D5;
--text: #061A2E;
--text-secondary: #1F2D3F;
--text-muted: #6B7785;
--text-dim: #384858;       /* Legacy alias — prefer --text-secondary in new code */
--accent: #0387D1;
--accent-hover: #0AA0F5;
--accent-glow: rgba(3, 135, 209, 0.20);
--shadow-card: 0 1px 2px rgba(6, 26, 46, 0.04);
--shadow-elevated: 0 8px 24px rgba(6, 26, 46, 0.08);
```

### Token reference

| Token | Use |
|---|---|
| `--bg` | Page background |
| `--bg-card` | Default card background |
| `--bg-elevated` | Modals, popovers, dense table headers, hover row fills |
| `--bg-sunken` | Inset surfaces — code blocks, command palettes, terminal-style output |
| `--border` | Default 1px borders |
| `--border-strong` | Hover/focus borders, secondary button borders |
| `--text` | **Emphasis only** — KPI values, page titles, the one number to scan first |
| `--text-secondary` | **Default body** — the workhorse, ~92% white in dark / slightly de-emphasized navy in light |
| `--text-muted` | **De-emphasis** — captions, metadata, helper copy, placeholders |
| `--text-dim` | Legacy alias — preserved for backward compatibility, prefer `--text-secondary` in new code |
| `--accent` | Brand accent — links, focus rings, primary CTA when no module accent |
| `--accent-hover` | Brand accent hover state — primary CTA hover, link hover |
| `--accent-glow` | Focus ring inner shadow color |
| `--shadow-card` | Default card shadow (none in dark, subtle in light) |
| `--shadow-elevated` | Modal/popover shadow |

### Text Color Hierarchy

The hierarchy ladder for text emphasis is **color → weight → size, in that order.** Reach for size last. At 14px body, going smaller hurts legibility long before it adds clarity — color and weight do the work instead.

- `--text` (full white in dark, full navy in light) is reserved for **emphasis**: KPI values you want the eye to land on first, page titles, the active row in a list, an inline emphasized phrase. Treating full white as the default body color makes everything feel emphasized, which means nothing reads as emphasized.
- `--text-secondary` is the **default body color** — used for the bulk of running text in cards, forms, descriptions, table cells. In dark mode `#E5E9EC` lands at ~92% white, comfortably above the WCAG 4.5:1 floor (it's still ~17:1 on `#061A2E`) but visibly de-stressed compared to pure white.
- `--text-muted` is **de-emphasis** — captions, metadata, timestamps, helper copy under form fields, placeholder text, secondary status indicators.

The pattern: by default reach for `--text-secondary` for body. Only step up to `--text` when you specifically want the eye to go there. Step down to `--text-muted` when the text is contextual rather than primary content.

### Pattern

```css
:root {
  /* dark mode default */
  --bg: #061A2E;
  /* ... */
}

[data-theme="light"] {
  --bg: #FFFFFF;
  /* ... */
}
```

**Always use tokens, never raw hex values, in component code.** This is what makes mode switching work.

### Theme switching

Theme is owned by `<ThemeProvider>` (`frontend/components/theme/ThemeProvider.tsx`), wrapped around the app shell in `app/layout.tsx`. An anti-FOUC inline script (`themeScript.ts`) sets `data-theme` on `<html>` before React hydrates, reading from localStorage with a `dark` fallback — so light-mode users don't see a dark-mode flash on every page load.

Most theme-aware UI should use **CSS only** — declare the relevant tokens in `:root` (dark) and override in `[data-theme="light"]`. Reach for the `useTheme()` hook only when JSX itself needs to vary per mode (e.g., showing a sun-vs-moon icon in a toggle button).

```tsx
import { useTheme } from '@/components/theme/ThemeProvider'

const { theme, setTheme, toggleTheme } = useTheme()
```

The `Wordmark` and `LogoMark` components are intentionally theme-agnostic — they render both the dark and light SVGs in parallel and let CSS pick which is visible via the `[data-theme]` selector and `data-brand-mode` data attributes. This keeps the wordmark correct on first paint without any JS swap.

Cross-tab sync is built in: toggling the theme in one tab updates `localStorage`, and other open tabs receive a `storage` event and update their state to match.

## Module Accent Palette

Each Platform OS module has an accent color used in module headers, primary CTAs, active nav states, and module-specific badges. Accents stay constant across light/dark mode.

The palette has two tiers:

- **Sub-brand-aligned modules** use brand blue, matching their sub-brand wordmark identity.
- **Application-only modules** use distinct cool-palette accents — cohesive with the brand, distinguishable from each other.

| Module | Code | Accent | Hex | Tier | Notes |
|---|---|---|---|---|---|
| Opportunity Engine | OE | Cyan | `#22D3EE` | Application | Reads as signal/discovery |
| Venture | VEN | Brand Blue | `#0387D1` | Sub-brand | 10XBeta Venture Studio |
| Fundraising | FUND | Indigo | `#6366F1` | Application | Cool, capital-leaning |
| Lab | LAB | Brand Blue | `#0387D1` | Sub-brand | 10XLAB |
| Manufacturing | MFG | Brand Blue | `#0387D1` | Sub-brand | 10XMFG |
| Finance | FIN | Teal | `#14B8A6` | Application | Cool, retains finance association |
| Legal | LEG | Slate | `#64748B` | Application | Sober, authoritative |
| PM Tool | PM | Violet | `#7C3AED` | Application | Distinct from brand blue |
| Non-Dilutive Capital | NDC | Forest | `#15803D` | Application | Federal money / non-dilutive funding green; institutional |
| Dashboard | DASH | Brand Blue | `#0387D1` | Shell | Platform shell, no own accent |

**Sub-brand modules (VEN, LAB, MFG, DASH) all share brand blue.** They are differentiated visually by their wordmarks, icons, and content scope — not by accent color. This intentionally reflects the brand hierarchy.

**NDC accent history (v3.10, 2026-05-06):** Originally Steel `#475569` ("institutional, federal-aligned"). Changed to Forest `#15803D` because the steel hex collided with `--status-archived` — every NDC workspace badge / tab underline visually pattern-matched to the archived state. Forest preserves the institutional intent (federal money is universally green-coded — US Treasury, grant portals, "non-dilutive funding" UI conventions) while removing the semantic collision and freeing `#475569` to belong exclusively to the archived status. Distinct from FIN's teal `#14B8A6` (cyan-green crossover) and from `--status-live` emerald `#10B981` (brighter, success-coded).

### Module Accent Usage Rules

Module accent **goes on**:
- Module header bar / breadcrumb
- Primary CTAs within the module
- Active Module Tab indicator (underline in module accent)
- Module-specific badges and chips
- Selected row highlights (subtle tint, not full fill)

Module accent **does NOT go on**:
- Body text
- Large background fills
- Borders (use neutral border tokens)
- Status badges (status uses its own palette)
- Any element shared across modules (e.g., the global topbar)

### Implementation

Each module exposes its accent via a single token, set on the module's root container:

```css
[data-module="oe"]    { --module-accent: #22D3EE; }
[data-module="ven"]   { --module-accent: #0387D1; }
[data-module="fund"]  { --module-accent: #6366F1; }
[data-module="lab"]   { --module-accent: #0387D1; }
[data-module="mfg"]   { --module-accent: #0387D1; }
[data-module="fin"]   { --module-accent: #14B8A6; }
[data-module="leg"]   { --module-accent: #64748B; }
[data-module="pm"]    { --module-accent: #7C3AED; }
[data-module="ndc"]   { --module-accent: #15803D; }
[data-module="dash"]  { --module-accent: #0387D1; }
```

Components reference `var(--module-accent)`, not the hex directly.

## Status Palette

Status colors carry semantic meaning that must override pure brand alignment. The palette is tonally shifted toward cool/deep variants for brand cohesion, with one warm exception.

| Status | Color | Hex | Token |
|---|---|---|---|
| LIVE | Emerald | `#10B981` | `--status-live` |
| IN DEV | Amber | `#F59E0B` | `--status-dev` |
| PLANNED | Slate-light | `#94A3B8` | `--status-planned` |
| BLOCKED | Crimson | `#DC2626` | `--status-blocked` |
| ARCHIVED | Steel | `#475569` | `--status-archived` |

**The IN DEV amber is the one warm exception** — kept warm because cool yellow doesn't read as caution. Documented as a system-semantic carve-out, not a brand drift.

**Steel `#475569` is now reserved for `--status-archived`.** It was previously also the NDC module accent until v3.10 (see NDC accent history above) — that collision is resolved.

Render status as **outlined badges**: 1px border in status color, transparent background, status color text. Never filled.

```css
.status-badge {
  border: 1px solid var(--status-color);
  color: var(--status-color);
  background: transparent;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: var(--text-label-size);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
```

### Legacy aliases

The following aliases are preserved in `globals.css` for backward compatibility. Existing code that references them continues to work; **new code should use the canonical `--status-*` tokens above**.

| Legacy alias | Canonical | Mapped value |
|---|---|---|
| `--status-success` | `--status-live` | `#10B981` |
| `--status-warning` | `--status-dev` | `#F59E0B` |
| `--status-danger` | `--status-blocked` | `#DC2626` |
| `--status-info` | `--accent` | `#0387D1` |
| `--status-neutral` | `--status-planned` | `#94A3B8` |

## Technical Surfaces

For surfaces showing technical content — diffs, logs, audit trails, agent reasoning blocks, system output — Platform OS uses a dedicated dark palette that stays constant across light and dark app modes. This matches the convention used by Notion, ChatGPT, and GitHub: code and diff blocks always render in a dark high-contrast surface regardless of the surrounding app theme, because that's where developers and operators expect technical content to live.

| Token | Value | Use |
|---|---|---|
| `--tech-bg` | `#0D1117` | Base surface for code blocks, diff viewers, log panels, agent reasoning blocks |
| `--tech-add-bg` | `rgba(52, 211, 153, 0.12)` | Added-line tint in diffs |
| `--tech-add-text` | `#BBF7D0` | Added-line text in diffs |
| `--tech-rm-bg` | `rgba(248, 113, 113, 0.12)` | Removed-line tint in diffs |
| `--tech-rm-text` | `#FECACA` | Removed-line text in diffs |

Use `font-family: ui-monospace, "JetBrains Mono", "Fira Code", monospace` for line-level technical content inside these surfaces. Line height stays at the body value (1.5) so multiple-line blocks remain comfortably scannable.

This palette is intentionally *not* mode-flipped. A diff block in light mode is still rendered on `--tech-bg` (`#0D1117`), with green/red tints. Surrounding app chrome (titlebar, panel borders, controls) follows the active theme; the technical content itself stays in its own world.

---

# Layer 3 — Component Primitives

The building blocks all modules compose with. Use these as the discrete, allowed steps — do not invent intermediate values.

## Spacing Scale

Tailwind-aligned. Every margin, padding, and gap in VS-OS uses one of these values.

| Token | Value | Common use |
|---|---|---|
| `--space-1` | 4px | Tight spacing inside chips, badges, icon-text gaps |
| `--space-2` | 8px | Form field internal padding, small gaps |
| `--space-3` | 12px | Form element gaps, button internal padding |
| `--space-4` | 16px | Card internal padding (compact), small section gaps |
| `--space-6` | 24px | Card internal padding (default), grid gap default |
| `--space-8` | 32px | Section internal spacing, modal padding |
| `--space-12` | 48px | Section spacing (compact), page top padding |
| `--space-16` | 64px | Section spacing (default) |

Avoid arbitrary values like 20px, 18px, 28px. If you need an intermediate, the design needs reconsidering, not the scale.

## Typographic Scale

Sizes in pixels. Line height as unitless multiplier. Letter-spacing in em.

The scale is **aligned with dense-SaaS peers** (Linear, GitHub, Vercel, Stripe — all 14px body): 14px default body, 12px hard floor for any readable text. Inter is engineered for this size range. The previous v3.6 spec used 16px body (content-web standard); v3.7 drops to 14px because that's where Inter's hinting and spacing are tuned, and because dense data tools at 16px feel oversized next to peer products.

| Token | Size | Line Height | Weight | Letter-spacing | Use |
|---|---|---|---|---|---|
| `--text-display` | 48px | 1.1 | 800 | -0.02em | Hero headlines, login splash |
| `--text-h1` | 32px | 1.2 | 700 | -0.01em | Page title |
| `--text-h2` | 24px | 1.3 | 700 | -0.01em | Section heading |
| `--text-h3` | 20px | 1.4 | 600 | 0 | Card heading, sub-section |
| `--text-h4` | 16px | 1.4 | 600 | 0.02em | Group label, form section heading |
| `--text-body` | 14px | 1.5 | 400 | 0 | Default body text |
| `--text-body-sm` | 14px | 1.5 | 400 | 0 | Legacy alias of body — kept for backward compat, no current density step |
| `--text-caption` | 13px | 1.4 | 400 | 0 | Metadata, timestamps |
| `--text-label` | 12px | 1.4 | 600 | 0.06em | Uppercase labels, badges |
| `--text-code` | 14px | 1.5 | 400 | 0 | Inline code, monospace data |

**Default body is 14px.** This matches Linear, GitHub Primer (app), Vercel Dashboard, Stripe Dashboard, Notion. Inter is specifically optimized for this size — 14–16px is its sweet spot. Body at 14px makes the app feel like a professional dense-data tool rather than a content website.

**`--text-body-sm` is currently a no-op alias of `--text-body`.** Both resolve to 14px. The token is kept for backward compatibility and as a hook for re-introducing a real density step (e.g., 13px in dense tables) if a future use case justifies it. Until then, treat them as equivalent — density should come from row heights and padding, not from another type-size step.

**12px is a hard floor.** No readable text smaller than this anywhere — including footnotes, legal copy, and uppercase labels. Required by WCAG 2.2 AA, Apple HIG, and Material guidelines, and necessary for retina legibility.

**Headings must scan as headings.** Every heading is at least one step larger than body, with weight as a secondary differentiator. At 14px body, even h4 (16px @ 600) still reads as a heading because of the size + weight combination.

**Hierarchy ladder: color → weight → size.** Before reaching for a smaller size to de-emphasize text, reach for `--text-secondary` or `--text-muted` (color), then for a lighter weight. Only drop size as the last step. See § Text Color Hierarchy in Layer 2 for the color-tier guidance.

## Layout Constants

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 6px | Badges, chips |
| `--radius-md` | 8px | Inputs, buttons |
| `--radius-lg` | 12px | Cards, modals |
| `--container-max` | 1600px | Page max-width |
| `--page-padding-desktop` | 40px | Desktop page padding |
| `--page-padding-tablet` | 24px | Tablet page padding |
| `--page-padding-mobile` | 16px | Mobile page padding |
| `--breakpoint-mobile` | 768px | Below this is mobile |
| `--breakpoint-tablet` | 1024px | Below this is tablet |
| `--breakpoint-desktop` | 1280px | Above this is desktop |

## Iconography

VS-OS uses **two icon systems** with strict role separation.

### UI icons — lucide-react

For all functional UI elements (buttons, nav items, table actions, form indicators).

- Library: `lucide-react`
- Stroke width: 1.5px (default)
- Sizes: 14px (inline with body text), 16px (default UI), 20px (nav items), 24px (large affordances)
- Color: inherits `currentColor`, or `var(--module-accent)` when on accent surface

```tsx
import { Search } from 'lucide-react';
<Search size={16} />
```

### Brand icons — custom SVG

For marketing surfaces, login splash, empty states, and module identity. Use the official brand icon style: outlined geometric shape with brand-blue fill accent. Never mix lucide and brand icons in the same surface.

The four official brand icons are: **Fund, Build, Manufacture, Co-Invest**. Stored in `frontend/public/brand/icons/`.

## The Big Six — Component Specs

### 1. Button

Four variants. All buttons share: `--text-body-sm`, `font-weight: 600`, `--radius-md` (8px).

| Variant | Background | Border | Text | Hover |
|---|---|---|---|---|
| Primary | `var(--module-accent)` or `var(--accent)` | none | white | `var(--accent-hover)` (or brightness 110% for module accents) |
| Secondary | transparent | 1px `var(--border-strong)` | `var(--text)` | bg `var(--bg-elevated)` |
| Ghost | transparent | none | `var(--text-muted)` | bg `var(--bg-elevated)`, text `var(--text)` |
| Destructive | `var(--status-blocked)` | none | white | brightness 110% |

Sizes — mapped to the touch-target tier system (see § Accessibility Floor → Touch & focus):
- Default: 44px height, padding `0 16px` (primary CTAs, page-level affordances — Tier 1)
- Compact: 32px height, padding `0 12px` (table action buttons, secondary affordances in dense rows — Tier 2)
- Dense: 28px height, padding `0 8px` (filter chip pills, inline pill controls, per-row dense triggers — Tier 3)
- Prominent: 48px height, padding `0 24px` (page-level hero CTAs)

States:
- **Hover** — brightness shift or bg fill (per variant)
- **Active** — brightness 95%
- **Focus-visible** — `box-shadow: 0 0 0 3px var(--accent-glow)`, no outline
- **Disabled** — opacity 0.5, cursor `not-allowed`

### 2. Input

Single style across text, email, number, search. Select and textarea inherit.

- Height: 40px (default), 32px (compact, table filters)
- Background: `var(--bg-elevated)`
- Border: 1px `var(--border)`
- Border radius: `--radius-md` (8px)
- Padding: `0 12px`
- Text: `--text-body`, `var(--text)`
- Placeholder: `var(--text-muted)`

States:
- **Hover** — border `var(--border-strong)`
- **Focus** — border `var(--accent)`, `box-shadow: 0 0 0 3px var(--accent-glow)`
- **Error** — border `var(--status-blocked)`, helper text `var(--status-blocked)`
- **Disabled** — bg `var(--bg)`, opacity 0.6, cursor `not-allowed`

### 3. Card

Default container for grouped content.

- Background: `var(--bg-card)`
- Border: 1px `var(--border)`
- Border radius: `--radius-lg` (12px)
- Padding: `--space-6` (24px) default, `--space-4` (16px) compact
- Shadow: `var(--shadow-card)` (none in dark, subtle in light)

For elevated cards (modals, popovers): bg `var(--bg-elevated)`, shadow `var(--shadow-elevated)`.

### 4. Badge

Outlined, never filled (matches status badge pattern). For module tags, opportunity stages, classifications.

- Border: 1px in tag color
- Background: transparent
- Text: tag color
- Padding: `4px 10px`
- Border radius: `--radius-sm` (6px)
- Typography: `--text-label`

### 5. Table Row

VS-OS lives in tables. Density matters disproportionately.

- Default row height: 44px (comfortable; OE list, dataroom, contacts)
- Compact row height: 36px (high-density; signal mining, audit logs)
- Detail row height: 56px (IC memo line items, opportunity detail panels)
- Cell padding: `0 16px` horizontal, vertical centered
- Cell text: `--text-body-sm`
- Header row: bg `var(--bg-elevated)`, text `--text-h4`, sticky on scroll
- Row border: 1px bottom `var(--border)`. **No zebra striping** — fights with status color and module accent.
- Hover: bg `var(--bg-elevated)`, cursor `pointer` if row is clickable
- Selected: 2px left border `var(--module-accent)`, bg `var(--bg-elevated)`

Sort indicators: lucide chevron, 14px, `var(--text-muted)` inactive, `var(--accent)` active.

### 6. Modal

For confirmations, focused tasks, multi-step flows.

- Backdrop: `rgba(6, 26, 46, 0.6)` with `backdrop-filter: blur(8px)`
- Container: `var(--bg-elevated)`, `--radius-lg`
- Max-width: 560px (default), 720px (forms), 1040px (data review)
- Padding: `--space-8` (32px)
- Header: `--text-h2`, bottom margin `--space-6`
- Footer: right-aligned button group, top margin `--space-8`, top border 1px `var(--border)`, top padding `--space-6`
- Close affordance: lucide `X` 20px, top-right, `var(--text-muted)`, hover `var(--text)`

## Data Density

Density defaults assume data-rich contexts. Pick by surface intent.

| Surface type | Row height | Cell padding | Use |
|---|---|---|---|
| Signal/event tables | 36px | `0 12px` | OE signal mining, audit logs, scanner output |
| List views | 44px | `0 16px` | OE opportunity list, dataroom, contacts, investors |
| Detail tables | 56px | `0 20px` | IC memo, opportunity detail panels, financial line items |

Grid layouts:
- 2-column: 24px gap
- 3-column: 20px gap (closest to scale; carved-out exception)
- 4-column or more: 16px gap

## Empty / Loading / Error States

Every list surface needs all three.

- **Empty** — brand icon (one of the four official Fund/Build/Manufacture/Co-Invest) at 48px, body copy `--text-body`, optional CTA. Centered, padding `--space-16`.
- **Loading** — skeleton rows (bg `var(--bg-elevated)`, animated pulse 1.4s ease-in-out infinite). Don't use spinners except for sub-1-second waits.
- **Error** — `lucide AlertTriangle` 24px in `var(--status-blocked)`, body copy, retry CTA. Centered.

Empty-state copy follows brand voice — bold, human, forward-looking. Examples:

- ✅ "No opportunities yet. Drop a company URL above to start scanning."
- ❌ "There are no items to display."

## Motion

Conservative. Motion serves clarity, not flourish.

- Default transition: `150ms cubic-bezier(0.4, 0, 0.2, 1)` (ease-out)
- Modal/drawer enter: `250ms cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-cubic)
- Theme switching: 200ms color/background-color transition on `<body>` — subtle but noticeable, marks the change as intentional
- No motion longer than 400ms anywhere
- Always respect `prefers-reduced-motion: reduce` — drop all transitions to `0ms`

## Accessibility Floor

Platform OS commits to **WCAG 2.2 Level AA** as a baseline. The following rules are non-negotiable; any new component or screen that breaks them is a defect.

### Type rules

- **12px hard floor.** No readable text smaller than 12px anywhere — including uppercase labels, footnotes, legal copy, table cell metadata.
- **14px default body** (`--text-body`). Used everywhere readable text appears in flow — forms, modals, dashboards, table cells, explanatory copy. Inter at 14px is engineered for this exact use case (Linear / GitHub / Vercel / Stripe peer level).
- **Headings must scan.** A heading must be visually distinguishable from body via size, weight, or both — never just letter-spacing or color.
- **No placeholder-as-label.** All form fields have a visible persistent label.
- **Hierarchy via color first.** Reach for `--text-secondary` / `--text-muted` for de-emphasis before reaching for a smaller size. Below 14px is the 13px caption (`--text-caption`) and the 12px label (`--text-label`) — no in-between sizes.

### Contrast

- Body text: minimum **4.5:1** against its background (WCAG 2.2 AA).
- Large text (18px+ or 14px bold+): minimum **3:1**.
- UI components and graphical objects (borders, icons, focus rings): minimum **3:1**.
- Test in both light and dark mode before shipping.

### Touch & focus

Platform OS uses a **three-tier touch target system** plus a documented editor-toolbar carve-out. Every tier requires a visible `:focus-visible` state (default: `box-shadow: 0 0 0 3px var(--accent-glow)`); focus state is never removed (`outline: none` without a replacement is a defect); keyboard navigation works for every interactive element with tab order matching visual order.

| Tier | Minimum size | Use | WCAG anchor |
|---|---|---|---|
| **Tier 1 — default** | **44 × 44px** | Primary CTAs, page-level decisions, sign-in, Save, Ship, IC Approve / Reject, Submit form, Promote to Workspace, hero CTAs | **WCAG 2.5.5 AAA (44×44)** — the unambiguous floor |
| **Tier 2 — compact** | **32 × 32px** | Table action buttons, repeated per-row affordances, secondary buttons in dense lists, scanner triggers, Run All buttons, Refresh | WCAG 2.5.8 AA (24×24) with comfortable margin |
| **Tier 3 — dense** | **28 × 28px** | Filter chip pills, inline pill controls, sort indicators, card expand toggles, per-area Force/Fire buttons, per-cell dense action triggers | WCAG 2.5.8 AA (24×24) |
| **Editor toolbar** | **28 × 28px** | Inline formatting toolbars inside text editors (Volumes prose, future cost workbook editor, future agent-driven content surfaces) | WCAG 2.5.8 AA — same posture as Tier 3 |

**Tier 1 is the default.** Reach for Tier 2 only when the affordance is repeated densely (one-per-row, one-per-cell) or sits inside an already-dense table where a 44px button would visibly fight the row rhythm. Reach for Tier 3 only when the affordance is genuinely a filter chip, inline pill control, or per-cell dense trigger.

**Compensating affordances required for Tier 2, Tier 3, and the editor-toolbar carve-out:** a clear hover state (a `var(--bg-elevated)` fill or equivalent), an icon size of at least 14px relative to the button so the click target reads as intentional, and a ≥2px gap between adjacent buttons so adjacent hit areas don't blur into one ambiguous strip.

**Why three tiers, not one:** A blanket 44×44 floor on every interactive element would visibly degrade the dense-data feel that Platform OS intentionally targets (Linear / GitHub Primer / Stripe Dashboard density). The three-tier system aligns the AAA target with the moments where it matters most (primary decisions) while explicitly documenting the AA carve-out at lower tiers. Same documentation pattern as the IN DEV amber semantic carve-out and the Tech Surface palette: known, considered, and visible to anyone reading the guidelines — not a silent violation.

### Color & meaning

- Color is **never the only signal**. Pair status colors with icons, text, or shape. A red row alone is not enough; a red row with a status icon and "Rejected" label is.
- Test that the UI is readable with color desaturated (deuteranopia/protanopia simulation in DevTools).

### Motion

- Always honor `prefers-reduced-motion: reduce` — drop all non-essential transitions to `0ms`.
- No motion longer than 400ms.
- No flashing/strobing content (WCAG 2.3.1).

---

# Module Shell

Every Platform OS module is composed from three platform-provided shell elements plus the module's own tab pages. The shell guarantees visual coherence across modules; the tab pages stay free to be designed for what the content needs.

## Anatomy

```
┌──────────────────────────────────────────────────────────────┐
│ Global TopBar                                                  │
│ [10XBETA]  Platform OS / NDC          [🔔]  [☼]  [avatar]      │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│ Module Header                                                  │
│ [icon] Non-Dilutive Capital · tagline       [Run scan] [+ Add] │
│                                                                │
├──────────────────────────────────────────────────────────────┤
│ Module Tab Strip                                               │
│ Overview · Discovery · Pipeline · Workspaces · Awards · ...    │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│ Tab page (custom per module + tab)                             │
│                                                                │
└──────────────────────────────────────────────────────────────┘
```

Three platform-provided components — `<TopBar>`, `<ModuleHeader>`, `<ModuleTabs>` — render identically across every module. Modules configure them via the `MODULES` registry (`frontend/components/dash/modules.tsx`) and the active route; modules never re-implement them.

## Three nav surfaces, one job each

The platform has exactly three navigation surfaces. Each owns one job; none of them duplicates another.

| Surface | Job | Example |
|---|---|---|
| Breadcrumb (in TopBar) | Which module am I in? | `Platform OS / NDC` |
| Module Tab Strip | Which view inside the module? | `Pipeline · Awards · Partners` |
| Inline controls (in tab page) | Which slice of this view? | KPI filters, search, dropdowns |

Tabs change views. Inline controls change selection within a view. The two never duplicate each other. A module that has both a tab strip and a redundant filter row inside is a sign the module structure needs simplifying, not a sign the platform needs more nav surfaces.

## Global TopBar

Identical across all modules. Contains, left to right:

- **Wordmark** (`<Wordmark height={28} />`) — links to `/` (the dashboard landing). Always available as the home affordance.
- **Breadcrumb** — `Platform OS / {Module Name}`, where the module name is rendered with a small dot + label tinted via `var(--module-accent)`. Each segment is a link; the wordmark and the "Platform OS" segment both navigate home.
- **Notifications** (right cluster) — bell icon with optional unread count badge.
- **Theme toggle** — sun/moon icon, swaps `data-theme` on `<html>` via `<ThemeProvider>`.
- **Avatar / user menu** — initials or photo, dropdown with name + email + sign out.

**No global search.** Search lives inline within the tab that owns it, scoped to that tab's data. This avoids cross-module search routing complexity and keeps each module's search affordance contextual to what it actually searches.

## Module Header

Compact identity row sitting between TopBar and Module Tab Strip. Reuses the **module icon and accent from the dashboard launch cards** (registered in `MODULES`), so the visual identity carries continuously from the launch surface into the module.

Anatomy:

- **Icon tile** — 44×44px, `--radius-md`, accent-tinted background (`color-mix` 15%) and border (`color-mix` 25%). Same component used on dashboard cards.
- **Title** — `--text-h2`, module name from `MODULES` registry.
- **Tagline** — `--text-body-sm` in `--text-muted`, optional, truncates with ellipsis on narrow viewports.
- **Actions** — right-aligned button group. Primary action uses `var(--module-accent)` as background; secondary actions use the secondary button variant.

Total height: ~64px. Single row. No uppercase "MODULE · NAME" prefix, no separate hero block — the module name and accent are sufficient identity once you arrive.

## Module Tab Strip

Sits below the Module Header.

- **Style** — text-only, no boxed or bordered tabs.
- **Inactive tab** — label in `--text-muted`, hover transitions to `--text`.
- **Active tab** — label in `--text`, with a 2px underline in `var(--module-accent)`.
- **Optional count badge** — small pill next to the label, `--text-caption` in `--text-muted` when inactive, `var(--module-accent)` when active. Only show counts that are useful for scanning (Pipeline `27`, Awards `3`); skip counts that don't help (Overview, Knowledge base).

**The active-tab underline color is the active module's accent — not a fixed brand color.** OE's tab is cyan (`#22D3EE`), NDC's is forest (`#15803D`), FUND's is indigo (`#6366F1`), FIN's is teal (`#14B8A6`), and so on. The pattern (`var(--module-accent)`) is canonical; the resolved color depends on the module the tab strip lives in. This is what carries module identity continuously from the dashboard launch card → ModuleHeader icon tile → active tab underline → module-specific badges.

Tabs map 1:1 to URL paths under the module: `/{module}` for the default Overview, `/{module}/{tab}` for others. The active tab is resolved from `usePathname()`.

The strip does not wrap or scroll. If a module has more than ~8 tabs, the module structure should be reconsidered, not the strip's overflow behavior.

## Tab pages — custom by design

Below the shell, every tab page is hand-designed for its content. The platform does not provide a tab-page template.

- Tab pages live at `app/(dashboard)/{module}/{tab}/page.tsx`.
- They compose from the building blocks in Layer 3 (Card, Badge, Table Row, etc.) plus the shared building-block components (`<KPICard>`, `<SummaryCard>`, charts).
- They choose their own internal layout for what the content needs.

This is intentional. OE's Pipeline (dense full-bleed table), FIN's Runway view (charts and entity P&L), and LAB's DHF (project timelines and milestone cards) all live under the same shell with entirely different page shapes. A one-size template would fight the content; the shared shell + tokenized building blocks deliver coherence without uniformity.

## Overview tab — strong recommendation

By convention, every module's root path (`/{module}`) is its **Overview tab** — the landing surface when a user enters the module from the dashboard.

Recommended composition (not enforced):

- Headline KPIs at the top — counts or values answering "what's the state of this module right now?"
- Summary cards, charts, feeds, or timelines for the module's most important sub-areas
- Specific layout is module-designed for the module's data shape

Examples of how Overview tabs differ in practice:

- **NDC Overview** — KPI counts (pipeline / awards / registrations) + today's digest feed + side panel of registrations
- **FIN Overview** — KPIs (runway / cash / burn) + revenue line chart + entity P&L summary cards
- **OE Overview** — KPIs (pipeline / avg score / IC queue) + scoring distribution chart + recent evaluations feed
- **LAB Overview** — DHF status grid + active project cards + regulatory milestone timeline

Same primitives, composed for the module. The unifying force is the design tokens and shared components — not a shared layout.

## Module accent in the shell

The shell is JSX-agnostic about the active module. Module identity is communicated to the shell via `data-module="{code}"` set on the module's layout root container. This exposes `var(--module-accent)` to the entire subtree (see Layer 2 → Module Accent Palette → Implementation).

The shell components automatically pick up the accent via CSS:

- Module Header icon tile background tint and primary action button
- Active Module Tab underline and active count badge
- Breadcrumb module-name dot in TopBar (when on a module route)

Modules do not pass an accent prop. They set the data attribute and the cascade does the work.

## Auth Contract

Auth integration is part of the platform shell, not a per-module concern. Every Platform OS deployment — and every external 10XBeta app sharing this design system — implements the same two-URL contract so sign-in and sign-out behavior stay consistent across surfaces.

| Contract token | Use |
|---|---|
| `auth.signInUrl` | Canonical sign-in entry URL. The TopBar's signed-out state and any redirect-to-login flow points here. |
| `auth.signOutRedirectUrl` | Canonical post-sign-out destination. The UserMenu's sign-out action returns the user here. |

Platform OS uses **Supabase Auth** as its auth provider (Google SSO + email/password). Frederick's login is `krugerfz@gmail.com`; other users are added via the Supabase dashboard. The canonical avatar component in the TopBar's right cluster is the in-house `<UserMenu />` (`frontend/components/dash/UserMenu.tsx`), which renders the user's avatar with a dropdown for profile, theme, and sign-out. Sign-out calls `supabase.auth.signOut()` then routes the browser to `auth.signOutRedirectUrl`.

The login surface (`frontend/app/login/page.tsx`) is the canonical reference implementation: brand-pattern hero with `<Wordmark variant="alt-blue-white" />` + `--text-display` mission headline, a centered card carrying both the Google OAuth path (`supabase.auth.signInWithOAuth`) and the email/password path (`supabase.auth.signInWithPassword`). New auth surfaces (forgot-password, account verification, etc.) follow the same chrome.

Clerk was evaluated and explicitly rejected as the auth provider for Platform OS — do not reintroduce `<UserButton />`, Clerk middleware patterns, or Clerk SDK imports into Platform OS code or docs. References to Clerk in older docs are stale and being corrected as touched.

Behavior rules (apply regardless of provider, for any external 10XBeta app adopting this design system):

- The auth control is the last item in the TopBar's right cluster — never moved to the left, never split into a second row.
- Signed-out state shows a `Sign in` link styled identically to other TopBar controls, pointing to `auth.signInUrl`.
- Signed-in state shows the avatar/user menu component as the last navbar item with the same vertical alignment as adjacent TopBar controls.
- Sign-out always redirects to `auth.signOutRedirectUrl` — never to a hardcoded path or a browser back action.
- For external apps that adopt this design system but use a different auth provider, the user menu must include at minimum a profile/account entry and a sign-out action, and the login surface must use `<Wordmark />` (never a recreated typed-text version).

Platform OS auth-related backend rules (FastAPI middleware) are documented in `CLAUDE.md` — `PUBLIC_PATHS` must include any new public endpoints before the `AuthMiddleware` class definition, and the middleware verifies Supabase JWTs. This is build-level infrastructure, not visual design.

## Rules

What every module **must** do:

1. Live under `app/(dashboard)/{module}/`.
2. Set `data-module="{code}"` on the module's layout root container.
3. Use design tokens (`var(--bg)`, `var(--module-accent)`, etc.) — never raw hex values.
4. Use the platform shell components — never render a custom TopBar, Module Header, or Module Tab Strip.

What every module **must not** do:

1. Render a left sidebar — sub-navigation lives in the Module Tab Strip.
2. Add tabs or controls to the global TopBar — module navigation goes in the Module Tab Strip.
3. Add a global search affordance — search lives inline in the tab that owns it.
4. Re-implement chrome the shell already provides.

---

# Standards & References

This document is anchored in industry standards rather than invented from scratch. When adding new components or making decisions not covered here, defer to these references in this priority order:

| Standard | What it covers | Why it matters |
|---|---|---|
| **WCAG 2.2 Level AA** ([w3.org/TR/WCAG22](https://www.w3.org/TR/WCAG22/)) | Contrast, focus, touch targets, text resize, keyboard nav, motion | Legal/professional baseline. Codified above in Accessibility Floor. |
| **Design Tokens Community Group (DTCG)** ([tr.designtokens.org](https://tr.designtokens.org/format/)) | W3C-track standard format for design tokens | If we ever export tokens to Figma or other tooling, we won't have to retrofit naming conventions. Our `--space-*`, `--text-*`, `--status-*` naming is DTCG-compatible. |
| **Tailwind type/spacing scale** | `text-sm` (14px) body convention for app UIs, 4px-multiple spacing, modular type ramp | Our scales align with Tailwind's `text-sm` app-UI default and 4px spacing grid so utility classes and tokens stay coherent. |
| **Apple Human Interface Guidelines** | Touch targets, type floors, motion, accessibility | Reference for mobile-facing surfaces (LP portal, mobile topbar). |

**Reference design systems** for patterns and decisions not covered above:

| System | Strength | When to consult |
|---|---|---|
| **Linear** ([linear.app](https://linear.app)) | Best public example of dense, professional SaaS at proper a11y sizes | Reference aesthetic — what we're building toward. Tables, command palettes, keyboard shortcuts. |
| **GitHub Primer** ([primer.style](https://primer.style)) | Mature, open-source enterprise design system | Form patterns, table patterns, status badges, empty states. |
| **IBM Carbon** ([carbondesignsystem.com](https://carbondesignsystem.com)) | Battle-tested for data-dense enterprise tools | Data viz patterns, complex form patterns, accessibility documentation. |
| **Vercel Geist** ([vercel.com/geist](https://vercel.com/geist)) | Dark-first developer-tool aesthetic | Reference for dark mode polish, monospace use, token naming. |
| **Stripe Dashboard** | Financial / regulated UX in a dense data context | Reference for financial tables, audit trails, transaction views (relevant to FIN, NDC, FUND modules). |

These are references, not authorities. The brand always wins. When a reference conflicts with brand or our explicit rules above, defer to brand.

---

# Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| Use CSS variable tokens | Use raw hex values in components |
| Use `var(--module-accent)` for module styling | Hardcode module accents per component |
| Use Inter for body / UI / labels / buttons | Use Barlow for body text — it's display-only |
| Use Barlow for headings (h1–h6) and display | Use GT Walsheim outside logos |
| Render the full mark via `<Wordmark />`, abbreviated via `<LogoMark />` | Recreate either mark in CSS or with a typed X |
| Reserve sub-brand wordmarks for external surfaces | Use 10XLAB / 10XMFG wordmarks to differentiate modules |
| Use lucide for UI icons | Mix lucide and brand icons in the same surface |
| Use the platform shell components for module chrome | Render a custom TopBar, sidebar, or tab strip inside a module |
| Use spacing scale values | Invent intermediate spacing |
| Use `--text-body` (14px) for default body text | Use 16px body anywhere — that's last-version's default |
| Use `--text-secondary` for default body text color | Use full white (`--text`) for default body — reserve it for emphasis |
| Reach for color (then weight) before size for hierarchy | Drop body below 14px to de-emphasize text |
| Keep all readable text ≥ 12px | Use 11px or smaller anywhere |
| Differentiate headings from body via size + weight | Set headings at body size and rely on weight alone |
| Match the touch-target tier (44 default / 32 compact / 28 dense) for the affordance type | Drop below a tier floor or invent intermediate sizes |
| Test every component in both modes | Ship without checking light mode |
| Use outlined status badges | Fill status badges |
| Use canonical `--status-live/dev/blocked/etc.` tokens in new code | Use legacy `--status-success/warning/danger` aliases in new code |
| Use canonical `--text-secondary` in new code | Use legacy `--text-dim` alias in new code |
| Use `--tech-bg` and the `--tech-add/rm-*` tokens for diff/log/audit surfaces | Render diffs on app-mode surfaces — technical surfaces stay dark across modes |
| Use Supabase Auth for new auth surfaces (`supabase.auth.signInWithOAuth`, `supabase.auth.signInWithPassword`, `supabase.auth.signOut`) | Reintroduce Clerk patterns (`<UserButton />`, Clerk middleware, Clerk SDK imports) — explicitly rejected provider |
| Use semantic status colors (red/green/amber) | Apply module accent to status |
| Render dense tables comfortably | Cram rows below 36px |
| Use motion under 400ms | Animate longer than 400ms |
| Use `proxy.ts` (Next.js convention) | Rename to `middleware.ts` |
| Use full color tokens (e.g., `bg-cyan-500`) | Use Tailwind opacity classes (`bg-cyan-500/15`) — purged in production |

---

# How to Apply

1. Reference layer 1 (brand) for any decision involving brand identity, voice, or primary palette.
2. Reference layer 2 (application) for module styling, mode handling, and status communication.
3. Reference layer 3 (component) for every concrete pixel value, type size, and component variant.
4. When uncertain, prefer the higher layer. Brand always wins.
5. Test every component in both modes before shipping.
6. Document deviations in the module's prefixed knowledge file (e.g., `OE_design_overrides.md`) so they don't bleed into other modules.

---

# Built to Evolve

This document, like the parent brand guide, is a living artifact.

The official brand owner is **Charlene Walton**, Brand & Visual Designer (`charlene.walton@10xbeta.com`). Changes that affect the brand layer (Layer 1) should be reviewed with her.

Application and component layers (Layers 2 and 3) can be updated by Platform OS leadership without brand sign-off, provided they remain consistent with brand foundation.

For Platform OS implementation questions: **Frederick Kruger**, COO (`frederick.kruger@10xbeta.com`).
