"use strict";
exports.id = 9266;
exports.ids = [9266];
exports.modules = {

/***/ 29266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_twFocusClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29943);



const NavItem = ({ className ="px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize" , radius ="rounded-full" , children , onClick =()=>{} , isActive =false , renderX  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: "nc-NavItem relative",
        "data-nc-id": "NavItem",
        children: [
            renderX && renderX,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: `block !leading-none font-medium whitespace-nowrap ${className} ${radius} ${isActive ? "bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 " : "text-slate-500 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-800 hover:bg-slate-100/75 dark:hover:bg-slate-800"} ${(0,_utils_twFocusClass__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()}`,
                onClick: ()=>{
                    onClick && onClick();
                },
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);


/***/ })

};
;