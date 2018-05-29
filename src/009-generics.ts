// function identity<T>(arg: T): T {
//     return arg
// }

// console.log(identity([1,2]))
// console.log(identity<number[]>([1,2]))

// function identity<T> (arg: T): T {
//     console.log(arg.length)
//     return arg
// }

// 范型类型
// interface GenericIdentityFn<T> {
//     (arg: T): T
// }

// function identity<T>(arg: T): T {
//     return arg
// }

// let myIdentity: GenericIdentityFn<number> = identity

// console.log('====================================');
// console.log(myIdentity(111));
// console.log('====================================');

// // 范型类
// class GenericNumber<T> {
//     zeroValue: T
//     add: (x: T, y: T) => T
// }
// let myGenericNumber = new GenericNumber<number>()

// myGenericNumber.zeroValue = 1
// myGenericNumber.add = function(x,y) {
//     return x+ y
// }

// 范型约束
// interface Lengthwise {
//     length: number
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length)
//     return arg
// }

// // loggingIdentity(1111)   //error
// loggingIdentity('zrd')

// 在范型里使用类类型
// 在TypeScript 使用范型创建工厂函数时，需要引用构造函数的类类型。

// function create<T>(c: {new(): T}): T {
//     return new c()
// }

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
console.log(createInstance(Bee).keeper.hasMask)  // typechecks!

