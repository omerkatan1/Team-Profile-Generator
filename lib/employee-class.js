class Employee {

    constructor(name, id, role, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    getName(){
        console.log(`Employee name: ${this.name}`);
    }
    getID() {
        console.log(`Employee ID: ${this.id}`);
    }
    getRole(){
        console.log(`Employee role: Employee`);
    }
    getEmail(){
        console.log(`Employee email: ${this.email}`);
    }
}