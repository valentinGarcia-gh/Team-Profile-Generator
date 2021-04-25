const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email,github);
        this.github = github;
        super.role = "Engineer";
    }
// Get method
    getGithub()
    {
        return this.github;
    }
}

module.exports = Engineer;