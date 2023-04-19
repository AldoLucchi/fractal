exports.id = 9510;
exports.ids = [9510];
exports.modules = {

/***/ 67692:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 95958, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 48950, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 12513, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 81551, 23))

/***/ }),

/***/ 33724:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 81141));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5678));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13716, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 79533, 23))

/***/ }),

/***/ 91340:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 79842));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 78035));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 79533, 23))

/***/ }),

/***/ 32612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(21399);
module.exports = createProxy("C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\app\\SiteHeader.tsx");


/***/ }),

/***/ 92117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(54458);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Poppins","arguments":[{"subsets":["latin"],"display":"swap","weight":["300","400","500","600","700"]}],"variableName":"poppins"}
var target_path_src_app_layout_tsx_import_Poppins_arguments_subsets_latin_display_swap_weight_300_400_500_600_700_variableName_poppins_ = __webpack_require__(23678);
var target_path_src_app_layout_tsx_import_Poppins_arguments_subsets_latin_display_swap_weight_300_400_500_600_700_variableName_poppins_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Poppins_arguments_subsets_latin_display_swap_weight_300_400_500_600_700_variableName_poppins_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(75553);
// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(18600);
// EXTERNAL MODULE: ./node_modules/rc-slider/assets/index.css
var assets = __webpack_require__(74752);
// EXTERNAL MODULE: ./src/shared/Logo/Logo.tsx + 2 modules
var Logo = __webpack_require__(76762);
// EXTERNAL MODULE: ./src/shared/SocialsList/SocialsList.tsx + 1 modules
var SocialsList = __webpack_require__(86027);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(91094);
;// CONCATENATED MODULE: ./src/shared/SocialsList1/SocialsList1.tsx



const socials = SocialsList/* SOCIALS_2 */.V;
const SocialsList1 = ({ className ="space-y-2.5"  })=>{
    const renderItem = (item, index)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
            href: item.href,
            className: "flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-3 ",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: item.icon || ""
                    }
                }),
                /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "hidden lg:block text-sm",
                    children: item.name
                })
            ]
        }, index);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `nc-SocialsList1 ${className}`,
        "data-nc-id": "SocialsList1",
        children: socials.map(renderItem)
    });
};
/* harmony default export */ const SocialsList1_SocialsList1 = (SocialsList1);

;// CONCATENATED MODULE: ./src/shared/Footer/Footer.tsx




const widgetMenus = [
    {
        id: "5",
        title: "Getting started",
        menus: [
            {
                href: "#",
                label: "Release Notes"
            },
            {
                href: "#",
                label: "Upgrade Guide"
            },
            {
                href: "#",
                label: "Browser Support"
            },
            {
                href: "#",
                label: "Dark Mode"
            }
        ]
    },
    {
        id: "1",
        title: "Explore",
        menus: [
            {
                href: "#",
                label: "Prototyping"
            },
            {
                href: "#",
                label: "Design systems"
            },
            {
                href: "#",
                label: "Pricing"
            },
            {
                href: "#",
                label: "Security"
            }
        ]
    },
    {
        id: "2",
        title: "Resources",
        menus: [
            {
                href: "#",
                label: "Best practices"
            },
            {
                href: "#",
                label: "Support"
            },
            {
                href: "#",
                label: "Developers"
            },
            {
                href: "#",
                label: "Learn design"
            }
        ]
    },
    {
        id: "4",
        title: "Community",
        menus: [
            {
                href: "#",
                label: "Discussion Forums"
            },
            {
                href: "#",
                label: "Code of Conduct"
            },
            {
                href: "#",
                label: "Contributing"
            },
            {
                href: "#",
                label: "API Reference"
            }
        ]
    }
];
const Footer = ()=>{
    const renderWidgetMenuItem = (menu, index)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "text-sm",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                    className: "font-semibold text-neutral-700 dark:text-neutral-200",
                    children: menu.title
                }),
                /*#__PURE__*/ jsx_runtime.jsx("ul", {
                    className: "mt-5 space-y-4",
                    children: menu.menus.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                className: "text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white",
                                href: item.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: item.label
                            }, index)
                        }, index))
                })
            ]
        }, index);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "nc-Footer relative py-20 lg:pt-28 lg:pb-24 border-t border-neutral-200 dark:border-neutral-700",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-span-2 md:col-span-1",
                            children: /*#__PURE__*/ jsx_runtime.jsx(Logo/* default */.Z, {})
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-span-2 flex items-center md:col-span-3",
                            children: /*#__PURE__*/ jsx_runtime.jsx(SocialsList1_SocialsList1, {
                                className: "flex items-center space-x-2 lg:space-x-0 lg:flex-col lg:space-y-3 lg:items-start"
                            })
                        })
                    ]
                }),
                widgetMenus.map(renderWidgetMenuItem)
            ]
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

// EXTERNAL MODULE: ./src/components/MusicPlayer/MusicPlayer.tsx
var MusicPlayer = __webpack_require__(1174);
var MusicPlayer_default = /*#__PURE__*/__webpack_require__.n(MusicPlayer);
// EXTERNAL MODULE: ./src/app/SiteHeader.tsx
var SiteHeader = __webpack_require__(32612);
var SiteHeader_default = /*#__PURE__*/__webpack_require__.n(SiteHeader);
;// CONCATENATED MODULE: ./src/app/layout.tsx








const metadata = {
    title: "Ciscryp - NFT NextJs template",
    description: "Generated by create next app"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("html", {
        lang: "en",
        className: (target_path_src_app_layout_tsx_import_Poppins_arguments_subsets_latin_display_swap_weight_300_400_500_600_700_variableName_poppins_default()).className,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
            className: "bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((SiteHeader_default()), {}),
                children,
                /*#__PURE__*/ jsx_runtime.jsx(Footer_Footer, {}),
                /*#__PURE__*/ jsx_runtime.jsx((MusicPlayer_default()), {})
            ]
        })
    });
}


/***/ }),

/***/ 96684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ not_found)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(54458);
// EXTERNAL MODULE: ./src/shared/Button/ButtonPrimary.tsx
var ButtonPrimary = __webpack_require__(74632);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(91094);
// EXTERNAL MODULE: ./src/shared/NcImage/NcImage.tsx
var NcImage = __webpack_require__(36795);
;// CONCATENATED MODULE: ./src/images/404.png
/* harmony default export */ const _404 = ({"src":"/_next/static/media/404.4b33ab94.png","height":1000,"width":1500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAlklEQVR42mNYsauPkQEK/l0qcvx6IkEYxH55ax4TAzK4em6yw/9rBf//P+hKZ0AHbot7/frWzb+7cVtPa1pKfMim+MCOvavq3RiOruVi+P9ll8DJjZM2L+tu/TG9q+vN2p6Kj0emFf9/cXDis7vnlukw/L+/UfjXlVXBny4tC/x9bXnQ/9vrA16cWuz549KKwP9318sAAE/sSzS7q3foAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/app/not-found.tsx





const Page404 = ()=>/*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "nc-Page404",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container relative pt-5 pb-16 lg:pb-20 lg:pt-5",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                className: "text-center max-w-2xl mx-auto space-y-2",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(NcImage/* default */.Z, {
                        src: _404
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium",
                        children: [
                            `THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST.`,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "pt-8",
                        children: /*#__PURE__*/ jsx_runtime.jsx(ButtonPrimary/* default */.Z, {
                            href: "/",
                            children: "Return Home Page"
                        })
                    })
                ]
            })
        })
    });
/* harmony default export */ const not_found = (Page404);


/***/ }),

/***/ 1174:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(21399);
module.exports = createProxy("C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\components\\MusicPlayer\\MusicPlayer.tsx");


/***/ }),

/***/ 92042:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(21399);
module.exports = createProxy("C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\shared\\Button\\Button.tsx");


/***/ }),

/***/ 74632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54458);
/* harmony import */ var _shared_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92042);
/* harmony import */ var _shared_Button_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_Button_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91094);



const ButtonPrimary = ({ className ="" , ...args })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_shared_Button_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: `ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${className}`,
        ...args
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonPrimary);


/***/ }),

/***/ 76762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Logo_Logo)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(54458);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(91094);
;// CONCATENATED MODULE: ./src/images/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.87226d72.svg","height":51,"width":197,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/logo-light.svg
/* harmony default export */ const logo_light = ({"src":"/_next/static/media/logo-light.504e98be.svg","height":51,"width":197,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(49709);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(21216);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/shared/Logo/Logo.tsx






const Logo = ({ img =logo , imgLight =logo_light , className ="flex-shrink-0"  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
        href: "/",
        className: `ttnc-logo inline-block text-slate-600 ${className}`,
        children: [
            img ? /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                className: `block h-8 sm:h-10 w-auto ${imgLight ? "dark:hidden" : ""}`,
                src: img,
                alt: "Logo",
                sizes: "200px",
                priority: true
            }) : "Logo Here",
            imgLight && /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                className: "hidden h-8 sm:h-10 w-auto dark:block",
                src: imgLight,
                alt: "Logo-Light",
                sizes: "200px",
                priority: true
            })
        ]
    });
};
/* harmony default export */ const Logo_Logo = (Logo);


/***/ }),

/***/ 36795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54458);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91094);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21216);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const NcImage = ({ containerClassName ="relative" , alt ="nc-imgs" , src , fill , className ="object-cover w-full h-full" , sizes ="(max-width: 600px) 480px, 800px" , ...args })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: containerClassName,
        children: src ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: className,
            alt: alt,
            sizes: sizes,
            ...args,
            src: src,
            fill: fill
        }) : null
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NcImage);


/***/ }),

/***/ 86027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ SOCIALS_2),
  "Z": () => (/* binding */ SocialsList_SocialsList)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(54458);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(91094);
;// CONCATENATED MODULE: ./src/shared/SocialsShare/SocialsShare.tsx


const socials = [
    {
        id: "Facebook",
        name: "Facebook",
        icon: `<svg class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_17_61)">
  <path d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z" fill="currentColor"/>
  </g>
  </svg>
  `,
        href: "#"
    },
    {
        id: "Twitter",
        name: "Twitter",
        icon: `<svg class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_17_80)">
  <path d="M15.1003 43.5C33.2091 43.5 43.1166 28.4935 43.1166 15.4838C43.1166 15.0619 43.1072 14.6307 43.0884 14.2088C45.0158 12.815 46.679 11.0886 48 9.11066C46.205 9.90926 44.2993 10.4308 42.3478 10.6575C44.4026 9.42588 45.9411 7.491 46.6781 5.21159C44.7451 6.35718 42.6312 7.16528 40.4269 7.60128C38.9417 6.02318 36.978 4.97829 34.8394 4.62816C32.7008 4.27803 30.5064 4.64216 28.5955 5.66425C26.6846 6.68635 25.1636 8.30947 24.2677 10.2827C23.3718 12.2559 23.1509 14.4693 23.6391 16.5807C19.725 16.3842 15.8959 15.3675 12.4 13.5963C8.90405 11.825 5.81939 9.33893 3.34594 6.29909C2.0888 8.46655 1.70411 11.0314 2.27006 13.4722C2.83601 15.9131 4.31013 18.047 6.39281 19.44C4.82926 19.3904 3.29995 18.9694 1.93125 18.2119V18.3338C1.92985 20.6084 2.7162 22.8132 4.15662 24.5736C5.59704 26.334 7.60265 27.5412 9.8325 27.99C8.38411 28.3863 6.86396 28.4441 5.38969 28.1588C6.01891 30.1149 7.24315 31.8258 8.89154 33.0527C10.5399 34.2796 12.5302 34.9613 14.5847 35.0025C11.0968 37.7423 6.78835 39.2283 2.35313 39.2213C1.56657 39.2201 0.780798 39.1719 0 39.0769C4.50571 41.9676 9.74706 43.5028 15.1003 43.5Z" fill="currentColor"/>
  </g>
  </svg>
  `,
        href: "#"
    },
    {
        id: "Linkedin",
        name: "Linkedin",
        icon: `<svg class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_17_68)">
  <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="currentColor"/>
  </g>
  </svg>
  `,
        href: "#"
    },
    {
        id: "Instagram",
        name: "Instagram",
        icon: `<svg class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_17_63)">
  <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="currentColor"/>
  <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="currentColor"/>
  <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="currentColor"/>
  </g>
  </svg>
  `,
        href: "#"
    }
];
const SOCIALS_DATA = socials;
const SocialsShare = ({ className ="grid gap-[6px]" , itemClass ="w-7 h-7 text-base hover:bg-neutral-100"  })=>{
    const renderItem = (item, index)=>{
        return /*#__PURE__*/ _jsx("a", {
            href: item.href,
            className: `rounded-full leading-none flex items-center justify-center text-neutral-6000 ${itemClass}`,
            title: `Share on ${item.name}`,
            children: /*#__PURE__*/ _jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: item.icon
                }
            })
        }, index);
    };
    return /*#__PURE__*/ _jsx("div", {
        className: `nc-SocialsShare ${className}`,
        "data-nc-id": "SocialsShare",
        children: socials.map(renderItem)
    });
};
/* harmony default export */ const SocialsShare_SocialsShare = ((/* unused pure expression or super */ null && (SocialsShare)));

;// CONCATENATED MODULE: ./src/shared/SocialsList/SocialsList.tsx



const socialsDemo = SOCIALS_DATA;
const SOCIALS_2 = socialsDemo;
const SocialsList = ({ className ="" , itemClass ="block" , socials =socialsDemo  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("nav", {
        className: `nc-SocialsList flex space-x-3 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`,
        children: socials.map((item, i)=>/*#__PURE__*/ jsx_runtime.jsx("a", {
                className: `${itemClass}`,
                href: item.href,
                target: "_blank",
                rel: "noopener noreferrer",
                title: item.name,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: item.icon || ""
                    }
                })
            }, i))
    });
};
/* harmony default export */ const SocialsList_SocialsList = (SocialsList);


