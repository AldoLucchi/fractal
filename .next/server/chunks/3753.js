exports.id = 3753;
exports.ids = [3753];
exports.modules = {

/***/ 7393:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(18038);

function ArrowUpRightIcon({
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
    d: "M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
  }));
}

const ForwardRef = React.forwardRef(ArrowUpRightIcon);
module.exports = ForwardRef;

/***/ }),

/***/ 21245:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(18038);

function ChevronDownIcon({
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
    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  }));
}

const ForwardRef = React.forwardRef(ChevronDownIcon);
module.exports = ForwardRef;

/***/ }),

/***/ 5395:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(18038);

function ChevronLeftIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = React.forwardRef(ChevronLeftIcon);
module.exports = ForwardRef;

/***/ }),

/***/ 51498:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(18038);

function ChevronRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = React.forwardRef(ChevronRightIcon);
module.exports = ForwardRef;

/***/ }),

/***/ 23800:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var e=function(t){if("undefined"==typeof document)return 0;if(document.body&&(!document.readyState||"loading"!==document.readyState)){if(!0!==t&&"number"==typeof e.__cache)return e.__cache;var o=document.createElement("div"),d=o.style;d.display="block",d.position="absolute",d.width="100px",d.height="100px",d.left="-999px",d.top="-999px",d.overflow="scroll",document.body.insertBefore(o,null);var r=o.clientWidth;if(0!==r)return e.__cache=100-r,document.body.removeChild(o),e.__cache;document.body.removeChild(o)}};exports.scrollbarWidth=e;


/***/ }),

/***/ 71198:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 67937:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(98036);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true"
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 9469:
/***/ ((module) => {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ 34703:
/***/ ((__unused_webpack_module, exports) => {

var keyList = Object.keys;

exports.equal = function equal (a, b) {
  if (a === b) return true;
  if (!(a instanceof Object) || !(b instanceof Object)) return false;

  var keys = keyList(a);
  var length = keys.length;

  for (var i = 0; i < length; i++)
    if (!(keys[i] in b)) return false;

  for (var i = 0; i < length; i++)
    if (a[keys[i]] !== b[keys[i]]) return false;

  return length === keyList(b).length;
};


/***/ }),

/***/ 32259:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ 31141:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.addon = function (renderer) {
    // CSSOM support only browser environment.
    if (!renderer.client) return;

    if (false) {}

    // Style sheet for media queries.
    document.head.appendChild(renderer.msh = document.createElement('style'));

    renderer.createRule = function (selector, prelude) {
        var rawCss = selector + '{}';
        if (prelude) rawCss = prelude + '{' + rawCss + '}';
        var sheet = prelude ? renderer.msh.sheet : renderer.sh.sheet;
        var index = sheet.insertRule(rawCss, sheet.cssRules.length);
        var rule = (sheet.cssRules || sheet.rules)[index];

        // Keep track of `index` where rule was inserted in the sheet. This is
        // needed for rule deletion.
        rule.index = index;

        if (prelude) {
            // If rule has media query (it has prelude), move style (CSSStyleDeclaration)
            // object to the "top" to normalize it with a rule without the media
            // query, so that both rules have `.style` property available.
            var selectorRule = (rule.cssRules || rule.rules)[0];
            rule.style = selectorRule.style;
            rule.styleMap = selectorRule.styleMap;
        }

        return rule;
    };
};


/***/ }),

/***/ 57066:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var removeRule = (__webpack_require__(47558)/* .removeRule */ .D);

exports.addon = function (renderer) {
    // VCSSOM support only browser environment.
    if (!renderer.client) return;

    if (false) {}

    var kebab = renderer.kebab;

    function VRule (selector, prelude) {
        this.rule = renderer.createRule(selector, prelude);
        this.decl = {};
    }
    VRule.prototype.diff = function (newDecl) {
        var oldDecl = this.decl;
        var style = this.rule.style;
        var property;
        for (property in oldDecl)
            if (newDecl[property] === undefined)
                style.removeProperty(property);
        for (property in newDecl)
            if (newDecl[property] !== oldDecl[property])
                style.setProperty(kebab(property), newDecl[property]);
        this.decl = newDecl;
    };
    VRule.prototype.del = function () {
        removeRule(this.rule);
    };

    function VSheet () {
        /**
         * {
         *   '<at-rule-prelude>': {
         *     '<selector>': {
         *       color: 'red
         *     }
         *   }
         * }
         */
        this.tree = {};
    }
    VSheet.prototype.diff = function (newTree) {
        var oldTree = this.tree;

        // Remove media queries not present in new tree.
        for (var prelude in oldTree) {
            if (newTree[prelude] === undefined) {
                var rules = oldTree[prelude];
                for (var selector in rules)
                    rules[selector].del();
            }
        }

        for (var prelude in newTree) {
            if (oldTree[prelude] === undefined) {
                // Whole media query is new.
                for (var selector in newTree[prelude]) {
                    var rule = new VRule(selector, prelude);
                    rule.diff(newTree[prelude][selector]);
                    newTree[prelude][selector] = rule;
                }
            } else {
                // Old tree already has rules with this media query.
                var oldRules = oldTree[prelude];
                var newRules = newTree[prelude];

                // Remove rules not present in new tree.
                for (var selector in oldRules)
                    if (!newRules[selector])
                        oldRules[selector].del();

                // Apply new rules.
                for (var selector in newRules) {
                    var rule = oldRules[selector];
                    if (rule) {
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    } else {
                        rule = new VRule(selector, prelude);
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    }
                }
            }
        }

        this.tree = newTree;
    };

    renderer.VRule = VRule;
    renderer.VSheet = VSheet;
};


/***/ }),

/***/ 38805:
/***/ ((__unused_webpack_module, exports) => {

function cssToTree (tree, css, selector, prelude) {
    var declarations = {};
    var hasDeclarations = false;
    var key, value;

    for (key in css) {
        value = css[key];
        if (typeof value !== 'object') {
            hasDeclarations = true;
            declarations[key] = value;
        }
    }

    if (hasDeclarations) {
        if (!tree[prelude]) tree[prelude] = {};
        tree[prelude][selector] = declarations;
    }

    for (key in css) {
        value = css[key];
        if (typeof value === 'object') {
            if (key[0] === '@') {
                cssToTree(tree, value, selector, key);
            } else {
                var hasCurrentSymbol = key.indexOf('&') > -1;
                var selectorParts = selector.split(',');
                if (hasCurrentSymbol) {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = key.replace(/&/g, selectorParts[i]);
                    }
                } else {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = selectorParts[i] + ' ' + key;
                    }
                }
                cssToTree(tree, value, selectorParts.join(','), prelude);
            }
        }
    }
};

exports.cssToTree = cssToTree;


/***/ }),

/***/ 47558:
/***/ ((__unused_webpack_module, exports) => {

function removeRule (rule) {
    var maxIndex = rule.index;
    var sh = rule.parentStyleSheet;
    var rules = sh.cssRules || sh.rules;
    maxIndex = Math.max(maxIndex, rules.length - 1);
    while (maxIndex >= 0) {
        if (rules[maxIndex] === rule) {
            sh.deleteRule(maxIndex);
            break;
        }
        maxIndex--;
    }
}

exports.D = removeRule;


/***/ }),

/***/ 67225:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var KEBAB_REGEX = /[A-Z]/g;

var hash = function (str) {
    var h = 5381, i = str.length;

    while (i) h = (h * 33) ^ str.charCodeAt(--i);

    return '_' + (h >>> 0).toString(36);
};

exports.create = function (config) {
    config = config || {};
    var assign = config.assign || Object.assign;
    var client = typeof window === 'object';

    // Check if we are really in browser environment.
    if (false) {}

    var renderer = assign({
        raw: '',
        pfx: '_',
        client: client,
        assign: assign,
        stringify: JSON.stringify,
        kebab: function (prop) {
            return prop.replace(KEBAB_REGEX, '-$&').toLowerCase();
        },
        decl: function (key, value) {
            key = renderer.kebab(key);
            return key + ':' + value + ';';
        },
        hash: function (obj) {
            return hash(renderer.stringify(obj));
        },
        selector: function (parent, selector) {
            return parent + (selector[0] === ':' ? ''  : ' ') + selector;
        },
        putRaw: function (rawCssRule) {
            renderer.raw += rawCssRule;
        }
    }, config);

    if (renderer.client) {
        if (!renderer.sh)
            document.head.appendChild(renderer.sh = document.createElement('style'));

        if (false) {}

        renderer.putRaw = function (rawCssRule) {
            // .insertRule() is faster than .appendChild(), that's why we use it in PROD.
            // But CSS injected using .insertRule() is not displayed in Chrome Devtools,
            // that's why we use .appendChild in DEV.
            if (true) {
                var sheet = renderer.sh.sheet;

                // Unknown pseudo-selectors will throw, this try/catch swallows all errors.
                try {
                    sheet.insertRule(rawCssRule, sheet.cssRules.length);
                // eslint-disable-next-line no-empty
                } catch (error) {}
            } else {}
        };
    }

    renderer.put = function (selector, decls, atrule) {
        var str = '';
        var prop, value;
        var postponed = [];

        for (prop in decls) {
            value = decls[prop];

            if ((value instanceof Object) && !(value instanceof Array)) {
                postponed.push(prop);
            } else {
                if (false) {} else {
                    str += renderer.decl(prop, value, selector, atrule);
                }
            }
        }

        if (str) {
            if (false) {} else {
                str = selector + '{' + str + '}';
            }
            renderer.putRaw(atrule ? atrule + '{' + str + '}' : str);
        }

        for (var i = 0; i < postponed.length; i++) {
            prop = postponed[i];

            if (prop[0] === '@' && prop !== '@font-face') {
                renderer.putAt(selector, decls[prop], prop);
            } else {
                renderer.put(renderer.selector(selector, prop), decls[prop], atrule);
            }
        }
    };

    renderer.putAt = renderer.put;

    return renderer;
};


/***/ }),

/***/ 38127:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(27574);
var _typeof = __webpack_require__(50426);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(51686));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(75166));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(46181));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var _KeyCode = _interopRequireDefault(__webpack_require__(41696));
var _context = _interopRequireDefault(__webpack_require__(87020));
var _util = __webpack_require__(45045);
var _excluded = ["prefixCls", "value", "valueIndex", "onStartMove", "style", "render", "dragging", "onOffsetChange"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Handle = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames, _getIndex;
  var prefixCls = props.prefixCls,
    value = props.value,
    valueIndex = props.valueIndex,
    onStartMove = props.onStartMove,
    style = props.style,
    render = props.render,
    dragging = props.dragging,
    onOffsetChange = props.onOffsetChange,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _React$useContext = React.useContext(_context.default),
    min = _React$useContext.min,
    max = _React$useContext.max,
    direction = _React$useContext.direction,
    disabled = _React$useContext.disabled,
    keyboard = _React$useContext.keyboard,
    range = _React$useContext.range,
    tabIndex = _React$useContext.tabIndex,
    ariaLabelForHandle = _React$useContext.ariaLabelForHandle,
    ariaLabelledByForHandle = _React$useContext.ariaLabelledByForHandle,
    ariaValueTextFormatterForHandle = _React$useContext.ariaValueTextFormatterForHandle;
  var handlePrefixCls = "".concat(prefixCls, "-handle");
  // ============================ Events ============================
  var onInternalStartMove = function onInternalStartMove(e) {
    if (!disabled) {
      onStartMove(e, valueIndex);
    }
  };
  // =========================== Keyboard ===========================
  var onKeyDown = function onKeyDown(e) {
    if (!disabled && keyboard) {
      var offset = null;
      // Change the value
      switch (e.which || e.keyCode) {
        case _KeyCode.default.LEFT:
          offset = direction === 'ltr' || direction === 'btt' ? -1 : 1;
          break;
        case _KeyCode.default.RIGHT:
          offset = direction === 'ltr' || direction === 'btt' ? 1 : -1;
          break;
        // Up is plus
        case _KeyCode.default.UP:
          offset = direction !== 'ttb' ? 1 : -1;
          break;
        // Down is minus
        case _KeyCode.default.DOWN:
          offset = direction !== 'ttb' ? -1 : 1;
          break;
        case _KeyCode.default.HOME:
          offset = 'min';
          break;
        case _KeyCode.default.END:
          offset = 'max';
          break;
        case _KeyCode.default.PAGE_UP:
          offset = 2;
          break;
        case _KeyCode.default.PAGE_DOWN:
          offset = -2;
          break;
      }
      if (offset !== null) {
        e.preventDefault();
        onOffsetChange(offset, valueIndex);
      }
    }
  };
  // ============================ Offset ============================
  var positionStyle = (0, _util.getDirectionStyle)(direction, value, min, max);
  // ============================ Render ============================
  var handleNode = /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
    ref: ref,
    className: (0, _classnames.default)(handlePrefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(handlePrefixCls, "-").concat(valueIndex + 1), range), (0, _defineProperty2.default)(_classNames, "".concat(handlePrefixCls, "-dragging"), dragging), _classNames)),
    style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, positionStyle), style),
    onMouseDown: onInternalStartMove,
    onTouchStart: onInternalStartMove,
    onKeyDown: onKeyDown,
    tabIndex: disabled ? null : (0, _util.getIndex)(tabIndex, valueIndex),
    role: "slider",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": value,
    "aria-disabled": disabled,
    "aria-label": (0, _util.getIndex)(ariaLabelForHandle, valueIndex),
    "aria-labelledby": (0, _util.getIndex)(ariaLabelledByForHandle, valueIndex),
    "aria-valuetext": (_getIndex = (0, _util.getIndex)(ariaValueTextFormatterForHandle, valueIndex)) === null || _getIndex === void 0 ? void 0 : _getIndex(value)
  }, restProps));
  // Customize
  if (render) {
    handleNode = render(handleNode, {
      index: valueIndex,
      prefixCls: prefixCls,
      value: value,
      dragging: dragging
    });
  }
  return handleNode;
});
if (false) {}
var _default = Handle;
exports["default"] = _default;

/***/ }),

/***/ 18762:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(27574);
var _typeof = __webpack_require__(50426);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(46181));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _Handle = _interopRequireDefault(__webpack_require__(38127));
var _util = __webpack_require__(45045);
var _excluded = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "draggingIndex"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Handles = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    style = props.style,
    onStartMove = props.onStartMove,
    onOffsetChange = props.onOffsetChange,
    values = props.values,
    handleRender = props.handleRender,
    draggingIndex = props.draggingIndex,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var handlesRef = React.useRef({});
  React.useImperativeHandle(ref, function () {
    return {
      focus: function focus(index) {
        var _handlesRef$current$i;
        (_handlesRef$current$i = handlesRef.current[index]) === null || _handlesRef$current$i === void 0 ? void 0 : _handlesRef$current$i.focus();
      }
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, values.map(function (value, index) {
    return /*#__PURE__*/React.createElement(_Handle.default, (0, _extends2.default)({
      ref: function ref(node) {
        if (!node) {
          delete handlesRef.current[index];
        } else {
          handlesRef.current[index] = node;
        }
      },
      dragging: draggingIndex === index,
      prefixCls: prefixCls,
      style: (0, _util.getIndex)(style, index),
      key: index,
      value: value,
      valueIndex: index,
      onStartMove: onStartMove,
      onOffsetChange: onOffsetChange,
      render: handleRender
    }, restProps));
  }));
});
if (false) {}
var _default = Handles;
exports["default"] = _default;

/***/ }),

/***/ 22386:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(27574);
var _typeof = __webpack_require__(50426);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Mark;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(51686));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(75166));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var _util = __webpack_require__(45045);
var _context = _interopRequireDefault(__webpack_require__(87020));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Mark(props) {
  var prefixCls = props.prefixCls,
    style = props.style,
    children = props.children,
    value = props.value,
    _onClick = props.onClick;
  var _React$useContext = React.useContext(_context.default),
    min = _React$useContext.min,
    max = _React$useContext.max,
    direction = _React$useContext.direction,
    includedStart = _React$useContext.includedStart,
    includedEnd = _React$useContext.includedEnd,
    included = _React$useContext.included;
  var textCls = "".concat(prefixCls, "-text");
  // ============================ Offset ============================
  var positionStyle = (0, _util.getDirectionStyle)(direction, value, min, max);
  return /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames.default)(textCls, (0, _defineProperty2.default)({}, "".concat(textCls, "-active"), included && includedStart <= value && value <= includedEnd)),
    style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, positionStyle), style),
    onMouseDown: function onMouseDown(e) {
      e.stopPropagation();
    },
    onClick: function onClick() {
      _onClick(value);
    }
  }, children);
}

/***/ }),

/***/ 28119:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(27574);
var _typeof = __webpack_require__(50426);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Marks;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _Mark = _interopRequireDefault(__webpack_require__(22386));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Marks(props) {
  var prefixCls = props.prefixCls,
    marks = props.marks,
    onClick = props.onClick;
  var markPrefixCls = "".concat(prefixCls, "-mark");
  // Not render mark if empty
  if (!marks.length) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: markPrefixCls
  }, marks.map(function (_ref) {
    var value = _ref.value,
      style = _ref.style,
      label = _ref.label;
    return /*#__PURE__*/React.createElement(_Mark.default, {
      key: value,
      prefixCls: markPrefixCls,
      style: style,
      value: value,
      onClick: onClick
    }, label);
  }));
}

/***/ }),

/***/ 45267:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(27574);
var _typeof3 = __webpack_require__(50426);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(75166));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(77687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(31974));
var _typeof2 = _interopRequireDefault(__webpack_require__(50426));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var _isEqual = _interopRequireDefault(__webpack_require__(98896));
var _useMergedState3 = _interopRequireDefault(__webpack_require__(35374));
var _Handles = _interopRequireDefault(__webpack_require__(18762));
var _useDrag3 = _interopRequireDefault(__webpack_require__(55886));
var _context = _interopRequireDefault(__webpack_require__(87020));
var _Tracks = _interopRequireDefault(__webpack_require__(84503));
var _Marks = _interopRequireDefault(__webpack_require__(28119));
var _Steps = _interopRequireDefault(__webpack_require__(28952));
var _useOffset3 = _interopRequireDefault(__webpack_require__(14644));
var _warning = _interopRequireDefault(__webpack_require__(37162));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Slider = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-slider' : _props$prefixCls,
    className = props.className,
    style = props.style,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$keyboard = props.keyboard,
    keyboard = _props$keyboard === void 0 ? true : _props$keyboard,
    autoFocus = props.autoFocus,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    _props$min = props.min,
    min = _props$min === void 0 ? 0 : _props$min,
    _props$max = props.max,
    max = _props$max === void 0 ? 100 : _props$max,
    _props$step = props.step,
    step = _props$step === void 0 ? 1 : _props$step,
    value = props.value,
    defaultValue = props.defaultValue,
    range = props.range,
    count = props.count,
    onChange = props.onChange,
    onBeforeChange = props.onBeforeChange,
    onAfterChange = props.onAfterChange,
    _props$allowCross = props.allowCross,
    allowCross = _props$allowCross === void 0 ? true : _props$allowCross,
    _props$pushable = props.pushable,
    pushable = _props$pushable === void 0 ? false : _props$pushable,
    draggableTrack = props.draggableTrack,
    reverse = props.reverse,
    vertical = props.vertical,
    _props$included = props.included,
    included = _props$included === void 0 ? true : _props$included,
    startPoint = props.startPoint,
    trackStyle = props.trackStyle,
    handleStyle = props.handleStyle,
    railStyle = props.railStyle,
    dotStyle = props.dotStyle,
    activeDotStyle = props.activeDotStyle,
    marks = props.marks,
    dots = props.dots,
    handleRender = props.handleRender,
    _props$tabIndex = props.tabIndex,
    tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
    ariaLabelForHandle = props.ariaLabelForHandle,
    ariaLabelledByForHandle = props.ariaLabelledByForHandle,
    ariaValueTextFormatterForHandle = props.ariaValueTextFormatterForHandle;
  var handlesRef = React.useRef();
  var containerRef = React.useRef();
  var direction = React.useMemo(function () {
    if (vertical) {
      return reverse ? 'ttb' : 'btt';
    }
    return reverse ? 'rtl' : 'ltr';
  }, [reverse, vertical]);
  // ============================ Range =============================
  var mergedMin = React.useMemo(function () {
    return isFinite(min) ? min : 0;
  }, [min]);
  var mergedMax = React.useMemo(function () {
    return isFinite(max) ? max : 100;
  }, [max]);
  // ============================= Step =============================
  var mergedStep = React.useMemo(function () {
    return step !== null && step <= 0 ? 1 : step;
  }, [step]);
  // ============================= Push =============================
  var mergedPush = React.useMemo(function () {
    if (pushable === true) {
      return mergedStep;
    }
    return pushable >= 0 ? pushable : false;
  }, [pushable, mergedStep]);
  // ============================ Marks =============================
  var markList = React.useMemo(function () {
    var keys = Object.keys(marks || {});
    return keys.map(function (key) {
      var mark = marks[key];
      var markObj = {
        value: Number(key)
      };
      if (mark && (0, _typeof2.default)(mark) === 'object' && ! /*#__PURE__*/React.isValidElement(mark) && ('label' in mark || 'style' in mark)) {
        markObj.style = mark.style;
        markObj.label = mark.label;
      } else {
        markObj.label = mark;
      }
      return markObj;
    }).filter(function (_ref) {
      var label = _ref.label;
      return label || typeof label === 'number';
    }).sort(function (a, b) {
      return a.value - b.value;
    });
  }, [marks]);
  // ============================ Format ============================
  var _useOffset = (0, _useOffset3.default)(mergedMin, mergedMax, mergedStep, markList, allowCross, mergedPush),
    _useOffset2 = (0, _slicedToArray2.default)(_useOffset, 2),
    formatValue = _useOffset2[0],
    offsetValues = _useOffset2[1];
  // ============================ Values ============================
  var _useMergedState = (0, _useMergedState3.default)(defaultValue, {
      value: value
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    mergedValue = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var rawValues = React.useMemo(function () {
    var valueList = mergedValue === null || mergedValue === undefined ? [] : Array.isArray(mergedValue) ? mergedValue : [mergedValue];
    var _valueList = (0, _slicedToArray2.default)(valueList, 1),
      _valueList$ = _valueList[0],
      val0 = _valueList$ === void 0 ? mergedMin : _valueList$;
    var returnValues = mergedValue === null ? [] : [val0];
    // Format as range
    if (range) {
      returnValues = (0, _toConsumableArray2.default)(valueList);
      // When count provided or value is `undefined`, we fill values
      if (count || mergedValue === undefined) {
        var pointCount = count >= 0 ? count + 1 : 2;
        returnValues = returnValues.slice(0, pointCount);
        // Fill with count
        while (returnValues.length < pointCount) {
          var _returnValues;
          returnValues.push((_returnValues = returnValues[returnValues.length - 1]) !== null && _returnValues !== void 0 ? _returnValues : mergedMin);
        }
      }
      returnValues.sort(function (a, b) {
        return a - b;
      });
    }
    // Align in range
    returnValues.forEach(function (val, index) {
      returnValues[index] = formatValue(val);
    });
    return returnValues;
  }, [mergedValue, range, mergedMin, count, formatValue]);
  // =========================== onChange ===========================
  var rawValuesRef = React.useRef(rawValues);
  rawValuesRef.current = rawValues;
  var getTriggerValue = function getTriggerValue(triggerValues) {
    return range ? triggerValues : triggerValues[0];
  };
  var triggerChange = function triggerChange(nextValues) {
    // Order first
    var cloneNextValues = (0, _toConsumableArray2.default)(nextValues).sort(function (a, b) {
      return a - b;
    });
    // Trigger event if needed
    if (onChange && !(0, _isEqual.default)(cloneNextValues, rawValuesRef.current, true)) {
      onChange(getTriggerValue(cloneNextValues));
    }
    // We set this later since it will re-render component immediately
    setValue(cloneNextValues);
  };
  var changeToCloseValue = function changeToCloseValue(newValue) {
    if (!disabled) {
      var valueIndex = 0;
      var valueDist = mergedMax - mergedMin;
      rawValues.forEach(function (val, index) {
        var dist = Math.abs(newValue - val);
        if (dist <= valueDist) {
          valueDist = dist;
          valueIndex = index;
        }
      });
      // Create new values
      var cloneNextValues = (0, _toConsumableArray2.default)(rawValues);
      cloneNextValues[valueIndex] = newValue;
      // Fill value to match default 2
      if (range && !rawValues.length && count === undefined) {
        cloneNextValues.push(newValue);
      }
      onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(cloneNextValues));
      triggerChange(cloneNextValues);
      onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(cloneNextValues));
    }
  };
  // ============================ Click =============================
  var onSliderMouseDown = function onSliderMouseDown(e) {
    e.preventDefault();
    var _containerRef$current = containerRef.current.getBoundingClientRect(),
      width = _containerRef$current.width,
      height = _containerRef$current.height,
      left = _containerRef$current.left,
      top = _containerRef$current.top,
      bottom = _containerRef$current.bottom,
      right = _containerRef$current.right;
    var clientX = e.clientX,
      clientY = e.clientY;
    var percent;
    switch (direction) {
      case 'btt':
        percent = (bottom - clientY) / height;
        break;
      case 'ttb':
        percent = (clientY - top) / height;
        break;
      case 'rtl':
        percent = (right - clientX) / width;
        break;
      default:
        percent = (clientX - left) / width;
    }
    var nextValue = mergedMin + percent * (mergedMax - mergedMin);
    changeToCloseValue(formatValue(nextValue));
  };
  // =========================== Keyboard ===========================
  var _React$useState = React.useState(null),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    keyboardValue = _React$useState2[0],
    setKeyboardValue = _React$useState2[1];
  var onHandleOffsetChange = function onHandleOffsetChange(offset, valueIndex) {
    if (!disabled) {
      var next = offsetValues(rawValues, offset, valueIndex);
      onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(rawValues));
      triggerChange(next.values);
      onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(next.values));
      setKeyboardValue(next.value);
    }
  };
  React.useEffect(function () {
    if (keyboardValue !== null) {
      var valueIndex = rawValues.indexOf(keyboardValue);
      if (valueIndex >= 0) {
        handlesRef.current.focus(valueIndex);
      }
    }
    setKeyboardValue(null);
  }, [keyboardValue]);
  // ============================= Drag =============================
  var mergedDraggableTrack = React.useMemo(function () {
    if (draggableTrack && mergedStep === null) {
      if (false) {}
      return false;
    }
    return draggableTrack;
  }, [draggableTrack, mergedStep]);
  var finishChange = function finishChange() {
    onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(rawValuesRef.current));
  };
  var _useDrag = (0, _useDrag3.default)(containerRef, direction, rawValues, mergedMin, mergedMax, formatValue, triggerChange, finishChange, offsetValues),
    _useDrag2 = (0, _slicedToArray2.default)(_useDrag, 4),
    draggingIndex = _useDrag2[0],
    draggingValue = _useDrag2[1],
    cacheValues = _useDrag2[2],
    onStartDrag = _useDrag2[3];
  var onStartMove = function onStartMove(e, valueIndex) {
    onStartDrag(e, valueIndex);
    onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(rawValuesRef.current));
  };
  // Auto focus for updated handle
  var dragging = draggingIndex !== -1;
  React.useEffect(function () {
    if (!dragging) {
      var valueIndex = rawValues.lastIndexOf(draggingValue);
      handlesRef.current.focus(valueIndex);
    }
  }, [dragging]);
  // =========================== Included ===========================
  var sortedCacheValues = React.useMemo(function () {
    return (0, _toConsumableArray2.default)(cacheValues).sort(function (a, b) {
      return a - b;
    });
  }, [cacheValues]);
  // Provide a range values with included [min, max]
  // Used for Track, Mark & Dot
  var _React$useMemo = React.useMemo(function () {
      if (!range) {
        return [mergedMin, sortedCacheValues[0]];
      }
      return [sortedCacheValues[0], sortedCacheValues[sortedCacheValues.length - 1]];
    }, [sortedCacheValues, range, mergedMin]),
    _React$useMemo2 = (0, _slicedToArray2.default)(_React$useMemo, 2),
    includedStart = _React$useMemo2[0],
    includedEnd = _React$useMemo2[1];
  // ============================= Refs =============================
  React.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        handlesRef.current.focus(0);
      },
      blur: function blur() {
        var _document = document,
          activeElement = _document.activeElement;
        if (containerRef.current.contains(activeElement)) {
          activeElement === null || activeElement === void 0 ? void 0 : activeElement.blur();
        }
      }
    };
  });
  // ========================== Auto Focus ==========================
  React.useEffect(function () {
    if (autoFocus) {
      handlesRef.current.focus(0);
    }
  }, []);
  // =========================== Context ============================
  var context = React.useMemo(function () {
    return {
      min: mergedMin,
      max: mergedMax,
      direction: direction,
      disabled: disabled,
      keyboard: keyboard,
      step: mergedStep,
      included: included,
      includedStart: includedStart,
      includedEnd: includedEnd,
      range: range,
      tabIndex: tabIndex,
      ariaLabelForHandle: ariaLabelForHandle,
      ariaLabelledByForHandle: ariaLabelledByForHandle,
      ariaValueTextFormatterForHandle: ariaValueTextFormatterForHandle
    };
  }, [mergedMin, mergedMax, direction, disabled, keyboard, mergedStep, included, includedStart, includedEnd, range, tabIndex, ariaLabelForHandle, ariaLabelledByForHandle, ariaValueTextFormatterForHandle]);
  // ============================ Render ============================
  return /*#__PURE__*/React.createElement(_context.default.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: (0, _classnames.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-vertical"), vertical), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-horizontal"), !vertical), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-with-marks"), markList.length), _classNames)),
    style: style,
    onMouseDown: onSliderMouseDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-rail"),
    style: railStyle
  }), /*#__PURE__*/React.createElement(_Tracks.default, {
    prefixCls: prefixCls,
    style: trackStyle,
    values: sortedCacheValues,
    startPoint: startPoint,
    onStartMove: mergedDraggableTrack ? onStartMove : null
  }), /*#__PURE__*/React.createElement(_Steps.default, {
    prefixCls: prefixCls,
    marks: markList,
    dots: dots,
    style: dotStyle,
    activeStyle: activeDotStyle
  }), /*#__PURE__*/React.createElement(_Handles.default, {
    ref: handlesRef,
    prefixCls: prefixCls,
    style: handleStyle,
    values: cacheValues,
    draggingIndex: draggingIndex,
    onStartMove: onStartMove,
    onOffsetChange: onHandleOffsetChange,
    onFocus: onFocus,
    onBlur: onBlur,
    handleRender: handleRender
  }), /*#__PURE__*/React.createElement(_Marks.default, {
    prefixCls: prefixCls,
    marks: markList,
    onClick: changeToCloseValue
  })));
});
if (false) {}
var _default = Slider;
exports["default"] = _default;

/***/ }),

/***/ 32776:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(27574);
var _typeof = __webpack_require__(50426);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Dot;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(75166));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(51686));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var _util = __webpack_require__(45045);
var _context = _interopRequireDefault(__webpack_require__(87020));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Dot(props) {
  var prefixCls = props.prefixCls,
    value = props.value,
    style = props.style,
    activeStyle = props.activeStyle;
  var _React$useContext = React.useContext(_context.default),
    min = _React$useContext.min,
    max = _React$useContext.max,
    direction = _React$useContext.direction,
    included = _React$useContext.included,
    includedStart = _React$useContext.includedStart,
    includedEnd = _React$useContext.includedEnd;
  var dotClassName = "".concat(prefixCls, "-dot");
  var active = included && includedStart <= value && value <= includedEnd;
  // ============================ Offset ============================
  var mergedStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _util.getDirectionStyle)(direction, value, min, max)), typeof style === 'function' ? style(value) : style);
  if (active) {
    mergedStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedStyle), typeof activeStyle === 'function' ? activeStyle(value) : activeStyle);
  }
  return /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames.default)(dotClassName, (0, _defineProperty2.default)({}, "".concat(dotClassName, "-active"), active)),
    style: mergedStyle
  });
}

/***/ }),

/***/ 28952:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(27574);
var _typeof = __webpack_require__(50426);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Steps;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _context = _interopRequireDefault(__webpack_require__(87020));
var _Dot = _interopRequireDefault(__webpack_require__(32776));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Steps(props) {
  var prefixCls = props.prefixCls,
    marks = props.marks,
    dots = props.dots,
    style = props.style,
    activeStyle = props.activeStyle;
  var _React$useContext = React.useContext(_context.default),
    min = _React$useContext.min,
    max = _React$useContext.max,
    step = _React$useContext.step;
  var stepDots = React.useMemo(function () {
    var dotSet = new Set();
    // Add marks
    marks.forEach(function (mark) {
      dotSet.add(mark.value);
    });
    // Fill dots
    if (dots && step !== null) {
      var current = min;
      while (current <= max) {
        dotSet.add(current);
        current += step;
      }
    }
    return Array.from(dotSet);
  }, [min, max, step, dots, marks]);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-step")
  }, stepDots.map(function (dotValue) {
    return /*#__PURE__*/React.createElement(_Dot.default, {
      prefixCls: prefixCls,
      key: dotValue,
      value: dotValue,
      style: style,
      activeStyle: activeStyle
    });
  }));
}

/***/ }),

/***/ 77779:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(27574);
var _typeof = __webpack_require__(50426);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Track;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(51686));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var _context = _interopRequireDefault(__webpack_require__(87020));
var _util = __webpack_require__(45045);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Track(props) {
  var prefixCls = props.prefixCls,
    style = props.style,
    start = props.start,
    end = props.end,
    index = props.index,
    onStartMove = props.onStartMove;
  var _React$useContext = React.useContext(_context.default),
    direction = _React$useContext.direction,
    min = _React$useContext.min,
    max = _React$useContext.max,
    disabled = _React$useContext.disabled,
    range = _React$useContext.range;
  var trackPrefixCls = "".concat(prefixCls, "-track");
  var offsetStart = (0, _util.getOffset)(start, min, max);
  var offsetEnd = (0, _util.getOffset)(end, min, max);
  // ============================ Events ============================
  var onInternalStartMove = function onInternalStartMove(e) {
    if (!disabled && onStartMove) {
      onStartMove(e, -1);
    }
  };
  // ============================ Render ============================
  var positionStyle = {};
  switch (direction) {
    case 'rtl':
      positionStyle.right = "".concat(offsetStart * 100, "%");
      positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      break;
    case 'btt':
      positionStyle.bottom = "".concat(offsetStart * 100, "%");
      positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      break;
    case 'ttb':
      positionStyle.top = "".concat(offsetStart * 100, "%");
      positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      break;
    default:
      positionStyle.left = "".concat(offsetStart * 100, "%");
      positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
  }
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames.default)(trackPrefixCls, range && "".concat(trackPrefixCls, "-").concat(index + 1)),
    style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, positionStyle), style),
    onMouseDown: onInternalStartMove,
    onTouchStart: onInternalStartMove
  });
}

/***/ }),

/***/ 84503:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(27574);
var _typeof = __webpack_require__(50426);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Tracks;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _context = _interopRequireDefault(__webpack_require__(87020));
var _Track = _interopRequireDefault(__webpack_require__(77779));
var _util = __webpack_require__(45045);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Tracks(props) {
  var prefixCls = props.prefixCls,
    style = props.style,
    values = props.values,
    startPoint = props.startPoint,
    onStartMove = props.onStartMove;
  var _React$useContext = React.useContext(_context.default),
    included = _React$useContext.included,
    range = _React$useContext.range,
    min = _React$useContext.min;
  var trackList = React.useMemo(function () {
    if (!range) {
      // null value do not have track
      if (values.length === 0) {
        return [];
      }
      var startValue = startPoint !== null && startPoint !== void 0 ? startPoint : min;
      var endValue = values[0];
      return [{
        start: Math.min(startValue, endValue),
        end: Math.max(startValue, endValue)
      }];
    }
    // Multiple
    var list = [];
    for (var i = 0; i < values.length - 1; i += 1) {
      list.push({
        start: values[i],
        end: values[i + 1]
      });
    }
    return list;
  }, [values, range, startPoint, min]);
  return included ? trackList.map(function (_ref, index) {
    var start = _ref.start,
      end = _ref.end;
    return /*#__PURE__*/React.createElement(_Track.default, {
      index: index,
      prefixCls: prefixCls,
      style: (0, _util.getIndex)(style, index),
      start: start,
      end: end,
      key: index,
      onStartMove: onStartMove
    });
  }) : null;
}

/***/ }),

/***/ 87020:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(50426);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SliderContext = /*#__PURE__*/React.createContext({
  min: 0,
  max: 0,
  direction: 'ltr',
  step: 1,
  includedStart: 0,
  includedEnd: 0,
  tabIndex: 0,
  keyboard: true
});
var _default = SliderContext;
exports["default"] = _default;

/***/ }),

/***/ 55886:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(27574);
var _typeof = __webpack_require__(50426);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useDrag;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(77687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(31974));
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function getPosition(e) {
  var obj = 'touches' in e ? e.touches[0] : e;
  return {
    pageX: obj.pageX,
    pageY: obj.pageY
  };
}
function useDrag(containerRef, direction, rawValues, min, max, formatValue, triggerChange, finishChange, offsetValues) {
  var _React$useState = React.useState(null),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    draggingValue = _React$useState2[0],
    setDraggingValue = _React$useState2[1];
  var _React$useState3 = React.useState(-1),
    _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
    draggingIndex = _React$useState4[0],
    setDraggingIndex = _React$useState4[1];
  var _React$useState5 = React.useState(rawValues),
    _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
    cacheValues = _React$useState6[0],
    setCacheValues = _React$useState6[1];
  var _React$useState7 = React.useState(rawValues),
    _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
    originValues = _React$useState8[0],
    setOriginValues = _React$useState8[1];
  var mouseMoveEventRef = React.useRef(null);
  var mouseUpEventRef = React.useRef(null);
  React.useEffect(function () {
    if (draggingIndex === -1) {
      setCacheValues(rawValues);
    }
  }, [rawValues, draggingIndex]);
  // Clean up event
  React.useEffect(function () {
    return function () {
      document.removeEventListener('mousemove', mouseMoveEventRef.current);
      document.removeEventListener('mouseup', mouseUpEventRef.current);
      document.removeEventListener('touchmove', mouseMoveEventRef.current);
      document.removeEventListener('touchend', mouseUpEventRef.current);
    };
  }, []);
  var flushValues = function flushValues(nextValues, nextValue) {
    // Perf: Only update state when value changed
    if (cacheValues.some(function (val, i) {
      return val !== nextValues[i];
    })) {
      if (nextValue !== undefined) {
        setDraggingValue(nextValue);
      }
      setCacheValues(nextValues);
      triggerChange(nextValues);
    }
  };
  var updateCacheValue = function updateCacheValue(valueIndex, offsetPercent) {
    // Basic point offset
    if (valueIndex === -1) {
      // >>>> Dragging on the track
      var startValue = originValues[0];
      var endValue = originValues[originValues.length - 1];
      var maxStartOffset = min - startValue;
      var maxEndOffset = max - endValue;
      // Get valid offset
      var offset = offsetPercent * (max - min);
      offset = Math.max(offset, maxStartOffset);
      offset = Math.min(offset, maxEndOffset);
      // Use first value to revert back of valid offset (like steps marks)
      var formatStartValue = formatValue(startValue + offset);
      offset = formatStartValue - startValue;
      var cloneCacheValues = originValues.map(function (val) {
        return val + offset;
      });
      flushValues(cloneCacheValues);
    } else {
      // >>>> Dragging on the handle
      var offsetDist = (max - min) * offsetPercent;
      // Always start with the valueIndex origin value
      var cloneValues = (0, _toConsumableArray2.default)(cacheValues);
      cloneValues[valueIndex] = originValues[valueIndex];
      var next = offsetValues(cloneValues, offsetDist, valueIndex, 'dist');
      flushValues(next.values, next.value);
    }
  };
  // Resolve closure
  var updateCacheValueRef = React.useRef(updateCacheValue);
  updateCacheValueRef.current = updateCacheValue;
  var onStartMove = function onStartMove(e, valueIndex) {
    e.stopPropagation();
    var originValue = rawValues[valueIndex];
    setDraggingIndex(valueIndex);
    setDraggingValue(originValue);
    setOriginValues(rawValues);
    var _getPosition = getPosition(e),
      startX = _getPosition.pageX,
      startY = _getPosition.pageY;
    // Moving
    var onMouseMove = function onMouseMove(event) {
      event.preventDefault();
      var _getPosition2 = getPosition(event),
        moveX = _getPosition2.pageX,
        moveY = _getPosition2.pageY;
      var offsetX = moveX - startX;
      var offsetY = moveY - startY;
      var _containerRef$current = containerRef.current.getBoundingClientRect(),
        width = _containerRef$current.width,
        height = _containerRef$current.height;
      var offSetPercent;
      switch (direction) {
        case 'btt':
          offSetPercent = -offsetY / height;
          break;
        case 'ttb':
          offSetPercent = offsetY / height;
          break;
        case 'rtl':
          offSetPercent = -offsetX / width;
          break;
        default:
          offSetPercent = offsetX / width;
      }
      updateCacheValueRef.current(valueIndex, offSetPercent);
    };
    // End
    var onMouseUp = function onMouseUp(event) {
      event.preventDefault();
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchend', onMouseUp);
      document.removeEventListener('touchmove', onMouseMove);
      mouseMoveEventRef.current = null;
      mouseUpEventRef.current = null;
      setDraggingIndex(-1);
      finishChange();
    };
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchend', onMouseUp);
    document.addEventListener('touchmove', onMouseMove);
    mouseMoveEventRef.current = onMouseMove;
    mouseUpEventRef.current = onMouseUp;
  };
  // Only return cache value when it mapping with rawValues
  var returnValues = React.useMemo(function () {
    var sourceValues = (0, _toConsumableArray2.default)(rawValues).sort(function (a, b) {
      return a - b;
    });
    var targetValues = (0, _toConsumableArray2.default)(cacheValues).sort(function (a, b) {
      return a - b;
    });
    return sourceValues.every(function (val, index) {
      return val === targetValues[index];
    }) ? cacheValues : rawValues;
  }, [rawValues, cacheValues]);
  return [draggingIndex, draggingValue, returnValues, onStartMove];
}

/***/ }),

/***/ 14644:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(27574);
var _typeof = __webpack_require__(50426);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useOffset;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(77687));
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useOffset(min, max, step, markList, allowCross, pushable) {
  var formatRangeValue = React.useCallback(function (val) {
    var formatNextValue = isFinite(val) ? val : min;
    formatNextValue = Math.min(max, val);
    formatNextValue = Math.max(min, formatNextValue);
    return formatNextValue;
  }, [min, max]);
  var formatStepValue = React.useCallback(function (val) {
    if (step !== null) {
      var stepValue = min + Math.round((formatRangeValue(val) - min) / step) * step;
      // Cut number in case to be like 0.30000000000000004
      var getDecimal = function getDecimal(num) {
        return (String(num).split('.')[1] || '').length;
      };
      var maxDecimal = Math.max(getDecimal(step), getDecimal(max), getDecimal(min));
      var fixedValue = Number(stepValue.toFixed(maxDecimal));
      return min <= fixedValue && fixedValue <= max ? fixedValue : null;
    }
    return null;
  }, [step, min, max, formatRangeValue]);
  var formatValue = React.useCallback(function (val) {
    var formatNextValue = formatRangeValue(val);
    // List align values
    var alignValues = markList.map(function (mark) {
      return mark.value;
    });
    if (step !== null) {
      alignValues.push(formatStepValue(val));
    }
    // min & max
    alignValues.push(min, max);
    // Align with marks
    var closeValue = alignValues[0];
    var closeDist = max - min;
    alignValues.forEach(function (alignValue) {
      var dist = Math.abs(formatNextValue - alignValue);
      if (dist <= closeDist) {
        closeValue = alignValue;
        closeDist = dist;
      }
    });
    return closeValue;
  }, [min, max, markList, step, formatRangeValue, formatStepValue]);
  // ========================== Offset ==========================
  // Single Value
  var offsetValue = function offsetValue(values, offset, valueIndex) {
    var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';
    if (typeof offset === 'number') {
      var nextValue;
      var originValue = values[valueIndex];
      // Only used for `dist` mode
      var targetDistValue = originValue + offset;
      // Compare next step value & mark value which is best match
      var potentialValues = [];
      markList.forEach(function (mark) {
        potentialValues.push(mark.value);
      });
      // Min & Max
      potentialValues.push(min, max);
      // In case origin value is align with mark but not with step
      potentialValues.push(formatStepValue(originValue));
      // Put offset step value also
      var sign = offset > 0 ? 1 : -1;
      if (mode === 'unit') {
        potentialValues.push(formatStepValue(originValue + sign * step));
      } else {
        potentialValues.push(formatStepValue(targetDistValue));
      }
      // Find close one
      potentialValues = potentialValues.filter(function (val) {
        return val !== null;
      })
      // Remove reverse value
      .filter(function (val) {
        return offset < 0 ? val <= originValue : val >= originValue;
      });
      if (mode === 'unit') {
        // `unit` mode can not contain itself
        potentialValues = potentialValues.filter(function (val) {
          return val !== originValue;
        });
      }
      var compareValue = mode === 'unit' ? originValue : targetDistValue;
      nextValue = potentialValues[0];
      var valueDist = Math.abs(nextValue - compareValue);
      potentialValues.forEach(function (potentialValue) {
        var dist = Math.abs(potentialValue - compareValue);
        if (dist < valueDist) {
          nextValue = potentialValue;
          valueDist = dist;
        }
      });
      // Out of range will back to range
      if (nextValue === undefined) {
        return offset < 0 ? min : max;
      }
      // `dist` mode
      if (mode === 'dist') {
        return nextValue;
      }
      // `unit` mode may need another round
      if (Math.abs(offset) > 1) {
        var cloneValues = (0, _toConsumableArray2.default)(values);
        cloneValues[valueIndex] = nextValue;
        return offsetValue(cloneValues, offset - sign, valueIndex, mode);
      }
      return nextValue;
    } else if (offset === 'min') {
      return min;
    } else if (offset === 'max') {
      return max;
    }
  };
  /** Same as `offsetValue` but return `changed` mark to tell value changed */
  var offsetChangedValue = function offsetChangedValue(values, offset, valueIndex) {
    var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';
    var originValue = values[valueIndex];
    var nextValue = offsetValue(values, offset, valueIndex, mode);
    return {
      value: nextValue,
      changed: nextValue !== originValue
    };
  };
  var needPush = function needPush(dist) {
    return pushable === null && dist === 0 || typeof pushable === 'number' && dist < pushable;
  };
  // Values
  var offsetValues = function offsetValues(values, offset, valueIndex) {
    var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';
    var nextValues = values.map(formatValue);
    var originValue = nextValues[valueIndex];
    var nextValue = offsetValue(nextValues, offset, valueIndex, mode);
    nextValues[valueIndex] = nextValue;
    if (allowCross === false) {
      // >>>>> Allow Cross
      var pushNum = pushable || 0;
      // ============ AllowCross ===============
      if (valueIndex > 0 && nextValues[valueIndex - 1] !== originValue) {
        nextValues[valueIndex] = Math.max(nextValues[valueIndex], nextValues[valueIndex - 1] + pushNum);
      }
      if (valueIndex < nextValues.length - 1 && nextValues[valueIndex + 1] !== originValue) {
        nextValues[valueIndex] = Math.min(nextValues[valueIndex], nextValues[valueIndex + 1] - pushNum);
      }
    } else if (typeof pushable === 'number' || pushable === null) {
      // >>>>> Pushable
      // =============== Push ==================
      // >>>>>> Basic push
      // End values
      for (var i = valueIndex + 1; i < nextValues.length; i += 1) {
        var changed = true;
        while (needPush(nextValues[i] - nextValues[i - 1]) && changed) {
          var _offsetChangedValue = offsetChangedValue(nextValues, 1, i);
          nextValues[i] = _offsetChangedValue.value;
          changed = _offsetChangedValue.changed;
        }
      }
      // Start values
      for (var _i = valueIndex; _i > 0; _i -= 1) {
        var _changed = true;
        while (needPush(nextValues[_i] - nextValues[_i - 1]) && _changed) {
          var _offsetChangedValue2 = offsetChangedValue(nextValues, -1, _i - 1);
          nextValues[_i - 1] = _offsetChangedValue2.value;
          _changed = _offsetChangedValue2.changed;
        }
      }
      // >>>>> Revert back to safe push range
      // End to Start
      for (var _i2 = nextValues.length - 1; _i2 > 0; _i2 -= 1) {
        var _changed2 = true;
        while (needPush(nextValues[_i2] - nextValues[_i2 - 1]) && _changed2) {
          var _offsetChangedValue3 = offsetChangedValue(nextValues, -1, _i2 - 1);
          nextValues[_i2 - 1] = _offsetChangedValue3.value;
          _changed2 = _offsetChangedValue3.changed;
        }
      }
      // Start to End
      for (var _i3 = 0; _i3 < nextValues.length - 1; _i3 += 1) {
        var _changed3 = true;
        while (needPush(nextValues[_i3 + 1] - nextValues[_i3]) && _changed3) {
          var _offsetChangedValue4 = offsetChangedValue(nextValues, 1, _i3 + 1);
          nextValues[_i3 + 1] = _offsetChangedValue4.value;
          _changed3 = _offsetChangedValue4.changed;
        }
      }
    }
    return {
      value: nextValues[valueIndex],
      values: nextValues
    };
  };
  return [formatValue, offsetValues];
}

/***/ }),

/***/ 71006:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(27574);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _Slider = _interopRequireDefault(__webpack_require__(45267));
var _default = _Slider.default;
exports.Z = _default;

/***/ }),

/***/ 45045:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDirectionStyle = getDirectionStyle;
exports.getIndex = getIndex;
exports.getOffset = getOffset;
function getOffset(value, min, max) {
  return (value - min) / (max - min);
}
function getDirectionStyle(direction, value, min, max) {
  var offset = getOffset(value, min, max);
  var positionStyle = {};
  switch (direction) {
    case 'rtl':
      positionStyle.right = "".concat(offset * 100, "%");
      positionStyle.transform = 'translateX(50%)';
      break;
    case 'btt':
      positionStyle.bottom = "".concat(offset * 100, "%");
      positionStyle.transform = 'translateY(50%)';
      break;
    case 'ttb':
      positionStyle.top = "".concat(offset * 100, "%");
      positionStyle.transform = 'translateY(-50%)';
      break;
    default:
      positionStyle.left = "".concat(offset * 100, "%");
      positionStyle.transform = 'translateX(-50%)';
      break;
  }
  return positionStyle;
}
/** Return index value if is list or return value directly */
function getIndex(value, index) {
  return Array.isArray(value) ? value[index] : value;
}

/***/ }),

/***/ 4382:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = canUseDom;
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

/***/ }),

/***/ 41696:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey ||
    // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }

    // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }

    // Safari sends zero key code for non-latin characters.
    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
var _default = KeyCode;
exports["default"] = _default;

/***/ }),

/***/ 52283:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(94600)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useEvent;
var React = _interopRequireWildcard(__webpack_require__(18038));
function useEvent(callback) {
  var fnRef = React.useRef();
  fnRef.current = callback;
  var memoFn = React.useCallback(function () {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}

/***/ }),

/***/ 49383:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(27574)["default"]);
var _interopRequireWildcard = (__webpack_require__(94600)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useLayoutUpdateEffect = exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _canUseDom = _interopRequireDefault(__webpack_require__(4382));
/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
var useLayoutEffect =  true && (0, _canUseDom.default)() ? React.useLayoutEffect : React.useEffect;
var _default = useLayoutEffect;
exports["default"] = _default;
var useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
  var firstMountRef = React.useRef(true);
  useLayoutEffect(function () {
    if (!firstMountRef.current) {
      return callback();
    }
  }, deps);

  // We tell react that first mount has passed
  useLayoutEffect(function () {
    firstMountRef.current = false;
    return function () {
      firstMountRef.current = true;
    };
  }, []);
};
exports.useLayoutUpdateEffect = useLayoutUpdateEffect;

/***/ }),

/***/ 35374:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(27574)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useMergedState;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(31974));
var _useEvent = _interopRequireDefault(__webpack_require__(52283));
var _useLayoutEffect = __webpack_require__(49383);
var _useState5 = _interopRequireDefault(__webpack_require__(28493));
/** We only think `undefined` is empty */
function hasValue(value) {
  return value !== undefined;
}

/**
 * Similar to `useState` but will use props value if provided.
 * Note that internal use rc-util `useState` hook.
 */
function useMergedState(defaultStateValue, option) {
  var _ref = option || {},
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange,
    postState = _ref.postState;

  // ======================= Init =======================
  var _useState = (0, _useState5.default)(function () {
      if (hasValue(value)) {
        return value;
      } else if (hasValue(defaultValue)) {
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      } else {
        return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
      }
    }),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    innerValue = _useState2[0],
    setInnerValue = _useState2[1];
  var mergedValue = value !== undefined ? value : innerValue;
  var postMergedValue = postState ? postState(mergedValue) : mergedValue;

  // ====================== Change ======================
  var onChangeFn = (0, _useEvent.default)(onChange);
  var _useState3 = (0, _useState5.default)([mergedValue]),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    prevValue = _useState4[0],
    setPrevValue = _useState4[1];
  (0, _useLayoutEffect.useLayoutUpdateEffect)(function () {
    var prev = prevValue[0];
    if (innerValue !== prev) {
      onChangeFn(innerValue, prev);
    }
  }, [prevValue]);

  // Sync value back to `undefined` when it from control to un-control
  (0, _useLayoutEffect.useLayoutUpdateEffect)(function () {
    if (!hasValue(value)) {
      setInnerValue(value);
    }
  }, [value]);

  // ====================== Update ======================
  var triggerChange = (0, _useEvent.default)(function (updater, ignoreDestroy) {
    setInnerValue(updater, ignoreDestroy);
    setPrevValue([mergedValue], ignoreDestroy);
  });
  return [postMergedValue, triggerChange];
}

/***/ }),

/***/ 28493:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(94600)["default"]);
var _interopRequireDefault = (__webpack_require__(27574)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useSafeState;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(31974));
var React = _interopRequireWildcard(__webpack_require__(18038));
/**
 * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
 * We do not make this auto is to avoid real memory leak.
 * Developer should confirm it's safe to ignore themselves.
 */
function useSafeState(defaultValue) {
  var destroyRef = React.useRef(false);
  var _React$useState = React.useState(defaultValue),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  React.useEffect(function () {
    destroyRef.current = false;
    return function () {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
}

/***/ }),

/***/ 98896:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(27574)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(50426));
var _warning = _interopRequireDefault(__webpack_require__(37162));
/**
 * Deeply compares two object literals.
 * @param obj1 object 1
 * @param obj2 object 2
 * @param shallow shallow compare
 * @returns
 */
function isEqual(obj1, obj2) {
  var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // https://github.com/mapbox/mapbox-gl-js/pull/5979/files#diff-fde7145050c47cc3a306856efd5f9c3016e86e859de9afbd02c879be5067e58f
  var refSet = new Set();
  function deepEqual(a, b) {
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var circular = refSet.has(a);
    (0, _warning.default)(!circular, 'Warning: There may be circular references');
    if (circular) {
      return false;
    }
    if (a === b) {
      return true;
    }
    if (shallow && level > 1) {
      return false;
    }
    refSet.add(a);
    var newLevel = level + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(b) || a.length !== b.length) {
        return false;
      }
      for (var i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i], newLevel)) {
          return false;
        }
      }
      return true;
    }
    if (a && b && (0, _typeof2.default)(a) === 'object' && (0, _typeof2.default)(b) === 'object') {
      var keys = Object.keys(a);
      if (keys.length !== Object.keys(b).length) {
        return false;
      }
      return keys.every(function (key) {
        return deepEqual(a[key], b[key], newLevel);
      });
    }
    // other
    return false;
  }
  return deepEqual(obj1, obj2);
}
var _default = isEqual;
exports["default"] = _default;

/***/ }),

/***/ 37162:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.call = call;
exports["default"] = void 0;
exports.note = note;
exports.noteOnce = noteOnce;
exports.preMessage = void 0;
exports.resetWarned = resetWarned;
exports.warning = warning;
exports.warningOnce = warningOnce;
/* eslint-disable no-console */
var warned = {};
var preWarningFns = [];

/**
 * Pre warning enable you to parse content before console.error.
 * Modify to null will prevent warning.
 */
var preMessage = function preMessage(fn) {
  preWarningFns.push(fn);
};
exports.preMessage = preMessage;
function warning(valid, message) {
  // Support uglify
  if (false) { var finalMessage; }
}
function note(valid, message) {
  // Support uglify
  if (false) { var finalMessage; }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
var _default = warningOnce;
/* eslint-enable */
exports["default"] = _default;

/***/ }),

/***/ 21349:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var React = __webpack_require__(18038);

const LEFT = "Left";
const RIGHT = "Right";
const UP = "Up";
const DOWN = "Down";

/* global document */
const defaultProps = {
    delta: 10,
    preventScrollOnSwipe: false,
    rotationAngle: 0,
    trackMouse: false,
    trackTouch: true,
    swipeDuration: Infinity,
    touchEventOptions: { passive: true },
};
const initialState = {
    first: true,
    initial: [0, 0],
    start: 0,
    swiping: false,
    xy: [0, 0],
};
const mouseMove = "mousemove";
const mouseUp = "mouseup";
const touchEnd = "touchend";
const touchMove = "touchmove";
const touchStart = "touchstart";
function getDirection(absX, absY, deltaX, deltaY) {
    if (absX > absY) {
        if (deltaX > 0) {
            return RIGHT;
        }
        return LEFT;
    }
    else if (deltaY > 0) {
        return DOWN;
    }
    return UP;
}
function rotateXYByAngle(pos, angle) {
    if (angle === 0)
        return pos;
    const angleInRadians = (Math.PI / 180) * angle;
    const x = pos[0] * Math.cos(angleInRadians) + pos[1] * Math.sin(angleInRadians);
    const y = pos[1] * Math.cos(angleInRadians) - pos[0] * Math.sin(angleInRadians);
    return [x, y];
}
function getHandlers(set, handlerProps) {
    const onStart = (event) => {
        const isTouch = "touches" in event;
        // if more than a single touch don't track, for now...
        if (isTouch && event.touches.length > 1)
            return;
        set((state, props) => {
            // setup mouse listeners on document to track swipe since swipe can leave container
            if (props.trackMouse && !isTouch) {
                document.addEventListener(mouseMove, onMove);
                document.addEventListener(mouseUp, onUp);
            }
            const { clientX, clientY } = isTouch ? event.touches[0] : event;
            const xy = rotateXYByAngle([clientX, clientY], props.rotationAngle);
            props.onTouchStartOrOnMouseDown &&
                props.onTouchStartOrOnMouseDown({ event });
            return Object.assign(Object.assign(Object.assign({}, state), initialState), { initial: xy.slice(), xy, start: event.timeStamp || 0 });
        });
    };
    const onMove = (event) => {
        set((state, props) => {
            const isTouch = "touches" in event;
            // Discount a swipe if additional touches are present after
            // a swipe has started.
            if (isTouch && event.touches.length > 1) {
                return state;
            }
            // if swipe has exceeded duration stop tracking
            if (event.timeStamp - state.start > props.swipeDuration) {
                return state.swiping ? Object.assign(Object.assign({}, state), { swiping: false }) : state;
            }
            const { clientX, clientY } = isTouch ? event.touches[0] : event;
            const [x, y] = rotateXYByAngle([clientX, clientY], props.rotationAngle);
            const deltaX = x - state.xy[0];
            const deltaY = y - state.xy[1];
            const absX = Math.abs(deltaX);
            const absY = Math.abs(deltaY);
            const time = (event.timeStamp || 0) - state.start;
            const velocity = Math.sqrt(absX * absX + absY * absY) / (time || 1);
            const vxvy = [deltaX / (time || 1), deltaY / (time || 1)];
            const dir = getDirection(absX, absY, deltaX, deltaY);
            // if swipe is under delta and we have not started to track a swipe: skip update
            const delta = typeof props.delta === "number"
                ? props.delta
                : props.delta[dir.toLowerCase()] ||
                    defaultProps.delta;
            if (absX < delta && absY < delta && !state.swiping)
                return state;
            const eventData = {
                absX,
                absY,
                deltaX,
                deltaY,
                dir,
                event,
                first: state.first,
                initial: state.initial,
                velocity,
                vxvy,
            };
            // call onSwipeStart if present and is first swipe event
            eventData.first && props.onSwipeStart && props.onSwipeStart(eventData);
            // call onSwiping if present
            props.onSwiping && props.onSwiping(eventData);
            // track if a swipe is cancelable (handler for swiping or swiped(dir) exists)
            // so we can call preventDefault if needed
            let cancelablePageSwipe = false;
            if (props.onSwiping ||
                props.onSwiped ||
                props[`onSwiped${dir}`]) {
                cancelablePageSwipe = true;
            }
            if (cancelablePageSwipe &&
                props.preventScrollOnSwipe &&
                props.trackTouch &&
                event.cancelable) {
                event.preventDefault();
            }
            return Object.assign(Object.assign({}, state), { 
                // first is now always false
                first: false, eventData, swiping: true });
        });
    };
    const onEnd = (event) => {
        set((state, props) => {
            let eventData;
            if (state.swiping && state.eventData) {
                // if swipe is less than duration fire swiped callbacks
                if (event.timeStamp - state.start < props.swipeDuration) {
                    eventData = Object.assign(Object.assign({}, state.eventData), { event });
                    props.onSwiped && props.onSwiped(eventData);
                    const onSwipedDir = props[`onSwiped${eventData.dir}`];
                    onSwipedDir && onSwipedDir(eventData);
                }
            }
            else {
                props.onTap && props.onTap({ event });
            }
            props.onTouchEndOrOnMouseUp && props.onTouchEndOrOnMouseUp({ event });
            return Object.assign(Object.assign(Object.assign({}, state), initialState), { eventData });
        });
    };
    const cleanUpMouse = () => {
        // safe to just call removeEventListener
        document.removeEventListener(mouseMove, onMove);
        document.removeEventListener(mouseUp, onUp);
    };
    const onUp = (e) => {
        cleanUpMouse();
        onEnd(e);
    };
    /**
     * The value of passive on touchMove depends on `preventScrollOnSwipe`:
     * - true => { passive: false }
     * - false => { passive: true } // Default
     *
     * NOTE: When preventScrollOnSwipe is true, we attempt to call preventDefault to prevent scroll.
     *
     * props.touchEventOptions can also be set for all touch event listeners,
     * but for `touchmove` specifically when `preventScrollOnSwipe` it will
     * supersede and force passive to false.
     *
     */
    const attachTouch = (el, props) => {
        let cleanup = () => { };
        if (el && el.addEventListener) {
            const baseOptions = Object.assign(Object.assign({}, defaultProps.touchEventOptions), props.touchEventOptions);
            // attach touch event listeners and handlers
            const tls = [
                [touchStart, onStart, baseOptions],
                // preventScrollOnSwipe option supersedes touchEventOptions.passive
                [
                    touchMove,
                    onMove,
                    Object.assign(Object.assign({}, baseOptions), (props.preventScrollOnSwipe ? { passive: false } : {})),
                ],
                [touchEnd, onEnd, baseOptions],
            ];
            tls.forEach(([e, h, o]) => el.addEventListener(e, h, o));
            // return properly scoped cleanup method for removing listeners, options not required
            cleanup = () => tls.forEach(([e, h]) => el.removeEventListener(e, h));
        }
        return cleanup;
    };
    const onRef = (el) => {
        // "inline" ref functions are called twice on render, once with null then again with DOM element
        // ignore null here
        if (el === null)
            return;
        set((state, props) => {
            // if the same DOM el as previous just return state
            if (state.el === el)
                return state;
            const addState = {};
            // if new DOM el clean up old DOM and reset cleanUpTouch
            if (state.el && state.el !== el && state.cleanUpTouch) {
                state.cleanUpTouch();
                addState.cleanUpTouch = void 0;
            }
            // only attach if we want to track touch
            if (props.trackTouch && el) {
                addState.cleanUpTouch = attachTouch(el, props);
            }
            // store event attached DOM el for comparison, clean up, and re-attachment
            return Object.assign(Object.assign(Object.assign({}, state), { el }), addState);
        });
    };
    // set ref callback to attach touch event listeners
    const output = {
        ref: onRef,
    };
    // if track mouse attach mouse down listener
    if (handlerProps.trackMouse) {
        output.onMouseDown = onStart;
    }
    return [output, attachTouch];
}
function updateTransientState(state, props, previousProps, attachTouch) {
    // if trackTouch is off or there is no el, then remove handlers if necessary and exit
    if (!props.trackTouch || !state.el) {
        if (state.cleanUpTouch) {
            state.cleanUpTouch();
        }
        return Object.assign(Object.assign({}, state), { cleanUpTouch: undefined });
    }
    // trackTouch is on, so if there are no handlers attached, attach them and exit
    if (!state.cleanUpTouch) {
        return Object.assign(Object.assign({}, state), { cleanUpTouch: attachTouch(state.el, props) });
    }
    // trackTouch is on and handlers are already attached, so if preventScrollOnSwipe changes value,
    // remove and reattach handlers (this is required to update the passive option when attaching
    // the handlers)
    if (props.preventScrollOnSwipe !== previousProps.preventScrollOnSwipe ||
        props.touchEventOptions.passive !== previousProps.touchEventOptions.passive) {
        state.cleanUpTouch();
        return Object.assign(Object.assign({}, state), { cleanUpTouch: attachTouch(state.el, props) });
    }
    return state;
}
function useSwipeable(options) {
    const { trackMouse } = options;
    const transientState = React.useRef(Object.assign({}, initialState));
    const transientProps = React.useRef(Object.assign({}, defaultProps));
    // track previous rendered props
    const previousProps = React.useRef(Object.assign({}, transientProps.current));
    previousProps.current = Object.assign({}, transientProps.current);
    // update current render props & defaults
    transientProps.current = Object.assign(Object.assign({}, defaultProps), options);
    // Force defaults for config properties
    let defaultKey;
    for (defaultKey in defaultProps) {
        if (transientProps.current[defaultKey] === void 0) {
            transientProps.current[defaultKey] = defaultProps[defaultKey];
        }
    }
    const [handlers, attachTouch] = React.useMemo(() => getHandlers((stateSetter) => (transientState.current = stateSetter(transientState.current, transientProps.current)), { trackMouse }), [trackMouse]);
    transientState.current = updateTransientState(transientState.current, transientProps.current, previousProps.current, attachTouch);
    return handlers;
}

__webpack_unused_export__ = DOWN;
__webpack_unused_export__ = LEFT;
__webpack_unused_export__ = RIGHT;
__webpack_unused_export__ = UP;
exports.QS = useSwipeable;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 27606:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var wrapInStatefulComponent_1 = tslib_1.__importDefault(__webpack_require__(78034));
var addClassDecoratorSupport = function (Comp) {
    var isSFC = !Comp.prototype;
    return !isSFC ? Comp : wrapInStatefulComponent_1.default(Comp);
};
exports["default"] = addClassDecoratorSupport;
//# sourceMappingURL=addClassDecoratorSupport.js.map

/***/ }),

/***/ 13057:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.divWrapper = void 0;
var tslib_1 = __webpack_require__(53265);
var React = tslib_1.__importStar(__webpack_require__(18038));
var addClassDecoratorSupport_1 = tslib_1.__importDefault(__webpack_require__(27606));
var h = React.createElement;
var noWrap = function (Comp, propName, props, state) {
    var _a;
    return h(Comp, propName ? tslib_1.__assign((_a = {}, _a[propName] = state, _a), props) : tslib_1.__assign(tslib_1.__assign({}, state), props));
};
exports.divWrapper = function (Comp, propName, props, state) {
    return h('div', null, noWrap(Comp, propName, props, state));
};
var createEnhancer = function (Facc, prop, wrapper) {
    if (wrapper === void 0) { wrapper = noWrap; }
    var enhancer = function (Comp, propName, faccProps) {
        if (propName === void 0) { propName = prop; }
        if (faccProps === void 0) { faccProps = null; }
        var isClassDecoratorMethodCall = typeof Comp === 'string';
        if (isClassDecoratorMethodCall) {
            return function (Klass) { return enhancer(Klass, Comp || prop, propName); };
        }
        var Enhanced = function (props) {
            return h(Facc, faccProps, function (state) { return wrapper(Comp, propName, props, state); });
        };
        if (false) {}
        return isClassDecoratorMethodCall ? addClassDecoratorSupport_1.default(Enhanced) : Enhanced;
    };
    return enhancer;
};
exports["default"] = createEnhancer;
//# sourceMappingURL=createEnhancer.js.map

/***/ }),

/***/ 72900:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var render_1 = tslib_1.__importDefault(__webpack_require__(59285));
var defaultMapPropsToArgs = function (props) { return [props]; };
var hookToRenderProp = function (hook, mapPropsToArgs) {
    if (mapPropsToArgs === void 0) { mapPropsToArgs = defaultMapPropsToArgs; }
    return function (props) { return render_1.default(props, hook.apply(void 0, mapPropsToArgs(props))); };
};
exports["default"] = hookToRenderProp;
//# sourceMappingURL=hookToRenderProp.js.map

/***/ }),

/***/ 80801:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hookToRenderProp = exports.createEnhancer = exports.render = void 0;
var tslib_1 = __webpack_require__(53265);
var render_1 = tslib_1.__importDefault(__webpack_require__(59285));
exports.render = render_1.default;
var createEnhancer_1 = tslib_1.__importDefault(__webpack_require__(13057));
exports.createEnhancer = createEnhancer_1.default;
var hookToRenderProp_1 = tslib_1.__importDefault(__webpack_require__(72900));
exports.hookToRenderProp = hookToRenderProp_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 59285:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var isReact16Plus = parseInt(react_1.version.substr(0, react_1.version.indexOf('.'))) > 15;
var isFn = function (fn) { return typeof fn === 'function'; };
var render = function (props, data) {
    var more = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        more[_i - 2] = arguments[_i];
    }
    if (false) { var children_1, render_1; }
    var render = props.render, _a = props.children, children = _a === void 0 ? render : _a, component = props.component, _b = props.comp, comp = _b === void 0 ? component : _b;
    if (isFn(children))
        return children.apply(void 0, tslib_1.__spreadArrays([data], more));
    if (comp) {
        return react_1.createElement(comp, data);
    }
    if (children instanceof Array)
        return isReact16Plus ? children : react_1.createElement.apply(void 0, tslib_1.__spreadArrays(['div', null], children));
    if (children && (children instanceof Object)) {
        if (false) {}
        else {
            if (typeof children.type === 'string')
                return children;
            return react_1.cloneElement(children, Object.assign({}, children.props, data));
        }
    }
    return children || null;
};
exports["default"] = render;
//# sourceMappingURL=render.js.map

/***/ }),

/***/ 78034:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var React = tslib_1.__importStar(__webpack_require__(18038));
var wrapInStatefulComponent = function (Comp) {
    var Decorated = (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.render = function () {
            return Comp(this.props, this.context);
        };
        return class_1;
    }(React.Component));
    if (false) {}
    return Decorated;
};
exports["default"] = wrapInStatefulComponent;
//# sourceMappingURL=wrapInStatefulComponent.js.map

/***/ }),

/***/ 75312:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var createBreakpoint = function (breakpoints) {
    if (breakpoints === void 0) { breakpoints = { laptopL: 1440, laptop: 1024, tablet: 768 }; }
    return function () {
        var _a = react_1.useState(util_1.isBrowser ? window.innerWidth : 0), screen = _a[0], setScreen = _a[1];
        react_1.useEffect(function () {
            var setSideScreen = function () {
                setScreen(window.innerWidth);
            };
            setSideScreen();
            util_1.on(window, 'resize', setSideScreen);
            return function () {
                util_1.off(window, 'resize', setSideScreen);
            };
        });
        var sortedBreakpoints = react_1.useMemo(function () { return Object.entries(breakpoints).sort(function (a, b) { return (a[1] >= b[1] ? 1 : -1); }); }, [breakpoints]);
        var result = sortedBreakpoints.reduce(function (acc, _a) {
            var name = _a[0], width = _a[1];
            if (screen >= width) {
                return name;
            }
            else {
                return acc;
            }
        }, sortedBreakpoints[0][0]);
        return result;
    };
};
exports["default"] = createBreakpoint;


/***/ }),

/***/ 56652:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createGlobalState = void 0;
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var hookState_1 = __webpack_require__(36143);
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(41447));
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(48272));
function createGlobalState(initialState) {
    var store = {
        state: initialState instanceof Function ? initialState() : initialState,
        setState: function (nextState) {
            store.state = hookState_1.resolveHookState(nextState, store.state);
            store.setters.forEach(function (setter) { return setter(store.state); });
        },
        setters: [],
    };
    return function () {
        var _a = react_1.useState(store.state), globalState = _a[0], stateSetter = _a[1];
        useEffectOnce_1.default(function () { return function () {
            store.setters = store.setters.filter(function (setter) { return setter !== stateSetter; });
        }; });
        useIsomorphicLayoutEffect_1.default(function () {
            if (!store.setters.includes(stateSetter)) {
                store.setters.push(stateSetter);
            }
        });
        return [globalState, store.setState];
    };
}
exports.createGlobalState = createGlobalState;
exports["default"] = createGlobalState;


/***/ }),

/***/ 28472:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var React = tslib_1.__importStar(__webpack_require__(18038));
var react_1 = __webpack_require__(18038);
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(59933));
var parseTimeRanges_1 = tslib_1.__importDefault(__webpack_require__(55845));
function createHTMLMediaHook(tag) {
    return function (elOrProps) {
        var element;
        var props;
        if (React.isValidElement(elOrProps)) {
            element = elOrProps;
            props = element.props;
        }
        else {
            props = elOrProps;
        }
        var _a = useSetState_1.default({
            buffered: [],
            time: 0,
            duration: 0,
            paused: true,
            muted: false,
            volume: 1,
            playing: false,
        }), state = _a[0], setState = _a[1];
        var ref = react_1.useRef(null);
        var wrapEvent = function (userEvent, proxyEvent) {
            return function (event) {
                try {
                    proxyEvent && proxyEvent(event);
                }
                finally {
                    userEvent && userEvent(event);
                }
            };
        };
        var onPlay = function () { return setState({ paused: false }); };
        var onPlaying = function () { return setState({ playing: true }); };
        var onWaiting = function () { return setState({ playing: false }); };
        var onPause = function () { return setState({ paused: true, playing: false }); };
        var onVolumeChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({
                muted: el.muted,
                volume: el.volume,
            });
        };
        var onDurationChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            var duration = el.duration, buffered = el.buffered;
            setState({
                duration: duration,
                buffered: parseTimeRanges_1.default(buffered),
            });
        };
        var onTimeUpdate = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ time: el.currentTime });
        };
        var onProgress = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ buffered: parseTimeRanges_1.default(el.buffered) });
        };
        if (element) {
            element = React.cloneElement(element, tslib_1.__assign(tslib_1.__assign({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPlaying: wrapEvent(props.onPlaying, onPlaying), onWaiting: wrapEvent(props.onWaiting, onWaiting), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) }));
        }
        else {
            element = React.createElement(tag, tslib_1.__assign(tslib_1.__assign({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPlaying: wrapEvent(props.onPlaying, onPlaying), onWaiting: wrapEvent(props.onWaiting, onWaiting), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) })); // TODO: fix this typing.
        }
        // Some browsers return `Promise` on `.play()` and may throw errors
        // if one tries to execute another `.play()` or `.pause()` while that
        // promise is resolving. So we prevent that with this lock.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=593273
        var lockPlay = false;
        var controls = {
            play: function () {
                var el = ref.current;
                if (!el) {
                    return undefined;
                }
                if (!lockPlay) {
                    var promise = el.play();
                    var isPromise = typeof promise === 'object';
                    if (isPromise) {
                        lockPlay = true;
                        var resetLock = function () {
                            lockPlay = false;
                        };
                        promise.then(resetLock, resetLock);
                    }
                    return promise;
                }
                return undefined;
            },
            pause: function () {
                var el = ref.current;
                if (el && !lockPlay) {
                    return el.pause();
                }
            },
            seek: function (time) {
                var el = ref.current;
                if (!el || state.duration === undefined) {
                    return;
                }
                time = Math.min(state.duration, Math.max(0, time));
                el.currentTime = time;
            },
            volume: function (volume) {
                var el = ref.current;
                if (!el) {
                    return;
                }
                volume = Math.min(1, Math.max(0, volume));
                el.volume = volume;
                setState({ volume: volume });
            },
            mute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = true;
            },
            unmute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = false;
            },
        };
        react_1.useEffect(function () {
            var el = ref.current;
            if (!el) {
                if (false) {}
                return;
            }
            setState({
                volume: el.volume,
                muted: el.muted,
                paused: el.paused,
            });
            // Start media, if autoPlay requested.
            if (props.autoPlay && el.paused) {
                controls.play();
            }
        }, [props.src]);
        return [element, state, controls, ref];
    };
}
exports["default"] = createHTMLMediaHook;


/***/ }),

/***/ 32360:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var createMemo = function (fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return react_1.useMemo(function () { return fn.apply(void 0, args); }, args);
    };
};
exports["default"] = createMemo;


/***/ }),

/***/ 47376:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(3849));
function composeMiddleware(chain) {
    return function (context, dispatch) {
        return chain.reduceRight(function (res, middleware) {
            return middleware(context)(res);
        }, dispatch);
    };
}
var createReducer = function () {
    var middlewares = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        middlewares[_i] = arguments[_i];
    }
    var composedMiddleware = composeMiddleware(middlewares);
    return function (reducer, initialState, initializer) {
        if (initializer === void 0) { initializer = function (value) { return value; }; }
        var ref = react_1.useRef(initializer(initialState));
        var _a = react_1.useState(ref.current), setState = _a[1];
        var dispatch = react_1.useCallback(function (action) {
            ref.current = reducer(ref.current, action);
            setState(ref.current);
            return action;
        }, [reducer]);
        var dispatchRef = react_1.useRef(composedMiddleware({
            getState: function () { return ref.current; },
            dispatch: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return dispatchRef.current.apply(dispatchRef, args);
            },
        }, dispatch));
        useUpdateEffect_1.default(function () {
            dispatchRef.current = composedMiddleware({
                getState: function () { return ref.current; },
                dispatch: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return dispatchRef.current.apply(dispatchRef, args);
                },
            }, dispatch);
        }, [dispatch]);
        return [ref.current, dispatchRef.current];
    };
};
exports["default"] = createReducer;


/***/ }),

/***/ 82989:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var createReducerContext = function (reducer, defaultInitialState) {
    var context = react_1.createContext(undefined);
    var providerFactory = function (props, children) { return react_1.createElement(context.Provider, props, children); };
    var ReducerProvider = function (_a) {
        var children = _a.children, initialState = _a.initialState;
        var state = react_1.useReducer(reducer, initialState !== undefined ? initialState : defaultInitialState);
        return providerFactory({ value: state }, children);
    };
    var useReducerContext = function () {
        var state = react_1.useContext(context);
        if (state == null) {
            throw new Error("useReducerContext must be used inside a ReducerProvider.");
        }
        return state;
    };
    return [useReducerContext, ReducerProvider, context];
};
exports["default"] = createReducerContext;


/***/ }),

/***/ 73655:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var createStateContext = function (defaultInitialValue) {
    var context = react_1.createContext(undefined);
    var providerFactory = function (props, children) { return react_1.createElement(context.Provider, props, children); };
    var StateProvider = function (_a) {
        var children = _a.children, initialValue = _a.initialValue;
        var state = react_1.useState(initialValue !== undefined ? initialValue : defaultInitialValue);
        return providerFactory({ value: state }, children);
    };
    var useStateContext = function () {
        var state = react_1.useContext(context);
        if (state == null) {
            throw new Error("useStateContext must be used inside a StateProvider.");
        }
        return state;
    };
    return [useStateContext, StateProvider, context];
};
exports["default"] = createStateContext;


/***/ }),

/***/ 37402:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useLogger = exports.useLockBodyScroll = exports.useLocation = exports.useLocalStorage = exports.useList = exports.useLifecycles = exports.useLatest = exports.useKeyPressEvent = exports.useKeyPress = exports.createBreakpoint = exports.useKey = exports.useIsomorphicLayoutEffect = exports.useInterval = exports.useIntersection = exports.useIdle = exports.useHoverDirty = exports.useHover = exports.useHarmonicIntervalFn = exports.useGetSetState = exports.useGetSet = exports.useGeolocation = exports.useFullscreen = exports.useFavicon = exports.useError = exports.useEvent = exports.ensuredForwardRef = exports.useEnsuredForwardedRef = exports.useEffectOnce = exports.useDropArea = exports.useDrop = exports.useDefault = exports.useDeepCompareEffect = exports.useDebounce = exports.useCustomCompareEffect = exports.useCss = exports.useCounter = exports.useCopyToClipboard = exports.useCookie = exports.useClickAway = exports.useBoolean = exports.useBeforeUnload = exports.useBattery = exports.useAudio = exports.useAsyncRetry = exports.useAsyncFn = exports.useAsync = exports.createStateContext = exports.createReducer = exports.createReducerContext = exports.createMemo = void 0;
exports.useUpsert = exports.useUpdateEffect = exports.useUpdate = exports.useUnmountPromise = exports.useUnmount = exports.useTween = exports.useToggle = exports.useTitle = exports.useTimeoutFn = exports.useTimeout = exports.useThrottleFn = exports.useThrottle = exports.useStateList = exports.useStateWithHistory = exports.useStartTyping = exports.useSpeech = exports.useSlider = exports.useSize = exports.useShallowCompareEffect = exports.useSetState = exports.useSessionStorage = exports.useScrolling = exports.useScroll = exports.useScratch = exports.useSearchParam = exports.useRafState = exports.useRafLoop = exports.useRaf = exports.useQueue = exports.usePromise = exports.usePreviousDistinct = exports.usePrevious = exports.usePermission = exports.usePageLeave = exports.useOrientation = exports.useObservable = exports.useNumber = exports.useNetworkState = exports.useMouseWheel = exports.useMouseHovered = exports.useMouse = exports.useMountedState = exports.useMount = exports.useMotion = exports.useMethods = exports.useMediatedState = exports.useMediaDevices = exports.useMedia = exports.useMap = exports.useLongPress = void 0;
exports.useHash = exports.createGlobalState = exports.useSet = exports.useFirstMountState = exports.useRendersCount = exports.usePinchZoom = exports.useMeasure = exports.useWindowSize = exports.useWindowScroll = exports.useMultiStateValidator = exports.useScrollbarWidth = exports.useStateValidator = exports.useVideo = exports.useVibrate = void 0;
var createMemo_1 = __webpack_require__(32360);
Object.defineProperty(exports, "createMemo", ({ enumerable: true, get: function () { return __importDefault(createMemo_1).default; } }));
var createReducerContext_1 = __webpack_require__(82989);
Object.defineProperty(exports, "createReducerContext", ({ enumerable: true, get: function () { return __importDefault(createReducerContext_1).default; } }));
var createReducer_1 = __webpack_require__(47376);
Object.defineProperty(exports, "createReducer", ({ enumerable: true, get: function () { return __importDefault(createReducer_1).default; } }));
var createStateContext_1 = __webpack_require__(73655);
Object.defineProperty(exports, "createStateContext", ({ enumerable: true, get: function () { return __importDefault(createStateContext_1).default; } }));
var useAsync_1 = __webpack_require__(15936);
Object.defineProperty(exports, "useAsync", ({ enumerable: true, get: function () { return __importDefault(useAsync_1).default; } }));
var useAsyncFn_1 = __webpack_require__(10285);
Object.defineProperty(exports, "useAsyncFn", ({ enumerable: true, get: function () { return __importDefault(useAsyncFn_1).default; } }));
var useAsyncRetry_1 = __webpack_require__(3077);
Object.defineProperty(exports, "useAsyncRetry", ({ enumerable: true, get: function () { return __importDefault(useAsyncRetry_1).default; } }));
var useAudio_1 = __webpack_require__(6525);
Object.defineProperty(exports, "useAudio", ({ enumerable: true, get: function () { return __importDefault(useAudio_1).default; } }));
var useBattery_1 = __webpack_require__(88652);
Object.defineProperty(exports, "useBattery", ({ enumerable: true, get: function () { return __importDefault(useBattery_1).default; } }));
var useBeforeUnload_1 = __webpack_require__(63044);
Object.defineProperty(exports, "useBeforeUnload", ({ enumerable: true, get: function () { return __importDefault(useBeforeUnload_1).default; } }));
var useBoolean_1 = __webpack_require__(77344);
Object.defineProperty(exports, "useBoolean", ({ enumerable: true, get: function () { return __importDefault(useBoolean_1).default; } }));
var useClickAway_1 = __webpack_require__(4691);
Object.defineProperty(exports, "useClickAway", ({ enumerable: true, get: function () { return __importDefault(useClickAway_1).default; } }));
var useCookie_1 = __webpack_require__(55733);
Object.defineProperty(exports, "useCookie", ({ enumerable: true, get: function () { return __importDefault(useCookie_1).default; } }));
var useCopyToClipboard_1 = __webpack_require__(60341);
Object.defineProperty(exports, "useCopyToClipboard", ({ enumerable: true, get: function () { return __importDefault(useCopyToClipboard_1).default; } }));
var useCounter_1 = __webpack_require__(45972);
Object.defineProperty(exports, "useCounter", ({ enumerable: true, get: function () { return __importDefault(useCounter_1).default; } }));
var useCss_1 = __webpack_require__(67994);
Object.defineProperty(exports, "useCss", ({ enumerable: true, get: function () { return __importDefault(useCss_1).default; } }));
var useCustomCompareEffect_1 = __webpack_require__(29908);
Object.defineProperty(exports, "useCustomCompareEffect", ({ enumerable: true, get: function () { return __importDefault(useCustomCompareEffect_1).default; } }));
var useDebounce_1 = __webpack_require__(49167);
Object.defineProperty(exports, "useDebounce", ({ enumerable: true, get: function () { return __importDefault(useDebounce_1).default; } }));
var useDeepCompareEffect_1 = __webpack_require__(60924);
Object.defineProperty(exports, "useDeepCompareEffect", ({ enumerable: true, get: function () { return __importDefault(useDeepCompareEffect_1).default; } }));
var useDefault_1 = __webpack_require__(49953);
Object.defineProperty(exports, "useDefault", ({ enumerable: true, get: function () { return __importDefault(useDefault_1).default; } }));
var useDrop_1 = __webpack_require__(46278);
Object.defineProperty(exports, "useDrop", ({ enumerable: true, get: function () { return __importDefault(useDrop_1).default; } }));
var useDropArea_1 = __webpack_require__(27041);
Object.defineProperty(exports, "useDropArea", ({ enumerable: true, get: function () { return __importDefault(useDropArea_1).default; } }));
var useEffectOnce_1 = __webpack_require__(41447);
Object.defineProperty(exports, "useEffectOnce", ({ enumerable: true, get: function () { return __importDefault(useEffectOnce_1).default; } }));
var useEnsuredForwardedRef_1 = __webpack_require__(35361);
Object.defineProperty(exports, "useEnsuredForwardedRef", ({ enumerable: true, get: function () { return __importDefault(useEnsuredForwardedRef_1).default; } }));
Object.defineProperty(exports, "ensuredForwardRef", ({ enumerable: true, get: function () { return useEnsuredForwardedRef_1.ensuredForwardRef; } }));
var useEvent_1 = __webpack_require__(1158);
Object.defineProperty(exports, "useEvent", ({ enumerable: true, get: function () { return __importDefault(useEvent_1).default; } }));
var useError_1 = __webpack_require__(95615);
Object.defineProperty(exports, "useError", ({ enumerable: true, get: function () { return __importDefault(useError_1).default; } }));
var useFavicon_1 = __webpack_require__(92630);
Object.defineProperty(exports, "useFavicon", ({ enumerable: true, get: function () { return __importDefault(useFavicon_1).default; } }));
var useFullscreen_1 = __webpack_require__(87196);
Object.defineProperty(exports, "useFullscreen", ({ enumerable: true, get: function () { return __importDefault(useFullscreen_1).default; } }));
var useGeolocation_1 = __webpack_require__(67985);
Object.defineProperty(exports, "useGeolocation", ({ enumerable: true, get: function () { return __importDefault(useGeolocation_1).default; } }));
var useGetSet_1 = __webpack_require__(73148);
Object.defineProperty(exports, "useGetSet", ({ enumerable: true, get: function () { return __importDefault(useGetSet_1).default; } }));
var useGetSetState_1 = __webpack_require__(85338);
Object.defineProperty(exports, "useGetSetState", ({ enumerable: true, get: function () { return __importDefault(useGetSetState_1).default; } }));
var useHarmonicIntervalFn_1 = __webpack_require__(85020);
Object.defineProperty(exports, "useHarmonicIntervalFn", ({ enumerable: true, get: function () { return __importDefault(useHarmonicIntervalFn_1).default; } }));
var useHover_1 = __webpack_require__(42537);
Object.defineProperty(exports, "useHover", ({ enumerable: true, get: function () { return __importDefault(useHover_1).default; } }));
var useHoverDirty_1 = __webpack_require__(42626);
Object.defineProperty(exports, "useHoverDirty", ({ enumerable: true, get: function () { return __importDefault(useHoverDirty_1).default; } }));
var useIdle_1 = __webpack_require__(59479);
Object.defineProperty(exports, "useIdle", ({ enumerable: true, get: function () { return __importDefault(useIdle_1).default; } }));
var useIntersection_1 = __webpack_require__(26618);
Object.defineProperty(exports, "useIntersection", ({ enumerable: true, get: function () { return __importDefault(useIntersection_1).default; } }));
var useInterval_1 = __webpack_require__(92431);
Object.defineProperty(exports, "useInterval", ({ enumerable: true, get: function () { return __importDefault(useInterval_1).default; } }));
var useIsomorphicLayoutEffect_1 = __webpack_require__(48272);
Object.defineProperty(exports, "useIsomorphicLayoutEffect", ({ enumerable: true, get: function () { return __importDefault(useIsomorphicLayoutEffect_1).default; } }));
var useKey_1 = __webpack_require__(37829);
Object.defineProperty(exports, "useKey", ({ enumerable: true, get: function () { return __importDefault(useKey_1).default; } }));
var createBreakpoint_1 = __webpack_require__(75312);
Object.defineProperty(exports, "createBreakpoint", ({ enumerable: true, get: function () { return __importDefault(createBreakpoint_1).default; } }));
// not exported because of peer dependency
// export { default as useKeyboardJs } from './useKeyboardJs';
var useKeyPress_1 = __webpack_require__(91511);
Object.defineProperty(exports, "useKeyPress", ({ enumerable: true, get: function () { return __importDefault(useKeyPress_1).default; } }));
var useKeyPressEvent_1 = __webpack_require__(72795);
Object.defineProperty(exports, "useKeyPressEvent", ({ enumerable: true, get: function () { return __importDefault(useKeyPressEvent_1).default; } }));
var useLatest_1 = __webpack_require__(19992);
Object.defineProperty(exports, "useLatest", ({ enumerable: true, get: function () { return __importDefault(useLatest_1).default; } }));
var useLifecycles_1 = __webpack_require__(70698);
Object.defineProperty(exports, "useLifecycles", ({ enumerable: true, get: function () { return __importDefault(useLifecycles_1).default; } }));
var useList_1 = __webpack_require__(85714);
Object.defineProperty(exports, "useList", ({ enumerable: true, get: function () { return __importDefault(useList_1).default; } }));
var useLocalStorage_1 = __webpack_require__(41998);
Object.defineProperty(exports, "useLocalStorage", ({ enumerable: true, get: function () { return __importDefault(useLocalStorage_1).default; } }));
var useLocation_1 = __webpack_require__(73784);
Object.defineProperty(exports, "useLocation", ({ enumerable: true, get: function () { return __importDefault(useLocation_1).default; } }));
var useLockBodyScroll_1 = __webpack_require__(99246);
Object.defineProperty(exports, "useLockBodyScroll", ({ enumerable: true, get: function () { return __importDefault(useLockBodyScroll_1).default; } }));
var useLogger_1 = __webpack_require__(47465);
Object.defineProperty(exports, "useLogger", ({ enumerable: true, get: function () { return __importDefault(useLogger_1).default; } }));
var useLongPress_1 = __webpack_require__(48623);
Object.defineProperty(exports, "useLongPress", ({ enumerable: true, get: function () { return __importDefault(useLongPress_1).default; } }));
var useMap_1 = __webpack_require__(47227);
Object.defineProperty(exports, "useMap", ({ enumerable: true, get: function () { return __importDefault(useMap_1).default; } }));
var useMedia_1 = __webpack_require__(39410);
Object.defineProperty(exports, "useMedia", ({ enumerable: true, get: function () { return __importDefault(useMedia_1).default; } }));
var useMediaDevices_1 = __webpack_require__(96655);
Object.defineProperty(exports, "useMediaDevices", ({ enumerable: true, get: function () { return __importDefault(useMediaDevices_1).default; } }));
var useMediatedState_1 = __webpack_require__(83078);
Object.defineProperty(exports, "useMediatedState", ({ enumerable: true, get: function () { return useMediatedState_1.useMediatedState; } }));
var useMethods_1 = __webpack_require__(15319);
Object.defineProperty(exports, "useMethods", ({ enumerable: true, get: function () { return __importDefault(useMethods_1).default; } }));
var useMotion_1 = __webpack_require__(99584);
Object.defineProperty(exports, "useMotion", ({ enumerable: true, get: function () { return __importDefault(useMotion_1).default; } }));
var useMount_1 = __webpack_require__(41735);
Object.defineProperty(exports, "useMount", ({ enumerable: true, get: function () { return __importDefault(useMount_1).default; } }));
var useMountedState_1 = __webpack_require__(70707);
Object.defineProperty(exports, "useMountedState", ({ enumerable: true, get: function () { return __importDefault(useMountedState_1).default; } }));
var useMouse_1 = __webpack_require__(5822);
Object.defineProperty(exports, "useMouse", ({ enumerable: true, get: function () { return __importDefault(useMouse_1).default; } }));
var useMouseHovered_1 = __webpack_require__(77500);
Object.defineProperty(exports, "useMouseHovered", ({ enumerable: true, get: function () { return __importDefault(useMouseHovered_1).default; } }));
var useMouseWheel_1 = __webpack_require__(13634);
Object.defineProperty(exports, "useMouseWheel", ({ enumerable: true, get: function () { return __importDefault(useMouseWheel_1).default; } }));
var useNetworkState_1 = __webpack_require__(66091);
Object.defineProperty(exports, "useNetworkState", ({ enumerable: true, get: function () { return __importDefault(useNetworkState_1).default; } }));
var useNumber_1 = __webpack_require__(73790);
Object.defineProperty(exports, "useNumber", ({ enumerable: true, get: function () { return __importDefault(useNumber_1).default; } }));
var useObservable_1 = __webpack_require__(13694);
Object.defineProperty(exports, "useObservable", ({ enumerable: true, get: function () { return __importDefault(useObservable_1).default; } }));
var useOrientation_1 = __webpack_require__(35236);
Object.defineProperty(exports, "useOrientation", ({ enumerable: true, get: function () { return __importDefault(useOrientation_1).default; } }));
var usePageLeave_1 = __webpack_require__(47555);
Object.defineProperty(exports, "usePageLeave", ({ enumerable: true, get: function () { return __importDefault(usePageLeave_1).default; } }));
var usePermission_1 = __webpack_require__(64813);
Object.defineProperty(exports, "usePermission", ({ enumerable: true, get: function () { return __importDefault(usePermission_1).default; } }));
var usePrevious_1 = __webpack_require__(98849);
Object.defineProperty(exports, "usePrevious", ({ enumerable: true, get: function () { return __importDefault(usePrevious_1).default; } }));
var usePreviousDistinct_1 = __webpack_require__(10161);
Object.defineProperty(exports, "usePreviousDistinct", ({ enumerable: true, get: function () { return __importDefault(usePreviousDistinct_1).default; } }));
var usePromise_1 = __webpack_require__(51090);
Object.defineProperty(exports, "usePromise", ({ enumerable: true, get: function () { return __importDefault(usePromise_1).default; } }));
var useQueue_1 = __webpack_require__(73990);
Object.defineProperty(exports, "useQueue", ({ enumerable: true, get: function () { return __importDefault(useQueue_1).default; } }));
var useRaf_1 = __webpack_require__(89689);
Object.defineProperty(exports, "useRaf", ({ enumerable: true, get: function () { return __importDefault(useRaf_1).default; } }));
var useRafLoop_1 = __webpack_require__(31614);
Object.defineProperty(exports, "useRafLoop", ({ enumerable: true, get: function () { return __importDefault(useRafLoop_1).default; } }));
var useRafState_1 = __webpack_require__(11515);
Object.defineProperty(exports, "useRafState", ({ enumerable: true, get: function () { return __importDefault(useRafState_1).default; } }));
var useSearchParam_1 = __webpack_require__(56884);
Object.defineProperty(exports, "useSearchParam", ({ enumerable: true, get: function () { return __importDefault(useSearchParam_1).default; } }));
var useScratch_1 = __webpack_require__(16229);
Object.defineProperty(exports, "useScratch", ({ enumerable: true, get: function () { return __importDefault(useScratch_1).default; } }));
var useScroll_1 = __webpack_require__(79086);
Object.defineProperty(exports, "useScroll", ({ enumerable: true, get: function () { return __importDefault(useScroll_1).default; } }));
var useScrolling_1 = __webpack_require__(96649);
Object.defineProperty(exports, "useScrolling", ({ enumerable: true, get: function () { return __importDefault(useScrolling_1).default; } }));
var useSessionStorage_1 = __webpack_require__(35566);
Object.defineProperty(exports, "useSessionStorage", ({ enumerable: true, get: function () { return __importDefault(useSessionStorage_1).default; } }));
var useSetState_1 = __webpack_require__(59933);
Object.defineProperty(exports, "useSetState", ({ enumerable: true, get: function () { return __importDefault(useSetState_1).default; } }));
var useShallowCompareEffect_1 = __webpack_require__(24540);
Object.defineProperty(exports, "useShallowCompareEffect", ({ enumerable: true, get: function () { return __importDefault(useShallowCompareEffect_1).default; } }));
var useSize_1 = __webpack_require__(34351);
Object.defineProperty(exports, "useSize", ({ enumerable: true, get: function () { return __importDefault(useSize_1).default; } }));
var useSlider_1 = __webpack_require__(67492);
Object.defineProperty(exports, "useSlider", ({ enumerable: true, get: function () { return __importDefault(useSlider_1).default; } }));
var useSpeech_1 = __webpack_require__(39289);
Object.defineProperty(exports, "useSpeech", ({ enumerable: true, get: function () { return __importDefault(useSpeech_1).default; } }));
// not exported because of peer dependency
// export { default as useSpring } from './useSpring';
var useStartTyping_1 = __webpack_require__(38593);
Object.defineProperty(exports, "useStartTyping", ({ enumerable: true, get: function () { return __importDefault(useStartTyping_1).default; } }));
var useStateWithHistory_1 = __webpack_require__(7003);
Object.defineProperty(exports, "useStateWithHistory", ({ enumerable: true, get: function () { return useStateWithHistory_1.useStateWithHistory; } }));
var useStateList_1 = __webpack_require__(72595);
Object.defineProperty(exports, "useStateList", ({ enumerable: true, get: function () { return __importDefault(useStateList_1).default; } }));
var useThrottle_1 = __webpack_require__(6919);
Object.defineProperty(exports, "useThrottle", ({ enumerable: true, get: function () { return __importDefault(useThrottle_1).default; } }));
var useThrottleFn_1 = __webpack_require__(14105);
Object.defineProperty(exports, "useThrottleFn", ({ enumerable: true, get: function () { return __importDefault(useThrottleFn_1).default; } }));
var useTimeout_1 = __webpack_require__(27488);
Object.defineProperty(exports, "useTimeout", ({ enumerable: true, get: function () { return __importDefault(useTimeout_1).default; } }));
var useTimeoutFn_1 = __webpack_require__(99335);
Object.defineProperty(exports, "useTimeoutFn", ({ enumerable: true, get: function () { return __importDefault(useTimeoutFn_1).default; } }));
var useTitle_1 = __webpack_require__(5987);
Object.defineProperty(exports, "useTitle", ({ enumerable: true, get: function () { return __importDefault(useTitle_1).default; } }));
var useToggle_1 = __webpack_require__(75740);
Object.defineProperty(exports, "useToggle", ({ enumerable: true, get: function () { return __importDefault(useToggle_1).default; } }));
var useTween_1 = __webpack_require__(28005);
Object.defineProperty(exports, "useTween", ({ enumerable: true, get: function () { return __importDefault(useTween_1).default; } }));
var useUnmount_1 = __webpack_require__(5016);
Object.defineProperty(exports, "useUnmount", ({ enumerable: true, get: function () { return __importDefault(useUnmount_1).default; } }));
var useUnmountPromise_1 = __webpack_require__(1399);
Object.defineProperty(exports, "useUnmountPromise", ({ enumerable: true, get: function () { return __importDefault(useUnmountPromise_1).default; } }));
var useUpdate_1 = __webpack_require__(24345);
Object.defineProperty(exports, "useUpdate", ({ enumerable: true, get: function () { return __importDefault(useUpdate_1).default; } }));
var useUpdateEffect_1 = __webpack_require__(3849);
Object.defineProperty(exports, "useUpdateEffect", ({ enumerable: true, get: function () { return __importDefault(useUpdateEffect_1).default; } }));
var useUpsert_1 = __webpack_require__(80790);
Object.defineProperty(exports, "useUpsert", ({ enumerable: true, get: function () { return __importDefault(useUpsert_1).default; } }));
var useVibrate_1 = __webpack_require__(301);
Object.defineProperty(exports, "useVibrate", ({ enumerable: true, get: function () { return __importDefault(useVibrate_1).default; } }));
var useVideo_1 = __webpack_require__(15273);
Object.defineProperty(exports, "useVideo", ({ enumerable: true, get: function () { return __importDefault(useVideo_1).default; } }));
var useStateValidator_1 = __webpack_require__(48542);
Object.defineProperty(exports, "useStateValidator", ({ enumerable: true, get: function () { return __importDefault(useStateValidator_1).default; } }));
var useScrollbarWidth_1 = __webpack_require__(17767);
Object.defineProperty(exports, "useScrollbarWidth", ({ enumerable: true, get: function () { return useScrollbarWidth_1.useScrollbarWidth; } }));
var useMultiStateValidator_1 = __webpack_require__(6662);
Object.defineProperty(exports, "useMultiStateValidator", ({ enumerable: true, get: function () { return useMultiStateValidator_1.useMultiStateValidator; } }));
var useWindowScroll_1 = __webpack_require__(82781);
Object.defineProperty(exports, "useWindowScroll", ({ enumerable: true, get: function () { return __importDefault(useWindowScroll_1).default; } }));
var useWindowSize_1 = __webpack_require__(56367);
Object.defineProperty(exports, "useWindowSize", ({ enumerable: true, get: function () { return __importDefault(useWindowSize_1).default; } }));
var useMeasure_1 = __webpack_require__(46111);
Object.defineProperty(exports, "useMeasure", ({ enumerable: true, get: function () { return __importDefault(useMeasure_1).default; } }));
var usePinchZoom_1 = __webpack_require__(22771);
Object.defineProperty(exports, "usePinchZoom", ({ enumerable: true, get: function () { return __importDefault(usePinchZoom_1).default; } }));
var useRendersCount_1 = __webpack_require__(6057);
Object.defineProperty(exports, "useRendersCount", ({ enumerable: true, get: function () { return useRendersCount_1.useRendersCount; } }));
var useFirstMountState_1 = __webpack_require__(40604);
Object.defineProperty(exports, "useFirstMountState", ({ enumerable: true, get: function () { return useFirstMountState_1.useFirstMountState; } }));
var useSet_1 = __webpack_require__(20722);
Object.defineProperty(exports, "useSet", ({ enumerable: true, get: function () { return __importDefault(useSet_1).default; } }));
var createGlobalState_1 = __webpack_require__(56652);
Object.defineProperty(exports, "createGlobalState", ({ enumerable: true, get: function () { return createGlobalState_1.createGlobalState; } }));
var useHash_1 = __webpack_require__(32251);
Object.defineProperty(exports, "useHash", ({ enumerable: true, get: function () { return useHash_1.useHash; } }));


/***/ }),

/***/ 36143:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveHookState = void 0;
function resolveHookState(nextState, currentState) {
    if (typeof nextState === 'function') {
        return nextState.length ? nextState(currentState) : nextState();
    }
    return nextState;
}
exports.resolveHookState = resolveHookState;


/***/ }),

/***/ 19443:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = tslib_1.__importDefault(__webpack_require__(9469));
exports["default"] = react_1.default;


/***/ }),

/***/ 55845:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function parseTimeRanges(ranges) {
    var result = [];
    for (var i = 0; i < ranges.length; i++) {
        result.push({
            start: ranges.start(i),
            end: ranges.end(i),
        });
    }
    return result;
}
exports["default"] = parseTimeRanges;


/***/ }),

/***/ 18578:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isNavigator = exports.isBrowser = exports.off = exports.on = exports.noop = void 0;
var noop = function () { };
exports.noop = noop;
function on(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.addEventListener) {
        obj.addEventListener.apply(obj, args);
    }
}
exports.on = on;
function off(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.removeEventListener) {
        obj.removeEventListener.apply(obj, args);
    }
}
exports.off = off;
exports.isBrowser = typeof window !== 'undefined';
exports.isNavigator = typeof navigator !== 'undefined';


/***/ }),

/***/ 15936:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useAsyncFn_1 = tslib_1.__importDefault(__webpack_require__(10285));
function useAsync(fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = useAsyncFn_1.default(fn, deps, {
        loading: true,
    }), state = _a[0], callback = _a[1];
    react_1.useEffect(function () {
        callback();
    }, [callback]);
    return state;
}
exports["default"] = useAsync;


/***/ }),

/***/ 10285:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(70707));
function useAsyncFn(fn, deps, initialState) {
    if (deps === void 0) { deps = []; }
    if (initialState === void 0) { initialState = { loading: false }; }
    var lastCallId = react_1.useRef(0);
    var isMounted = useMountedState_1.default();
    var _a = react_1.useState(initialState), state = _a[0], set = _a[1];
    var callback = react_1.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callId = ++lastCallId.current;
        if (!state.loading) {
            set(function (prevState) { return (tslib_1.__assign(tslib_1.__assign({}, prevState), { loading: true })); });
        }
        return fn.apply(void 0, args).then(function (value) {
            isMounted() && callId === lastCallId.current && set({ value: value, loading: false });
            return value;
        }, function (error) {
            isMounted() && callId === lastCallId.current && set({ error: error, loading: false });
            return error;
        });
    }, deps);
    return [state, callback];
}
exports["default"] = useAsyncFn;


/***/ }),

/***/ 3077:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useAsync_1 = tslib_1.__importDefault(__webpack_require__(15936));
var useAsyncRetry = function (fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = react_1.useState(0), attempt = _a[0], setAttempt = _a[1];
    var state = useAsync_1.default(fn, tslib_1.__spreadArrays(deps, [attempt]));
    var stateLoading = state.loading;
    var retry = react_1.useCallback(function () {
        if (stateLoading) {
            if (false) {}
            return;
        }
        setAttempt(function (currentAttempt) { return currentAttempt + 1; });
    }, tslib_1.__spreadArrays(deps, [stateLoading]));
    return tslib_1.__assign(tslib_1.__assign({}, state), { retry: retry });
};
exports["default"] = useAsyncRetry;


/***/ }),

/***/ 6525:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var createHTMLMediaHook_1 = tslib_1.__importDefault(__webpack_require__(28472));
var useAudio = createHTMLMediaHook_1.default('audio');
exports["default"] = useAudio;


/***/ }),

/***/ 88652:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var isDeepEqual_1 = tslib_1.__importDefault(__webpack_require__(19443));
var nav = util_1.isNavigator ? navigator : undefined;
var isBatteryApiSupported = nav && typeof nav.getBattery === 'function';
function useBatteryMock() {
    return { isSupported: false };
}
function useBattery() {
    var _a = react_1.useState({ isSupported: true, fetched: false }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var isMounted = true;
        var battery = null;
        var handleChange = function () {
            if (!isMounted || !battery) {
                return;
            }
            var newState = {
                isSupported: true,
                fetched: true,
                level: battery.level,
                charging: battery.charging,
                dischargingTime: battery.dischargingTime,
                chargingTime: battery.chargingTime,
            };
            !isDeepEqual_1.default(state, newState) && setState(newState);
        };
        nav.getBattery().then(function (bat) {
            if (!isMounted) {
                return;
            }
            battery = bat;
            util_1.on(battery, 'chargingchange', handleChange);
            util_1.on(battery, 'chargingtimechange', handleChange);
            util_1.on(battery, 'dischargingtimechange', handleChange);
            util_1.on(battery, 'levelchange', handleChange);
            handleChange();
        });
        return function () {
            isMounted = false;
            if (battery) {
                util_1.off(battery, 'chargingchange', handleChange);
                util_1.off(battery, 'chargingtimechange', handleChange);
                util_1.off(battery, 'dischargingtimechange', handleChange);
                util_1.off(battery, 'levelchange', handleChange);
            }
        };
    }, []);
    return state;
}
exports["default"] = isBatteryApiSupported ? useBattery : useBatteryMock;


/***/ }),

/***/ 63044:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var useBeforeUnload = function (enabled, message) {
    if (enabled === void 0) { enabled = true; }
    var handler = react_1.useCallback(function (event) {
        var finalEnabled = typeof enabled === 'function' ? enabled() : true;
        if (!finalEnabled) {
            return;
        }
        event.preventDefault();
        if (message) {
            event.returnValue = message;
        }
        return message;
    }, [enabled, message]);
    react_1.useEffect(function () {
        if (!enabled) {
            return;
        }
        util_1.on(window, 'beforeunload', handler);
        return function () { return util_1.off(window, 'beforeunload', handler); };
    }, [enabled, handler]);
};
exports["default"] = useBeforeUnload;


/***/ }),

/***/ 77344:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var useToggle_1 = tslib_1.__importDefault(__webpack_require__(75740));
exports["default"] = useToggle_1.default;


/***/ }),

/***/ 4691:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function (ref, onClickAway, events) {
    if (events === void 0) { events = defaultEvents; }
    var savedCallback = react_1.useRef(onClickAway);
    react_1.useEffect(function () {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    react_1.useEffect(function () {
        var handler = function (event) {
            var el = ref.current;
            el && !el.contains(event.target) && savedCallback.current(event);
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var eventName = events_1[_i];
            util_1.on(document, eventName, handler);
        }
        return function () {
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var eventName = events_2[_i];
                util_1.off(document, eventName, handler);
            }
        };
    }, [events, ref]);
};
exports["default"] = useClickAway;


/***/ }),

/***/ 55733:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var js_cookie_1 = tslib_1.__importDefault(__webpack_require__(32259));
var useCookie = function (cookieName) {
    var _a = react_1.useState(function () { return js_cookie_1.default.get(cookieName) || null; }), value = _a[0], setValue = _a[1];
    var updateCookie = react_1.useCallback(function (newValue, options) {
        js_cookie_1.default.set(cookieName, newValue, options);
        setValue(newValue);
    }, [cookieName]);
    var deleteCookie = react_1.useCallback(function () {
        js_cookie_1.default.remove(cookieName);
        setValue(null);
    }, [cookieName]);
    return [value, updateCookie, deleteCookie];
};
exports["default"] = useCookie;


/***/ }),

/***/ 60341:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var copy_to_clipboard_1 = tslib_1.__importDefault(__webpack_require__(67937));
var react_1 = __webpack_require__(18038);
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(70707));
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(59933));
var useCopyToClipboard = function () {
    var isMounted = useMountedState_1.default();
    var _a = useSetState_1.default({
        value: undefined,
        error: undefined,
        noUserInteraction: true,
    }), state = _a[0], setState = _a[1];
    var copyToClipboard = react_1.useCallback(function (value) {
        if (!isMounted()) {
            return;
        }
        var noUserInteraction;
        var normalizedValue;
        try {
            // only strings and numbers casted to strings can be copied to clipboard
            if (typeof value !== 'string' && typeof value !== 'number') {
                var error = new Error("Cannot copy typeof " + typeof value + " to clipboard, must be a string");
                if (false)
                    {}
                setState({
                    value: value,
                    error: error,
                    noUserInteraction: true,
                });
                return;
            }
            // empty strings are also considered invalid
            else if (value === '') {
                var error = new Error("Cannot copy empty string to clipboard.");
                if (false)
                    {}
                setState({
                    value: value,
                    error: error,
                    noUserInteraction: true,
                });
                return;
            }
            normalizedValue = value.toString();
            noUserInteraction = copy_to_clipboard_1.default(normalizedValue);
            setState({
                value: normalizedValue,
                error: undefined,
                noUserInteraction: noUserInteraction,
            });
        }
        catch (error) {
            setState({
                value: normalizedValue,
                error: error,
                noUserInteraction: noUserInteraction,
            });
        }
    }, []);
    return [state, copyToClipboard];
};
exports["default"] = useCopyToClipboard;


/***/ }),

/***/ 45972:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useGetSet_1 = tslib_1.__importDefault(__webpack_require__(73148));
var hookState_1 = __webpack_require__(36143);
function useCounter(initialValue, max, min) {
    if (initialValue === void 0) { initialValue = 0; }
    if (max === void 0) { max = null; }
    if (min === void 0) { min = null; }
    var init = hookState_1.resolveHookState(initialValue);
    typeof init !== 'number' &&
        console.error('initialValue has to be a number, got ' + typeof initialValue);
    if (typeof min === 'number') {
        init = Math.max(init, min);
    }
    else if (min !== null) {
        console.error('min has to be a number, got ' + typeof min);
    }
    if (typeof max === 'number') {
        init = Math.min(init, max);
    }
    else if (max !== null) {
        console.error('max has to be a number, got ' + typeof max);
    }
    var _a = useGetSet_1.default(init), get = _a[0], setInternal = _a[1];
    return [
        get(),
        react_1.useMemo(function () {
            var set = function (newState) {
                var prevState = get();
                var rState = hookState_1.resolveHookState(newState, prevState);
                if (prevState !== rState) {
                    if (typeof min === 'number') {
                        rState = Math.max(rState, min);
                    }
                    if (typeof max === 'number') {
                        rState = Math.min(rState, max);
                    }
                    prevState !== rState && setInternal(rState);
                }
            };
            return {
                get: get,
                set: set,
                inc: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = hookState_1.resolveHookState(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num + rDelta; });
                },
                dec: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = hookState_1.resolveHookState(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num - rDelta; });
                },
                reset: function (value) {
                    if (value === void 0) { value = init; }
                    var rValue = hookState_1.resolveHookState(value, get());
                    if (typeof rValue !== 'number') {
                        console.error('value has to be a number or function returning a number, got ' + typeof rValue);
                    }
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    init = rValue;
                    set(rValue);
                },
            };
        }, [init, min, max]),
    ];
}
exports["default"] = useCounter;


/***/ }),

/***/ 67994:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var nano_css_1 = __webpack_require__(67225);
var cssom_1 = __webpack_require__(31141);
var vcssom_1 = __webpack_require__(57066);
var cssToTree_1 = __webpack_require__(38805);
var react_1 = __webpack_require__(18038);
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(48272));
var nano = nano_css_1.create();
cssom_1.addon(nano);
vcssom_1.addon(nano);
var counter = 0;
var useCss = function (css) {
    var className = react_1.useMemo(function () { return 'react-use-css-' + (counter++).toString(36); }, []);
    var sheet = react_1.useMemo(function () { return new nano.VSheet(); }, []);
    useIsomorphicLayoutEffect_1.default(function () {
        var tree = {};
        cssToTree_1.cssToTree(tree, css, '.' + className, '');
        sheet.diff(tree);
        return function () {
            sheet.diff({});
        };
    });
    return className;
};
exports["default"] = useCss;


/***/ }),

/***/ 29908:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var isPrimitive = function (val) { return val !== Object(val); };
var useCustomCompareEffect = function (effect, deps, depsEqual) {
    if (false) {}
    var ref = react_1.useRef(undefined);
    if (!ref.current || !depsEqual(deps, ref.current)) {
        ref.current = deps;
    }
    react_1.useEffect(effect, ref.current);
};
exports["default"] = useCustomCompareEffect;


/***/ }),

/***/ 49167:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useTimeoutFn_1 = tslib_1.__importDefault(__webpack_require__(99335));
function useDebounce(fn, ms, deps) {
    if (ms === void 0) { ms = 0; }
    if (deps === void 0) { deps = []; }
    var _a = useTimeoutFn_1.default(fn, ms), isReady = _a[0], cancel = _a[1], reset = _a[2];
    react_1.useEffect(reset, deps);
    return [isReady, cancel];
}
exports["default"] = useDebounce;


/***/ }),

/***/ 60924:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var useCustomCompareEffect_1 = tslib_1.__importDefault(__webpack_require__(29908));
var isDeepEqual_1 = tslib_1.__importDefault(__webpack_require__(19443));
var isPrimitive = function (val) { return val !== Object(val); };
var useDeepCompareEffect = function (effect, deps) {
    if (false) {}
    useCustomCompareEffect_1.default(effect, deps, isDeepEqual_1.default);
};
exports["default"] = useDeepCompareEffect;


/***/ }),

/***/ 49953:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var useDefault = function (defaultValue, initialValue) {
    var _a = react_1.useState(initialValue), value = _a[0], setValue = _a[1];
    if (value === undefined || value === null) {
        return [defaultValue, setValue];
    }
    return [value, setValue];
};
exports["default"] = useDefault;


/***/ }),

/***/ 46278:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var createProcess = function (options) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || util_1.noop)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || util_1.noop)(Array.from(dataTransfer.files), event);
        return;
    }
    if (event.clipboardData) {
        var text = event.clipboardData.getData('text');
        (options.onText || util_1.noop)(text, event);
        return;
    }
}; };
var useDrop = function (options, args) {
    if (options === void 0) { options = {}; }
    if (args === void 0) { args = []; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var _a = react_1.useState(false), over = _a[0], setOverRaw = _a[1];
    var setOver = react_1.useCallback(setOverRaw, []);
    var process = react_1.useMemo(function () { return createProcess(options); }, [onFiles, onText, onUri]);
    react_1.useEffect(function () {
        var onDragOver = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragEnter = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragLeave = function () {
            setOver(false);
        };
        var onDragExit = function () {
            setOver(false);
        };
        var onDrop = function (event) {
            event.preventDefault();
            setOver(false);
            process(event.dataTransfer, event);
        };
        var onPaste = function (event) {
            process(event.clipboardData, event);
        };
        util_1.on(document, 'dragover', onDragOver);
        util_1.on(document, 'dragenter', onDragEnter);
        util_1.on(document, 'dragleave', onDragLeave);
        util_1.on(document, 'dragexit', onDragExit);
        util_1.on(document, 'drop', onDrop);
        if (onText) {
            util_1.on(document, 'paste', onPaste);
        }
        return function () {
            util_1.off(document, 'dragover', onDragOver);
            util_1.off(document, 'dragenter', onDragEnter);
            util_1.off(document, 'dragleave', onDragLeave);
            util_1.off(document, 'dragexit', onDragExit);
            util_1.off(document, 'drop', onDrop);
            util_1.off(document, 'paste', onPaste);
        };
    }, tslib_1.__spreadArrays([process], args));
    return { over: over };
};
exports["default"] = useDrop;


/***/ }),

/***/ 27041:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(70707));
var util_1 = __webpack_require__(18578);
/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess = function (options, mounted) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || util_1.noop)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || util_1.noop)(Array.from(dataTransfer.files), event);
        return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(function (text) {
            if (mounted) {
                (options.onText || util_1.noop)(text, event);
            }
        });
    }
}; };
var createBond = function (process, setOver) { return ({
    onDragOver: function (event) {
        event.preventDefault();
    },
    onDragEnter: function (event) {
        event.preventDefault();
        setOver(true);
    },
    onDragLeave: function () {
        setOver(false);
    },
    onDrop: function (event) {
        event.preventDefault();
        event.persist();
        setOver(false);
        process(event.dataTransfer, event);
    },
    onPaste: function (event) {
        event.persist();
        process(event.clipboardData, event);
    },
}); };
var useDropArea = function (options) {
    if (options === void 0) { options = {}; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var isMounted = useMountedState_1.default();
    var _a = react_1.useState(false), over = _a[0], setOver = _a[1];
    var process = react_1.useMemo(function () { return createProcess(options, isMounted()); }, [onFiles, onText, onUri]);
    var bond = react_1.useMemo(function () { return createBond(process, setOver); }, [process, setOver]);
    return [bond, { over: over }];
};
exports["default"] = useDropArea;


/***/ }),

/***/ 41447:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var useEffectOnce = function (effect) {
    react_1.useEffect(effect, []);
};
exports["default"] = useEffectOnce;


/***/ }),

/***/ 35361:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ensuredForwardRef = void 0;
var react_1 = __webpack_require__(18038);
function useEnsuredForwardedRef(forwardedRef) {
    var ensuredRef = react_1.useRef(forwardedRef && forwardedRef.current);
    react_1.useEffect(function () {
        if (!forwardedRef) {
            return;
        }
        forwardedRef.current = ensuredRef.current;
    }, [forwardedRef]);
    return ensuredRef;
}
exports["default"] = useEnsuredForwardedRef;
function ensuredForwardRef(Component) {
    return react_1.forwardRef(function (props, ref) {
        var ensuredRef = useEnsuredForwardedRef(ref);
        return Component(props, ensuredRef);
    });
}
exports.ensuredForwardRef = ensuredForwardRef;


/***/ }),

/***/ 95615:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var useError = function () {
    var _a = react_1.useState(null), error = _a[0], setError = _a[1];
    react_1.useEffect(function () {
        if (error) {
            throw error;
        }
    }, [error]);
    var dispatchError = react_1.useCallback(function (err) {
        setError(err);
    }, []);
    return dispatchError;
};
exports["default"] = useError;


/***/ }),

/***/ 1158:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var defaultTarget = util_1.isBrowser ? window : null;
var isListenerType1 = function (target) {
    return !!target.addEventListener;
};
var isListenerType2 = function (target) {
    return !!target.on;
};
var useEvent = function (name, handler, target, options) {
    if (target === void 0) { target = defaultTarget; }
    react_1.useEffect(function () {
        if (!handler) {
            return;
        }
        if (!target) {
            return;
        }
        if (isListenerType1(target)) {
            util_1.on(target, name, handler, options);
        }
        else if (isListenerType2(target)) {
            target.on(name, handler, options);
        }
        return function () {
            if (isListenerType1(target)) {
                util_1.off(target, name, handler, options);
            }
            else if (isListenerType2(target)) {
                target.off(name, handler, options);
            }
        };
    }, [name, handler, target, JSON.stringify(options)]);
};
exports["default"] = useEvent;


/***/ }),

/***/ 92630:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var useFavicon = function (href) {
    react_1.useEffect(function () {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = href;
        document.getElementsByTagName('head')[0].appendChild(link);
    }, [href]);
};
exports["default"] = useFavicon;


/***/ }),

/***/ 40604:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useFirstMountState = void 0;
var react_1 = __webpack_require__(18038);
function useFirstMountState() {
    var isFirst = react_1.useRef(true);
    if (isFirst.current) {
        isFirst.current = false;
        return true;
    }
    return isFirst.current;
}
exports.useFirstMountState = useFirstMountState;


/***/ }),

/***/ 87196:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var screenfull_1 = tslib_1.__importDefault(__webpack_require__(65153));
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(48272));
var util_1 = __webpack_require__(18578);
var useFullscreen = function (ref, enabled, options) {
    if (options === void 0) { options = {}; }
    var video = options.video, _a = options.onClose, onClose = _a === void 0 ? util_1.noop : _a;
    var _b = react_1.useState(enabled), isFullscreen = _b[0], setIsFullscreen = _b[1];
    useIsomorphicLayoutEffect_1.default(function () {
        if (!enabled) {
            return;
        }
        if (!ref.current) {
            return;
        }
        var onWebkitEndFullscreen = function () {
            if (video === null || video === void 0 ? void 0 : video.current) {
                util_1.off(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
            }
            onClose();
        };
        var onChange = function () {
            if (screenfull_1.default.isEnabled) {
                var isScreenfullFullscreen = screenfull_1.default.isFullscreen;
                setIsFullscreen(isScreenfullFullscreen);
                if (!isScreenfullFullscreen) {
                    onClose();
                }
            }
        };
        if (screenfull_1.default.isEnabled) {
            try {
                screenfull_1.default.request(ref.current);
                setIsFullscreen(true);
            }
            catch (error) {
                onClose(error);
                setIsFullscreen(false);
            }
            screenfull_1.default.on('change', onChange);
        }
        else if (video && video.current && video.current.webkitEnterFullscreen) {
            video.current.webkitEnterFullscreen();
            util_1.on(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
            setIsFullscreen(true);
        }
        else {
            onClose();
            setIsFullscreen(false);
        }
        return function () {
            setIsFullscreen(false);
            if (screenfull_1.default.isEnabled) {
                try {
                    screenfull_1.default.off('change', onChange);
                    screenfull_1.default.exit();
                }
                catch (_a) { }
            }
            else if (video && video.current && video.current.webkitExitFullscreen) {
                util_1.off(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
                video.current.webkitExitFullscreen();
            }
        };
    }, [enabled, video, ref]);
    return isFullscreen;
};
exports["default"] = useFullscreen;


/***/ }),

/***/ 67985:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useGeolocation = function (options) {
    var _a = react_1.useState({
        loading: true,
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: Date.now(),
    }), state = _a[0], setState = _a[1];
    var mounted = true;
    var watchId;
    var onEvent = function (event) {
        if (mounted) {
            setState({
                loading: false,
                accuracy: event.coords.accuracy,
                altitude: event.coords.altitude,
                altitudeAccuracy: event.coords.altitudeAccuracy,
                heading: event.coords.heading,
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed,
                timestamp: event.timestamp,
            });
        }
    };
    var onEventError = function (error) {
        return mounted && setState(function (oldState) { return (tslib_1.__assign(tslib_1.__assign({}, oldState), { loading: false, error: error })); });
    };
    react_1.useEffect(function () {
        navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
        watchId = navigator.geolocation.watchPosition(onEvent, onEventError, options);
        return function () {
            mounted = false;
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);
    return state;
};
exports["default"] = useGeolocation;


/***/ }),

/***/ 73148:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(24345));
var hookState_1 = __webpack_require__(36143);
function useGetSet(initialState) {
    var state = react_1.useRef(hookState_1.resolveHookState(initialState));
    var update = useUpdate_1.default();
    return react_1.useMemo(function () { return [
        function () { return state.current; },
        function (newState) {
            state.current = hookState_1.resolveHookState(newState, state.current);
            update();
        },
    ]; }, []);
}
exports["default"] = useGetSet;


/***/ }),

/***/ 85338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(24345));
var useGetSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    if (false) {}
    var update = useUpdate_1.default();
    var state = react_1.useRef(tslib_1.__assign({}, initialState));
    var get = react_1.useCallback(function () { return state.current; }, []);
    var set = react_1.useCallback(function (patch) {
        if (!patch) {
            return;
        }
        if (false) {}
        Object.assign(state.current, patch);
        update();
    }, []);
    return [get, set];
};
exports["default"] = useGetSetState;


/***/ }),

/***/ 85020:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var set_harmonic_interval_1 = __webpack_require__(78419);
var useHarmonicIntervalFn = function (fn, delay) {
    if (delay === void 0) { delay = 0; }
    var latestCallback = react_1.useRef(function () { });
    react_1.useEffect(function () {
        latestCallback.current = fn;
    });
    react_1.useEffect(function () {
        if (delay !== null) {
            var interval_1 = set_harmonic_interval_1.setHarmonicInterval(function () { return latestCallback.current(); }, delay);
            return function () { return set_harmonic_interval_1.clearHarmonicInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
exports["default"] = useHarmonicIntervalFn;


/***/ }),

/***/ 32251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useHash = void 0;
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useLifecycles_1 = tslib_1.__importDefault(__webpack_require__(70698));
var util_1 = __webpack_require__(18578);
/**
 * read and write url hash, response to url hash change
 */
var useHash = function () {
    var _a = react_1.useState(function () { return window.location.hash; }), hash = _a[0], setHash = _a[1];
    var onHashChange = react_1.useCallback(function () {
        setHash(window.location.hash);
    }, []);
    useLifecycles_1.default(function () {
        util_1.on(window, 'hashchange', onHashChange);
    }, function () {
        util_1.off(window, 'hashchange', onHashChange);
    });
    var _setHash = react_1.useCallback(function (newHash) {
        if (newHash !== hash) {
            window.location.hash = newHash;
        }
    }, [hash]);
    return [hash, _setHash];
};
exports.useHash = useHash;


/***/ }),

/***/ 42537:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var React = tslib_1.__importStar(__webpack_require__(18038));
var util_1 = __webpack_require__(18578);
var useState = React.useState;
var useHover = function (element) {
    var _a = useState(false), state = _a[0], setState = _a[1];
    var onMouseEnter = function (originalOnMouseEnter) { return function (event) {
        (originalOnMouseEnter || util_1.noop)(event);
        setState(true);
    }; };
    var onMouseLeave = function (originalOnMouseLeave) { return function (event) {
        (originalOnMouseLeave || util_1.noop)(event);
        setState(false);
    }; };
    if (typeof element === 'function') {
        element = element(state);
    }
    var el = React.cloneElement(element, {
        onMouseEnter: onMouseEnter(element.props.onMouseEnter),
        onMouseLeave: onMouseLeave(element.props.onMouseLeave),
    });
    return [el, state];
};
exports["default"] = useHover;


/***/ }),

/***/ 42626:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
// kudos: https://usehooks.com/
var useHoverDirty = function (ref, enabled) {
    if (enabled === void 0) { enabled = true; }
    if (false) {}
    var _a = react_1.useState(false), value = _a[0], setValue = _a[1];
    react_1.useEffect(function () {
        var onMouseOver = function () { return setValue(true); };
        var onMouseOut = function () { return setValue(false); };
        if (enabled && ref && ref.current) {
            util_1.on(ref.current, 'mouseover', onMouseOver);
            util_1.on(ref.current, 'mouseout', onMouseOut);
        }
        // fixes react-hooks/exhaustive-deps warning about stale ref elements
        var current = ref.current;
        return function () {
            if (enabled && current) {
                util_1.off(current, 'mouseover', onMouseOver);
                util_1.off(current, 'mouseout', onMouseOut);
            }
        };
    }, [enabled, ref]);
    return value;
};
exports["default"] = useHoverDirty;


/***/ }),

/***/ 59479:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var throttle_debounce_1 = __webpack_require__(93947);
var util_1 = __webpack_require__(18578);
var defaultEvents = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'];
var oneMinute = 60e3;
var useIdle = function (ms, initialState, events) {
    if (ms === void 0) { ms = oneMinute; }
    if (initialState === void 0) { initialState = false; }
    if (events === void 0) { events = defaultEvents; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var timeout;
        var localState = state;
        var set = function (newState) {
            if (mounted) {
                localState = newState;
                setState(newState);
            }
        };
        var onEvent = throttle_debounce_1.throttle(50, function () {
            if (localState) {
                set(false);
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () { return set(true); }, ms);
        });
        var onVisibility = function () {
            if (!document.hidden) {
                onEvent();
            }
        };
        for (var i = 0; i < events.length; i++) {
            util_1.on(window, events[i], onEvent);
        }
        util_1.on(document, 'visibilitychange', onVisibility);
        timeout = setTimeout(function () { return set(true); }, ms);
        return function () {
            mounted = false;
            for (var i = 0; i < events.length; i++) {
                util_1.off(window, events[i], onEvent);
            }
            util_1.off(document, 'visibilitychange', onVisibility);
        };
    }, [ms, events]);
    return state;
};
exports["default"] = useIdle;


/***/ }),

/***/ 26618:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var useIntersection = function (ref, options) {
    var _a = react_1.useState(null), intersectionObserverEntry = _a[0], setIntersectionObserverEntry = _a[1];
    react_1.useEffect(function () {
        if (ref.current && typeof IntersectionObserver === 'function') {
            var handler = function (entries) {
                setIntersectionObserverEntry(entries[0]);
            };
            var observer_1 = new IntersectionObserver(handler, options);
            observer_1.observe(ref.current);
            return function () {
                setIntersectionObserverEntry(null);
                observer_1.disconnect();
            };
        }
        return function () { };
    }, [ref.current, options.threshold, options.root, options.rootMargin]);
    return intersectionObserverEntry;
};
exports["default"] = useIntersection;


/***/ }),

/***/ 92431:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var useInterval = function (callback, delay) {
    var savedCallback = react_1.useRef(function () { });
    react_1.useEffect(function () {
        savedCallback.current = callback;
    });
    react_1.useEffect(function () {
        if (delay !== null) {
            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);
            return function () { return clearInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
exports["default"] = useInterval;


/***/ }),

/***/ 48272:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var useIsomorphicLayoutEffect = util_1.isBrowser ? react_1.useLayoutEffect : react_1.useEffect;
exports["default"] = useIsomorphicLayoutEffect;


/***/ }),

/***/ 37829:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useEvent_1 = tslib_1.__importDefault(__webpack_require__(1158));
var util_1 = __webpack_require__(18578);
var createKeyPredicate = function (keyFilter) {
    return typeof keyFilter === 'function'
        ? keyFilter
        : typeof keyFilter === 'string'
            ? function (event) { return event.key === keyFilter; }
            : keyFilter
                ? function () { return true; }
                : function () { return false; };
};
var useKey = function (key, fn, opts, deps) {
    if (fn === void 0) { fn = util_1.noop; }
    if (opts === void 0) { opts = {}; }
    if (deps === void 0) { deps = [key]; }
    var _a = opts.event, event = _a === void 0 ? 'keydown' : _a, target = opts.target, options = opts.options;
    var useMemoHandler = react_1.useMemo(function () {
        var predicate = createKeyPredicate(key);
        var handler = function (handlerEvent) {
            if (predicate(handlerEvent)) {
                return fn(handlerEvent);
            }
        };
        return handler;
    }, deps);
    useEvent_1.default(event, useMemoHandler, target, options);
};
exports["default"] = useKey;


/***/ }),

/***/ 91511:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useKey_1 = tslib_1.__importDefault(__webpack_require__(37829));
var useKeyPress = function (keyFilter) {
    var _a = react_1.useState([false, null]), state = _a[0], set = _a[1];
    useKey_1.default(keyFilter, function (event) { return set([true, event]); }, { event: 'keydown' }, [state]);
    useKey_1.default(keyFilter, function (event) { return set([false, event]); }, { event: 'keyup' }, [state]);
    return state;
};
exports["default"] = useKeyPress;


/***/ }),

/***/ 72795:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var useKeyPress_1 = tslib_1.__importDefault(__webpack_require__(91511));
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(3849));
var useKeyPressEvent = function (key, keydown, keyup, useKeyPress) {
    if (useKeyPress === void 0) { useKeyPress = useKeyPress_1.default; }
    var _a = useKeyPress(key), pressed = _a[0], event = _a[1];
    useUpdateEffect_1.default(function () {
        if (!pressed && keyup) {
            keyup(event);
        }
        else if (pressed && keydown) {
            keydown(event);
        }
    }, [pressed]);
};
exports["default"] = useKeyPressEvent;


/***/ }),

/***/ 19992:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var useLatest = function (value) {
    var ref = react_1.useRef(value);
    ref.current = value;
    return ref;
};
exports["default"] = useLatest;


/***/ }),

/***/ 70698:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var useLifecycles = function (mount, unmount) {
    react_1.useEffect(function () {
        if (mount) {
            mount();
        }
        return function () {
            if (unmount) {
                unmount();
            }
        };
    }, []);
};
exports["default"] = useLifecycles;


/***/ }),

/***/ 85714:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(24345));
var hookState_1 = __webpack_require__(36143);
function useList(initialList) {
    if (initialList === void 0) { initialList = []; }
    var list = react_1.useRef(hookState_1.resolveHookState(initialList));
    var update = useUpdate_1.default();
    var actions = react_1.useMemo(function () {
        var a = {
            set: function (newList) {
                list.current = hookState_1.resolveHookState(newList, list.current);
                update();
            },
            push: function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i] = arguments[_i];
                }
                items.length && actions.set(function (curr) { return curr.concat(items); });
            },
            updateAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr[index] = item;
                    return arr;
                });
            },
            insertAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    index > arr.length ? (arr[index] = item) : arr.splice(index, 0, item);
                    return arr;
                });
            },
            update: function (predicate, newItem) {
                actions.set(function (curr) { return curr.map(function (item) { return (predicate(item, newItem) ? newItem : item); }); });
            },
            updateFirst: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 && actions.updateAt(index, newItem);
            },
            upsert: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 ? actions.updateAt(index, newItem) : actions.push(newItem);
            },
            sort: function (compareFn) {
                actions.set(function (curr) { return curr.slice().sort(compareFn); });
            },
            filter: function (callbackFn, thisArg) {
                actions.set(function (curr) { return curr.slice().filter(callbackFn, thisArg); });
            },
            removeAt: function (index) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr.splice(index, 1);
                    return arr;
                });
            },
            clear: function () {
                actions.set([]);
            },
            reset: function () {
                actions.set(hookState_1.resolveHookState(initialList).slice());
            },
        };
        /**
         * @deprecated Use removeAt method instead
         */
        a.remove = a.removeAt;
        return a;
    }, []);
    return [list.current, actions];
}
exports["default"] = useList;


/***/ }),

/***/ 41998:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var useLocalStorage = function (key, initialValue, options) {
    if (!util_1.isBrowser) {
        return [initialValue, util_1.noop, util_1.noop];
    }
    if (!key) {
        throw new Error('useLocalStorage key may not be falsy');
    }
    var deserializer = options
        ? options.raw
            ? function (value) { return value; }
            : options.deserializer
        : JSON.parse;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var initializer = react_1.useRef(function (key) {
        try {
            var serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;
            var localStorageValue = localStorage.getItem(key);
            if (localStorageValue !== null) {
                return deserializer(localStorageValue);
            }
            else {
                initialValue && localStorage.setItem(key, serializer(initialValue));
                return initialValue;
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _a = react_1.useState(function () { return initializer.current(key); }), state = _a[0], setState = _a[1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react_1.useLayoutEffect(function () { return setState(initializer.current(key)); }, [key]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var set = react_1.useCallback(function (valOrFunc) {
        try {
            var newState = typeof valOrFunc === 'function' ? valOrFunc(state) : valOrFunc;
            if (typeof newState === 'undefined')
                return;
            var value = void 0;
            if (options)
                if (options.raw)
                    if (typeof newState === 'string')
                        value = newState;
                    else
                        value = JSON.stringify(newState);
                else if (options.serializer)
                    value = options.serializer(newState);
                else
                    value = JSON.stringify(newState);
            else
                value = JSON.stringify(newState);
            localStorage.setItem(key, value);
            setState(deserializer(value));
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. Also JSON.stringify can throw.
        }
    }, [key, setState]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var remove = react_1.useCallback(function () {
        try {
            localStorage.removeItem(key);
            setState(undefined);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw.
        }
    }, [key, setState]);
    return [state, set, remove];
};
exports["default"] = useLocalStorage;


/***/ }),

/***/ 73784:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var patchHistoryMethod = function (method) {
    var history = window.history;
    var original = history[method];
    history[method] = function (state) {
        var result = original.apply(this, arguments);
        var event = new Event(method.toLowerCase());
        event.state = state;
        window.dispatchEvent(event);
        return result;
    };
};
if (util_1.isBrowser) {
    patchHistoryMethod('pushState');
    patchHistoryMethod('replaceState');
}
var useLocationServer = function () { return ({
    trigger: 'load',
    length: 1,
}); };
var buildState = function (trigger) {
    var _a = window.history, state = _a.state, length = _a.length;
    var _b = window.location, hash = _b.hash, host = _b.host, hostname = _b.hostname, href = _b.href, origin = _b.origin, pathname = _b.pathname, port = _b.port, protocol = _b.protocol, search = _b.search;
    return {
        trigger: trigger,
        state: state,
        length: length,
        hash: hash,
        host: host,
        hostname: hostname,
        href: href,
        origin: origin,
        pathname: pathname,
        port: port,
        protocol: protocol,
        search: search,
    };
};
var useLocationBrowser = function () {
    var _a = react_1.useState(buildState('load')), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var onPopstate = function () { return setState(buildState('popstate')); };
        var onPushstate = function () { return setState(buildState('pushstate')); };
        var onReplacestate = function () { return setState(buildState('replacestate')); };
        util_1.on(window, 'popstate', onPopstate);
        util_1.on(window, 'pushstate', onPushstate);
        util_1.on(window, 'replacestate', onReplacestate);
        return function () {
            util_1.off(window, 'popstate', onPopstate);
            util_1.off(window, 'pushstate', onPushstate);
            util_1.off(window, 'replacestate', onReplacestate);
        };
    }, []);
    return state;
};
var hasEventConstructor = typeof Event === 'function';
exports["default"] = util_1.isBrowser && hasEventConstructor ? useLocationBrowser : useLocationServer;


/***/ }),

/***/ 99246:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getClosestBody = void 0;
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
function getClosestBody(el) {
    if (!el) {
        return null;
    }
    else if (el.tagName === 'BODY') {
        return el;
    }
    else if (el.tagName === 'IFRAME') {
        var document_1 = el.contentDocument;
        return document_1 ? document_1.body : null;
    }
    else if (!el.offsetParent) {
        return null;
    }
    return getClosestBody(el.offsetParent);
}
exports.getClosestBody = getClosestBody;
function preventDefault(rawEvent) {
    var e = rawEvent || window.event;
    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
    if (e.touches.length > 1)
        return true;
    if (e.preventDefault)
        e.preventDefault();
    return false;
}
var isIosDevice = util_1.isBrowser &&
    window.navigator &&
    window.navigator.platform &&
    /iP(ad|hone|od)/.test(window.navigator.platform);
var bodies = new Map();
var doc = typeof document === 'object' ? document : undefined;
var documentListenerAdded = false;
exports["default"] = !doc
    ? function useLockBodyMock(_locked, _elementRef) {
        if (_locked === void 0) { _locked = true; }
    }
    : function useLockBody(locked, elementRef) {
        if (locked === void 0) { locked = true; }
        var bodyRef = react_1.useRef(doc.body);
        elementRef = elementRef || bodyRef;
        var lock = function (body) {
            var bodyInfo = bodies.get(body);
            if (!bodyInfo) {
                bodies.set(body, { counter: 1, initialOverflow: body.style.overflow });
                if (isIosDevice) {
                    if (!documentListenerAdded) {
                        util_1.on(document, 'touchmove', preventDefault, { passive: false });
                        documentListenerAdded = true;
                    }
                }
                else {
                    body.style.overflow = 'hidden';
                }
            }
            else {
                bodies.set(body, {
                    counter: bodyInfo.counter + 1,
                    initialOverflow: bodyInfo.initialOverflow,
                });
            }
        };
        var unlock = function (body) {
            var bodyInfo = bodies.get(body);
            if (bodyInfo) {
                if (bodyInfo.counter === 1) {
                    bodies.delete(body);
                    if (isIosDevice) {
                        body.ontouchmove = null;
                        if (documentListenerAdded) {
                            util_1.off(document, 'touchmove', preventDefault);
                            documentListenerAdded = false;
                        }
                    }
                    else {
                        body.style.overflow = bodyInfo.initialOverflow;
                    }
                }
                else {
                    bodies.set(body, {
                        counter: bodyInfo.counter - 1,
                        initialOverflow: bodyInfo.initialOverflow,
                    });
                }
            }
        };
        react_1.useEffect(function () {
            var body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            if (locked) {
                lock(body);
            }
            else {
                unlock(body);
            }
        }, [locked, elementRef.current]);
        // clean up, on un-mount
        react_1.useEffect(function () {
            var body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            return function () {
                unlock(body);
            };
        }, []);
    };


/***/ }),

/***/ 47465:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(41447));
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(3849));
var useLogger = function (componentName) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    useEffectOnce_1.default(function () {
        console.log.apply(console, tslib_1.__spreadArrays([componentName + " mounted"], rest));
        return function () { return console.log(componentName + " unmounted"); };
    });
    useUpdateEffect_1.default(function () {
        console.log.apply(console, tslib_1.__spreadArrays([componentName + " updated"], rest));
    });
};
exports["default"] = useLogger;


/***/ }),

/***/ 48623:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var isTouchEvent = function (ev) {
    return 'touches' in ev;
};
var preventDefault = function (ev) {
    if (!isTouchEvent(ev))
        return;
    if (ev.touches.length < 2 && ev.preventDefault) {
        ev.preventDefault();
    }
};
var useLongPress = function (callback, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isPreventDefault, isPreventDefault = _c === void 0 ? true : _c, _d = _b.delay, delay = _d === void 0 ? 300 : _d;
    var timeout = react_1.useRef();
    var target = react_1.useRef();
    var start = react_1.useCallback(function (event) {
        // prevent ghost click on mobile devices
        if (isPreventDefault && event.target) {
            util_1.on(event.target, 'touchend', preventDefault, { passive: false });
            target.current = event.target;
        }
        timeout.current = setTimeout(function () { return callback(event); }, delay);
    }, [callback, delay, isPreventDefault]);
    var clear = react_1.useCallback(function () {
        // clearTimeout and removeEventListener
        timeout.current && clearTimeout(timeout.current);
        if (isPreventDefault && target.current) {
            util_1.off(target.current, 'touchend', preventDefault);
        }
    }, [isPreventDefault]);
    return {
        onMouseDown: function (e) { return start(e); },
        onTouchStart: function (e) { return start(e); },
        onMouseUp: clear,
        onMouseLeave: clear,
        onTouchEnd: clear,
    };
};
exports["default"] = useLongPress;


/***/ }),

/***/ 47227:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useMap = function (initialMap) {
    if (initialMap === void 0) { initialMap = {}; }
    var _a = react_1.useState(initialMap), map = _a[0], set = _a[1];
    var stableActions = react_1.useMemo(function () { return ({
        set: function (key, entry) {
            set(function (prevMap) {
                var _a;
                return (tslib_1.__assign(tslib_1.__assign({}, prevMap), (_a = {}, _a[key] = entry, _a)));
            });
        },
        setAll: function (newMap) {
            set(newMap);
        },
        remove: function (key) {
            set(function (prevMap) {
                var _a = prevMap, _b = key, omit = _a[_b], rest = tslib_1.__rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                return rest;
            });
        },
        reset: function () { return set(initialMap); },
    }); }, [set]);
    var utils = tslib_1.__assign({ get: react_1.useCallback(function (key) { return map[key]; }, [map]) }, stableActions);
    return [map, utils];
};
exports["default"] = useMap;


/***/ }),

/***/ 46111:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(48272));
var util_1 = __webpack_require__(18578);
var defaultState = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
};
function useMeasure() {
    var _a = react_1.useState(null), element = _a[0], ref = _a[1];
    var _b = react_1.useState(defaultState), rect = _b[0], setRect = _b[1];
    var observer = react_1.useMemo(function () {
        return new window.ResizeObserver(function (entries) {
            if (entries[0]) {
                var _a = entries[0].contentRect, x = _a.x, y = _a.y, width = _a.width, height = _a.height, top_1 = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
                setRect({ x: x, y: y, width: width, height: height, top: top_1, left: left, bottom: bottom, right: right });
            }
        });
    }, []);
    useIsomorphicLayoutEffect_1.default(function () {
        if (!element)
            return;
        observer.observe(element);
        return function () {
            observer.disconnect();
        };
    }, [element]);
    return [ref, rect];
}
exports["default"] = util_1.isBrowser && typeof window.ResizeObserver !== 'undefined'
    ? useMeasure
    : (function () { return [util_1.noop, defaultState]; });


/***/ }),

/***/ 39410:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var getInitialState = function (query, defaultState) {
    // Prevent a React hydration mismatch when a default value is provided by not defaulting to window.matchMedia(query).matches.
    if (defaultState !== undefined) {
        return defaultState;
    }
    if (util_1.isBrowser) {
        return window.matchMedia(query).matches;
    }
    // A default value has not been provided, and you are rendering on the server, warn of a possible hydration mismatch when defaulting to false.
    if (false) {}
    return false;
};
var useMedia = function (query, defaultState) {
    var _a = react_1.useState(getInitialState(query, defaultState)), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var mql = window.matchMedia(query);
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setState(!!mql.matches);
        };
        mql.addListener(onChange);
        setState(mql.matches);
        return function () {
            mounted = false;
            mql.removeListener(onChange);
        };
    }, [query]);
    return state;
};
exports["default"] = useMedia;


/***/ }),

/***/ 96655:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var useMediaDevices = function () {
    var _a = react_1.useState({}), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var onChange = function () {
            navigator.mediaDevices
                .enumerateDevices()
                .then(function (devices) {
                if (mounted) {
                    setState({
                        devices: devices.map(function (_a) {
                            var deviceId = _a.deviceId, groupId = _a.groupId, kind = _a.kind, label = _a.label;
                            return ({
                                deviceId: deviceId,
                                groupId: groupId,
                                kind: kind,
                                label: label,
                            });
                        }),
                    });
                }
            })
                .catch(util_1.noop);
        };
        util_1.on(navigator.mediaDevices, 'devicechange', onChange);
        onChange();
        return function () {
            mounted = false;
            util_1.off(navigator.mediaDevices, 'devicechange', onChange);
        };
    }, []);
    return state;
};
var useMediaDevicesMock = function () { return ({}); };
exports["default"] = util_1.isNavigator && !!navigator.mediaDevices ? useMediaDevices : useMediaDevicesMock;


/***/ }),

/***/ 83078:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMediatedState = void 0;
var react_1 = __webpack_require__(18038);
function useMediatedState(mediator, initialState) {
    var mediatorFn = react_1.useRef(mediator);
    var _a = react_1.useState(initialState), state = _a[0], setMediatedState = _a[1];
    var setState = react_1.useCallback(function (newState) {
        if (mediatorFn.current.length === 2) {
            mediatorFn.current(newState, setMediatedState);
        }
        else {
            setMediatedState(mediatorFn.current(newState));
        }
    }, [state]);
    return [state, setState];
}
exports.useMediatedState = useMediatedState;


/***/ }),

/***/ 15319:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var useMethods = function (createMethods, initialState) {
    var reducer = react_1.useMemo(function () { return function (reducerState, action) {
        var _a;
        return (_a = createMethods(reducerState))[action.type].apply(_a, action.payload);
    }; }, [createMethods]);
    var _a = react_1.useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    var wrappedMethods = react_1.useMemo(function () {
        var actionTypes = Object.keys(createMethods(initialState));
        return actionTypes.reduce(function (acc, type) {
            acc[type] = function () {
                var payload = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    payload[_i] = arguments[_i];
                }
                return dispatch({ type: type, payload: payload });
            };
            return acc;
        }, {});
    }, [createMethods, initialState]);
    return [state, wrappedMethods];
};
exports["default"] = useMethods;


/***/ }),

/***/ 99584:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var defaultState = {
    acceleration: {
        x: null,
        y: null,
        z: null,
    },
    accelerationIncludingGravity: {
        x: null,
        y: null,
        z: null,
    },
    rotationRate: {
        alpha: null,
        beta: null,
        gamma: null,
    },
    interval: 16,
};
var useMotion = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handler = function (event) {
            var acceleration = event.acceleration, accelerationIncludingGravity = event.accelerationIncludingGravity, rotationRate = event.rotationRate, interval = event.interval;
            setState({
                acceleration: {
                    x: acceleration.x,
                    y: acceleration.y,
                    z: acceleration.z,
                },
                accelerationIncludingGravity: {
                    x: accelerationIncludingGravity.x,
                    y: accelerationIncludingGravity.y,
                    z: accelerationIncludingGravity.z,
                },
                rotationRate: {
                    alpha: rotationRate.alpha,
                    beta: rotationRate.beta,
                    gamma: rotationRate.gamma,
                },
                interval: interval,
            });
        };
        util_1.on(window, 'devicemotion', handler);
        return function () {
            util_1.off(window, 'devicemotion', handler);
        };
    }, []);
    return state;
};
exports["default"] = useMotion;


/***/ }),

/***/ 41735:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(41447));
var useMount = function (fn) {
    useEffectOnce_1.default(function () {
        fn();
    });
};
exports["default"] = useMount;


/***/ }),

/***/ 70707:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
function useMountedState() {
    var mountedRef = react_1.useRef(false);
    var get = react_1.useCallback(function () { return mountedRef.current; }, []);
    react_1.useEffect(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    }, []);
    return get;
}
exports["default"] = useMountedState;


/***/ }),

/***/ 5822:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(11515));
var util_1 = __webpack_require__(18578);
var useMouse = function (ref) {
    if (false) {}
    var _a = useRafState_1.default({
        docX: 0,
        docY: 0,
        posX: 0,
        posY: 0,
        elX: 0,
        elY: 0,
        elH: 0,
        elW: 0,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var moveHandler = function (event) {
            if (ref && ref.current) {
                var _a = ref.current.getBoundingClientRect(), left = _a.left, top_1 = _a.top, elW = _a.width, elH = _a.height;
                var posX = left + window.pageXOffset;
                var posY = top_1 + window.pageYOffset;
                var elX = event.pageX - posX;
                var elY = event.pageY - posY;
                setState({
                    docX: event.pageX,
                    docY: event.pageY,
                    posX: posX,
                    posY: posY,
                    elX: elX,
                    elY: elY,
                    elH: elH,
                    elW: elW,
                });
            }
        };
        util_1.on(document, 'mousemove', moveHandler);
        return function () {
            util_1.off(document, 'mousemove', moveHandler);
        };
    }, [ref]);
    return state;
};
exports["default"] = useMouse;


/***/ }),

/***/ 77500:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var useHoverDirty_1 = tslib_1.__importDefault(__webpack_require__(42626));
var useMouse_1 = tslib_1.__importDefault(__webpack_require__(5822));
var nullRef = { current: null };
var useMouseHovered = function (ref, options) {
    if (options === void 0) { options = {}; }
    var whenHovered = !!options.whenHovered;
    var bound = !!options.bound;
    var isHovered = useHoverDirty_1.default(ref, whenHovered);
    var state = useMouse_1.default(whenHovered && !isHovered ? nullRef : ref);
    if (bound) {
        state.elX = Math.max(0, Math.min(state.elX, state.elW));
        state.elY = Math.max(0, Math.min(state.elY, state.elH));
    }
    return state;
};
exports["default"] = useMouseHovered;


/***/ }),

/***/ 13634:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
exports["default"] = (function () {
    var _a = react_1.useState(0), mouseWheelScrolled = _a[0], setMouseWheelScrolled = _a[1];
    react_1.useEffect(function () {
        var updateScroll = function (e) {
            setMouseWheelScrolled(e.deltaY + mouseWheelScrolled);
        };
        util_1.on(window, 'wheel', updateScroll, false);
        return function () { return util_1.off(window, 'wheel', updateScroll); };
    });
    return mouseWheelScrolled;
});


/***/ }),

/***/ 6662:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMultiStateValidator = void 0;
var react_1 = __webpack_require__(18038);
function useMultiStateValidator(states, validator, initialValidity) {
    if (initialValidity === void 0) { initialValidity = [undefined]; }
    if (typeof states !== 'object') {
        throw new Error('states expected to be an object or array, got ' + typeof states);
    }
    var validatorInner = react_1.useRef(validator);
    var statesInner = react_1.useRef(states);
    validatorInner.current = validator;
    statesInner.current = states;
    var _a = react_1.useState(initialValidity), validity = _a[0], setValidity = _a[1];
    var validate = react_1.useCallback(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(statesInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(statesInner.current));
        }
    }, [setValidity]);
    react_1.useEffect(function () {
        validate();
    }, Object.values(states));
    return [validity, validate];
}
exports.useMultiStateValidator = useMultiStateValidator;


/***/ }),

/***/ 66091:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var nav = util_1.isNavigator ? navigator : undefined;
var conn = nav && (nav.connection || nav.mozConnection || nav.webkitConnection);
function getConnectionState(previousState) {
    var online = nav === null || nav === void 0 ? void 0 : nav.onLine;
    var previousOnline = previousState === null || previousState === void 0 ? void 0 : previousState.online;
    return {
        online: online,
        previous: previousOnline,
        since: online !== previousOnline ? new Date() : previousState === null || previousState === void 0 ? void 0 : previousState.since,
        downlink: conn === null || conn === void 0 ? void 0 : conn.downlink,
        downlinkMax: conn === null || conn === void 0 ? void 0 : conn.downlinkMax,
        effectiveType: conn === null || conn === void 0 ? void 0 : conn.effectiveType,
        rtt: conn === null || conn === void 0 ? void 0 : conn.rtt,
        saveData: conn === null || conn === void 0 ? void 0 : conn.saveData,
        type: conn === null || conn === void 0 ? void 0 : conn.type,
    };
}
function useNetworkState(initialState) {
    var _a = react_1.useState(initialState !== null && initialState !== void 0 ? initialState : getConnectionState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handleStateChange = function () {
            setState(getConnectionState);
        };
        util_1.on(window, 'online', handleStateChange, { passive: true });
        util_1.on(window, 'offline', handleStateChange, { passive: true });
        if (conn) {
            util_1.on(conn, 'change', handleStateChange, { passive: true });
        }
        return function () {
            util_1.off(window, 'online', handleStateChange);
            util_1.off(window, 'offline', handleStateChange);
            if (conn) {
                util_1.off(conn, 'change', handleStateChange);
            }
        };
    }, []);
    return state;
}
exports["default"] = useNetworkState;


/***/ }),

/***/ 73790:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var useCounter_1 = tslib_1.__importDefault(__webpack_require__(45972));
exports["default"] = useCounter_1.default;


/***/ }),

/***/ 13694:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(48272));
function useObservable(observable$, initialValue) {
    var _a = react_1.useState(initialValue), value = _a[0], update = _a[1];
    useIsomorphicLayoutEffect_1.default(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
exports["default"] = useObservable;


/***/ }),

/***/ 35236:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var defaultState = {
    angle: 0,
    type: 'landscape-primary',
};
var useOrientation = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var screen = window.screen;
        var mounted = true;
        var onChange = function () {
            if (mounted) {
                var orientation_1 = screen.orientation;
                if (orientation_1) {
                    var angle = orientation_1.angle, type = orientation_1.type;
                    setState({ angle: angle, type: type });
                }
                else if (window.orientation !== undefined) {
                    setState({
                        angle: typeof window.orientation === 'number' ? window.orientation : 0,
                        type: '',
                    });
                }
                else {
                    setState(initialState);
                }
            }
        };
        util_1.on(window, 'orientationchange', onChange);
        onChange();
        return function () {
            mounted = false;
            util_1.off(window, 'orientationchange', onChange);
        };
    }, []);
    return state;
};
exports["default"] = useOrientation;


/***/ }),

/***/ 47555:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var usePageLeave = function (onPageLeave, args) {
    if (args === void 0) { args = []; }
    react_1.useEffect(function () {
        if (!onPageLeave) {
            return;
        }
        var handler = function (event) {
            event = event ? event : window.event;
            var from = event.relatedTarget || event.toElement;
            if (!from || from.nodeName === 'HTML') {
                onPageLeave();
            }
        };
        util_1.on(document, 'mouseout', handler);
        return function () {
            util_1.off(document, 'mouseout', handler);
        };
    }, args);
};
exports["default"] = usePageLeave;


/***/ }),

/***/ 64813:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
// const usePermission = <T extends PermissionDescriptor>(permissionDesc: T): IState => {
var usePermission = function (permissionDesc) {
    var _a = react_1.useState(''), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var permissionStatus = null;
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setState(function () { var _a; return (_a = permissionStatus === null || permissionStatus === void 0 ? void 0 : permissionStatus.state) !== null && _a !== void 0 ? _a : ''; });
        };
        navigator.permissions
            .query(permissionDesc)
            .then(function (status) {
            permissionStatus = status;
            util_1.on(permissionStatus, 'change', onChange);
            onChange();
        })
            .catch(util_1.noop);
        return function () {
            permissionStatus && util_1.off(permissionStatus, 'change', onChange);
            mounted = false;
            permissionStatus = null;
        };
    }, [permissionDesc]);
    return state;
};
exports["default"] = usePermission;


/***/ }),

/***/ 22771:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZoomState = void 0;
var react_1 = __webpack_require__(18038);
var ZoomState;
(function (ZoomState) {
    ZoomState["ZOOMING_IN"] = "ZOOMING_IN";
    ZoomState["ZOOMING_OUT"] = "ZOOMING_OUT";
})(ZoomState = exports.ZoomState || (exports.ZoomState = {}));
var usePinchZoom = function (ref) {
    var cacheRef = react_1.useMemo(function () { return ({
        evCache: [],
        prevDiff: -1,
    }); }, [ref.current]);
    var _a = react_1.useState(), zoomingState = _a[0], setZoomingState = _a[1];
    var pointermove_handler = function (ev) {
        // This function implements a 2-pointer horizontal pinch/zoom gesture.
        //
        // If the distance between the two pointers has increased (zoom in),
        // the target element's background is changed to 'pink' and if the
        // distance is decreasing (zoom out), the color is changed to 'lightblue'.
        //
        // This function sets the target element's border to 'dashed' to visually
        // indicate the pointer's target received a move event.
        // Find this event in the cache and update its record with this event
        for (var i = 0; i < cacheRef.evCache.length; i++) {
            if (ev.pointerId == cacheRef.evCache[i].pointerId) {
                cacheRef.evCache[i] = ev;
                break;
            }
        }
        // If two pointers are down, check for pinch gestures
        if (cacheRef.evCache.length == 2) {
            // console.log(prevDiff)
            // Calculate the distance between the two pointers
            var curDiff = Math.abs(cacheRef.evCache[0].clientX - cacheRef.evCache[1].clientX);
            if (cacheRef.prevDiff > 0) {
                if (curDiff > cacheRef.prevDiff) {
                    // The distance between the two pointers has increased
                    setZoomingState([ZoomState.ZOOMING_IN, curDiff]);
                }
                if (curDiff < cacheRef.prevDiff) {
                    // The distance between the two pointers has decreased
                    setZoomingState([ZoomState.ZOOMING_OUT, curDiff]);
                }
            }
            // Cache the distance for the next move event
            cacheRef.prevDiff = curDiff;
        }
    };
    var pointerdown_handler = function (ev) {
        // The pointerdown event signals the start of a touch interaction.
        // This event is cached to support 2-finger gestures
        cacheRef.evCache.push(ev);
        // console.log('pointerDown', ev);
    };
    var pointerup_handler = function (ev) {
        // Remove this pointer from the cache and reset the target's
        // background and border
        remove_event(ev);
        // If the number of pointers down is less than two then reset diff tracker
        if (cacheRef.evCache.length < 2) {
            cacheRef.prevDiff = -1;
        }
    };
    var remove_event = function (ev) {
        // Remove this event from the target's cache
        for (var i = 0; i < cacheRef.evCache.length; i++) {
            if (cacheRef.evCache[i].pointerId == ev.pointerId) {
                cacheRef.evCache.splice(i, 1);
                break;
            }
        }
    };
    react_1.useEffect(function () {
        if (ref === null || ref === void 0 ? void 0 : ref.current) {
            ref.current.onpointerdown = pointerdown_handler;
            ref.current.onpointermove = pointermove_handler;
            ref.current.onpointerup = pointerup_handler;
            ref.current.onpointercancel = pointerup_handler;
            ref.current.onpointerout = pointerup_handler;
            ref.current.onpointerleave = pointerup_handler;
        }
    }, [ref === null || ref === void 0 ? void 0 : ref.current]);
    return zoomingState
        ? { zoomingState: zoomingState[0], pinchState: zoomingState[1] }
        : { zoomingState: null, pinchState: 0 };
};
exports["default"] = usePinchZoom;


/***/ }),

/***/ 98849:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
function usePrevious(state) {
    var ref = react_1.useRef();
    react_1.useEffect(function () {
        ref.current = state;
    });
    return ref.current;
}
exports["default"] = usePrevious;


/***/ }),

/***/ 10161:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var useFirstMountState_1 = __webpack_require__(40604);
var strictEquals = function (prev, next) { return prev === next; };
function usePreviousDistinct(value, compare) {
    if (compare === void 0) { compare = strictEquals; }
    var prevRef = react_1.useRef();
    var curRef = react_1.useRef(value);
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    if (!isFirstMount && !compare(curRef.current, value)) {
        prevRef.current = curRef.current;
        curRef.current = value;
    }
    return prevRef.current;
}
exports["default"] = usePreviousDistinct;


/***/ }),

/***/ 51090:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(70707));
var usePromise = function () {
    var isMounted = useMountedState_1.default();
    return react_1.useCallback(function (promise) {
        return new Promise(function (resolve, reject) {
            var onValue = function (value) {
                isMounted() && resolve(value);
            };
            var onError = function (error) {
                isMounted() && reject(error);
            };
            promise.then(onValue, onError);
        });
    }, []);
};
exports["default"] = usePromise;


/***/ }),

/***/ 73990:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useQueue = function (initialValue) {
    if (initialValue === void 0) { initialValue = []; }
    var _a = react_1.useState(initialValue), state = _a[0], set = _a[1];
    return {
        add: function (value) {
            set(function (queue) { return tslib_1.__spreadArrays(queue, [value]); });
        },
        remove: function () {
            var result;
            set(function (_a) {
                var first = _a[0], rest = _a.slice(1);
                result = first;
                return rest;
            });
            return result;
        },
        get first() {
            return state[0];
        },
        get last() {
            return state[state.length - 1];
        },
        get size() {
            return state.length;
        },
    };
};
exports["default"] = useQueue;


/***/ }),

/***/ 89689:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(48272));
var useRaf = function (ms, delay) {
    if (ms === void 0) { ms = 1e12; }
    if (delay === void 0) { delay = 0; }
    var _a = react_1.useState(0), elapsed = _a[0], set = _a[1];
    useIsomorphicLayoutEffect_1.default(function () {
        var raf;
        var timerStop;
        var start;
        var onFrame = function () {
            var time = Math.min(1, (Date.now() - start) / ms);
            set(time);
            loop();
        };
        var loop = function () {
            raf = requestAnimationFrame(onFrame);
        };
        var onStart = function () {
            timerStop = setTimeout(function () {
                cancelAnimationFrame(raf);
                set(1);
            }, ms);
            start = Date.now();
            loop();
        };
        var timerDelay = setTimeout(onStart, delay);
        return function () {
            clearTimeout(timerStop);
            clearTimeout(timerDelay);
            cancelAnimationFrame(raf);
        };
    }, [ms, delay]);
    return elapsed;
};
exports["default"] = useRaf;


/***/ }),

/***/ 31614:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
function useRafLoop(callback, initiallyActive) {
    if (initiallyActive === void 0) { initiallyActive = true; }
    var raf = react_1.useRef(null);
    var rafActivity = react_1.useRef(false);
    var rafCallback = react_1.useRef(callback);
    rafCallback.current = callback;
    var step = react_1.useCallback(function (time) {
        if (rafActivity.current) {
            rafCallback.current(time);
            raf.current = requestAnimationFrame(step);
        }
    }, []);
    var result = react_1.useMemo(function () {
        return [
            function () {
                // stop
                if (rafActivity.current) {
                    rafActivity.current = false;
                    raf.current && cancelAnimationFrame(raf.current);
                }
            },
            function () {
                // start
                if (!rafActivity.current) {
                    rafActivity.current = true;
                    raf.current = requestAnimationFrame(step);
                }
            },
            function () { return rafActivity.current; },
        ];
    }, []);
    react_1.useEffect(function () {
        if (initiallyActive) {
            result[1]();
        }
        return result[0];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return result;
}
exports["default"] = useRafLoop;


/***/ }),

/***/ 11515:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useUnmount_1 = tslib_1.__importDefault(__webpack_require__(5016));
var useRafState = function (initialState) {
    var frame = react_1.useRef(0);
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    var setRafState = react_1.useCallback(function (value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
            setState(value);
        });
    }, []);
    useUnmount_1.default(function () {
        cancelAnimationFrame(frame.current);
    });
    return [state, setRafState];
};
exports["default"] = useRafState;


/***/ }),

/***/ 6057:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useRendersCount = void 0;
var react_1 = __webpack_require__(18038);
function useRendersCount() {
    return ++react_1.useRef(0).current;
}
exports.useRendersCount = useRendersCount;


/***/ }),

/***/ 16229:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScratchSensor = void 0;
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var react_universal_interface_1 = __webpack_require__(80801);
var useLatest_1 = tslib_1.__importDefault(__webpack_require__(19992));
var util_1 = __webpack_require__(18578);
var useScratch = function (params) {
    if (params === void 0) { params = {}; }
    var disabled = params.disabled;
    var paramsRef = useLatest_1.default(params);
    var _a = react_1.useState({ isScratching: false }), state = _a[0], setState = _a[1];
    var refState = react_1.useRef(state);
    var refScratching = react_1.useRef(false);
    var refAnimationFrame = react_1.useRef(null);
    var _b = react_1.useState(null), el = _b[0], setEl = _b[1];
    react_1.useEffect(function () {
        if (disabled)
            return;
        if (!el)
            return;
        var onMoveEvent = function (docX, docY) {
            cancelAnimationFrame(refAnimationFrame.current);
            refAnimationFrame.current = requestAnimationFrame(function () {
                var _a = el.getBoundingClientRect(), left = _a.left, top = _a.top;
                var elX = left + window.scrollX;
                var elY = top + window.scrollY;
                var x = docX - elX;
                var y = docY - elY;
                setState(function (oldState) {
                    var newState = tslib_1.__assign(tslib_1.__assign({}, oldState), { dx: x - (oldState.x || 0), dy: y - (oldState.y || 0), end: Date.now(), isScratching: true });
                    refState.current = newState;
                    (paramsRef.current.onScratch || util_1.noop)(newState);
                    return newState;
                });
            });
        };
        var onMouseMove = function (event) {
            onMoveEvent(event.pageX, event.pageY);
        };
        var onTouchMove = function (event) {
            onMoveEvent(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
        };
        var onMouseUp;
        var onTouchEnd;
        var stopScratching = function () {
            if (!refScratching.current)
                return;
            refScratching.current = false;
            refState.current = tslib_1.__assign(tslib_1.__assign({}, refState.current), { isScratching: false });
            (paramsRef.current.onScratchEnd || util_1.noop)(refState.current);
            setState({ isScratching: false });
            util_1.off(window, 'mousemove', onMouseMove);
            util_1.off(window, 'touchmove', onTouchMove);
            util_1.off(window, 'mouseup', onMouseUp);
            util_1.off(window, 'touchend', onTouchEnd);
        };
        onMouseUp = stopScratching;
        onTouchEnd = stopScratching;
        var startScratching = function (docX, docY) {
            if (!refScratching.current)
                return;
            var _a = el.getBoundingClientRect(), left = _a.left, top = _a.top;
            var elX = left + window.scrollX;
            var elY = top + window.scrollY;
            var x = docX - elX;
            var y = docY - elY;
            var time = Date.now();
            var newState = {
                isScratching: true,
                start: time,
                end: time,
                docX: docX,
                docY: docY,
                x: x,
                y: y,
                dx: 0,
                dy: 0,
                elH: el.offsetHeight,
                elW: el.offsetWidth,
                elX: elX,
                elY: elY,
            };
            refState.current = newState;
            (paramsRef.current.onScratchStart || util_1.noop)(newState);
            setState(newState);
            util_1.on(window, 'mousemove', onMouseMove);
            util_1.on(window, 'touchmove', onTouchMove);
            util_1.on(window, 'mouseup', onMouseUp);
            util_1.on(window, 'touchend', onTouchEnd);
        };
        var onMouseDown = function (event) {
            refScratching.current = true;
            startScratching(event.pageX, event.pageY);
        };
        var onTouchStart = function (event) {
            refScratching.current = true;
            startScratching(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
        };
        util_1.on(el, 'mousedown', onMouseDown);
        util_1.on(el, 'touchstart', onTouchStart);
        return function () {
            util_1.off(el, 'mousedown', onMouseDown);
            util_1.off(el, 'touchstart', onTouchStart);
            util_1.off(window, 'mousemove', onMouseMove);
            util_1.off(window, 'touchmove', onTouchMove);
            util_1.off(window, 'mouseup', onMouseUp);
            util_1.off(window, 'touchend', onTouchEnd);
            if (refAnimationFrame.current)
                cancelAnimationFrame(refAnimationFrame.current);
            refAnimationFrame.current = null;
            refScratching.current = false;
            refState.current = { isScratching: false };
            setState(refState.current);
        };
    }, [el, disabled, paramsRef]);
    return [setEl, state];
};
var ScratchSensor = function (props) {
    var children = props.children, params = tslib_1.__rest(props, ["children"]);
    var _a = useScratch(params), ref = _a[0], state = _a[1];
    var element = react_universal_interface_1.render(props, state);
    return react_1.cloneElement(element, tslib_1.__assign(tslib_1.__assign({}, element.props), { ref: function (el) {
            if (element.props.ref) {
                if (typeof element.props.ref === 'object')
                    element.props.ref.current = el;
                if (typeof element.props.ref === 'function')
                    element.props.ref(el);
            }
            ref(el);
        } }));
};
exports.ScratchSensor = ScratchSensor;
exports["default"] = useScratch;


/***/ }),

/***/ 79086:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(11515));
var util_1 = __webpack_require__(18578);
var useScroll = function (ref) {
    if (false) {}
    var _a = useRafState_1.default({
        x: 0,
        y: 0,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handler = function () {
            if (ref.current) {
                setState({
                    x: ref.current.scrollLeft,
                    y: ref.current.scrollTop,
                });
            }
        };
        if (ref.current) {
            util_1.on(ref.current, 'scroll', handler, {
                capture: false,
                passive: true,
            });
        }
        return function () {
            if (ref.current) {
                util_1.off(ref.current, 'scroll', handler);
            }
        };
    }, [ref]);
    return state;
};
exports["default"] = useScroll;


/***/ }),

/***/ 17767:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useScrollbarWidth = void 0;
var scrollbar_width_1 = __webpack_require__(23800);
var react_1 = __webpack_require__(18038);
function useScrollbarWidth() {
    var _a = react_1.useState(scrollbar_width_1.scrollbarWidth()), sbw = _a[0], setSbw = _a[1];
    // this needed to ensure the scrollbar width in case hook called before the DOM is ready
    react_1.useEffect(function () {
        if (typeof sbw !== 'undefined') {
            return;
        }
        var raf = requestAnimationFrame(function () {
            setSbw(scrollbar_width_1.scrollbarWidth());
        });
        return function () { return cancelAnimationFrame(raf); };
    }, []);
    return sbw;
}
exports.useScrollbarWidth = useScrollbarWidth;


/***/ }),

/***/ 96649:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var useScrolling = function (ref) {
    var _a = react_1.useState(false), scrolling = _a[0], setScrolling = _a[1];
    react_1.useEffect(function () {
        if (ref.current) {
            var scrollingTimeout_1;
            var handleScrollEnd_1 = function () {
                setScrolling(false);
            };
            var handleScroll_1 = function () {
                setScrolling(true);
                clearTimeout(scrollingTimeout_1);
                scrollingTimeout_1 = setTimeout(function () { return handleScrollEnd_1(); }, 150);
            };
            util_1.on(ref.current, 'scroll', handleScroll_1, false);
            return function () {
                if (ref.current) {
                    util_1.off(ref.current, 'scroll', handleScroll_1, false);
                }
            };
        }
        return function () { };
    }, [ref]);
    return scrolling;
};
exports["default"] = useScrolling;


/***/ }),

/***/ 56884:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var getValue = function (search, param) { return new URLSearchParams(search).get(param); };
var useSearchParam = function (param) {
    var location = window.location;
    var _a = react_1.useState(function () { return getValue(location.search, param); }), value = _a[0], setValue = _a[1];
    react_1.useEffect(function () {
        var onChange = function () {
            setValue(getValue(location.search, param));
        };
        util_1.on(window, 'popstate', onChange);
        util_1.on(window, 'pushstate', onChange);
        util_1.on(window, 'replacestate', onChange);
        return function () {
            util_1.off(window, 'popstate', onChange);
            util_1.off(window, 'pushstate', onChange);
            util_1.off(window, 'replacestate', onChange);
        };
    }, []);
    return value;
};
var useSearchParamServer = function () { return null; };
exports["default"] = util_1.isBrowser ? useSearchParam : useSearchParamServer;


/***/ }),

/***/ 35566:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var useSessionStorage = function (key, initialValue, raw) {
    if (!util_1.isBrowser) {
        return [initialValue, function () { }];
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _a = react_1.useState(function () {
        try {
            var sessionStorageValue = sessionStorage.getItem(key);
            if (typeof sessionStorageValue !== 'string') {
                sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
                return initialValue;
            }
            else {
                return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react_1.useEffect(function () {
        try {
            var serializedState = raw ? String(state) : JSON.stringify(state);
            sessionStorage.setItem(key, serializedState);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. Also JSON.stringify can throw.
        }
    });
    return [state, setState];
};
exports["default"] = useSessionStorage;


/***/ }),

/***/ 20722:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useSet = function (initialSet) {
    if (initialSet === void 0) { initialSet = new Set(); }
    var _a = react_1.useState(initialSet), set = _a[0], setSet = _a[1];
    var stableActions = react_1.useMemo(function () {
        var add = function (item) { return setSet(function (prevSet) { return new Set(tslib_1.__spreadArrays(Array.from(prevSet), [item])); }); };
        var remove = function (item) {
            return setSet(function (prevSet) { return new Set(Array.from(prevSet).filter(function (i) { return i !== item; })); });
        };
        var toggle = function (item) {
            return setSet(function (prevSet) {
                return prevSet.has(item)
                    ? new Set(Array.from(prevSet).filter(function (i) { return i !== item; }))
                    : new Set(tslib_1.__spreadArrays(Array.from(prevSet), [item]));
            });
        };
        return { add: add, remove: remove, toggle: toggle, reset: function () { return setSet(initialSet); } };
    }, [setSet]);
    var utils = tslib_1.__assign({ has: react_1.useCallback(function (item) { return set.has(item); }, [set]) }, stableActions);
    return [set, utils];
};
exports["default"] = useSet;


/***/ }),

/***/ 59933:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = react_1.useState(initialState), state = _a[0], set = _a[1];
    var setState = react_1.useCallback(function (patch) {
        set(function (prevState) {
            return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch);
        });
    }, []);
    return [state, setState];
};
exports["default"] = useSetState;


/***/ }),

/***/ 24540:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var fast_shallow_equal_1 = __webpack_require__(34703);
var useCustomCompareEffect_1 = tslib_1.__importDefault(__webpack_require__(29908));
var isPrimitive = function (val) { return val !== Object(val); };
var shallowEqualDepsList = function (prevDeps, nextDeps) {
    return prevDeps.every(function (dep, index) { return fast_shallow_equal_1.equal(dep, nextDeps[index]); });
};
var useShallowCompareEffect = function (effect, deps) {
    if (false) {}
    useCustomCompareEffect_1.default(effect, deps, shallowEqualDepsList);
};
exports["default"] = useShallowCompareEffect;


/***/ }),

/***/ 34351:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var React = tslib_1.__importStar(__webpack_require__(18038));
var util_1 = __webpack_require__(18578);
var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;
var DRAF = function (callback) { return setTimeout(callback, 35); };
var useSize = function (element, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.width, width = _c === void 0 ? Infinity : _c, _d = _b.height, height = _d === void 0 ? Infinity : _d;
    if (!util_1.isBrowser) {
        return [
            typeof element === 'function' ? element({ width: width, height: height }) : element,
            { width: width, height: height },
        ];
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _e = useState({ width: width, height: height }), state = _e[0], setState = _e[1];
    if (typeof element === 'function') {
        element = element(state);
    }
    var style = element.props.style || {};
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var ref = useRef(null);
    var window = null;
    var setSize = function () {
        var iframe = ref.current;
        var size = iframe
            ? {
                width: iframe.offsetWidth,
                height: iframe.offsetHeight,
            }
            : { width: width, height: height };
        setState(size);
    };
    var onWindow = function (windowToListenOn) {
        util_1.on(windowToListenOn, 'resize', setSize);
        DRAF(setSize);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(function () {
        var iframe = ref.current;
        if (!iframe) {
            // iframe will be undefined if component is already unmounted
            return;
        }
        if (iframe.contentWindow) {
            window = iframe.contentWindow;
            onWindow(window);
        }
        else {
            var onLoad_1 = function () {
                util_1.on(iframe, 'load', onLoad_1);
                window = iframe.contentWindow;
                onWindow(window);
            };
            util_1.off(iframe, 'load', onLoad_1);
        }
        return function () {
            if (window && window.removeEventListener) {
                util_1.off(window, 'resize', setSize);
            }
        };
    }, []);
    style.position = 'relative';
    var sized = React.cloneElement.apply(React, tslib_1.__spreadArrays([element, { style: style }], tslib_1.__spreadArrays([
        React.createElement('iframe', {
            ref: ref,
            style: {
                background: 'transparent',
                border: 'none',
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: -1,
            },
        })
    ], React.Children.toArray(element.props.children))));
    return [sized, state];
};
exports["default"] = useSize;


/***/ }),

/***/ 67492:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(70707));
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(59933));
var useSlider = function (ref, options) {
    if (options === void 0) { options = {}; }
    var isMounted = useMountedState_1.default();
    var isSliding = react_1.useRef(false);
    var valueRef = react_1.useRef(0);
    var frame = react_1.useRef(0);
    var _a = useSetState_1.default({
        isSliding: false,
        value: 0,
    }), state = _a[0], setState = _a[1];
    valueRef.current = state.value;
    react_1.useEffect(function () {
        if (util_1.isBrowser) {
            var styles = options.styles === undefined ? true : options.styles;
            var reverse_1 = options.reverse === undefined ? false : options.reverse;
            if (ref.current && styles) {
                ref.current.style.userSelect = 'none';
            }
            var startScrubbing_1 = function () {
                if (!isSliding.current && isMounted()) {
                    (options.onScrubStart || util_1.noop)();
                    isSliding.current = true;
                    setState({ isSliding: true });
                    bindEvents_1();
                }
            };
            var stopScrubbing_1 = function () {
                if (isSliding.current && isMounted()) {
                    (options.onScrubStop || util_1.noop)(valueRef.current);
                    isSliding.current = false;
                    setState({ isSliding: false });
                    unbindEvents_1();
                }
            };
            var onMouseDown_1 = function (event) {
                startScrubbing_1();
                onMouseMove_1(event);
            };
            var onMouseMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.clientY); }
                : function (event) { return onScrub_1(event.clientX); };
            var onTouchStart_1 = function (event) {
                startScrubbing_1();
                onTouchMove_1(event);
            };
            var onTouchMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.changedTouches[0].clientY); }
                : function (event) { return onScrub_1(event.changedTouches[0].clientX); };
            var bindEvents_1 = function () {
                util_1.on(document, 'mousemove', onMouseMove_1);
                util_1.on(document, 'mouseup', stopScrubbing_1);
                util_1.on(document, 'touchmove', onTouchMove_1);
                util_1.on(document, 'touchend', stopScrubbing_1);
            };
            var unbindEvents_1 = function () {
                util_1.off(document, 'mousemove', onMouseMove_1);
                util_1.off(document, 'mouseup', stopScrubbing_1);
                util_1.off(document, 'touchmove', onTouchMove_1);
                util_1.off(document, 'touchend', stopScrubbing_1);
            };
            var onScrub_1 = function (clientXY) {
                cancelAnimationFrame(frame.current);
                frame.current = requestAnimationFrame(function () {
                    if (isMounted() && ref.current) {
                        var rect = ref.current.getBoundingClientRect();
                        var pos = options.vertical ? rect.top : rect.left;
                        var length_1 = options.vertical ? rect.height : rect.width;
                        // Prevent returning 0 when element is hidden by CSS
                        if (!length_1) {
                            return;
                        }
                        var value = (clientXY - pos) / length_1;
                        if (value > 1) {
                            value = 1;
                        }
                        else if (value < 0) {
                            value = 0;
                        }
                        if (reverse_1) {
                            value = 1 - value;
                        }
                        setState({
                            value: value,
                        });
                        (options.onScrub || util_1.noop)(value);
                    }
                });
            };
            util_1.on(ref.current, 'mousedown', onMouseDown_1);
            util_1.on(ref.current, 'touchstart', onTouchStart_1);
            return function () {
                util_1.off(ref.current, 'mousedown', onMouseDown_1);
                util_1.off(ref.current, 'touchstart', onTouchStart_1);
            };
        }
        else {
            return undefined;
        }
    }, [ref, options.vertical]);
    return state;
};
exports["default"] = useSlider;


/***/ }),

/***/ 39289:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var Status;
(function (Status) {
    Status[Status["init"] = 0] = "init";
    Status[Status["play"] = 1] = "play";
    Status[Status["pause"] = 2] = "pause";
    Status[Status["end"] = 3] = "end";
})(Status || (Status = {}));
var useSpeech = function (text, options) {
    var mounted = react_1.useRef(false);
    var _a = react_1.useState(function () {
        var _a = options.voice || {}, _b = _a.lang, lang = _b === void 0 ? 'default' : _b, _c = _a.name, name = _c === void 0 ? '' : _c;
        return {
            isPlaying: false,
            status: Status[Status.init],
            lang: options.lang || 'default',
            voiceInfo: { lang: lang, name: name },
            rate: options.rate || 1,
            pitch: options.pitch || 1,
            volume: options.volume || 1,
        };
    }), state = _a[0], setState = _a[1];
    var handlePlay = react_1.useCallback(function () {
        if (!mounted.current) {
            return;
        }
        setState(function (preState) {
            return tslib_1.__assign(tslib_1.__assign({}, preState), { isPlaying: true, status: Status[Status.play] });
        });
    }, []);
    var handlePause = react_1.useCallback(function () {
        if (!mounted.current) {
            return;
        }
        setState(function (preState) {
            return tslib_1.__assign(tslib_1.__assign({}, preState), { isPlaying: false, status: Status[Status.pause] });
        });
    }, []);
    var handleEnd = react_1.useCallback(function () {
        if (!mounted.current) {
            return;
        }
        setState(function (preState) {
            return tslib_1.__assign(tslib_1.__assign({}, preState), { isPlaying: false, status: Status[Status.end] });
        });
    }, []);
    react_1.useEffect(function () {
        mounted.current = true;
        var utterance = new SpeechSynthesisUtterance(text);
        options.lang && (utterance.lang = options.lang);
        options.voice && (utterance.voice = options.voice);
        utterance.rate = options.rate || 1;
        utterance.pitch = options.pitch || 1;
        utterance.volume = options.volume || 1;
        utterance.onstart = handlePlay;
        utterance.onpause = handlePause;
        utterance.onresume = handlePlay;
        utterance.onend = handleEnd;
        window.speechSynthesis.speak(utterance);
        return function () {
            mounted.current = false;
        };
    }, []);
    return state;
};
exports["default"] = useSpeech;


/***/ }),

/***/ 38593:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(48272));
var util_1 = __webpack_require__(18578);
var isFocusedElementEditable = function () {
    var activeElement = document.activeElement, body = document.body;
    if (!activeElement) {
        return false;
    }
    // If not element has focus, we assume it is not editable, too.
    if (activeElement === body) {
        return false;
    }
    // Assume <input> and <textarea> elements are editable.
    switch (activeElement.tagName) {
        case 'INPUT':
        case 'TEXTAREA':
            return true;
    }
    // Check if any other focused element id editable.
    return activeElement.hasAttribute('contenteditable');
};
var isTypedCharGood = function (_a) {
    var keyCode = _a.keyCode, metaKey = _a.metaKey, ctrlKey = _a.ctrlKey, altKey = _a.altKey;
    if (metaKey || ctrlKey || altKey) {
        return false;
    }
    // 0...9
    if (keyCode >= 48 && keyCode <= 57) {
        return true;
    }
    // a...z
    if (keyCode >= 65 && keyCode <= 90) {
        return true;
    }
    // All other keys.
    return false;
};
var useStartTyping = function (onStartTyping) {
    useIsomorphicLayoutEffect_1.default(function () {
        var keydown = function (event) {
            !isFocusedElementEditable() && isTypedCharGood(event) && onStartTyping(event);
        };
        util_1.on(document, 'keydown', keydown);
        return function () {
            util_1.off(document, 'keydown', keydown);
        };
    }, []);
};
exports["default"] = useStartTyping;


/***/ }),

/***/ 72595:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(70707));
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(24345));
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(3849));
function useStateList(stateSet) {
    if (stateSet === void 0) { stateSet = []; }
    var isMounted = useMountedState_1.default();
    var update = useUpdate_1.default();
    var index = react_1.useRef(0);
    // If new state list is shorter that before - switch to the last element
    useUpdateEffect_1.default(function () {
        if (stateSet.length <= index.current) {
            index.current = stateSet.length - 1;
            update();
        }
    }, [stateSet.length]);
    var actions = react_1.useMemo(function () { return ({
        next: function () { return actions.setStateAt(index.current + 1); },
        prev: function () { return actions.setStateAt(index.current - 1); },
        setStateAt: function (newIndex) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            // do nothing on empty states list
            if (!stateSet.length)
                return;
            // in case new index is equal current - do nothing
            if (newIndex === index.current)
                return;
            // it gives the ability to travel through the left and right borders.
            // 4ex: if list contains 5 elements, attempt to set index 9 will bring use to 5th element
            // in case of negative index it will start counting from the right, so -17 will bring us to 4th element
            index.current =
                newIndex >= 0
                    ? newIndex % stateSet.length
                    : stateSet.length + (newIndex % stateSet.length);
            update();
        },
        setState: function (state) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            var newIndex = stateSet.length ? stateSet.indexOf(state) : -1;
            if (newIndex === -1) {
                throw new Error("State '" + state + "' is not a valid state (does not exist in state list)");
            }
            index.current = newIndex;
            update();
        },
    }); }, [stateSet]);
    return tslib_1.__assign({ state: stateSet[index.current], currentIndex: index.current }, actions);
}
exports["default"] = useStateList;


/***/ }),

/***/ 48542:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
function useStateValidator(state, validator, initialState) {
    if (initialState === void 0) { initialState = [undefined]; }
    var validatorInner = react_1.useRef(validator);
    var stateInner = react_1.useRef(state);
    validatorInner.current = validator;
    stateInner.current = state;
    var _a = react_1.useState(initialState), validity = _a[0], setValidity = _a[1];
    var validate = react_1.useCallback(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(stateInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(stateInner.current));
        }
    }, [setValidity]);
    react_1.useEffect(function () {
        validate();
    }, [state]);
    return [validity, validate];
}
exports["default"] = useStateValidator;


/***/ }),

/***/ 7003:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useStateWithHistory = void 0;
var react_1 = __webpack_require__(18038);
var useFirstMountState_1 = __webpack_require__(40604);
var hookState_1 = __webpack_require__(36143);
function useStateWithHistory(initialState, capacity, initialHistory) {
    if (capacity === void 0) { capacity = 10; }
    if (capacity < 1) {
        throw new Error("Capacity has to be greater than 1, got '" + capacity + "'");
    }
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    var _a = react_1.useState(initialState), state = _a[0], innerSetState = _a[1];
    var history = react_1.useRef((initialHistory !== null && initialHistory !== void 0 ? initialHistory : []));
    var historyPosition = react_1.useRef(0);
    // do the states manipulation only on first mount, no sense to load re-renders with useless calculations
    if (isFirstMount) {
        if (history.current.length) {
            // if last element of history !== initial - push initial to history
            if (history.current[history.current.length - 1] !== initialState) {
                history.current.push(initialState);
            }
            // if initial history bigger that capacity - crop the first elements out
            if (history.current.length > capacity) {
                history.current = history.current.slice(history.current.length - capacity);
            }
        }
        else {
            // initiate the history with initial state
            history.current.push(initialState);
        }
        historyPosition.current = history.current.length && history.current.length - 1;
    }
    var setState = react_1.useCallback(function (newState) {
        innerSetState(function (currentState) {
            newState = hookState_1.resolveHookState(newState, currentState);
            // is state has changed
            if (newState !== currentState) {
                // if current position is not the last - pop element to the right
                if (historyPosition.current < history.current.length - 1) {
                    history.current = history.current.slice(0, historyPosition.current + 1);
                }
                historyPosition.current = history.current.push(newState) - 1;
                // if capacity is reached - shift first elements
                if (history.current.length > capacity) {
                    history.current = history.current.slice(history.current.length - capacity);
                }
            }
            return newState;
        });
    }, [state, capacity]);
    var historyState = react_1.useMemo(function () { return ({
        history: history.current,
        position: historyPosition.current,
        capacity: capacity,
        back: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the left border
            if (!historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current -= Math.min(amount, historyPosition.current);
                return history.current[historyPosition.current];
            });
        },
        forward: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the right border
            if (historyPosition.current === history.current.length - 1) {
                return;
            }
            innerSetState(function () {
                historyPosition.current = Math.min(historyPosition.current + amount, history.current.length - 1);
                return history.current[historyPosition.current];
            });
        },
        go: function (position) {
            if (position === historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current =
                    position < 0
                        ? Math.max(history.current.length + position, 0)
                        : Math.min(history.current.length - 1, position);
                return history.current[historyPosition.current];
            });
        },
    }); }, [state]);
    return [state, setState, historyState];
}
exports.useStateWithHistory = useStateWithHistory;


/***/ }),

/***/ 6919:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useUnmount_1 = tslib_1.__importDefault(__webpack_require__(5016));
var useThrottle = function (value, ms) {
    if (ms === void 0) { ms = 200; }
    var _a = react_1.useState(value), state = _a[0], setState = _a[1];
    var timeout = react_1.useRef();
    var nextValue = react_1.useRef(null);
    var hasNextValue = react_1.useRef(0);
    react_1.useEffect(function () {
        if (!timeout.current) {
            setState(value);
            var timeoutCallback_1 = function () {
                if (hasNextValue.current) {
                    hasNextValue.current = false;
                    setState(nextValue.current);
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextValue.current = value;
            hasNextValue.current = true;
        }
    }, [value]);
    useUnmount_1.default(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
exports["default"] = useThrottle;


/***/ }),

/***/ 14105:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useUnmount_1 = tslib_1.__importDefault(__webpack_require__(5016));
var useThrottleFn = function (fn, ms, args) {
    if (ms === void 0) { ms = 200; }
    var _a = react_1.useState(null), state = _a[0], setState = _a[1];
    var timeout = react_1.useRef();
    var nextArgs = react_1.useRef();
    react_1.useEffect(function () {
        if (!timeout.current) {
            setState(fn.apply(void 0, args));
            var timeoutCallback_1 = function () {
                if (nextArgs.current) {
                    setState(fn.apply(void 0, nextArgs.current));
                    nextArgs.current = undefined;
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextArgs.current = args;
        }
    }, args);
    useUnmount_1.default(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
exports["default"] = useThrottleFn;


/***/ }),

/***/ 27488:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var useTimeoutFn_1 = tslib_1.__importDefault(__webpack_require__(99335));
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(24345));
function useTimeout(ms) {
    if (ms === void 0) { ms = 0; }
    var update = useUpdate_1.default();
    return useTimeoutFn_1.default(update, ms);
}
exports["default"] = useTimeout;


/***/ }),

/***/ 99335:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
function useTimeoutFn(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var ready = react_1.useRef(false);
    var timeout = react_1.useRef();
    var callback = react_1.useRef(fn);
    var isReady = react_1.useCallback(function () { return ready.current; }, []);
    var set = react_1.useCallback(function () {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(function () {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);
    var clear = react_1.useCallback(function () {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);
    // update ref when function changes
    react_1.useEffect(function () {
        callback.current = fn;
    }, [fn]);
    // set on mount, clear on unmount
    react_1.useEffect(function () {
        set();
        return clear;
    }, [ms]);
    return [isReady, clear, set];
}
exports["default"] = useTimeoutFn;


/***/ }),

/***/ 5987:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var DEFAULT_USE_TITLE_OPTIONS = {
    restoreOnUnmount: false,
};
function useTitle(title, options) {
    if (options === void 0) { options = DEFAULT_USE_TITLE_OPTIONS; }
    var prevTitleRef = react_1.useRef(document.title);
    if (document.title !== title)
        document.title = title;
    react_1.useEffect(function () {
        if (options && options.restoreOnUnmount) {
            return function () {
                document.title = prevTitleRef.current;
            };
        }
        else {
            return;
        }
    }, []);
}
exports["default"] = typeof document !== 'undefined' ? useTitle : function (_title) { };


/***/ }),

/***/ 75740:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var toggleReducer = function (state, nextValue) {
    return typeof nextValue === 'boolean' ? nextValue : !state;
};
var useToggle = function (initialValue) {
    return react_1.useReducer(toggleReducer, initialValue);
};
exports["default"] = useToggle;


/***/ }),

/***/ 28005:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var ts_easing_1 = __webpack_require__(11776);
var useRaf_1 = tslib_1.__importDefault(__webpack_require__(89689));
var useTween = function (easingName, ms, delay) {
    if (easingName === void 0) { easingName = 'inCirc'; }
    if (ms === void 0) { ms = 200; }
    if (delay === void 0) { delay = 0; }
    var fn = ts_easing_1.easing[easingName];
    var t = useRaf_1.default(ms, delay);
    if (false) {}
    return fn(t);
};
exports["default"] = useTween;


/***/ }),

/***/ 5016:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(41447));
var useUnmount = function (fn) {
    var fnRef = react_1.useRef(fn);
    // update the ref each render so if it change the newest callback will be invoked
    fnRef.current = fn;
    useEffectOnce_1.default(function () { return function () { return fnRef.current(); }; });
};
exports["default"] = useUnmount;


/***/ }),

/***/ 1399:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(41447));
var useUnmountPromise = function () {
    var refUnmounted = react_1.useRef(false);
    useEffectOnce_1.default(function () { return function () {
        refUnmounted.current = true;
    }; });
    var wrapper = react_1.useMemo(function () {
        var race = function (promise, onError) {
            var newPromise = new Promise(function (resolve, reject) {
                promise.then(function (result) {
                    if (!refUnmounted.current)
                        resolve(result);
                }, function (error) {
                    if (!refUnmounted.current)
                        reject(error);
                    else if (onError)
                        onError(error);
                    else
                        console.error('useUnmountPromise', error);
                });
            });
            return newPromise;
        };
        return race;
    }, []);
    return wrapper;
};
exports["default"] = useUnmountPromise;


/***/ }),

/***/ 24345:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var updateReducer = function (num) { return (num + 1) % 1000000; };
function useUpdate() {
    var _a = react_1.useReducer(updateReducer, 0), update = _a[1];
    return update;
}
exports["default"] = useUpdate;


/***/ }),

/***/ 3849:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var useFirstMountState_1 = __webpack_require__(40604);
var useUpdateEffect = function (effect, deps) {
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    react_1.useEffect(function () {
        if (!isFirstMount) {
            return effect();
        }
    }, deps);
};
exports["default"] = useUpdateEffect;


/***/ }),

/***/ 80790:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var useList_1 = tslib_1.__importDefault(__webpack_require__(85714));
/**
 * @deprecated Use `useList` hook's upsert action instead
 */
function useUpsert(predicate, initialList) {
    if (initialList === void 0) { initialList = []; }
    var _a = useList_1.default(initialList), list = _a[0], listActions = _a[1];
    return [
        list,
        tslib_1.__assign(tslib_1.__assign({}, listActions), { upsert: function (newItem) {
                listActions.upsert(predicate, newItem);
            } }),
    ];
}
exports["default"] = useUpsert;


/***/ }),

/***/ 301:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var isVibrationApiSupported = util_1.isNavigator && 'vibrate' in navigator;
function useVibrate(enabled, pattern, loop) {
    if (enabled === void 0) { enabled = true; }
    if (pattern === void 0) { pattern = [1000, 1000]; }
    if (loop === void 0) { loop = true; }
    react_1.useEffect(function () {
        var interval;
        if (enabled) {
            navigator.vibrate(pattern);
            if (loop) {
                var duration = pattern instanceof Array ? pattern.reduce(function (a, b) { return a + b; }) : pattern;
                interval = setInterval(function () {
                    navigator.vibrate(pattern);
                }, duration);
            }
        }
        return function () {
            if (enabled) {
                navigator.vibrate(0);
                if (loop) {
                    clearInterval(interval);
                }
            }
        };
    }, [enabled]);
}
exports["default"] = isVibrationApiSupported ? useVibrate : util_1.noop;


/***/ }),

/***/ 15273:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var createHTMLMediaHook_1 = tslib_1.__importDefault(__webpack_require__(28472));
var useVideo = createHTMLMediaHook_1.default('video');
exports["default"] = useVideo;


/***/ }),

/***/ 82781:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(18578);
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(11515));
var useWindowScroll = function () {
    var _a = useRafState_1.default(function () { return ({
        x: util_1.isBrowser ? window.pageXOffset : 0,
        y: util_1.isBrowser ? window.pageYOffset : 0,
    }); }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handler = function () {
            setState(function (state) {
                var pageXOffset = window.pageXOffset, pageYOffset = window.pageYOffset;
                //Check state for change, return same state if no change happened to prevent rerender
                //(see useState/setState documentation). useState/setState is used internally in useRafState/setState.
                return state.x !== pageXOffset || state.y !== pageYOffset
                    ? {
                        x: pageXOffset,
                        y: pageYOffset,
                    }
                    : state;
            });
        };
        //We have to update window scroll at mount, before subscription.
        //Window scroll may be changed between render and effect handler.
        handler();
        util_1.on(window, 'scroll', handler, {
            capture: false,
            passive: true,
        });
        return function () {
            util_1.off(window, 'scroll', handler);
        };
    }, []);
    return state;
};
exports["default"] = useWindowScroll;


/***/ }),

/***/ 56367:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var react_1 = __webpack_require__(18038);
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(11515));
var util_1 = __webpack_require__(18578);
var useWindowSize = function (initialWidth, initialHeight) {
    if (initialWidth === void 0) { initialWidth = Infinity; }
    if (initialHeight === void 0) { initialHeight = Infinity; }
    var _a = useRafState_1.default({
        width: util_1.isBrowser ? window.innerWidth : initialWidth,
        height: util_1.isBrowser ? window.innerHeight : initialHeight,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        if (util_1.isBrowser) {
            var handler_1 = function () {
                setState({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            util_1.on(window, 'resize', handler_1);
            return function () {
                util_1.off(window, 'resize', handler_1);
            };
        }
    }, []);
    return state;
};
exports["default"] = useWindowSize;


/***/ }),

/***/ 65153:
/***/ ((module) => {

/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs =  true && module.exports;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (element, options) {
			return new Promise(function (resolve, reject) {
				var onFullScreenEntered = function () {
					this.off('change', onFullScreenEntered);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenEntered);

				element = element || document.documentElement;

				var returnPromise = element[fn.requestFullscreen](options);

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenEntered).catch(reject);
				}
			}.bind(this));
		},
		exit: function () {
			return new Promise(function (resolve, reject) {
				if (!this.isFullscreen) {
					resolve();
					return;
				}

				var onFullScreenExit = function () {
					this.off('change', onFullScreenExit);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenExit);

				var returnPromise = document[fn.exitFullscreen]();

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenExit).catch(reject);
				}
			}.bind(this));
		},
		toggle: function (element, options) {
			return this.isFullscreen ? this.exit() : this.request(element, options);
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = {isEnabled: false};
		} else {
			window.screenfull = {isEnabled: false};
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		isEnabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ 78419:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var counter = 0;
var buckets = {};
var setHarmonicInterval = function (fn, ms) {
    var _a;
    var id = counter++;
    if (buckets[ms]) {
        buckets[ms].listeners[id] = fn;
    }
    else {
        var timer = setInterval(function () {
            var listeners = buckets[ms].listeners;
            var didThrow = false;
            var lastError;
            for (var _i = 0, _a = Object.values(listeners); _i < _a.length; _i++) {
                var listener = _a[_i];
                try {
                    listener();
                }
                catch (error) {
                    didThrow = true;
                    lastError = error;
                }
            }
            if (didThrow)
                throw lastError;
        }, ms);
        buckets[ms] = {
            ms: ms,
            timer: timer,
            listeners: (_a = {},
                _a[id] = fn,
                _a),
        };
    }
    return {
        bucket: buckets[ms],
        id: id,
    };
};
var clearHarmonicInterval = function (_a) {
    var bucket = _a.bucket, id = _a.id;
    delete bucket.listeners[id];
    var hasListeners = false;
    for (var listener in bucket.listeners) {
        hasListeners = true;
        break;
    }
    if (!hasListeners) {
        clearInterval(bucket.timer);
        delete buckets[bucket.ms];
    }
};

exports.clearHarmonicInterval = clearHarmonicInterval;
exports.setHarmonicInterval = setHarmonicInterval;


/***/ }),

/***/ 98036:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ 11776:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.easing = {
    // No easing, no acceleration
    linear: function (t) { return t; },
    // Accelerates fast, then slows quickly towards end.
    quadratic: function (t) { return t * (-(t * t) * t + 4 * t * t - 6 * t + 4); },
    // Overshoots over 1 and then returns to 1 towards end.
    cubic: function (t) { return t * (4 * t * t - 9 * t + 6); },
    // Overshoots over 1 multiple times - wiggles around 1.
    elastic: function (t) { return t * (33 * t * t * t * t - 106 * t * t * t + 126 * t * t - 67 * t + 15); },
    // Accelerating from zero velocity
    inQuad: function (t) { return t * t; },
    // Decelerating to zero velocity
    outQuad: function (t) { return t * (2 - t); },
    // Acceleration until halfway, then deceleration
    inOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
    // Accelerating from zero velocity
    inCubic: function (t) { return t * t * t; },
    // Decelerating to zero velocity
    outCubic: function (t) { return (--t) * t * t + 1; },
    // Acceleration until halfway, then deceleration
    inOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
    // Accelerating from zero velocity
    inQuart: function (t) { return t * t * t * t; },
    // Decelerating to zero velocity
    outQuart: function (t) { return 1 - (--t) * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; },
    // Accelerating from zero velocity
    inQuint: function (t) { return t * t * t * t * t; },
    // Decelerating to zero velocity
    outQuint: function (t) { return 1 + (--t) * t * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; },
    // Accelerating from zero velocity
    inSine: function (t) { return -Math.cos(t * (Math.PI / 2)) + 1; },
    // Decelerating to zero velocity
    outSine: function (t) { return Math.sin(t * (Math.PI / 2)); },
    // Accelerating until halfway, then decelerating
    inOutSine: function (t) { return -(Math.cos(Math.PI * t) - 1) / 2; },
    // Exponential accelerating from zero velocity
    inExpo: function (t) { return Math.pow(2, 10 * (t - 1)); },
    // Exponential decelerating to zero velocity
    outExpo: function (t) { return -Math.pow(2, -10 * t) + 1; },
    // Exponential accelerating until halfway, then decelerating
    inOutExpo: function (t) {
        t /= .5;
        if (t < 1)
            return Math.pow(2, 10 * (t - 1)) / 2;
        t--;
        return (-Math.pow(2, -10 * t) + 2) / 2;
    },
    // Circular accelerating from zero velocity
    inCirc: function (t) { return -Math.sqrt(1 - t * t) + 1; },
    // Circular decelerating to zero velocity Moves VERY fast at the beginning and
    // then quickly slows down in the middle. This tween can actually be used
    // in continuous transitions where target value changes all the time,
    // because of the very quick start, it hides the jitter between target value changes.
    outCirc: function (t) { return Math.sqrt(1 - (t = t - 1) * t); },
    // Circular acceleration until halfway, then deceleration
    inOutCirc: function (t) {
        t /= .5;
        if (t < 1)
            return -(Math.sqrt(1 - t * t) - 1) / 2;
        t -= 2;
        return (Math.sqrt(1 - t * t) + 1) / 2;
    }
};


/***/ }),

/***/ 53265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__esDecorate": () => (/* binding */ __esDecorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__propKey": () => (/* binding */ __propKey),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__runInitializers": () => (/* binding */ __runInitializers),
/* harmony export */   "__setFunctionName": () => (/* binding */ __setFunctionName),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};

function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};

function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ 95400:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 23482:
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 68080:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(95400);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 75166:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(64183);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 59651:
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 27574:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 94600:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(50426)["default"]);
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 91709:
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 66304:
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16686:
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 61661:
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 51686:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(75166);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 46181:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(20820);
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 20820:
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 31974:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(23482);
var iterableToArrayLimit = __webpack_require__(66304);
var unsupportedIterableToArray = __webpack_require__(97322);
var nonIterableRest = __webpack_require__(16686);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 77687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(68080);
var iterableToArray = __webpack_require__(91709);
var unsupportedIterableToArray = __webpack_require__(97322);
var nonIterableSpread = __webpack_require__(61661);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 34020:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(50426)["default"]);
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 64183:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(50426)["default"]);
var toPrimitive = __webpack_require__(34020);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 50426:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 97322:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(95400);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 93947:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset).
 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}

exports.debounce = debounce;
exports.throttle = throttle;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 34338:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ AnimatePresence)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/frameloop/index.mjs + 1 modules
var frameloop = __webpack_require__(95827);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(8886);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs



function useIsMounted() {
    const isMounted = (0,react_.useRef)(false);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-force-update.mjs




function useForceUpdate() {
    const isMounted = useIsMounted();
    const [forcedRenderCount, setForcedRenderCount] = (0,react_.useState)(0);
    const forceRender = (0,react_.useCallback)(() => {
        isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
    }, [forcedRenderCount]);
    /**
     * Defer this to the end of the next animation frame in case there are multiple
     * synchronous calls.
     */
    const deferredForceRender = (0,react_.useCallback)(() => frameloop/* frame.postRender */.Wi.postRender(forceRender), [forceRender]);
    return [deferredForceRender, forcedRenderCount];
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var PresenceContext = __webpack_require__(51038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(39591);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs



/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */
class PopChildMeasure extends react_.Component {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if (element && prevProps.isPresent && !this.props.isPresent) {
            const size = this.props.sizeRef.current;
            size.height = element.offsetHeight || 0;
            size.width = element.offsetWidth || 0;
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() { }
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent }) {
    const id = (0,react_.useId)();
    const ref = (0,react_.useRef)(null);
    const size = (0,react_.useRef)({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    });
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */
    (0,react_.useInsertionEffect)(() => {
        const { width, height, top, left } = size.current;
        if (isPresent || !ref.current || !width || !height)
            return;
        ref.current.dataset.motionPopId = id;
        const style = document.createElement("style");
        document.head.appendChild(style);
        if (style.sheet) {
            style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
        }
        return () => {
            document.head.removeChild(style);
        };
    }, [isPresent]);
    return (react_.createElement(PopChildMeasure, { isPresent: isPresent, childRef: ref, sizeRef: size }, react_.cloneElement(children, { ref })));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs






const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, }) => {
    const presenceChildren = (0,use_constant/* useConstant */.h)(newChildrenMap);
    const id = (0,react_.useId)();
    const context = (0,react_.useMemo)(() => ({
        id,
        initial,
        isPresent,
        custom,
        onExitComplete: (childId) => {
            presenceChildren.set(childId, true);
            for (const isComplete of presenceChildren.values()) {
                if (!isComplete)
                    return; // can stop searching when any is incomplete
            }
            onExitComplete && onExitComplete();
        },
        register: (childId) => {
            presenceChildren.set(childId, false);
            return () => presenceChildren.delete(childId);
        },
    }), 
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? undefined : [isPresent]);
    (0,react_.useMemo)(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    react_.useEffect(() => {
        !isPresent &&
            !presenceChildren.size &&
            onExitComplete &&
            onExitComplete();
    }, [isPresent]);
    if (mode === "popLayout") {
        children = react_.createElement(PopChild, { isPresent: isPresent }, children);
    }
    return (react_.createElement(PresenceContext/* PresenceContext.Provider */.O.Provider, { value: context }, children));
};
function newChildrenMap() {
    return new Map();
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var LayoutGroupContext = __webpack_require__(14015);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs


function useUnmountEffect(callback) {
    return (0,react_.useEffect)(() => () => callback(), []);
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/errors.mjs
var errors = __webpack_require__(97456);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs










const getChildKey = (child) => child.key || "";
function updateChildLookup(children, allChildren) {
    children.forEach((child) => {
        const key = getChildKey(child);
        allChildren.set(key, child);
    });
}
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react_.Children.forEach(children, (child) => {
        if ((0,react_.isValidElement)(child))
            filtered.push(child);
    });
    return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, exitBeforeEnter, presenceAffectsLayout = true, mode = "sync", }) => {
    (0,errors/* invariant */.k)(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
    // We want to force a re-render once all exiting animations have finished. We
    // either use a local forceRender function, or one from a parent context if it exists.
    let [forceRender] = useForceUpdate();
    const forceRenderLayoutGroup = (0,react_.useContext)(LayoutGroupContext/* LayoutGroupContext */.p).forceRender;
    if (forceRenderLayoutGroup)
        forceRender = forceRenderLayoutGroup;
    const isMounted = useIsMounted();
    // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
    const filteredChildren = onlyElements(children);
    let childrenToRender = filteredChildren;
    const exiting = new Set();
    // Keep a living record of the children we're actually rendering so we
    // can diff to figure out which are entering and exiting
    const presentChildren = (0,react_.useRef)(childrenToRender);
    // A lookup table to quickly reference components by key
    const allChildren = (0,react_.useRef)(new Map()).current;
    // If this is the initial component render, just deal with logic surrounding whether
    // we play onMount animations or not.
    const isInitialRender = (0,react_.useRef)(true);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(() => {
        isInitialRender.current = false;
        updateChildLookup(filteredChildren, allChildren);
        presentChildren.current = childrenToRender;
    });
    useUnmountEffect(() => {
        isInitialRender.current = true;
        allChildren.clear();
        exiting.clear();
    });
    if (isInitialRender.current) {
        return (react_.createElement(react_.Fragment, null, childrenToRender.map((child) => (react_.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child)))));
    }
    // If this is a subsequent render, deal with entering and exiting children
    childrenToRender = [...childrenToRender];
    // Diff the keys of the currently-present and target children to update our
    // exiting list.
    const presentKeys = presentChildren.current.map(getChildKey);
    const targetKeys = filteredChildren.map(getChildKey);
    // Diff the present children with our target children and mark those that are exiting
    const numPresent = presentKeys.length;
    for (let i = 0; i < numPresent; i++) {
        const key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
            exiting.add(key);
        }
    }
    // If we currently have exiting children, and we're deferring rendering incoming children
    // until after all current children have exiting, empty the childrenToRender array
    if (mode === "wait" && exiting.size) {
        childrenToRender = [];
    }
    // Loop through all currently exiting components and clone them to overwrite `animate`
    // with any `exit` prop they might have defined.
    exiting.forEach((key) => {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1)
            return;
        const child = allChildren.get(key);
        if (!child)
            return;
        const insertionIndex = presentKeys.indexOf(key);
        const onExit = () => {
            allChildren.delete(key);
            exiting.delete(key);
            // Remove this child from the present children
            const removeIndex = presentChildren.current.findIndex((presentChild) => presentChild.key === key);
            presentChildren.current.splice(removeIndex, 1);
            // Defer re-rendering until all exiting children have indeed left
            if (!exiting.size) {
                presentChildren.current = filteredChildren;
                if (isMounted.current === false)
                    return;
                forceRender();
                onExitComplete && onExitComplete();
            }
        };
        childrenToRender.splice(insertionIndex, 0, react_.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child));
    });
    // Add `MotionContext` even to children that don't need it to ensure we're rendering
    // the same tree between renders
    childrenToRender = childrenToRender.map((child) => {
        const key = child.key;
        return exiting.has(key) ? (child) : (react_.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child));
    });
    if (false) {}
    return (react_.createElement(react_.Fragment, null, exiting.size
        ? childrenToRender
        : childrenToRender.map((child) => (0,react_.cloneElement)(child))));
};




/***/ }),

/***/ 72017:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ MotionConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59106);
/* harmony import */ var _render_dom_utils_filter_props_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71668);
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39591);






/**
 * `MotionConfig` is used to set configuration options for all children `motion` components.
 *
 * ```jsx
 * import { motion, MotionConfig } from "framer-motion"
 *
 * export function App() {
 *   return (
 *     <MotionConfig transition={{ type: "spring" }}>
 *       <motion.div animate={{ x: 100 }} />
 *     </MotionConfig>
 *   )
 * }
 * ```
 *
 * @public
 */
function MotionConfig({ children, isValidProp, ...config }) {
    isValidProp && (0,_render_dom_utils_filter_props_mjs__WEBPACK_IMPORTED_MODULE_1__/* .loadExternalIsValidProp */ .K)(isValidProp);
    /**
     * Inherit props from any parent MotionConfig components
     */
    config = { ...(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_2__/* .MotionConfigContext */ ._), ...config };
    /**
     * Don't allow isStatic to change between renders as it affects how many hooks
     * motion components fire.
     */
    config.isStatic = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useConstant */ .h)(() => config.isStatic);
    /**
     * Creating a new config context object will re-render every `motion` component
     * every time it renders. So we only want to create a new one sparingly.
     */
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => config, [JSON.stringify(config.transition), config.transformPagePoint, config.reducedMotion]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_2__/* .MotionConfigContext.Provider */ ._.Provider, { value: context }, children));
}




/***/ }),

/***/ 14015:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ LayoutGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);


const LayoutGroupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});




/***/ }),

/***/ 59106:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ MotionConfigContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);


/**
 * @public
 */
const MotionConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    transformPagePoint: (p) => p,
    isStatic: false,
    reducedMotion: "never",
});




/***/ }),

/***/ 51038:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ PresenceContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);


/**
 * @public
 */
const PresenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);




/***/ }),

/***/ 42891:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ frameData)
/* harmony export */ });
const frameData = {
    delta: 0,
    timestamp: 0,
    isProcessing: false,
};




/***/ }),

/***/ 95827:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Pn": () => (/* binding */ cancelFrame),
  "Wi": () => (/* binding */ frameloop_frame),
  "S6": () => (/* binding */ steps)
});

// UNUSED EXPORTS: stepsOrder

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/frameloop/create-render-step.mjs
function createRenderStep(runNextFrame) {
    /**
     * We create and reuse two arrays, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */
    let toRun = [];
    let toRunNextFrame = [];
    /**
     *
     */
    let numToRun = 0;
    /**
     * Track whether we're currently processing jobs in this step. This way
     * we can decide whether to schedule new jobs for this frame or next.
     */
    let isProcessing = false;
    let flushNextFrame = false;
    /**
     * A set of processes which were marked keepAlive when scheduled.
     */
    const toKeepAlive = new WeakSet();
    const step = {
        /**
         * Schedule a process to run on the next frame.
         */
        schedule: (callback, keepAlive = false, immediate = false) => {
            const addToCurrentFrame = immediate && isProcessing;
            const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            // If the buffer doesn't already contain this callback, add it
            if (buffer.indexOf(callback) === -1) {
                buffer.push(callback);
                // If we're adding it to the currently running buffer, update its measured size
                if (addToCurrentFrame && isProcessing)
                    numToRun = toRun.length;
            }
            return callback;
        },
        /**
         * Cancel the provided callback from running on the next frame.
         */
        cancel: (callback) => {
            const index = toRunNextFrame.indexOf(callback);
            if (index !== -1)
                toRunNextFrame.splice(index, 1);
            toKeepAlive.delete(callback);
        },
        /**
         * Execute all schedule callbacks.
         */
        process: (frameData) => {
            /**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */
            if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
            // Clear the next frame list
            toRunNextFrame.length = 0;
            // Execute this frame
            numToRun = toRun.length;
            if (numToRun) {
                for (let i = 0; i < numToRun; i++) {
                    const callback = toRun[i];
                    callback(frameData);
                    if (toKeepAlive.has(callback)) {
                        step.schedule(callback);
                        runNextFrame();
                    }
                }
            }
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        },
    };
    return step;
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/frameloop/data.mjs
var data = __webpack_require__(42891);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/frameloop/index.mjs



const maxElapsed = 40;
let useDefaultElapsed = true;
let runNextFrame = false;
const stepsOrder = [
    "read",
    "update",
    "preRender",
    "render",
    "postRender",
];
const steps = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(() => (runNextFrame = true));
    return acc;
}, {});
const processStep = (stepId) => steps[stepId].process(data/* frameData */.w);
const processFrame = (timestamp) => {
    runNextFrame = false;
    data/* frameData.delta */.w.delta = useDefaultElapsed
        ? 1000 / 60
        : Math.max(Math.min(timestamp - data/* frameData.timestamp */.w.timestamp, maxElapsed), 1);
    data/* frameData.timestamp */.w.timestamp = timestamp;
    data/* frameData.isProcessing */.w.isProcessing = true;
    stepsOrder.forEach(processStep);
    data/* frameData.isProcessing */.w.isProcessing = false;
    if (runNextFrame) {
        useDefaultElapsed = false;
        requestAnimationFrame(processFrame);
    }
};
const startLoop = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!data/* frameData.isProcessing */.w.isProcessing)
        requestAnimationFrame(processFrame);
};
const frameloop_frame = stepsOrder.reduce((acc, key) => {
    const step = steps[key];
    acc[key] = (process, keepAlive = false, immediate = false) => {
        if (!runNextFrame)
            startLoop();
        return step.schedule(process, keepAlive, immediate);
    };
    return acc;
}, {});
function cancelFrame(process) {
    stepsOrder.forEach((key) => steps[key].cancel(process));
}




/***/ }),

/***/ 55402:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* binding */ motion)
});

// UNUSED EXPORTS: createDomMotionComponent

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var MotionConfigContext = __webpack_require__(59106);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs


const MotionContext = (0,react_.createContext)({});



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var context_PresenceContext = __webpack_require__(51038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(8886);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/LazyContext.mjs


const LazyContext = (0,react_.createContext)({ strict: false });



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs







function useVisualElement(Component, visualState, props, createVisualElement) {
    const { visualElement: parent } = (0,react_.useContext)(MotionContext);
    const lazyContext = (0,react_.useContext)(LazyContext);
    const presenceContext = (0,react_.useContext)(context_PresenceContext/* PresenceContext */.O);
    const reducedMotionConfig = (0,react_.useContext)(MotionConfigContext/* MotionConfigContext */._).reducedMotion;
    const visualElementRef = (0,react_.useRef)();
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */
    createVisualElement = createVisualElement || lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState,
            parent,
            props,
            presenceContext,
            blockInitialAnimation: presenceContext
                ? presenceContext.initial === false
                : false,
            reducedMotionConfig,
        });
    }
    const visualElement = visualElementRef.current;
    (0,react_.useInsertionEffect)(() => {
        visualElement && visualElement.update(props, presenceContext);
    });
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(() => {
        visualElement && visualElement.render();
    });
    (0,react_.useEffect)(() => {
        visualElement && visualElement.updateFeatures();
    });
    /**
     * Ideally this function would always run in a useEffect.
     *
     * However, if we have optimised appear animations to handoff from,
     * it needs to happen synchronously to ensure there's no flash of
     * incorrect styles in the event of a hydration error.
     *
     * So if we detect a situtation where optimised appear animations
     * are running, we use useLayoutEffect to trigger animations.
     */
    const useAnimateChangesEffect = window.HandoffAppearAnimations
        ? use_isomorphic_effect/* useIsomorphicLayoutEffect */.L
        : react_.useEffect;
    useAnimateChangesEffect(() => {
        if (visualElement && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
    });
    return visualElement;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
    return (typeof ref === "object" &&
        Object.prototype.hasOwnProperty.call(ref, "current"));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs



/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
    return (0,react_.useCallback)((instance) => {
        instance && visualState.mount && visualState.mount(instance);
        if (visualElement) {
            instance
                ? visualElement.mount(instance)
                : visualElement.unmount();
        }
        if (externalRef) {
            if (typeof externalRef === "function") {
                externalRef(instance);
            }
            else if (isRefObject(externalRef)) {
                externalRef.current = instance;
            }
        }
    }, 
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
    return typeof v === "object" && typeof v.start === "function";
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
const variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
];
const variantProps = ["initial", ...variantPriorityOrder];



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs




function isControllingVariants(props) {
    return (isAnimationControls(props.animate) ||
        variantProps.some((name) => isVariantLabel(props[name])));
}
function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs



function getCurrentTreeVariants(props, context) {
    if (isControllingVariants(props)) {
        const { initial, animate } = props;
        return {
            initial: initial === false || isVariantLabel(initial)
                ? initial
                : undefined,
            animate: isVariantLabel(animate) ? animate : undefined,
        };
    }
    return props.inherit !== false ? context : {};
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionContext/create.mjs




function useCreateMotionContext(props) {
    const { initial, animate } = getCurrentTreeVariants(props, (0,react_.useContext)(MotionContext));
    return (0,react_.useMemo)(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/definitions.mjs
const featureProps = {
    animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
};
const featureDefinitions = {};
for (const key in featureProps) {
    featureDefinitions[key] = {
        isEnabled: (props) => featureProps[key].some((name) => !!props[name]),
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/load-features.mjs


function loadFeatures(features) {
    for (const key in features) {
        featureDefinitions[key] = {
            ...featureDefinitions[key],
            ...features[key],
        };
    }
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/is-browser.mjs
var is_browser = __webpack_require__(97121);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(39591);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/state.mjs
/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */
const globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: false,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/id.mjs



let id = 1;
function useProjectionId() {
    return (0,use_constant/* useConstant */.h)(() => {
        if (globalProjectionState.hasEverUpdated) {
            return id++;
        }
    });
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var LayoutGroupContext = __webpack_require__(14015);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs


/**
 * Internal, exported only for usage in Framer
 */
const SwitchLayoutGroupContext = (0,react_.createContext)({});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
const motionComponentSymbol = Symbol.for("motionComponentSymbol");



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/index.mjs















/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */
function motion_createMotionComponent({ preloadedFeatures, createVisualElement, useRender, useVisualState, Component, }) {
    preloadedFeatures && loadFeatures(preloadedFeatures);
    function MotionComponent(props, externalRef) {
        /**
         * If we need to measure the element we load this functionality in a
         * separate class component in order to gain access to getSnapshotBeforeUpdate.
         */
        let MeasureLayout;
        const configAndProps = {
            ...(0,react_.useContext)(MotionConfigContext/* MotionConfigContext */._),
            ...props,
            layoutId: useLayoutId(props),
        };
        const { isStatic } = configAndProps;
        const context = useCreateMotionContext(props);
        /**
         * Create a unique projection ID for this component. If a new component is added
         * during a layout animation we'll use this to query the DOM and hydrate its ref early, allowing
         * us to measure it as soon as any layout effect flushes pending layout animations.
         *
         * Performance note: It'd be better not to have to search the DOM for these elements.
         * For newly-entering components it could be enough to only correct treeScale, in which
         * case we could mount in a scale-correction mode. This wouldn't be enough for
         * shared element transitions however. Perhaps for those we could revert to a root node
         * that gets forceRendered and layout animations are triggered on its layout effect.
         */
        const projectionId = isStatic ? undefined : useProjectionId();
        const visualState = useVisualState(props, isStatic);
        if (!isStatic && is_browser/* isBrowser */.j) {
            /**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */
            context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement);
            /**
             * Load Motion gesture and animation features. These are rendered as renderless
             * components so each feature can optionally make use of React lifecycle methods.
             */
            const initialLayoutGroupConfig = (0,react_.useContext)(SwitchLayoutGroupContext);
            const isStrict = (0,react_.useContext)(LazyContext).strict;
            if (context.visualElement) {
                MeasureLayout = context.visualElement.loadFeatures(
                // Note: Pass the full new combined props to correctly re-render dynamic feature components.
                configAndProps, isStrict, preloadedFeatures, projectionId, initialLayoutGroupConfig);
            }
        }
        /**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */
        return (react_.createElement(MotionContext.Provider, { value: context },
            MeasureLayout && context.visualElement ? (react_.createElement(MeasureLayout, { visualElement: context.visualElement, ...configAndProps })) : null,
            useRender(Component, props, projectionId, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)));
    }
    const ForwardRefComponent = (0,react_.forwardRef)(MotionComponent);
    ForwardRefComponent[motionComponentSymbol] = Component;
    return ForwardRefComponent;
}
function useLayoutId({ layoutId }) {
    const layoutGroupId = (0,react_.useContext)(LayoutGroupContext/* LayoutGroupContext */.p).id;
    return layoutGroupId && layoutId !== undefined
        ? layoutGroupId + "-" + layoutId
        : layoutId;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs


/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */
function createMotionProxy(createConfig) {
    function custom(Component, customMotionComponentConfig = {}) {
        return motion_createMotionComponent(createConfig(Component, customMotionComponentConfig));
    }
    if (typeof Proxy === "undefined") {
        return custom;
    }
    /**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */
    const componentCache = new Map();
    return new Proxy(custom, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */
        get: (_target, key) => {
            /**
             * If this element doesn't exist in the component cache, create it and cache.
             */
            if (!componentCache.has(key)) {
                componentCache.set(key, custom(key));
            }
            return componentCache.get(key);
        },
    });
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
/**
 * We keep these listed seperately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
const lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
];



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs


function isSVGComponent(Component) {
    if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" ||
        /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */
        Component.includes("-")) {
        return false;
    }
    else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component) > -1 ||
        /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/.test(Component)) {
        return true;
    }
    return false;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
const scaleCorrectors = {};
function addScaleCorrector(correctors) {
    Object.assign(scaleCorrectors, correctors);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs
/**
 * Generate a list of every possible transform key.
 */
const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
];
/**
 * A quick lookup for transform props.
 */
const transformProps = new Set(transformPropOrder);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs



function isForcedMotionValue(key, { layout, layoutId }) {
    return (transformProps.has(key) ||
        key.startsWith("origin") ||
        ((layout || layoutId !== undefined) &&
            (!!scaleCorrectors[key] || key === "opacity")));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
const isMotionValue = (value) => Boolean(value && value.getVelocity);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs


const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
const numTransforms = transformPropOrder.length;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(transform, { enableHardwareAcceleration = true, allowTransformNone = true, }, transformIsDefault, transformTemplate) {
    // The transform string we're going to build into.
    let transformString = "";
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */
    for (let i = 0; i < numTransforms; i++) {
        const key = transformPropOrder[i];
        if (transform[key] !== undefined) {
            const transformName = translateAlias[key] || key;
            transformString += `${transformName}(${transform[key]}) `;
        }
    }
    if (enableHardwareAcceleration && !transform.z) {
        transformString += "translateZ(0)";
    }
    transformString = transformString.trim();
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (allowTransformNone && transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
const checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
const isCSSVariableName = checkStringStartsWith("--");
const isCSSVariableToken = checkStringStartsWith("var(--");



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
const getValueAsType = (value, type) => {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/clamp.mjs
const clamp = (min, max, v) => Math.min(Math.max(v, min), max);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs


const number = {
    test: (v) => typeof v === "number",
    parse: parseFloat,
    transform: (v) => v,
};
const alpha = {
    ...number,
    transform: (v) => clamp(0, 1, v),
};
const scale = {
    ...number,
    default: 1,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/utils.mjs
/**
 * TODO: When we move from string as a source of truth to data models
 * everything in this folder should probably be referred to as models vs types
 */
// If this number is a decimal, make it just five decimal places
// to avoid exponents
const sanitize = (v) => Math.round(v * 100000) / 100000;
const floatRegex = /(-)?([\d]*\.?[\d])+/g;
const colorRegex = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
const singleColorRegex = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
    return typeof v === "string";
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs


const createUnitType = (unit) => ({
    test: (v) => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`,
});
const degrees = createUnitType("deg");
const percent = createUnitType("%");
const px = createUnitType("px");
const vh = createUnitType("vh");
const vw = createUnitType("vw");
const progressPercentage = {
    ...percent,
    parse: (v) => percent.parse(v) / 100,
    transform: (v) => percent.transform(v * 100),
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs


const type_int_int = {
    ...number,
    transform: Math.round,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs




const numberValueTypes = {
    // Border props
    borderWidth: px,
    borderTopWidth: px,
    borderRightWidth: px,
    borderBottomWidth: px,
    borderLeftWidth: px,
    borderRadius: px,
    radius: px,
    borderTopLeftRadius: px,
    borderTopRightRadius: px,
    borderBottomRightRadius: px,
    borderBottomLeftRadius: px,
    // Positioning props
    width: px,
    maxWidth: px,
    height: px,
    maxHeight: px,
    size: px,
    top: px,
    right: px,
    bottom: px,
    left: px,
    // Spacing props
    padding: px,
    paddingTop: px,
    paddingRight: px,
    paddingBottom: px,
    paddingLeft: px,
    margin: px,
    marginTop: px,
    marginRight: px,
    marginBottom: px,
    marginLeft: px,
    // Transform props
    rotate: degrees,
    rotateX: degrees,
    rotateY: degrees,
    rotateZ: degrees,
    scale: scale,
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    skew: degrees,
    skewX: degrees,
    skewY: degrees,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    x: px,
    y: px,
    z: px,
    perspective: px,
    transformPerspective: px,
    opacity: alpha,
    originX: progressPercentage,
    originY: progressPercentage,
    originZ: px,
    // Misc
    zIndex: type_int_int,
    // SVG
    fillOpacity: alpha,
    strokeOpacity: alpha,
    numOctaves: type_int_int,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs






function buildHTMLStyles(state, latestValues, options, transformTemplate) {
    const { style, vars, transform, transformOrigin } = state;
    // Track whether we encounter any transform or transformOrigin values.
    let hasTransform = false;
    let hasTransformOrigin = false;
    // Does the calculated transform essentially equal "none"?
    let transformIsNone = true;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept seperately for further processing.
     */
    for (const key in latestValues) {
        const value = latestValues[key];
        /**
         * If this is a CSS variable we don't do any further processing.
         */
        if (isCSSVariableName(key)) {
            vars[key] = value;
            continue;
        }
        // Convert the value to its default value type, ie 0 -> "0px"
        const valueType = numberValueTypes[key];
        const valueAsType = getValueAsType(value, valueType);
        if (transformProps.has(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            transform[key] = valueAsType;
            // If we already know we have a non-default transform, early return
            if (!transformIsNone)
                continue;
            // Otherwise check to see if this is a default transform
            if (value !== (valueType.default || 0))
                transformIsNone = false;
        }
        else if (key.startsWith("origin")) {
            // If this is a transform origin, flag and enable further transform-origin processing
            hasTransformOrigin = true;
            transformOrigin[key] = valueAsType;
        }
        else {
            style[key] = valueAsType;
        }
    }
    if (!latestValues.transform) {
        if (hasTransform || transformTemplate) {
            style.transform = buildTransform(state.transform, options, transformIsNone, transformTemplate);
        }
        else if (style.transform) {
            /**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */
            style.transform = "none";
        }
    }
    /**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */
    if (hasTransformOrigin) {
        const { originX = "50%", originY = "50%", originZ = 0, } = transformOrigin;
        style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
const createHtmlRenderState = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/use-props.mjs






function copyRawValuesOnly(target, source, props) {
    for (const key in source) {
        if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues({ transformTemplate }, visualState, isStatic) {
    return (0,react_.useMemo)(() => {
        const state = createHtmlRenderState();
        buildHTMLStyles(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
        return Object.assign({}, state.vars, state.style);
    }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
    const styleProp = props.style || {};
    const style = {};
    /**
     * Copy non-Motion Values straight into style
     */
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
    return props.transformValues ? props.transformValues(style) : style;
}
function useHTMLProps(props, visualState, isStatic) {
    // The `any` isn't ideal but it is the type of createElement props argument
    const htmlProps = {};
    const style = useStyle(props, visualState, isStatic);
    if (props.drag && props.dragListener !== false) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect =
            style.WebkitUserSelect =
                style.WebkitTouchCallout =
                    "none";
        // Disable scrolling on the draggable direction
        style.touchAction =
            props.drag === true
                ? "none"
                : `pan-${props.drag === "x" ? "y" : "x"}`;
    }
    if (props.tabIndex === undefined &&
        (props.onTap || props.onTapStart || props.whileTap)) {
        htmlProps.tabIndex = 0;
    }
    htmlProps.style = style;
    return htmlProps;
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs + 1 modules
var filter_props = __webpack_require__(71668);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs


function calcOrigin(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : px.transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return `${pxOriginX} ${pxOriginY}`;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/path.mjs


const dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
const camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    const keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = px.transform(-offset);
    // Build the dash array
    const pathLength = px.transform(length);
    const pathSpacing = px.transform(spacing);
    attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs




/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, { attrX, attrY, attrScale, originX, originY, pathLength, pathSpacing = 1, pathOffset = 0, 
// This is object creation, which we try to avoid per-frame.
...latest }, options, isSVGTag, transformTemplate) {
    buildHTMLStyles(state, latest, options, transformTemplate);
    /**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */
    if (isSVGTag) {
        if (state.style.viewBox) {
            state.attrs.viewBox = state.style.viewBox;
        }
        return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style, dimensions } = state;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        if (dimensions)
            style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions &&
        (originX !== undefined || originY !== undefined || style.transform)) {
        style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Render attrX/attrY/attrScale as attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    if (attrScale !== undefined)
        attrs.scale = attrScale;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) {
        buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs


const createSvgRenderState = () => ({
    ...createHtmlRenderState(),
    attrs: {},
});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
const isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/use-props.mjs






function useSVGProps(props, visualState, _isStatic, Component) {
    const visualProps = (0,react_.useMemo)(() => {
        const state = createSvgRenderState();
        buildSVGAttrs(state, visualState, { enableHardwareAcceleration: false }, isSVGTag(Component), props.transformTemplate);
        return {
            ...state.attrs,
            style: { ...state.style },
        };
    }, [visualState]);
    if (props.style) {
        const rawStyles = {};
        copyRawValuesOnly(rawStyles, props.style, props);
        visualProps.style = { ...rawStyles, ...visualProps.style };
    }
    return visualProps;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/use-render.mjs







function createUseRender(forwardMotionProps = false) {
    const useRender = (Component, props, projectionId, ref, { latestValues }, isStatic) => {
        const useVisualProps = isSVGComponent(Component)
            ? useSVGProps
            : useHTMLProps;
        const visualProps = useVisualProps(props, latestValues, isStatic, Component);
        const filteredProps = (0,filter_props/* filterProps */.L)(props, typeof Component === "string", forwardMotionProps);
        const elementProps = {
            ...filteredProps,
            ...visualProps,
            ref,
        };
        /**
         * If component has been handed a motion value as its child,
         * memoise its initial value and render that. Subsequent updates
         * will be handled by the onChange handler
         */
        const { children } = props;
        const renderedChildren = (0,react_.useMemo)(() => (isMotionValue(children) ? children.get() : children), [children]);
        if (projectionId) {
            elementProps["data-projection-id"] = projectionId;
        }
        return (0,react_.createElement)(Component, {
            ...elementProps,
            children: renderedChildren,
        });
    };
    return useRender;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
/**
 * Convert camelCase to dash-case properties.
 */
const camelToDash = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    // Loop over any CSS variables and assign those.
    for (const key in vars) {
        element.style.setProperty(key, vars[key]);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
/**
 * A set of attribute names that are always read/written as camel case.
 */
const camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
]);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs




function renderSVG(element, renderState, _styleProp, projection) {
    renderHTML(element, renderState, undefined, projection);
    for (const key in renderState.attrs) {
        element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs



function scrapeMotionValuesFromProps(props, prevProps) {
    const { style } = props;
    const newValues = {};
    for (const key in style) {
        if (isMotionValue(style[key]) ||
            (prevProps.style && isMotionValue(prevProps.style[key])) ||
            isForcedMotionValue(key, props)) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs




function scrape_motion_values_scrapeMotionValuesFromProps(props, prevProps) {
    const newValues = scrapeMotionValuesFromProps(props, prevProps);
    for (const key in props) {
        if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
            const targetKey = transformPropOrder.indexOf(key) !== -1
                ? "attr" + key.charAt(0).toUpperCase() + key.substring(1)
                : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
function resolveVariantFromProps(props, definition, custom, currentValues = {}, currentVelocity = {}) {
    /**
     * If the variant definition is a function, resolve.
     */
    if (typeof definition === "function") {
        definition = definition(custom !== undefined ? custom : props.custom, currentValues, currentVelocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */
    if (typeof definition === "string") {
        definition = props.variants && props.variants[definition];
    }
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */
    if (typeof definition === "function") {
        definition = definition(custom !== undefined ? custom : props.custom, currentValues, currentVelocity);
    }
    return definition;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
const isKeyframesTarget = (v) => {
    return Array.isArray(v);
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/resolve-value.mjs


const isCustomValue = (v) => {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
const resolveFinalValueInKeyframes = (v) => {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs



/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */
function resolveMotionValue(value) {
    const unwrappedValue = isMotionValue(value) ? value.get() : value;
    return isCustomValue(unwrappedValue)
        ? unwrappedValue.toValue()
        : unwrappedValue;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs









function makeState({ scrapeMotionValuesFromProps, createRenderState, onMount, }, props, context, presenceContext) {
    const state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState(),
    };
    if (onMount) {
        state.mount = (instance) => onMount(props, instance, state);
    }
    return state;
}
const makeUseVisualState = (config) => (props, isStatic) => {
    const context = (0,react_.useContext)(MotionContext);
    const presenceContext = (0,react_.useContext)(context_PresenceContext/* PresenceContext */.O);
    const make = () => makeState(config, props, context, presenceContext);
    return isStatic ? make() : (0,use_constant/* useConstant */.h)(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    const values = {};
    const motionValues = scrapeMotionValues(props, {});
    for (const key in motionValues) {
        values[key] = resolveMotionValue(motionValues[key]);
    }
    let { initial, animate } = props;
    const isControllingVariants$1 = isControllingVariants(props);
    const isVariantNode$1 = isVariantNode(props);
    if (context &&
        isVariantNode$1 &&
        !isControllingVariants$1 &&
        props.inherit !== false) {
        if (initial === undefined)
            initial = context.initial;
        if (animate === undefined)
            animate = context.animate;
    }
    let isInitialAnimationBlocked = presenceContext
        ? presenceContext.initial === false
        : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    const variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet &&
        typeof variantToSet !== "boolean" &&
        !isAnimationControls(variantToSet)) {
        const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
        list.forEach((definition) => {
            const resolved = resolveVariantFromProps(props, definition);
            if (!resolved)
                return;
            const { transitionEnd, transition, ...target } = resolved;
            for (const key in target) {
                let valueTarget = target[key];
                if (Array.isArray(valueTarget)) {
                    /**
                     * Take final keyframe if the initial animation is blocked because
                     * we want to initialise at the end of that blocked animation.
                     */
                    const index = isInitialAnimationBlocked
                        ? valueTarget.length - 1
                        : 0;
                    valueTarget = valueTarget[index];
                }
                if (valueTarget !== null) {
                    values[key] = valueTarget;
                }
            }
            for (const key in transitionEnd)
                values[key] = transitionEnd[key];
        });
    }
    return values;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/config-motion.mjs







const svgMotionConfig = {
    useVisualState: makeUseVisualState({
        scrapeMotionValuesFromProps: scrape_motion_values_scrapeMotionValuesFromProps,
        createRenderState: createSvgRenderState,
        onMount: (props, instance, { renderState, latestValues }) => {
            try {
                renderState.dimensions =
                    typeof instance.getBBox ===
                        "function"
                        ? instance.getBBox()
                        : instance.getBoundingClientRect();
            }
            catch (e) {
                // Most likely trying to measure an unrendered element under Firefox
                renderState.dimensions = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                };
            }
            buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, isSVGTag(instance.tagName), props.transformTemplate);
            renderSVG(instance, renderState);
        },
    }),
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/config-motion.mjs




const htmlMotionConfig = {
    useVisualState: makeUseVisualState({
        scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
        createRenderState: createHtmlRenderState,
    }),
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs





function create_config_createDomMotionConfig(Component, { forwardMotionProps = false }, preloadedFeatures, createVisualElement) {
    const baseConfig = isSVGComponent(Component)
        ? svgMotionConfig
        : htmlMotionConfig;
    return {
        ...baseConfig,
        preloadedFeatures,
        useRender: createUseRender(forwardMotionProps),
        createVisualElement,
        Component,
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = { passive: true }) {
    target.addEventListener(eventName, handler, options);
    return () => target.removeEventListener(eventName, handler);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs
const isPrimaryPointer = (event) => {
    if (event.pointerType === "mouse") {
        return typeof event.button !== "number" || event.button <= 0;
    }
    else {
        /**
         * isPrimary is true for all mice buttons, whereas every touch point
         * is regarded as its own input. So subsequent concurrent touch points
         * will be false.
         *
         * Specifically match against false here as incomplete versions of
         * PointerEvents in very old browser might have it set as undefined.
         */
        return event.isPrimary !== false;
    }
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/events/event-info.mjs


function extractEventInfo(event, pointType = "page") {
    return {
        point: {
            x: event[pointType + "X"],
            y: event[pointType + "Y"],
        },
    };
}
const addPointerInfo = (handler) => {
    return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs



function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, eventName, addPointerInfo(handler), options);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/pipe.mjs
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
const combineFunctions = (a, b) => (v) => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs
function createLock(name) {
    let lock = null;
    return () => {
        const openLock = () => {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
const globalHorizontalLock = createLock("dragHorizontal");
const globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    let lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    }
    else if (drag === "x") {
        lock = globalHorizontalLock();
    }
    else {
        const openHorizontal = globalHorizontalLock();
        const openVertical = globalVerticalLock();
        if (openHorizontal && openVertical) {
            lock = () => {
                openHorizontal();
                openVertical();
            };
        }
        else {
            // Release the locks because we don't use them
            if (openHorizontal)
                openHorizontal();
            if (openVertical)
                openVertical();
        }
    }
    return lock;
}
function isDragActive() {
    // Check the gesture lock - if we get it, it means no drag gesture is active
    // and we can safely fire the tap gesture.
    const openGestureLock = getGlobalLock(true);
    if (!openGestureLock)
        return true;
    openGestureLock();
    return false;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/Feature.mjs
class Feature {
    constructor(node) {
        this.isMounted = false;
        this.node = node;
    }
    update() { }
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/frameloop/index.mjs + 1 modules
var frameloop = __webpack_require__(95827);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/hover.mjs






function addHoverEvent(node, isActive) {
    const eventName = "pointer" + (isActive ? "enter" : "leave");
    const callbackName = "onHover" + (isActive ? "Start" : "End");
    const handleEvent = (event, info) => {
        if (event.type === "touch" || isDragActive())
            return;
        const props = node.getProps();
        if (node.animationState && props.whileHover) {
            node.animationState.setActive("whileHover", isActive);
        }
        if (props[callbackName]) {
            frameloop/* frame.update */.Wi.update(() => props[callbackName](event, info));
        }
    };
    return addPointerEvent(node.current, eventName, handleEvent, {
        passive: !node.getProps()[callbackName],
    });
}
class HoverGesture extends Feature {
    mount() {
        this.unmount = pipe(addHoverEvent(this.node, true), addHoverEvent(this.node, false));
    }
    unmount() { }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/focus.mjs




class FocusGesture extends Feature {
    constructor() {
        super(...arguments);
        this.isActive = false;
    }
    onFocus() {
        let isFocusVisible = false;
        /**
         * If this element doesn't match focus-visible then don't
         * apply whileHover. But, if matches throws that focus-visible
         * is not a valid selector then in that browser outline styles will be applied
         * to the element by default and we want to match that behaviour with whileFocus.
         */
        try {
            isFocusVisible = this.node.current.matches(":focus-visible");
        }
        catch (e) {
            isFocusVisible = true;
        }
        if (!isFocusVisible || !this.node.animationState)
            return;
        this.node.animationState.setActive("whileFocus", true);
        this.isActive = true;
    }
    onBlur() {
        if (!this.isActive || !this.node.animationState)
            return;
        this.node.animationState.setActive("whileFocus", false);
        this.isActive = false;
    }
    mount() {
        this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() { }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
const isNodeOrChild = (parent, child) => {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/noop.mjs
var noop = __webpack_require__(39002);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/press.mjs










function fireSyntheticPointerEvent(name, handler) {
    if (!handler)
        return;
    const syntheticPointerEvent = new PointerEvent("pointer" + name);
    handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
}
class PressGesture extends Feature {
    constructor() {
        super(...arguments);
        this.removeStartListeners = noop/* noop */.Z;
        this.removeEndListeners = noop/* noop */.Z;
        this.removeAccessibleListeners = noop/* noop */.Z;
        this.startPointerPress = (startEvent, startInfo) => {
            this.removeEndListeners();
            if (this.isPressing)
                return;
            const props = this.node.getProps();
            const endPointerPress = (endEvent, endInfo) => {
                if (!this.checkPressEnd())
                    return;
                const { onTap, onTapCancel } = this.node.getProps();
                frameloop/* frame.update */.Wi.update(() => {
                    /**
                     * We only count this as a tap gesture if the event.target is the same
                     * as, or a child of, this component's element
                     */
                    !isNodeOrChild(this.node.current, endEvent.target)
                        ? onTapCancel && onTapCancel(endEvent, endInfo)
                        : onTap && onTap(endEvent, endInfo);
                });
            };
            const removePointerUpListener = addPointerEvent(window, "pointerup", endPointerPress, { passive: !(props.onTap || props["onPointerUp"]) });
            const removePointerCancelListener = addPointerEvent(window, "pointercancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo), { passive: !(props.onTapCancel || props["onPointerCancel"]) });
            this.removeEndListeners = pipe(removePointerUpListener, removePointerCancelListener);
            this.startPress(startEvent, startInfo);
        };
        this.startAccessiblePress = () => {
            const handleKeydown = (keydownEvent) => {
                if (keydownEvent.key !== "Enter" || this.isPressing)
                    return;
                const handleKeyup = (keyupEvent) => {
                    if (keyupEvent.key !== "Enter" || !this.checkPressEnd())
                        return;
                    fireSyntheticPointerEvent("up", (event, info) => {
                        const { onTap } = this.node.getProps();
                        if (onTap) {
                            frameloop/* frame.update */.Wi.update(() => onTap(event, info));
                        }
                    });
                };
                this.removeEndListeners();
                this.removeEndListeners = addDomEvent(this.node.current, "keyup", handleKeyup);
                fireSyntheticPointerEvent("down", (event, info) => {
                    this.startPress(event, info);
                });
            };
            const removeKeydownListener = addDomEvent(this.node.current, "keydown", handleKeydown);
            const handleBlur = () => {
                if (!this.isPressing)
                    return;
                fireSyntheticPointerEvent("cancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo));
            };
            const removeBlurListener = addDomEvent(this.node.current, "blur", handleBlur);
            this.removeAccessibleListeners = pipe(removeKeydownListener, removeBlurListener);
        };
    }
    startPress(event, info) {
        this.isPressing = true;
        const { onTapStart, whileTap } = this.node.getProps();
        /**
         * Ensure we trigger animations before firing event callback
         */
        if (whileTap && this.node.animationState) {
            this.node.animationState.setActive("whileTap", true);
        }
        if (onTapStart) {
            frameloop/* frame.update */.Wi.update(() => onTapStart(event, info));
        }
    }
    checkPressEnd() {
        this.removeEndListeners();
        this.isPressing = false;
        const props = this.node.getProps();
        if (props.whileTap && this.node.animationState) {
            this.node.animationState.setActive("whileTap", false);
        }
        return !isDragActive();
    }
    cancelPress(event, info) {
        if (!this.checkPressEnd())
            return;
        const { onTapCancel } = this.node.getProps();
        if (onTapCancel) {
            frameloop/* frame.update */.Wi.update(() => onTapCancel(event, info));
        }
    }
    mount() {
        const props = this.node.getProps();
        const removePointerListener = addPointerEvent(this.node.current, "pointerdown", this.startPointerPress, { passive: !(props.onTapStart || props["onPointerStart"]) });
        const removeFocusListener = addDomEvent(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = pipe(removePointerListener, removeFocusListener);
    }
    unmount() {
        this.removeStartListeners();
        this.removeEndListeners();
        this.removeAccessibleListeners();
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */
const observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */
const observers = new WeakMap();
const fireObserverCallback = (entry) => {
    const callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
};
const fireAllObserverCallbacks = (entries) => {
    entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
    const lookupRoot = root || document;
    /**
     * If we don't have an observer lookup map for this root, create one.
     */
    if (!observers.has(lookupRoot)) {
        observers.set(lookupRoot, {});
    }
    const rootObservers = observers.get(lookupRoot);
    const key = JSON.stringify(options);
    /**
     * If we don't have an observer for this combination of root and settings,
     * create one.
     */
    if (!rootObservers[key]) {
        rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
    }
    return rootObservers[key];
}
function observeIntersection(element, options, callback) {
    const rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return () => {
        observerCallbacks.delete(element);
        rootInteresectionObserver.unobserve(element);
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs



const thresholdNames = {
    some: 0,
    all: 1,
};
class InViewFeature extends Feature {
    constructor() {
        super(...arguments);
        this.hasEnteredView = false;
        this.isInView = false;
    }
    startObserver() {
        this.unmount();
        const { viewport = {} } = this.node.getProps();
        const { root, margin: rootMargin, amount = "some", once } = viewport;
        const options = {
            root: root ? root.current : undefined,
            rootMargin,
            threshold: typeof amount === "number" ? amount : thresholdNames[amount],
        };
        const onIntersectionUpdate = (entry) => {
            const { isIntersecting } = entry;
            /**
             * If there's been no change in the viewport state, early return.
             */
            if (this.isInView === isIntersecting)
                return;
            this.isInView = isIntersecting;
            /**
             * Handle hasEnteredView. If this is only meant to run once, and
             * element isn't visible, early return. Otherwise set hasEnteredView to true.
             */
            if (once && !isIntersecting && this.hasEnteredView) {
                return;
            }
            else if (isIntersecting) {
                this.hasEnteredView = true;
            }
            if (this.node.animationState) {
                this.node.animationState.setActive("whileInView", isIntersecting);
            }
            /**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */
            const { onViewportEnter, onViewportLeave } = this.node.getProps();
            const callback = isIntersecting ? onViewportEnter : onViewportLeave;
            callback && callback(entry);
        };
        return observeIntersection(this.node.current, options, onIntersectionUpdate);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver === "undefined")
            return;
        const { props, prevProps } = this.node;
        const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
        if (hasOptionsChanged) {
            this.startObserver();
        }
    }
    unmount() { }
}
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
    return (name) => viewport[name] !== prevViewport[name];
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/gestures.mjs





const gestureAnimations = {
    inView: {
        Feature: InViewFeature,
    },
    tap: {
        Feature: PressGesture,
    },
    focus: {
        Feature: FocusGesture,
    },
    hover: {
        Feature: HoverGesture,
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
        return false;
    const prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (let i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs


/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */
function getCurrent(visualElement) {
    const current = {};
    visualElement.values.forEach((value, key) => (current[key] = value.get()));
    return current;
}
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */
function getVelocity(visualElement) {
    const velocity = {};
    visualElement.values.forEach((value, key) => (velocity[key] = value.getVelocity()));
    return velocity;
}
function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== undefined ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs


const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/errors.mjs
var errors = __webpack_require__(97456);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/time-conversion.mjs
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
const secondsToMilliseconds = (seconds) => seconds * 1000;
const millisecondsToSeconds = (milliseconds) => milliseconds / 1000;



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
const instantAnimationState = {
    current: false,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs
const isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs


function isWaapiSupportedEasing(easing) {
    return Boolean(!easing ||
        (typeof easing === "string" && supportedWaapiEasing[easing]) ||
        isBezierDefinition(easing) ||
        (Array.isArray(easing) && easing.every(isWaapiSupportedEasing)));
}
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
    circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
    backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
    backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99]),
};
function mapEasingToNativeEasing(easing) {
    if (!easing)
        return undefined;
    return isBezierDefinition(easing)
        ? cubicBezierAsString(easing)
        : Array.isArray(easing)
            ? easing.map(mapEasingToNativeEasing)
            : supportedWaapiEasing[easing];
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs


function animateStyle(element, valueName, keyframes, { delay = 0, duration, repeat = 0, repeatType = "loop", ease, times, } = {}) {
    const keyframeOptions = { [valueName]: keyframes };
    if (times)
        keyframeOptions.offset = times;
    const easing = mapEasingToNativeEasing(ease);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */
    if (Array.isArray(easing))
        keyframeOptions.easing = easing;
    return element.animate(keyframeOptions, {
        delay,
        duration,
        easing: !Array.isArray(easing) ? easing : "linear",
        fill: "both",
        iterations: repeat + 1,
        direction: repeatType === "reverse" ? "alternate" : "normal",
    });
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/waapi/supports.mjs
const featureTests = {
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
};
const results = {};
const supports = {};
/**
 * Generate features tests that cache their results.
 */
for (const key in featureTests) {
    supports[key] = () => {
        if (results[key] === undefined)
            results[key] = featureTests[key]();
        return results[key];
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }) {
    const index = repeat && repeatType !== "loop" && repeat % 2 === 1
        ? 0
        : keyframes.length - 1;
    return keyframes[index];
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs


/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) *
    t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        }
        else {
            lowerBound = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2)
        return noop/* noop */.Z;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/ease.mjs


const easeIn = cubicBezier(0.42, 0, 1, 1);
const easeOut = cubicBezier(0, 0, 0.58, 1);
const easeInOut = cubicBezier(0.42, 0, 0.58, 1);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs
const isEasingArray = (ease) => {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs
// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
const mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs
// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
const reverseEasing = (easing) => (p) => 1 - easing(1 - p);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/circ.mjs



const circIn = (p) => 1 - Math.sin(Math.acos(p));
const circOut = reverseEasing(circIn);
const circInOut = mirrorEasing(circOut);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/back.mjs




const backOut = cubicBezier(0.33, 1.53, 0.69, 0.99);
const backIn = reverseEasing(backOut);
const backInOut = mirrorEasing(backIn);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/anticipate.mjs


const anticipate = (p) => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/utils/map.mjs








const easingLookup = {
    linear: noop/* noop */.Z,
    easeIn: easeIn,
    easeInOut: easeInOut,
    easeOut: easeOut,
    circIn: circIn,
    circInOut: circInOut,
    circOut: circOut,
    backIn: backIn,
    backInOut: backInOut,
    backOut: backOut,
    anticipate: anticipate,
};
const easingDefinitionToFunction = (definition) => {
    if (Array.isArray(definition)) {
        // If cubic bezier definition, create bezier curve
        (0,errors/* invariant */.k)(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
        const [x1, y1, x2, y2] = definition;
        return cubicBezier(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        (0,errors/* invariant */.k)(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`);
        return easingLookup[definition];
    }
    return definition;
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/color/utils.mjs


/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */
const isColorString = (type, testProp) => (v) => {
    return Boolean((isString(v) && singleColorRegex.test(v) && v.startsWith(type)) ||
        (testProp && Object.prototype.hasOwnProperty.call(v, testProp)));
};
const splitColor = (aName, bName, cName) => (v) => {
    if (!isString(v))
        return v;
    const [a, b, c, alpha] = v.match(floatRegex);
    return {
        [aName]: parseFloat(a),
        [bName]: parseFloat(b),
        [cName]: parseFloat(c),
        alpha: alpha !== undefined ? parseFloat(alpha) : 1,
    };
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/color/rgba.mjs





const clampRgbUnit = (v) => clamp(0, 255, v);
const rgbUnit = {
    ...number,
    transform: (v) => Math.round(clampRgbUnit(v)),
};
const rgba = {
    test: isColorString("rgb", "red"),
    parse: splitColor("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" +
        rgbUnit.transform(red) +
        ", " +
        rgbUnit.transform(green) +
        ", " +
        rgbUnit.transform(blue) +
        ", " +
        sanitize(alpha.transform(alpha$1)) +
        ")",
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/color/hex.mjs



function parseHex(v) {
    let r = "";
    let g = "";
    let b = "";
    let a = "";
    // If we have 6 characters, ie #FF0000
    if (v.length > 5) {
        r = v.substring(1, 3);
        g = v.substring(3, 5);
        b = v.substring(5, 7);
        a = v.substring(7, 9);
        // Or we have 3 characters, ie #F00
    }
    else {
        r = v.substring(1, 2);
        g = v.substring(2, 3);
        b = v.substring(3, 4);
        a = v.substring(4, 5);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
    };
}
const hex = {
    test: isColorString("#"),
    parse: parseHex,
    transform: rgba.transform,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/color/hsla.mjs





const hsla = {
    test: isColorString("hsl", "hue"),
    parse: splitColor("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
        return ("hsla(" +
            Math.round(hue) +
            ", " +
            percent.transform(sanitize(saturation)) +
            ", " +
            percent.transform(sanitize(lightness)) +
            ", " +
            sanitize(alpha.transform(alpha$1)) +
            ")");
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/color/index.mjs





const color = {
    test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
    parse: (v) => {
        if (rgba.test(v)) {
            return rgba.parse(v);
        }
        else if (hsla.test(v)) {
            return hsla.parse(v);
        }
        else {
            return hex.parse(v);
        }
    },
    transform: (v) => {
        return isString(v)
            ? v
            : v.hasOwnProperty("red")
                ? rgba.transform(v)
                : hsla.transform(v);
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/mix.mjs
/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/
const mix = (from, to, progress) => -progress * from + progress * to + from;



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs
// Adapted from https://gist.github.com/mjackson/5311256
function hueToRgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
        red = green = blue = lightness;
    }
    else {
        const q = lightness < 0.5
            ? lightness * (1 + saturation)
            : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha,
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/mix-color.mjs







// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    return Math.sqrt(Math.max(0, v * (to * to - fromExpo) + fromExpo));
};
const colorTypes = [hex, rgba, hsla];
const getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color) {
    const type = getColorType(color);
    (0,errors/* invariant */.k)(Boolean(type), `'${color}' is not an animatable color. Use the equivalent color code instead.`);
    let model = type.parse(color);
    if (type === hsla) {
        // TODO Remove this cast - needed since Framer Motion's stricter typing
        model = hslaToRgba(model);
    }
    return model;
}
const mixColor = (from, to) => {
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    const blended = { ...fromRGBA };
    return (v) => {
        blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
        blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
        blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
        blended.alpha = mix(fromRGBA.alpha, toRGBA.alpha, v);
        return rgba.transform(blended);
    };
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/complex/index.mjs




const colorToken = "${c}";
const numberToken = "${n}";
function test(v) {
    var _a, _b;
    return (isNaN(v) &&
        isString(v) &&
        (((_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) +
            (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) >
            0);
}
function analyseComplexValue(v) {
    if (typeof v === "number")
        v = `${v}`;
    const values = [];
    let numColors = 0;
    let numNumbers = 0;
    const colors = v.match(colorRegex);
    if (colors) {
        numColors = colors.length;
        // Strip colors from input so they're not picked up by number regex.
        // There's a better way to combine these regex searches, but its beyond my regex skills
        v = v.replace(colorRegex, colorToken);
        values.push(...colors.map(color.parse));
    }
    const numbers = v.match(floatRegex);
    if (numbers) {
        numNumbers = numbers.length;
        v = v.replace(floatRegex, numberToken);
        values.push(...numbers.map(number.parse));
    }
    return { values, numColors, numNumbers, tokenised: v };
}
function parse(v) {
    return analyseComplexValue(v).values;
}
function createTransformer(source) {
    const { values, numColors, tokenised } = analyseComplexValue(source);
    const numValues = values.length;
    return (v) => {
        let output = tokenised;
        for (let i = 0; i < numValues; i++) {
            output = output.replace(i < numColors ? colorToken : numberToken, i < numColors
                ? color.transform(v[i])
                : sanitize(v[i]));
        }
        return output;
    };
}
const convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
    const parsed = parse(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
const complex = { test, parse, createTransformer, getAnimatableNone };



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/mix-complex.mjs







function getMixer(origin, target) {
    if (typeof origin === "number") {
        return (v) => mix(origin, target, v);
    }
    else if (color.test(origin)) {
        return mixColor(origin, target);
    }
    else {
        return mixComplex(origin, target);
    }
}
const mixArray = (from, to) => {
    const output = [...from];
    const numValues = output.length;
    const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
    return (v) => {
        for (let i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
const mixObject = (origin, target) => {
    const output = { ...origin, ...target };
    const blendValue = {};
    for (const key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return (v) => {
        for (const key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
const mixComplex = (origin, target) => {
    const template = complex.createTransformer(target);
    const originStats = analyseComplexValue(origin);
    const targetStats = analyseComplexValue(target);
    const canInterpolate = originStats.numColors === targetStats.numColors &&
        originStats.numNumbers >= targetStats.numNumbers;
    if (canInterpolate) {
        return pipe(mixArray(originStats.values, targetStats.values), template);
    }
    else {
        (0,errors/* warning */.K)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
        return (p) => `${p > 0 ? target : origin}`;
    }
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/progress.mjs
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/
const progress = (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/interpolate.mjs










const mixNumber = (from, to) => (p) => mix(from, to, p);
function detectMixerFactory(v) {
    if (typeof v === "number") {
        return mixNumber;
    }
    else if (typeof v === "string") {
        if (color.test(v)) {
            return mixColor;
        }
        else {
            return mixComplex;
        }
    }
    else if (Array.isArray(v)) {
        return mixArray;
    }
    else if (typeof v === "object") {
        return mixObject;
    }
    return mixNumber;
}
function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || detectMixerFactory(output[0]);
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] || noop/* noop */.Z : ease;
            mixer = pipe(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    (0,errors/* invariant */.k)(inputLength === output.length, "Both input and output ranges must be the same length");
    /**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */
    if (inputLength === 1)
        return () => output[0];
    // If input runs highest -> lowest, reverse both arrays
    if (input[0] > input[inputLength - 1]) {
        input = [...input].reverse();
        output = [...output].reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const numMixers = mixers.length;
    const interpolator = (v) => {
        let i = 0;
        if (numMixers > 1) {
            for (; i < input.length - 2; i++) {
                if (v < input[i + 1])
                    break;
            }
        }
        const progressInRange = progress(input[i], input[i + 1], v);
        return mixers[i](progressInRange);
    };
    return isClamp
        ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v))
        : interpolator;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/offsets/fill.mjs



function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
        const offsetProgress = progress(0, remaining, i);
        offset.push(mix(min, 1, offsetProgress));
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/offsets/default.mjs


function defaultOffset(arr) {
    const offset = [0];
    fillOffset(offset, arr.length - 1);
    return offset;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs







function defaultEasing(values, easing) {
    return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut", }) {
    /**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */
    const easingFunctions = isEasingArray(ease)
        ? ease.map(easingDefinitionToFunction)
        : easingDefinitionToFunction(ease);
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = {
        done: false,
        value: keyframeValues[0],
    };
    /**
     * Create a times array based on the provided 0-1 offsets
     */
    const absoluteTimes = convertOffsetToTimes(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length
        ? times
        : defaultOffset(keyframeValues), duration);
    const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
        ease: Array.isArray(easingFunctions)
            ? easingFunctions
            : defaultEasing(keyframeValues, easingFunctions),
    });
    return {
        calculatedDuration: duration,
        next: (t) => {
            state.value = mapTimeToKeyframe(t);
            state.done = t >= duration;
            return state;
        },
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs


const velocitySampleDuration = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - velocitySampleDuration, 0);
    return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs




const safeMin = 0.001;
const minDuration = 0.01;
const maxDuration = 10.0;
const minDamping = 0.05;
const maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1, }) {
    let envelope;
    let derivative;
    (0,errors/* warning */.K)(duration <= secondsToMilliseconds(maxDuration), "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    /**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */
    dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
    duration = clamp(minDuration, maxDuration, millisecondsToSeconds(duration));
    if (dampingRatio < 1) {
        /**
         * Underdamped spring
         */
        envelope = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - (a / b) * c;
        };
        derivative = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return (factor * ((d - e) * f)) / g;
        };
    }
    else {
        /**
         * Critically-damped spring
         */
        envelope = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = secondsToMilliseconds(duration);
    if (isNaN(undampedFreq)) {
        return {
            stiffness: 100,
            damping: 10,
            duration,
        };
    }
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration,
        };
    }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs




const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = {
        velocity: 0.0,
        stiffness: 100,
        damping: 10,
        mass: 1.0,
        isResolvedFromDuration: false,
        ...options,
    };
    // stiffness/damping/mass overrides duration/bounce
    if (!isSpringType(options, physicsKeys) &&
        isSpringType(options, durationKeys)) {
        const derived = findSpring(options);
        springOptions = {
            ...springOptions,
            ...derived,
            velocity: 0.0,
            mass: 1.0,
        };
        springOptions.isResolvedFromDuration = true;
    }
    return springOptions;
}
function spring({ keyframes, restDelta, restSpeed, ...options }) {
    const origin = keyframes[0];
    const target = keyframes[keyframes.length - 1];
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = { done: false, value: origin };
    const { stiffness, damping, mass, velocity, duration, isResolvedFromDuration, } = getSpringOptions(options);
    const initialVelocity = velocity ? -millisecondsToSeconds(velocity) : 0.0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
    /**
     * If we're working on a granular scale, use smaller defaults for determining
     * when the spring is finished.
     *
     * These defaults have been selected emprically based on what strikes a good
     * ratio between feeling good and finishing as soon as changes are imperceptible.
     */
    const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);
    restDelta || (restDelta = isGranularScale ? 0.005 : 0.5);
    let resolveSpring;
    if (dampingRatio < 1) {
        const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
        // Underdamped spring
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return (target -
                envelope *
                    (((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) /
                        angularFreq) *
                        Math.sin(angularFreq * t) +
                        initialDelta * Math.cos(angularFreq * t)));
        };
    }
    else if (dampingRatio === 1) {
        // Critically damped spring
        resolveSpring = (t) => target -
            Math.exp(-undampedAngularFreq * t) *
                (initialDelta +
                    (initialVelocity + undampedAngularFreq * initialDelta) * t);
    }
    else {
        // Overdamped spring
        const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            // When performing sinh or cosh values can hit Infinity so we cap them here
            const freqForT = Math.min(dampedAngularFreq * t, 300);
            return (target -
                (envelope *
                    ((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) *
                        Math.sinh(freqForT) +
                        dampedAngularFreq *
                            initialDelta *
                            Math.cosh(freqForT))) /
                    dampedAngularFreq);
        };
    }
    return {
        calculatedDuration: isResolvedFromDuration ? duration || null : null,
        next: (t) => {
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                let currentVelocity = initialVelocity;
                if (t !== 0) {
                    /**
                     * We only need to calculate velocity for under-damped springs
                     * as over- and critically-damped springs can't overshoot, so
                     * checking only for displacement is enough.
                     */
                    if (dampingRatio < 1) {
                        currentVelocity = calcGeneratorVelocity(resolveSpring, t, current);
                    }
                    else {
                        currentVelocity = 0;
                    }
                }
                const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
                state.done =
                    isBelowVelocityThreshold && isBelowDisplacementThreshold;
            }
            else {
                state.done = t >= duration;
            }
            state.value = state.done ? target : current;
            return state;
        },
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/generators/inertia.mjs



function inertia({ keyframes, velocity = 0.0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed, }) {
    const origin = keyframes[0];
    const state = {
        done: false,
        value: origin,
    };
    const isOutOfBounds = (v) => (min !== undefined && v < min) || (max !== undefined && v > max);
    const nearestBoundary = (v) => {
        if (min === undefined)
            return max;
        if (max === undefined)
            return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */
    if (target !== ideal)
        amplitude = target - origin;
    const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
    const calcLatest = (t) => target + calcDelta(t);
    const applyFriction = (t) => {
        const delta = calcDelta(t);
        const latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDelta;
        state.value = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */
    let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t) => {
        if (!isOutOfBounds(state.value))
            return;
        timeReachedBoundary = t;
        spring$1 = spring({
            keyframes: [state.value, nearestBoundary(state.value)],
            velocity: calcGeneratorVelocity(calcLatest, t, state.value),
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDelta,
            restSpeed,
        });
    };
    checkCatchBoundary(0);
    return {
        calculatedDuration: null,
        next: (t) => {
            /**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */
            let hasUpdatedFrame = false;
            if (!spring$1 && timeReachedBoundary === undefined) {
                hasUpdatedFrame = true;
                applyFriction(t);
                checkCatchBoundary(t);
            }
            /**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */
            if (timeReachedBoundary !== undefined && t > timeReachedBoundary) {
                return spring$1.next(t - timeReachedBoundary);
            }
            else {
                !hasUpdatedFrame && applyFriction(t);
                return state;
            }
        },
    };
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/frameloop/data.mjs
var data = __webpack_require__(42891);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/js/driver-frameloop.mjs



const frameloopDriver = (update) => {
    const passTimestamp = ({ timestamp }) => update(timestamp);
    return {
        start: () => frameloop/* frame.update */.Wi.update(passTimestamp, true),
        stop: () => (0,frameloop/* cancelFrame */.Pn)(passTimestamp),
        /**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */
        now: () => data/* frameData.isProcessing */.w.isProcessing ? data/* frameData.timestamp */.w.timestamp : performance.now(),
    };
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while (!state.done && duration < maxGeneratorDuration) {
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/js/index.mjs









const types = {
    decay: inertia,
    inertia: inertia,
    tween: keyframes,
    keyframes: keyframes,
    spring: spring,
};
/**
 * Animate a single value on the main thread.
 *
 * This function is written, where functionality overlaps,
 * to be largely spec-compliant with WAAPI to allow fungibility
 * between the two.
 */
function animateValue({ autoplay = true, delay = 0, driver = frameloopDriver, keyframes: keyframes$1, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", onPlay, onStop, onComplete, onUpdate, ...options }) {
    let speed = 1;
    let hasStopped = false;
    let resolveFinishedPromise;
    let currentFinishedPromise;
    /**
     * Create a new finished Promise every time we enter the
     * finished state and resolve the old Promise. This is
     * WAAPI-compatible behaviour.
     */
    const updateFinishedPromise = () => {
        resolveFinishedPromise && resolveFinishedPromise();
        currentFinishedPromise = new Promise((resolve) => {
            resolveFinishedPromise = resolve;
        });
    };
    // Create the first finished promise
    updateFinishedPromise();
    let animationDriver;
    const generatorFactory = types[type] || keyframes;
    /**
     * If this isn't the keyframes generator and we've been provided
     * strings as keyframes, we need to interpolate these.
     * TODO: Support velocity for units and complex value types/
     */
    let mapNumbersToKeyframes;
    if (generatorFactory !== keyframes &&
        typeof keyframes$1[0] !== "number") {
        mapNumbersToKeyframes = interpolate([0, 100], keyframes$1, {
            clamp: false,
        });
        keyframes$1 = [0, 100];
    }
    const generator = generatorFactory({ ...options, keyframes: keyframes$1 });
    let mirroredGenerator;
    if (repeatType === "mirror") {
        mirroredGenerator = generatorFactory({
            ...options,
            keyframes: [...keyframes$1].reverse(),
            velocity: -(options.velocity || 0),
        });
    }
    let playState = "idle";
    let holdTime = null;
    let startTime = null;
    let cancelTime = null;
    /**
     * If duration is undefined and we have repeat options,
     * we need to calculate a duration from the generator.
     *
     * We set it to the generator itself to cache the duration.
     * Any timeline resolver will need to have already precalculated
     * the duration by this step.
     */
    if (generator.calculatedDuration === null && repeat) {
        generator.calculatedDuration = calcGeneratorDuration(generator);
    }
    const { calculatedDuration } = generator;
    let resolvedDuration = Infinity;
    let totalDuration = Infinity;
    if (calculatedDuration !== null) {
        resolvedDuration = calculatedDuration + repeatDelay;
        totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
    }
    let currentTime = 0;
    const tick = (timestamp) => {
        if (startTime === null)
            return;
        /**
         * requestAnimationFrame timestamps can come through as lower than
         * the startTime as set by performance.now(). Here we prevent this,
         * though in the future it could be possible to make setting startTime
         * a pending operation that gets resolved here.
         */
        if (speed > 0)
            startTime = Math.min(startTime, timestamp);
        if (holdTime !== null) {
            currentTime = holdTime;
        }
        else {
            currentTime = (timestamp - startTime) * speed;
        }
        // Rebase on delay
        const timeWithoutDelay = currentTime - delay;
        const isInDelayPhase = timeWithoutDelay < 0;
        currentTime = Math.max(timeWithoutDelay, 0);
        /**
         * If this animation has finished, set the current time
         * to the total duration.
         */
        if (playState === "finished" && holdTime === null) {
            currentTime = totalDuration;
        }
        let elapsed = currentTime;
        let frameGenerator = generator;
        if (repeat) {
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */
            const progress = currentTime / resolvedDuration;
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */
            let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */
            let iterationProgress = progress % 1.0;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */
            if (!iterationProgress && progress >= 1) {
                iterationProgress = 1;
            }
            iterationProgress === 1 && currentIteration--;
            currentIteration = Math.min(currentIteration, repeat + 1);
            /**
             * Reverse progress if we're not running in "normal" direction
             */
            const iterationIsOdd = Boolean(currentIteration % 2);
            if (iterationIsOdd) {
                if (repeatType === "reverse") {
                    iterationProgress = 1 - iterationProgress;
                    if (repeatDelay) {
                        iterationProgress -= repeatDelay / resolvedDuration;
                    }
                }
                else if (repeatType === "mirror") {
                    frameGenerator = mirroredGenerator;
                }
            }
            let p = clamp(0, 1, iterationProgress);
            if (currentTime > totalDuration) {
                p = repeatType === "reverse" && iterationIsOdd ? 1 : 0;
            }
            elapsed = p * resolvedDuration;
        }
        /**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */
        const state = isInDelayPhase
            ? { done: false, value: keyframes$1[0] }
            : frameGenerator.next(elapsed);
        if (mapNumbersToKeyframes) {
            state.value = mapNumbersToKeyframes(state.value);
        }
        let { done } = state;
        if (!isInDelayPhase && calculatedDuration !== null) {
            done = currentTime >= totalDuration;
        }
        const isAnimationFinished = holdTime === null &&
            (playState === "finished" ||
                (playState === "running" && done) ||
                (speed < 0 && currentTime <= 0));
        if (onUpdate) {
            onUpdate(state.value);
        }
        if (isAnimationFinished) {
            finish();
        }
        return state;
    };
    const stopAnimationDriver = () => {
        animationDriver && animationDriver.stop();
        animationDriver = undefined;
    };
    const cancel = () => {
        playState = "idle";
        stopAnimationDriver();
        updateFinishedPromise();
        startTime = cancelTime = null;
    };
    const finish = () => {
        playState = "finished";
        onComplete && onComplete();
        stopAnimationDriver();
        updateFinishedPromise();
    };
    const play = () => {
        if (hasStopped)
            return;
        if (!animationDriver)
            animationDriver = driver(tick);
        const now = animationDriver.now();
        onPlay && onPlay();
        if (holdTime !== null) {
            startTime = now - holdTime;
        }
        else if (!startTime || playState === "finished") {
            startTime = now;
        }
        cancelTime = startTime;
        holdTime = null;
        /**
         * Set playState to running only after we've used it in
         * the previous logic.
         */
        playState = "running";
        animationDriver.start();
    };
    if (autoplay) {
        play();
    }
    const controls = {
        then(resolve, reject) {
            return currentFinishedPromise.then(resolve, reject);
        },
        get time() {
            return millisecondsToSeconds(currentTime);
        },
        set time(newTime) {
            newTime = secondsToMilliseconds(newTime);
            currentTime = newTime;
            if (holdTime !== null || !animationDriver || speed === 0) {
                holdTime = newTime;
            }
            else {
                startTime = animationDriver.now() - newTime / speed;
            }
        },
        get duration() {
            const duration = generator.calculatedDuration === null
                ? calcGeneratorDuration(generator)
                : generator.calculatedDuration;
            return millisecondsToSeconds(duration);
        },
        get speed() {
            return speed;
        },
        set speed(newSpeed) {
            if (newSpeed === speed || !animationDriver)
                return;
            speed = newSpeed;
            controls.time = millisecondsToSeconds(currentTime);
        },
        get state() {
            return playState;
        },
        play,
        pause: () => {
            playState = "paused";
            holdTime = currentTime;
        },
        stop: () => {
            hasStopped = true;
            if (playState === "idle")
                return;
            playState = "idle";
            onStop && onStop();
            cancel();
        },
        cancel: () => {
            if (cancelTime !== null)
                tick(cancelTime);
            cancel();
        },
        complete: () => {
            playState = "finished";
        },
        sample: (elapsed) => {
            startTime = 0;
            return tick(elapsed);
        },
    };
    return controls;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/waapi/create-accelerated-animation.mjs








/**
 * A list of values that can be hardware-accelerated.
 */
const acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
]);
/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */
const sampleDelta = 10; //ms
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const create_accelerated_animation_maxDuration = 20000;
const requiresPregeneratedKeyframes = (valueName, options) => options.type === "spring" ||
    valueName === "backgroundColor" ||
    !isWaapiSupportedEasing(options.ease);
function createAcceleratedAnimation(value, valueName, { onUpdate, onComplete, ...options }) {
    const canAccelerateAnimation = supports.waapi() &&
        acceleratedValues.has(valueName) &&
        !options.repeatDelay &&
        options.repeatType !== "mirror" &&
        options.damping !== 0 &&
        options.type !== "inertia";
    if (!canAccelerateAnimation)
        return false;
    /**
     * TODO: Unify with js/index
     */
    let hasStopped = false;
    let resolveFinishedPromise;
    let currentFinishedPromise;
    /**
     * Create a new finished Promise every time we enter the
     * finished state and resolve the old Promise. This is
     * WAAPI-compatible behaviour.
     */
    const updateFinishedPromise = () => {
        currentFinishedPromise = new Promise((resolve) => {
            resolveFinishedPromise = resolve;
        });
    };
    // Create the first finished promise
    updateFinishedPromise();
    let { keyframes, duration = 300, ease, times } = options;
    /**
     * If this animation needs pre-generated keyframes then generate.
     */
    if (requiresPregeneratedKeyframes(valueName, options)) {
        const sampleAnimation = animateValue({
            ...options,
            repeat: 0,
            delay: 0,
        });
        let state = { done: false, value: keyframes[0] };
        const pregeneratedKeyframes = [];
        /**
         * Bail after 20 seconds of pre-generated keyframes as it's likely
         * we're heading for an infinite loop.
         */
        let t = 0;
        while (!state.done && t < create_accelerated_animation_maxDuration) {
            state = sampleAnimation.sample(t);
            pregeneratedKeyframes.push(state.value);
            t += sampleDelta;
        }
        times = undefined;
        keyframes = pregeneratedKeyframes;
        duration = t - sampleDelta;
        ease = "linear";
    }
    const animation = animateStyle(value.owner.current, valueName, keyframes, {
        ...options,
        duration,
        /**
         * This function is currently not called if ease is provided
         * as a function so the cast is safe.
         *
         * However it would be possible for a future refinement to port
         * in easing pregeneration from Motion One for browsers that
         * support the upcoming `linear()` easing function.
         */
        ease: ease,
        times,
    });
    const cancelAnimation = () => animation.cancel();
    const safeCancel = () => {
        frameloop/* frame.update */.Wi.update(cancelAnimation);
        resolveFinishedPromise();
        updateFinishedPromise();
    };
    /**
     * Prefer the `onfinish` prop as it's more widely supported than
     * the `finished` promise.
     *
     * Here, we synchronously set the provided MotionValue to the end
     * keyframe. If we didn't, when the WAAPI animation is finished it would
     * be removed from the element which would then revert to its old styles.
     */
    animation.onfinish = () => {
        value.set(getFinalKeyframe(keyframes, options));
        onComplete && onComplete();
        safeCancel();
    };
    /**
     * Animation interrupt callback.
     */
    return {
        then(resolve, reject) {
            return currentFinishedPromise.then(resolve, reject);
        },
        get time() {
            return millisecondsToSeconds(animation.currentTime || 0);
        },
        set time(newTime) {
            animation.currentTime = secondsToMilliseconds(newTime);
        },
        get speed() {
            return animation.playbackRate;
        },
        set speed(newSpeed) {
            animation.playbackRate = newSpeed;
        },
        get duration() {
            return millisecondsToSeconds(duration);
        },
        play: () => {
            if (hasStopped)
                return;
            animation.play();
            /**
             * Cancel any pending cancel tasks
             */
            (0,frameloop/* cancelFrame */.Pn)(cancelAnimation);
        },
        pause: () => animation.pause(),
        stop: () => {
            hasStopped = true;
            if (animation.playState === "idle")
                return;
            /**
             * WAAPI doesn't natively have any interruption capabilities.
             *
             * Rather than read commited styles back out of the DOM, we can
             * create a renderless JS animation and sample it twice to calculate
             * its current value, "previous" value, and therefore allow
             * Motion to calculate velocity for any subsequent animation.
             */
            const { currentTime } = animation;
            if (currentTime) {
                const sampleAnimation = animateValue({
                    ...options,
                    autoplay: false,
                });
                value.setWithVelocity(sampleAnimation.sample(currentTime - sampleDelta).value, sampleAnimation.sample(currentTime).value, sampleDelta);
            }
            safeCancel();
        },
        complete: () => animation.finish(),
        cancel: safeCancel,
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/instant.mjs



function createInstantAnimation({ keyframes, delay, onUpdate, onComplete, }) {
    const setValue = () => {
        onUpdate && onUpdate(keyframes[keyframes.length - 1]);
        onComplete && onComplete();
        /**
         * TODO: As this API grows it could make sense to always return
         * animateValue. This will be a bigger project as animateValue
         * is frame-locked whereas this function resolves instantly.
         * This is a behavioural change and also has ramifications regarding
         * assumptions within tests.
         */
        return {
            time: 0,
            speed: 1,
            duration: 0,
            play: (noop/* noop */.Z),
            pause: (noop/* noop */.Z),
            stop: (noop/* noop */.Z),
            then: (resolve) => {
                resolve();
                return Promise.resolve();
            },
            cancel: (noop/* noop */.Z),
            complete: (noop/* noop */.Z),
        };
    };
    return delay
        ? animateValue({
            keyframes: [0, 1],
            duration: 0,
            delay,
            onComplete: setValue,
        })
        : setValue();
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs


const underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10,
};
const criticallyDampedSpring = (target) => ({
    type: "spring",
    stiffness: 550,
    damping: target === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
});
const keyframesTransition = {
    type: "keyframes",
    duration: 0.8,
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */
const ease = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3,
};
const getDefaultTransition = (valueKey, { keyframes }) => {
    if (keyframes.length > 2) {
        return keyframesTransition;
    }
    else if (transformProps.has(valueKey)) {
        return valueKey.startsWith("scale")
            ? criticallyDampedSpring(keyframes[1])
            : underDampedSpring;
    }
    return ease;
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs


/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
const isAnimatable = (key, value) => {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (key === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        complex.test(value) && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/complex/filter.mjs



/**
 * Properties that should default to 1 or 100%
 */
const maxDefaults = new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow")
        return v;
    const [number] = value.match(floatRegex) || [];
    if (!number)
        return v;
    const unit = value.replace(number, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value)
        defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /([a-z-]*)\(.*?\)/g;
const filter = {
    ...complex,
    getAnimatableNone: (v) => {
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs




/**
 * A map of default value types for common values
 */
const defaultValueTypes = {
    ...numberValueTypes,
    // Color props
    color: color,
    backgroundColor: color,
    outlineColor: color,
    fill: color,
    stroke: color,
    // Border props
    borderColor: color,
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    filter: filter,
    WebkitFilter: filter,
};
/**
 * Gets the default ValueType for the provided value key
 */
const getDefaultValueType = (key) => defaultValueTypes[key];



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs




function animatable_none_getAnimatableNone(key, value) {
    let defaultValueType = getDefaultValueType(key);
    if (defaultValueType !== filter)
        defaultValueType = complex;
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return defaultValueType.getAnimatableNone
        ? defaultValueType.getAnimatableNone(value)
        : undefined;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs


/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
    return !!Object.keys(transition).length;
}
function isZero(value) {
    return (value === 0 ||
        (typeof value === "string" &&
            parseFloat(value) === 0 &&
            value.indexOf(" ") === -1));
}
function getZeroUnit(potentialUnitType) {
    return typeof potentialUnitType === "number"
        ? 0
        : animatable_none_getAnimatableNone("", potentialUnitType);
}
function getValueTransition(transition, key) {
    return transition[key] || transition["default"] || transition;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/wildcards.mjs
function fillWildcardKeyframes(origin, [...keyframes]) {
    /**
     * Ensure an wildcard keyframes are hydrated by the origin.
     */
    for (let i = 0; i < keyframes.length; i++) {
        if (keyframes[i] === null) {
            keyframes[i] = i === 0 ? origin : keyframes[i - 1];
        }
    }
    return keyframes;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/keyframes.mjs





function getKeyframes(value, valueName, target, transition) {
    const isTargetAnimatable = isAnimatable(valueName, target);
    let origin = transition.from !== undefined ? transition.from : value.get();
    if (origin === "none" && isTargetAnimatable && typeof target === "string") {
        /**
         * If we're trying to animate from "none", try and get an animatable version
         * of the target. This could be improved to work both ways.
         */
        origin = animatable_none_getAnimatableNone(valueName, target);
    }
    else if (isZero(origin) && typeof target === "string") {
        origin = getZeroUnit(target);
    }
    else if (!Array.isArray(target) &&
        isZero(target) &&
        typeof origin === "string") {
        target = getZeroUnit(origin);
    }
    /**
     * If the target has been defined as a series of keyframes
     */
    if (Array.isArray(target)) {
        return fillWildcardKeyframes(origin, target);
    }
    else {
        return [origin, target];
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs











const animateMotionValue = (valueName, value, target, transition = {}) => {
    return (onComplete) => {
        const valueTransition = getValueTransition(transition, valueName) || {};
        /**
         * Most transition values are currently completely overwritten by value-specific
         * transitions. In the future it'd be nicer to blend these transitions. But for now
         * delay actually does inherit from the root transition if not value-specific.
         */
        const delay = valueTransition.delay || transition.delay || 0;
        /**
         * Elapsed isn't a public transition option but can be passed through from
         * optimized appear effects in milliseconds.
         */
        let { elapsed = 0 } = transition;
        elapsed = elapsed - secondsToMilliseconds(delay);
        const keyframes = getKeyframes(value, valueName, target, valueTransition);
        /**
         * Check if we're able to animate between the start and end keyframes,
         * and throw a warning if we're attempting to animate between one that's
         * animatable and another that isn't.
         */
        const originKeyframe = keyframes[0];
        const targetKeyframe = keyframes[keyframes.length - 1];
        const isOriginAnimatable = isAnimatable(valueName, originKeyframe);
        const isTargetAnimatable = isAnimatable(valueName, targetKeyframe);
        (0,errors/* warning */.K)(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${valueName} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
        let options = {
            keyframes,
            velocity: value.getVelocity(),
            ease: "easeOut",
            ...valueTransition,
            delay: -elapsed,
            onUpdate: (v) => {
                value.set(v);
                valueTransition.onUpdate && valueTransition.onUpdate(v);
            },
            onComplete: () => {
                onComplete();
                valueTransition.onComplete && valueTransition.onComplete();
            },
        };
        /**
         * If there's no transition defined for this value, we can generate
         * unqiue transition settings for this value.
         */
        if (!isTransitionDefined(valueTransition)) {
            options = {
                ...options,
                ...getDefaultTransition(valueName, options),
            };
        }
        /**
         * Both WAAPI and our internal animation functions use durations
         * as defined by milliseconds, while our external API defines them
         * as seconds.
         */
        if (options.duration) {
            options.duration = secondsToMilliseconds(options.duration);
        }
        if (options.repeatDelay) {
            options.repeatDelay = secondsToMilliseconds(options.repeatDelay);
        }
        if (!isOriginAnimatable ||
            !isTargetAnimatable ||
            instantAnimationState.current ||
            valueTransition.type === false) {
            /**
             * If we can't animate this value, or the global instant animation flag is set,
             * or this is simply defined as an instant transition, return an instant transition.
             */
            return createInstantAnimation(options);
        }
        /**
         * Animate via WAAPI if possible.
         */
        if (value.owner &&
            value.owner.current instanceof HTMLElement &&
            !value.owner.getProps().onUpdate) {
            const acceleratedAnimation = createAcceleratedAnimation(value, valueName, options);
            if (acceleratedAnimation)
                return acceleratedAnimation;
        }
        /**
         * If we didn't create an accelerated animation, create a JS animation
         */
        return animateValue(options);
    };
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-will-change/is.mjs


function isWillChangeMotionValue(value) {
    return Boolean(isMotionValue(value) && value.add);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
const isNumericalString = (v) => /^\-?\d*\.?\d+$/.test(v);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */
const isZeroValueString = (v) => /^0[^.\s]+$/.test(v);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/array.mjs
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1)
        arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1)
        arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs


class SubscriptionManager {
    constructor() {
        this.subscriptions = [];
    }
    add(handler) {
        addUniqueItem(this.subscriptions, handler);
        return () => removeItem(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions)
            return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */
            this.subscriptions[0](a, b, c);
        }
        else {
            for (let i = 0; i < numSubscriptions; i++) {
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */
                const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/index.mjs






const isFloat = (value) => {
    return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
class MotionValue {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    constructor(init, options = {}) {
        /**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */
        this.version = "10.12.2";
        /**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */
        this.timeDelta = 0;
        /**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */
        this.lastUpdated = 0;
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = false;
        /**
         * An object containing a SubscriptionManager for each active event.
         */
        this.events = {};
        this.updateAndNotify = (v, render = true) => {
            this.prev = this.current;
            this.current = v;
            // Update timestamp
            const { delta, timestamp } = data/* frameData */.w;
            if (this.lastUpdated !== timestamp) {
                this.timeDelta = delta;
                this.lastUpdated = timestamp;
                frameloop/* frame.postRender */.Wi.postRender(this.scheduleVelocityCheck);
            }
            // Update update subscribers
            if (this.prev !== this.current && this.events.change) {
                this.events.change.notify(this.current);
            }
            // Update velocity subscribers
            if (this.events.velocityChange) {
                this.events.velocityChange.notify(this.getVelocity());
            }
            // Update render subscribers
            if (render && this.events.renderRequest) {
                this.events.renderRequest.notify(this.current);
            }
        };
        /**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.scheduleVelocityCheck = () => frameloop/* frame.postRender */.Wi.postRender(this.velocityCheck);
        /**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.velocityCheck = ({ timestamp }) => {
            if (timestamp !== this.lastUpdated) {
                this.prev = this.current;
                if (this.events.velocityChange) {
                    this.events.velocityChange.notify(this.getVelocity());
                }
            }
        };
        this.hasAnimated = false;
        this.prev = this.current = init;
        this.canTrackVelocity = isFloat(this.current);
        this.owner = options.owner;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(subscription) {
        if (false) {}
        return this.on("change", subscription);
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new SubscriptionManager();
        }
        const unsubscribe = this.events[eventName].add(callback);
        if (eventName === "change") {
            return () => {
                unsubscribe();
                /**
                 * If we have no more change listeners by the start
                 * of the next frame, stop active animations.
                 */
                frameloop/* frame.read */.Wi.read(() => {
                    if (!this.events.change.getSize()) {
                        this.stop();
                    }
                });
            };
        }
        return unsubscribe;
    }
    clearListeners() {
        for (const eventManagers in this.events) {
            this.events[eventManagers].clear();
        }
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    attach(passiveEffect, stopPassiveEffect) {
        this.passiveEffect = passiveEffect;
        this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(v, render = true) {
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    }
    setWithVelocity(prev, current, delta) {
        this.set(current);
        this.prev = prev;
        this.timeDelta = delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(v) {
        this.updateAndNotify(v);
        this.prev = v;
        this.stop();
        if (this.stopPassiveEffect)
            this.stopPassiveEffect();
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
        return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
        return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
        // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
        return this.canTrackVelocity
            ? // These casts could be avoided if parseFloat would be typed better
                velocityPerSecond(parseFloat(this.current) -
                    parseFloat(this.prev), this.timeDelta)
            : 0;
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    start(startAnimation) {
        this.stop();
        return new Promise((resolve) => {
            this.hasAnimated = true;
            this.animation = startAnimation(resolve);
            if (this.events.animationStart) {
                this.events.animationStart.notify();
            }
        }).then(() => {
            if (this.events.animationComplete) {
                this.events.animationComplete.notify();
            }
            this.clearAnimation();
        });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
        if (this.animation) {
            this.animation.stop();
            if (this.events.animationCancel) {
                this.events.animationCancel.notify();
            }
        }
        this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
        this.clearListeners();
        this.stop();
        if (this.stopPassiveEffect) {
            this.stopPassiveEffect();
        }
    }
}
function motionValue(init, options) {
    return new MotionValue(init, options);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
/**
 * Tests a provided value against a ValueType
 */
const testValueType = (v) => (type) => type.test(v);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
/**
 * ValueType for "auto"
 */
const auto = {
    test: (v) => v === "auto",
    parse: (v) => v,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs





/**
 * A list of value types commonly used for dimensions
 */
const dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
const findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs





/**
 * A list of all ValueTypes
 */
const valueTypes = [...dimensionValueTypes, color, complex];
/**
 * Tests a value against the list of ValueTypes
 */
const findValueType = (v) => valueTypes.find(testValueType(v));



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/setters.mjs









/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    }
    else {
        visualElement.addValue(key, motionValue(value));
    }
}
function setTarget(visualElement, definition) {
    const resolved = resolveVariant(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {};
    target = { ...target, ...transitionEnd };
    for (const key in target) {
        const value = resolveFinalValueInKeyframes(target[key]);
        setMotionValue(visualElement, key, value);
    }
}
function setVariants(visualElement, variantLabels) {
    const reversedLabels = [...variantLabels].reverse();
    reversedLabels.forEach((key) => {
        const variant = visualElement.getVariant(key);
        variant && setTarget(visualElement, variant);
        if (visualElement.variantChildren) {
            visualElement.variantChildren.forEach((child) => {
                setVariants(child, variantLabels);
            });
        }
    });
}
function setValues(visualElement, definition) {
    if (Array.isArray(definition)) {
        return setVariants(visualElement, definition);
    }
    else if (typeof definition === "string") {
        return setVariants(visualElement, [definition]);
    }
    else {
        setTarget(visualElement, definition);
    }
}
function checkTargetForNewValues(visualElement, target, origin) {
    var _a, _b;
    const newValueKeys = Object.keys(target).filter((key) => !visualElement.hasValue(key));
    const numNewValues = newValueKeys.length;
    if (!numNewValues)
        return;
    for (let i = 0; i < numNewValues; i++) {
        const key = newValueKeys[i];
        const targetValue = target[key];
        let value = null;
        /**
         * If the target is a series of keyframes, we can use the first value
         * in the array. If this first value is null, we'll still need to read from the DOM.
         */
        if (Array.isArray(targetValue)) {
            value = targetValue[0];
        }
        /**
         * If the target isn't keyframes, or the first keyframe was null, we need to
         * first check if an origin value was explicitly defined in the transition as "from",
         * if not read the value from the DOM. As an absolute fallback, take the defined target value.
         */
        if (value === null) {
            value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
        }
        /**
         * If value is still undefined or null, ignore it. Preferably this would throw,
         * but this was causing issues in Framer.
         */
        if (value === undefined || value === null)
            continue;
        if (typeof value === "string" &&
            (isNumericalString(value) || isZeroValueString(value))) {
            // If this is a number read as a string, ie "0" or "200", convert it to a number
            value = parseFloat(value);
        }
        else if (!findValueType(value) && complex.test(targetValue)) {
            value = animatable_none_getAnimatableNone(key, targetValue);
        }
        visualElement.addValue(key, motionValue(value, { owner: visualElement }));
        if (origin[key] === undefined) {
            origin[key] = value;
        }
        if (value !== null)
            visualElement.setBaseTarget(key, value);
    }
}
function getOriginFromTransition(key, transition) {
    if (!transition)
        return;
    const valueTransition = transition[key] || transition["default"] || transition;
    return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
    const origin = {};
    for (const key in target) {
        const transitionOrigin = getOriginFromTransition(key, transition);
        if (transitionOrigin !== undefined) {
            origin[key] = transitionOrigin;
        }
        else {
            const value = visualElement.getValue(key);
            if (value) {
                origin[key] = value.get();
            }
        }
    }
    return origin;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs







/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}
function animateTarget(visualElement, definition, { delay = 0, transitionOverride, type } = {}) {
    let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = visualElement.makeTargetAnimatable(definition);
    const willChange = visualElement.getValue("willChange");
    if (transitionOverride)
        transition = transitionOverride;
    const animations = [];
    const animationTypeState = type &&
        visualElement.animationState &&
        visualElement.animationState.getState()[type];
    for (const key in target) {
        const value = visualElement.getValue(key);
        const valueTarget = target[key];
        if (!value ||
            valueTarget === undefined ||
            (animationTypeState &&
                shouldBlockAnimation(animationTypeState, key))) {
            continue;
        }
        const valueTransition = { delay, elapsed: 0, ...transition };
        /**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */
        if (window.HandoffAppearAnimations && !value.hasAnimated) {
            const appearId = visualElement.getProps()[optimizedAppearDataAttribute];
            if (appearId) {
                valueTransition.elapsed = window.HandoffAppearAnimations(appearId, key, value, frameloop/* frame */.Wi);
            }
        }
        value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && transformProps.has(key)
            ? { type: false }
            : valueTransition));
        const animation = value.animation;
        if (isWillChangeMotionValue(willChange)) {
            willChange.add(key);
            animation.then(() => willChange.remove(key));
        }
        animations.push(animation);
    }
    if (transitionEnd) {
        Promise.all(animations).then(() => {
            transitionEnd && setTarget(visualElement, transitionEnd);
        });
    }
    return animations;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs



function animateVariant(visualElement, variant, options = {}) {
    const resolved = resolveVariant(visualElement, variant, options.custom);
    let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
    if (options.transitionOverride) {
        transition = options.transitionOverride;
    }
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    const getAnimation = resolved
        ? () => Promise.all(animateTarget(visualElement, resolved, options))
        : () => Promise.resolve();
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size
        ? (forwardDelay = 0) => {
            const { delayChildren = 0, staggerChildren, staggerDirection, } = transition;
            return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
        }
        : () => Promise.resolve();
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */
    const { when } = transition;
    if (when) {
        const [first, last] = when === "beforeChildren"
            ? [getAnimation, getChildAnimations]
            : [getChildAnimations, getAnimation];
        return first().then(() => last());
    }
    else {
        return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
    }
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
    const animations = [];
    const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
    const generateStaggerDuration = staggerDirection === 1
        ? (i = 0) => i * staggerChildren
        : (i = 0) => maxStaggerDuration - i * staggerChildren;
    Array.from(visualElement.variantChildren)
        .sort(sortByTreeOrder)
        .forEach((child, i) => {
        child.notify("AnimationStart", variant);
        animations.push(animateVariant(child, variant, {
            ...options,
            delay: delayChildren + generateStaggerDuration(i),
        }).then(() => child.notify("AnimationComplete", variant)));
    });
    return Promise.all(animations);
}
function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs




function animateVisualElement(visualElement, definition, options = {}) {
    visualElement.notify("AnimationStart", definition);
    let animation;
    if (Array.isArray(definition)) {
        const animations = definition.map((variant) => animateVariant(visualElement, variant, options));
        animation = Promise.all(animations);
    }
    else if (typeof definition === "string") {
        animation = animateVariant(visualElement, definition, options);
    }
    else {
        const resolvedDefinition = typeof definition === "function"
            ? resolveVariant(visualElement, definition, options.custom)
            : definition;
        animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
    }
    return animation.then(() => visualElement.notify("AnimationComplete", definition));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs








const reversePriorityOrder = [...variantPriorityOrder].reverse();
const numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
    return (animations) => Promise.all(animations.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
    let animate = animateList(visualElement);
    const state = createState();
    let isInitialRender = true;
    /**
     * This function will be used to reduce the animation definitions for
     * each active animation type into an object of resolved values for it.
     */
    const buildResolvedTypeValues = (acc, definition) => {
        const resolved = resolveVariant(visualElement, definition);
        if (resolved) {
            const { transition, transitionEnd, ...target } = resolved;
            acc = { ...acc, ...target, ...transitionEnd };
        }
        return acc;
    };
    /**
     * This just allows us to inject mocked animation functions
     * @internal
     */
    function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    /**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */
    function animateChanges(options, changedActiveType) {
        const props = visualElement.getProps();
        const context = visualElement.getVariantContext(true) || {};
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */
        const animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */
        const removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */
        let encounteredKeys = {};
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */
        let removedVariantIndex = Infinity;
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */
        for (let i = 0; i < numAnimationTypes; i++) {
            const type = reversePriorityOrder[i];
            const typeState = state[type];
            const prop = props[type] !== undefined ? props[type] : context[type];
            const propIsVariant = isVariantLabel(prop);
            /**
             * If this type has *just* changed isActive status, set activeDelta
             * to that status. Otherwise set to null.
             */
            const activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false)
                removedVariantIndex = i;
            /**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */
            let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
            /**
             *
             */
            if (isInherited &&
                isInitialRender &&
                visualElement.manuallyAnimateOnMount) {
                isInherited = false;
            }
            /**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */
            typeState.protectedKeys = { ...encounteredKeys };
            // Check if we can skip analysing this prop early
            if (
            // If it isn't active and hasn't *just* been set as inactive
            (!typeState.isActive && activeDelta === null) ||
                // If we didn't and don't have any defined prop for this animation type
                (!prop && !typeState.prevProp) ||
                // Or if the prop doesn't define an animation
                isAnimationControls(prop) ||
                typeof prop === "boolean") {
                continue;
            }
            /**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */
            const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
            let shouldAnimateType = variantDidChange ||
                // If we're making this variant active, we want to always make it active
                (type === changedActiveType &&
                    typeState.isActive &&
                    !isInherited &&
                    propIsVariant) ||
                // If we removed a higher-priority variant (i is in reverse order)
                (i > removedVariantIndex && propIsVariant);
            /**
             * As animations can be set as variant lists, variants or target objects, we
             * coerce everything to an array if it isn't one already
             */
            const definitionList = Array.isArray(prop) ? prop : [prop];
            /**
             * Build an object of all the resolved values. We'll use this in the subsequent
             * animateChanges calls to determine whether a value has changed.
             */
            let resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
            if (activeDelta === false)
                resolvedValues = {};
            /**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */
            const { prevResolvedValues = {} } = typeState;
            const allKeys = {
                ...prevResolvedValues,
                ...resolvedValues,
            };
            const markToAnimate = (key) => {
                shouldAnimateType = true;
                removedKeys.delete(key);
                typeState.needsAnimating[key] = true;
            };
            for (const key in allKeys) {
                const next = resolvedValues[key];
                const prev = prevResolvedValues[key];
                // If we've already handled this we can just skip ahead
                if (encounteredKeys.hasOwnProperty(key))
                    continue;
                /**
                 * If the value has changed, we probably want to animate it.
                 */
                if (next !== prev) {
                    /**
                     * If both values are keyframes, we need to shallow compare them to
                     * detect whether any value has changed. If it has, we animate it.
                     */
                    if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
                        if (!shallowCompare(next, prev) || variantDidChange) {
                            markToAnimate(key);
                        }
                        else {
                            /**
                             * If it hasn't changed, we want to ensure it doesn't animate by
                             * adding it to the list of protected keys.
                             */
                            typeState.protectedKeys[key] = true;
                        }
                    }
                    else if (next !== undefined) {
                        // If next is defined and doesn't equal prev, it needs animating
                        markToAnimate(key);
                    }
                    else {
                        // If it's undefined, it's been removed.
                        removedKeys.add(key);
                    }
                }
                else if (next !== undefined && removedKeys.has(key)) {
                    /**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */
                    markToAnimate(key);
                }
                else {
                    /**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */
                    typeState.protectedKeys[key] = true;
                }
            }
            /**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */
            typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            /**
             *
             */
            if (typeState.isActive) {
                encounteredKeys = { ...encounteredKeys, ...resolvedValues };
            }
            if (isInitialRender && visualElement.blockInitialAnimation) {
                shouldAnimateType = false;
            }
            /**
             * If this is an inherited prop we want to hard-block animations
             * TODO: Test as this should probably still handle animations triggered
             * by removed values?
             */
            if (shouldAnimateType && !isInherited) {
                animations.push(...definitionList.map((animation) => ({
                    animation: animation,
                    options: { type, ...options },
                })));
            }
        }
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */
        if (removedKeys.size) {
            const fallbackAnimation = {};
            removedKeys.forEach((key) => {
                const fallbackTarget = visualElement.getBaseTarget(key);
                if (fallbackTarget !== undefined) {
                    fallbackAnimation[key] = fallbackTarget;
                }
            });
            animations.push({ animation: fallbackAnimation });
        }
        let shouldAnimate = Boolean(animations.length);
        if (isInitialRender &&
            props.initial === false &&
            !visualElement.manuallyAnimateOnMount) {
            shouldAnimate = false;
        }
        isInitialRender = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
    }
    /**
     * Change whether a certain animation type is active.
     */
    function setActive(type, isActive, options) {
        var _a;
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive)
            return Promise.resolve();
        // Propagate active change to children
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach((child) => { var _a; return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive); });
        state[type].isActive = isActive;
        const animations = animateChanges(options, type);
        for (const key in state) {
            state[key].protectedKeys = {};
        }
        return animations;
    }
    return {
        animateChanges,
        setActive,
        setAnimateFunction,
        getState: () => state,
    };
}
function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
        return next !== prev;
    }
    else if (Array.isArray(next)) {
        return !shallowCompare(next, prev);
    }
    return false;
}
function createTypeState(isActive = false) {
    return {
        isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function createState() {
    return {
        animate: createTypeState(true),
        whileInView: createTypeState(),
        whileHover: createTypeState(),
        whileTap: createTypeState(),
        whileDrag: createTypeState(),
        whileFocus: createTypeState(),
        exit: createTypeState(),
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/animation/index.mjs




class AnimationFeature extends Feature {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(node) {
        super(node);
        node.animationState || (node.animationState = createAnimationState(node));
    }
    updateAnimationControlsSubscription() {
        const { animate } = this.node.getProps();
        this.unmount();
        if (isAnimationControls(animate)) {
            this.unmount = animate.subscribe(this.node);
        }
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate } = this.node.getProps();
        const { animate: prevAnimate } = this.node.prevProps || {};
        if (animate !== prevAnimate) {
            this.updateAnimationControlsSubscription();
        }
    }
    unmount() { }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs


let exit_id = 0;
class ExitAnimationFeature extends Feature {
    constructor() {
        super(...arguments);
        this.id = exit_id++;
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const { isPresent, onExitComplete, custom } = this.node.presenceContext;
        const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || isPresent === prevIsPresent) {
            return;
        }
        const exitAnimation = this.node.animationState.setActive("exit", !isPresent, { custom: custom !== null && custom !== void 0 ? custom : this.node.getProps().custom });
        if (onExitComplete && !isPresent) {
            exitAnimation.then(() => onExitComplete(this.id));
        }
    }
    mount() {
        const { register } = this.node.presenceContext || {};
        if (register) {
            this.unmount = register(this.id);
        }
    }
    unmount() { }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/animations.mjs



const animations = {
    animation: {
        Feature: AnimationFeature,
    },
    exit: {
        Feature: ExitAnimationFeature,
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/distance.mjs
const distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
    // Multi-dimensional
    const xDelta = distance(a.x, b.x);
    const yDelta = distance(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs









/**
 * @internal
 */
class PanSession {
    constructor(event, handlers, { transformPagePoint } = {}) {
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const info = getPanInfo(this.lastMoveEventInfo, this.history);
            const isPanStarted = this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            const isDistancePastThreshold = distance2D(info.offset, { x: 0, y: 0 }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            const { point } = info;
            const { timestamp } = data/* frameData */.w;
            this.history.push({ ...point, timestamp });
            const { onStart, onMove } = this.handlers;
            if (!isPanStarted) {
                onStart && onStart(this.lastMoveEvent, info);
                this.startEvent = this.lastMoveEvent;
            }
            onMove && onMove(this.lastMoveEvent, info);
        };
        this.handlePointerMove = (event, info) => {
            this.lastMoveEvent = event;
            this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
            // Throttle mouse move event to once per frame
            frameloop/* frame.update */.Wi.update(this.updatePoint, true);
        };
        this.handlePointerUp = (event, info) => {
            this.end();
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const { onEnd, onSessionEnd } = this.handlers;
            const panInfo = getPanInfo(event.type === "pointercancel"
                ? this.lastMoveEventInfo
                : transformPoint(info, this.transformPagePoint), this.history);
            if (this.startEvent && onEnd) {
                onEnd(event, panInfo);
            }
            onSessionEnd && onSessionEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (!isPrimaryPointer(event))
            return;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        const info = extractEventInfo(event);
        const initialInfo = transformPoint(info, this.transformPagePoint);
        const { point } = initialInfo;
        const { timestamp } = data/* frameData */.w;
        this.history = [{ ...point, timestamp }];
        const { onSessionStart } = handlers;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(handlers) {
        this.handlers = handlers;
    }
    end() {
        this.removeListeners && this.removeListeners();
        (0,frameloop/* cancelFrame */.Pn)(this.updatePoint);
    }
}
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point }, history) {
    return {
        point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: PanSession_getVelocity(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function PanSession_getVelocity(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    let i = history.length - 1;
    let timestampedPoint = null;
    const lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            secondsToMilliseconds(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    const time = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    const currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs


function calcLength(axis) {
    return axis.max - axis.min;
}
function isNear(value, target = 0, maxDistance = 0.01) {
    return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
    delta.origin = origin;
    delta.originPoint = mix(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    if (isNear(delta.scale, 1, 0.0001) || isNaN(delta.scale))
        delta.scale = 1;
    delta.translate =
        mix(target.min, target.max, delta.origin) - delta.originPoint;
    if (isNear(delta.translate) || isNaN(delta.translate))
        delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : undefined);
    calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : undefined);
}
function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
    calcRelativeAxis(target.x, relative.x, parent.x);
    calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
    target.min = layout.min - parent.min;
    target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
    calcRelativeAxisPosition(target.x, layout.x, parent.x);
    calcRelativeAxisPosition(target.y, layout.y, parent.y);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs





/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, { min, max }, elastic) {
    if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic ? mix(min, point, elastic.min) : Math.max(point, min);
    }
    else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic ? mix(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined
            ? axis.max + max - (axis.max - axis.min)
            : undefined,
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    let min = constraintsAxis.min - layoutAxis.min;
    let max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min <
        layoutAxis.max - layoutAxis.min) {
        [min, max] = [max, min];
    }
    return { min, max };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
    };
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function constraints_calcOrigin(source, target) {
    let origin = 0.5;
    const sourceLength = calcLength(source);
    const targetLength = calcLength(target);
    if (targetLength > sourceLength) {
        origin = progress(target.min, target.max - sourceLength, source.min);
    }
    else if (sourceLength > targetLength) {
        origin = progress(source.min, source.max - targetLength, target.min);
    }
    return clamp(0, 1, origin);
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
    const relativeConstraints = {};
    if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
}
const defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */
function resolveDragElastic(dragElastic = defaultElastic) {
    if (dragElastic === false) {
        dragElastic = 0;
    }
    else if (dragElastic === true) {
        dragElastic = defaultElastic;
    }
    return {
        x: resolveAxisElastic(dragElastic, "left", "right"),
        y: resolveAxisElastic(dragElastic, "top", "bottom"),
    };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
        min: resolvePointElastic(dragElastic, minLabel),
        max: resolvePointElastic(dragElastic, maxLabel),
    };
}
function resolvePointElastic(dragElastic, label) {
    return typeof dragElastic === "number"
        ? dragElastic
        : dragElastic[label] || 0;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/models.mjs
const createAxisDelta = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
});
const createDelta = () => ({
    x: createAxisDelta(),
    y: createAxisDelta(),
});
const createAxis = () => ({ min: 0, max: 0 });
const createBox = () => ({
    x: createAxis(),
    y: createAxis(),
});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
    return [callback("x"), callback("y")];
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToBox({ top, left, right, bottom, }) {
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertBoxToBoundingBox({ x, y }) {
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoxPoints(point, transformPoint) {
    if (!transformPoint)
        return point;
    const topLeft = transformPoint({ x: point.left, y: point.top });
    const bottomRight = transformPoint({ x: point.right, y: point.bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale) {
    return scale === undefined || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
    return (!isIdentityScale(scale) ||
        !isIdentityScale(scaleX) ||
        !isIdentityScale(scaleY));
}
function hasTransform(values) {
    return (hasScale(values) ||
        has2DTranslate(values) ||
        values.z ||
        values.rotate ||
        values.rotateX ||
        values.rotateY);
}
function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
    return value && value !== "0%";
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs



/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    const distanceFromOrigin = point - originPoint;
    const scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength)
        return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for (let i = 0; i < treeLength; i++) {
        node = treePath[i];
        delta = node.projectionDelta;
        /**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */
        const instance = node.instance;
        if (instance &&
            instance.style &&
            instance.style.display === "contents") {
            continue;
        }
        if (isSharedTransition &&
            node.options.layoutScroll &&
            node.scroll &&
            node !== node.root) {
            transformBox(box, {
                x: -node.scroll.offset.x,
                y: -node.scroll.offset.y,
            });
        }
        if (delta) {
            // Incoporate each ancestor's scale into a culmulative treeScale for this component
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            // Apply each ancestor's calculated delta into this component's recorded layout box
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && hasTransform(node.latestValues)) {
            transformBox(box, node.latestValues);
        }
    }
    /**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */
    treeScale.x = snapToDefault(treeScale.x);
    treeScale.y = snapToDefault(treeScale.y);
}
function snapToDefault(scale) {
    if (Number.isInteger(scale))
        return scale;
    return scale > 1.0000000000001 || scale < 0.999999999999 ? scale : 1;
}
function translateAxis(axis, distance) {
    axis.min = axis.min + distance;
    axis.max = axis.max + distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function transformAxis(axis, transforms, [key, scaleKey, originKey]) {
    const axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
    const originPoint = mix(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
const xKeys = ["x", "scaleX", "originX"];
const yKeys = ["y", "scaleY", "originY"];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function transformBox(box, transform) {
    transformAxis(box.x, transform, xKeys);
    transformAxis(box.y, transform, yKeys);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/utils/measure.mjs



function measureViewportBox(instance, transformPoint) {
    return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll } = rootProjectionNode;
    if (scroll) {
        translateAxis(viewportBox.x, scroll.offset.x);
        translateAxis(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs


















const elementDragControls = new WeakMap();
/**
 *
 */
// let latestPointerEvent: PointerEvent
class VisualElementDragControls {
    constructor(visualElement) {
        // This is a reference to the global drag gesture lock, ensuring only one component
        // can "capture" the drag of one or both axes.
        // TODO: Look into moving this into pansession?
        this.openGlobalLock = null;
        this.isDragging = false;
        this.currentDirection = null;
        this.originPoint = { x: 0, y: 0 };
        /**
         * The permitted boundaries of travel, in pixels.
         */
        this.constraints = false;
        this.hasMutatedConstraints = false;
        /**
         * The per-axis resolved elastic values.
         */
        this.elastic = createBox();
        this.visualElement = visualElement;
    }
    start(originEvent, { snapToCursor = false } = {}) {
        /**
         * Don't start dragging if this component is exiting
         */
        const { presenceContext } = this.visualElement;
        if (presenceContext && presenceContext.isPresent === false)
            return;
        const onSessionStart = (event) => {
            // Stop any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            this.stopAnimation();
            if (snapToCursor) {
                this.snapToCursor(extractEventInfo(event, "page").point);
            }
        };
        const onStart = (event, info) => {
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            const { drag, dragPropagation, onDragStart } = this.getProps();
            if (drag && !dragPropagation) {
                if (this.openGlobalLock)
                    this.openGlobalLock();
                this.openGlobalLock = getGlobalLock(drag);
                // If we don 't have the lock, don't start dragging
                if (!this.openGlobalLock)
                    return;
            }
            this.isDragging = true;
            this.currentDirection = null;
            this.resolveConstraints();
            if (this.visualElement.projection) {
                this.visualElement.projection.isAnimationBlocked = true;
                this.visualElement.projection.target = undefined;
            }
            /**
             * Record gesture origin
             */
            eachAxis((axis) => {
                let current = this.getAxisMotionValue(axis).get() || 0;
                /**
                 * If the MotionValue is a percentage value convert to px
                 */
                if (percent.test(current)) {
                    const { projection } = this.visualElement;
                    if (projection && projection.layout) {
                        const measuredAxis = projection.layout.layoutBox[axis];
                        if (measuredAxis) {
                            const length = calcLength(measuredAxis);
                            current = length * (parseFloat(current) / 100);
                        }
                    }
                }
                this.originPoint[axis] = current;
            });
            // Fire onDragStart event
            if (onDragStart) {
                frameloop/* frame.update */.Wi.update(() => onDragStart(event, info), false, true);
            }
            const { animationState } = this.visualElement;
            animationState && animationState.setActive("whileDrag", true);
        };
        const onMove = (event, info) => {
            // latestPointerEvent = event
            const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag, } = this.getProps();
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !this.openGlobalLock)
                return;
            const { offset } = info;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && this.currentDirection === null) {
                this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (this.currentDirection !== null) {
                    onDirectionLock && onDirectionLock(this.currentDirection);
                }
                return;
            }
            // Update each point with the latest position
            this.updateAxis("x", info.point, offset);
            this.updateAxis("y", info.point, offset);
            /**
             * Ideally we would leave the renderer to fire naturally at the end of
             * this frame but if the element is about to change layout as the result
             * of a re-render we want to ensure the browser can read the latest
             * bounding box to ensure the pointer and element don't fall out of sync.
             */
            this.visualElement.render();
            /**
             * This must fire after the render call as it might trigger a state
             * change which itself might trigger a layout update.
             */
            onDrag && onDrag(event, info);
        };
        const onSessionEnd = (event, info) => this.stop(event, info);
        this.panSession = new PanSession(originEvent, {
            onSessionStart,
            onStart,
            onMove,
            onSessionEnd,
        }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
    }
    stop(event, info) {
        const isDragging = this.isDragging;
        this.cancel();
        if (!isDragging)
            return;
        const { velocity } = info;
        this.startAnimation(velocity);
        const { onDragEnd } = this.getProps();
        if (onDragEnd) {
            frameloop/* frame.update */.Wi.update(() => onDragEnd(event, info));
        }
    }
    cancel() {
        this.isDragging = false;
        const { projection, animationState } = this.visualElement;
        if (projection) {
            projection.isAnimationBlocked = false;
        }
        this.panSession && this.panSession.end();
        this.panSession = undefined;
        const { dragPropagation } = this.getProps();
        if (!dragPropagation && this.openGlobalLock) {
            this.openGlobalLock();
            this.openGlobalLock = null;
        }
        animationState && animationState.setActive("whileDrag", false);
    }
    updateAxis(axis, _point, offset) {
        const { drag } = this.getProps();
        // If we're not dragging this axis, do an early return.
        if (!offset || !shouldDrag(axis, drag, this.currentDirection))
            return;
        const axisValue = this.getAxisMotionValue(axis);
        let next = this.originPoint[axis] + offset[axis];
        // Apply constraints
        if (this.constraints && this.constraints[axis]) {
            next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
        }
        axisValue.set(next);
    }
    resolveConstraints() {
        const { dragConstraints, dragElastic } = this.getProps();
        const { layout } = this.visualElement.projection || {};
        const prevConstraints = this.constraints;
        if (dragConstraints && isRefObject(dragConstraints)) {
            if (!this.constraints) {
                this.constraints = this.resolveRefConstraints();
            }
        }
        else {
            if (dragConstraints && layout) {
                this.constraints = calcRelativeConstraints(layout.layoutBox, dragConstraints);
            }
            else {
                this.constraints = false;
            }
        }
        this.elastic = resolveDragElastic(dragElastic);
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative.
         */
        if (prevConstraints !== this.constraints &&
            layout &&
            this.constraints &&
            !this.hasMutatedConstraints) {
            eachAxis((axis) => {
                if (this.getAxisMotionValue(axis)) {
                    this.constraints[axis] = rebaseAxisConstraints(layout.layoutBox[axis], this.constraints[axis]);
                }
            });
        }
    }
    resolveRefConstraints() {
        const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
        if (!constraints || !isRefObject(constraints))
            return false;
        const constraintsElement = constraints.current;
        (0,errors/* invariant */.k)(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        const { projection } = this.visualElement;
        // TODO
        if (!projection || !projection.layout)
            return false;
        const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
        let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */
        if (onMeasureDragConstraints) {
            const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) {
                measuredConstraints = convertBoundingBoxToBox(userConstraints);
            }
        }
        return measuredConstraints;
    }
    startAnimation(velocity) {
        const { drag, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd, } = this.getProps();
        const constraints = this.constraints || {};
        const momentumAnimations = eachAxis((axis) => {
            if (!shouldDrag(axis, drag, this.currentDirection)) {
                return;
            }
            let transition = (constraints && constraints[axis]) || {};
            if (dragSnapToOrigin)
                transition = { min: 0, max: 0 };
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            const bounceStiffness = dragElastic ? 200 : 1000000;
            const bounceDamping = dragElastic ? 40 : 10000000;
            const inertia = {
                type: "inertia",
                velocity: dragMomentum ? velocity[axis] : 0,
                bounceStiffness,
                bounceDamping,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...dragTransition,
                ...transition,
            };
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return this.startAxisValueAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    }
    startAxisValueAnimation(axis, transition) {
        const axisValue = this.getAxisMotionValue(axis);
        return axisValue.start(animateMotionValue(axis, axisValue, 0, transition));
    }
    stopAnimation() {
        eachAxis((axis) => this.getAxisMotionValue(axis).stop());
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    getAxisMotionValue(axis) {
        const dragKey = "_drag" + axis.toUpperCase();
        const props = this.visualElement.getProps();
        const externalMotionValue = props[dragKey];
        return externalMotionValue
            ? externalMotionValue
            : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : undefined) || 0);
    }
    snapToCursor(point) {
        eachAxis((axis) => {
            const { drag } = this.getProps();
            // If we're not dragging this axis, do an early return.
            if (!shouldDrag(axis, drag, this.currentDirection))
                return;
            const { projection } = this.visualElement;
            const axisValue = this.getAxisMotionValue(axis);
            if (projection && projection.layout) {
                const { min, max } = projection.layout.layoutBox[axis];
                axisValue.set(point[axis] - mix(min, max, 0.5));
            }
        });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const { drag, dragConstraints } = this.getProps();
        const { projection } = this.visualElement;
        if (!isRefObject(dragConstraints) || !projection || !this.constraints)
            return;
        /**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */
        this.stopAnimation();
        /**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */
        const boxProgress = { x: 0, y: 0 };
        eachAxis((axis) => {
            const axisValue = this.getAxisMotionValue(axis);
            if (axisValue) {
                const latest = axisValue.get();
                boxProgress[axis] = constraints_calcOrigin({ min: latest, max: latest }, this.constraints[axis]);
            }
        });
        /**
         * Update the layout of this element and resolve the latest drag constraints
         */
        const { transformTemplate } = this.visualElement.getProps();
        this.visualElement.current.style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        projection.root && projection.root.updateScroll();
        projection.updateLayout();
        this.resolveConstraints();
        /**
         * For each axis, calculate the current progress of the layout axis
         * within the new constraints.
         */
        eachAxis((axis) => {
            if (!shouldDrag(axis, drag, null))
                return;
            /**
             * Calculate a new transform based on the previous box progress
             */
            const axisValue = this.getAxisMotionValue(axis);
            const { min, max } = this.constraints[axis];
            axisValue.set(mix(min, max, boxProgress[axis]));
        });
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        elementDragControls.set(this.visualElement, this);
        const element = this.visualElement.current;
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */
        const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
            const { drag, dragListener = true } = this.getProps();
            drag && dragListener && this.start(event);
        });
        const measureDragConstraints = () => {
            const { dragConstraints } = this.getProps();
            if (isRefObject(dragConstraints)) {
                this.constraints = this.resolveRefConstraints();
            }
        };
        const { projection } = this.visualElement;
        const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
        if (projection && !projection.layout) {
            projection.root && projection.root.updateScroll();
            projection.updateLayout();
        }
        measureDragConstraints();
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */
        const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
        /**
         * If the element's layout changes, calculate the delta and apply that to
         * the drag gesture's origin point.
         */
        const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
            if (this.isDragging && hasLayoutChanged) {
                eachAxis((axis) => {
                    const motionValue = this.getAxisMotionValue(axis);
                    if (!motionValue)
                        return;
                    this.originPoint[axis] += delta[axis].translate;
                    motionValue.set(motionValue.get() + delta[axis].translate);
                });
                this.visualElement.render();
            }
        }));
        return () => {
            stopResizeListener();
            stopPointerListener();
            stopMeasureLayoutListener();
            stopLayoutUpdateListener && stopLayoutUpdateListener();
        };
    }
    getProps() {
        const props = this.visualElement.getProps();
        const { drag = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true, } = props;
        return {
            ...props,
            drag,
            dragDirectionLock,
            dragPropagation,
            dragConstraints,
            dragElastic,
            dragMomentum,
        };
    }
}
function shouldDrag(direction, drag, currentDirection) {
    return ((drag === true || drag === direction) &&
        (currentDirection === null || currentDirection === direction));
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold = 10) {
    let direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/drag/index.mjs




class DragGesture extends Feature {
    constructor(node) {
        super(node);
        this.removeGroupControls = noop/* noop */.Z;
        this.removeListeners = noop/* noop */.Z;
        this.controls = new VisualElementDragControls(node);
    }
    mount() {
        // If we've been provided a DragControls for manual control over the drag gesture,
        // subscribe this component to it on mount.
        const { dragControls } = this.node.getProps();
        if (dragControls) {
            this.removeGroupControls = dragControls.subscribe(this.controls);
        }
        this.removeListeners = this.controls.addListeners() || noop/* noop */.Z;
    }
    unmount() {
        this.removeGroupControls();
        this.removeListeners();
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/pan/index.mjs






const asyncHandler = (handler) => (event, info) => {
    if (handler) {
        frameloop/* frame.update */.Wi.update(() => handler(event, info));
    }
};
class PanGesture extends Feature {
    constructor() {
        super(...arguments);
        this.removePointerDownListener = noop/* noop */.Z;
    }
    onPointerDown(pointerDownEvent) {
        this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
    }
    createPanHandlers() {
        const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
        return {
            onSessionStart: asyncHandler(onPanSessionStart),
            onStart: asyncHandler(onPanStart),
            onMove: onPan,
            onEnd: (event, info) => {
                delete this.session;
                if (onPanEnd) {
                    frameloop/* frame.update */.Wi.update(() => onPanEnd(event, info));
                }
            },
        };
    }
    mount() {
        this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener();
        this.session && this.session.end();
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs



/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
    const context = (0,react_.useContext)(context_PresenceContext/* PresenceContext */.O);
    if (context === null)
        return [true, null];
    const { isPresent, onExitComplete, register } = context;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    const id = (0,react_.useId)();
    (0,react_.useEffect)(() => register(id), []);
    const safeToRemove = () => onExitComplete && onExitComplete(id);
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */
function useIsPresent() {
    return isPresent(useContext(PresenceContext));
}
function isPresent(context) {
    return context === null ? true : context.isPresent;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs


function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min)
        return 0;
    return (pixels / (axis.max - axis.min)) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
const correctBorderRadius = {
    correct: (latest, node) => {
        if (!node.target)
            return latest;
        /**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */
        if (typeof latest === "string") {
            if (px.test(latest)) {
                latest = parseFloat(latest);
            }
            else {
                return latest;
            }
        }
        /**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */
        const x = pixelsToPercent(latest, node.target.x);
        const y = pixelsToPercent(latest, node.target.y);
        return `${x}% ${y}%`;
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs



/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
const cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
    const match = cssVariableRegex.exec(current);
    if (!match)
        return [,];
    const [, token, fallback] = match;
    return [token, fallback];
}
const maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
    (0,errors/* invariant */.k)(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
    const [token, fallback] = parseCSSVariable(current);
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        return resolved.trim();
    }
    else if (isCSSVariableToken(fallback)) {
        // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
        return getVariableValue(fallback, element, depth + 1);
    }
    else {
        return fallback;
    }
}
/**
 * Resolve CSS variables from
 *
 * @internal
 */
function resolveCSSVariables(visualElement, { ...target }, transitionEnd) {
    const element = visualElement.current;
    if (!(element instanceof Element))
        return { target, transitionEnd };
    // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
    // only if they change but I think this reads clearer and this isn't a performance-critical path.
    if (transitionEnd) {
        transitionEnd = { ...transitionEnd };
    }
    // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
    visualElement.values.forEach((value) => {
        const current = value.get();
        if (!isCSSVariableToken(current))
            return;
        const resolved = getVariableValue(current, element);
        if (resolved)
            value.set(resolved);
    });
    // Cycle through every target property and resolve CSS variables. Currently
    // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
    for (const key in target) {
        const current = target[key];
        if (!isCSSVariableToken(current))
            continue;
        const resolved = getVariableValue(current, element);
        if (!resolved)
            continue;
        // Clone target if it hasn't already been
        target[key] = resolved;
        if (!transitionEnd)
            transitionEnd = {};
        // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
        // CSS variable. This will ensure that after the animation the component will reflect
        // changes in the value of the CSS variable.
        if (transitionEnd[key] === undefined) {
            transitionEnd[key] = current;
        }
    }
    return { target, transitionEnd };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs




const varToken = "_$css";
const correctBoxShadow = {
    correct: (latest, { treeScale, projectionDelta }) => {
        const original = latest;
        /**
         * We need to first strip and store CSS variables from the string.
         */
        const containsCSSVariables = latest.includes("var(");
        const cssVariables = [];
        if (containsCSSVariables) {
            latest = latest.replace(cssVariableRegex, (match) => {
                cssVariables.push(match);
                return varToken;
            });
        }
        const shadow = complex.parse(latest);
        // TODO: Doesn't support multiple shadows
        if (shadow.length > 5)
            return original;
        const template = complex.createTransformer(latest);
        const offset = typeof shadow[0] !== "number" ? 1 : 0;
        // Calculate the overall context scale
        const xScale = projectionDelta.x.scale * treeScale.x;
        const yScale = projectionDelta.y.scale * treeScale.y;
        shadow[0 + offset] /= xScale;
        shadow[1 + offset] /= yScale;
        /**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */
        const averageScale = mix(xScale, yScale, 0.5);
        // Blur
        if (typeof shadow[2 + offset] === "number")
            shadow[2 + offset] /= averageScale;
        // Spread
        if (typeof shadow[3 + offset] === "number")
            shadow[3 + offset] /= averageScale;
        let output = template(shadow);
        if (containsCSSVariables) {
            let i = 0;
            output = output.replace(varToken, () => {
                const cssVariable = cssVariables[i];
                i++;
                return cssVariable;
            });
        }
        return output;
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs










class MeasureLayoutWithContext extends react_.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
        const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
        const { projection } = visualElement;
        addScaleCorrector(defaultScaleCorrectors);
        if (projection) {
            if (layoutGroup.group)
                layoutGroup.group.add(projection);
            if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
                switchLayoutGroup.register(projection);
            }
            projection.root.didUpdate();
            projection.addEventListener("animationComplete", () => {
                this.safeToRemove();
            });
            projection.setOptions({
                ...projection.options,
                onExitComplete: () => this.safeToRemove(),
            });
        }
        globalProjectionState.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(prevProps) {
        const { layoutDependency, visualElement, drag, isPresent } = this.props;
        const projection = visualElement.projection;
        if (!projection)
            return null;
        /**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */
        projection.isPresent = isPresent;
        if (drag ||
            prevProps.layoutDependency !== layoutDependency ||
            layoutDependency === undefined) {
            projection.willUpdate();
        }
        else {
            this.safeToRemove();
        }
        if (prevProps.isPresent !== isPresent) {
            if (isPresent) {
                projection.promote();
            }
            else if (!projection.relegate()) {
                /**
                 * If there's another stack member taking over from this one,
                 * it's in charge of the exit animation and therefore should
                 * be in charge of the safe to remove. Otherwise we call it here.
                 */
                frameloop/* frame.postRender */.Wi.postRender(() => {
                    const stack = projection.getStack();
                    if (!stack || !stack.members.length) {
                        this.safeToRemove();
                    }
                });
            }
        }
        return null;
    }
    componentDidUpdate() {
        const { projection } = this.props.visualElement;
        if (projection) {
            projection.root.didUpdate();
            if (!projection.currentAnimation && projection.isLead()) {
                this.safeToRemove();
            }
        }
    }
    componentWillUnmount() {
        const { visualElement, layoutGroup, switchLayoutGroup: promoteContext, } = this.props;
        const { projection } = visualElement;
        if (projection) {
            projection.scheduleCheckAfterUnmount();
            if (layoutGroup && layoutGroup.group)
                layoutGroup.group.remove(projection);
            if (promoteContext && promoteContext.deregister)
                promoteContext.deregister(projection);
        }
    }
    safeToRemove() {
        const { safeToRemove } = this.props;
        safeToRemove && safeToRemove();
    }
    render() {
        return null;
    }
}
function MeasureLayout(props) {
    const [isPresent, safeToRemove] = usePresence();
    const layoutGroup = (0,react_.useContext)(LayoutGroupContext/* LayoutGroupContext */.p);
    return (react_.createElement(MeasureLayoutWithContext, { ...props, layoutGroup: layoutGroup, switchLayoutGroup: (0,react_.useContext)(SwitchLayoutGroupContext), isPresent: isPresent, safeToRemove: safeToRemove }));
}
const defaultScaleCorrectors = {
    borderRadius: {
        ...correctBorderRadius,
        applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ],
    },
    borderTopLeftRadius: correctBorderRadius,
    borderTopRightRadius: correctBorderRadius,
    borderBottomLeftRadius: correctBorderRadius,
    borderBottomRightRadius: correctBorderRadius,
    boxShadow: correctBoxShadow,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs






const borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
const numBorders = borders.length;
const asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
const isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
    if (shouldCrossfadeOpacity) {
        target.opacity = mix(0, 
        // TODO Reinstate this if only child
        lead.opacity !== undefined ? lead.opacity : 1, easeCrossfadeIn(progress));
        target.opacityExit = mix(follow.opacity !== undefined ? follow.opacity : 1, 0, easeCrossfadeOut(progress));
    }
    else if (isOnlyMember) {
        target.opacity = mix(follow.opacity !== undefined ? follow.opacity : 1, lead.opacity !== undefined ? lead.opacity : 1, progress);
    }
    /**
     * Mix border radius
     */
    for (let i = 0; i < numBorders; i++) {
        const borderLabel = `border${borders[i]}Radius`;
        let followRadius = getRadius(follow, borderLabel);
        let leadRadius = getRadius(lead, borderLabel);
        if (followRadius === undefined && leadRadius === undefined)
            continue;
        followRadius || (followRadius = 0);
        leadRadius || (leadRadius = 0);
        const canMix = followRadius === 0 ||
            leadRadius === 0 ||
            isPx(followRadius) === isPx(leadRadius);
        if (canMix) {
            target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress), 0);
            if (percent.test(leadRadius) || percent.test(followRadius)) {
                target[borderLabel] += "%";
            }
        }
        else {
            target[borderLabel] = leadRadius;
        }
    }
    /**
     * Mix rotation
     */
    if (follow.rotate || lead.rotate) {
        target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress);
    }
}
function getRadius(values, radiusName) {
    return values[radiusName] !== undefined
        ? values[radiusName]
        : values.borderRadius;
}
// /**
//  * We only want to mix the background color if there's a follow element
//  * that we're not crossfading opacity between. For instance with switch
//  * AnimateSharedLayout animations, this helps the illusion of a continuous
//  * element being animated but also cuts down on the number of paints triggered
//  * for elements where opacity is doing that work for us.
//  */
// if (
//     !hasFollowElement &&
//     latestLeadValues.backgroundColor &&
//     latestFollowValues.backgroundColor
// ) {
//     /**
//      * This isn't ideal performance-wise as mixColor is creating a new function every frame.
//      * We could probably create a mixer that runs at the start of the animation but
//      * the idea behind the crossfader is that it runs dynamically between two potentially
//      * changing targets (ie opacity or borderRadius may be animating independently via variants)
//      */
//     leadState.backgroundColor = followState.backgroundColor = mixColor(
//         latestFollowValues.backgroundColor as string,
//         latestLeadValues.backgroundColor as string
//     )(p)
// }
const easeCrossfadeIn = compress(0, 0.5, circOut);
const easeCrossfadeOut = compress(0.5, 0.95, noop/* noop */.Z);
function compress(min, max, easing) {
    return (p) => {
        // Could replace ifs with clamp
        if (p < min)
            return 0;
        if (p > max)
            return 1;
        return easing(progress(min, max, p));
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs




/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis, translate = 0, scale = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
    if (percent.test(translate)) {
        translate = parseFloat(translate);
        const relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
        translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number")
        return;
    let originPoint = mix(originAxis.min, originAxis.max, origin);
    if (axis === originAxis)
        originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
const delta_remove_xKeys = ["x", "scaleX", "originX"];
const delta_remove_yKeys = ["y", "scaleY", "originY"];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, delta_remove_xKeys, originBox ? originBox.x : undefined, sourceBox ? sourceBox.x : undefined);
    removeAxisTransforms(box.y, transforms, delta_remove_yKeys, originBox ? originBox.y : undefined, sourceBox ? sourceBox.y : undefined);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/utils.mjs


function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a, b) {
    return (a.x.min === b.x.min &&
        a.x.max === b.x.max &&
        a.y.min === b.y.min &&
        a.y.max === b.y.max);
}
function aspectRatio(box) {
    return calcLength(box.x) / calcLength(box.y);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/shared/stack.mjs


class NodeStack {
    constructor() {
        this.members = [];
    }
    add(node) {
        addUniqueItem(this.members, node);
        node.scheduleRender();
    }
    remove(node) {
        removeItem(this.members, node);
        if (node === this.prevLead) {
            this.prevLead = undefined;
        }
        if (node === this.lead) {
            const prevLead = this.members[this.members.length - 1];
            if (prevLead) {
                this.promote(prevLead);
            }
        }
    }
    relegate(node) {
        const indexOfNode = this.members.findIndex((member) => node === member);
        if (indexOfNode === 0)
            return false;
        /**
         * Find the next projection node that is present
         */
        let prevLead;
        for (let i = indexOfNode; i >= 0; i--) {
            const member = this.members[i];
            if (member.isPresent !== false) {
                prevLead = member;
                break;
            }
        }
        if (prevLead) {
            this.promote(prevLead);
            return true;
        }
        else {
            return false;
        }
    }
    promote(node, preserveFollowOpacity) {
        const prevLead = this.lead;
        if (node === prevLead)
            return;
        this.prevLead = prevLead;
        this.lead = node;
        node.show();
        if (prevLead) {
            prevLead.instance && prevLead.scheduleRender();
            node.scheduleRender();
            node.resumeFrom = prevLead;
            if (preserveFollowOpacity) {
                node.resumeFrom.preserveOpacity = true;
            }
            if (prevLead.snapshot) {
                node.snapshot = prevLead.snapshot;
                node.snapshot.latestValues =
                    prevLead.animationValues || prevLead.latestValues;
            }
            if (node.root && node.root.isUpdating) {
                node.isLayoutDirty = true;
            }
            const { crossfade } = node.options;
            if (crossfade === false) {
                prevLead.hide();
            }
            /**
             * TODO:
             *   - Test border radius when previous node was deleted
             *   - boxShadow mixing
             *   - Shared between element A in scrolled container and element B (scroll stays the same or changes)
             *   - Shared between element A in transformed container and element B (transform stays the same or changes)
             *   - Shared between element A in scrolled page and element B (scroll stays the same or changes)
             * ---
             *   - Crossfade opacity of root nodes
             *   - layoutId changes after animation
             *   - layoutId changes mid animation
             */
        }
    }
    exitAnimationComplete() {
        this.members.forEach((node) => {
            const { options, resumingFrom } = node;
            options.onExitComplete && options.onExitComplete();
            if (resumingFrom) {
                resumingFrom.options.onExitComplete &&
                    resumingFrom.options.onExitComplete();
            }
        });
    }
    scheduleRender() {
        this.members.forEach((node) => {
            node.instance && node.scheduleRender(false);
        });
    }
    /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */
    removeLeadSnapshot() {
        if (this.lead && this.lead.snapshot) {
            this.lead.snapshot = undefined;
        }
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
    let transform = "";
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */
    const xTranslate = delta.x.translate / treeScale.x;
    const yTranslate = delta.y.translate / treeScale.y;
    if (xTranslate || yTranslate) {
        transform = `translate3d(${xTranslate}px, ${yTranslate}px, 0) `;
    }
    /**
     * Apply scale correction for the tree transform.
     * This will apply scale to the screen-orientated axes.
     */
    if (treeScale.x !== 1 || treeScale.y !== 1) {
        transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    }
    if (latestTransform) {
        const { rotate, rotateX, rotateY } = latestTransform;
        if (rotate)
            transform += `rotate(${rotate}deg) `;
        if (rotateX)
            transform += `rotateX(${rotateX}deg) `;
        if (rotateY)
            transform += `rotateY(${rotateY}deg) `;
    }
    /**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */
    const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
        transform += `scale(${elementScaleX}, ${elementScaleY})`;
    }
    return transform || "none";
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
const compareByDepth = (a, b) => a.depth - b.depth;



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs



class FlatTree {
    constructor() {
        this.children = [];
        this.isDirty = false;
    }
    add(child) {
        addUniqueItem(this.children, child);
        this.isDirty = true;
    }
    remove(child) {
        removeItem(this.children, child);
        this.isDirty = true;
    }
    forEach(callback) {
        this.isDirty && this.children.sort(compareByDepth);
        this.isDirty = false;
        this.children.forEach(callback);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/delay.mjs


/**
 * Timeout defined in ms
 */
function delay(callback, timeout) {
    const start = performance.now();
    const checkElapsed = ({ timestamp }) => {
        const elapsed = timestamp - start;
        if (elapsed >= timeout) {
            (0,frameloop/* cancelFrame */.Pn)(checkElapsed);
            callback(elapsed - timeout);
        }
    };
    frameloop/* frame.read */.Wi.read(checkElapsed, true);
    return () => (0,frameloop/* cancelFrame */.Pn)(checkElapsed);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/debug/record.mjs
function record(data) {
    if (window.MotionDebug) {
        window.MotionDebug.record(data);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs
function isSVGElement(element) {
    return element instanceof SVGElement && element.tagName !== "svg";
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/single-value.mjs




function animateSingleValue(value, keyframes, options) {
    const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
    motionValue$1.start(animateMotionValue("", motionValue$1, keyframes, options));
    return motionValue$1.animation;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs

























const transformAxes = ["", "X", "Y", "Z"];
/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */
const animationTarget = 1000;
let create_projection_node_id = 0;
/**
 * Use a mutable data object for debug data so as to not create a new
 * object every frame.
 */
const projectionFrameData = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
};
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform, }) {
    return class ProjectionNode {
        constructor(elementId, latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
            /**
             * A unique ID generated for every projection node.
             */
            this.id = create_projection_node_id++;
            /**
             * An id that represents a unique session instigated by startUpdate.
             */
            this.animationId = 0;
            /**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */
            this.children = new Set();
            /**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */
            this.options = {};
            /**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */
            this.isTreeAnimating = false;
            this.isAnimationBlocked = false;
            /**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */
            this.isLayoutDirty = false;
            /**
             * Flag to true if we think the projection calculations for this node needs
             * recalculating as a result of an updated transform or layout animation.
             */
            this.isProjectionDirty = false;
            /**
             * Flag to true if the layout *or* transform has changed. This then gets propagated
             * throughout the projection tree, forcing any element below to recalculate on the next frame.
             */
            this.isSharedProjectionDirty = false;
            /**
             * Flag transform dirty. This gets propagated throughout the whole tree but is only
             * respected by shared nodes.
             */
            this.isTransformDirty = false;
            /**
             * Block layout updates for instant layout transitions throughout the tree.
             */
            this.updateManuallyBlocked = false;
            this.updateBlockedByResize = false;
            /**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */
            this.isUpdating = false;
            /**
             * If this is an SVG element we currently disable projection transforms
             */
            this.isSVG = false;
            /**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */
            this.needsReset = false;
            /**
             * Flags whether this node should have its transform reset prior to measuring.
             */
            this.shouldResetTransform = false;
            /**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to layoutly
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */
            this.treeScale = { x: 1, y: 1 };
            /**
             *
             */
            this.eventHandlers = new Map();
            // Note: Currently only running on root node
            this.potentialNodes = new Map();
            this.checkUpdateFailed = () => {
                if (this.isUpdating) {
                    this.isUpdating = false;
                    this.clearAllSnapshots();
                }
            };
            /**
             * This is a multi-step process as shared nodes might be of different depths. Nodes
             * are sorted by depth order, so we need to resolve the entire tree before moving to
             * the next step.
             */
            this.updateProjection = () => {
                /**
                 * Reset debug counts. Manually resetting rather than creating a new
                 * object each frame.
                 */
                projectionFrameData.totalNodes =
                    projectionFrameData.resolvedTargetDeltas =
                        projectionFrameData.recalculatedProjection =
                            0;
                this.nodes.forEach(propagateDirtyNodes);
                this.nodes.forEach(resolveTargetDelta);
                this.nodes.forEach(calcProjection);
                this.nodes.forEach(cleanDirtyNodes);
                record(projectionFrameData);
            };
            this.hasProjected = false;
            this.isVisible = true;
            this.animationProgress = 0;
            /**
             * Shared layout
             */
            // TODO Only running on root node
            this.sharedNodes = new Map();
            this.elementId = elementId;
            this.latestValues = latestValues;
            this.root = parent ? parent.root || parent : this;
            this.path = parent ? [...parent.path, parent] : [];
            this.parent = parent;
            this.depth = parent ? parent.depth + 1 : 0;
            elementId && this.root.registerPotentialNode(elementId, this);
            for (let i = 0; i < this.path.length; i++) {
                this.path[i].shouldResetTransform = true;
            }
            if (this.root === this)
                this.nodes = new FlatTree();
        }
        addEventListener(name, handler) {
            if (!this.eventHandlers.has(name)) {
                this.eventHandlers.set(name, new SubscriptionManager());
            }
            return this.eventHandlers.get(name).add(handler);
        }
        notifyListeners(name, ...args) {
            const subscriptionManager = this.eventHandlers.get(name);
            subscriptionManager && subscriptionManager.notify(...args);
        }
        hasListeners(name) {
            return this.eventHandlers.has(name);
        }
        registerPotentialNode(elementId, node) {
            this.potentialNodes.set(elementId, node);
        }
        /**
         * Lifecycles
         */
        mount(instance, isLayoutDirty = false) {
            if (this.instance)
                return;
            this.isSVG = isSVGElement(instance);
            this.instance = instance;
            const { layoutId, layout, visualElement } = this.options;
            if (visualElement && !visualElement.current) {
                visualElement.mount(instance);
            }
            this.root.nodes.add(this);
            this.parent && this.parent.children.add(this);
            this.elementId && this.root.potentialNodes.delete(this.elementId);
            if (isLayoutDirty && (layout || layoutId)) {
                this.isLayoutDirty = true;
            }
            if (attachResizeListener) {
                let cancelDelay;
                const resizeUnblockUpdate = () => (this.root.updateBlockedByResize = false);
                attachResizeListener(instance, () => {
                    this.root.updateBlockedByResize = true;
                    cancelDelay && cancelDelay();
                    cancelDelay = delay(resizeUnblockUpdate, 250);
                    if (globalProjectionState.hasAnimatedSinceResize) {
                        globalProjectionState.hasAnimatedSinceResize = false;
                        this.nodes.forEach(finishAnimation);
                    }
                });
            }
            if (layoutId) {
                this.root.registerSharedNode(layoutId, this);
            }
            // Only register the handler if it requires layout animation
            if (this.options.animate !== false &&
                visualElement &&
                (layoutId || layout)) {
                this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeTargetChanged, layout: newLayout, }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = undefined;
                        this.relativeTarget = undefined;
                        return;
                    }
                    // TODO: Check here if an animation exists
                    const layoutTransition = this.options.transition ||
                        visualElement.getDefaultTransition() ||
                        defaultLayoutTransition;
                    const { onLayoutAnimationStart, onLayoutAnimationComplete, } = visualElement.getProps();
                    /**
                     * The target layout of the element might stay the same,
                     * but its position relative to its parent has changed.
                     */
                    const targetChanged = !this.targetLayout ||
                        !boxEquals(this.targetLayout, newLayout) ||
                        hasRelativeTargetChanged;
                    /**
                     * If the layout hasn't seemed to have changed, it might be that the
                     * element is visually in the same place in the document but its position
                     * relative to its parent has indeed changed. So here we check for that.
                     */
                    const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
                    if (this.options.layoutRoot ||
                        (this.resumeFrom && this.resumeFrom.instance) ||
                        hasOnlyRelativeTargetChanged ||
                        (hasLayoutChanged &&
                            (targetChanged || !this.currentAnimation))) {
                        if (this.resumeFrom) {
                            this.resumingFrom = this.resumeFrom;
                            this.resumingFrom.resumingFrom = undefined;
                        }
                        this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
                        const animationOptions = {
                            ...getValueTransition(layoutTransition, "layout"),
                            onPlay: onLayoutAnimationStart,
                            onComplete: onLayoutAnimationComplete,
                        };
                        if (visualElement.shouldReduceMotion ||
                            this.options.layoutRoot) {
                            animationOptions.delay = 0;
                            animationOptions.type = false;
                        }
                        this.startAnimation(animationOptions);
                    }
                    else {
                        /**
                         * If the layout hasn't changed and we have an animation that hasn't started yet,
                         * finish it immediately. Otherwise it will be animating from a location
                         * that was probably never commited to screen and look like a jumpy box.
                         */
                        if (!hasLayoutChanged &&
                            this.animationProgress === 0) {
                            finishAnimation(this);
                        }
                        if (this.isLead() && this.options.onExitComplete) {
                            this.options.onExitComplete();
                        }
                    }
                    this.targetLayout = newLayout;
                });
            }
        }
        unmount() {
            this.options.layoutId && this.willUpdate();
            this.root.nodes.remove(this);
            const stack = this.getStack();
            stack && stack.remove(this);
            this.parent && this.parent.children.delete(this);
            this.instance = undefined;
            (0,frameloop/* cancelFrame */.Pn)(this.updateProjection);
        }
        // only on the root
        blockUpdate() {
            this.updateManuallyBlocked = true;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = false;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return (this.isAnimationBlocked ||
                (this.parent && this.parent.isTreeAnimationBlocked()) ||
                false);
        }
        // Note: currently only running on root node
        startUpdate() {
            if (this.isUpdateBlocked())
                return;
            this.isUpdating = true;
            this.nodes && this.nodes.forEach(resetRotation);
            this.animationId++;
        }
        getTransformTemplate() {
            const { visualElement } = this.options;
            return visualElement && visualElement.getProps().transformTemplate;
        }
        willUpdate(shouldNotifyListeners = true) {
            if (this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            !this.root.isUpdating && this.root.startUpdate();
            if (this.isLayoutDirty)
                return;
            this.isLayoutDirty = true;
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                node.shouldResetTransform = true;
                node.updateScroll("snapshot");
                if (node.options.layoutRoot) {
                    node.willUpdate(false);
                }
            }
            const { layoutId, layout } = this.options;
            if (layoutId === undefined && !layout)
                return;
            const transformTemplate = this.getTransformTemplate();
            this.prevTransformTemplateValue = transformTemplate
                ? transformTemplate(this.latestValues, "")
                : undefined;
            this.updateSnapshot();
            shouldNotifyListeners && this.notifyListeners("willUpdate");
        }
        // Note: Currently only running on root node
        didUpdate() {
            const updateWasBlocked = this.isUpdateBlocked();
            // When doing an instant transition, we skip the layout update,
            // but should still clean up the measurements so that the next
            // snapshot could be taken correctly.
            if (updateWasBlocked) {
                this.unblockUpdate();
                this.clearAllSnapshots();
                this.nodes.forEach(clearMeasurements);
                return;
            }
            if (!this.isUpdating)
                return;
            this.isUpdating = false;
            /**
             * Search for and mount newly-added projection elements.
             *
             * TODO: Every time a new component is rendered we could search up the tree for
             * the closest mounted node and query from there rather than document.
             */
            if (this.potentialNodes.size) {
                this.potentialNodes.forEach(mountNodeEarly);
                this.potentialNodes.clear();
            }
            /**
             * Write
             */
            this.nodes.forEach(resetTransformStyle);
            /**
             * Read ==================
             */
            // Update layout measurements of updated children
            this.nodes.forEach(updateLayout);
            /**
             * Write
             */
            // Notify listeners that the layout is updated
            this.nodes.forEach(notifyLayoutUpdate);
            this.clearAllSnapshots();
            // Flush any scheduled updates
            frameloop/* steps.update.process */.S6.update.process(data/* frameData */.w);
            frameloop/* steps.preRender.process */.S6.preRender.process(data/* frameData */.w);
            frameloop/* steps.render.process */.S6.render.process(data/* frameData */.w);
        }
        clearAllSnapshots() {
            this.nodes.forEach(clearSnapshot);
            this.sharedNodes.forEach(removeLeadSnapshots);
        }
        scheduleUpdateProjection() {
            frameloop/* frame.preRender */.Wi.preRender(this.updateProjection, false, true);
        }
        scheduleCheckAfterUnmount() {
            /**
             * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
             * we manually call didUpdate to give a chance to the siblings to animate.
             * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
             */
            frameloop/* frame.postRender */.Wi.postRender(() => {
                if (this.isLayoutDirty) {
                    this.root.didUpdate();
                }
                else {
                    this.root.checkUpdateFailed();
                }
            });
        }
        /**
         * Update measurements
         */
        updateSnapshot() {
            if (this.snapshot || !this.instance)
                return;
            this.snapshot = this.measure();
        }
        updateLayout() {
            if (!this.instance)
                return;
            // TODO: Incorporate into a forwarded scroll offset
            this.updateScroll();
            if (!(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty) {
                return;
            }
            /**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */
            if (this.resumeFrom && !this.resumeFrom.instance) {
                for (let i = 0; i < this.path.length; i++) {
                    const node = this.path[i];
                    node.updateScroll();
                }
            }
            const prevLayout = this.layout;
            this.layout = this.measure(false);
            this.layoutCorrected = createBox();
            this.isLayoutDirty = false;
            this.projectionDelta = undefined;
            this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement } = this.options;
            visualElement &&
                visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : undefined);
        }
        updateScroll(phase = "measure") {
            let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
            if (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === phase) {
                needsMeasurement = false;
            }
            if (needsMeasurement) {
                this.scroll = {
                    animationId: this.root.animationId,
                    phase,
                    isRoot: checkIsScrollRoot(this.instance),
                    offset: measureScroll(this.instance),
                };
            }
        }
        resetTransform() {
            if (!resetTransform)
                return;
            const isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
            const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
            const transformTemplate = this.getTransformTemplate();
            const transformTemplateValue = transformTemplate
                ? transformTemplate(this.latestValues, "")
                : undefined;
            const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
            if (isResetRequested &&
                (hasProjection ||
                    hasTransform(this.latestValues) ||
                    transformTemplateHasChanged)) {
                resetTransform(this.instance, transformTemplateValue);
                this.shouldResetTransform = false;
                this.scheduleRender();
            }
        }
        measure(removeTransform = true) {
            const pageBox = this.measurePageBox();
            let layoutBox = this.removeElementScroll(pageBox);
            /**
             * Measurements taken during the pre-render stage
             * still have transforms applied so we remove them
             * via calculation.
             */
            if (removeTransform) {
                layoutBox = this.removeTransform(layoutBox);
            }
            roundBox(layoutBox);
            return {
                animationId: this.root.animationId,
                measuredBox: pageBox,
                layoutBox,
                latestValues: {},
                source: this.id,
            };
        }
        measurePageBox() {
            const { visualElement } = this.options;
            if (!visualElement)
                return createBox();
            const box = visualElement.measureViewportBox();
            // Remove viewport scroll to give page-relative coordinates
            const { scroll } = this.root;
            if (scroll) {
                translateAxis(box.x, scroll.offset.x);
                translateAxis(box.y, scroll.offset.y);
            }
            return box;
        }
        removeElementScroll(box) {
            const boxWithoutScroll = createBox();
            copyBoxInto(boxWithoutScroll, box);
            /**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                const { scroll, options } = node;
                if (node !== this.root && scroll && options.layoutScroll) {
                    /**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */
                    if (scroll.isRoot) {
                        copyBoxInto(boxWithoutScroll, box);
                        const { scroll: rootScroll } = this.root;
                        /**
                         * Undo the application of page scroll that was originally added
                         * to the measured bounding box.
                         */
                        if (rootScroll) {
                            translateAxis(boxWithoutScroll.x, -rootScroll.offset.x);
                            translateAxis(boxWithoutScroll.y, -rootScroll.offset.y);
                        }
                    }
                    translateAxis(boxWithoutScroll.x, scroll.offset.x);
                    translateAxis(boxWithoutScroll.y, scroll.offset.y);
                }
            }
            return boxWithoutScroll;
        }
        applyTransform(box, transformOnly = false) {
            const withTransforms = createBox();
            copyBoxInto(withTransforms, box);
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                if (!transformOnly &&
                    node.options.layoutScroll &&
                    node.scroll &&
                    node !== node.root) {
                    transformBox(withTransforms, {
                        x: -node.scroll.offset.x,
                        y: -node.scroll.offset.y,
                    });
                }
                if (!hasTransform(node.latestValues))
                    continue;
                transformBox(withTransforms, node.latestValues);
            }
            if (hasTransform(this.latestValues)) {
                transformBox(withTransforms, this.latestValues);
            }
            return withTransforms;
        }
        removeTransform(box) {
            const boxWithoutTransform = createBox();
            copyBoxInto(boxWithoutTransform, box);
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                if (!node.instance)
                    continue;
                if (!hasTransform(node.latestValues))
                    continue;
                hasScale(node.latestValues) && node.updateSnapshot();
                const sourceBox = createBox();
                const nodeBox = node.measurePageBox();
                copyBoxInto(sourceBox, nodeBox);
                removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : undefined, sourceBox);
            }
            if (hasTransform(this.latestValues)) {
                removeBoxTransforms(boxWithoutTransform, this.latestValues);
            }
            return boxWithoutTransform;
        }
        setTargetDelta(delta) {
            this.targetDelta = delta;
            this.root.scheduleUpdateProjection();
            this.isProjectionDirty = true;
        }
        setOptions(options) {
            this.options = {
                ...this.options,
                ...options,
                crossfade: options.crossfade !== undefined ? options.crossfade : true,
            };
        }
        clearMeasurements() {
            this.scroll = undefined;
            this.layout = undefined;
            this.snapshot = undefined;
            this.prevTransformTemplateValue = undefined;
            this.targetDelta = undefined;
            this.target = undefined;
            this.isLayoutDirty = false;
        }
        forceRelativeParentToResolveTarget() {
            if (!this.relativeParent)
                return;
            /**
             * If the parent target isn't up-to-date, force it to update.
             * This is an unfortunate de-optimisation as it means any updating relative
             * projection will cause all the relative parents to recalculate back
             * up the tree.
             */
            if (this.relativeParent.resolvedRelativeTargetAt !==
                data/* frameData.timestamp */.w.timestamp) {
                this.relativeParent.resolveTargetDelta(true);
            }
        }
        resolveTargetDelta(forceRecalculation = false) {
            var _a;
            /**
             * Once the dirty status of nodes has been spread through the tree, we also
             * need to check if we have a shared node of a different depth that has itself
             * been dirtied.
             */
            const lead = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
            this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            /**
             * We don't use transform for this step of processing so we don't
             * need to check whether any nodes have changed transform.
             */
            const canSkip = !(forceRecalculation ||
                (isShared && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget);
            if (canSkip)
                return;
            const { layout, layoutId } = this.options;
            /**
             * If we have no layout, we can't perform projection, so early return
             */
            if (!this.layout || !(layout || layoutId))
                return;
            this.resolvedRelativeTargetAt = data/* frameData.timestamp */.w.timestamp;
            /**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */
            // TODO If this is unsuccessful this currently happens every frame
            if (!this.targetDelta && !this.relativeTarget) {
                // TODO: This is a semi-repetition of further down this function, make DRY
                const relativeParent = this.getClosestProjectingParent();
                if (relativeParent && relativeParent.layout) {
                    this.relativeParent = relativeParent;
                    this.forceRelativeParentToResolveTarget();
                    this.relativeTarget = createBox();
                    this.relativeTargetOrigin = createBox();
                    calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
                    copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
                }
                else {
                    this.relativeParent = this.relativeTarget = undefined;
                }
            }
            /**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */
            if (!this.relativeTarget && !this.targetDelta)
                return;
            /**
             * Lazy-init target data structure
             */
            if (!this.target) {
                this.target = createBox();
                this.targetWithTransforms = createBox();
            }
            /**
             * If we've got a relative box for this component, resolve it into a target relative to the parent.
             */
            if (this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.relativeParent &&
                this.relativeParent.target) {
                this.forceRelativeParentToResolveTarget();
                calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
                /**
                 * If we've only got a targetDelta, resolve it into a target
                 */
            }
            else if (this.targetDelta) {
                if (Boolean(this.resumingFrom)) {
                    // TODO: This is creating a new object every frame
                    this.target = this.applyTransform(this.layout.layoutBox);
                }
                else {
                    copyBoxInto(this.target, this.layout.layoutBox);
                }
                applyBoxDelta(this.target, this.targetDelta);
            }
            else {
                /**
                 * If no target, use own layout as target
                 */
                copyBoxInto(this.target, this.layout.layoutBox);
            }
            /**
             * If we've been told to attempt to resolve a relative target, do so.
             */
            if (this.attemptToResolveRelativeTarget) {
                this.attemptToResolveRelativeTarget = false;
                const relativeParent = this.getClosestProjectingParent();
                if (relativeParent &&
                    Boolean(relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                    !relativeParent.options.layoutScroll &&
                    relativeParent.target) {
                    this.relativeParent = relativeParent;
                    this.forceRelativeParentToResolveTarget();
                    this.relativeTarget = createBox();
                    this.relativeTargetOrigin = createBox();
                    calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
                    copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
                }
                else {
                    this.relativeParent = this.relativeTarget = undefined;
                }
            }
            /**
             * Increase debug counter for resolved target deltas
             */
            projectionFrameData.resolvedTargetDeltas++;
        }
        getClosestProjectingParent() {
            if (!this.parent ||
                hasScale(this.parent.latestValues) ||
                has2DTranslate(this.parent.latestValues)) {
                return undefined;
            }
            if (this.parent.isProjecting()) {
                return this.parent;
            }
            else {
                return this.parent.getClosestProjectingParent();
            }
        }
        isProjecting() {
            return Boolean((this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
                this.layout);
        }
        calcProjection() {
            var _a;
            const lead = this.getLead();
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            let canSkip = true;
            /**
             * If this is a normal layout animation and neither this node nor its nearest projecting
             * is dirty then we can't skip.
             */
            if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) {
                canSkip = false;
            }
            /**
             * If this is a shared layout animation and this node's shared projection is dirty then
             * we can't skip.
             */
            if (isShared &&
                (this.isSharedProjectionDirty || this.isTransformDirty)) {
                canSkip = false;
            }
            /**
             * If we have resolved the target this frame we must recalculate the
             * projection to ensure it visually represents the internal calculations.
             */
            if (this.resolvedRelativeTargetAt === data/* frameData.timestamp */.w.timestamp) {
                canSkip = false;
            }
            if (canSkip)
                return;
            const { layout, layoutId } = this.options;
            /**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */
            this.isTreeAnimating = Boolean((this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation);
            if (!this.isTreeAnimating) {
                this.targetDelta = this.relativeTarget = undefined;
            }
            if (!this.layout || !(layout || layoutId))
                return;
            /**
             * Reset the corrected box with the latest values from box, as we're then going
             * to perform mutative operations on it.
             */
            copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
            /**
             * Apply all the parent deltas to this box to produce the corrected box. This
             * is the layout box, as it will appear on screen as a result of the transforms of its parents.
             */
            applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
            const { target } = lead;
            if (!target)
                return;
            if (!this.projectionDelta) {
                this.projectionDelta = createDelta();
                this.projectionDeltaWithTransform = createDelta();
            }
            const prevTreeScaleX = this.treeScale.x;
            const prevTreeScaleY = this.treeScale.y;
            const prevProjectionTransform = this.projectionTransform;
            /**
             * Update the delta between the corrected box and the target box before user-set transforms were applied.
             * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
             * for our layout reprojection, but still allow them to be scaled correctly by the user.
             * It might be that to simplify this we may want to accept that user-set scale is also corrected
             * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
             * to allow people to choose whether these styles are corrected based on just the
             * layout reprojection or the final bounding box.
             */
            calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
            this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
            if (this.projectionTransform !== prevProjectionTransform ||
                this.treeScale.x !== prevTreeScaleX ||
                this.treeScale.y !== prevTreeScaleY) {
                this.hasProjected = true;
                this.scheduleRender();
                this.notifyListeners("projectionUpdate", target);
            }
            /**
             * Increase debug counter for recalculated projections
             */
            projectionFrameData.recalculatedProjection++;
        }
        hide() {
            this.isVisible = false;
            // TODO: Schedule render
        }
        show() {
            this.isVisible = true;
            // TODO: Schedule render
        }
        scheduleRender(notifyAll = true) {
            this.options.scheduleRender && this.options.scheduleRender();
            if (notifyAll) {
                const stack = this.getStack();
                stack && stack.scheduleRender();
            }
            if (this.resumingFrom && !this.resumingFrom.instance) {
                this.resumingFrom = undefined;
            }
        }
        setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
            const snapshot = this.snapshot;
            const snapshotLatestValues = snapshot
                ? snapshot.latestValues
                : {};
            const mixedValues = { ...this.latestValues };
            const targetDelta = createDelta();
            if (!this.relativeParent ||
                !this.relativeParent.options.layoutRoot) {
                this.relativeTarget = this.relativeTargetOrigin = undefined;
            }
            this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
            const relativeLayout = createBox();
            const snapshotSource = snapshot ? snapshot.source : undefined;
            const layoutSource = this.layout ? this.layout.source : undefined;
            const isSharedLayoutAnimation = snapshotSource !== layoutSource;
            const stack = this.getStack();
            const isOnlyMember = !stack || stack.members.length <= 1;
            const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation &&
                !isOnlyMember &&
                this.options.crossfade === true &&
                !this.path.some(hasOpacityCrossfade));
            this.animationProgress = 0;
            let prevRelativeTarget;
            this.mixTargetDelta = (latest) => {
                const progress = latest / 1000;
                mixAxisDelta(targetDelta.x, delta.x, progress);
                mixAxisDelta(targetDelta.y, delta.y, progress);
                this.setTargetDelta(targetDelta);
                if (this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout) {
                    calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
                    mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress);
                    /**
                     * If this is an unchanged relative target we can consider the
                     * projection not dirty.
                     */
                    if (prevRelativeTarget &&
                        boxEquals(this.relativeTarget, prevRelativeTarget)) {
                        this.isProjectionDirty = false;
                    }
                    if (!prevRelativeTarget)
                        prevRelativeTarget = createBox();
                    copyBoxInto(prevRelativeTarget, this.relativeTarget);
                }
                if (isSharedLayoutAnimation) {
                    this.animationValues = mixedValues;
                    mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
                }
                this.root.scheduleUpdateProjection();
                this.scheduleRender();
                this.animationProgress = progress;
            };
            this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
        }
        startAnimation(options) {
            this.notifyListeners("animationStart");
            this.currentAnimation && this.currentAnimation.stop();
            if (this.resumingFrom && this.resumingFrom.currentAnimation) {
                this.resumingFrom.currentAnimation.stop();
            }
            if (this.pendingAnimation) {
                (0,frameloop/* cancelFrame */.Pn)(this.pendingAnimation);
                this.pendingAnimation = undefined;
            }
            /**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */
            this.pendingAnimation = frameloop/* frame.update */.Wi.update(() => {
                globalProjectionState.hasAnimatedSinceResize = true;
                this.currentAnimation = animateSingleValue(0, animationTarget, {
                    ...options,
                    onUpdate: (latest) => {
                        this.mixTargetDelta(latest);
                        options.onUpdate && options.onUpdate(latest);
                    },
                    onComplete: () => {
                        options.onComplete && options.onComplete();
                        this.completeAnimation();
                    },
                });
                if (this.resumingFrom) {
                    this.resumingFrom.currentAnimation = this.currentAnimation;
                }
                this.pendingAnimation = undefined;
            });
        }
        completeAnimation() {
            if (this.resumingFrom) {
                this.resumingFrom.currentAnimation = undefined;
                this.resumingFrom.preserveOpacity = undefined;
            }
            const stack = this.getStack();
            stack && stack.exitAnimationComplete();
            this.resumingFrom =
                this.currentAnimation =
                    this.animationValues =
                        undefined;
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            if (this.currentAnimation) {
                this.mixTargetDelta && this.mixTargetDelta(animationTarget);
                this.currentAnimation.stop();
            }
            this.completeAnimation();
        }
        applyTransformsToTarget() {
            const lead = this.getLead();
            let { targetWithTransforms, target, layout, latestValues } = lead;
            if (!targetWithTransforms || !target || !layout)
                return;
            /**
             * If we're only animating position, and this element isn't the lead element,
             * then instead of projecting into the lead box we instead want to calculate
             * a new target that aligns the two boxes but maintains the layout shape.
             */
            if (this !== lead &&
                this.layout &&
                layout &&
                shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
                target = this.target || createBox();
                const xLength = calcLength(this.layout.layoutBox.x);
                target.x.min = lead.target.x.min;
                target.x.max = target.x.min + xLength;
                const yLength = calcLength(this.layout.layoutBox.y);
                target.y.min = lead.target.y.min;
                target.y.max = target.y.min + yLength;
            }
            copyBoxInto(targetWithTransforms, target);
            /**
             * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
             * This is the final box that we will then project into by calculating a transform delta and
             * applying it to the corrected box.
             */
            transformBox(targetWithTransforms, latestValues);
            /**
             * Update the delta between the corrected box and the final target box, after
             * user-set transforms are applied to it. This will be used by the renderer to
             * create a transform style that will reproject the element from its layout layout
             * into the desired bounding box.
             */
            calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
        }
        registerSharedNode(layoutId, node) {
            if (!this.sharedNodes.has(layoutId)) {
                this.sharedNodes.set(layoutId, new NodeStack());
            }
            const stack = this.sharedNodes.get(layoutId);
            stack.add(node);
            const config = node.options.initialPromotionConfig;
            node.promote({
                transition: config ? config.transition : undefined,
                preserveFollowOpacity: config && config.shouldPreserveFollowOpacity
                    ? config.shouldPreserveFollowOpacity(node)
                    : undefined,
            });
        }
        isLead() {
            const stack = this.getStack();
            return stack ? stack.lead === this : true;
        }
        getLead() {
            var _a;
            const { layoutId } = this.options;
            return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
        }
        getPrevLead() {
            var _a;
            const { layoutId } = this.options;
            return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : undefined;
        }
        getStack() {
            const { layoutId } = this.options;
            if (layoutId)
                return this.root.sharedNodes.get(layoutId);
        }
        promote({ needsReset, transition, preserveFollowOpacity, } = {}) {
            const stack = this.getStack();
            if (stack)
                stack.promote(this, preserveFollowOpacity);
            if (needsReset) {
                this.projectionDelta = undefined;
                this.needsReset = true;
            }
            if (transition)
                this.setOptions({ transition });
        }
        relegate() {
            const stack = this.getStack();
            if (stack) {
                return stack.relegate(this);
            }
            else {
                return false;
            }
        }
        resetRotation() {
            const { visualElement } = this.options;
            if (!visualElement)
                return;
            // If there's no detected rotation values, we can early return without a forced render.
            let hasRotate = false;
            /**
             * An unrolled check for rotation values. Most elements don't have any rotation and
             * skipping the nested loop and new object creation is 50% faster.
             */
            const { latestValues } = visualElement;
            if (latestValues.rotate ||
                latestValues.rotateX ||
                latestValues.rotateY ||
                latestValues.rotateZ) {
                hasRotate = true;
            }
            // If there's no rotation values, we don't need to do any more.
            if (!hasRotate)
                return;
            const resetValues = {};
            // Check the rotate value of all axes and reset to 0
            for (let i = 0; i < transformAxes.length; i++) {
                const key = "rotate" + transformAxes[i];
                // Record the rotation and then temporarily set it to 0
                if (latestValues[key]) {
                    resetValues[key] = latestValues[key];
                    visualElement.setStaticValue(key, 0);
                }
            }
            // Force a render of this element to apply the transform with all rotations
            // set to 0.
            visualElement.render();
            // Put back all the values we reset
            for (const key in resetValues) {
                visualElement.setStaticValue(key, resetValues[key]);
            }
            // Schedule a render for the next frame. This ensures we won't visually
            // see the element with the reset rotate value applied.
            visualElement.scheduleRender();
        }
        getProjectionStyles(styleProp = {}) {
            var _a, _b;
            // TODO: Return lifecycle-persistent object
            const styles = {};
            if (!this.instance || this.isSVG)
                return styles;
            if (!this.isVisible) {
                return { visibility: "hidden" };
            }
            else {
                styles.visibility = "";
            }
            const transformTemplate = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = false;
                styles.opacity = "";
                styles.pointerEvents =
                    resolveMotionValue(styleProp.pointerEvents) || "";
                styles.transform = transformTemplate
                    ? transformTemplate(this.latestValues, "")
                    : "none";
                return styles;
            }
            const lead = this.getLead();
            if (!this.projectionDelta || !this.layout || !lead.target) {
                const emptyStyles = {};
                if (this.options.layoutId) {
                    emptyStyles.opacity =
                        this.latestValues.opacity !== undefined
                            ? this.latestValues.opacity
                            : 1;
                    emptyStyles.pointerEvents =
                        resolveMotionValue(styleProp.pointerEvents) || "";
                }
                if (this.hasProjected && !hasTransform(this.latestValues)) {
                    emptyStyles.transform = transformTemplate
                        ? transformTemplate({}, "")
                        : "none";
                    this.hasProjected = false;
                }
                return emptyStyles;
            }
            const valuesToRender = lead.animationValues || lead.latestValues;
            this.applyTransformsToTarget();
            styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
            if (transformTemplate) {
                styles.transform = transformTemplate(valuesToRender, styles.transform);
            }
            const { x, y } = this.projectionDelta;
            styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
            if (lead.animationValues) {
                /**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */
                styles.opacity =
                    lead === this
                        ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1
                        : this.preserveOpacity
                            ? this.latestValues.opacity
                            : valuesToRender.opacityExit;
            }
            else {
                /**
                 * Or we're not animating at all, set the lead component to its layout
                 * opacity and other components to hidden.
                 */
                styles.opacity =
                    lead === this
                        ? valuesToRender.opacity !== undefined
                            ? valuesToRender.opacity
                            : ""
                        : valuesToRender.opacityExit !== undefined
                            ? valuesToRender.opacityExit
                            : 0;
            }
            /**
             * Apply scale correction
             */
            for (const key in scaleCorrectors) {
                if (valuesToRender[key] === undefined)
                    continue;
                const { correct, applyTo } = scaleCorrectors[key];
                /**
                 * Only apply scale correction to the value if we have an
                 * active projection transform. Otherwise these values become
                 * vulnerable to distortion if the element changes size without
                 * a corresponding layout animation.
                 */
                const corrected = styles.transform === "none"
                    ? valuesToRender[key]
                    : correct(valuesToRender[key], lead);
                if (applyTo) {
                    const num = applyTo.length;
                    for (let i = 0; i < num; i++) {
                        styles[applyTo[i]] = corrected;
                    }
                }
                else {
                    styles[key] = corrected;
                }
            }
            /**
             * Disable pointer events on follow components. This is to ensure
             * that if a follow component covers a lead component it doesn't block
             * pointer events on the lead.
             */
            if (this.options.layoutId) {
                styles.pointerEvents =
                    lead === this
                        ? resolveMotionValue(styleProp.pointerEvents) || ""
                        : "none";
            }
            return styles;
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = undefined;
        }
        // Only run on root
        resetTree() {
            this.root.nodes.forEach((node) => { var _a; return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop(); });
            this.root.nodes.forEach(clearMeasurements);
            this.root.sharedNodes.clear();
        }
    };
}
function updateLayout(node) {
    node.updateLayout();
}
function notifyLayoutUpdate(node) {
    var _a;
    const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
    if (node.isLead() &&
        node.layout &&
        snapshot &&
        node.hasListeners("didUpdate")) {
        const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
        const { animationType } = node.options;
        const isShared = snapshot.source !== node.layout.source;
        // TODO Maybe we want to also resize the layout snapshot so we don't trigger
        // animations for instance if layout="size" and an element has only changed position
        if (animationType === "size") {
            eachAxis((axis) => {
                const axisSnapshot = isShared
                    ? snapshot.measuredBox[axis]
                    : snapshot.layoutBox[axis];
                const length = calcLength(axisSnapshot);
                axisSnapshot.min = layout[axis].min;
                axisSnapshot.max = axisSnapshot.min + length;
            });
        }
        else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) {
            eachAxis((axis) => {
                const axisSnapshot = isShared
                    ? snapshot.measuredBox[axis]
                    : snapshot.layoutBox[axis];
                const length = calcLength(layout[axis]);
                axisSnapshot.max = axisSnapshot.min + length;
                /**
                 * Ensure relative target gets resized and rerendererd
                 */
                if (node.relativeTarget && !node.currentAnimation) {
                    node.isProjectionDirty = true;
                    node.relativeTarget[axis].max =
                        node.relativeTarget[axis].min + length;
                }
            });
        }
        const layoutDelta = createDelta();
        calcBoxDelta(layoutDelta, layout, snapshot.layoutBox);
        const visualDelta = createDelta();
        if (isShared) {
            calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
        }
        else {
            calcBoxDelta(visualDelta, layout, snapshot.layoutBox);
        }
        const hasLayoutChanged = !isDeltaZero(layoutDelta);
        let hasRelativeTargetChanged = false;
        if (!node.resumeFrom) {
            const relativeParent = node.getClosestProjectingParent();
            /**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */
            if (relativeParent && !relativeParent.resumeFrom) {
                const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
                if (parentSnapshot && parentLayout) {
                    const relativeSnapshot = createBox();
                    calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
                    const relativeLayout = createBox();
                    calcRelativePosition(relativeLayout, layout, parentLayout.layoutBox);
                    if (!boxEquals(relativeSnapshot, relativeLayout)) {
                        hasRelativeTargetChanged = true;
                    }
                    if (relativeParent.options.layoutRoot) {
                        node.relativeTarget = relativeLayout;
                        node.relativeTargetOrigin = relativeSnapshot;
                        node.relativeParent = relativeParent;
                    }
                }
            }
        }
        node.notifyListeners("didUpdate", {
            layout,
            snapshot,
            delta: visualDelta,
            layoutDelta,
            hasLayoutChanged,
            hasRelativeTargetChanged,
        });
    }
    else if (node.isLead()) {
        const { onExitComplete } = node.options;
        onExitComplete && onExitComplete();
    }
    /**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */
    node.options.transition = undefined;
}
function propagateDirtyNodes(node) {
    /**
     * Increase debug counter for nodes encountered this frame
     */
    projectionFrameData.totalNodes++;
    if (!node.parent)
        return;
    /**
     * If this node isn't projecting, propagate isProjectionDirty. It will have
     * no performance impact but it will allow the next child that *is* projecting
     * but *isn't* dirty to just check its parent to see if *any* ancestor needs
     * correcting.
     */
    if (!node.isProjecting()) {
        node.isProjectionDirty = node.parent.isProjectionDirty;
    }
    /**
     * Propagate isSharedProjectionDirty and isTransformDirty
     * throughout the whole tree. A future revision can take another look at
     * this but for safety we still recalcualte shared nodes.
     */
    node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty ||
        node.parent.isProjectionDirty ||
        node.parent.isSharedProjectionDirty));
    node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
    node.isProjectionDirty =
        node.isSharedProjectionDirty =
            node.isTransformDirty =
                false;
}
function clearSnapshot(node) {
    node.clearSnapshot();
}
function clearMeasurements(node) {
    node.clearMeasurements();
}
function resetTransformStyle(node) {
    const { visualElement } = node.options;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
        visualElement.notify("BeforeLayoutMeasure");
    }
    node.resetTransform();
}
function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = undefined;
}
function resolveTargetDelta(node) {
    node.resolveTargetDelta();
}
function calcProjection(node) {
    node.calcProjection();
}
function resetRotation(node) {
    node.resetRotation();
}
function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
    output.translate = mix(delta.translate, 0, p);
    output.scale = mix(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
    output.min = mix(from.min, to.min, p);
    output.max = mix(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
    return (node.animationValues && node.animationValues.opacityExit !== undefined);
}
const defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
};
function mountNodeEarly(node, elementId) {
    /**
     * Rather than searching the DOM from document we can search the
     * path for the deepest mounted ancestor and search from there
     */
    let searchNode = node.root;
    for (let i = node.path.length - 1; i >= 0; i--) {
        if (Boolean(node.path[i].instance)) {
            searchNode = node.path[i];
            break;
        }
    }
    const searchElement = searchNode && searchNode !== node.root ? searchNode.instance : document;
    const element = searchElement.querySelector(`[data-projection-id="${elementId}"]`);
    if (element)
        node.mount(element, true);
}
function roundAxis(axis) {
    axis.min = Math.round(axis.min);
    axis.max = Math.round(axis.max);
}
function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
    return (animationType === "position" ||
        (animationType === "preserve-aspect" &&
            !isNear(aspectRatio(snapshot), aspectRatio(layout), 0.2)));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs



const DocumentProjectionNode = createProjectionNode({
    attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => true,
});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs



const rootProjectionNode = {
    current: undefined,
};
const HTMLProjectionNode = createProjectionNode({
    measureScroll: (instance) => ({
        x: instance.scrollLeft,
        y: instance.scrollTop,
    }),
    defaultParent: () => {
        if (!rootProjectionNode.current) {
            const documentNode = new DocumentProjectionNode(0, {});
            documentNode.mount(window);
            documentNode.setOptions({ layoutScroll: true });
            rootProjectionNode.current = documentNode;
        }
        return rootProjectionNode.current;
    },
    resetTransform: (instance, value) => {
        instance.style.transform = value !== undefined ? value : "none";
    },
    checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed"),
});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/drag.mjs





const drag = {
    pan: {
        Feature: PanGesture,
    },
    drag: {
        Feature: DragGesture,
        ProjectionNode: HTMLProjectionNode,
        MeasureLayout: MeasureLayout,
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs








const positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
]);
const isPositionalKey = (key) => positionalKeys.has(key);
const hasPositionalKey = (target) => {
    return Object.keys(target).some(isPositionalKey);
};
const isNumOrPxType = (v) => v === number || v === px;
const getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
const getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform }) => {
    if (transform === "none" || !transform)
        return 0;
    const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
    }
    else {
        const matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
        }
        else {
            return 0;
        }
    }
};
const transformKeys = new Set(["x", "y", "z"]);
const nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key) => {
        const value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    // Apply changes to element before measurement
    if (removedTransforms.length)
        visualElement.render();
    return removedTransforms;
}
const positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
    height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
    top: (_bbox, { top }) => parseFloat(top),
    left: (_bbox, { left }) => parseFloat(left),
    bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
const convertChangedValueTypes = (target, visualElement, changedKeys) => {
    const originBbox = visualElement.measureViewportBox();
    const element = visualElement.current;
    const elementComputedStyle = getComputedStyle(element);
    const { display } = elementComputedStyle;
    const origin = {};
    // If the element is currently set to display: "none", make it visible before
    // measuring the target bounding box
    if (display === "none") {
        visualElement.setStaticValue("display", target.display || "block");
    }
    /**
     * Record origins before we render and update styles
     */
    changedKeys.forEach((key) => {
        origin[key] = positionalValues[key](originBbox, elementComputedStyle);
    });
    // Apply the latest values (as set in checkAndConvertChangedValueTypes)
    visualElement.render();
    const targetBbox = visualElement.measureViewportBox();
    changedKeys.forEach((key) => {
        // Restore styles to their **calculated computed style**, not their actual
        // originally set style. This allows us to animate between equivalent pixel units.
        const value = visualElement.getValue(key);
        value && value.jump(origin[key]);
        target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
};
const checkAndConvertChangedValueTypes = (visualElement, target, origin = {}, transitionEnd = {}) => {
    target = { ...target };
    transitionEnd = { ...transitionEnd };
    const targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    // We want to remove any transform values that could affect the element's bounding box before
    // it's measured. We'll reapply these later.
    let removedTransformValues = [];
    let hasAttemptedToRemoveTransformValues = false;
    const changedValueTypeKeys = [];
    targetPositionalKeys.forEach((key) => {
        const value = visualElement.getValue(key);
        if (!visualElement.hasValue(key))
            return;
        let from = origin[key];
        let fromType = findDimensionValueType(from);
        const to = target[key];
        let toType;
        // TODO: The current implementation of this basically throws an error
        // if you try and do value conversion via keyframes. There's probably
        // a way of doing this but the performance implications would need greater scrutiny,
        // as it'd be doing multiple resize-remeasure operations.
        if (isKeyframesTarget(to)) {
            const numKeyframes = to.length;
            const fromIndex = to[0] === null ? 1 : 0;
            from = to[fromIndex];
            fromType = findDimensionValueType(from);
            for (let i = fromIndex; i < numKeyframes; i++) {
                /**
                 * Don't allow wildcard keyframes to be used to detect
                 * a difference in value types.
                 */
                if (to[i] === null)
                    break;
                if (!toType) {
                    toType = findDimensionValueType(to[i]);
                    (0,errors/* invariant */.k)(toType === fromType ||
                        (isNumOrPxType(fromType) && isNumOrPxType(toType)), "Keyframes must be of the same dimension as the current value");
                }
                else {
                    (0,errors/* invariant */.k)(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
                }
            }
        }
        else {
            toType = findDimensionValueType(to);
        }
        if (fromType !== toType) {
            // If they're both just number or px, convert them both to numbers rather than
            // relying on resize/remeasure to convert (which is wasteful in this situation)
            if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                const current = value.get();
                if (typeof current === "string") {
                    value.set(parseFloat(current));
                }
                if (typeof to === "string") {
                    target[key] = parseFloat(to);
                }
                else if (Array.isArray(to) && toType === px) {
                    target[key] = to.map(parseFloat);
                }
            }
            else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) &&
                (toType === null || toType === void 0 ? void 0 : toType.transform) &&
                (from === 0 || to === 0)) {
                // If one or the other value is 0, it's safe to coerce it to the
                // type of the other without measurement
                if (from === 0) {
                    value.set(toType.transform(from));
                }
                else {
                    target[key] = fromType.transform(to);
                }
            }
            else {
                // If we're going to do value conversion via DOM measurements, we first
                // need to remove non-positional transform values that could affect the bbox measurements.
                if (!hasAttemptedToRemoveTransformValues) {
                    removedTransformValues =
                        removeNonTranslationalTransform(visualElement);
                    hasAttemptedToRemoveTransformValues = true;
                }
                changedValueTypeKeys.push(key);
                transitionEnd[key] =
                    transitionEnd[key] !== undefined
                        ? transitionEnd[key]
                        : target[key];
                value.jump(to);
            }
        }
    });
    if (changedValueTypeKeys.length) {
        const scrollY = changedValueTypeKeys.indexOf("height") >= 0
            ? window.pageYOffset
            : null;
        const convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
        // If we removed transform values, reapply them before the next render
        if (removedTransformValues.length) {
            removedTransformValues.forEach(([key, value]) => {
                visualElement.getValue(key).set(value);
            });
        }
        // Reapply original values
        visualElement.render();
        // Restore scroll position
        if (is_browser/* isBrowser */.j && scrollY !== null) {
            window.scrollTo({ top: scrollY });
        }
        return { target: convertedTarget, transitionEnd };
    }
    else {
        return { target, transitionEnd };
    }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @internal
 */
function unitConversion(visualElement, target, origin, transitionEnd) {
    return hasPositionalKey(target)
        ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd)
        : { target, transitionEnd };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs



/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */
const parseDomVariant = (visualElement, target, origin, transitionEnd) => {
    const resolved = resolveCSSVariables(visualElement, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return unitConversion(visualElement, target, origin, transitionEnd);
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
// Does this device prefer reduced motion? Returns `null` server-side.
const prefersReducedMotion = { current: null };
const hasReducedMotionListener = { current: false };



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs



function initPrefersReducedMotion() {
    hasReducedMotionListener.current = true;
    if (!is_browser/* isBrowser */.j)
        return;
    if (window.matchMedia) {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        const setReducedMotionPreferences = () => (prefersReducedMotion.current = motionMediaQuery.matches);
        motionMediaQuery.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        prefersReducedMotion.current = false;
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/motion-values.mjs





function updateMotionValuesFromProps(element, next, prev) {
    const { willChange } = next;
    for (const key in next) {
        const nextValue = next[key];
        const prevValue = prev[key];
        if (isMotionValue(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */
            element.addValue(key, nextValue);
            if (isWillChangeMotionValue(willChange)) {
                willChange.add(key);
            }
            /**
             * Check the version of the incoming motion value with this version
             * and warn against mismatches.
             */
            if (false) {}
        }
        else if (isMotionValue(prevValue)) {
            /**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */
            element.addValue(key, motionValue(nextValue, { owner: element }));
            if (isWillChangeMotionValue(willChange)) {
                willChange.remove(key);
            }
        }
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */
            if (element.hasValue(key)) {
                const existingValue = element.getValue(key);
                // TODO: Only update values that aren't being animated or even looked at
                !existingValue.hasAnimated && existingValue.set(nextValue);
            }
            else {
                const latestValue = element.getStaticValue(key);
                element.addValue(key, motionValue(latestValue !== undefined ? latestValue : nextValue, { owner: element }));
            }
        }
    }
    // Handle removed values
    for (const key in prev) {
        if (next[key] === undefined)
            element.removeValue(key);
    }
    return next;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/store.mjs
const visualElementStore = new WeakMap();



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/VisualElement.mjs




















const featureNames = Object.keys(featureDefinitions);
const numFeatures = featureNames.length;
const propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
];
const numVariantProps = variantProps.length;
/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */
class VisualElement {
    constructor({ parent, props, presenceContext, reducedMotionConfig, visualState, }, options = {}) {
        /**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */
        this.current = null;
        /**
         * A set containing references to this VisualElement's children.
         */
        this.children = new Set();
        /**
         * Determine what role this visual element should take in the variant tree.
         */
        this.isVariantNode = false;
        this.isControllingVariants = false;
        /**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */
        this.shouldReduceMotion = null;
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */
        this.values = new Map();
        /**
         * Cleanup functions for active features (hover/tap/exit etc)
         */
        this.features = {};
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */
        this.valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */
        this.prevMotionValues = {};
        /**
         * An object containing a SubscriptionManager for each active event.
         */
        this.events = {};
        /**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */
        this.propEventSubscriptions = {};
        this.notifyUpdate = () => this.notify("Update", this.latestValues);
        this.render = () => {
            if (!this.current)
                return;
            this.triggerBuild();
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
        };
        this.scheduleRender = () => frameloop/* frame.render */.Wi.render(this.render, false, true);
        const { latestValues, renderState } = visualState;
        this.latestValues = latestValues;
        this.baseTarget = { ...latestValues };
        this.initialValues = props.initial ? { ...latestValues } : {};
        this.renderState = renderState;
        this.parent = parent;
        this.props = props;
        this.presenceContext = presenceContext;
        this.depth = parent ? parent.depth + 1 : 0;
        this.reducedMotionConfig = reducedMotionConfig;
        this.options = options;
        this.isControllingVariants = isControllingVariants(props);
        this.isVariantNode = isVariantNode(props);
        if (this.isVariantNode) {
            this.variantChildren = new Set();
        }
        this.manuallyAnimateOnMount = Boolean(parent && parent.current);
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't neccessarily a breaking change,
         * more a reflection of the test.
         */
        const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {});
        for (const key in initialMotionValues) {
            const value = initialMotionValues[key];
            if (latestValues[key] !== undefined && isMotionValue(value)) {
                value.set(latestValues[key], false);
                if (isWillChangeMotionValue(willChange)) {
                    willChange.add(key);
                }
            }
        }
    }
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(_props, _prevProps) {
        return {};
    }
    mount(instance) {
        this.current = instance;
        visualElementStore.set(instance, this);
        if (this.projection) {
            this.projection.mount(instance);
        }
        if (this.parent && this.isVariantNode && !this.isControllingVariants) {
            this.removeFromVariantTree = this.parent.addVariantChild(this);
        }
        this.values.forEach((value, key) => this.bindToMotionValue(key, value));
        if (!hasReducedMotionListener.current) {
            initPrefersReducedMotion();
        }
        this.shouldReduceMotion =
            this.reducedMotionConfig === "never"
                ? false
                : this.reducedMotionConfig === "always"
                    ? true
                    : prefersReducedMotion.current;
        if (false) {}
        if (this.parent)
            this.parent.children.add(this);
        this.update(this.props, this.presenceContext);
    }
    unmount() {
        visualElementStore["delete"](this.current);
        this.projection && this.projection.unmount();
        (0,frameloop/* cancelFrame */.Pn)(this.notifyUpdate);
        (0,frameloop/* cancelFrame */.Pn)(this.render);
        this.valueSubscriptions.forEach((remove) => remove());
        this.removeFromVariantTree && this.removeFromVariantTree();
        this.parent && this.parent.children.delete(this);
        for (const key in this.events) {
            this.events[key].clear();
        }
        for (const key in this.features) {
            this.features[key].unmount();
        }
        this.current = null;
    }
    bindToMotionValue(key, value) {
        const valueIsTransform = transformProps.has(key);
        const removeOnChange = value.on("change", (latestValue) => {
            this.latestValues[key] = latestValue;
            this.props.onUpdate &&
                frameloop/* frame.update */.Wi.update(this.notifyUpdate, false, true);
            if (valueIsTransform && this.projection) {
                this.projection.isTransformDirty = true;
            }
        });
        const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(key, () => {
            removeOnChange();
            removeOnRenderRequest();
        });
    }
    sortNodePosition(other) {
        /**
         * If these nodes aren't even of the same type we can't compare their depth.
         */
        if (!this.current ||
            !this.sortInstanceNodePosition ||
            this.type !== other.type) {
            return 0;
        }
        return this.sortInstanceNodePosition(this.current, other.current);
    }
    loadFeatures({ children, ...renderedProps }, isStrict, preloadedFeatures, projectionId, initialLayoutGroupConfig) {
        let ProjectionNodeConstructor;
        let MeasureLayout;
        /**
         * If we're in development mode, check to make sure we're not rendering a motion component
         * as a child of LazyMotion, as this will break the file-size benefits of using it.
         */
        if (false) {}
        for (let i = 0; i < numFeatures; i++) {
            const name = featureNames[i];
            const { isEnabled, Feature: FeatureConstructor, ProjectionNode, MeasureLayout: MeasureLayoutComponent, } = featureDefinitions[name];
            if (ProjectionNode)
                ProjectionNodeConstructor = ProjectionNode;
            if (isEnabled(renderedProps)) {
                if (!this.features[name] && FeatureConstructor) {
                    this.features[name] = new FeatureConstructor(this);
                }
                if (MeasureLayoutComponent) {
                    MeasureLayout = MeasureLayoutComponent;
                }
            }
        }
        if (!this.projection && ProjectionNodeConstructor) {
            this.projection = new ProjectionNodeConstructor(projectionId, this.latestValues, this.parent && this.parent.projection);
            const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot, } = renderedProps;
            this.projection.setOptions({
                layoutId,
                layout,
                alwaysMeasureLayout: Boolean(drag) ||
                    (dragConstraints && isRefObject(dragConstraints)),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                /**
                 * TODO: Update options in an effect. This could be tricky as it'll be too late
                 * to update by the time layout animations run.
                 * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
                 * ensuring it gets called if there's no potential layout animations.
                 *
                 */
                animationType: typeof layout === "string" ? layout : "both",
                initialPromotionConfig: initialLayoutGroupConfig,
                layoutScroll,
                layoutRoot,
            });
        }
        return MeasureLayout;
    }
    updateFeatures() {
        for (const key in this.features) {
            const feature = this.features[key];
            if (feature.isMounted) {
                feature.update(this.props, this.prevProps);
            }
            else {
                feature.mount();
                feature.isMounted = true;
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox() {
        return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : createBox();
    }
    getStaticValue(key) {
        return this.latestValues[key];
    }
    setStaticValue(key, value) {
        this.latestValues[key] = value;
    }
    /**
     * Make a target animatable by Popmotion. For instance, if we're
     * trying to animate width from 100px to 100vw we need to measure 100vw
     * in pixels to determine what we really need to animate to. This is also
     * pluggable to support Framer's custom value types like Color,
     * and CSS variables.
     */
    makeTargetAnimatable(target, canMutate = true) {
        return this.makeTargetAnimatableFromInstance(target, this.props, canMutate);
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(props, presenceContext) {
        if (props.transformTemplate || this.props.transformTemplate) {
            this.scheduleRender();
        }
        this.prevProps = this.props;
        this.props = props;
        this.prevPresenceContext = this.presenceContext;
        this.presenceContext = presenceContext;
        /**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */
        for (let i = 0; i < propEventHandlers.length; i++) {
            const key = propEventHandlers[i];
            if (this.propEventSubscriptions[key]) {
                this.propEventSubscriptions[key]();
                delete this.propEventSubscriptions[key];
            }
            const listener = props["on" + key];
            if (listener) {
                this.propEventSubscriptions[key] = this.on(key, listener);
            }
        }
        this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps), this.prevMotionValues);
        if (this.handleChildMotionValue) {
            this.handleChildMotionValue();
        }
    }
    getProps() {
        return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(name) {
        return this.props.variants ? this.props.variants[name] : undefined;
    }
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode
            ? this
            : this.parent
                ? this.parent.getClosestVariantNode()
                : undefined;
    }
    getVariantContext(startAtParent = false) {
        if (startAtParent) {
            return this.parent ? this.parent.getVariantContext() : undefined;
        }
        if (!this.isControllingVariants) {
            const context = this.parent
                ? this.parent.getVariantContext() || {}
                : {};
            if (this.props.initial !== undefined) {
                context.initial = this.props.initial;
            }
            return context;
        }
        const context = {};
        for (let i = 0; i < numVariantProps; i++) {
            const name = variantProps[i];
            const prop = this.props[name];
            if (isVariantLabel(prop) || prop === false) {
                context[name] = prop;
            }
        }
        return context;
    }
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(child) {
        const closestVariantNode = this.getClosestVariantNode();
        if (closestVariantNode) {
            closestVariantNode.variantChildren &&
                closestVariantNode.variantChildren.add(child);
            return () => closestVariantNode.variantChildren.delete(child);
        }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(key, value) {
        // Remove existing value if it exists
        if (value !== this.values.get(key)) {
            this.removeValue(key);
            this.bindToMotionValue(key, value);
        }
        this.values.set(key, value);
        this.latestValues[key] = value.get();
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(key) {
        this.values.delete(key);
        const unsubscribe = this.valueSubscriptions.get(key);
        if (unsubscribe) {
            unsubscribe();
            this.valueSubscriptions.delete(key);
        }
        delete this.latestValues[key];
        this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(key) {
        return this.values.has(key);
    }
    getValue(key, defaultValue) {
        if (this.props.values && this.props.values[key]) {
            return this.props.values[key];
        }
        let value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = motionValue(defaultValue, { owner: this });
            this.addValue(key, value);
        }
        return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(key) {
        return this.latestValues[key] !== undefined || !this.current
            ? this.latestValues[key]
            : this.readValueFromInstance(this.current, key, this.options);
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(key, value) {
        this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(key) {
        var _a;
        const { initial } = this.props;
        const valueFromInitial = typeof initial === "string" || typeof initial === "object"
            ? (_a = resolveVariantFromProps(this.props, initial)) === null || _a === void 0 ? void 0 : _a[key]
            : undefined;
        /**
         * If this value still exists in the current initial variant, read that.
         */
        if (initial && valueFromInitial !== undefined) {
            return valueFromInitial;
        }
        /**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */
        const target = this.getBaseTargetFromProps(this.props, key);
        if (target !== undefined && !isMotionValue(target))
            return target;
        /**
         * If the value was initially defined on initial, but it doesn't any more,
         * return undefined. Otherwise return the value as initially read from the DOM.
         */
        return this.initialValues[key] !== undefined &&
            valueFromInitial === undefined
            ? undefined
            : this.baseTarget[key];
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new SubscriptionManager();
        }
        return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].notify(...args);
        }
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs




class DOMVisualElement extends VisualElement {
    sortInstanceNodePosition(a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
        return props.style ? props.style[key] : undefined;
    }
    removeValueFromRenderState(key, { vars, style }) {
        delete vars[key];
        delete style[key];
    }
    makeTargetAnimatableFromInstance({ transition, transitionEnd, ...target }, { transformValues }, isMounted) {
        let origin = getOrigin(target, transition || {}, this);
        /**
         * If Framer has provided a function to convert `Color` etc value types, convert them
         */
        if (transformValues) {
            if (transitionEnd)
                transitionEnd = transformValues(transitionEnd);
            if (target)
                target = transformValues(target);
            if (origin)
                origin = transformValues(origin);
        }
        if (isMounted) {
            checkTargetForNewValues(this, target, origin);
            const parsed = parseDomVariant(this, target, origin, transitionEnd);
            transitionEnd = parsed.transitionEnd;
            target = parsed.target;
        }
        return {
            transition,
            transitionEnd,
            ...target,
        };
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs










function HTMLVisualElement_getComputedStyle(element) {
    return window.getComputedStyle(element);
}
class HTMLVisualElement extends DOMVisualElement {
    readValueFromInstance(instance, key) {
        if (transformProps.has(key)) {
            const defaultType = getDefaultValueType(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        else {
            const computedStyle = HTMLVisualElement_getComputedStyle(instance);
            const value = (isCSSVariableName(key)
                ? computedStyle.getPropertyValue(key)
                : computedStyle[key]) || 0;
            return typeof value === "string" ? value.trim() : value;
        }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
        return measureViewportBox(instance, transformPagePoint);
    }
    build(renderState, latestValues, options, props) {
        buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps) {
        return scrapeMotionValuesFromProps(props, prevProps);
    }
    handleChildMotionValue() {
        if (this.childSubscription) {
            this.childSubscription();
            delete this.childSubscription;
        }
        const { children } = this.props;
        if (isMotionValue(children)) {
            this.childSubscription = children.on("change", (latest) => {
                if (this.current)
                    this.current.textContent = `${latest}`;
            });
        }
    }
    renderInstance(instance, renderState, styleProp, projection) {
        renderHTML(instance, renderState, styleProp, projection);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs











class SVGVisualElement extends DOMVisualElement {
    constructor() {
        super(...arguments);
        this.isSVGTag = false;
    }
    getBaseTargetFromProps(props, key) {
        return props[key];
    }
    readValueFromInstance(instance, key) {
        if (transformProps.has(key)) {
            const defaultType = getDefaultValueType(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
        return instance.getAttribute(key);
    }
    measureInstanceViewportBox() {
        return createBox();
    }
    scrapeMotionValuesFromProps(props, prevProps) {
        return scrape_motion_values_scrapeMotionValuesFromProps(props, prevProps);
    }
    build(renderState, latestValues, options, props) {
        buildSVGAttrs(renderState, latestValues, options, this.isSVGTag, props.transformTemplate);
    }
    renderInstance(instance, renderState, styleProp, projection) {
        renderSVG(instance, renderState, styleProp, projection);
    }
    mount(instance) {
        this.isSVGTag = isSVGTag(instance.tagName);
        super.mount(instance);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs




const create_visual_element_createDomVisualElement = (Component, options) => {
    return isSVGComponent(Component)
        ? new SVGVisualElement(options, { enableHardwareAcceleration: false })
        : new HTMLVisualElement(options, { enableHardwareAcceleration: true });
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/layout.mjs



const layout = {
    layout: {
        ProjectionNode: HTMLProjectionNode,
        MeasureLayout: MeasureLayout,
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs









const preloadedFeatures = {
    ...animations,
    ...gestureAnimations,
    ...drag,
    ...layout,
};
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
const motion = /*@__PURE__*/ createMotionProxy((Component, config) => create_config_createDomMotionConfig(Component, config, preloadedFeatures, create_visual_element_createDomVisualElement));
/**
 * Create a DOM `motion` component with the provided string. This is primarily intended
 * as a full alternative to `motion` for consumers who have to support environments that don't
 * support `Proxy`.
 *
 * ```javascript
 * import { createDomMotionComponent } from "framer-motion"
 *
 * const motion = {
 *   div: createDomMotionComponent('div')
 * }
 * ```
 *
 * @public
 */
function createDomMotionComponent(key) {
    return createMotionComponent(createDomMotionConfig(key, { forwardMotionProps: false }, preloadedFeatures, createDomVisualElement));
}




/***/ }),

/***/ 71668:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ filterProps),
  "K": () => (/* binding */ loadExternalIsValidProp)
});

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
const validMotionProps = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "onLayoutAnimationStart",
    "onLayoutAnimationComplete",
    "onLayoutMeasure",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "ignoreStrict",
    "viewport",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return (key.startsWith("while") ||
        (key.startsWith("drag") && key !== "draggable") ||
        key.startsWith("layout") ||
        key.startsWith("onTap") ||
        key.startsWith("onPan") ||
        validMotionProps.has(key));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs


let shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
    if (!isValidProp)
        return;
    // Explicitly filter our events
    shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    /**
     * We attempt to import this package but require won't be defined in esm environments, in that case
     * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
     * in favour of explicit injection.
     */
    loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
    const filteredProps = {};
    for (const key in props) {
        /**
         * values is considered a valid prop by Emotion, so if it's present
         * this will be rendered out to the DOM unless explicitly filtered.
         *
         * We check the type as it could be used with the `feColorMatrix`
         * element, which we support.
         */
        if (key === "values" && typeof props.values === "object")
            continue;
        if (shouldForward(key) ||
            (forwardMotionProps === true && isValidMotionProp(key)) ||
            (!isDom && !isValidMotionProp(key)) ||
            // If trying to use native HTML drag events, forward drag listeners
            (props["draggable"] && key.startsWith("onDrag"))) {
            filteredProps[key] = props[key];
        }
    }
    return filteredProps;
}




/***/ }),

/***/ 97456:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ warning),
/* harmony export */   "k": () => (/* binding */ invariant)
/* harmony export */ });
/* harmony import */ var _noop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39002);


let warning = _noop_mjs__WEBPACK_IMPORTED_MODULE_0__/* .noop */ .Z;
let invariant = _noop_mjs__WEBPACK_IMPORTED_MODULE_0__/* .noop */ .Z;
if (false) {}




/***/ }),

/***/ 97121:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ isBrowser)
/* harmony export */ });
const isBrowser = typeof document !== "undefined";




/***/ }),

/***/ 39002:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ noop)
/* harmony export */ });
const noop = (any) => any;




/***/ }),

/***/ 39591:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useConstant)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);


/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}




/***/ }),

/***/ 8886:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97121);



const useIsomorphicLayoutEffect = _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isBrowser */ .j ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;




/***/ })

};
;