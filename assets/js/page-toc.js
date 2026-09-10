// Surligne dans le sommaire (.page-toc) le lien de la section actuellement
// visible à l'écran, pendant que l'utilisateur défile la page.
//
// Deux repères distincts sont utilisés :
// - le clic sur un lien du sommaire s'appuie sur le scroll-margin-top des
//   h2 (CSS), pour amener le titre juste sous la navbar ;
// - le suivi de lecture pendant le scroll utilise une ligne plus basse,
//   vers le tiers de l'écran, pour rester représentatif même quand
//   plusieurs sections courtes tiennent sur un seul écran.
//
// Si les dernières sections sont courtes, leur titre ne peut pas toujours
// atteindre cette ligne avant le bas réel de la page (impossible de défiler
// plus loin) : on ajoute alors dynamiquement juste assez d'espace de scroll
// en fin de page pour que ce soit toujours possible.
(function () {
  const toc = document.querySelector(".page-toc");
  if (!toc) return;

  const links = Array.from(toc.querySelectorAll('a[href^="#"]'));
  if (!links.length) return;

  const sections = links
    .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
    .filter(Boolean);

  if (!sections.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  };

  const activeLine = () => Math.max(150, window.innerHeight * 0.3);

  // Même valeur que .detail-card h2 { scroll-margin-top }, utilisée par le
  // saut natif du navigateur quand on clique un lien du sommaire. C'est
  // l'exigence la plus stricte des deux (elle demande de défiler plus loin
  // que la ligne de suivi de lecture) : c'est donc elle qui doit dimensionner
  // l'espace de scroll réservé, sinon un clic sur le dernier lien n'irait
  // pas assez loin.
  const CLICK_OFFSET = 130;

  const spacer = document.createElement("div");
  spacer.setAttribute("aria-hidden", "true");
  spacer.style.height = "0px";
  document.body.appendChild(spacer);

  const ensureScrollRoom = () => {
    spacer.style.height = "0px";

    const lastSection = sections[sections.length - 1];
    const lastTop = lastSection.getBoundingClientRect().top + window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const neededScroll = lastTop - CLICK_OFFSET;

    if (neededScroll > maxScroll) {
      spacer.style.height = `${Math.ceil(neededScroll - maxScroll)}px`;
    }
  };

  const updateActive = () => {
    const line = activeLine();
    let current = sections[0].id;

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= line) {
        current = section.id;
      } else {
        break;
      }
    }

    setActive(current);
  };

  const handleLayout = () => {
    ensureScrollRoom();
    updateActive();
  };

  window.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("resize", handleLayout);
  handleLayout();
})();
