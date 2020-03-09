/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/form-request/__agree/form-request__agree.js":
/*!***************************************************************************!*\
  !*** ./src/blocks/components/form-request/__agree/form-request__agree.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").on("click", ".form-request__agree", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("error");
  });
});

/***/ }),

/***/ "./src/blocks/components/form-request/__select/form-request__select.js":
/*!*****************************************************************************!*\
  !*** ./src/blocks/components/form-request/__select/form-request__select.js ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.select__item').each(function () {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
        numberOfOptions = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('option').length;
    $this.addClass('select-hidden');
    $this.wrap('<div class="select--wrapper"></div>');
    $this.after('<div class="select__title"></div>');
    var $styledSelect = $this.next('div.select__title');
    $styledSelect.text($this.children('option').eq(0).text());
    var $list = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul />', {
      'class': 'select__options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val(),
        'class': 'select__options-item'
      }).appendTo($list);
    }

    var $listItems = $list.children('li');
    $styledSelect.click(function (e) {
      e.stopPropagation();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('div.select__title.active').not(this).each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('active').next('ul.select__options').hide();
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active').next('ul.select__options').toggle();
    });
    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text()).removeClass('active');
      $this.val(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('rel'));
      $list.hide();
      $this.parents(".form-request__select").removeClass("error");
      $this.parents(".form-request__select").addClass("chosen");
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).click(function () {
      $styledSelect.removeClass('active');
      $list.hide();
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/form-request/form-request.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/form-request/form-request.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var formRequest = document.getElementById("form-request");
var userEmail = document.getElementById("form-email");
var userName = document.getElementById("form-name");
var userSelect = document.getElementById("form-select");
var userAgree = document.getElementById("form-agree");

window.onload = function () {
  formRequest.addEventListener("submit", function (event) {
    var isValid = validate();

    if (isValid == false) {
      event.preventDefault ? event.preventDefault() : event.returnValue = false;
    } else {
      return true;
    }
  });
};

function validate() {
  if (!userEmail.value || !isValidEmail(userEmail.value)) {
    userEmail.closest(".form-request__input").classList.add("error");
    return false;
  }

  if (!userName.value || !isValidName(userName.value)) {
    userName.closest(".form-request__input").classList.add("error");
    return false;
  }

  if (userSelect.value == "hide") {
    userSelect.closest(".form-request__select").classList.add("error");
    return false;
  }

  if (!userAgree.checked) {
    userAgree.closest(".form-request__agree").classList.add("error");
    return false;
  } else {
    userAgree.closest(".form-request__agree").classList.remove("error");
  }

  return true;
}

function isValidEmail(emailAddress) {
  var patternEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  return patternEmail.test(emailAddress);
}

function isValidName(name) {
  var patternName = new RegExp(/^([- A-Za-zа-яА-ЯёЁ]+)$/);
  return patternName.test(name);
}

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.modal__open-btn', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('.modal').fadeIn('slow');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('overflow-hidden');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.modal__close-btn', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('.modal').fadeOut('slow');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('overflow-hidden');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).click(function (event) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body .modal').css('display') == 'block' && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest('.modal__body,.modal__open-btn').length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('.modal').fadeOut('slow');

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('overflow-hidden')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('overflow-hidden');
      }
    }
  });
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_form_request_select_form_request_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/form-request/__select/form-request__select */ "./src/blocks/components/form-request/__select/form-request__select.js");
/* harmony import */ var _components_form_request_agree_form_request_agree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/form-request/__agree/form-request__agree */ "./src/blocks/components/form-request/__agree/form-request__agree.js");



/***/ }),

/***/ "./src/js/import/mixins.js":
/*!*********************************!*\
  !*** ./src/js/import/mixins.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  // InputAnimated functions
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").on("focus", ".input-animated", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("not-empty");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("error");
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("body .input-animated").on("input", ".input-animated__item", function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents(".input-animated").addClass("not-empty");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("error");
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents(".input-animated").trigger("focusout");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents(".input-animated").removeClass("not-empty");
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").on("focusout", ".input-animated", function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children(".input-animated__item").val()) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("not-empty");
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("body .input-animated").on("click", ".input-animated__empty", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.input-animated').find('input').val("");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents(".input-animated").find('input').trigger("focus");
  });
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_form_request_form_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/form-request/form-request */ "./src/blocks/modules/form-request/form-request.js");
/* harmony import */ var _modules_form_request_form_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_form_request_form_request__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/import/svgxuse.min.js":
/*!**************************************!*\
  !*** ./src/js/import/svgxuse.min.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/mixins */ "./src/js/import/mixins.js");
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_svgxuse_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import/svgxuse.min */ "./src/js/import/svgxuse.min.js");
/* harmony import */ var _import_svgxuse_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_import_svgxuse_min__WEBPACK_IMPORTED_MODULE_3__);





/***/ })

/******/ });
//# sourceMappingURL=main.js.map