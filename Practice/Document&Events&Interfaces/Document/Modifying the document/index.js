let J = window.J || {}
J.qs = function (selector, scope) {
    return (scope || document).querySelector(selector)
}
J.qsa = function (selector, scope) {
    return (scope || document).querySelectorAll(selector)
}
J.cloneArray = function (target) {
    if (Array.isArray(target)) {
        return target.slice(0);
    } else {
        throw new Error(`Param ${target} is not a array!`);
    }
}

J.on = function (element, type, callback, useCapture) {
    element.addEventListener(type, callback, !!useCapture);
}

// Extend an object
// If the source object is array, just use slice clone it's value;
// If the source object is array, we need to use recursion to read it's property value

J.extend = function (target, ...source) {
    let _extend = function (targetValue, sourceValue) {
        if (Array.isArray(sourceValue)) {
            targetValue = J.cloneArray(sourceValue);
        } else {
            for (let name in sourceValue) {
                if (sourceValue.hasOwnProperty(name)) {
                    if ((typeof sourceValue[name] === 'object' && sourceValue[name] !== null) || typeof sourceValue[name] === 'function') {
                        if (targetValue[name] === undefined) {
                            targetValue[name] = {};
                        }
                        targetValue[name] = _extend(targetValue[name], sourceValue[name]);
                    } else {
                        targetValue[name] = sourceValue[name];
                    }
                }
            }
        }
        return targetValue;
    }
    for (let obj of source) {
        _extend(target, obj);
    }
    _extend(target, source);
    return target;
}
J.delegate = function (type, selector, callback, target) {
    //Bind the event to the root element. When the event bubble from the target element, check the target element is the in the selector results or not.
    let checkTarget = function (event) {
        let targetElement = event.target; //bubble event target
        let selectElements = J.qsa(selector, target);
        let isMatch = Array.prototype.indexOf.call(selectElements, targetElement) > -1;
        if (isMatch) {
            callback.call(targetElement, event); //call the callback function with the target context, and passport the event the target.
        }
    }
    let useCapture = type === 'blur' || type === 'focus';

    J.on(document, type, checkTarget, useCapture)
}

J.proxy = function (funName, context) {
    return funName.bind(context);
}

J.nta = function (nodeListObj) {
    return Array.from(nodeListObj);
}

J.event = function () {

}

J.d = function (...args) {
    console.log.apply(null, args);
}
J.dr = function (...args) {
    console.dir.apply(null, args);
}


class Calendar {
    constructor(container, config) {
        this.container = container;
        this.defaults = {
            show: true, //Show after initialization
            mondayFirst: true, //Monday first mode
            interaction: true,
            showNearbyMonth: false,
            dayName: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
            monthName: [],
            extralData: {
                test: 'testValue'
            }
        }
        this.config = J.extend({}, this.defaults, config);
        this.date = new Date();
        this.init();
        this._reset();
        this.bindEvent();
        this.render();
        // J.d(this._firstDayInMonth(this.date));
        // J.d(this.date.toDateString());
    }

    _append(HTMLString) {
        this.HTMLString += HTMLString;
    }

    _newDate(dateObj) {
        return new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
    }

    _firstDayInMonth(dateObj) {
        let firstday = new Date(dateObj.getFullYear(), dateObj.getMonth()).getDay();
        if (this.config.mondayFirst) {
            firstday = firstday === 0 ? 7 : firstday;
            firstday -= 1;
        }
        return firstday;
    }

    _daysInAMonth(dateObj) {
        return (new Date(dateObj.getFullYear(), (dateObj.getMonth() - 1), 0)).getDate();
    }

    _isToday(dateObj) {
        const today = new Date();
        return today.getDate() === dateObj.getDate() && today.getMonth() === dateObj.getMonth() && today.getFullYear() === dateObj.getFullYear();
    }

    _reset() {
        this.container.innerHTML = '';
        this.HTMLString = '';
    }

    init() {
        if (this.config.mondayFirst) {
            this.config.dayName.push(this.config.dayName.shift());
        }
    }

    setMonthNumber(month) {
        this.date.setMonth(month - 1);
    }

    getMonthNumber() {
        return this.date.getMonth() + 1;
    }

    getDateString(char = '-', date) {
        const currentDate = this._newDate(this.date);
        if (date) {
            currentDate.setDate(date);
        }
        return [currentDate.getFullYear(), this.getMonthNumber(), currentDate.getDate()].join(char);
    }

    nextMonth() {
        this.date.setMonth(this.date.getMonth() + 1, 1);
        this._reset();
        this.render();
    }

