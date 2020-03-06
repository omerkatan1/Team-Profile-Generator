const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, officeNumber) {
        super(name, id);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Manager;