# Portfolio - Liste des tâches

## ⚠️ Grille d'évaluation officielle ISCOD (100 pts, voir `Source/Portfolio grille évaluation.pdf`)

Découverte le 2026-08-12. Cette grille prime sur mes suppositions précédentes —
elle réordonne les priorités. Détail complet dans `CLAUDE.md`. Résumé par
poste, du plus gros manque au moins gros :

- [ ] **Chacune de mes compétences (30 pts, LE PLUS GROS POSTE)** — chaque
  compétence doit être un article détaillé à part (définition contextualisée
  + reliée à une actualité, 1-3 anecdotes avec preuve/résultat/valeur
  ajoutée/lien vers la réalisation concernée, autocritique, évolution
  souhaitée). **10/10 pages entièrement terminées** (api, web, automatisation,
  resolution-problemes, fiabilisation, communication, adaptabilite, rigueur,
  autonomie, gestion-projet — plus aucun todo, vérifié 2026-09-02). ⚠️ Aucune
  n'a encore été vérifiée ligne à ligne contre les 5 critères exacts de la
  grille — seulement comparées en longueur aux exemples fournis.
  Correction 2026-09-02 : le lien inline vers la réalisation dans "Mes
  éléments de preuve" est en fait présent sur les **10 pages** (vérifié par
  grep) — l'item précédent affirmant qu'il manquait sur 5 pages était
  obsolète/faux, supprimé.
- [ ] **Mes compétences — schéma comparatif (10 pts)** — la grille demande un
  schéma synthétique où on voit le niveau de chaque compétence *par rapport
  aux autres* (genre radar/barres), pas une grille de cartes. **Manquant.**
- [x] **Mes réalisations — page commune (5 pts)** — fait (`realisations.html`).
- [x] **Chacune de mes réalisations (20 pts)** — les 7 notions demandées sont
  là sur les 5 pages. ⚠️ Écart restant : la grille veut des noms "évocateurs
  et indépendants du contexte de l'école ou de l'entreprise" —
  "API GLS"/"API Géodis"/"Gedim"/"EDF" sont au contraire nommés d'après le
  transporteur/client/entreprise (à rediscuter avant renommage). Le 2ᵉ écart
  (liens de fin d'article) est réglé, voir point navigation circulaire
  ci-dessous.
- [x] **Navigation circulaire compétences ↔ réalisations** — fait 2026-09-02 :
  les 10 pages compétence listent déjà leurs réalisations liées avec lien
  (fait de longue date) ; les 5 pages réalisation ont maintenant, en fin
  d'article, des liens vers les compétences spécifiques mobilisées (au lieu
  des 2 boutons génériques technique/humaine) — mapping construit à partir
  des "Réalisations liées" déjà déclarées côté compétences, sous-titres
  réutilisés tels quels. Seul écart : `autonomie.html` liste dans son propre
  bloc "Réalisations liées" les 5 réalisations alors que ses anecdotes
  ("Mes éléments de preuve") ne couvrent que réalisation-1 et réalisation-2 —
  du coup les liens ajoutés vers `autonomie.html` depuis les réalisations
  3/4/5 n'ont pas été faits, seulement depuis 1 et 2. À trancher : soit
  étoffer les anecdotes d'autonomie.html pour couvrir 3/4/5, soit réduire son
  bloc "Réalisations liées" à 1/2 pour rester cohérent avec les autres pages.
- [ ] **Vérifier que tous les liens inline compétences ↔ réalisations sont
  bien circulaires (bidirectionnels)** — le mapping du 2026-09-02 a été
  construit à sens unique (réalisation → compétences, déduit des blocs
  "Réalisations liées" déjà déclarés côté compétences), sans revérifier
  chaque paire dans l'autre sens. Repasser sur les 10 pages compétence × 5
  pages réalisation et confirmer, pour chaque lien : (1) si la compétence X
  liste la réalisation Y dans "Réalisations liées", Y liste bien X dans ses
  "Compétences associées" (et inversement), (2) le lien existe aussi de
  façon inline dans "Mes éléments de preuve"/le corps de la réalisation, pas
  seulement dans le bloc générique de fin. L'écart déjà connu sur
  `autonomie.html` (voir point ci-dessus) est un exemple de ce genre
  d'incohérence — il peut y en avoir d'autres non détectées.
