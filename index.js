const fs = require("fs");
const inquirer = require("inquirer");
// const validator = require("email-validator");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const buildIntern = "";
const buildManager = "";
const buildEngineer = "";
const util = require("util");
const asyncWrite = util.promisify(fs.writeFile);

const employees = [];
const buildTeamProfile = () => {
    const head = `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    <title>Team Profile Generator</title>
</head>
<body>
    <div style= "background-color: rgb(92, 11, 11); text-align: center; color: white;" class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">My Team</h1>
        </div>
      </div>`
const foot = `
</div>
</body>
</html>`
let person = ""
  employees.map(function (employee) {
    if (employee.getRole() === "Manager") {
      person += `<div class="row">
      <div class= "col-md-3">
      <div class="card" style="width: 18rem;">
                <div class="card-body" style = "background-color: rgb(6, 29, 79); color: white;">
                  <h5 class="card-title"></h5> Name: ${employee.name}</h5>
                  <p class="card-text"> <i class="fa fa-coffee" aria-hidden="true"></i> Manger</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${employee.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${employee.email}"${employee.email}</a></li>
                  <li class="list-group-item">Office Number: ${employee.officeNumber} </li>
                </ul>
                </div>
                </div>`;
    } else if (employee.getRole() === "Engineer") {
      person += `
      <div class= "col-md-3">
      <div class="card" style="width: 18rem;">
            <div class="card-body" style = "background-color: rgb(14, 67, 113); color: white;">
              <h5 class="card-title"></h5> Name: ${employee.name}</h5>
              <p class="card-text"> <i class="fas fa-glasses"></i> Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${employee.email}"${employee.email}</a></li>
              <li class="list-group-item">GitHub:<a href="https://github.com/${employee.gitHub}"target="_blank">${employee.gitHub}</a></li>
            </ul>
          </div>
          </div>`;
     } else if (employee.getRole() === "Intern") {
            person += `
                <div class= "col-md-3">
              <div class="card" style="width: 18rem;">
                  <div class="card-body" style = "background-color: rgb(140, 140, 140);">
                    <h5 class="card-title"></h5>Name: ${employee.name}</h5>
                    <p class="card-text"><i class="fas fa-glasses"></i> Intern </p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id} </li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}"${employee.email}</a></li>
                    <li class="list-group-item">School: ${employee.school}</li>
                  </ul>
                </div>
                </div>`;
    }

  });
    const fileName = "./dist/TeamProfile.html"
    const data = (head + person + foot)
        fs.writeFile(fileName, data, (error) =>
        error ? console.error(error) : console.log("Success!")
      );

};

function init() {
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
  }];

const whatNow = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "userChoice",
        choices: [
          "Add manager",
          "Add intern",
          "Add engineer",
          "Build team profile",
        ],
      },
    ])

    .then((response) => {
      switch (response.userChoice) {
        case "Add manager":
          addManager();
          break;
        case "Add intern":
          addIntern();
          break;
        case "Add engineer":
          addEngineer();
          break;
        default:
          buildTeamProfile();
      }
    });
};

const addManager = () => {
  inquirer
    .prompt([
      employeeQuestions[0],
      employeeQuestions[1],
      employeeQuestions[2],
      {
        // Only ask the manager
        type: "input",
        message: "Enter employee's office number.",
        name: "officeNumber",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.employeename,
        response.id,
        response.email,
        response.officeNumber
      );
      employees.push(manager);
      whatNow();
    });
};

const addIntern = () => {
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
    .then((response) => {
      const intern = new Intern(
        response.employeename,
        response.id,
        response.email,
        response.school
      );
      employees.push(intern);
      whatNow();
    });
};

whatNow();

const addEngineer = () => {
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
    .then((response) => {
      const engineer = new Engineer(
        response.employeename,
        response.id,
        response.email,
        response.github
      );
      employees.push(engineer);
      whatNow();
    })
  }
init();
