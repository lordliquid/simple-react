/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

let map = new WeakMap();
console.clear();
let internal = function internal(object) {
  if (!map.has(object)) {
    map.set(object, {});
  }
  return map.get(object);
};

class Store {
  constructor() {
    let hist = [];
    let state = {};
    this.count = 0;
    internal(this).hist = hist;
    internal(this).state = state;
  }
};

Store.prototype.setState = function (obj) {
  if (typeof obj !== 'object') {
    console.error('.setState() expects an object and instead received ' + typeof obj + ' type.');
    return this;
  }

  for (var o in obj) {
    this.count++;
    internal(this).state[o] = obj[o];
  }

  return obj;
};

Store.prototype.getState = function () {
  console.log(internal(this).state); // Remove this later
  return internal(this).state;
};

Store.prototype.saveStateHistory = function () {
  let date = Date();
  let state = Object.assign(_extends({}, internal(this).state, { date }));
  internal(this).hist.push(state);
  return internal(this).hist;
};

Store.prototype.getStateHistory = function () {
  console.log(internal(this).hist); // Remove this later
  return internal(this).hist;
};

var store = new Store();
store.setState({ cool: 'stuff', prop: 'awesome' });

setTimeout(() => {
  store.setState({ cool: 'better', wow: 'someting' });
  store.getState();
  store.getStateHistory();
  store.saveStateHistory();
  store.getStateHistory();
}, 5000);

store.saveStateHistory();
store.getStateHistory();

console.log(store.hist);

/***/ })
/******/ ]);