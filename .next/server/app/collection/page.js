(() => {
var exports = {};
exports.id = 1306;
exports.ids = [1306];
exports.modules = {

/***/ 18038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 53918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 45732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 69274:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 21668:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 71109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 87782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 82470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 16047:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(18038);

function ClockIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

const ForwardRef = React.forwardRef(ClockIcon);
module.exports = ForwardRef;

/***/ }),

/***/ 14286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRouter": () => (/* reexport default from dynamic */ next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "GlobalError": () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3___default.a),
/* harmony export */   "LayoutRouter": () => (/* reexport default from dynamic */ next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1___default.a),
/* harmony export */   "RenderFromTemplateContext": () => (/* reexport default from dynamic */ next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   "__next_app_webpack_require__": () => (/* binding */ __next_app_webpack_require__),
/* harmony export */   "pages": () => (/* binding */ pages),
/* harmony export */   "renderToReadableStream": () => (/* reexport safe */ next_dist_compiled_react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_7__.renderToReadableStream),
/* harmony export */   "requestAsyncStorage": () => (/* reexport safe */ next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5__.requestAsyncStorage),
/* harmony export */   "serverHooks": () => (/* reexport module object */ next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "staticGenerationAsyncStorage": () => (/* reexport safe */ next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4__.staticGenerationAsyncStorage),
/* harmony export */   "tree": () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2286);
/* harmony import */ var next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65717);
/* harmony import */ var next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88353);
/* harmony import */ var next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7340);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79029);
/* harmony import */ var next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32458);
/* harmony import */ var next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94065);
/* harmony import */ var next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dist_compiled_react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68378);

    const tree = {
        children: [
        '',
        {
        children: [
        'collection',
        {
        children: ['', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 20913)), "C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\app\\collection\\page.tsx"],
          
        }]
      },
        {
          
          
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 92117)), "C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 96684)), "C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\app\\not-found.tsx"],
          metadata: {
    icon: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 51656))],
    apple: [],
    opengraph: [],
    twitter: [],
  }
        }
      ]
      }.children;
    const pages = ["C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\app\\collection\\page.tsx"];

    
    
    
    

    
    
    

    

    
    const __next_app_webpack_require__ = __webpack_require__
  

/***/ }),

/***/ 69263:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 49632));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 79533, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 24355));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 86836));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13716, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 15938));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 78035));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 69397));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 13175));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 96615));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 72032));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 91864));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 24121));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 12164));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 19289));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 72208));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 63482));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 82523));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 28900));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 31113));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 59150));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 36607));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 99470));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 61032));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 57211));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7242));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 45288));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 31603));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 87751));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 44210));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 21885));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88391));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 75146));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 76956));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 77410));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3906));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 32155));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 25190));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 34314));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2693));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 28644));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 44188));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1603));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 59910));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18216));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 69813))

/***/ }),

