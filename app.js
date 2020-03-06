const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

employeeHolder = [];

function runApp() {

    inquirer.prompt([
        {
            name: 'employeeType',
            type: 'list',
            message: 'Choose a type of employee you would like to add:',
            choices: ['Intern', 'Engineer', 'Manager']
        }
    ]).then(function (answer) {
        switch (answer.employeeType) {
            case 'Intern':
                promptIntern();
                break;

            case 'Engineer':
                promptEngineer();
                break;

            case 'Manager':
                promptManager();
                break;
        }
    })


    function promptIntern() {
        inquirer.prompt([
            {
                name: 'Name',
                type: 'input',
                message: 'What is your interns name?'
            },
            {
                name: 'id',
                type: 'input',
                message: 'What is your interns ID number?'
            },
            {
                name: 'School',
                type: 'input',
                message: 'what school did your intern go to?'
            }
        ]).then(function (answer) {
            const newIntern = new Intern(answer.Name.toLowerCase(), answer.id, answer.School);
            employeeHolder.push(newIntern);
            addOrQuit();
        });
    }

    function promptEngineer() {
        inquirer.prompt([
            {
                name: 'Name',
                type: 'input',
                message: 'What is your engineers name?'
            },
            {
                name: 'id',
                type: 'input',
                message: 'What is your engineers ID number?'
            },
            {
                name: 'github',
                type: 'input',
                message: 'What is your engineers github?'
            }
        ]).then(function (answer) {
            const newEngineer = new Engineer(answer.Name.toLowerCase(), answer.id, answer.github);
            employeeHolder.push(newEngineer);
            addOrQuit();
        });
    }

    function promptManager() {
        inquirer.prompt([
            {
                name: 'Name',
                type: 'input',
                message: 'What is your managers name?'
            },
            {
                name: 'id',
                type: 'input',
                message: 'What is your managers ID number?'
            },
            {
                name: 'officeNumber',
                type: 'input',
                message: 'what is your managers office number?'
            }
        ]).then(function (answer) {
            const newManager = new Manager(answer.Name.toLowerCase(), answer.id, answer.officeNumber);
            employeeHolder.push(newManager);
            addOrQuit();
        });
    }


    function addOrQuit() {
        inquirer.prompt({
            name: 'addOrQuit',
            type: 'list',
            message: 'Would you like to add another employee or start generating the Template?',
            choices: ['Add', 'Generate']
        }).then(function (answer) {
            switch (answer.addOrQuit) {
                case "Add":
                    runApp();
                    break;

                case "Generate":
                    generate();
                    break;
            }
        })
    }

    function generate() {
        for (var i = 0; i < employeeHolder.length; i++) {
            try {
            var role = employeeHolder[i].getRole();
            var name = employeeHolder[i].name;
            var roleOption;

            switch (role) {
                case 'Intern':
                    roleOption = employeeHolder[i].getSchool();
                    break;
                
                case 'Engineer':
                    roleOption = employeeHolder[i].getGithub();
                    break;

                case 'Manager':
                    roleOption = employeeHolder[i].getOfficeNumber();
                    break;
            }

            console.log(role);
            console.log(name);
            console.log(roleOption);
        } catch(error) {
            console.log(error);
        }

        }
    }
}

runApp();