- [x] **Article de présentation générale (15 pts)** — largement fait
  (`presentation.html` a déjà les 4 notions : valeurs, projet pro, qualités
  humaines, centres d'intérêt). ⚠️ Fautes à corriger, et la rubrique "Mes
  valeurs" pourrait insister davantage sur le côté "expert en ingénierie
  humain, conscient, responsable" comme le formule la grille. Éviter une
  accroche trop auto-centrée en ouverture. Revérifié le 2026-08-26 contre le
  texte exact de la grille — 2 écarts supplémentaires trouvés : (1) la
  notion "projet pro" est en fait "Mon projet **professionnel, personnel**"
  — seul le volet professionnel est traité pour l'instant ; (2) la grille
  demande explicitement des "caractères [gras]" comme critère de structure,
  or la page n'a aucun mot en `<strong>`. Détail complet dans la section
  Contenu > Présentation plus bas.
- [x] **Page d'accueil (5 pts)** — déjà attrayante/structurée (hero, 3
  cartes, CTA). Le bouton "Télécharger mon CV" pointe vers un fichier
  absent (`assets/documents/cv.pdf`).
- [x] **Un menu (3 pts)** — fait : navbar fixe (persiste au scroll), libellés
  courts.
- [x] **Mon parcours en frise (5 pts)** — fait, ordre anti-chronologique
  correct (2025 en haut → 2018 en bas).
