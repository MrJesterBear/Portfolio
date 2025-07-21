// Saul Maylin
// 22/07/2025
// v1
// Footer HTML.

export function setFooter() {
  // get footer element
  const footer = document.getElementsByClassName("footer")[0];

    // Get current year for copyright notice
    const year = new Date().getFullYear();

    // set content.
    let footerHTML = 
    "<p class='text-white'>©" + year + " Saul Maylin. All rights reserved.</p>" +
        // Github
        "<a class='text-white' href='https://github.com/MrJesterBear'><img src='./assets/logos/github.png' alt='Github Logo' width='30' height='30'></a>" +
        // LinkedIn
        "<a class='text-white' href='https://www.linkedin.com/in/saulmaylin/'><img src='./assets/logos/linkedin.png' alt='LinkedIn Logo' width='30' height='30'></a>";

  footer.innerHTML = footerHTML;
}