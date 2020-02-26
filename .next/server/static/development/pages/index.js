module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/changePicture.js":
/*!*****************************************!*\
  !*** ./src/components/changePicture.js ***!
  \*****************************************/
/*! exports provided: changePicture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePicture", function() { return changePicture; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const changePicture = (direction, elem) => {
  if (direction === "R") {
    let first = elem.state.ListImage[0];
    let NewList = [];

    for (let index = 1; index < elem.state.ListImage.length; index++) {
      NewList.push(elem.state.ListImage[index]);
    }

    NewList.push(first);
    elem.setState({
      ListImage: NewList
    });
  } else if (direction === "L") {
    let last = elem.state.ListImage[elem.state.ListImage.length - 1];
    let NewList = [last];

    for (let index = 0; index < elem.state.ListImage.length - 1; index++) {
      NewList.push(elem.state.ListImage[index]);
    }

    elem.setState({
      ListImage: NewList
    });
  }
};

/***/ }),

/***/ "./src/components/image.js":
/*!*********************************!*\
  !*** ./src/components/image.js ***!
  \*********************************/
/*! exports provided: ListImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListImage", function() { return ListImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ListImage = ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM3Njd9&w=1000&q=80", "https://cdn.pixabay.com/photo/2018/04/13/18/50/field-3317258_960_720.jpg", "https://www.tom-archer.com/wp-content/uploads/2018/06/milford-sound-night-fine-art-photography-new-zealand.jpg", "https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg"];

/***/ }),

/***/ "./src/components/slider.js":
/*!**********************************!*\
  !*** ./src/components/slider.js ***!
  \**********************************/
/*! exports provided: test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
const test = new String(".prueba.jsx-3207274073{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWVuY2FybG9zYXBvbnRlL0RvY3VtZW50cy9Qcm95ZWN0cy9zbGlkZXJfdGFpbHdpbmQvc3JjL2NvbXBvbmVudHMvc2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUV1QixBQUNvQixVQUFDIiwiZmlsZSI6Ii9Vc2Vycy9qYWVuY2FybG9zYXBvbnRlL0RvY3VtZW50cy9Qcm95ZWN0cy9zbGlkZXJfdGFpbHdpbmQvc3JjL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcblxuZXhwb3J0IGNvbnN0IHRlc3QgPSBjc3NgLnBydWViYSB7IGNvbG9yOiByZWQ7IH1gO1xuXG4iXX0= */\n/*@ sourceURL=/Users/jaencarlosaponte/Documents/Proyects/slider_tailwind/src/components/slider.js */");
test.__hash = "3207274073";

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/image */ "./src/components/image.js");
/* harmony import */ var _components_changePicture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/changePicture */ "./src/components/changePicture.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/slider */ "./src/components/slider.js");
var _jsxFileName = "/Users/jaencarlosaponte/Documents/Proyects/slider_tailwind/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      ListImage: _components_image__WEBPACK_IMPORTED_MODULE_2__["ListImage"]
    };
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: _components_slider__WEBPACK_IMPORTED_MODULE_4__["test"].__hash,
      __self: this
    }, _components_slider__WEBPACK_IMPORTED_MODULE_4__["test"]), __jsx("div", {
      className: `jsx-${_components_slider__WEBPACK_IMPORTED_MODULE_4__["test"].__hash}` + " " + "text-6xl prueba",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Slider "), __jsx("div", {
      className: `jsx-${_components_slider__WEBPACK_IMPORTED_MODULE_4__["test"].__hash}` + " " + "flex flex-no-wrap bg-gray-200 overflow-hidden p-10",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, this.state.ListImage.map((src, index) => __jsx("img", {
      key: index,
      src: src,
      className: `jsx-${_components_slider__WEBPACK_IMPORTED_MODULE_4__["test"].__hash}` + " " + "w-1/2 rounded-lg mx-2 ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }))), __jsx("div", {
      className: `jsx-${_components_slider__WEBPACK_IMPORTED_MODULE_4__["test"].__hash}` + " " + "text-center m-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("button", {
      onClick: () => {
        Object(_components_changePicture__WEBPACK_IMPORTED_MODULE_3__["changePicture"])("L", this);
      },
      className: `jsx-${_components_slider__WEBPACK_IMPORTED_MODULE_4__["test"].__hash}` + " " + "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-5 ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, " ", "<-", " "), __jsx("button", {
      onClick: () => {
        Object(_components_changePicture__WEBPACK_IMPORTED_MODULE_3__["changePicture"])("R", this);
      },
      className: `jsx-${_components_slider__WEBPACK_IMPORTED_MODULE_4__["test"].__hash}` + " " + "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, " ", "->", " ")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jaencarlosaponte/Documents/Proyects/slider_tailwind/src/pages/index.js */"./src/pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map