# 10XBeta SALES — Session Log

> **READ FIRST IF YOU ARE A NEW CLAUDE SESSION**
>
> - This is the **sales / business development outreach** workstream for 10XBeta.
> - Tracks outreach to placement agents, boutique investment banks, and healthcare/medtech transaction advisors who will help portfolio companies with capital raises, strategic partnerships, and eventual M&A or licensing exits.
> - **Separate workstream** from the marketing site work (root-level `SESSION_LOG.md` covers that).
> - **No database. No Supabase. No backend.** This markdown file IS the durable session record.
> - **Do NOT query the vs-os Supabase project.** This is not Platform OS work.
> - Default opener from Frederick: `"sales session"` or similar. Treat as cue to read this file top-to-bottom, with extra attention to the most recent session's "Open items" list.
> - **Tools needed:** GitHub MCP for repo edits. Web search is highly valuable for this workstream (firm verification, deal tracking, named-contact research) — open the session in a Claude.ai surface with web search enabled when possible.

This file lives in the marketing-site repo (`krugerfz/10xbeta-site/sales/`) for convenience since no dedicated business-ops repo exists yet. If sales work scales, consider spinning out to its own repo.

---

## Session 001 — 2026-05-29 — Placement agent outreach kickoff

**Status:** in progress (research phase, no outreach sent yet)
**Owner:** Frederick Kruger (COO)

### Context

Frederick is initiating outbound to boutique investment banks, placement agents, and healthcare/medtech transaction advisors. The goal is to establish relationships with firms that will work with 10XBeta portfolio companies as they progress through capital raises, strategic partnerships, and eventual exits. 10XBeta launches multiple portfolio companies each year, so the play is to build relationships **now** with firms expected to be active partners over the next 2 to 5 years, before any specific transaction is live.

### Original target list (provided by Frederick)

1. **Locust Walk** (locustwalk.com) — life sciences transactions, biotech/pharma heavy
2. **Ceros Capital Markets** (ceroscapitalmarkets.com) — boutique broker-dealer, healthcare focused
3. **BBL Sciences** (bblsa.com) — boutique life sciences advisory
4. **Outcome Capital** (outcomecapital.com) — life sciences/medtech advisor, explicit device coverage
5. **Castle Placement** (castleplacement.com) — generalist placement agent
6. **NewHarbor Venture Partners** (newharborvp.com) — venture-focused advisory

### Expansion list produced (~20 additional firms)

**Healthcare and medtech transaction boutiques (closest match to original list):**
- TripleTree (tripletree.com)
- Provident Healthcare Partners (providenthp.com)
- Bourne Partners (bournepartners.com)
- Edgemont Capital Partners (edgemont.com)
- Cassel Salpeter & Co (cassel-salpeter.com)
- Coker Capital Advisors (cokercapital.com)
- HT Capital Advisors (htcapital.com)
- TM Capital (tmcapital.com)
- Cain Brothers (cainbrothers.com, now part of KeyBanc Capital Markets)
- Solomon Partners (solomonpartners.com)

**Boutique placement agents (private capital):**
- Eaton Partners (eaton-partners.com, part of Stifel)
- Park Hill Group (parkhillgroup.com, Blackstone-affiliated)
- Asante Capital Group (asantecapital.com)
- Atlantic-Pacific Capital (apcap.com)
- Capstone Partners (capstonepartners.com)

**Venture-aligned strategic advisors:**
- Health Advances (healthadvances.com)
- DeciBio Consulting (decibio.com)
- Back Bay Life Science Advisors (bblsciences.com) — **note: possibly same firm as BBL Sciences on original list, verify**

**Optional upmarket tier (larger but strong healthcare specialists):**
- Leerink Partners (leerink.com)
- LifeSci Capital (lifescicapital.com)
- HC Wainwright & Co (hcwco.com)

### Best-guess medtech hardware fit (from training data, REQUIRES verification)

Note: this session was conducted with GitHub MCP only, no live web access. All assessments below are from Claude's training knowledge with a cutoff and must be verified before outreach.

**High confidence — strong fit for medtech hardware:**
- Outcome Capital
- Leerink Partners
- HC Wainwright
- Edgemont Capital Partners

**Likely weak fit for hardware specifically (healthcare-adjacent but biotech/services/pharma lean):**
- Locust Walk (biotech licensing focus)
- TripleTree (healthcare services / IT focus)
- Provident Healthcare Partners (services focus)
- Bourne Partners (pharma services)
- Cain Brothers (services lean)
- LifeSci Capital (biotech capital markets)
- Castle Placement (generalist)
- Most generalist placement agents (Eaton, Park Hill, Asante, Atlantic-Pacific, Capstone)

