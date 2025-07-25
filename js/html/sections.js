// Saul Maylin
// 22/07/2025
// v1.1
// Section HTML.

function setAbout() {
  // HTML for the about section and container wanted.
  const container = document.getElementById("about");

  const aboutHTML = `
                <h1 class="text-center mt-3">I am Saul Maylin.</h1>
                <p class = "text-muted text-center"> 20 | He/Him | <a href="mailto:saul@saulmaylin.com">saul@saulmaylin.com</a> </p>
                <p class="text-center mt-3">I am an aspiring software developer based in the Scottish Highlands.</p>
                  <div class= "row py-4">
                      <div class="col-md-6">
                          <p> I am currently studying BSc Computing (Software Engineering) at Inverness College UHI full time. </p>
                          <p> Through my time at College and University I have become very interested in software development in various aspects: Backend Web Development with PHP, Frontend Web Development with JavaScript and Bootstrap and Basic Applications using Java and C#. </p>
                      </div>

                      <div class ="col-md-6 text-end">
                          <p> In my spare time, I like to work on personal projects and partake in hobbies which include: </p>
                
                          <ul class="list-unstyled">
                              <li>-> Maintaining a homelab environment </li>
                              <li>-> Partaking in Dungeons & Dragons campaigns</li>
                              <li>-> Creating Software Dev based projects</li>
                              <li>-> Playing Video Games</li>
                          </ul>
                      </div>
                  </div>

                  <div class = "row py-4 text-center">
                      <p> I am always invested in current technologies, keeping up-to-date with new hardware and software. <br> I am a tinkerer at heart, configuring old desktops and servers to further broaden my understanding.</p>
                      <p> Improving is a major part of my process, and I am always looking for ways to enhance my skills and knowledge. <br> I believe this to be a key part of software development and technology as a whole and should be strived for. </p>
                      <p> It is important to be eager to learn and grow, both personally and professionally. <br> Otherwise, how do you expect to keep up with the ever-changing world of technology? </p>
                  </div>
                    
                  <div class="row py-4 text-center">
                      <a class="btn btn-primary" target='_blank' rel='noopener noreferrer' href="./assets/docs/test_pdf.pdf" role="button">Download My CV!</a>
                  </div>
            `;

  container.innerHTML = aboutHTML;
}

function setEducation() {
  const container = document.getElementById("education");

  const educationHTML = `
                <h1 class="text-center mt-3">This section is currently incomplete.</h1>
            `;

  container.innerHTML = educationHTML;
}

function setProjects() {
  const container = document.getElementById("projects");

  const projectsHTML = `
                <h1 class="text-center mt-3">This section is currently incomplete.</h1>
            `;

  container.innerHTML = projectsHTML;
}
