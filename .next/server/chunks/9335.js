"use strict";
exports.id = 9335;
exports.ids = [9335];
exports.modules = {

/***/ 93329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SectionHowItWork_SectionHowItWork)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(54458);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(91094);
// EXTERNAL MODULE: ./src/shared/NcImage/NcImage.tsx
var NcImage = __webpack_require__(36795);
;// CONCATENATED MODULE: ./src/images/HIW1img.png
/* harmony default export */ const HIW1img = ({"src":"/_next/static/media/HIW1img.ea966650.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA00lEQVR42mPAB468vMPI8N+AgfHDk+UyD24dS3xw+WDe/UsH8u7cOJT86v89LrCq/y8Y2I+e3X51ybX7/1feuP9/yeXb/+dfuvN/2oX7S+BG9Z5/cGjCltP/mw9c/DFj/ZEf1bsu/W87efMEXEHHyTsXmzac+J+66fif0oW7/tQt3/e/cs+Z83AFTQevJRfsujR97fL9v1ct2fM7efGB6cnLDieDJdccucoIU/h224GJ77YdnAjjT1iyByLXeuIOc9/ey6xwE1ceZk1bd5yZgYGBAQCk42826cOvVwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/HIW2img.png
/* harmony default export */ const HIW2img = ({"src":"/_next/static/media/HIW2img.08f7566e.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzUlEQVR42mMAgefXNjCC6Hf//zP/AmKI2HpGiOSFyWDGi2uz2Z6f7d/x9HT3jhdXprKB5c5NYGR4dKKbCcy5Mkf8ycm2/4+ONv1/dnGGOEjs0UmwHAJ8urbY4sOVhRYogms29HPdXsJg33zmYdL8U3eur79w/9r6m8/STk1icFh+5Cgrw72jJ4Qfbt20qn7HscaaZZv/d6ze/n/JsfM9d9auWX7t6HlOhvenrvLd3XSorjozTDIpIakuLjGlqr+yXOHGip01H09dYWcgBABXD2i4q5badgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/HIW3img.png
/* harmony default export */ const HIW3img = ({"src":"/_next/static/media/HIW3img.e655ff94.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4ElEQVR42mMAgWcv3zAyYAEvLs5gYnj2/DlY8vXr145vXr9QfH2pP+nlxWnrXl6aZgFX+fLlS8uXr17/f/H86a/nF+f+f3629//z81Pv/f//nwms4Pnz5+tu3Lj5/9qNO3/vnlrz88H+wv8Pj/cdAUueOXNO6sHDh+9BCm7fufvj4YN7/++c2XLnNgMDG1jByZOnZc+eO//5wMHD/48fP/n/2IlT/y9cvgEUPrd38+atpgy7du/VqalvP5uYUnApKjZ1e3Zuyfqp02Zd7OuferWsssmYAQbOHluB7FUmGAMA6FqBlZVPVrcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/HIW4img.png
/* harmony default export */ const HIW4img = ({"src":"/_next/static/media/HIW4img.0193bdad.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzUlEQVR42mMAgbnXXjEy4AJ9+y8wgenDV9VmHr96aPKRy9ebd55pAonNu/aMmaHn8FUWEKfj6G3/6aeu/594+OL/5j0XtoPEljz7zsyw/fw+sIKNZ/aW7z6/7f+E/bv/x8zeOAsk1rl5LwvD7mOLIAqOrpq0bUfL/8SJXf9zSnp2M4DBXkaG4lXbWUHMnJXbW7Imz/1fVFLzf2Zt9ev/1xjYwGpipm8COzJy2mbj0M6li5LzqlYWpEe7gsQyU/OYGMCMrZcxvNlVXg4WAwBky1nGI0+r5wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./src/shared/Badge/Badge.tsx
var Badge = __webpack_require__(68207);
;// CONCATENATED MODULE: ./src/components/SectionHowItWork/SectionHowItWork.tsx








const DEMO_DATA = [
    {
        id: 1,
        img: HIW1img,
        imgDark: HIW1img,
        title: "Filter & Discover",
        desc: "Smart filtering and suggestions make it easy to find"
    },
    {
        id: 2,
        img: HIW2img,
        imgDark: HIW2img,
        title: "Add to bag",
        desc: "Easily select the correct items and add them to the cart"
    },
    {
        id: 3,
        img: HIW3img,
        imgDark: HIW3img,
        title: "Fast shipping",
        desc: "The carrier will confirm and ship quickly to you"
    },
    {
        id: 4,
        img: HIW4img,
        imgDark: HIW4img,
        title: "Enjoy the product",
        desc: "Have fun and enjoy your 5-star quality products"
    }
];
const SectionHowItWork = ({ className ="" , data =DEMO_DATA  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `nc-SectionHowItWork ${className}`,
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20",
            children: data.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "relative flex flex-col items-center max-w-xs mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(NcImage/* default */.Z, {
                            containerClassName: "mb-4 sm:mb-10 max-w-[140px] mx-auto",
                            className: "rounded-3xl",
                            src: item.img,
                            sizes: "150px",
                            alt: "HIW"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center mt-auto space-y-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(Badge/* default */.Z, {
                                    name: `Step ${index + 1}`,
                                    color: !index ? "red" : index === 1 ? "indigo" : index === 2 ? "yellow" : "purple"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "text-base font-semibold",
                                    children: item.title
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "block text-slate-600 dark:text-slate-400 text-sm leading-6",
                                    children: item.desc
                                })
                            ]
                        })
                    ]
                }, item.id))
        })
    });
};
/* harmony default export */ const SectionHowItWork_SectionHowItWork = (SectionHowItWork);


