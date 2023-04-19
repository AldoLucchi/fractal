"use strict";
exports.id = 1978;
exports.ids = [1978];
exports.modules = {

/***/ 24355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/rightLargeImg.2a47efb6.png","height":1383,"width":1389,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAW0lEQVR42kXNuQ2EQBQE0f6Ds8aCOZwBgLiyqM4/I0YjJPScdkotVP0KuZCDRNCTCRqHaFgYvHn1wEwS4Y6zuHzwRyLofPrm9k6LasLIVkx+k4TIZIvk0Hfruh6rLBU5ys2Y8wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 86836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/rightLargeImgDark.2a47efb6.png","height":1383,"width":1389,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAW0lEQVR42kXNuQ2EQBQE0f6Ds8aCOZwBgLiyqM4/I0YjJPScdkotVP0KuZCDRNCTCRqHaFgYvHn1wEwS4Y6zuHzwRyLofPrm9k6LasLIVkx+k4TIZIvk0Hfruh6rLBU5ys2Y8wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 42526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32513);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40846);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_NextPrev_NextPrev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9526);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93524);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__);





const solutions = [
    {
        name: "Last 24 hours",
        href: "##"
    },
    {
        name: "Last 7 days",
        href: "##"
    },
    {
        name: "Last 30 days",
        href: "##"
    }
];
const Heading = ({ children , desc ="" , className ="mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50" , isCenter =false , hasNextPrev =false , fontClass ="text-3xl md:text-4xl font-semibold" , rightPopoverText , rightPopoverOptions =solutions , ...args })=>{
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(rightPopoverOptions[0].name);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValue(rightPopoverOptions[0].name);
    }, [
        rightPopoverOptions
    ]);
    const renderRightPopoverText = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__/* .Popover */ .J, {
            className: "relative",
            children: ({ open , close  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__/* .Popover.Button */ .J.Button, {
                            as: "h3",
                            className: "text-green-500 flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75",
                            children: [
                                value,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__, {
                                    className: "h-6 w-6 ml-2"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__/* .Transition */ .u, {
                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                            enter: "transition ease-out duration-200",
                            enterFrom: "opacity-0 translate-y-1",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition ease-in duration-150",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__/* .Popover.Panel */ .J.Panel, {
                                className: "absolute z-50 w-screen max-w-[240px] mt-3 -translate-x-1/2 left-1/2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative bg-white dark:bg-neutral-800 px-3 py-3.5",
                                        children: rightPopoverOptions.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: item.href,
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    setValue(item.name);
                                                    close();
                                                },
                                                className: "flex items-center -my-1 p-3 rounded-2xl transition duration-150 ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "font-medium text-base",
                                                    children: item.name
                                                })
                                            }, item.name))
                                    })
                                })
                            })
                        })
                    ]
                })
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${className}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: isCenter ? "flex flex-col items-center text-center w-full max-w-2xl mx-auto" : "max-w-2xl",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: `flex items-center  flex-wrap ${isCenter ? "justify-center" : ""} ${fontClass}`,
                        children: [
                            children || `Section Heading`,
                            rightPopoverText && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "block w-2",
                                        children: ` `
                                    }),
                                    renderRightPopoverText()
                                ]
                            })
                        ]
                    }),
                    !!desc && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400",
                        children: desc
                    })
                ]
            }),
            hasNextPrev && !isCenter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_NextPrev_NextPrev__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    ...args
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);


/***/ }),

/***/ 9526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55314);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9078);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const NextPrev = ({ className ="" , onClickNext =()=>{} , onClickPrev =()=>{} , btnClassName ="w-10 h-10" , disableNext , disablePrev  })=>{
    const [focus, setFocus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("right");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `nc-NextPrev relative flex items-center text-slate-500 dark:text-slate-400 ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: `${btnClassName} mr-2 border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center ${focus === "left" ? "border-2" : ""}`,
                onClick: (e)=>{
                    e.preventDefault();
                    onClickPrev();
                },
                title: "Prev",
                disabled: disablePrev,
                onMouseEnter: ()=>setFocus("left"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__, {
                    className: "w-5 h-5"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: `${btnClassName}  border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center ${focus === "right" ? "border-2" : ""}`,
                onClick: (e)=>{
                    e.preventDefault();
                    onClickNext();
                },
                title: "Next",
                disabled: disableNext,
                onMouseEnter: ()=>setFocus("right"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__, {
                    className: "w-5 h-5"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextPrev);


/***/ })

};
;