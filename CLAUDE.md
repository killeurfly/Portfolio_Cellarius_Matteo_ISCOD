# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static portfolio site (vanilla HTML/CSS/JS, no framework, no build tool, no `package.json`) for Cellarius Matteo's ISCOD Mastère validation. There are no lint/test/build commands — nothing to run besides serving the files.

## Running the site

Pages use absolute paths (`/assets/...`, `/pages/...`) and the navbar is injected client-side via `fetch()`, so the site **must be served from the repo root over HTTP** — opening `index.html` via `file://` breaks both the asset paths and the navbar fetch. Serve with e.g.:

```
python -m http.server 8000
```

## Page template

Every page (`index.html`, `pages/*.html`, `pages/**/*.html`) follows the same shape:
- Identical `<head>`, linking only `/assets/css/style.css`. `assets/css/components.css`, `pages.css`, and `responsive.css` exist but are empty and not linked anywhere — don't reference them without also filling them in.
- `<div id="navbar-container"></div>` right after `<body>`, then the page content inside `<main>`.
- `<script src="/assets/js/navbar.js">` at the end of `<body>` on every page — it fetches `components/navbar.html` and injects it; a new page without this script has no nav. `assets/js/background.js` (animated particle canvas) is only loaded on `index.html`, not on inner pages.
- `components/footer.html`, `header.html`, `project-card.html`, `skill-card.html` are empty and not referenced by any page — the cards on `realisations.html`/`skills.html` are hand-written inline HTML, not templated from these files.

## Design system (`assets/css/style.css`)

Dark theme: radial-gradient body background, glassmorphism cards (`rgba(255,255,255,0.05)` + blur + subtle border), accent palette `#60a5fa` (blue) / `#a855f7` (purple) / `#22d3ee` (cyan).

Reusable content-block classes shared across Présentation, Parcours, Compétences, and réalisation detail pages:
- `.detail-card` — main glass content card (flex column, left-aligned text, `max-width: 960px`, styled `h2`/`p`).
- `.definition-list` — bullet list with a small blue dot marker, for glossary-style term definitions.
- `.steps-list` — numbered list with circular badge markers, for chronological project steps.
- `.todo-list` / `.todo-label` — dashed amber placeholder blocks marking content still to be written; remove them once real prose replaces the placeholder (don't leave a stale `.todo-label` sitting above finished content).
- `.related-skills` / `.related-skill-link` — icon + label + arrow link cards, used at the bottom of réalisation pages to cross-link to `pages/skills/technical.html` / `pages/skills/human.html` instead of repeating a technology-tag list.
- `.skills-grid` / `.skill-item` — the 5-card icon grid used on `pages/skills/technical.html` and `human.html` (icon + `h2` + short `p`, blue `h2`), modeled on the example screenshots in `Source/Compétence technique.png` / `Compétence humaine.png` but restyled to the dark glass theme. Distinct from `.skill-card`, which is only the 2-card hub layout on `pages/skills.html` linking out to those two pages.

Illustrations are hand-authored SVG (no bitmap images, no icon library), built from the accent palette above. As of the 5-réalisation set, these live as standalone files under `assets/images/svg/` and are embedded via `<img src="/assets/images/svg/....svg" alt="...">` — **not** inline `<svg>` in the HTML anymore. Each réalisation's main flow-diagram illustration is a single shared file reused both by its `illustration-panel` on the detail page and its `project-thumb` card on `pages/realisations.html` (sizing is controlled by `.illustration-panel svg, .illustration-panel img` / `.project-thumb svg, .project-thumb img` in `style.css`, which target both tags so a plain inline `<svg>` would still work too, though it's not the current pattern). The two `.section-heading` step-list icons are similarly shared: `icon-etapes-impression.svg` (GLS, Géodis) and `icon-etapes-liste.svg` (Gedim, both EDF pages). Keep this pattern for future réalisation pages — one illustration file per project, reused for both the detail page and its listing-page card, rather than duplicating the markup with suffixed IDs like the old `flowGradientXCard` pattern used. The `pages/realisations.html` card thumbnails use their own dedicated, simpler `card-*.svg` icons (bigger single pictogram — a label, a certificate, a chart — instead of the full 3-node flow diagram) because the wide diagram didn't read well shrunk to card size; the `illustration-*.svg` files remain the ones used on the detail pages. The `pages/skills/*.html` cards use another dedicated set, `skill-*.svg` (10 files, one per skill).

