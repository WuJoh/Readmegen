// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require ('inquirer')

const  generateMarkdown = require('./Develop/utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'GitHub Username',
        message: 'What is your GitHub Username',
        validate: nameInput => {
          if (nameInput) {
              return true;
            } else {
              console.log("Please a valid GitHub Username");
              return false;
            }
            
        }
      },
      {
        type: 'input',
        name: 'Repository',
        message: 'What is the name of your GitHub Repository?',
        validate: nameInput => {
          if (nameInput) {
              return true;
            } else {
              console.log("Please enter a valid GitHub Repository");
              return false;
            }
            
        }
      },
      {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
        validate: nameInput => {
          if (nameInput) {
              return true;
            } else {
              console.log("A valid project title is required");
              return false;
            }
            
        }
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Please write a short description of your project'
      },
      
      {
        type: 'list',
        name: 'License',
        message: 'What kind of license should your project have?',
        choices: ['None', 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3']
      },
      {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'Installation'
      },
      {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'Contributions'
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('README complete!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile("./README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