**Unknown — not enough training data:**
- Ceros Capital Markets
- BBL Sciences
- NewHarbor VP
- Cassel Salpeter, Coker Capital, HT Capital, TM Capital, Solomon Partners (all generalist healthcare)
- Health Advances, DeciBio, Back Bay (these lean strategy consulting more than placement)

### Verification checklist (run on every firm before contacting)

For each firm, check four things on their website. Firm needs to clear at least 2 of 4 to be worth time. 3 or 4 = priority.

1. **Recent transactions / deals / tombstones page.** Look for medical device companies in the last 24 months. None = weak fit, 3+ = strong fit.
2. **Sectors / focus / practices page.** Does it explicitly list medical devices, medtech, or diagnostics as a vertical? Generic "healthcare" or "life sciences" with no device callout usually means biotech focus.
3. **Team page.** Scan senior bankers' backgrounds. Look for prior roles at Medtronic, J&J, BD, Boston Scientific, Stryker, Abbott, or notable medtech VCs (HealthQuest, Lux Health, .406 Ventures, F-Prime, Sofinnova medtech). 2+ bankers with that background = real device coverage.
4. **News / press / blog.** Filter for "device", "hardware", "medtech". Thought leadership on regulated hardware = they care about the space.

### The deeper question to ask each firm

When the conversation happens: *"Of your last five medical device transactions, who were the lead investors?"* If their answer includes strategic CVCs (Medtronic Ventures, J&J Innovation, Boston Scientific Strategic Investments, Stryker, Abbott, BD) or medtech-focused VCs (HealthQuest, Polaris Healthcare, F-Prime, Versant, Sofinnova), real fit. If they can't name five, that itself is the answer.

### Outreach materials produced this session

**Contact-form messages** (replaces the earlier "banking relationship" framing, which was Claude's incorrect first read):

*Short (~500 chars, for tight forms):*
> Hi, Frederick Kruger here, COO of 10XBeta. We're a vertically integrated medtech venture studio in the Brooklyn Navy Yard. 16 years, 150+ products shipped in regulated environments. We launch multiple new portfolio companies each year that move through capital raises, strategic partnerships, and eventual exits. I'd like to introduce 10XBeta and explore whether your firm and our pipeline are a fit. frederick.kruger@10xbeta.com / +1 917 573 6502.

*Standard (~1100 chars, for typical forms):*
> Hi,
>
> I'm Frederick Kruger, COO of 10XBeta, a vertically integrated medtech venture studio in the Brooklyn Navy Yard. For 16 years we've built and shipped products in regulated environments (medtech, defense, resilience hardware), 150+ to date. We launch multiple new portfolio companies each year that move from seed through institutional rounds, partnerships, and eventual exits.
>
> I'm reaching out to introduce 10XBeta and explore whether your firm could be a strategic transaction partner for the companies we launch. Our portfolio typically needs capital placement, introductions to corporate partners, and eventually M&A or licensing advisory. We're building relationships now with the firms we expect to work with over the next several years.
>
> A 15 to 20 minute introductory call would be the easiest way to find out if there's a fit on both sides.
>
> Frederick Kruger
> COO, 10XBeta
> frederick.kruger@10xbeta.com
> +1 917 573 6502
> 63 Flushing Ave, Bldg 303, Ste 807, Brooklyn NY 11205
> www.10xbeta.com

**LinkedIn connection requests (300 char hard cap):**

*Direct:*
> Hi [first name], I'm COO of 10XBeta, a medtech venture studio in Brooklyn. We launch hardware companies that will need transaction advisors over the next few years. Would like to connect and find a moment to introduce what we're building.

*Curious (lower pressure):*
> Hi [first name], saw your work at [Firm]. I'm COO of 10XBeta, a medtech venture studio in Brooklyn building hardware companies. Would like to connect and learn more about how your team works with early-stage device companies.

*Specific (when you can name a deal of theirs):*
> Hi [first name], saw [Firm]'s work on the [Company] deal. I run ops at 10XBeta, a medtech venture studio in Brooklyn launching hardware companies. Worth connecting, I think there's overlap.

**Follow-up DM (after LinkedIn accept) — NOT YET DRAFTED.** Open item for next session.

### LinkedIn targeting guidance

**Best targets (Tier A — respond, have authority, motivated to build network):**
- Vice President, Medical Devices
- Vice President, Healthcare (if no device-specific role exists)
- Director, Medtech
- Principal, Medical Devices

**Also target (business development / origination titles):**
- Director of Business Development
- Head of Origination
- VP, Business Development
- Head of Sourcing or Head of Coverage

**At small boutiques (under 50 people)** — go senior. Partner / Managing Director / Founder. Hands-on, no gatekeeping. Likely applies to: Outcome Capital, Castle Placement, NewHarbor VP, Ceros, BBL.

**At mid-size to large firms** — stick with VP / Director. Applies to: Leerink, HC Wainwright, TripleTree, Cain Brothers, Solomon Partners, Provident, and similar.

**Skip:**
- Analysts and Associates (no authority, won't carry message)
- Founders / CEOs / senior MDs at large firms (gatekept, focused on live deals)

### LinkedIn search syntax

In LinkedIn's people search:
1. Company filter = [firm name]
2. Title filter = Vice President OR Director OR Principal
3. Keyword box = "medical device" OR "medtech" OR "device"
4. Location = US (or filter further by your preference)

Verify each candidate by clicking into their profile and confirming actual device deals (device company logos or deal mentions in their experience section). Many "Healthcare VPs" only cover pharma services or HCIT.

### Cadence rules

- **2 to 3 connection requests per firm**, not 10. Send to multiple seniority levels for redundancy.
- **Stagger sends across 3 to 4 days** so the firm doesn't see 5 connections from the same person at once.
- If 3 people don't respond within 2 weeks, the firm probably isn't a fit. Move on.
- **Best send timing:** 8 to 10am their timezone, Tuesday through Thursday. Avoid Mondays (overflow) and Fridays (checked out).

### Open items for next session (priority order)

1. **Run verification checklist** on all 26 firms (6 original + 20 expansion). Mark each Verified / Skip / Maybe in a tracking doc. **This is the critical filter before any outreach.** Best done in a Claude.ai surface with web search enabled, or manually via the 4-question checklist.
2. **Build a tracking sheet** (markdown table at `sales/firm-tracker.md` or actual spreadsheet) with columns: `Firm | URL | Verified | LinkedIn contacts identified | Connection sent date | Response | Form submitted date | Notes`. Claude can stub this template when asked.
3. **Identify 2-3 named contacts per verified firm** via LinkedIn search using the syntax above. Filter by title and device experience.
4. **Send LinkedIn connection requests in batches of 5-10 per day**, not all at once. Track sends in the tracking sheet.
5. **Submit contact-form messages** to firms that don't yield LinkedIn hits, or as second touchpoint after LinkedIn.
6. **Draft follow-up DM** for after LinkedIn connection acceptance. Frederick asked for this; not yet produced.
7. **Identify specific named deals** for the "Specific" LinkedIn variant. Substantially improves response rates. Best sources: firm tombstones pages, press releases, PitchBook / Crunchbase (subscription required).

### Decisions and constraints locked this session

- **Outreach framing corrected** from "banking relationship" (Claude's first wrong read) to "strategic transaction partner for portfolio companies." Do not revert to the bank framing in future sessions.
- **Targets are placement agents and boutique investment banks**, not commercial banks. Different ask, different language.
- **Volume is small and targeted**, not mass blast. 2-3 contacts per firm, ~25-30 firms total = max ~75-90 connections. This is a relationship-building campaign, not lead-gen.
- **Verification before outreach.** Don't burn capital on firms that don't actually do medtech hardware.
- **No live web access** in this session. Frederick should run verification in a tool-enabled session next time. Some training data may be stale (Cain Brothers acquired by KeyBanc, Eaton Partners acquired by Stifel, Petsky Prunier acquired by Canaccord, etc.).
- **BBL Sciences (Frederick's original) and Back Bay Life Science Advisors (Claude's expansion) may be the same firm.** Verify before contacting both.

### Frederick's preferences observed this session

- Wants brief, conversational outreach, not pitches.
- Targets at decision-authority level, not analysts.
- Prefers small targeted volume per firm over mass outreach.
- Wants actionable output, not long analysis.
- Single-word approvals ("go", "done"). Expects Claude to sequence next logical step without being asked.

### Suggested opener for next session

```
sales session. Read sales/SESSION_LOG.md in krugerfz/10xbeta-site and tell me
where we left off.
```

If picking up in a Claude.ai surface with web search, the natural first task is the verification pass on all 26 firms. That output goes into the firm tracker (item 2 in Open items).
