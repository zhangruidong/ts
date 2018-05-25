/*
* TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组；
*
* 第二种方式是使用数组泛型，Array<元素类型>
* */
var list = [1, 2, 3, 4];
var list2 = [3, 4, 5, 6];
/* 元组  Tuple */
var x1 = ["zzz", 1111];
// let x2: [string,number] = ["zzz",1111,2222]
x1[3] = "world";
console.log('====================================');
console.log(x1);
console.log('====================================');
