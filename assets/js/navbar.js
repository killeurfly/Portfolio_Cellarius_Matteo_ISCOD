fetch("/components/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;

    const menuToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });
