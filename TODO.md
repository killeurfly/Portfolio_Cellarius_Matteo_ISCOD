# Portfolio - Liste des tâches

## ⚠️ Grille d'évaluation officielle ISCOD (100 pts, voir `Source/Portfolio grille évaluation.pdf`)

Découverte le 2026-08-12. Cette grille prime sur mes suppositions précédentes —
elle réordonne les priorités. Détail complet dans `CLAUDE.md`. Résumé par
poste, du plus gros manque au moins gros :

- [ ] **Chacune de mes compétences (30 pts, LE PLUS GROS POSTE)** — chaque
  compétence doit être un article détaillé à part (définition contextualisée
  + reliée à une actualité, 1-3 anecdotes avec preuve/résultat/valeur
  ajoutée/lien vers la réalisation concernée, autocritique, évolution
  souhaitée). **Structure créée** : les 10 pages existent
  (`pages/skills/*.html`) avec définitions rédigées et pistes d'anecdotes
  sourcées, mais anecdotes/autocritique/évolution restent des `.todo-list`
  à rédiger par toi (voir détail dans la section Compétences plus bas).
- [ ] **Mes compétences — schéma comparatif (10 pts)** — la grille demande un
  schéma synthétique où on voit le niveau de chaque compétence *par rapport
  aux autres* (genre radar/barres), pas une grille de cartes. **Manquant.**
- [x] **Mes réalisations — page commune (5 pts)** — fait (`realisations.html`).
- [x] **Chacune de mes réalisations (20 pts)** — les 7 notions demandées sont
  là sur les 5 pages. ⚠️ Deux écarts : (1) la grille veut des noms
  "évocateurs et indépendants du contexte de l'école ou de l'entreprise" —
  "API GLS"/"API Géodis"/"Gedim"/"EDF" sont au contraire nommés d'après le
  transporteur/client/entreprise ; (2) la fin de chaque article doit lier
  vers des **compétences spécifiques**, pas juste les 2 boutons génériques
  vers les pages hub technique/humaine.
- [ ] **Navigation circulaire compétences ↔ réalisations** (pas de points
  séparés mais explicitement requis) — chaque compétence doit lister ses
  réalisations liées (avec lien), chaque réalisation doit lister ses
  compétences liées (avec lien). Dépend des deux points compétences
  ci-dessus.
- [x] **Article de présentation générale (15 pts)** — largement fait
  (`presentation.html` a déjà les 4 notions : valeurs, projet pro, qualités
  humaines, centres d'intérêt). ⚠️ Fautes à corriger, et la rubrique "Mes
  valeurs" pourrait insister davantage sur le côté "expert en ingénierie
  humain, conscient, responsable" comme le formule la grille. Éviter une
  accroche trop auto-centrée en ouverture.
- [x] **Page d'accueil (5 pts)** — déjà attrayante/structurée (hero, 3
  cartes, CTA). Le bouton "Télécharger mon CV" pointe vers un fichier
  absent (`assets/documents/cv.pdf`).
- [x] **Un menu (3 pts)** — fait : navbar fixe (persiste au scroll), libellés
  courts.
- [x] **Mon parcours en frise (5 pts)** — fait, ordre anti-chronologique
  correct (2025 en haut → 2018 en bas).
- [ ] **Chacune de mes expériences (5 pts)** — 1er niveau de lecture (période,
  poste, lieu+logo) présent partout. 2e niveau incomplet : pas de
  distinction claire responsabilité/statut, et surtout **pas de liens vers
  les réalisations/compétences rattachées** depuis les entrées Romus/EDF de
  la frise.
- [ ] **Espace contact (2 pts)** — toujours Lorem Ipsum + fausses coordonnées
  (`exemple@email.com`). Nécessite les vraies infos de l'utilisateur — ne
  pas inventer.
- [ ] **Mon orthographe** (pénalité : -1% tous les 5 fautes) — vigilance
  continue, relectures déjà faites sur les 5 réalisations mais pas sur
  Présentation/Parcours/Accueil.
- [x] **Mon prénom/nom/ma photo sur toutes les pages** — fait via la navbar
  (`nav-profile`, injectée partout).

---

## Structure générale

- [x] Créer la page d'accueil
- [x] Ajouter la navbar
- [x] Ajouter le menu déroulant Réalisations
- [x] Ajouter le menu déroulant Compétences
- [x] Créer la page Présentation
- [x] Créer la page Parcours
- [x] Créer la page Contact

