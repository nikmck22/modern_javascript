/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// var moment = require('moment');\n// console.log('hello');\n// var slugify = require(\"underscore.string/slugify\");\nvar s = __webpack_require__(/*! underscore.string */ \"./node_modules/underscore.string/index.js\");\n\ns(\"   epeli  \").trim().capitalize().value();\nconsole.log('HI EVERYONE'); // slugify(\"Hello world!\");\n// console.log(dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A'))\n\nvar _ref = [1, 2, 3],\n    a = _ref[0],\n    b = _ref[2];\na === 1;\nb === 3;\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/sprintf-js/src/sprintf.js":
/*!************************************************!*\
  !*** ./node_modules/sprintf-js/src/sprintf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/* global window, exports, define */\n\n!function() {\n    'use strict'\n\n    var re = {\n        not_string: /[^s]/,\n        not_bool: /[^t]/,\n        not_type: /[^T]/,\n        not_primitive: /[^v]/,\n        number: /[diefg]/,\n        numeric_arg: /[bcdiefguxX]/,\n        json: /[j]/,\n        not_json: /[^j]/,\n        text: /^[^\\x25]+/,\n        modulo: /^\\x25{2}/,\n        placeholder: /^\\x25(?:([1-9]\\d*)\\$|\\(([^)]+)\\))?(\\+)?(0|'[^$])?(-)?(\\d+)?(?:\\.(\\d+))?([b-gijostTuvxX])/,\n        key: /^([a-z_][a-z_\\d]*)/i,\n        key_access: /^\\.([a-z_][a-z_\\d]*)/i,\n        index_access: /^\\[(\\d+)\\]/,\n        sign: /^[+-]/\n    }\n\n    function sprintf(key) {\n        // `arguments` is not an array, but should be fine for this call\n        return sprintf_format(sprintf_parse(key), arguments)\n    }\n\n    function vsprintf(fmt, argv) {\n        return sprintf.apply(null, [fmt].concat(argv || []))\n    }\n\n    function sprintf_format(parse_tree, argv) {\n        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, ph, pad, pad_character, pad_length, is_positive, sign\n        for (i = 0; i < tree_length; i++) {\n            if (typeof parse_tree[i] === 'string') {\n                output += parse_tree[i]\n            }\n            else if (typeof parse_tree[i] === 'object') {\n                ph = parse_tree[i] // convenience purposes only\n                if (ph.keys) { // keyword argument\n                    arg = argv[cursor]\n                    for (k = 0; k < ph.keys.length; k++) {\n                        if (arg == undefined) {\n                            throw new Error(sprintf('[sprintf] Cannot access property \"%s\" of undefined value \"%s\"', ph.keys[k], ph.keys[k-1]))\n                        }\n                        arg = arg[ph.keys[k]]\n                    }\n                }\n                else if (ph.param_no) { // positional argument (explicit)\n                    arg = argv[ph.param_no]\n                }\n                else { // positional argument (implicit)\n                    arg = argv[cursor++]\n                }\n\n                if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {\n                    arg = arg()\n                }\n\n                if (re.numeric_arg.test(ph.type) && (typeof arg !== 'number' && isNaN(arg))) {\n                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))\n                }\n\n                if (re.number.test(ph.type)) {\n                    is_positive = arg >= 0\n                }\n\n                switch (ph.type) {\n                    case 'b':\n                        arg = parseInt(arg, 10).toString(2)\n                        break\n                    case 'c':\n                        arg = String.fromCharCode(parseInt(arg, 10))\n                        break\n                    case 'd':\n                    case 'i':\n                        arg = parseInt(arg, 10)\n                        break\n                    case 'j':\n                        arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0)\n                        break\n                    case 'e':\n                        arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential()\n                        break\n                    case 'f':\n                        arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg)\n                        break\n                    case 'g':\n                        arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg)\n                        break\n                    case 'o':\n                        arg = (parseInt(arg, 10) >>> 0).toString(8)\n                        break\n                    case 's':\n                        arg = String(arg)\n                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)\n                        break\n                    case 't':\n                        arg = String(!!arg)\n                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)\n                        break\n                    case 'T':\n                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()\n                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)\n                        break\n                    case 'u':\n                        arg = parseInt(arg, 10) >>> 0\n                        break\n                    case 'v':\n                        arg = arg.valueOf()\n                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)\n                        break\n                    case 'x':\n                        arg = (parseInt(arg, 10) >>> 0).toString(16)\n                        break\n                    case 'X':\n                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase()\n                        break\n                }\n                if (re.json.test(ph.type)) {\n                    output += arg\n                }\n                else {\n                    if (re.number.test(ph.type) && (!is_positive || ph.sign)) {\n                        sign = is_positive ? '+' : '-'\n                        arg = arg.toString().replace(re.sign, '')\n                    }\n                    else {\n                        sign = ''\n                    }\n                    pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' '\n                    pad_length = ph.width - (sign + arg).length\n                    pad = ph.width ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : ''\n                    output += ph.align ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg)\n                }\n            }\n        }\n        return output\n    }\n\n    var sprintf_cache = Object.create(null)\n\n    function sprintf_parse(fmt) {\n        if (sprintf_cache[fmt]) {\n            return sprintf_cache[fmt]\n        }\n\n        var _fmt = fmt, match, parse_tree = [], arg_names = 0\n        while (_fmt) {\n            if ((match = re.text.exec(_fmt)) !== null) {\n                parse_tree.push(match[0])\n            }\n            else if ((match = re.modulo.exec(_fmt)) !== null) {\n                parse_tree.push('%')\n            }\n            else if ((match = re.placeholder.exec(_fmt)) !== null) {\n                if (match[2]) {\n                    arg_names |= 1\n                    var field_list = [], replacement_field = match[2], field_match = []\n                    if ((field_match = re.key.exec(replacement_field)) !== null) {\n                        field_list.push(field_match[1])\n                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {\n                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {\n                                field_list.push(field_match[1])\n                            }\n                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {\n                                field_list.push(field_match[1])\n                            }\n                            else {\n                                throw new SyntaxError('[sprintf] failed to parse named argument key')\n                            }\n                        }\n                    }\n                    else {\n                        throw new SyntaxError('[sprintf] failed to parse named argument key')\n                    }\n                    match[2] = field_list\n                }\n                else {\n                    arg_names |= 2\n                }\n                if (arg_names === 3) {\n                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')\n                }\n\n                parse_tree.push(\n                    {\n                        placeholder: match[0],\n                        param_no:    match[1],\n                        keys:        match[2],\n                        sign:        match[3],\n                        pad_char:    match[4],\n                        align:       match[5],\n                        width:       match[6],\n                        precision:   match[7],\n                        type:        match[8]\n                    }\n                )\n            }\n            else {\n                throw new SyntaxError('[sprintf] unexpected placeholder')\n            }\n            _fmt = _fmt.substring(match[0].length)\n        }\n        return sprintf_cache[fmt] = parse_tree\n    }\n\n    /**\n     * export to either browser or node.js\n     */\n    /* eslint-disable quote-props */\n    if (true) {\n        exports['sprintf'] = sprintf\n        exports['vsprintf'] = vsprintf\n    }\n    if (typeof window !== 'undefined') {\n        window['sprintf'] = sprintf\n        window['vsprintf'] = vsprintf\n\n        if (true) {\n            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {\n                return {\n                    'sprintf': sprintf,\n                    'vsprintf': vsprintf\n                }\n            }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n        }\n    }\n    /* eslint-enable quote-props */\n}(); // eslint-disable-line\n\n\n//# sourceURL=webpack:///./node_modules/sprintf-js/src/sprintf.js?");

/***/ }),

