const fs = require("fs");
const inquirer = require("inquirer");

function init()
inquirer
.prompt([
    {
        type: "input",
        message: "What is your name?", 
        name: "employeename",
    }, 
    {
        type: "input", 
        message: "Enter you ID number.",
        name: "id", 
    }, 
    {
        type: "input", 
        message: "What is your email address?",
        name: "email",
    },
    {
        // Only ask the manager 
        type: "input", 
        message: "What is your office number?",
        name: "number",
    },
    {
        type: "list", 
        message: "What is your role?",
        name: "role",
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        //only ask Engineer 
        type: "input", 
        message: "What is your GitHub?",
        name: "github",
    },
    {
        // only ask Intern
        type: "input", 
        message: "What school do you attend?",
        name: "school",
    },

])
.then ((answers))