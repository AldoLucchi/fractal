"use strict";
exports.id = 1276;
exports.ids = [1276];
exports.modules = {

/***/ 76995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70367);
/* harmony import */ var _shared_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63854);
/* harmony import */ var _components_VerifyIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45371);
/* harmony import */ var _components_FollowButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88552);
/* harmony import */ var _shared_Badge_Badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63120);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useGetRandomData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92779);









const CardAuthorBox4 = ({ className ="" , following , authorIndex  })=>{
    const { personNameRd , nftsAbstractRd  } = (0,_hooks_useGetRandomData__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `nc-CardAuthorBox4 relative flex flex-col overflow-hidden group border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-800 group rounded-3xl hover:shadow-xl transition-shadow ${className}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex-shrink-0 h-36",
                children: [
                    authorIndex && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Badge_Badge__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: "absolute top-2 left-3 !font-semibold",
                        name: authorIndex === 1 ? `🏆 #${authorIndex}` : `🏅 #${authorIndex}`,
                        color: authorIndex === 1 ? "red" : authorIndex === 2 ? "green" : "yellow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        containerClassName: "flex h-full w-full flex-shrink-0 rounded-3xl overflow-hidden z-0",
                        src: nftsAbstractRd,
                        fill: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pb-5 px-4 pt-1.5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center relative flex items-center justify-center ",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    className: "mx-auto h-14 -mt-[38px] text-white dark:text-neutral-800 dark:group-hover:text-neutral-800",
                                    width: "134",
                                    height: "54",
                                    viewBox: "0 0 134 54",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M101.734 19.8581C99.2658 17.4194 96.9737 14.8065 94.5052 12.1935C94.1526 11.671 93.6237 11.3226 93.0947 10.8C92.7421 10.4516 92.5658 10.2774 92.2131 9.92903C85.6895 3.83226 76.6974 0 67 0C57.3026 0 48.3105 3.83226 41.6105 9.92903C41.2579 10.2774 41.0816 10.4516 40.7289 10.8C40.2 11.3226 39.8474 11.671 39.3184 12.1935C36.85 14.8065 34.5579 17.4194 32.0895 19.8581C23.2737 28.7419 11.4605 30.4839 -0.176331 30.8323V54H16.3974H32.0895H101.558H110.197H134V30.6581C122.363 30.3097 110.55 28.7419 101.734 19.8581Z",
                                        fill: "currentColor"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute -top-7 left-1/2 -translate-x-1/2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        containerClassName: "",
                                        sizeClass: "w-12 h-12 text-2xl",
                                        radius: "rounded-full"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-2.5 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: `text-base font-medium flex items-center`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "",
                                                children: personNameRd
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VerifyIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: `block mt-0.5 text-sm `,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-medium",
                                                children: "12.321"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: `ml-1.5 text-neutral-500 dark:text-neutral-400`,
                                                children: "ETH"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FollowButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                sizeClass: "px-4 py-2 min-w-[84px]",
                                isFollowing: following
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                href: "/author",
                className: "absolute inset-0"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardAuthorBox4);


/***/ }),

/***/ 88552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Button_ButtonPrimary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34255);
/* harmony import */ var _shared_Button_ButtonSecondary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21180);




const FollowButton = ({ className ="relative z-10" , sizeClass ="px-4 py-1.5 min-w-[84px]" , fontSize ="text-sm font-medium" , isFollowing =false  })=>{
    const [following, setFollowing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isFollowing);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setFollowing(Math.random() > 0.5);
    }, []);
    return !following ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Button_ButtonPrimary__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: className,
        sizeClass: sizeClass,
        fontSize: fontSize,
        onClick: ()=>setFollowing(true),
        children: "Follow"
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Button_ButtonSecondary__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: ` border border-slate-200 dark:border-slate-700 ${className}`,
        sizeClass: sizeClass,
        fontSize: fontSize,
        onClick: ()=>setFollowing(false),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "text-sm ",
            children: "Following"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowButton);