/***/ "./node_modules/underscore.string/camelize.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore.string/camelize.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var trim = __webpack_require__(/*! ./trim */ \"./node_modules/underscore.string/trim.js\");\nvar decap = __webpack_require__(/*! ./decapitalize */ \"./node_modules/underscore.string/decapitalize.js\");\n\nmodule.exports = function camelize(str, decapitalize) {\n  str = trim(str).replace(/[-_\\s]+(.)?/g, function(match, c) {\n    return c ? c.toUpperCase() : '';\n  });\n\n  if (decapitalize === true) {\n    return decap(str);\n  } else {\n    return str;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/camelize.js?");

/***/ }),

/***/ "./node_modules/underscore.string/capitalize.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore.string/capitalize.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function capitalize(str, lowercaseRest) {\n  str = makeString(str);\n  var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();\n\n  return str.charAt(0).toUpperCase() + remainingChars;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/capitalize.js?");

/***/ }),

/***/ "./node_modules/underscore.string/chars.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore.string/chars.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function chars(str) {\n  return makeString(str).split('');\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/chars.js?");

/***/ }),

/***/ "./node_modules/underscore.string/chop.js":
/*!************************************************!*\
  !*** ./node_modules/underscore.string/chop.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function chop(str, step) {\n  if (str == null) return [];\n  str = String(str);\n  step = ~~step;\n  return step > 0 ? str.match(new RegExp('.{1,' + step + '}', 'g')) : [str];\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/chop.js?");

/***/ }),

/***/ "./node_modules/underscore.string/classify.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore.string/classify.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var capitalize = __webpack_require__(/*! ./capitalize */ \"./node_modules/underscore.string/capitalize.js\");\nvar camelize = __webpack_require__(/*! ./camelize */ \"./node_modules/underscore.string/camelize.js\");\nvar makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function classify(str) {\n  str = makeString(str);\n  return capitalize(camelize(str.replace(/[\\W_]/g, ' ')).replace(/\\s/g, ''));\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/classify.js?");

/***/ }),

/***/ "./node_modules/underscore.string/clean.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore.string/clean.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var trim = __webpack_require__(/*! ./trim */ \"./node_modules/underscore.string/trim.js\");\n\nmodule.exports = function clean(str) {\n  return trim(str).replace(/\\s\\s+/g, ' ');\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/clean.js?");

/***/ }),

/***/ "./node_modules/underscore.string/cleanDiacritics.js":
/*!***********************************************************!*\
  !*** ./node_modules/underscore.string/cleanDiacritics.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nvar from  = 'ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž',\n  to    = 'aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz';\n\nfrom += from.toUpperCase();\nto += to.toUpperCase();\n\nto = to.split('');\n\n// for tokens requireing multitoken output\nfrom += 'ß';\nto.push('ss');\n\n\nmodule.exports = function cleanDiacritics(str) {\n  return makeString(str).replace(/.{1}/g, function(c){\n    var index = from.indexOf(c);\n    return index === -1 ? c : to[index];\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/cleanDiacritics.js?");

/***/ }),

/***/ "./node_modules/underscore.string/count.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore.string/count.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function(str, substr) {\n  str = makeString(str);\n  substr = makeString(substr);\n\n  if (str.length === 0 || substr.length === 0) return 0;\n  \n  return str.split(substr).length - 1;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/count.js?");

/***/ }),

/***/ "./node_modules/underscore.string/dasherize.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore.string/dasherize.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var trim = __webpack_require__(/*! ./trim */ \"./node_modules/underscore.string/trim.js\");\n\nmodule.exports = function dasherize(str) {\n  return trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\\s]+/g, '-').toLowerCase();\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/dasherize.js?");

/***/ }),

/***/ "./node_modules/underscore.string/decapitalize.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore.string/decapitalize.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function decapitalize(str) {\n  str = makeString(str);\n  return str.charAt(0).toLowerCase() + str.slice(1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/decapitalize.js?");

/***/ }),

/***/ "./node_modules/underscore.string/dedent.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore.string/dedent.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nfunction getIndent(str) {\n  var matches = str.match(/^[\\s\\\\t]*/gm);\n  var indent = matches[0].length;\n  \n  for (var i = 1; i < matches.length; i++) {\n    indent = Math.min(matches[i].length, indent);\n  }\n\n  return indent;\n}\n\nmodule.exports = function dedent(str, pattern) {\n  str = makeString(str);\n  var indent = getIndent(str);\n  var reg;\n\n  if (indent === 0) return str;\n\n  if (typeof pattern === 'string') {\n    reg = new RegExp('^' + pattern, 'gm');\n  } else {\n    reg = new RegExp('^[ \\\\t]{' + indent + '}', 'gm');\n  }\n\n  return str.replace(reg, '');\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/dedent.js?");

/***/ }),

/***/ "./node_modules/underscore.string/endsWith.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore.string/endsWith.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\nvar toPositive = __webpack_require__(/*! ./helper/toPositive */ \"./node_modules/underscore.string/helper/toPositive.js\");\n\nmodule.exports = function endsWith(str, ends, position) {\n  str = makeString(str);\n  ends = '' + ends;\n  if (typeof position == 'undefined') {\n    position = str.length - ends.length;\n  } else {\n    position = Math.min(toPositive(position), str.length) - ends.length;\n  }\n  return position >= 0 && str.indexOf(ends, position) === position;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/endsWith.js?");

/***/ }),

/***/ "./node_modules/underscore.string/escapeHTML.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore.string/escapeHTML.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\nvar escapeChars = __webpack_require__(/*! ./helper/escapeChars */ \"./node_modules/underscore.string/helper/escapeChars.js\");\n\nvar regexString = '[';\nfor(var key in escapeChars) {\n  regexString += key;\n}\nregexString += ']';\n\nvar regex = new RegExp( regexString, 'g');\n\nmodule.exports = function escapeHTML(str) {\n\n  return makeString(str).replace(regex, function(m) {\n    return '&' + escapeChars[m] + ';';\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/escapeHTML.js?");

/***/ }),

/***/ "./node_modules/underscore.string/exports.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore.string/exports.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {\n  var result = {};\n\n  for (var prop in this) {\n    if (!this.hasOwnProperty(prop) || prop.match(/^(?:include|contains|reverse|join|map|wrap)$/)) continue;\n    result[prop] = this[prop];\n  }\n\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/exports.js?");

