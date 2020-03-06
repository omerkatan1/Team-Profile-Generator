const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, github) {
        super(name, id);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;