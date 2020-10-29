Javascript Learning Path
=====

- 熟悉DOM底层API属性和方法
- 重点把事件研究透彻，以更好的应对面试
- 可以简单封装一个自己的库，不过最后写MVC程序时也要封装，也可以后面再做
- 使用chrome工具可以很方便地查看DOM结构，CSSDOM渲染的style，DOM绑定的事件回调函数，DOM的属性继承等。
- 整理一个结构图，而且使用自己的记忆总结，这样的好处是不至于黑瞎子掰苞米，学过的很快就忘记了。不过切记很详细。结构清晰就好。
- **看完就忘记，学习效率等于0%，时间浪费率100%，所以不要着急追求速度。定期回顾加深记忆。以防做无用功。就像我之前一个月看了本nodejs书，一个月看了本Typescript的书，现在忘的精光，几乎什么都不记得了。白白浪费了两个月。**
- **选择合适的书籍很重要，我当时就是选择了一本nodejs烂书，那本垃圾书看完了一点提升没有，还不如看官方文档，像我现在看的Javascript教程，既有文档又有练习，加上总结回看记忆深刻，如果没有好的选择，不如看官方文档。**
- 记住了但是不懂得应用，知识利用率只有25%，所以只有真正运用起来才算理解了。有时你看懂了也不一定是真懂，直到自己写出代码才能确认是不是真的懂了。
- 可以选择性的看一些知识点，尤其是一些临界知识，花同样的时间可以获得最大的提升，以前经常犯的错误就是每次都从头开始看重复的知识，往往看了一段疲倦了就放弃了，导致一直在开头那一点知识，包括笔记本记的笔记也是，基本记了几页这个笔记本就没再用过。
- 计划没有变化快，所以我现在都不列计划，以前列了计划也不一定按时完成，不如把列计划的时间花在执行上，每天根据现有进度持续执行。比空头计划要有价值。
- 我现在存在的问题是知识总结了之后，长时间不使用就会忘记，虽然可以脱离框架做开发了，但是明显项目经验还不够丰富，一个是之前的项目毕竟难度不是很大。我现在想提升一个level需要更多的训练，但是工作中要想针对性的训练还是比较难的。

参考资料
---

- [DOM & Basic Knowledge]https://zh.javascript.info/
- [DOM]https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
- [ES6]https://babeljs.io/docs/en/learn
- [MVC]http://todomvc.com/

JavaScript Core
---


What is DOM?
---

DOM是HTML document的访问接口，它赋予了我们通过使用javascript访问和操作DOM对象的能力。
HTML DOM是一个树结构，有几种不同的节点类型，我们平时最常用到的就是下面这几种:

- ELEMENT_NODE 元素节点 值 1
- TEXT_NODE 文本节点 值 3
- COMMENT_NODE 注释节点 值 8
- ATTRIBUTE_NODE 属性节点 值 2
- DOCUMENT_NODE 文档节点 值 9


DOM Browser Implement 
---
Object
  - Window
    - Navigator
  - EventTarget
    - Node
      - Element
      - Document
        - HTMLElement
          - HTMLBODYElement


