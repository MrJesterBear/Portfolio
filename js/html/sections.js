// Saul Maylin
// 22/07/2025
// v1
// Section HTML.

function setAbout() {
  // HTML for the about section and container wanted.
  const container = document.getElementById("about");

  const aboutHTML = `
                <h1 class="text-center mt-3">I am Saul Maylin.</h1>
                <p class="text-center mt-3">I am an aspiring software developer based in Scotland.</p>
            `;

  container.innerHTML = aboutHTML;
}

function setEducation() {
  const container = document.getElementById("education");

  const educationHTML = `
                <h1 class="text-center mt-3">This is a big test.</h1>
            `;

  container.innerHTML = educationHTML;
}

function setProjects() {
  const container = document.getElementById("projects");

  const projectsHTML = `
                <h1 class="text-center mt-3">This is a big test part 2.</h1>
            `;

  container.innerHTML = projectsHTML;
}
