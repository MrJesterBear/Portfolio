// Saul Maylin
// 16/08/2025
// v1.5
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
   * https://stackoverflow.com/questions/36631762/returning-html-with-fetch
   */

async getProject() {
  try {
    let response = await fetch("assets/html/projects/" + this.project + ".html"); 
    this.renderProject(await response.text())
  } catch (error) {
    console.log("Error fetching project HTML: ", error);
  }
}

  /**
   * Renders the project data into the container.
   * @param {html} data Data from the project HTML file.
   */
  renderProject(data) {
    this.container.innerHTML = data; // Set the container's inner HTML to the project data.
  }
}
