class person {
    constructor(name='Unknown',age=0)
    {
        this.name=name;
        this.age=age;
    }
    getDetails() {
        return `name: ${this.name}, age: ${this.age}`
    }
}

const person1 =new person("kiran",25);
console.log(person1.getDetails());

const person2 =new person();
console.log(person2.getDetails());

// Output:
// name: kiran, age: 25
// name: Unknown, age: 0