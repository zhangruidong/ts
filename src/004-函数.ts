/*
*   函数类型
* */
//为函数添加类型
function add(x:number,y:number):number{
    return x+y
}
add(1,2)
// 书写完整的函数类型
let add2:(a:number,b:number) =>number =
    function (a,b) {
        return a+b;
    }
add2(2,3)

/*
*  函数默认值
* */
/*function add3(a:number,b?:number){
    return a+b
}*/
function add3(a:number,b:number=10):number{
    return a+b
}
add3(1)


/*
* 函数重载
* */
function add4(a:number,b:number):number;
function add4(a:string,b:string):string;
function add4(a:any,b:any):any{
    return a+b
}
add4(1,2);
add4("a","b");

/*
* 泛型
* */
function add5<T>(a:T,b:T):T;
function add5(a:any,b:any):any{
    return a+b
}
add5<number>(1,2);
add5<string>("a","b");

let arr4:number[]=[1,2,4]
let arr5:Array<number>=[1,2,4]
