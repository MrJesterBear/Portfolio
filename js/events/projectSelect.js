// Saul Maylin
// 12/08/2025
// v1
// Section HTML for projects..

class projectSelect {
  project;
  container;

  constructor(project) {
    this.project = project;
    this.container = document.getElementById("project-area");
  }

  /**
   * Fetches the project HTML file based on the project name.
   * @returns {html} The HTML content of the project.
   */
  getProject() {
    fetch("/assets/html/projects/" + this.project + ".html") // Selects project HTML file
      .then(function (response) {
        if (response.ok) {
          // if a response is gotten, check it's okay and then return the file data.
          return response.text;
        }
        throw response;
      });
  }

  /**
   * Renders the project data into the container.
   * @param {html} data Data from the project HTML file.
   */
  renderProject(data) {
    this.container.innerHTML = data; // Set the container's inner HTML to the project data.
  }
}
