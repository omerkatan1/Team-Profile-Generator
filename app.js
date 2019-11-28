const inquirer = require('inquirer');
const Employee = require('./lib/employee-class');
const Intern = require('./lib/intern-class');
const Engineer = require('./lib/engineer-class');
const Manager = require('./lib/manager-class');


const questions = [
    {
        type: 'message',
        message: 'What is your employees name?',
        name: 'employeeName'
    },
    {
        type: 'message',
        message: 'Input your employees ID:',
        name: 'employeeID'
    },
    {
        type: 'message',
        message: 'What is your employees email?',
        name: 'employeeEmail'
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'What is your employee type?',
        choices: ['Intern', 'Engineer', 'Manager']
    }
]

const internQuestions = [
    {
        type: 'message',
        message: 'What is your interns school?',
        name: 'employeeSchool'
    }
]

const engineerQuestions = [
    {
        type: 'message',
        message: 'what is your engineers GitHub username?',
        name: 'employeeGitHub'
    }
]

const managerQuestions = [
    {
        type: 'message',
        message: 'What is your managers office number?',
        name: 'employeeOfficeNumber'
    }
]


inquirer.prompt(questions).then(answers => {

    const type = answers.employeeType;
    const name = answers.employeeName;
    const email = answers.employeeEmail;
    const id = answers.employeeID;

    if(type === 'Intern') {
        inquirer.prompt(internQuestions).then(internAnswers => {
            const school = internAnswers.employeeSchool;
            const test = new Intern(name, id, email, school);

            test.getSchool();
            test.getName();
            test.getId();
            test.getRole();
        });
    } else if (type === 'Engineer') {
        inquirer.prompt(engineerQuestions).then(engineerAnswers => {
            const github = engineerAnswers.employeeGitHub;
            const test2 = new Engineer(name, id, email, github);

            console.log(test2.getGithub());
            test.getName();
            test.getId();
            test.getRole();
        });
    } else if (type === 'Mangager') {
        inquirer.prompt(managerQuestions).then(managerAnswers => {

        });
    }
})