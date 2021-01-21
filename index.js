const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require ("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require ("./lib/Manager");

const Employees = [];

function init(){
    createHtml();
    addTeamMember();
}

const questions = (answers) => {}


inquirer
.prompt([
    {
        type: "input",
        message: "What is Employee's name?", 
        name: "employeename",
    }, 
    {
        type: "input", 
        message: "Enter employee ID number.",
        name: "id", 
    }, 
    {
        type: "input", 
        message: "Enter team member's email address.",
        name: "email",
    },
    {
        // Only ask the manager 
        type: "input", 
        message: "Enter employee's office number.",
        name: "number",
    },
    {
        type: "list", 
        message: "What is team member's role?",
        name: "role",
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        //only ask Engineer 
        type: "input", 
        message: "Enter GitHub account name?",
        name: "github",
    },
    {
        // only ask Intern
        type: "input", 
        message: "Enter school name?",
        name: "school",
    },

])
.then((answers) => {
    const nameOfFile = `sample.html`;
    return asyncWrite(nameOfFile, questions(answers));
  })
  .then(() => {
  })
  .catch((err) => {
  });
  function writeFile(fileName, data) {
    fs.writeFile(fileName, data);
  }
  init();