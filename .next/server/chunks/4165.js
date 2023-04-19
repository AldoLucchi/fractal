"use strict";
exports.id = 4165;
exports.ids = [4165];
exports.modules = {

/***/ 82437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54458);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91094);


const BackgroundSection = ({ className ="bg-neutral-100/70 dark:bg-black/20"  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `nc-BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 ${className}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "sr-only",
            children: "BackgroundSection"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundSection);


/***/ }),

/***/ 7146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contains_fakeData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2898);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70367);
/* harmony import */ var _shared_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63854);
/* harmony import */ var _VerifyIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45371);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);







const CollectionCard = ({ className , imgs =[
    _contains_fakeData__WEBPACK_IMPORTED_MODULE_1__/* .nftsImgs[9] */ .wY[9],
    _contains_fakeData__WEBPACK_IMPORTED_MODULE_1__/* .nftsImgs[10] */ .wY[10],
    _contains_fakeData__WEBPACK_IMPORTED_MODULE_1__/* .nftsImgs[11] */ .wY[11],
    _contains_fakeData__WEBPACK_IMPORTED_MODULE_1__/* .nftsImgs[8] */ .wY[8]
]  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `CollectionCard relative p-4 rounded-2xl overflow-hidden h-[410px] flex flex-col group ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                fill: true,
                containerClassName: "absolute inset-0 z-0 overflow-hidden",
                src: imgs[0]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 group-hover:h-full to-transparent "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mt-auto",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                sizeClass: "h-6 w-6",
                                containerClassName: "ring-2 ring-white"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ml-2 text-xs text-white",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-normal",
                                        children: "by"
                                    }),
                                    ` `,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-medium",
                                        children: "Jane Cooper"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VerifyIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                iconClass: "w-4 h-4"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "font-semibold text-3xl mt-1.5 text-white",
                        children: "Awesome collection"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-3 gap-4 mt-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                containerClassName: "relative z-0 w-full h-20 rounded-xl overflow-hidden",
                                fill: true,
                                src: imgs[1]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                containerClassName: "relative z-0 w-full h-20 rounded-xl overflow-hidden",
                                fill: true,
                                src: imgs[2]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                containerClassName: "relative z-0 w-full h-20 rounded-xl overflow-hidden",
                                fill: true,
                                src: imgs[3]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                href: "/collection",
                className: "absolute inset-0"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionCard);


/***/ }),

/***/ 44009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70367);
/* harmony import */ var _shared_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63854);
/* harmony import */ var _VerifyIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45371);
/* harmony import */ var _hooks_useGetRandomData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92779);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);







