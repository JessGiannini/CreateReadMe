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
  ## Description\n\n
  ${answers.projectInfo}\n 
  [Live Link](${answers.projectLink})\n\n`;

  var tableContents;

  if (answers.table === true) {
    tableContents = `## Table of Contents\n
    * [Description](#description)\n
    * [Installation](#installation)\n
    * [Usage](#usage)\n
    * [Credits](#credits)\n
    * [License](#license)\n
    * [Features](#features)\n
    * [Contributing](#contributing)\n
    * [Tests](#tests)\n
    * [Acknowledgments](#acknowledgments)\n
    `;
  } else {
    tableContents = "";
  }

  endReadMe = `## Installation\n\n
  ${answers.installation}\n\n
  ## Usage\n\n
  ${answers.usage}\n
  ![Screenshot}(${answers.screenshot})\n\n
  ## Credits\n\n
  ${answers.credits}\n
  # [${answers.gitHub}](www.github.com/${answers.gitHub})\n\n 
  ## License\n\n
  ![license](https://img.shields.io/badge/license-${answers.license}-brightgreen)\n\n
  ## Features\n\n
  ${answers.features}\n\n
  ## Contributing\n\n
  ${answers.contributing}\n\n
  ## Tests\n\n
  ${answers.tests}\n\n 
  ## Acknowledgments\n\n
  ${answers.acknowledgments}`;

  var completeReadme = (topReadMe += tableContents += endReadMe);

  return completeReadme;
}

module.exports = generateMarkdown;
