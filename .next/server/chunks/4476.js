exports.id = 4476;
exports.ids = [4476];
exports.modules = {

/***/ 27490:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 21437))

/***/ }),

/***/ 11875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(21399);
module.exports = createProxy("C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\app\\author\\layout.tsx");


/***/ }),

/***/ 21437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/images/nfts/authorBanner.png
/* harmony default export */ const authorBanner = ({"src":"/_next/static/media/authorBanner.e0c61a31.png","height":498,"width":2880,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAIAAABsYngUAAAAIklEQVR42mN8tfvCZ2aOO/94X/Jx8//88YeNhZWHhZ2JEQCcdQmD+CYHngAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":1});
// EXTERNAL MODULE: ./src/shared/NcImage/NcImage.tsx
var NcImage = __webpack_require__(63854);
// EXTERNAL MODULE: ./src/contains/fakeData.ts
var fakeData = __webpack_require__(2898);
// EXTERNAL MODULE: ./src/components/VerifyIcon.tsx
var VerifyIcon = __webpack_require__(45371);
// EXTERNAL MODULE: ./src/shared/SocialsList/SocialsList.tsx + 1 modules
var SocialsList = __webpack_require__(73062);
// EXTERNAL MODULE: ./src/components/NftMoreDropdown.tsx + 4 modules
var NftMoreDropdown = __webpack_require__(13175);
// EXTERNAL MODULE: ./src/components/ButtonDropDownShare.tsx
var ButtonDropDownShare = __webpack_require__(96615);
// EXTERNAL MODULE: ./src/components/FollowButton.tsx
var FollowButton = __webpack_require__(88552);
;// CONCATENATED MODULE: ./src/components/BackgroundSection/BackgroundSection.tsx


const BackgroundSection = ({ className ="bg-neutral-100/70 dark:bg-black/20"  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `nc-BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 ${className}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "sr-only",
            children: "BackgroundSection"
        })
    });
};
/* harmony default export */ const BackgroundSection_BackgroundSection = (BackgroundSection);

// EXTERNAL MODULE: ./src/components/SectionGridAuthorBox/SectionGridAuthorBox.tsx + 4 modules
var SectionGridAuthorBox = __webpack_require__(11276);
// EXTERNAL MODULE: ./src/images/rightLargeImg.png
var rightLargeImg = __webpack_require__(24355);
// EXTERNAL MODULE: ./src/images/rightLargeImgDark.png
var rightLargeImgDark = __webpack_require__(86836);
// EXTERNAL MODULE: ./src/shared/Logo/Logo.tsx + 2 modules
var Logo = __webpack_require__(7794);
;// CONCATENATED MODULE: ./src/components/SectionBecomeAnAuthor/SectionBecomeAnAuthor.tsx






const SectionBecomeAnAuthor = ({ className =""  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {
                        className: "w-28"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: "font-normal text-3xl sm:text-4xl xl:text-6xl mt-6 sm:mt-10 !leading-[1.112] tracking-tight",
                        children: [
                            "Tocamos la materia ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "y la llenamos de ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "esencia de vida."
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "block mt-6 text-neutral-500 dark:text-neutral-400 ",
                        children: "Esta plataforma esta pensada como un prisma: capta energ\xeda proveniente del dinero (transacciones ejecutadas a trav\xe9s del token) y direcciona su resultado hacia diferentes prop\xf3sitos de bienestar. Cada una de estas acciones (transacciones) es una apuesta por la consciencia y el despertar de luz de la humanidad. Cada uno de estos flujos es el todo y la parte del prop\xf3sito superior: servir a la intenci\xf3n divina de tocar la materia y llenarla de esencia de vida."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex-grow",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NcImage/* default */.Z, {
                        containerClassName: "block dark:hidden",
                        src: rightLargeImg["default"]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NcImage/* default */.Z, {
                        containerClassName: "hidden dark:block",
                        src: rightLargeImgDark["default"]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const SectionBecomeAnAuthor_SectionBecomeAnAuthor = (SectionBecomeAnAuthor);

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/listbox/listbox.js + 1 modules
var listbox = __webpack_require__(7412);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 3 modules
var transition = __webpack_require__(40846);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/CheckIcon.js
var CheckIcon = __webpack_require__(19228);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/ChevronDownIcon.js
var ChevronDownIcon = __webpack_require__(93524);
// EXTERNAL MODULE: ./src/shared/Button/Button.tsx
var Button = __webpack_require__(78035);
;// CONCATENATED MODULE: ./src/components/ButtonDropdown.tsx




const ButtonDropdown = ({ translate , children , ...args })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button["default"], {
        className: "text-neutral-700 border border-neutral-200 dark:text-neutral-200 dark:border-neutral-700",
        sizeClass: "px-4 py-2 sm:py-2.5",
        fontSize: "text-sm",
        translate: "hover:border-neutral-300 w-full justify-between",
        ...args,
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(ChevronDownIcon, {
                className: "w-4 h-4 ml-2 -mr-1 opacity-70",
                "aria-hidden": "true"
            })
        ]
    });
};
/* harmony default export */ const components_ButtonDropdown = (ButtonDropdown);

;// CONCATENATED MODULE: ./src/components/ArchiveFilterListBox.tsx






const lists = [
    {
        name: "Most Recent"
    },
    {
        name: "Curated by Admin"
    },
    {
        name: "Most Appreciated"
    },
    {
        name: "Most Discussed"
    },
    {
        name: "Most Viewed"
    }
];
const ArchiveFilterListBox = ({ className =""  })=>{
    const [selected, setSelected] = (0,react_.useState)(lists[0]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `nc-ArchiveFilterListBox ${className}`,
        "data-nc-id": "ArchiveFilterListBox",
        children: /*#__PURE__*/ jsx_runtime_.jsx(listbox/* Listbox */.R, {
            value: selected,
            onChange: setSelected,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative md:min-w-[200px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(listbox/* Listbox.Button */.R.Button, {
                        as: "div",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_ButtonDropdown, {
                            children: selected.name
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                        as: react_.Fragment,
                        leave: "transition ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(listbox/* Listbox.Options */.R.Options, {
                            className: "absolute right-0 z-20 w-52 py-1 mt-2 overflow-auto text-sm text-neutral-900 dark:text-neutral-200 bg-white rounded-2xl shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-900 dark:ring-neutral-700",
                            children: lists.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(listbox/* Listbox.Option */.R.Option, {
                                    className: ({ active  })=>`${active ? "text-primary-700 dark:text-neutral-200 bg-primary-50 dark:bg-neutral-700" : ""} cursor-default select-none relative py-2 pl-10 pr-4`,
                                    value: item,
                                    children: ({ selected  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: `${selected ? "font-medium" : "font-normal"} block truncate`,
                                                    children: item.name
                                                }),
                                                selected ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-primary-700 absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-200",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CheckIcon, {
                                                        className: "w-5 h-5",
                                                        "aria-hidden": "true"
                                                    })
                                                }) : null
                                            ]
                                        })
                                }, index))
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_ArchiveFilterListBox = (ArchiveFilterListBox);

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/author/layout.tsx
















const Layout = ({ children  })=>{
    let navs = [
        {
            name: "Collectibles",
            href: "/author"
        },
        {
            name: "Created",
            href: "/author/created"
        },
        {
            name: "Liked",
            href: "/author/liked"
        },
        {
            name: "Following",
            href: "/author/following"
        },
        {
            name: "Followers",
            href: "/author/followers"
        }
    ];
    const pathname = (0,navigation.usePathname)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `nc-AuthorPage `,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative w-full h-40 md:h-60 2xl:h-72",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(NcImage/* default */.Z, {
                            containerClassName: "absolute inset-0",
                            src: authorBanner,
                            className: "object-cover",
                            fill: true,
                            sizes: "100vw"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container -mt-10 lg:-mt-16",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-32 lg:w-44 flex-shrink-0 mt-12 sm:mt-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(NcImage/* default */.Z, {
                                        src: fakeData/* nftsImgs.2 */.wY[2],
                                        containerClassName: "aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden z-0 relative",
                                        fill: true,
                                        sizes: "200px"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "pt-5 md:pt-1 md:ml-6 xl:ml-14 flex-grow",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "max-w-screen-sm ",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                    className: "inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Dony Herrera"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(VerifyIcon/* default */.Z, {
                                                            className: "ml-2",
                                                            iconClass: "w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center text-sm font-medium space-x-2.5 mt-2.5 text-green-600 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "text-neutral-700 dark:text-neutral-300",
                                                            children: [
                                                                "4.0xc4c16ac453sa645a...b21a",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            width: "20",
                                                            height: "21",
                                                            viewBox: "0 0 20 21",
                                                            fill: "none",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M18.05 9.19992L17.2333 12.6833C16.5333 15.6916 15.15 16.9083 12.55 16.6583C12.1333 16.6249 11.6833 16.5499 11.2 16.4333L9.79999 16.0999C6.32499 15.2749 5.24999 13.5583 6.06665 10.0749L6.88332 6.58326C7.04999 5.87492 7.24999 5.25826 7.49999 4.74992C8.47499 2.73326 10.1333 2.19159 12.9167 2.84993L14.3083 3.17493C17.8 3.99159 18.8667 5.71659 18.05 9.19992Z",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M12.5498 16.6583C12.0331 17.0083 11.3831 17.3 10.5915 17.5583L9.2748 17.9917C5.96646 19.0583 4.2248 18.1667 3.1498 14.8583L2.08313 11.5667C1.01646 8.25833 1.8998 6.50833 5.20813 5.44167L6.5248 5.00833C6.86646 4.9 7.19146 4.80833 7.4998 4.75C7.2498 5.25833 7.0498 5.875 6.88313 6.58333L6.06646 10.075C5.2498 13.5583 6.3248 15.275 9.7998 16.1L11.1998 16.4333C11.6831 16.55 12.1331 16.625 12.5498 16.6583Z",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "block mt-4 text-sm text-neutral-500 dark:text-neutral-400",
                                                    children: "Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs. Contributing to @ether_cards, an NFT Monetization Platform."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-4 ",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(SocialsList/* default */.Z, {
                                                itemClass: "block w-7 h-7"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "absolute md:static left-5 top-4 sm:left-auto sm:top-5 sm:right-5 flex flex-row-reverse justify-end",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(NftMoreDropdown["default"], {
                                            actions: [
                                                {
                                                    id: "report",
                                                    name: "Report abuse",
                                                    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                </svg>
                `
                                                }
                                            ],
                                            containerClassName: "w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ButtonDropDownShare["default"], {
                                            className: "w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer mx-2",
                                            panelMenusClass: "origin-top-right !-right-5 !w-40 sm:!w-52"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(FollowButton/* default */.Z, {
                                            isFollowing: false,
                                            fontSize: "text-sm md:text-base font-medium",
                                            sizeClass: "px-4 py-1 md:py-2.5 h-8 md:!h-10 sm:px-6 lg:px-8"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col lg:flex-row justify-between ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex space-x-0 sm:space-x-1.5 overflow-x-auto ",
                                        children: navs.map((item, index)=>{
                                            const active = item.href === pathname;
                                            return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                className: `flex-shrink-0 block font-medium px-4 py-2 text-sm sm:px-6 sm:py-2.5 capitalize rounded-full focus:outline-none ${active ? "bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900" : "text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100/70 dark:hover:bg-neutral-800"} `,
                                                href: item.href,
                                                children: item.name
                                            }, index);
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mt-5 lg:mt-0 flex items-end justify-end",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_ArchiveFilterListBox, {})
                                    })
                                ]
                            }),
                            children
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative py-16 lg:py-28",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(BackgroundSection_BackgroundSection, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(SectionGridAuthorBox["default"], {
                                data: Array.from("11111111"),
                                boxCard: "box4"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionBecomeAnAuthor_SectionBecomeAnAuthor, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const layout = (Layout);


/***/ })

};
;