/***/ }),

/***/ 79842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/404.4b33ab94.png","height":1000,"width":1500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAlklEQVR42mNYsauPkQEK/l0qcvx6IkEYxH55ax4TAzK4em6yw/9rBf//P+hKZ0AHbot7/frWzb+7cVtPa1pKfMim+MCOvavq3RiOruVi+P9ll8DJjZM2L+tu/TG9q+vN2p6Kj0emFf9/cXDis7vnlukw/L+/UfjXlVXBny4tC/x9bXnQ/9vrA16cWuz549KKwP9318sAAE/sSzS7q3foAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 91864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Image-1.e0d669ee.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AH2Up3WMnmhYVbKYj21YUCc9SYuitoWeswCFnLBKaXuedF//08bVp5s0EgB0ipyHoLYAg5uvc4aWgF9PrYZ8pH92MSQYdouegZqwAIGZrX6VqLqQg9yroqh8c3ZbV3mTqHiQpAB4kaSEnLCHfHy1gXt7TElnbXl8lqxqg5YAc4udgZeqioiQiGJWX0A8PlBhbIOWX3uLAGp8im6BkaWot2pURiwnKFtieTFDT0xgbQBicX5tfYpsfpA/ODtjZnNfa303SFJPX2rmbVv9EVKeNAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 82523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Image-10.8d5375a2.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AL2ytLSrrlhNU35hYm1WVQAAAG9rb7qytwDc0tXFvsKliYvGm5jGmZWJXVp7en3SyMwA3tbZ0sHFl3d4iWdpjWpsYTk6qZyfxLq+AKaen6uWmMaZm76Rk6R0eZRhY5F+hKqjqQBMSUY+Oz2xjJCTZm6PYGSJYWQfMmALMWMAUE5UAAAAjnF3hV5nd1NYSzYzAAxCACtxADY3QAAAAGFPV1xITlxDRxcAAz8/RJeUogCamKRHSFEAAAA/MjgrHCAwND2EgouNjZqNjFOi8LuiEgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 24121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Image-2.204cb77c.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AG1ZS4dtXHtqZrSZkJZ0aFVAO1lEQLWVgQBLQj5HOTW9o5vjvrDarZuzjX9RMyzesJIAOzMwWUtGxKOWwZmJwZiHsYd3UkA7aVJMAGJdXWJTTtmyoOC3qNqun9GhjE41KlFFRgBzeoNOT1eyhWzOkoXIinq6hWgQAgJLOjkAlJWYUFVag2lY37Ce2aGLhmBLAAAANSQfAK6rro5yeY9IQ8+YfsuMaW5BLQAVHTkuLQCUWWeSFzaUAB6MJyyEODBaAhUuCAwdExSuOlGLV0VTYQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 12164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Image-3.0c3c10f4.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AGNteFBWYAAeJQAZKwAIJh4pMjc1O0tTXQBVXWI7RU4UJS9/X1iPal1MPz0nKzZfXWIAMDtAQENHg2lpwpOI3KSOo21XYUZDenR2ALC8yniDlbyTjMKZlOGvnMeOdo9iSYh4eACXp7+Ed3qUa2O0fn7cloKzeWK2jHJFPT4AsKWlrYdwQjQ5wY6ExIx4oW9TyqCJloJ/AKaYk009QX1bS3hPPEM6N8KYfLWWha+ZlAB7hZg1Hi5rT0SSZE5gT0qzl4qplI+diIS4flPq9kFIKAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 19289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Image-4.ddc2e626.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AJewz42pyntpb7d8ZY9aSgAAAH2RqpOtzgBnga03VnzVmH7/vqfIhnAqAAAZHyxTapIAKj93Kx03rnZZ3Z2Bm2FHUzMpAAAAIyJIACMrYUojI9idgdmageWjh5FaSAAAAC0eKQAxL1ohAADXlXbYh2/QhGSAQywAAAAkEhEANSMxAAAAf0sw3JBwpmZMSRwJAAIFGgsJAFQoID4YFQAAAJtdO49RMAAAACEOCBcGBABuODNCFQ4AAACCTTO5cEwAAAAmDwocCQg8SjtOREhf6gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 72208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Image-5.52345078.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AEhZU0FSTSAZFHtfS6qKdnJfUkhgYFpsagBNXVc1RUIwCQCyk3zdxbfFrJ9KWVRcbGkAUF9ZMEE+Ykk3oIVyy7SnzLWod3ZtU2djAFRhWR40MohqV5R1ZM+xpePIupeOhUliXwBOXFVEV1JpTjqXb17bvrPJrp5odG9ba2cARVZRT2BbDyIejG5d0ruus6GSRl5XY3FtAEBTTzlNS0o2KGlLL8Kqmc/Hw3aKkFhnYQA/U1c1Rk1DRUilj3/ArJy7ydTB1eWhs8F6+FWTXiAiywAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 63482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Image-6.cf47f5ac.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AAwMCR8SDV0lDU0cFGswHmosFi4YDwQKCgAACQ0gAAC+fV3HdlDCZzGeUCBWKxkAEhgARCgYaUApp3puzpWBzpyMom1dajceAAAAAFozFqhfNd67tOvOyO/Wz9+7saRkR8q1qABOMSBdGQDFopnwyL7wyL/FpZ1xNROnjXgAJxcTAAAAjVU/5r2u6Mq/u39ls2QsajsKAFMsGVgwH5lDCeKJde6+r6lwWqtiMpZjQgAmFxY8Kh9vQzPpKwD9MQCcHRlHNCSMVTEuXEiycEbOkAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 28900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Image-7.ba04f751.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/ADUwMmNgX4J/fZCMjJSQj5CMiW1paFVQTgCXk4pnW09ZRjtzYV1eSUVIMiuXjIJ/enQA8vDpmZCEZlFM1rSnxp2Nd1JF3b+p5tnIAN/a0o2KhH1kW9euntChkH1fUysZGpKEdwBZVFFvdXxrZmLOm4nOloJNLxRVVFpbZW4Ac3d8oqGlgWFpvYVvtYBlAAAAUUdFjImLAIqAhpFTX5MAJ5IAIHoJGloIGD4AB3VmaQBxWV9xAACPAySTBCiOACSICCRuAABxSlD8IFFKnHSZ5wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 31113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Image-8.a9a0d423.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AK6bkbWlnLCelYV6d310crOjmr6qnquXjACtopy2qaFuZGFUUFGPdmxmX1y5p563pJsAsaSeuKadTD8zYz8tn3dicVRBoI+Fv6mfALOlnrOflK2AZ8ylkNivlbOPdYNsYMKrnwC3pp+4opWoeVrPpZXOnYSFXD6gjICunpYAsKagup2RkGpPrYt3u5BykG1NvaWUq52UAMOGbLdnQm86Jl84IHI9IotgRtONZ8eKbACJRCN0PCZ/PiaTUjibTS6tXTi8YzOjUShFi2OkwCgu0wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 36607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Image-9.400dc424.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/APzi3fPY0k9BPwAAAAAAAEM3MvDUzv3f2QD/5+HfyMIAAADEkn9uT0EAAADqz8r/4t4A/+nj2MC7hVQ5xpJ+o3NgAAAA3MO+/+bhAP/n4tW7tsWCYeCljNKTeZ1sWezSzf7i3gD94tzhxL7bpZTbj3HFdFXFmo794Nr529YA4MbDua2wqoh7wHdSekEmd2Vj887H/9rSAE91kGaOpcaonsSOb5FnUSVZcF1tgsOqrQBmg5dPfZnMt7L/0LmxlI47a4VGbYUeUnITPnNR9YmmnAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 59150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/1.8ca61132.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AOzK6uvK6uvL6+7N7OzK6ejG6dW42erJ6ADryury0PDmwt/HqtLjzO7RrM2slbLox+cA7szs3sDim3iZbWKLhICrlYqs6Mbn783tAPLQ8L2ixDYAYISFnw01X5yQtubG6O7M7ADsyurwz+7Mp8eQVpiod7Lardfvze3ryuoA68rq89Hw4MHkuZnC1rHb68zu8dDv7MrqAPDN7c+z1Uw4c4hYfrqTuL+ezNe/5O7M6wDnxeSKeJK6nb2SgY6kkqrRsdGWhqboyOikf4/G5dRwpAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 88391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/10.1097453e.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA0UlEQVR42mN4tefI673HPhw69e7w6Q+HT787cPLV3qOv9hxlAIq+3HP04pI1p2YtODJrwdXl698eOAGUYwAqubthR6S8XJaUpIe6xrKyqncHT4J0vNl/4um2fSmGxplqanb8nBPSsqA6gJLvD57cMXH6hOy8Te3dB2YteLX32Ot9x4ASRz4ePnNg+rwlOQXHuydcX7Xx/eEzQEGGd/uPn1u7NS4xzUhatjo9Z+OytS8u3ni9+wjD233HNs2Y35Bb6ObmmRMctrCs+tTG7e8OngQALdp+A41AA80AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 44210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/11.3779cfdf.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA0UlEQVR42mNQUxM3MZSTk2QoyAxOjraRFGEwNZQ11BVnqEjRNNNjUFVXqi6KnDWp2MbKwFCb11hfmqGz0LmpJNzLSbOzKiwyLn1GZ4avk6yGuhhDsLPu7N5cJSXOcDetKS2pLdUpqrJA0+QYFBX4SjMcba0UQswl100IS4hwkJbmMzeSYdBS4/J2NY0OckiL9pzVXx7oZ2ZtyqCnKcagoSES7m0RaiNVVFLaO2Hq0tlNC6fkMrCKM2gpM0THxrpa6rblu0yutplYajqtr0XfUBUAFg825qG55h8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 21885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/12.2ebea67b.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/ANHUrsTHo7O2mNjbtMjLrsjKq7m7ns3QrQDP0qzS1bKjppGusY+ws5Krr4+YmofJzKsA0tWuxcioT1NKUlcuYWJGnqN71diyz9KsANHUrsnMqUpOQVVaOUxPNZCVb9LVsc/SrADP0qzU1rGanYBkZ1d6fG2kp4nS1a/P0q0AztGs1deytbiXam1WkZV6x8un09axz9KsANLVr8bIpUhMOlBUKJeadaKogsnMqtHUrgDU17CxtJNOUT45PStscVCGjGS3upjT1rCCp3fVnjgwbgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 76956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/13.a10770f7.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AOm8xO2/yOy+xum8xOq8xeu9xuu9xuq8xQDtv8fetbzlu8Pxxc7uw8zqwMjsvsfqvcYA7sDI2rC4wqivt5ies5me4sDI7b7H6r3GAO3AyOm9xV5IS3M5O3paXs+7w+3EzOq8xQDSrLS+n6aFam+Vhoy7qbHd0Njjx87nucEA1KuzwqOquJadiWdqqYKGzLG548HJ673FAO7Byt+ttEMGAykeIHhpbqaIjeq6wuu+xwDwwsu0ipBMJSZRUFRzWl2FU1XCl53wwcr48ILOS6kLqQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 77410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/14.634fe253.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/APXJzvXKzvPHy8iZnNWlpvfN0fTJzfTIzQDvxcn2ys7sys9cTE66e3z3xcr0ys71yc4Ar46RsZKWhHR3Vj8/gltdt5KW78fL9srPAOO6vnBbXTcnKkYqKUYmJqqTl/bLz/XJzgD+0da6mJyUent5YGFjMCzXsrb6z9PzyM0A+87TzqmtalNRlHh4d1xW1bW5+czQ9MnNAPrO09ivswUAAEwkIoxZXLaHhe29wPfM0QD4zNDMpKe9lpuQdmqad2fYq6zcrbH0yM0n+3yndZJDmwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 32155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/15.17acc96b.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AO/mp+Pbou/mqPXsre/nrPHor+7lp+7lpwDz6arKw5PJxJ3Sx4Xi1pHQyqXy6art5KcA9eyt4NacXFpSd21YkYNQlZB+5t2f8eipAMfBloyFZU8+HpeQgVJQUqebgdrQm/HprgC9t5C5tJTBtX6OdjKagD6um2DFvpna1LcA4tqiq6SMwLSApZRqsp515duf3tSfx72KAPXsq8W+kV9AEH90aJaZnbqrh+Tap/HoqwDv5qe8rn56akdOMBGummXRvn/bxozx6qsgdX+u1MrlEAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 34314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/16.7f5d5977.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/ALnQZr3UarzTY73TZrjQYrvSYLrQaLnQZwC60GeOn1OrvH2yw3XN246mtIO3zWa70mgAvNNng5JVcHJ7a3BWfoNZlZqQwNGEutFhAL/WaZ+xXjk3Sm9zTiAnBoOJbL3Pe7vSZwCktmizwoaaq2JNVUZibUSOnGqxw3u6z2sArcBulaRll6hkkJeLsremqbSRssN6vdNtAL/Va6e7XwEAMlpiT6ark6ispqzAbb7UaQC802ecrWFbZj4uNC2JjYq9xa+mt3G70Wtg4mwc/7ZbDwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 99470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/2.87850f99.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA0UlEQVR42mP4fPrxl9NPHh+49v3iyw9nHn04/RDIBQoyfD71+OeFFw/2Xboyd+vnMw+/X3/z9cxToBzD17NP3x6725dd2RERO7+x48buE19OPf5yBihx5umnU48yvMPC7ax73cJvLNv15exToATYqIsvH+293BOYdKF9wc9TT7+cfQYyCmjP9/PPr6w7vKap/1D//Gfbz347/xxk+bezz14fvp3rHe7NwHCmbeHHo3ffn3oINJ/hx/kXNzccn13QGCGteWn2pofrjz3dcubb+RcAvcqRUhb2Z6MAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 61032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/3.9ed96cf9.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA0UlEQVR42mM4/f7vuQ9/z3/6d+nzv/Pvf599//fsh79AkuHchz+H3/w5/+ZP757na178v/zj/7kPIDmGa1//b7r1MTpvvmLe8vBJW5ZdeHb2A0iOAWjUtrvf3BNbdSK7ZPP2dBx5df7jP5COM+/+bL77be+9dz6lWzK3fTj47v/Fj2Cjzn38f/LFt/33P+QtfVh3/NuRj//PQXRc+vp/y+UnAtYNrNHLrFY/KTrz9sCzHxc//WM4//H/lJ2nI+oXSAdU2/XtL9/3eP2dzxc//wMAiCyU5x1WX6EAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 57211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/4.0f95c397.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAyElEQVR42mP49nbbywdr3z7d9OP97uf31319s+Pr661fXm9l+PNp996tPfOnFry5O+/0vpYPj1d8e7sDJPHz/c5HN5bHuTCc35l/YVP0/bN939+BJYDUm0frknwVD67J2L/I+9rR1h/vd4Ikvrza+uPdziM7Ohb0Jizqz714uB+oFCHx/M7yDbPyLu1r+vpq4/d3u6FGvX64LtJDbWJN1Paljce3dX98tvnbm20Mvz7svH5m5tz+lPIky2l17rsWxD+5sejH+x0A5jeNM451pc0AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 7242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/5.0f63df4c.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/ANTIRdXJRtbKQc7DUtLGSNXIOtXJSNTIRQDVyUfWyj7WzGmVjmnCvJXd0m/VyDvVyUgA08dG3NBHsahgDgAAmJaJ4dmg1cgj1clMANPHRdzQSa2kWgAAAHx8et3Wo9bJKNXJSwDUyEbZzEbDuFFXUzSPiGLWzHTXyj3VyUgA1MhF2s5LurBMlo1tsquO0ch92MxK1chFANbLRcy/SF5WPGBRAKugar24ndrPXNTIQADZzUeqnjw9NCg2LgCclnGyr6O+slTZzUplVG4dQ6RiJAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 45288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/6.a2bdb332.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AOq8xeq9xe2/yOzByuq9xem6w+u9xuq8xADqvMXuv8jfsrqqcXXjy9P10trrvMTrvcYA67/I6bW9klNWkTM0vaSrvZOY3aqy7sHKAOu9xu29xmhJTWQhIWolJbFzd+q6wuu+xwDqvMXvwcnUq7NrS06VaW3fsbjvwsrqvMUA6bzE8sTN0aWsjGZquJ6k1q618cPM6rzEAO6/x82stFJSVVIaGm9iZp2Sl+jP1uu7xADtvcazmZ+SeX8yJSdvW1+hiI7Pu8Htv8cy0IG/I4S4MwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 31603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/7.90bb60c1.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAyElEQVR42h2NvWrCYBSGz8/XSGmLdapzWxAEB70MwcFLcRe8AgfBzdkLcRUEcRJBEWL8IRrRCF+M8Ryj7/Y+z/BgOHSREBTIMZLcQRTSp0r6aW6aEPPG94QEmQFShQSE4JDnLgfd3mw8Yse8OBiO4Xg59zvt9zDaB0F8i94ymcReDSW6X3q5UpGj+AuM3R04/4OIJCK//4VatU6od2s/st8E9Iwzs7t2W83GfDrJ5nOX8GQhpnQqsjr6f+XK2kaLxersB1t/g0wPPRFeWRD3oPAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 75146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/8.e7b50703.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/APbZvfjbvvHVu866qN7HsPHVut/KufPYvwD22b373sLjyrR/dWvr4Nju18G7qJvx2MIA9di9/uDEy7elYkMOuKeQ79W3+9zA99q+APbZvfzfxZeGeGRDLLecgPDfxPjexPbZvQD4277v1r+Jem6Mgn3QyMPt5N/13cf32b0A9dm9/N/Exa6YkoNxtJ+F6tK3+9/E9tm9APvewd7ErEpBQ3xwV8W/ttHP0PHcxfjavgD52761pZi6pI+Uj46rp6fJtqbPw7r73sQEeo8/iztdvAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 87751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/9.ff33df70.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/ALvLorbEnbC+mr7MpLbBnLG/mrzLorjGngCywJqir4xmbV91g2SUsX2fr4y2wp26yaEAjJZ7qbWUh5N0QVs0cqFji6F6t8ChusqhAKi2k5umi5KgfwAAAGeCT560jr7KqbnInwC5yJ+PmYGgrYxYXEh8g2OquZi+y6e4yJ8Av86lfopuZnRXiJF5j5qAlK59uMyfusihAL/OpYuXdwAAADc2KnF8XXqNWqi4kL3MpAC8zKOYo4Fka1MeHhN/iWSjr4esspW8y6KZ+G2HUSGkPgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 28644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/cat1.7156ebfd.png","height":541,"width":993,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR4nAGEAHv/AU4A6f/lAP4AQEPuAPYvDgATEuUA8MgJANu0GQASJv8AAZaB6f8iI/YA5dXCAOQhEwAoGsIAyNEyAB77PQDi3f8AAcS14/8lKN8ArqHeAN0A9wANABkAJP8BAAcl+QDn3CYAAcGy5/4eIuYAu57RAO4S+AAV/fYADO3YABACDwDzAVAAJLQ12wQ+hekAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 44188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/cat2.c6fcc5d5.png","height":541,"width":993,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR4nAGEAHv/AQXLev/7Af8AguT0AAj//AD/AgAA4Qb/AK8S/wAbAQoAAXqwgP8o4/0AOdPKAAcP9gD5DNkA0QNIAKQqZgDsBd8AAbWFh/80ewIA9WfCAAEmFAD1BNUA9A9MAN0MfwCF2NAAAbKNhf4woP4A/zzKAAEY7wD+F8QA8AZ+AJbCfgDULc4AKYs2D8eJBEIAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 69813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/cat3.09a091bf.png","height":541,"width":993,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR4nAGEAHv/AfrDAP8DBBUA8gJlAPv/BAD49/AAA/ndABgMtQD9/wAAAdmoAP/j6S0AJVCsAOzZ5QD7/f4ACRUCAPXRmAAVEOsAAaGGHf9f50YAzGNpAN/L5wATGBAAEhsGAKSMowA9NvUAAayfI/5e9lAAwTlVAPPm8AAFBwUA9/70AKKTqQBlUQ0AbVk17e3eyI8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 59910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/cat4.cb7e980d.png","height":541,"width":993,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAh0lEQVR42gWAMQqCUABAX/bF/Fm5NWRXiIa2pg7QkYLu0imCtoamhqJWQ50+RuA3RUv80mOXGBrDxksZyz5pXpGVFm87wLUNYj+tmDkFkRsy0gk0X86tj5ys+CiBtXQStsEF61eQPR/MPYkYGgb6gFE3xDEsTa1i4lri/1vukULn8LqeEIs1HWgwNsvEHwkaAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 1603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/cat5.26499396.png","height":541,"width":993,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR4nAGEAHv/ARZ84f8ABAMAKvngAMDt+AAAAwAAKQ0MANcNHAAW/wAAAQKQ5v95At4ANfWQANnh5wD789EA7AhdAO8UbQDX/voAAX6k0P9TD7IAvr/SAO/e7ADx+f0A3vf8AB4JRADMEi0AAWmj2P5Y/7QAobC5AArq8QDy/fgALTc1AAEGGgB02yAAFC44IalIzIQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 18216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/cat6.97379d13.png","height":541,"width":993,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR4nAGEAHv/AetKS//+DQYA3kdOAPvz8gD95OUAD/PzACXx8AD8//8AAet9ev/z9g8AVn5tAAzAuwAq/fgA4OjuAGuloQAaExUAAeGaoP/t6/cAe0c7ABe1tgAfMCwAlAUDAO1KSQCePjsAAeaXp/7+GwwAffD2AFG31wDnPiMAmjQsAPM1MQCBQD0AP205RP0hhMMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 3906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/large1.0fb51805.png","height":933,"width":933,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/APukyf+mzf6lzPWhvfmiw/+nzfykyvqjyAD1ocbck6vQjJPHna+4jrDLiqb0nsD8pcoA+6XKw3p71cTB2MnmwKbMrJqu7Z++/qXLAOeXtLV2bO/n6M7K3LapxaCZs+uiwP2jygDbjaugUkvm4uXm5+y+vcWEjJTNjKT/pswA9KDFzXSDw7q8xsfPnp+rnIud9KDD/KXKAP+ozrN6kyA/RFlWXk9MViA5P8aBn/+nzQD8pcrDsr1HVFtLSFJNSFMANDmzhJr/qM6ywIIIeUJfDwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 25190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/large2.3cb565cf.png","height":800,"width":700,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA20lEQVR42gWAP0rDUBjAf9+XhDQm6R9KLUixCEpRBMGKoHsv4AVcdOgJnNycPIiz4OLirF6gk4NFChaFmIZUSvveK8Lbg8P3wAkYwIMaltxY/K4I3aygJwt3Ff7yVNblTqq0kwr+GLjPCns+epRGMrH1v1Rejy/lpRaLjyjPzQ0GnUPm1YEG8TeTzSasDIpzvFci/Tzp0zjryfRgl34+AxH8FpaRBtx8bXExdnaYRNCeabhy6I8YmG7zUe4wLFrsZftKmTpVgybW4zYOXSdYymka6dGicNf5nH9V1gNlSYvVkEAIAAAAAElFTkSuQmCC","blurWidth":7,"blurHeight":8});

