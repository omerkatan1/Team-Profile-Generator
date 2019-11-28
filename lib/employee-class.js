class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`Employee Name: ${this.name}`);
    }
    getId() {
        console.log(`Employee ID: ${this.id}`);
    }
    getEmail() {
        console.log(`Employee Email: ${this.email}`);
    }
    getRole() {
        console.log(`Employee role: ${this.title}`);
    }
}

module.exports = Employee;