    previousMonth() {
        this.date.setMonth(this.date.getMonth() - 1, 1);
        this._reset();
        this.render();
    }

    template() {
        //table container
        this._append(`<div class="calendar-container${this.config.show ? '' : ' hidden'}${this.config.interaction ? ' interaction' : ''}">`);
        this._append('<table>');
        this._append(`<caption>${this.date.getFullYear()}年 ${this.getMonthNumber()}月</caption>`);
        //table head
        this._append('<tr>');
        this.config.dayName.forEach((element, index) => {
            if ((this.config.mondayFirst && (index === 5 || index === 6)) || (!this.config.mondayFirst && (index === 0 || index === 6))) {
                this._append(`<th class="weekend">${element}</th>`);
            } else {
                this._append(`<th>${element}</th>`);
            }
        });
        this._append('</tr>');
        //table body
        const tempDate = this._newDate(this.date);
        tempDate.setDate(1 - this._firstDayInMonth(this.date));
        for (let i = 0; i < 6; i++) {
            this._append('<tr>');
            for (let j = 0; j < 7; j++) {
                const dayNumber = tempDate.getDate();
                if (tempDate.getMonth() === this.date.getMonth()) {
                    if (this._isToday(tempDate)) {
                        this._append(`<td class="current-month today">${dayNumber}</td>`);
                    } else {
                        this._append(`<td class="current-month">${dayNumber}</td>`);
                    }
                } else {
                    this._append(`<td class="other-month${this.config.showNearbyMonth ? '' : ' hidden-nearby-month'}">${dayNumber}</td>`);
                }
                tempDate.setDate(tempDate.getDate() + 1);
            }
            this._append('</tr>');
        }
        this._append('</table>');
        this._append('</div>')
        // this._append(`<div class="date-string">Today is ${this.date.toDateString()}</div>`);
    }

    render() {
        this.template();
        this.container.insertAdjacentHTML('beforeend', this.HTMLString);
    }

    _showDateString(e) {
        alert(this.getDateString('-', e.target.textContent));
    }

    bindEvent() {
        J.delegate('click', 'td.current-month', J.proxy(this._showDateString, this), this.container);
    }

    destory() {
        this.container.innerHTML = '';

    }
}
const calendar1 = new Calendar(J.qsa('#calendar .calendar-group')[0], {
    user: {
        userName: 'Jason'
    },
    extralData: {
        test: 'Jason Zhang'
    }
});
calendar1.previousMonth();
const calendar2 = new Calendar(J.qsa('#calendar .calendar-group')[1]);
const calendar3 = new Calendar(J.qsa('#calendar .calendar-group')[2]);
calendar3.nextMonth();


class Animation {
    constructor(container) {
        this.timer = null;
        this.container = container;
        this.init();

    }
    template(dataObj) {
        const htmlString =
            `
            <span class="time-hour">${dataObj.hour}</span>
            <span class="dot">:</span>
            <span class="time-minute">${dataObj.minute}</span>
            <span class="dot">:</span>
            <span class="time-second">${dataObj.second}</span>
            `;
        return htmlString;
    }
    _format(number) {
        return number < 10 ? '0' + number : number;
    }
    data() {
        const now = new Date();
        return {
            hour: this._format(now.getHours()),
            minute: this._format(now.getMinutes()),
            second: this._format(now.getSeconds())
        }
    }
    init() {
        this.cache = {
            hourDom: null,
            minuteDom: null,
            secondDom: null
        }
        this.container.innerHTML = '';
        this.container.insertAdjacentHTML('beforeend', this.template(this.data()));
        this.cache.hourDom = this.container.querySelector('.time-hour');
        this.cache.minuteDom = this.container.querySelector('.time-minute');
        this.cache.secondDom = this.container.querySelector('.time-second');

    }
    render() {
        const time = this.data();
        this.cache.hourDom.textContent = time.hour;
        this.cache.minuteDom.textContent = time.minute;
        this.cache.secondDom.textContent = time.second;
    }
    start() {
        if (this.timer === null) {
            this.timer = setInterval(this.render.bind(this), 1000);
        }
    }
    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }
}

// const startButton = J.qs('#start');
// const stopButton = J.qs('#stop')
const animation = new Animation(J.qs('.timer-container'));
// J.d(J.qs('.timer-container'))
// J.on(startButton, 'click', animation.start.bind(animation));
// J.on(stopButton, 'click', animation.stop.bind(animation));
J.delegate('click', '#start', J.proxy(animation.start, animation));
J.delegate('click', '#stop', J.proxy(animation.stop, animation));