/***/ }),

/***/ "./node_modules/underscore.string/helper/adjacent.js":
/*!***********************************************************!*\
  !*** ./node_modules/underscore.string/helper/adjacent.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function adjacent(str, direction) {\n  str = makeString(str);\n  if (str.length === 0) {\n    return '';\n  }\n  return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction);\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/helper/adjacent.js?");

/***/ }),

/***/ "./node_modules/underscore.string/helper/defaultToWhiteSpace.js":
/*!**********************************************************************!*\
  !*** ./node_modules/underscore.string/helper/defaultToWhiteSpace.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escapeRegExp = __webpack_require__(/*! ./escapeRegExp */ \"./node_modules/underscore.string/helper/escapeRegExp.js\");\n\nmodule.exports = function defaultToWhiteSpace(characters) {\n  if (characters == null)\n    return '\\\\s';\n  else if (characters.source)\n    return characters.source;\n  else\n    return '[' + escapeRegExp(characters) + ']';\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/helper/defaultToWhiteSpace.js?");

/***/ }),

/***/ "./node_modules/underscore.string/helper/escapeChars.js":
/*!**************************************************************!*\
  !*** ./node_modules/underscore.string/helper/escapeChars.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* We're explicitly defining the list of entities we want to escape.\nnbsp is an HTML entity, but we don't want to escape all space characters in a string, hence its omission in this map.\n\n*/\nvar escapeChars = {\n  '¢' : 'cent',\n  '£' : 'pound',\n  '¥' : 'yen',\n  '€': 'euro',\n  '©' :'copy',\n  '®' : 'reg',\n  '<' : 'lt',\n  '>' : 'gt',\n  '\"' : 'quot',\n  '&' : 'amp',\n  '\\'' : '#39'\n};\n\nmodule.exports = escapeChars;\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/helper/escapeChars.js?");

/***/ }),

/***/ "./node_modules/underscore.string/helper/escapeRegExp.js":
/*!***************************************************************!*\
  !*** ./node_modules/underscore.string/helper/escapeRegExp.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function escapeRegExp(str) {\n  return makeString(str).replace(/([.*+?^=!:${}()|[\\]\\/\\\\])/g, '\\\\$1');\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/helper/escapeRegExp.js?");

/***/ }),

/***/ "./node_modules/underscore.string/helper/htmlEntities.js":
/*!***************************************************************!*\
  !*** ./node_modules/underscore.string/helper/htmlEntities.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nWe're explicitly defining the list of entities that might see in escape HTML strings\n*/\nvar htmlEntities = {\n  nbsp: ' ',\n  cent: '¢',\n  pound: '£',\n  yen: '¥',\n  euro: '€',\n  copy: '©',\n  reg: '®',\n  lt: '<',\n  gt: '>',\n  quot: '\"',\n  amp: '&',\n  apos: '\\''\n};\n\nmodule.exports = htmlEntities;\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/helper/htmlEntities.js?");

/***/ }),

/***/ "./node_modules/underscore.string/helper/makeString.js":
/*!*************************************************************!*\
  !*** ./node_modules/underscore.string/helper/makeString.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Ensure some object is a coerced to a string\n **/\nmodule.exports = function makeString(object) {\n  if (object == null) return '';\n  return '' + object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/helper/makeString.js?");

/***/ }),

/***/ "./node_modules/underscore.string/helper/strRepeat.js":
/*!************************************************************!*\
  !*** ./node_modules/underscore.string/helper/strRepeat.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function strRepeat(str, qty){\n  if (qty < 1) return '';\n  var result = '';\n  while (qty > 0) {\n    if (qty & 1) result += str;\n    qty >>= 1, str += str;\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/helper/strRepeat.js?");

/***/ }),

/***/ "./node_modules/underscore.string/helper/toPositive.js":
/*!*************************************************************!*\
  !*** ./node_modules/underscore.string/helper/toPositive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function toPositive(number) {\n  return number < 0 ? 0 : (+number || 0);\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/helper/toPositive.js?");

/***/ }),

/***/ "./node_modules/underscore.string/humanize.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore.string/humanize.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var capitalize = __webpack_require__(/*! ./capitalize */ \"./node_modules/underscore.string/capitalize.js\");\nvar underscored = __webpack_require__(/*! ./underscored */ \"./node_modules/underscore.string/underscored.js\");\nvar trim = __webpack_require__(/*! ./trim */ \"./node_modules/underscore.string/trim.js\");\n\nmodule.exports = function humanize(str) {\n  return capitalize(trim(underscored(str).replace(/_id$/, '').replace(/_/g, ' ')));\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/humanize.js?");

/***/ }),

/***/ "./node_modules/underscore.string/include.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore.string/include.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function include(str, needle) {\n  if (needle === '') return true;\n  return makeString(str).indexOf(needle) !== -1;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/include.js?");

/***/ }),