/***/ }),

/***/ 2693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/large3.bde7a45f.png","height":800,"width":700,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA10lEQVR42hXMQUrDUBRA0ftevjVtCrViLShRxGGcKbgBcQduwAW4F/fgApyJTnTiVAeigkJBsDjIIInyG2zCf6VnAUfCxaWJKJhgM5AYcIaFgBMVirZG47klR5560pUw7TJIVnG00OyqFdmDbQ5f7SMeMsrPooH1cJiwVgqfW4e8uxMZp4XtuP7yFSUy1EMnz6RKDnTD72nV/4cWHALRTCWdfoXtUUP8+GPr5Vit06BUEf70267qa7Lzm/ByfCu2/wdeUXrGb5Jzdx8on1bC89tEmrQyqZUFS8hYVAhTeucAAAAASUVORK5CYII=","blurWidth":7,"blurHeight":8});

/***/ }),

/***/ 51656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"url":"/_next/static/media/metadata/favicon.603d046c.ico","type":"image/x-icon","sizes":"any"});

/***/ }),

/***/ 5678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ app_SiteHeader)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./src/shared/Logo/Logo.tsx + 2 modules
var Logo = __webpack_require__(7794);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 3 modules
var transition = __webpack_require__(40846);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/dialog/dialog.js + 18 modules
var dialog = __webpack_require__(43735);
// EXTERNAL MODULE: ./src/shared/ButtonClose/ButtonClose.tsx
var ButtonClose = __webpack_require__(32401);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js + 1 modules
var disclosure = __webpack_require__(94702);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(55089);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// CONCATENATED MODULE: ./src/data/navigation.ts

const ncNanoId = (lodash_default()).uniqueId;
const otherPageChildMenus = [
    {
        id: ncNanoId(),
        href: "/",
        name: "Home 1"
    },
    {
        id: ncNanoId(),
        href: "/home-2",
        name: "Home 2"
    },
    {
        id: ncNanoId(),
        href: "/home-3",
        name: "Home 3 (Header 2)"
    },
    {
        id: ncNanoId(),
        href: "/collection",
        name: "Collection page"
    },
    {
        id: ncNanoId(),
        href: "/search",
        name: "Search page"
    },
    {
        id: ncNanoId(),
        href: "/author",
        name: "Author profile"
    },
    {
        id: ncNanoId(),
        href: "/nft-detail",
        name: "NFT detail"
    },
    {
        id: ncNanoId(),
        href: "/account",
        name: "Account settings"
    },
    {
        id: ncNanoId(),
        href: "/upload-item",
        name: "Upload Item",
        type: "dropdown",
        children: [
            {
                id: ncNanoId(),
                href: "/upload-item",
                name: "Upload Item"
            },
            {
                id: ncNanoId(),
                href: "/connect-wallet",
                name: "Connect Wallet"
            }
        ]
    },
    {
        id: ncNanoId(),
        href: "/about",
        name: "Other Pages",
        type: "dropdown",
        children: [
            {
                id: ncNanoId(),
                href: "/about",
                name: "About"
            },
            {
                id: ncNanoId(),
                href: "/contact",
                name: "Contact us"
            },
            {
                id: ncNanoId(),
                href: "/login",
                name: "Login"
            },
            {
                id: ncNanoId(),
                href: "/signup",
                name: "Signup"
            },
            {
                id: ncNanoId(),
                href: "/subscription",
                name: "Subscription"
            }
        ]
    },
    {
        id: ncNanoId(),
        href: "/blog",
        name: "Blog Pages",
        type: "dropdown",
        children: [
            {
                id: ncNanoId(),
                href: "/blog",
                name: "Blog Page"
            },
            {
                id: ncNanoId(),
                href: "/blog-single",
                name: "Blog Single"
            }
        ]
    }
];
const NAVIGATION_DEMO_2 = [
    {
        id: ncNanoId(),
        href: "/",
        name: "Fractal CM"
    },
    {
        id: ncNanoId(),
        href: "/",
        name: "Fundaci\xf3n Ni\xf1os Heroes"
    }
];

