/*function greeter(person:string){
    return "hello," + person;
}
var user:string = "zhangruidong";*/

/*
* 接口
* */
interface Person{
    firstName: string,
    lastName: string
}
function greeter(person:Person){
    return "hello,"+person.firstName+" "+person.lastName
}
var user = {
    firstName:"zhang",
    lastName: "ruidong"
}
console.log(greeter(user) );