/***/ }),

/***/ 42122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_twFocusClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29943);



const NavItem2 = ({ className ="px-3.5 py-2 text-sm sm:px-7 sm:py-3 capitalize" , radius ="rounded-full" , children , onClick =()=>{} , isActive =false , renderX  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: "nc-NavItem2 relative",
        "data-nc-id": "NavItem2",
        children: [
            renderX && renderX,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: `block font-medium whitespace-nowrap ${className} ${radius} ${isActive ? "bg-slate-900 text-slate-50" : "text-slate-600 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-900 "} ${(0,_utils_twFocusClass__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()}`,
                onClick: ()=>{
                    onClick && onClick();
                },
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem2);


/***/ }),

/***/ 11276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SectionGridAuthorBox_SectionGridAuthorBox)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/FollowButton.tsx
var FollowButton = __webpack_require__(88552);
// EXTERNAL MODULE: ./src/components/VerifyIcon.tsx
var VerifyIcon = __webpack_require__(45371);
// EXTERNAL MODULE: ./src/shared/Avatar/Avatar.tsx + 1 modules
var Avatar = __webpack_require__(70367);
// EXTERNAL MODULE: ./src/shared/Badge/Badge.tsx
var Badge = __webpack_require__(63120);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/hooks/useGetRandomData.ts
var useGetRandomData = __webpack_require__(92779);
;// CONCATENATED MODULE: ./src/components/CardAuthorBox/CardAuthorBox.tsx








