const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email,officeNumber);
        this.officeNumber = officeNumber;
        super.role = "Manager";
    }

// Get method
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;