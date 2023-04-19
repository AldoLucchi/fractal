"use strict";
exports.id = 4437;
exports.ids = [4437];
exports.modules = {

/***/ 44437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LikeButton = ({ className ="" , liked =false  })=>{
    const [isLiked, setIsLiked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(liked);
    // make random for demo
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsLiked(Math.random() > 0.5);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 text-neutral-700 dark:text-slate-200 nc-shadow-lg ${className}`,
        onClick: ()=>setIsLiked(!isLiked),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            className: "w-5 h-5",
            viewBox: "0 0 24 24",
            fill: "none",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z",
                stroke: isLiked ? "#ef4444" : "currentColor",
                fill: isLiked ? "#ef4444" : "none",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeButton);


/***/ })

};
;