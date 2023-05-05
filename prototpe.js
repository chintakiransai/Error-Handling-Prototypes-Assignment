Object.prototype.printDetails = function() {
    console.log(`"Hello, student is ${this.name}"`);
}


class Student {
    constructor(name)
    {
        this.name=name;
    }
}

const student = new Student("kiran");
student.printDetails();

// Output: "Hello, student is kiran"