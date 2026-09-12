// Injecte le texte de définition (assets/js/term-definitions.js) dans chaque
// .term[data-term], puis gère l'affichage : survol sur desktop (pur CSS,
// géré par .term:hover .term-tooltip dans style.css), tap pour ouvrir/fermer
// sur un appareil sans souris (le survol n'existe pas au toucher) ; un tap en
// dehors referme la bulle ouverte.
(function () {
  const terms = document.querySelectorAll(".term[data-term]");
  if (!terms.length) return;

  const definitions = window.TERM_DEFINITIONS || {};

  terms.forEach((term) => {
    const key = term.getAttribute("data-term");
    const definition = definitions[key];
    if (!definition) return;
    const tooltip = document.createElement("span");
    tooltip.className = "term-tooltip";
    tooltip.textContent = definition;
    term.appendChild(tooltip);
  });

  if (!window.matchMedia("(hover: none)").matches) return;

  terms.forEach((term) => {
    term.setAttribute("tabindex", "0");
    term.addEventListener("click", (event) => {
      const isOpen = term.classList.contains("open");
      document
        .querySelectorAll(".term.open")
        .forEach((el) => el.classList.remove("open"));
      if (!isOpen) {
        term.classList.add("open");
        event.stopPropagation();
      }
    });
  });

  document.addEventListener("click", () => {
    document
      .querySelectorAll(".term.open")
      .forEach((el) => el.classList.remove("open"));
  });
})();
