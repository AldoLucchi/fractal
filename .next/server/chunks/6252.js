exports.id = 6252;
exports.ids = [6252];
exports.modules = {

/***/ 48251:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(21399);
module.exports = createProxy("C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\components\\SectionSliderCollections.tsx");


/***/ }),

/***/ 15938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42526);
/* harmony import */ var _CollectionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7146);
/* harmony import */ var _CollectionCard2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44009);
/* harmony import */ var _MySlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47347);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7393);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__);








const SectionSliderCollections = ({ className ="" , cardStyle ="style1"  })=>{
    const MyCollectionCard = cardStyle === "style1" ? _CollectionCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z : _CollectionCard2__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z;
    const demoData = [
        [
            "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1599054802207-91d346adc120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1557264305-7e2764da873b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        ],
        [
            "https://images.unsplash.com/photo-1618172193763-c511deb635ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
            "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1637611331620-51149c7ceb94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        ],
        [
            "https://images.unsplash.com/photo-1625521416008-78e00551375b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1626282874430-c11ae32d2898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1625527575307-13c5d315087b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1625527575322-791601f72b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        ],
        [
            "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
            "https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1627037558426-c2d07beda3af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        ],
        null
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `nc-SectionSliderCollections ${className}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MySlider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            itemPerRow: 3,
            hideNextPrev: true,
            renderSectionHeading: ({ onClickPrev , onClickNext , showNext , showPrev  })=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    hasNextPrev: true,
                    desc: "Discover the new creative economy",
                    rightPopoverText: "last 7 days",
                    onClickPrev: onClickPrev,
                    onClickNext: onClickNext,
                    disableNext: !showNext,
                    disablePrev: !showPrev,
                    children: "Top collections"
                });
            },
            data: demoData,
            renderItem: (item, index)=>{
                if (!item) {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: "/search",
                        className: "block relative group",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative rounded-2xl overflow-hidden h-[410px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "h-[410px] bg-black/5 dark:bg-neutral-800"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "absolute inset-y-6 inset-x-10  flex flex-col items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center justify-center relative",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-xl font-semibold",
                                                    children: "Collections"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__, {
                                                    className: "absolute left-full w-5 h-5 ml-2 group-hover:scale-110 transition-transform"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm mt-1",
                                            children: "Show me more"
                                        })
                                    ]
                                })
                            ]
                        })
                    }, index);
                }
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyCollectionCard, {
                    imgs: item
                }, index);
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionSliderCollections);


/***/ })

};
;