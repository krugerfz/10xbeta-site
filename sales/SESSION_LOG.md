# 10XBeta SALES — Session Log

> **READ FIRST IF YOU ARE A NEW CLAUDE SESSION**
>
> - This is the **sales / business development** workstream for 10XBeta. Spans both **capital strategy** (raising for portcos) and **lab revenue** (paying external clients for lab services).
> - **Separate workstream** from the marketing site work (root-level `SESSION_LOG.md` covers that).
> - **No database. No Supabase. No backend.** This markdown file IS the durable session record.
> - **Do NOT query the vs-os Supabase project.** This is not Platform OS work.
> - Default opener from Frederick: `"sales session"` or similar. Treat as cue to read this file top-to-bottom, with extra attention to the most recent session's "Open items" list.
> - **Tools needed:** GitHub MCP for repo edits. Web search is highly valuable for this workstream — open the session in a Claude.ai surface with web search enabled when possible.
> - **Operational independence:** Frederick handles all internal communication on his own schedule. Do not insert "consult with [colleague]" or "discuss with [colleague]" as a recommended next step in any session output. Surface frameworks and decisions; Frederick owns who he talks to and when.
> - **Operational focus (Session 008):** short-term capital execution is seed close for active portcos. Strategic CVCs at seed. Grants for incubation, not market-race portcos.
> - **Lab revenue workstream (Sessions 009-011):** parallel to capital. Studio needs $500K/month break-even, currently zero. SA + Poland engineering teams provide cost advantage. Frederick personally runs sales. **Session 011: 3-week sprint mode active to close first paying engagement ASAP. Capital strategy in maintenance during sprint.**
> - **Companion artifacts:**
>   - `sales/capital-strategy.html` — 17-slide brand-aligned capital strategy presentation (Tracks 1-3, long-term)
>   - `sales/portco-capital-playbook.md` — stage-by-stage operational capital playbook
>   - `sales/short-term-capital-focus.html` — internal 6-slide deck (RedZone + Validose seed close)
>   - `sales/network-buildout.md` — who can help build the named investor and buyer network
>   - `sales/portco-plans/` — per-portco capital plans (one file per portco)
>   - `sales/lab-revenue-strategy.md` — lab revenue strategy across four channels
>   - `sales/lab-revenue-3-week-sprint.md` — emergency 3-week sprint playbook to first close
>   - `sales/lab-revenue-pipeline.md` — live pipeline tracker

This file lives in the marketing-site repo (`krugerfz/10xbeta-site/sales/`) for convenience since no dedicated business-ops repo exists yet. If sales work scales, consider spinning out to its own repo.

---

## Session 001 — 2026-05-29 — Placement agent outreach kickoff

Initiated outbound to boutique investment banks and placement agents. **Session 005 correction:** placement agents only at Series A+.

---

## Session 002 — 2026-06-02 — Edgemont call feedback + secondaries pivot

Edgemont reclassified to M&A advisor. Revelation Partners recommended for secondaries.

---

## Session 003 — 2026-06-06 — Equity-concentration insight + strategics engagement

Two-lane secondaries model resolved. Big-eight medtech strategics mapped.

---

## Session 004 — 2026-06-06 — Platform OS workflow enables strategics pitch

Productized studio capability (OE → Lab → IP) is the pitch.

---

## Session 005 — 2026-06-07 — Stage-by-stage capital strategy correction

Six-stage capital strategy. `portco-capital-playbook.md` produced.

---

## Session 006 — 2026-06-07 — Network buildout

Five leverage sources. `network-buildout.md` produced.

---

## Session 007 — 2026-06-07 — RedZone & Validose seed capital plans

No placement agents at seed. Per-portco plans in `sales/portco-plans/`.

---

## Session 008 — 2026-06-07 — Strategic refocus: seed close as short-term priority

Three corrections: short-term = seed close; strategics at seed (not just later); grants for incubation, not market-race. Short-term capital deck produced and iterated to 6-slide form with deep investor profiles.

---

## Session 009 — 2026-06-08 — Lab revenue workstream initiated

Four channels identified. `sales/lab-revenue-strategy.md` produced.

---

## Session 010 — 2026-06-08 — Lab revenue operational realities surfaced

$500K/month break-even, zero current clients, SA + Poland cost advantage, Frederick personally runs sales. Strategy doc substantially updated with break-even math, build curve, competitive position with offshore advantage, competitor rate intel, ITAR constraint, sales lead implications.

---

## Session 011 — 2026-06-08 — 3-week emergency sprint to first close

**Status:** operational sprint mode activated; playbook and pipeline tracker shipped
**Owner:** Frederick Kruger (COO)

### What happened

Frederick called it: lab revenue needs first close in 3 weeks to keep lights on. The 12-15 month build curve from Session 010 is correct as steady-state strategy but doesn't help against immediate cash burn. Emergency operational mode activated.

