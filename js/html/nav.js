// Saul Maylin
// 22/07/2025
// v1
// Nav HTML.

// Navbar Function.

export function setNav() {
  // get nav element
  const nav = document.getElementsByClassName("nav")[0];

  // Sets the nav bar! Taken from Bootstrap and reformatted to fit the site.
  // https://getbootstrap.com/docs/5.3/components/navbar/

  let navHTML =
    // Nav Container and Hamburger Menu
    '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span>' +
    "</button>" +
    '<div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">' +
    '<ul class="navbar-nav">' +

    // About
    '<li class="nav-item px-5">' +
    '<a class="nav-link border" href="#about">About</a>' +
    "</li>" +

    // Education
    '<li class="nav-item px-5">' +
    '<a class="nav-link border" href="#education">Education</a>' +
    "</li>" +

    // Projects
    '<li class="nav-item px-5">' +
    '<a class="nav-link border" href="#projects">Projects</a>' +
    "</li>";

    // Extra Link
    // '<li class="nav-item px-5">' +
    // '<a class="nav-link border" href="linkhere">wordhere</a>' +
    // "</li>";

  // close up the nav and make inner html.
  navHTML += "</ul> </div>";
  nav.innerHTML = navHTML;
}