// EXTERNAL MODULE: ./src/shared/Button/ButtonPrimary.tsx
var ButtonPrimary = __webpack_require__(34255);
// EXTERNAL MODULE: ./src/shared/SocialsList/SocialsList.tsx + 1 modules
var SocialsList = __webpack_require__(73062);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/ChevronDownIcon.js
var ChevronDownIcon = __webpack_require__(93524);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/MoonIcon.js
var MoonIcon = __webpack_require__(9958);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/SunIcon.js
var SunIcon = __webpack_require__(84069);
// EXTERNAL MODULE: ./node_modules/react-hooks-global-state/dist/index.modern.js + 2 modules
var index_modern = __webpack_require__(69709);
;// CONCATENATED MODULE: ./src/hooks/useThemeMode.ts


const initialState = {
    isDarkmode: false
};
const { useGlobalState  } = (0,index_modern/* createGlobalState */.r)(initialState);
const useThemeMode = ()=>{
    const [isDarkMode, setIsDarkMode] = useGlobalState("isDarkmode");
    (0,react_.useEffect)(()=>{
        if (localStorage.theme === "dark") {
            toDark();
        } else {
            toLight();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const toDark = ()=>{
        setIsDarkMode(true);
        const root = document.querySelector("html");
        if (!root) return;
        !root.classList.contains("dark") && root.classList.add("dark");
        localStorage.theme = "dark";
    };
    const toLight = ()=>{
        setIsDarkMode(false);
        const root = document.querySelector("html");
        if (!root) return;
        root.classList.remove("dark");
        localStorage.theme = "light";
    };
    function _toogleDarkMode() {
        if (localStorage.theme === "light") {
            toDark();
        } else {
            toLight();
        }
    }
    return {
        isDarkMode,
        toDark,
        toLight,
        _toogleDarkMode
    };
};

;// CONCATENATED MODULE: ./src/shared/SwitchDarkMode/SwitchDarkMode.tsx





const SwitchDarkMode = ({ className =""  })=>{
    const { _toogleDarkMode , isDarkMode , toDark , toLight  } = useThemeMode();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        onClick: _toogleDarkMode,
        className: `self-center text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: "Enable dark mode"
            }),
            isDarkMode ? /*#__PURE__*/ jsx_runtime_.jsx(MoonIcon, {
                className: "w-7 h-7",
                "aria-hidden": "true"
            }) : /*#__PURE__*/ jsx_runtime_.jsx(SunIcon, {
                className: "w-7 h-7",
                "aria-hidden": "true"
            })
        ]
    });
};
/* harmony default export */ const SwitchDarkMode_SwitchDarkMode = (SwitchDarkMode);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/shared/Navigation/NavMobile.tsx











const NavMobile = ({ data =NAVIGATION_DEMO_2 , onClickClose  })=>{
    const _renderMenuChild = (item, itemClass = " pl-3 text-neutral-900 dark:text-neutral-200 font-medium ")=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "nav-mobile-sub-menu pl-6 pb-1 text-base",
            children: item.children?.map((i, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(disclosure/* Disclosure */.p, {
                    as: "li",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: {
                                pathname: i.href || undefined
                            },
                            className: `flex text-sm rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 mt-0.5 pr-4 ${itemClass}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: `py-2.5 ${!i.children ? "block w-full" : ""}`,
                                    onClick: onClickClose,
                                    children: i.name
                                }),
                                i.children && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "flex items-center flex-grow",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure.Button */.p.Button, {
                                        as: "span",
                                        className: "flex justify-end flex-grow",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ChevronDownIcon, {
                                            className: "ml-2 h-4 w-4 text-slate-500",
                                            "aria-hidden": "true"
                                        })
                                    })
                                })
                            ]
                        }),
                        i.children && /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure.Panel */.p.Panel, {
                            children: _renderMenuChild(i, "pl-3 text-slate-600 dark:text-slate-400 ")
                        })
                    ]
                }, index))
        });
    };
    const _renderItem = (item, index)=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(disclosure/* Disclosure */.p, {
            as: "li",
            className: "text-slate-900 dark:text-white",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    className: "flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg",
                    href: {
                        pathname: item.href || undefined
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: !item.children ? "block w-full" : "",
                            onClick: onClickClose,
                            children: item.name
                        }),
                        item.children && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "block flex-grow",
                            onClick: (e)=>e.preventDefault(),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure.Button */.p.Button, {
                                as: "span",
                                className: "flex justify-end flex-grow",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ChevronDownIcon, {
                                    className: "ml-2 h-4 w-4 text-neutral-500",
                                    "aria-hidden": "true"
                                })
                            })
                        })
                    ]
                }),
                item.children && /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure.Panel */.p.Panel, {
                    children: _renderMenuChild(item)
                })
            ]
        }, index);
    };
    const renderMagnifyingGlassIcon = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: 22,
            height: 22,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M22 22L20 20",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            ]
        });
    };
    const renderSearchForm = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            action: "",
            method: "POST",
            className: "flex-1 text-slate-900 dark:text-slate-200",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "bg-slate-50 dark:bg-slate-800 flex items-center space-x-1 py-2 px-4 rounded-xl h-full",
                    children: [
                        renderMagnifyingGlassIcon(),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "search",
                            placeholder: "Type and press enter",
                            className: "border-none bg-transparent focus:outline-none focus:ring-0 w-full text-sm "
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "submit",
                    hidden: true,
                    value: ""
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "py-6 px-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col mt-5 text-slate-600 dark:text-slate-300 text-sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Discover the most outstanding articles on all topics of life. Write your stories and share them"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-between items-center mt-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialsList/* default */.Z, {
                                        itemClass: "w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xl"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "block",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SwitchDarkMode_SwitchDarkMode, {
                                            className: "bg-neutral-100 dark:bg-neutral-800"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "absolute right-2 top-2 p-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonClose/* default */.Z, {
                            onClick: onClickClose
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-5",
                        children: renderSearchForm()
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "flex flex-col py-6 px-2 space-y-1",
                children: data.map(_renderItem)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center justify-between py-6 px-5 space-x-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonPrimary/* default */.Z, {
                    href: "/",
                    className: "!px-10",
                    children: "Buy this template"
                })
            })
        ]
    });
};
/* harmony default export */ const Navigation_NavMobile = (NavMobile);

;// CONCATENATED MODULE: ./src/shared/MenuBar/MenuBar.tsx




const MenuBar = ()=>{
    const [isVisable, setIsVisable] = (0,react_.useState)(false);
    const handleOpenMenu = ()=>setIsVisable(true);
    const handleCloseMenu = ()=>setIsVisable(false);
    const renderContent = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
            appear: true,
            show: isVisable,
            as: react_.Fragment,
            children: /*#__PURE__*/ jsx_runtime_.jsx(dialog/* Dialog */.V, {
                as: "div",
                className: "fixed inset-0 z-50 overflow-y-auto",
                onClose: handleCloseMenu,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "fixed left-0 top-0 bottom-0 w-full max-w-md md:w-auto z-max outline-none focus:outline-none",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((react_default()).Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition.Child */.u.Child, {
                                as: react_.Fragment,
                                enter: "transition duration-100 transform",
                                enterFrom: "opacity-0 -translate-x-14",
                                enterTo: "opacity-100 translate-x-0",
                                leave: "transition duration-150 transform",
                                leaveFrom: "opacity-100 translate-x-0",
                                leaveTo: "opacity-0 -translate-x-14",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "z-20 relative",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Navigation_NavMobile, {
                                        onClickClose: handleCloseMenu
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition.Child */.u.Child, {
                                as: react_.Fragment,
                                enter: " duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: " duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(dialog/* Dialog.Overlay */.V.Overlay, {
                                    className: "fixed inset-0 bg-neutral-900/60"
                                })
                            })
                        ]
                    })
                })
            })
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: handleOpenMenu,
                className: "p-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-7 w-7",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                        clipRule: "evenodd"
                    })
                })
            }),
            renderContent()
        ]
    });
};
/* harmony default export */ const MenuBar_MenuBar = (MenuBar);

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/popover/popover.js
var popover = __webpack_require__(32513);
// EXTERNAL MODULE: ./src/shared/Avatar/Avatar.tsx + 1 modules
var Avatar = __webpack_require__(70367);
;// CONCATENATED MODULE: ./src/components/Header/NotifyDropdown.tsx




