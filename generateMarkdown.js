// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg';
  } else if (license === 'GNU') {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else if (license === 'Apache') {
    return "a href=(https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''
  } else if (license === 'MIT') {
    return 'https://mit-license.org'
  } else if (license === 'GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  } else if (license === 'Apache') {
    return 'https://apache.org/licenses/'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let title = `## License \n  `
  
  if (license) {
    let licenseBody = title + `This repository uses the ${license} license found at ${renderLicenseLink(license)}.`;
    return licenseBody;
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.repo_name}

  ${renderLicenseBadge(data.pick_license)}

  ## Table of Contents
  -> [Description](#description)
  -> [User Story](#User Story)
  -> [How to Use](#How to Use)
  -> [Purpose](#Purpose)
  -> [Collaborators](#Collaborators)
  -> [License](#License)
  -> [Contact](#Contact)
  
  ## Description
  ${data.repo_desc}
  
  ## User Story
  ${data.repo_userstory}
  
  ## How to Use
  ${data.repo_use}
  
  ## Purpose
  ${data.repo_problem}

  ## Collaborators
  ${data.collab}
  
  ${renderLicenseSection(data.pick_license)}

  ## Contact
  GitHub: https://github.com/${data.contact}
  `
}

module.exports = generateMarkdown;
