Javascript Learning Path
=====

- 熟悉DOM底层API属性和方法
- 重点把事件研究透彻，以更好的应对面试
- 可以简单封装一个自己的库，不过最后写MVC程序时也要封装，也可以后面再做
- 使用chrome工具可以很方便地查看DOM结构，CSSDOM渲染的style，DOM绑定的事件回调函数，DOM的属性继承等。
- 整理一个结构图，而且使用自己的记忆总结，这样的好处是不至于黑瞎子掰苞米，学过的很快就忘记了。不过切记很详细。结构清晰就好。
- **看完就忘记，学习效率等于0%，时间浪费率100%，所以不要着急追求速度。定期回顾加深记忆。以防做无用功。**
- 记住了但是不懂得应用，知识利用率只有25%，所以只有真正运用起来才算理解了。
- 可以选择性的看一些知识点，尤其是一些临界知识，花同样的时间可以获得最大的提升，以前经常犯的错误就是每次都从头开始看重复的知识，往往看了一段疲倦了就放弃了，导致一直在开头那一点知识，包括笔记本记的笔记也是，基本记了几页这个笔记本就没再用过。
- 计划没有变化快，所以我现在都不列计划，以前列了计划也一定按时完成，不如把列计划的时间花在执行上，每天根据现有进度持续执行。比空头计划要有价值。

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
      - parseInt(string, radix) and parseFloat(string)
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
            alert( str.slice(-4, -1) ); // */!            
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
      - 创建数组的方法,尽量不要使用构造函数的方法创建数组，会产生未知问题
        `let arr = [item1, items, ...]`
      - length属性是数组的长度，它是数组最后一项的数字索引值加1，如果我们手动修改length，数组就会被阶段，当然我们可以利用这个特性清空数组，arr.length = 0;
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
        - 关于'+'操作符触发隐式转换的问题，当 "+" 操作符把一些项加到字符串后面时，加号后面的项也会被转换成字符串
          `alert( [1] + 1 ); // "11"  alert( "1" + 1 ); // "11"`
        
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
          - arr.concat(...items) 将数组和其他数组元素组成新数组并返回，如果参数是多维数组将会被展开。
        - 计算生成新数组并返回
          - arr.map((item, index, array) => { return ...; }); 对数组的每个元素调用函数并返回结果数组。 
        - 累加计算并返回结果
          - arr.reduce/reduceRight((acc/previousValue, currentValue, index, arr) => { return ...;}, initial); 迭代每个数组元素并将计算结果返回
        - 字符串和数组相互转化
          - str.split(seperateStr) 字符串转数组，通过指定的seperateStr分隔符分割字符串为数组并返回
          - arr.join(seperateStr) 数组转字符串，通过指定的seperateStr分隔字符串合并数组为字符串并返回
      - 查询数组元素
        - arr.indexOf/lastIndexOf(item, pos) 从指定位置pos查找item如果找到就返回索引值，否则返回-1, lastIndexOf相同只不过是从尾部开始查询, `return Number;`
        - arr.includes(item, fromPos) 从指定索引开始fromPos查询item,如果找到则返回true，否则返回false, `return Boolean`
        - arr.find(function(item, index, array){ if(condition){return true/false} }) 在数组中根据条件函数返回值查找指定元素，如果返回值为true就返回第一个匹配的item则停止，如果没找到返回undefined, `return Object/undefined`
        - arr.filter(function(item, index, array){ if(condition){return true/false} }) 在数组中根据条件函数返回值查找指定元素，如果返回值为true就返回的所有数组元素，如果没有则返回空数组，`return Array`
        - arr.findIndex(function(item, index, array){ if(condition){return true/false} }); 和find相似，只不过返回的是元素的索引而不是元素本身, `return Number`
      - 迭代
        - arr.forEach((item, index, array) => { ... }); 对数组每个元素执行函数，不修改元素，也不返回结果，只是用来遍历数组
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

            let arr = Array.from(arrayLike); // (*)
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
          - `new Map(Object.entries(object))`;
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
                for (let [key, value] of recipeMap) { // 和 recipeMap.entries() 一样
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

            // 和 forEach 相同：
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
        - `let {key1}, key2} = {key1: value1, key2: value2, ...}` 
          - 例子
          ```
            // 改变 let {...} 中属性的顺序
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

            // { 原属性：目标变量 }
            let {width: w, height: h, title} = options;

            // width -> w
            // height -> h
            // title -> title

            alert(title);  // Menu
            alert(w);      // 100
            alert(h);      // 200    
          ```
        - 映射结合默认值一起使用，可以作为类或者函数的参数初始化
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
        // 清晰起见，精简了部分参数
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
        - date.getDate() 结果是 **1-31**，注意这个不是0开始，0代表上一个月的最后一天了
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
            - Function
            - Symbolic属性
        - JSON不支持循环引用，后面我将会讲到如果利用replacer解决循环引用的问题
  
      - JSON.stringify(target[, replacer[, space]])
        - 将对象转换成JSON字符串
          - target 要编码的对象
          - replacer 要编码的属性组['attribute1', 'attribute2']或者替换函数function(key, value)
          - space 编码时生成的字符串的缩进值
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
  - Object properties configuration
  - Prototypes, inheritance
  - Classes
  - Error handling
  - Promises, async/await
  - Generators, advanced iteration
  - Modules
  - Miscellaneous


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
        - elem.insertAdjacentHTML(whereString, htmlDOMString);
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
        - DOMContendLoaded DOM构建时

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
        - handler 处理器函数名
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
      - 我们可以通过使用`{setTimeout(() => elem.diapatch(new customEvent('hello'), {bubbles: true}), 0);` 强制它在下一轮event loop去执行。
  
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
        - 在mousemove的过程中，通过使用document.elementFromPoint(mouseEvent.clientX,mouseEvent.clientY)获取当前鼠标下的元素，我们通过一个小技巧，在获取前先隐藏正在的拖动的元素element.hidden = 显示true，获取到之后再显示拖动的元素element.hidden = false，然后检测当前鼠标下的元素或者元素的父节点中是否含有可释放元素的属性，通常是elem.closest('classSelector')
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


  - Method of RegExp and String
    正则表达式通常和string的方法一起使用来查找字符，除此之外RegExp上也有一些方法用来匹配字符。
    - String上的方法
      - str.search(regExp); 查找第一个匹配的位置索引
      - str.match(regExp);
        - 没有g修饰符只查找第一个匹配项，返回的结果为一个带有index，和input的数组对象，并且支持括号匹配选择器，匹配结果是数组的第一项，选择器匹配是数组第二项
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
    - 在正则表达式中我们使用`\n`来引用捕获组
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