const solutions = [
    {
        name: "Eden Tuan",
        description: "Measure actions your users take",
        time: "3 minutes ago",
        href: "##"
    },
    {
        name: "Leo Messi",
        description: "Create your own targeted content",
        time: "1 minute ago",
        href: "##"
    },
    {
        name: "Leo Kante",
        description: "Keep track of your growth",
        time: "3 minutes ago",
        href: "##"
    }
];
function NotifyDropdown() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative flex",
        children: /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J, {
            className: "self-center",
            children: ({ open  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popover/* Popover.Button */.J.Button, {
                            className: `
                ${open ? "" : "text-opacity-90"}
                 group  p-3 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full inline-flex items-center text-base font-medium hover:text-opacity-100
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "w-2 h-2 bg-blue-500 absolute top-2 right-2 rounded-full"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M12 6.43994V9.76994",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: "10",
                                            strokeLinecap: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: "10",
                                            strokeLinecap: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M15.33 18.8201C15.33 20.6501 13.83 22.1501 12 22.1501C11.09 22.1501 10.25 21.7701 9.65004 21.1701C9.05004 20.5701 8.67004 19.7301 8.67004 18.8201",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: "10"
                                        })
                                    ]
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
                                className: "absolute z-10 w-screen max-w-xs sm:max-w-sm px-4 top-full -right-28 sm:right-0 sm:px-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "relative grid gap-8 bg-white dark:bg-neutral-800 p-7",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-xl font-semibold",
                                                children: "Notifications"
                                            }),
                                            solutions.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: item.href,
                                                    className: "flex p-2 pr-8 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 relative",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Avatar["default"], {
                                                            sizeClass: "w-8 h-8 sm:w-12 sm:h-12"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "ml-3 sm:ml-4 space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-sm font-medium text-gray-900 dark:text-gray-200",
                                                                    children: item.name
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-xs sm:text-sm text-gray-500 dark:text-gray-400",
                                                                    children: item.description
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-xs text-gray-400 dark:text-gray-400",
                                                                    children: item.time
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"
                                                        })
                                                    ]
                                                }, index))
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
        })
    });
}

// EXTERNAL MODULE: ./src/contains/fakeData.ts
var fakeData = __webpack_require__(2898);
;// CONCATENATED MODULE: ./src/components/Header/AvatarDropdown.tsx






function AvatarDropdown() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "AvatarDropdown relative flex",
        children: /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J, {
            className: "self-center",
            children: ({ open  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover.Button */.J.Button, {
                            className: `inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`
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
                                className: "absolute z-10 w-screen max-w-[260px] px-4 top-full -right-2 sm:right-0 sm:px-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "relative grid grid-cols-1 gap-6 bg-white dark:bg-neutral-800 py-7 px-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center space-x-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Avatar["default"], {
                                                        imgUrl: fakeData/* avatarImgs.7 */.Jf[7],
                                                        sizeClass: "w-12 h-12"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex-grow",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "font-semibold",
                                                                children: "Eden Tuan"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-xs mt-0.5",
                                                                children: "0xc4c16ab5ac7d...b21a"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-full border-b border-neutral-200 dark:border-neutral-700"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                href: "/author",
                                                className: "flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "ml-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-sm font-medium ",
                                                            children: "My Profile"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                href: "/nft-detail",
                                                className: "flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "ml-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-sm font-medium ",
                                                            children: "My Items"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                href: "/account",
                                                className: "flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M19.2101 15.74L15.67 19.2801C15.53 19.4201 15.4 19.68 15.37 19.87L15.18 21.22C15.11 21.71 15.45 22.05 15.94 21.98L17.29 21.79C17.48 21.76 17.75 21.63 17.88 21.49L21.42 17.95C22.03 17.34 22.32 16.63 21.42 15.73C20.53 14.84 19.8201 15.13 19.2101 15.74Z",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeMiterlimit: "10",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M18.7001 16.25C19.0001 17.33 19.84 18.17 20.92 18.47",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeMiterlimit: "10",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M3.40991 22C3.40991 18.13 7.25994 15 11.9999 15C13.0399 15 14.0399 15.15 14.9699 15.43",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "ml-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-sm font-medium ",
                                                            children: "Edit profile"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-full border-b border-neutral-200 dark:border-neutral-700"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                href: "/##",
                                                className: "flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44715 2 1.97 6.47715 1.97 12C1.97 17.5228 6.44715 22 11.97 22Z",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M4.89999 4.92993L8.43999 8.45993",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M4.89999 19.07L8.43999 15.54",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M19.05 19.07L15.51 15.54",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M19.05 4.92993L15.51 8.45993",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "ml-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-sm font-medium ",
                                                            children: "Help"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                href: "/",
                                                className: "flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M15 12H3.62",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M5.85 8.6499L2.5 11.9999L5.85 15.3499",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "ml-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-sm font-medium ",
                                                            children: "Disconnect"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
        })
    });
}

;// CONCATENATED MODULE: ./src/shared/Navigation/NavigationItem.tsx






const NavigationItem = ({ menuItem  })=>{
    const [menuCurrentHovers, setMenuCurrentHovers] = (0,react_.useState)([]);
    // CLOSE ALL MENU OPENING WHEN CHANGE HISTORY
    const locationPathName = (0,navigation.usePathname)();
    (0,react_.useEffect)(()=>{
        setMenuCurrentHovers([]);
    }, [
        locationPathName
    ]);
    const onMouseEnterMenu = (id)=>{
        setMenuCurrentHovers((state)=>[
                ...state,
                id
            ]);
    };
    const onMouseLeaveMenu = (id)=>{
        setMenuCurrentHovers((state)=>{
            return state.filter((item, index)=>{
                return item !== id && index < state.indexOf(id);
            });
        });
    };
    // ===================== MENU DROPDOW =====================
    const renderDropdownMenu = (menuDropdown)=>{
        const isHover = menuCurrentHovers.includes(menuDropdown.id);
        return /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J, {
            as: "li",
            className: `menu-item flex items-center menu-dropdown relative ${menuDropdown.isNew ? "menuIsNew_lv1" : ""}`,
            onMouseEnter: ()=>onMouseEnterMenu(menuDropdown.id),
            onMouseLeave: ()=>onMouseLeaveMenu(menuDropdown.id),
            children: ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: renderMainItem(menuDropdown)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                            as: react_.Fragment,
                            show: isHover,
                            enter: "transition ease-out duration-150 ",
                            enterFrom: "opacity-0 translate-y-1",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition ease-in duration-150",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover.Panel */.J.Panel, {
                                static: true,
                                className: "sub-menu will-change-transform absolute transform z-10 w-56 top-full left-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1",
                                    children: menuDropdown.children?.map((i)=>{
                                        if (i.type) {
                                            return renderDropdownMenuNavlinkHasChild(i);
                                        } else {
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `px-2 ${i.isNew ? "menuIsNew" : ""}`,
                                                children: renderDropdownMenuNavlink(i)
                                            }, i.id);
                                        }
                                    })
                                })
                            })
                        })
                    ]
                })
        });
    };
    const renderDropdownMenuNavlinkHasChild = (item)=>{
        const isHover = menuCurrentHovers.includes(item.id);
        return /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J, {
            as: "li",
            className: "menu-item flex items-center menu-dropdown relative px-2",
            onMouseEnter: ()=>onMouseEnterMenu(item.id),
            onMouseLeave: ()=>onMouseLeaveMenu(item.id),
            children: ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: renderDropdownMenuNavlink(item)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                            as: react_.Fragment,
                            show: isHover,
                            enter: "transition ease-out duration-150",
                            enterFrom: "opacity-0 translate-y-1",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition ease-in duration-150",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover.Panel */.J.Panel, {
                                static: true,
                                className: "sub-menu absolute z-10 w-56 left-full pl-2 top-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1",
                                    children: item.children?.map((i)=>{
                                        if (i.type) {
                                            return renderDropdownMenuNavlinkHasChild(i);
                                        } else {
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "px-2",
                                                children: renderDropdownMenuNavlink(i)
                                            }, i.id);
                                        }
                                    })
                                })
                            })
                        })
                    ]
                })
        }, item.id);
    };
    const renderDropdownMenuNavlink = (item)=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            target: item.targetBlank ? "_blank" : undefined,
            rel: "noopener noreferrer",
            className: "flex items-center font-normal text-neutral-6000 dark:text-neutral-300 py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 ",
            href: item.href || "",
            children: [
                item.name,
                item.type && /*#__PURE__*/ jsx_runtime_.jsx(ChevronDownIcon, {
                    className: "ml-2 h-4 w-4 text-neutral-500",
                    "aria-hidden": "true"
                })
            ]
        });
    };
    // ===================== MENU MAIN MENU =====================
    const renderMainItem = (item)=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            rel: "noopener noreferrer",
            className: "inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200",
            href: item.href || "/",
            children: [
                item.name,
                item.type && /*#__PURE__*/ jsx_runtime_.jsx(ChevronDownIcon, {
                    className: "ml-1 -mr-1 h-4 w-4 text-neutral-400",
                    "aria-hidden": "true"
                })
            ]
        });
    };
    switch(menuItem.type){
        case "dropdown":
            return renderDropdownMenu(menuItem);
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "menu-item flex items-center",
                children: renderMainItem(menuItem)
            });
    }
};
// Your component own properties
/* harmony default export */ const Navigation_NavigationItem = (NavigationItem);

;// CONCATENATED MODULE: ./src/shared/Navigation/Navigation.tsx




function Navigation() {
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "nc-Navigation flex h-full",
        children: NAVIGATION_DEMO_2.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(Navigation_NavigationItem, {
                menuItem: item
            }, item.id))
    });
}
/* harmony default export */ const Navigation_Navigation = (Navigation);

;// CONCATENATED MODULE: ./src/components/Header/MainNav2Logged.tsx








const MainNav2Logged = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `nc-MainNav2Logged relative z-10`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-20 flex justify-between space-x-4 xl:space-x-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "self-center flex justify-start flex-grow space-x-3 sm:space-x-8 lg:space-x-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-shrink-0 flex justify-end text-neutral-700 dark:text-neutral-100 space-x-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "hidden xl:flex space-x-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Navigation_Navigation, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "self-center hidden sm:block h-6 border-l border-neutral-300 dark:border-neutral-6000"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(SwitchDarkMode_SwitchDarkMode, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(NotifyDropdown, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(AvatarDropdown, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-1 xl:hidden",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(NotifyDropdown, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(AvatarDropdown, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(MenuBar_MenuBar, {})
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Header_MainNav2Logged = (MainNav2Logged);

;// CONCATENATED MODULE: ./src/components/Header/HeaderLogged.tsx



const HeaderLogged = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "nc-HeaderLogged sticky top-0 w-full left-0 right-0 z-40 bg-white dark:bg-neutral-900 shadow-sm dark:border-b dark:border-neutral-700",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Header_MainNav2Logged, {})
    });
};
/* harmony default export */ const Header_HeaderLogged = (HeaderLogged);

// EXTERNAL MODULE: ./src/shared/Input/Input.tsx
var Input = __webpack_require__(22603);
// EXTERNAL MODULE: ./src/shared/Button/ButtonSecondary.tsx
var ButtonSecondary = __webpack_require__(21180);
;// CONCATENATED MODULE: ./src/components/Header/MainNav2.tsx









const MainNav2 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `nc-MainNav2 relative z-10`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-20 flex justify-between space-x-4 xl:space-x-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "self-center flex justify-start flex-grow space-x-3 sm:space-x-8 lg:space-x-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hidden sm:block flex-grow max-w-xs",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    action: "",
                                    method: "POST",
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                            type: "search",
                                            placeholder: "Search items",
                                            className: "pr-10 w-full",
                                            sizeClass: "h-[42px] pl-4 py-3"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "absolute top-1/2 -translate-y-1/2 right-3 text-neutral-500",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                className: "h-5 w-5",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M22 22L20 20",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "submit",
                                            hidden: true,
                                            value: ""
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-shrink-0 flex justify-end text-neutral-700 dark:text-neutral-100 space-x-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "hidden items-center xl:flex space-x-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Navigation_Navigation, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "hidden sm:block h-9 border-l border-neutral-300 dark:border-neutral-6000"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SwitchDarkMode_SwitchDarkMode, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonPrimary/* default */.Z, {
                                        href: "/upload-item",
                                        sizeClass: "px-4 py-2 sm:px-5",
                                        children: "Create"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonSecondary/* default */.Z, {
                                        href: "/connect-wallet",
                                        sizeClass: "px-4 py-2 sm:px-5",
                                        children: "Connect Wallet"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-1 xl:hidden",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonPrimary/* default */.Z, {
                                        href: "/upload-item",
                                        sizeClass: "px-4 py-2 sm:px-5",
                                        children: "Create"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(MenuBar_MenuBar, {})
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Header_MainNav2 = (MainNav2);

;// CONCATENATED MODULE: ./src/components/Header/Header2.tsx



const Header2 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "nc-Header2 sticky top-0 w-full left-0 right-0 z-40 bg-white dark:bg-neutral-900 nc-header-bg shadow-sm dark:border-b dark:border-neutral-700",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Header_MainNav2, {})
    });
};
/* harmony default export */ const Header_Header2 = (Header2);

;// CONCATENATED MODULE: ./src/app/SiteHeader.tsx





const SiteHeader = ()=>{
    let pathname = (0,navigation.usePathname)();
    const headerComponent = (0,react_.useMemo)(()=>{
        let HeadComponent = Header_HeaderLogged;
        switch(pathname){
            case "/home-3":
                HeadComponent = Header_Header2;
                break;
            default:
                break;
        }
        return /*#__PURE__*/ jsx_runtime_.jsx(HeadComponent, {});
    }, [
        pathname
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: headerComponent
    });
};
/* harmony default export */ const app_SiteHeader = (SiteHeader);


/***/ }),

/***/ 81141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MusicPlayer_MusicPlayer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./src/shared/NcImage/NcImage.tsx
var NcImage = __webpack_require__(63854);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 3 modules
var transition = __webpack_require__(40846);
// EXTERNAL MODULE: ./src/hooks/useMusicPlayer.ts
var useMusicPlayer = __webpack_require__(7742);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/PauseIcon.js
var PauseIcon = __webpack_require__(81639);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/PlayIcon.js
var PlayIcon = __webpack_require__(26607);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/XMarkIcon.js
var XMarkIcon = __webpack_require__(57231);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/ChevronUpIcon.js
var ChevronUpIcon = __webpack_require__(70939);
// EXTERNAL MODULE: ./src/contains/fakeData.ts
var fakeData = __webpack_require__(2898);
;// CONCATENATED MODULE: ./src/components/MusicPlayer/PlayerContent.tsx









const PlayerContent = ({ isError , handleSeekMouseUp , handleSeekMouseDown , handleSeekChange , handleVolumeChange , handleSetPlaybackRate , handleSetMuted , handleClickBackwards10Sec , handleClickForwards15Sec  })=>{
    //
    const { duration , loaded , muted , playbackRate , played , playing , setDuration , setLoaded , setMuted , setPlayed , setPlaying , setVolume , setplaybackRate , volume , playedSeconds , setPlayedSeconds , loadedSeconds , setLoadedSeconds , url , setUrl  } = (0,useMusicPlayer/* useMusicPlayer */.c)();
    //
    const [isShowContentOnMobile, setIsShowContentOnMobile] = react_default().useState(false);
    //
    //
    const getConvertTime = (sec)=>{
        let minutes = Math.floor(sec / 60);
        let seconds = `${sec - minutes * 60}`;
        if (Number(seconds) < 10) {
            seconds = "0" + seconds;
        }
        return minutes + ":" + seconds;
    };
    const handleClickToggle = ()=>{
        setPlaying(!playing);
    };
    const handleClickClose = ()=>{
        setPlaying(false);
        setUrl("");
    };
    const renderLeft = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mr-2 flex items-center flex-grow lg:flex-shrink-0 lg:basis-52 overflow-hidden",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: "relative h-14 sm:h-16 flex items-center space-x-2 sm:space-x-3 pl-12 overflow-hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NcImage/* default */.Z, {
                        fill: true,
                        sizes: "3rem",
                        containerClassName: `absolute left-0 w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 transition-transform nc-animation-spin rounded-full ${playing ? "playing" : ""}`,
                        src: fakeData/* nftsImgs.0 */.wY[0],
                        className: "object-cover w-full h-full rounded-full shadow-md"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-grow overflow-hidden",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-sm sm:text-base font-medium truncate",
                                children: "NFT music #2556"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "block text-xs text-neutral-500 dark:text-neutral-400 ",
                                children: "Music nft"
                            })
                        ]
                    })
                ]
            })
        });
    };
    const renderDurationTime = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "absolute w-full inset-x-0 bottom-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    className: "slider absolute z-10 opacity-0 inset-0 h-full w-full cursor-pointer",
                    type: "range",
                    min: 0,
                    max: 0.999999,
                    step: "any",
                    value: played,
                    onMouseDown: handleSeekMouseDown,
                    onTouchStart: handleSeekMouseDown,
                    onChange: handleSeekChange,
                    onMouseUp: handleSeekMouseUp,
                    onTouchEnd: handleSeekMouseUp
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute left-0 top-1/2 h-0.5 min-w-0 transform -translate-y-1/2 transition-all rounded-full bg-primary-500/30  will-change-contents",
                    style: {
                        width: loaded * 100 + "%"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute h-0.5 min-w-0 left-0 top-1/2 transform -translate-y-1/2 rounded-full bg-primary-500 z-0",
                    // 12px la kich thuoc cua num' chuot
                    style: {
                        width: `calc(${played * 100 + "%"} - 12px)`
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "absolute -right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-primary-500"
                    })
                })
            ]
        });
    };
    const renderButtonControl = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex-shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full text-neutral-700 dark:text-neutral-200 bg-neutral-100/70 hover:bg-neutral-200/70 dark:bg-neutral-700/40 dark:hover:bg-neutral-700/80 cursor-pointer transition-colors",
            onClick: handleClickToggle,
            children: playing ? /*#__PURE__*/ jsx_runtime_.jsx(PauseIcon, {
                className: "w-10 h-10"
            }) : /*#__PURE__*/ jsx_runtime_.jsx(PlayIcon, {
                className: "ml-0.5 w-10 h-10"
            })
        });
    };
    const renderButtonControlMobile = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex-shrink-0 flex lg:hidden items-center justify-center w-10 h-10 rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-black/10 cursor-pointer ",
            onClick: handleClickToggle,
            children: playing ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                className: "w-6 h-6 md:w-8 md:h-8",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1.5",
                        d: "M15.25 6.75V17.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1.5",
                        d: "M8.75 6.75V17.25"
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                className: "w-6 h-6 md:w-8 md:h-8",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    d: "M18.25 12L5.75 5.75V18.25L18.25 12Z"
                })
            })
        });
    };
    const renderForwards15S = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("button", {
            className: "w-12 h-12 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-700/80 transition-colors",
            onClick: handleClickForwards15Sec,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                className: "w-6 h-6",
                viewBox: "0 0 24 24",
                fill: "none",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M15.9601 10.8301H12.9001L12.1401 13.1201H14.4301C15.2701 13.1201 15.9601 13.8001 15.9601 14.6501C15.9601 15.4901 15.2801 16.1801 14.4301 16.1801H12.1401",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.54004 16.17V10.8301L8.04004 12.5001",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.98 4.46997L12 2",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M19.0899 7.79999C20.1999 9.27999 20.8899 11.11 20.8899 13.11C20.8899 18.02 16.9099 22 11.9999 22C7.08988 22 3.10986 18.02 3.10986 13.11C3.10986 8.19999 7.08988 4.21997 11.9999 4.21997C12.6799 4.21997 13.3399 4.31002 13.9799 4.46002",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                ]
            })
        });
    };
    const renderBackwards10S = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("button", {
            className: "w-12 h-12 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-700/80 transition-colors",
            onClick: ()=>handleClickBackwards10Sec(),
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                className: "w-6 h-6",
                viewBox: "0 0 24 24",
                fill: "none",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.54004 15.92V10.5801L8.04004 12.2501",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M10.02 4.46997L12 2",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M4.91 7.79999C3.8 9.27999 3.10999 11.11 3.10999 13.11C3.10999 18.02 7.09 22 12 22C16.91 22 20.89 18.02 20.89 13.11C20.89 8.19999 16.91 4.21997 12 4.21997C11.32 4.21997 10.66 4.31002 10.02 4.46002",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M14 10.5801C15.1 10.5801 16 11.4801 16 12.5801V13.9301C16 15.0301 15.1 15.9301 14 15.9301C12.9 15.9301 12 15.0301 12 13.9301V12.5801C12 11.4701 12.9 10.5801 14 10.5801Z",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                ]
            })
        });
    };
    const rederSpeed = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-12 flex justify-center items-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "rounded-lg text-[11px] leading-6 font-semibold px-2 ring-1 ring-inset ring-neutral-500 transition-all duration-500",
                onClick: ()=>{
                    if (playbackRate === 1) {
                        return handleSetPlaybackRate(1.5);
                    }
                    if (playbackRate === 1.5) {
                        return handleSetPlaybackRate(2);
                    }
                    if (playbackRate === 2) {
                        return handleSetPlaybackRate(1);
                    }
                },
                children: `${playbackRate === 1.5 ? 1.5 : playbackRate + `.0`}x`
            })
        });
    };
    const renderContentCenter = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-grow items-center text-neutral-500 dark:text-neutral-300 justify-evenly max-w-xs xl:max-w-md",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-12"
                }),
                renderBackwards10S(),
                renderButtonControl(),
                renderForwards15S(),
                rederSpeed()
            ]
        });
    };
    const renderVolumn = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "hidden lg:flex items-center justify-end text-neutral-500 dark:text-neutral-300",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    onClick: ()=>{
                        if (!volume) {
                            handleSetMuted(false);
                            handleVolumeChange(0.8);
                            return;
                        }
                        handleSetMuted(!muted);
                    },
                    children: [
                        !!volume && !muted && volume >= 0.5 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            className: "w-5 h-5 flex-shrink-0",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M2 10V14C2 16 3 17 5 17H6.43C6.8 17 7.17 17.11 7.49 17.3L10.41 19.13C12.93 20.71 15 19.56 15 16.59V7.41003C15 4.43003 12.93 3.29003 10.41 4.87003L7.49 6.70003C7.17 6.89003 6.8 7.00003 6.43 7.00003H5C3 7.00003 2 8.00003 2 10Z",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M18 8C19.78 10.37 19.78 13.63 18 16",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M19.83 5.5C22.72 9.35 22.72 14.65 19.83 18.5",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            ]
                        }),
                        !!volume && !muted && volume < 0.5 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            className: "w-5 h-5 flex-shrink-0",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M3.32996 10V14C3.32996 16 4.32996 17 6.32996 17H7.75996C8.12996 17 8.49996 17.11 8.81996 17.3L11.74 19.13C14.26 20.71 16.33 19.56 16.33 16.59V7.41003C16.33 4.43003 14.26 3.29003 11.74 4.87003L8.81996 6.70003C8.49996 6.89003 8.12996 7.00003 7.75996 7.00003H6.32996C4.32996 7.00003 3.32996 8.00003 3.32996 10Z",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M19.33 8C21.11 10.37 21.11 13.63 19.33 16",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            ]
                        }),
                        (!volume || muted) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            className: "w-5 h-5 flex-shrink-0",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M15 8.37003V7.41003C15 4.43003 12.93 3.29003 10.41 4.87003L7.49 6.70003C7.17 6.89003 6.8 7.00003 6.43 7.00003H5C3 7.00003 2 8.00003 2 10V14C2 16 3 17 5 17H7",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M10.41 19.13C12.93 20.71 15 19.56 15 16.59V12.95",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M18.81 9.41992C19.71 11.5699 19.44 14.0799 18 15.9999",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M21.15 7.80005C22.62 11.29 22.18 15.37 19.83 18.5",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M22 2L2 22",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "ml-3.5 relative w-24 flex-shrink-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "slider absolute z-10 opacity-0 inset-0 h-1 w-full cursor-pointer ",
                            type: "range",
                            min: 0,
                            max: 0.999999,
                            step: "any",
                            value: volume,
                            onChange: (e)=>{
                                handleVolumeChange(parseFloat(e.currentTarget.value));
                                handleSetMuted(false);
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute left-0 top-1/2 h-0.5 min-w-0 w-full -translate-y-1/2 rounded-full bg-neutral-300 dark:bg-neutral-500"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `absolute h-0.5 min-w-0 left-0 top-1/2 -translate-y-1/2 rounded-full ${!volume || muted ? "bg-neutral-400" : "bg-primary-500"}`,
                            style: {
                                width: volume * 100 + "%"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ${!volume || muted ? "bg-neutral-400" : "bg-primary-500"}`
                            })
                        })
                    ]
                })
            ]
        });
    };
    const renderClose = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("button", {
            className: "flex-shrink-0 flex items-center justify-center rounded-full focus:outline-none focus:shadow-outline hover:bg-neutral-100 dark:hover:bg-neutral-700/80 w-10 h-10 md:w-12 md:h-12",
            onClick: handleClickClose,
            children: /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon, {
                className: "w-6 h-6"
            })
        });
    };
    const renderTiming = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "ml-5 mr-3 hidden lg:flex items-center justify-center flex-shrink-0 text-xs tracking-widest",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex-shrink-0 truncate min-w-[40px] text-right",
                    children: getConvertTime(Math.floor(playedSeconds))
                }),
                "/",
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex-shrink-0 truncate min-w-[40px]",
                    children: getConvertTime(Math.floor(duration))
                })
            ]
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(transition/* Transition */.u, {
            className: "relative bg-white dark:bg-neutral-800 w-full flex flex-col px-2 sm:px-3 z-0 - nc-google-shadow",
            show: !!url,
            enter: "transition-transform duration-150",
            enterFrom: "translate-y-full",
            enterTo: "translate-y-0",
            leave: "transition-transform duration-150",
            leaveFrom: "translate-y-0",
            leaveTo: "translate-y-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "w-[26px] h-6 flex lg:hidden items-center justify-center absolute z-20 right-0 -top-3",
                    onClick: ()=>setIsShowContentOnMobile(!isShowContentOnMobile),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-6 h-6 bg-white dark:bg-neutral-800 flex items-center justify-center  rounded-full - nc-google-shadow",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ChevronUpIcon, {
                            className: `w-4 h-4 ${isShowContentOnMobile ? "rotate-180" : ""}`
                        })
                    })
                }),
                renderDurationTime(),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "h-16 sm:h-20 w-full flex justify-between",
                    children: [
                        renderLeft(),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden lg:flex flex-grow px-5 items-center justify-center",
                            children: isError ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "flex pl-2 text-xs lg:text-sm text-red-500",
                                children: "This track not found or not supported."
                            }) : renderContentCenter()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "ml-2 flex-shrink-0 lg:basis-52 lg:flex-grow flex items-center justify-end",
                            children: [
                                renderVolumn(),
                                renderTiming(),
                                renderButtonControlMobile(),
                                renderClose()
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                    className: "h-16 flex lg:hidden justify-center border-t border-neutral-300 dark:border-neutral-700 transition-all z-0 ",
                    enter: "duration-150",
                    enterFrom: "-mb-16",
                    enterTo: "mb-0",
                    leave: "duration-150",
                    leaveFrom: "mb-0",
                    leaveTo: "-mb-16",
                    as: "div",
                    show: isShowContentOnMobile,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-grow items-center justify-evenly text-neutral-500 dark:text-neutral-300 max-w-xs sm:max-w-sm md:max-w-md ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-12 h-12 flex items-center justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "mt-0.5",
                                    onClick: ()=>{
                                        if (!volume) {
                                            handleSetMuted(false);
                                            handleVolumeChange(0.8);
                                            return;
                                        }
                                        handleSetMuted(!muted);
                                    },
                                    children: [
                                        !!volume && !muted && volume >= 0.5 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            className: "w-5 h-5 flex-shrink-0",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M2 10V14C2 16 3 17 5 17H6.43C6.8 17 7.17 17.11 7.49 17.3L10.41 19.13C12.93 20.71 15 19.56 15 16.59V7.41003C15 4.43003 12.93 3.29003 10.41 4.87003L7.49 6.70003C7.17 6.89003 6.8 7.00003 6.43 7.00003H5C3 7.00003 2 8.00003 2 10Z",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M18 8C19.78 10.37 19.78 13.63 18 16",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M19.83 5.5C22.72 9.35 22.72 14.65 19.83 18.5",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            ]
                                        }),
                                        !!volume && !muted && volume < 0.5 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            className: "w-5 h-5 flex-shrink-0",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M3.32996 10V14C3.32996 16 4.32996 17 6.32996 17H7.75996C8.12996 17 8.49996 17.11 8.81996 17.3L11.74 19.13C14.26 20.71 16.33 19.56 16.33 16.59V7.41003C16.33 4.43003 14.26 3.29003 11.74 4.87003L8.81996 6.70003C8.49996 6.89003 8.12996 7.00003 7.75996 7.00003H6.32996C4.32996 7.00003 3.32996 8.00003 3.32996 10Z",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M19.33 8C21.11 10.37 21.11 13.63 19.33 16",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            ]
                                        }),
                                        (!volume || muted) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            className: "w-5 h-5 flex-shrink-0",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M15 8.37003V7.41003C15 4.43003 12.93 3.29003 10.41 4.87003L7.49 6.70003C7.17 6.89003 6.8 7.00003 6.43 7.00003H5C3 7.00003 2 8.00003 2 10V14C2 16 3 17 5 17H7",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M10.41 19.13C12.93 20.71 15 19.56 15 16.59V12.95",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M18.81 9.41992C19.71 11.5699 19.44 14.0799 18 15.9999",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M21.15 7.80005C22.62 11.29 22.18 15.37 19.83 18.5",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M22 2L2 22",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            renderBackwards10S(),
                            renderButtonControl(),
                            renderForwards15S(),
                            rederSpeed()
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const MusicPlayer_PlayerContent = (PlayerContent);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(55089);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ./node_modules/react-player/lib/index.js
var lib = __webpack_require__(63597);
;// CONCATENATED MODULE: ./src/components/MusicPlayer/MusicPlayer.tsx






