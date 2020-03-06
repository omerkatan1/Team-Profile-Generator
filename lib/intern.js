const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, school) {
        super(name, id);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;