/***/ }),

/***/ 29821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/HIW1img.ea966650.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA00lEQVR42mPAB468vMPI8N+AgfHDk+UyD24dS3xw+WDe/UsH8u7cOJT86v89LrCq/y8Y2I+e3X51ybX7/1feuP9/yeXb/+dfuvN/2oX7S+BG9Z5/cGjCltP/mw9c/DFj/ZEf1bsu/W87efMEXEHHyTsXmzac+J+66fif0oW7/tQt3/e/cs+Z83AFTQevJRfsujR97fL9v1ct2fM7efGB6cnLDieDJdccucoIU/h224GJ77YdnAjjT1iyByLXeuIOc9/ey6xwE1ceZk1bd5yZgYGBAQCk42826cOvVwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 22574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/HIW2img.08f7566e.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzUlEQVR42mMAgefXNjCC6Hf//zP/AmKI2HpGiOSFyWDGi2uz2Z6f7d/x9HT3jhdXprKB5c5NYGR4dKKbCcy5Mkf8ycm2/4+ONv1/dnGGOEjs0UmwHAJ8urbY4sOVhRYogms29HPdXsJg33zmYdL8U3eur79w/9r6m8/STk1icFh+5Cgrw72jJ4Qfbt20qn7HscaaZZv/d6ze/n/JsfM9d9auWX7t6HlOhvenrvLd3XSorjozTDIpIakuLjGlqr+yXOHGip01H09dYWcgBABXD2i4q5badgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 44746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/HIW3img.e655ff94.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4ElEQVR42mMAgWcv3zAyYAEvLs5gYnj2/DlY8vXr145vXr9QfH2pP+nlxWnrXl6aZgFX+fLlS8uXr17/f/H86a/nF+f+f3629//z81Pv/f//nwms4Pnz5+tu3Lj5/9qNO3/vnlrz88H+wv8Pj/cdAUueOXNO6sHDh+9BCm7fufvj4YN7/++c2XLnNgMDG1jByZOnZc+eO//5wMHD/48fP/n/2IlT/y9cvgEUPrd38+atpgy7du/VqalvP5uYUnApKjZ1e3Zuyfqp02Zd7OuferWsssmYAQbOHluB7FUmGAMA6FqBlZVPVrcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 21097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/HIW4img.0193bdad.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzUlEQVR42mMAgbnXXjEy4AJ9+y8wgenDV9VmHr96aPKRy9ebd55pAonNu/aMmaHn8FUWEKfj6G3/6aeu/594+OL/5j0XtoPEljz7zsyw/fw+sIKNZ/aW7z6/7f+E/bv/x8zeOAsk1rl5LwvD7mOLIAqOrpq0bUfL/8SJXf9zSnp2M4DBXkaG4lXbWUHMnJXbW7Imz/1fVFLzf2Zt9ev/1xjYwGpipm8COzJy2mbj0M6li5LzqlYWpEe7gsQyU/OYGMCMrZcxvNlVXg4WAwBky1nGI0+r5wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ })

};
;