class Person {
    username:string;
    constructor(name:string){
        this.username = name;
    }
}
let p1 = new Person("zrd")
console.log(p1);

class Animal {
    username:string;
    constructor(name:string){
        this.username = name
    }
    say():void {
        console.log('你好')
    }
}
class Cat extends Animal {

}
let cat = new Cat("招财")
console.log(cat);
cat.say()