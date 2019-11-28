const Employee = require('./employee-class');


class Intern extends Employee {

    constructor(name, id, email, school) {

        super(name, id, email);
        this.school = school;

    }

    getSchool() {
        console.log(`Employee school: ${this.school}`);
    }
    getRole() {
        console.log(`Employee role: Intern`);
    }
}

module.exports = Intern;