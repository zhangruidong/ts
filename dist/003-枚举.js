/*
* enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
*
* 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：
* */
var keys;
(function (keys) {
    keys[keys["left"] = 37] = "left";
    keys[keys["up"] = 38] = "up";
    keys[keys["right"] = 39] = "right";
    keys[keys["down"] = 40] = "down";
})(keys || (keys = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
