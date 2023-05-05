class employee {
    constructor(name,position,salary)
    {
    this.name=name;
    this.position=position;
    this.salary=salary;
    }
    getSalary()
    {
        return this.salary;
    }
}

const employee1= new employee("kiran","developer",80000);
console.log(employee1.getSalary());

// Output: 80000