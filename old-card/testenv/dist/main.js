/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generators/Cards.js":
/*!*********************************!*\
  !*** ./src/generators/Cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cards\": () => (/* binding */ Cards)\n/* harmony export */ });\n/* harmony import */ var _cardDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardDefs */ \"./src/generators/cardDefs.js\");\n\r\n\r\nclass Cards {\r\n  constructor(defs) {\r\n    //Should be an array\r\n    this.afflictions = defs.afflictions;\r\n    this.range = defs.range;\r\n    this.description = defs.description;\r\n    this.sMsg = defs.sMsg;\r\n    this.fMsg = defs.fMsg;\r\n  }\r\n\r\n  displaySuccessMessage(origin, target) {\r\n    console.log(this.sMsg(origin, target));\r\n  }\r\n\r\n  displayFailMessage(origin, target) {\r\n    console.log(this.fMsg(origin, target));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://testenv/./src/generators/Cards.js?");

/***/ }),

/***/ "./src/generators/afflictionDefs.js":
/*!******************************************!*\
  !*** ./src/generators/afflictionDefs.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exhaustion\": () => (/* binding */ exhaustion),\n/* harmony export */   \"exsanguination\": () => (/* binding */ exsanguination),\n/* harmony export */   \"torid\": () => (/* binding */ torid)\n/* harmony export */ });\nconst exsanguination = {\r\n  name: \"exsanguination\",\r\n  stat: \"blood\",\r\n  magnitude: 1,\r\n  freq: 1,\r\n  operation: \"subtract\",\r\n};\r\n\r\nconst exhaustion = {\r\n  name: \"exhaustion\",\r\n  stat: \"fatigue\",\r\n  magnitude: 1,\r\n  freq: 0,\r\n  operation: \"subtract\",\r\n};\r\n\r\nconst torid = {\r\n  name: \"torid\",\r\n  stat: \"fatigue\",\r\n  magnitude: 1,\r\n  freq: 1,\r\n  operation: \"subtract\",\r\n};\r\n\n\n//# sourceURL=webpack://testenv/./src/generators/afflictionDefs.js?");

/***/ }),

/***/ "./src/generators/cardDefs.js":
/*!************************************!*\
  !*** ./src/generators/cardDefs.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cards\": () => (/* binding */ cards)\n/* harmony export */ });\n/* harmony import */ var _afflictionDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./afflictionDefs */ \"./src/generators/afflictionDefs.js\");\n\r\n\r\nconst cards = {\r\n  bite: {\r\n    name: \"bite\",\r\n    afflictions: [_afflictionDefs__WEBPACK_IMPORTED_MODULE_0__.exsanguination],\r\n    apply(self, target) {},\r\n    sMsg(self, target) {\r\n      return `${self} gnashes at ${target} opening up a bleeding wound! (+1 bleeding)`;\r\n    },\r\n    fMsg(self, target) {\r\n      return `${self} gnashes at ${target}, but does not connect!`;\r\n    },\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://testenv/./src/generators/cardDefs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generators_Cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generators/Cards */ \"./src/generators/Cards.js\");\n/* harmony import */ var _generators_cardDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generators/cardDefs */ \"./src/generators/cardDefs.js\");\n\r\n\r\n\r\nconst body = document.querySelector(\"body\");\r\nconst div = document.createElement(\"div\");\r\ndiv.textContent = \"Sup\";\r\nbody.appendChild(div);\r\n\r\nconst test = new _generators_Cards__WEBPACK_IMPORTED_MODULE_0__.Cards(_generators_cardDefs__WEBPACK_IMPORTED_MODULE_1__.cards.bite);\r\ntest.displayFailMessage(\"Boogie\", \"Woogie\");\r\n\r\n\n\n//# sourceURL=webpack://testenv/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;