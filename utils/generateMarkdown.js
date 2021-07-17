// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  var topReadMe = `# ${answers.projectTitle}\n
  ![license](https://img.shields.io/badge/license-${answers.license}-brightgreen) 
  ## Description\n\n
  ${answers.projectInfo}\n 
  [Live Link](${answers.projectLink})\n\n`;

  var tableContents;

  if (answers.table === true) {
    tableContents = `## Table of Contents\n
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
    `;
  } else {
    tableContents = "";
  }

  endReadMe = `\n## Installation\n\n
  ${answers.installation}\n\n
  ## Usage\n\n
  ${answers.usage}\n
  ![Screenshot](${answers.screenshot})\n\n
  ## Credits\n\n
  ${answers.credits}\n
  Git Hub\n
  # [${answers.github}](https://github.com/${answers.github})\n\n 
  ## License\n\n
  This project uses the ${answers.license} license. To learn more visit [${answers.license}](https://en.wikipedia.org/wiki/${answers.license}_License)\n\n
  ## Features\n\n
  ${answers.features}\n\n
  ## Contributing\n\n
  ${answers.contributing}\n\n
  ## Tests\n\n
  ${answers.tests}\n\n 
  ## Questions\n\n
  If you have any questions you can email me at ${answers.email} or find me on Git Hub.\n
  # [${answers.github}](https://github.com/${answers.github})`;

  var completeReadme = (topReadMe += tableContents += endReadMe);

  return completeReadme;
}

module.exports = generateMarkdown;
