// Affiche la définition d'un terme (.term > .term-tooltip) au survol sur
// desktop. Sur un appareil sans souris, un tap ouvre/ferme la bulle (le
// survol n'existe pas au toucher) ; un tap en dehors referme la bulle
// ouverte.
(function () {
  const terms = document.querySelectorAll(".term");
  if (!terms.length) return;

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
