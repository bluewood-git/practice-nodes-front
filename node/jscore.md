# 基础的js概念
## 函数声明和调用
1. 声明
    function example(param,){ return x};
2. 调用
    - 直接调用 example(1);
    - 事件调用 ```<a onclick = "example(1);"></a>```
  
**注意事项**：
  1. 函数的形参列表个数，与实参列表的个数，没有实际关联关系。如果实参列表的个数<形参列表，则未赋值的形参，将为undefined。
  2. 在函数中使用var声明的变量为局部变量，只能在函数内部访问，不用var声明的变量为全部变量，在函数外面也能访问。
  3. 函数的声明与函数的调用没用先后之分。即，可以在声明函数前，调用函数。

## 匿名函数
    window.onload = function(){ console.log();}
    var func=function(){  }
    func();
## 自执行函数
这样的函数无需调用，会立即执行
1. 使用!开头， !function(){alert(123);}();
2. 使用()包围  (function(){}());  或者 (function(){})();
## 遍历json对象数组
使用 **for in** 循环可以遍历对象和数组 对于有规律的对象可以直接对象.属性名获取：
```javascript
// 遍历 json对象数组
for (const key in data) {
    if (data.hasOwnProperty(key)) {
        const element = data[key];
        console.log(element.name +" "+ element["age"] + " "+ element.address);//属性的两种取值方式
        //遍历json对象 []中可以放变量 如下 此法也是遍历不规律数组的方法
        for (const ikey in element) {
            console.log("element == "+ikey+":"+element[ikey]);
        }
    }
}
```
for of遍历 与for in 类似

ES5中foreach 遍历，主要用来遍历数组

    data.forEach(element => {
                    console.log("for each:  "+element.name);    
                });
**变量定义**
- var
  
  var 最熟悉的变量定义关键字，定义的变量可以修改，如果不初始化则输出undefined
- const

    const定义的变量不可修改，且定义时必须初始化,否则报错。（类似常量）
- let
  
  let 是块级作用域，函数内部使用let定义后，对外部函数无影响