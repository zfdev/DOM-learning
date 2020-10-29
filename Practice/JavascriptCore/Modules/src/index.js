import {
    Welcome
} from './welcome';
import {
    loadJson
} from './loadJson';
import {
    HttpError
} from './error';

const welcome = new Welcome('Hello', 'Jason');
loadJson('user.json').then(data => console.dir(data)).catch(alert);

async function demoGithubUser() {
    let name = prompt('Enter a name?', 'Jason');
    try {
        let user = await loadJson(`https://api.github.com/users/${name}`);
        console.log(user);
        return user;
    } catch (error) {
        if (error instanceof HttpError || error.response.status === 404) {
            console.error('No such user, please reenter.');
            return demoGithubUser();
        } else {
            throw error;
        }
    }


}

// demoGithubUser();

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000)); //这段代码揭露了await对应一个异步promise对象，并且暂停解析引擎等待结果，下面的return会在promise对象1000毫秒resolve之后才执行并返回结果
    return 10;
}

wait().then(result => console.log(result));

function promisify(f) {
    return function (...args) { // 返回一个包装函数 包装的这层其实只有一个参数，然后自定义一个callback用于连接Promise和原有函数的callback
        return new Promise((resolve, reject) => {
            function callback(err, result) { // 给 f 用的自定义回调
                if (err) {
                    return reject(err);
                } else {
                    resolve(result);
                }
            }

            args.push(callback); // 在参数的最后附上我们自定义的回调函数
            console.dir(args);
            f.call(this, ...args); // 调用原来的函数
        });
    };
};

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}
let loadScriptPromise = promisify(loadScript);
loadScriptPromise('test.js');

// let promiseChai = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
// });
// promiseChai.then((result) => {
//     alert(result);
//     return new Promise((resovle, reject) => {
//         setTimeout(() => {
//             resovle(result * 2);
//         }, 1000);
//     });
// }).then((result) => {
//     alert(result);
//     return new Promise((resovle, reject) => {
//         setTimeout(() => {
//             resovle(result * 2);
//         }, 1000);
//     });
// }).then((result) => {
//     alert(result);
//     return new Promise((resovle, reject) => {
//         setTimeout(() => {
//             resovle(result * 2);
//         }, 1000);
//     });
// });

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
Object.assign(User.prototype, sayHiMixin);
let user = new User("Jason");
user.sayHi();

class Menu {
    choose(value) {
        this.trigger('select', value);
    }
}

const eventMixin = {
    on(eventName, handler) {
        if (!this._eventHandlers) {
            this._eventHandlers = {};
        }
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler);
    },
    off(eventName, handler) {
        let handlers = this._eventHandlers && this._eventHandlers[eventName];
        for (let i = 0; i < handlers.length; i++) {
            if (handler === handlers[i]) {
                handlers.splice(i--, 1);
            }
        }
    },
    trigger(eventName, ...args) {
        if (!this._eventHandlers || !this._eventHandlers[eventName]) {
            return;
        }
        this._eventHandlers[eventName].forEach(handler => {
            handler.apply(this, args);
        });
    }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();
menu.on('select', value => alert(`Value selectd: ${value}`));
console.dir(menu);
menu.choose('123');

class Animal {}
class Rabbit extends Animal {}

let rabbit = new Rabbit();
alert(rabbit instanceof Animal); // true
// rabbit.__proto__ === Rabbit.prototype
// rabbit.__proto__.__proto__ === Animal.prototype (match!)

// (() => {
//     for (let i = 0; i < 10; i++) {
//         if (i == 5) {
//             return i; // return must be in a function
//         }
//         console.log(i);
//     }
// })();

// var obj = {
//     number: 3,
//     fn1: (function () {
//         console.dir(this); //匿名自执行函数内部this为undefined
//     })()
// }