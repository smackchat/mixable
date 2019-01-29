(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mixable.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/copy-members.functions.js":
/*!***************************************!*\
  !*** ./src/copy-members.functions.js ***!
  \***************************************/
/*! exports provided: copyMembers, copyStaticMembers, copyInstanceMembers, giveProps, deleteProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyMembers", function() { return copyMembers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyStaticMembers", function() { return copyStaticMembers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyInstanceMembers", function() { return copyInstanceMembers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "giveProps", function() { return giveProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProps", function() { return deleteProps; });

var staticPropsToIgnore = [

// js stuff
'name', 'prototype', 'arguments', 'caller', 'callee', 'length',

// our stuff
'__mixable_meta'];

var prototypePropsToIgnore = [

// js stuff
'constructor'];

// ---- 

var copyMembers = function copyMembers(_ref) {
  var source = _ref.source,
      dest = _ref.dest;

  copyStaticMembers({ source: source, dest: dest });
  copyInstanceMembers({ source: source, dest: dest });
};

// ----

var copyStaticMembers = function copyStaticMembers(_ref2) {
  var source = _ref2.source,
      dest = _ref2.dest;
  return giveProps({
    dest: dest,
    source: source,
    ignore: staticPropsToIgnore
  });
};

// ----

var copyInstanceMembers = function copyInstanceMembers(_ref3) {
  var source = _ref3.source,
      dest = _ref3.dest;
  return giveProps({
    source: source.prototype,
    dest: dest.prototype,
    ignore: prototypePropsToIgnore
  });
};

// ----

var giveProps = function giveProps(_ref4) {
  var source = _ref4.source,
      dest = _ref4.dest,
      ignore = _ref4.ignore;
  return Object.getOwnPropertyNames(source).filter(function (n) {
    return !ignore.includes(n);
  }).forEach(function (n) {
    return dest[n] = source[n];
  });
};

// ----

var deleteProps = function deleteProps(_ref5) {
  var from = _ref5.from,
      remove = _ref5.remove,
      ignore = _ref5.ignore;
  return Object.getOwnPropertyNames(remove).filter(function (n) {
    return !ignore.includes(n);
  }).forEach(function (n) {
    return delete from[n];
  });
};

/***/ }),

/***/ "./src/mixable-behaviour.functions.js":
/*!********************************************!*\
  !*** ./src/mixable-behaviour.functions.js ***!
  \********************************************/
/*! exports provided: initMixableMeta, getMixableMeta, applyParents, applySelf, callConstructors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMixableMeta", function() { return initMixableMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMixableMeta", function() { return getMixableMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyParents", function() { return applyParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applySelf", function() { return applySelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callConstructors", function() { return callConstructors; });
/* harmony import */ var _copy_members_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy-members.functions */ "./src/copy-members.functions.js");
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



var META_KEY = '__mixable_meta';

/**
 * initializes the mixable metadata IN PLACE
 * @param constructor 
 * @param name 
 */
function initMixableMeta(constructor, name) {
  constructor[META_KEY] = { name: name, constructors: [] };
}

/**
 * retrieves mixable data
 * @param Mixable 
 */
function getMixableMeta(Mixable) {
  return Mixable[META_KEY];
}

/**
 * 
 * @param Onion 
 * @param Layer 
 */
function applyLayer(Onion, Layer) {
  var meta = Onion.mixableMeta();

  var newConstructors = Layer.constructors().filter(function (_ref) {
    var candidateName = _ref.name;
    return !Onion.constructors().some(function (_ref2) {
      var existingLayerName = _ref2.name;
      return candidateName === existingLayerName;
    });
  });

  meta.constructors = newConstructors.concat(Onion.constructors());

  Object(_copy_members_functions__WEBPACK_IMPORTED_MODULE_0__["copyMembers"])({ source: Layer, dest: Onion });
}

/**
 * 
 * @param Mixable 
 * @param constructors 
 */
function applyParents(Mixable, Parents) {
  Parents.forEach(function (Parent) {
    return applyLayer(Mixable, Parent);
  });
}

/**
 * 
 * @param MixableClass 
 * @param body 
 */
function applySelf(Mixable, layer) {

  var meta = Mixable.mixableMeta();

  meta.constructors.unshift({
    name: Mixable.className(),
    _constructor: layer.prototype._constructor || function () {}
  });

  delete layer.prototype._constructor;

  Object(_copy_members_functions__WEBPACK_IMPORTED_MODULE_0__["copyMembers"])({ source: layer, dest: Mixable });
}

