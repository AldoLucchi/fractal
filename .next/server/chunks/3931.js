"use strict";
exports.id = 3931;
exports.ids = [3931];
exports.modules = {

/***/ 83931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_headlessui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40846);
/* harmony import */ var _app_headlessui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43735);
/* harmony import */ var _shared_ButtonClose_ButtonClose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32401);
/* harmony import */ var _shared_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78035);





const NcModal = ({ renderTrigger , renderContent , contentExtraClass ="max-w-screen-xl" , contentPaddingClass ="py-4 px-6 md:py-5" , triggerText ="Open Modal" , modalTitle ="Modal title" , isOpenProp , onCloseModal  })=>{
    let [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!!isOpenProp);
    function closeModal() {
        if (typeof isOpenProp !== "boolean") {
            setIsOpen(false);
        }
        onCloseModal && onCloseModal();
    }
    function openModal() {
        if (typeof isOpenProp !== "boolean") {
            setIsOpen(true);
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsOpen(!!isOpenProp);
    }, [
        isOpenProp
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "nc-NcModal",
        children: [
            renderTrigger ? renderTrigger(openModal) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                onClick: openModal,
                children: [
                    " ",
                    triggerText,
                    " "
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_headlessui__WEBPACK_IMPORTED_MODULE_4__/* .Transition */ .u, {
                appear: true,
                show: isOpen,
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_headlessui__WEBPACK_IMPORTED_MODULE_5__/* .Dialog */ .V, {
                    as: "div",
                    className: "fixed inset-0 z-50 overflow-y-auto",
                    onClose: closeModal,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "min-h-screen px-1 text-center md:px-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_headlessui__WEBPACK_IMPORTED_MODULE_4__/* .Transition.Child */ .u.Child, {
                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                enter: "ease-out duration-75",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-75",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_headlessui__WEBPACK_IMPORTED_MODULE_5__/* .Dialog.Overlay */ .V.Overlay, {
                                    className: "fixed inset-0 bg-neutral-900 bg-opacity-50 dark:bg-opacity-80"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline-block h-screen align-middle",
                                "aria-hidden": "true",
                                children: "​"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_headlessui__WEBPACK_IMPORTED_MODULE_4__/* .Transition.Child */ .u.Child, {
                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                enter: "ease-out duration-75",
                                enterFrom: "opacity-0 scale-95",
                                enterTo: "opacity-100 scale-100",
                                leave: "ease-in duration-75",
                                leaveFrom: "opacity-100 scale-100",
                                leaveTo: "opacity-0 scale-95",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `inline-block w-full my-5 overflow-hidden text-left align-middle transition-all transform bg-white border border-black border-opacity-5 shadow-xl rounded-2xl sm:my-8 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-900 dark:text-neutral-300 ${contentExtraClass}`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "py-4 px-6 text-center relative border-b border-neutral-100 dark:border-neutral-700 md:py-5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_ButtonClose_ButtonClose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                    onClick: closeModal,
                                                    className: "absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4"
                                                }),
                                                modalTitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_headlessui__WEBPACK_IMPORTED_MODULE_5__/* .Dialog.Title */ .V.Title, {
                                                    as: "h3",
                                                    className: "text-base font-semibold text-neutral-900 lg:text-xl dark:text-neutral-200 mx-10",
                                                    children: modalTitle
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: contentPaddingClass,
                                            children: renderContent()
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NcModal);


/***/ })

};
;