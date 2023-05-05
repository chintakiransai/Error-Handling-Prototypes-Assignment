let getPerson = (person) => {
    try {
    if(typeof person !== "object" || ! person.hasOwnProperty("name") || ! person.hasOwnProperty("age") )
    {
        throw new Error("Invalid parameter type")
    }
    else {
        const {name, age} = person;
        return `Name: ${name}, Age: ${age}`
    }
}
catch(err) {
  return err.message;
}
}

console.log(getPerson({ name: "Mithun", age: 20 }));
console.log(getPerson({ name: "Arup" }));
console.log(getPerson(["name", "Mithun"]));