/***/ "./node_modules/underscore.string/index.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore.string/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\n* Underscore.string\n* (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>\n* Underscore.string is freely distributable under the terms of the MIT license.\n* Documentation: https://github.com/epeli/underscore.string\n* Some code is borrowed from MooTools and Alexandru Marasteanu.\n* Version '3.3.4'\n* @preserve\n*/\n\n\n\nfunction s(value) {\n  /* jshint validthis: true */\n  if (!(this instanceof s)) return new s(value);\n  this._wrapped = value;\n}\n\ns.VERSION = '3.3.4';\n\ns.isBlank          = __webpack_require__(/*! ./isBlank */ \"./node_modules/underscore.string/isBlank.js\");\ns.stripTags        = __webpack_require__(/*! ./stripTags */ \"./node_modules/underscore.string/stripTags.js\");\ns.capitalize       = __webpack_require__(/*! ./capitalize */ \"./node_modules/underscore.string/capitalize.js\");\ns.decapitalize     = __webpack_require__(/*! ./decapitalize */ \"./node_modules/underscore.string/decapitalize.js\");\ns.chop             = __webpack_require__(/*! ./chop */ \"./node_modules/underscore.string/chop.js\");\ns.trim             = __webpack_require__(/*! ./trim */ \"./node_modules/underscore.string/trim.js\");\ns.clean            = __webpack_require__(/*! ./clean */ \"./node_modules/underscore.string/clean.js\");\ns.cleanDiacritics  = __webpack_require__(/*! ./cleanDiacritics */ \"./node_modules/underscore.string/cleanDiacritics.js\");\ns.count            = __webpack_require__(/*! ./count */ \"./node_modules/underscore.string/count.js\");\ns.chars            = __webpack_require__(/*! ./chars */ \"./node_modules/underscore.string/chars.js\");\ns.swapCase         = __webpack_require__(/*! ./swapCase */ \"./node_modules/underscore.string/swapCase.js\");\ns.escapeHTML       = __webpack_require__(/*! ./escapeHTML */ \"./node_modules/underscore.string/escapeHTML.js\");\ns.unescapeHTML     = __webpack_require__(/*! ./unescapeHTML */ \"./node_modules/underscore.string/unescapeHTML.js\");\ns.splice           = __webpack_require__(/*! ./splice */ \"./node_modules/underscore.string/splice.js\");\ns.insert           = __webpack_require__(/*! ./insert */ \"./node_modules/underscore.string/insert.js\");\ns.replaceAll       = __webpack_require__(/*! ./replaceAll */ \"./node_modules/underscore.string/replaceAll.js\");\ns.include          = __webpack_require__(/*! ./include */ \"./node_modules/underscore.string/include.js\");\ns.join             = __webpack_require__(/*! ./join */ \"./node_modules/underscore.string/join.js\");\ns.lines            = __webpack_require__(/*! ./lines */ \"./node_modules/underscore.string/lines.js\");\ns.dedent           = __webpack_require__(/*! ./dedent */ \"./node_modules/underscore.string/dedent.js\");\ns.reverse          = __webpack_require__(/*! ./reverse */ \"./node_modules/underscore.string/reverse.js\");\ns.startsWith       = __webpack_require__(/*! ./startsWith */ \"./node_modules/underscore.string/startsWith.js\");\ns.endsWith         = __webpack_require__(/*! ./endsWith */ \"./node_modules/underscore.string/endsWith.js\");\ns.pred             = __webpack_require__(/*! ./pred */ \"./node_modules/underscore.string/pred.js\");\ns.succ             = __webpack_require__(/*! ./succ */ \"./node_modules/underscore.string/succ.js\");\ns.titleize         = __webpack_require__(/*! ./titleize */ \"./node_modules/underscore.string/titleize.js\");\ns.camelize         = __webpack_require__(/*! ./camelize */ \"./node_modules/underscore.string/camelize.js\");\ns.underscored      = __webpack_require__(/*! ./underscored */ \"./node_modules/underscore.string/underscored.js\");\ns.dasherize        = __webpack_require__(/*! ./dasherize */ \"./node_modules/underscore.string/dasherize.js\");\ns.classify         = __webpack_require__(/*! ./classify */ \"./node_modules/underscore.string/classify.js\");\ns.humanize         = __webpack_require__(/*! ./humanize */ \"./node_modules/underscore.string/humanize.js\");\ns.ltrim            = __webpack_require__(/*! ./ltrim */ \"./node_modules/underscore.string/ltrim.js\");\ns.rtrim            = __webpack_require__(/*! ./rtrim */ \"./node_modules/underscore.string/rtrim.js\");\ns.truncate         = __webpack_require__(/*! ./truncate */ \"./node_modules/underscore.string/truncate.js\");\ns.prune            = __webpack_require__(/*! ./prune */ \"./node_modules/underscore.string/prune.js\");\ns.words            = __webpack_require__(/*! ./words */ \"./node_modules/underscore.string/words.js\");\ns.pad              = __webpack_require__(/*! ./pad */ \"./node_modules/underscore.string/pad.js\");\ns.lpad             = __webpack_require__(/*! ./lpad */ \"./node_modules/underscore.string/lpad.js\");\ns.rpad             = __webpack_require__(/*! ./rpad */ \"./node_modules/underscore.string/rpad.js\");\ns.lrpad            = __webpack_require__(/*! ./lrpad */ \"./node_modules/underscore.string/lrpad.js\");\ns.sprintf          = __webpack_require__(/*! ./sprintf */ \"./node_modules/underscore.string/sprintf.js\");\ns.vsprintf         = __webpack_require__(/*! ./vsprintf */ \"./node_modules/underscore.string/vsprintf.js\");\ns.toNumber         = __webpack_require__(/*! ./toNumber */ \"./node_modules/underscore.string/toNumber.js\");\ns.numberFormat     = __webpack_require__(/*! ./numberFormat */ \"./node_modules/underscore.string/numberFormat.js\");\ns.strRight         = __webpack_require__(/*! ./strRight */ \"./node_modules/underscore.string/strRight.js\");\ns.strRightBack     = __webpack_require__(/*! ./strRightBack */ \"./node_modules/underscore.string/strRightBack.js\");\ns.strLeft          = __webpack_require__(/*! ./strLeft */ \"./node_modules/underscore.string/strLeft.js\");\ns.strLeftBack      = __webpack_require__(/*! ./strLeftBack */ \"./node_modules/underscore.string/strLeftBack.js\");\ns.toSentence       = __webpack_require__(/*! ./toSentence */ \"./node_modules/underscore.string/toSentence.js\");\ns.toSentenceSerial = __webpack_require__(/*! ./toSentenceSerial */ \"./node_modules/underscore.string/toSentenceSerial.js\");\ns.slugify          = __webpack_require__(/*! ./slugify */ \"./node_modules/underscore.string/slugify.js\");\ns.surround         = __webpack_require__(/*! ./surround */ \"./node_modules/underscore.string/surround.js\");\ns.quote            = __webpack_require__(/*! ./quote */ \"./node_modules/underscore.string/quote.js\");\ns.unquote          = __webpack_require__(/*! ./unquote */ \"./node_modules/underscore.string/unquote.js\");\ns.repeat           = __webpack_require__(/*! ./repeat */ \"./node_modules/underscore.string/repeat.js\");\ns.naturalCmp       = __webpack_require__(/*! ./naturalCmp */ \"./node_modules/underscore.string/naturalCmp.js\");\ns.levenshtein      = __webpack_require__(/*! ./levenshtein */ \"./node_modules/underscore.string/levenshtein.js\");\ns.toBoolean        = __webpack_require__(/*! ./toBoolean */ \"./node_modules/underscore.string/toBoolean.js\");\ns.exports          = __webpack_require__(/*! ./exports */ \"./node_modules/underscore.string/exports.js\");\ns.escapeRegExp     = __webpack_require__(/*! ./helper/escapeRegExp */ \"./node_modules/underscore.string/helper/escapeRegExp.js\");\ns.wrap             = __webpack_require__(/*! ./wrap */ \"./node_modules/underscore.string/wrap.js\");\ns.map              = __webpack_require__(/*! ./map */ \"./node_modules/underscore.string/map.js\");\n\n// Aliases\ns.strip     = s.trim;\ns.lstrip    = s.ltrim;\ns.rstrip    = s.rtrim;\ns.center    = s.lrpad;\ns.rjust     = s.lpad;\ns.ljust     = s.rpad;\ns.contains  = s.include;\ns.q         = s.quote;\ns.toBool    = s.toBoolean;\ns.camelcase = s.camelize;\ns.mapChars  = s.map;\n\n\n// Implement chaining\ns.prototype = {\n  value: function value() {\n    return this._wrapped;\n  }\n};\n\nfunction fn2method(key, fn) {\n  if (typeof fn !== 'function') return;\n  s.prototype[key] = function() {\n    var args = [this._wrapped].concat(Array.prototype.slice.call(arguments));\n    var res = fn.apply(null, args);\n    // if the result is non-string stop the chain and return the value\n    return typeof res === 'string' ? new s(res) : res;\n  };\n}\n\n// Copy functions to instance methods for chaining\nfor (var key in s) fn2method(key, s[key]);\n\nfn2method('tap', function tap(string, fn) {\n  return fn(string);\n});\n\nfunction prototype2method(methodName) {\n  fn2method(methodName, function(context) {\n    var args = Array.prototype.slice.call(arguments, 1);\n    return String.prototype[methodName].apply(context, args);\n  });\n}\n\nvar prototypeMethods = [\n  'toUpperCase',\n  'toLowerCase',\n  'split',\n  'replace',\n  'slice',\n  'substring',\n  'substr',\n  'concat'\n];\n\nfor (var method in prototypeMethods) prototype2method(prototypeMethods[method]);\n\n\nmodule.exports = s;\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/index.js?");