/**
 * 
 * @param instance 
 * @param args 
 */
function callConstructors() {
  var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  // @todo: this is too much back and forth between proto and constructor
  getMixableMeta(Object.getPrototypeOf(instance).constructor).constructors.forEach(function (_ref3) {
    var _constructor = _ref3._constructor;
    return _constructor.call.apply(_constructor, [instance].concat(_toConsumableArray(args)));
  });
}

/***/ }),

/***/ "./src/mixable.js":
/*!************************!*\
  !*** ./src/mixable.js ***!
  \************************/
/*! exports provided: isMixableClass, isMixableInstance, createMixableClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMixableClass", function() { return isMixableClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMixableInstance", function() { return isMixableInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMixableClass", function() { return createMixableClass; });
/* harmony import */ var _mixable_behaviour_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixable-behaviour.functions */ "./src/mixable-behaviour.functions.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DEFAULT_CLASS_NAME = 'AnonymousClass';

var isMixableClass = function isMixableClass(constructor) {
  return !!(typeof constructor === 'function' && Object(_mixable_behaviour_functions__WEBPACK_IMPORTED_MODULE_0__["getMixableMeta"])(constructor));
};

var isMixableInstance = function isMixableInstance(object) {
  return !!((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && Object(_mixable_behaviour_functions__WEBPACK_IMPORTED_MODULE_0__["getMixableMeta"])(object.constructor));
};

function createMixableClass(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === undefined ? DEFAULT_CLASS_NAME : _ref$name,
      _ref$inherits = _ref.inherits,
      inherits = _ref$inherits === undefined ? [] : _ref$inherits,
      _ref$body = _ref.body,
      body = _ref$body === undefined ? function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    return _class;
  }() : _ref$body,
      _ref$staticProps = _ref.staticProps,
      staticProps = _ref$staticProps === undefined ? {} : _ref$staticProps;


  var classFactory = new Function('mixableClassConstructor', '\n    return function ' + name + '(...args) {\n      return mixableClassConstructor.call(this, ...args)\n    }\n  ');

  var MixableClass = classFactory(function () {
    try {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      Object(_mixable_behaviour_functions__WEBPACK_IMPORTED_MODULE_0__["callConstructors"])(this, args);
    } catch (e) {
      throw new Error('error constructing ' + MixableClass.className() + ': ' + e.message);
    }
    return this;
  });

  MixableClass.mixableMeta = function () {
    return Object(_mixable_behaviour_functions__WEBPACK_IMPORTED_MODULE_0__["getMixableMeta"])(this);
  };

  MixableClass.className = function () {
    return this.mixableMeta().name;
  };

  MixableClass.constructors = function () {
    return this.mixableMeta().constructors;
  };

  // @todo: doesnt check that inheritance chain is in correct order
  MixableClass.inheritsFrom = function () {
    var _this = this;

    for (var _len2 = arguments.length, OtherClasses = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      OtherClasses[_key2] = arguments[_key2];
    }

    if (OtherClasses.some(function (OC) {
      return !OC || !isMixableClass(OC);
    })) throw new Error('invalid argument provided to MixableClass.inheritsFrom(). ' + 'expected array of mixable classes');

    return OtherClasses.every(function (OC) {
      return OC.constructors().every(function (_ref2) {
        var n1 = _ref2.name;
        return _this.constructors().some(function (_ref3) {
          var n2 = _ref3.name;
          return n1 === n2;
        });
      });
    });
  };

  MixableClass.prototype.is = function () {
    var _this2 = this;

    for (var _len3 = arguments.length, MixableClasses = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      MixableClasses[_key3] = arguments[_key3];
    }

    return MixableClasses.every(function (MC) {
      return _this2.constructor.inheritsFrom(MC);
    });
  };

  Object(_mixable_behaviour_functions__WEBPACK_IMPORTED_MODULE_0__["initMixableMeta"])(MixableClass, name);
  Object(_mixable_behaviour_functions__WEBPACK_IMPORTED_MODULE_0__["applyParents"])(MixableClass, inherits);
  Object(_mixable_behaviour_functions__WEBPACK_IMPORTED_MODULE_0__["applySelf"])(MixableClass, body);

  Object.keys(staticProps).forEach(function (k) {
    return MixableClass[k] = staticProps[k];
  });

  return MixableClass;
}

/***/ })

/******/ })));
//# sourceMappingURL=mixable.js.map