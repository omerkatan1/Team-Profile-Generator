const inquirer = require('inquirer');


const questions = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'What is your employee type?',
        choices: ['Intern', 'Engineer', 'Manager']
    },
    {
        type: 'message',
        message: 'What is your employees email?',
        name: 'email'
    },
    {
        type: 'message',
        message: 'Input your employees ID:',
        name: 'id'
    }
]



inquirer.prompt(questions).then(answers => {
    console.log(answers.employeeType);
    console.log(answers.email);
    console.log(answers.id);
})