/***/ }),

/***/ "./node_modules/underscore.string/insert.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore.string/insert.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var splice = __webpack_require__(/*! ./splice */ \"./node_modules/underscore.string/splice.js\");\n\nmodule.exports = function insert(str, i, substr) {\n  return splice(str, i, 0, substr);\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/insert.js?");

/***/ }),

/***/ "./node_modules/underscore.string/isBlank.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore.string/isBlank.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function isBlank(str) {\n  return (/^\\s*$/).test(makeString(str));\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/isBlank.js?");

/***/ }),

/***/ "./node_modules/underscore.string/join.js":
/*!************************************************!*\
  !*** ./node_modules/underscore.string/join.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\nvar slice = [].slice;\n\nmodule.exports = function join() {\n  var args = slice.call(arguments),\n    separator = args.shift();\n\n  return args.join(makeString(separator));\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/join.js?");

/***/ }),

/***/ "./node_modules/underscore.string/levenshtein.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore.string/levenshtein.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\n/**\n * Based on the implementation here: https://github.com/hiddentao/fast-levenshtein\n */\nmodule.exports = function levenshtein(str1, str2) {\n  'use strict';\n  str1 = makeString(str1);\n  str2 = makeString(str2);\n\n  // Short cut cases  \n  if (str1 === str2) return 0;\n  if (!str1 || !str2) return Math.max(str1.length, str2.length);\n\n  // two rows\n  var prevRow = new Array(str2.length + 1);\n\n  // initialise previous row\n  for (var i = 0; i < prevRow.length; ++i) {\n    prevRow[i] = i;\n  }\n\n  // calculate current row distance from previous row\n  for (i = 0; i < str1.length; ++i) {\n    var nextCol = i + 1;\n\n    for (var j = 0; j < str2.length; ++j) {\n      var curCol = nextCol;\n\n      // substution\n      nextCol = prevRow[j] + ( (str1.charAt(i) === str2.charAt(j)) ? 0 : 1 );\n      // insertion\n      var tmp = curCol + 1;\n      if (nextCol > tmp) {\n        nextCol = tmp;\n      }\n      // deletion\n      tmp = prevRow[j + 1] + 1;\n      if (nextCol > tmp) {\n        nextCol = tmp;\n      }\n\n      // copy current col value into previous (in preparation for next iteration)\n      prevRow[j] = curCol;\n    }\n\n    // copy last col value into previous (in preparation for next iteration)\n    prevRow[j] = nextCol;\n  }\n\n  return nextCol;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/levenshtein.js?");

/***/ }),

/***/ "./node_modules/underscore.string/lines.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore.string/lines.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function lines(str) {\n  if (str == null) return [];\n  return String(str).split(/\\r\\n?|\\n/);\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/lines.js?");

/***/ }),

/***/ "./node_modules/underscore.string/lpad.js":
/*!************************************************!*\
  !*** ./node_modules/underscore.string/lpad.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pad = __webpack_require__(/*! ./pad */ \"./node_modules/underscore.string/pad.js\");\n\nmodule.exports = function lpad(str, length, padStr) {\n  return pad(str, length, padStr);\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/lpad.js?");

/***/ }),

/***/ "./node_modules/underscore.string/lrpad.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore.string/lrpad.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pad = __webpack_require__(/*! ./pad */ \"./node_modules/underscore.string/pad.js\");\n\nmodule.exports = function lrpad(str, length, padStr) {\n  return pad(str, length, padStr, 'both');\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/lrpad.js?");

/***/ }),

/***/ "./node_modules/underscore.string/ltrim.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore.string/ltrim.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\nvar defaultToWhiteSpace = __webpack_require__(/*! ./helper/defaultToWhiteSpace */ \"./node_modules/underscore.string/helper/defaultToWhiteSpace.js\");\nvar nativeTrimLeft = String.prototype.trimLeft;\n\nmodule.exports = function ltrim(str, characters) {\n  str = makeString(str);\n  if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);\n  characters = defaultToWhiteSpace(characters);\n  return str.replace(new RegExp('^' + characters + '+'), '');\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/ltrim.js?");

/***/ }),

/***/ "./node_modules/underscore.string/map.js":
/*!***********************************************!*\
  !*** ./node_modules/underscore.string/map.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function(str, callback) {\n  str = makeString(str);\n\n  if (str.length === 0 || typeof callback !== 'function') return str;\n\n  return str.replace(/./g, callback);\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/map.js?");

/***/ }),

/***/ "./node_modules/underscore.string/naturalCmp.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore.string/naturalCmp.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function naturalCmp(str1, str2) {\n  if (str1 == str2) return 0;\n  if (!str1) return -1;\n  if (!str2) return 1;\n\n  var cmpRegex = /(\\.\\d+|\\d+|\\D+)/g,\n    tokens1 = String(str1).match(cmpRegex),\n    tokens2 = String(str2).match(cmpRegex),\n    count = Math.min(tokens1.length, tokens2.length);\n\n  for (var i = 0; i < count; i++) {\n    var a = tokens1[i],\n      b = tokens2[i];\n\n    if (a !== b) {\n      var num1 = +a;\n      var num2 = +b;\n      if (num1 === num1 && num2 === num2) {\n        return num1 > num2 ? 1 : -1;\n      }\n      return a < b ? -1 : 1;\n    }\n  }\n\n  if (tokens1.length != tokens2.length)\n    return tokens1.length - tokens2.length;\n\n  return str1 < str2 ? -1 : 1;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/naturalCmp.js?");

/***/ }),

/***/ "./node_modules/underscore.string/numberFormat.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore.string/numberFormat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function numberFormat(number, dec, dsep, tsep) {\n  if (isNaN(number) || number == null) return '';\n\n  number = number.toFixed(~~dec);\n  tsep = typeof tsep == 'string' ? tsep : ',';\n\n  var parts = number.split('.'),\n    fnums = parts[0],\n    decimals = parts[1] ? (dsep || '.') + parts[1] : '';\n\n  return fnums.replace(/(\\d)(?=(?:\\d{3})+$)/g, '$1' + tsep) + decimals;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/numberFormat.js?");

