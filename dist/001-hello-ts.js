/*function greeter(person:string){
    return "hello," + person;
}
var user:string = "zhangruidong";*/
function greeter1(person) {
    return "hello," + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "zhang",
    lastName: "ruidong"
};
