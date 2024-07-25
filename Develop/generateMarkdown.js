// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![License](https://img.shields.io/badge/license-${license}-green)`;
    }
    return '';
  }
  
  // Function to return the license link
  function renderLicenseLink(license) {
    if (license !== 'None') {
      return `[License](#license)`;
    }
    return '';
  }
  
  // Function to return the license section of README
  function renderLicenseSection(license) {
    if (license !== 'None') {
      return `## License
  This project is licensed under the ${license} license.`;
    }
    return '';
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - ${renderLicenseLink(data.license)}
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  If you have any questions, please contact me at [${data.email}](mailto:${data.email}). You can also find more of my work at [${data.github}](https://github.com/${data.github}).
  `;
  }
  
  module.exports = generateMarkdown;
  