/***/ }),

/***/ "./node_modules/underscore.string/pad.js":
/*!***********************************************!*\
  !*** ./node_modules/underscore.string/pad.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\nvar strRepeat = __webpack_require__(/*! ./helper/strRepeat */ \"./node_modules/underscore.string/helper/strRepeat.js\");\n\nmodule.exports = function pad(str, length, padStr, type) {\n  str = makeString(str);\n  length = ~~length;\n\n  var padlen = 0;\n\n  if (!padStr)\n    padStr = ' ';\n  else if (padStr.length > 1)\n    padStr = padStr.charAt(0);\n\n  switch (type) {\n  case 'right':\n    padlen = length - str.length;\n    return str + strRepeat(padStr, padlen);\n  case 'both':\n    padlen = length - str.length;\n    return strRepeat(padStr, Math.ceil(padlen / 2)) + str + strRepeat(padStr, Math.floor(padlen / 2));\n  default: // 'left'\n    padlen = length - str.length;\n    return strRepeat(padStr, padlen) + str;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/pad.js?");

/***/ }),

/***/ "./node_modules/underscore.string/pred.js":
/*!************************************************!*\
  !*** ./node_modules/underscore.string/pred.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var adjacent = __webpack_require__(/*! ./helper/adjacent */ \"./node_modules/underscore.string/helper/adjacent.js\");\n\nmodule.exports = function succ(str) {\n  return adjacent(str, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/pred.js?");

/***/ }),

/***/ "./node_modules/underscore.string/prune.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore.string/prune.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * _s.prune: a more elegant version of truncate\n * prune extra chars, never leaving a half-chopped word.\n * @author github.com/rwz\n */\nvar makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\nvar rtrim = __webpack_require__(/*! ./rtrim */ \"./node_modules/underscore.string/rtrim.js\");\n\nmodule.exports = function prune(str, length, pruneStr) {\n  str = makeString(str);\n  length = ~~length;\n  pruneStr = pruneStr != null ? String(pruneStr) : '...';\n\n  if (str.length <= length) return str;\n\n  var tmpl = function(c) {\n      return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' ';\n    },\n    template = str.slice(0, length + 1).replace(/.(?=\\W*\\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA'\n\n  if (template.slice(template.length - 2).match(/\\w\\w/))\n    template = template.replace(/\\s*\\S+$/, '');\n  else\n    template = rtrim(template.slice(0, template.length - 1));\n\n  return (template + pruneStr).length > str.length ? str : str.slice(0, template.length) + pruneStr;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/prune.js?");

/***/ }),

/***/ "./node_modules/underscore.string/quote.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore.string/quote.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var surround = __webpack_require__(/*! ./surround */ \"./node_modules/underscore.string/surround.js\");\n\nmodule.exports = function quote(str, quoteChar) {\n  return surround(str, quoteChar || '\"');\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/quote.js?");

/***/ }),

/***/ "./node_modules/underscore.string/repeat.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore.string/repeat.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\nvar strRepeat = __webpack_require__(/*! ./helper/strRepeat */ \"./node_modules/underscore.string/helper/strRepeat.js\");\n\nmodule.exports = function repeat(str, qty, separator) {\n  str = makeString(str);\n\n  qty = ~~qty;\n\n  // using faster implementation if separator is not needed;\n  if (separator == null) return strRepeat(str, qty);\n\n  // this one is about 300x slower in Google Chrome\n  /*eslint no-empty: 0*/\n  for (var repeat = []; qty > 0; repeat[--qty] = str) {}\n  return repeat.join(separator);\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/repeat.js?");

/***/ }),

/***/ "./node_modules/underscore.string/replaceAll.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore.string/replaceAll.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function replaceAll(str, find, replace, ignorecase) {\n  var flags = (ignorecase === true)?'gi':'g';\n  var reg = new RegExp(find, flags);\n\n  return makeString(str).replace(reg, replace);\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/replaceAll.js?");

/***/ }),

/***/ "./node_modules/underscore.string/reverse.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore.string/reverse.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var chars = __webpack_require__(/*! ./chars */ \"./node_modules/underscore.string/chars.js\");\n\nmodule.exports = function reverse(str) {\n  return chars(str).reverse().join('');\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/reverse.js?");

/***/ }),

/***/ "./node_modules/underscore.string/rpad.js":
/*!************************************************!*\
  !*** ./node_modules/underscore.string/rpad.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pad = __webpack_require__(/*! ./pad */ \"./node_modules/underscore.string/pad.js\");\n\nmodule.exports = function rpad(str, length, padStr) {\n  return pad(str, length, padStr, 'right');\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/rpad.js?");

/***/ }),

/***/ "./node_modules/underscore.string/rtrim.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore.string/rtrim.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\nvar defaultToWhiteSpace = __webpack_require__(/*! ./helper/defaultToWhiteSpace */ \"./node_modules/underscore.string/helper/defaultToWhiteSpace.js\");\nvar nativeTrimRight = String.prototype.trimRight;\n\nmodule.exports = function rtrim(str, characters) {\n  str = makeString(str);\n  if (!characters && nativeTrimRight) return nativeTrimRight.call(str);\n  characters = defaultToWhiteSpace(characters);\n  return str.replace(new RegExp(characters + '+$'), '');\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/rtrim.js?");

/***/ }),

/***/ "./node_modules/underscore.string/slugify.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore.string/slugify.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var trim = __webpack_require__(/*! ./trim */ \"./node_modules/underscore.string/trim.js\");\nvar dasherize = __webpack_require__(/*! ./dasherize */ \"./node_modules/underscore.string/dasherize.js\");\nvar cleanDiacritics = __webpack_require__(/*! ./cleanDiacritics */ \"./node_modules/underscore.string/cleanDiacritics.js\");\n\nmodule.exports = function slugify(str) {\n  return trim(dasherize(cleanDiacritics(str).replace(/[^\\w\\s-]/g, '-').toLowerCase()), '-');\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/slugify.js?");

/***/ }),

/***/ "./node_modules/underscore.string/splice.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore.string/splice.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var chars = __webpack_require__(/*! ./chars */ \"./node_modules/underscore.string/chars.js\");\n\nmodule.exports = function splice(str, i, howmany, substr) {\n  var arr = chars(str);\n  arr.splice(~~i, ~~howmany, substr);\n  return arr.join('');\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/splice.js?");

/***/ }),

/***/ "./node_modules/underscore.string/sprintf.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore.string/sprintf.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var deprecate = __webpack_require__(/*! util-deprecate */ \"./node_modules/util-deprecate/browser.js\");\n\nmodule.exports = deprecate(__webpack_require__(/*! sprintf-js */ \"./node_modules/sprintf-js/src/sprintf.js\").sprintf,\n  'sprintf() will be removed in the next major release, use the sprintf-js package instead.');\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/sprintf.js?");

/***/ }),

