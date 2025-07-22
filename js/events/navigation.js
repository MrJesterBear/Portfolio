// Saul Maylin
// 22/07/2025
// v1
// Event Handlers for Navigation.

// Determine what section is loaded.
let currentSection = "ABOUT";

document.addEventListener("DOMContentLoaded", () => {
  // ! About Button
  const about = document.getElementById("aboutButton");

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
        break;

      case "PROJECTS":
        // If the section is projects, set the about section and destroy old content.
        document.getElementById("projects").innerHTML = "";
        setAbout();
        currentSection = "ABOUT";
        break;

      default:
        console.error("Unknown section: " + currentSection);
        break;
    }
  });

  // ! Education Button
  const education = document.getElementById("educationButton");

  education.addEventListener("click", () => {
    // Check what section is currently loaded.

    switch (currentSection) {
      case "ABOUT":
        // If the section is about, set the about section and destroy old content.
        document.getElementById("about").innerHTML = "";
        setEducation();
        currentSection = "EDUCATION";
        break;

      case "EDUCATION":
        // If the section is already loaded, do nothing.
        break;

      case "PROJECTS":
        // If the section is projects, set the about section and destroy old content.
        document.getElementById("projects").innerHTML = "";
        setEducation();
        currentSection = "EDUCATION";
        break;

      default:
        console.error("Unknown section: " + currentSection);
        break;
    }
  });

  // ! Projects Button
  const projects = document.getElementById("projectsButton");

  projects.addEventListener("click", () => {
    // Check what section is currently loaded.

    switch (currentSection) {
      case "ABOUT":
        // If the section is about, set the about section and destroy old content.
        document.getElementById("about").innerHTML = "";
        setProjects();
        currentSection = "PROJECTS";
        break;

      case "EDUCATION":
        // If the section is education, set the about section and destroy old content.
        document.getElementById("education").innerHTML = "";
        setProjects();
        currentSection = "PROJECTS";
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
