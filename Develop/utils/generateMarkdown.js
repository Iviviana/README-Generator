// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` <h1>${answers.title}</h1>

  ## Description
  ${answers.description}

  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Credits](#credit)
  -[License](#license)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

`;
}

module.exports = generateMarkdown;