/***/ "./node_modules/underscore.string/startsWith.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore.string/startsWith.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\nvar toPositive = __webpack_require__(/*! ./helper/toPositive */ \"./node_modules/underscore.string/helper/toPositive.js\");\n\nmodule.exports = function startsWith(str, starts, position) {\n  str = makeString(str);\n  starts = '' + starts;\n  position = position == null ? 0 : Math.min(toPositive(position), str.length);\n  return str.lastIndexOf(starts, position) === position;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/startsWith.js?");

/***/ }),

/***/ "./node_modules/underscore.string/strLeft.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore.string/strLeft.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function strLeft(str, sep) {\n  str = makeString(str);\n  sep = makeString(sep);\n  var pos = !sep ? -1 : str.indexOf(sep);\n  return~ pos ? str.slice(0, pos) : str;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/strLeft.js?");

/***/ }),

/***/ "./node_modules/underscore.string/strLeftBack.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore.string/strLeftBack.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function strLeftBack(str, sep) {\n  str = makeString(str);\n  sep = makeString(sep);\n  var pos = str.lastIndexOf(sep);\n  return~ pos ? str.slice(0, pos) : str;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/strLeftBack.js?");

/***/ }),

/***/ "./node_modules/underscore.string/strRight.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore.string/strRight.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function strRight(str, sep) {\n  str = makeString(str);\n  sep = makeString(sep);\n  var pos = !sep ? -1 : str.indexOf(sep);\n  return~ pos ? str.slice(pos + sep.length, str.length) : str;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/strRight.js?");

/***/ }),

/***/ "./node_modules/underscore.string/strRightBack.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore.string/strRightBack.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function strRightBack(str, sep) {\n  str = makeString(str);\n  sep = makeString(sep);\n  var pos = !sep ? -1 : str.lastIndexOf(sep);\n  return~ pos ? str.slice(pos + sep.length, str.length) : str;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/strRightBack.js?");

/***/ }),

/***/ "./node_modules/underscore.string/stripTags.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore.string/stripTags.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function stripTags(str) {\n  return makeString(str).replace(/<\\/?[^>]+>/g, '');\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/stripTags.js?");

/***/ }),

/***/ "./node_modules/underscore.string/succ.js":
/*!************************************************!*\
  !*** ./node_modules/underscore.string/succ.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var adjacent = __webpack_require__(/*! ./helper/adjacent */ \"./node_modules/underscore.string/helper/adjacent.js\");\n\nmodule.exports = function succ(str) {\n  return adjacent(str, 1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/succ.js?");

/***/ }),

/***/ "./node_modules/underscore.string/surround.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore.string/surround.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function surround(str, wrapper) {\n  return [wrapper, str, wrapper].join('');\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/surround.js?");

/***/ }),

/***/ "./node_modules/underscore.string/swapCase.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore.string/swapCase.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function swapCase(str) {\n  return makeString(str).replace(/\\S/g, function(c) {\n    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/swapCase.js?");

/***/ }),

/***/ "./node_modules/underscore.string/titleize.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore.string/titleize.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function titleize(str) {\n  return makeString(str).toLowerCase().replace(/(?:^|\\s|-)\\S/g, function(c) {\n    return c.toUpperCase();\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/titleize.js?");

/***/ }),

/***/ "./node_modules/underscore.string/toBoolean.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore.string/toBoolean.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var trim = __webpack_require__(/*! ./trim */ \"./node_modules/underscore.string/trim.js\");\n\nfunction boolMatch(s, matchers) {\n  var i, matcher, down = s.toLowerCase();\n  matchers = [].concat(matchers);\n  for (i = 0; i < matchers.length; i += 1) {\n    matcher = matchers[i];\n    if (!matcher) continue;\n    if (matcher.test && matcher.test(s)) return true;\n    if (matcher.toLowerCase() === down) return true;\n  }\n}\n\nmodule.exports = function toBoolean(str, trueValues, falseValues) {\n  if (typeof str === 'number') str = '' + str;\n  if (typeof str !== 'string') return !!str;\n  str = trim(str);\n  if (boolMatch(str, trueValues || ['true', '1'])) return true;\n  if (boolMatch(str, falseValues || ['false', '0'])) return false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/toBoolean.js?");

/***/ }),

/***/ "./node_modules/underscore.string/toNumber.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore.string/toNumber.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function toNumber(num, precision) {\n  if (num == null) return 0;\n  var factor = Math.pow(10, isFinite(precision) ? precision : 0);\n  return Math.round(num * factor) / factor;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/toNumber.js?");

/***/ }),

/***/ "./node_modules/underscore.string/toSentence.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore.string/toSentence.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rtrim = __webpack_require__(/*! ./rtrim */ \"./node_modules/underscore.string/rtrim.js\");\n\nmodule.exports = function toSentence(array, separator, lastSeparator, serial) {\n  separator = separator || ', ';\n  lastSeparator = lastSeparator || ' and ';\n  var a = array.slice(),\n    lastMember = a.pop();\n\n  if (array.length > 2 && serial) lastSeparator = rtrim(separator) + lastSeparator;\n\n  return a.length ? a.join(separator) + lastSeparator + lastMember : lastMember;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/toSentence.js?");

/***/ }),

/***/ "./node_modules/underscore.string/toSentenceSerial.js":
/*!************************************************************!*\
  !*** ./node_modules/underscore.string/toSentenceSerial.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toSentence = __webpack_require__(/*! ./toSentence */ \"./node_modules/underscore.string/toSentence.js\");\n\nmodule.exports = function toSentenceSerial(array, sep, lastSep) {\n  return toSentence(array, sep, lastSep, true);\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/toSentenceSerial.js?");

/***/ }),

/***/ "./node_modules/underscore.string/trim.js":
/*!************************************************!*\
  !*** ./node_modules/underscore.string/trim.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\nvar defaultToWhiteSpace = __webpack_require__(/*! ./helper/defaultToWhiteSpace */ \"./node_modules/underscore.string/helper/defaultToWhiteSpace.js\");\nvar nativeTrim = String.prototype.trim;\n\nmodule.exports = function trim(str, characters) {\n  str = makeString(str);\n  if (!characters && nativeTrim) return nativeTrim.call(str);\n  characters = defaultToWhiteSpace(characters);\n  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/trim.js?");

/***/ }),

/***/ "./node_modules/underscore.string/truncate.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore.string/truncate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function truncate(str, length, truncateStr) {\n  str = makeString(str);\n  truncateStr = truncateStr || '...';\n  length = ~~length;\n  return str.length > length ? str.slice(0, length) + truncateStr : str;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/truncate.js?");

/***/ }),

/***/ "./node_modules/underscore.string/underscored.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore.string/underscored.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var trim = __webpack_require__(/*! ./trim */ \"./node_modules/underscore.string/trim.js\");\n\nmodule.exports = function underscored(str) {\n  return trim(str).replace(/([a-z\\d])([A-Z]+)/g, '$1_$2').replace(/[-\\s]+/g, '_').toLowerCase();\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/underscored.js?");

