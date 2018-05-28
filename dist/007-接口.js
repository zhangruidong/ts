function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var jane = { firstName: "Jane", lastName: "User" };
console.log('====================================');
console.log(greeter(jane));
console.log('====================================');
function printLabel(labelledObj) {
    console.log('====================================');
    console.log(labelledObj.label);
    console.log('====================================');
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    console.log(newSquare);
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
// let mySquare1 = createSquare({coulor: "red"})
// 绕开这个检查非常简单，最简单的方式就是类型断言
var mySquare1 = createSquare({ coulor: "red" });
var p07 = { x: 10, y: 20 };
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var myArray;
myArray = ["zrd", "18"];
// myArray[1] = "22"   //readonly
var myStr = myArray[1];
var Clock = /** @class */ (function () {
    function Clock(hour) {
    }
    Clock.prototype.setTime = function (d) {
        return true;
    };
    return Clock;
}());
var square = {};
square.color = "blue";
square.sideLength = 10;
