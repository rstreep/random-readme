// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const writeFiles = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function generateReadme(fileName, data) {
    fs.writeFile('README1.md', data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
// function will load a menu which will have questions to help write the read.me
function init() {
    inquirer
    .createPromptModule([
        {
            X
        }
    ])
    .then( answers => {
        console.log(answers);
        generateReadme(writeFile)
    })
}

// Function call to initialize app
init();
