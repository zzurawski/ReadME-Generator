// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of the repository?',
        name: 'repo_name',
    },
    {
        type: 'input',
        message: 'Give a description of the project?',
        name: 'repo_desc',
    }, 
    {
        type: 'input',
        message: 'What is the user story?',
        name: 'repo_userstory',
    },
    {
        type: 'input',
        message: 'How does one use this program?',
        name: 'repo_use',
    },
    {
        type: 'input',
        message: 'What problem does this project solve?',
        name: 'repo_problem'
    },
    {
        type: 'input',
        message: 'List any collaborators',
        name: 'collab'
    },
    {
        type: 'confirm',
        message: 'Did you use any licenses?',
        name: 'license_ok'
    },
    {
        type: 'list',
        message: 'Which license(s) did you use for this project?',
        name: 'pick_license',
        choices: ['MIT', 'GNU', 'Apache'],
        when: ((answers) => answers.license_ok === true)
    },
    {
        type: 'input',
        message: 'What is your GitHub?',
        name: 'contact'
    }    
];

// TODO: Create a function to write README file
function writeToFile(fileName) {
    inquirer.prompt(questions)
        .then((data) => {fs.writeFileSync(fileName, generateMarkdown(data))})
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('README.md');
};

// Function call to initialize app
init();
