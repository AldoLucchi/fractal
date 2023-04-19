"use strict";
exports.id = 8615;
exports.ids = [8615];
exports.modules = {

/***/ 3523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54458);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91094);
/* harmony import */ var _utils_twFocusClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89730);



const ButtonCircle = ({ className =" " , size =" w-9 h-9 " , ...args })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${className} ${size} ` + (0,_utils_twFocusClass__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(true),
        ...args
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonCircle);


/***/ }),

/***/ 77916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54458);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91094);


// eslint-disable-next-line react/display-name
const Input = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className ="" , sizeClass ="h-11 px-4 py-3" , fontClass ="text-sm font-normal" , rounded ="rounded-2xl" , children , type ="text" , ...args }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        ref: ref,
        type: type,
        className: `block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 ${rounded} ${fontClass} ${sizeClass} ${className}`,
        ...args
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ })

};
;