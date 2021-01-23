const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require ("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require ("./lib/Manager");

const employees = [];
const buildTeamProfile = ()=>{
    employees.map(function(employee){
        `
        <div class="card" style="width: 18rem;">
            <div class="card-body" style = "background-color: rgb(140, 140, 140);">
              <h5 class="card-title"></h5>Name: ${employee.name}</h5>
              <p class="card-text"> <i class="fa fa-coffee" aria-hidden="true"></i> Manger</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: </li>
              <li class="list-group-item">Email: </li>
              <li class="list-group-item">Office Number: </li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
          </div>`
    })
    

}

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
            const employee = new Manager(response.employeename, response.id, response.email, response.number)
            employees.push(employee)
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
           const intern = new Intern(response.employeename, response.id, response.email, response.school)
        employees.push(intern)
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
            const engineer = new Engineer(response.employeename, response.id, response.email, response.github)
            employees.push(engineer);
            whatNow();
        })
 
    
}
  init();