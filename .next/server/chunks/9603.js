exports.id = 9603;
exports.ids = [9603];
exports.modules = {

/***/ 77490:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(21399);
module.exports = createProxy("C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\app\\(homes)\\SectionLargeSlider.tsx");


/***/ }),

/***/ 30254:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(21399);
module.exports = createProxy("C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\app\\(homes)\\SectionVideos.tsx");


/***/ }),

/***/ 15213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54458);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91094);


const BgGlassmorphism = ({ className ="absolute inset-x-0 md:top-10 min-h-0 pl-20 py-24 flex overflow-hidden z-0"  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `nc-BgGlassmorphism ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "block bg-[#ef233c] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "block bg-[#04868b] w-72 h-72 -ml-20 mt-40 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96 nc-animation-delay-2000"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BgGlassmorphism);


/***/ }),

/***/ 24029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _homes_SectionLargeSlider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/shared/NextPrev/NextPrev.tsx
var NextPrev = __webpack_require__(9526);
// EXTERNAL MODULE: ./src/shared/NcImage/NcImage.tsx
var NcImage = __webpack_require__(63854);
// EXTERNAL MODULE: ./src/shared/Avatar/Avatar.tsx + 1 modules
var Avatar = __webpack_require__(70367);
// EXTERNAL MODULE: ./src/shared/Button/ButtonPrimary.tsx
var ButtonPrimary = __webpack_require__(34255);
// EXTERNAL MODULE: ./src/shared/Button/ButtonSecondary.tsx
var ButtonSecondary = __webpack_require__(21180);
// EXTERNAL MODULE: ./src/components/LikeButton.tsx
var LikeButton = __webpack_require__(44437);
// EXTERNAL MODULE: ./src/components/ItemTypeVideoIcon.tsx
var ItemTypeVideoIcon = __webpack_require__(21818);
// EXTERNAL MODULE: ./src/contains/fakeData.ts
var fakeData = __webpack_require__(2898);
// EXTERNAL MODULE: ./src/hooks/useCountDownTime.ts
var useCountDownTime = __webpack_require__(8989);
;// CONCATENATED MODULE: ./src/components/CardLarge1/TimeCountDown.tsx



const TimeCountDown = ()=>{
    const timeLeft = (0,useCountDownTime/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-neutral-500 dark:text-neutral-400 flex items-center space-x-2 ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M20.75 13.25C20.75 18.08 16.83 22 12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25Z",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M12 8V13",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M9 2H15",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeMiterlimit: "10",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "leading-none mt-1",
                        children: "Auction ending in:"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex space-x-5 sm:space-x-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-2xl sm:text-3xl font-semibold",
                                children: timeLeft.days
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sm:text-lg text-neutral-500 dark:text-neutral-400",
                                children: "Days"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-2xl sm:text-3xl font-semibold",
                                children: timeLeft.hours
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sm:text-lg text-neutral-500 dark:text-neutral-400",
                                children: "hours"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-2xl sm:text-3xl font-semibold",
                                children: timeLeft.minutes
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sm:text-lg text-neutral-500 dark:text-neutral-400",
                                children: "mins"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-2xl sm:text-3xl font-semibold",
                                children: timeLeft.seconds
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sm:text-lg text-neutral-500",
                                children: "secs"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const CardLarge1_TimeCountDown = (TimeCountDown);

// EXTERNAL MODULE: ./src/images/nfts/collection.png
var collection = __webpack_require__(80824);
// EXTERNAL MODULE: ./src/components/VerifyIcon.tsx
var VerifyIcon = __webpack_require__(45371);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/CardLarge1/CardLarge1.tsx














const CardLarge1 = ({ className ="" , isShowing =true , onClickNext =()=>{} , onClickPrev =()=>{} , featuredImgUrl =fakeData/* nftsLargeImgs.0 */.jn[0]  })=>{
    const randomTitle = [
        "Fractal Shot ",
        "Amazing Nature",
        "Beautiful NFT",
        "Lovely NFT",
        "Wolf Face #1"
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `nc-CardLarge1 nc-CardLarge1--hasAnimation relative flex flex-col-reverse lg:flex-row justify-end ${className}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "lg:absolute z-10 lg:left-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 -mt-2 lg:mt-0 sm:px-5 lg:px-0 w-full lg:max-w-lg ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "nc-CardLarge1__left p-4 sm:p-8 xl:py-14 md:px-10 bg-white dark:bg-neutral-900 shadow-lg rounded-3xl space-y-3 sm:space-y-8 ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-2xl lg:text-3xl 2xl:text-5xl font-semibold ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/nft-detail",
                                    title: "Fractal Shot",
                                    children: randomTitle[0]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-12",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex-shrink-0 h-10 w-10",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Avatar["default"], {
                                                    sizeClass: "w-10 h-10"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "ml-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text-xs dark:text-neutral-400",
                                                        children: "Creator"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "text-sm font-semibold flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Jane Cooper"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(VerifyIcon/* default */.Z, {})
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex-shrink-0 h-10 w-10",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Avatar["default"], {
                                                    sizeClass: "w-10 h-10",
                                                    imgUrl: collection["default"]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "ml-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text-xs dark:text-neutral-400",
                                                        children: "Collection"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text-sm font-semibold ",
                                                        children: "Marscapes"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pt-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row items-baseline p-6 border-2 border-green-500 rounded-xl relative",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "block absolute bottom-full translate-y-1.5 py-1 px-1.5 bg-white dark:bg-neutral-900 text-sm text-neutral-500 dark:text-neutral-400 ring ring-offset-0 ring-white dark:ring-neutral-900",
                                            children: "Current Bid"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-3xl xl:text-4xl font-semibold text-green-500",
                                            children: "1.000 ETH"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-lg text-neutral-400 sm:ml-3.5",
                                            children: "(≈ $3,221.22)"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CardLarge1_TimeCountDown, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w h-[1px] bg-neutral-100 dark:bg-neutral-700"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonPrimary/* default */.Z, {
                                        href: "/nft-detail",
                                        className: "flex-1",
                                        children: "Place a bid"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonSecondary/* default */.Z, {
                                        href: "/nft-detail",
                                        className: "flex-1",
                                        children: "View item"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-4 sm:pt-8 sm:px-10 ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(NextPrev/* default */.Z, {
                            btnClassName: "w-11 h-11 text-xl",
                            onClickNext: onClickNext,
                            onClickPrev: onClickPrev
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full lg:w-[64%] relative ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "nc-CardLarge1__right ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/nft-detail",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NcImage/* default */.Z, {
                                containerClassName: "aspect-w-1 aspect-h-1 relative",
                                className: "absolute inset-0 object-cover rounded-3xl sm:rounded-[40px] border-4 sm:border-[14px] border-white dark:border-neutral-800",
                                src: featuredImgUrl,
                                alt: "title",
                                sizes: "(max-width: 768px) 100vw, 840px"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ItemTypeVideoIcon/* default */.Z, {
                            className: "absolute w-8 h-8 md:w-10 md:h-10 left-3 bottom-3 sm:left-7 sm:bottom-7 "
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LikeButton["default"], {
                            className: "absolute right-3 top-3 sm:right-7 sm:top-7"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const CardLarge1_CardLarge1 = (CardLarge1);

;// CONCATENATED MODULE: ./src/app/(homes)/SectionLargeSlider.tsx




const SectionLargeSlider = ({ className =""  })=>{
    const [indexActive, setIndexActive] = (0,react_.useState)(0);
    const handleClickNext = ()=>{
        setIndexActive((state)=>{
            if (state >= 2) {
                return 0;
            }
            return state + 1;
        });
    };
    const handleClickPrev = ()=>{
        setIndexActive((state)=>{
            if (state === 0) {
                return 2;
            }
            return state - 1;
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `nc-SectionLargeSlider relative ${className}`,
        children: [
            1,
            1,
            1
        ].map((_, index)=>indexActive === index ? /*#__PURE__*/ jsx_runtime_.jsx(CardLarge1_CardLarge1, {
                isShowing: true,
                featuredImgUrl: fakeData/* nftsLargeImgs */.jn[index],
                onClickNext: handleClickNext,
                onClickPrev: handleClickPrev
            }, index) : null)
    });
};
/* harmony default export */ const _homes_SectionLargeSlider = (SectionLargeSlider);


/***/ }),

/***/ 48433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _homes_SectionVideos)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/shared/Heading/Heading.tsx
var Heading = __webpack_require__(85238);
// EXTERNAL MODULE: ./src/shared/NcImage/NcImage.tsx
var NcImage = __webpack_require__(63854);
;// CONCATENATED MODULE: ./src/shared/NcPlayIcon/NcPlayIcon.tsx


const NcPlayIcon = ({ className ="w-20 h-20 p-3 lg:w-52 lg:h-52 lg:p-12" , svgClass ="w-8 h-8 md:w-12 md:h-12"  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `nc-NcPlayIcon bg-white bg-opacity-30 backdrop-filter backdrop-blur rounded-full  ${className}`,
        "data-nc-id": "NcPlayIcon",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full h-full bg-white rounded-full text-primary-500 relative",
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: svgClass,
                    width: "24",
                    height: "24",
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
            })
        })
    });
};
/* harmony default export */ const NcPlayIcon_NcPlayIcon = (NcPlayIcon);

;// CONCATENATED MODULE: ./src/utils/isSafariBrowser.ts
const isSafariBrowser = ()=>{
    // return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    return navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") <= -1;
};
/* harmony default export */ const utils_isSafariBrowser = (isSafariBrowser);

;// CONCATENATED MODULE: ./src/app/(homes)/SectionVideos.tsx






const VIDEOS_DEMO = [
    {
        id: "nOQyWbPO2Ds",
        title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
        thumbnail: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032"
    }
];
const SectionVideos = ({ videos =VIDEOS_DEMO , className ="container"  })=>{
    const [isPlay, setIsPlay] = (0,react_.useState)(false);
    const [currentVideo] = (0,react_.useState)(0);
    const renderMainVideo = ()=>{
        const video = videos[currentVideo];
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] z-0",
            title: video.title,
            children: isPlay ? /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                src: `https://www.youtube.com/embed/${video.id}?autoplay=1${utils_isSafariBrowser() ? "&mute=1" : ""}`,
                title: video.title,
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",
                allowFullScreen: true,
                className: "rounded-3xl"
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>setIsPlay(true),
                        className: "cursor-pointer absolute inset-0 flex items-center justify-center z-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(NcPlayIcon_NcPlayIcon, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NcImage/* default */.Z, {
                        fill: true,
                        containerClassName: "absolute inset-0 rounded-3xl overflow-hidden z-0",
                        className: "object-cover transition-transform group-hover:scale-105 duration-300",
                        src: video.thumbnail,
                        title: video.title,
                        alt: video.title,
                        sizes: "(max-width: 1024px) 100vw, 1280px"
                    })
                ]
            })
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `nc-SectionVideos ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Heading/* default */.Z, {
                desc: "Inspirados en la huella dactilar de Dios y en como se manifiesta en todas    las cosas de la naturaleza, creamos Fractal.",
                children: "\uD83C\uDFAC Fractal Shot"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-7/12 dark:bg-neutral-800/80"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex-grow relative",
                        children: renderMainVideo()
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _homes_SectionVideos = (SectionVideos);


/***/ })

};
;