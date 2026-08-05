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
- `components/footer.html`, `header.html`, `project-card.html`, `skill-card.html` are empty and not referenced by any page — the cards on `projects.html`/`skills.html` are hand-written inline HTML, not templated from these files.

## Design system (`assets/css/style.css`)

Dark theme: radial-gradient body background, glassmorphism cards (`rgba(255,255,255,0.05)` + blur + subtle border), accent palette `#60a5fa` (blue) / `#a855f7` (purple) / `#22d3ee` (cyan).

Reusable content-block classes shared across Présentation, Parcours, Compétences, and réalisation detail pages:
- `.detail-card` — main glass content card (flex column, left-aligned text, `max-width: 960px`, styled `h2`/`p`).
- `.definition-list` — bullet list with a small blue dot marker, for glossary-style term definitions.
- `.steps-list` — numbered list with circular badge markers, for chronological project steps.
- `.todo-list` / `.todo-label` — dashed amber placeholder blocks marking content still to be written; remove them once real prose replaces the placeholder (don't leave a stale `.todo-label` sitting above finished content).
- `.related-skills` / `.related-skill-link` — icon + label + arrow link cards, used at the bottom of réalisation pages to cross-link to `pages/skills/technical.html` / `pages/skills/human.html` instead of repeating a technology-tag list.

Illustrations are hand-authored inline SVG (no external image files, no icon library), built from the accent palette above — e.g. the flow-diagram in `pages/projects/project-1.html`, reused as the card thumbnail in `pages/projects.html`. Keep this pattern for future réalisation pages rather than sourcing bitmap images: several `assets/images/*.png` referenced by earlier placeholder content don't actually exist on disk.

## Content structure required by ISCOD

`Source/Guide Réalisations.png` is a slide from the official ISCOD course material (not just inspiration) specifying the mandatory structure for the site's "Réalisations" section: **5 réalisations total**, each on its own page (only one is fully built so far — `pages/projects/project-1.html`, API GLS). Each réalisation page must contain, in this order: présentation/définition, objectifs + contexte + enjeu + risques, les étapes, les acteurs, les résultats, les lendemains du projet, mon regard critique, plus a link to related compétences (not a tech-tag list — see `.related-skills` above). `Source/Journal_note Alternance ISCOD.pdf` (OneNotes section) lists the 5 candidate projects: Gedim, Site IA RomusWorld, Swagger API, API GLS (done), Reprise API Géodis. `Source/Guide - Etoffer Projet 1 (API GLS).md` has the full structure mapping and journal-derived facts for the GLS page and is the template to follow for the remaining 4.

## Working with the user on content

For narrative/professional content (project write-ups, "mon regard critique", personal reflections), the user writes the prose himself — provide guidance, guiding questions, and facts pulled from `Source/` material rather than finished paragraphs, unless he explicitly asks for drafted text. Spelling/grammar fixes are fine to apply directly when asked; sentence-level rewording ("syntaxe") should be confirmed with him first.

## Other tracking files (not part of the deployed site)

- `TODO.md` — the user's own task checklist.
- `CLAUDE_NOTES.md` — a running session log Claude maintains for itself across conversations (per-page status, open questions, session history). Read it at the start of a session and keep it updated. It's separate from this file: this file holds stable conventions, `CLAUDE_NOTES.md` holds changing state.
