"use strict";
exports.id = 9697;
exports.ids = [9697];
exports.modules = {

/***/ 19697:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ Ge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71147);
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26304);
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21550);
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65410);
/* harmony import */ var _label_label_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48717);
/* harmony import */ var _description_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1858);
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40986);
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41464);
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29042);
/* harmony import */ var _utils_form_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85381);
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62264);
/* harmony import */ var _hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33013);
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88060);
let y=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);y.displayName="GroupContext";let Y=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Z(s){var d;let[n,p]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[c,f]=(0,_label_label_js__WEBPACK_IMPORTED_MODULE_1__/* .useLabels */ .b)(),[r,h]=(0,_description_description_js__WEBPACK_IMPORTED_MODULE_2__/* .useDescriptions */ .f)(),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({switch:n,setSwitch:p,labelledby:c,describedby:r}),[n,p,c,r]),T={},b=s;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(h,{name:"Switch.Description"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(f,{name:"Switch.Label",props:{htmlFor:(d=l.switch)==null?void 0:d.id,onClick(t){n&&(t.currentTarget.tagName==="LABEL"&&t.preventDefault(),n.click(),n.focus({preventScroll:!0}))}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(y.Provider,{value:l},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__/* .render */ .sY)({ourProps:T,theirProps:b,defaultTag:Y,name:"Switch.Group"}))))}let ee="button";function te(s,n){let p=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__/* .useId */ .M)(),{id:c=`headlessui-switch-${p}`,checked:f,defaultChecked:r=!1,onChange:h,name:l,value:T,form:b,...d}=s,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(y),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),D=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__/* .useSyncRefs */ .T)(u,n,t===null?null:t.setSwitch),[o,a]=(0,_hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_6__/* .useControllable */ .q)(f,h,r),S=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__/* .useEvent */ .z)(()=>a==null?void 0:a(!o)),C=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__/* .useEvent */ .z)(e=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_8__/* .isDisabledReactIssue7711 */ .P)(e.currentTarget))return e.preventDefault();e.preventDefault(),S()}),L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__/* .useEvent */ .z)(e=>{e.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_9__/* .Keys.Space */ .R.Space?(e.preventDefault(),S()):e.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_9__/* .Keys.Enter */ .R.Enter&&(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_10__/* .attemptSubmit */ .g)(e.currentTarget)}),v=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__/* .useEvent */ .z)(e=>e.preventDefault()),G=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({checked:o}),[o]),R={id:c,ref:D,role:"switch",type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_11__/* .useResolveButtonType */ .f)(s,u),tabIndex:0,"aria-checked":o,"aria-labelledby":t==null?void 0:t.labelledby,"aria-describedby":t==null?void 0:t.describedby,onClick:C,onKeyUp:L,onKeyPress:v},k=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_12__/* .useDisposables */ .G)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var w;let e=(w=u.current)==null?void 0:w.closest("form");e&&r!==void 0&&k.addEventListener(e,"reset",()=>{a(r)})},[u,a]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,l!=null&&o&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_13__/* .Hidden */ ._,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_13__/* .Features.Hidden */ .A.Hidden,...(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__/* .compact */ .oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,form:b,checked:o,name:l,value:T})}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__/* .render */ .sY)({ourProps:R,theirProps:d,slot:G,defaultTag:ee,name:"Switch"}))}let ne=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__/* .forwardRefWithAs */ .yV)(te),re=Z,Ge=Object.assign(ne,{Group:re,Label:_label_label_js__WEBPACK_IMPORTED_MODULE_1__/* .Label */ ._,Description:_description_description_js__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .d});


/***/ })

};
;