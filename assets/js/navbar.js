fetch("/components/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;

    const menuToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Les sous-menus (Réalisations, Compétences) ne s'ouvrent qu'au survol
    // en CSS, ce qui n'existe pas au toucher : sur un appareil sans souris,
    // un premier tap ouvre le sous-menu au lieu de naviguer directement, un
    // second tap (sous-menu déjà ouvert) suit le lien normalement.
    if (window.matchMedia("(hover: none)").matches) {
      document.querySelectorAll(".dropdown > a").forEach((link) => {
        link.addEventListener("click", (event) => {
          const dropdown = link.parentElement;
          if (!dropdown.classList.contains("open")) {
            event.preventDefault();
            dropdown.parentElement
              .querySelectorAll(":scope > .dropdown.open")
              .forEach((sibling) => {
                if (sibling !== dropdown) sibling.classList.remove("open");
              });
            dropdown.classList.add("open");
          }
        });
      });
    }
  });
