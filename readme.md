# TypeScript

> 基于js派生一门新的语言（微软），浏览器不能直接运行，需要通过ts的编译器编译成js后才能被浏览器执行。
> 安装编译器 `npm install -g typescript`
> 安装好以后，就可以使用 tsc 命令来对 ts 文件进行编译


## 数据类型

- Boolean
- String
- Number
- Null
- Undefined
- Symbol
- Object

- Array
- Tuple
- Enum
- Any
- Void
- Never

## 变量声明

和我们js一样，支持var/let/const

### 声明语法
ts 的声明语法和js不一样，ts是一个强类型语言，在声明变量/常量的时候，需要同时声明 值的类型
```typescript
let name: string = "bob";
name = "smith";
```

## angular 初体验