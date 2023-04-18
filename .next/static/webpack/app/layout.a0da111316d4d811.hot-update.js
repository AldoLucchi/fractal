"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./src/shared/Navigation/NavigationItem.tsx":
/*!**************************************************!*\
  !*** ./src/shared/Navigation/NavigationItem.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ \"(app-client)/./node_modules/@headlessui/react/dist/components/popover/popover.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ \"(app-client)/./node_modules/@headlessui/react/dist/components/transitions/transition.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/ChevronDownIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst NavigationItem = (param)=>{\n    let { menuItem  } = param;\n    _s();\n    const [menuCurrentHovers, setMenuCurrentHovers] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    // CLOSE ALL MENU OPENING WHEN CHANGE HISTORY\n    const locationPathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setMenuCurrentHovers([]);\n    }, [\n        locationPathName\n    ]);\n    const onMouseEnterMenu = (id)=>{\n        setMenuCurrentHovers((state)=>[\n                ...state,\n                id\n            ]);\n    };\n    const onMouseLeaveMenu = (id)=>{\n        setMenuCurrentHovers((state)=>{\n            return state.filter((item, index)=>{\n                return item !== id && index < state.indexOf(id);\n            });\n        });\n    };\n    // ===================== MENU DROPDOW =====================\n    const renderDropdownMenu = (menuDropdown)=>{\n        const isHover = menuCurrentHovers.includes(menuDropdown.id);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Popover, {\n            as: \"li\",\n            className: \"menu-item flex items-center menu-dropdown relative \".concat(menuDropdown.isNew ? \"menuIsNew_lv1\" : \"\"),\n            onMouseEnter: ()=>onMouseEnterMenu(menuDropdown.id),\n            onMouseLeave: ()=>onMouseLeaveMenu(menuDropdown.id),\n            children: ()=>{\n                var _menuDropdown_children;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: renderMainItem(menuDropdown)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition, {\n                            as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,\n                            show: isHover,\n                            enter: \"transition ease-out duration-150 \",\n                            enterFrom: \"opacity-0 translate-y-1\",\n                            enterTo: \"opacity-100 translate-y-0\",\n                            leave: \"transition ease-in duration-150\",\n                            leaveFrom: \"opacity-100 translate-y-0\",\n                            leaveTo: \"opacity-0 translate-y-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Popover.Panel, {\n                                static: true,\n                                className: \"sub-menu will-change-transform absolute transform z-10 w-56 top-full left-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1\",\n                                    children: (_menuDropdown_children = menuDropdown.children) === null || _menuDropdown_children === void 0 ? void 0 : _menuDropdown_children.map((i)=>{\n                                        if (i.type) {\n                                            return renderDropdownMenuNavlinkHasChild(i);\n                                        } else {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"px-2 \".concat(i.isNew ? \"menuIsNew\" : \"\"),\n                                                children: renderDropdownMenuNavlink(i)\n                                            }, i.id, false, {\n                                                fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 25\n                                            }, undefined);\n                                        }\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true);\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, undefined);\n    };\n    const renderDropdownMenuNavlinkHasChild = (item)=>{\n        const isHover = menuCurrentHovers.includes(item.id);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Popover, {\n            as: \"li\",\n            className: \"menu-item flex items-center menu-dropdown relative px-2\",\n            onMouseEnter: ()=>onMouseEnterMenu(item.id),\n            onMouseLeave: ()=>onMouseLeaveMenu(item.id),\n            children: ()=>{\n                var _item_children;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: renderDropdownMenuNavlink(item)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition, {\n                            as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,\n                            show: isHover,\n                            enter: \"transition ease-out duration-150\",\n                            enterFrom: \"opacity-0 translate-y-1\",\n                            enterTo: \"opacity-100 translate-y-0\",\n                            leave: \"transition ease-in duration-150\",\n                            leaveFrom: \"opacity-100 translate-y-0\",\n                            leaveTo: \"opacity-0 translate-y-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Popover.Panel, {\n                                static: true,\n                                className: \"sub-menu absolute z-10 w-56 left-full pl-2 top-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1\",\n                                    children: (_item_children = item.children) === null || _item_children === void 0 ? void 0 : _item_children.map((i)=>{\n                                        if (i.type) {\n                                            return renderDropdownMenuNavlinkHasChild(i);\n                                        } else {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"px-2\",\n                                                children: renderDropdownMenuNavlink(i)\n                                            }, i.id, false, {\n                                                fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n                                                lineNumber: 141,\n                                                columnNumber: 25\n                                            }, undefined);\n                                        }\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n                                    lineNumber: 135,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true);\n            }\n        }, item.id, false, {\n            fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, undefined);\n    };\n    const renderDropdownMenuNavlink = (item)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            target: item.targetBlank ? \"_blank\" : undefined,\n            rel: \"noopener noreferrer\",\n            className: \"flex items-center font-normal text-neutral-6000 dark:text-neutral-300 py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 \",\n            href: item.href || \"\",\n            children: [\n                item.name,\n                item.type && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__, {\n                    className: \"ml-2 h-4 w-4 text-neutral-500\",\n                    \"aria-hidden\": \"true\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n                    lineNumber: 166,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n            lineNumber: 158,\n            columnNumber: 7\n        }, undefined);\n    };\n    // ===================== MENU MAIN MENU =====================\n    const renderMainItem = (item)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            rel: \"noopener noreferrer\",\n            className: \"inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200\",\n            href: item.href || \"/\",\n            children: [\n                item.name,\n                item.type && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__, {\n                    className: \"ml-1 -mr-1 h-4 w-4 text-neutral-400\",\n                    \"aria-hidden\": \"true\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n                    lineNumber: 185,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n            lineNumber: 178,\n            columnNumber: 7\n        }, undefined);\n    };\n    switch(menuItem.type){\n        case \"dropdown\":\n            return renderDropdownMenu(menuItem);\n        default:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"menu-item flex items-center\",\n                children: renderMainItem(menuItem)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aldo\\\\Desktop\\\\Ciscryp_Nextjs\\\\Ciscryp\\\\src\\\\shared\\\\Navigation\\\\NavigationItem.tsx\",\n                lineNumber: 199,\n                columnNumber: 9\n            }, undefined);\n    }\n};\n_s(NavigationItem, \"8rA1vT+0gAhuOIqfBsrMynSRD6o=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = NavigationItem;\n// Your component own properties\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationItem);\nvar _c;\n$RefreshReg$(_c, \"NavigationItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3NoYXJlZC9OYXZpZ2F0aW9uL05hdmlnYXRpb25JdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUV3RDtBQUNJO0FBRS9CO0FBQ2lCO0FBQ21CO0FBMEJqRSxNQUFNUyxpQkFBb0QsU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFOztJQUNyRSxNQUFNLENBQUNDLG1CQUFtQkMscUJBQXFCLEdBQUdKLCtDQUFRQSxDQUFXLEVBQUU7SUFFdkUsNkNBQTZDO0lBQzdDLE1BQU1LLG1CQUFtQlQsNERBQVdBO0lBQ3BDRyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RLLHFCQUFxQixFQUFFO0lBQ3pCLEdBQUc7UUFBQ0M7S0FBaUI7SUFFckIsTUFBTUMsbUJBQW1CLENBQUNDLEtBQWU7UUFDdkNILHFCQUFxQixDQUFDSSxRQUFVO21CQUFJQTtnQkFBT0Q7YUFBRztJQUNoRDtJQUVBLE1BQU1FLG1CQUFtQixDQUFDRixLQUFlO1FBQ3ZDSCxxQkFBcUIsQ0FBQ0ksUUFBVTtZQUM5QixPQUFPQSxNQUFNRSxNQUFNLENBQUMsQ0FBQ0MsTUFBTUMsUUFBVTtnQkFDbkMsT0FBT0QsU0FBU0osTUFBTUssUUFBUUosTUFBTUssT0FBTyxDQUFDTjtZQUM5QztRQUNGO0lBQ0Y7SUFFQSwyREFBMkQ7SUFDM0QsTUFBTU8scUJBQXFCLENBQUNDLGVBQThCO1FBQ3hELE1BQU1DLFVBQVViLGtCQUFrQmMsUUFBUSxDQUFDRixhQUFhUixFQUFFO1FBQzFELHFCQUNFLDhEQUFDZixzREFBT0E7WUFDTjBCLElBQUc7WUFDSEMsV0FBVyxzREFFVixPQURDSixhQUFhSyxLQUFLLEdBQUcsa0JBQWtCLEVBQUU7WUFFM0NDLGNBQWMsSUFBTWYsaUJBQWlCUyxhQUFhUixFQUFFO1lBQ3BEZSxjQUFjLElBQU1iLGlCQUFpQk0sYUFBYVIsRUFBRTtzQkFFbkQ7b0JBa0JVUTs4QkFqQlQ7O3NDQUNFLDhEQUFDUTtzQ0FBS0MsZUFBZVQ7Ozs7OztzQ0FD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LHFCQUNFLDhEQUFDc0M7Z0JBQUdyQixXQUFVOzBCQUNYSyxlQUFldEI7Ozs7OztJQUd4QjtBQUNGO0dBMUtNRDs7UUFJcUJMLHdEQUFXQTs7O0tBSmhDSztBQTJLTixnQ0FBZ0M7QUFFaEMsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC9OYXZpZ2F0aW9uL05hdmlnYXRpb25JdGVtLnRzeD8yNmM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgUG9wb3ZlciwgVHJhbnNpdGlvbiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGV2cm9uRG93bkljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZFwiO1xyXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIDwtLS0gTmF2SXRlbVR5cGUgLS0tPlxyXG5leHBvcnQgaW50ZXJmYWNlIE1lZ2FtZW51SXRlbSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBpbWFnZTogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgaXRlbXM6IE5hdkl0ZW1UeXBlW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBOYXZJdGVtVHlwZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaXNOZXc/OiBib29sZWFuO1xyXG4gIGhyZWY6IFJvdXRlO1xyXG4gIHRhcmdldEJsYW5rPzogYm9vbGVhbjtcclxuICBjaGlsZHJlbj86IE5hdkl0ZW1UeXBlW107XHJcbiAgbWVnYU1lbnU/OiBNZWdhbWVudUl0ZW1bXTtcclxuICB0eXBlPzogXCJcIiB8IFwibm9uZVwiO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25JdGVtUHJvcHMge1xyXG4gIG1lbnVJdGVtOiBOYXZJdGVtVHlwZTtcclxufVxyXG5cclxudHlwZSBOYXZpZ2F0aW9uSXRlbVdpdGhSb3V0ZXJQcm9wcyA9IE5hdmlnYXRpb25JdGVtUHJvcHM7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uSXRlbTogRkM8TmF2aWdhdGlvbkl0ZW1XaXRoUm91dGVyUHJvcHM+ID0gKHsgbWVudUl0ZW0gfSkgPT4ge1xyXG4gIGNvbnN0IFttZW51Q3VycmVudEhvdmVycywgc2V0TWVudUN1cnJlbnRIb3ZlcnNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuXHJcbiAgLy8gQ0xPU0UgQUxMIE1FTlUgT1BFTklORyBXSEVOIENIQU5HRSBISVNUT1JZXHJcbiAgY29uc3QgbG9jYXRpb25QYXRoTmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldE1lbnVDdXJyZW50SG92ZXJzKFtdKTtcclxuICB9LCBbbG9jYXRpb25QYXRoTmFtZV0pO1xyXG5cclxuICBjb25zdCBvbk1vdXNlRW50ZXJNZW51ID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgIHNldE1lbnVDdXJyZW50SG92ZXJzKChzdGF0ZSkgPT4gWy4uLnN0YXRlLCBpZF0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uTW91c2VMZWF2ZU1lbnUgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0TWVudUN1cnJlbnRIb3ZlcnMoKHN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGlkICYmIGluZGV4IDwgc3RhdGUuaW5kZXhPZihpZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09IE1FTlUgRFJPUERPVyA9PT09PT09PT09PT09PT09PT09PT1cclxuICBjb25zdCByZW5kZXJEcm9wZG93bk1lbnUgPSAobWVudURyb3Bkb3duOiBOYXZJdGVtVHlwZSkgPT4ge1xyXG4gICAgY29uc3QgaXNIb3ZlciA9IG1lbnVDdXJyZW50SG92ZXJzLmluY2x1ZGVzKG1lbnVEcm9wZG93bi5pZCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UG9wb3ZlclxyXG4gICAgICAgIGFzPVwibGlcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17YG1lbnUtaXRlbSBmbGV4IGl0ZW1zLWNlbnRlciBtZW51LWRyb3Bkb3duIHJlbGF0aXZlICR7XHJcbiAgICAgICAgICBtZW51RHJvcGRvd24uaXNOZXcgPyBcIm1lbnVJc05ld19sdjFcIiA6IFwiXCJcclxuICAgICAgICB9YH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IG9uTW91c2VFbnRlck1lbnUobWVudURyb3Bkb3duLmlkKX1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IG9uTW91c2VMZWF2ZU1lbnUobWVudURyb3Bkb3duLmlkKX1cclxuICAgICAgPlxyXG4gICAgICAgIHsoKSA9PiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PntyZW5kZXJNYWluSXRlbShtZW51RHJvcGRvd24pfTwvZGl2PlxyXG4gICAgICAgICAgICA8VHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICBzaG93PXtpc0hvdmVyfVxyXG4gICAgICAgICAgICAgIGVudGVyPVwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0xNTAgXCJcclxuICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktMVwiXHJcbiAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTBcIlxyXG4gICAgICAgICAgICAgIGxlYXZlPVwidHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTE1MFwiXHJcbiAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMFwiXHJcbiAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCB0cmFuc2xhdGUteS0xXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxQb3BvdmVyLlBhbmVsXHJcbiAgICAgICAgICAgICAgICBzdGF0aWNcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Yi1tZW51IHdpbGwtY2hhbmdlLXRyYW5zZm9ybSBhYnNvbHV0ZSB0cmFuc2Zvcm0gei0xMCB3LTU2IHRvcC1mdWxsIGxlZnQtMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LWxnIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01IGRhcms6cmluZy13aGl0ZSBkYXJrOnJpbmctb3BhY2l0eS0xMCB0ZXh0LXNtIHJlbGF0aXZlIGJnLXdoaXRlIGRhcms6YmctbmV1dHJhbC05MDAgcHktNCBncmlkIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICB7bWVudURyb3Bkb3duLmNoaWxkcmVuPy5tYXAoKGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyRHJvcGRvd25NZW51TmF2bGlua0hhc0NoaWxkKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2kuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMiAke2kuaXNOZXcgPyBcIm1lbnVJc05ld1wiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckRyb3Bkb3duTWVudU5hdmxpbmsoaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvUG9wb3Zlci5QYW5lbD5cclxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJEcm9wZG93bk1lbnVOYXZsaW5rSGFzQ2hpbGQgPSAoaXRlbTogTmF2SXRlbVR5cGUpID0+IHtcclxuICAgIGNvbnN0IGlzSG92ZXIgPSBtZW51Q3VycmVudEhvdmVycy5pbmNsdWRlcyhpdGVtLmlkKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgYXM9XCJsaVwiXHJcbiAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtaXRlbSBmbGV4IGl0ZW1zLWNlbnRlciBtZW51LWRyb3Bkb3duIHJlbGF0aXZlIHB4LTJcIlxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gb25Nb3VzZUVudGVyTWVudShpdGVtLmlkKX1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IG9uTW91c2VMZWF2ZU1lbnUoaXRlbS5pZCl9XHJcbiAgICAgID5cclxuICAgICAgICB7KCkgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj57cmVuZGVyRHJvcGRvd25NZW51TmF2bGluayhpdGVtKX08L2Rpdj5cclxuICAgICAgICAgICAgPFRyYW5zaXRpb25cclxuICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgc2hvdz17aXNIb3Zlcn1cclxuICAgICAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMTUwXCJcclxuICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktMVwiXHJcbiAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTBcIlxyXG4gICAgICAgICAgICAgIGxlYXZlPVwidHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTE1MFwiXHJcbiAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMFwiXHJcbiAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCB0cmFuc2xhdGUteS0xXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxQb3BvdmVyLlBhbmVsXHJcbiAgICAgICAgICAgICAgICBzdGF0aWNcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Yi1tZW51IGFic29sdXRlIHotMTAgdy01NiBsZWZ0LWZ1bGwgcGwtMiB0b3AtMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LWxnIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01IGRhcms6cmluZy13aGl0ZSBkYXJrOnJpbmctb3BhY2l0eS0xMCB0ZXh0LXNtIHJlbGF0aXZlIGJnLXdoaXRlIGRhcms6YmctbmV1dHJhbC05MDAgcHktNCBncmlkIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5jaGlsZHJlbj8ubWFwKChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckRyb3Bkb3duTWVudU5hdmxpbmtIYXNDaGlsZChpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aS5pZH0gY2xhc3NOYW1lPVwicHgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJEcm9wZG93bk1lbnVOYXZsaW5rKGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L1BvcG92ZXIuUGFuZWw+XHJcbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUG9wb3Zlcj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRHJvcGRvd25NZW51TmF2bGluayA9IChpdGVtOiBOYXZJdGVtVHlwZSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExpbmtcclxuICAgICAgICB0YXJnZXQ9e2l0ZW0udGFyZ2V0QmxhbmsgPyBcIl9ibGFua1wiIDogdW5kZWZpbmVkfVxyXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZvbnQtbm9ybWFsIHRleHQtbmV1dHJhbC02MDAwIGRhcms6dGV4dC1uZXV0cmFsLTMwMCBweS0yIHB4LTQgcm91bmRlZC1tZCBob3Zlcjp0ZXh0LW5ldXRyYWwtNzAwIGhvdmVyOmJnLW5ldXRyYWwtMTAwIGRhcms6aG92ZXI6YmctbmV1dHJhbC04MDAgZGFyazpob3Zlcjp0ZXh0LW5ldXRyYWwtMjAwIFwiXHJcbiAgICAgICAgaHJlZj17aXRlbS5ocmVmIHx8IFwiXCJ9XHJcbiAgICAgID5cclxuICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgIHtpdGVtLnR5cGUgJiYgKFxyXG4gICAgICAgICAgPENoZXZyb25Eb3duSWNvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGgtNCB3LTQgdGV4dC1uZXV0cmFsLTUwMFwiXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTGluaz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09IE1FTlUgTUFJTiBNRU5VID09PT09PT09PT09PT09PT09PT09PVxyXG4gIGNvbnN0IHJlbmRlck1haW5JdGVtID0gKGl0ZW06IE5hdkl0ZW1UeXBlKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGlua1xyXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHhsOnRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LW5ldXRyYWwtNzAwIGRhcms6dGV4dC1uZXV0cmFsLTMwMCBweS0yIHB4LTQgeGw6cHgtNSByb3VuZGVkLWZ1bGwgaG92ZXI6dGV4dC1uZXV0cmFsLTkwMCBob3ZlcjpiZy1uZXV0cmFsLTEwMCBkYXJrOmhvdmVyOmJnLW5ldXRyYWwtODAwIGRhcms6aG92ZXI6dGV4dC1uZXV0cmFsLTIwMFwiXHJcbiAgICAgICAgaHJlZj17aXRlbS5ocmVmIHx8IFwiL1wifVxyXG4gICAgICA+XHJcbiAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICB7aXRlbS50eXBlICYmIChcclxuICAgICAgICAgIDxDaGV2cm9uRG93bkljb25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMSAtbXItMSBoLTQgdy00IHRleHQtbmV1dHJhbC00MDBcIlxyXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0xpbms+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHN3aXRjaCAobWVudUl0ZW0udHlwZSkge1xyXG4gICAgY2FzZSBcImRyb3Bkb3duXCI6XHJcbiAgICAgIHJldHVybiByZW5kZXJEcm9wZG93bk1lbnUobWVudUl0ZW0pO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICB7cmVuZGVyTWFpbkl0ZW0obWVudUl0ZW0pfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgfVxyXG59O1xyXG4vLyBZb3VyIGNvbXBvbmVudCBvd24gcHJvcGVydGllc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkl0ZW07XHJcbiJdLCJuYW1lcyI6WyJQb3BvdmVyIiwiVHJhbnNpdGlvbiIsIkNoZXZyb25Eb3duSWNvbiIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsIlJlYWN0IiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdmlnYXRpb25JdGVtIiwibWVudUl0ZW0iLCJtZW51Q3VycmVudEhvdmVycyIsInNldE1lbnVDdXJyZW50SG92ZXJzIiwibG9jYXRpb25QYXRoTmFtZSIsIm9uTW91c2VFbnRlck1lbnUiLCJpZCIsInN0YXRlIiwib25Nb3VzZUxlYXZlTWVudSIsImZpbHRlciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJyZW5kZXJEcm9wZG93bk1lbnUiLCJtZW51RHJvcGRvd24iLCJpc0hvdmVyIiwiaW5jbHVkZXMiLCJhcyIsImNsYXNzTmFtZSIsImlzTmV3Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiZGl2IiwicmVuZGVyTWFpbkl0ZW0iLCJzaG93IiwiZW50ZXIiLCJlbnRlckZyb20iLCJlbnRlclRvIiwibGVhdmUiLCJsZWF2ZUZyb20iLCJsZWF2ZVRvIiwiUGFuZWwiLCJzdGF0aWMiLCJ1bCIsImNoaWxkcmVuIiwibWFwIiwiaSIsInR5cGUiLCJyZW5kZXJEcm9wZG93bk1lbnVOYXZsaW5rSGFzQ2hpbGQiLCJsaSIsInJlbmRlckRyb3Bkb3duTWVudU5hdmxpbmsiLCJ0YXJnZXQiLCJ0YXJnZXRCbGFuayIsInVuZGVmaW5lZCIsInJlbCIsImhyZWYiLCJuYW1lIiwiYXJpYS1oaWRkZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/shared/Navigation/NavigationItem.tsx\n"));

/***/ })

});