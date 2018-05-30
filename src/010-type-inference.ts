// type-inference

// window.onmousedown = function(mouseEvent: any)  {
//     console.log(mouseEvent.button)
// }



// 类型兼容性

// interface Named {
//     name: string
// }

// class Person10 {
//     name: string
// }

// let p11: Named

// p11 = new Person10()

// p11.name = "zrd"

// interface Named {
//     name: string
// }
// let x: Named
// let y = {name: "Alice", location: "seattle"}
// x = y

// // 如果x要兼容y，那么y至少需有与x相同的属性

// function greet(n: Named) {
//     console.log("hello, "+ n.name)
// }
// greet(y)

// 注意，y有个额外的location属性，但这不会引发错误。

// 比较两个函数

// let x10 = (a: number) => 0
// let y10 = () => 0

// y10 = x10
// x10 = y10

// enum Status {Ready,Waiting}
// let status1 = Status.Ready
// console.log(status1)


// enum Color1 {Red,Blue,Green}
// status1 = Color1.Green

// interface Bird {
//     fly()
//     layEggs()
// }

// interface Fish {
//     swim()
//     layEggs()
// }

// function getSmallPet(): Fish | Bird {
//     return 
// }
// let pet = getSmallPet()
// pet.layEggs()
// pet.swim()

// instanceof 类型保护

interface Padder {
    getPaddingString(): string
}
class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) {

    }
    getPaddingString() {
        return Array(this.numSpaces +1).join(" ")
    }
}

class StringPadder implements Padder {
    constructor(
        private value: string
    ) {

    }
    getPaddingString() {
        return this.value
    }
}


function getRandomPadder() {
    return Math.random() <.5?
        new SpaceRepeatingPadder(4):
        new StringPadder(" ")
}

let padder: Padder = getRandomPadder()

if(padder instanceof SpaceRepeatingPadder){
    padder
}
if(padder instanceof StringPadder) {
    padder
}
