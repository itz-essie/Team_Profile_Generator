const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require ("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require ("./lib/Manager");

const employees = [];

function init(){
    whatNow;
}

employeeQuestions = [
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

]

const whatNow = () =>{
    inquirer
    .prompt([
        {
            type: "list", 
            message: "What would you like to do?", 
            name: "userChoice",
            choices: ["Add manager", "Add intern", "Add engineer", "Build team profile"], 
            
        }
    ])


.then(response => {
    switch (response.userChoice){
        case "Add manager":
        addManager ();
        break;
        case "Add intern":
            addIntern ();
            break;
            case "Add engineer":
                addEngineer ();
                break;
                default:
                    buildTeamProfile();
    }
})
}

const addManager = ()=>{
    inquirer
    .prompt([
        employeeQuestions[0], 
        employeeQuestions[1], 
        employeeQuestions[2], 
        {
            // Only ask the manager 
            type: "input", 
            message: "Enter employee's office number.",
            name: "number",
        },
    ])
        .then(response => {
            whatNow();
        })
    
}

const addIntern = ()=>{
    inquirer
    .prompt([
        employeeQuestions[0], 
        employeeQuestions[1], 
        employeeQuestions[2], 
        {
            // only ask Intern
            type: "input", 
            message: "Enter school name?",
            name: "school",
        },
    ])
        .then(response => {
            whatNow();
        })
    
}

whatNow();

const addEngineer = ()=>{
    inquirer
    .prompt([
        employeeQuestions[0], 
        employeeQuestions[1], 
        employeeQuestions[2], 
        {
            //only ask Engineer 
            type: "input", 
            message: "Enter GitHub account name?",
            name: "github",
        },
    ])
        .then(response => {
            whatNow();
        })
    
}
  init();