### Artifacts shipped

**`sales/lab-revenue-3-week-sprint.md`** - operational playbook including:

- **Operating mode shift:** capital strategy drops to maintenance (Monday review + scheduled investor calls only). New investor outreach paused. RedZone + Validose seed timelines extend ~3 weeks. Real tradeoff explicitly acknowledged.
- **Daily activity targets** per week (5-10 contacts/day Week 1, follow-ups + proposals Week 2, close mode Week 3)
- **Conversion expectations:** 30-50 warm conversations → realistic 1-3 closes
- **Five productized sprint offerings** designed for single-signoff authority:
  - S1: Feasibility Assessment ($25K / 2wk)
  - S2: Regulatory Pathway Analysis ($30-40K / 2-3wk)
  - S3: IP Landscape + Provisional ($25-35K / 2-3wk)
  - S4: 4-Week POC Sprint ($50-100K)
  - S5: Hardware Design Sprint ($75-150K)
  - Anchor with S1-S3 ($25-40K range) since these fit single-signoff fastest
- **Warm contact pool prioritization:** past lab visitors first, then VCs in active capital conversations, strategic CVCs, studio collective network, defense contacts from RedZone, prior university relationships, past candidates/interviewees, inbound to contact@, LinkedIn 1st-degree by title
- **Outreach template** ready to send (under 100 words, 4 sprint bullets, ask is 30-min call)
- **What to skip:** long decks, lab tours unless $50K+, MSA negotiation, multi-stakeholder approval processes, custom pricing per conversation
- **Decision gates** end-of-week for Weeks 1, 2, 3 with pivot triggers

**`sales/lab-revenue-pipeline.md`** - live tracker:

- One row per opportunity
- Fields: ID, contact, firm, channel, stage, sprint offering, value, next action, last touch, notes
- Stage definitions: Cold / Responded / Qualified / Scoping / Proposal / Close / Won / Lost
- Channel codes: U (university), V (medtech VC), M (medtech corp), D-NI / D-I (defense non-ITAR / ITAR), N (network), I (inbound)
- Daily update protocol during sprint
- 10-minute end-of-day review

### Key strategic implications locked this session

- **Capital strategy explicitly drops to maintenance** for 3 weeks. RedZone and Validose seed close timelines extend accordingly. Frederick is single-threaded on lab revenue.
- **Warm-first, cold-second.** Cold outreach won't move fast enough for 3-week close. Mine existing relationships hard.
- **Single-signoff scope is the gating constraint.** Anything requiring committee approval is too slow for 3 weeks. Sprint offerings designed around this.
- **Anchor sprint = $25K-$40K range (S1-S3).** Lower the activation energy. S4-S5 are upsells, not entry products.
- **Outreach template is &lt;100 words.** Long messages don't get read. The ask is for 30-min call, nothing else.
- **MSA deferred.** Use simple 2-page SOW for sprint engagements. MSA happens only on ongoing relationships post-first-close.
- **Pivot triggers built into decision gates.** If pipeline is &lt;5 at end of Week 1, broaden outreach. If no proposals out at end of Week 2, adjust scope or pricing. If nothing signed at end of Week 3, drop to $10-15K rapid-assessment offerings for Week 4.

### Open items going forward (next 72 hours)

1. **Today/Tomorrow:** assemble warm contact list from the 9 categories in the sprint playbook. Target 30-50 names.
2. **Within 48 hours:** outreach template adapted and first wave sent (start with highest-warmth contacts).
3. **Within 72 hours:** simple SOW template ready (2 pages, scope + price + timeline + payment terms).
4. **Within first week:** case study one-pagers ready (Spiro Wave, RedZone, one drug-delivery example) for sending after scoping call.
5. **Within first week:** pipeline tracker has 25-50 rows.
6. **Verify with team:** lab capacity confirmed for the sprint offerings (engineer-months available now for an immediate Sprint 1-3 engagement, including offshore team availability).

### Open items deferred until after first close

- Pricing tier formal lock (use sprint published prices for now)
- Lab capacity quantification (Q3+)
- Case study packages (one-pagers only for now)
- Lab tour deck (only when first $50K+ conversation needs it)
- MSA template legal-ready
- Build curve targets per main strategy doc
- BD hire trigger reassessment

### Frederick's preferences re-confirmed this session

- Operational pivots happen fast when reality demands. "3 weeks" was the new constraint; everything reorganizes around it within one conversation.
- Capital strategy maintenance for 3 weeks is a real tradeoff he's making explicitly. Worth being explicit in artifacts so the priority is unambiguous.
- Productized offerings (sprints) reduce cognitive overhead on both sides. Catalog beats bespoke for fast-close.
- Single-threaded operator mode is the default until scale justifies hires. Tools (playbook, tracker, templates) replace people.
