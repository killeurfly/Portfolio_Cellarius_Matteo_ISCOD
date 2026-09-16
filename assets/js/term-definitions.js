// Source unique des définitions affichées par les info-bulles .term (voir
// term-tooltip.js). Un même terme ne doit avoir qu'une seule définition sur
// tout le site : la modifier ici la met à jour partout où elle est utilisée.
window.TERM_DEFINITIONS = {
  "agile-scrum":
    "Méthodes de gestion de projet qui découpent le travail en courtes itérations pour livrer et ajuster le projet plus régulièrement, plutôt que tout planifier à l'avance.",
  ants: "Agence Nationale des Titres Sécurisés : organisme public français qui délivre les documents d'identité sécurisés (carte d'identité, passeport, permis de conduire...).",
  api: "Application Programming Interface : passerelle qui permet à deux programmes informatiques d'échanger des données ou des fonctionnalités.",
  "api-geodis":
    "Interface du transporteur Géodis, ajoutée au même dispatcher après sa mise en place initiale pour GLS et Schenker.",
  "api-gls":
    "Interface du transporteur GLS qui génère l'étiquette d'expédition une fois la requête redirigée vers elle par le dispatcher.",
  "api-schenker":
    "Interface du transporteur Schenker, qui partageait le même webservice que GLS avant la mise en place du dispatcher.",
  "b-to-b":
    "Business to Business : activité commerciale entre entreprises, par opposition à la vente directe aux particuliers.",
  bibliotheque:
    "Regroupement de fonctions déjà écrites que le code peut réutiliser sans avoir à les réécrire.",
  but: "Bachelor Universitaire de Technologie, diplôme de niveau Bac+3 préparé en 3 ans.",
  "cahier-de-test":
    "Document listant les scénarios à vérifier avant la mise en production d'un projet.",
  css: "Langage qui définit l'apparence visuelle d'une page web (couleurs, mise en page, polices...), en complément du HTML qui en structure le contenu.",
  concatenation:
    "Opération qui assemble bout à bout plusieurs données (ici, plusieurs fichiers) pour n'en former qu'une seule.",
  "chargement-memoire":
    "Toutes les données étaient chargées en mémoire en une seule fois, ce qui devenait trop lourd avec autant de commandes à traiter d'un coup.",
  dispatcher:
    "Logique qui redirige chaque requête vers la bonne API selon le transporteur associé à l'expédition.",
  documentation:
    "Ensemble des informations techniques (fonctionnement, fonctionnalités, formats de données...) fournies par les créateurs d'un outil ou d'un service pour en permettre l'utilisation.",
  domotique:
    "Ensemble des technologies (capteurs, automatismes, objets connectés...) qui permettent de contrôler et d'automatiser les équipements d'un logement (chauffage, éclairage, volets...).",
  edi: "Échange de Données Informatisé : procédé d'échange de données entre deux systèmes informatiques, selon un format standardisé.",
  endpoint:
    "URL précise à laquelle une application envoie une requête pour accéder à une fonctionnalité spécifique d'une API.",
  erp: "Enterprise Resource Planning : logiciel de gestion intégré qui centralise les différentes fonctions d'une entreprise (stocks, comptabilité, production...).",
  "fetch-sql":
    "Le correctif interroge la base de données par petites requêtes SQL successives, au lieu de tout charger en mémoire en une seule fois.",
  html: "Langage qui structure le contenu des pages web (titres, paragraphes, images, liens...).",
  "html5":
    "Dernière version du langage HTML, qui inclut nativement des lecteurs pour certains formats (vidéo, PDF...) sans outil supplémentaire.",
  http: "Protocole standard utilisé pour échanger des données sur le web entre un client (navigateur, application) et un serveur.",
  hypercare:
    "Période de suivi renforcé juste après une mise en production, pour détecter et corriger rapidement les problèmes.",
  iut: "Institut Universitaire de Technologie : établissement d'enseignement supérieur qui prépare notamment aux BUT.",
  javascript:
    "Langage de programmation qui rend les pages web interactives, exécuté directement dans le navigateur de l'utilisateur.",
  json: "Format de texte simple et lisible utilisé pour structurer et échanger des données entre systèmes informatiques.",
  "low-code-no-code":
    "Outil qui permet de créer des automatisations en écrivant peu (low-code) ou pas du tout (no-code) de code, via une interface visuelle.",
  macro:
    "Série d'instructions écrites en VBA qui permet d'automatiser une tâche répétitive, souvent dans Excel ou Outlook.",
  microservices:
    "Architecture qui découpe une application en plusieurs petits services indépendants plutôt qu'un seul bloc monolithique.",
  ocr: "Reconnaissance optique de caractères : technologie qui extrait le texte contenu dans une image ou un document scanné.",
  "open-source":
    "Se dit d'un logiciel dont le code source est public et librement réutilisable, généralement développé et maintenu par une communauté.",
  "openapi-swagger":
    "Norme qui décrit de façon standardisée le fonctionnement d'une API (ses fonctionnalités, les données attendues et renvoyées), pour que d'autres développeurs puissent l'utiliser facilement.",
  "paho-mqtt":
    "Bibliothèque qui utilise le protocole MQTT, un standard léger de communication entre objets connectés (capteurs, domotique...).",
  php: "Langage de programmation exécuté côté serveur, très utilisé pour générer des pages web dynamiques.",
  python:
    "Langage de programmation généraliste, réputé pour sa simplicité de lecture, utilisé aussi bien pour l'automatisation que pour le développement d'applications.",
  "processus-metier":
    "Suite d'activités et de tâches réalisées par les équipes d'une entreprise pour accomplir un objectif métier (traiter une commande, gérer un stock...), indépendamment de l'outil informatique utilisé.",
  "requete-commande":
    "Requête envoyée par l'ERP Navision, dont le fichier contient l'identifiant du transporteur - le dispatcher le lit directement, sans avoir besoin d'interroger une base de données.",
  "requete-impression":
    "Le clic sur le bouton d'impression dans l'ERP Navision, qui déclenche l'appel vers le webservice partagé par GLS et Schenker.",
  routes:
    "Chemins d'URL qui définissent, dans une application web, quelle page ou quelle fonctionnalité s'affiche pour chaque adresse demandée.",
  sandbox:
    "Environnement de test fourni par le transporteur, qui reproduit les conditions réelles de production sans toucher aux vraies données.",
  scalable:
    "Capable de gérer une charge croissante (plus de données, plus d'utilisateurs) sans perdre en performance.",
  sisr: "Solutions d'Infrastructure, Systèmes et Réseaux : option du BTS SIO orientée conception de systèmes, réseaux et infrastructure.",
  slam: "Solutions Logicielles et Applications Métiers : option du BTS SIO orientée développement et conception d'applications, aussi bien web que lourdes (installées en local).",
  "soft-skills":
    "Compétences comportementales et relationnelles (communication, travail d'équipe, adaptabilité...), par opposition aux compétences techniques.",
  sql: "Langage utilisé pour interroger et manipuler les données d'une base de données.",
  stmg: "Sciences et Technologies du Management et de la Gestion : baccalauréat technologique orienté vers l'économie, la gestion et le management.",
  tekom:
    "Association allemande de communication technique, qui délivre des certifications professionnelles reconnues en Europe dans ce domaine.",
  vba: "Visual Basic for Applications : langage de programmation intégré à Excel, utilisé pour créer des macros qui automatisent des tâches bureautiques.",
  webservice:
    "Service accessible sur le réseau qui permet à deux systèmes informatiques d'échanger des données facilement.",
  xml: "Format de texte utilisé pour structurer et échanger des données entre systèmes informatiques, plus verbeux que le JSON.",
};