/***/ }),

/***/ "./node_modules/underscore.string/unescapeHTML.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore.string/unescapeHTML.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\nvar htmlEntities = __webpack_require__(/*! ./helper/htmlEntities */ \"./node_modules/underscore.string/helper/htmlEntities.js\");\n\nmodule.exports = function unescapeHTML(str) {\n  return makeString(str).replace(/\\&([^;]{1,10});/g, function(entity, entityCode) {\n    var match;\n\n    if (entityCode in htmlEntities) {\n      return htmlEntities[entityCode];\n    /*eslint no-cond-assign: 0*/\n    } else if (match = entityCode.match(/^#x([\\da-fA-F]+)$/)) {\n      return String.fromCharCode(parseInt(match[1], 16));\n    /*eslint no-cond-assign: 0*/\n    } else if (match = entityCode.match(/^#(\\d+)$/)) {\n      return String.fromCharCode(~~match[1]);\n    } else {\n      return entity;\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/unescapeHTML.js?");

/***/ }),

/***/ "./node_modules/underscore.string/unquote.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore.string/unquote.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function unquote(str, quoteChar) {\n  quoteChar = quoteChar || '\"';\n  if (str[0] === quoteChar && str[str.length - 1] === quoteChar)\n    return str.slice(1, str.length - 1);\n  else return str;\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/unquote.js?");

/***/ }),

/***/ "./node_modules/underscore.string/vsprintf.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore.string/vsprintf.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var deprecate = __webpack_require__(/*! util-deprecate */ \"./node_modules/util-deprecate/browser.js\");\n\nmodule.exports = deprecate(__webpack_require__(/*! sprintf-js */ \"./node_modules/sprintf-js/src/sprintf.js\").vsprintf,\n  'vsprintf() will be removed in the next major release, use the sprintf-js package instead.');\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/vsprintf.js?");

/***/ }),

/***/ "./node_modules/underscore.string/words.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore.string/words.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isBlank = __webpack_require__(/*! ./isBlank */ \"./node_modules/underscore.string/isBlank.js\");\nvar trim = __webpack_require__(/*! ./trim */ \"./node_modules/underscore.string/trim.js\");\n\nmodule.exports = function words(str, delimiter) {\n  if (isBlank(str)) return [];\n  return trim(str, delimiter).split(delimiter || /\\s+/);\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/words.js?");

/***/ }),

/***/ "./node_modules/underscore.string/wrap.js":
/*!************************************************!*\
  !*** ./node_modules/underscore.string/wrap.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Wrap\n// wraps a string by a certain width\n\nvar makeString = __webpack_require__(/*! ./helper/makeString */ \"./node_modules/underscore.string/helper/makeString.js\");\n\nmodule.exports = function wrap(str, options){\n  str = makeString(str);\n  \n  options = options || {};\n  \n  var width = options.width || 75;\n  var seperator = options.seperator || '\\n';\n  var cut = options.cut || false;\n  var preserveSpaces = options.preserveSpaces || false;\n  var trailingSpaces = options.trailingSpaces || false;\n  \n  var result;\n  \n  if(width <= 0){\n    return str;\n  }\n  \n  else if(!cut){\n  \n    var words = str.split(' ');\n    var current_column = 0;\n    result = '';\n  \n    while(words.length > 0){\n      \n      // if adding a space and the next word would cause this line to be longer than width...\n      if(1 + words[0].length + current_column > width){\n        //start a new line if this line is not already empty\n        if(current_column > 0){\n          // add a space at the end of the line is preserveSpaces is true\n          if (preserveSpaces){\n            result += ' ';\n            current_column++;\n          }\n          // fill the rest of the line with spaces if trailingSpaces option is true\n          else if(trailingSpaces){\n            while(current_column < width){\n              result += ' ';\n              current_column++;\n            }            \n          }\n          //start new line\n          result += seperator;\n          current_column = 0;\n        }\n      }\n  \n      // if not at the begining of the line, add a space in front of the word\n      if(current_column > 0){\n        result += ' ';\n        current_column++;\n      }\n  \n      // tack on the next word, update current column, a pop words array\n      result += words[0];\n      current_column += words[0].length;\n      words.shift();\n  \n    }\n  \n    // fill the rest of the line with spaces if trailingSpaces option is true\n    if(trailingSpaces){\n      while(current_column < width){\n        result += ' ';\n        current_column++;\n      }            \n    }\n  \n    return result;\n  \n  }\n  \n  else {\n  \n    var index = 0;\n    result = '';\n  \n    // walk through each character and add seperators where appropriate\n    while(index < str.length){\n      if(index % width == 0 && index > 0){\n        result += seperator;\n      }\n      result += str.charAt(index);\n      index++;\n    }\n  \n    // fill the rest of the line with spaces if trailingSpaces option is true\n    if(trailingSpaces){\n      while(index % width > 0){\n        result += ' ';\n        index++;\n      }            \n    }\n    \n    return result;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/underscore.string/wrap.js?");

/***/ }),

/***/ "./node_modules/util-deprecate/browser.js":
/*!************************************************!*\
  !*** ./node_modules/util-deprecate/browser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {\n/**\n * Module exports.\n */\n\nmodule.exports = deprecate;\n\n/**\n * Mark that a method should not be used.\n * Returns a modified function which warns once by default.\n *\n * If `localStorage.noDeprecation = true` is set, then it is a no-op.\n *\n * If `localStorage.throwDeprecation = true` is set, then deprecated functions\n * will throw an Error when invoked.\n *\n * If `localStorage.traceDeprecation = true` is set, then deprecated functions\n * will invoke `console.trace()` instead of `console.error()`.\n *\n * @param {Function} fn - the function to deprecate\n * @param {String} msg - the string to print to the console when `fn` is invoked\n * @returns {Function} a new \"deprecated\" version of `fn`\n * @api public\n */\n\nfunction deprecate (fn, msg) {\n  if (config('noDeprecation')) {\n    return fn;\n  }\n\n  var warned = false;\n  function deprecated() {\n    if (!warned) {\n      if (config('throwDeprecation')) {\n        throw new Error(msg);\n      } else if (config('traceDeprecation')) {\n        console.trace(msg);\n      } else {\n        console.warn(msg);\n      }\n      warned = true;\n    }\n    return fn.apply(this, arguments);\n  }\n\n  return deprecated;\n}\n\n/**\n * Checks `localStorage` for boolean values for the given `name`.\n *\n * @param {String} name\n * @returns {Boolean}\n * @api private\n */\n\nfunction config (name) {\n  // accessing global.localStorage can trigger a DOMException in sandboxed iframes\n  try {\n    if (!global.localStorage) return false;\n  } catch (_) {\n    return false;\n  }\n  var val = global.localStorage[name];\n  if (null == val) return false;\n  return String(val).toLowerCase() === 'true';\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/util-deprecate/browser.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ })

/******/ });