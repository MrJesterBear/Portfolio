// Saul Maylin
// 23/07/2025
// v1.1
// Event Handlers for Navigation.

// Determine what section is loaded.
let currentSection = "ABOUT";

document.addEventListener("DOMContentLoaded", () => {
  // buttons
  const about = document.getElementById("aboutButton");
  const education = document.getElementById("educationButton");
  const projects = document.getElementById("projectsButton");

  // ! About Button
  about.addEventListener("click", () => {
    // Check what section is currently loaded.

    switch (currentSection) {
      case "ABOUT":
        // If the section is already loaded, do nothing.
        break;

      case "EDUCATION":
        // If the section is education, set the about section and destroy old content.
        document.getElementById("education").innerHTML = "";
        setAbout();
        currentSection = "ABOUT";
        configButton(education, about);
        break;

      case "PROJECTS":
        // If the section is projects, set the about section and destroy old content.
        document.getElementById("projects").innerHTML = "";
        setAbout();
        currentSection = "ABOUT";
        configButton(projects, about);
        break;

      default:
        console.error("Unknown section: " + currentSection);
        break;
    }
  });

  // ! Education Button
  education.addEventListener("click", () => {
    // Check what section is currently loaded.

    switch (currentSection) {
      case "ABOUT":
        // If the section is about, set the about section and destroy old content.
        document.getElementById("about").innerHTML = "";
        setEducation();
        currentSection = "EDUCATION";
        configButton(about, education);
        break;

      case "EDUCATION":
        // If the section is already loaded, do nothing.
        break;

      case "PROJECTS":
        // If the section is projects, set the about section and destroy old content.
        document.getElementById("projects").innerHTML = "";
        setEducation();
        currentSection = "EDUCATION";
        configButton(projects, education);
        break;

      default:
        console.error("Unknown section: " + currentSection);
        break;
    }
  });

  // ! Projects Button

  projects.addEventListener("click", () => {
    // Check what section is currently loaded.

    switch (currentSection) {
      case "ABOUT":
        // If the section is about, set the about section and destroy old content.
        document.getElementById("about").innerHTML = "";
        setProjects();
        currentSection = "PROJECTS";
        configButton(about, projects);
        break;

      case "EDUCATION":
        // If the section is education, set the about section and destroy old content.
        document.getElementById("education").innerHTML = "";
        setProjects();
        currentSection = "PROJECTS";
        configButton(education, projects);
        break;

      case "PROJECTS":
        // If the section is already loaded, do nothing.
        break;

      default:
        console.error("Unknown section: " + currentSection);
        break;
    }
  });
});

// Enables / Disables Buttons
function configButton(oldSection, newSection) {
        // Toggle the new section to be active and disabled.
        newSection.classList.toggle("active");
        newSection.classList.toggle("disabled");

        // Toggle the old section to be inactive and enabled.
        oldSection.classList.toggle("active");
        oldSection.classList.toggle("disabled");

}
