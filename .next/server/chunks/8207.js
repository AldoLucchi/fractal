"use strict";
exports.id = 8207;
exports.ids = [8207];
exports.modules = {

/***/ 68207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54458);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49709);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91094);



const Badge = ({ className ="relative" , name , color ="blue" , href  })=>{
    const getColorClass = (hasHover = true)=>{
        switch(color){
            case "pink":
                return `text-pink-800 bg-pink-100 ${hasHover ? "hover:bg-pink-800" : ""}`;
            case "red":
                return `text-red-800 bg-red-100 ${hasHover ? "hover:bg-red-800" : ""}`;
            case "gray":
                return `text-gray-800 bg-gray-100 ${hasHover ? "hover:bg-gray-800" : ""}`;
            case "green":
                return `text-green-800 bg-green-100 ${hasHover ? "hover:bg-green-800" : ""}`;
            case "purple":
                return `text-purple-800 bg-purple-100 ${hasHover ? "hover:bg-purple-800" : ""}`;
            case "indigo":
                return `text-indigo-800 bg-indigo-100 ${hasHover ? "hover:bg-indigo-800" : ""}`;
            case "yellow":
                return `text-yellow-800 bg-yellow-100 ${hasHover ? "hover:bg-yellow-800" : ""}`;
            case "blue":
                return `text-blue-800 bg-blue-100 ${hasHover ? "hover:bg-blue-800" : ""}`;
            default:
                return `text-pink-800 bg-pink-100 ${hasHover ? "hover:bg-pink-800" : ""}`;
        }
    };
    const CLASSES = "nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs " + className;
    return !!href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href || "/",
        className: `transition-colors hover:text-white duration-300 ${CLASSES} ${getColorClass()}`,
        children: name
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: `${CLASSES} ${getColorClass(false)} ${className}`,
        children: name
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);


/***/ })

};
;