---

## Contenu

### Présentation

- [x] Remplacer le Lorem Ipsum — fait, les 4 notions de la grille ISCOD sont
  présentes (valeurs, projet pro, qualités humaines, centres d'intérêt)
- [ ] Relecture orthographe/grammaire (pas encore faite sur cette page —
  ex. "proser"→"proposer", "ma permis"→"m'a permis", "developer"→
  "développer", "facon"→"façon")
- [ ] Renforcer "Mes valeurs" sur l'angle "expert en ingénierie humain,
  conscient, responsable" demandé par la grille d'évaluation
- [ ] Revoir la phrase d'ouverture pour éviter une accroche auto-centrée
  ("Étant d'un naturel...") — la grille le déconseille explicitement
- [ ] Ajouter une photo professionnelle dédiée à cette page (au-delà de la
  photo navbar)

### Parcours

- [x] Bac, BTS, Mastère, expériences pro — tout est déjà en place, frise
  anti-chronologique
- [ ] Ajouter le "2e niveau de lecture" par expérience (responsabilité,
  statut, liens vers réalisations/compétences rattachées) — actuellement
  seul un court paragraphe est visible, sans lien vers les réalisations

### Réalisations (5/5 requises par la structure ISCOD, voir Source/Guide Réalisations.png)

- [x] Réalisation 1 — Intégration API GLS : contenu complet, structure ISCOD (présentation, objectifs/contexte/enjeu/risques, étapes, acteurs, résultats, lendemains, regard critique, compétences associées), illustration SVG, relecture orthographe faite
- [x] Réalisation 2 — Reprise API Géodis : contenu complet, structure ISCOD, illustration SVG, relecture orthographe faite (projet toujours en pause côté Romus pour l'été — section Résultats/Lendemains à réviser si le statut change à la rentrée)
- [x] Réalisation 3 — Évolution de Gedim : contenu complet, structure ISCOD, illustration SVG, relecture orthographe faite (y compris les ajouts Contexte technique/Risques/Acteurs)
- [x] Réalisation 4 — Garanties d'Origine (EDF), ex-API Swagger (remplacée, pas assez de matière) : contenu complet, structure ISCOD, illustration SVG, relecture orthographe faite. ⚠️ Le rapport d'activité EDF porte une clause de non-divulgation explicite — rester générique, aucune donnée client/chiffre réel/nom de collègue à reprendre sur la page publique
- [x] Réalisation 5 — Prévisions de consommation (EDF), macro Spot Horaire : contenu complet, structure ISCOD, illustration SVG, plus aucun todo. ⚠️ Même clause de confidentialité EDF que Réalisation 4 — rester générique. Point à surveiller : "à destination de la facturation" (Présentation) mentionne un processus interne EDF, à généraliser si besoin
- [ ] **Noms des réalisations à revoir** (grille ISCOD) : doivent être "évocateurs et indépendants du contexte de l'école ou de l'entreprise". "API GLS", "API Géodis", "Gedim", et les deux titres "(EDF)" ne le sont pas — à rediscuter avant de renommer quoi que ce soit (impact sur les fichiers, la navbar, les liens)
- [ ] **Fin de chaque réalisation** : remplacer/compléter les 2 boutons génériques par des liens vers les compétences spécifiques mises en œuvre (dépend de la refonte des pages compétences ci-dessous)
- [ ] Ajouter le lien GitHub sur les réalisations qui s'y prêtent
- [ ] Vérifier la confidentialité des réalisations liées à Romus avant publication (repo GitHub public)

### Compétences

- [x] Ajouter les icônes des technologies (10 icônes SVG maison, `assets/images/svg/skill-*.svg`)
- [x] Séparer techniques et humaines (`pages/skills/technical.html` et `human.html`, grille de 5 cartes chacune)
- [x] Page hub `skills.html` — affiche les 10 compétences directement (2 sections), `technical.html`/`human.html` restent des pages dédiées séparées
- [x] **Chacune de mes compétences a sa page dédiée** (`pages/skills/*.html`,
  10 pages : `api.html`, `web.html`, `automatisation.html`,
  `resolution-problemes.html`, `fiabilisation.html`, `communication.html`,
  `autonomie.html`, `adaptabilite.html`, `rigueur.html`,
  `gestion-projet.html`). Chaque page a la structure à 5 sections demandée
  par la grille (Ma définition, Mes éléments de preuve, Mon autocritique,
  Mon évolution, Réalisations liées). Les cartes de `skills.html`,
  `technical.html` et `human.html` pointent maintenant vers ces pages.
  **Reste à faire par toi** (rédaction personnelle, laissée en `.todo-list`
  sur chaque page) :
  - [ ] "Ma définition" — rédigée par Claude, mais chaque page a un todo
    pour relier la compétence à une actualité du secteur (obligatoire côté
    grille, nécessite ta veille perso)
  - [ ] "Mes éléments de preuve" — pistes d'anecdotes factuelles proposées
    par Claude (1-3 par page, sourcées dans les réalisations), mais les
    paragraphes finaux (résultat + valeur ajoutée) sont à rédiger par toi
  - [ ] "Mon autocritique" (niveau de maîtrise, priorité, vitesse
    d'acquisition, recul) — 100% personnel, todo sur les 10 pages
  - [ ] "Mon évolution" (projet perso-pro, formations prévues) — 100%
    personnel, todo sur les 10 pages
- [ ] **Schéma comparatif des 10 compétences** (10 pts) — remplacer ou
  compléter la grille de cartes par une visualisation du niveau relatif de
  chaque compétence (ex. barres ou radar), accessible depuis le menu
  principal.
- [ ] Chaque compétence doit être accessible par un sous-menu (navbar ou
  interne à la page) — actuellement le sous-menu navbar ne pointe que vers
  les 2 pages hub ; les 10 pages individuelles ne sont accessibles que
  depuis les cartes de `skills.html`/`technical.html`/`human.html`, pas
  encore depuis la navbar elle-même
- [x] Relire la formulation des 10 descriptions courtes (fait, corrigées
  avec toi sur `skills.html`)
- [ ] **Navigation circulaire, sens réalisation → compétences** : les 5
  pages de réalisation ont toujours leurs 2 boutons génériques
  (technique/humaine) en fin d'article au lieu de liens vers les
  compétences spécifiques mobilisées — maintenant que les 10 pages
  existent, on peut les cibler précisément

### Contact

- [ ] Ajouter adresse mail (vraie, pas inventée)
- [ ] Ajouter GitHub
- [ ] Ajouter LinkedIn
- [ ] Ajouter formulaire de contact
- [ ] Remplacer le Lorem Ipsum et les fausses coordonnées actuelles

---

## Design

### Navbar

- [ ] Ajouter effet page active
- [x] Persistant au scroll (position fixed) — déjà en place, requis par la grille ISCOD
- [ ] Ajouter responsive mobile
- [ ] Sous-menu Compétences à étoffer une fois les 10 pages/articles de compétence créés

### Pages

- [ ] Harmoniser les espacements (fait pour `.detail-card` : titres colorés + espacement h2/paragraphes, impacte Présentation/Réalisations/Compétences ; reste à faire ailleurs)
- [ ] Ajouter animations légères
- [ ] Vérifier le responsive tablette
- [ ] Vérifier le responsive mobile

---

## Finalisation

- [ ] Vérifier tous les liens (dont le bouton "Télécharger mon CV" cassé sur l'accueil)
- [ ] Vérifier toutes les images
- [ ] Optimiser les tailles d'images
- [ ] Ajouter favicon
- [ ] Ajouter les balises meta (description, Open Graph/réseaux sociaux) sur chaque page
- [ ] Ajouter README
- [ ] Faire une relecture complète (Présentation et Parcours pas encore repassées avec la même rigueur que les réalisations)
- [ ] Relecture par réalisation, 3 points à chaque fois : (1) orthographe/grammaire/syntaxe, (2) mots-clés importants mis en gras dans les paragraphes (pas seulement les titres d'étapes et de définitions — convention encore à appliquer partout), (3) vérifier qu'aucune définition utile ne manque pour les termes techniques utilisés sur la page
  - [x] Réalisation 1 (API GLS) — orthographe faite, gras/définitions à vérifier
  - [x] Réalisation 2 (API Géodis) — orthographe faite, gras/définitions à vérifier
  - [x] Réalisation 3 (Gedim) — orthographe faite, gras/définitions à vérifier
  - [x] Réalisation 4 (Garanties d'Origine EDF) — orthographe faite, gras/définitions à vérifier
  - [x] Réalisation 5 (Prévisions de consommation EDF) — orthographe faite
- [ ] Déployer le portfolio
