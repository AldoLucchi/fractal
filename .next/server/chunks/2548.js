"use strict";
exports.id = 2548;
exports.ids = [2548];
exports.modules = {

/***/ 80824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/collection.f8dbb93c.png","height":100,"width":100,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AEIajEQekkoolTMAlwAAlj4Ak2A4n0MYkABHG4pCGpAtAI+GeL+8t9vJv9d4N55BE44ARCSKJgCIx8PX+vn77+3y0srhUACVUSiTAEIiiSUAhufm7P///9fT4K6q00cAo1IpkwBCHog3AIlVOLnHweD////h4O44AKdSK5wAQx+HLQCIuLDb7ery+vr8x8XcNQCqVTGjADcAgF1Np9rY57i0y31xsDMAmUYjn0cilQBQO6liVckrAJoAAJU4AKJaMKM/FoY7FIbqeFyb7YAQFQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const calculateTimeLeft = ()=>{
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let difference = +new Date(`${month + 2}/10/${year}`) - +new Date();
    let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };
    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(difference / (1000 * 60 * 60) % 24),
            minutes: Math.floor(difference / 1000 / 60 % 60),
            seconds: Math.floor(difference / 1000 % 60)
        };
    }
    return timeLeft;
};
const useCountDownTime = ()=>{
    const [timeLeft, setTimeLeft] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return ()=>clearTimeout(timer);
    });
    return timeLeft;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCountDownTime);


/***/ })

};
;