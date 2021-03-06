/*
* enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
*
* 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：
* */

enum keys {
    left=37,up,right,down
}

enum Color {Red,Green,Blue}
let c: Color = Color.Green;


// Void
function warnUser(): void {
    alert("This is my warning message")
}


// Null和Undefined
// 默认情况下null和undefined是所有类型的子类型。


// 类型断言
let someValue: any = "this is a string"
// let stringLength: number = (<string>someValue).length
let stringLength: number = (someValue as string).length
console.log('====================================');
console.log(stringLength);
console.log('====================================');