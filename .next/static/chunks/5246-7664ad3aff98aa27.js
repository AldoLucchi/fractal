(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5246],{9231:function(e,t,r){let n=r(6006),a=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 12h-15"}))});e.exports=a},5506:function(e,t,r){let n=r(6006),a=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"}))});e.exports=a},8532:function(e,t,r){let n=r(6006),a=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",clipRule:"evenodd"}))});e.exports=a},9538:function(e,t,r){"use strict";r.d(t,{p:function(){return w}});var n,a,l,o=r(6006),u=r(9325),i=r(2810),s=r(8496),c=r(3858),d=r(8277),p=r(4373),f=r(546),m=r(1795),v=r(3432),b=r(3562);let g=null!=(l=o.startTransition)?l:function(e){e()};var y=((n=y||{})[n.Open=0]="Open",n[n.Closed=1]="Closed",n),R=((a=R||{})[a.ToggleDisclosure=0]="ToggleDisclosure",a[a.CloseDisclosure=1]="CloseDisclosure",a[a.SetButtonId=2]="SetButtonId",a[a.SetPanelId=3]="SetPanelId",a[a.LinkPanel=4]="LinkPanel",a[a.UnlinkPanel=5]="UnlinkPanel",a);let h={0:e=>({...e,disclosureState:(0,u.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},I=(0,o.createContext)(null);function x(e){let t=(0,o.useContext)(I);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,x),t}return t}I.displayName="DisclosureContext";let T=(0,o.createContext)(null);T.displayName="DisclosureAPIContext";let E=(0,o.createContext)(null);function P(e,t){return(0,u.E)(t.type,h,e,t)}E.displayName="DisclosurePanelContext";let S=o.Fragment,k=i.AN.RenderStrategy|i.AN.Static,w=Object.assign((0,i.yV)(function(e,t){let{defaultOpen:r=!1,...n}=e,a=(0,o.useRef)(null),l=(0,s.T)(t,(0,s.h)(e=>{a.current=e},void 0===e.as||e.as===o.Fragment)),c=(0,o.useRef)(null),d=(0,o.useRef)(null),p=(0,o.useReducer)(P,{disclosureState:r?0:1,linkedPanel:!1,buttonRef:d,panelRef:c,buttonId:null,panelId:null}),[{disclosureState:m,buttonId:g},y]=p,R=(0,b.z)(e=>{y({type:1});let t=(0,v.r)(a);if(!t||!g)return;let r=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(g):t.getElementById(g);null==r||r.focus()}),h=(0,o.useMemo)(()=>({close:R}),[R]),x=(0,o.useMemo)(()=>({open:0===m,close:R}),[m,R]);return o.createElement(I.Provider,{value:p},o.createElement(T.Provider,{value:h},o.createElement(f.up,{value:(0,u.E)(m,{0:f.ZM.Open,1:f.ZM.Closed})},(0,i.sY)({ourProps:{ref:l},theirProps:n,slot:x,defaultTag:S,name:"Disclosure"}))))}),{Button:(0,i.yV)(function(e,t){let r=(0,c.M)(),{id:n=`headlessui-disclosure-button-${r}`,...a}=e,[l,u]=x("Disclosure.Button"),f=(0,o.useContext)(E),v=null!==f&&f===l.panelId,g=(0,o.useRef)(null),y=(0,s.T)(g,t,v?null:l.buttonRef);(0,o.useEffect)(()=>{if(!v)return u({type:2,buttonId:n}),()=>{u({type:2,buttonId:null})}},[n,u,v]);let R=(0,b.z)(e=>{var t;if(v){if(1===l.disclosureState)return;switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),u({type:0}),null==(t=l.buttonRef.current)||t.focus()}}else switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),u({type:0})}}),h=(0,b.z)(e=>{e.key===d.R.Space&&e.preventDefault()}),I=(0,b.z)(t=>{var r;(0,p.P)(t.currentTarget)||e.disabled||(v?(u({type:0}),null==(r=l.buttonRef.current)||r.focus()):u({type:0}))}),T=(0,o.useMemo)(()=>({open:0===l.disclosureState}),[l]),P=(0,m.f)(e,g),S=v?{ref:y,type:P,onKeyDown:R,onClick:I}:{ref:y,id:n,type:P,"aria-expanded":e.disabled?void 0:0===l.disclosureState,"aria-controls":l.linkedPanel?l.panelId:void 0,onKeyDown:R,onKeyUp:h,onClick:I};return(0,i.sY)({ourProps:S,theirProps:a,slot:T,defaultTag:"button",name:"Disclosure.Button"})}),Panel:(0,i.yV)(function(e,t){let r=(0,c.M)(),{id:n=`headlessui-disclosure-panel-${r}`,...a}=e,[l,u]=x("Disclosure.Panel"),{close:d}=function e(t){let r=(0,o.useContext)(T);if(null===r){let r=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return r}("Disclosure.Panel"),p=(0,s.T)(t,l.panelRef,e=>{g(()=>u({type:e?4:5}))});(0,o.useEffect)(()=>(u({type:3,panelId:n}),()=>{u({type:3,panelId:null})}),[n,u]);let m=(0,f.oJ)(),v=null!==m?(m&f.ZM.Open)===f.ZM.Open:0===l.disclosureState,b=(0,o.useMemo)(()=>({open:0===l.disclosureState,close:d}),[l,d]);return o.createElement(E.Provider,{value:l.panelId},(0,i.sY)({ourProps:{ref:p,id:n},theirProps:a,slot:b,defaultTag:"div",features:k,visible:v,name:"Disclosure.Panel"}))})})},9323:function(e,t,r){"use strict";r.d(t,{_:function(){return d},b:function(){return c}});var n=r(6006),a=r(3858),l=r(2810),o=r(961),u=r(8496),i=r(3562);let s=(0,n.createContext)(null);function c(){let[e,t]=(0,n.useState)([]);return[e.length>0?e.join(" "):void 0,(0,n.useMemo)(()=>function(e){let r=(0,i.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let r=t.slice(),n=r.indexOf(e);return -1!==n&&r.splice(n,1),r}))),a=(0,n.useMemo)(()=>({register:r,slot:e.slot,name:e.name,props:e.props}),[r,e.slot,e.name,e.props]);return n.createElement(s.Provider,{value:a},e.children)},[t])]}let d=Object.assign((0,l.yV)(function(e,t){let r=(0,a.M)(),{id:i=`headlessui-label-${r}`,passive:c=!1,...d}=e,p=function e(){let t=(0,n.useContext)(s);if(null===t){let t=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),f=(0,u.T)(t);(0,o.e)(()=>p.register(i),[i,p.register]);let m={ref:f,...p.props,id:i};return c&&("onClick"in m&&(delete m.htmlFor,delete m.onClick),"onClick"in d&&delete d.onClick),(0,l.sY)({ourProps:m,theirProps:d,slot:p.slot||{},defaultTag:"label",name:p.name||"Label"})}),{})},3925:function(e,t,r){"use strict";r.d(t,{v:function(){return z}});var n,a,l,o=r(6006),u=r(9325),i=r(2810),s=r(650),c=r(8807),d=r(961),p=r(8496),f=r(3858),m=r(8277),v=r(5216),b=r(4373),g=r(2243),y=r(5880),R=r(2391),h=r(546),I=r(1795),x=r(9101),T=r(3562),E=r(3017),P=((n=P||{})[n.Open=0]="Open",n[n.Closed=1]="Closed",n),S=((a=S||{})[a.Pointer=0]="Pointer",a[a.Other=1]="Other",a),k=((l=k||{})[l.OpenMenu=0]="OpenMenu",l[l.CloseMenu=1]="CloseMenu",l[l.GoToItem=2]="GoToItem",l[l.Search=3]="Search",l[l.ClearSearch=4]="ClearSearch",l[l.RegisterItem=5]="RegisterItem",l[l.UnregisterItem=6]="UnregisterItem",l);function w(e,t=e=>e){let r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,n=(0,g.z2)(t(e.items.slice()),e=>e.dataRef.current.domRef.current),a=r?n.indexOf(r):null;return -1===a&&(a=null),{items:n,activeItemIndex:a}}let O={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,t)=>{var r;let n=w(e),a=(0,v.d)(t,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:a,activationTrigger:null!=(r=t.trigger)?r:1}},3:(e,t)=>{let r=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),a=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find(e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled}),l=a?e.items.indexOf(a):-1;return -1===l||l===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:l,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let r=w(e,e=>[...e,{id:t.id,dataRef:t.dataRef}]);return{...e,...r}},6:(e,t)=>{let r=w(e,e=>{let r=e.findIndex(e=>e.id===t.id);return -1!==r&&e.splice(r,1),e});return{...e,...r,activationTrigger:1}}},M=(0,o.createContext)(null);function C(e){let t=(0,o.useContext)(M);if(null===t){let t=Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,C),t}return t}function D(e,t){return(0,u.E)(t.type,O,e,t)}M.displayName="MenuContext";let A=o.Fragment,N=i.AN.RenderStrategy|i.AN.Static,F=o.Fragment,z=Object.assign((0,i.yV)(function(e,t){let r=(0,o.useReducer)(D,{menuState:1,buttonRef:(0,o.createRef)(),itemsRef:(0,o.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:n,itemsRef:a,buttonRef:l},s]=r,c=(0,p.T)(t);(0,y.O)([l,a],(e,t)=>{var r;s({type:1}),(0,g.sP)(t,g.tJ.Loose)||(e.preventDefault(),null==(r=l.current)||r.focus())},0===n);let d=(0,T.z)(()=>{s({type:1})}),f=(0,o.useMemo)(()=>({open:0===n,close:d}),[n,d]);return o.createElement(M.Provider,{value:r},o.createElement(h.up,{value:(0,u.E)(n,{0:h.ZM.Open,1:h.ZM.Closed})},(0,i.sY)({ourProps:{ref:c},theirProps:e,slot:f,defaultTag:A,name:"Menu"})))}),{Button:(0,i.yV)(function(e,t){var r;let n=(0,f.M)(),{id:a=`headlessui-menu-button-${n}`,...l}=e,[u,s]=C("Menu.Button"),d=(0,p.T)(u.buttonRef,t),g=(0,c.G)(),y=(0,T.z)(e=>{switch(e.key){case m.R.Space:case m.R.Enter:case m.R.ArrowDown:e.preventDefault(),e.stopPropagation(),s({type:0}),g.nextFrame(()=>s({type:2,focus:v.T.First}));break;case m.R.ArrowUp:e.preventDefault(),e.stopPropagation(),s({type:0}),g.nextFrame(()=>s({type:2,focus:v.T.Last}))}}),R=(0,T.z)(e=>{e.key===m.R.Space&&e.preventDefault()}),h=(0,T.z)(t=>{if((0,b.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===u.menuState?(s({type:1}),g.nextFrame(()=>{var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(t.preventDefault(),s({type:0})))}),x=(0,o.useMemo)(()=>({open:0===u.menuState}),[u]),E={ref:d,id:a,type:(0,I.f)(e,u.buttonRef),"aria-haspopup":"menu","aria-controls":null==(r=u.itemsRef.current)?void 0:r.id,"aria-expanded":e.disabled?void 0:0===u.menuState,onKeyDown:y,onKeyUp:R,onClick:h};return(0,i.sY)({ourProps:E,theirProps:l,slot:x,defaultTag:"button",name:"Menu.Button"})}),Items:(0,i.yV)(function(e,t){var r,n;let a=(0,f.M)(),{id:l=`headlessui-menu-items-${a}`,...u}=e,[d,b]=C("Menu.Items"),y=(0,p.T)(d.itemsRef,t),I=(0,x.i)(d.itemsRef),E=(0,c.G)(),P=(0,h.oJ)(),S=null!==P?(P&h.ZM.Open)===h.ZM.Open:0===d.menuState;(0,o.useEffect)(()=>{let e=d.itemsRef.current;e&&0===d.menuState&&e!==(null==I?void 0:I.activeElement)&&e.focus({preventScroll:!0})},[d.menuState,d.itemsRef,I]),(0,R.B)({container:d.itemsRef.current,enabled:0===d.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let k=(0,T.z)(e=>{var t,r;switch(E.dispose(),e.key){case m.R.Space:if(""!==d.searchQuery)return e.preventDefault(),e.stopPropagation(),b({type:3,value:e.key});case m.R.Enter:if(e.preventDefault(),e.stopPropagation(),b({type:1}),null!==d.activeItemIndex){let{dataRef:e}=d.items[d.activeItemIndex];null==(r=null==(t=e.current)?void 0:t.domRef.current)||r.click()}(0,g.wI)(d.buttonRef.current);break;case m.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),b({type:2,focus:v.T.Next});case m.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),b({type:2,focus:v.T.Previous});case m.R.Home:case m.R.PageUp:return e.preventDefault(),e.stopPropagation(),b({type:2,focus:v.T.First});case m.R.End:case m.R.PageDown:return e.preventDefault(),e.stopPropagation(),b({type:2,focus:v.T.Last});case m.R.Escape:e.preventDefault(),e.stopPropagation(),b({type:1}),(0,s.k)().nextFrame(()=>{var e;return null==(e=d.buttonRef.current)?void 0:e.focus({preventScroll:!0})});break;case m.R.Tab:e.preventDefault(),e.stopPropagation(),b({type:1}),(0,s.k)().nextFrame(()=>{(0,g.EO)(d.buttonRef.current,e.shiftKey?g.TO.Previous:g.TO.Next)});break;default:1===e.key.length&&(b({type:3,value:e.key}),E.setTimeout(()=>b({type:4}),350))}}),w=(0,T.z)(e=>{e.key===m.R.Space&&e.preventDefault()}),O=(0,o.useMemo)(()=>({open:0===d.menuState}),[d]),M={"aria-activedescendant":null===d.activeItemIndex||null==(r=d.items[d.activeItemIndex])?void 0:r.id,"aria-labelledby":null==(n=d.buttonRef.current)?void 0:n.id,id:l,onKeyDown:k,onKeyUp:w,role:"menu",tabIndex:0,ref:y};return(0,i.sY)({ourProps:M,theirProps:u,slot:O,defaultTag:"div",features:N,visible:S,name:"Menu.Items"})}),Item:(0,i.yV)(function(e,t){let r=(0,f.M)(),{id:n=`headlessui-menu-item-${r}`,disabled:a=!1,...l}=e,[u,c]=C("Menu.Item"),m=null!==u.activeItemIndex&&u.items[u.activeItemIndex].id===n,b=(0,o.useRef)(null),y=(0,p.T)(t,b);(0,d.e)(()=>{if(0!==u.menuState||!m||0===u.activationTrigger)return;let e=(0,s.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=b.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[b,m,u.menuState,u.activationTrigger,u.activeItemIndex]);let R=(0,o.useRef)({disabled:a,domRef:b});(0,d.e)(()=>{R.current.disabled=a},[R,a]),(0,d.e)(()=>{var e,t;R.current.textValue=null==(t=null==(e=b.current)?void 0:e.textContent)?void 0:t.toLowerCase()},[R,b]),(0,d.e)(()=>(c({type:5,id:n,dataRef:R}),()=>c({type:6,id:n})),[R,n]);let h=(0,T.z)(()=>{c({type:1})}),I=(0,T.z)(e=>{if(a)return e.preventDefault();c({type:1}),(0,g.wI)(u.buttonRef.current)}),x=(0,T.z)(()=>{if(a)return c({type:2,focus:v.T.Nothing});c({type:2,focus:v.T.Specific,id:n})}),P=(0,E.g)(),S=(0,T.z)(e=>P.update(e)),k=(0,T.z)(e=>{P.wasMoved(e)&&(a||m||c({type:2,focus:v.T.Specific,id:n,trigger:0}))}),w=(0,T.z)(e=>{P.wasMoved(e)&&(a||m&&c({type:2,focus:v.T.Nothing}))}),O=(0,o.useMemo)(()=>({active:m,disabled:a,close:h}),[m,a,h]);return(0,i.sY)({ourProps:{id:n,ref:y,role:"menuitem",tabIndex:!0===a?void 0:-1,"aria-disabled":!0===a||void 0,disabled:void 0,onClick:I,onFocus:x,onPointerEnter:S,onMouseEnter:S,onPointerMove:k,onMouseMove:k,onPointerLeave:w,onMouseLeave:w},theirProps:l,slot:O,defaultTag:F,name:"Menu.Item"})})})},4293:function(e,t,r){"use strict";r.d(t,{E:function(){return C}});var n,a,l=r(6006),o=r(2810),u=r(3858),i=r(9325),s=r(961),c=r(8277),d=r(2243),p=r(9315),f=r(9323),m=r(4058),v=r(2391),b=r(8496),g=r(5106),y=r(5969),R=r(3432),h=r(3562),I=r(2490),x=r(4373),T=r(1485),E=r(8807),P=((n=P||{})[n.RegisterOption=0]="RegisterOption",n[n.UnregisterOption=1]="UnregisterOption",n);let S={0(e,t){let r=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,d.z2)(r,e=>e.element.current)}},1(e,t){let r=e.options.slice(),n=e.options.findIndex(e=>e.id===t.id);return -1===n?e:(r.splice(n,1),{...e,options:r})}},k=(0,l.createContext)(null);k.displayName="RadioGroupDataContext";let w=(0,l.createContext)(null);function O(e,t){return(0,i.E)(t.type,S,e,t)}w.displayName="RadioGroupActionsContext";var M=((a=M||{})[a.Empty=1]="Empty",a[a.Active=2]="Active",a);let C=Object.assign((0,o.yV)(function(e,t){let r=(0,u.M)(),{id:n=`headlessui-radiogroup-${r}`,value:a,defaultValue:i,form:s,name:p,onChange:x,by:T=(e,t)=>e===t,disabled:P=!1,...S}=e,M=(0,h.z)("string"==typeof T?(e,t)=>(null==e?void 0:e[T])===(null==t?void 0:t[T]):T),[C,D]=(0,l.useReducer)(O,{options:[]}),A=C.options,[N,F]=(0,f.b)(),[z,L]=(0,m.f)(),_=(0,l.useRef)(null),U=(0,b.T)(_,t),[j,B]=(0,I.q)(a,x,i),G=(0,l.useMemo)(()=>A.find(e=>!e.propsRef.current.disabled),[A]),V=(0,l.useMemo)(()=>A.some(e=>M(e.propsRef.current.value,j)),[A,j]),Y=(0,h.z)(e=>{var t;if(P||M(e,j))return!1;let r=null==(t=A.find(t=>M(t.propsRef.current.value,e)))?void 0:t.propsRef.current;return(null==r||!r.disabled)&&(null==B||B(e),!0)});(0,v.B)({container:_.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let $=(0,h.z)(e=>{let t=_.current;if(!t)return;let r=(0,R.r)(t),n=A.filter(e=>!1===e.propsRef.current.disabled).map(e=>e.element.current);switch(e.key){case c.R.Enter:(0,y.g)(e.currentTarget);break;case c.R.ArrowLeft:case c.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(n,d.TO.Previous|d.TO.WrapAround)===d.fE.Success){let e=A.find(e=>e.element.current===(null==r?void 0:r.activeElement));e&&Y(e.propsRef.current.value)}break;case c.R.ArrowRight:case c.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(n,d.TO.Next|d.TO.WrapAround)===d.fE.Success){let e=A.find(e=>e.element.current===(null==r?void 0:r.activeElement));e&&Y(e.propsRef.current.value)}break;case c.R.Space:{e.preventDefault(),e.stopPropagation();let t=A.find(e=>e.element.current===(null==r?void 0:r.activeElement));t&&Y(t.propsRef.current.value)}}}),K=(0,h.z)(e=>(D({type:0,...e}),()=>D({type:1,id:e.id}))),W=(0,l.useMemo)(()=>({value:j,firstOption:G,containsCheckedOption:V,disabled:P,compare:M,...C}),[j,G,V,P,M,C]),Q=(0,l.useMemo)(()=>({registerOption:K,change:Y}),[K,Y]),Z=(0,l.useMemo)(()=>({value:j}),[j]),q=(0,l.useRef)(null),H=(0,E.G)();return(0,l.useEffect)(()=>{q.current&&void 0!==i&&H.addEventListener(q.current,"reset",()=>{Y(i)})},[q,Y]),l.createElement(L,{name:"RadioGroup.Description"},l.createElement(F,{name:"RadioGroup.Label"},l.createElement(w.Provider,{value:Q},l.createElement(k.Provider,{value:W},null!=p&&null!=j&&(0,y.t)({[p]:j}).map(([e,t],r)=>l.createElement(g._,{features:g.A.Hidden,ref:0===r?e=>{var t;q.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,o.oA)({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,form:s,name:e,value:t})})),(0,o.sY)({ourProps:{ref:U,id:n,role:"radiogroup","aria-labelledby":N,"aria-describedby":z,onKeyDown:$},theirProps:S,slot:Z,defaultTag:"div",name:"RadioGroup"})))))}),{Option:(0,o.yV)(function(e,t){var r;let n=(0,u.M)(),{id:a=`headlessui-radiogroup-option-${n}`,value:i,disabled:c=!1,...d}=e,v=(0,l.useRef)(null),g=(0,b.T)(v,t),[y,R]=(0,f.b)(),[I,E]=(0,m.f)(),{addFlag:P,removeFlag:S,hasFlag:O}=(0,p.V)(1),M=(0,T.E)({value:i,disabled:c}),C=function e(t){let r=(0,l.useContext)(k);if(null===r){let r=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return r}("RadioGroup.Option"),D=function e(t){let r=(0,l.useContext)(w);if(null===r){let r=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return r}("RadioGroup.Option");(0,s.e)(()=>D.registerOption({id:a,element:v,propsRef:M}),[a,D,v,e]);let A=(0,h.z)(e=>{var t;if((0,x.P)(e.currentTarget))return e.preventDefault();D.change(i)&&(P(2),null==(t=v.current)||t.focus())}),N=(0,h.z)(e=>{if((0,x.P)(e.currentTarget))return e.preventDefault();P(2)}),F=(0,h.z)(()=>S(2)),z=(null==(r=C.firstOption)?void 0:r.id)===a,L=C.disabled||c,_=C.compare(C.value,i),U={ref:g,id:a,role:"radio","aria-checked":_?"true":"false","aria-labelledby":y,"aria-describedby":I,"aria-disabled":!!L||void 0,tabIndex:L?-1:_||!C.containsCheckedOption&&z?0:-1,onClick:L?void 0:A,onFocus:L?void 0:N,onBlur:L?void 0:F},j=(0,l.useMemo)(()=>({checked:_,disabled:L,active:O(2)}),[_,L,O]);return l.createElement(E,{name:"RadioGroup.Description"},l.createElement(R,{name:"RadioGroup.Label"},(0,o.sY)({ourProps:U,theirProps:d,slot:j,defaultTag:"div",name:"RadioGroup.Option"})))}),Label:f._,Description:m.d})},1888:function(e,t,r){"use strict";r.d(t,{O:function(){return F}});var n,a,l,o=r(6006),u=r(2810),i=r(3858),s=r(9325),c=r(8277),d=r(2243),p=r(961),f=r(8496),m=r(1795),v=r(1485),b=r(5106);function g({onFocus:e}){let[t,r]=(0,o.useState)(!0);return t?o.createElement(b._,{as:"button",type:"button",features:b.A.Focusable,onFocus:t=>{t.preventDefault();let n,a=50;n=requestAnimationFrame(function t(){if(a--<=0){n&&cancelAnimationFrame(n);return}if(e()){r(!1),cancelAnimationFrame(n);return}n=requestAnimationFrame(t)})}}):null}var y=r(3562),R=r(670),h=r(3432);let I=o.createContext(null);function x({children:e}){let t=o.useRef({groups:new Map,get(e,t){var r;let n=this.groups.get(e);n||(n=new Map,this.groups.set(e,n));let a=null!=(r=n.get(t))?r:0;return n.set(t,a+1),[Array.from(n.keys()).indexOf(t),function(){let e=n.get(t);e>1?n.set(t,e-1):n.delete(t)}]}});return o.createElement(I.Provider,{value:t},e)}function T(e){let t=o.useContext(I);if(!t)throw Error("You must wrap your component in a <StableCollection>");let r=function(){var e,t,r;let n=null!=(r=null==(t=null==(e=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:t.current)?r:null;if(!n)return Symbol();let a=[],l=n;for(;l;)a.push(l.index),l=l.return;return"$."+a.join(".")}(),[n,a]=t.current.get(e,r);return o.useEffect(()=>a,[]),n}var E=((n=E||{})[n.Forwards=0]="Forwards",n[n.Backwards=1]="Backwards",n),P=((a=P||{})[a.Less=-1]="Less",a[a.Equal=0]="Equal",a[a.Greater=1]="Greater",a),S=((l=S||{})[l.SetSelectedIndex=0]="SetSelectedIndex",l[l.RegisterTab=1]="RegisterTab",l[l.UnregisterTab=2]="UnregisterTab",l[l.RegisterPanel=3]="RegisterPanel",l[l.UnregisterPanel=4]="UnregisterPanel",l);let k={0(e,t){var r;let n=(0,d.z2)(e.tabs,e=>e.current),a=(0,d.z2)(e.panels,e=>e.current),l=n.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),o={...e,tabs:n,panels:a};if(t.index<0||t.index>n.length-1){let r=(0,s.E)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,s.E)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});return 0===l.length?o:{...o,selectedIndex:(0,s.E)(r,{0:()=>n.indexOf(l[0]),1:()=>n.indexOf(l[l.length-1])})}}let u=n.slice(0,t.index),i=[...n.slice(t.index),...u].find(e=>l.includes(e));if(!i)return o;let c=null!=(r=n.indexOf(i))?r:e.selectedIndex;return -1===c&&(c=e.selectedIndex),{...o,selectedIndex:c}},1(e,t){var r;if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],a=(0,d.z2)([...e.tabs,t.tab],e=>e.current),l=null!=(r=a.indexOf(n))?r:e.selectedIndex;return -1===l&&(l=e.selectedIndex),{...e,tabs:a,selectedIndex:l}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,d.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},w=(0,o.createContext)(null);function O(e){let t=(0,o.useContext)(w);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,O),t}return t}w.displayName="TabsDataContext";let M=(0,o.createContext)(null);function C(e){let t=(0,o.useContext)(M);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,C),t}return t}function D(e,t){return(0,s.E)(t.type,k,e,t)}M.displayName="TabsActionsContext";let A=o.Fragment,N=u.AN.RenderStrategy|u.AN.Static,F=Object.assign((0,u.yV)(function(e,t){var r,n;let a=(0,i.M)(),{id:l=`headlessui-tabs-tab-${a}`,...v}=e,{orientation:b,activation:g,selectedIndex:I,tabs:x,panels:E}=O("Tab"),P=C("Tab"),S=O("Tab"),k=(0,o.useRef)(null),w=(0,f.T)(k,t);(0,p.e)(()=>P.registerTab(k),[P,k]);let M=T("tabs"),D=x.indexOf(k);-1===D&&(D=M);let A=D===I,N=(0,y.z)(e=>{var t;let r=e();if(r===d.fE.Success&&"auto"===g){let e=null==(t=(0,h.r)(k))?void 0:t.activeElement,r=S.tabs.findIndex(t=>t.current===e);-1!==r&&P.change(r)}return r}),F=(0,y.z)(e=>{let t=x.map(e=>e.current).filter(Boolean);if(e.key===c.R.Space||e.key===c.R.Enter){e.preventDefault(),e.stopPropagation(),P.change(D);return}switch(e.key){case c.R.Home:case c.R.PageUp:return e.preventDefault(),e.stopPropagation(),N(()=>(0,d.jA)(t,d.TO.First));case c.R.End:case c.R.PageDown:return e.preventDefault(),e.stopPropagation(),N(()=>(0,d.jA)(t,d.TO.Last))}if(N(()=>(0,s.E)(b,{vertical:()=>e.key===c.R.ArrowUp?(0,d.jA)(t,d.TO.Previous|d.TO.WrapAround):e.key===c.R.ArrowDown?(0,d.jA)(t,d.TO.Next|d.TO.WrapAround):d.fE.Error,horizontal:()=>e.key===c.R.ArrowLeft?(0,d.jA)(t,d.TO.Previous|d.TO.WrapAround):e.key===c.R.ArrowRight?(0,d.jA)(t,d.TO.Next|d.TO.WrapAround):d.fE.Error}))===d.fE.Success)return e.preventDefault()}),z=(0,o.useRef)(!1),L=(0,y.z)(()=>{var e;z.current||(z.current=!0,null==(e=k.current)||e.focus(),P.change(D),(0,R.Y)(()=>{z.current=!1}))}),_=(0,y.z)(e=>{e.preventDefault()}),U=(0,o.useMemo)(()=>({selected:A}),[A]),j={ref:w,onKeyDown:F,onMouseDown:_,onClick:L,id:l,role:"tab",type:(0,m.f)(e,k),"aria-controls":null==(n=null==(r=E[D])?void 0:r.current)?void 0:n.id,"aria-selected":A,tabIndex:A?0:-1};return(0,u.sY)({ourProps:j,theirProps:v,slot:U,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,u.yV)(function(e,t){let{defaultIndex:r=0,vertical:n=!1,manual:a=!1,onChange:l,selectedIndex:i=null,...s}=e,c=n?"vertical":"horizontal",m=a?"manual":"auto",b=null!==i,R=(0,f.T)(t),[h,I]=(0,o.useReducer)(D,{selectedIndex:null!=i?i:r,tabs:[],panels:[]}),T=(0,o.useMemo)(()=>({selectedIndex:h.selectedIndex}),[h.selectedIndex]),E=(0,v.E)(l||(()=>{})),P=(0,v.E)(h.tabs),S=(0,o.useMemo)(()=>({orientation:c,activation:m,...h}),[c,m,h]),k=(0,y.z)(e=>(I({type:1,tab:e}),()=>I({type:2,tab:e}))),O=(0,y.z)(e=>(I({type:3,panel:e}),()=>I({type:4,panel:e}))),C=(0,y.z)(e=>{N.current!==e&&E.current(e),b||I({type:0,index:e})}),N=(0,v.E)(b?e.selectedIndex:h.selectedIndex),F=(0,o.useMemo)(()=>({registerTab:k,registerPanel:O,change:C}),[]);return(0,p.e)(()=>{I({type:0,index:null!=i?i:r})},[i]),(0,p.e)(()=>{if(void 0===N.current||h.tabs.length<=0)return;let e=(0,d.z2)(h.tabs,e=>e.current);e.some((e,t)=>h.tabs[t]!==e)&&C(e.indexOf(h.tabs[N.current]))}),o.createElement(x,null,o.createElement(M.Provider,{value:F},o.createElement(w.Provider,{value:S},S.tabs.length<=0&&o.createElement(g,{onFocus:()=>{var e,t;for(let r of P.current)if((null==(e=r.current)?void 0:e.tabIndex)===0)return null==(t=r.current)||t.focus(),!0;return!1}}),(0,u.sY)({ourProps:{ref:R},theirProps:s,slot:T,defaultTag:A,name:"Tabs"}))))}),List:(0,u.yV)(function(e,t){let{orientation:r,selectedIndex:n}=O("Tab.List"),a=(0,f.T)(t);return(0,u.sY)({ourProps:{ref:a,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:"div",name:"Tabs.List"})}),Panels:(0,u.yV)(function(e,t){let{selectedIndex:r}=O("Tab.Panels"),n=(0,f.T)(t),a=(0,o.useMemo)(()=>({selectedIndex:r}),[r]);return(0,u.sY)({ourProps:{ref:n},theirProps:e,slot:a,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,u.yV)(function(e,t){var r,n,a,l;let s=(0,i.M)(),{id:c=`headlessui-tabs-panel-${s}`,tabIndex:d=0,...m}=e,{selectedIndex:v,tabs:g,panels:y}=O("Tab.Panel"),R=C("Tab.Panel"),h=(0,o.useRef)(null),I=(0,f.T)(h,t);(0,p.e)(()=>R.registerPanel(h),[R,h]);let x=T("panels"),E=y.indexOf(h);-1===E&&(E=x);let P=E===v,S=(0,o.useMemo)(()=>({selected:P}),[P]),k={ref:I,id:c,role:"tabpanel","aria-labelledby":null==(n=null==(r=g[E])?void 0:r.current)?void 0:n.id,tabIndex:P?d:-1};return P||null!=(a=m.unmount)&&!a||null!=(l=m.static)&&l?(0,u.sY)({ourProps:k,theirProps:m,slot:S,defaultTag:"div",features:N,visible:P,name:"Tabs.Panel"}):o.createElement(b._,{as:"span",...k})})})},2490:function(e,t,r){"use strict";r.d(t,{q:function(){return l}});var n=r(6006),a=r(3562);function l(e,t,r){let[l,o]=(0,n.useState)(r),u=void 0!==e,i=(0,n.useRef)(u),s=(0,n.useRef)(!1),c=(0,n.useRef)(!1);return!u||i.current||s.current?u||!i.current||c.current||(c.current=!0,i.current=u,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(s.current=!0,i.current=u,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[u?e:l,(0,a.z)(e=>(u||o(e),null==t?void 0:t(e)))]}},1795:function(e,t,r){"use strict";r.d(t,{f:function(){return o}});var n=r(6006),a=r(961);function l(e){var t;if(e.type)return e.type;let r=null!=(t=e.as)?t:"button";if("string"==typeof r&&"button"===r.toLowerCase())return"button"}function o(e,t){let[r,o]=(0,n.useState)(()=>l(e));return(0,a.e)(()=>{o(l(e))},[e.type,e.as]),(0,a.e)(()=>{r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")},[r,t]),r}},3017:function(e,t,r){"use strict";r.d(t,{g:function(){return l}});var n=r(6006);function a(e){return[e.screenX,e.screenY]}function l(){let e=(0,n.useRef)([-1,-1]);return{wasMoved(t){let r=a(t);return(e.current[0]!==r[0]||e.current[1]!==r[1])&&(e.current=r,!0)},update(t){e.current=a(t)}}}},2391:function(e,t,r){"use strict";r.d(t,{B:function(){return o}});var n=r(6006),a=r(961),l=r(3432);function o({container:e,accept:t,walk:r,enabled:o=!0}){let u=(0,n.useRef)(t),i=(0,n.useRef)(r);(0,n.useEffect)(()=>{u.current=t,i.current=r},[t,r]),(0,a.e)(()=>{if(!e||!o)return;let t=(0,l.r)(e);if(!t)return;let r=u.current,n=i.current,a=Object.assign(e=>r(e),{acceptNode:r}),s=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,a,!1);for(;s.nextNode();)n(s.currentNode)},[e,o,u,i])}},5216:function(e,t,r){"use strict";r.d(t,{T:function(){return a},d:function(){return l}});var n,a=((n=a||{})[n.First=0]="First",n[n.Previous=1]="Previous",n[n.Next=2]="Next",n[n.Last=3]="Last",n[n.Specific=4]="Specific",n[n.Nothing=5]="Nothing",n);function l(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),a=null!=n?n:-1,l=(()=>{switch(e.focus){case 0:return r.findIndex(e=>!t.resolveDisabled(e));case 1:{let e=r.slice().reverse().findIndex((e,r,n)=>(-1===a||!(n.length-r-1>=a))&&!t.resolveDisabled(e));return -1===e?e:r.length-1-e}case 2:return r.findIndex((e,r)=>!(r<=a)&&!t.resolveDisabled(e));case 3:{let e=r.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return -1===e?e:r.length-1-e}case 4:return r.findIndex(r=>t.resolveId(r)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===l?n:l}},5969:function(e,t,r){"use strict";function n(e,t){return e?e+"["+t+"]":t}function a(e){var t;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r){for(let e of r.elements)if("INPUT"===e.tagName&&"submit"===e.type||"BUTTON"===e.tagName&&"submit"===e.type||"INPUT"===e.nodeName&&"image"===e.type){e.click();return}}}r.d(t,{g:function(){return a},t:function(){return function e(t={},r=null,a=[]){for(let[l,o]of Object.entries(t))!function t(r,a,l){if(Array.isArray(l))for(let[e,o]of l.entries())t(r,n(a,e.toString()),o);else l instanceof Date?r.push([a,l.toISOString()]):"boolean"==typeof l?r.push([a,l?"1":"0"]):"string"==typeof l?r.push([a,l]):"number"==typeof l?r.push([a,`${l}`]):null==l?r.push([a,""]):e(l,a,r)}(a,n(r,l),o);return a}}})}}]);