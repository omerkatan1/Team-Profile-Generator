class Employee {

    constructor(name, id, role, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        function getName(){
            console.log(`Employee name: ${this.name}`);
        }
        function getID() {
            console.log(`Employee ID: ${this.id}`);
        }
        function getRole(){
            console.log(`Employee role: Employee`);
        }
        function getEmail(){
            console.log(`Employee email: ${this.email}`);
        }
    }

}