- [ ] **Chacune de mes expériences (5 pts)** — 1er niveau de lecture (période,
  poste, lieu+logo) présent partout. 2e niveau incomplet, analysé en détail
  le 2026-09-02 sur les 8 pages `pages/parcours/*.html` :
  - Aucune des 8 pages ne lie vers une compétence (seul `romus.html`/
    `edf.html` lient vers des réalisations, via leur bloc "Réalisations
    liées" déjà pré-rempli). Todo ajouté sur ces deux pages pour demander
    les compétences mobilisées.
  - La question "statut/niveau de responsabilité" n'était posée que dans les
    todos de `romus.html`/`edf.html`. Ajoutée aussi sur
    `phygital-factory.html` (todo, à répondre) et `marie-lannelongue.html`
    (répondue le 2026-09-02 : observation des interventions du collègue puis
    prise en charge autonome des tickets les plus simples — todo supprimé,
    page maintenant entièrement rédigée).
  - Rappel déjà connu : la frise elle-même (`parcours.html`) ne pointe
    jamais directement vers une réalisation/compétence, il faut passer par
    la page détail via "En savoir plus →".
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
  présentes (valeurs, projet pro, qualités humaines, centres d'intérêt).
  ⚠️ Revérifié le 2026-08-26 texte exact de la grille (`Source/Portfolio
  grille évaluation.pdf`) : la notion s'appelle précisément "Mon projet
  **professionnel, personnel**" — la section "Projets professionnels"
  actuelle ne couvre que le versant professionnel/technique (montée en
  compétences, veille IA), pas de projet personnel évoqué. À enrichir d'un
  volet perso (le projet domotique déjà utilisé comme fil rouge sur les
  pages compétences serait cohérent ici aussi). Les sections "Mes qualités
  Humaines" et "Centres d'intérêt" sont par ailleurs très courtes (1
  paragraphe/1 phrase) — pas un manque formel selon la grille (qui ne fixe
  pas de longueur), mais un point de vigilance si on veut un article
  vraiment "détaillé" comme elle le demande.
- [ ] **Article structuré avec caractères gras** — relu le 2026-08-26 :
  la grille liste explicitement "paragraphes, sous-titres, caractères
  [gras]" comme critère de structure (même formulation que pour les pages
  compétence). `presentation.html` a bien des paragraphes et des
  sous-titres (`<h2>`), mais **aucun mot en gras** (`<strong>`) nulle part
  dans la page — contrairement aux pages compétence/réalisation qui
  utilisent déjà cette convention. À appliquer sur les mots-clés
  importants de chaque section (ex. "collaboration", "apprentissage
  continu", "expert en ingénierie humain, conscient, responsable").
- [ ] Relecture orthographe/grammaire (pas encore faite sur cette page —
  ex. "proser"→"proposer", "ma permis"→"m'a permis", "developer"→
  "développer", "facon"→"façon". Repéré en plus le 2026-08-26 :
  "enormément"→"énormément", deux espaces manquantes après un point
  ("innovants.Tout", "besoins.Tant"), et un accord sujet/verbe à revoir :
  "les nouvelles technologies... **car il permette**" → "car **elles
  permettent**" (le sujet est pluriel, pas "il"))
- [ ] Renforcer "Mes valeurs" sur l'angle "expert en ingénierie humain,
  conscient, responsable" demandé par la grille d'évaluation — le texte
  exact de la grille précise "focus sur l'expert en ingénierie humain,
  conscient, responsable…", entre parenthèses comme piste de cadrage ; la
  section actuelle ("collaboration, travail d'équipe, apprentissage
  continu") reste générique et ne reprend pas cet angle précis
- [ ] Revoir la phrase d'ouverture pour éviter une accroche auto-centrée
  ("Étant d'un naturel...") — la grille le déconseille explicitement
  ("J'évite les expressions introductives auto-centristes", texte exact
  relevé le 2026-08-26)
- [ ] Ajouter une photo professionnelle dédiée à cette page (au-delà de la
  photo navbar) — voir aussi l'item consolidé dans la section Finalisation
  (CV + photo)

### Parcours

- [x] Bac, BTS, Mastère, expériences pro — tout est déjà en place, frise
  anti-chronologique
- [x] **"2e niveau de lecture" par expérience — structure créée
  (2026-08-26)** : 8 pages de détail créées dans `pages/parcours/`, une par
  entrée de la frise (4 écoles : `iscod.html`, `paris-saclay.html`,
  `vilgenis.html`, `prevert.html` ; 4 entreprises :
  `romus.html`, `edf.html`, `phygital-factory.html`,
  `marie-lannelongue.html`), sur le modèle des fichiers
  `Source/Exemple parcours détails école/entreprise.txt` fournis par
  l'utilisateur (structure : écoles = "Présentation de l'établissement" +
  "Ma vision de la pédagogie pratiquée" ; entreprises = + "Travail
  effectué" + "Ma place dans l'entreprise"). Un lien "En savoir plus →" a
  été ajouté sur chacune des 8 entrées de `pages/parcours.html`. Les pages
  Romus et EDF ont en plus une section "Réalisations liées" déjà remplie
  (liens vers les réalisations 1/2/3 pour Romus, 4/5 pour EDF) — ça répond
  au manque de liens vers les réalisations demandé par la grille. Nouvelle
  classe CSS `.parcours-hero-logo` (logo sur fond blanc, format hero) et
  `.timeline-detail-link` (lien pilule en bas de chaque carte de la frise).
  **Todos seulement, aucun contenu personnel rédigé** — même convention que
  les pages de compétence : l'utilisateur écrit, Claude corrige ensuite.
  Point de vigilance rappelé dans le todo de `edf.html` : rester générique
  sur l'organisation interne (clause de confidentialité EDF), pas de nom
  de collègue.

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
- [x] **Anonymiser les mentions de "Romus"** dans le corps des pages — fait
  (2026-08-25) sur `realisations.html`, `realisation-1/2/3.html`, `api.html`,
  `automatisation.html`, `resolution-problemes.html`, `web.html` : remplacé
  par des formulations génériques ("mon entreprise", "dans le milieu
  professionnel"). **`pages/parcours.html`** (frise, lignes ~62-78) garde
  volontairement le vrai nom "Romus", son logo et son lien vers
  romusworld.com — décision confirmée par l'utilisateur le 2026-08-25 (la
  frise de CV peut rester nominative, contrairement au reste du site).
- [ ] **Anonymiser les mentions d'"EDF"**, sur le même principe que Romus —
  présent dans `automatisation.html`, `realisations.html`, `realisation-4.html`,
  `realisation-5.html`, `components/navbar.html`, et jusque dans les noms de
  fichiers `assets/images/svg/card-edf-consommation.svg` et
  `card-edf-garanties-origine.svg`. Périmètre plus large que Romus (titres de
  réalisations "(EDF)", noms de fichiers SVG à renommer) — recoupe le point
  "noms des réalisations à revoir" ci-dessus, à traiter ensemble plutôt qu'en
  isolé.

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
- [x] **api.html** — entièrement rédigée, plus aucun todo.
- [x] **web.html** — entièrement rédigée, plus aucun todo.
- [x] **automatisation.html** — entièrement rédigée, plus aucun todo.
- [x] **resolution-problemes.html** — entièrement rédigée, plus aucun todo.
- [x] **fiabilisation.html** — entièrement rédigée, plus aucun todo (relue
  section par section avec Claude : formation ajoutée dans "Mes éléments de
  preuve", "Mon autocritique" et "Mon évolution" rédigés et corrigés, terme
  "rétro-ingénierie" défini, projet perso domotique/Home Assistant utilisé
  comme fil rouge pour l'évolution).
- [ ] **Précision des 5 pages terminées, comparé aux exemples de la grille**
  (`Source/Exemple skills technique*.txt`) — analyse faite le 2026-08-25 :
  mes pages sont ~20 % plus courtes en moyenne que les exemples (1125 vs
  1399 mots), l'écart se concentre sur "Mes éléments de preuve" (-24 %) et
  surtout "Mon autocritique" (-26 %). Le vrai manque n'est pas la longueur
  mais le niveau de **détail nommé** : les exemples citent systématiquement
  des ressources précises (titre de livre + auteur, nom de certification,
  fournisseur/techno exacte) dans l'autocritique et l'évolution, là où mes
  pages restent plus génériques ("je compte apprendre Symfony" sans dire
  comment/avec quelle ressource). À reprendre page par page quand j'ai les
  vraies ressources/noms à citer (pas à inventer).
- [ ] **Vrai point d'attention parmi les pages terminées** :
  `resolution-problemes.html` (-29 %) et `fiabilisation.html` (-35 %)
  restent les deux plus courtes du lot technique — cohérent avec l'analyse
  du 25/08 (manque de détail nommé dans "Mes éléments de preuve" et "Mon
  autocritique"), pas résolu depuis. À traiter en priorité si je reprends
  les pages techniques.
- [x] **Liens inline vers la réalisation dans "Mes éléments de preuve"** —
  la grille demande que chaque anecdote soit reliée à la réalisation dont
  elle est tirée, pas seulement listée dans le bloc générique "Réalisations
  liées" en bas de page. **Fait sur les 10 pages** (vérifié 2026-09-02 par
  grep sur tout `pages/skills/` : chaque page a bien un lien vers la/les
  réalisation(s) concernée(s) dans la section "Mes éléments de preuve", pas
  seulement dans le bloc générique de fin). L'item précédent qui affirmait
  qu'il manquait sur 5 pages était basé sur une note obsolète du 26/08, pas
  sur l'état réel du code.
- [ ] **Checklist de conformité grille par page de compétence** — une fois
  une page rédigée (ou avant de la considérer "terminée"), vérifier
  explicitement les 5 exigences précises de la grille plutôt que seulement
  comparer sa longueur/profondeur aux exemples : (1) définition
  contextualisée **et** reliée à une actualité sourcée, (2) 1 à 3 anecdotes
  complètes (contexte → action → résultat/valeur ajoutée → lien vers la
  réalisation), (3) autocritique (niveau de maîtrise, priorité dans le
  profil, vitesse d'acquisition, recul/conseil), (4) évolution avec
  formation ou ressource nommée (pas une intention générique), (5) liens
  vers les réalisations concernées en fin d'article. À appliquer aussi
  rétroactivement sur les 5 pages déjà "terminées" (`api.html`, `web.html`,
  `automatisation.html`, `resolution-problemes.html`, `fiabilisation.html`),
  qui n'ont pour l'instant été vérifiées que par comparaison de longueur
  avec les exemples (`Source/Exemple skills technique*.txt`), pas
  ligne à ligne contre les 5 points de la grille ci-dessus.
- [x] `communication.html` — **entièrement rédigée (2026-08-26), plus aucun
  todo.** Todos approfondis le 26/08 sur le modèle de `Source/Exemple skills
  Humain 3.txt`, puis contenu écrit en plusieurs allers-retours : "Ma
  définition" (l'utilisateur, actualité Silkhom + déduction perso), "Mes
  éléments de preuve" (l'utilisateur, 3 anecdotes GLS/Géodis/Gedim sourcées
  dans les journaux d'alternance), "Mon autocritique" (l'utilisateur), "Mon
  évolution" (rédigée par Claude à la demande explicite de l'utilisateur,
  même dérogation que sur api.html : fil rouge projet domotique + 2
  ressources nommées et vérifiées, OpenClassrooms "Communiquez en utilisant
  les outils numériques" et la certification tekom "Technical Communicator
  – Professional Level"). Fautes corrigées à chaque étape. **6 des 10 pages
  de compétence sont maintenant terminées** (api, web, automatisation,
  resolution-problemes, fiabilisation, communication).
- [x] `autonomie.html` — **entièrement rédigée (vérifié 2026-09-02), plus
  aucun todo.** Actualité Solal Digital (l'autonomie comme marqueur du
  développeur senior), 2 anecdotes (hypercare GLS après MEP, reprise seule du
  code Géodis), autocritique et évolution complètes (ressource nommée :
  parcours OpenClassrooms "Architecte Logiciel"). ⚠️ Point de cohérence
  repéré le 2026-09-02, pas corrigé : le bloc "Réalisations liées" en bas de
  page liste les 5 réalisations alors que seules réalisation-1 et
  réalisation-2 ont une anecdote dans "Mes éléments de preuve" — toutes les
  autres pages de compétence limitent ce bloc aux réalisations réellement
  couvertes par une anecdote. Aussi repéré : "le cahier de test" (singulier)
  incohérent avec "cahier de tests" utilisé ailleurs sur le site, et un
  enchaînement "car" en autocritique ("j'ai pu... prendre des décisions sur
  la logique du code, car les décisions métier nécessitent des échanges avec
  les utilisateurs") qui semble à contre-sens de l'argument d'autonomie
  développé juste avant — à relire.
- [x] `adaptabilite.html` — **entièrement rédigée (2026-08-26), plus aucun
  todo.** Actualité Futura-Sciences ("l'adaptabilité, compétence n°1 des
  recruteurs en 2026"), 3 anecdotes journal (Géodis, macro Prévisions de
  consommation, macro Garanties d'Origine), autocritique et évolution
  complètes (ressource nommée : OpenClassrooms "Apprenez à apprendre").
  Répétition du connecteur "car" repérée et corrigée (voir Finalisation).
- [x] `rigueur.html` — **entièrement rédigée (2026-08-26), plus aucun todo.**
  Actualité Developpez.com (l'étude "bugs 100x plus chers en prod" n'existe
  pas — écho direct à "vérifier plutôt que supposer"), 2 anecdotes (Garanties
  d'Origine, GLS), autocritique et évolution complètes (ressource nommée :
  certification ISTQB Certified Tester Foundation Level). 3ᵉ piste
  d'anecdote (Gedim) proposée mais non utilisée, restée optionnelle.
- [x] `gestion-projet.html` — **entièrement rédigée (vérifié 2026-09-02),
  plus aucun todo — la 10ᵉ et dernière page de compétence est terminée, les
  10/10 sont maintenant faites.** Actualité EFE Management (la gestion de
  projet comme travail surtout relationnel plutôt que technique, contrastée
  avec son propre contexte en autonomie sans équipe à manager), 3 anecdotes
  (GLS, Géodis, Garanties d'Origine), autocritique et évolution complètes
  (ressource nommée : Google Project Management Professional Certificate,
  Coursera).
- [ ] **Schéma comparatif des 10 compétences** (10 pts) — remplacer ou
  compléter la grille de cartes par une visualisation du niveau relatif de
  chaque compétence (ex. barres ou radar), accessible depuis le menu
  principal.
- [x] **Chaque compétence accessible par un sous-menu navbar** — fait
  2026-09-02 : le dropdown "Compétences" de la navbar a maintenant un
  sous-menu imbriqué (flyout au survol) sous "Compétences techniques" et
  "Compétences humaines", listant directement les 10 pages individuelles.
  Nouvelles règles CSS `.dropdown-submenu` et `.dropdown-menu .dropdown`
  dans `style.css` (flyout à droite, cascade `:hover > ` pour ne pas ouvrir
  les deux sous-menus en même temps), gérées aussi en version mobile
  (empilées avec indentation au lieu du flyout).
- [x] Relire la formulation des 10 descriptions courtes (fait, corrigées
  avec toi sur `skills.html`)
- [x] **Navigation circulaire, sens réalisation → compétences** — fait
  2026-09-02 : les 5 pages de réalisation ont maintenant des liens vers les
  compétences spécifiques mobilisées (au lieu des 2 boutons génériques
  technique/humaine), construits à partir des "Réalisations liées" déjà
  déclarées côté compétences. Détail dans l'entrée de la grille officielle en
  haut du fichier.

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

- [ ] **Fournir le vrai CV (PDF) et une vraie photo pro** — deux assets
  encore manquants, à ne pas inventer :
  - [ ] CV réel à déposer dans `assets/documents/cv.pdf` (le bouton
    "Télécharger mon CV" sur l'accueil pointe déjà vers ce chemin, il est
    juste cassé faute de fichier)
  - [ ] Photo professionnelle dédiée pour `pages/presentation.html`
    (au-delà de la photo navbar déjà en place)
- [ ] Vérifier tous les liens (dont le bouton "Télécharger mon CV" cassé sur l'accueil)
- [ ] Vérifier toutes les images
- [ ] Optimiser les tailles d'images
- [x] **Ajouter favicon** — fait 2026-09-02 : monogramme "CM" en SVG
  (`assets/images/svg/favicon.svg`, dégradé bleu/violet/cyan), référencé sur
  les 31 pages.
- [x] **Sitemap/robots.txt/données structurées** (au-delà de la checklist
  initiale) — `sitemap.xml` (31 URLs) et `robots.txt` à la racine, schéma
  JSON-LD `Person` (schema.org) sur `index.html` pour un résultat enrichi
  potentiel dans Google.
- [x] **Ajouter les balises meta (description, Open Graph/réseaux sociaux) sur
  chaque page** — fait 2026-09-02 : les 31 pages ont maintenant une
  `meta description` propre, les balises Open Graph (`og:title`,
  `og:description`, `og:image`, `og:url`, `og:type`) et une Twitter Card
  (`summary`). `og:image`/`twitter:image` pointent vers
  `assets/images/profile.jpg`, `og:url` vers le déploiement Netlify. Les
  descriptions des réalisations/compétences liées à EDF restent génériques
  (pas de mention "EDF"), cohérent avec l'anonymisation déjà en place pour
  Romus.
- [ ] Ajouter README
- [ ] Faire une relecture complète (Présentation et Parcours pas encore repassées avec la même rigueur que les réalisations)
- [ ] **Vérifier les répétitions de mots/connecteurs** dans les pages déjà
  rédigées — repéré le 2026-08-26 sur `adaptabilite.html` : usage répété de
  "car" comme connecteur de cause (7+ fois dans une page), qui donne un
  style mécanique. Corrigé sur cette page (varié avec "puisque", "dans la
  mesure où", "parce que", "étant donné que") ; à vérifier aussi sur les
  autres pages de compétence et les réalisations, qui n'ont pas eu cette
  passe.
- [ ] **Vérifier la cohérence logique/factuelle des informations données**,
  pas seulement l'orthographe — repéré le 2026-08-26 sur `rigueur.html` :
  la phrase d'actualité disait "la rigueur est importante car un bug coûte
  100 fois plus cher en production", puis la phrase suivante expliquait que
  ce chiffre n'était justement pas vérifié — un "car" qui s'appuyait sur
  l'affirmation même qu'on démentait juste après. Corrigé sur cette page,
  mais à vérifier sur les autres pages de compétence et les réalisations,
  qui n'ont pas eu cette relecture-là (les enchaînements "car"/"donc" entre
  deux phrases doivent rester logiquement valides, pas juste grammaticalement
  corrects).
  - [x] **Même défaut repéré le 2026-08-26 sur `gestion-projet.html`, "Ma
    définition"** — corrigé : la conclusion faisait reposer l'importance du
    chef de projet sur ses connaissances "techniques", contredisant la
    prémisse ("surtout relationnel plutôt que technique"). Reformulée en
    "connaissances d'organisation et de ses équipes", alignée avec la
    prémisse relationnelle.
- [ ] Relecture par réalisation, 3 points à chaque fois : (1) orthographe/grammaire/syntaxe, (2) mots-clés importants mis en gras dans les paragraphes (pas seulement les titres d'étapes et de définitions — convention encore à appliquer partout), (3) vérifier qu'aucune définition utile ne manque pour les termes techniques utilisés sur la page
  - [x] Réalisation 1 (API GLS) — orthographe faite, gras/définitions à vérifier
  - [x] Réalisation 2 (API Géodis) — orthographe faite, gras/définitions à vérifier
  - [x] Réalisation 3 (Gedim) — orthographe faite, gras/définitions à vérifier
  - [x] Réalisation 4 (Garanties d'Origine EDF) — orthographe faite, gras/définitions à vérifier
  - [x] Réalisation 5 (Prévisions de consommation EDF) — orthographe faite
- [ ] Déployer le portfolio
