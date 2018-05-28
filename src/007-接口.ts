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

function printLabel(labelledObj: {label: string}) {
    console.log('====================================');
    console.log(labelledObj.label);
    console.log('====================================');
}

let myObj = {size: 10, label: "Size 10 Object"}

printLabel(myObj)

// 可选属性
//  接口里的属性不全都是必须的。

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100}
    if(config.color) {
        newSquare.color = config.color
    }
    if(config.width) {
        newSquare.area = config.width*config.width
    }
    console.log(newSquare)
    return newSquare
}

let mySquare = createSquare({color: "black"})

// let mySquare1 = createSquare({coulor: "red"})

// 绕开这个检查非常简单，最简单的方式就是类型断言
let mySquare1 = createSquare({coulor: "red"} as SquareConfig)

// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

let p07: Point = {x:10, y:20}
// p07.x = 5     // error!

// 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc

mySearch = function(source: string, subString: string) {
    let result = source.search(subString)
    return result > -1
}


// 可索引的类型
interface StringArray {
    readonly [index: number]: string
}

let myArray: StringArray
myArray = ["zrd","18"]

// myArray[1] = "22"   //readonly

let myStr = myArray[1]

// 类类型

interface ClockInterface {
    currentTime: Date
    setTime(d: Date): boolean
}

class Clock implements ClockInterface {
    currentTime: Date
    setTime(d: Date) {
        return true
    }
    constructor(hour: number) {

    }
}

// 继承接口
interface Shape {
    color: string
}

interface Square extends Shape {
    sideLength: number
}

let square = <Square> {}
square.color = "blue"
square.sideLength = 10