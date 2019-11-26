const Employee = require('./employee-class');

class Intern extends Employee {

    constructor(school) {
        this.school = school;
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

const jeff = new Intern('Uw');