const CollectionCard2 = ({ className , imgs =[]  })=>{
    const { nftImageRd , personNameRd  } = (0,_hooks_useGetRandomData__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { nftImageRd: nftImageRd2  } = (0,_hooks_useGetRandomData__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { nftImageRd: nftImageRd3  } = (0,_hooks_useGetRandomData__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { nftImageRd: nftImageRd4  } = (0,_hooks_useGetRandomData__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const nftImages = imgs.length ? imgs : [
        nftImageRd,
        nftImageRd2,
        nftImageRd3,
        nftImageRd4
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `CollectionCard2 group relative ${className}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        containerClassName: "relative z-0 aspect-w-8 aspect-h-5",
                        className: "object-cover rounded-xl",
                        src: nftImages[0],
                        sizes: "(max-width: 600px) 480px, 33vw",
                        fill: true
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-3 gap-1.5 mt-1.5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                fill: true,
                                containerClassName: "relative w-full h-28",
                                className: "object-cover rounded-xl",
                                src: nftImages[1],
                                sizes: "150px"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                fill: true,
                                containerClassName: "relative w-full h-28",
                                className: "object-cover rounded-xl",
                                src: nftImages[2],
                                sizes: "150px"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                fill: true,
                                containerClassName: "relative w-full h-28",
                                className: "object-cover rounded-xl",
                                src: nftImages[3],
                                sizes: "150px"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mt-5 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "font-semibold text-2xl group-hover:text-primary-500 transition-colors",
                        children: "Awesome collection"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-2 flex justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center  truncate",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        sizeClass: "h-6 w-6"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "ml-2 text-sm truncate",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-normal hidden sm:inline-block",
                                                children: "Creator"
                                            }),
                                            ` `,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-medium",
                                                children: personNameRd
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VerifyIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        iconClass: "w-4 h-4"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "mb-0.5 ml-2 inline-flex justify-center items-center px-2 py-1.5 border-2 border-secondary-500 text-secondary-500 rounded-md text-xs !leading-none font-medium",
                                children: "1.255 Items"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                href: "/collection",
                className: "absolute inset-0 "
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionCard2);


/***/ }),

/***/ 47347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MySlider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-use/lib/index.js
var lib = __webpack_require__(37402);
// EXTERNAL MODULE: ./node_modules/react-swipeable/lib/index.js
var react_swipeable_lib = __webpack_require__(21349);
;// CONCATENATED MODULE: ./src/utils/animationVariants.ts
const variants = (x = 1000, opacity = 0)=>({
        enter: (direction)=>{
            return {
                x: direction > 0 ? x : -x,
                opacity
            };
        },
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction)=>{
            return {
                x: direction < 0 ? x : -x,
                opacity
            };
        }
    });

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs
var MotionConfig = __webpack_require__(72017);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 190 modules
var motion = __webpack_require__(55402);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 5 modules
var AnimatePresence = __webpack_require__(34338);
// EXTERNAL MODULE: ./src/utils/twFocusClass.ts
var twFocusClass = __webpack_require__(29943);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/ChevronLeftIcon.js
var ChevronLeftIcon = __webpack_require__(5395);
;// CONCATENATED MODULE: ./src/shared/NextPrev/PrevBtn.tsx




const PrevBtn = ({ className ="w-10 h-10 text-lg" , ...args })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: `PrevBtn ${className} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full inline-flex items-center justify-center hover:border-neutral-300 ${(0,twFocusClass/* default */.Z)()}`,
        ...args,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ChevronLeftIcon, {
            className: "w-5 h-5"
        })
    });
};
/* harmony default export */ const NextPrev_PrevBtn = (PrevBtn);

// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/ChevronRightIcon.js
var ChevronRightIcon = __webpack_require__(51498);
;// CONCATENATED MODULE: ./src/shared/NextPrev/NextBtn.tsx




const NextBtn = ({ className ="w-10 h-10 text-lg" , ...args })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: `NextBtn ${className} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full inline-flex items-center justify-center hover:border-neutral-300 ${(0,twFocusClass/* default */.Z)()}`,
        ...args,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ChevronRightIcon, {
            className: "w-5 h-5"
        })
    });
};
/* harmony default export */ const NextPrev_NextBtn = (NextBtn);

;// CONCATENATED MODULE: ./src/components/MySlider.tsx








function MySlider({ className ="" , itemPerRow =5 , data , renderItem =()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {}) , arrowBtnClass ="top-1/2 -translate-y-1/2" , renderSectionHeading , hideNextPrev =false  }) {
    const [currentIndex, setCurrentIndex] = (0,react_.useState)(0);
    const [direction, setDirection] = (0,react_.useState)(0);
    const [numberOfItems, setNumberOfitem] = (0,react_.useState)(0);
    const windowWidth = (0,lib.useWindowSize)().width;
    (0,react_.useEffect)(()=>{
        if (windowWidth < 320) {
            return setNumberOfitem(1);
        }
        if (windowWidth < 500) {
            return setNumberOfitem(itemPerRow - 3 || 1);
        }
        if (windowWidth < 1024) {
            return setNumberOfitem(itemPerRow - 2 || 1);
        }
        if (windowWidth < 1280) {
            return setNumberOfitem(itemPerRow - 1);
        }
        setNumberOfitem(itemPerRow);
    }, [
        itemPerRow,
        windowWidth
    ]);
    function changeItemId(newVal) {
        if (newVal > currentIndex) {
            setDirection(1);
        } else {
            setDirection(-1);
        }
        setCurrentIndex(newVal);
    }
    const handlers = (0,react_swipeable_lib/* useSwipeable */.QS)({
        onSwipedLeft: ()=>{
            if (currentIndex < data?.length - 1) {
                changeItemId(currentIndex + 1);
            }
        },
        onSwipedRight: ()=>{
            if (currentIndex > 0) {
                changeItemId(currentIndex - 1);
            }
        },
        trackMouse: true
    });
    if (!numberOfItems) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {});
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `nc-MySlider ${className}`,
        children: [
            renderSectionHeading && renderSectionHeading({
                onClickPrev: ()=>changeItemId(currentIndex - 1),
                onClickNext: ()=>changeItemId(currentIndex + 1),
                showNext: data.length > currentIndex + numberOfItems,
                showPrev: !!currentIndex
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MotionConfig/* MotionConfig */.A, {
                transition: {
                    x: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                    },
                    opacity: {
                        duration: 0.2
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `relative flow-root`,
                    ...handlers,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `flow-root overflow-hidden rounded-xl`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion.ul */.E.ul, {
                                initial: false,
                                className: "relative flex whitespace-nowrap -mx-2 xl:-mx-4 ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                                    initial: false,
                                    custom: direction,
                                    children: data.map((item, indx)=>/*#__PURE__*/ jsx_runtime_.jsx(motion/* motion.li */.E.li, {
                                            className: `relative flex-shrink-0 inline-block px-2 xl:px-4 whitespace-normal`,
                                            custom: direction,
                                            initial: {
                                                x: `${(currentIndex - 1) * -100}%`
                                            },
                                            animate: {
                                                x: `${currentIndex * -100}%`
                                            },
                                            variants: variants(200, 1),
                                            style: {
                                                width: `calc(1/${numberOfItems} * 100%)`
                                            },
                                            children: renderItem(item, indx)
                                        }, indx))
                                })
                            })
                        }),
                        currentIndex && !hideNextPrev ? /*#__PURE__*/ jsx_runtime_.jsx(NextPrev_PrevBtn, {
                            onClick: ()=>changeItemId(currentIndex - 1),
                            className: `w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -left-3 xl:-left-6 z-[1] ${arrowBtnClass}`
                        }) : null,
                        data.length > currentIndex + numberOfItems && !hideNextPrev ? /*#__PURE__*/ jsx_runtime_.jsx(NextPrev_NextBtn, {
                            onClick: ()=>changeItemId(currentIndex + 1),
                            className: `w-9 h-9 xl:w-12 xl:h-12 text-lg absolute bg-white -right-3 xl:-right-6 z-[1] ${arrowBtnClass}`
                        }) : null
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 72032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_TabFilters)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/popover/popover.js
var popover = __webpack_require__(32513);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 3 modules
var transition = __webpack_require__(40846);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/dialog/dialog.js + 18 modules
var dialog = __webpack_require__(43735);
// EXTERNAL MODULE: ./src/shared/Button/ButtonPrimary.tsx
var ButtonPrimary = __webpack_require__(34255);
// EXTERNAL MODULE: ./src/shared/Button/Button.tsx
var Button = __webpack_require__(78035);
;// CONCATENATED MODULE: ./src/shared/Button/ButtonThird.tsx



const ButtonThird = ({ className ="text-neutral-700 border border-neutral-200 dark:text-neutral-200 dark:border-neutral-700" , ...args })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Button["default"], {
        className: `ttnc-ButtonThird ${className}`,
        ...args
    });
};
/* harmony default export */ const Button_ButtonThird = (ButtonThird);

// EXTERNAL MODULE: ./src/shared/ButtonClose/ButtonClose.tsx
var ButtonClose = __webpack_require__(32401);
// EXTERNAL MODULE: ./src/shared/Checkbox/Checkbox.tsx
var Checkbox = __webpack_require__(46695);
// EXTERNAL MODULE: ./node_modules/rc-slider/lib/index.js
var lib = __webpack_require__(71006);
;// CONCATENATED MODULE: ./src/shared/Radio/Radio.tsx


const Radio = ({ className ="" , name , id , onChange , label , sizeClassName ="w-6 h-6" , defaultChecked  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `flex items-center text-sm sm:text-base ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                id: id,
                name: name,
                type: "radio",
                className: `focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 ${sizeClassName}`,
                onChange: (e)=>onChange && onChange(e.target.value),
                defaultChecked: defaultChecked,
                value: id
            }),
            label && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: id,
                className: "pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none",
                dangerouslySetInnerHTML: {
                    __html: label
                }
            })
        ]
    });
};
/* harmony default export */ const Radio_Radio = (Radio);

// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/ChevronDownIcon.js
var ChevronDownIcon = __webpack_require__(21245);
;// CONCATENATED MODULE: ./src/components/TabFilters.tsx










// DEMO DATA
const typeOfSales = [
    {
        name: "Buy now"
    },
    {
        name: "On Auction"
    },
    {
        name: "New"
    },
    {
        name: "Has Offers"
    }
];
const fileTypes = [
    {
        name: "Image"
    },
    {
        name: "Video"
    },
    {
        name: "Audio"
    }
];
const sortOrderRadios = [
    {
        name: "Recently listed",
        id: "Recently-listed"
    },
    {
        name: "Ending soon",
        id: "Ending-soon"
    },
    {
        name: "Price low - hight",
        id: "Price-low-hight"
    },
    {
        name: "Price hight - low",
        id: "Price-hight-low"
    },
    {
        name: "Most favorited",
        id: "Most-favorited"
    }
];
//
const TabFilters = ()=>{
    const [isOpenMoreFilter, setisOpenMoreFilter] = (0,react_.useState)(false);
    //
    const [isVerifiedCreator, setIsVerifiedCreator] = (0,react_.useState)(true);
    const [rangePrices, setRangePrices] = (0,react_.useState)([
        0.01,
        10
    ]);
    const [fileTypesState, setfileTypesState] = (0,react_.useState)([]);
    const [saleTypeStates, setSaleTypeStates] = (0,react_.useState)([]);
    const [sortOrderStates, setSortOrderStates] = (0,react_.useState)("");
    //
    const closeModalMoreFilter = ()=>setisOpenMoreFilter(false);
    const openModalMoreFilter = ()=>setisOpenMoreFilter(true);
    //
    const handleChangeFileTypes = (checked, name)=>{
        checked ? setfileTypesState([
            ...fileTypesState,
            name
        ]) : setfileTypesState(fileTypesState.filter((i)=>i !== name));
    };
    const handleChangeSaleType = (checked, name)=>{
        checked ? setSaleTypeStates([
            ...saleTypeStates,
            name
        ]) : setSaleTypeStates(saleTypeStates.filter((i)=>i !== name));
    };
    //
    // OK
    const renderXClear = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "flex-shrink-0 w-4 h-4 rounded-full bg-primary-500 text-white flex items-center justify-center ml-3 cursor-pointer",
            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-3 w-3",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                    clipRule: "evenodd"
                })
            })
        });
    };
    // OK
    const renderTabsTypeOfSales = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J, {
            className: "relative",
            children: ({ open , close  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popover/* Popover.Button */.J.Button, {
                            className: `flex items-center justify-center px-4 py-2 text-sm rounded-full border focus:outline-none
               ${open ? "!border-primary-500 " : "border-neutral-300 dark:border-neutral-700"}
                ${!!saleTypeStates.length ? "!border-primary-500 bg-primary-50 text-primary-900" : "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"}
                `,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    className: "w-4 h-4",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M10 6.575L9.10838 8.125C8.90838 8.46666 9.07505 8.75 9.46672 8.75H10.525C10.925 8.75 11.0834 9.03333 10.8834 9.375L10 10.925",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M6.91672 15.0333V14.0667C5.00005 12.9083 3.42505 10.65 3.42505 8.25C3.42505 4.125 7.21672 0.891671 11.5 1.825C13.3834 2.24167 15.0334 3.49167 15.8917 5.21667C17.6334 8.71667 15.8 12.4333 13.1084 14.0583V15.025C13.1084 15.2667 13.2 15.825 12.3084 15.825H7.71672C6.80005 15.8333 6.91672 15.475 6.91672 15.0333Z",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M7.08325 18.3333C8.99159 17.7917 11.0083 17.7917 12.9166 18.3333",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "ml-2",
                                    children: "Sale Types"
                                }),
                                !saleTypeStates.length ? /*#__PURE__*/ jsx_runtime_.jsx(ChevronDownIcon, {
                                    className: "w-4 h-4 ml-3"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    onClick: ()=>setSaleTypeStates([]),
                                    children: renderXClear()
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                            as: react_.Fragment,
                            enter: "transition ease-out duration-200",
                            enterFrom: "opacity-0 translate-y-1",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition ease-in duration-150",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover.Panel */.J.Panel, {
                                className: "absolute z-40 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "relative flex flex-col px-5 py-6 space-y-5",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Checkbox/* default */.Z, {
                                                    name: "All Sale Types",
                                                    label: "All Sale Types",
                                                    defaultChecked: saleTypeStates.includes("All Sale Types"),
                                                    onChange: (checked)=>handleChangeSaleType(checked, "All Sale Types")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-full border-b border-neutral-200 dark:border-neutral-700"
                                                }),
                                                typeOfSales.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Checkbox/* default */.Z, {
                                                            name: item.name,
                                                            label: item.name,
                                                            defaultChecked: saleTypeStates.includes(item.name),
                                                            onChange: (checked)=>handleChangeSaleType(checked, item.name)
                                                        })
                                                    }, item.name))
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Button_ButtonThird, {
                                                    onClick: ()=>{
                                                        close();
                                                        setSaleTypeStates([]);
                                                    },
                                                    sizeClass: "px-4 py-2 sm:px-5",
                                                    children: "Clear"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ButtonPrimary/* default */.Z, {
                                                    onClick: close,
                                                    sizeClass: "px-4 py-2 sm:px-5",
                                                    children: "Apply"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
        });
    };
    // OK
    const renderTabsSortOrder = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J, {
            className: "relative",
            children: ({ open , close  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popover/* Popover.Button */.J.Button, {
                            className: `flex items-center justify-center px-4 py-2 text-sm border rounded-full focus:outline-none 
              ${open ? "!border-primary-500 " : ""}
                ${!!sortOrderStates.length ? "!border-primary-500 bg-primary-50 text-primary-900" : "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"}
                `,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    className: "w-4 h-4",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M11.5166 5.70834L14.0499 8.24168",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: "10",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M11.5166 14.2917V5.70834",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: "10",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M8.48327 14.2917L5.94995 11.7583",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: "10",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M8.48315 5.70834V14.2917",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: "10",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M10.0001 18.3333C14.6025 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6025 1.66667 10.0001 1.66667C5.39771 1.66667 1.66675 5.39763 1.66675 10C1.66675 14.6024 5.39771 18.3333 10.0001 18.3333Z",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "ml-2",
                                    children: sortOrderStates ? sortOrderRadios.filter((i)=>i.id === sortOrderStates)[0].name : "Sort order"
                                }),
                                !sortOrderStates.length ? /*#__PURE__*/ jsx_runtime_.jsx(ChevronDownIcon, {
                                    className: "w-4 h-4 ml-3"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    onClick: ()=>setSortOrderStates(""),
                                    children: renderXClear()
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                            as: react_.Fragment,
                            enter: "transition ease-out duration-200",
                            enterFrom: "opacity-0 translate-y-1",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition ease-in duration-150",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover.Panel */.J.Panel, {
                                className: "absolute z-40 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative flex flex-col px-5 py-6 space-y-5",
                                            children: sortOrderRadios.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(Radio_Radio, {
                                                    id: item.id,
                                                    name: "radioNameSort",
                                                    label: item.name,
                                                    defaultChecked: sortOrderStates === item.id,
                                                    onChange: setSortOrderStates
                                                }, item.id))
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Button_ButtonThird, {
                                                    onClick: ()=>{
                                                        close();
                                                        setSortOrderStates("");
                                                    },
                                                    sizeClass: "px-4 py-2 sm:px-5",
                                                    children: "Clear"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ButtonPrimary/* default */.Z, {
                                                    onClick: close,
                                                    sizeClass: "px-4 py-2 sm:px-5",
                                                    children: "Apply"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
        });
    };
    // OK
    const renderTabsFileTypes = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J, {
            className: "relative",
            children: ({ open , close  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popover/* Popover.Button */.J.Button, {
                            className: `flex items-center justify-center px-4 py-2 text-sm rounded-full border focus:outline-none 
              ${open ? "!border-primary-500 " : ""}
                ${!!fileTypesState.length ? "!border-primary-500 bg-primary-50 text-primary-900" : "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"}
                `,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    className: "w-4 h-4",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M2.52002 7.11011H21.48",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M8.52002 2.11011V6.97011",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M15.48 2.11011V6.52011",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M9.75 14.4501V13.2501C9.75 11.7101 10.84 11.0801 12.17 11.8501L13.21 12.4501L14.25 13.0501C15.58 13.8201 15.58 15.0801 14.25 15.8501L13.21 16.4501L12.17 17.0501C10.84 17.8201 9.75 17.1901 9.75 15.6501V14.4501V14.4501Z",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: "10",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "ml-2",
                                    children: "File Types"
                                }),
                                !fileTypesState.length ? /*#__PURE__*/ jsx_runtime_.jsx(ChevronDownIcon, {
                                    className: "w-4 h-4 ml-3"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    onClick: ()=>setfileTypesState([]),
                                    children: renderXClear()
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                            as: react_.Fragment,
                            enter: "transition ease-out duration-200",
                            enterFrom: "opacity-0 translate-y-1",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition ease-in duration-150",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover.Panel */.J.Panel, {
                                className: "absolute z-40 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative flex flex-col px-5 py-6 space-y-5",
                                            children: fileTypes.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Checkbox/* default */.Z, {
                                                        name: item.name,
                                                        label: item.name,
                                                        defaultChecked: fileTypesState.includes(item.name),
                                                        onChange: (checked)=>handleChangeFileTypes(checked, item.name)
                                                    })
                                                }, item.name))
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Button_ButtonThird, {
                                                    onClick: ()=>{
                                                        close();
                                                        setfileTypesState([]);
                                                    },
                                                    sizeClass: "px-4 py-2 sm:px-5",
                                                    children: "Clear"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ButtonPrimary/* default */.Z, {
                                                    onClick: close,
                                                    sizeClass: "px-4 py-2 sm:px-5",
                                                    children: "Apply"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
        });
    };
    // OK
    const renderTabsPriceRage = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J, {
            className: "relative",
            children: ({ open , close  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popover/* Popover.Button */.J.Button, {
                            className: `flex items-center justify-center px-4 py-2 text-sm rounded-full border border-primary-500 bg-primary-50 text-primary-900 focus:outline-none `,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    className: "w-4 h-4",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M7 12H14",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "ml-2",
                                    children: "`${rangePrices[0]} ETH - ${rangePrices[1]} ETH`"
                                }),
                                renderXClear()
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                            as: react_.Fragment,
                            enter: "transition ease-out duration-200",
                            enterFrom: "opacity-0 translate-y-1",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition ease-in duration-150",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover.Panel */.J.Panel, {
                                className: "absolute z-40 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 ",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "relative flex flex-col px-5 py-6 space-y-8",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "space-y-5",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-medium",
                                                            children: "Price range"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* default */.Z, {
                                                            range: true,
                                                            min: 0.01,
                                                            max: 10,
                                                            step: 0.01,
                                                            defaultValue: [
                                                                rangePrices[0],
                                                                rangePrices[1]
                                                            ],
                                                            allowCross: false,
                                                            onChange: (_input)=>setRangePrices(_input)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex justify-between space-x-5",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    htmlFor: "minPrice",
                                                                    className: "block text-sm font-medium text-neutral-700 dark:text-neutral-300",
                                                                    children: "Min price"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "mt-1 relative rounded-md",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500 sm:text-sm",
                                                                            children: "ETH"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                            type: "text",
                                                                            name: "minPrice",
                                                                            disabled: true,
                                                                            id: "minPrice",
                                                                            className: "block w-32 pr-10 pl-4 sm:text-sm border-neutral-200 dark:border-neutral-700 rounded-full bg-transparent",
                                                                            value: rangePrices[0]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    htmlFor: "maxPrice",
                                                                    className: "block text-sm font-medium text-neutral-700 dark:text-neutral-300",
                                                                    children: "Max price"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "mt-1 relative rounded-md",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500 sm:text-sm",
                                                                            children: "ETH"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                            type: "text",
                                                                            disabled: true,
                                                                            name: "maxPrice",
                                                                            id: "maxPrice",
                                                                            className: "block w-32 pr-10 pl-4 sm:text-sm border-neutral-200 dark:border-neutral-700 rounded-full bg-transparent",
                                                                            value: rangePrices[1]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Button_ButtonThird, {
                                                    onClick: ()=>{
                                                        setRangePrices([
                                                            0.01,
                                                            10
                                                        ]);
                                                        close();
                                                    },
                                                    sizeClass: "px-4 py-2 sm:px-5",
                                                    children: "Clear"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ButtonPrimary/* default */.Z, {
                                                    onClick: close,
                                                    sizeClass: "px-4 py-2 sm:px-5",
                                                    children: "Apply"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
        });
    };
    // OK
    const renderTabVerifiedCreator = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `flex items-center justify-center px-4 py-2 text-sm rounded-full border focus:outline-none cursor-pointer  ${isVerifiedCreator ? "border-primary-500 bg-primary-50 text-primary-900" : "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"}`,
            onClick: ()=>setIsVerifiedCreator(!isVerifiedCreator),
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    className: "w-4 h-4",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M9.99992 10C12.3011 10 14.1666 8.13452 14.1666 5.83334C14.1666 3.53215 12.3011 1.66667 9.99992 1.66667C7.69873 1.66667 5.83325 3.53215 5.83325 5.83334C5.83325 8.13452 7.69873 10 9.99992 10Z",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M2.84155 18.3333C2.84155 15.1083 6.04991 12.5 9.99991 12.5",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M15.1667 17.8334C16.6394 17.8334 17.8334 16.6394 17.8334 15.1667C17.8334 13.6939 16.6394 12.5 15.1667 12.5C13.6939 12.5 12.5 13.6939 12.5 15.1667C12.5 16.6394 13.6939 17.8334 15.1667 17.8334Z",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M18.3333 18.3333L17.5 17.5",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "line-clamp-1 ml-2",
                    children: "Verified creator"
                }),
                isVerifiedCreator && renderXClear()
            ]
        });
    };
    // OK
    const renderMoreFilterItem = (data)=>{
        const list1 = data.filter((_, i)=>i < data.length / 2);
        const list2 = data.filter((_, i)=>i >= data.length / 2);
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-2 gap-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col space-y-5",
                    children: list1.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(Checkbox/* default */.Z, {
                            name: item.name,
                            subLabel: item.description,
                            label: item.name,
                            defaultChecked: !!item.defaultChecked
                        }, item.name))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col space-y-5",
                    children: list2.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(Checkbox/* default */.Z, {
                            name: item.name,
                            subLabel: item.description,
                            label: item.name,
                            defaultChecked: !!item.defaultChecked
                        }, item.name))
                })
            ]
        });
    };
    // FOR RESPONSIVE MOBILE
    const renderTabMobileFilter = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex-shrink-0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `flex flex-shrink-0 items-center justify-center px-4 py-2 text-sm rounded-full border border-primary-500 bg-primary-50 text-primary-900 focus:outline-none cursor-pointer`,
                    onClick: openModalMoreFilter,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "hidden sm:inline",
                                    children: "NFTs"
                                }),
                                " filters (3)"
                            ]
                        }),
                        renderXClear()
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                    appear: true,
                    show: isOpenMoreFilter,
                    as: react_.Fragment,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(dialog/* Dialog */.V, {
                        as: "div",
                        className: "fixed inset-0 z-50 overflow-y-auto",
                        onClose: closeModalMoreFilter,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "min-h-screen text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition.Child */.u.Child, {
                                    as: react_.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(dialog/* Dialog.Overlay */.V.Overlay, {
                                        className: "fixed inset-0 bg-black bg-opacity-40 dark:bg-opacity-60"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "inline-block h-screen align-middle",
                                    "aria-hidden": "true",
                                    children: "​"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition.Child */.u.Child, {
                                    className: "inline-block py-8 h-screen w-full",
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 scale-95",
                                    enterTo: "opacity-100 scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 scale-100",
                                    leaveTo: "opacity-0 scale-95",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "inline-flex flex-col w-full max-w-4xl text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(dialog/* Dialog.Title */.V.Title, {
                                                        as: "h3",
                                                        className: "text-lg font-medium leading-6 text-gray-900",
                                                        children: "NFTs filters"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "absolute left-3 top-3",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonClose/* default */.Z, {
                                                            onClick: closeModalMoreFilter
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex-grow overflow-y-auto",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "px-8 md:px-10 divide-y divide-neutral-200 dark:divide-neutral-800",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "py-7",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "text-xl font-medium",
                                                                    children: "Sale Types"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "mt-6 relative ",
                                                                    children: renderMoreFilterItem(typeOfSales)
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "py-7",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "text-xl font-medium",
                                                                    children: "File Types"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "mt-6 relative ",
                                                                    children: renderMoreFilterItem(fileTypes)
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "py-7",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "text-xl font-medium",
                                                                    children: "Range Prices"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "mt-6 relative ",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "relative flex flex-col space-y-8",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "space-y-5",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* default */.Z, {
                                                                                    range: true,
                                                                                    className: "text-red-400",
                                                                                    min: 0,
                                                                                    max: 2000,
                                                                                    defaultValue: [
                                                                                        0,
                                                                                        1000
                                                                                    ],
                                                                                    allowCross: false,
                                                                                    onChange: (_input)=>setRangePrices(_input)
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "flex justify-between space-x-5",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                                htmlFor: "minPrice",
                                                                                                className: "block text-sm font-medium text-neutral-700 dark:text-neutral-300",
                                                                                                children: "Min price"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                className: "mt-1 relative rounded-md",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                        className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            className: "text-neutral-500 sm:text-sm",
                                                                                                            children: "$"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                                        type: "text",
                                                                                                        name: "minPrice",
                                                                                                        disabled: true,
                                                                                                        id: "minPrice",
                                                                                                        className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900",
                                                                                                        value: rangePrices[0]
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                                htmlFor: "maxPrice",
                                                                                                className: "block text-sm font-medium text-neutral-700 dark:text-neutral-300",
                                                                                                children: "Max price"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                className: "mt-1 relative rounded-md",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                        className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            className: "text-neutral-500 sm:text-sm",
                                                                                                            children: "$"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                                        type: "text",
                                                                                                        disabled: true,
                                                                                                        name: "maxPrice",
                                                                                                        id: "maxPrice",
                                                                                                        className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900",
                                                                                                        value: rangePrices[1]
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "py-7",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "text-xl font-medium",
                                                                    children: "Sort Order"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "mt-6 relative ",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "relative flex flex-col space-y-5",
                                                                        children: sortOrderRadios.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(Radio_Radio, {
                                                                                id: item.id,
                                                                                name: "radioNameSort",
                                                                                label: item.name,
                                                                                defaultChecked: sortOrderStates === item.id,
                                                                                onChange: setSortOrderStates
                                                                            }, item.id))
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "p-6 flex-shrink-0 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button_ButtonThird, {
                                                        onClick: ()=>{
                                                            setRangePrices([
                                                                0.01,
                                                                10
                                                            ]);
                                                            setSaleTypeStates([]);
                                                            setfileTypesState([]);
                                                            setSortOrderStates("");
                                                            closeModalMoreFilter();
                                                        },
                                                        sizeClass: "px-4 py-2 sm:px-5",
                                                        children: "Clear"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonPrimary/* default */.Z, {
                                                        onClick: closeModalMoreFilter,
                                                        sizeClass: "px-4 py-2 sm:px-5",
                                                        children: "Apply"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex lg:space-x-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hidden lg:flex space-x-4",
                children: [
                    renderTabsPriceRage(),
                    renderTabsTypeOfSales(),
                    renderTabsFileTypes(),
                    renderTabsSortOrder(),
                    renderTabVerifiedCreator()
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex overflow-x-auto lg:hidden space-x-4",
                children: [
                    renderTabMobileFilter(),
                    renderTabVerifiedCreator()
                ]
            })
        ]
    });
};
/* harmony default export */ const components_TabFilters = (TabFilters);


/***/ }),

/***/ 46695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Checkbox = ({ subLabel ="" , label ="" , name , className ="" , sizeClassName ="w-6 h-6" , labelClassName ="" , defaultChecked , onChange  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex text-sm sm:text-base ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: name,
                name: name,
                type: "checkbox",
                className: `focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 ${sizeClassName}`,
                defaultChecked: defaultChecked,
                onChange: (e)=>onChange && onChange(e.target.checked)
            }),
            label && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                htmlFor: name,
                className: "pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `text-slate-900 dark:text-slate-100 ${labelClassName} ${!!subLabel ? "-mt-0.5" : ""}`,
                        children: label
                    }),
                    subLabel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-0.5 text-slate-500 dark:text-slate-400 text-sm font-light",
                        children: subLabel
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);


/***/ })

};
;