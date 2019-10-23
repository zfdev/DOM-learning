/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/*! exports provided: HttpError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HttpError\", function() { return HttpError; });\nclass HttpError extends Error {\n  constructor(response) {\n    super(`${response.status} for ${response.url}`);\n    this.name = 'HttpError';\n    this.response = response;\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./src/error.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome */ \"./src/welcome.js\");\n/* harmony import */ var _loadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadJson */ \"./src/loadJson.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ \"./src/error.js\");\n\n\n\nconst welcome = new _welcome__WEBPACK_IMPORTED_MODULE_0__[\"Welcome\"]('Hello', 'Jason');\nObject(_loadJson__WEBPACK_IMPORTED_MODULE_1__[\"loadJson\"])('user.json').then(data => console.dir(data)).catch(alert);\n\nasync function demoGithubUser() {\n  let name = prompt('Enter a name?', 'Jason');\n\n  try {\n    let user = await Object(_loadJson__WEBPACK_IMPORTED_MODULE_1__[\"loadJson\"])(`https://api.github.com/users/${name}`);\n    console.log(user);\n    return user;\n  } catch (error) {\n    if (error instanceof _error__WEBPACK_IMPORTED_MODULE_2__[\"HttpError\"] || error.response.status === 404) {\n      console.error('No such user, please reenter.');\n      return demoGithubUser();\n    } else {\n      throw error;\n    }\n  }\n}\n\ndemoGithubUser();\n\nasync function wait() {\n  await new Promise(resolve => setTimeout(resolve, 1000)); //这段代码揭露了await对应一个异步promise对象，并且暂停解析引擎等待结果，下面的return会在promise对象1000毫秒resolve之后才执行并返回结果\n\n  return 10;\n}\n\nwait().then(result => console.log(result));\n\nfunction promisify(f) {\n  return function (...args) {\n    // 返回一个包装函数 包装的这层其实只有一个参数，然后自定义一个callback用于连接Promise和原有函数的callback\n    return new Promise((resolve, reject) => {\n      function callback(err, result) {\n        // 给 f 用的自定义回调\n        if (err) {\n          return reject(err);\n        } else {\n          resolve(result);\n        }\n      }\n\n      args.push(callback); // 在参数的最后附上我们自定义的回调函数\n\n      console.dir(args);\n      f.call(this, ...args); // 调用原来的函数\n    });\n  };\n}\n\n;\n\nfunction loadScript(src, callback) {\n  let script = document.createElement('script');\n  script.src = src;\n\n  script.onload = () => callback(null, script);\n\n  script.onerror = () => callback(new Error(`Script load error for ${src}`));\n\n  document.head.append(script);\n}\n\nlet loadScriptPromise = promisify(loadScript);\nloadScriptPromise('test.js');\nlet promiseChai = new Promise((resolve, reject) => {\n  setTimeout(() => resolve(1), 1000);\n});\npromiseChai.then(result => {\n  alert(result);\n  setTimeout(() => result * 2);\n}).then(result => {\n  alert(result);\n  setTimeout(() => result * 2);\n}).then(result => {\n  alert(result);\n  setTimeout(() => result * 2);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/loadJson.js":
/*!*************************!*\
  !*** ./src/loadJson.js ***!
  \*************************/
/*! exports provided: loadJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadJson\", function() { return loadJson; });\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ \"./src/error.js\");\n\n\nasync function loadJson(url) {\n  let response = await fetch(url);\n\n  if (response.status === 200) {\n    let json = await response.json();\n    return json;\n  } else {\n    throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"HttpError\"](response);\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/loadJson.js?");

/***/ }),

/***/ "./src/welcome.js":
/*!************************!*\
  !*** ./src/welcome.js ***!
  \************************/
/*! exports provided: Welcome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Welcome\", function() { return Welcome; });\nclass Welcome {\n  constructor(...args) {\n    console.dir(args);\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./src/welcome.js?");

/***/ })

/******/ });