const MusicPlayer = ({})=>{
    const playerRef = (0,react_.useRef)(null);
    const { muted , playbackRate , playing , setDuration , setLoaded , setMuted , setPlayed , setPlaying , setVolume , setplaybackRate , volume , playedSeconds , setPlayedSeconds , setLoadedSeconds , url  } = (0,useMusicPlayer/* useMusicPlayer */.c)();
    // STATE
    const [seeking, setSeeking] = (0,react_.useState)(false);
    const [isError, setIsError] = (0,react_.useState)(false);
    const [isRender, setIsRender] = (0,react_.useState)(false);
    //
    (0,react_.useEffect)(()=>{
        setIsRender(true);
    }, []);
    //
    const handleSeekMouseUp = (e)=>{
        setSeeking(false);
        playerRef?.current?.seekTo(parseFloat(e.currentTarget.value));
    };
    const handleSeekMouseDown = ()=>{
        setSeeking(true);
    };
    const handleSeekChange = (e)=>{
        setPlayed(parseFloat(e.target.value));
    };
    const handleVolumeChange = (e)=>{
        setVolume(e);
    };
    const handleSetPlaybackRate = (e)=>{
        setplaybackRate(e);
    };
    const onClickBackwards10Sec = ()=>{
        playerRef?.current?.seekTo(playedSeconds - 10, "seconds");
    };
    const onClickForwarkds15Sec = ()=>{
        playerRef?.current?.seekTo(playedSeconds + 15, "seconds");
    };
    const handlePlay = ()=>{
        setPlaying(true);
    };
    const handlePause = ()=>{
        setPlaying(false);
    };
    const handlePlayPause = ()=>{
        setPlaying(!playing);
    };
    const handleEnded = ()=>{
        setPlaying(false);
    };
    const handleProgress = (state)=>{
        // We only want to update time slider if we are not currently seeking
        if (!seeking) {
            setLoaded(state.loaded);
            setPlayed(state.played);
            setPlayedSeconds(state.playedSeconds);
            setLoadedSeconds(state.loadedSeconds);
        }
    };
    const handleDuration = (duration)=>{
        setDuration(duration);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `nc-MusicPlayer fixed bottom-0 inset-x-0 flex z-30`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MusicPlayer_PlayerContent, {
                isError: isError,
                handleSetMuted: (isMuted)=>setMuted(isMuted),
                handleSeekMouseUp: handleSeekMouseUp,
                handleSeekMouseDown: handleSeekMouseDown,
                handleSeekChange: handleSeekChange,
                handleVolumeChange: handleVolumeChange,
                handleSetPlaybackRate: handleSetPlaybackRate,
                handleClickBackwards10Sec: lodash_default().debounce(onClickBackwards10Sec, 200),
                handleClickForwards15Sec: lodash_default().debounce(onClickForwarkds15Sec, 200)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed top-0 left-0 w-1 h-1 -z-50 opacity-0 overflow-hidden invisible",
                children: isRender ? /*#__PURE__*/ jsx_runtime_.jsx(lib/* default */.Z, {
                    ref: playerRef,
                    className: "react-player",
                    width: "100%",
                    height: "100%",
                    url: url || "",
                    playing: playing,
                    controls: true,
                    playbackRate: playbackRate,
                    volume: volume,
                    muted: muted,
                    onReady: ()=>console.log("onReady"),
                    onStart: ()=>setIsError(false),
                    onPlay: handlePlay,
                    onPause: handlePause,
                    onBuffer: ()=>console.log("onBuffer"),
                    onSeek: (e)=>console.log("onSeek", e),
                    onEnded: handleEnded,
                    onError: (e)=>setIsError(true),
                    onProgress: handleProgress,
                    onDuration: handleDuration
                }) : null
            })
        ]
    });
};
/* harmony default export */ const MusicPlayer_MusicPlayer = (MusicPlayer);


