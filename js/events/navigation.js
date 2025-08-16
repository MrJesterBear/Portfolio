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

  // sections
  const aboutSection = document.getElementById("about");
  const educationSection = document.getElementById("education");
  const projectsSection = document.getElementById("projects");

  // ! About Button
  about.addEventListener("click", () => {
    // Check what section is currently loaded.

    switch (currentSection) {
      case "ABOUT":
        // If the section is already loaded, do nothing.
        break;

      case "EDUCATION":
        // If the section is education, set the about section and destroy old content.
        educationSection.innerHTML = "";
        setAbout();
        currentSection = "ABOUT";
        configButton(education, about);
        configSections(educationSection, aboutSection);
        break;

      case "PROJECTS":
        // If the section is projects, set the about section and destroy old content.
        projectsSection.innerHTML = "";
        setAbout();
        currentSection = "ABOUT";
        configButton(projects, about);
        configSections(projectsSection, aboutSection);
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
        aboutSection.innerHTML = "";
        setEducation();
        currentSection = "EDUCATION";
        configButton(about, education);
        configSections(aboutSection, educationSection);
        break;

      case "EDUCATION":
        // If the section is already loaded, do nothing.
        break;

      case "PROJECTS":
        // If the section is projects, set the about section and destroy old content.
        projectsSection.innerHTML = "";
        setEducation();
        currentSection = "EDUCATION";
        configButton(projects, education);
        configSections(projectsSection, educationSection);
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
        aboutSection.innerHTML = "";
        setProjects();
        currentSection = "PROJECTS";
        configButton(about, projects);
        configSections(aboutSection, projectsSection);
        break;

      case "EDUCATION":
        // If the section is education, set the about section and destroy old content.
        educationSection.innerHTML = "";
        setProjects();
        currentSection = "PROJECTS";
        configButton(education, projects);
        configSections(educationSection, projectsSection);
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

/**
 * Configures the buttons for the active/inactive state.
 * @param {HTMLElement} oldButton Button that is no longer active
 * @param {HTMLElement} newButton Button that is currently active
 */
function configButton(oldButton, newButton) {
  // Toggle the new section to be active and disabled.
  newButton.classList.toggle("active");
  newButton.classList.toggle("disabled");

  // Toggle the old section to be inactive and enabled.
  oldButton.classList.toggle("active");
  oldButton.classList.toggle("disabled");
}

/**
 * Configures the border of the sections to fix a styling issue.
 * @param {HTMLElement} oldSection Section that is no longer being used
 * @param {HTMLElement} newSection Section that is currently being used
 */
function configSections(oldSection, newSection) {
  oldSection.classList.toggle("border");
  newSection.classList.toggle("border");
}
