const Employee = require('./employee-class');

class Intern extends Employee {

    constructor(school, role) {


        super(name, id, email);
        this.school = school;
        this.email = email;
        this.id = id;
        this.role = role;
    }

    getSchool() {
        console.log(`Employee school: ${this.school}`);
    }
    getGethub() {

    }
    getRole() {
        console.log('Employee role: Intern');
    }

}

module.exports = Intern;