exports.id = 733;
exports.ids = [733];
exports.modules = {

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

/***/ 94791:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const React = __webpack_require__(91094);
function MagnifyingGlassIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ React.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ React.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ React.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    }));
}
const ForwardRef = React.forwardRef(MagnifyingGlassIcon);
module.exports = ForwardRef;


/***/ })

};
;