(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9078],{1138:function(e,t,n){let r=n(6006),o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"}))});e.exports=o},6394:function(e,t,n){e.exports=n(7059)},4058:function(e,t,n){"use strict";n.d(t,{d:function(){return d},f:function(){return s}});var r=n(6006),o=n(3858),l=n(2810),a=n(961),i=n(8496),u=n(3562);let c=(0,r.createContext)(null);function s(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)(()=>function(e){let n=(0,u.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),o=(0,r.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return r.createElement(c.Provider,{value:o},e.children)},[t])]}let d=Object.assign((0,l.yV)(function(e,t){let n=(0,o.M)(),{id:u=`headlessui-description-${n}`,...s}=e,d=function e(){let t=(0,r.useContext)(c);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),f=(0,i.T)(t);(0,a.e)(()=>d.register(u),[u,d.register]);let p={ref:f,...d.props,id:u};return(0,l.sY)({ourProps:p,theirProps:s,slot:d.slot||{},defaultTag:"p",name:d.name||"Description"})}),{})},5272:function(e,t,n){"use strict";let r,o;n.d(t,{V:function(){return ef}});var l,a,i,u,c,s=n(6006),d=n.t(s,2),f=n(9325),p=n(2810),m=n(8496),v=n(8277),g=n(4373),h=n(3858),E=n(1405),w=n(5106),b=n(2243),y=n(3562),T=n(6645),C=n(8260),P=n(9101),L=n(5772),R=n(670);function S(e,t){let n=(0,s.useRef)([]),r=(0,y.z)(e);(0,s.useEffect)(()=>{let e=[...n.current];for(let[o,l]of t.entries())if(n.current[o]!==l){let o=r(t,e);return n.current=t,o}},[r,...t])}var D=n(8807);function O(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}var M=((l=M||{})[l.None=1]="None",l[l.InitialFocus=2]="InitialFocus",l[l.TabLock=4]="TabLock",l[l.FocusLock=8]="FocusLock",l[l.RestoreFocus=16]="RestoreFocus",l[l.All=30]="All",l);let A=Object.assign((0,p.yV)(function(e,t){let n=(0,s.useRef)(null),r=(0,m.T)(n,t),{initialFocus:o,containers:l,features:a=30,...i}=e;(0,E.H)()||(a=1);let u=(0,P.i)(n);!function({ownerDocument:e},t){let n=function(e=!0){let t=(0,s.useRef)(k.slice());return S(([e],[n])=>{!0===n&&!1===e&&(0,R.Y)(()=>{t.current.splice(0)}),!1===n&&!0===e&&(t.current=k.slice())},[e,k,t]),(0,y.z)(()=>{var e;return null!=(e=t.current.find(e=>null!=e&&e.isConnected))?e:null})}(t);S(()=>{t||(null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&(0,b.C5)(n())},[t]);let r=(0,s.useRef)(!1);(0,s.useEffect)(()=>(r.current=!1,()=>{r.current=!0,(0,R.Y)(()=>{r.current&&(0,b.C5)(n())})}),[])}({ownerDocument:u},Boolean(16&a));let c=function({ownerDocument:e,container:t,initialFocus:n},r){let o=(0,s.useRef)(null),l=(0,C.t)();return S(()=>{if(!r)return;let a=t.current;a&&(0,R.Y)(()=>{if(!l.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t){o.current=t;return}}else if(a.contains(t)){o.current=t;return}null!=n&&n.current?(0,b.C5)(n.current):(0,b.jA)(a,b.TO.First)===b.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=null==e?void 0:e.activeElement})},[r]),o}({ownerDocument:u,container:n,initialFocus:o},Boolean(2&a));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=(0,C.t)();(0,L.O)(null==e?void 0:e.defaultView,"focus",e=>{if(!o||!l.current)return;let a=O(n);t.current instanceof HTMLElement&&a.add(t.current);let i=r.current;if(!i)return;let u=e.target;u&&u instanceof HTMLElement?F(a,u)?(r.current=u,(0,b.C5)(u)):(e.preventDefault(),e.stopPropagation(),(0,b.C5)(i)):(0,b.C5)(r.current)},!0)}({ownerDocument:u,container:n,containers:l,previousActiveElement:c},Boolean(8&a));let d=(0,T.l)(),v=(0,y.z)(e=>{let t=n.current;t&&(0,f.E)(d.current,{[T.N.Forwards]:()=>{(0,b.jA)(t,b.TO.First,{skipElements:[e.relatedTarget]})},[T.N.Backwards]:()=>{(0,b.jA)(t,b.TO.Last,{skipElements:[e.relatedTarget]})}})}),g=(0,D.G)(),h=(0,s.useRef)(!1);return s.createElement(s.Fragment,null,Boolean(4&a)&&s.createElement(w._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:v,features:w.A.Focusable}),(0,p.sY)({ourProps:{ref:r,onKeyDown(e){"Tab"==e.key&&(h.current=!0,g.requestAnimationFrame(()=>{h.current=!1}))},onBlur(e){let t=O(l);n.current instanceof HTMLElement&&t.add(n.current);let r=e.relatedTarget;r instanceof HTMLElement&&"true"!==r.dataset.headlessuiFocusGuard&&(F(t,r)||(h.current?(0,b.jA)(n.current,(0,f.E)(d.current,{[T.N.Forwards]:()=>b.TO.Next,[T.N.Backwards]:()=>b.TO.Previous})|b.TO.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&(0,b.C5)(e.target)))}},theirProps:i,defaultTag:"div",name:"FocusTrap"}),Boolean(4&a)&&s.createElement(w._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:v,features:w.A.Focusable}))}),{features:M}),k=[];function F(e,t){for(let n of e)if(n.contains(t))return!0;return!1}!function(e){function t(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",t))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",t),t())}(()=>{function e(e){e.target instanceof HTMLElement&&e.target!==document.body&&k[0]!==e.target&&(k.unshift(e.target),(k=k.filter(e=>null!=e&&e.isConnected)).splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});var x=n(8431),Y=n(961);let N=(0,s.createContext)(!1);function H(e){return s.createElement(N.Provider,{value:e.force},e.children)}var V=n(28);let B=s.Fragment,z=s.Fragment,I=(0,s.createContext)(null),_=Object.assign((0,p.yV)(function(e,t){let n=(0,s.useRef)(null),r=(0,m.T)((0,m.h)(e=>{n.current=e}),t),o=(0,P.i)(n),l=function(e){let t=(0,s.useContext)(N),n=(0,s.useContext)(I),r=(0,P.i)(e),[o,l]=(0,s.useState)(()=>{if(!t&&null!==n||V.O.isServer)return null;let e=null==r?void 0:r.getElementById("headlessui-portal-root");if(e)return e;if(null===r)return null;let o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)});return(0,s.useEffect)(()=>{null!==o&&(null!=r&&r.body.contains(o)||null==r||r.body.appendChild(o))},[o,r]),(0,s.useEffect)(()=>{t||null!==n&&l(n.current)},[n,l,t]),o}(n),[a]=(0,s.useState)(()=>{var e;return V.O.isServer?null:null!=(e=null==o?void 0:o.createElement("div"))?e:null}),i=(0,E.H)(),u=(0,s.useRef)(!1);return(0,Y.e)(()=>{if(u.current=!1,!(!l||!a))return l.contains(a)||(a.setAttribute("data-headlessui-portal",""),l.appendChild(a)),()=>{u.current=!0,(0,R.Y)(()=>{var e;u.current&&l&&a&&(a instanceof Node&&l.contains(a)&&l.removeChild(a),l.childNodes.length<=0&&(null==(e=l.parentElement)||e.removeChild(l)))})}},[l,a]),i&&l&&a?(0,x.createPortal)((0,p.sY)({ourProps:{ref:r},theirProps:e,defaultTag:B,name:"Portal"}),a):null}),{Group:(0,p.yV)(function(e,t){let{target:n,...r}=e,o={ref:(0,m.T)(t)};return s.createElement(I.Provider,{value:n},(0,p.sY)({ourProps:o,theirProps:r,defaultTag:z,name:"Popover.Group"}))})});var j=n(4058),$=n(546);let W=(0,s.createContext)(()=>{});W.displayName="StackContext";var q=((a=q||{})[a.Add=0]="Add",a[a.Remove=1]="Remove",a);function G({children:e,onUpdate:t,type:n,element:r,enabled:o}){let l=(0,s.useContext)(W),a=(0,y.z)((...e)=>{null==t||t(...e),l(...e)});return(0,Y.e)(()=>{let e=void 0===o||!0===o;return e&&a(0,n,r),()=>{e&&a(1,n,r)}},[a,n,r,o]),s.createElement(W.Provider,{value:a},e)}var U=n(5880);let{useState:Z,useEffect:J,useLayoutEffect:K,useDebugValue:Q}=d;"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;let X=d.useSyncExternalStore;var ee=n(650);let et=(i={PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:(0,ee.k)(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r,o;let l={doc:e,d:t,meta:function(e){let t={};for(let n of e)Object.assign(t,n(t));return t}(n)},a=[/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0?{before(){r=window.pageYOffset},after({doc:e,d:t,meta:n}){function o(e){return n.containers.flatMap(e=>e()).some(t=>t.contains(e))}t.style(e.body,"marginTop",`-${r}px`),window.scrollTo(0,0);let l=null;t.addEventListener(e,"click",t=>{if(t.target instanceof HTMLElement)try{let n=t.target.closest("a");if(!n)return;let{hash:r}=new URL(n.href),a=e.querySelector(r);a&&!o(a)&&(l=a)}catch{}},!0),t.addEventListener(e,"touchmove",e=>{e.target instanceof HTMLElement&&!o(e.target)&&e.preventDefault()},{passive:!1}),t.add(()=>{window.scrollTo(0,window.pageYOffset+r),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})}}:{},{before({doc:e}){var t;let n=e.documentElement;o=(null!=(t=e.defaultView)?t:window).innerWidth-n.clientWidth},after({doc:e,d:t}){let n=e.documentElement,r=o-(n.clientWidth-n.offsetWidth);t.style(n,"paddingRight",`${r}px`)}},{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];a.forEach(({before:e})=>null==e?void 0:e(l)),a.forEach(({after:e})=>null==e?void 0:e(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}},r=new Map,o=new Set,{getSnapshot:()=>r,subscribe:e=>(o.add(e),()=>o.delete(e)),dispatch(e,...t){let n=i[e].call(r,...t);n&&(r=n,o.forEach(e=>e()))}});et.subscribe(()=>{let e=et.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&et.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&et.dispatch("TEARDOWN",n)}});let en=new Map,er=new Map;function eo(e,t=!0){(0,Y.e)(()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let o=null!=(n=er.get(r))?n:0;return er.set(r,o+1),0!==o||(en.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=er.get(r))?e:1;if(1===t?er.delete(r):er.set(r,t-1),1!==t)return;let n=en.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,en.delete(r))}},[e,t])}var el=((u=el||{})[u.Open=0]="Open",u[u.Closed=1]="Closed",u),ea=((c=ea||{})[c.SetTitleId=0]="SetTitleId",c);let ei={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},eu=(0,s.createContext)(null);function ec(e){let t=(0,s.useContext)(eu);if(null===t){let t=Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ec),t}return t}function es(e,t){return(0,f.E)(t.type,ei,e,t)}eu.displayName="DialogContext";let ed=p.AN.RenderStrategy|p.AN.Static,ef=Object.assign((0,p.yV)(function(e,t){let n=(0,h.M)(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:l,initialFocus:a,__demoMode:i=!1,...u}=e,[c,d]=(0,s.useState)(0),g=(0,$.oJ)();void 0===o&&null!==g&&(o=(g&$.ZM.Open)===$.ZM.Open);let b=(0,s.useRef)(null),T=(0,m.T)(b,t),C=(0,s.useRef)(null),R=(0,P.i)(b),S=e.hasOwnProperty("open")||null!==g,D=e.hasOwnProperty("onClose");if(!S&&!D)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!S)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!D)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof o)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if("function"!=typeof l)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let O=o?0:1,[M,k]=(0,s.useReducer)(es,{titleId:null,descriptionId:null,panelRef:(0,s.createRef)()}),F=(0,y.z)(()=>l(!1)),x=(0,y.z)(e=>k({type:0,id:e})),N=!!(0,E.H)()&&!i&&0===O,V=c>1,B=null!==(0,s.useContext)(eu),z=null!==g&&(g&$.ZM.Closing)===$.ZM.Closing;eo((0,s.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==R?void 0:R.querySelectorAll("body > *"))?e:[]).find(e=>"headlessui-portal-root"!==e.id&&e.contains(C.current)&&e instanceof HTMLElement))?t:null},[C]),!B&&!z&&N),eo((0,s.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==R?void 0:R.querySelectorAll("[data-headlessui-portal]"))?e:[]).find(e=>e.contains(C.current)&&e instanceof HTMLElement))?t:null},[C]),!!V||N);let I=(0,y.z)(()=>{var e,t;return[...Array.from(null!=(e=null==R?void 0:R.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))?e:[]).filter(e=>!(e===document.body||e===document.head||!(e instanceof HTMLElement)||e.contains(C.current)||M.panelRef.current&&e.contains(M.panelRef.current))),null!=(t=M.panelRef.current)?t:b.current]});(0,U.O)(()=>I(),F,!(!N||V));let W=!(V||0!==O);(0,L.O)(null==R?void 0:R.defaultView,"keydown",e=>{W&&(e.defaultPrevented||e.key===v.R.Escape&&(e.preventDefault(),e.stopPropagation(),F()))}),function(e,t,n=()=>[document.body]){var r;let o,l;r=e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}},o=X(et.subscribe,et.getSnapshot,et.getSnapshot),(l=e?o.get(e):void 0)&&l.count,(0,Y.e)(()=>{if(!(!e||!t))return et.dispatch("PUSH",e,r),()=>et.dispatch("POP",e,r)},[t,e])}(R,!(z||0!==O||B),I),(0,s.useEffect)(()=>{if(0!==O||!b.current)return;let e=new ResizeObserver(e=>{for(let t of e){let e=t.target.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&F()}});return e.observe(b.current),()=>e.disconnect()},[O,b,F]);let[Z,J]=(0,j.f)(),K=(0,s.useMemo)(()=>[{dialogState:O,close:F,setTitleId:x},M],[O,M,F,x]),Q=(0,s.useMemo)(()=>({open:0===O}),[O]),ee={ref:T,id:r,role:"dialog","aria-modal":0===O||void 0,"aria-labelledby":M.titleId,"aria-describedby":Z};return s.createElement(G,{type:"Dialog",enabled:0===O,element:b,onUpdate:(0,y.z)((e,t)=>{"Dialog"===t&&(0,f.E)(e,{[q.Add]:()=>d(e=>e+1),[q.Remove]:()=>d(e=>e-1)})})},s.createElement(H,{force:!0},s.createElement(_,null,s.createElement(eu.Provider,{value:K},s.createElement(_.Group,{target:b},s.createElement(H,{force:!1},s.createElement(J,{slot:Q,name:"Dialog.Description"},s.createElement(A,{initialFocus:a,containers:I,features:N?(0,f.E)(V?"parent":"leaf",{parent:A.features.RestoreFocus,leaf:A.features.All&~A.features.FocusLock}):A.features.None},(0,p.sY)({ourProps:ee,theirProps:u,slot:Q,defaultTag:"div",features:ed,visible:0===O,name:"Dialog"})))))))),s.createElement(w._,{features:w.A.Hidden,ref:C}))}),{Backdrop:(0,p.yV)(function(e,t){let n=(0,h.M)(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:l},a]=ec("Dialog.Backdrop"),i=(0,m.T)(t);(0,s.useEffect)(()=>{if(null===a.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[a.panelRef]);let u=(0,s.useMemo)(()=>({open:0===l}),[l]);return s.createElement(H,{force:!0},s.createElement(_,null,(0,p.sY)({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:(0,p.yV)(function(e,t){let n=(0,h.M)(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:l},a]=ec("Dialog.Panel"),i=(0,m.T)(t,a.panelRef),u=(0,s.useMemo)(()=>({open:0===l}),[l]),c=(0,y.z)(e=>{e.stopPropagation()});return(0,p.sY)({ourProps:{ref:i,id:r,onClick:c},theirProps:o,slot:u,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:(0,p.yV)(function(e,t){let n=(0,h.M)(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:l,close:a}]=ec("Dialog.Overlay"),i=(0,m.T)(t),u=(0,y.z)(e=>{if(e.target===e.currentTarget){if((0,g.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),a()}}),c=(0,s.useMemo)(()=>({open:0===l}),[l]);return(0,p.sY)({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:u},theirProps:o,slot:c,defaultTag:"div",name:"Dialog.Overlay"})}),Title:(0,p.yV)(function(e,t){let n=(0,h.M)(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:a}]=ec("Dialog.Title"),i=(0,m.T)(t);(0,s.useEffect)(()=>(a(r),()=>a(null)),[r,a]);let u=(0,s.useMemo)(()=>({open:0===l}),[l]);return(0,p.sY)({ourProps:{ref:i,id:r},theirProps:o,slot:u,defaultTag:"h2",name:"Dialog.Title"})}),Description:j.d})}}]);