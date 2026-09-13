// Source unique des définitions affichées par les info-bulles .term (voir
// term-tooltip.js). Un même terme ne doit avoir qu'une seule définition sur
// tout le site : la modifier ici la met à jour partout où elle est utilisée.
window.TERM_DEFINITIONS = {
  "api-geodis":
    "Interface du transporteur Géodis, ajoutée au même dispatcher après sa mise en place initiale pour GLS et Schenker.",
  "api-gls":
    "Interface du transporteur GLS qui génère l'étiquette d'expédition une fois la requête redirigée vers elle par le dispatcher.",
  "api-schenker":
    "Interface du transporteur Schenker, qui partageait le même webservice que GLS avant la mise en place du dispatcher.",
  "cahier-de-test":
    "Document listant les scénarios à vérifier avant la mise en production d'un projet.",
  concatenation:
    "Opération qui assemble bout à bout plusieurs données (ici, plusieurs fichiers) pour n'en former qu'une seule.",
  "chargement-memoire":
    "Toutes les données étaient chargées en mémoire en une seule fois, ce qui devenait trop lourd avec autant de commandes à traiter d'un coup.",
  dispatcher:
    "Logique qui redirige chaque requête vers la bonne API selon le transporteur associé à l'expédition.",
  edi: "Échange de Données Informatisé : procédé d'échange de données entre deux systèmes informatiques, selon un format standardisé.",
  endpoint:
    "URL précise à laquelle une application envoie une requête pour accéder à une fonctionnalité spécifique d'une API.",
  "fetch-sql":
    "Le correctif interroge la base de données par petites requêtes SQL successives, au lieu de tout charger en mémoire en une seule fois.",
  hypercare:
    "Période de suivi renforcé juste après une mise en production, pour détecter et corriger rapidement les problèmes.",
  json: "Format de texte simple et lisible utilisé pour structurer et échanger des données entre systèmes informatiques.",
  "low-code-no-code":
    "Outil qui permet de créer des automatisations en écrivant peu (low-code) ou pas du tout (no-code) de code, via une interface visuelle.",
  microservices:
    "Architecture qui découpe une application en plusieurs petits services indépendants plutôt qu'un seul bloc monolithique.",
  ocr: "Reconnaissance optique de caractères : technologie qui extrait le texte contenu dans une image ou un document scanné.",
  "paho-mqtt":
    "Bibliothèque qui utilise le protocole MQTT, un standard léger de communication entre objets connectés (capteurs, domotique...).",
  php: "Langage de programmation exécuté côté serveur, très utilisé pour générer des pages web dynamiques.",
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
  sisr: "Option du BTS SIO orientée conception de systèmes, réseaux et infrastructure.",
  slam: "Option du BTS SIO orientée développement et conception d'applications, aussi bien web que lourdes (installées en local).",
  sql: "Langage utilisé pour interroger et manipuler les données d'une base de données.",
  webservice:
    "Service accessible sur le réseau qui permet à deux systèmes informatiques d'échanger des données automatiquement.",
};
