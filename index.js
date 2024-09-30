// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [
  'What is the title of the project?',
  'What does your project do?',
  'How do I install it?',
  'How do I use your project?',
  'Who has contributed to this project?',
  'Can you provide any test instructions?',
  'Which license would you like to use?',
  'What is your GitHub username?',
  'What is your email address?',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log('File created!');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'desc',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'install',
    },
    {
      type: 'input',
      message: questions[3],
      name: 'usage',
    },
    {
      type: 'input',
      message: questions[4],
      name: 'cont',
    },
    {
      type: 'input',
      message: questions[5],
      name: 'test',
    },
    {
      type: 'list',
      message: questions[6],
      name: 'license',
      choices: ['MIT', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      message: questions[7],
      name: 'github',
    },
    {
      type: 'input',
      message: questions[8],
      name: 'email',
    },
  ])
  .then((data) => {
    const genMarkdwn = generateMarkdown(data);
    writeToFile('README.md', genMarkdwn);
  });
}

// Function call to initialize app
init();