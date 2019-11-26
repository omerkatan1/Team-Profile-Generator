const inquirer = require('inquirer');


const questions = [
    {
        type: 'list',
        name: 'typeList',
        message: 'What is your employee type?',
        choices: ['Intern', 'Engineer', 'Manager']
    }
]