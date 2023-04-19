"use strict";
exports.id = 902;
exports.ids = [902];
exports.modules = {

/***/ 902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54458);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91094);
/* harmony import */ var _utils_twFocusClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89730);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49709);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




const DEMO_PAGINATION = [
    {
        label: "1",
        href: "#"
    },
    {
        label: "2",
        href: "#"
    },
    {
        label: "3",
        href: "#"
    },
    {
        label: "4",
        href: "#"
    }
];
const Pagination = ({ className =""  })=>{
    const renderItem = (pag, index)=>{
        if (index === 0) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${(0,_utils_twFocusClass__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)()}`,
                children: pag.label
            }, index);
        }
        // RETURN UNACTIVE PAGINATION
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: `inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${(0,_utils_twFocusClass__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)()}`,
            href: pag.href,
            children: pag.label
        }, index);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: `nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`,
        children: DEMO_PAGINATION.map(renderItem)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ }),

/***/ 89730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ twFocusClass)
/* harmony export */ });
function twFocusClass(hasRing = false) {
    if (!hasRing) {
        return "focus:outline-none";
    }
    return "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0";
}


/***/ })

};
;