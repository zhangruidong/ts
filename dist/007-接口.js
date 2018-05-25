function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var jane = { firstName: "Jane", lastName: "User" };
console.log('====================================');
console.log(greeter(jane));
console.log('====================================');
