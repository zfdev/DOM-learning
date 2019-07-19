DOM Learning Path
=====

- 熟悉DOM底层API属性和方法
- 重点把事件研究透彻，以更好的应对面试
- 可以简单封装一个自己的库，不过最后写MVC程序时也要封装，也可以后面再做
- 使用chrome工具可以很方便地查看DOM结构，CSSDOM渲染的style，DOM绑定的事件回调函数，DOM的属性继承等。
- 整理一个结构图，而且使用自己的记忆总结，这样的好处是不至于黑瞎子掰苞米，学过的很快就忘记了。不过切记很详细。结构清晰就好。

参考资料
---

- [DOM & Basic Knowledge]https://zh.javascript.info/
- [DOM]https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
- [ES6]https://babeljs.io/docs/en/learn
- [MVC]http://todomvc.com/

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