## Content structure required by ISCOD

`Source/Guide Réalisations.png` is a slide from the official ISCOD course material (not just inspiration) specifying the mandatory structure for the site's "Réalisations" section: **5 réalisations total**, each on its own page. Each réalisation page must contain, in this order: présentation/définition, objectifs + contexte + enjeu + risques, les étapes, les acteurs, les résultats, les lendemains du projet, mon regard critique, plus a link to related compétences (not a tech-tag list — see `.related-skills` above). `Source/Guide - Etoffer Projet 1 (API GLS).md` has the full structure mapping and journal-derived facts for the GLS page and was the template used for the others.

Current status of the 5 réalisations (all sourced from `Source/`, which is gitignored — see below). **Renamed 2026-09-05** per the grading rubric (see "Réalisation naming" below) — the internal file names (`realisation-N.html`) are unchanged. Note the final naming decision diverged from a first pass: réalisations 1-3 keep their carrier/tool name (GLS, Géodis, Gedim aren't the host employer, just an external API/internal tool — the user judged them fine to keep, short, and recognizable), while réalisations 4-5 (EDF) are fully anonymized, consistent with the separate EDF confidentiality note below:
1. `realisation-1.html` — "Intégration de l'API GLS" (title/h1 unchanged from before this whole exercise; navbar label: "API GLS"). Done.
2. `realisation-2.html` — "Intégration de l'API Géodis" (ex-"Reprise API Géodis" — reworded for parallelism with #1; navbar label: "API Géodis"). Done.
3. `realisation-3.html` — "Évolution de Gedim" (unchanged; navbar label: "Gedim"). Done.
4. `realisation-4.html` — "Automatisation de la confection des certificats énergétiques" (ex-"Garanties d'Origine (EDF)"; navbar label: "Certificats énergétiques"), sourced from `Source/Rapport d'activité Cellarius Matteo.pdf` and `Source/Journal_Note Alternance EDF.pdf` (previous, non-Romus apprenticeship). This **replaced** an earlier Swagger API page (`Source/Journal_note Alternance ISCOD.pdf` originally listed Swagger as the 4th candidate, alongside Gedim, Site IA RomusWorld, API GLS, Reprise API Géodis) — there wasn't enough journal material to write a full Swagger page, so the user chose to feature an EDF project instead. Done.
5. `realisation-5.html` — "Confection automatisée des prévisions clients" (ex-"Prévisions de consommation (EDF)"; navbar label: "Prévisions clients"), the "Macro Spot Horaire" from the same EDF rapport/journal as Réalisation 4 (two-part Outlook+Excel VBA macro consolidating client consumption forecasts). Chosen over the earlier "Site IA RomusWorld" candidate. Done.

**EDF confidentiality**: the EDF rapport d'activité carries an explicit non-disclosure notice from EDF (no reproduction without Direction Grands Comptes approval) — stricter than the general Romus caution below. Keep `realisation-4.html` generic: no client data, real figures, or colleague names from that document.

## Official grading rubric (`Source/Portfolio grille évaluation.pdf`)

Added 2026-08-12. This is the actual scoring grid for the portfolio (100 pts total, ISCOD/Visiplus Academy), and takes priority over any structural assumption made earlier in the project — check `TODO.md`'s top section ("⚠️ Grille d'évaluation officielle ISCOD") for the current gap analysis before assuming a section is "done." Point breakdown and the two biggest open gaps:

- **Chacune de mes compétences — 30 pts (the single largest line item in the whole rubric).** Each of the 10 compétences must be its own detailed article, not just a card: (1) structured/detailed text, (2) a definition situating the compétence in a professional context and tying it to "une actualité donnée" (a real current-industry example), (3) 1–3 concrete anecdotes each proving the compétence was used, stating the result/added value, and linking back to the specific réalisation it came from, (4) a self-critique (mastery level, how important/prioritized this compétence is in his profile, how fast he picked it up if notable, hindsight/advice), (5) where this compétence fits his mid-term career plan and any planned training. End of article: list of + links to the main réalisations tied to it. **Nothing built yet** — `pages/skills/technical.html`/`human.html`/`skills.html` currently only have short icon-cards (title + 1-2 sentences), which cover none of this depth.
- **Mes compétences (comparative diagram) — 10 pts.** The rubric wants competences shown compared against each other in one synthetic schema (their relative level/place vs. one another — think radar or bar chart), reachable from the main menu. The current `.skills-grid` card layout does not do this — it's a flat list, not a comparison. Still needed even after (or instead of) the 30-pt detailed articles above.
- **Réalisation naming.** Done 2026-09-05 — see the renamed list above. Applied to `<title>`, `<h1>`, navbar dropdown labels (shortened further than the card/h1 title, e.g. "Certificats énergétiques" vs. the full "Automatisation de la confection des certificats énergétiques"), `pages/realisations.html` card titles/descriptions/alt text, and every `.related-skill-link` `<strong>` label pointing to a réalisation across the compétence pages and `pages/parcours/{romus,edf}.html`. Deliberately left unchanged: the narrative prose inside each réalisation page and every anecdote elsewhere on the site that recounts the real technical history (e.g. "l'API GLS", "les Garanties d'Origine" as a real energy-sector term) — those are factual descriptions of what was built, not the réalisation's portfolio "name." File names (`realisation-N.html`) were not changed, only their content. Final naming kept the carrier/tool names for 1-3 (user's call — not the host employer, so not really in scope of the rubric's concern) and fully anonymized 4-5 (EDF), matching the separate EDF confidentiality note below.
- **Circular navigation.** Each compétence article needs links to its réalisations, and each réalisation needs links to its specific compétences (not the two generic hub-page buttons currently used in `.related-skills`). Blocked on the 30-pt compétence articles existing first.
- Smaller/mostly-done items: page d'accueil (5 pts, done), menu (3 pts, done — navbar is `position: fixed`), article de présentation générale (15 pts, done structurally in `pages/presentation.html`, needs a proofread pass and could lean harder into the rubric's "expert en ingénierie humain, conscient, responsable" framing), mes réalisations page commune (5 pts, done), chacune de mes réalisations (20 pts, the 7-notion structure is done — see previous section — but see naming/linking gaps above), mon parcours en frise anti-chronologique (5 pts, done in `pages/parcours.html`), chacune de mes expériences (5 pts, 1st reading level done, 2nd level — responsabilité/statut/liens vers réalisations et compétences — incomplete), espace contact (2 pts, still Lorem Ipsum + fake coordinates, needs the user's real info — don't invent it), orthographe (penalty: -1% per 5 mistakes across the whole site, not just réalisations).

## Working with the user on content

For narrative/professional content (project write-ups, "mon regard critique", personal reflections), the user writes the prose himself — provide guidance, guiding questions, and facts pulled from `Source/` material rather than finished paragraphs, unless he explicitly asks for drafted text. Spelling/grammar fixes are fine to apply directly when asked; sentence-level rewording ("syntaxe") should be confirmed with him first.

## Git workflow

After finishing a significant chunk of work (a new/rewritten page, a batch of related fixes, a structural change like a rename), proactively propose creating a commit for it — don't wait to be asked. Group related changes into logical commits (e.g. content vs. design vs. config) rather than one giant commit, French commit messages, and still ask for explicit confirmation before `git push`.

## Other tracking files (not part of the deployed site)

- `TODO.md` — the user's own task checklist.
- `CLAUDE_NOTES.md` — a running session log Claude maintains for itself across conversations (per-page status, open questions, session history). Read it at the start of a session. Explicit user instruction: keep it updated proactively after each notable exchange in a session (a page finished, a section rewritten, a structural decision), not only when asked — don't wait for "update le claudenotes stp". It's separate from this file: this file holds stable conventions, `CLAUDE_NOTES.md` holds changing state.