class DataTable {
    constructor(config) {
        this.container = config.container;
        this.init();
    }

    init() {
        this.cache();
        this.bindEvent();
    }

    cache() {
        this.cache.tHeadD0M = Array.from(J.qsa('th', this.container));
    }

    _sort(e) {
        const tHeadD0M = this.cache.tHeadD0M;
        J.nta(tHeadD0M).forEach((th) => {
            th.classList.remove('sort-by');
        });
        e.target.classList.add('sort-by');
        const sortByName = e.target.innerText;
        const sortColumn = tHeadD0M.indexOf(e.target);
        let sortColumnTd = J.nta(J.qsa(`table tr td:nth-child(${sortColumn + 1})`, this.container));

        this.render(sortColumnTd, sortByName);
    }

    data(sortColumnTd, sortByName) {
        //current table row index array

        //Index array after sort
        let sortIndexResult = [];
        sortIndexResult = sortColumnTd.map((tdElement, tdIndex) => {
            const sortTdObj = {
                index: tdIndex,
                value: sortByName.toLowerCase() === 'age' ? parseInt(tdElement.innerText) : tdElement.innerText
            }
            return sortTdObj;
        }).sort((a, b) => {
            if (a.value && b.value) {
                if (typeof a.value === 'number' && typeof b.value === 'number') {
                    return a.value - b.value;
                }
                if (typeof a.value === 'string' && typeof b.value === 'string') {
                    if (a.value < b.value) {
                        return -1;
                    }
                    if (a.value > b.value) {
                        return 1;
                    }
                    if (a.value === b.value) {
                        return 0;
                    }
                }
            }
            return 0;
        });
        J.dr(sortIndexResult);
        return sortIndexResult;
    }

    tempalte(indexData) {
        //hide table
        const tableDomNode = J.qs('table', this.container);
        const tbodyDomNode = tableDomNode.tBodies[0];
        const rowsDomNodeArr = J.nta(J.qsa('tr', tbodyDomNode));
        // J.dr(rowsDomNodeArr);
        tbodyDomNode.hidden = true;
        //use document fragment improve performance
        const tempNode = document.createDocumentFragment();
        indexData.forEach((indexObj) => {
            tempNode.appendChild(rowsDomNodeArr[indexObj.index]);
        })
        tbodyDomNode.innerHTML = '';
        tbodyDomNode.append(tempNode);
        //show table
        tbodyDomNode.hidden = false;
    }

    render(sortColumnTd, sortByName) {
        this.tempalte(this.data(sortColumnTd, sortByName));
    }

    bindEvent() {
        J.delegate('click', 'th', J.proxy(this._sort, this), this.container);
    }

    distory() {

    }
}

const dataTable = new DataTable({
    container: J.qs('.sort-table')
});

//Remove the children of element
function clear(elem) {
    Array.from(elem.children).forEach(el => el.remove());

    //elem.innerHTML = '';
    // while(elem.firstchild){
    //     elem.firstchild.remove();
    // }
}

clear(elem);

//Create li element by user input.
const promptContainer = J.qs('#promtList');
const addItem = function (parent, input) {
    let li = document.createElement('li');
    li.textContent = input;
    parent.append(li);
}
while (true) {
    let inputContent = window.prompt();
    if (!inputContent) {
        break;
    }
    addItem(promptContainer, inputContent);
}

//Generate tree with object data
let treeData = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },
    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "redbud": {},
            "magnolia": {}
        }
    }
};

let container = document.getElementById('treeContainer');
//The most important part of this loop is the break condition and the return value
let genLiByObject = function (data) {
    let htmlDOMString = '';
    if (Object.keys(data).length > 0) {
        for (let key in data) {
            let childString = genLiByObject(data[key]);
            htmlDOMString += `<li>${key}${ childString ? `<ul>${childString}</ul>` : ''}</li>`;
        }
    }
    return htmlDOMString;
}
let createTree = function (container, data) {
    let htmlDOMString = '';
    htmlDOMString = genLiByObject(data);
    console.log(htmlDOMString);
    container.insertAdjacentHTML('afterbegin', htmlDOMString);
};
createTree(container, treeData); // 在 container 中创建树。

// let regex1 = RegExp('([a-z])([A-Z]+)','g');
// let str1 = 'backgroundColor';
// str1 = str1.replace(regex1, '$1-$2').toLowerCase();
// console.log(str1);

// let regex2 = RegExp('([a-z])\-([a-z])', 'g');
// let str2 = 'font-size';
// str2 = str2.replace(regex2, (match, p1, p2) => {return p1 + p2.toUpperCase()} );
// console.log(str2);