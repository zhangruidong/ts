// class Greeter {
//     greeting: string
//     constructor(message: string) {
//         this.greeting = message
//     }
//     greet() {
//         return "Hello," + this.greeting
//     }
// }

// class Greeter1 {
//     constructor(public greeting: string) {
//     }
//     greet() {
//         return "Hello," + this.greeting
//     }
// }
// let greeter5 = new Greeter("zrd")


// // 继承

// class Animal {
//     move(distanceInMeters: number = 0) {
//         console.log('====================================');
//         console.log(`Animal moved ${distanceInMeters}m`);
//         console.log('====================================');
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log('====================================');
//         console.log("Woof! Woof!");
//         console.log('====================================');
//     }
// }

// const dog = new Dog()
// dog.bark()
// dog.move(10)
// dog.bark()

// 这个例子展示了最基本的继承：类从基类中继承了属性和方法。这里，Dog是一个派生类，它派生自Animal基类，通过extends关键字。
// 派生类通常被称做子类，基类通常被称作超类

// class Animal {
//     name: string
//     constructor(theName: string) {
//         this.name = theName
//     }
//     move(distanceInMeters: number = 0) {
//         console.log('====================================');
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//         console.log('====================================');
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) {
//         super(name)
//     }
//     move(distanceInMeters:number = 5) {
//         console.log('====================================');
//         console.log("Slithering…");
//         console.log('====================================');
//         super.move(distanceInMeters)
//     }
// }

// 公共，私有与受保护的修饰符
//  在TypeScript里，成员都默认为public

// class Animal {
//     private name: string
//     public constructor(theName: string) {
//         this.name = theName
//     }
//     public move(distanceInMeters: number = 0) {
//         console.log('====================================');
//         console.log(`${this.name} moved ${distanceInMeters}`);
//         console.log('====================================');
//     }
// }
// let animal = new Animal("cat");
// console.log('====================================');
// console.log(animal.name);
// console.log('====================================');

// class Animal {
//     private name: string
//     constructor(theName: string) {
//         this.name = theName
//     }
// }

// class Rhino extends Animal {
//     constructor(theName: string) {
//         super(theName)
//     }
// }

// class Employee {
//     private name: string
//     constructor(theName: string) {
//         this.name = theName
//     }
// }


// let animal = new Animal("Goat")
// let rhino = new Rhino("rhi")
// let employee = new Employee("Bob")

// animal = rhino
// animal = employee


// 理解protected
// protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问。


// class Person {
//     protected name: string;
//     constructor(name: string) { this.name = name; }
// }

// class Employee extends Person {
//     private department: string;

//     constructor(name: string, department: string) {
//         super(name)
//         this.department = department;
//     }

//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }

// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误

// 存取器
// let passcode = "secret passcode"
// class Employee {
//     private _fullName: string
//     get fullName(): string {
//         return this._fullName
//     }
//     set fullName(newName: string) {
//         if(passcode && passcode == "secret passcode") {
//             this._fullName = newName
//         }
//         else {
//             console.log("Error: Unauthorized update of employee")
//         }
//     }
// }

// let employee = new Employee()
// employee.fullName = "zrd"
// console.log('====================================');
// console.log(employee.fullName);
// console.log('====================================');


// 静态属性  static
class Grid {
    static origin = {
        x:0,
        y:0
    }
}

class Grid1 extends Grid {

}



