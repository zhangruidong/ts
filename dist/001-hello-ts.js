/*function greeter(person:string){
    return "hello," + person;
}
var user:string = "zhangruidong";*/
function greeter(person) {
    return "hello," + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "zhang",
    lastName: "ruidong"
};
console.log(greeter(user));
