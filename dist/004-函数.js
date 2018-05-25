/*
*   函数类型
* */
//为函数添加类型
function add(x, y) {
    return x + y;
}
add(1, 2);
// 书写完整的函数类型
var add2 = function (a, b) {
    return a + b;
};
add2(2, 3);
/*
*  函数默认值
* */
/*function add3(a:number,b?:number){
    return a+b
}*/
function add3(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
}
add3(1);
function add4(a, b) {
    return a + b;
}
add4(1, 2);
add4("a", "b");
function add5(a, b) {
    return a + b;
}
add5(1, 2);
add5("a", "b");
var arr4 = [1, 2, 4];
var arr5 = [1, 2, 4];
