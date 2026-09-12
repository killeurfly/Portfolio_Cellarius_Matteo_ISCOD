// Panneau de détail du schéma 3D des réalisations (pages/realisations.html).
// Le panneau ne peut pas être imbriqué dans le rail incliné en 3D : il
// hériterait de la rotation du parent et le texte apparaîtrait penché,
// illisible. Un seul panneau partagé est donc positionné en JS par rapport à
// la scène (même principe que l'info-bulle du schéma des compétences).
(function () {
  const scene = document.getElementById("real3dScene");
  const panel = document.getElementById("realClusterPanel");
  if (!scene || !panel) return;

  const clusters = Array.from(scene.querySelectorAll(".real-cluster"));

  const isTouch = window.matchMedia("(hover: none)").matches;

  function buildPanel(cluster) {
    const desc = cluster.getAttribute("data-desc") || "";
    const href = cluster.getAttribute("href") || "#";
    const tags = (cluster.getAttribute("data-tags") || "")
      .split(",")
      .filter(Boolean);

    const tagsHtml = tags.map((t) => `<span>${t}</span>`).join("");

    // Au tactile, le panneau recouvre entièrement la réalisation qui l'a
    // ouvert une fois affiché (voir pointer-events plus haut) : un second tap
    // au même endroit atteint le panneau, pas le lien d'origine, donc ce lien
    // est le seul moyen de naviguer. Au survol souris, le panneau n'est pas
    // cliquable (pointer-events: none, voir plus haut) - le modèle 3D est
    // déjà le vrai lien sous le curseur, un bouton ici serait un leurre. On
    // se contente d'une indication.
    const actionHtml = isTouch
      ? `<a class="btn primary" href="${href}">Voir la réalisation →</a>`
      : `<p class="real-panel-hint">Cliquez sur le modèle pour ouvrir la réalisation →</p>`;

    panel.innerHTML = `
      <p>${desc}</p>
      <div class="project-tags">${tagsHtml}</div>
      ${actionHtml}
    `;
  }

  function showPanel(cluster) {
    buildPanel(cluster);

    // position: fixed sur le panneau -> coordonnées directement relatives à
    // la fenêtre, aucun calcul par rapport à la scène (qui défile) n'est
    // nécessaire. Le panneau est haut (description + tags + sommaire) : le
    // placer systématiquement en dessous le faisait souvent déborder sous le
    // bas de l'écran. On choisit donc le côté (haut/bas) qui a le plus de
    // place, et on limite sa hauteur avec un scroll interne en dernier
    // recours (voir max-height en CSS).
    const clusterRect = cluster.getBoundingClientRect();
    const panelHeight = panel.offsetHeight;
    const margin = 14;

    const spaceBelow = window.innerHeight - clusterRect.bottom;
    const spaceAbove = clusterRect.top;

    // 100px protège la barre de navigation fixe en haut de l'écran quand le
    // panneau bascule au-dessus près du sommet de la fenêtre.
    const topClamp = 100;

    let top;
    if (spaceBelow >= panelHeight + margin || spaceBelow >= spaceAbove) {
      top = clusterRect.bottom + margin;
    } else {
      top = Math.max(topClamp, clusterRect.top - panelHeight - margin);
    }

    const left = clusterRect.left + clusterRect.width / 2;

    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
    panel.classList.add("visible");
  }

  function hidePanel() {
    panel.classList.remove("visible");
    clusters.forEach((c) => c.classList.remove("is-open"));
  }

  if (isTouch) {
    // Pas de survol au tactile : un tap ouvre le panneau au lieu de suivre le
    // lien directement. Le panneau, une fois ouvert, recouvre entièrement la
    // réalisation qui l'a déclenché (il est aussi large que l'écran) - un
    // second tap au même endroit atteindrait donc le panneau, pas le lien
    // d'origine. La navigation se fait via le lien "Voir la réalisation"
    // affiché dans le panneau lui-même. Un tap ailleurs referme le panneau.
    clusters.forEach((cluster) => {
      cluster.addEventListener("click", (event) => {
        event.preventDefault();
        if (cluster.classList.contains("is-open")) return;
        clusters.forEach((c) => c.classList.remove("is-open"));
        cluster.classList.add("is-open");
        showPanel(cluster);
        event.stopPropagation();
      });
    });

    document.addEventListener("click", hidePanel);
    panel.addEventListener("click", (event) => event.stopPropagation());
  } else {
    // On évite de s'appuyer sur :hover / mouseenter-mouseleave natifs : les
    // artefacts sont des formes 3D dont le rectangle englobant ne colle pas
    // exactement à leur silhouette réelle (coins morts), ce qui faisait
    // clignoter le survol en boucle. On calcule nous-mêmes, à chaque
    // mousemove, si le curseur est dans le rectangle englobant d'une
    // réalisation - une simple comparaison de coordonnées, fiable quel que
    // soit l'angle 3D.
    let activeCluster = null;

    // Les faces "dessus"/"côté" des artefacts (position:absolute) dépassent
    // légèrement du flux normal de la réalisation sans agrandir son
    // rectangle englobant calculé par le navigateur - une marge couvre ce
    // débordement au lieu de rater le survol pile sur ces faces.
    const HIT_PADDING = 16;

    function findClusterAt(x, y) {
      for (const cluster of clusters) {
        const r = cluster.getBoundingClientRect();
        if (
          x >= r.left - HIT_PADDING &&
          x <= r.right + HIT_PADDING &&
          y >= r.top - HIT_PADDING &&
          y <= r.bottom + HIT_PADDING
        ) {
          return cluster;
        }
      }
      return null;
    }

    function setActiveCluster(cluster) {
      if (cluster === activeCluster) return;

      if (activeCluster) activeCluster.classList.remove("is-open");

      activeCluster = cluster;

      if (activeCluster) {
        activeCluster.classList.add("is-open");
        showPanel(activeCluster);
      } else {
        hidePanel();
      }
    }

    scene.addEventListener("mousemove", (event) => {
      setActiveCluster(findClusterAt(event.clientX, event.clientY));
    });

    scene.addEventListener("mouseleave", () => setActiveCluster(null));

    clusters.forEach((cluster) => {
      cluster.addEventListener("focus", () => setActiveCluster(cluster));
      cluster.addEventListener("blur", () => setActiveCluster(null));
    });
  }
})();
