const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require ("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require ("./lib/Manager");

const employees = [];

function init(){
    employeeQuestions;
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
            choices: ["Add manager", "Add intern", "Add Engineer", "Build team profile"], 
            
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
                addEngineer();
                break;
                default:
                    buildTeamProfile();
    }
})
}

whatNow();

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


function addTeamMember(){

inquirer
.prompt([
    employeeQuestions[0], 
    employeeQuestions[1], 
    employeeQuestions[2], 


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
}
  init();