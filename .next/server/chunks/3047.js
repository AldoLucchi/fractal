exports.id = 3047;
exports.ids = [3047];
exports.modules = {

/***/ 28124:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(21399);
module.exports = createProxy("C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\components\\HeaderFilterSection.tsx");


/***/ }),

/***/ 12053:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(21399);
module.exports = createProxy("C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\components\\SectionGridAuthorBox\\SectionGridAuthorBox.tsx");


/***/ }),

/***/ 12760:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(21399);
module.exports = createProxy("C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\components\\SectionSliderCategories\\SectionSliderCategories.tsx");


/***/ }),

/***/ 70264:
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
/* harmony import */ var _shared_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85238);
/* harmony import */ var _shared_Nav_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7558);
/* harmony import */ var _shared_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29266);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21245);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_Button_ButtonPrimary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34255);
/* harmony import */ var _components_TabFilters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72032);
/* harmony import */ var _app_headlessui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40846);









const HeaderFilterSection = ({ className ="mb-12"  })=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [tabActive, setTabActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("All NFTs");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex flex-col relative ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: `What's trending now`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col lg:flex-row lg:items-center justify-between space-y-6 lg:space-y-0 lg:space-x-2 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Nav_Nav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: "sm:space-x-2",
                        containerClassName: "relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar",
                        children: [
                            "All NFTs",
                            "Arts",
                            "Music",
                            "Sports",
                            "Jewels"
                        ].map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                isActive: tabActive === item,
                                onClick: ()=>setTabActive(item),
                                children: item
                            }, index))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "block flex-shrink-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_Button_ButtonPrimary__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            className: "w-full !pr-16",
                            sizeClass: "pl-4 py-2.5 sm:pl-6",
                            onClick: ()=>{
                                setIsOpen(!isOpen);
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                    className: `w-6 h-6`,
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M14.3201 19.07C14.3201 19.68 13.92 20.48 13.41 20.79L12.0001 21.7C10.6901 22.51 8.87006 21.6 8.87006 19.98V14.63C8.87006 13.92 8.47006 13.01 8.06006 12.51L4.22003 8.47C3.71003 7.96 3.31006 7.06001 3.31006 6.45001V4.13C3.31006 2.92 4.22008 2.01001 5.33008 2.01001H18.67C19.78 2.01001 20.6901 2.92 20.6901 4.03V6.25C20.6901 7.06 20.1801 8.07001 19.6801 8.57001",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: "10",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M16.07 16.52C17.8373 16.52 19.27 15.0873 19.27 13.32C19.27 11.5527 17.8373 10.12 16.07 10.12C14.3027 10.12 12.87 11.5527 12.87 13.32C12.87 15.0873 14.3027 16.52 16.07 16.52Z",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M19.87 17.12L18.87 16.12",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "block truncate ml-2.5",
                                    children: "Filter"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "absolute top-1/2 -translate-y-1/2 right-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__, {
                                        className: `w-5 h-5 ${isOpen ? "rotate-180" : ""}`,
                                        "aria-hidden": "true"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_headlessui__WEBPACK_IMPORTED_MODULE_8__/* .Transition */ .u, {
                show: isOpen,
                enter: "transition-opacity duration-150",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "transition-opacity duration-150",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full border-b border-neutral-200 dark:border-neutral-700 my-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TabFilters__WEBPACK_IMPORTED_MODULE_6__["default"], {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderFilterSection);


/***/ }),

/***/ 42374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SectionSliderCategories_SectionSliderCategories)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/Heading/Heading.tsx
var Heading = __webpack_require__(42526);
// EXTERNAL MODULE: ./src/shared/NcImage/NcImage.tsx
var NcImage = __webpack_require__(63854);
;// CONCATENATED MODULE: ./src/images/nfts/cat1.webp
/* harmony default export */ const cat1 = ({"src":"/_next/static/media/cat1.b9c93b7a.webp","height":360,"width":662,"blurDataURL":"data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAACwAQCdASoIAAQAAkA4JbACdADcy0xAAPzmPSvpd3JGobiCwOBqIfQ+51rAESE6ZPkAjJb/I8vlx9CLbf8HJinxgrbr4jFaH/gAAA==","blurWidth":8,"blurHeight":4});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/CardCategory5/CardCategory5.tsx





const COLORS = [
    "bg-purple-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-red-500",
    "bg-green-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-gray-500"
];
const CardCategory5 = ({ className ="" , featuredImage =cat1 , name , index  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: "/collection",
        className: `nc-CardCategory5 flex flex-col ${className}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `flex-shrink-0 relative w-full aspect-w-4 aspect-h-3 h-0 rounded-2xl overflow-hidden group`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NcImage/* default */.Z, {
                        containerClassName: "",
                        src: featuredImage,
                        className: "object-cover rounded-2xl z-0",
                        fill: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-4 flex items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `w-10 h-10 rounded-full ${COLORS[index]}`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "ml-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: `text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate`,
                                children: name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `block mt-1 text-sm text-neutral-6000 dark:text-neutral-400`,
                                children: "1255 NFTs"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const CardCategory5_CardCategory5 = (CardCategory5);

// EXTERNAL MODULE: ./src/contains/fakeData.ts
var fakeData = __webpack_require__(2898);
// EXTERNAL MODULE: ./src/components/MySlider.tsx + 3 modules
var MySlider = __webpack_require__(47347);
;// CONCATENATED MODULE: ./src/components/SectionSliderCategories/SectionSliderCategories.tsx






const ntfsCatNames = [
    "Arts",
    "Entertainment",
    "Music",
    "News",
    "Science",
    "Sports",
    "Technology"
];
const SectionSliderCategories = ({ heading ="Browse by category" , subHeading ="Explore the NFTs in the most featured categories." , className =""  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `nc-SectionSliderCategories ${className}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(MySlider/* default */.Z, {
            itemPerRow: 4,
            hideNextPrev: true,
            renderSectionHeading: ({ onClickPrev , onClickNext , showNext , showPrev  })=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(Heading["default"], {
                    hasNextPrev: true,
                    desc: subHeading,
                    onClickPrev: onClickPrev,
                    onClickNext: onClickNext,
                    disableNext: !showNext,
                    disablePrev: !showPrev,
                    children: heading
                });
            },
            data: [
                1,
                1,
                1,
                1,
                1,
                1
            ],
            renderItem: (_, index)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(CardCategory5_CardCategory5, {
                    index: index,
                    featuredImage: fakeData/* nftsCatImgs */.oW[index],
                    name: `${ntfsCatNames[index]}`
                }, index);
            }
        })
    });
};
/* harmony default export */ const SectionSliderCategories_SectionSliderCategories = (SectionSliderCategories);


/***/ }),

/***/ 85238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_NextPrev_NextPrev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9526);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Heading = ({ children , desc ="Discover the most trending products in Ciseco." , className ="mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50" , isCenter =false , hasNextPrev =false , ...args })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${className}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: isCenter ? "text-center w-full max-w-2xl mx-auto mb-4" : "max-w-2xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: `text-3xl md:text-4xl font-semibold`,
                        ...args,
                        children: children || `Section Heading`
                    }),
                    desc && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "mt-2 md:mt-4 font-normal block text-base sm:text-lg text-neutral-500 dark:text-neutral-400",
                        children: desc
                    })
                ]
            }),
            hasNextPrev && !isCenter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_NextPrev_NextPrev__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    onClickNext: ()=>{},
                    onClickPrev: ()=>{}
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);


/***/ })

};
;