const CardAuthorBox = ({ className ="" , index  })=>{
    const { personNameRd  } = (0,useGetRandomData/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: "/author",
        className: `nc-CardAuthorBox relative flex flex-col items-center justify-center text-center px-3 py-5 sm:px-6 sm:py-7  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`,
        children: [
            index && /*#__PURE__*/ jsx_runtime_.jsx(Badge/* default */.Z, {
                className: "absolute left-3 top-3",
                color: index === 1 ? "red" : index === 2 ? "blue" : "green",
                name: `#${index}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Avatar["default"], {
                sizeClass: "w-20 h-20 text-2xl",
                radius: "rounded-full"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: `text-base font-semibold flex items-center`,
                        children: [
                            personNameRd,
                            /*#__PURE__*/ jsx_runtime_.jsx(VerifyIcon/* default */.Z, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `mt-1 text-sm font-medium`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "1.549"
                            }),
                            ` `,
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-neutral-400 font-normal",
                                children: "ETH"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FollowButton/* default */.Z, {
                className: "mt-3"
            })
        ]
    });
};
/* harmony default export */ const CardAuthorBox_CardAuthorBox = (CardAuthorBox);

// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/ArrowRightIcon.js
var ArrowRightIcon = __webpack_require__(9078);
// EXTERNAL MODULE: ./src/shared/NcImage/NcImage.tsx
var NcImage = __webpack_require__(63854);
;// CONCATENATED MODULE: ./src/components/CardAuthorBox2/CardAuthorBox2.tsx








const CardAuthorBox2 = ({ className =""  })=>{
    const { personNameRd , nftImageRd  } = (0,useGetRandomData/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: "/author",
        className: `nc-CardAuthorBox2 flex flex-col overflow-hidden [ nc-box-has-hover nc-dark-box-bg-has-hover ] ${className}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative flex-shrink-0 ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(NcImage/* default */.Z, {
                            fill: true,
                            containerClassName: "flex aspect-w-7 aspect-h-5 sm:aspect-h-6 w-full h-0",
                            src: nftImageRd
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute top-3 inset-x-3 flex",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: " py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium",
                            children: [
                                "1.45 ETH ",
                                /*#__PURE__*/ jsx_runtime_.jsx(ArrowRightIcon, {
                                    className: "w-5 h-5 text-yellow-600 ml-3"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "-mt-8 m-8 text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Avatar["default"], {
                        containerClassName: "ring-2 ring-white",
                        sizeClass: "w-16 h-16 text-2xl",
                        radius: "rounded-full"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: `text-base font-medium flex items-center justify-center`,
                                children: [
                                    personNameRd,
                                    /*#__PURE__*/ jsx_runtime_.jsx(VerifyIcon/* default */.Z, {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `block mt-1 text-sm text-neutral-500 dark:text-neutral-400`,
                                children: "@creator"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const CardAuthorBox2_CardAuthorBox2 = (CardAuthorBox2);

;// CONCATENATED MODULE: ./src/components/CardAuthorBox3/CardAuthorBox3.tsx








const CardAuthorBox3 = ({ className ="" , following  })=>{
    const { personNameRd , nftsAbstractRd  } = (0,useGetRandomData/* default */.Z)();
    const { nftsAbstractRd: nftsAbstractRd2  } = (0,useGetRandomData/* default */.Z)();
    const { nftsAbstractRd: nftsAbstractRd3  } = (0,useGetRandomData/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `nc-CardAuthorBox3 relative flex flex-col p-4 overflow-hidden [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative flex-shrink-0 flex space-x-2 h-24",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NcImage/* default */.Z, {
                        sizes: "100px",
                        containerClassName: "relative z-0 flex flex-grow h-full rounded-xl overflow-hidden ",
                        src: nftsAbstractRd,
                        fill: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NcImage/* default */.Z, {
                        sizes: "100px",
                        containerClassName: "relative z-0 flex h-full w-24 flex-shrink-0 rounded-xl overflow-hidden",
                        src: nftsAbstractRd2,
                        fill: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NcImage/* default */.Z, {
                        sizes: "100px",
                        containerClassName: "relative z-0 flex flex-grow h-full rounded-xl overflow-hidden",
                        src: nftsAbstractRd3,
                        fill: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "-mt-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Avatar["default"], {
                            containerClassName: "ring-4 ring-white dark:ring-black !shadow-xl",
                            sizeClass: "w-12 h-12 text-2xl",
                            radius: "rounded-full"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-2.5 flex items-start justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: `text-base font-medium flex items-center`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "",
                                                children: personNameRd
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(VerifyIcon/* default */.Z, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `block mt-0.5 text-sm text-neutral-500 dark:text-neutral-400`,
                                        children: "@creator"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(FollowButton/* default */.Z, {
                                isFollowing: following
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-4 text-sm text-neutral-500 dark:text-neutral-400",
                        children: "X-Metaverse is a Star Wars game based on NFT+ blockchain exploration, mining, trading ..."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/author",
                className: "absolute inset-0"
            })
        ]
    });
};
/* harmony default export */ const CardAuthorBox3_CardAuthorBox3 = (CardAuthorBox3);

// EXTERNAL MODULE: ./src/components/CardAuthorBox4/CardAuthorBox4.tsx
var CardAuthorBox4 = __webpack_require__(76995);
// EXTERNAL MODULE: ./src/components/Heading/Heading.tsx
var Heading = __webpack_require__(42526);
// EXTERNAL MODULE: ./src/components/NavItem2.tsx
var NavItem2 = __webpack_require__(42122);
// EXTERNAL MODULE: ./src/shared/Button/ButtonPrimary.tsx
var ButtonPrimary = __webpack_require__(34255);
// EXTERNAL MODULE: ./src/shared/Button/ButtonSecondary.tsx
var ButtonSecondary = __webpack_require__(21180);
// EXTERNAL MODULE: ./src/shared/Nav/Nav.tsx
var Nav = __webpack_require__(7558);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/listbox/listbox.js + 1 modules
var listbox = __webpack_require__(7412);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 3 modules
var transition = __webpack_require__(40846);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/ChevronDownIcon.js
var ChevronDownIcon = __webpack_require__(93524);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/CheckIcon.js
var CheckIcon = __webpack_require__(19228);
;// CONCATENATED MODULE: ./src/components/SectionGridAuthorBox/SortOrderFilter.tsx




const sortOrder = [
    {
        name: "Sort order"
    },
    {
        name: "Today"
    },
    {
        name: "Last 7 days"
    },
    {
        name: "Last 30 days"
    }
];
function SortOrderFilter() {
    const [selected, setSelected] = (0,react_.useState)(sortOrder[0]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "",
        children: /*#__PURE__*/ jsx_runtime_.jsx(listbox/* Listbox */.R, {
            value: selected,
            onChange: setSelected,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative mt-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(listbox/* Listbox.Button */.R.Button, {
                        as: react_.Fragment,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            className: "font-medium border bg-white dark:bg-neutral-900 border-neutral-200 text-neutral-500 dark:text-neutral-400 dark:border-neutral-700 inline-flex items-center justify-center rounded-full px-5 py-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    className: "w-5 h-5",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M13.8201 6.84998L16.86 9.88998",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: "10",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M13.8201 17.15V6.84998",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: "10",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M10.18 17.15L7.14001 14.11",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: "10",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M10.1799 6.84998V17.15",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: "10",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "block truncate ml-2.5",
                                    children: selected.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "ml-5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ChevronDownIcon, {
                                        className: "w-5 h-5 ",
                                        "aria-hidden": "true"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                        as: react_.Fragment,
                        enter: "transition ease-out duration-100 ",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(listbox/* Listbox.Options */.R.Options, {
                            className: "absolute w-full py-1 mt-2 overflow-auto text-base bg-white rounded-2xl shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50",
                            children: sortOrder.map((person, personIdx)=>/*#__PURE__*/ jsx_runtime_.jsx(listbox/* Listbox.Option */.R.Option, {
                                    className: ({ active  })=>`${active ? "text-amber-900 bg-amber-100" : "text-gray-900"}
                          cursor-default select-none relative py-2 pl-10 pr-4`,
                                    value: person,
                                    children: ({ selected , active  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: `${selected ? "font-medium" : "font-normal"} block truncate`,
                                                    children: person.name
                                                }),
                                                selected ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: `${active ? "text-amber-600" : "text-amber-600"}
                                absolute inset-y-0 left-0 flex items-center pl-3`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CheckIcon, {
                                                        className: "w-5 h-5",
                                                        "aria-hidden": "true"
                                                    })
                                                }) : null
                                            ]
                                        })
                                }, personIdx))
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/SectionGridAuthorBox/SectionGridAuthorBox.tsx












const SectionGridAuthorBox = ({ className ="" , boxCard ="box1" , sectionStyle ="style1" , gridClassName ="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" , data =Array.from("11111111")  })=>{
    const [tabActive, setTabActive] = (0,react_.useState)("Popular");
    const renderCard = (index)=>{
        switch(boxCard){
            case "box1":
                return /*#__PURE__*/ jsx_runtime_.jsx(CardAuthorBox_CardAuthorBox, {
                    index: index < 3 ? index + 1 : undefined
                }, index);
            case "box2":
                return /*#__PURE__*/ jsx_runtime_.jsx(CardAuthorBox2_CardAuthorBox2, {}, index);
            case "box3":
                return /*#__PURE__*/ jsx_runtime_.jsx(CardAuthorBox3_CardAuthorBox3, {}, index);
            case "box4":
                return /*#__PURE__*/ jsx_runtime_.jsx(CardAuthorBox4["default"], {
                    authorIndex: index < 3 ? index + 1 : undefined
                }, index);
            default:
                return null;
        }
    };
    const renderHeading1 = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mb-12 lg:mb-16  flex justify-between flex-col sm:flex-row",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Heading["default"], {
                    rightPopoverText: "Creators",
                    rightPopoverOptions: [
                        {
                            name: "Creators",
                            href: "#"
                        },
                        {
                            name: "Buyers",
                            href: "#"
                        }
                    ],
                    className: "text-neutral-900 dark:text-neutral-50",
                    children: "Popular"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mt-4 sm:mt-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SortOrderFilter, {})
                })
            ]
        });
    };
    const renderHeading2 = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Heading["default"], {
                    className: "mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50",
                    fontClass: "text-3xl md:text-4xl 2xl:text-5xl font-semibold",
                    isCenter: true,
                    desc: "",
                    children: "Top List Creators."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Nav/* default */.Z, {
                    className: "p-1 bg-white dark:bg-neutral-800 rounded-full shadow-lg",
                    containerClassName: "mb-12 lg:mb-14 relative flex justify-center w-full text-sm md:text-base",
                    children: [
                        {
                            name: "Popular",
                            icon: ` <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4399 19.05L15.9599 20.57L18.9999 17.53" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.44997 10.79 7.55997 8.84 7.55997 6.44C7.54997 3.99 9.53997 2 11.99 2C14.44 2 16.43 3.99 16.43 6.44C16.43 8.84 14.53 10.79 12.16 10.87Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.99 21.8101C10.17 21.8101 8.36004 21.3501 6.98004 20.4301C4.56004 18.8101 4.56004 16.1701 6.98004 14.5601C9.73004 12.7201 14.24 12.7201 16.99 14.5601" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              `
                        },
                        {
                            name: "Following",
                            icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5 19.5H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.5 21.5V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.44997 10.79 7.55997 8.84 7.55997 6.44C7.54997 3.99 9.53997 2 11.99 2C14.44 2 16.43 3.99 16.43 6.44C16.43 8.84 14.53 10.79 12.16 10.87Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.99 21.8101C10.17 21.8101 8.36004 21.3501 6.98004 20.4301C4.56004 18.8101 4.56004 16.1701 6.98004 14.5601C9.73004 12.7201 14.24 12.7201 16.99 14.5601" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              
              `
                        },
                        {
                            name: "New & Noteworthy",
                            icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.08 8.58003V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.48003 18.15C3.51003 17.59 2.91003 16.55 2.91003 15.42V8.58003C2.91003 7.46003 3.51003 6.41999 4.48003 5.84999L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.84999C20.48 6.41999 21.08 7.45003 21.08 8.58003Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 11.0001C13.2869 11.0001 14.33 9.95687 14.33 8.67004C14.33 7.38322 13.2869 6.34009 12 6.34009C10.7132 6.34009 9.67004 7.38322 9.67004 8.67004C9.67004 9.95687 10.7132 11.0001 12 11.0001Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 16.6601C16 14.8601 14.21 13.4001 12 13.4001C9.79 13.4001 8 14.8601 8 16.6601" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               `
                        }
                    ].map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(NavItem2/* default */.Z, {
                            isActive: tabActive === item.name,
                            onClick: ()=>setTabActive(item.name),
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-center sm:space-x-2.5 text-xs sm:text-sm ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "hidden sm:inline-block",
                                        dangerouslySetInnerHTML: {
                                            __html: item.icon
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: item.name
                                    })
                                ]
                            })
                        }, index))
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `nc-SectionGridAuthorBox relative ${className}`,
        children: [
            sectionStyle === "style1" ? renderHeading1() : renderHeading2(),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `grid gap-4 md:gap-7 ${gridClassName}`,
                children: data.map((_, index)=>renderCard(index))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-16 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonSecondary/* default */.Z, {
                        children: "Show me more "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonPrimary/* default */.Z, {
                        children: "Become a author"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const SectionGridAuthorBox_SectionGridAuthorBox = (SectionGridAuthorBox);


/***/ }),

/***/ 63120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



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


/***/ }),

/***/ 7558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Nav = ({ containerClassName ="" , className ="" , children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: `nc-Nav ${containerClassName}`,
        "data-nc-id": "Nav",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: `flex  ${className}`,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);


/***/ })

};
;