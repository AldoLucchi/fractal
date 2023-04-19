exports.id = 2930;
exports.ids = [2930];
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

/***/ 4045:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const React = __webpack_require__(91094);
function ArrowRightIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ React.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ React.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ React.createElement("path", {
        fillRule: "evenodd",
        d: "M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z",
        clipRule: "evenodd"
    }));
}
const ForwardRef = React.forwardRef(ArrowRightIcon);
module.exports = ForwardRef;


/***/ })

};
;