/***/ 20913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(54458);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(91094);
// EXTERNAL MODULE: ./src/shared/NcImage/NcImage.tsx
var NcImage = __webpack_require__(36795);
;// CONCATENATED MODULE: ./src/images/nfts/collectionBanner.png
/* harmony default export */ const collectionBanner = ({"src":"/_next/static/media/collectionBanner.3dde3dd2.png","height":462,"width":2880,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAIAAABsYngUAAAAIklEQVR42mM8eun88z//Wb//YPz0Q+DzGz62/2wC/LzMfwHI8A1d29P2HgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":1});
// EXTERNAL MODULE: ./src/contains/fakeData.ts + 35 modules
var fakeData = __webpack_require__(40802);
// EXTERNAL MODULE: ./src/components/ButtonDropDownShare.tsx
var ButtonDropDownShare = __webpack_require__(41565);
var ButtonDropDownShare_default = /*#__PURE__*/__webpack_require__.n(ButtonDropDownShare);
// EXTERNAL MODULE: ./src/components/NftMoreDropdown.tsx
var NftMoreDropdown = __webpack_require__(36956);
var NftMoreDropdown_default = /*#__PURE__*/__webpack_require__.n(NftMoreDropdown);
// EXTERNAL MODULE: ./src/components/SectionBecomeAnAuthor/SectionBecomeAnAuthor.tsx + 2 modules
var SectionBecomeAnAuthor = __webpack_require__(89882);
// EXTERNAL MODULE: ./src/components/BackgroundSection/BackgroundSection.tsx
var BackgroundSection = __webpack_require__(82437);
// EXTERNAL MODULE: ./src/components/SectionSliderCollections.tsx
var SectionSliderCollections = __webpack_require__(48251);
var SectionSliderCollections_default = /*#__PURE__*/__webpack_require__.n(SectionSliderCollections);
// EXTERNAL MODULE: ./src/shared/Button/ButtonPrimary.tsx
var ButtonPrimary = __webpack_require__(74632);
// EXTERNAL MODULE: ./src/shared/Pagination/Pagination.tsx
var Pagination = __webpack_require__(902);
// EXTERNAL MODULE: ./src/components/CardNFT.tsx
var CardNFT = __webpack_require__(47668);
var CardNFT_default = /*#__PURE__*/__webpack_require__.n(CardNFT);
// EXTERNAL MODULE: ./src/components/TabFilters.tsx
var TabFilters = __webpack_require__(38727);
var TabFilters_default = /*#__PURE__*/__webpack_require__.n(TabFilters);
;// CONCATENATED MODULE: ./src/app/collection/page.tsx














let AccountActions = [
    {
        id: "copylink",
        name: "Copy link",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
  </svg>`
    },
    {
        id: "report",
        name: "Report abuse",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
  </svg>
  `
    },
    {
        id: "delete",
        name: "Delete item",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
`
    }
];
const PageCollection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `nc-PageCollection`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "relative w-full h-40 md:h-60 2xl:h-72",
                        children: /*#__PURE__*/ jsx_runtime.jsx(NcImage/* default */.Z, {
                            containerClassName: "absolute inset-0",
                            src: collectionBanner,
                            className: "object-cover",
                            fill: true,
                            sizes: "100vw"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "relative container -mt-14 lg:-mt-20",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: " bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row lg:items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row md:block sm:items-start sm:justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "w-40 sm:w-48 md:w-56 xl:w-60",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(NcImage/* default */.Z, {
                                                src: fakeData/* nftsImgs.2 */.wY[2],
                                                containerClassName: "aspect-w-1 aspect-h-1 relative rounded-3xl overflow-hidden z-0",
                                                sizes: "300px"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mt-4 flex items-center sm:justify-center space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex space-x-1.5 text-neutral-700 dark:text-neutral-300",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "##",
                                                            className: "w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "w-5 h-5",
                                                                viewBox: "0 0 48 48",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                    clipPath: "url(#clip0_17_61)",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        d: "M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z",
                                                                        fill: "currentColor"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "##",
                                                            className: "w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "w-5 h-5",
                                                                viewBox: "0 0 48 48",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                    clipPath: "url(#clip0_17_80)",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        d: "M15.1003 43.5C33.2091 43.5 43.1166 28.4935 43.1166 15.4838C43.1166 15.0619 43.1072 14.6307 43.0884 14.2088C45.0158 12.815 46.679 11.0886 48 9.11066C46.205 9.90926 44.2993 10.4308 42.3478 10.6575C44.4026 9.42588 45.9411 7.491 46.6781 5.21159C44.7451 6.35718 42.6312 7.16528 40.4269 7.60128C38.9417 6.02318 36.978 4.97829 34.8394 4.62816C32.7008 4.27803 30.5064 4.64216 28.5955 5.66425C26.6846 6.68635 25.1636 8.30947 24.2677 10.2827C23.3718 12.2559 23.1509 14.4693 23.6391 16.5807C19.725 16.3842 15.8959 15.3675 12.4 13.5963C8.90405 11.825 5.81939 9.33893 3.34594 6.29909C2.0888 8.46655 1.70411 11.0314 2.27006 13.4722C2.83601 15.9131 4.31013 18.047 6.39281 19.44C4.82926 19.3904 3.29995 18.9694 1.93125 18.2119V18.3338C1.92985 20.6084 2.7162 22.8132 4.15662 24.5736C5.59704 26.334 7.60265 27.5412 9.8325 27.99C8.38411 28.3863 6.86396 28.4441 5.38969 28.1588C6.01891 30.1149 7.24315 31.8258 8.89154 33.0527C10.5399 34.2796 12.5302 34.9613 14.5847 35.0025C11.0968 37.7423 6.78835 39.2283 2.35313 39.2213C1.56657 39.2201 0.780798 39.1719 0 39.0769C4.50571 41.9676 9.74706 43.5028 15.1003 43.5Z",
                                                                        fill: "currentColor"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "h-5 border-l border-neutral-200 dark:border-neutral-700"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex space-x-1.5",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx((ButtonDropDownShare_default()), {
                                                            className: "w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer ",
                                                            panelMenusClass: "origin-top-right !-right-5 !w-40 sm:!w-52"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((NftMoreDropdown_default()), {
                                                            actions: AccountActions,
                                                            containerClassName: "w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mt-5 md:mt-0 md:ml-8 xl:ml-14 flex-grow",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "max-w-screen-sm ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                    className: "inline-block text-2xl sm:text-3xl lg:text-4xl font-semibold",
                                                    children: "Awesome NFTs collection "
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "block mt-4 text-sm text-neutral-500 dark:text-neutral-400",
                                                    children: "Karafuru is home to 5,555 generative arts where colors reign supreme. Leave the drab reality and enter the world of Karafuru by Museum of Toys."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mt-6 xl:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 xl:gap-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "dark:bg-neutral-800 bg-green-50 rounded-2xl flex flex-col items-center justify-center p-5 lg:p-6",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-sm text-neutral-500 dark:text-neutral-400",
                                                            children: "Floor Price"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "font-medium text-base mt-4 sm:text-xl sm:mt-6",
                                                            children: "$295,481.62"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-xs text-green-500 mt-1",
                                                            children: "+2.11%"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "dark:bg-neutral-800 bg-fuchsia-50 rounded-2xl flex flex-col items-center justify-center p-5 lg:p-6",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-sm text-neutral-500 dark:text-neutral-400",
                                                            children: "Volume"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "font-medium text-base mt-4 sm:text-xl sm:mt-6",
                                                            children: "$295,481.62"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1",
                                                            children: "total"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "dark:bg-neutral-800 bg-sky-50 rounded-2xl flex flex-col items-center justify-center p-5 lg:p-6",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-sm text-neutral-500 dark:text-neutral-400",
                                                            children: "Latest Price"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "font-medium text-base mt-4 sm:text-xl sm:mt-6",
                                                            children: "$295,481.62"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-xs text-green-500 mt-1",
                                                            children: " --"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "dark:bg-neutral-800 bg-yellow-50 rounded-2xl flex flex-col items-center justify-center p-5 lg:p-6",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-sm text-neutral-500 dark:text-neutral-400",
                                                            children: "Items"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "font-medium text-base mt-4 sm:text-xl sm:mt-6",
                                                            children: "2235"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1",
                                                            children: "total"
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
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container py-16 lg:pb-28 lg:pt-20 space-y-20 lg:space-y-28",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((TabFilters_default()), {}),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10  mt-8 lg:mt-10",
                                children: Array.from("11111111").map((_, index)=>/*#__PURE__*/ jsx_runtime.jsx((CardNFT_default()), {}, index))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(Pagination/* default */.Z, {}),
                                    /*#__PURE__*/ jsx_runtime.jsx(ButtonPrimary/* default */.Z, {
                                        loading: true,
                                        children: "Show me more"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative py-20 lg:py-28",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(BackgroundSection/* default */.Z, {}),
                            /*#__PURE__*/ jsx_runtime.jsx((SectionSliderCollections_default()), {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(SectionBecomeAnAuthor/* default */.Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const page = (PageCollection);


/***/ }),

/***/ 41565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(21399);
module.exports = createProxy("C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\components\\ButtonDropDownShare.tsx");


/***/ }),

/***/ 36956:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(21399);
module.exports = createProxy("C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\components\\NftMoreDropdown.tsx");


/***/ }),

/***/ 38727:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(21399);
module.exports = createProxy("C:\\Users\\Aldo\\Documents\\Proyectos\\Ciscryp\\src\\components\\TabFilters.tsx");


/***/ }),

/***/ 49632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/collectionBanner.3dde3dd2.png","height":462,"width":2880,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAIAAABsYngUAAAAIklEQVR42mM8eun88z//Wb//YPz0Q+DzGz62/2wC/LzMfwHI8A1d29P2HgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":1});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4359,1663,1036,512,7722,429,4533,3753,9510,1978,4437,3931,4748,9882,902,2315,802,7888,4165,6252], () => (__webpack_exec__(14286)));
module.exports = __webpack_exports__;

})();