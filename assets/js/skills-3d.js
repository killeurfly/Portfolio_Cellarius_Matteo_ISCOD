// Schéma comparatif des compétences (pages/skills.html) : sur un appareil
// avec souris, la scène démarre de face (aplatie) et ne bascule en 3D
// isométrique qu'au survol, proportionnellement à la position de la souris.
// Le socle CSS (rotateX/rotateY de base, isométrique fixe) reste la valeur de
// repli sur un appareil tactile, qui n'a pas de survol pour révéler l'effet.
//
// La détection "survol d'une tour" ne s'appuie PAS sur :hover / event.target
// natifs : une tour est une forme 3D (faces avant/dessus/côté transformées),
// et sa boîte englobante rectangulaire contient des zones mortes (coins non
// couverts par la forme réelle). Y hésiter entre "sur la tour" / "à côté"
// faisait osciller l'inclinaison de la scène en boucle - flagrant sur les
// tours hautes, où un petit pivot déplace beaucoup leur sommet. On calcule
// donc nous-mêmes, à chaque mousemove, si le curseur est dans le rectangle
// englobant d'une tour, et on fige l'inclinaison tant que c'est le cas.
(function () {
  const scene = document.getElementById("skills3dScene");
  const stage = document.getElementById("skills3dStage");
  const tooltip = document.getElementById("skills3dTooltip");
  if (!scene || !stage) return;

  if (window.matchMedia("(hover: none)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const MAX_X = -28;
  const MAX_Y = -32;
  const FLAT = "rotateX(0deg) rotateY(0deg)";

  stage.style.transform = FLAT;

  const towers = Array.from(scene.querySelectorAll(".skill-tower"));
  let activeTower = null;

  function findTowerAt(x, y) {
    for (const tower of towers) {
      const r = tower.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) {
        return tower;
      }
    }
    return null;
  }

  function showTooltip(tower) {
    if (!tooltip) return;
    const desc = tower.getAttribute("data-desc");
    if (!desc) return;

    tooltip.textContent = desc;

    const sceneRect = scene.getBoundingClientRect();
    const towerRect = tower.getBoundingClientRect();

    const left =
      towerRect.left - sceneRect.left + scene.scrollLeft + towerRect.width / 2;
    const top = towerRect.top - sceneRect.top - 10;

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.classList.add("visible");
  }

  function hideTooltip() {
    if (!tooltip) return;
    tooltip.classList.remove("visible");
  }

  function setActiveTower(tower) {
    if (tower === activeTower) return;

    if (activeTower) {
      activeTower.classList.remove("is-active");
    }

    activeTower = tower;

    if (activeTower) {
      activeTower.classList.add("is-active");
      showTooltip(activeTower);
    } else {
      hideTooltip();
    }
  }

  scene.addEventListener("mousemove", (event) => {
    const hovered = findTowerAt(event.clientX, event.clientY);

    if (hovered) {
      setActiveTower(hovered);
      return;
    }

    setActiveTower(null);

    // La zone de référence est volontairement plus grande que la scène
    // visible : le curseur doit s'en approcher franchement du bord pour
    // atteindre l'inclinaison maximale, ce qui adoucit la transition au lieu
    // de basculer brutalement dès qu'on s'approche du bord réel.
    const REFERENCE_SCALE = 1.8;
    const rect = scene.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const nx = (event.clientX - cx) / (rect.width * REFERENCE_SCALE);
    const ny = (event.clientY - cy) / (rect.height * REFERENCE_SCALE);

    const rotY = nx * MAX_Y * 2;
    const rotX = ny * MAX_X * 2;

    stage.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });

  scene.addEventListener("mouseleave", () => {
    setActiveTower(null);
    stage.style.transform = FLAT;
  });

  towers.forEach((tower) => {
    tower.addEventListener("focus", () => setActiveTower(tower));
    tower.addEventListener("blur", () => setActiveTower(null));
  });
})();
