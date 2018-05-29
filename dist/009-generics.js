// function identity<T>(arg: T): T {
//     return arg
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
console.log(createInstance(Bee).keeper.hasMask); // typechecks!
