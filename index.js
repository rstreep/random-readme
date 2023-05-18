// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const writeReadme = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ['What is your projects title?', 'What is a description of your project?', 'What are the steps to install your project?', 'How do you use your project?', 'What are the credits of your project?', 'What are some tests for your project?', 'What license does your project use?', 'What is your github username?', 'What is your contact email?'];

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
            type: 'input',
            message: 'What is your projects title?',
            name: 'Question1'
        },
        {
            type: 'input',
            message: 'What is a description of your project?',
            name: 'Question2'
        },
        {
            type: 'input',
            message: 'What are the steps to install your project?',
            name: 'Question3'
        },
        {
            type: 'input',
            message: 'How do you use your project?',
            name: 'Question4'
        },
        {
            type: 'input',
            message: 'What are the credits of your project?',
            name: 'Question5'
        },
        {
            type: 'input',
            message: 'What are some tests for your project?',
            name: 'Question6'
        },
        {
            type: 'list',
            message: 'What license does your project use?',
            name: 'Question7',
            choices: [
                {
                    name: 'Apache License 2.0',
                    value: 'Apache License 2.0'
                },
                {
                    name: 'GNU General Public License v3.0',
                    value: 'GNU General Public License v3.0'
                },
                {
                    name: 'MIT License',
                    value: 'MIT license'
                },
                {
                    name: 'Eclipse Public License',
                    value: 'Eclipse Public License'
                },
                {
                    name: 'Mozilla Public License',
                    value: 'Mozilla Public License'
                },
                {
                    name: 'The Unilicense',
                    value: 'The Unilicense'
                }
            ]
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'Question8'
        },
        {
            type: 'input',
            message: 'What is your contact email?',
            name: 'Question9'
        }
    ])
    .then( answers => {
        console.log(answers);
        generateReadme(writeReadme.)
    })
}

// Function call to initialize app
init();
