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

/***/ "./src/components/Button/button.template.html":
/*!****************************************************!*\
  !*** ./src/components/Button/button.template.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<button type=\\\"button\\\"></button>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-demo/./src/components/Button/button.template.html?");

/***/ }),

/***/ "./src/components/WCHeader/wc-header.template.html":
/*!*********************************************************!*\
  !*** ./src/components/WCHeader/wc-header.template.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"header\\\">\\n    <h1 class=\\\"title\\\"></h1>\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-demo/./src/components/WCHeader/wc-header.template.html?");

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles/global.css?");

/***/ }),

/***/ "./src/components/Button/button.module.css":
/*!*************************************************!*\
  !*** ./src/components/Button/button.module.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"my-button\":\"button-module__my-button--cyocJ\",\"myButton\":\"button-module__my-button--cyocJ\"});\n\n//# sourceURL=webpack://webpack-demo/./src/components/Button/button.module.css?");

/***/ }),

/***/ "./src/components/WCHeader/wc-header.module.css":
/*!******************************************************!*\
  !*** ./src/components/WCHeader/wc-header.module.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"header\":\"wc-header-module__header--bXMZD\",\"title\":\"wc-header-module__title--L7n4T\"});\n\n//# sourceURL=webpack://webpack-demo/./src/components/WCHeader/wc-header.module.css?");

/***/ }),

/***/ "./src/components/Button/index.js":
/*!****************************************!*\
  !*** ./src/components/Button/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _button_template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.template.html */ \"./src/components/Button/button.template.html\");\n/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.module.css */ \"./src/components/Button/button.module.css\");\n\n\n\nconst Button = ({text, onClick}) => {\n    const template = document.createElement('template');\n    template.innerHTML = _button_template_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"].trim();\n\n    const button = template.content.cloneNode(true).firstChild;\n    button.classList.add(_button_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].myButton);\n    button.innerText = text;\n    button.addEventListener('click', onClick);\n\n    return button;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://webpack-demo/./src/components/Button/index.js?");

/***/ }),

/***/ "./src/components/WCHeader/index.js":
/*!******************************************!*\
  !*** ./src/components/WCHeader/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WCHeader)\n/* harmony export */ });\n/* harmony import */ var _wc_header_template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wc-header.template.html */ \"./src/components/WCHeader/wc-header.template.html\");\n/* harmony import */ var _wc_header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wc-header.module.css */ \"./src/components/WCHeader/wc-header.module.css\");\n\n\n\nclass WCHeader extends HTMLElement {\n    set title(value){\n        this.setAttribute('title', value)\n    }\n\n    get title(){\n        this.getAttribute('title')\n    }\n\n    constructor() {\n        super();\n        this.attachShadow({mode: 'open'});\n    }\n\n    connectedCallback() {\n        this.render();\n    }\n\n\n    render() {\n        const {shadowRoot} = this;\n\n        const htmlContent = this.htmlToElement(_wc_header_template_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        shadowRoot.innerHTML = '';\n        shadowRoot.appendChild(htmlContent);\n        const header = shadowRoot.querySelector('.header');\n        const title = shadowRoot.querySelector('.title');\n        header.classList.add(_wc_header_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header);\n        title.classList.add(_wc_header_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title);\n        title.innerHTML = this.getAttribute('title');\n    }\n\n\n    htmlToElement(html) {\n        const template = document.createElement('template');\n        html = html.trim(); // Never return a text node of whitespace as the result\n        template.innerHTML = html;\n        return template.content.firstChild;\n    }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/components/WCHeader/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Button */ \"./src/components/Button/index.js\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _components_WCHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/WCHeader */ \"./src/components/WCHeader/index.js\");\n\n\n\n\ncustomElements.define('wc-header', _components_WCHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nconst button = (0,_components_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    text: 'Test Button Component :)',\n    onClick: () => {\n        const test = window.confirm('Do you want to add message: \"Test text added :)\"?');\n        if(test){\n            const divEl = document.createElement('div');\n            divEl.innerHTML = `<p>Test text added :)</p>`;\n            document.body.appendChild(divEl);\n\n        }\n    }\n});\n\ndocument.body.appendChild(button);\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

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