知识点总结
---
- JavaScript Core
  - An Introduction
  - Javascript Fundamentals
  - Code quality
  - Object: the basics
    - Objects
      - 理解对象
        - 把对象想象成存放文件的橱柜，文件按照他们的名字key来排列，这样我们就很容易根据文件名来找到，添加，或者删除一个文件了。
      - 对象的存储的键值对
        - 对象的key名是string类型，即使是数字和符号也都是以string的形式存储的。
        - 属性的键必须是字符串或者Symbol符号
        - 值可以是任何类型
      - 获取对象的属性值
        - 点符号 `object.property`
        - 方括号 `object['property']` 方括号中可以使用变量 `object[variableKey]`，有时我们需要从变量中计算对象的属性名
      - 对象操作
        - 删除属性 `delete object.property`
        - 检查属性是否存在 `'key' in object`
        - 遍历对象 `for(let key in object)` 循环
      - 对象是根据引用来赋值的，在变量中存储不是对象的值，而是对象的引用，也就是内存地址，所以赋值变量时只是复制了指针，而且多个引用操作都作用于同一个对象。当两个引用指向同一个对象的时候他们相等，`objectA === objectB`
      - 对象的深度copy需要处理对象属性值是对象的情况，所以需要使用递归判断进行遍历copy，或者使用lodash的`cloneDeep(object)`,对于简单对象的浅copy可以使用`let clone = Object.assign({}, object)`用要复制的对象和空对象merge, 这个方法也可以用来合并多个对象，key相同的前面的值会被后面的覆盖 `Object.assign(dest[, src1, src2, src3...])`。
      - 对象属性名排序问题
        - 如果对象的属性名是一个可以转换成整数的string number，那么在循环中遍历输出对象key的时候是按照数字从小到大得顺序的。
      - 常量对象可以修改，因为变量存储的是对象的内存地址，对象内部的值如果修改并不影响。
        - 例子
        ```
        const user = {
            name: "John"
        };
        user.age = 25; // (*)
        alert(user.age); // 25
        ```
      - 属性名和变量名相同时可以简写
        - 例子
        ```
        function makeUser(name, age) {
            return {
                name, // 与 name: name 相同
                age   // 与 age: age 相同
                // ...
            };
        }
        ```
    - Garbage collection
      - 理解垃圾回收的关键是理解什么是可达性，只有不可达的对象才会被垃圾回收器处理
        - 可达值是那些以某种方式可访问或可用的值，它们保证存储在内存中。
        - 基本可达值，不能被释放
          - 全局变量
          - 当前函数的局部变量和参数
          - 嵌套调用时，当前调用链上所有函数的变量和参数
        - 如果一个值可以通过引用或者引用链从根值访问到，那么认为这个值可达。
        - 如果一个对象对外引用或者几个对象相互引用，只要对象不能通过全局变量根可达，他们都是孤立数据，都会被垃圾回收器回收
      - 垃圾回收的算法是 mark and sweep 标记清除法，所有unreachable的对象都会被清除
    - Symbol type
      - 对象的key值只能是String类型或者Symbol类型
      - Symbol表示唯一标识符，它具有唯一性，当它并不是String类型，类似于一个全局的uuid指针
        - 语法
        ```
        let id = Symbol("id");

        let user = {
            name: "John",
            [id]: 123 // 不仅仅是 "id：123"
        };
        ```
      - 应用场景
        - 隐藏对象属性，如果我们需要添加一个属于自己独立库的属性，而不想与其他库冲突，那么我们可以使用Symbol作为属性key，它不会出现在for...in循环中，也不会被直接访问到。
        - Javascript有很多系统内置Symbol，例如Symbol.iterator,Symbol.toPrimitive，我们可以用来改变一些内置行为
      - 全局Symbol
        - 为了在全局注册表里创建或者读取Symbol我们可以用Symbol.for(key)方法按名称返回一个symbol
        ```
        // 从全局注册表中读取
        let id = Symbol.for("id"); // 如果该 Symbol 不存在，则创建它

        // 再次读取
        let idAgain = Symbol.for("id");

        // 相同的 Symbol
        alert( id === idAgain ); // true
        ```
        - 反向调用，通过symbol查找它的name
        ```
        let sym = Symbol.for("name");
        let sym2 = Symbol.for("id");

        // 从 symbol 中获取 name
        alert( Symbol.keyFor(sym) ); // name
        alert( Symbol.keyFor(sym2) ); // id       
        ```
    - Object mothods, "this"
      - 存储在对象中的function被称为方法，对象执行方法`object.doSomething();`方法可以将对象引用为this
      - this是运行时求值，注意绑定this的指向
        - 函数声明使用的this只有等到调用时才会有值。我们要理解这一点才能避免this调用时指向错误的对象。
        - `object.method()`这样的调用，.返回的不是一个函数,而是一个包含指向对象引用this的特殊引用类型，this总是指向object,与`func = object.method`这种传递函数引用的方式不同，这个表达式在传递过程会丢失特殊引用类型，从而失去this的值
      - 箭头函数没有this，箭头函数内部访问的都是来自外部的this
      ```
        let user = {
            firstName: "Ilya",
            sayHi() {
                let arrow = () => alert(this.firstName);
                arrow();
            }
        };
        user.sayHi(); // Ilya

      ```
    - Object to primitive conversion
      - 对象到原始值的转换，是由内置函数和操作符自动调用的。这些函数使用一个原始值作为返回值。
      ```
        let user = {
            name: "John",
            money: 1000,

            [Symbol.toPrimitive](hint) {
                alert(`hint: ${hint}`);
                return hint == "string" ? `{name: "${this.name}"}` : this.money;
            }
        };

        // 转换演示：
        alert(user); // hint: string -> {name: "John"}
        alert(+user); // hint: number -> 1000
        alert(user + 500); // hint: default -> 1500
      ```
      - 它有三种类型
        - string 比如alert和其他字符串转换
        - number 比如数学计算
        - default 少数操作 通常与number相同
      - 通常的转换算法
        - 调用`object[Symbol.toPrimitive](hint)`
        - 否则如果暗示是 "string"
            尝试 obj.toString() 和 obj.valueOf()，无论哪个存在。
        - 否则，如果暗示 "number" 或者 "default"
            尝试 obj.valueOf() 和 obj.toString()，无论哪个存在。
        在实践中，为了记录或调试目的，仅实现 obj.toString() 作为“全捕获"方法通常就够了，这样所有转换都能返回一种“人类可读”的对象表达形式。
    - Constructor, operator "new"
      - 构造函数可以用来创建多个类似的对象，Javascript提供了很多内置对象的构造函数例如 Date,Set,Map等
      - 构造函数本质上也是普通的函数，不过我们通常注意两点
        - 首字母大写
        - 只能用new操作符来执行，不然就成了普通函数了
      - new加构造函数的操作符做了什么
        - 创建一个空对象
        - 把函数的this作用于指向这个对象，并执行函数
        - 把对象的__proto__指向函数的prototype
        - 返回这个对象
      - 如果一个构造函数里return了一个对象，返回的不是this，而是return的对象。
        ```
        function BigUser() {
            this.name = "John";
            return { name: "Godzilla" };  // <-- returns 一个 object
        }
        alert( new BigUser().name );  // 哇哦，得到了对象，name 属性值为 Godzilla ^^
        ```
  - Data types
    - Method of primitives
      - 数据类型
        - 基本类型 6种
          - String
          - Boolean
          - Number
          - undefined
          - null
          - Symbol
        - 对象类型
          - 能存储多个值作为属性
          - Object
          - Function
          - Array
          - Date
          - RegExp
          - Map/Set
        - 对象比基本类型需要更多的额外资源来支持运作，因为基本类型虽然说本质上也是对象，但是经过Javascrit引擎特殊优化。
      - 基本类型访问时特殊转换
        - 基本类型仍然是原始数据，提供单个值，当访问String/Number/Boolean/Symbol时的属性和方法时，创建一个特殊的临时包装对象，提供额外的功能，运行后销毁。
        - 不推荐使用new 构造函数的方式创建基本类型，会产生一些额外的问题，比如创建过程中产生类型转换。例如`let number = new Number('123'); //string 123 will be converted to a number.`
        - null/undefined没有任何方法
    - Numbers
      - 缩写比较大的数字
        - 整数
          - number + e + 0的数量
            `1 billion = 1000000000 = 1e9 = 1 * 1000 000 000(9个0)`
            `1230000 = 1.23e6 = 1.23 * 1000 000(6个0)`
        - 小数
          - number + e + '-' + 0的数量
            `1 ms = 0.001s = 1e-3 = 1 * 0.001(1/1000) 3个0`
            `0.00000123 = 1.23e-6 = 1.23 * 0.000001(1/1000000) 6个0`
      - 16进制，2进制和8进制数字
        - 0xFF //16进制的255
        - 0b11111111 //8进制的255
      - 进制转换num.toString(base)
        - 返回指定进制base的数字num字符串，base范围是2-36
          - 16进制 0-9 A-F
          - 2进制 0或1
          `alert( 123456..toString(36) ); // 2n9c`
        - 调用方法的两个.，因为javascript语法解析器会把第一个.当成小数的一部分，所以会导致调用失败
          - 等同于`(123456).toString(36)`
      - 四舍五入
        - Math.floor 下舍入 3.1->3 -1.1->-2
        - Math.ceil 上舍入 3.1->4 -1.1->-1
        - Math.round 四舍五入 3.1->3 3.6->4  -1.1->-1
        - Math.trunc 删除小数点不舍入，IE不支持可以自己用正则来实现
        - num.toFixed(小数的位数四舍五入) 
          - `(12.36).toFixed(1)//12.4` 
          - `(12.34).toFixed(1)//12.3`
      - 浮点数计算精度问题
        - 对于小数的计算结果我们要相当谨慎，否则结果可能会因为精度问题出乎我们的意料。
          `alert( 0.1 + 0.2 == 0.3 ); // false`
        - 0.1 就是把 1 除以 10 1/10，即十分之一。在十进制数字系统中，这些数字很容易表示。将它比作三分之一：1/3。它变成了无尽的分数 0.33333(...)所以，按这种用 10 划分可以保证在十进制系统中运行良好，但用 3 划分不是。
        `alert( 0.1.toFixed(20) ); // 0.10000000000000000555`
        - 解决方案
          - 将小数结果使用toFixed进行四舍五入
          ```
          let sum = 0.1 + 0.2;
          alert( sum.toFixed(2) ); // 0.30
          ```
          - 通过乘法先转换为整数，再通过除法还原
          ```
          alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
          ```
      - 数字检测isFinite(number/string) and isNaN(number)
        - isFinite(value) 将其参数转换为数字，如果是常规数字，则返回 true，而不是 NaN / Infinity / -Infinity： ，常用于检测字符串是否是一个常规数字
          ```
            alert( isFinite("15") ); // true
            alert( isFinite("str") ); // false, because a special value: NaN
            alert( isFinite(Infinity) ); // false, because a special value: Infinity
          ```
        - isNaN(value) 将其参数转换为数字，然后测试它是否为 NaN：
          ```
            alert( isNaN(NaN) ); // true
            alert( isNaN("str") ); // true          
          ```
        - 所有数字函数（包括 isFinite）中的空字符串或空格字符串均被视为 0
      - parseInt(string, radix) and parseFloat(string) 转换出来的是10进制整数这里并不适用于其他进制的转换
        - parseInt(string, radix) radix是进制的位数
          - 使用加号 + 或 Number() 的数字转换是严格的，但是我们有时需要从字符串中提取一个数字出来，这就是这个方法的作用，如果无法返回数字，则会返回NaN
          ```
            alert( parseInt('100px') ); // 100
            alert( parseFloat('12.5em') ); // 12.5
          ```
          - parseFloat(string)
            - 用于提取一个有效的浮点数
            ```
            alert( parseInt('12.3') ); // 12, only the integer part is returned
            alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
            ```
      - 常用其他数学函数
        - Math.random() 返回从 0 到 1 的随机数（不包括 1）
          `alert( Math.random() ); // 0.1234567894322`
        - Math.max(a, b, c...) / Math.min(a, b, c...) 从任意数量的参数中返回最大/最小值。
          `alert( Math.max(3, 5, -10, 0, 1) ); // 5`
        - Math.pow(n, power) 返回 n 的 power 次幂，即 n power
          `alert( Math.pow(2, 10) ); // 2 的 10 次幂 = 1024`
    - Strings
      - 创建字符串的三种方式
        - 单引号
          `let single = 'single-quoted';`
        - 双引号
          `let double = "double-quoted";`
        - 反引号，最为强大的模式，我们可以嵌入表达式和变量到字符当中，而且支持多行字符串
          ```
            function sum(a, b) {
                return a + b;
            }

            alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.          
          ```
      - 特殊字符
        - 换行符`\n`,下面两行代码效果相同
        ```
            alert( "Hello\nWorld" ); // two lines using a "newline symbol"

            // two lines using a normal newline and backticks
            alert( `Hello
            World` );        
        ```
        - 特殊字符转义，例如`'`和`\`，由于Javascript语法解析引擎对这些特殊字符作为语法解析的判断条件，但我们想让这些特殊字符作为字符串使用的时候，就需要使用`\`对齐进行转义。
          - `'` 我们必须用反斜杠 \' 来转义单引号，否则就表示字符串结束。或者使用反引号。
            `lert( 'I\'m the Walrus!' ); // I'm the Walrus!`
            `lert( `I'm the Walrus!` ); // I'm the Walrus!`
          - `\` 转义转义字符自己，既然转义字符会对特殊字符做处理，那么我们想输出一个字符串`\`呢
            `alert( `The backslash: \\` ); // The backslash: \`
        - 其他特殊字符
          - \t	Tab
          - \r	Carriage return
          - \b	Backspace
          - \uNNNN	16 进制的 NNNN 的unicode 符号，例如 \u00A9—— 是版权符号的 unicode ©。它必须是 4 个16 进制数字。
          - \u{NNNNNNNN}	一些罕见字符使用两个 unicode 符号进行编码，最多占用 4 个字节。这个长的 unicode 需要它周围的括号。
          ```
            alert( "\u00A9" ); // ©
            alert( "\u{20331}" ); // 佫, a rare chinese hieroglyph (long unicode)
            alert( "\u{1F60D}" ); // 😍, a smiling face symbol (another long unicode)          
          ```
      - 字符串长度
        - length 字符串长度属性
          `alert( `My\n`.length ); //注意 \n 是一个单独的“特殊”字符，所以长度确实是 3`
      - 访问字符
        - 可以使用方括号 [pos] 或者调用 str.charAt(pos) 方法。第一个字符从零位置开始,如果没有找到字符，[] 返回 undefined，而 charAt 返回一个空字符串：
          ```
            let str = `Hello`;

            // the first character
            alert( str[0] ); // H
            alert( str.charAt(0) ); // H

            // the last character
            alert( str[str.length - 1] ); // o

            alert( str[1000] ); // undefined
            alert( str.charAt(1000) ); // '' (an empty string)            
          ```
        - for..of 遍历字符
          ```
            for (let char of "Hello") {
                alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
            }
          ```                 
      - 字符串里的字符不能通过索引修改，只能通过赋值到新的字符串替换
        ```
        let str = 'Hi';

        str[0] = 'h'; // error
        alert( str[0] ); // 无法运行        
        ```
        - 通常的解决方法是创建一个新的字符串，并将其分配给 str 而不是以前的字符串
          ```
            let str = 'Hi';
            str = 'h' + str[1];  // 字符串替换
            alert( str ); // h
          ```
      - 字符串方法
        - 改变大小写
          - str.toUpperCase() 大写
          - str.toLowerCase() 小写
            ```
            alert( 'Interface'.toUpperCase() ); // INTERFACE
            alert( 'Interface'.toLowerCase() ); // interface            
            ```
        - 查找字符串
          - str.indexOf(searchStr [,startPos])
            - 它从给定位置 pos 开始，在 str 中查找 substr，如果没有找到，则返回 -1，否则返回匹配成功的位置。
            ```
                let str = 'Widget with id';

                alert( str.indexOf('Widget') ); // 0，因为 'Widget' 一开始就被找到
                alert( str.indexOf('widget') ); // -1，没有找到，检索是大小写敏感的

                alert( str.indexOf("id") ); // 1，"id" 在位置 1 处（...idget 和 id）           
            ```
            - 在一个循环中查找所有匹配的字符串，每一次调用都发生在上一次匹配位置之后
              ```
                let str = 'As sly as a fox, as strong as an ox';
                let target = 'as'; // 让我们查看一下
                let searchPos = 0;
                while(true){
                    let result = str.indexOf(target, searchPos);
                    if(reuslt === -1){
                        break;
                    }
                    alert(`Found ${target} at ${result}`);
                    searchPos = result + 1;
                }
              ```
            - 注意查找字符串时判断条件，要与-1对比，而不是直接在if的条件里调用。
              ```
                let str = "Widget with id";

                if (str.indexOf("Widget") != -1) {
                    alert("We found it"); // 现在运行了！
                }              
              ```
              - 简写if (~str.indexOf(...)) 读作 “if found”，利用了只有当 n == -1 时，~n 才为零的特性。
                ```
                let str = "Widget";

                if (~str.indexOf("Widget")) {
                    alert( 'Found it!' ); // works
                }                
                ```
          - str.includes(searchStr, pos)
            - str中是否包含searchStr返回结果true/false，我们只是需要测试匹配不需要查找位置时使用它。第二个参数可以指定开始搜索的位置，未指定从0开始搜索。
            ```
            alert( "Widget with id".includes("Widget") ); // true
            alert( "Hello".includes("Bye") ); // false            
            ```
          - str.startsWith(searchStr) 判断字符串str是否以searchStr开头
          - str.endsWidth(searchStr) 判断字符串str是否以searchStr结尾
            ```
            alert( "Widget".startsWith("Wid") ); // true, "Widget" 以 "Wid" 开始
            alert( "Widget".endsWith("get") );   // true, "Widget" 以 "get" 结束     
            ```
        - 截取字符串
          - str.slice(start [,end]) 常用方法
            - 返回从 start 到（但不包括）end 的字符串部分。
            ```
            let str = "stringify";
            alert( str.slice(0, 5) ); // 'strin', 从 0 到 5 的子字符串（不包括 5）
            alert( str.slice(0, 1) ); // 's', 从 0 到 1，但不包括 1，所以只有在 0 的字符    
            ```
            - 如果没有第二个参数，slice 运行到字符串末尾
            ```
            let str = "stringify";
            alert( str.slice(2) ); // 从第二个位置直到结束           
            ```
            - start/end 也有可能是负值。它们的意思是位置从字符串结尾计算
            ```
            let str = "stringify";

            // 从右边的第四个位置开始，在右边的第一个位置结束
            alert( str.slice(-4, -1) ); //           
            ```
          - str.substring(start [, end])
            - 返回 start 和 end 之间的字符串部分。这与 slice 几乎相同，但它允许 start大于 end。
            ```
            let str = "stringify";

            // 这些对于子串是相同的
            alert( str.substring(2, 6) ); // "ring"
            alert( str.substring(6, 2) ); // "ring"            
            ```
          - str.sub(start, length)
            - 从 start 开始返回给定 length 的字符串部分。与以前的方法相比，这个允许我们指定 length 而不是结束位置
            ```
            let str = "stringify";
            alert( str.substr(2, 4) ); // 环，从第二位获得 4 个字符            
            ```
      - 比较字符串
        - 所有的字符串都使用 UTF-16 编码。即：每个字符都有相应的数字代码。有特殊的方法可以获取代码的字符并返回。`str.codePointAt(pos)`
        `alert( 'a' > 'Z' ); // true`
        ```
            // 不同的字母有不同的代码
            alert( "z".codePointAt(0) ); // 122
            alert( "Z".codePointAt(0) ); // 90
        ```
        - 通过数字 code 创建字符 `String.fromCodePoint(code)`,现在我们看一下代码 65..220 的字符（拉丁字母和一些额外的字符），方法是创建一个字符串：
          ```
            let str = '';

            for (let i = 65; i <= 220; i++) {
                str += String.fromCodePoint(i);
            }
            alert( str );
            // ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
            // ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ          
          ```

        - 正确的比较方法`str.localeCompare(str2)`
          `alert( 'Österreich'.localeCompare('Zealand') ); // -1`

      - Unicode
        - 大部分 symbol 都有一个 2 字节的代码。大多数欧洲语言，数字甚至大多数象形文字中的字母都有 2 字节的表示形式。但 2 字节只允许 65536 个组合，这对于每个可能的符号都是不够的。所以稀有的符号被称为“代理对”的一对 2 字节符号编码。这些符号的长度是 2
        ```
            alert( '𝒳'.length ); // 2, MATHEMATICAL SCRIPT CAPITAL X
            alert( '😂'.length ); // 2, FACE WITH TEARS OF JOY
            alert( '𩷶'.length ); // 2, a rare chinese hieroglyph        
        ```
    - Arrays
      - 数组是一种特殊的对象，适用于存储和管理有序的数据项。
      - 数组是对象，所以它是按引用传递的，要注意数组的方法中有哪些是修改原有数组的，有些是不修改原数组的，哪些是返回新数组的。
      - 数组作为一个方法的参数并在方法内部修改数组的时候，假如使用的不是修改原数组的方法，而使用通过 arr = arr.concat(otherArr)的方式赋值是无法修改数组的。所以只能使用arr[index]的方式修改数组的值，或者使用修改原数组的方法才会得到正确的结果。
        ```
        let arr = [1];
        let arr1 = [2, 3, 4];
        function changeArray(arr){
            arr = arr.concat(arr1);
        }
        changeArray(arr);
        console.dir(arr); //结果是[1]并不是[1, 2, 3, 4]
        ```
      - 创建数组的方法,尽量不要使用构造函数的方法创建数组，会产生未知问题
        `let arr = [item1, items, ...]`
      - length属性是数组的长度，它是数组最后一项的数字索引值加1，如果我们手动修改length，数组就会被截断，当然我们可以利用这个特性清空数组，arr.length = 0;
      - 数组的方法
        - 数组末端方法
          - arr.push(item1, item2, ...)添加元素到数组的末端，并返回数组的长度
          - arr.pop()删除数组的最后一个元素，并返回它
          ```
            let fruits = ["Apple", "Orange"];
            fruits.push("Pear");
            alert( fruits ); // Apple, Orange, Pear

            let fruits = ["Apple", "Orange", "Pear"];
            alert( fruits.pop() ); // 移除 "Pear" 然后 alert 显示出来
            alert( fruits ); // Apple, Orange
          ```
        - 数组前端方法
          - arr.unshift(item1, item2, ...)添加元素的数组的前端，并返回数组的长度
          - arr.shift()删除数组的第一个元素并返回它
            ```
            let fruits = ["Orange", "Pear"];
            fruits.unshift('Apple');
            alert( fruits ); // Apple, Orange, Pear

            let fruits = ["Apple", "Orange", "Pear"];
            alert( fruits.shift() ); // 移除 Apple 然后 alert 显示出来
            alert( fruits ); // Orange, Pear
            ```
        - 遍历数组
          - for 最传统的索引循环
            ```
            let arr = ["Apple", "Orange", "Pear"];

            for (let i = 0; i < arr.length; i++) {
                alert( arr[i] );
            }            
            ```
          - for...of 可迭代对象循环
            ```
            let fruits = ["Apple", "Orange", "Plum"];

            // 迭代数组元素
            for (let fruit of fruits) {
                alert( fruit );
            }            
            ```
          - 如果需要索引可以使用传统的for循环或者新的arr.forEach()方法，但是不要使用for...in循环，因为for...in循环会迭代所有属性，不仅仅是索引属性，而且速度也慢很多，例如类数组对象arrayLike就有很多我们不需要的属性。
      - 数组按引用复制，数组是一种特殊的对象。使用方括号来访问属性 arr[indexNumber] 实际上是来自于对象的语法。这个数字被用作键值。他们扩展了对象，提供了特殊的方法来处理有序的数据集合，还添加了 length 属性。但是核心还是一个对象。
      - 性能问题
        - 在末端操作数据push/pop性能要优于在数组前端操作数据unshift/shift，因为不需要因为增加元素而重排整个数组的索引
      - 多维数组，在数组中存储数组，以多维数组的方法存储矩阵。
        ```
            let matrix = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ];

            alert( matrix[1][1] ); // 最中间的那个数        
        ```
      - toString方法
        - 数组的toString方法会返回以逗号隔开的元素列表。由于它只实现了这个方法，所以当隐式转换的时候回直接调用这个方法。
        ```
            let arr = [1, 2, 3];

            alert( arr ); // 1,2,3
            alert( String(arr) === '1,2,3' ); // true        
        ```
        - 关于'+'操作符触发隐式转换的问题，当 "+" 操作符把一些项加到字符串后面时，加号后面的项也会被转换成字符串，字符串相加触发了后面数字的隐式转换。
          ```
          alert( [1] + 1 ); // "11"  [1].toString() + 1
          alert( "1" + 1 ); // "11"
          ```
        
    - Array methods
      - 修改原数组数据
        - 添加元素
          - arr.push(...items); 添加元素到数组结尾 返回数组长度
          - arr.unshift(...items); 添加元素到数组开头 返回数组长度
          - arr.splice(pos, 0, ...items); 添加元素到数组指定位置，由于没有删除元素，所以返回[]空数组

        - 删除元素
          - arr.pop(); 删除数组结尾的元素，并返回被删除的元素
          - arr.shift(); 删除数组开头的元素，并返回被删除的元素
          - arr.splice(pos, deleteCount, ...items); 删除指定位置的元素 返回被删除的元素的数组[deleteItem, ...]

        - 排序元素
          - arr.sort((a, b) => {return ... 1/0/-1;}) 根据比较函数的结果对数组进行排序，比如想让a和b中值比较大的排在后面 那么 `a>b return 1; a=b return0; a<b return -1;`，排序算法会根据比较函数对数组进行排序。
          - arr.reverse() 颠倒数组中元素的顺序

      - 不修改原数组
        - 复制数组元素
          - arr.slice(start, end) 从start到end但不包括end返回一个新数组。这个方法和str.slice很像
          - arr.concat(...items) 将数组和其他数组元素组成新数组并返回，**如果参数是多维数组将会被展开**。

        - 计算生成新数组并返回
          - arr.map((item, index, array) => { return ...; }); 对数组的每个元素调用函数并返回结果数组。 
          - **使用这个方法的时候，假如内部使用if进行逻辑判断返回值，有可能会有返回的数组项中值为undefined的情况，如果想要过滤数组的值，使用filter方法更合理，这个方法适用于处理数组中所有的值并返回新数组的应用场景。**

        - 累加计算并返回结果
          - arr.reduce/reduceRight((acc/previousValue, currentValue, index, arr) => { return ...;}, initial); 迭代每个数组元素并将计算结果返回

        - 字符串和数组相互转化
          - str.split(seperateStr) 字符串转数组，通过指定的seperateStr分隔符分割字符串为数组并返回
          - arr.join(seperateStr) 数组转字符串，通过指定的seperateStr分隔字符串合并数组为字符串并返回

      - 查询数组元素，这些方法很容易搞混淆，
        - 参数为要查找的元素和开始的位置，常用的就是indexOf，includes返回的true/false应用太窄
          - arr.indexOf/lastIndexOf(item, pos) 从指定位置pos查找item如果找到就返回索引值，否则返回-1, lastIndexOf相同只不过是从尾部开始查询, `return Number;`
          - arr.includes(item, fromPos) 从指定索引开始fromPos查询item,如果找到则返回true，否则返回false, `return Boolean`

        - 参数为返回值true/false函数表达式，**find只查找第一个元素，没有返回的是undefinded, filter查找的是所有符合的元素，没有返回的是空数组[]**
          - arr.find(function(item, index, array){ if(condition){return true/false} }) 在数组中根据条件函数返回值查找指定元素，如果返回值为true就返回第一个匹配的item则停止，如果没找到返回undefined, `return Object/undefined`

          - arr.filter(function(item, index, array){ if(condition){return true/false} }) 在数组中根据条件函数返回值查找指定元素，如果返回值为true就返回的所有数组元素，如果没有则返回空数组，`return Array`
          
          - arr.findIndex(function(item, index, array){ if(condition){return true/false} }); 和find相似，只不过返回的是元素的索引而不是元素本身, 查找的是第一个匹配的索引  `return Number`

      - 迭代
        - arr.forEach((itemValue, index, array) => { ... }); 对数组每个元素执行函数，不修改元素，也不返回结果，只是用来遍历数组，这里的item有个大坑，它并不代码数组的项引用，而只是数组项的值，要在这里修改原数组还要使用`array[index] = newValue;`获取引用来修改原数组项的值。而且不能使用`break`来终止跳出循环，所以用途非常有限，只能用来遍历数据。

      - 其他
        - Array.isArray(obj) 判断对象是否是一个数组 返回true/false
  

    - Iterables
      - 可迭代对象，可以在for...of循环中使用，比如数组就是可迭代对象之一，字符串也是可迭代的。很多内建的方法和操作都依赖于它。
      - Symbol.iterator
        - 如果想把一个对象转换为可迭代对象，需要为对象添加一个Symbol.iterator的方法。
        - for...of方法会自动调用这个方法，如果没有就会报错
        - 方法必须返回一个next方法的对象，用于for...of循环调用获取下一个数值
        - iterator.next()返回值必须是`{ done: Boolean, value: any}`, 当done==true的时候迭代结束。
      - 可迭代对象和类数组对象的区别
        - Array-likes 有索引属性和length属性的对象成为类数组对象，这种对象也许有其他属性和方法，但是没有数组的内建方法。例如DOM对象`HTMLCollection`和`NodeList`对象都是类数组对象，他们都有length属性，带有数组索引的每一项存储的是DOM节点。
          ```
            let arrayLike = {
                0: "Hello",
                1: "World",
                length: 2
            };

            let arr = Array.from(arrayLike); // (*) 类数组对象转数组
            alert(arr.pop()); // World（pop 方法生效）          
          ```
        - Iterator是有 Symbol.iterator方法的对象。
        - 他们都没有数组对象的方法，但是他们都可以通过方法转换成数组
      - Array.from(obj[, mapFn, thisArg]) 
        - 把array-likes对象或者iterator对象转换成数组对象，就可以使用数组的方法了。
      - 字符串迭代
        - 数组和字符串是应用最广泛的内建可迭代对象
        ```
        for (let char of "test") {
            alert( char ); // t，然后 e，然后 s，然后 t
        }
        ```
    - Map and Set
      - Map 键值对集合，与Object最大的区别在于它任意类型的key，Object只支持string作为key，而且Map支持链式调用
        - 创建Map
          - `new Map()`
        - 方法
          - new Map() – 创建 map。
          - map.set(key, value) – 根据键（key）存储值（value）。
          - map.get(key) – 根据键返回值，如果 map 中该键不存在，返回 undefined。
          - map.has(key) – 如果键存在，返回 true，否则返回 false。
          - map.delete(key) – 移除该键的值。map.clear() – 清空 map
          - map.size – 返回当前元素个数。

        - Object to Map
          - `new Map(keyValueArr)`把对象转换成键值对数组作为map的构造函数的参数。
            ```
            // [key, value] 键值对数组
            let map = new Map([
                ['1',  'str1'],
                [1,    'num1'],
                [true, 'bool1']
            ]);           
            ```
          - `new Map(Object.entries(object))`; 普通对象转Map对象
            ```
            let map = new Map(Object.entries({
                name: "John",
                age: 30
            })); //Object.entries 返回了键值对数组：[ ["name","John"], ["age", 30] ]。这正是 Map 需要的。
            ```

        - 遍历Map
          - map.keys() – 返回键的迭代器，
          - map.values() – 返回值的迭代器，
          - map.entries() – 返回 [key, value] 迭代器入口，for..of 循环会默认使用它。
            ```
                let recipeMap = new Map([
                    ['cucumber', 500],
                    ['tomatoes', 350],
                    ['onion',    50]
                ]);

                // 迭代键（vegetables）
                for (let vegetable of recipeMap.keys()) {
                    alert(vegetable); // cucumber, tomatoes, onion
                }

                // 迭代值（amounts）
                for (let amount of recipeMap.values()) {
                    alert(amount); // 500, 350, 50
                }

                // 迭代键值对 [key, value]
                for (let [key, value] of recipeMap) { // 和 recipeMap.entries() 一样，并且使用了数组变量赋值解构
                    alert(key, value); // cucumber,500（等等）
                }            
            ```
          - map.forEach() 内置迭代方法和array的forEach很像
            ```
            recipeMap.forEach( (value, key, map) => {
                alert(`${key}: ${value}`); // cucumber: 500 等等
            });          
            ```

        - 与Object的区别
          - 对象可以作为key，Object的key只能是string
          - 迭代顺序是插入的顺序，不会再迭代过程中因为整数key而出现排序的问题
          - 自带很多方便快捷的方法比如map.size 元素的个数

      - Set 包含不重复值的集合，常用于保留不重复的值的有序序列。
        - 创建Set
          - `new Set()`

        - Set Methods
          - set.add(value) – 添加值，返回 set 自身。
          - set.delete(value) – 删除值，如果该 value 在调用方法的时候存在则返回 true ，否则返回 false。
          - set.has(value) – 如果 set 中存在该值则返回 true ，否则返回 false。
          - set.clear() – 清空 set。
          - set.size – 元素个数

        - Array to Set
          - `new Set(array)` 把array作为set的构造函数的参数来创建set对象;
            ```
            let set = new Set(["oranges", "apples", "bananas"]);
            for (let value of set) alert(value);            
            ```

        - Set迭代
          - 使用for...of或者set.forEach来迭代查看set
          ```
            let set = new Set(["oranges", "apples", "bananas"]);

            for (let value of set) alert(value);

            // 和 Array.forEach 相同：
            set.forEach((value, valueAgain, set) => {
                alert(value);
            });          
          ```
          - set.keys() – 返回 set 中值的迭代对象，
          - set.values() – 和 set.keys 一样，为了兼容 Map，
          - set.entries() – 返回形如 [value, value] 的迭代对象，为了兼容 Map 而存在

        - 与Array的区别，set不允许元素重新排序，保持插入的顺序。

    - WeakMap and WeakSet
      - WeakMap和WeakSet对象最重要的特性就是他们适合存储引用类型的值作为key，而不需要手动释放内存，一旦引用对象被移除，储存在他们当中的对象引用也会被自动清除。
      - WeakMap和WeakSet并不支持迭代方法，所以我们无法获取他们的所有键值。
      - WeakMap支持的方法
        - weakMap.get(key)
        - weakMap.set(key, value)
        - weakMap.delete(key, value)
        - weakMap.has(key)
      - WeakSet支持的方法
        - weakSet.add(value);
        - weakSet.has(value);
        - weakSet.delete(value);

    - Object.keys, values, entries
      - 注意与Map/Set的keys/values/entries方法区别，Map/Set返回的是可迭代对象，需要通过Array.from转换为数组，而Object的方法返回的直接就是**数组，不需要转换**。
      - Object.keys(obj) —— 返回一个包含该对象全部的键的数组。
      - Object.values(obj) —— 返回一个包含该对象全部的值的数组。
      - Object.entries(obj) —— 返回一个包含该对象全部 [key, value] 键值对的数组。

    - Destructuring assignment
      - 赋值解构本质上就是让我们快速把不同数据类型的值赋值到变量中，它让我们将数组或者对象拆包，存放到一系列数据结构相同的变量中。避免重复声明和赋值，当然不只是快捷那么简单，我们也可以使用赋值解构完成一些需求，比如变量数值交换。
      - 数组解构
        - 数组解构到变量中
          ```
            // 有一个存放了名字和姓氏的数组
            let arr = ["Ilya", "Kantor"]

            // 解构赋值
            let [firstName, surname] = arr;
            // 精简写法
            //let firstName = arr[0];
            //let surname = arr[1];

            alert(firstName); // Ilya
            alert(surname);  // Kantor          
          ```

        - 字符串解构到变量中
          ```
          let [firstName, surname] = "Ilya Kantor".split(' ');
          ```

        - 右侧任意可迭代对象
          ```
          let [a, b, c] = "abc"; // ["a", "b", "c"]
          let [one, two, three] = new Set([1, 2, 3]);
          ```

        - 忽略元素
          ```
          // 不需要第一个和第二个元素
            let [, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

            alert( title ); // Consul
          ```

        - 赋值给左侧任意类型
          ```
            let user = {};
            [user.name, user.surname] = "Ilya Kantor".split(' ');
            alert(user.name); // Ilya
          ```

        - Object.entries(object)循环，使用赋值解构来遍历entries返回的对象键值对
          ```
            let user = {
                name: "John",
                age: 30
            };

            // 循环遍历键-值对
            for (let [key, value] of Object.entries(user)) {
                alert(`${key}:${value}`); // name:John, then age:30
            }          
          ```

        - 剩余操作符`...`
          - 搜集剩余元素，剩余元素会放入到数组变量中
          ```
            let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

            alert(name1); // Julius
            alert(name2); // Caesar

            alert(rest[0]); // Consul
            alert(rest[1]); // of the Roman Republic
            alert(rest.length); // 2          
          ```

        - 默认值，我可以使用`=`指定一个默认值，当赋值解构右侧映射不到值的时候回使用默认值，这个默认值可以是复杂的表达式甚至函数调用
          ```
            //未赋值的变量被当作 undifined
            let [firstName, surname] = [];
            alert(firstName); // undefined 不会报错 

            // 默认值
            let [name = "Guest", surname = "Anonymous"] = ["Julius"];

            alert(name);    // Julius (来自数组的值)
            alert(surname); // Anonymous (默认值被使用了)

            // 只会提示输入姓氏
            let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

            alert(name);    // Julius (来自数组)
            alert(surname); // 你输入的值           
          ```

      - 对象解构
        - 注意对象赋值解构的时候左侧变量名要与右侧对象的key相同
        - `let {key1, key2} = {key1: value1, key2: value2, ...}` 
          - 例子
          ```
            // 改变 let {...} 中属性的顺序，对结果没有影响，只要保证变量名和对象key对应就可以了
            let {height, width, title} = { title: "Menu", height: 200, width: 100 }
          ```
        - 映射到新的变量名
          - 例子
          ```
            let options = {
                title: "Menu",
                width: 100,
                height: 200
            };

            // { 原属性：目标变量 }，目标的变量名的值就会等于赋值解构对象中对应的key的值
            let {width: w, height: h, title} = options;

            // width -> w
            // height -> h
            // title -> title

            alert(title);  // Menu
            alert(w);      // 100
            alert(h);      // 200    
          ```

        - 映射结合默认值一起使用，可以作为类或者函数的参数初始化，如果赋值解构右侧对象未找到对应的key，则使用=右侧的默认值
          - 例子
          ```
            let options = {
                title: "Menu"
            };

            let {width: w = 100, height: h = 200, title} = options;

            alert(title);  // Menu
            alert(w);      // 100
            alert(h);      // 200       
          ```

      - 嵌套解构，支持对象嵌套解构，对象中不存在的属性会使用默认值
        - 例子
        ```
        let options = {
            size: {
                width: 100,
                height: 200
            },
            items: ["Cake", "Donut"],
            extra: true    // 一些不会被解构的额外属性
        };

        // 为了清晰起见，解构赋值语句被写成多行
        let {
            size: { // 把 size 赋值到这里
                width,
                height
            },
            items: [item1, item2], // 把 items 赋值到这里
            title = "Menu" // 在对象中不存在的属性（会使用默认值）
        } = options;

        alert(title);  // Menu
        alert(width);  // 100
        alert(height); // 200
        alert(item1);  // Cake
        alert(item2);  // Donut        
        ```
      - 智能函数参数,我们可以利用赋值解构的特性灵活的给函数传入参数，而不用在意参数顺序
        ```
        // 清晰起见，精简了部分参数，首先默认值指向了一个空对象，调用是传入的值是undefined，所以使用了默认参数，因为参数是一个对象，然后进入对象内部的赋值解构，由于空对象没有找到对应的key，所以会使用默认值。
        function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
            alert( `${title} ${width} ${height}` );
        }

        showMenu(); // Menu 100 200
        ```

    - Date and time
      - 创建时间和日期的方法
        - new Date() 创建一个表示当前日期和时间的对象
        - new Date(milliseconds) 从1970-01-01 00:00:00 UTC+0开始所经历的毫秒数ms(1s = 1000ms)
          `new Date(1000) //1970-01-01 00:00:01 UTC+0`
        - new Date(dateString) 时间字符串参数，参见Date.parse(str)算法解析
          `new Date('2019-07-31')`
        - new Date(year, month [date, hours, minutes, seconds, ms])
        ```
        let date = new Date(2011, 0, 1, 2, 3, 4, 567);
        alert( date ); // 1.01.2011, 02:03:04.567        
        ```
      - 获取日期和时间的值
        - date.getFullYear() 结果是4位数字
        - date.getMonth() 结果是 **0-11** 注意使用时的转换
        - date.getDate() 结果是 **1-31**，注意这个不是0开始，**0代表上一个月的最后一天了**
        - date.getHours()
        - date.getMinutes()
        - date.getSeconds()
        - date.getMilliseconds()
        - date.getDay() 结果是**0-6** 对应星期天到星期六 要根据情况做转换

        - date.getUTC***() 返回基于UTC+0的时间
        - date.getTime() 从 1970-1-1 00:00:00 UTC+0 开始的毫秒数
        - date.getTimezoneOffset() 返回时区偏移数，以分钟为单位，如果你在时区 UTC+3，输出 -180

      - 设置时间和日期的方法
        - date.setFullYear(year, [,month ,date]);
        - date.setMonth(month [, date]);
        - date.setDate(date);
        - date.setHours(hour [, min, sec, ms]);
        - date.setMinutes(min [, sec, ms]);
        - date.setSeconds(sec [, ms]);
        - date.setMilliseconds(ms);
        
        - date.setUTC***
        - date.setTime(milliseconds);

      - 自动校准
        - 超出范围的日期会被自动校准为正确值，例如负值
        - 获取上个月的最后一天是几号 `date.setDate(0);`

      - 日期差值计算
        - 日期可以相减，它们相减的结果是以毫秒为单位，在date对象上调用运算符会触发date对象的getTime()方法返回从 1970-1-1 00:00:00 UTC+0 开始的毫秒数
        `The loop took ${end - start} ms`

      - Date.now();
        - 返回当前时间戳的毫秒数

      - Date.parse(dateString);
        - 字符串的格式是：YYYY-MM-DDTHH:mm:ss.sssZ
          - YYYY-MM-DD —— 日期：年-月-日。
          - 字符串 "T" 是一个分隔符。
          - HH:mm:ss.sss —— 时间：小时，分钟，秒，毫秒。
          - 可选字符 'Z' 代表时区。单个字符 Z 代表 UTC+0。

      - 性能问题
        - Date.now()相当于 new Date().getTime()，但它不会在中间创建一个 Date 对象。因此它更快，而且不会对垃圾处理造成额外的压力。
  
    - JSON methods, toJSON
      - Javascript Object Notation 
        - 表示值和对象的通用格式，最初为Javascript而编写，服务器很多其他语言也支持它，所以使用JSON格式进行数据交换非常容易
        - JSON支持的数据类型
          - Object `{"name" : "Jason"}`
          - Arrays `[1, 3, 5]`
          - Primitives
            - strings `"Jason"`
            - numbers `123`
            - boolean `true/false`
            - null `null`

        - JSON忽略的数据类型，为了跨语言数据规范。
            - 注意值为undefined将被忽略
            - Function，其他语言不支持Javascripit的function
            - Symbolic属性

        - JSON不支持循环引用，后面我将会讲到如果利用replacer解决循环引用的问题
  
      - JSON.stringify(target[, replacer[, space]])
        - 将对象转换成JSON字符串
          - target 要编码的对象
          - replacer 要编码的属性组['attribute1', 'attribute2']或者替换函数function(key, value)
          - space 编码时生成的字符串的缩进值，这个通常用于调试时console.log无法将对象展开的问题，通过`JSON.stringify(obj, null, 4);`把对象打印输出到console控制台
        - 注意JSON编码对象与对象字面量的重要区别
          - 字符串使用双引号，JSON中没有单引号和反引号。'jason'会被转换成"jason"
          - 对象的属性名也是双引号，这与对象的属性名有很大不同，所以`age:30`会被转换成`"age":30`
          - JSON不支持任何注释，JSON是为了可靠和快速解析而设计
        - replacer例子，注意replacer是进行预处理，处理过的结果要return回去，以便后面的程序递归结果转为JSON对象
          - 编码特定的属性，跳过循环引用的属性
          ```
            let room = {
                number: 23
            };

            let meetup = {
                title: "Conference",
                participants: [{name: "John"}, {name: "Alice"}],
                place: room // meetup references room
            };

            room.occupiedBy = meetup; // room references meetup

            alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
            /*
            {
                "title":"Conference",
                "participants":[{"name":"John"},{"name":"Alice"}],
                "place":{"number":23}
            }
            */
          ```
          - 使用一个函数作为 replacer。该函数将调用每个 (key,value) 对，并且返回 “replacement” 值，它将被用来代替原来的值。
          ```
            let room = {
                number: 23
            };

            let meetup = {
                title: "Conference",
                participants: [{name: "John"}, {name: "Alice"}],
                place: room // meetup references room
            };

            room.occupiedBy = meetup; // room references meetup

            alert( JSON.stringify(meetup, function replacer(key, value) {
                alert(`${key}: ${value}`); // to see what replacer gets
                return (key == 'occupiedBy') ? undefined : value;
            }));

            /* key:value pairs that come to replacer:
            :             [object Object]
            title:        Conference
            participants: [object Object],[object Object]
            0:            [object Object]
            name:         John
            1:            [object Object]
            name:         Alice
            place:        [object Object]
            number:       23
            */

          ```
        - object.toJSON()
          - 如果一个对象有`toJSON`这个方法，那么JSON.stringify(object)的时候会自动调用这个方法进行转换
          - 例子
          ```
            let room = {
                number: 23,
                toJSON() {
                    return this.number;
                }
            };

            let meetup = {
                title: "Conference",
                room
            };

            alert( JSON.stringify(room) ); // 23

            alert( JSON.stringify(meetup) );
            /*
            {
                "title":"Conference",
                "room": 23
            }
            */          
          ```

      - JSON.parse(JSONString, [, replacer])
        - 解码JSON字符串，转换成Javascirpt对象
          - JSONString要解析的JSON字符串对象
          - replacer 预处理替换函数 function(key, value)
        - 这里要注意返回值里的一些特殊情况，比如返回的date不是对象，而是一串转换而成的string，不能在结果里直接调用对象的方法
        - 例子，dateString预处理
        ```
        let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

        let meetup = JSON.parse(str, function(key, value) {
            if (key == 'date') return new Date(value);
            return value;
        });

        alert( meetup.date.getDate() ); // now works!        
        ```

  - Advanced working with functions
    - Recursion and stack
      - 当一个函数调用自身时，就称其为递归。递归基础是函数参数使得任务很简单，不需要其它更进一步调用。
      - 递归是一种编程模式，当一个任务可以被分割成很多相似的简单重复任务，通过条件判断是去执行简单任务，或者继续执行递归。递归用于处理特定类型的数据结构，通常是用于数据结构类似的对象的遍历。它有着比循环更强的适应性。但是因为其有堆栈限制，我们要根据实际场景需求灵活应用。另外在实际应用过程中，比如一些数学计算，递归可能会执行很多重复的运算，我们要对此进行优化以提升性能。
      - 使用递归最重要的就是把任务逻辑理清，把最简单的基础任务拆分出来，通过条件判断是执行简单任务，还是执行递归，记得递归时返回值上一个递归。用逻辑图去分析通常更加透彻。
        ```
        function pow(x, n) {
            if (n == 1) {
                return x;
            } else {
                return x * pow(x, n - 1);
            }
        }

        alert( pow(2, 3) ); // 8            
        ```
      - 执行堆栈
        - 一个函数运行的信息被存储在它的执行上下文里，执行上下文是一个内部数据结构，它包含一个函数执行时的细节：当前工作流在哪里，当前的变量，this 的值（这里我们不使用它），以及其它一些内部细节。
        - 每个函数调用都有与其相关联的执行上下文。当一个函数有嵌套调用时，下面的事情会发生：
          - 当前函数被暂停；
          - 与它关联的执行上下文被一个叫做执行上下文堆栈的特殊数据结构保存；
          - 执行嵌套调用；
          - 嵌套调用结束后，之前的执行上下文从堆栈中恢复，外部函数从停止的地方继续执行。
          - 递归调用过程中，调用相同的函数，所有的函数处理过程在数据结构层面表现
            - 当前上下文被「记录」在堆栈的顶部；
            - 为子调用创建新上下文；
            - 当子调用结束后 —— 前一上下文从堆栈弹出，继续执行。
      - 性能
        - 任何递归都可以用循环来重写。循环变体一般更加有效
        - 但有时重写很难，尤其是函数根据条件使用不同的子调用，然后合并它们的结果，或者分支比较复杂。而且有些优化可能没有必要，完全不值得。递归能提供更简洁的代码，容易理解和维护。优化并不是处处需要，大多数时候我们需要一个好代码，这就是它被使用的原因。

      - 递归遍历
        - 递归另一个重要应用就是递归遍历
          - 首先分析好数据结构，明确最简单的基础任务，条件是什么
          - 对于需要调用递归的复杂对象拆分，想办法用N个子递归拆分成为基础任务

      - 链表
        - 我们要存储一个有序的对象列表，用数组有个问题。「删除元素」和「插入元素」操作代价非常大。例如，arr.unshift(obj) 操作必须对所有元素重新编号以便为新的元素 obj 腾出空间，而且如果数组很大，会很耗时。arr.shift() 同理。
        - 如果我们真的需要快速插入、删除的话，我们可以选择另一种叫做链表的数据结构。当然，链表不总是优于数组。不然大家都去使用链表了。主要的不足就是我们无法轻易通过它的编号获取元素。在数组中却很容易：arr[n] 是一个直接引用。而在列表中，我们需要从起点元素顺着 next 找 N 次才能获取到第 N 个元素。
          - 链表元素是一个被递归定义的对象，它有
            - value
            - next 属性引用下一个链表元素或者代表末尾的 null
            ```
            let list = {
                value: 1,
                next: {
                    value: 2,
                    next: {
                    value: 3,
                    next: {
                        value: 4,
                        next: null
                    }
                    }
                }
            };            
            ```
          - 我们可以在任何位置插入或移除元素
           ```
            let list = { value: 1 };
            list.next = { value: 2 };
            list.next.next = { value: 3 };
            list.next.next.next = { value: 4 };

            // 将新值添加到列表头部
            list = { value: "new item", next: list };           
           ```
         - 移除中间的一个值，修改前一个元素的 next
           ```
           list.next = list.next.next;
           ```

    - Rest parameter and spread operator
      - 当我们在代码中遇到 "..." 时，它不是 Rest 参数就是 Spread 操作符。
      - 我们可以使用下列方法区分二者：
        - 若 ... 出现在函数的参数列表，那它表示的就是 Rest 参数，它会把函数多余的实参收集到一个数组中。
        ```
        function sumAll(...args) { // 数组变量名为 args
            let sum = 0;
            for (let arg of args) sum += arg;
            return sum;
        }

        alert( sumAll(1) ); // 1
        alert( sumAll(1, 2) ); // 3
        alert( sumAll(1, 2, 3) ); // 6        
        ```
        - 若 ... 出现在函数调用或类似的表达式中，那它就是 Spread 操作符，它会把一个数组展开为逗号分隔的元素列表。
        ```
        let arr = [3, 5, 1];
        alert( Math.max(...arr) ); // 5（Spread 操作符把数组转为参数列表）
        ```

      - 使用场景：
        - Rest 参数用于创建可接收任意个参数的函数。
        - Spread 操作符可以在函数调用传参时，把含有参数的数组展开为函数需要的参数列表形式。
        - 这两个操作符的出现方便了我们在参数数组和参数列表间来回转换。
        - “旧式”的 arguments（类数组对象）也依然能够帮助我们获取函数调用时的所有参数。

      - Array.from(arrayLikeObject/iteratorObject)和[...iteratorObject]的区别
        - Array.from 同时适用于类数组对象和可遍历对象。
        - Spread 操作符只能操作可遍历对象。
        - 因此，若希望把一些“东西”转为数组，使用 Array.from 将更为通用

    - Closure
      - 词法环境(作用域scope)，每个运行的函数都有一个Lexical Environment的关联对象
        - Environment Record把所有局部变量作为其属性的对象，操作变量实际上操作的是该对象的属性
        - 外部环境，嵌套当前代码之外的环境
      - 函数声明
        - 函数声明并不像变量声明那样，代码运行到他们时，它们并不会立刻执行，而是在词法环境创建完成之后再执行。
        - 当函数运行时，会自动创建一个新的函数词法环境 the function Lexical Environment，这个词法环境对象用于存储调用的局部变量和参数。
        - 当代码试图访问一个变量时，它首先会在词法环境内部搜索，然后是外部环境，直到Lexical Environment链的末尾。
        - 函数每次调用都会创建一个新的函数Lexical Environment，如果被多次调用，每次都会创建一个拥有指定局部变量和参数的Lexical Environment
      - 嵌套函数
        - 在函数中创建函数，可以在函数内部创建一个临时函数用于计算，也可以返回一个函数给外部调用。还可以用构造函数返回一个新对象，把函数作为对象的属性。
        - All functions “on birth” receive a hidden property [[Environment]] with a reference to the Lexical Environment of their creation.
        - 嵌套函数之所以能访问外层函数里的变量，就是因为函数创建时，函数自动创建的[[Environment]]的属性记录了创建时的词法环境，所以通过引用可以访问外层嵌套函数的局部变量。假如找不到，会通过外部环境引用逐级查找直到全局的null.
        - 一次调用 —— 一个词法环境
          - 请记住，每次函数运行会都会创建一个新的函数词法环境。如果一个函数被调用多次，那么每次调用也都会此创建一个拥有指定局部变量和参数的词法环境
        - 词法环境是一个规范对象。我们不能在代码中获取或直接操作该对象。但 JavaScript 引擎同样可以优化它，比如清除未被使用的变量以节省内存和执行其他内部技巧等，但显性行为应该是和上述的无差。
      - 闭包
        - 闭包本质上就是函数能够访问外部变量，因为函数创建时自动创建[[Environment]]对象来访问创建时词法环境。
      - 代码块，循环和IIFE立即调用函数表达式
        - 当代码块中包含块级局部变量并运行时，会创建词法环境。
        - 对于循环而言，每次迭代都有独立的词法环境。如果在 for 循环中声明变量，那么它在词法环境中是局部的：
          ```
            for (let i = 0; i < 10; i++) {//注意这里声明i的方式是let而不是var，所以外部才会无法访问到
                // 每次循环都有其自身的词法环境
                // {i: value}
            }

            alert(i); // 错误，没有该变量          
          ```         
        - 立即调用函数IIFE,代码拥有自己的私有变量并立即执行。
         ```
            // 创建 IIFE 的方法

            (function() {
                alert("Brackets around the function");
            })();

            (function() {
                alert("Brackets around the whole thing");
            }());

            !function() {
                alert("Bitwise NOT operator starts the expression");
            }();

            +function() {
                alert("Unary plus starts the expression");
            }();         
         ```
          
      - 垃圾回收
        - 如果有一个嵌套函数在 f 结束后仍可达，那么它的 [[Environment]] 引用会继续保持着外部词法环境存在,词法环境对象在变成不可达时会被清理：当没有嵌套函数引用（它）时。在下面的代码中，在 g 变得不可达后，value 同样会被从内存中清除；
          ```
            function f() {
                let value = 123;
                function g() { alert(value); }
                return g;
            }

            let g = f(); // g 是可达的，并且将其外部词法环境保持在内存中     
            g = null; // ...在内存中被清理     
          ```
    - The old 'var'
      - let and const有自己的块级作用域，不会产生一些怪异问题。
      - 旧时遗留的var有很多坑，我们需要了解一下以便在旧代码中出现怪异行为时得到修复。
        - “var” 没有块级作用域，它在if块内，for循环块内都是对外部可见的。虽然在函数体不会向外提升。
        ```
        if (true) {
            var test = true; // 用 "var" 而不是 "let"
        }

        alert(test); // true，变量在 if 结束后仍存在        
        ```
        - var 变量会在函数开头被定义，与它在代码里定义的位置无关（这里不考虑定义在嵌套函数里的场景）。这个现象也叫变量提升。但是赋值不会。
        ```
        function sayHi() {
            var phrase; // 声明在开头工作……
            alert(phrase); // undefined
            phrase = "Hello"; // ...赋值 — 当执行到这里时。
        }

        sayHi();        
        ```
    - Global object
      - 在浏览器环境，全局变量是window，在nodejs环境，全局变量是global
      - 由于历史原因，window不仅是全局对象，还提供访问浏览器器窗口属性的功能，例如`window.innerHeight; //浏览器窗口高度`
      - 只有传统的`var`声明的变量会成为全局对象window的属性，现代`let/const`创建的变量并不会在window创建属性。
      - 所有script标签里的脚本共享一个全局作用域
      - 全局变量的作用，我们通过将一些需要全局共享的变量存储在全局对象中，以便他们在其他script标签中访问，可以通过检测全局对象验证浏览器是否支持新特性。
        - 检测是否支持Promise
        ```
            if (!window.Promise) {
                alert("Your browser is really old!");
            }   
        ```
        - 创建polyfills,兼容旧浏览器让他们支持现代新特性
        ```
        if (!window.Promise) {
            window.Promise = ... // 自定义实现现代语言特性
        }        
        ```
    - Function object, NFE
      - Javascript里，函数也是一个对象，我们不仅可以调用他们，也可以把他们当做对象添加删除属性。例如很多JavaScript库都使用这样方式创建，例如lodash，创建了一个_函数，然后添加了_.add, _.keyBy等属性，减少了命名冲突的可能性。
      - Function的属性
        - func.name 函数名, 注意匿名函数的name值为空
          ```
            let sayHi = function() {
                alert("Hi");
            }

            alert(sayHi.name); // sayHi（生效了!）
          ```
        - func.length 函数传入参数的个数，可以用来根据参数个数实现函数重载
          ```
            function f1(a) {}
            function f2(a, b) {}
            function many(a, b, ...more) {}

            alert(f1.length); // 1
            alert(f2.length); // 2
            alert(many.length); // 2
          ```
        - 自定义属性
          - 我们可以为函数添加自定义的属性func.customProperty，注意区别与闭包的函数创建环境存储的局部变量的区别，他们之间没有任何关系，也需要注意与构造函数的属性区别，构造函数的this.property属性是存储在实例上的，不能直接通过构造函数访问。
          - 下面的例子，count被直接储存在函数里，而不是它的创建时外部的词法环境。这样与闭包相比做最大的区别就是我们可以通过函数访问到它，假如使用闭包外部的代码是无法访问到它的。
          ```
            function makeCounter() {
                // 不再用：
                // let count = 0

                function counter() {
                    return counter.count++;
                };

                counter.count = 0;

                return counter;
            }

            let counter = makeCounter();
            alert( counter() ); // 0
            alert( counter() ); // 1         
          ```
      - 命名函数表达式 Named Function Expression
        - 带有名字的函数表达式，可以在函数体内部通过函数名访问函数自身引用。假如函数原变量可能会被外部修改，为了保持正确的调用，我们可以使用这种方法创建函数。
          - 它允许在函数内部引用自己。
          - 它在函数外是不可见的。
          ```
            let sayHi = function func(who) {
                if (who) {
                    alert(`Hello, ${who}`);
                } else {
                    func("Guest"); // 现在一切正常
                }
            };

            let welcome = sayHi;
            sayHi = null;

            welcome(); // Hello, Guest（嵌套调用有效）          
          ```
    - The 'new Function' syntax
      - 通过字符串来创建函数，传入的所有参数都是字符串，它的应用场景非常特殊，比如需要从服务端获取代码或者动态地按模板编译函数的时候才会使用。
        ```
        let func = new Function ([arg1[, arg2[, ...argN]],] functionBody)        
        ```
        - 例子
          ```
          let sum = new Function('a', 'b', 'return a + b');
          alert( sum(1, 2) ); // 3        
          ```
        - 闭包
          - 函数会使用一个特殊的属性 [[Environment]] 来记录函数创建时的环境，它具体指向了函数创建时的词法环境。但是如果我们使用 new Function 创建函数，函数的 [[Environment]] 并不指向当前的词法环境，而是指向全局环境。
          - 例子
          ```
            function getFunc() {
                let value = "test";
                let func = new Function('alert(value)');
                return func;
            }

            getFunc()(); // error：value 未定义

            function getFunc() {
                let value = "test";
                let func = function() { alert(value); };
                return func;
            }

            getFunc()(); // "test"，变量值取自 getFunc 的词法环境
          ```

    - Scheduling: setTimeout and setInterval
      - windows.setTimeout/window.clearSetTimeout 延迟调度
        - let timerId = setTimeout(func|code, delay[, arg1, arg2...])
          - fun想要执行的函数引用名，或者是匿名函数嵌套(箭头函数)
          - code 函数字符串，不建议使用，只是为了兼容以前的特性
          - delay 执行前的延时 单位毫秒 1s = 1000ms
          - arg1, arg2...要传入被执行函数的参数
        - 例子
          - 带参数
          ```
            function sayHi(phrase, who) {
                alert( phrase + ', ' + who );
            }

            setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John          
          ```
          - 匿名函数
          ```
            setTimeout(() => alert('Hello'), 1000);          
          ```
        - 取消调度,参数是setTimeout返回的time id
          ```
            let timerId = setTimeout(...);
            clearTimeout(timerId);          
          ```

      - window.setInterval/window.clearInterval 让函数在一定时间间隔周期性执行
        - let timerId = setInterval(func|code, delay[, arg1, arg2...])
          - 参数与setTimeout相同
          - 例子
            ```
            // 每 2 秒重复一次
            let timerId = setInterval(() => alert('tick'), 2000);

            // 5 秒之后停止
            setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
            ```

      - 弹窗会让 Chrome/Opera/Safari 内的时钟停止
          - 在众多浏览器中，IE 和 Firefox 在显示 alert/confirm/prompt 时，内部的定时器仍旧会继续滴答，但是在 Chrome、Opera 和 Safari 中，内部的定时器会暂停/冻结。

      - 递归版setTimeout实现可控的周期调用,而且时间精度上比setInterval要准确多，因为setInterval调用的周期间隔还要被函数执行消耗掉一部分，假如消耗时间超过了时间间隔周期，那么下一次调用会立刻执行。而setTimeout则不会，它是在上一次调用都执行完成之后才开始下一次调度的。
        - 例子
          ```
            /** 这是一种：
            let timerId = setInterval(() => alert('tick'), 2000);
            */

            let timerId = setTimeout(function tick() {
                alert('tick');
                timerId = setTimeout(tick, 2000); // (*) setTimeout在这次函数执行完毕之后，立刻安排了下一次调用
            }, 2000);          
          ```
        - 根据服务器负载降低请求频率
          ```
            let delay = 5000;

            let timerId = setTimeout(function request() {
                ...send request...

                if (request failed due to server overload) {
                    // 下一次执行的间隔是当前的 2 倍
                    delay *= 2;
                }

                timerId = setTimeout(request, delay);

            }, delay);         
          ``` 
      - 垃圾回收
        - 当一个函数传入 setInterval/setTimeout 时，内部会为其创建一个引用，保存在调度器中。这样，即使这个函数没有被引用，也能防止垃圾回收器（GC）将其回收。对于 setInterval，传入的函数也是存在于内存中，直到 clearInterval 被调用。这里还要提到一个副作用。如果函数引用了外部变量（译者注：闭包），那么只要这个函数还存活着，外部变量也会随之存活，这样就可能会占用多于方法自身所需要的内存。所以，如果某个函数不需要再被调度，即使是个很小的函数，最好也将其取消。

      - 使用setTimeout(...,0)分割高负载任务，不让脚本执行进入挂起状态，给浏览器时间响应并渲染界面。
        - 关键点在于拆分任务，然后通过条件判断是否继续执行setTimeout递归，也就是任务是否执行完成。
          ```
            <div id="progress"></div>

            <script>
            let i = 0;

            function count() {

                // 每次只完成一部分 (*)
                do {
                    i++;
                    progress.innerHTML = i;
                } while (i % 1e3 != 0);

                if (i < 1e9) {
                    setTimeout(count, 0);
                }

            }

            count();
            </script>          
          ```
          ```
            let i = 0;

            let start = Date.now();

            function count() {

                // 现在将调度放在开头，条件先减去do...while循环第一次调用的1000次累加
                if (i < 1e9 - 1e6) { //只有判断任务未完成才执行递归，这也是setTimeout比较优雅的地方，执行可控
                    setTimeout(count, 0); // 安排下一次调用,当当前代码块执行完成之后，在下一次eventLoop开始调用。
                }

                do {
                    i++;
                } while (i % 1e6 != 0);

                if (i == 1e9) { 已经完成的条件，输出结果
                    alert("Done in " + (Date.now() - start) + 'ms');
                }

            }

            count();          
          ```

    - Decorators and forwarding, call/apply
      - 装饰器
        - 改变函数行为的包装器，主要工作由原函数执行，但是额外为函数增强了一些特性。通过闭包或者函数的属性存储数据。并没有改变原函数的代码，我们可以为函数添加多个装饰器，也可以为多个函数添加相同的装饰器，他们之间不会互相影响。而且也不会修改原函数。
        - 一个结果稳定的CPU高负载运算函数，为其添加一个缓存结果装饰器提高其性能。
        ```
        function cachingDecorator(func) {
            let cache = new Map();
            return function (...args) { //wrapper
                let key = hash(args); //args = [].join.call(arguments);
                if (cache.has(key)) {
                    return cache.get(key);
                }
                let result = func.apply(this, args); //bind original method to context
                cache.set(key, result);
                return result;
            }
        }

        function hash(args) {
            return args.join(''); //散列函数从多个值创建一个值
        }        
        ```
      - 修改函数执行的上下文context
        - 通过使用方法`func.apply(context, args)` or `func.call(context, ...args)`，call方法中使用spread运算符将数组展开为参数列表
        ```
        function say(phrase) {
            alert(this.name + ': ' + phrase);
        }

        let user = { name: "John" };

        // user becomes this, and "Hello" becomes the first argument
        say.call( user, "Hello" ); // John: Hello       
        ```
        - func.call(context, arg1, arg2, ...) 传入的参数为可迭代列表
        - func.apply(context, [...args]) 传入的参数为数组
          - 比如`Math.max(num1, num2, ...);`接收的参数是数字参数列表，但是我们可以使用func.apply支持参数为数组的特性把此方法应用于数组并返回数组的最大项，
          `Math.max.apply(null, array);`，记得这里的作用域是global或者null，因为参数要转换成数组
        - 这里的context虽然意义上是作用域，实际上是调用的对象上下文。
      - 呼叫转移
        ```
        let wrapper = function() {
            return anotherFunction.apply(this, arguments);
        };        
        ```
        这叫做 呼叫转移。wrapper 传递它获得的所有内容：上下文 this 和 anotherFunction 的参数并返回其结果。当外部代码调用这样的 wrapper 时，它与原始函数的调用无法区分。
      - **方法借用**,当我们从一个对象中获取一个方法并在另一个对象的上下文中“调用”它时，我们也看到了一个方法借用的例子
        ```
        function hash() {
            alert( [].join.call(arguments) ); // 1,2 注意这里的arguments是一个可迭代的类数组对象，把arguments对象作为对象传入了数组的实例方法join，并不是参数，这里需要理解透彻，另外[]返回的是数组的实例，也可以使用Array.prototype.join作为替代，目的都是获取数组的join方法，原有的只能在数组实例上调用的方法join现在通过call方法传入其他对象作为参数并返回正确的结果，我们可以使用Javascript内部的任何内置方法作用于任何对象上，这样的特性极为强大和灵活。
        }

        hash(1, 2);        
        ```
      - 常用Decorators
        - 延时装饰器
        ```
        let delay = function (func, ms) {
            return function (...args) {
                let saveThis =
                    this; //由于setTimeout调用将this指向window or global，我们需要需要在包装器函数中绑定作用域，所以我们使用了saveThis来保存正确的作用域并将其传入setTimeout匿名函数中
                setTimeout(function () {
                    return func.apply(saveThis, args);
                }, ms);
            }

            //Other solution
            return function () {
                setTimeout(() => f.apply(this, arguments),
                    ms
                    ); //箭头函数没有自己的this和arguments, 所以f.apply的this和argumetns都是从包装器中的匿名函数也就是返回给变量的函数的作用域获取的，利用箭头函数的特性解决了setTimeout的全局作用域的问题。
            };

        }        
        ```
        - **固定频率执行函数装饰器 debounce**
          实例应用于DOM拖拽，适合做大量重复函数执行按时间平均分配触发。
          ```
            //这个方法可以限制某个函数执行的频率，只有在指定时间间隔才可以调用成功，其余时间间隔内的调用都将被忽略。
            let debounce = function (func, ms) {
                //使用Date对象实现，alert会暂停setTimeout的计时器，但是不会影响Date对象的计时，所以下面假如调用了alert方法，Date的计时仍然继续，所以并不是bug，而是不要使用阻断用户交互的方法就可以了。
                // let debounced = function (...args) {
                //     if (debounced.previousCall === undefined) {
                //         debounced.previousCall = Date.now();
                //         return func.apply(this, args);
                //     } else {
                //         console.log(Date.now() - debounced.previousCall);
                //         if (Date.now() - debounced.previousCall >= ms) {
                //             debounced.previousCall = Date.now();
                //             return func.apply(this, args);
                //         }
                //     }
                // }
                // return debounced;

                //另一种实现, 使用闭包内的局部变量，通过调用函数时创建的词法环境隔离访问，每次调用都会创建独立的词法环境用于存储局部变量。这个局部变量只能通过返回的函数访问。
                let isInCooldown = false; //Is in the cooldown period or not
                let debouncedSetTimeout = function (...args) {
                    if (isInCooldown) {
                        return;
                    }
                    func.apply(this, args);
                    isInCooldown = true;
                    setTimeout(() => isInCooldown = false, ms);
                }
                return debouncedSetTimeout;
            }         
          ```

        - **节流装饰器 throttle**
          给表单提交按钮添加防抖，避免多次提交。输入框AJAX验证或者自动补全，用防抖限制请求频率，防止用户输入过快产生过多请求，页面滚动到底部加载数据。总的来说，适合多次重复函数调用只响应一次。
          
          ```
                        
            let throttle = function (func, ms) {
                let isThrottled = false;
                let saveThis, saveArgruments;
                let wrapper = function () {
                    if (isThrottled) {
                        saveThis = this;
                        saveArgruments = arguments;
                        return;
                    }

                    func.apply(this, arguments);
                    isThrottled = true;
                    setTimeout(() => {
                        isThrottled = false;
                        if (saveArgruments) {
                            wrapper.apply(saveThis,
                            saveArgruments); // 这里不是只是调用了func这个方法，我们需要再次执行一次wrapper进入冷却状态，并且设置超时以重置它
                            saveArgruments = saveThis = null;
                        }
                    }, ms);
                }
                return wrapper;
            }        
          ```
    - Function binding
      - 函数变量引用对象的方法导致this上下文丢失，这样的现象经常在开发过程中发生，例如setTimeout里，或者dom.addEventListener，因为传递的参数是函数的引用(函数变量名)，导致this指向了错误的对象。
      ```
        let user = {
            firstName: "John",
            sayHi() {
                alert(`Hello, ${this.firstName}!`);
            }
        };

        setTimeout(user.sayHi, 1000); // Hello, undefined!  
        //上面的代码相当于
        //let f = user.sayHi;
        //setTimeout(f, 1000); // user上下文丢失    
      ```
      - 解决this丢失的方案
        - 匿名函数包装层，将本来应该传递函数名的参数替换成匿名函数返回，并在函数内部调用带有作用域的context.method()从而绑定作用域，这个方法的弊端是，绑定之后假如绑定对象有改变会指向改变的值
          ```
            let user = {
                firstName: "John",
                sayHi() {
                    alert(`Hello, ${this.firstName}!`);
                }
            };

            setTimeout(function() {
                user.sayHi(); // Hello, John!
            }, 1000); 
            //setTimeout(() => user.sayHi(), 1000); // Hello, John!         
          ```
        - 强制绑定方法为作用域context并改变方法引用为绑定的方法
          - `let boundFunc = func.bind(context);`
            ```
            let user = {
                firstName: "John",
                sayHi() {
                    alert(`Hello, ${this.firstName}!`);
                }
            };

            let sayHi = user.sayHi.bind(user); // (*)

            sayHi(); // Hello, John!

            setTimeout(sayHi, 1000); // Hello, John!          
            ```
          - bindAll
            ```
            for (let key in user) {
                if (typeof user[key] == 'function') {
                    user[key] = user[key].bind(user);
                }
            }
            ```
    - Arrow functions revisited
      - 箭头函数没有this，它获取的this来自外层函数
        ```
        let group = {
            title: "Our Group",
            students: ["John", "Pete", "Alice"],

            showList() {
                this.students.forEach(
                    student => alert(this.title + ': ' + student) //(*) this获取自外层函数，所以能获取正确的的对象group
                );
            }
        };

        group.showList();        
        ```
      - 普通匿名函数的this是undefined
        ```
        let group = {
            title: "Our Group",
            students: ["John", "Pete", "Alice"],

            showList() {
                this.students.forEach(function(student) {
                    // Error: Cannot read property 'title' of undefined this=undefined
                    alert(this.title + ': ' + student);
                });
            }
        };

        group.showList();
        ```
      - 箭头函数没有arguments，它的arguments来子外层函数
      - 箭头函数没有this，所以不能作为构造函数使用，无法通过new调用创建对象
      - Arrow functions VS bind
        - func.bind(this) 创建该函数的 “绑定版本”
        - 箭头函数 => 不会创建任何绑定。该函数根本没有 this。在外部上下文中，this 的查找与普通变量搜索完全相同。
      - 我们可以利用箭头函数的这个特性，转发调用
        ```
        function defer(f, ms) {
            return function() {
                setTimeout(() => f.apply(this, arguments), ms) //(*)我们不必创建额外的arguments和绑定this的局部变量，箭头函数会直接从外层函数获取
            };
        }

        function sayHi(who) {
            alert('Hello, ' + who);
        }

        let sayHiDeferred = defer(sayHi, 2000);
        sayHiDeferred("John"); // 2 秒后打印 Hello, John       

        //不使用箭头函数的方法
        function defer(f, ms) {
            return function(...args) { //(*)匿名函数额外创建的args变量用于获取函数参数
                let ctx = this; //(*)匿名函数额外创建的变量ctx用于绑定作用域
                setTimeout(function() {
                    return f.apply(ctx, args);
                }, ms);
            };
        }         
        ```
    - 柯里化和偏函数
      - bind不仅可以绑定作用域，还可以绑定固定参数，构建偏函数，适用于创建重复调用固定参数的函数
        - 当我们确定一个函数的一些参数时，通过函数返回的固定参数函数被称为偏函数。
        - 当我们不想一遍又一遍重复相同的参数时，偏函数很方便。比如我们有函数 send(from, to)，并且在我们的任务中 from 始终是相同的，那么我们可以构造一个偏函数然后对它进行操作。
        - `let bound = func.bind(context, arg1, arg2, ...);`
        - 例子,通过一个乘法函数创建一个新的函数double
          ```
          let mul = function(a, b){
              return a * b;
          }
          let double = mul.bind(null, 2); //bind的第一个参数是context，我们必须要传入一个值，我们不想在这里使用this，那么传入一个null就可以了
          console.log(double(3)); // 6
          console.log(double(4)); // 8
          console.log(double(5)); // 10
          ```
          
      - 无上下文使用偏函数
        - 构建一个只绑定参数的偏函数
        ```
        function partial(func, ...argsBound) {
            return function(...args) { // (*)
                return func.call(this, ...argsBound, ...args);
            }
        }    

        // 用法：
        let user = {
            firstName: "John",
            say(time, phrase) {
                alert(`[${time}] ${this.firstName}: ${phrase}!`);
            }
        };

        // 添加一个偏函数方法，现在 say 这个函数可以作为第一个函数
        user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

        user.sayNow("Hello");
        // 结果就像这样：
        // [10:00] John: Hello!      
        ```
        partial(func[, arg1, arg2...]) 调用的结果是一个基于 func 的封装函数，以及：
        - 和它传入的函数一致的 this (对于 user.sayNow 调用是 user)
        - 然后传入 ...argsBound —— 来自偏函数调用传入的参数（"10:00"）
        - 然后传入 ...args —— 传入封装函数的参数（Hello）  

      - 函数柯里化
        - Currying 是一项将一个调用形式为 f(a, b, c) 的函数转化为调用形式为 f(a)(b)(c) 的技术
        - 当我们想要简单偏函数的时候，柯里化很棒。正如我们在 logging 例子中所看到的那样：通用函数 log(date, importance, message) 在柯里化之后，当我们在调用它的时候传入一个参数如 log(date) 返回偏函数todayLog 或者两个参数 log(date, importance) 返回偏函数todayDebug 的时候，返回了偏函数。
        - 函数柯里化结合偏函数，方便的生成固定参数的偏函数，并且不影响原函数
          - 函数柯里化创建一个常用的log函数
            ```
            function log(date, importance, message) {
                alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
            }
            log = _.curry(log); //柯里化 lodash库的方法
            log(new Date(), "DEBUG", "some debug") //操作之后 log 依然正常运行
            log(new Date())("DEBUG")("some debug"); // log(a)(b)(c) 柯里化格式调用

            // todayLog 会是一个首个参数确定的偏函数, 让我们来创建一个获取今天的日志的简易函数
            let todayLog = log(new Date());
            // 使用它
            todayLog("INFO", "message"); // [HH:mm] INFO message

            //提供今天的调试信息的简便函数
            let todayDebug = todayLog("DEBUG");
            todayDebug("message"); // [HH:mm] DEBUG message
            ```

        - 高级柯里化的实现，通过判断柯里化函数调用的参数是否小于原函数的参数，决定调用原函数还是返回偏函数
          ```
            function curry(func) {
                //创建一个函数包装器，这里只是返回柯里化的递归函数
                return function curried(...args) {
                    if (args.length >= func.length) { 
                        //当函数被柯里化之后，我们需要通过两种不同的情况去执行不同的操作，主要是通过柯里化之后函数调用的参数进行判断，当参数和原函数参数相同或者更长的情况下，直接把作用域和参数传入原函数调用。并将结果返回。
                        return func.apply(this, args);
                    } else { 
                        //当柯里化函数参数小于原函数参数的时候，我们要生成一个偏函数，并返回但是不是马上调用
                        return function(...args2) {
                            return curried.apply(this, args.concat(args2)); //递归返回合并参数的偏函数直到柯里化函数的参数长度等于原函数参数长度，直接调用原函数
                        }
                    }
                };

            }

            function sum(a, b, c) {
                return a + b + c;
            }

            let curriedSum = curry(sum);

            // 依然可以被正常调用
            alert( curriedSum(1, 2, 3) ); // 6

            // 得到 curried(1) 的偏函数，然后用另外两个参数调用它
            alert( curriedSum(1)(2,3) ); // 6

            // 完全柯里化形式
            alert( curriedSum(1)(2)(3) ); // 6          
          ```
          当我们运行它的时候，有两种结果：
            - 立刻执行：当传入的 args 的长度和初始函数中所定义的（func.length）相同或者更长，那么直接将它传入需要执行的函数。
            - 得到一个偏函数：当传入的 args 的长度小于初始函数中所定义的（func.length），func 暂时不被调用，取而代之的是，返回另外一层封装 pass，其中，将之前传入的参数合并新传入的参数一起应用于 curried 函数。虽然再次调用。我们要么得到一个新的偏函数（如果参数数量不够），要么，最终得到结果。
          举个例子，让我们看看用例 sum(a, b, c) 中发生了什么。三个参数，那么 sum.lenght = 3。执行 curried(1)(2)(3)
            - 首先调用 curried(1) 将 1 保存在词法环境中，然后返回一层封装 pass。
            - 封装函数 pass 被调用，参数为 (2)：它会获取之前的参数 (1)，将它与 (2) 合并，一起调用 curried(1, 2)。
            - 由于参数数量依然少于 3，curry 函数依然返回 pass。
            - pass 再次被调用，参数为 (3), 在接下去的调用中 pass(3) 获取之前的参数 (1, 2) 并将 3 与之合并，执行调用 curried(1, 2, 3) —— 最终有 3 个参数，它们被传入最原始的函数中。

  - Object properties configuration
    - Property flags and decriptors
      - 数据属性，我们平时创建属性的时候默认都是数据属性。
      - `let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName)`
        - obj 要获取描述符的对象
        - propertyName 属性的名称
        - 返回值是一个属性描述符对象
          - 属性描述符的属性
            - value 属性的值
            - writable 属性值是否可以修改，默认是true.
            - enumerable 属性是否可以在for...in循环中列出，默认值是true.
            - configurable 属性是否可以被删除，默认值是true.
          - 通常我们创建一个属性的时候，描述符的值都是true
      - `Object.defineProperty(obj, propertyName, descriptor)`
        - obj 要创建描述符的对象
        - propertyName 要创建描述符的名称
        - descriptor 要应用的描述对象
          - value 属性的值
          - writable 属性值是否可以修改，默认是true.
          - enumerable 属性是否可以在for...in循环中列出，默认值是true.
          - configurable 属性是否可以被删除，默认值是true.
      - 创建只读的对象属性
        - wriable: false的时候，对象的属性只读
        - 例子
          ```
            let user = {
                name: "John"
            };

            Object.defineProperty(user, "name", {
                writable: false
            });

            user.name = "Pete"; // 错误：不能设置只读属性'name'...          
          ```
      - 对象属性不可枚举
        - enumerable: false的时候，它不会出现在for...in循环中
        - 例子
          ```
            let user = {
                name: "John",
                toString() {
                    return this.name;
                }
            };

            Object.defineProperty(user, "toString", {
                enumerable: false
            });

            // 现在 toString 消失了：
            for (let key in user) alert(key); // name          
          ```
      - 对象属性不可配置
        - configurable: false的时候，定义出的一个不可配置的属性不能被 defineProperty 删除或修改
        - 例子 只读的PI
          ```
            let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

            alert( JSON.stringify(descriptor, null, 2 ) );
            /*
            {
                "value": 3.141592653589793,
                "writable": false,
                "enumerable": false,
                "configurable": false
            }
            */          
          ```
      - 一次定义对象多个属性 `Object.defineProperties(obj, descriptors)`
        - 例子
          ```
            Object.defineProperties(user, {
                name: { value: "John", writable: false },
                surname: { value: "Smith", writable: false },
                // ...
            });          
          ```
      - 一个获取对象所有的属性描述符 `Object.getOwnPropertyDescriptors(obj)`
        - 用于完整地克隆对象所有属性的例子
          ```
          let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
          ```
        - 普通的遍历循环赋值的方式克隆对象，会忽略Symbol属性
          ```
            for (let key in user) {
                clone[key] = user[key];
            }
          ```
        - 设定一个全局的封闭对象(非常用方法)
          - Object.preventExtensions(obj) 禁止向对象添加属性。
          - Object.seal(obj) 禁止添加/删除属性，为所有现有的属性设置 configurable: false。
          - Object.freeze(obj)禁止添加/删除/更改属性，为所有现有属性设置 configurable: false, writable: false。还有对他们的测试：
          - Object.isExtensible(obj) 如果添加属性被禁止，则返回 false，否则返回 true
          - Object.isSealed(obj)如果禁止添加/删除属性，则返回 true，并且所有现有属性都具有 configurable: false。
          - Object.isFrozen(obj)如果禁止添加/删除/更改属性，并且所有当前属性都是 configurable: false, writable: false，则返回 true。

    - Property getters and setters
      - 访问器属性，本质上是获取和设置值的函数，只不过在外部代码访问时看起来像普通的数据属性。这就给了我们足够的灵活性，在设置或读取属性的时候能够通过函数对值进行计算。
        - Object.defineProperty(obj, key, { get(){ return ... }, set(value){ ... } });
        - 例子
          ```
            let user = {
                name: "John",
                surname: "Smith"
            };

            Object.defineProperty(user, 'fullName', {
                get() {
                    return `${this.name} ${this.surname}`;
                },
                set(value) {
                    [this.name, this.surname] = value.split(" ");
                }
            });

            alert(user.fullName); // John Smith
            for(let key in user) alert(key); // name, surname
          ```
      - getter and setter
        - 语法
          ```
            let obj = {
                get propName() {
                    // getter, the code executed on getting obj.propName
                },

                set propName(value) {
                    // setter, the code executed on setting obj.propName = value
                }
            };          
          ```
      - 访问器描述符
        - 数据属性与访问器属性的不同，访问器属性描述符没有value, writable，但是有set,get函数
        - get 一个没有参数的函数，在读取属性的时候工作
        - set 一个带有参数的函数，当属性被设置时被调用
        - enumerable 是否可遍历，与数据属性相同
        - configurable 是否可修改和删除，与数据属性相同
      - getter and setter 的应用
        - 对属性值进行过滤值操作
          ```
            let user = {
                get name() {
                    return this._name;
                },

                set name(value) {
                    if (value.length < 4) {
                        alert("Name is too short, need at least 4 characters");
                        return;
                    }
                    this._name = value;
                }
            };

            user.name = "Pete";
            alert(user.name); // Pete

            user.name = ""; // Name is too short...          
          ```
        - 根据对象的值去自动计算对象的其他属性值并自动更新
          ```
            function User(name, birthday) {
                this.name = name;
                this.birthday = birthday;

                // age 是由当前日期和生日计算出来的
                Object.defineProperty(this, "age", {
                    get() {
                        let todayYear = new Date().getFullYear();
                        return todayYear - this.birthday.getFullYear();
                    }
                });
            }

            let john = new User("John", new Date(1992, 6, 1));

            alert( john.birthday ); // birthday 是可访问的
            alert( john.age );      // ...age 也是可访问的          
          ```
  - Prototypes, inheritance
    - Prototypal inheritance
      - 对象的原型继承
        - Javascript中，所有的对象都有一个隐藏的[[prototype]]属性，引用指向继承对象的原型对象，它可以是另一个对象(继承)或者null，其他值会被忽略。
        - 我们可以通过`childObject.__proto__ = parentObject;`实现继承，也可以通过`object.__protot__`访问到对象继承自什么对象
        - 只能有一个[[prototype]]，对象不能继承自其他两个对象
        - 例子, longEar继承自rabbit继承自animal
          ```
          let animal = {
              eats: true,
              walk(){
                  alert('Animal walk');
              }
          }

          let rabiit = {
              jump: true,
              __proto__: animal,
          }

          let longEar = {
              earLength: 10, 
              __proto__: rabbit
          }

          longEar.walk(); //From parent Animal: Animal walk
          alert(longEar.jumps); //From parent rabbit: true
          ```
      - 基于原型继承的读写规则
        - 原型继承仅仅用于读取属性。对于数据属性写和删除操作是直接在对象自己身上进行操作的，并不会影响原型继承链上的其他对象的值。记得数据属性与访问器属性getter和setter不一样，因为访问器本质上是函数。
        - 当我们想要读取对象的属性或者调用一个方法，假如他们不存在的时候，那么Javacript会尝试在原型链中查找他们，直到顶层null。
        - 例子
          ```
            let animal = {
                eats: true,
                walk() {
                    /* this method won't be used by rabbit */
                }
            };

            let rabbit = {
                __proto__: animal
            }

            rabbit.walk = function() {
                alert("Rabbit! Bounce-bounce!");
            };

            rabbit.walk(); // Rabbit! Bounce-bounce!          
          ```
      - this在继承对象中的值
        - 在对象或者原型中，调用方法时，this始终是.之前的对象，因此方法是可以在原型链上共享的，但是对象的属性值不是。
          ```
            // animal has methods
            let animal = {
                walk() {
                    if (!this.isSleeping) {
                        alert(`I walk`);
                    }
                },
                sleep() {
                    this.isSleeping = true;
                }
            };

            let rabbit = {
                name: "White Rabbit",
                __proto__: animal
            };

            // modifies rabbit.isSleeping
            rabbit.sleep();

            alert(rabbit.isSleeping); // true
            alert(animal.isSleeping); // undefined (no such property in the prototype)          
          ```
    - F.prototype
      - 在现代Javascript中，我们使用`__proto__`设置一个对象的原型。过去我们使用构造函数来创建对象来实现原型链的继承。
        - Function.prototype是每个函数都有的属性,用于我们通过`new F()`的方式创建一个对象时，该对象的[[Prototype]]被设置为指向F.prototype对象。从而实现原型链继承并创建对象。
        ```
        let animal = {
            eats: true
        };

        function Rabbit(name) {
            this.name = name;
        }

        Rabbit.prototype = animal;

        let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

        alert( rabbit.eats ); // true        
        ```
      - 函数的构造函数
        - Function.prototype.constructor = Function
          - 函数的默认的prototype对象属性是一个只有属性constructor的对象，constructor指向函数本身，我们在chrome的console输出的时候回看到prototype对象还有一个__proto__属性，这个其实是个隐藏属性，不用关心它，因为Function.prototype本身也是一个对象，所有的对象都有这样一个隐藏的属性指向它继承的对象的原型。
      - 在普通对象上，prototype属性并没有什么特别的，就是一个普通的属性而已，与函数的prototype属性不同，它不能用来创造对象。
      - 为了确保正确的 "constructor"，我们可以选择添加/删除属性到默认 "prototype" 而不是将其整个覆盖，当然我们可以重新创建constructor属性，并将它指向正确的构造函数。
        ```
        function Rabbit() {}

        // Not overwrite Rabbit.prototype totally
        // just add to it
        Rabbit.prototype.jumps = true
        // the default Rabbit.prototype.constructor is preserved        
        ```
      - 默认情况下，所有的函数F.prototype = { constructor: F }，所以我们通过访问对象实例的constructor属性获取到构造函数
    - Native prototypes
      - Object.prototype
        - Object.prototype是所有对象继承的原型链，所有对象的__proto__都是指向Object.prototype,从而获取对象的方法，例如`let obj = {};` 实际上是调用的构造函数`new Object()`来创建的对象，所以`obj.__proto__ === Object.prototype //true`。
        - Object.prototype的`__proto__`值是null，是原型链向上查找的终点。
      - 内置对象的原型继承链
        - 在原型链上如果对象已经有同名的方法，就会调用在对象上的方法，而且同名方法的实现也通常不同，例如`arr.toString()`会把数组对象的每一项转换成参数序列，而`object.toString()`会把尝试把对象转换字符串，而使用`'' + object`也会触发object的隐式转换，暗示是字符串，所以调用了`object.toString()`, 使用`+ object`会触发object的隐式转换，暗示是数字，所以调用了`parseInt(obj)`尝试把对象转换为数字。
        - 内置对象的原型链继承
          - Array
            ```
            let arr = [1, 2, 3];
            arr.__proto__ === Array.prototype; //true
            arr.__proto__.__proto__ === Object.prototype; //true
            arr.__proto__.__proto__.__proto__;// null
            ```
          - Function
            ```
            let func = function(){};
            func.__proto__ === Function.prototype; //true
            func.__proto__.__proto__ === Object.prototype; //true
            func.__proto__.__proto__.__proto__;// null
            ```
          - Number
            ```
            let num = 123;
            num.__proto__ === Number.prototype; //true
            num.__proto__.__proto__ === Object.prototype; //true
            num.__proto__.__proto__.__proto__;// null
            ```
      - 基础数据类型调用原型方法的实现
        - 对于字符串，数字，和布尔值，我们试图访问他们的方法的时候，浏览器引擎会使用内置的包装器创建一个临时的包装对象，他们由内置的构造函数`String, Number, Boolean`实现，通过他们的原型链`String.prototype, Number.prototype, Boolean.prototype`获取方法，计算完成再销毁临时包装对象返回值。
        - “值 null 和 undefined 没有对象包装” 特殊值 null 和 undefined 要被区分看待。它们没有对象包装，所以它们没有自己的方法和属性。并且它们没有相应的原型。
      - 从原型中借用方法
        - 我们可以把内置对象上原型链上的方法通过结合func.apply(obj, argsArr),func.call(obj, param1, param2, ...)的方式调用
        ```
        function showArgs() {
            // 从数组借用 join 方法并在 arguments 的上下文中调用
            alert( [].join.call(arguments, " - ") );
            //另一种直接通过原型链获取到方法join
            // Array.prototype.join.call(arguments, " - ")
        }

        showArgs("John", "Pete", "Alice"); // John - Pete - Alice        
        ```
      - 内置对象的原型可以被修改或者被新的方法填充。但是这样做是不被推荐的。只有当添加一个还没有被 JavaScript 引擎支持的新方法的时候才可能允许这样做。
    - Prototype methods, objects without `__proto__`
      - `__proto__` 是 [[Prototype]] 的 getter/setter，位置在 Object.prototype，和其他方法相同。
      - Object.create(proto [, descriptors]) 利用指定的对象proto的原型对象来创建新的对象
        - proto 创建新对象的原型对象
        - descriptors 额外添加到对象上的数据属性或者访问器属性
        ```
        let animal = {
            eats: true
        };

        // 以 animal 为原型创建一个新对象
        let rabbit = Object.create(animal, {
            jumps: {
                value: true,
                writable:true,
                enumerable: true,
                configurable:true,                
            }
        });

        alert(rabbit.eats); // true
        alert(Object.getPrototypeOf(rabbit) === animal); // 获取 rabbit 的原型

        Object.setPrototypeOf(rabbit, {}); // 将 rabbit 的原型更改为 {}        
        ```
      - Object.getPrototypeOf(obj) 返回 obj 的 [[Prototype]]（和 `__proto__` getter 相同）。
      - Object.setPrototypeOf(obj, proto) 将 obj 的 [[Prototype]] 设置为 proto（和 `__proto__` setter 相同）。
      - 对象的完整复制
        ```
        // obj 对象的浅复制,包含了所有属性：可枚举的和不可枚举的，数据属性以及 seeters/getters —— 所有属性，以及正确的 [[Prototype]]。
        let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));        
        ```
      - 极简对象
        - 我们可以不借助 prototype 创建一个对象，那就是 Object.create(null)。这些对象被用作是「纯字典」，对于它们而言 `__proto__` 作为键没有问题，因为他们没有默认对象创建时的原型链继承。

      - 获取对象的属性
        - Object.keys(obj) / Object.values(obj) / Object.entries(obj) —— 返回包含自身属性的名称/值/键值对的数组。不包括继承的属性。
        - Object.getOwnPropertySymbols(obj) —— 返回包含所有自身 symbol 属性名称的数组。
        - Object.getOwnPropertyNames(obj) —— 返回包含所有自身字符串属性名称的数组。
        - Reflect.ownKeys(obj) —— 返回包含所有自身属性名称的数组。
        - for...in循环会遍历继承来的属性
          ```
            let animal = {
                eats: true
            };

            let rabbit = {
                jumps: true,
                __proto__: animal
            };

            // 这里只有自身的键
            alert(Object.keys(rabbit)); // jumps

            // 这里包含了继承得来的键
            for(let prop in rabbit) alert(prop); // jumps，然后 eats          
          ```
        - 使用object.hasOwnProperty(key)来辨别名为key的属性是否是obj的自身属性
          ```
            let animal = {
                eats: true
            };

            let rabbit = {
                jumps: true,
                __proto__: animal
            };

            for(let prop in rabbit) {
                let isOwn = rabbit.hasOwnProperty(prop);
                alert(`${prop}: ${isOwn}`); // jumps:true, then eats:false
            }          
          ```
          rabbit.hasOwnProperty 这个方法来自哪里？观察继承链我们发现这个方法由 Object.prototype.hasOwnProperty 提供。换句话说，它是继承得来的。
          但是如果说 for...in 列出了所有继承属性，为什么 hasOwnProperty 这个方法没有出现在其中？答案很简单：它是不可枚举的。就像所有其他在 Object.prototype 中的属性一样。这是为什么它们没有被列出的原因。

  - Classes
    - Class basic syntax
      - syntax
        ```
        class MyClass{
            prop = value; //filed
            constructor(...args){ //Constructor
                ...
            }
            method(...){ //method

            }1
            get someProperty(){ ... } //getter method
            set someProperty(value){ ... } //setter method
            [Symbol.iterator](){ ... } //iterate name/symbol method
            ...
        }
        ```
        - 类方法之间没有逗号，和创建对象时的方法是不同的，而且类内部无法像函数一样通过闭包创建私有变量和私有函数。
        - `typof class`返回的结果是 function javascript里的类本质上是函数，类可以通过函数重写
      - 类表达式
        - 类似于命名函数表达式（Named Function Expressions），类表达式可能也可能没有名称。
        - syntax
          ```
            let User = class MyClass {
                sayHi() {
                    alert(MyClass); // MyClass 仅在其内部可见
                }
            };

            new User().sayHi(); // 正常运行，显示 MyClass 中定义的内容

            alert(MyClass); // 错误，MyClass 在外部不可见          
          ```
      - 从技术上来说，MyClass是一个函数，提供作为constructor的那个，而method,getter,settor,都被写入MyClass.prototype


    - Class inheritance
      - syntax
        ```
        class Child extends Parent{
            ...
        }
        ```
        通过继承，Child类能够访问Parent类中的方法，并可以使用自己的方法扩展他们。
      - extend实现原理
        - 例子
          ```
          class Parent{
              constructor(name){
                  this.name = name;
              }
              sayHi(){
                  alert(`Hello, everyone.`);
              }
          }

          class Child extends Parent{
              introduceMyself(){
                  alert(`My name is ${this.name}.`);
              }
          }

          let childInstance = new Child('Jason');
          childInstance.sayHi(); //Hello, everyone.
          childInstance.introduceMyself(); //My name is Jason.
          ```
          - 通过extends添加了`[[prototype]]`引用，从Child.prototype指向Parent.prototype，当childInstance从Child类中没有找到某个方法，就会尝试从Parent.prototype中获取它。
          - 引用关系
            ```
            childInstance.__proto__ === Child.prototype //true
            Child.prototype.__proto__ === Parent.prototype //true

            //类的构造函数关系
            Parent.prototype.constructor === Parent
            Parent.constructor.prototype === Parent.prototype
            Child.prototype.constructor === Child
            Child.constructor.prototype === Child.prototype

            //Method searching path
            childInstance.sayHi() -> childInstance.__proto__.sayHi() -> Child.prototype.sayHi() -> Child.prototype.__proto__.sayHi() -> Parent.prototype.sayHi()//got it -> ...
            ```
          - Javascript内置的对象也是同样基于原型继承的，例如Date对象，它也可以使用所有的Object对象的方法
            ```
            Date.prototype.__proto__ === Object.prototype
            ```
      - 重写方法和super关键字
        - 通常我们不希望替换父类的方法，而是希望基于它做一些功能的调整和扩展，在我们重写的方法中做一些事情，但是在我们的方法执行过程中调用父类方法。
        - `super.method(...)`调用父类方法
        - `super(...)`调用父类构造函数，在子类的constructor中调用
        - 例子
          ```
          //重写父类的方法，基于上个例子的继承关系
          class Child extends Parent{
              //Rewrite the parent method sayHi
              sayHi(){
                  super.sayHi();//Call the parent method
                  alert('Nice to meet you!'); //Add new feature
                  this.introduceMyself(); //Call its method
              }
          }
          ```

      - 子类重写默认构造函数
        - 自动创建的默认构造函数，如果一个类继承了另一个类但是没有声明自己的constructor，默认会创建一个如下的构造函数
        ```
        class Child extends Parent{
            constructor(...args){
                super(...args);
            }
        }
        ```
        - 重写子类构造函数
          - 在子类constructor中重写构造函数过程中，一定要在子类this之前调用super();
            - 在 JavaScript 中，“继承类的构造函数”与所有其他的构造函数之间存在区别。在继承类中，相应的构造函数会被标记为特殊的内部属性 [[ConstructorKind]]:"derived"。
            - 不同点就在于：
              - 当一个普通构造函数执行时，它会创建一个空对象作为 this 并继续执行。
              - 但是当继承的构造函数执行时，它并不会做这件事。它期望父类的构造函数来完成这项工作。
              因此，如果我们构建了我们自己的构造函数，我们必须调用 super，因为如果不这样的话 this 指向的对象不会被创建。并且我们会收到一个报错。
          - 例子
            ```
            class Child extends Parent{
                constructor(name, childName){
                    super(name);
                    this.childName = childName;
                }
                ...
            }
            ```
      - `super` and `[[HomeObject]]`
        - 当一个函数被定义为类或者对象方法时，它的 [[HomeObject]] 属性就成为那个对象。然后 super 使用它来解析父类原型和它自己的方法。
        - 方法在内部 [[HomeObject]] 属性中记住它们的类/对象。这就是 super 如何解析父类方法的。
        - 因此，将一个带有 super 的方法从一个对象复制到另一个对象是不安全的。
        
      - 箭头函数没有自己的this或super，所以他们是从上下文中获取的，在应用的过程中能融入就近的上下文。
        - 例子
        ```
        //setTimeout在调用过程会有this作用域的问题，但是我们通过使用箭头函数将作用域指向外层函数。
        class Child extends Parent{
            sayHi(){
                setTimeout(() => super.sayHi(), 1000); //Call the parent method sayHi after 1 second
            }
        }
        ```

    - Static properties and methods
      - 我们可以把一个方法赋值给一个类方法，而不是赋给它的 "原型对象"。这样的方法我们称为静态的。
      - 静态方法用来实现一个属于类，但不属于类的某个对象的特定方法.举个例子， 一个用来比较的方法 Article.compare(article1, article2) 或者一个工厂函数 Article.createTodays()
      - 工厂函数例子，创建一个当天的文章
      ```
        class Article {
            constructor(title, date) {
                this.title = title;
                this.date = date;
            }

            static createTodays() {
                // 记住，this = Article
                return new this("Today's digest", new Date());
            }
        }

        let article = Article.createTodays();

        alert( article.title ); // Todays digest      
      ``` 
      - 例子
      ```
        class User {
            static staticMethod() {
                alert(this === User);
            }
        }

        User.staticMethod(); // true
        //这实际上跟直接作为属性赋值做了同样的事情
        class User() { }

        User.staticMethod = function() {
            alert(this === User); //在 User.staticMethod 方法内部，this 的值是构造函数 User 它自己（“点之前对象”[object before dot]规则）
        };        
      ```
      - 静态属性
        - 例子
        ```
        class Article {
            static publisher = "Ilya Kantor";
        }

        alert( Article.publisher ); // Ilya Kantor        
        ```

      - 它们在类声明中通过 static 来标记。当我们想要存储类级别的数据时，我们会使用静态属性，而不是在实例上绑定数据
      - 语法
          ```
          class MyClass {
              static property = ...;

              static method() {
                  ...
              }
          }
        ```
      - 技术上来说，静态声明等同于直接给类本身赋值
        ```
        MyClass.property = ...
        MyClass.method = ...        
        ```
      - 静态属性和方法是被继承的。
        - 对于 class B extends A，类 B 的 prototype 指向了 A：B.[[Prototype]] = A。因此，如果一个字段在 B 中没有找到，会继续在 A 中查找。


    - Private and protected properties and methods
      - 就面向对象编程（OOP）而言，内部接口与外部接口的划分称为封装。
      - 在面向对象的编程中，属性和方法分为两组：
        - 内部接口 —— 可以通过类的其他方法访问，但不能从外部访问的方法和属性。
        - 外部接口 —— 也可从类的外部访问的方法和属性。
      - 受保护的属性通常以下划线 _ 作为前缀]
        - 例子，一个咖啡机类的内部属性让我们将 waterAmount 属性更改为受保护的属性以对其进行更多控制。例如，我们不希望任何人将其值设置为小于零的数.
        ```
        class CoffeeMachine {
            _waterAmount = 0;

            set waterAmount(value) {
                if (value < 0) throw new Error("Negative water");
                this._waterAmount = value;
            }

            get waterAmount() {
                return this._waterAmount;
            }

            constructor(power) {
                this._power = power;
            }

        }

        // 创建咖啡机
        let coffeeMachine = new CoffeeMachine(100);

        // 加入水
        coffeeMachine.waterAmount = -10; // Error: Negative water        
        ```
      - 只读的“power”
        - 对于 power 属性，让我们将它设为只读的。有时候一个属性必须仅在创建时设置，然后不再修改.这就是咖啡机的实际情况：功率永远不会改变.要做到这一点，我们只需要设置 getter，而不是 setter：
        - 例子
        ```
        class CoffeeMachine {
            // ...

            constructor(power) {
                this._power = power;
            }

            get power() {
                return this._power;
            }

        }

        // 创建咖啡机
        let coffeeMachine = new CoffeeMachine(100);

        alert(`Power is: ${coffeeMachine.power}W`); // 功率是：100W

        coffeeMachine.power = 25; // Error (no setter )       
        ```
      - 私有的“#waterLimit”
        - 私有属性和方法应该以 # 开头。他们只能从类的内部访问。
        - 例子
        ```
        class CoffeeMachine {
            #waterLimit = 200;

            #checkWater(value) {
                if (value < 0) throw new Error("Negative water");
                if (value > this.#waterLimit) throw new Error("Too much water");
            }

        }

        let coffeeMachine = new CoffeeMachine();

        // 不能从类的外部访问其私有方法
        coffeeMachine.#checkWater(); // Error
        coffeeMachine.#waterLimit = 1000; // Error        
        ```
      - 面对对象编程总结
        - 保护用户，使他们不会误伤自己
          - 想象一下，有一群开发人员使用咖啡机。它是由“Best CoffeeMachine”公司制造的，工作正常，但保护盖被拿走了。因此内部接口暴露了出来。
          - 所有的开发人员都是文明的 —— 他们按照预期使用咖啡机。但其中一个人，约翰，被认为是最聪明的，并且决定让他在咖啡机内部做一些调整。然而咖啡机两天后就坏了。
          - 这肯定不是约翰的错，而是那个取下保护套并让约翰执行自己操作的人的错。
          - 编程也一样。如果一个类的使用者想要改变那些本不打算从外部改变的东西 —— 后果是不可预测的。
        - 可支持的
          - 编程的情况比现实生活中的咖啡机更复杂，因为我们不只是购买一次。代码不断经历着发展和改进。  
        - 如果我们严格界定内部接口，那么类的开发人员可以自由地更改其内部属性和方法，即使没有通知用户
          - 如果你是这样的类的开发者，当知道由于没有外部代码的依赖，私有方法可以安全地重命名，它们的参数可以改变，甚至可以删除是很棒的事。
          - 对于使用者来说，当新版本出现时，它可能是全面的内部检查，但如果外部接口相同，则仍然很容易升级。
        - 隐藏复杂性
          - 人们喜欢使用简单的东西。至少从外部来看是这样。内部的东西则是另外一回事了。程序员也不例外。
        - 隐藏实施细节时总是很方便，并且提供了一个简单的，记录详细的外部接口。
          - 为了隐藏内部接口，我们使用受保护的或私有的属性：
            - 受保护的字段以 _ 开头。这是一个众所周知的惯例，没有在语言层面强制执行。程序员只应该通过它的类和它继承的类中访问以 _ 开头的字段。
            - 私有字段以 # 开头。JavaScript 确保我们只能访问类中的内容。

    - Extending build-in classes


    - Class checking 'instanceof'
      - instanceof 操作符用于检测对象是否属于某个 class，同时，检测过程中也会将继承关系考虑在内
        `obj instanceof Class`
      - instanceof 在涉及多层类结构的场合中比较实用，这种情况下需要将类的继承关系考虑在内。
        - 例子
        ```
        class Animal {}
        class Rabbit extends Animal {}

        let rabbit = new Rabbit();
        alert(rabbit instanceof Animal); // true
        // rabbit.__proto__ === Rabbit.prototype
        // rabbit.__proto__.__proto__ === Animal.prototype (match!)        
        ```        
      - 下面，来总结下大家学到的类型检测方式：
        - typeof	用于检测：基本数据类型	返回：string
        - {}.toString	用于检测：基本数据类型、内置对象以及包含 Symbol.toStringTag 属性的对象	返回：string
        - instanceof	用于检测：任意对象	返回：true/false
      - {}.toString 基本就是一增强版 typeof，本质是`Object.prototype.toString.call(testObj)`。
        - 内置的 toString 方法可以从对象中提取出来，以其他值作为上下文（context）对象进行调用，调用结果取决于传入的上下文对象。
        - 如果传入的是 number 类型，返回 [object Number]
        - 如果传入的是 boolean 类型，返回 [object Boolean]
        - 如果传入 null，返回 [object Null]
        - 传入 undefined，返回 [object Undefined]
        - 传入数组，返回 [object Array]

      - Symbol.toStringTag
        - 对象的 toString 方法可以使用 Symbol.toStringTag 这个特殊的对象属性进行自定义输出。
        - 例子
        ```
        let user = {
            [Symbol.toStringTag]: "User"
        };

        alert( {}.toString.call(user) ); // [object User]        
        ```

    - Mixins
      - 在 JavaScript 中，我们只能继承单个对象。每个对象只能有一个 [[Prototype]] 原型。并且每个类只可以扩展另外一个类
      - Mixin — 是一个通用的面向对象编程术语：一个包含其他类的方法的类
      - JavaScript 不支持多继承，但是可以通过拷贝多个类中的方法到某个类的原型中实现 mixin。
      - 在 JavaScript 中构造一个 mixin 最简单的方式就是构造一个拥有许多实用方法的对象，通过这个对象我们可以轻易地将这些实用方法合并到任何类的原型中
      - 如果 Mixins 偶尔会重写原生类中的方法，那么 Mixins 可能会成为一个冲突点。因此通常情况下应该好好考虑 mixin 的命名，以减少这种冲突的可能性
      - mixin继承例子,请注意在 sayHiMixin 内部对于父类方法 super.say() 的调用会在 mixin 的原型上查找方法而不是在 class 自身查找
        ```
        //Base mixin
        const sayMixinBase = {
            say(phrase) {
                alert(phrase);
            }
        }
        //Inherit from mixin
        let sayHiMixin = {
            __proto__: sayMixinBase, // （或者，我们可以在这里通过 Object.create 来设置原型。）

            sayHi() {
                // 调用父类中的方法
                super.say(`Hello ${this.name}`);
            },
            sayBye() {
                super.say(`Bye ${this.name}`);
            }
        }

        class User {
            constructor(name) {
                this.name = name;
            }
        }

        //Copy sayHiMixin method to class
        Object.assign(User.prototype, sayHiMixin); //注意这里是类的prototype对象上复制方法
        let user = new User("Jason");
        user.sayHi();        
        ```      
      - 例子
      ```
        let eventMixin = {
            /**
            * 订阅事件，用法：
            *  menu.on('select', function(item) { ... }
            */
            on(eventName, handler) {
                if (!this._eventHandlers) this._eventHandlers = {};
                if (!this._eventHandlers[eventName]) {
                    this._eventHandlers[eventName] = [];
                }
                this._eventHandlers[eventName].push(handler);
            },

            /**
            * 取消订阅，用法：
            *  menu.off('select', handler)
            */
            off(eventName, handler) {
                let handlers = this._eventHandlers && this._eventHandlers[eventName];
                if (!handlers) return;
                for (let i = 0; i < handlers.length; i++) {
                    if (handlers[i] === handler) {
                        handlers.splice(i--, 1);
                    }
                }
            },

            /**
            * 触发事件并传递参数
            *  this.trigger('select', data1, data2);
            */
            trigger(eventName, ...args) {
                if (!this._eventHandlers || !this._eventHandlers[eventName]) {
                    return; // 对应事件名没有事件处理函数。
                }

                // 调用事件处理函数
                this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
            }
        };
        // 新建一个 class
        class Menu {
            choose(value) {
                this.trigger("select", value);
            }
        }
        // 添加 mixin
        Object.assign(Menu.prototype, eventMixin);

        let menu = new Menu();

        // 被选中时调用事件处理函数：
        menu.on("select", value => alert(`Value selected: ${value}`));

        // 触发事件 => 展示被选中的值：123
        menu.choose("123"); // 被选中的值      
      ```


  - Error handling
  - Promises, async/await
    - Introduction: callback
      - 回调
        - Javascript中很多方法都需要异步调用，例如发送AJAX request在请求返回成功或者失败后执行那些方法，加载一个远程javascript脚本文件并在文件加载成功后调用文件中的function，我们就需要传一个回调函数给异步方法状态改变的方法调用内部并执行这个传入的回调函数，还可以通过参数把异步结果通过传入的回调函数传出异步方法内部在回调函数中运行。
        - 例子: 实现一个远程加载javascript并插入到文档中成功后执行某些方法的函数
        ```
        let loadScript = function(src, callback){
            const script = document.creatElement('script');
            script.src = src;
            script.addEventListener('load', () => callback(script));
            document.head.append(script);
        }

        loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
            alert(`Cool, the ${script.src} is loaded`);
            alert( _ ); // 在远程加载的js脚本中声明的函数，我们可以在这里调用
        });
        ```
        - 基于上个例子，我们想实现按顺序加载多个远程javascript文件，并在都加载成功后调用里面的方法
        ```
        loadScript('./my/script1.js', () =>{
            loadScript('./my/script2.js', () => {
                loadScript('./my/script3.js', () => {
                    //All scripts are downloaded successful.
                    doSomething();
                });
            })
        })
        ```
        当需要加载的脚本逐渐增多，我们会写很多层的嵌套的回调函数，这称之为回调金字塔或者回调地狱。我们在平时写代码要注意不要有过多的嵌套，会让代码的可读写变差，尤其回调函数需要参数的时候
        - 在上个例子中，我们并没有考虑错误因素，假如加载失败会怎样，所以我们应该让方法更加严谨，能够处理各种特殊情况，各种边界值。这里我们使用一种特殊的方法给回调函数传参，我们称之为error-first callback，callback的第一个参数是为传递错误对象而保留的，一旦反生错误，就调用callback(error)，把错误对象传递给回调函数，通过判断第一个参数的错误对象是否为null，来确定是成功还是失败并作出对应的处理，假如没有错误，我们通过传递callback(null, result1, result2, ...)来传递结果。
        ```
        let loadScript = function(scr, callback){
            let script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', () => callback(null, script));
            script.addEventListener('error', () => callback(new Error('Script load error for ${scr}')));
            document.head.append(script);
        }

        let handleError = (err) => console.log(err);
        
        loadScript('./my/script1.js', (error, script) => {
            if(error){
                //Handle error
                handleError(error);
            }else{
                //Success call
            }
        });
        ```
        我们假如有多个脚本需要加载，这个回调因为还有if...else的判断，回调地狱将会更加严重。
        - 我们可以通过为每一个回调函数指定一个函数引用来解决回调地狱嵌套过多的问题，假如我们使用上面的方法来远程加载多个javascript文件
        ```
        loadScript('./my/script1.js', step1);

        let handleError = (err) => console.log(err);

        let step1 = function(error, script){
            if(error){
                handleError(error);
            }else{
                loadScript('./my/script2.js', step2);
            }
        }

        let step2 = function(error, script){
            if(error){
                handleError(error);
            }else{
                loadScript('./my/script2.js', step3)
            }
        }

        let step3 = function(error, script) {
            if (error) {
                handleError(error);
            } else {
                // ...在所有脚本被加载后继续 (*)
            }
        };
        ```
        这显然不是一个好办法，创建了一大堆step*函数，可读性非常差，我们我们使用Promise对象解决回调地狱的问题


    - Promise
      - Promise对象就是为了解决某些异步方法或者延时执行等未来不确定什么时候执行回调的需求而存在的。我们只需要在创建Promise对象的时候，在它参数内回调函数，包装好异步对象成功回调的时候调用参数的特殊方法resolve，失败的时候调用参数的特殊方法reject，然后就什么都不用管了，Promise对象自动关联这个两种状态并在返回的链式调用方法中返回对应的结果，通过resolve把结果传递给then方法回调函数参数，通过reject把错误对象传递给catch方法回调函数参数。
      - 这个对象比较难理解的就是，要改变之前回调函数的思维，我们只要按照逻辑在成功的条件调用resolve，失败的条件调用reject，其他的我们并不需要关心，当然记得在使用的时候其实是在Promise对象创建的回调函数内部处理这些逻辑的，然后再返回一个Promise实例。之后在then方法里处理结果就可以了。
      - 例子,传递给 new Promise的函数称之为 executor。当 promise 被创建时，它会被自动调用。它包含生产者代码，这最终会产生一个结果。与上文类比，executor 就是“歌手”。
        ```
        let promise = new Promise(function(resolve, reject) {
            // executor (生产者代码，"singer")
            ...
            //result condition or other asynchronous function result, such as AJAX request or setTimeout
            resolve("done");
            ...
            reject(new Error("…")); // 被忽略
            setTimeout(() => resolve("…")); // 被忽略
        })
        ```
        executor 只会调用 resolve 或 reject。Promise 的最后状态一定会变化。对 resolve 和 reject 的深层调用都会被忽略
      - Resolve/reject can be immediate
      - 实际上，executor 通常会异步执行一些动作，然后在一段时间后调用 resolve/reject，但它不必那么做。我们可以立即调用 resolve 或 reject，就像这样：
        ```
        let promise = new Promise(function(resolve, reject) {
            resolve(123); // immediately give the result: 123
        });        
        ```
      - 私有属性
        - state 最初是pendding，成功后被修改成fullfilled，失败后背修改成rejected
        - result 最初是undefined
        - Promise 的 state 和 result 属性是内部的。我们不能从代码中直接访问它们，但是我们可以使用 .then/catch 来访问，下面是对此的描述。

      - 调用resolve时发生了什么
        - 将state设置成了fullfilled
        - set result to value
      - 调用reject时发生了什么
        - 将state设置成了rejected
        - set result to error
      - 例子，重写loadScript
        ```
        let loadScript = function(src){
            return new Promise((resolve, reject) => {
                let script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', script => resolve(script));
                script.addEventListener('error', err => reject(err));
                document.head.append(script);
            });
        }

        //How to use it?
        let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js");

        promise.then(script => alert(`${script.scr} is loaded!`), error => alert(`Error: ${error.message}`));
        promise.then(script => alert(`One more handler to do something else...`));
        ```
        这样改写后的好处是我们可以按照自然顺序去编写代码的逻辑，使用.then or .catch来处理结果。
      - Promise 对象充当生产者（executor）和消费函数之间的连接 —— 那些希望接收结果/错误的函数。假设函数可以使用方法 promise.then 和 promise.catch 进行注册
        ```
        //then
        promise.then(
            function(result) { /* handle a successful result */ },
            function(error) { /* handle an error */ }
        );
        //
        let promise = new Promise(function(resolve, reject) {
            setTimeout(() => resolve("done!"), 1000);
        });

        // resolve 在 .then 中运行第一个函数
        promise.then(
            result => alert(result), // 在 1 秒后显示“已经完成！”
            error => alert(error) // 不会运行
        );

        //catch
        let promise = new Promise(function(resolve, reject) {
            setTimeout(() => reject(new Error("Whoops!")), 1000);
        });

        // reject 在 .then 中运行第二个函数
        promise.then(
            result => alert(result), // 无法运行
            error => alert(error) // 在 1 秒后显示 "Error: Whoops!"
        );
        ```
      - then方法和catch方法
        - then
            ```
            promise.then(result => {
                //handle a successful result, call this when the status of promise is resolved
            }, error => {
                //handle an error, call this when the status of promise is rejected
            });
            ```
        - catch(handler)，其实是.then(null, handler)的简写
            ```
            promise.catch(error => console.log(error));
            ```
        - then(handler)在下一轮eventloop的开始处理，和setTimeout(handler, 0)是一样的逻辑
            ```
            // an immediately resolved promise
            let promise = new Promise(resolve => resolve("done!"));
            promise.then(alert); // 完成！（在当前代码完成之后）
            alert("code finished"); // 这个 alert 会最先显示
            ```
        - .then/catch 的处理器总是异步的
            ```
            // an immediately resolved promise
            let promise = new Promise(resolve => resolve("done!"));

            promise.then(alert); // 完成！（在当前代码完成之后）

            alert("code finished"); // 这个 alert 会最先显示        
            ```

    - Promise chaining
      - 什么是Promise链
        - Promise的链式调用，由于then方法返回的也是一个promise对象，我们可以通过链式调用继续在then的回调函数中返回值一个接一个的按顺序对result进行处理，注意then里面的并不是异步的，因为当前这个链式调用的promise的对象的状态已经是fullfilled了。
        - 例子
        ```
        new Promise(function(resolve, reject) {
            setTimeout(() => resolve(1), 1000); // (*)
        }).then(function(result) { // (**)
            alert(result); // 1
            return result * 2;
        }).then(function(result) { // (***)
            alert(result); // 2
            return result * 2;
        }).then(function(result) {
            alert(result); // 4
            return result * 2;
        });
        //随着 result 在处理程序链中传递，我们会看到 alert 依次显示：1 → 2 → 4。因为 promise.then 返回了一个 promise，所以我们可以用它调用下一个 .then。当控制函数返回一个值时，它会变成当前 promise 的 result，所以会用它调用下一个 .then
        ```
        运行流程如下：
        1. 初始 promise 1 秒后 resolve (*)，
        2. 然后 .then 方法被调用 (**)。
        3. 它返回的值被传入下一个 .then 的处理程序 (***)
        4. ……依此类推。        
      - 如果想要在then里按顺序链式调用异步任务，可以返回一个状态为pending的新promise对象。
        - 正常来说，.then 处理程序返回的值会立即传入下一个处理程序。但是有一个例外。
        - 如果返回的值是一个 promise，那么直到它结束之前，下一步执行会一直被暂停。在结束之后，该 promise 的结果会传递给下一个 .then 处理程序。
        - 例子
        ```
        new Promise(function(resolve, reject) {
            setTimeout(() => resolve(1), 1000);
        }).then(function(result) {
            alert(result); // 1
            return new Promise((resolve, reject) => { // (*)
                setTimeout(() => resolve(result * 2), 1000);
            });
        }).then(function(result) { // (**)
            alert(result); // 2
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(result * 2), 1000);
            });
        }).then(function(result) {
            alert(result); // 4
        })        
        ```
        这里第一个 .then 显示 1 并在 (*) 行返回 new Promise(…)，一秒之后它会 resolve 掉，然后 result（resolve 的参数，在这里它是 result*2）被传递给位于 (**) 行的第二个 .then。它会显示 2，而且执行相同的动作。所以输出还是 1 → 2 → 4，但是现在每次 alert 调用之间会有 1 秒钟的延迟。
      - 使用Promise链重写loadScript按顺序加载多个js文件并执行脚本里的函数
        - 例子
        ```
        loadScript("/article/promise-chaining/one.js")
            .then(script => loadScript("/article/promise-chaining/two.js"))
            .then(script => loadScript("/article/promise-chaining/three.js"))
            .then(script => {
                one();
                two();
                three();
            });      
        ```
        这里每个 loadScript 调用返回一个 promise，并且在它 resolve 时运行下一个 .then。 然后它开始加载下一个脚本。所以脚本是依次被加载的。我们可以在链中添加更多的异步动作。请注意代码仍然“扁平”，它向下增长，而不是向右。没有“死亡金字塔”的迹象。
      - Thenable对象
        - .then 可以返回任意的 “thenable” 对象 —— 一个具有 .then 方法的任意对象，并且会被当做一个 promise 来对待
        - 例子
        ```
        class Thenable{
            constructor(num){
                this.num = num;
            }
            then(resolve, reject){
                setTimeout(() => resolve(this.num * 2), 1000);// (**)
            }
        }
        new Promise(resolve => resolve(1))
            .then(result => {
                return new Thenable(result);// (*)
            })
            .then(alert);// 1000 ms 后显示 2
        ```
        JavaScript 在 (*) 行检查 .then 处理程序返回的对象：如果它有一个名为 then 的可调用方法，那么它会调用该方法并提供原生函数 resolve，reject 作为参数（类似于 executor）并在它被调用前一直等待。上面的例子中resolve(2)1 秒后被调用(**)`。然后 result 会延链向下传递。
      - fetch
        - 它发送网络请求到 url 并返回一个 promise。当远程服务器返回响应头（注意不是全部响应加载完成）时，该 promise 用一个 response 来 resolve 掉。
        - 为了读取全部的响应，我们应该调用方法 response.text()：当全部文字内容从远程服务器上下载后，它会返回一个 resolved 状态的 promise，同时该文字会作为 result。其实还有一个方法，response.json() 会读取远程数据并把它解析成 JSON
        - 例子，从远程服务器上下载一个json文件并把它转成JSON对象。
        ```
        fetch('/article/promise-chaining/user.json')
           // 当远程服务器开始响应时，下面的 .then 执行
           .then((response) => {
               return response.json();// 当结束下载时，response.text() 会返回一个新的 resolved promise，该 promise 拥有全部响应文字
           })
           .then((user) => {
               // ...这是远程文件内容
               alert(user.name);
           });
        ```
        - 例子: 从远程服务器获取user name然后通过github服务器进行查询，获取用户头像，添加到body，并且最后显示github的用户名
        ```
        //Get user name from user.json
        function loadUserJson(url){
            return fetch(url).then(response => response.json());
        }
        //Get github user information by user name
        function loadGithubUser(name){
            return fetch(`https://api.github.com/users/${name}`).then(response => response.json());
        }
        function showAvatar(githubUserData){
            return new Promise((resolve, reject) => {
                const img = document.createElement('img');
                img.src = githubUserData.avatar_url;
                img.className = "promise-avatar-example";
                document.body.append(img);

                setTimeout(() => {
                    img.remove();
                    resolve(githubUserData);
                }, 3000);
            });
        }

        loadUserJson('/article/promise-chaining/user.json')
            .then(user => loadGithubUser(user.name))
            .then(showAvatar)
            .then(githubUserData => alert(`Finished showing ${githubUser.name}`));
        ```
    - Error handing with promises
      - 当 promise 被 reject，控制权就移交给链中最近的 rejection 处理程序。这在实际应用中很方便。
      - 隐式 try…catch, Promise 执行（executor）和 promise 处理（handler）程序周围有一个“不可见 try..catch”。如果发生异常，它会被捕获并视为 rejection。
      - 捕获所有错误最简单的方法是在链的末端加上 .catch
        ```
        fetch('/article/promise-chaining/user.json')
            .then(response => response.json())
            .then(user => fetch(`https://api.github.com/users/${user.name}`))
            .then(response => response.json())
            .then(githubUser => new Promise((resolve, reject) => {
                let img = document.createElement('img');
                img.src = githubUser.avatar_url;
                img.className = "promise-avatar-example";
                document.body.append(img);

                setTimeout(() => {
                img.remove();
                resolve(githubUser);
                }, 3000);
            }))
            .catch(error => alert(error.message));
        //通常情况下 .catch 根本不会触发，因为没有错误发生。但是如果上述任意一个 promise reject（网络错误或者不合法的 json 等等），它就会被捕获。
        ```
      - 通过自定义错误准确处理错误类型并作出正确处理
        - 我们应该将 .catch 准确放到我们想要处理错误的位置，并知道如何处理它们。处理程序应该分析错误（可以自定义错误类帮助分析）并且重新抛出未知错误。
        ```
        class HttpError extends Error { // (1)
            constructor(response) {
                super(`${response.status} for ${response.url}`);
                this.name = 'HttpError';
                this.response = response;
            }
        } 
        function loadJson(url) { // (2)
            return fetch(url)
                .then(response => {
                    if (response.status == 200) {
                        return response.json();
                    } else {
                        throw new HttpError(response);
                    }
                })
        } 
        function demoGithubUser() {
            let name = prompt("Enter a name?", "iliakan");

            return loadJson(`https://api.github.com/users/${name}`)
                .then(user => {
                    alert(`Full name: ${user.name}.`);
                    return user;
                })
                .catch(err => {
                    if (err instanceof HttpError && err.response.status == 404) {
                        alert("No such user, please reenter.");
                        return demoGithubUser();
                    } else {
                        throw err; // (*)
                    }
                });
        }

        demoGithubUser();              
        ```
      - 重新抛出（Rethrowing）
        - 在常规 try..catch 中，我们可以分析错误，当我们无法处理的时候可能还会重新抛出（rethrow）它。对于 promise 来说也可以这样做。
        - 如果我们在 .catch 内 throw，此时控制移交到下一个最近的错误处理程序。如果我们处理错误并正常完成，那么它将继续到最近的成功的 .then 处理程序
        - 在下面的例子中，我们可以看到 .catch 的另一种情况。(*) 行的处理程序捕获错误但无法处理它（例如，它只知道如何处理 URIError 错误），所以它再次被抛出：
        ```
        // 执行：catch -> catch -> then
        new Promise((resolve, reject) => {
            throw new Error("Whoops!");
        }).catch(function(error) { // (*)
            if (error instanceof URIError) {
                // handle it
            } else {
                alert("Can't handle such error");
                throw error; // 抛出这个或者其他的错误跳转到下一个 catch
            }
        }).then(function() {
            /* 此处不会运行 */
        }).catch(error => { // (**)
            alert(`The unknown error has occurred: ${error}`);
            // 不会返回任何内容 => 正常方式执行
        });   
        //然后执行从第一个 .catch (*) 跳到链中的下一个 (**)     
        ```
      - 未处理的 rejections
        - 如果发生错误且没有 .catch 捕获，unhandledrejection 处理程序就会被触发并获取具有相关错误信息的 event 对象，此时我们就能做一些处理了。通常这种错误是不可恢复的，所以我们最好的办法是告知用户有关问题的信息，并可能将事件报告给服务器
        - 例子
        ```
        window.addEventListener('unhandledrejection', function(event) {
            // the event object has two special properties:
            alert(event.promise); // [object Promise] - 产生错误的 promise
            alert(event.reason); // Error: Whoops! - 未处理的错误对象
        });

        new Promise(function() {
            throw new Error("Whoops!");
        }); // 没有 catch 处理错误        
        ```
      - 在finally中作出相应，即使是产生错误
        - 最后，如果我们有加载指示（load-indication），.finally 是一个很好的处理程序，在 fetch 完成时停止它
        ```
        function demoGithubUser() {
            let name = prompt("Enter a name?", "iliakan");

            document.body.style.opacity = 0.3; // (1) 开始指示（indication）

            return loadJson(`https://api.github.com/users/${name}`)
            .finally(() => { // (2) 停止指示（indication）
                document.body.style.opacity = '';
                return new Promise(resolve => setTimeout(resolve)); // (*)
            })
            .then(user => {
                alert(`Full name: ${user.name}.`);
                return user;
            })
            .catch(err => {
                if (err instanceof HttpError && err.response.status == 404) {
                    alert("No such user, please reenter.");
                    return demoGithubUser();
                } else {
                    throw err;
                }
            });
        }

        demoGithubUser()        
        ```

    - Promise API
      - Promise 类有 5 种静态方法：
        - Promise.resolve(value)
          - `let promise = Promise.resolve(value);`
          - 等价于`let promise = new Promise(resolve => resolve(value));` 
          - 根据给定值返回 resolved promise。
        - Promise.reject(error) – 根据给定错误返回 rejected promise。
        - Promise.all(promises) 
          - 假设我想要并行执行多个 promise，并等待所有 promise 准备就绪。
          - `let promise = Promise.all([...promises...]);`
          - 例子
          ```
            Promise.all([
                new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
                new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
                new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
            ]).then(alert); 
            // 1,2,3 当 promise 就绪：每一个 promise 即成为数组中的一员  
            //请注意，它们的相对顺序是相同的。即使第一个 promise 需要很长的时间来 resolve，但它仍然是结果数组中的第一个。        
          ```
          - 实际应用例子
          ```
            let names = ['iliakan', 'remy', 'jeresig'];
            let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

            Promise.all(requests)
                .then(responses => {
                    // 所有响应都就绪时，我们可以显示 HTTP 状态码
                    for(let response of responses) {
                        alert(`${response.url}: ${response.status}`); // 每个 url 都显示 200
                    }

                    return responses;
                })
                // 映射 response 数组到 response.json() 中以读取它们的内容
                .then(responses => Promise.all(responses.map(r => r.json())))
                // 所有 JSON 结果都被解析：“users” 是它们的数组
                .then(users => users.forEach(user => alert(user.name)));          
          ```
          - 等待所有的 promise 为 resolve 时返回存放它们结果的数组。如果任意给定的 promise 为 reject，那么它就会变成 Promise.all 的错误结果，所有的其他结果都会被忽略。
            - 例子
            ```
            //如果出现错误，其他 promise 就会被忽略
            Promise.all([
                new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
                new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
                new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
            ]).catch(alert); // Error: Whoops!            
            ```
          - 如果任意一个 promise 为 reject，Promise.all 返回的 promise 就会立即 reject 这个错误。
          - Promise.all(...) 接受可迭代的 promise 集合（大部分情况下是数组）。但是如果这些对象中的任意一个不是 promise，它将会被直接包装进 Promise.resolve
        - Promise.allSettled(promises) （新方法） – 等待所有 promise resolve 或者 reject，并以对象形式返回它们结果数组：
            state：‘fulfilled’ 或 ‘rejected’
            value（如果 fulfilled）或 reason（如果 rejected）
        - Promise.race(promises) – 等待第一个 promise 被解决，其结果/错误即为结果。
          - `let promise = Promise.race(iterablePromise);`
          - 例子,这里的结果会是 1
          ```
            Promise.race([
                new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
                new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
                new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
            ]).then(alert); // 1  
            //在第一个 promise 被解决（“赢得比赛[wins the race]”）后，所有后面的结果/错误都会被忽略.
          ```

    - Promisification
      - Promisification指将一个接受回调的函数转换为一个返回 promise 的函数。我们创建了一个包装函数（wrapper-function）来做同样的事情，在内部调用原来的函数，但返回一个 promise。
      - 例子，将loadScript(src, callback)进行proisify。
        ```
        function loadScript(src, callback) {
            let script = document.createElement('script');
            script.src = src;

            script.onload = () => callback(null, script);
            script.onerror = () => callback(new Error(`Script load error for ${src}`));

            document.head.append(script);
        }

        // 用法：
        // loadScript('path/script.js', (err, script) => {...})        

        let loadScriptPromise = function(src) {
            return new Promise((resolve, reject) => {
                loadScript(scr, (err, script) => {
                    if(err){
                        return reject(err);
                    }
                    resolve(script);
                })
            });
        }
        // loadScriptPromise('path/script.js').then(...)
        ```
      - 由于我们可能需要 promisify 很多函数，使用一个助手（helper）很有意义。promisify(f) 接受一个要被 promisify 的函数，并返回一个包装函数。
        ```
        let promisify = function(fn){
            return function(...args){
                return new Promise((resolve, reject) => {
                    let callback = function(err, res){
                        if(err){
                            return reject(err);
                        }
                        return resolve(res);
                    }
                    args.push(callback);
                    fn.call(this, ...args);
                });
            }
        }
        ```

    - Microtasks
      - Promise 的处理程序（handlers）.then、.catch 和 .finally 都是异步的。
      - Promise微任务队列
        - 队列是先进先出的：首先进入队列的任务会首先运行。
        - 当一个 promise 准备就绪时，它的 .then/catch/finally 处理程序就被放入队列中。但是不会立即被执行。当 JavaScript 引擎执行完当前的代码，它会从Microtask队列中获取任务并执行它。
        - 如果有一个 promise 链带有多个 .then/catch/finally，那么它们中每一个都是异步执行的。也就是说，它会首先排入一个队列，只有当前代码执行完毕而且先前的排好队的处理程序都完成时才会被执行。
      - Promise 未处理的 rejection
        - “未处理的 rejection”是指在 microtask 队列结束时未处理的 promise 错误。
            ```
            let promise = Promise.reject(new Error("Promise Failed!"));
            //promise.catch(err => alert('caught')); 如果加上这段代码，下面的错误就不会被触发，因为已经被catch处理过了

            // Promise Failed!
            window.addEventListener('unhandledrejection', event => alert(event.reason));
            ```
      - Promise 处理始终是异步的，因为所有 promise 操作都被放入内部的“promise jobs”队列执行，也被称为“微任务队列”（v8 术语）。
      - 因此，.then/catch/finally 处理程序总是在当前代码完成后才被调用。
      - 如果我们需要确保一段代码在 .then/catch/finally 之后被执行，最好将它添加到 .then 的链式调用中。
      - Event Loop 算法
        1. 取出宏任务队列中最先进入的task并执行
        2. 执行所有的微任务，当微任务队列不为空的时候
          - 取出微任务队列中最先进入的task并执行
        3. 渲染DOM如果有任何变化发生
        4. 如果宏任务队列空了，等待下一个宏任务出现
        5. 回到第一步
      - 宏任务
        - 通过使用setTimeout(fn)创建一个新的宏任务
        - script标签/setTimeout都是宏任务
      - 宏任务特点
        - 宏任务可以用于拆分需要大量CPU计算的任务到子任务，浏览器能够有时间来响应用户的事件或者在子任务执行期间显示进度。
        - 在事件函数中执行一个动作在事件冒泡结束之后。
      - 用途
        - 拆分高CPU负载任务
        - 让DOM有时间去渲染任务进度
        - 异步分发自定义事件
      - 微任务
        - 通过使用queueMicrotask(fn)创建一个新的微任务
        - 通过返回一个promise对象创建一个新的微任务
        - promise对象的then/catch/finally都是微任务
      - 微任务特点
        - There’s no UI or network event handling between microtasks: they run immediately one after another.
        - 在微任务之间没有UI渲染或者事件触发器，他们一个接一个的立即执行
      - Web Workers
        - 对于重CPU负载的运算而且不想阻断事件循环，我们可以使用Web Worker
        - 这是一种在另一个并行线程中执行代码的方式
        - Web Worker可以和主线程通讯，但是他们有自己的变量和他们自己的事件循环。
        - Web Worker没有访问DOM的权限，但是很有用，主要用于同时使用多个CPU核心计算。
      - 微任务和宏任务的区别
        - Event loop: microtasks and macrotasks
          - Immediately after every macrotask, the engine executes all tasks from microtask queue, prior to running any other macrotasks or rendering or anything else.
          - 在每个宏任务之后，引擎会执行所有微任务队列中的任务，优先于运行其他宏任务或者渲染或其他任何事情。
            - Sample
            ```
            setTimeout(() => alert("timeout"));

            Promise.resolve()
                .then(() => alert("promise"));

            alert("code");            
            ```
            输出结果是code->promise->timeout
          - All microtasks are completed before any other event handling or rendering or any other macrotask takes place.
          - 所有的微任务在事件触发器和DOM渲染或者其他宏任务之前执行完成。
          
    - Async/await
      - Async functions
        - async这个单词表达了一个简单的事情：即这个函数总是返回一个 promise
        - 在函数前面的「async」这个单词表达了一个简单的事情：即这个函数总是返回一个 promise。即使这个函数实际上会返回一个非 promise 的值，函数定义前加上了「async」关键字会指示 JavaScript 引擎自动将返回值包装在一个已决议（resolved）的 promise 内。
        ```
        async function f(){
            return 1;
        }
        f().then(alert); //1
        //async确保了函数返回值是一个promise，也会包装非promise的值。实际上代码是
        async function f(){
            return Promise.resolve(1);
        }
        f().then(alert); //1
        ```
        - async method in class
          - 如果想定义一个async的类方法，直接在方法前面加上async就可以了
          ```
          class Waiter{
              async wait(){
                  return await Promise.resolve(1);
              }
          }
          new Waiter().wait().then(alert); //1
          ```
      - Await
        - 关键字 await 让 JavaScript 引擎等待直到 promise 完成并返回结果，只在 async 函数中有效。
        - 相比 promise.then 来获取 promise 结果，这只是一个更优雅的语法，同时也更可读和更易书写。
        - 例子
        ```
        async function f(){
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve('done'), 1000);
            });
            let result = await promise; //这个函数在执行的时候，暂停在了这一行，并且当 promise 完成后，拿到 result 作为结果继续往下执行。所以「done!」是在一秒后显示的。
            alert(result); //"done"
        }
        f();
        ```
        await 字面的意思就是让 JavaScript 引擎等待直到 promise 状态完成，然后以完成的结果继续执行。这个行为不会耗费 CPU 资源，因为引擎可以同时处理其他任务：执行其他脚本，处理事件等。
        - await 不能在顶层代码运行
        ```
        (async () => {
            let response = await fetch('/article/promise-chaining/user.json');
            let user = await response.json();
            ...
        })();
        ```
      - Error Handling
        - 使用try...catch捕获错误
        ```
        async function f() {
            try {
                let response = await fetch('http://no-such-url');
                let user = await response.json();
            } catch(err) {
                alert(err); // TypeError: failed to fetch
            }
        }
        f();        
        ```
        - 使用promise.catch
        ```
        async function f() {
            let response = await fetch('http://no-such-url');
        }

        // f() 变为一个被拒绝的 promise
        f().catch(alert); // TypeError: failed to fetch // (*)        
        ```
      - async/wait与Promise.all一起使用，当我们需要等待多个promise时，可以使用Promise.all来包裹他们，然后使用await
        ```
        (async () => {
            let result = await Promise.all([
                fetch(url1),
                fetch(url2),
                fetch(url3),
                ...
            ]);
        })();
        ```
      - Microtask queue
        - Async/await 是基于 promise 的，所以它内部使用相同的微任务队列，并且相对宏任务来说具有更高的优先级
        ```
        async function f() {
            return 1;
        }

        (async () => {
            setTimeout(() => alert('timeout'), 0);
            await f();
            alert('await');
        })();        
        ```
        await 总是先完成，因为（作为微任务）它相比 setTimeout 具有更高的优先级。
      - 有了 async/await 我们就几乎不需要使用 promise.then/catch，但是不要忘了它们是基于 promise 的，所以在有些时候（如在最外层代码）我们就不得不使用这些方法。

  - Generators, advanced iteration


  - Modules
    - Modules instruction
      - 传统实现模块的方式
        - AMD — 最古老的模块化系统，最开始应用在 require.js 这个库中
        - CommonJS — 为 Node.js 创建的模块化系统
        - UMD — 另外一个模块化系统，建议作为通用的模块化系统，它与 AMD 和 CommonJS 都是兼容的。
      - 什么是模块？
        - 模块仅仅是一个文件，一个脚本而已，它就是这么简单。用一些关键字比如 export 和 import 来交换模块之间的功能（functionality）或者从一个模块中调用另一个模块中的函数。
        - export 关键字表示在当前模块之外可以访问的变量和功能。就是导出模块的意思。
        - import 关键字允许从其他模块中导入一些诸如函数之类的功能等等。
      - 模块的特点
        - 每个模块都有自己的顶级作用域（top-level scope）。换句话说，一个模块中的顶级作用域变量和函数在其他脚本中是不可见的
        - 模块只执行一次。生成导出，然后在导入的位置共享同一个导出，当在某个位置修改了 admin 对象，在其他模块中是可以看到修改的。
        - 在一个模块中，顶级 this 是未定义的，而不是像非模块脚本中的全局变量。
        - 外部模块脚本 <script type="module" src="..."> 不会阻塞 HTML 的解析，它们与其他资源并行加载。
        - 直到 HTML 文档完全解析渲染后（即使模块脚本比 HTML 先加载完成），模块脚本才会开始运行。
        - 不允许裸模块（“bare” modules）
          - 在浏览器中，必须给与 import 一个相对或者绝对的 URL。没有给定路径的模块被称作“裸”模块。import 中不允许使用这些模块。
          - 在具体环境有所不同，比如 Node.js 或者打包工具中是可以使用裸模块的，因为它们有自己的查找模块和钩子的方法。但是目前浏览器还不支持裸模块。
      - 构建工具
        - 在日常开发中，浏览器模块很少以原始形式使用，通常，我们用一些特殊工具，像 Webpack，将他们打包在一起，然后部署到服务器。
        - 使用打包工具的一个好处是——它们对于如何解析模块给与了足够多的控制，比如允许使用裸模块，以及 CSS/HTML 模块等等。
        - 构建工具完成的事情
          - 用打包函数替换掉原生的 import 调用，生成一个（或者多个，这是可调的）具有所有模块的文件，这就是打包工具的工作。特殊的模块类型，比如 HTML/CSS 模块也是可以这样做的。
          - 删除无法访问的代码
          - 删除未使用的导出（“tree-shaking”）
          - 删除开发中使用的如 console 和 debugger 这样的语句
          - 使用 Babel 可以将现代的，前沿的 JavaScript 语法转换为具有类似功能的旧语法
          - 最终生成压缩文件（删除无用空格，变量用短的名字替换等）
        - 如何使用Babel和Webpack构建ES6开发环境
          - 首先通过npm init初始化项目
          - 然后安装webpack
            - webpack通过指定的webpack.config.js文件中指定的entry文件，分析引入的模块，并执行loader的匹配规则，对相应的文件作出处理并打包返回到指定的output目录。
            - 我们可以通过添加不同的loader对文件进行处理，例如使用Babel-loader对ES6/ES7进行编译成带有polyfill的ES5的代码提高浏览器兼容性。
            - Webpack十分适合在Single Page Application中使用
            - 安装方法
              - `npm install webpack --save-dev`
              - 修改package.json文件中的scripts属性，添加webpack的开发watch命令和打包编译build命令，这些命令都可以通过指定参数来生成的开发环境或者正式产品环境的代码。
                ```
                "scripts": {
                    "build": "webpack -p",
                    "watch": "webpack --watch"
                },                
                ```
                通过在命令行执行`npm run build`就可以执行webpack的生产环境的编译打包
                通过在命令行执行`npm run watch`就可以执行变开发变调试，当代码更新时自动编译。
            - webpack.confg.js webpack的配置文件，webpack通过它来进行初始化
              - 例子
              ```
                var path = require('path');

                module.exports = {
                    entry: './assets/js/index.js', //应用程序入口文件，用来分析import模块
                    output: {
                        filename: 'bundle.js', //打包输出的文件名
                        path: path.resolve(__dirname, 'dist') //打包输出的目录
                    },
                    // 添加的loader模块
                    module: {
                        rules: [{
                            test: /\.js$/, // Run the loader on all .js files
                            exclude: /node_modules/, // ignore all files in the node_modules folder
                            use: 'jshint-loader'
                        }]
                    }
                };
              ```
          - 安装babel-loader
            - 安装方法
            ```
            npm install --save-dev babel-core babel-loader babel-preset-env
            ```
          - NPM命令小结
            - --save/-d 安装项目依赖
            - --save-dev/-D 安装开发依赖
            - npm run nameInPackageScripts 执行package.json中对应的命令行

    - Export and import
      - 声明前导出
        - 导出数组
        ```
        export const month = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', ...];
        ```
        - 导出常量
        ```
        export const MODULES_STANDARD_YEAR = 2015;
        ```
        - 导出类
        ```
        export class User{
            constructor(name){
                this.name = name;
            }
        }
        ```
        - 导出类/函数后没有分号，不要在函数和类的声明后使用分号。
        ```
        export function sayHi(user) {
            alert(`Hello, ${user}!`);
        }  // no ; at the end
        ```

      - 声明后导出
        - 例子，先声明函数再导出
            ```
            function sayHi(user) {
                alert(`Hello, ${user}!`);
            }

            function sayBye(user) {
                alert(`Bye, ${user}!`);
            }

            export {sayHi, sayBye}; // 导出变量列表            
            ```

      - 导入所有`import * as <obj>`
        - 普通导入
            ```
            import {sayHi, sayBye } from './say';
            sayHi('John'); // Hello, John!
            sayBye('John'); // Bye, John!
            ```
        - 全部导入
            ```
            import * as say from './say';
            say.sayHi('John');
            say.sayBye('John');
            ```
        - tree-shaking技术优化导入
          - “通通导入”看起来很酷，语法也很短，但是我们通常为什么要明确列出我们需要导入的内容？
          - 现在的构建工具（webpack 或者其他的）把模块打包到一起，然后对其进行优化以获得更快的加载速度，并且还会删除无用的代码…然后，打包工具会自动检测优化它，并且在打包文件中完全删除其他无用的函数以使得打包后的文件更小，这就是所谓的“tree-shaking”技术
          - 明确列出要导入的内容会使得名称较短：sayHi() 取代 lib.sayHi()。
          - 显示导入可以更好的概述代码结构：在哪里使用了什么。它使得代码阅读和重构更容易

      - 导入为别名`import as`
        - 我们也可以使用 as 让导入具有不同的名字。
            ```
            import { sayHi as hi, sayBye as bye } from './say';
            hi('John'); // Hello, John!
            bye('John'); // Bye, John!            
            ```

      - 导出为别名`export as`
        - 现在 hi 和 bye 是在外面使用时的正式名称
            ```
            //say.js
            export {sayHi as hi, sayBye as bye};
            ...
            //main.js
            import * as say from './say.js';
            say.hi('John'); // Hello, John!
            say.bye('John'); // Bye, John!            
            ```

      - 默认导出
        - 不用花括号的导入看起来很酷。开始使用模块时常见的错误就是忘记花括号。所以请记住，命名导入需要使用花括号，而默认导入不需要。
        - 命名导出必须（理应）具有名称，而 export default 可能是匿名的（没有名称）
          - 下面这些都是完全有效的默认导出
          ```
            export default class { // 没有类名
                constructor() { ... }
            }

            export default function(user) { // 没有函数名
                alert(`Hello, ${user}!`);
            }

            // 导出一个值而不使用变量
            export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];          
          ```
        - 默认导出别名
          - “default”关键词用于默认导出的别名，常用于我们需要引用单独导出和其他脚本的情况。
          ```
            function sayHi(user) {
                alert(`Hello, ${user}!`);
            }

            export {sayHi as default}; // 和我们在函数前添加“export default”一样          
          ```
          - 假设模块 user.js 导出一个默认导出“default”和几个命名导出（虽然很少出现，但是会发生）：
            ```
            //user.js
            export default class User {
                constructor(name) {
                    this.name = name;
                }
            }

            export function sayHi(user) {
                alert(`Hello, ${user}!`);
            }
            //main.js
            import {default as User, sayHi} from './user.js';

            new User('John');         
            ```
      - 关于默认导出和命名导出的选择
        - 开发者应该谨慎使用默认导出，因为这将会使代码更难维护。
        - 在任何地方都使用命名导出。即使只导出一个东西，也仍然使用命名导出，而不是默认导出 default。
      - Re-export
        - “Re-export”语法 export ... from ... 允许直接导出刚刚导入的内容（可能是其他名字），就像这样
        ```
        export {sayHi} from './say.js';
        export {default as User} from './user.js';        
        ```
      - 请注意在 {...} 中的导入/导出语句无效。

    - Dynamic imports
      - import(module) 函数
        - 注意这里是一个import函数，并不是静态的导入命令。静态的import的模块路径必须是原始类型字符串，不能是函数调用。
        - import(module)函数可以在任何地方调用，它返回一个解析为模块对象的Promise
        - 普通Promise对象调用
        ```
        import('modulePath')
            .then(moduleObj => ...)
            .catch(err => loading error...)
        ```
        - async函数调用
        ```
        async function load(){
            const module = await import('modulePath');
            module.method();
        }
        ```


- Document
  - Browser
    - 浏览器环境中Javascript运行环境
      - DOM
        DOM是文档对象模型，它提供了我们通过Javacript访问HTML页面(HTMl Element对象)内容的能力。

      - BOM
        BOM是浏览器对象，提供了很多方法用于访问文档之外关于浏览器的信息
        - Navigator对象
          提供了有关浏览器和操作系统相关信息。例如常用的navigator.userAgent的对象
        - Location对象
          提供了对于当前页面URL相关的处理
        - History对象
          提供了一些对于浏览器历史记录的操作方法
        - 其他方法和属性 例如一些window下的全局方法，alert/confirm/setTimeout...

      - Javascript Core
        - Javascript内置对象
          - Array
          - Object
          - String
          - Number
          - Math
          - Regexp
          - Function
  
      - CSSOM
        - CSSOM for Styling CSS样式表的对象，CSS规则是静态的，很少用到，它与DOM的styling一起作用于DOM对象渲染页面样式
  
  - DOM Tree
    - 根据HTML标签生成DOM对象组成的树桩数据结构就是DOM Tree
    - DOM节点类型
      - document类型 9
      - 元素节点 1
      - 文本节点 3
      - 注释节点
  
  - Walking the DOM 
    - 在DOM tree 之间行走的api
      - 顶层节点document -> document.documentElement -> document.body -> DIVs
      - 访问元素的方法(包含空白文本节点和注释节点)
        - 访问元素子节点
          - childNodes
            返回的是HTMLCollection实时只读对象, 可以使用for of遍历这个可迭代对象
          - firstChild
          - lastChild
        - 访问元素的父节点
          - parentNode
        - 访问元素的兄弟节点
          - previousSibling
          - nextSibling
      - 访问标签元素节点, 只访问元素节点，比较常用
        - 子元素
          - children
          - firstElementChild
          - lastElementChild
        - 兄弟元素
          - previousElementSibling
          - nextElementSibling
        - 父元素
          - parentElement
      - 特殊的table
        - table.rows 所有tr的集合
        - table.tBodies 所有tbody元素的集合
        - table.tHead/table.tFoot
        - tr.cells 在tr下td和th的集合
        - tr.rowIndex 在表格中tr元素的索引
        - td.cellIndex 在tr中td的索引

  - Searching DOM Method: document.getElement*/document.querySelector*
    - DOM Selector
      - document.getElementById(id)
      - document.getElementsByName(name) 返回的是实时集合
      - element.getElementsByTagName(tagName) 返回的是实时集合
      - element.getElementsByClassName(className) 返回的是实时结合
      - element.querySelector(cssSelector)
      - element.querySelectorAll(cssSelector)
    - DOM Filter
      - element.matches(cssSeletor) 通常用于筛选元素子集进行判断
      - element.closest(cssSelector) 匹配与选择器最近的祖先元素，包括其本身
      - elementA.contains(elementB) 检查元素B是否是元素A的子代

  - Node Properties: type/tag/contents
    - DOM层次结构
      - Object对象
        - EventTarget 抽象类，提供事件支持
          - Node 抽象类，提供树的核心功能，遍历树的节点
            - Text
            - ELement DOM元素的基类，遍历元素的方法，以及搜索元素的方法
              - HTMLElement HTML元素的方法getter setter
                - HTMLBodyElement `<body>`元素基类
                - HTMLInputElement `<input>`元素基类
                - HTMLAnchorElement `<a>`元素基类
              - SVGElement
            - Comment
    - Node.nodeType
      - 节点类型 1元素 3文本 只读
    - Node.nodeName
      - 节点名称
    - Node.tagName
      - 大写的元素标签名，注意这里是大写，通常使用node.tagName.toLowerCase()转换成小写再进行对比
    - Element.innerHTML
      - HTML元素内容，可修改
    - Element.outerHTML
      - 完整的元素的HTML
    - Element.nodeValue/data
      - 非元素节点内容，文本，可修改
    - Element.textContent
      - 元素中的文本，可修改，用于安全地插入用户输入的文本
    - Element.hidden
      - 隐藏或者显示元素
  
  - Attributes and Properties
    - Attributes在HTML标签中
    - Properties在DOM对象中，可以通过element[propertyName]访问
    - DOM属性的类型 string或者boolean
      - 即使是数字存储的时候也是以string的形式
    - dataset
      - 可以通过element.dataset[attributeName]直接访问到html tag上的`data-attribute-name`的值
    - 检查HTML标签的attribute
      - elem.hasAttribute(name)
      - elem.getAttribute(name)
      - elem.setAttribute(name, value)
      - elem.removeAttribute(name)
      - elem.attributes name,values key-value map collections

  - Modifying the Document
    - 创建节点
      - document.createElement(elementTagNameString) 创建元素节点
      - document.createTextNode(textString) 创建文本节点
      - elem.cloneNode(deepClone) 克隆节点 deepClone为true时进行深度克隆特性和子元素
    - 插入节点
      - 从parent操作, 返回值为插入的nodeObj
        - parent.appendChild(nodeObj) 插入子节点
        - parent.insertBefore(nodeObj, nextSiblingObj) 在节点nextSiblingObj前插入
        - parent.removeChild(nodeObj) 移除子节点
        - parent.replaceChild(newNodeObj, oldNodeObj) 替换节点
      - 添加节点和字符串(纯文本)
        - node.append(nodes or textStrings) 在node子节点末尾添加节点或字符串
        - node.prepend(nodes or textStrings) 在node子节点开头位置添加节点或字符串
        - ndoe.before(nodes or textStrings) 在node之前的位置增加节点或字符串
        - node.after(nodes or textStrings) 在node之后的位置增加节点或字符串
        - node.replaceWith(nodes or textStrings) 替换node
        - ndoe.remove() 移除node
      - 添加html tag string为node节点到元素指定位置
        - elem.insertAdjacentHTML(posStringName, htmlDOMString);
          - beforebegin 将html插入到elem开头前面的位置
          - afterbegin 将html插入到elem开头后面的位置
          - beforeend 将html插入到elem结尾前面的位置
          - afterend 将html插入到elem结尾后面的位置
        - elem.insertAdjacentText 插入文本
        - elem.insertAdjacentElement 插入元素

  - Styles and Classes
    - 管理class的DOM属性
      - className 所有class的集合string(elem tag的class特性值)
      - classList 用于管理class的对象，方便添加删除以及管理每个className
        - add 添加样式
        - remove 移除样式
        - toggle 切换样式
        - contains 判断是否包含某个样式
    - 改变样式
      - style对象
        - elem.style.cssPropertyName = value 
        - 注意数值类的单位，比如elem.style.top = '20px' 不要写成数值类型了，获取值的结果也是同样的string类型，注意计算和赋值对值类型进行处理
      - styleText
        - elem.style.cssText 相当于elem tag的style特性值 string类型
    - 获取已经解析的样式
        - window.getComputedStyle(elem [, pseudo]) elem是要获取样式的元素，pseudo是伪元素选择例如::before

  - Element size and scrolling
    - elem.offsetParent 最近有定位属性的祖先元素 td th body 最近含有position relative属性的元素
    - 元素外部尺寸，不包括margin，但是包含border width
      - elem.offsetLeft 元素距离定位父元素左上角的横向距离
      - elem.offsetTop 元素距离定位父元素左上角的纵向距离
      - elem.offsetWidth 元素外部宽度，包含border的宽度
      - elem.offsetHeight 元素外部高度，包含border的高度
    - 元素内部尺寸
      - elem.clientLeft 从元素内部内容左上角到元素外部左上角的横向距离
      - elem.clientTop 从元素内部内容左上角到元素外部左上角纵向距离
      - elem.clientWidth 元素内容宽度，包含padding，但是不包含滚动条
      - elem.clientHeight 元素内容高度，包含padding,但是不包含关东糖
    - 元素内容滚动条尺寸
      - elem.scrollWidth 元素可滚动区域内容宽度，包含padding，但是不包含滚动条
      - elem.scrollHeight 元素可滚动区域内容高度，包含padding，但是不包含滚动条
      - elem.scrollLeft 可读写属性 元素横向滚动距离
      - elem.scrollTop 可读写属性 元素纵向滚动距离
  
  - Window size and scrolling
    - 文档可视范围宽度和高度
      - document.documnetElement.clientWidth
      - document.documentElement.clientHeight
    - 整个文档的宽度和高度
      - Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    - 读取当前window窗口滚动
      - window.pageYOffset 窗口纵向滚动
      - window.pageXOffset 窗口横向滚动
    - 改变window窗口滚动
      - window.scrollTo(pageX, pageY) 绝对位置滚动
      - window.scrollBy(x, y) 相对当前位置滚动
      - elem.scrollIntoView(isTop) 滚动到elem可视的位置

  - Coordinates
    - 获取元素相对于窗口的位置，返回值是一个对象包含了以下属性，注意这个值不是固定的，当窗口滚动时，这个值会随着滚动位置的改变而改变，但是它永远是相对于窗口计算位置，注意它与elem.offsetTop/elem.offsetLeft的固定值的区别
      - top 元素顶部相对于窗口顶部的距离，注意可以是负值，负值意味着元素的上部已经超出窗口上部边缘
      - left 元素左边相对于窗口左侧的距离，注意可以是负值
      - right 元素右边缘距离窗口左边的距离
      - bottom 元素底部边缘距离窗口顶部的距离
  
    - 相对于窗口的坐标 position: fixed
      - elem.getBoundingClientRect() 
    - 相对于文档的坐标 postion: absolute
      - elem.getBoundingClientRect().left/top + pageXOffset/pageYOffset

- Introduction to Events
  - Browser Events
    - Event list
      - MouseEvent
        - click 鼠标左键点击一个元素
        - contextmenu 鼠标右击一个元素
        - mouseover/mouseout 鼠标移入/移出一个元素时
        - mousedown/mouseup 当鼠标按键按下/抬起时
        - mousemove 当鼠标移动时
  
      - FormEvent
        - submit 表单提交
        - focus 表单输入元素获得焦点

      - KeyBoardEvent
        - keyup 按键抬起
        - keydown 按键按下

      - DocumentEvent
        - DOMContentLoaded DOM构建时

      - CSSEvent
        - transitionend CSS动画执行完成时
  
    - 事件处理器
      - 为了响应时间，我们可以通过分发处理，在事件发生时运行函数。
      - HTML属性(只能分发一个处理器，而且不好管理为事件绑定的函数，不建议使用)
        - 直接在HTML tag通过添加 `on<eventName>` 添加事件处理器
        - 例子, 由于是写在html tag属性值，所以是string, 但是它解析的时候会从其中的内容创建一个匿名的处理器函数包裹内容
          - `<input type="button" onclick="test()" value="Count rabbits!">`
      - DOM属性(只能分发一个处理器，而且不好管理为事件绑定的函数，不建议使用)
        - 通过DOM属性`on<eventName>`来分发处理器，所有的DOM元素上都可以看到很多类似`on{eventName}`的属性，默认指向null
        - 例子, 注意这里的指向的是函数名，不要写成函数的执行结果`test()`了。
          - `elem.onclick = test;`
        - 移除处理器 `elem.on<eventName> = null;`

      - element.addEventListener(eventName, handler, [, phase]);
        - eventName 事件名称字符串
        - handler 处理器函数名，这里的函数名是函数的引用，如果函数内有this指向，注意绑定this调用的对象
        - phase 是否在捕获阶段处理，默认为false, 在冒泡阶段处理
        - 支持添加多个handler, 事件触发时依次执行

      - element.removeEventListener(eventName, hanlder, [, phase])
        - 注意这里传入的handler必须是与添加时相同函数名的handler，尽量不要使用匿名函数，因为找不到引用，无法移除

      - Event Object
        - 事件发生时，浏览器会创建一个事件对象，将事件相关信息放入事件对象中，并将其作为参数传入处理器中
          - Example
            ```
            let handler = function(eventObject){

            }
            elem.addEventListener('click', handler)
            ```
          - event.type 事件类型
          - event.currentTarget 处理事件的元素，与this相同
          - event.clientX/clientY 事件发生时鼠标相对于窗口的坐标
          - event.pageX/pgaeY 事件发生时鼠标相对于文档坐标
          - event.target 触发事件处理器的元素
          - event.detail 用于在事件处理器间传递数据的属性

      - handleEvent
        - 当addEventListener接收一个对象作为处理器的时候，就会调用object.handleEvent(event)来处理事件
        - elem.addEventListener(eventName, { handleEvent: function(event){ } })
        - 经常使用handleEvent对同一个元素上绑定不同的事件处理器做统一处理，比如构建一个含有handleEvent方法的类，再在类的内部对传入的事件不同参数做出不同的响应，调用不同的函数
        

  
  - Bubbling and Capturing
    - 冒泡
      - 当事件发生在元素上时，首先会运行元素本身的事件处理器，然后沿着树结构向上传递，运行父元素和其他祖先元素上的事件处理器
      - 除了focus/blur/mouseenter/mouseleave事件 其他事件都是冒泡的

    - Event.target与Event.currentTarget的区别
      - 父元素上的处理器总是可以捕获事件实际发生位置的详细信息
      - event.target是引发事件的目标元素，它在冒泡过程中会不断变化，基于这个特性我们才可以实现委托
      - event.currentTarget(this) 是绑定事件处理器的元素，不会变化

    - 停止冒泡
      - event.stopPropagation(); 任何处理器都可以决定事件已经被处理完成，从而停止冒泡
      - event.stopImmediatePropagation(); 阻止当前元素上的其他处理器执行。
      - 阻止事件冒泡产生的影响
        - 使用冒泡会产生陷阱，导致一些利用委托工作的功能无法正常工作，所以使用的时候要谨慎，我们可以通过其他方式解决，比如自定义事件，或者在父元素上做逻辑判断，不要阻止冒泡，而是通过逻辑去控制事件处理器里方法的执行
        
    - 捕获
      - DOM事件的三个阶段
        - 捕获阶段 capturing phase 事件从windo向下一直到达元素
        - 目标阶段 事件到达目标元素
        - 冒泡阶段 bubbling phase 事件从元素开始向上冒泡
      - Event.eventPhase 事件当前处于的阶段

  - Event delegation
    - 因为事件的捕获和冒泡的特性允许我们实现一种事件委托的强大的事件处理模式。
    - 当有很多元素需要绑定事件处理器的时候，我们不需要为每个元素都分配一个处理器，而是在他们共同的祖先元素上添加一个处理器，在这个处理器中通过对event.target进行判断并作出相应的处理。
    - 委托的实际应用
      - 通过在子元素HTML tag上添加data-action特性，在父元素的事件处理器中对event.target.dataset.action作出判断并执行相应的方法
      - 通过在子元素HTML tag添加data-property，在父元素的事件处理器中对event.target.dataset.property的数据进行处理
      - 通过在子元素HTML tag上添加data-dom-id，在父元素的事件处理器中对event.target.dataset.domId的元素进行获取，然后对dom进行操作。
      - 通过在document上绑定事件处理器，实现自定义组件的初始化。
    - 委托的优势和不足
      - 优势：简化初始化并节省内存，不需要添加过多的处理器，而且对于添加和移除子元素时，不需要额外添加处理器。
      - 不足：子元素的处理器不应该使用event.stopPropagation() 从程序构架设计上要提前考虑好

  - Browser default actions
    - 浏览器默认动作
      - 许多事件会自动触发浏览器动作，比如单击表单中的提交按钮，会触发提交表单到服务器的动作 form的submit event。
    - 阻止浏览器的默认动作
      - 调用event.preventDefault()方法
      - `<a href="/" onclick="return false">Click here</a>`
    - 阻止进一步的事件
      - 有些事件是有关联性的，我们阻止了一个事件，就不会有第二个事件被触发，例如input上的mousedown和focus,当我们阻止了mousedown事件后，input不会获得焦点，自然也不会触发focus事件了
    - event.defaultPrevented
      - 如果默认事件被阻止了，那么event.defaultPrevented的值就会是true
      - 有了这个属性，在应用委托阻止默认动作时，我们就可以不使用event.stopPropagation()去阻断事件冒泡。而是通过判断event.defaultPrevented属性去判断默认动作是否被阻止了，如果值为true，证明默认动作已经被阻止，就不用再去调用父元素上绑定的方法了。
  - Dispatching custom events
    - 自定义事件的用途
      - 通过添加自定义事件，我们可以在组件内部通过分发自定义事件来执行自定义事件绑定的方法
  
    - 事件构造器
      - `new Event(eventTypsString, [, options])`
        - eventTypeString 自定义事件名称
        - options
          - bubbles: true/false 事件是否冒泡 默认是：false 设置为true的话可以用来实现委托
          - cancelable: true/false 事件的默认动作是否可以被阻止 默认值：false
  
    - domElement.dispatchEvent
      - 事件对象创建后，我们可以通过在元素上调用dispatchEvent来触发它在元素上绑定的事件处理器
      - elem.dispatchEvent(eventNameString)
      - 当然我们也可以调用浏览器事件例如 elem.dispatchEvent(new Event('click'))

    - 浏览器默认的事件对象
      - 我们要触发浏览器事件，应该优先使用对应的事件对象创建事件
      - UIEvent
      - FocusEvent
      - MouseEvent
      - WheelEvent
      - KeyboardEvent

    - 自定义事件CustomEvent对象
      - `new CustomEvent(eventNameString, [, options])`
        - 由于是继承于Event，所以Event有的option它都有
        - 它有一个特殊的只读属性 detail 可以用来在自定义事件中传递数据和参数，detail属性只能在创建自定义的时候使用

    - 自定义事件的event.preventDefault()
      - 当cancelable被设定为true的时候，我们在自定义事件绑定的事件处理器中调用event.preventDefault()的时候，element.dispatchEvent(event)会返回false, 我们可以通过调用时的返回值做为判断条件执行对应的方法
  
    - Events in events 事件同步处理
      - 事件通常是同步处理的，假如在处理过程中发生了一个新的事件，我们需要等待当前正在处理的event执行完毕后再处理新的事件，但是事件嵌套就不一样了，我们在一个事件处理器中触发另一个嵌套的事件，它会跳到嵌套的事件中执行之后返回，所以变成了同步处理了。
      - 我们可以通过使用`{setTimeout(() => elem.diapatch(new customEvent('hello'), {bubbles: true}), 0);` 强制它在下一轮event loop去执行。所以setTimeout(fn, 0)可以用来阻止事件嵌套的同步执行。
  
- UI Events
  - Mouse events basic
    - 鼠标事件类型
      - 简单事件
        - mousedown 鼠标按键(左键或者右键)在一个元素上点击
        - mouseup 鼠标按键(左键或右键)在一个元素上释放
        - mouseover 鼠标指针从一个元素上移入
        - mouseout 鼠标指针从一个元素上移出
        - mousemove 鼠标在元素上每次移动都会触发事件

      - 复杂事件(由简单事件组合而成)
        - click 鼠标左键在元素上点击
          - 事件顺序 mousedown -> mouseup -> click
        - contextmenu 
          - 鼠标右键在mousedown事件触发后触发 right mousedown -> contextmenu
          - 事件顺序 mousedown -> contextmenu
        - dblclick 
          - 鼠标在元素上双击后触发
          - 事件顺序 mousedown -> mouseup -> click -> mousedown -> mouseup -> click -> dblclick

      - 事件顺序
        - 一个动作可能会触发多个事件，我们要注意事件触发的顺序，这样我们在绑定事件的时候函数能够准确被触发，当使用e.preventDefault()阻止某些默认行为时也会准确屏蔽默认行为。
  
    - 获取鼠标按键 which
      - which属性用于获取当前鼠标事件是按下了哪个按键，这里的特殊情况，click事件只发生在鼠标左键，which值永远等于1，contextmenu只发生在鼠标右键，which值永远等于3
      - mouseEvent.which = 1 left mouse
      - mouseEvent.which = 2 middle mouse
      - mouseEvent.which = 3 right mouse

    - 组合快捷键
      - 当我们需要检测鼠标和键盘组合按键而触发某些行为的时候，可以从event上获取这些组合键属性值，用于判断某个按键是否按下
      - shift/alt/ctrl/meta(Command)
      - mouseEvent.shiftKey
      - mouseEvent.altKey
      - mouseEvent.ctrlKey
      - mouseEvent.metaKey (Command for Mac)

    - 鼠标坐标
      - 相对于窗口对象的坐标，类似于position: fixed
        - mouseEvent.clientX 
        - mouseEvent.clientY
      - 相对于文档对象的坐标, 类似于position:absolute
        - mouseEvent.pageX
        - mouseEvent.pageY

    - 处理鼠标点击选中文本的问题
      - 鼠标双击可以选中文本，但是很多时候我们只想处理点击事件，额外的选择影响操作体验
        - use-select: none; 缺点是正常的选择文本操作也被屏蔽了
        - mousedown mouseEvent.preventDefault() 文本选中的默认行为发生在mousedown上，所以我阻止mousedown的默认行为就可以了

  - Moving: mouseover/mouseout, mouseenter/mouseleave
    - mouseover
      - 鼠标指针出现在一个元素上时，事件被触发
      - event.target 鼠标当前所在的元素
      - event.relatedTarget 鼠标上一次经过的元素
    - mouseout
      - 鼠标指针离开一个元素时，事件被触发
      - event.target 鼠标离开的元素
      - event.relatedTarget 鼠标当前指针位置下的元素，注意这里与mouseover的不同

    - relatedTarget可以为null的情况，注意使用属性时null的判断
      - 比如鼠标从窗口以外快速移动到元素上时，mouseover的relatedTarget就是null
  
    - 事件频率
      - 当鼠标在元素上移动时，元素的mousemove事件就会被触发，但是并不每个像素都产生一个事件，浏览器有一个检测机制，当鼠标位置变化了就会触发相应的事件，而且有一定的触发频率，如果鼠标以非常快的速度经过元素，某些中间的元素就会被跳过，相应的事件也不会被触发，这里要注意。
  
    - mouseout在子元素多次触发的问题
      - 这种情况多发生在元素进入子元素时触发了额外的mouseout事件，原因是在浏览器的逻辑里，鼠标在任意事件只会位于单个元素上，zIndex最大的那个，嵌套最深的那个元素上。所以在内部要对target和relatedTarget进行判断，如果还在元素内，则忽略这次事件，这里通常使用parent.contains(target)进行判断。

    - mouseenter/mouseleave
      - 这个事件相对更加清晰和容易理解，只有鼠标进入/离开目标元素时才会被触发，忽略子代
      - 在子元素间移入移出时不会像mouseover/mouseout一样重复触发
      - 事件不会冒泡，所以不能使用委托。
  
    - 事件委托
      - 由于mouseenter/mouseleave不支持委托，所以无法使用它们处理大量的元素，所以我们需要使用mouseover/mouseout来实现
      - 算法
        - 把当前鼠标over的元素要实现委托的子元素存储在全局变量中
        - 每次mouseover的时候，如果仍在变量子元素内部，则忽略事件
        - 每次mouseout的时候，如果没有离开变量子元素，则忽略事件
        - 在每次mousevoer和mouseout的时候判断全局变量中存储的当前委托子元素是否为null, 对重复触发进行忽略
        - 在mouseover的时候，如果是子节点而且不为空，使用event.target.closest(delegationSelector)定位到目标委托元素上，并存到全局变量中
        - 在mouseout的时候，如果relatedTarget的parent节点中含变量中存储的当前子元素，则忽略，如果没有则证明已经离开了变量子元素，执行mouseout的操作，并且把全局变量清空。

  - Drag and drop with mouse events
    - 拖放算法
      - 在目标元素上绑定mousedown事件，初始化一些可拖动的属性，比如dragElement.position ='absolute', document.body.append(dragElement)
      - 通常我们还要计算鼠标初始化点击时的偏移差并存储起来，这样可以有效防止移动鼠标的时候出现抖动的现象，offsetX = mouseEvent.clientX - dragElement.getBoundingClientRect().left; 在mousemove的时候减去这个偏移差, dragElement.style.left = mouseEvent.pageX - offsetX + 'px' 这里不要忘记了'px'单位
      - 在mousedown的方法中绑定mousemove和mouseup事件
      - 在mousemove的回调函数中，通过设定element.style.left和element.style.top的坐标实现拖动，坐标的值从mouseEvent.pageX和mouseEvent.pageY中获取，使用文档坐标，这样可以实现跨屏拖动。
      - 在mouseup的回调函数中移除mousemove和mouseup的绑定
      - 通常我们还需要阻止拖动元素的dragstart事件的默认行为，以防止拖动时一些怪异现象的发生
    - 检测是否可释放
      - 核心算法
        - 在mousemove的过程中，通过使用document.elementFromPoint(mouseEvent.clientX,mouseEvent.clientY)获取当前鼠标下的元素，我们通过一个小技巧，在获取前先隐藏正在的拖动的元素element.hidden = 显示true，获取到之后再显示拖动的元素element.hidden = false，然后检测当前鼠标下的元素或者元素的父节点中是否含有可释放元素的属性，通常是`elem.closest('classSelector')`
        - 我们在移动过程中经常还要判断当前可释放元素是否存在，然后判断是进入了可释放元素，还是离开了可释放元素，执行对应的方法
    - 拖放中的应用
      - 在mouseup事件中我们可以完成释放操作后，改变数据，移动元素
      - 我们可以高亮操作的元素
      - 我们可以把操作范围限制在某个区域内，例如slider
      - 我们可以对mousedown/mouseup使用委托，通过检查eventTarget，对大量元素进行拖放操作
  - Keyboard: keydown and keyup
    - 键盘事件
      - keydown 按下按键触发事件
        - event.repeat这个属性值为true的时候是长按了某一个键
      - keyup 抬起按键触发事件
    - KeyboardEvent
      - code 按键编码 类似'KeyA, KeyB, Enter ...' 不分大小写
      - key 按键字符 按键的值，如果是字母会区分大小写
  - Scrolling
    - scroll
      - 通常绑定在window下 window.addEventListener('scroll', scrollCallback);
      - pageYOffset/pageXOffset获取当前面窗口滚动条的横向距离和纵向距离
    - 阻止滚动
      - 可以通过阻止鼠标的wheel事件的默认行为 event.preventDefault()
      - 阻止pageUp/pageDown/Keydown事件的默认行为
      - 更简单的方法document.body.style.overflowY = 'hidden';
    - 实际应用
      - 页面滚动到底部算法
        - 注意这里要留100的差值，而不是0
        ```
            let doc = document.documentElement;
            let bottomDistance = doc.scrollHeight - doc.scrollTop(滚动时变化的值) - doc.clientHeight;
            if (bottomDistance < 100) {
                doSomething();
            }
        ```
      - 页面滚动时当前元素是否可见算法
        - 注意理解elem.getBoundingClientRect()获取到的坐标是相对于当前窗口的上边缘和左边缘的，而且是随着滚动动态改变的。当值为负值的时候，在窗口的上边和左边不可见的区域，当值大于document.documentElement.clientHeight的时候，在窗口下边和右边不可见的区域，用这个算法可以用来做动态加载内容
        ```
             isInSight() {
                let imagePosYToWindowTop = this.elem.getBoundingClientRect().top;
                let imagePosYToWindowBottom = this.elem.getBoundingClientRect().bottom;
                let windowHeight = document.documentElement.clientHeight;
                let topVisible = (windowHeight - imagePosYToWindowTop) > 0 &&
                    imagePosYToWindowTop > 0;
                let bottomVisible = imagePosYToWindowBottom > 0 && imagePosYToWindowBottom < windowHeight;
                return topVisible || bottomVisible;
            }           
        ```
  
- Form and Controls
  - Form property and method
    - document.forms 所有表单元素的HTMLColletion对象
    - document.forms[nameString] 通过name属性获取form
    - document.forms[indexNumber] 通过索引访问表单
    - form.elements 表单form中所有元素的集合HTMLCollection对象
    - form.elements[namsString] 通过name获取表单form中的输入元素
    - form.elements[filedsetName] 通过fieldsetName获取表单form中的filedset
    - formInputElement.form 表单项formInputElement反向引用form
  - Form elements
    - input
      - text 
        - input.value 获取输入元素的文本值
      - radio
        - input.value 获取输入元素的值
      - checkbox
        - input.checked/input.value获取复选框的值
    - textarea
      - textarea.value 获取textareat内的文本值
    - select
      - select.options 所有option元素的合集
      - select.value 所选选项的值
      - select.selectedIndex 所选选项的索引
      - mutiple select
        - 获取选项值的数组 Array.from(select.options).filter(option => option.selected).map(option => option.value);
      - option
        - option.selected 是否选择了该选项
        - option.index 选项的索引
        - option.text 选项的文本内容
        - 新的构造函数Option
          - let option = new Option(optionText, optionValue, defaultSelected, selected);
            - optionText 选项的文本
            - optionValue 选项的值
            - defaultSelected 如果这个值是true 那么selected属性默认创建
            - selected 如果这个值是true 就是已经被选择的了
  - Focus and Blur
    - Focus Event
      - inputElement.addEventListener('focus', callback);
      - 元素聚焦时focus事件被触发，表单验证时清除错误信息，不支持冒泡，不过可以在捕获阶段实现委托可以在父元素上捕获到 parentElement.addEventListener('focus', callback, true); 或者使用focusin事件，它支持冒泡
  
    - Blur Event
      - inputElement.addEventListener('blur', callback);
      - 元素失去焦点时blur事件被触发，通常用于表单验证字段，不支持冒泡，不过可以在捕获阶段实现委托可以在父元素上捕获到 parentElement.addEventListener('blur', callback, true);或者使用focusout事件，它支持冒泡
  
    - Focus Method
      - element.focus() 让元素获得焦点
  
    - Blur Method
      - element.blur() 移除元素上的焦点
  
    - Tabindex
      - element.tabIndex 用于控制在使用tab键切换时，焦点切换的顺序
        - tabIndex = 0 是最后一个
        - tabIndex = -1 忽略这个元素
  - change/input/cut/copy/paste
    - change
      - inputElement.addEventListener('change', callback)
      - 对于元素来说，当其失去焦点并且值改变的时候或被触发，通常用于表单项值改变时绑定验证方法
    - input
      - inputElement.addEventListener('input', callback)
      - 想要处理inputElement每次值的变化，使用这个事件最好，与键盘事件不同的地方在于，只要值改变了就会进行验证，即使是使用鼠标粘贴的值, 立即触发，不需要失去焦点
    - cut/copy/paste
      - inputElement.addEventListener('cut/copy/paste', function(event){
            let clipBoardText = event.clipboardData.getData('text/plain');
        })
      - 这个事件由于浏览器安全原因行为会被阻止，只有特定的条件下才可以使用。
  - Form Submit
    - Submit Event
      - form.addEventListener('submit', callback);
      - event.preventDefault(); 可以使用preventDefault阻止表单的提交，并且对表单数据进行处理
      - `<input type="submit" value="OK">` or `<input type="image">`会提交表单触发submit事件
      - 在输入框按下`Enter`键也会触发submit事件 
    - Submit Method
      - form.submit()
      - 可以通过javascript构建表单元素并且插入到body中提交数据，通常是在iframe中

- Document and resource loading
  - 非阻塞的方式加载脚本
    - async 适用于独立的外部模块，比如广告，计数器
      - 页面不会等待异步脚本，，它会继续处理页面并显示内容
      - DOMContentLoaded和async相互之间不会等待
      - 脚本先下载完成就先执行

    - defer
      - 告诉浏览器在后台下载脚本，不会阻塞页面加载
      - 等到DOM解析完毕，但是在DOMContentLoaded事件之前执行
      - 保持脚本的相对顺序，依次执行，即使后面的脚本先下载完后了，也要等待前面的脚本执行完成再执行

    - Dynamic Scripts
      - 创建script标签并插入到文档中，设置async属性值为false保证执行顺序
        - let script = document.createElement('script');
          script.src = 'url.script';
          script.async = false;
          document.body.append(script);



- XMLHttpRequest Object
  - Basic usage
    - constructor
      - let xhr = new XMLHttpRequest();
        ```
        let xhr = new XMLHttpRequest();
        xhr.open(methodString, URL, [async, user, password]); //Does not open the connection. It's ony configures the request.
        xhr.send([body]); //Send it out.Some request methods like GET do not have a body, and some of them like POST use body to send the data to the server. We'll see examples later.
        xhr.addEventListener('load', function(){
            if(xhr.status === 200){ //Attention, here is the property status on the xhr object, not the event property.
                //success callback
                successCallback && successCallback(xhr.response);
            }else{
                //failed callback
                console.log(xhr.status);
                console.log(xhr.statusText);
                failedCallback && failedCallback(xhr);
            }
        });

        xhr.addEventListener('progress', function(e){
            console.log('Download progress:' +  e.loaded/e.total);
        });

        xhr.addEventListener('error', function(e){
            //Send request failed.
            console.dir(e);
        });
        ```

  - Property
    - xhr.status
      HTTP status code: 200/404/403 and so on, can be 0 in case of a non-HTTP failure.
    - xhr.statusText
      HTTP status message: usually OK for 200, Not Found for 404, Forbidden for 403 and so on.
    - xhr.response(responseText)
      The server response data.
    - xhr.timeout
      We can also specify a timeout using the corresponding property.
    - xhr.responseType
      - '' (default) get as string
      - 'text' get as string
      - 'arraybuffer'  get as ArrayBuffer
      - 'blob' get as Blob
      - 'document' get as XML document
      - 'json'  get as JSON parsed automatically (usually use)
    - xhr.readyState
      An XMLHttpRequest object travels them in the order 0->1->2->3->...->3->4
      State 3 repeats every time a data packet is received over the network.
      - 0 UNSENT
      - 1 OPENED
      - 2 HEADERS_RECEIVED
      - 3 LOADING
      - 4 DONE
  
    - xhr.upload
        If we're uploading somthing big, then we'are surely more interested in tracking the upload pregress. 
      - Event
        - loadstart upload started
        - progress triggers periodically during the upload
        - abort upload aborted
        - error non-HTTP error
        - load upload finished successfully
        - timeout upload timed out(if timeout property is set)
        - loadend upload finished with either success or error
         

  - Event
    - loadstart
    - progress
      Trigger periodically during the downloaded, reports how much downloaded.
    - abort
      The event is triggered when the abort method is called.
    - error
      When the request couldn't be made, e.g. network down or invalid URL.
    - load
      When the result is ready, that includes HTTP errors like 404 500
      If the xhr.status is 200, the response data is returned successful.
    - timeout 
      We can also specify a timeout using the corresponding property.
    - loadend
      All done event. Even if the request is error or success.
    - readystatechange
      The event is triggered when the xhr.readyState is changed. Nowdays, we use load/error/progress handlers deprecate it.
  
  - Method
    - xhr.open(methodTypeString, URL, [async, user, password]);
      Config the request, does not open the connection.
      - method HTTP-method, usually 'POST' or 'GET'
      - URL the URL to request
      - async If explicitly set to false, then the request is synchronous. Synchronous requests are used very sparingly, almost never.
  
    - xhr.send([formData]);
      This method opens the connection and sends the request to server. The optional body parameter contains the request body.
      ```
      //Send a json to server
      let xhr = new XMLHttpRequest();
      let json = JSON.stringify({
          name: 'Jason',
          surname: 'Zhang'
      });
      xhr.open('POST', '/submit');
      xhr.setReqeustHeader('Content-Type', 'application/json; charset=utf-8');
      xhr.send(json);
      ```
  
    - xhr.abort();
      We can terminate the request at any time. That triggers abort event, and xhr.status becomes 0;
      
    - xhr.setRequestHeader(key, value);
        - HTTP-headers
          Send custom headers.
          For exmaple: 
          `xhr.setRequestHeader('Content-Type', 'application/json')`
    - xhr.getResponseHeader(key);
      Get the reponse header with the given name.
        For example:
        `xhr.getResponseHeader('Content-Type')`
    - xhr.getAllResponseHeaders();
        For example:
        ```
        let headers = xhr.getAllResponseHeaders().
            .split('\n\r')
            .reduce((result, cur) => {
                let [name, value] = cur.split(': ');
                result[name] = value;
                return result;
            }, {});
            //We can use reduce to add step result into a object
        ```
        
  - Other useful object
    - URL
        - Example
        ```
        let url = new URL(urlString);
        url.searchParams.set('q', 'test me');
        xhr.open('GET', url);
        xhr.send(); //https://.../?q=test+me
        ```
    - FormData
        - Example
        ```
        let formData = new FormData([form]);
        formData.append(name, value);
        xhr.open('POSt', ...);
        xhr.send(formData);
        ```


- Fetch
  - fetch规范与jQuery.ajax()主要有两种方式的不同
    - 当接收到一个代表错误的 HTTP 状态码时，从 fetch()返回的 Promise 不会被标记为 reject， 即使该 HTTP 响应的状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。
    - 默认情况下，fetch 不会从服务端发送或接收任何 cookies, 如果站点依赖于用户 session，则会导致未经认证的请求（要发送 cookies，必须设置 credentials 选项）。自从2017年8月25日后，默认的credentials政策变更为same-originFirefox也在61.0b13中改变默认值
  - 进行 fetch 请求
    ```
    fetch('https://example.com/movie/')
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            console.dir(jsonData);
        })
        .catch(error => {
            console.error(errors);
        });
    ```

- RegExp Object and String
  - Patterns and flags
    - Create a RegExp Object语法
      - RegExp Constructor
        `let regexp = new RegExp('patternString', 'flags');`
      - Pattern Expression
        `let regexp = /pattern/flags`

    - Usage
      `String.search(regExp);`
      return {Number} search result index 没有找到返回 -1

    - 修饰符
      - i 搜索时不区分大小写
      - g 查找所有的匹配项，而不只是第一个
      - m 多行模式
      - u 开启完整的unicode支持
      - y 粘滞模式


  - Method RegExp and String
    正则表达式通常和string的方法一起使用来查找字符，除此之外RegExp上也有一些方法用来匹配字符。
    - String上的方法
      - str.search(regExp); 查找第一个匹配的位置索引 `return Number`
      - str.match(regExp);
        - 没有g修饰符只查找第一个匹配项，返回的结果为一个带有index，和input的数组对象`return Array`，并且支持括号匹配选择器，匹配结果是数组的第一项，选择器匹配是数组第二项
        ```
            let str = 'Javascript.';
            let result = str.match(/JAVA(SCRIPT)/i)
            result[0] //Javascript
            result[1] //script
            result.index // 0
            result.input // 'Javascript.'
        ```
        - 使用g修饰符时返回所有匹配项组成的数组
          返回结果是一个没有额外属性的含有匹配结果的数组，注意如果没有匹配，返回值是null而不是空数组。而且不支持括号匹配选择器
      - str.split(regExp);
        常常用于把字符串分隔为数组
      - str.replace(regExp|func);
        - 特殊符号指代匹配结果
          str.replace(regExp, 'replaceWithSepicalString')
          - $& 整个匹配项
          - $n 括号选择器里的内容 从左到右表示第1-n个括号里的内容
          - $` 匹配项前面的字符串
          - $' 匹配项后面的字符串
        - replacer function callback
          str.replace(regExp, function(matchStr, [selector1, [...selectorN]], offset, originalString){
              return //somthing you want to do with the stringj;
          });
    - RegExp上的方法
      - regexp.test(str); 检测字符串是否含有匹配结果，返回true或者false
      - regexp.exec(str); 
        最强大的匹配，支持任意模式，包括选择器
        - 没有g返回第一个匹配项，和str.match(reg)结果相同
        - 含有g,能够获取所有匹配项, 返回结果为带有index和input的数组，同时含有括号选择器的匹配项，在regexp对象上有一个lastIndex属性是可读写的，用来指定下一次调用从哪里开始搜索，默认值是0，即从头开始搜索。
        ```
        while(result = regexp.exec(str)){
            console.log(`Found ${result[0]} at ${result.index}`);
        }
        ```

  - 字符合集表达式
    字符类是一种特殊符号，它匹配集合中的任何字符。
    - \d 0到9的数字 来源于digit
    - \D \d的反义集合，除了数字之外的任何字符，例如一个字母
    - \s 一个空格字符，来源于space: 包括空格，制表符，换行符
    - \S 除了空格字符之外的任何字符，例如一个字母
    - \w 一个单字字符，来源于word: 一个字符或者一个数字或者一个下划线
    - \W 除了\w之外的任何字符
    - . 除了换行符以外的任何字符
    - \b 单词的边界，只适用于英文单词。边界校验会检测非单词的边界，例如单词结尾是表单符号，单词开头是空格。
    - \B \b的反向检测
    - 空格 空格也是一个正则字符，不能忽略，否则会影响匹配结果

  - 转义和特殊字符
    - 特殊符号的转义
      - `[ \ ^ $ . | ? * + ( ) /` 这些符号在正则表达式中有特殊的含义，如果我们查找他们的字符串，需要在他们前面加一个`\`, 例如 `\\` 表示 `\`
    - 使用new RegExp的方式创建正则实例时需要额外转义
      - new RegExp("regStr") 因为""操作符会尝试把`\`去掉，把`\n`变成换行字符，所以转义字符就会失效，所以这里我们需要使用`\\`进行转义,例如`\d`应该变成`\\d`，经过字符串解析之后才会工作正常。
  - 集合和范围
    - 集合中其中一个 [abc]匹配的是a或b或c其中一个字符，当然也同时支持字符合集的联合使用例如`[\w-]`代表任意字母数字和_加上额外的-这个在邮箱正则中经常使用
    - 范围 [a-z] 匹配a到z范围内的任意一个字母
    - 字符合集缩写
      - \d [0-9]
      - \w [0-9a-zA-Z_]
      - \s [\t\n\v\f\r ]
      - [\s\S]代表任何空格或非空格字符，也就是所有字符，比`.`除了换行符之外的所有字符范围更广
    - 排除范围
      - [^...]排除范围的匹配，匹配所有给定字符之外的任意字符
      - [^0-9] 数字之外的任意字符，也可以用`\D`来表示
      - [^\s]匹配任何非空字符，也可用`\S`来表示

    -[...]范围中的特殊字符不需要转义 `let reg = /[-().^+]/g`，当然转义了也没什么影响，所以还是统一转义的好。
  - unicode标记
    - `/.../u` 启用对UTF16的正确编码。
    - `alert( '𝒳'.match(/[𝒳𝒴]/u) );`
  - 量词
    - `{n}` 前面的表达式匹配重复n次 
    - `{m, n}` 重复次数的范围
    - `{m,}` m到无限多个重复次数
    - 缩写
      - `+` 1个或者多个 `{1,}`
      - `?` 0个或1个`{0, 1}`
      - `*` 0个或多个`{0,}`
    - 要匹配的更精确，就要仔细分析每一个字符可能得情况，写出更复杂的表达式
  - 贪婪量词和惰性量词
    - 正则表达式引擎算法
      - 对于字符串的每一个字符执行
        - 用当前的表达式去匹配这个字符
        - 如果当前表达式匹配到字符，用下一个表达式继续
        - 如果无匹配，移动到下一个字符
    - 贪婪搜索
      - 默认正则表达式引擎尝试用.+*去获取尽可能多的重复量词，在贪婪匹配后，通过回朔的方式去匹配剩余的表达式，如果没有匹配，通过减少重复匹配的数量并再次尝试匹配，所以会产生匹配过多字符的情况。
    - 懒惰搜索
      - 懒惰模式想要的重复最少的次数，我们可以通过在量词末尾加上一个`?`来启用懒惰模式，懒惰模式并不是匹配尽可能多的字符，而是从剩余表达式条件开始去匹配当前字符并不断向后查找。可以解决匹配过多字符的问题
        - `*? or +? or ??`
    - 懒惰搜索的替代方案
      - 例如我们可以通过`"[^"]+"`来找到带双引号的字符，而不是通过懒惰模式`"[\s\S]+?"`，引擎会在匹配到结尾引号的时候就停止重复匹配`+`了，这样也同样起到了避免重复量词贪婪模式匹配过多字符的问题。我们可以根据需求灵活使用两种不同的搜索方式去匹配包含相同字符的匹配情况。
  - 捕获组
    - 通过`(...)`构建一个捕获组
      - `alert( 'Gogogo now!'.match(/(go)+/i) ); // "Gogogo"`
    - String.match(reg) and RegExp.exec(str) 中可以通过指定捕获组，在结果中返回捕获组的内容 result[groupN]
    - 嵌套捕获组
      - 捕获组嵌套时，返回结果的顺序是按照从左到右左括号的顺序排列的，不过我们要记得结果里的第一项永远是完整的匹配结果，后面开始才是匹配组
      - 如果某个匹配组是可选的`a(b)?(c)?`，那么在相应的匹配结果中，该项目依然存在，值为undefinded
    - 非捕获组
      - 如果我们只是想通过捕获组设置正确的量词，而不想捕获结果出现在结果数组中，可以使用`?:`标记非捕获组
      - `let reg = /(?:go)+ (\w+)/i;`
  - 反向引用
    - String.replace中的可以用`$n`访问第n个捕获组
      - `name = name.replace(/(\w+) (\w+)/i, "$2, $1");`

    - 在正则表达式中我们使用`\n`来引用捕获组, n start from 1.
      - `let reg = /['"](.*?)['"]/g;` the same as below
      - `let reg = /(['"])(.*?)\1/g;`
      
    - 在组内使用 ?: 则无法引用到该组。正则表达式引擎不会记住被排除在捕获 (?:...) 之外的组。
  - 选择
    - 选择表达式相比于字符集合不同的地方在于选择表达式是在正则表达式级别的，不仅仅是字符
      - 使用方法`(expressionA|expressionB)`
      - 不要忘记括号不然会产生一些错误
      - 例子
        ```
        let reg = /([01]\d|2[0-3]):[0-5]\d/g;
        alert("00:00 10:10 23:59 25:99 1:2".match(reg)); // 00:00,10:10,23:59
        ```
  - 字符串的开始和结束
    - `^`用于匹配字符串的开始
    - `$`用于匹配字符串的结束
    - 它们都是锚，并没有长度，只匹配位置，和`\b`一样，用于判定特定开头结尾的条件。
    - Example
      ```
        let str = "#abcdef";
        alert( /^#[0-9a-f]{6}$/i.test(str) ); // true
      ``` 
  - 多行模式
    - `/.../m`通过flag m开启多行模式，
    - 多行模式会影响`^` and `$`的锚行为模式，它们会匹配每一行的开始和结束。
    - `^`,`$`对比`\n`
      - `\n`并不是锚，会消耗位置，同时在结果中也会显示换行符，而且它不支持匹配字符串的开头结尾，因为他们是空的。
  - 前瞻断言和后瞻断言
    用于想根据前后上下文来筛选出一些结果的时候，我们可以使用前瞻断言和后瞻断言。
    - 前瞻肯定断言 `x(?=y)` 匹配 x ，仅当后面跟着 y
      ```
      let str = "1 turkey costs 30€";
      alert( str.match(/\d+(?=€)/) ); // 30 （正确地跳过了单个的数字 1）
      ```
    - 前瞻否定断言 `x(?!y)` 匹配 x ，仅当后面不跟 y
      ```
      let str = "2 turkeys cost 60€";
      alert( str.match(/\d+(?!€)/) ); // 2（正确地跳过了价格
      ```
    - 后瞻肯定断言 `(?<=y)x` 匹配 x ，仅当跟在 y 后面
      ```
      let str = "1 turkey costs $30";
      alert( str.match(/(?<=\$)\d+/) ); // 30 （跳过了单个的数字 1
      ```
    - 后瞻否定断言 `(?<!y)x` 匹配 x ，仅当不跟在 y 后面
      ```
      let str = "2 turkeys cost $60";
      alert( str.match(/(?<!\$)\d+/) ); // 2 (跳过了价格)
      ```
    - 断言捕获组
      - 断言不会出现在匹配结果的捕获组中，如果我们想得到它，使用括号把它转换成捕获组
        - `let str = "1 turkey costs 30€"; let reg = /\d+(?=(€|kr))/; alert( str.match(reg) ); // 30, €`
  - 无限回溯问题
    - 因为贪婪模式的回朔问题，导致正则引擎进入了大量子匹配组合的递归运算。导致浏览器引擎卡死。
    - 解决方法
      - `(?=(repeatExpression+))\1`
  - Unicode属性匹配
    - 可以用来匹配中文