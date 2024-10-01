// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const licenseBadges = {
    'MIT': '![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'Apache 2.0': '![Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    'BSD 3-Clause': '![BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
  };

  return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const links = {
    'MIT': '[MIT](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)',
    'BSD 3-Clause': '[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)',
  };

  return links[license] || '';

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const link = renderLicenseLink(license);

  const licenseSection = `${link}`;

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n${renderLicenseBadge(data.license)}

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Tests](#tests)
5. [Contributing](#contributing)
6. [Questions](#questions)
7. [License](#license)

## Description

${data.desc}

## Installation

${data.install}

## Usage

${data.usage}
    
## Tests
    
${data.test}

## Contributing

${data.cont}\n\n

## Questions

https://github.com/${data.github}\n\n
For additional questions, please contact me at ${data.email}.

## License

${renderLicenseSection(data.license)}

`;
}

export default generateMarkdown;
