interface Person7 {
    firstName: string;
    lastName: string;
}

function greeter(person: Person7) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let jane = { firstName: "Jane", lastName: "User" };

console.log('====================================');
console.log(greeter(jane));
console.log('====================================');
