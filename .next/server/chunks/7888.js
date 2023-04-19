exports.id = 7888;
exports.ids = [7888];
exports.modules = {

/***/ 47668:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(21399);
module.exports = createProxy("C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\components\\CardNFT.tsx");


/***/ }),

/***/ 69397:
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
/* harmony import */ var _shared_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70367);
/* harmony import */ var _shared_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63854);
/* harmony import */ var _ItemTypeImageIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27616);
/* harmony import */ var _LikeButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44437);
/* harmony import */ var _Prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30035);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16047);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ItemTypeVideoIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21818);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_useGetRandomData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92779);











const CardNFT = ({ className ="" , isLiked  })=>{
    const { nftImageRd , titleRd  } = (0,_hooks_useGetRandomData__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const [itemType, setItemType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("default");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (Math.random() > 0.5) {
            setItemType("video");
        } else {
            setItemType("audio");
        }
    }, []);
    const renderAvatars = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex -space-x-1 ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    containerClassName: "ring-2 ring-white dark:ring-neutral-900",
                    sizeClass: "h-5 w-5 text-sm"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    containerClassName: "ring-2 ring-white dark:ring-neutral-900",
                    sizeClass: "h-5 w-5 text-sm"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    containerClassName: "ring-2 ring-white dark:ring-neutral-900",
                    sizeClass: "h-5 w-5 text-sm"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    containerClassName: "ring-2 ring-white dark:ring-neutral-900",
                    sizeClass: "h-5 w-5 text-sm"
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `nc-CardNFT relative flex flex-col group ${className}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex-shrink-0 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            containerClassName: "flex aspect-w-11 aspect-h-12 w-full h-0 rounded-3xl overflow-hidden z-0",
                            src: nftImageRd,
                            className: "object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
                        })
                    }),
                    itemType === "video" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ItemTypeVideoIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: "absolute top-3 left-3 !w-9 !h-9"
                    }),
                    itemType === "audio" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ItemTypeImageIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: "absolute top-3 left-3 !w-9 !h-9"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LikeButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        liked: isLiked,
                        className: "absolute top-3 right-3 z-10 !h-9"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute top-3 inset-x-3 flex"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "px-2 py-5 space-y-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            renderAvatars(),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-neutral-700 dark:text-neutral-400 text-xs",
                                children: "99 in stock"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: `text-lg font-medium`,
                        children: titleRd
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full border-b border-neutral-200/70 dark:border-neutral-700"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between items-end",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Prices__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                labelTextClassName: "bg-white dark:bg-neutral-900"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center text-sm text-neutral-500 dark:text-neutral-400",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__, {
                                        className: "w-4 h-4"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "ml-1 mt-0.5",
                                        children: "14 hours left"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                href: "/nft-detail",
                className: "absolute inset-0"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardNFT);


/***/ })

};
;