/***/ }),

/***/ 45371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const VerifyIcon = ({ className ="ml-1" , iconClass ="w-5 h-5"  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            className: iconClass,
            viewBox: "0 0 17 17",
            fill: "none",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M7.66691 2.62178C8.12691 2.22845 8.88025 2.22845 9.34691 2.62178L10.4002 3.52845C10.6002 3.70178 10.9736 3.84178 11.2402 3.84178H12.3736C13.0802 3.84178 13.6602 4.42178 13.6602 5.12845V6.26178C13.6602 6.52178 13.8002 6.90178 13.9736 7.10178L14.8802 8.15512C15.2736 8.61512 15.2736 9.36845 14.8802 9.83512L13.9736 10.8884C13.8002 11.0884 13.6602 11.4618 13.6602 11.7284V12.8618C13.6602 13.5684 13.0802 14.1484 12.3736 14.1484H11.2402C10.9802 14.1484 10.6002 14.2884 10.4002 14.4618L9.34691 15.3684C8.88691 15.7618 8.13358 15.7618 7.66691 15.3684L6.61358 14.4618C6.41358 14.2884 6.04025 14.1484 5.77358 14.1484H4.62025C3.91358 14.1484 3.33358 13.5684 3.33358 12.8618V11.7218C3.33358 11.4618 3.19358 11.0884 3.02691 10.8884L2.12691 9.82845C1.74025 9.36845 1.74025 8.62178 2.12691 8.16178L3.02691 7.10178C3.19358 6.90178 3.33358 6.52845 3.33358 6.26845V5.12178C3.33358 4.41512 3.91358 3.83512 4.62025 3.83512H5.77358C6.03358 3.83512 6.41358 3.69512 6.61358 3.52178L7.66691 2.62178Z",
                    fill: "#38BDF8",
                    stroke: "#38BDF8",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M6.08691 8.98833L7.69358 10.6017L10.9136 7.375",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifyIcon);


/***/ }),

/***/ 2898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ai": () => (/* binding */ nftsAbstracts),
/* harmony export */   "Bj": () => (/* binding */ featuredImgs),
/* harmony export */   "CJ": () => (/* binding */ _getImgHightQualityRd),
/* harmony export */   "Gd": () => (/* binding */ _getTitleRd),
/* harmony export */   "IH": () => (/* binding */ personNames),
/* harmony export */   "Jf": () => (/* binding */ avatarImgs),
/* harmony export */   "Nu": () => (/* binding */ _getImgRd),
/* harmony export */   "PD": () => (/* binding */ aTitles),
/* harmony export */   "Pg": () => (/* binding */ imgHigtQualitys),
/* harmony export */   "jn": () => (/* binding */ nftsLargeImgs),
/* harmony export */   "kv": () => (/* binding */ _getPersonNameRd),
/* harmony export */   "lh": () => (/* binding */ _getAvatarRd),
/* harmony export */   "oW": () => (/* binding */ nftsCatImgs),
/* harmony export */   "wY": () => (/* binding */ nftsImgs)
/* harmony export */ });
/* unused harmony exports tagNames, nftTitles, _getTagNameRd */
/* harmony import */ var _images_avatars_Image_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91864);
/* harmony import */ var _images_avatars_Image_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24121);
/* harmony import */ var _images_avatars_Image_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12164);
/* harmony import */ var _images_avatars_Image_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19289);
/* harmony import */ var _images_avatars_Image_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72208);
/* harmony import */ var _images_avatars_Image_6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63482);
/* harmony import */ var _images_avatars_Image_7_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28900);
/* harmony import */ var _images_avatars_Image_8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31113);
/* harmony import */ var _images_avatars_Image_9_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36607);
/* harmony import */ var _images_avatars_Image_10_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82523);
/* harmony import */ var _images_nfts_1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59150);
/* harmony import */ var _images_nfts_2_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99470);
/* harmony import */ var _images_nfts_3_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61032);
/* harmony import */ var _images_nfts_4_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57211);
/* harmony import */ var _images_nfts_5_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7242);
/* harmony import */ var _images_nfts_6_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(45288);
/* harmony import */ var _images_nfts_7_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(31603);
/* harmony import */ var _images_nfts_8_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(75146);
/* harmony import */ var _images_nfts_9_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(87751);
/* harmony import */ var _images_nfts_10_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88391);
/* harmony import */ var _images_nfts_11_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(44210);
/* harmony import */ var _images_nfts_12_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(21885);
/* harmony import */ var _images_nfts_13_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(76956);
/* harmony import */ var _images_nfts_14_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(77410);
/* harmony import */ var _images_nfts_15_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(32155);
/* harmony import */ var _images_nfts_16_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(34314);
/* harmony import */ var _images_nfts_large1_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(3906);
/* harmony import */ var _images_nfts_large2_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(25190);
/* harmony import */ var _images_nfts_large3_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(2693);
/* harmony import */ var _images_nfts_cat1_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(28644);
/* harmony import */ var _images_nfts_cat2_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(44188);
/* harmony import */ var _images_nfts_cat3_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(69813);
/* harmony import */ var _images_nfts_cat4_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(59910);
/* harmony import */ var _images_nfts_cat5_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(1603);
/* harmony import */ var _images_nfts_cat6_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(18216);










//



















//






const nftsCatImgs = [
    _images_nfts_cat1_png__WEBPACK_IMPORTED_MODULE_29__["default"],
    _images_nfts_cat3_png__WEBPACK_IMPORTED_MODULE_31__["default"],
    _images_nfts_cat4_png__WEBPACK_IMPORTED_MODULE_32__["default"],
    _images_nfts_cat6_png__WEBPACK_IMPORTED_MODULE_34__["default"],
    _images_nfts_cat2_png__WEBPACK_IMPORTED_MODULE_30__["default"],
    _images_nfts_cat5_png__WEBPACK_IMPORTED_MODULE_33__["default"]
];
const nftsLargeImgs = [
    _images_nfts_large1_png__WEBPACK_IMPORTED_MODULE_26__["default"],
    _images_nfts_large2_png__WEBPACK_IMPORTED_MODULE_27__["default"],
    _images_nfts_large3_png__WEBPACK_IMPORTED_MODULE_28__["default"]
];
const nftsImgs = [
    _images_nfts_1_png__WEBPACK_IMPORTED_MODULE_10__["default"],
    _images_nfts_2_png__WEBPACK_IMPORTED_MODULE_11__["default"],
    _images_nfts_3_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    _images_nfts_4_png__WEBPACK_IMPORTED_MODULE_13__["default"],
    _images_nfts_5_png__WEBPACK_IMPORTED_MODULE_14__["default"],
    _images_nfts_6_png__WEBPACK_IMPORTED_MODULE_15__["default"],
    _images_nfts_7_png__WEBPACK_IMPORTED_MODULE_16__["default"],
    _images_nfts_8_png__WEBPACK_IMPORTED_MODULE_17__["default"],
    _images_nfts_9_png__WEBPACK_IMPORTED_MODULE_18__["default"],
    _images_nfts_10_png__WEBPACK_IMPORTED_MODULE_19__["default"],
    _images_nfts_11_png__WEBPACK_IMPORTED_MODULE_20__["default"],
    _images_nfts_12_png__WEBPACK_IMPORTED_MODULE_21__["default"],
    _images_nfts_13_png__WEBPACK_IMPORTED_MODULE_22__["default"],
    _images_nfts_14_png__WEBPACK_IMPORTED_MODULE_23__["default"],
    _images_nfts_15_png__WEBPACK_IMPORTED_MODULE_24__["default"],
    _images_nfts_16_png__WEBPACK_IMPORTED_MODULE_25__["default"]
];
const nftsAbstracts = [
    "https://images.pexels.com/photos/3631430/pexels-photo-3631430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/2179483/pexels-photo-2179483.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1556139966-56c3df1ddc63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1557264305-7e2764da873b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1560015534-cee980ba7e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1573096108468-702f6014ef28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1483792879322-696964487a67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1545898679-1d7a7701e2fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1629946832022-c327f74956e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1627037558426-c2d07beda3af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.pexels.com/photos/4800161/pexels-photo-4800161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/4765691/pexels-photo-4765691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1620121684840-edffcfc4b878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1643916861364-02e63ce3e52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMjI1NTc4Nnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1532965119518-c0450e1bb4da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MTIyNTU3ODZ8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1620503374956-c942862f0372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1621193793262-4127d9855c91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1626282874430-c11ae32d2898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1625527575307-616f0bb84ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
];
const avatarImgs = [
    _images_avatars_Image_1_png__WEBPACK_IMPORTED_MODULE_0__["default"],
    _images_avatars_Image_2_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    _images_avatars_Image_3_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    _images_avatars_Image_4_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    _images_avatars_Image_5_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    _images_avatars_Image_6_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    _images_avatars_Image_7_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    _images_avatars_Image_8_png__WEBPACK_IMPORTED_MODULE_7__["default"],
    _images_avatars_Image_9_png__WEBPACK_IMPORTED_MODULE_8__["default"],
    _images_avatars_Image_10_png__WEBPACK_IMPORTED_MODULE_9__["default"]
];
const personNames = [
    "Kailey Greer",
    "Karli Costa",
    "Camren Banes",
    "Belinda Rer",
    "Jameson Dick",
    "Giada Mann",
    "Evie Osborn",
    "Juliet Macp",
    "Charlize Ray",
    "Amaris Pitt",
    "Arnav Moris",
    "Malakai Cey",
    "Nevaeh Henry",
    "Mireya Roman",
    "Anthony Wyat",
    "Mike Orr",
    "Azul Hull",
    "Derick Hub"
];
const tagNames = (/* unused pure expression or super */ null && ([
    "Life",
    "Travel",
    "Music",
    "Beauty",
    "Beach",
    "Hotdog",
    "Car",
    "Bike",
    "Wordpress",
    "Php",
    "Javascript",
    "Vue",
    "Reactjs",
    "Androind"
]));
const featuredImgs = [
    "https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/374876/pexels-photo-374876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
];
const imgHigtQualitys = [
    "https://images.pexels.com/photos/6168061/pexels-photo-6168061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/5913391/pexels-photo-5913391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/5913170/pexels-photo-5913170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/4617820/pexels-photo-4617820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/6136086/pexels-photo-6136086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/4443477/pexels-photo-4443477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/4273989/pexels-photo-4273989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/4806731/pexels-photo-4806731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/5499131/pexels-photo-5499131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];
const aTitles = [
    "CloneF #1156",
    "CloneF #1157",
    "CloneF #1158",
    "CloneF #1159",
    "CloneF #1160",
    "CloneF #1161",
    "CloneF #1162",
    "CloneF #1163",
    "CloneF #1164",
    "CloneF #1165",
    "CloneF #1166",
    "CloneF #1167",
    "CloneF #1168",
    "CloneF #1169",
    "CloneF #1210",
    "CloneF #1211",
    "CloneF #1212",
    "CloneF #1213",
    "CloneF #1214",
    "CloneF #1215",
    "CloneF #1216",
    "CloneF #1217"
];
const nftTitles = (/* unused pure expression or super */ null && (aTitles));
function _getTitleRd() {
    return aTitles[Math.floor(Math.random() * aTitles.length)];
}
function _getPersonNameRd() {
    return personNames[Math.floor(Math.random() * personNames.length)];
}
function _getImgRd() {
    return featuredImgs[Math.floor(Math.random() * featuredImgs.length)];
}
function _getImgHightQualityRd() {
    return imgHigtQualitys[Math.floor(Math.random() * imgHigtQualitys.length)];
}
function _getTagNameRd() {
    return tagNames[Math.floor(Math.random() * tagNames.length)];
}
function _getAvatarRd() {
    return avatarImgs[Math.floor(Math.random() * avatarImgs.length)];
}



/***/ }),

