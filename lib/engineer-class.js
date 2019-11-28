const Employee = require('./employee-class');

class Engineer extends Employee {

    constructor(name, id, email, github) {
        
        super(name, id, email);
        this.github = github;
    }

    getGethub() {
        
    }
}

module.exports = Engineer;