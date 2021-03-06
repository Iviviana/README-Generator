// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license) {
//     return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)`;
//   } else {
//     return '';
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return ` 
  <h1>${answers.title}</h1>

  ## Description
  ${answers.description}

  ## Table of Contents
  -[Description](#description)

  -[Installation](#installation)

  -[Usage](#usage)

  -[Credits](#credit)
  
  -[License](#license)

  ## Installation
  ${answers.installation} ${answers.github}

  ## Usage
  ${answers.usage}

  ## Credits
  ${answers.credit}

  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-blue) <br />
  This application is covered by the ${answers.license} license.


`;
}

module.exports = generateMarkdown;