/***/ 92779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetRandomData)
/* harmony export */ });
/* harmony import */ var _contains_fakeData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2898);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useGetRandomData() {
    const uniqueId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    const [imgRd, setImgRd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_contains_fakeData__WEBPACK_IMPORTED_MODULE_0__/* .featuredImgs[0] */ .Bj[0]);
    const [avatarRd, setAvatarRd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_contains_fakeData__WEBPACK_IMPORTED_MODULE_0__/* .avatarImgs[0] */ .Jf[0]);
    const [imgHigtQualitysRd, setImgHigtQualitysRd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_contains_fakeData__WEBPACK_IMPORTED_MODULE_0__/* .imgHigtQualitys[0] */ .Pg[0]);
    const [titleRd, setTitleRd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_contains_fakeData__WEBPACK_IMPORTED_MODULE_0__/* .aTitles[0] */ .PD[0]);
    const [nftImageRd, setNftImageRd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [nftAudioUrlRl, setNftAudioUrlRl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("https://chisnghiax.com/ncmaz_mp3/Electro-Light_-_Symbolism_NCS_ReleaseMP3_160K.mp3");
    const [nftsAbstractRd, setNftsAbstractRd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_contains_fakeData__WEBPACK_IMPORTED_MODULE_0__/* .nftsAbstracts[0] */ .Ai[0]);
    const [personNameRd, setPersonNameRd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_contains_fakeData__WEBPACK_IMPORTED_MODULE_0__/* .personNames[0] */ .IH[0]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setImgRd(_contains_fakeData__WEBPACK_IMPORTED_MODULE_0__/* ._getImgRd */ .Nu);
        setAvatarRd(_contains_fakeData__WEBPACK_IMPORTED_MODULE_0__/* ._getAvatarRd */ .lh);
        setImgHigtQualitysRd(_contains_fakeData__WEBPACK_IMPORTED_MODULE_0__/* ._getImgHightQualityRd */ .CJ);
        setPersonNameRd(_contains_fakeData__WEBPACK_IMPORTED_MODULE_0__/* ._getPersonNameRd */ .kv);
        setTitleRd(_contains_fakeData__WEBPACK_IMPORTED_MODULE_0__/* ._getTitleRd */ .Gd);
        setNftImageRd(_contains_fakeData__WEBPACK_IMPORTED_MODULE_0__/* .nftsImgs */ .wY[Math.floor(Math.random() * _contains_fakeData__WEBPACK_IMPORTED_MODULE_0__/* .nftsImgs.length */ .wY.length)]);
        setNftsAbstractRd(_contains_fakeData__WEBPACK_IMPORTED_MODULE_0__/* .nftsAbstracts */ .Ai[Math.floor(Math.random() * _contains_fakeData__WEBPACK_IMPORTED_MODULE_0__/* .nftsAbstracts.length */ .Ai.length)]);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setNftAudioUrlRl("https://chisnghiax.com/ncmaz_mp3/Electro-Light_-_Symbolism_NCS_ReleaseMP3_160K.mp3?" + uniqueId);
    }, [
        uniqueId
    ]);
    return {
        imgRd,
        avatarRd,
        imgHigtQualitysRd,
        titleRd,
        personNameRd,
        nftImageRd,
        nftsAbstractRd,
        nftAudioUrlRl
    };
}


/***/ }),

/***/ 7742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ useMusicPlayer)
/* harmony export */ });
/* harmony import */ var react_hooks_global_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69709);

const initialState = {
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    playedSeconds: 0,
    loaded: 0,
    duration: 0,
    loadedSeconds: 0,
    playbackRate: 1.0,
    url: ""
};
const { useGlobalState  } = (0,react_hooks_global_state__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalState */ .r)(initialState);
const useMusicPlayer = ()=>{
    const [playbackRate, setplaybackRate] = useGlobalState("playbackRate");
    const [duration, setDuration] = useGlobalState("duration");
    const [loaded, setLoaded] = useGlobalState("loaded");
    const [played, setPlayed] = useGlobalState("played");
    const [muted, setMuted] = useGlobalState("muted");
    const [volume, setVolume] = useGlobalState("volume");
    const [playing, setPlaying] = useGlobalState("playing");
    const [url, setUrl] = useGlobalState("url");
    const [loadedSeconds, setLoadedSeconds] = useGlobalState("loadedSeconds");
    const [playedSeconds, setPlayedSeconds] = useGlobalState("playedSeconds");
    return {
        duration,
        playedSeconds,
        setPlayedSeconds,
        loadedSeconds,
        setLoadedSeconds,
        setDuration,
        loaded,
        setLoaded,
        played,
        setPlayed,
        muted,
        setMuted,
        volume,
        setVolume,
        playing,
        setPlaying,
        playbackRate,
        setplaybackRate,
        url,
        setUrl
    };
};


/***/ }),

/***/ 70367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Avatar_Avatar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/contains/contants.ts
const avatarColors = [
    "#ffdd00",
    "#fbb034",
    "#ff4c4c",
    "#c1d82f",
    "#f48924",
    "#7ac143",
    "#30c39e",
    "#06BCAE",
    "#0695BC",
    "#037ef3",
    "#146eb4",
    "#8e43e7",
    "#ea1d5d",
    "#fc636b",
    "#ff6319",
    "#e01f3d",
    "#a0ac48",
    "#00d1b2",
    "#472f92",
    "#388ed1",
    "#a6192e",
    "#4a8594",
    "#7B9FAB",
    "#1393BD",
    "#5E13BD",
    "#E208A7"
];


// EXTERNAL MODULE: ./src/components/VerifyIcon.tsx
var VerifyIcon = __webpack_require__(45371);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/hooks/useGetRandomData.ts
var useGetRandomData = __webpack_require__(92779);
;// CONCATENATED MODULE: ./src/shared/Avatar/Avatar.tsx






const Avatar = ({ containerClassName ="ring-1 ring-white dark:ring-neutral-900" , sizeClass ="h-6 w-6 text-sm" , radius ="rounded-full" , imgUrl ="" , userName , hasChecked , hasCheckedClass ="w-4 h-4 bottom-1 -right-0.5"  })=>{
    const { avatarRd  } = (0,useGetRandomData/* default */.Z)();
    const url = imgUrl || avatarRd;
    const name = userName || "John Doe";
    const _setBgColor = (name)=>{
        const backgroundIndex = Math.floor(name.charCodeAt(0) % avatarColors.length);
        return avatarColors[backgroundIndex];
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner ${radius} ${sizeClass} ${containerClassName}`,
        style: {
            backgroundColor: url ? undefined : _setBgColor(name)
        },
        children: [
            url && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                fill: true,
                sizes: "100px",
                className: `absolute inset-0 w-full h-full object-cover ${radius}`,
                src: url,
                alt: name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "wil-avatar__name",
                children: name[0]
            }),
            hasChecked && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: `  text-white  absolute  ${hasCheckedClass}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(VerifyIcon/* default */.Z, {
                    className: ""
                })
            })
        ]
    });
};
/* harmony default export */ const Avatar_Avatar = (Avatar);


/***/ }),

/***/ 32401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58964);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_twFocusClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29943);




const ButtonClose = ({ className ="" , IconclassName ="w-5 h-5" , onClick =()=>{}  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: `w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 ${className} ` + (0,_utils_twFocusClass__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(),
        onClick: onClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "sr-only",
                children: "Close"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__, {
                className: IconclassName
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonClose);


/***/ }),

/***/ 78035:
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
/* harmony import */ var _utils_twFocusClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29943);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




const Button = ({ className ="text-neutral-700 dark:text-neutral-200 disabled:cursor-not-allowed" , translate ="" , sizeClass ="py-3 px-4 sm:py-3.5 sm:px-6" , fontSize ="text-sm sm:text-base font-medium" , disabled =false , href , children , targetBlank , type , loading , onClick =()=>{}  })=>{
    const CLASSES = `nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors ${fontSize} ${sizeClass} ${translate} ${className} ` + (0,_utils_twFocusClass__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(true);
    const _renderLoading = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            className: "animate-spin -ml-1 mr-3 h-5 w-5",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "3"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                })
            ]
        });
    };
    if (!!href) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: href,
            className: `${CLASSES} `,
            onClick: onClick,
            children: children || `This is Link`
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        disabled: disabled || loading,
        className: `${CLASSES}`,
        onClick: onClick,
        type: type,
        children: [
            loading && _renderLoading(),
            children || `This is Button`
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 34255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78035);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const ButtonPrimary = ({ className ="" , ...args })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: `ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${className}`,
        ...args
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonPrimary);


/***/ }),

/***/ 21180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78035);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const ButtonSecondary = ({ className =" " , ...args })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: `ttnc-ButtonSecondary border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 ${className}`,
        ...args
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonSecondary);


/***/ }),

/***/ 22603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// eslint-disable-next-line react/display-name
const Input = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className ="" , sizeClass ="h-11 px-4 py-3" , fontClass ="text-sm font-normal" , rounded ="rounded-2xl" , children , type ="text" , ...args }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        ref: ref,
        type: type,
        className: `block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 ${rounded} ${fontClass} ${sizeClass} ${className}`,
        ...args
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ 7794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Logo_Logo)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/images/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.87226d72.svg","height":51,"width":197,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/logo-light.svg
/* harmony default export */ const logo_light = ({"src":"/_next/static/media/logo-light.504e98be.svg","height":51,"width":197,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/shared/Logo/Logo.tsx






const Logo = ({ img =logo , imgLight =logo_light , className ="flex-shrink-0"  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: "/",
        className: `ttnc-logo inline-block text-slate-600 ${className}`,
        children: [
            img ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: `block h-8 sm:h-10 w-auto ${imgLight ? "dark:hidden" : ""}`,
                src: img,
                alt: "Logo",
                sizes: "200px",
                priority: true
            }) : "Logo Here",
            imgLight && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: "hidden h-8 sm:h-10 w-auto dark:block",
                src: imgLight,
                alt: "Logo-Light",
                sizes: "200px",
                priority: true
            })
        ]
    });
};
/* harmony default export */ const Logo_Logo = (Logo);


/***/ }),

/***/ 63854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const NcImage = ({ containerClassName ="relative" , alt ="nc-imgs" , src , fill , className ="object-cover w-full h-full" , sizes ="(max-width: 600px) 480px, 800px" , ...args })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: containerClassName,
        children: src ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: className,
            alt: alt,
            sizes: sizes,
            ...args,
            src: src,
            fill: fill
        }) : null
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NcImage);


/***/ }),

/***/ 73062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SocialsList_SocialsList)
});

// UNUSED EXPORTS: SOCIALS_2

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/shared/SocialsShare/SocialsShare.tsx


const socials = [
    {
        id: "Facebook",
        name: "Facebook",
        icon: `<svg class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_17_61)">
  <path d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z" fill="currentColor"/>
  </g>
  </svg>
  `,
        href: "#"
    },
    {
        id: "Twitter",
        name: "Twitter",
        icon: `<svg class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_17_80)">
  <path d="M15.1003 43.5C33.2091 43.5 43.1166 28.4935 43.1166 15.4838C43.1166 15.0619 43.1072 14.6307 43.0884 14.2088C45.0158 12.815 46.679 11.0886 48 9.11066C46.205 9.90926 44.2993 10.4308 42.3478 10.6575C44.4026 9.42588 45.9411 7.491 46.6781 5.21159C44.7451 6.35718 42.6312 7.16528 40.4269 7.60128C38.9417 6.02318 36.978 4.97829 34.8394 4.62816C32.7008 4.27803 30.5064 4.64216 28.5955 5.66425C26.6846 6.68635 25.1636 8.30947 24.2677 10.2827C23.3718 12.2559 23.1509 14.4693 23.6391 16.5807C19.725 16.3842 15.8959 15.3675 12.4 13.5963C8.90405 11.825 5.81939 9.33893 3.34594 6.29909C2.0888 8.46655 1.70411 11.0314 2.27006 13.4722C2.83601 15.9131 4.31013 18.047 6.39281 19.44C4.82926 19.3904 3.29995 18.9694 1.93125 18.2119V18.3338C1.92985 20.6084 2.7162 22.8132 4.15662 24.5736C5.59704 26.334 7.60265 27.5412 9.8325 27.99C8.38411 28.3863 6.86396 28.4441 5.38969 28.1588C6.01891 30.1149 7.24315 31.8258 8.89154 33.0527C10.5399 34.2796 12.5302 34.9613 14.5847 35.0025C11.0968 37.7423 6.78835 39.2283 2.35313 39.2213C1.56657 39.2201 0.780798 39.1719 0 39.0769C4.50571 41.9676 9.74706 43.5028 15.1003 43.5Z" fill="currentColor"/>
  </g>
  </svg>
  `,
        href: "#"
    },
    {
        id: "Linkedin",
        name: "Linkedin",
        icon: `<svg class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_17_68)">
  <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="currentColor"/>
  </g>
  </svg>
  `,
        href: "#"
    },
    {
        id: "Instagram",
        name: "Instagram",
        icon: `<svg class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_17_63)">
  <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="currentColor"/>
  <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="currentColor"/>
  <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="currentColor"/>
  </g>
  </svg>
  `,
        href: "#"
    }
];
const SOCIALS_DATA = socials;
const SocialsShare = ({ className ="grid gap-[6px]" , itemClass ="w-7 h-7 text-base hover:bg-neutral-100"  })=>{
    const renderItem = (item, index)=>{
        return /*#__PURE__*/ _jsx("a", {
            href: item.href,
            className: `rounded-full leading-none flex items-center justify-center text-neutral-6000 ${itemClass}`,
            title: `Share on ${item.name}`,
            children: /*#__PURE__*/ _jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: item.icon
                }
            })
        }, index);
    };
    return /*#__PURE__*/ _jsx("div", {
        className: `nc-SocialsShare ${className}`,
        "data-nc-id": "SocialsShare",
        children: socials.map(renderItem)
    });
};
/* harmony default export */ const SocialsShare_SocialsShare = ((/* unused pure expression or super */ null && (SocialsShare)));

;// CONCATENATED MODULE: ./src/shared/SocialsList/SocialsList.tsx



const socialsDemo = SOCIALS_DATA;
const SOCIALS_2 = (/* unused pure expression or super */ null && (socialsDemo));
const SocialsList = ({ className ="" , itemClass ="block" , socials =socialsDemo  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: `nc-SocialsList flex space-x-3 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`,
        children: socials.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: `${itemClass}`,
                href: item.href,
                target: "_blank",
                rel: "noopener noreferrer",
                title: item.name,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: item.icon || ""
                    }
                })
            }, i))
    });
};
/* harmony default export */ const SocialsList_SocialsList = (SocialsList);


/***/ }),

/***/ 29943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ twFocusClass)
/* harmony export */ });
function twFocusClass(hasRing = false) {
    if (!hasRing) {
        return "focus:outline-none";
    }
    return "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0";
}


/***/ }),

/***/ 75553:
/***/ (() => {



/***/ }),

/***/ 18600:
/***/ (() => {



/***/ })

};
;