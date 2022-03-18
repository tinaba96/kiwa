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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/hello_vue.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/app.vue":
/*!********************************!*\
  !*** ./app/javascript/app.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_6fb8108a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=6fb8108a&scoped=true& */ "./app/javascript/app.vue?vue&type=template&id=6fb8108a&scoped=true&");
/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ "./app/javascript/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _app_vue_vue_type_style_index_0_id_6fb8108a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue?vue&type=style&index=0&id=6fb8108a&scoped=true&lang=css& */ "./app/javascript/app.vue?vue&type=style&index=0&id=6fb8108a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_6fb8108a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_6fb8108a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6fb8108a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/app.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./app/javascript/app.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--8-0!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/app.vue?vue&type=style&index=0&id=6fb8108a&scoped=true&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./app/javascript/app.vue?vue&type=style&index=0&id=6fb8108a&scoped=true&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_6fb8108a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-2!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&id=6fb8108a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/app.vue?vue&type=style&index=0&id=6fb8108a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_6fb8108a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_6fb8108a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_6fb8108a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_6fb8108a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/javascript/app.vue?vue&type=template&id=6fb8108a&scoped=true&":
/*!***************************************************************************!*\
  !*** ./app/javascript/app.vue?vue&type=template&id=6fb8108a&scoped=true& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_6fb8108a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=6fb8108a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/app.vue?vue&type=template&id=6fb8108a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_6fb8108a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_6fb8108a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/components/Home.vue":
/*!********************************************!*\
  !*** ./app/javascript/components/Home.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_5d420b72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=5d420b72& */ "./app/javascript/components/Home.vue?vue&type=template&id=5d420b72&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Home_vue_vue_type_template_id_5d420b72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_5d420b72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/components/Home.vue?vue&type=template&id=5d420b72&":
/*!***************************************************************************!*\
  !*** ./app/javascript/components/Home.vue?vue&type=template&id=5d420b72& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_5d420b72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=5d420b72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/components/Home.vue?vue&type=template&id=5d420b72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_5d420b72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_5d420b72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/components/Test.vue":
/*!********************************************!*\
  !*** ./app/javascript/components/Test.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Test_vue_vue_type_template_id_35e249a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Test.vue?vue&type=template&id=35e249a5& */ "./app/javascript/components/Test.vue?vue&type=template&id=35e249a5&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Test_vue_vue_type_template_id_35e249a5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Test_vue_vue_type_template_id_35e249a5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/components/Test.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/components/Test.vue?vue&type=template&id=35e249a5&":
/*!***************************************************************************!*\
  !*** ./app/javascript/components/Test.vue?vue&type=template&id=35e249a5& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_35e249a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Test.vue?vue&type=template&id=35e249a5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/components/Test.vue?vue&type=template&id=35e249a5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_35e249a5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_35e249a5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/javascript/packs/hello_vue.js":
/*!*******************************************!*\
  !*** ./app/javascript/packs/hello_vue.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ "./node_modules/vuetify/dist/vuetify.min.css");
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.vue */ "./app/javascript/app.vue");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../router.js */ "./app/javascript/router.js");
/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.





vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuetify__WEBPACK_IMPORTED_MODULE_1___default.a);
var vuetify = new vuetify__WEBPACK_IMPORTED_MODULE_1___default.a();
document.addEventListener("DOMContentLoaded", function () {
  var app = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
    vuetify: vuetify,
    router: _router_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    render: function render(h) {
      return h(_app_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
    }
  }).$mount();
  document.body.appendChild(app.$el);
  console.log(app);
}); // The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the project is using turbolinks, install 'vue-turbolinks':
//
// yarn add vue-turbolinks
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: () => {
//       return {
//         message: "Can you say hello?"
//       }
//     },
//     components: { App }
//   })
// })

/***/ }),

/***/ "./app/javascript/router.js":
/*!**********************************!*\
  !*** ./app/javascript/router.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var _components_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Home.vue */ "./app/javascript/components/Home.vue");
/* harmony import */ var _components_Test_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Test.vue */ "./app/javascript/components/Test.vue");




vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  routes: [{
    path: '/',
    component: _components_Home_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    path: '/test',
    component: _components_Test_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }]
}));

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/api/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/api/api.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/api/app.js":
/*!***********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/api/app.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/api/component.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/api/component.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/api/context.js":
/*!***************************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/api/context.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/api/hooks.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/api/hooks.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/api/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/api/index.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./node_modules/@vue/devtools-api/lib/esm/api/api.js");
/* empty/unused harmony star reexport *//* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./node_modules/@vue/devtools-api/lib/esm/api/app.js");
/* empty/unused harmony star reexport *//* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "./node_modules/@vue/devtools-api/lib/esm/api/component.js");
/* empty/unused harmony star reexport *//* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/@vue/devtools-api/lib/esm/api/context.js");
/* empty/unused harmony star reexport *//* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks */ "./node_modules/@vue/devtools-api/lib/esm/api/hooks.js");
/* empty/unused harmony star reexport *//* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@vue/devtools-api/lib/esm/api/util.js");
/* empty/unused harmony star reexport */






/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/api/util.js":
/*!************************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/api/util.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/const.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/const.js ***!
  \*********************************************************/
/*! exports provided: HOOK_SETUP, HOOK_PLUGIN_SETTINGS_SET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOOK_SETUP", function() { return HOOK_SETUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOOK_PLUGIN_SETTINGS_SET", function() { return HOOK_PLUGIN_SETTINGS_SET; });
var HOOK_SETUP = 'devtools-plugin:setup';
var HOOK_PLUGIN_SETTINGS_SET = 'plugin:settings:set';

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/env.js":
/*!*******************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/env.js ***!
  \*******************************************************/
/*! exports provided: getDevtoolsGlobalHook, getTarget, isProxyAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDevtoolsGlobalHook", function() { return getDevtoolsGlobalHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTarget", function() { return getTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProxyAvailable", function() { return isProxyAvailable; });
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  // @ts-ignore
  return typeof navigator !== 'undefined' && typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
}
var isProxyAvailable = typeof Proxy === 'function';
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/index.js ***!
  \*********************************************************/
/*! exports provided: setupDevtoolsPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupDevtoolsPlugin", function() { return setupDevtoolsPlugin; });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/@vue/devtools-api/lib/esm/env.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./node_modules/@vue/devtools-api/lib/esm/const.js");
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proxy */ "./node_modules/@vue/devtools-api/lib/esm/proxy.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./node_modules/@vue/devtools-api/lib/esm/api/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugin */ "./node_modules/@vue/devtools-api/lib/esm/plugin.js");
/* empty/unused harmony star reexport */




function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  var descriptor = pluginDescriptor;
  var target = Object(_env__WEBPACK_IMPORTED_MODULE_0__["getTarget"])();
  var hook = Object(_env__WEBPACK_IMPORTED_MODULE_0__["getDevtoolsGlobalHook"])();
  var enableProxy = _env__WEBPACK_IMPORTED_MODULE_0__["isProxyAvailable"] && descriptor.enableEarlyProxy;

  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(_const__WEBPACK_IMPORTED_MODULE_1__["HOOK_SETUP"], pluginDescriptor, setupFn);
  } else {
    var proxy = enableProxy ? new _proxy__WEBPACK_IMPORTED_MODULE_2__["ApiProxy"](descriptor, hook) : null;
    var list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn: setupFn,
      proxy: proxy
    });
    if (proxy) setupFn(proxy.proxiedTarget);
  }
}

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/plugin.js":
/*!**********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/plugin.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/proxy.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/proxy.js ***!
  \*********************************************************/
/*! exports provided: ApiProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiProxy", function() { return ApiProxy; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./node_modules/@vue/devtools-api/lib/esm/const.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var ApiProxy = /*#__PURE__*/function () {
  function ApiProxy(plugin, hook) {
    var _this = this;

    _classCallCheck(this, ApiProxy);

    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    var defaultSettings = {};

    if (plugin.settings) {
      for (var id in plugin.settings) {
        var item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }

    var localSettingsSaveId = "__vue-devtools-plugin-settings__".concat(plugin.id);
    var currentSettings = Object.assign({}, defaultSettings);

    try {
      var raw = localStorage.getItem(localSettingsSaveId);
      var data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e) {// noop
    }

    this.fallbacks = {
      getSettings: function getSettings() {
        return currentSettings;
      },
      setSettings: function setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e) {// noop
        }

        currentSettings = value;
      }
    };

    if (hook) {
      hook.on(_const__WEBPACK_IMPORTED_MODULE_1__["HOOK_PLUGIN_SETTINGS_SET"], function (pluginId, value) {
        if (pluginId === _this.plugin.id) {
          _this.fallbacks.setSettings(value);
        }
      });
    }

    this.proxiedOn = new Proxy({}, {
      get: function get(_target, prop) {
        if (_this.target) {
          return _this.target.on[prop];
        } else {
          return function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this.onQueue.push({
              method: prop,
              args: args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: function get(_target, prop) {
        if (_this.target) {
          return _this.target[prop];
        } else if (prop === 'on') {
          return _this.proxiedOn;
        } else if (Object.keys(_this.fallbacks).includes(prop)) {
          return function () {
            var _this$fallbacks;

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            _this.targetQueue.push({
              method: prop,
              args: args,
              resolve: function resolve() {}
            });

            return (_this$fallbacks = _this.fallbacks)[prop].apply(_this$fallbacks, args);
          };
        } else {
          return function () {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            return new Promise(function (resolve) {
              _this.targetQueue.push({
                method: prop,
                args: args,
                resolve: resolve
              });
            });
          };
        }
      }
    });
  }

  _createClass(ApiProxy, [{
    key: "setRealTarget",
    value: function () {
      var _setRealTarget = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(target) {
        var _iterator, _step, _this$target$on, item, _iterator2, _step2, _this$target, _item;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.target = target;
                _iterator = _createForOfIteratorHelper(this.onQueue);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    item = _step.value;

                    (_this$target$on = this.target.on)[item.method].apply(_this$target$on, _toConsumableArray(item.args));
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _iterator2 = _createForOfIteratorHelper(this.targetQueue);
                _context.prev = 4;

                _iterator2.s();

              case 6:
                if ((_step2 = _iterator2.n()).done) {
                  _context.next = 15;
                  break;
                }

                _item = _step2.value;
                _context.t0 = _item;
                _context.next = 11;
                return (_this$target = this.target)[_item.method].apply(_this$target, _toConsumableArray(_item.args));

              case 11:
                _context.t1 = _context.sent;

                _context.t0.resolve.call(_context.t0, _context.t1);

              case 13:
                _context.next = 6;
                break;

              case 15:
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t2 = _context["catch"](4);

                _iterator2.e(_context.t2);

              case 20:
                _context.prev = 20;

                _iterator2.f();

                return _context.finish(20);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 17, 20, 23]]);
      }));

      function setRealTarget(_x) {
        return _setRealTarget.apply(this, arguments);
      }

      return setRealTarget;
    }()
  }]);

  return ApiProxy;
}();

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/app.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--8-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/app.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      message: "Hello Vue!"
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify/dist/vuetify.min.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/postcss-loader/src??ref--3-2!./node_modules/vuetify/dist/vuetify.min.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/app.vue?vue&type=style&index=0&id=6fb8108a&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/app.vue?vue&type=style&index=0&id=6fb8108a&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "\np[data-v-6fb8108a] {\n  font-size: 2em;\n  text-align: center;\n}\n", "",{"version":3,"sources":["/app/src/app/javascript/app/javascript/app.vue"],"names":[],"mappings":";AAuBA;EACA,cAAA;EACA,kBAAA;AACA","file":"app.vue","sourcesContent":["<template>\n  <v-app id=\"app\"> \n    <v-btn>日本一のサウナ</v-btn>\n    <div>  \n      <p>{{ message }}</p>\n    </div>\n    <div class=\"test\">\n      <router-view />\n    </div>\n  </v-app>\n</template>\n\n<script>\nexport default {\n  data: function() {\n    return {\n      message: \"Hello Vue!\"\n    };\n  }\n};\n</script>\n\n<style scoped>\np {\n  font-size: 2em;\n  text-align: center;\n}\n</style>"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function registerImmediate(handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function registerImmediate(handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function registerImmediate(handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function registerImmediate(handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function registerImmediate(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/app.vue?vue&type=style&index=0&id=6fb8108a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-2!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/app.vue?vue&type=style&index=0&id=6fb8108a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-2!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&id=6fb8108a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/app.vue?vue&type=style&index=0&id=6fb8108a&scoped=true&lang=css&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/app.vue?vue&type=template&id=6fb8108a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/app.vue?vue&type=template&id=6fb8108a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "app" } },
    [
      _c("v-btn", [_vm._v("日本一のサウナ")]),
      _vm._v(" "),
      _c("div", [_c("p", [_vm._v(_vm._s(_vm.message))])]),
      _vm._v(" "),
      _c("div", { staticClass: "test" }, [_c("router-view")], 1),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/components/Home.vue?vue&type=template&id=5d420b72&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/components/Home.vue?vue&type=template&id=5d420b72& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "app" } },
    [_c("v-btn", [_vm._v("home")])],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/components/Test.vue?vue&type=template&id=35e249a5&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/components/Test.vue?vue&type=template&id=35e249a5& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "app" } },
    [_c("v-btn", [_vm._v("home")])],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm-bundler.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm-bundler.js ***!
  \****************************************************************/
/*! exports provided: NavigationFailureType, RouterLink, RouterView, START_LOCATION, createMemoryHistory, createRouter, createRouterMatcher, createWebHashHistory, createWebHistory, isNavigationFailure, matchedRouteKey, onBeforeRouteLeave, onBeforeRouteUpdate, parseQuery, routeLocationKey, routerKey, routerViewLocationKey, stringifyQuery, useLink, useRoute, useRouter, viewDepthKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationFailureType", function() { return NavigationFailureType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterLink", function() { return RouterLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterView", function() { return RouterView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_LOCATION", function() { return START_LOCATION_NORMALIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRouter", function() { return createRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRouterMatcher", function() { return createRouterMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWebHashHistory", function() { return createWebHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWebHistory", function() { return createWebHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNavigationFailure", function() { return isNavigationFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchedRouteKey", function() { return matchedRouteKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeforeRouteLeave", function() { return onBeforeRouteLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeforeRouteUpdate", function() { return onBeforeRouteUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQuery", function() { return parseQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeLocationKey", function() { return routeLocationKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerKey", function() { return routerKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerViewLocationKey", function() { return routerViewLocationKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyQuery", function() { return stringifyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLink", function() { return useLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRoute", function() { return useRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewDepthKey", function() { return viewDepthKey; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _vue_devtools_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/devtools-api */ "./node_modules/@vue/devtools-api/lib/esm/index.js");
var _ErrorTypeMessages;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */


var hasSymbol = typeof Symbol === 'function' && _typeof(Symbol.toStringTag) === 'symbol';

var PolySymbol = function PolySymbol(name) {
  return (// vr = vue router
    hasSymbol ? Symbol( true ? '[vue-router]: ' + name : undefined) : ( true ? '[vue-router]: ' : undefined) + name
  );
}; // rvlm = Router View Location Matched

/**
 * RouteRecord being rendered by the closest ancestor Router View. Used for
 * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
 * Location Matched
 *
 * @internal
 */


var matchedRouteKey = /*#__PURE__*/PolySymbol( true ? 'router view location matched' : undefined);
/**
 * Allows overriding the router view depth to control which component in
 * `matched` is rendered. rvd stands for Router View Depth
 *
 * @internal
 */

var viewDepthKey = /*#__PURE__*/PolySymbol( true ? 'router view depth' : undefined);
/**
 * Allows overriding the router instance returned by `useRouter` in tests. r
 * stands for router
 *
 * @internal
 */

var routerKey = /*#__PURE__*/PolySymbol( true ? 'router' : undefined);
/**
 * Allows overriding the current route returned by `useRoute` in tests. rl
 * stands for route location
 *
 * @internal
 */

var routeLocationKey = /*#__PURE__*/PolySymbol( true ? 'route location' : undefined);
/**
 * Allows overriding the current route used by router-view. Internally this is
 * used when the `route` prop is passed.
 *
 * @internal
 */

var routerViewLocationKey = /*#__PURE__*/PolySymbol( true ? 'router view location' : undefined);
var isBrowser = typeof window !== 'undefined';

function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === 'Module';
}

var assign = Object.assign;

function applyToParams(fn, params) {
  var newParams = {};

  for (var key in params) {
    var value = params[key];
    newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
  }

  return newParams;
}

var noop = function noop() {};

function warn(msg) {
  // avoid using ...args as it breaks in older Edge builds
  var args = Array.from(arguments).slice(1);
  console.warn.apply(console, ['[Vue Router warn]: ' + msg].concat(args));
}

var TRAILING_SLASH_RE = /\/$/;

var removeTrailingSlash = function removeTrailingSlash(path) {
  return path.replace(TRAILING_SLASH_RE, '');
};
/**
 * Transforms an URI into a normalized history location
 *
 * @param parseQuery
 * @param location - URI to normalize
 * @param currentLocation - current absolute location. Allows resolving relative
 * paths. Must start with `/`. Defaults to `/`
 * @returns a normalized history location
 */


function parseURL(parseQuery, location) {
  var currentLocation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/';
  var path,
      query = {},
      searchString = '',
      hash = ''; // Could use URL and URLSearchParams but IE 11 doesn't support it

  var searchPos = location.indexOf('?');
  var hashPos = location.indexOf('#', searchPos > -1 ? searchPos : 0);

  if (searchPos > -1) {
    path = location.slice(0, searchPos);
    searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
    query = parseQuery(searchString);
  }

  if (hashPos > -1) {
    path = path || location.slice(0, hashPos); // keep the # character

    hash = location.slice(hashPos, location.length);
  } // no search and no query


  path = resolveRelativePath(path != null ? path : location, currentLocation); // empty path means a relative query or hash `?foo=f`, `#thing`

  return {
    fullPath: path + (searchString && '?') + searchString + hash,
    path: path,
    query: query,
    hash: hash
  };
}
/**
 * Stringifies a URL object
 *
 * @param stringifyQuery
 * @param location
 */


function stringifyURL(stringifyQuery, location) {
  var query = location.query ? stringifyQuery(location.query) : '';
  return location.path + (query && '?') + query + (location.hash || '');
}
/**
 * Strips off the base from the beginning of a location.pathname in a non
 * case-sensitive way.
 *
 * @param pathname - location.pathname
 * @param base - base to strip off
 */


function stripBase(pathname, base) {
  // no base or base is not found at the beginning
  if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
  return pathname.slice(base.length) || '/';
}
/**
 * Checks if two RouteLocation are equal. This means that both locations are
 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
 * parameters and `hash` are the same
 *
 * @param a - first {@link RouteLocation}
 * @param b - second {@link RouteLocation}
 */


function isSameRouteLocation(stringifyQuery, a, b) {
  var aLastIndex = a.matched.length - 1;
  var bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery(a.query) === stringifyQuery(b.query) && a.hash === b.hash;
}
/**
 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
 * considered equal to the `RouteRecord` they are aliasing.
 *
 * @param a - first {@link RouteRecord}
 * @param b - second {@link RouteRecord}
 */


function isSameRouteRecord(a, b) {
  // since the original record has an undefined value for aliasOf
  // but all aliases point to the original record, this will always compare
  // the original record
  return (a.aliasOf || a) === (b.aliasOf || b);
}

function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  for (var key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
  }

  return true;
}

function isSameRouteLocationParamsValue(a, b) {
  return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
}
/**
 * Check if two arrays are the same or if an array with one single entry is the
 * same as another primitive value. Used to check query and parameters
 *
 * @param a - array of values
 * @param b - array of values or a single value
 */


function isEquivalentArray(a, b) {
  return Array.isArray(b) ? a.length === b.length && a.every(function (value, i) {
    return value === b[i];
  }) : a.length === 1 && a[0] === b;
}
/**
 * Resolves a relative path that starts with `.`.
 *
 * @param to - path location we are resolving
 * @param from - currentLocation.path, should start with `/`
 */


function resolveRelativePath(to, from) {
  if (to.startsWith('/')) return to;

  if ( true && !from.startsWith('/')) {
    warn("Cannot resolve a relative location without an absolute path. Trying to resolve \"".concat(to, "\" from \"").concat(from, "\". It should look like \"/").concat(from, "\"."));
    return to;
  }

  if (!to) return from;
  var fromSegments = from.split('/');
  var toSegments = to.split('/');
  var position = fromSegments.length - 1;
  var toPosition;
  var segment;

  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition]; // can't go below zero

    if (position === 1 || segment === '.') continue;
    if (segment === '..') position--; // found something that is not relative path
    else break;
  }

  return fromSegments.slice(0, position).join('/') + '/' + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join('/');
}

var NavigationType;

(function (NavigationType) {
  NavigationType["pop"] = "pop";
  NavigationType["push"] = "push";
})(NavigationType || (NavigationType = {}));

var NavigationDirection;

(function (NavigationDirection) {
  NavigationDirection["back"] = "back";
  NavigationDirection["forward"] = "forward";
  NavigationDirection["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
/**
 * Starting location for Histories
 */


var START = ''; // Generic utils

/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base - base to normalize
 */

function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = baseEl && baseEl.getAttribute('href') || '/'; // strip full URL origin

      base = base.replace(/^\w+:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  } // ensure leading slash when it was removed by the regex above avoid leading
  // slash with hash because the file could be read from the disk like file://
  // and the leading slash would cause problems


  if (base[0] !== '/' && base[0] !== '#') base = '/' + base; // remove the trailing slash so all other method can just do `base + fullPath`
  // to build an href

  return removeTrailingSlash(base);
} // remove any character before the hash


var BEFORE_HASH_RE = /^[^#]+#/;

function createHref(base, location) {
  return base.replace(BEFORE_HASH_RE, '#') + location;
}

function getElementPosition(el, offset) {
  var docRect = document.documentElement.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}

var computeScrollPosition = function computeScrollPosition() {
  return {
    left: window.pageXOffset,
    top: window.pageYOffset
  };
};

function scrollToPosition(position) {
  var scrollToOptions;

  if ('el' in position) {
    var positionEl = position.el;
    var isIdSelector = typeof positionEl === 'string' && positionEl.startsWith('#');
    /**
     * `id`s can accept pretty much any characters, including CSS combinators
     * like `>` or `~`. It's still possible to retrieve elements using
     * `document.getElementById('~')` but it needs to be escaped when using
     * `document.querySelector('#\\~')` for it to be valid. The only
     * requirements for `id`s are them to be unique on the page and to not be
     * empty (`id=""`). Because of that, when passing an id selector, it should
     * be properly escaped for it to work with `querySelector`. We could check
     * for the id selector to be simple (no CSS combinators `+ >~`) but that
     * would make things inconsistent since they are valid characters for an
     * `id` but would need to be escaped when using `querySelector`, breaking
     * their usage and ending up in no selector returned. Selectors need to be
     * escaped:
     *
     * - `#1-thing` becomes `#\31 -thing`
     * - `#with~symbols` becomes `#with\\~symbols`
     *
     * - More information about  the topic can be found at
     *   https://mathiasbynens.be/notes/html5-id-class.
     * - Practical example: https://mathiasbynens.be/demo/html5-id
     */

    if ( true && typeof position.el === 'string') {
      if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
        try {
          var foundEl = document.querySelector(position.el);

          if (isIdSelector && foundEl) {
            warn("The selector \"".concat(position.el, "\" should be passed as \"el: document.querySelector('").concat(position.el, "')\" because it starts with \"#\".")); // return to avoid other warnings

            return;
          }
        } catch (err) {
          warn("The selector \"".concat(position.el, "\" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).")); // return to avoid other warnings

          return;
        }
      }
    }

    var el = typeof positionEl === 'string' ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;

    if (!el) {
       true && warn("Couldn't find element using selector \"".concat(position.el, "\" returned by scrollBehavior."));
      return;
    }

    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }

  if ('scrollBehavior' in document.documentElement.style) window.scrollTo(scrollToOptions);else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}

function getScrollKey(path, delta) {
  var position = history.state ? history.state.position - delta : -1;
  return position + path;
}

var scrollPositions = new Map();

function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}

function getSavedScrollPosition(key) {
  var scroll = scrollPositions.get(key); // consume it so it's not used again

  scrollPositions.delete(key);
  return scroll;
} // TODO: RFC about how to save scroll position

/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */
// export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }


var createBaseLocation = function createBaseLocation() {
  return location.protocol + '//' + location.host;
};
/**
 * Creates a normalized history location from a window.location object
 * @param location -
 */


function createCurrentLocation(base, location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash; // allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end

  var hashPos = base.indexOf('#');

  if (hashPos > -1) {
    var slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    var pathFromHash = hash.slice(slicePos); // prepend the starting slash to hash so the url starts with /#

    if (pathFromHash[0] !== '/') pathFromHash = '/' + pathFromHash;
    return stripBase(pathFromHash, '');
  }

  var path = stripBase(pathname, base);
  return path + search + hash;
}

function useHistoryListeners(base, historyState, currentLocation, replace) {
  var listeners = [];
  var teardowns = []; // TODO: should it be a stack? a Dict. Check if the popstate listener
  // can trigger twice

  var pauseState = null;

  var popStateHandler = function popStateHandler(_ref) {
    var state = _ref.state;
    var to = createCurrentLocation(base, location);
    var from = currentLocation.value;
    var fromState = historyState.value;
    var delta = 0;

    if (state) {
      currentLocation.value = to;
      historyState.value = state; // ignore the popstate and reset the pauseState

      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }

      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    } // console.log({ deltaFromCurrent })
    // Here we could also revert the navigation by calling history.go(-delta)
    // this listener will have to be adapted to not trigger again and to wait for the url
    // to be updated before triggering the listeners. Some kind of validation function would also
    // need to be passed to the listeners so the navigation can be accepted
    // call all listeners


    listeners.forEach(function (listener) {
      listener(currentLocation.value, from, {
        delta: delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };

  function pauseListeners() {
    pauseState = currentLocation.value;
  }

  function listen(callback) {
    // setup the listener and prepare teardown callbacks
    listeners.push(callback);

    var teardown = function teardown() {
      var index = listeners.indexOf(callback);
      if (index > -1) listeners.splice(index, 1);
    };

    teardowns.push(teardown);
    return teardown;
  }

  function beforeUnloadListener() {
    var _window = window,
        history = _window.history;
    if (!history.state) return;
    history.replaceState(assign({}, history.state, {
      scroll: computeScrollPosition()
    }), '');
  }

  function destroy() {
    var _iterator = _createForOfIteratorHelper(teardowns),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var teardown = _step.value;
        teardown();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    teardowns = [];
    window.removeEventListener('popstate', popStateHandler);
    window.removeEventListener('beforeunload', beforeUnloadListener);
  } // setup the listeners and prepare teardown callbacks


  window.addEventListener('popstate', popStateHandler);
  window.addEventListener('beforeunload', beforeUnloadListener);
  return {
    pauseListeners: pauseListeners,
    listen: listen,
    destroy: destroy
  };
}
/**
 * Creates a state object
 */


function buildState(back, current, forward) {
  var replaced = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var computeScroll = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  return {
    back: back,
    current: current,
    forward: forward,
    replaced: replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}

function useHistoryStateNavigation(base) {
  var _window2 = window,
      history = _window2.history,
      location = _window2.location; // private variables

  var currentLocation = {
    value: createCurrentLocation(base, location)
  };
  var historyState = {
    value: history.state
  }; // build current history entry as this is a fresh navigation

  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      // the length is off by one, we need to decrease it
      position: history.length - 1,
      replaced: true,
      // don't add a scroll as the user may have an anchor and we want
      // scrollBehavior to be triggered without a saved position
      scroll: null
    }, true);
  }

  function changeLocation(to, state, replace) {
    /**
     * if a base tag is provided and we are on a normal domain, we have to
     * respect the provided `base` attribute because pushState() will use it and
     * potentially erase anything before the `#` like at
     * https://github.com/vuejs/vue-router-next/issues/685 where a base of
     * `/folder/#` but a base of `/` would erase the `/folder/` section. If
     * there is no host, the `<base>` tag makes no sense and if there isn't a
     * base tag we can just use everything after the `#`.
     */
    var hashIndex = base.indexOf('#');
    var url = hashIndex > -1 ? (location.host && document.querySelector('base') ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;

    try {
      // BROWSER QUIRK
      // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
      history[replace ? 'replaceState' : 'pushState'](state, '', url);
      historyState.value = state;
    } catch (err) {
      if (true) {
        warn('Error with push/replace State', err);
      } else {} // Force the navigation, this also resets the call count


      location[replace ? 'replace' : 'assign'](url);
    }
  }

  function replace(to, data) {
    var state = assign({}, history.state, buildState(historyState.value.back, // keep back and forward entries but override current position
    to, historyState.value.forward, true), data, {
      position: historyState.value.position
    });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }

  function push(to, data) {
    // Add to current entry the information of where we are going
    // as well as saving the current position
    var currentState = assign({}, // use current history state to gracefully handle a wrong call to
    // history.replaceState
    // https://github.com/vuejs/vue-router-next/issues/366
    historyState.value, history.state, {
      forward: to,
      scroll: computeScrollPosition()
    });

    if ( true && !history.state) {
      warn("history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:\n\n" + "history.replaceState(history.state, '', url)\n\n" + "You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.");
    }

    changeLocation(currentState.current, currentState, true);
    var state = assign({}, buildState(currentLocation.value, to, null), {
      position: currentState.position + 1
    }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }

  return {
    location: currentLocation,
    state: historyState,
    push: push,
    replace: replace
  };
}
/**
 * Creates an HTML5 history. Most common history for single page applications.
 *
 * @param base -
 */


function createWebHistory(base) {
  base = normalizeBase(base);
  var historyNavigation = useHistoryStateNavigation(base);
  var historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);

  function go(delta) {
    var triggerListeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (!triggerListeners) historyListeners.pauseListeners();
    history.go(delta);
  }

  var routerHistory = assign({
    // it's overridden right after
    location: '',
    base: base,
    go: go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, 'location', {
    enumerable: true,
    get: function get() {
      return historyNavigation.location.value;
    }
  });
  Object.defineProperty(routerHistory, 'state', {
    enumerable: true,
    get: function get() {
      return historyNavigation.state.value;
    }
  });
  return routerHistory;
}
/**
 * Creates a in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
 * It's up to the user to replace that location with the starter location by either calling `router.push` or `router.replace`.
 *
 * @param base - Base applied to all urls, defaults to '/'
 * @returns a history object that can be passed to the router constructor
 */


function createMemoryHistory() {
  var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var listeners = [];
  var queue = [START];
  var position = 0;
  base = normalizeBase(base);

  function setLocation(location) {
    position++;

    if (position === queue.length) {
      // we are at the end, we can simply append a new entry
      queue.push(location);
    } else {
      // we are in the middle, we remove everything from here in the queue
      queue.splice(position);
      queue.push(location);
    }
  }

  function triggerListeners(to, from, _ref2) {
    var direction = _ref2.direction,
        delta = _ref2.delta;
    var info = {
      direction: direction,
      delta: delta,
      type: NavigationType.pop
    };

    var _iterator2 = _createForOfIteratorHelper(listeners),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var callback = _step2.value;
        callback(to, from, info);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  var routerHistory = {
    // rewritten by Object.defineProperty
    location: START,
    // TODO: should be kept in queue
    state: {},
    base: base,
    createHref: createHref.bind(null, base),
    replace: function replace(to) {
      // remove current entry and decrement position
      queue.splice(position--, 1);
      setLocation(to);
    },
    push: function push(to, data) {
      setLocation(to);
    },
    listen: function listen(callback) {
      listeners.push(callback);
      return function () {
        var index = listeners.indexOf(callback);
        if (index > -1) listeners.splice(index, 1);
      };
    },
    destroy: function destroy() {
      listeners = [];
      queue = [START];
      position = 0;
    },
    go: function go(delta) {
      var shouldTrigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var from = this.location;
      var direction = // we are considering delta === 0 going forward, but in abstract mode
      // using 0 for the delta doesn't make sense like it does in html5 where
      // it reloads the page
      delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
      position = Math.max(0, Math.min(position + delta, queue.length - 1));

      if (shouldTrigger) {
        triggerListeners(this.location, from, {
          direction: direction,
          delta: delta
        });
      }
    }
  };
  Object.defineProperty(routerHistory, 'location', {
    enumerable: true,
    get: function get() {
      return queue[position];
    }
  });
  return routerHistory;
}
/**
 * Creates a hash history. Useful for web applications with no host (e.g.
 * `file://`) or when configuring a server to handle any URL is not possible.
 *
 * @param base - optional base to provide. Defaults to `location.pathname +
 * location.search` If there is a `<base>` tag in the `head`, its value will be
 * ignored in favor of this parameter **but note it affects all the
 * history.pushState() calls**, meaning that if you use a `<base>` tag, it's
 * `href` value **has to match this parameter** (ignoring anything after the
 * `#`).
 *
 * @example
 * ```js
 * // at https://example.com/folder
 * createWebHashHistory() // gives a url of `https://example.com/folder#`
 * createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
 * // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
 * createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
 * // you should avoid doing this because it changes the original url and breaks copying urls
 * createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
 *
 * // at file:///usr/etc/folder/index.html
 * // for locations with no `host`, the base is ignored
 * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
 * ```
 */


function createWebHashHistory(base) {
  // Make sure this implementation is fine in terms of encoding, specially for IE11
  // for `file://`, directly use the pathname and ignore the base
  // location.pathname contains an initial `/` even at the root: `https://example.com`
  base = location.host ? base || location.pathname + location.search : ''; // allow the user to provide a `#` in the middle: `/base/#/app`

  if (!base.includes('#')) base += '#';

  if ( true && !base.endsWith('#/') && !base.endsWith('#')) {
    warn("A hash base must end with a \"#\":\n\"".concat(base, "\" should be \"").concat(base.replace(/#.*$/, '#'), "\"."));
  }

  return createWebHistory(base);
}

function isRouteLocation(route) {
  return typeof route === 'string' || route && _typeof(route) === 'object';
}

function isRouteName(name) {
  return typeof name === 'string' || _typeof(name) === 'symbol';
}
/**
 * Initial route location where the router is. Can be used in navigation guards
 * to differentiate the initial navigation.
 *
 * @example
 * ```js
 * import { START_LOCATION } from 'vue-router'
 *
 * router.beforeEach((to, from) => {
 *   if (from === START_LOCATION) {
 *     // initial navigation
 *   }
 * })
 * ```
 */


var START_LOCATION_NORMALIZED = {
  path: '/',
  name: undefined,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: undefined
};
var NavigationFailureSymbol = /*#__PURE__*/PolySymbol( true ? 'navigation failure' : undefined);
/**
 * Enumeration with all possible types for navigation failures. Can be passed to
 * {@link isNavigationFailure} to check for specific failures.
 */

var NavigationFailureType;

(function (NavigationFailureType) {
  /**
   * An aborted navigation is a navigation that failed because a navigation
   * guard returned `false` or called `next(false)`
   */
  NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
  /**
   * A cancelled navigation is a navigation that failed because a more recent
   * navigation finished started (not necessarily finished).
   */

  NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
  /**
   * A duplicated navigation is a navigation that failed because it was
   * initiated while already being at the exact same location.
   */

  NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {})); // DEV only debug messages


var ErrorTypeMessages = (_ErrorTypeMessages = {}, _defineProperty(_ErrorTypeMessages, 1
/* MATCHER_NOT_FOUND */
, function _(_ref3) {
  var location = _ref3.location,
      currentLocation = _ref3.currentLocation;
  return "No match for\n ".concat(JSON.stringify(location)).concat(currentLocation ? '\nwhile being at\n' + JSON.stringify(currentLocation) : '');
}), _defineProperty(_ErrorTypeMessages, 2
/* NAVIGATION_GUARD_REDIRECT */
, function _(_ref4) {
  var from = _ref4.from,
      to = _ref4.to;
  return "Redirected from \"".concat(from.fullPath, "\" to \"").concat(stringifyRoute(to), "\" via a navigation guard.");
}), _defineProperty(_ErrorTypeMessages, 4
/* NAVIGATION_ABORTED */
, function _(_ref5) {
  var from = _ref5.from,
      to = _ref5.to;
  return "Navigation aborted from \"".concat(from.fullPath, "\" to \"").concat(to.fullPath, "\" via a navigation guard.");
}), _defineProperty(_ErrorTypeMessages, 8
/* NAVIGATION_CANCELLED */
, function _(_ref6) {
  var from = _ref6.from,
      to = _ref6.to;
  return "Navigation cancelled from \"".concat(from.fullPath, "\" to \"").concat(to.fullPath, "\" with a new navigation.");
}), _defineProperty(_ErrorTypeMessages, 16
/* NAVIGATION_DUPLICATED */
, function _(_ref7) {
  var from = _ref7.from,
      to = _ref7.to;
  return "Avoided redundant navigation to current location: \"".concat(from.fullPath, "\".");
}), _ErrorTypeMessages);

function createRouterError(type, params) {
  // keep full error messages in cjs versions
  if (true) {
    return assign(new Error(ErrorTypeMessages[type](params)), _defineProperty({
      type: type
    }, NavigationFailureSymbol, true), params);
  } else {}
}

function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}

var propertiesToLog = ['params', 'query', 'hash'];

function stringifyRoute(to) {
  if (typeof to === 'string') return to;
  if ('path' in to) return to.path;
  var location = {};

  var _iterator3 = _createForOfIteratorHelper(propertiesToLog),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var key = _step3.value;
      if (key in to) location[key] = to[key];
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return JSON.stringify(location, null, 2);
} // default pattern for a param: non greedy everything but /


var BASE_PARAM_PATTERN = '[^/]+?';
var BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
}; // Special Regex characters that must be escaped in static tokens

var REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
 *
 * @param segments - array of segments returned by tokenizePath
 * @param extraOptions - optional options for the regexp
 * @returns a PathParser
 */

function tokensToParser(segments, extraOptions) {
  var options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions); // the amount of scores is the same as the length of segments except for the root segment "/"

  var score = []; // the regexp as a string

  var pattern = options.start ? '^' : ''; // extracted keys

  var keys = [];

  var _iterator4 = _createForOfIteratorHelper(segments),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var segment = _step4.value;
      // the root segment needs special treatment
      var segmentScores = segment.length ? [] : [90
      /* Root */
      ]; // allow trailing slash

      if (options.strict && !segment.length) pattern += '/';

      for (var tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        var token = segment[tokenIndex]; // resets the score if we are inside a sub segment /:a-other-:b

        var subSegmentScore = 40
        /* Segment */
        + (options.sensitive ? 0.25
        /* BonusCaseSensitive */
        : 0);

        if (token.type === 0
        /* Static */
        ) {
          // prepend the slash if we are starting a new segment
          if (!tokenIndex) pattern += '/';
          pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
          subSegmentScore += 40
          /* Static */
          ;
        } else if (token.type === 1
        /* Param */
        ) {
          var value = token.value,
              repeatable = token.repeatable,
              optional = token.optional,
              regexp = token.regexp;
          keys.push({
            name: value,
            repeatable: repeatable,
            optional: optional
          });

          var _re = regexp ? regexp : BASE_PARAM_PATTERN; // the user provided a custom regexp /:id(\\d+)


          if (_re !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10
            /* BonusCustomRegExp */
            ; // make sure the regexp is valid before using it

            try {
              new RegExp("(".concat(_re, ")"));
            } catch (err) {
              throw new Error("Invalid custom RegExp for param \"".concat(value, "\" (").concat(_re, "): ") + err.message);
            }
          } // when we repeat we must take care of the repeating leading slash


          var subPattern = repeatable ? "((?:".concat(_re, ")(?:/(?:").concat(_re, "))*)") : "(".concat(_re, ")"); // prepend the slash if we are starting a new segment

          if (!tokenIndex) subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
          // or /:p?-:p2
          optional && segment.length < 2 ? "(?:/".concat(subPattern, ")") : '/' + subPattern;
          if (optional) subPattern += '?';
          pattern += subPattern;
          subSegmentScore += 20
          /* Dynamic */
          ;
          if (optional) subSegmentScore += -8
          /* BonusOptional */
          ;
          if (repeatable) subSegmentScore += -20
          /* BonusRepeatable */
          ;
          if (_re === '.*') subSegmentScore += -50
          /* BonusWildcard */
          ;
        }

        segmentScores.push(subSegmentScore);
      } // an empty array like /home/ -> [[{home}], []]
      // if (!segment.length) pattern += '/'


      score.push(segmentScores);
    } // only apply the strict bonus to the last score

  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  if (options.strict && options.end) {
    var i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001
    /* BonusStrict */
    ;
  } // TODO: dev only warn double trailing slash


  if (!options.strict) pattern += '/?';
  if (options.end) pattern += '$'; // allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
  else if (options.strict) pattern += '(?:/|$)';
  var re = new RegExp(pattern, options.sensitive ? '' : 'i');

  function parse(path) {
    var match = path.match(re);
    var params = {};
    if (!match) return null;

    for (var _i = 1; _i < match.length; _i++) {
      var value = match[_i] || '';
      var key = keys[_i - 1];
      params[key.name] = value && key.repeatable ? value.split('/') : value;
    }

    return params;
  }

  function stringify(params) {
    var path = ''; // for optional parameters to allow to be empty

    var avoidDuplicatedSlash = false;

    var _iterator5 = _createForOfIteratorHelper(segments),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var segment = _step5.value;
        if (!avoidDuplicatedSlash || !path.endsWith('/')) path += '/';
        avoidDuplicatedSlash = false;

        var _iterator6 = _createForOfIteratorHelper(segment),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var token = _step6.value;

            if (token.type === 0
            /* Static */
            ) {
              path += token.value;
            } else if (token.type === 1
            /* Param */
            ) {
              var value = token.value,
                  repeatable = token.repeatable,
                  optional = token.optional;
              var param = value in params ? params[value] : '';
              if (Array.isArray(param) && !repeatable) throw new Error("Provided param \"".concat(value, "\" is an array but it is not repeatable (* or + modifiers)"));
              var text = Array.isArray(param) ? param.join('/') : param;

              if (!text) {
                if (optional) {
                  // if we have more than one optional param like /:a?-static we
                  // don't need to care about the optional param
                  if (segment.length < 2) {
                    // remove the last slash as we could be at the end
                    if (path.endsWith('/')) path = path.slice(0, -1); // do not append a slash on the next iteration
                    else avoidDuplicatedSlash = true;
                  }
                } else throw new Error("Missing required param \"".concat(value, "\""));
              }

              path += text;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    return path;
  }

  return {
    re: re,
    score: score,
    keys: keys,
    parse: parse,
    stringify: stringify
  };
}
/**
 * Compares an array of numbers as used in PathParser.score and returns a
 * number. This function can be used to `sort` an array
 *
 * @param a - first array of numbers
 * @param b - second array of numbers
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 * should be sorted first
 */


function compareScoreArray(a, b) {
  var i = 0;

  while (i < a.length && i < b.length) {
    var diff = b[i] - a[i]; // only keep going if diff === 0

    if (diff) return diff;
    i++;
  } // if the last subsegment was Static, the shorter segments should be sorted first
  // otherwise sort the longest segment first


  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40
    /* Static */
    + 40
    /* Segment */
    ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40
    /* Static */
    + 40
    /* Segment */
    ? 1 : -1;
  }

  return 0;
}
/**
 * Compare function that can be used with `sort` to sort an array of PathParser
 *
 * @param a - first PathParser
 * @param b - second PathParser
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 */


function comparePathParserScore(a, b) {
  var i = 0;
  var aScore = a.score;
  var bScore = b.score;

  while (i < aScore.length && i < bScore.length) {
    var comp = compareScoreArray(aScore[i], bScore[i]); // do not return if both are equal

    if (comp) return comp;
    i++;
  } // if a and b share the same score entries but b has more, sort b first


  return bScore.length - aScore.length; // this is the ternary version
  // return aScore.length < bScore.length
  //   ? 1
  //   : aScore.length > bScore.length
  //   ? -1
  //   : 0
}

var ROOT_TOKEN = {
  type: 0
  /* Static */
  ,
  value: ''
};
var VALID_PARAM_RE = /[a-zA-Z0-9_]/; // After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()

function tokenizePath(path) {
  if (!path) return [[]];
  if (path === '/') return [[ROOT_TOKEN]];

  if (!path.startsWith('/')) {
    throw new Error( true ? "Route paths should start with a \"/\": \"".concat(path, "\" should be \"/").concat(path, "\".") : undefined);
  } // if (tokenCache.has(path)) return tokenCache.get(path)!


  function crash(message) {
    throw new Error("ERR (".concat(state, ")/\"").concat(buffer, "\": ").concat(message));
  }

  var state = 0
  /* Static */
  ;
  var previousState = state;
  var tokens = []; // the segment will always be valid because we get into the initial state
  // with the leading /

  var segment;

  function finalizeSegment() {
    if (segment) tokens.push(segment);
    segment = [];
  } // index on the path


  var i = 0; // char at index

  var char; // buffer of the value read

  var buffer = ''; // custom regexp for a param

  var customRe = '';

  function consumeBuffer() {
    if (!buffer) return;

    if (state === 0
    /* Static */
    ) {
      segment.push({
        type: 0
        /* Static */
        ,
        value: buffer
      });
    } else if (state === 1
    /* Param */
    || state === 2
    /* ParamRegExp */
    || state === 3
    /* ParamRegExpEnd */
    ) {
      if (segment.length > 1 && (char === '*' || char === '+')) crash("A repeatable param (".concat(buffer, ") must be alone in its segment. eg: '/:ids+."));
      segment.push({
        type: 1
        /* Param */
        ,
        value: buffer,
        regexp: customRe,
        repeatable: char === '*' || char === '+',
        optional: char === '*' || char === '?'
      });
    } else {
      crash('Invalid state to consume buffer');
    }

    buffer = '';
  }

  function addCharToBuffer() {
    buffer += char;
  }

  while (i < path.length) {
    char = path[i++];

    if (char === '\\' && state !== 2
    /* ParamRegExp */
    ) {
      previousState = state;
      state = 4
      /* EscapeNext */
      ;
      continue;
    }

    switch (state) {
      case 0
      /* Static */
      :
        if (char === '/') {
          if (buffer) {
            consumeBuffer();
          }

          finalizeSegment();
        } else if (char === ':') {
          consumeBuffer();
          state = 1
          /* Param */
          ;
        } else {
          addCharToBuffer();
        }

        break;

      case 4
      /* EscapeNext */
      :
        addCharToBuffer();
        state = previousState;
        break;

      case 1
      /* Param */
      :
        if (char === '(') {
          state = 2
          /* ParamRegExp */
          ;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0
          /* Static */
          ; // go back one character if we were not modifying

          if (char !== '*' && char !== '?' && char !== '+') i--;
        }

        break;

      case 2
      /* ParamRegExp */
      :
        // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
        // it already works by escaping the closing )
        // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
        // is this really something people need since you can also write
        // /prefix_:p()_suffix
        if (char === ')') {
          // handle the escaped )
          if (customRe[customRe.length - 1] == '\\') customRe = customRe.slice(0, -1) + char;else state = 3
          /* ParamRegExpEnd */
          ;
        } else {
          customRe += char;
        }

        break;

      case 3
      /* ParamRegExpEnd */
      :
        // same as finalizing a param
        consumeBuffer();
        state = 0
        /* Static */
        ; // go back one character if we were not modifying

        if (char !== '*' && char !== '?' && char !== '+') i--;
        customRe = '';
        break;

      default:
        crash('Unknown state');
        break;
    }
  }

  if (state === 2
  /* ParamRegExp */
  ) crash("Unfinished custom RegExp for param \"".concat(buffer, "\""));
  consumeBuffer();
  finalizeSegment(); // tokenCache.set(path, tokens)

  return tokens;
}

function createRouteRecordMatcher(record, parent, options) {
  var parser = tokensToParser(tokenizePath(record.path), options); // warn against params with the same name

  if (true) {
    var existingKeys = new Set();

    var _iterator7 = _createForOfIteratorHelper(parser.keys),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var key = _step7.value;
        if (existingKeys.has(key.name)) warn("Found duplicated params with name \"".concat(key.name, "\" for path \"").concat(record.path, "\". Only the last one will be available on \"$route.params\"."));
        existingKeys.add(key.name);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }

  var matcher = assign(parser, {
    record: record,
    parent: parent,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });

  if (parent) {
    // both are aliases or both are not aliases
    // we don't want to mix them because the order is used when
    // passing originalRecord in Matcher.addRoute
    if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
  }

  return matcher;
}
/**
 * Creates a Router Matcher.
 *
 * @internal
 * @param routes - array of initial routes
 * @param globalOptions - global route options
 */


function createRouterMatcher(routes, globalOptions) {
  // normalized ordered array of matchers
  var matchers = [];
  var matcherMap = new Map();
  globalOptions = mergeOptions({
    strict: false,
    end: true,
    sensitive: false
  }, globalOptions);

  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }

  function addRoute(record, parent, originalRecord) {
    // used later on to remove by name
    var isRootAdd = !originalRecord;
    var mainNormalizedRecord = normalizeRouteRecord(record); // we might be the child of an alias

    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    var options = mergeOptions(globalOptions, record); // generate an array of records to correctly handle aliases

    var normalizedRecords = [mainNormalizedRecord];

    if ('alias' in record) {
      var aliases = typeof record.alias === 'string' ? [record.alias] : record.alias;

      var _iterator8 = _createForOfIteratorHelper(aliases),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var alias = _step8.value;
          normalizedRecords.push(assign({}, mainNormalizedRecord, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            // we might be the child of an alias
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord // the aliases are always of the same kind as the original since they
            // are defined on the same record

          }));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }

    var matcher;
    var originalMatcher;

    for (var _i2 = 0, _normalizedRecords = normalizedRecords; _i2 < _normalizedRecords.length; _i2++) {
      var normalizedRecord = _normalizedRecords[_i2];
      var path = normalizedRecord.path; // Build up the path for nested routes if the child isn't an absolute
      // route. Only add the / delimiter if the child path isn't empty and if the
      // parent path doesn't have a trailing slash

      if (parent && path[0] !== '/') {
        var parentPath = parent.record.path;
        var connectingSlash = parentPath[parentPath.length - 1] === '/' ? '' : '/';
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }

      if ( true && normalizedRecord.path === '*') {
        throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\n' + 'See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
      } // create the object before hand so it can be passed to children


      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if ( true && parent && path[0] === '/') checkMissingParamsInAbsolutePath(matcher, parent); // if we are an alias we must tell the original record that we exist
      // so we can be removed

      if (originalRecord) {
        originalRecord.alias.push(matcher);

        if (true) {
          checkSameParams(originalRecord, matcher);
        }
      } else {
        // otherwise, the first record is the original and others are aliases
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher) originalMatcher.alias.push(matcher); // remove the route if named and only for the top record (avoid in nested calls)
        // this works because the original record is the first one

        if (isRootAdd && record.name && !isAliasRecord(matcher)) removeRoute(record.name);
      }

      if ('children' in mainNormalizedRecord) {
        var children = mainNormalizedRecord.children;

        for (var i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      } // if there was no original record, then the first one was not an alias and all
      // other alias (if any) need to reference this record when adding children


      originalRecord = originalRecord || matcher; // TODO: add normalized records for more flexibility
      // if (parent && isAliasRecord(originalRecord)) {
      //   parent.children.push(originalRecord)
      // }

      insertMatcher(matcher);
    }

    return originalMatcher ? function () {
      // since other matchers are aliases, they should be removed by the original matcher
      removeRoute(originalMatcher);
    } : noop;
  }

  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      var matcher = matcherMap.get(matcherRef);

      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      var index = matchers.indexOf(matcherRef);

      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }

  function getRoutes() {
    return matchers;
  }

  function insertMatcher(matcher) {
    var i = 0; // console.log('i is', { i })

    while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0) {
      i++;
    } // console.log('END i is', { i })
    // while (i < matchers.length && matcher.score <= matchers[i].score) i++


    matchers.splice(i, 0, matcher); // only add the original record to the name map

    if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
  }

  function resolve(location, currentLocation) {
    var matcher;
    var params = {};
    var path;
    var name;

    if ('name' in location && location.name) {
      matcher = matcherMap.get(location.name);
      if (!matcher) throw createRouterError(1
      /* MATCHER_NOT_FOUND */
      , {
        location: location
      });
      name = matcher.record.name;
      params = assign( // paramsFromLocation is a new object
      paramsFromLocation(currentLocation.params, // only keep params that exist in the resolved location
      // TODO: only keep optional params coming from a parent record
      matcher.keys.filter(function (k) {
        return !k.optional;
      }).map(function (k) {
        return k.name;
      })), location.params); // throws if cannot be stringified

      path = matcher.stringify(params);
    } else if ('path' in location) {
      // no need to resolve the path with the matcher as it was provided
      // this also allows the user to control the encoding
      path = location.path;

      if ( true && !path.startsWith('/')) {
        warn("The Matcher cannot resolve relative paths but received \"".concat(path, "\". Unless you directly called `matcher.resolve(\"").concat(path, "\")`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-router-next."));
      }

      matcher = matchers.find(function (m) {
        return m.re.test(path);
      }); // matcher should have a value after the loop

      if (matcher) {
        // TODO: dev warning of unused params if provided
        // we know the matcher works because we tested the regexp
        params = matcher.parse(path);
        name = matcher.record.name;
      } // location is a relative path

    } else {
      // match by name or path of current route
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find(function (m) {
        return m.re.test(currentLocation.path);
      });
      if (!matcher) throw createRouterError(1
      /* MATCHER_NOT_FOUND */
      , {
        location: location,
        currentLocation: currentLocation
      });
      name = matcher.record.name; // since we are navigating to the same location, we don't need to pick the
      // params like when `name` is provided

      params = assign({}, currentLocation.params, location.params);
      path = matcher.stringify(params);
    }

    var matched = [];
    var parentMatcher = matcher;

    while (parentMatcher) {
      // reversed order so parents are at the beginning
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }

    return {
      name: name,
      path: path,
      params: params,
      matched: matched,
      meta: mergeMetaFields(matched)
    };
  } // add initial routes


  routes.forEach(function (route) {
    return addRoute(route);
  });
  return {
    addRoute: addRoute,
    resolve: resolve,
    removeRoute: removeRoute,
    getRoutes: getRoutes,
    getRecordMatcher: getRecordMatcher
  };
}

function paramsFromLocation(params, keys) {
  var newParams = {};

  var _iterator9 = _createForOfIteratorHelper(keys),
      _step9;

  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var key = _step9.value;
      if (key in params) newParams[key] = params[key];
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }

  return newParams;
}
/**
 * Normalizes a RouteRecordRaw. Creates a copy
 *
 * @param record
 * @returns the normalized version
 */


function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: undefined,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in record ? record.components || {} : {
      default: record.component
    }
  };
}
/**
 * Normalize the optional `props` in a record to always be an object similar to
 * components. Also accept a boolean for components.
 * @param record
 */


function normalizeRecordProps(record) {
  var propsObject = {}; // props does not exist on redirect records but we can set false directly

  var props = record.props || false;

  if ('component' in record) {
    propsObject.default = props;
  } else {
    // NOTE: we could also allow a function to be applied to every component.
    // Would need user feedback for use cases
    for (var name in record.components) {
      propsObject[name] = typeof props === 'boolean' ? props : props[name];
    }
  }

  return propsObject;
}
/**
 * Checks if a record or any of its parent is an alias
 * @param record
 */


function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf) return true;
    record = record.parent;
  }

  return false;
}
/**
 * Merge meta fields of an array of records
 *
 * @param matched - array of matched records
 */


function mergeMetaFields(matched) {
  return matched.reduce(function (meta, record) {
    return assign(meta, record.meta);
  }, {});
}

function mergeOptions(defaults, partialOptions) {
  var options = {};

  for (var key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }

  return options;
}

function isSameParam(a, b) {
  return a.name === b.name && a.optional === b.optional && a.repeatable === b.repeatable;
}
/**
 * Check if a path and its alias have the same required params
 *
 * @param a - original record
 * @param b - alias record
 */


function checkSameParams(a, b) {
  var _iterator10 = _createForOfIteratorHelper(a.keys),
      _step10;

  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var key = _step10.value;
      if (!key.optional && !b.keys.find(isSameParam.bind(null, key))) return warn("Alias \"".concat(b.record.path, "\" and the original record: \"").concat(a.record.path, "\" should have the exact same param named \"").concat(key.name, "\""));
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }

  var _iterator11 = _createForOfIteratorHelper(b.keys),
      _step11;

  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var _key = _step11.value;
      if (!_key.optional && !a.keys.find(isSameParam.bind(null, _key))) return warn("Alias \"".concat(b.record.path, "\" and the original record: \"").concat(a.record.path, "\" should have the exact same param named \"").concat(_key.name, "\""));
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
}

function checkMissingParamsInAbsolutePath(record, parent) {
  var _iterator12 = _createForOfIteratorHelper(parent.keys),
      _step12;

  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var key = _step12.value;
      if (!record.keys.find(isSameParam.bind(null, key))) return warn("Absolute path \"".concat(record.record.path, "\" should have the exact same param named \"").concat(key.name, "\" as its parent \"").concat(parent.record.path, "\"."));
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
}
/**
 * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
 * < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving unencoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */
// const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)


var HASH_RE = /#/g; // %23

var AMPERSAND_RE = /&/g; // %26

var SLASH_RE = /\//g; // %2F

var EQUAL_RE = /=/g; // %3D

var IM_RE = /\?/g; // %3F

var PLUS_RE = /\+/g; // %2B

/**
 * NOTE: It's not clear to me if we should encode the + symbol in queries, it
 * seems to be less flexible than not doing so and I can't find out the legacy
 * systems requiring this for regular requests like text/html. In the standard,
 * the encoding of the plus character is only mentioned for
 * application/x-www-form-urlencoded
 * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
 * leave the plus character as is in queries. To be more flexible, we allow the
 * plus character on the query but it can also be manually encoded by the user.
 *
 * Resources:
 * - https://url.spec.whatwg.org/#urlencoded-parsing
 * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
 */

var ENC_BRACKET_OPEN_RE = /%5B/g; // [

var ENC_BRACKET_CLOSE_RE = /%5D/g; // ]

var ENC_CARET_RE = /%5E/g; // ^

var ENC_BACKTICK_RE = /%60/g; // `

var ENC_CURLY_OPEN_RE = /%7B/g; // {

var ENC_PIPE_RE = /%7C/g; // |

var ENC_CURLY_CLOSE_RE = /%7D/g; // }

var ENC_SPACE_RE = /%20/g; // }

/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */

function commonEncode(text) {
  return encodeURI('' + text).replace(ENC_PIPE_RE, '|').replace(ENC_BRACKET_OPEN_RE, '[').replace(ENC_BRACKET_CLOSE_RE, ']');
}
/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */


function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, '{').replace(ENC_CURLY_CLOSE_RE, '}').replace(ENC_CARET_RE, '^');
}
/**
 * Encode characters that need to be encoded query values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */


function encodeQueryValue(text) {
  return commonEncode(text) // Encode the space as +, encode the + to differentiate it from the space
  .replace(PLUS_RE, '%2B').replace(ENC_SPACE_RE, '+').replace(HASH_RE, '%23').replace(AMPERSAND_RE, '%26').replace(ENC_BACKTICK_RE, '`').replace(ENC_CURLY_OPEN_RE, '{').replace(ENC_CURLY_CLOSE_RE, '}').replace(ENC_CARET_RE, '^');
}
/**
 * Like `encodeQueryValue` but also encodes the `=` character.
 *
 * @param text - string to encode
 */


function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, '%3D');
}
/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */


function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F');
}
/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
 * string instead.
 *
 * @param text - string to encode
 * @returns encoded string
 */


function encodeParam(text) {
  return text == null ? '' : encodePath(text).replace(SLASH_RE, '%2F');
}
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */


function decode(text) {
  try {
    return decodeURIComponent('' + text);
  } catch (err) {
     true && warn("Error decoding \"".concat(text, "\". Using original value"));
  }

  return '' + text;
}
/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams

 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */


function parseQuery(search) {
  var query = {}; // avoid creating an object with an empty key and empty value
  // because of split('&')

  if (search === '' || search === '?') return query;
  var hasLeadingIM = search[0] === '?';
  var searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');

  for (var i = 0; i < searchParams.length; ++i) {
    // pre decode the + into space
    var searchParam = searchParams[i].replace(PLUS_RE, ' '); // allow the = character

    var eqPos = searchParam.indexOf('=');
    var key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    var value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));

    if (key in query) {
      // an extra variable for ts types
      var currentValue = query[key];

      if (!Array.isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }

      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }

  return query;
}
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @internal
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */


function stringifyQuery(query) {
  var search = '';

  var _loop = function _loop(_key2) {
    var value = query[_key2];
    _key2 = encodeQueryKey(_key2);

    if (value == null) {
      // only null adds the value
      if (value !== undefined) {
        search += (search.length ? '&' : '') + _key2;
      }

      key = _key2;
      return "continue";
    } // keep null values


    var values = Array.isArray(value) ? value.map(function (v) {
      return v && encodeQueryValue(v);
    }) : [value && encodeQueryValue(value)];
    values.forEach(function (value) {
      // skip undefined values in arrays as if they were not present
      // smaller code than using filter
      if (value !== undefined) {
        // only append & with non-empty search
        search += (search.length ? '&' : '') + _key2;
        if (value != null) search += '=' + value;
      }
    });
    key = _key2;
  };

  for (var key in query) {
    var _ret = _loop(key);

    if (_ret === "continue") continue;
  }

  return search;
}
/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */


function normalizeQuery(query) {
  var normalizedQuery = {};

  for (var _key3 in query) {
    var value = query[_key3];

    if (value !== undefined) {
      normalizedQuery[_key3] = Array.isArray(value) ? value.map(function (v) {
        return v == null ? null : '' + v;
      }) : value == null ? value : '' + value;
    }
  }

  return normalizedQuery;
}
/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */


function useCallbacks() {
  var handlers = [];

  function add(handler) {
    handlers.push(handler);
    return function () {
      var i = handlers.indexOf(handler);
      if (i > -1) handlers.splice(i, 1);
    };
  }

  function reset() {
    handlers = [];
  }

  return {
    add: add,
    list: function list() {
      return handlers;
    },
    reset: reset
  };
}

function registerGuard(record, name, guard) {
  var removeFromList = function removeFromList() {
    record[name].delete(guard);
  };

  Object(vue__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"])(removeFromList);
  Object(vue__WEBPACK_IMPORTED_MODULE_0__["onDeactivated"])(removeFromList);
  Object(vue__WEBPACK_IMPORTED_MODULE_0__["onActivated"])(function () {
    record[name].add(guard);
  });
  record[name].add(guard);
}
/**
 * Add a navigation guard that triggers whenever the component for the current
 * location is about to be left. Similar to {@link beforeRouteLeave} but can be
 * used in any component. The guard is removed when the component is unmounted.
 *
 * @param leaveGuard - {@link NavigationGuard}
 */


function onBeforeRouteLeave(leaveGuard) {
  if ( true && !Object(vue__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])()) {
    warn('getCurrentInstance() returned null. onBeforeRouteLeave() must be called at the top of a setup function');
    return;
  }

  var activeRecord = Object(vue__WEBPACK_IMPORTED_MODULE_0__["inject"])(matchedRouteKey, // to avoid warning
  {}).value;

  if (!activeRecord) {
     true && warn('No active route record was found when calling `onBeforeRouteLeave()`. Make sure you call this function inside of a component child of <router-view>. Maybe you called it inside of App.vue?');
    return;
  }

  registerGuard(activeRecord, 'leaveGuards', leaveGuard);
}
/**
 * Add a navigation guard that triggers whenever the current location is about
 * to be updated. Similar to {@link beforeRouteUpdate} but can be used in any
 * component. The guard is removed when the component is unmounted.
 *
 * @param updateGuard - {@link NavigationGuard}
 */


function onBeforeRouteUpdate(updateGuard) {
  if ( true && !Object(vue__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])()) {
    warn('getCurrentInstance() returned null. onBeforeRouteUpdate() must be called at the top of a setup function');
    return;
  }

  var activeRecord = Object(vue__WEBPACK_IMPORTED_MODULE_0__["inject"])(matchedRouteKey, // to avoid warning
  {}).value;

  if (!activeRecord) {
     true && warn('No active route record was found when calling `onBeforeRouteUpdate()`. Make sure you call this function inside of a component child of <router-view>. Maybe you called it inside of App.vue?');
    return;
  }

  registerGuard(activeRecord, 'updateGuards', updateGuard);
}

function guardToPromiseFn(guard, to, from, record, name) {
  // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
  var enterCallbackArray = record && ( // name is defined if record is because of the function overload
  record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return function () {
    return new Promise(function (resolve, reject) {
      var next = function next(valid) {
        if (valid === false) reject(createRouterError(4
        /* NAVIGATION_ABORTED */
        , {
          from: from,
          to: to
        }));else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2
          /* NAVIGATION_GUARD_REDIRECT */
          , {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
          record.enterCallbacks[name] === enterCallbackArray && typeof valid === 'function') enterCallbackArray.push(valid);
          resolve();
        }
      }; // wrapping with Promise.resolve allows it to work with both async and sync guards


      var guardReturn = guard.call(record && record.instances[name], to, from,  true ? canOnlyBeCalledOnce(next, to, from) : undefined);
      var guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3) guardCall = guardCall.then(next);

      if ( true && guard.length > 2) {
        var message = "The \"next\" callback was never called inside of ".concat(guard.name ? '"' + guard.name + '"' : '', ":\n").concat(guard.toString(), "\n. If you are returning a value instead of calling \"next\", make sure to remove the \"next\" parameter from your function.");

        if (_typeof(guardReturn) === 'object' && 'then' in guardReturn) {
          guardCall = guardCall.then(function (resolvedValue) {
            // @ts-expect-error: _called is added at canOnlyBeCalledOnce
            if (!next._called) {
              warn(message);
              return Promise.reject(new Error('Invalid navigation guard'));
            }

            return resolvedValue;
          }); // TODO: test me!
        } else if (guardReturn !== undefined) {
          // @ts-expect-error: _called is added at canOnlyBeCalledOnce
          if (!next._called) {
            warn(message);
            reject(new Error('Invalid navigation guard'));
            return;
          }
        }
      }

      guardCall.catch(function (err) {
        return reject(err);
      });
    });
  };
}

function canOnlyBeCalledOnce(next, to, from) {
  var called = 0;
  return function () {
    if (called++ === 1) warn("The \"next\" callback was called more than once in one navigation guard when going from \"".concat(from.fullPath, "\" to \"").concat(to.fullPath, "\". It should be called exactly one time in each navigation guard. This will fail in production.")); // @ts-expect-error: we put it in the original one because it's easier to check

    next._called = true;
    if (called === 1) next.apply(null, arguments);
  };
}

function extractComponentsGuards(matched, guardType, to, from) {
  var guards = [];

  var _iterator13 = _createForOfIteratorHelper(matched),
      _step13;

  try {
    var _loop2 = function _loop2() {
      var record = _step13.value;

      var _loop3 = function _loop3(name) {
        var rawComponent = record.components[name];

        if (true) {
          if (!rawComponent || _typeof(rawComponent) !== 'object' && typeof rawComponent !== 'function') {
            warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is not") + " a valid component. Received \"".concat(String(rawComponent), "\".")); // throw to ensure we stop here but warn to ensure the message isn't
            // missed by the user

            throw new Error('Invalid route component');
          } else if ('then' in rawComponent) {
            // warn if user wrote import('/component.vue') instead of () =>
            // import('./component.vue')
            warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is a ") + "Promise instead of a function that returns a Promise. Did you " + "write \"import('./MyPage.vue')\" instead of " + "\"() => import('./MyPage.vue')\" ? This will break in " + "production if not fixed.");
            var promise = rawComponent;

            rawComponent = function rawComponent() {
              return promise;
            };
          } else if (rawComponent.__asyncLoader && // warn only once per component
          !rawComponent.__warnedDefineAsync) {
            rawComponent.__warnedDefineAsync = true;
            warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is defined ") + "using \"defineAsyncComponent()\". " + "Write \"() => import('./MyPage.vue')\" instead of " + "\"defineAsyncComponent(() => import('./MyPage.vue'))\".");
          }
        } // skip update and leave guards if the route component is not mounted


        if (guardType !== 'beforeRouteEnter' && !record.instances[name]) return "continue";

        if (isRouteComponent(rawComponent)) {
          // __vccOpts is added by vue-class-component and contain the regular options
          var options = rawComponent.__vccOpts || rawComponent;
          var guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          // start requesting the chunk already
          var componentPromise = rawComponent();

          if ( true && !('catch' in componentPromise)) {
            warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is a function that does not return a Promise. If you were passing a functional component, make sure to add a \"displayName\" to the component. This will break in production if not fixed."));
            componentPromise = Promise.resolve(componentPromise);
          }

          guards.push(function () {
            return componentPromise.then(function (resolved) {
              if (!resolved) return Promise.reject(new Error("Couldn't resolve component \"".concat(name, "\" at \"").concat(record.path, "\"")));
              var resolvedComponent = isESModule(resolved) ? resolved.default : resolved; // replace the function with the resolved component

              record.components[name] = resolvedComponent; // __vccOpts is added by vue-class-component and contain the regular options

              var options = resolvedComponent.__vccOpts || resolvedComponent;
              var guard = options[guardType];
              return guard && guardToPromiseFn(guard, to, from, record, name)();
            });
          });
        }
      };

      for (var name in record.components) {
        var _ret2 = _loop3(name);

        if (_ret2 === "continue") continue;
      }
    };

    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }

  return guards;
}
/**
 * Allows differentiating lazy components from functional components and vue-class-component
 *
 * @param component
 */


function isRouteComponent(component) {
  return _typeof(component) === 'object' || 'displayName' in component || 'props' in component || '__vccOpts' in component;
} // TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC


function useLink(props) {
  var router = Object(vue__WEBPACK_IMPORTED_MODULE_0__["inject"])(routerKey);
  var currentRoute = Object(vue__WEBPACK_IMPORTED_MODULE_0__["inject"])(routeLocationKey);
  var route = Object(vue__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return router.resolve(Object(vue__WEBPACK_IMPORTED_MODULE_0__["unref"])(props.to));
  });
  var activeRecordIndex = Object(vue__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var matched = route.value.matched;
    var length = matched.length;
    var routeMatched = matched[length - 1];
    var currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length) return -1;
    var index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1) return index; // possible parent record

    var parentRecordPath = getOriginalPath(matched[length - 2]);
    return (// we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index
    );
  });
  var isActive = Object(vue__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params);
  });
  var isExactActive = Object(vue__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params);
  });

  function navigate() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (guardEvent(e)) {
      return router[Object(vue__WEBPACK_IMPORTED_MODULE_0__["unref"])(props.replace) ? 'replace' : 'push'](Object(vue__WEBPACK_IMPORTED_MODULE_0__["unref"])(props.to) // avoid uncaught errors are they are logged anyway
      ).catch(noop);
    }

    return Promise.resolve();
  } // devtools only


  if (( true) && isBrowser) {
    var instance = Object(vue__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])();

    if (instance) {
      var linkContextDevtools = {
        route: route.value,
        isActive: isActive.value,
        isExactActive: isExactActive.value
      }; // @ts-expect-error: this is internal

      instance.__vrl_devtools = instance.__vrl_devtools || []; // @ts-expect-error: this is internal

      instance.__vrl_devtools.push(linkContextDevtools);

      Object(vue__WEBPACK_IMPORTED_MODULE_0__["watchEffect"])(function () {
        linkContextDevtools.route = route.value;
        linkContextDevtools.isActive = isActive.value;
        linkContextDevtools.isExactActive = isExactActive.value;
      }, {
        flush: 'post'
      });
    }
  }

  return {
    route: route,
    href: Object(vue__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
      return route.value.href;
    }),
    isActive: isActive,
    isExactActive: isExactActive,
    navigate: navigate
  };
}

var RouterLinkImpl = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["defineComponent"])({
  name: 'RouterLink',
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    }
  },
  useLink: useLink,
  setup: function setup(props, _ref8) {
    var slots = _ref8.slots;
    var link = Object(vue__WEBPACK_IMPORTED_MODULE_0__["reactive"])(useLink(props));

    var _inject = Object(vue__WEBPACK_IMPORTED_MODULE_0__["inject"])(routerKey),
        options = _inject.options;

    var elClass = Object(vue__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
      var _ref9;

      return _ref9 = {}, _defineProperty(_ref9, getLinkClass(props.activeClass, options.linkActiveClass, 'router-link-active'), link.isActive), _defineProperty(_ref9, getLinkClass(props.exactActiveClass, options.linkExactActiveClass, 'router-link-exact-active'), link.isExactActive), _ref9;
    });
    return function () {
      var children = slots.default && slots.default(link);
      return props.custom ? children : Object(vue__WEBPACK_IMPORTED_MODULE_0__["h"])('a', {
        'aria-current': link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
}); // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

/**
 * Component to render a link that triggers a navigation on click.
 */

var RouterLink = RouterLinkImpl;

function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return; // don't redirect when preventDefault called

  if (e.defaultPrevented) return; // don't redirect on right click

  if (e.button !== undefined && e.button !== 0) return; // don't redirect if `target="_blank"`
  // @ts-expect-error getAttribute does exist

  if (e.currentTarget && e.currentTarget.getAttribute) {
    // @ts-expect-error getAttribute exists
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) return;
  } // this may be a Weex event which doesn't have this method


  if (e.preventDefault) e.preventDefault();
  return true;
}

function includesParams(outer, inner) {
  var _loop4 = function _loop4(_key4) {
    var innerValue = inner[_key4];
    var outerValue = outer[_key4];

    if (typeof innerValue === 'string') {
      if (innerValue !== outerValue) return {
        v: false
      };
    } else {
      if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some(function (value, i) {
        return value !== outerValue[i];
      })) return {
        v: false
      };
    }
  };

  for (var _key4 in inner) {
    var _ret3 = _loop4(_key4);

    if (_typeof(_ret3) === "object") return _ret3.v;
  }

  return true;
}
/**
 * Get the original path value of a record by following its aliasOf
 * @param record
 */


function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : '';
}
/**
 * Utility class to get the active class based on defaults.
 * @param propClass
 * @param globalClass
 * @param defaultClass
 */


var getLinkClass = function getLinkClass(propClass, globalClass, defaultClass) {
  return propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
};

var RouterViewImpl = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["defineComponent"])({
  name: 'RouterView',
  // #674 we manually inherit them
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: 'default'
    },
    route: Object
  },
  setup: function setup(props, _ref10) {
    var attrs = _ref10.attrs,
        slots = _ref10.slots;
     true && warnDeprecatedUsage();
    var injectedRoute = Object(vue__WEBPACK_IMPORTED_MODULE_0__["inject"])(routerViewLocationKey);
    var routeToDisplay = Object(vue__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
      return props.route || injectedRoute.value;
    });
    var depth = Object(vue__WEBPACK_IMPORTED_MODULE_0__["inject"])(viewDepthKey, 0);
    var matchedRouteRef = Object(vue__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
      return routeToDisplay.value.matched[depth];
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["provide"])(viewDepthKey, depth + 1);
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["provide"])(matchedRouteKey, matchedRouteRef);
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["provide"])(routerViewLocationKey, routeToDisplay);
    var viewRef = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])(); // watch at the same time the component instance, the route record we are
    // rendering, and the name

    Object(vue__WEBPACK_IMPORTED_MODULE_0__["watch"])(function () {
      return [viewRef.value, matchedRouteRef.value, props.name];
    }, function (_ref11, _ref12) {
      var _ref13 = _slicedToArray(_ref11, 3),
          instance = _ref13[0],
          to = _ref13[1],
          name = _ref13[2];

      var _ref14 = _slicedToArray(_ref12, 3),
          oldInstance = _ref14[0],
          from = _ref14[1],
          oldName = _ref14[2];

      // copy reused instances
      if (to) {
        // this will update the instance for new instances as well as reused
        // instances when navigating to a new route
        to.instances[name] = instance; // the component instance is reused for a different route or name so
        // we copy any saved update or leave guards. With async setup, the
        // mounting component will mount before the matchedRoute changes,
        // making instance === oldInstance, so we check if guards have been
        // added before. This works because we remove guards when
        // unmounting/deactivating components

        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }

          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      } // trigger beforeRouteEnter next callbacks


      if (instance && to && ( // if there is no instance but to and from are the same this might be
      // the first visit
      !from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach(function (callback) {
          return callback(instance);
        });
      }
    }, {
      flush: 'post'
    });
    return function () {
      var route = routeToDisplay.value;
      var matchedRoute = matchedRouteRef.value;
      var ViewComponent = matchedRoute && matchedRoute.components[props.name]; // we need the value at the time we render because when we unmount, we
      // navigated to a different location so the value is different

      var currentName = props.name;

      if (!ViewComponent) {
        return normalizeSlot(slots.default, {
          Component: ViewComponent,
          route: route
        });
      } // props from route configuration


      var routePropsOption = matchedRoute.props[props.name];
      var routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === 'function' ? routePropsOption(route) : routePropsOption : null;

      var onVnodeUnmounted = function onVnodeUnmounted(vnode) {
        // remove the instance reference to prevent leak
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };

      var component = Object(vue__WEBPACK_IMPORTED_MODULE_0__["h"])(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted: onVnodeUnmounted,
        ref: viewRef
      }));

      if (( true) && isBrowser && component.ref) {
        // TODO: can display if it's an alias, its props
        var info = {
          depth: depth,
          name: matchedRoute.name,
          path: matchedRoute.path,
          meta: matchedRoute.meta
        };
        var internalInstances = Array.isArray(component.ref) ? component.ref.map(function (r) {
          return r.i;
        }) : [component.ref.i];
        internalInstances.forEach(function (instance) {
          // @ts-expect-error
          instance.__vrv_devtools = info;
        });
      }

      return (// pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        normalizeSlot(slots.default, {
          Component: component,
          route: route
        }) || component
      );
    };
  }
});

function normalizeSlot(slot, data) {
  if (!slot) return null;
  var slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
} // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

/**
 * Component to display the current route the user is at.
 */


var RouterView = RouterViewImpl; // warn against deprecated usage with <transition> & <keep-alive>
// due to functional component being no longer eager in Vue 3

function warnDeprecatedUsage() {
  var instance = Object(vue__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])();
  var parentName = instance.parent && instance.parent.type.name;

  if (parentName && (parentName === 'KeepAlive' || parentName.includes('Transition'))) {
    var comp = parentName === 'KeepAlive' ? 'keep-alive' : 'transition';
    warn("<router-view> can no longer be used directly inside <transition> or <keep-alive>.\n" + "Use slot props instead:\n\n" + "<router-view v-slot=\"{ Component }\">\n" + "  <".concat(comp, ">\n") + "    <component :is=\"Component\" />\n" + "  </".concat(comp, ">\n") + "</router-view>");
  }
}

function formatRouteLocation(routeLocation, tooltip) {
  var copy = assign({}, routeLocation, {
    // remove variables that can contain vue instances
    matched: routeLocation.matched.map(function (matched) {
      return omit(matched, ['instances', 'children', 'aliasOf']);
    })
  });
  return {
    _custom: {
      type: null,
      readOnly: true,
      display: routeLocation.fullPath,
      tooltip: tooltip,
      value: copy
    }
  };
}

function formatDisplay(display) {
  return {
    _custom: {
      display: display
    }
  };
} // to support multiple router instances


var routerId = 0;

function addDevtools(app, router, matcher) {
  // Take over router.beforeEach and afterEach
  // make sure we are not registering the devtool twice
  if (router.__hasDevtools) return;
  router.__hasDevtools = true; // increment to support multiple router instances

  var id = routerId++;
  Object(_vue_devtools_api__WEBPACK_IMPORTED_MODULE_1__["setupDevtoolsPlugin"])({
    id: 'org.vuejs.router' + (id ? '.' + id : ''),
    label: 'Vue Router',
    packageName: 'vue-router',
    homepage: 'https://next.router.vuejs.org/',
    logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
    componentStateTypes: ['Routing'],
    app: app
  }, function (api) {
    // display state added by the router
    api.on.inspectComponent(function (payload, ctx) {
      if (payload.instanceData) {
        payload.instanceData.state.push({
          type: 'Routing',
          key: '$route',
          editable: false,
          value: formatRouteLocation(router.currentRoute.value, 'Current Route')
        });
      }
    }); // mark router-link as active and display tags on router views

    api.on.visitComponentTree(function (_ref15) {
      var node = _ref15.treeNode,
          componentInstance = _ref15.componentInstance;

      if (componentInstance.__vrv_devtools) {
        var info = componentInstance.__vrv_devtools;
        node.tags.push({
          label: (info.name ? "".concat(info.name.toString(), ": ") : '') + info.path,
          textColor: 0,
          tooltip: 'This component is rendered by &lt;router-view&gt;',
          backgroundColor: PINK_500
        });
      } // if multiple useLink are used


      if (Array.isArray(componentInstance.__vrl_devtools)) {
        componentInstance.__devtoolsApi = api;

        componentInstance.__vrl_devtools.forEach(function (devtoolsData) {
          var backgroundColor = ORANGE_400;
          var tooltip = '';

          if (devtoolsData.isExactActive) {
            backgroundColor = LIME_500;
            tooltip = 'This is exactly active';
          } else if (devtoolsData.isActive) {
            backgroundColor = BLUE_600;
            tooltip = 'This link is active';
          }

          node.tags.push({
            label: devtoolsData.route.path,
            textColor: 0,
            tooltip: tooltip,
            backgroundColor: backgroundColor
          });
        });
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["watch"])(router.currentRoute, function () {
      // refresh active state
      refreshRoutesView();
      api.notifyComponentUpdate();
      api.sendInspectorTree(routerInspectorId);
      api.sendInspectorState(routerInspectorId);
    });
    var navigationsLayerId = 'router:navigations:' + id;
    api.addTimelineLayer({
      id: navigationsLayerId,
      label: "Router".concat(id ? ' ' + id : '', " Navigations"),
      color: 0x40a8c4
    }); // const errorsLayerId = 'router:errors'
    // api.addTimelineLayer({
    //   id: errorsLayerId,
    //   label: 'Router Errors',
    //   color: 0xea5455,
    // })

    router.onError(function (error, to) {
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: 'Error during Navigation',
          subtitle: to.fullPath,
          logType: 'error',
          time: Date.now(),
          data: {
            error: error
          },
          groupId: to.meta.__navigationId
        }
      });
    }); // attached to `meta` and used to group events

    var navigationId = 0;
    router.beforeEach(function (to, from) {
      var data = {
        guard: formatDisplay('beforeEach'),
        from: formatRouteLocation(from, 'Current Location during this navigation'),
        to: formatRouteLocation(to, 'Target location')
      }; // Used to group navigations together, hide from devtools

      Object.defineProperty(to.meta, '__navigationId', {
        value: navigationId++
      });
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          time: Date.now(),
          title: 'Start of navigation',
          subtitle: to.fullPath,
          data: data,
          groupId: to.meta.__navigationId
        }
      });
    });
    router.afterEach(function (to, from, failure) {
      var data = {
        guard: formatDisplay('afterEach')
      };

      if (failure) {
        data.failure = {
          _custom: {
            type: Error,
            readOnly: true,
            display: failure ? failure.message : '',
            tooltip: 'Navigation Failure',
            value: failure
          }
        };
        data.status = formatDisplay('❌');
      } else {
        data.status = formatDisplay('✅');
      } // we set here to have the right order


      data.from = formatRouteLocation(from, 'Current Location during this navigation');
      data.to = formatRouteLocation(to, 'Target location');
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: 'End of navigation',
          subtitle: to.fullPath,
          time: Date.now(),
          data: data,
          logType: failure ? 'warning' : 'default',
          groupId: to.meta.__navigationId
        }
      });
    });
    /**
     * Inspector of Existing routes
     */

    var routerInspectorId = 'router-inspector:' + id;
    api.addInspector({
      id: routerInspectorId,
      label: 'Routes' + (id ? ' ' + id : ''),
      icon: 'book',
      treeFilterPlaceholder: 'Search routes'
    });

    function refreshRoutesView() {
      // the routes view isn't active
      if (!activeRoutesPayload) return;
      var payload = activeRoutesPayload; // children routes will appear as nested

      var routes = matcher.getRoutes().filter(function (route) {
        return !route.parent;
      }); // reset match state to false

      routes.forEach(resetMatchStateOnRouteRecord); // apply a match state if there is a payload

      if (payload.filter) {
        routes = routes.filter(function (route) {
          return (// save matches state based on the payload
            isRouteMatching(route, payload.filter.toLowerCase())
          );
        });
      } // mark active routes


      routes.forEach(function (route) {
        return markRouteRecordActive(route, router.currentRoute.value);
      });
      payload.rootNodes = routes.map(formatRouteRecordForInspector);
    }

    var activeRoutesPayload;
    api.on.getInspectorTree(function (payload) {
      activeRoutesPayload = payload;

      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        refreshRoutesView();
      }
    });
    /**
     * Display information about the currently selected route record
     */

    api.on.getInspectorState(function (payload) {
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        var routes = matcher.getRoutes();
        var route = routes.find(function (route) {
          return route.record.__vd_id === payload.nodeId;
        });

        if (route) {
          payload.state = {
            options: formatRouteRecordMatcherForStateInspector(route)
          };
        }
      }
    });
    api.sendInspectorTree(routerInspectorId);
    api.sendInspectorState(routerInspectorId);
  });
}

function modifierForKey(key) {
  if (key.optional) {
    return key.repeatable ? '*' : '?';
  } else {
    return key.repeatable ? '+' : '';
  }
}

function formatRouteRecordMatcherForStateInspector(route) {
  var record = route.record;
  var fields = [{
    editable: false,
    key: 'path',
    value: record.path
  }];

  if (record.name != null) {
    fields.push({
      editable: false,
      key: 'name',
      value: record.name
    });
  }

  fields.push({
    editable: false,
    key: 'regexp',
    value: route.re
  });

  if (route.keys.length) {
    fields.push({
      editable: false,
      key: 'keys',
      value: {
        _custom: {
          type: null,
          readOnly: true,
          display: route.keys.map(function (key) {
            return "".concat(key.name).concat(modifierForKey(key));
          }).join(' '),
          tooltip: 'Param keys',
          value: route.keys
        }
      }
    });
  }

  if (record.redirect != null) {
    fields.push({
      editable: false,
      key: 'redirect',
      value: record.redirect
    });
  }

  if (route.alias.length) {
    fields.push({
      editable: false,
      key: 'aliases',
      value: route.alias.map(function (alias) {
        return alias.record.path;
      })
    });
  }

  fields.push({
    key: 'score',
    editable: false,
    value: {
      _custom: {
        type: null,
        readOnly: true,
        display: route.score.map(function (score) {
          return score.join(', ');
        }).join(' | '),
        tooltip: 'Score used to sort routes',
        value: route.score
      }
    }
  });
  return fields;
}
/**
 * Extracted from tailwind palette
 */


var PINK_500 = 0xec4899;
var BLUE_600 = 0x2563eb;
var LIME_500 = 0x84cc16;
var CYAN_400 = 0x22d3ee;
var ORANGE_400 = 0xfb923c; // const GRAY_100 = 0xf4f4f5

var DARK = 0x666666;

function formatRouteRecordForInspector(route) {
  var tags = [];
  var record = route.record;

  if (record.name != null) {
    tags.push({
      label: String(record.name),
      textColor: 0,
      backgroundColor: CYAN_400
    });
  }

  if (record.aliasOf) {
    tags.push({
      label: 'alias',
      textColor: 0,
      backgroundColor: ORANGE_400
    });
  }

  if (route.__vd_match) {
    tags.push({
      label: 'matches',
      textColor: 0,
      backgroundColor: PINK_500
    });
  }

  if (route.__vd_exactActive) {
    tags.push({
      label: 'exact',
      textColor: 0,
      backgroundColor: LIME_500
    });
  }

  if (route.__vd_active) {
    tags.push({
      label: 'active',
      textColor: 0,
      backgroundColor: BLUE_600
    });
  }

  if (record.redirect) {
    tags.push({
      label: 'redirect: ' + (typeof record.redirect === 'string' ? record.redirect : 'Object'),
      textColor: 0xffffff,
      backgroundColor: DARK
    });
  } // add an id to be able to select it. Using the `path` is not possible because
  // empty path children would collide with their parents


  var id = record.__vd_id;

  if (id == null) {
    id = String(routeRecordId++);
    record.__vd_id = id;
  }

  return {
    id: id,
    label: record.path,
    tags: tags,
    children: route.children.map(formatRouteRecordForInspector)
  };
} //  incremental id for route records and inspector state


var routeRecordId = 0;
var EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;

function markRouteRecordActive(route, currentRoute) {
  // no route will be active if matched is empty
  // reset the matching state
  var isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
  route.__vd_exactActive = route.__vd_active = isExactActive;

  if (!isExactActive) {
    route.__vd_active = currentRoute.matched.some(function (match) {
      return isSameRouteRecord(match, route.record);
    });
  }

  route.children.forEach(function (childRoute) {
    return markRouteRecordActive(childRoute, currentRoute);
  });
}

function resetMatchStateOnRouteRecord(route) {
  route.__vd_match = false;
  route.children.forEach(resetMatchStateOnRouteRecord);
}

function isRouteMatching(route, filter) {
  var found = String(route.re).match(EXTRACT_REGEXP_RE);
  route.__vd_match = false;

  if (!found || found.length < 3) {
    return false;
  } // use a regexp without $ at the end to match nested routes better


  var nonEndingRE = new RegExp(found[1].replace(/\$$/, ''), found[2]);

  if (nonEndingRE.test(filter)) {
    // mark children as matches
    route.children.forEach(function (child) {
      return isRouteMatching(child, filter);
    }); // exception case: `/`

    if (route.record.path !== '/' || filter === '/') {
      route.__vd_match = route.re.test(filter);
      return true;
    } // hide the / route


    return false;
  }

  var path = route.record.path.toLowerCase();
  var decodedPath = decode(path); // also allow partial matching on the path

  if (!filter.startsWith('/') && (decodedPath.includes(filter) || path.includes(filter))) return true;
  if (decodedPath.startsWith(filter) || path.startsWith(filter)) return true;
  if (route.record.name && String(route.record.name).includes(filter)) return true;
  return route.children.some(function (child) {
    return isRouteMatching(child, filter);
  });
}

function omit(obj, keys) {
  var ret = {};

  for (var _key5 in obj) {
    if (!keys.includes(_key5)) {
      // @ts-expect-error
      ret[_key5] = obj[_key5];
    }
  }

  return ret;
}
/**
 * Creates a Router instance that can be used by a Vue app.
 *
 * @param options - {@link RouterOptions}
 */


function createRouter(options) {
  var matcher = createRouterMatcher(options.routes, options);
  var parseQuery$1 = options.parseQuery || parseQuery;
  var stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  var routerHistory = options.history;
  if ( true && !routerHistory) throw new Error('Provide the "history" option when calling "createRouter()":' + ' https://next.router.vuejs.org/api/#history.');
  var beforeGuards = useCallbacks();
  var beforeResolveGuards = useCallbacks();
  var afterGuards = useCallbacks();
  var currentRoute = Object(vue__WEBPACK_IMPORTED_MODULE_0__["shallowRef"])(START_LOCATION_NORMALIZED);
  var pendingLocation = START_LOCATION_NORMALIZED; // leave the scrollRestoration if no scrollBehavior is provided

  if (isBrowser && options.scrollBehavior && 'scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  var normalizeParams = applyToParams.bind(null, function (paramValue) {
    return '' + paramValue;
  });
  var encodeParams = applyToParams.bind(null, encodeParam);
  var decodeParams = // @ts-expect-error: intentionally avoid the type check
  applyToParams.bind(null, decode);

  function addRoute(parentOrRoute, route) {
    var parent;
    var record;

    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }

    return matcher.addRoute(record, parent);
  }

  function removeRoute(name) {
    var recordMatcher = matcher.getRecordMatcher(name);

    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    } else if (true) {
      warn("Cannot remove non-existent route \"".concat(String(name), "\""));
    }
  }

  function getRoutes() {
    return matcher.getRoutes().map(function (routeMatcher) {
      return routeMatcher.record;
    });
  }

  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }

  function resolve(rawLocation, currentLocation) {
    // const objectLocation = routerLocationAsObject(rawLocation)
    // we create a copy to modify it later
    currentLocation = assign({}, currentLocation || currentRoute.value);

    if (typeof rawLocation === 'string') {
      var locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);

      var _matchedRoute = matcher.resolve({
        path: locationNormalized.path
      }, currentLocation);

      var _href = routerHistory.createHref(locationNormalized.fullPath);

      if (true) {
        if (_href.startsWith('//')) warn("Location \"".concat(rawLocation, "\" resolved to \"").concat(_href, "\". A resolved location cannot start with multiple slashes."));else if (!_matchedRoute.matched.length) {
          warn("No match found for location with path \"".concat(rawLocation, "\""));
        }
      } // locationNormalized is always a new object


      return assign(locationNormalized, _matchedRoute, {
        params: decodeParams(_matchedRoute.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: undefined,
        href: _href
      });
    }

    var matcherLocation; // path could be relative in object as well

    if ('path' in rawLocation) {
      if ( true && 'params' in rawLocation && !('name' in rawLocation) && // @ts-expect-error: the type is never
      Object.keys(rawLocation.params).length) {
        warn("Path \"".concat( // @ts-expect-error: the type is never
        rawLocation.path, "\" was passed with params but they will be ignored. Use a named route alongside params instead."));
      }

      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      // remove any nullish param
      var targetParams = assign({}, rawLocation.params);

      for (var _key6 in targetParams) {
        if (targetParams[_key6] == null) {
          delete targetParams[_key6];
        }
      } // pass encoded values to the matcher so it can produce encoded path and fullPath


      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      }); // current location params are decoded, we need to encode them in case the
      // matcher merges the params

      currentLocation.params = encodeParams(currentLocation.params);
    }

    var matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    var hash = rawLocation.hash || '';

    if ( true && hash && !hash.startsWith('#')) {
      warn("A `hash` should always start with the character \"#\". Replace \"".concat(hash, "\" with \"#").concat(hash, "\"."));
    } // decoding them) the matcher might have merged current location params so
    // we need to run the decoding again


    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    var fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    var href = routerHistory.createHref(fullPath);

    if (true) {
      if (href.startsWith('//')) {
        warn("Location \"".concat(rawLocation, "\" resolved to \"").concat(href, "\". A resolved location cannot start with multiple slashes."));
      } else if (!matchedRoute.matched.length) {
        warn("No match found for location with path \"".concat('path' in rawLocation ? rawLocation.path : rawLocation, "\""));
      }
    }

    return assign({
      fullPath: fullPath,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: hash,
      query: // if the user is using a custom query lib like qs, we might have
      // nested objects, so we keep the query as is, meaning it can contain
      // numbers at `$route.query`, but at the point, the user will have to
      // use their own type anyway.
      // https://github.com/vuejs/vue-router-next/issues/328#issuecomment-649481567
      stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
    }, matchedRoute, {
      redirectedFrom: undefined,
      href: href
    });
  }

  function locationAsObject(to) {
    return typeof to === 'string' ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }

  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8
      /* NAVIGATION_CANCELLED */
      , {
        from: from,
        to: to
      });
    }
  }

  function push(to) {
    return pushWithRedirect(to);
  }

  function replace(to) {
    return push(assign(locationAsObject(to), {
      replace: true
    }));
  }

  function handleRedirectRecord(to) {
    var lastMatched = to.matched[to.matched.length - 1];

    if (lastMatched && lastMatched.redirect) {
      var redirect = lastMatched.redirect;
      var newTargetLocation = typeof redirect === 'function' ? redirect(to) : redirect;

      if (typeof newTargetLocation === 'string') {
        newTargetLocation = newTargetLocation.includes('?') || newTargetLocation.includes('#') ? newTargetLocation = locationAsObject(newTargetLocation) : // force empty params
        {
          path: newTargetLocation
        }; // @ts-expect-error: force empty params when a string is passed to let
        // the router parse them again

        newTargetLocation.params = {};
      }

      if ( true && !('path' in newTargetLocation) && !('name' in newTargetLocation)) {
        warn("Invalid redirect found:\n".concat(JSON.stringify(newTargetLocation, null, 2), "\n when navigating to \"").concat(to.fullPath, "\". A redirect must contain a name or path. This will break in production."));
        throw new Error('Invalid redirect');
      }

      return assign({
        query: to.query,
        hash: to.hash,
        params: to.params
      }, newTargetLocation);
    }
  }

  function pushWithRedirect(to, redirectedFrom) {
    var targetLocation = pendingLocation = resolve(to);
    var from = currentRoute.value;
    var data = to.state;
    var force = to.force; // to could be a string where `replace` is a function

    var replace = to.replace === true;
    var shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
      state: data,
      force: force,
      replace: replace
    }), // keep original redirectedFrom if it exists
    redirectedFrom || targetLocation); // if it was a redirect we already called `pushWithRedirect` above

    var toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    var failure;

    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16
      /* NAVIGATION_DUPLICATED */
      , {
        to: toLocation,
        from: from
      }); // trigger scroll to allow scrolling to the same anchor

      handleScroll(from, from, // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      true, // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      false);
    }

    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch(function (error) {
      return isNavigationFailure(error) ? error : // reject any unknown error
      triggerError(error, toLocation, from);
    }).then(function (failure) {
      if (failure) {
        if (isNavigationFailure(failure, 2
        /* NAVIGATION_GUARD_REDIRECT */
        )) {
          if ( true && // we are redirecting to the same location we were already at
          isSameRouteLocation(stringifyQuery$1, resolve(failure.to), toLocation) && // and we have done it a couple of times
          redirectedFrom && // @ts-expect-error: added only in dev
          (redirectedFrom._count = redirectedFrom._count ? // @ts-expect-error
          redirectedFrom._count + 1 : 1) > 10) {
            warn("Detected an infinite redirection in a navigation guard when going from \"".concat(from.fullPath, "\" to \"").concat(toLocation.fullPath, "\". Aborting to avoid a Stack Overflow. This will break in production if not fixed."));
            return Promise.reject(new Error('Infinite redirect in navigation guard'));
          }

          return pushWithRedirect( // keep options
          assign(locationAsObject(failure.to), {
            state: data,
            force: force,
            replace: replace
          }), // preserve the original redirectedFrom if any
          redirectedFrom || toLocation);
        }
      } else {
        // if we fail we don't finalize the navigation
        failure = finalizeNavigation(toLocation, from, true, replace, data);
      }

      triggerAfterEach(toLocation, from, failure);
      return failure;
    });
  }
  /**
   * Helper to reject and skip all navigation guards if a new navigation happened
   * @param to
   * @param from
   */


  function checkCanceledNavigationAndReject(to, from) {
    var error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  } // TODO: refactor the whole before guards by internally using router.beforeEach


  function navigate(to, from) {
    var guards;

    var _extractChangingRecor = extractChangingRecords(to, from),
        _extractChangingRecor2 = _slicedToArray(_extractChangingRecor, 3),
        leavingRecords = _extractChangingRecor2[0],
        updatingRecords = _extractChangingRecor2[1],
        enteringRecords = _extractChangingRecor2[2]; // all components here have been resolved once because we are leaving


    guards = extractComponentsGuards(leavingRecords.reverse(), 'beforeRouteLeave', to, from); // leavingRecords is already reversed

    var _iterator14 = _createForOfIteratorHelper(leavingRecords),
        _step14;

    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var record = _step14.value;
        record.leaveGuards.forEach(function (guard) {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }

    var canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck); // run the queue of per route beforeRouteLeave guards

    return runGuardQueue(guards).then(function () {
      // check global guards beforeEach
      guards = [];

      var _iterator15 = _createForOfIteratorHelper(beforeGuards.list()),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var guard = _step15.value;
          guards.push(guardToPromiseFn(guard, to, from));
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(function () {
      // check in components beforeRouteUpdate
      guards = extractComponentsGuards(updatingRecords, 'beforeRouteUpdate', to, from);

      var _iterator16 = _createForOfIteratorHelper(updatingRecords),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var record = _step16.value;
          record.updateGuards.forEach(function (guard) {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }

      guards.push(canceledNavigationCheck); // run the queue of per route beforeEnter guards

      return runGuardQueue(guards);
    }).then(function () {
      // check the route beforeEnter
      guards = [];

      var _iterator17 = _createForOfIteratorHelper(to.matched),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var record = _step17.value;

          // do not trigger beforeEnter on reused views
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (Array.isArray(record.beforeEnter)) {
              var _iterator18 = _createForOfIteratorHelper(record.beforeEnter),
                  _step18;

              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var beforeEnter = _step18.value;
                  guards.push(guardToPromiseFn(beforeEnter, to, from));
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }

      guards.push(canceledNavigationCheck); // run the queue of per route beforeEnter guards

      return runGuardQueue(guards);
    }).then(function () {
      // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
      // clear existing enterCallbacks, these are added by extractComponentsGuards
      to.matched.forEach(function (record) {
        return record.enterCallbacks = {};
      }); // check in-component beforeRouteEnter

      guards = extractComponentsGuards(enteringRecords, 'beforeRouteEnter', to, from);
      guards.push(canceledNavigationCheck); // run the queue of per route beforeEnter guards

      return runGuardQueue(guards);
    }).then(function () {
      // check global guards beforeResolve
      guards = [];

      var _iterator19 = _createForOfIteratorHelper(beforeResolveGuards.list()),
          _step19;

      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var guard = _step19.value;
          guards.push(guardToPromiseFn(guard, to, from));
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }

      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }) // catch any navigation canceled
    .catch(function (err) {
      return isNavigationFailure(err, 8
      /* NAVIGATION_CANCELLED */
      ) ? err : Promise.reject(err);
    });
  }

  function triggerAfterEach(to, from, failure) {
    // navigation is confirmed, call afterGuards
    // TODO: wrap with error handlers
    var _iterator20 = _createForOfIteratorHelper(afterGuards.list()),
        _step20;

    try {
      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
        var guard = _step20.value;
        guard(to, from, failure);
      }
    } catch (err) {
      _iterator20.e(err);
    } finally {
      _iterator20.f();
    }
  }
  /**
   * - Cleans up any navigation guards
   * - Changes the url if necessary
   * - Calls the scrollBehavior
   */


  function finalizeNavigation(toLocation, from, isPush, replace, data) {
    // a more recent navigation took place
    var error = checkCanceledNavigation(toLocation, from);
    if (error) return error; // only consider as push if it's not the first navigation

    var isFirstNavigation = from === START_LOCATION_NORMALIZED;
    var state = !isBrowser ? {} : history.state; // change URL only if the user did a push/replace and if it's not the initial navigation because
    // it's just reflecting the url

    if (isPush) {
      // on the initial navigation, we want to reuse the scroll position from
      // history state if it exists
      if (replace || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({
        scroll: isFirstNavigation && state && state.scroll
      }, data));else routerHistory.push(toLocation.fullPath, data);
    } // accept current navigation


    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }

  var removeHistoryListener; // attach listener to history to trigger navigations

  function setupListeners() {
    removeHistoryListener = routerHistory.listen(function (to, _from, info) {
      // cannot be a redirect route because it was in history
      var toLocation = resolve(to); // due to dynamic routing, and to hash history with manual navigation
      // (manually changing the url or calling history.hash = '#/somewhere'),
      // there could be a redirect record in history

      var shouldRedirect = handleRedirectRecord(toLocation);

      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, {
          replace: true
        }), toLocation).catch(noop);
        return;
      }

      pendingLocation = toLocation;
      var from = currentRoute.value; // TODO: should be moved to web history?

      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }

      navigate(toLocation, from).catch(function (error) {
        if (isNavigationFailure(error, 4
        /* NAVIGATION_ABORTED */
        | 8
        /* NAVIGATION_CANCELLED */
        )) {
          return error;
        }

        if (isNavigationFailure(error, 2
        /* NAVIGATION_GUARD_REDIRECT */
        )) {
          // Here we could call if (info.delta) routerHistory.go(-info.delta,
          // false) but this is bug prone as we have no way to wait the
          // navigation to be finished before calling pushWithRedirect. Using
          // a setTimeout of 16ms seems to work but there is not guarantee for
          // it to work on every browser. So Instead we do not restore the
          // history entry and trigger a new navigation as requested by the
          // navigation guard.
          // the error is already handled by router.push we just want to avoid
          // logging the error
          pushWithRedirect(error.to, toLocation // avoid an uncaught rejection, let push call triggerError
          ).then(function (failure) {
            // manual change in hash history #916 ending up in the URL not
            // changing but it was changed by the manual url change, so we
            // need to manually change it ourselves
            if (isNavigationFailure(failure, 4
            /* NAVIGATION_ABORTED */
            | 16
            /* NAVIGATION_DUPLICATED */
            ) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop); // avoid the then branch

          return Promise.reject();
        } // do not restore history on unknown direction


        if (info.delta) routerHistory.go(-info.delta, false); // unrecognized error, transfer to the global handler

        return triggerError(error, toLocation, from);
      }).then(function (failure) {
        failure = failure || finalizeNavigation( // after navigation, all matched components are resolved
        toLocation, from, false); // revert the navigation

        if (failure) {
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4
          /* NAVIGATION_ABORTED */
          | 16
          /* NAVIGATION_DUPLICATED */
          )) {
            // manual change in hash history #916
            // it's like a push but lacks the information of the direction
            routerHistory.go(-1, false);
          }
        }

        triggerAfterEach(toLocation, from, failure);
      }).catch(noop);
    });
  } // Initialization and Errors


  var readyHandlers = useCallbacks();
  var errorHandlers = useCallbacks();
  var ready;
  /**
   * Trigger errorHandlers added via onError and throws the error as well
   *
   * @param error - error to throw
   * @param to - location we were navigating to when the error happened
   * @param from - location we were navigating from when the error happened
   * @returns the error as a rejected promise
   */

  function triggerError(error, to, from) {
    markAsReady(error);
    var list = errorHandlers.list();

    if (list.length) {
      list.forEach(function (handler) {
        return handler(error, to, from);
      });
    } else {
      if (true) {
        warn('uncaught error during route navigation:');
      }

      console.error(error);
    }

    return Promise.reject(error);
  }

  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
    return new Promise(function (resolve, reject) {
      readyHandlers.add([resolve, reject]);
    });
  }
  /**
   * Mark the router as ready, resolving the promised returned by isReady(). Can
   * only be called once, otherwise does nothing.
   * @param err - optional error
   */


  function markAsReady(err) {
    if (ready) return;
    ready = true;
    setupListeners();
    readyHandlers.list().forEach(function (_ref16) {
      var _ref17 = _slicedToArray(_ref16, 2),
          resolve = _ref17[0],
          reject = _ref17[1];

      return err ? reject(err) : resolve();
    });
    readyHandlers.reset();
  } // Scroll behavior


  function handleScroll(to, from, isPush, isFirstNavigation) {
    var scrollBehavior = options.scrollBehavior;
    if (!isBrowser || !scrollBehavior) return Promise.resolve();
    var scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["nextTick"])().then(function () {
      return scrollBehavior(to, from, scrollPosition);
    }).then(function (position) {
      return position && scrollToPosition(position);
    }).catch(function (err) {
      return triggerError(err, to, from);
    });
  }

  var go = function go(delta) {
    return routerHistory.go(delta);
  };

  var started;
  var installedApps = new Set();
  var router = {
    currentRoute: currentRoute,
    addRoute: addRoute,
    removeRoute: removeRoute,
    hasRoute: hasRoute,
    getRoutes: getRoutes,
    resolve: resolve,
    options: options,
    push: push,
    replace: replace,
    go: go,
    back: function back() {
      return go(-1);
    },
    forward: function forward() {
      return go(1);
    },
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady: isReady,
    install: function install(app) {
      var router = this;
      app.component('RouterLink', RouterLink);
      app.component('RouterView', RouterView);
      app.config.globalProperties.$router = router;
      Object.defineProperty(app.config.globalProperties, '$route', {
        enumerable: true,
        get: function get() {
          return Object(vue__WEBPACK_IMPORTED_MODULE_0__["unref"])(currentRoute);
        }
      }); // this initial navigation is only necessary on client, on server it doesn't
      // make sense because it will create an extra unnecessary navigation and could
      // lead to problems

      if (isBrowser && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        // see above
        started = true;
        push(routerHistory.location).catch(function (err) {
          if (true) warn('Unexpected error when starting the router:', err);
        });
      }

      var reactiveRoute = {};

      var _loop5 = function _loop5(_key7) {
        // @ts-expect-error: the key matches
        reactiveRoute[_key7] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
          return currentRoute.value[_key7];
        });
      };

      for (var _key7 in START_LOCATION_NORMALIZED) {
        _loop5(_key7);
      }

      app.provide(routerKey, router);
      app.provide(routeLocationKey, Object(vue__WEBPACK_IMPORTED_MODULE_0__["reactive"])(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      var unmountApp = app.unmount;
      installedApps.add(app);

      app.unmount = function () {
        installedApps.delete(app); // the router is not attached to an app anymore

        if (installedApps.size < 1) {
          // invalidate the current navigation
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }

        unmountApp();
      };

      if (( true) && isBrowser) {
        addDevtools(app, router, matcher);
      }
    }
  };
  return router;
}

function runGuardQueue(guards) {
  return guards.reduce(function (promise, guard) {
    return promise.then(function () {
      return guard();
    });
  }, Promise.resolve());
}

function extractChangingRecords(to, from) {
  var leavingRecords = [];
  var updatingRecords = [];
  var enteringRecords = [];
  var len = Math.max(from.matched.length, to.matched.length);

  var _loop6 = function _loop6(i) {
    var recordFrom = from.matched[i];

    if (recordFrom) {
      if (to.matched.find(function (record) {
        return isSameRouteRecord(record, recordFrom);
      })) updatingRecords.push(recordFrom);else leavingRecords.push(recordFrom);
    }

    var recordTo = to.matched[i];

    if (recordTo) {
      // the type doesn't matter because we are comparing per reference
      if (!from.matched.find(function (record) {
        return isSameRouteRecord(record, recordTo);
      })) {
        enteringRecords.push(recordTo);
      }
    }
  };

  for (var i = 0; i < len; i++) {
    _loop6(i);
  }

  return [leavingRecords, updatingRecords, enteringRecords];
}
/**
 * Returns the router instance. Equivalent to using `$router` inside
 * templates.
 */


function useRouter() {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["inject"])(routerKey);
}
/**
 * Returns the current route location. Equivalent to using `$route` inside
 * templates.
 */


function useRoute() {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["inject"])(routeLocationKey);
}



/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */

/*  */
var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.

function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}
/**
 * Check if value is primitive.
 */


function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
  _typeof(value) === 'symbol' || typeof value === 'boolean';
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */


function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */


var _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */


function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function isPromise(val) {
  return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
}
/**
 * Convert a value to a string that is actually rendered.
 */


function toString(val) {
  return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */


function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */


function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
/**
 * Check if a tag is a built-in tag.
 */


var isBuiltInTag = makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */

var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
/**
 * Check whether an object has the property.
 */


var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */


function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delimited string.
 */


var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
/**
 * Capitalize a string.
 */

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */

var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */

function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

var bind = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);

  while (i--) {
    ret[i] = list[i + start];
  }

  return ret;
}
/**
 * Mix properties into target object.
 */


function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */


function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */


function noop(a, b, c) {}
/**
 * Always return false.
 */


var no = function no(a, b, c) {
  return false;
};
/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */


var identity = function identity(_) {
  return _;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */


function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */


function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }

  return -1;
}
/**
 * Ensure a function is called only once.
 */


function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};
/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */

var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}
/**
 * Define a property.
 */


function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
/**
 * Parse simple path.
 */


var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }

  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }

      obj = obj[segments[i]];
    }

    return obj;
  };
}
/*  */
// can we use __proto__?


var hasProto = ('__proto__' in {}); // Browser environment sniffing

var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

var nativeWatch = {}.watch;
var supportsPassive = false;

if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285

    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
} // this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV


var _isServer;

var isServerRendering = function isServerRendering() {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }

  return _isServer;
}; // detect devtools


var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */

function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */
// $flow-disable-line


if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/function () {
    function Set() {
      this.set = Object.create(null);
    }

    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };

    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };

    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}
/*  */


var warn = noop;
var tip = noop;
var generateComponentTrace = noop; // work around flow check

var formatComponentName = noop;

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;

  var classify = function classify(str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function warn(msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  tip = function tip(msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function formatComponentName(vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }

    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;

    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function repeat(str, n) {
    var res = '';

    while (n) {
      if (n % 2 === 1) {
        res += str;
      }

      if (n > 1) {
        str += str;
      }

      n >>= 1;
    }

    return res;
  };

  generateComponentTrace = function generateComponentTrace(vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;

      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];

          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }

        tree.push(vm);
        vm = vm.$parent;
      }

      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}
/*  */


var uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();

  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
}; // The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.


Dep.target = null;
var targetStack = [];

function pushTarget(target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}
/*  */


var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = {
  child: {
    configurable: true
  }
}; // DEPRECATED: alias for componentInstance for backwards compat.

/* istanbul ignore next */

prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function createEmptyVNode(text) {
  if (text === void 0) text = '';
  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
} // optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.


function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, // #7975
  // clone children array to avoid mutating original in case of cloning
  // a child.
  vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
}
/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */


var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
/**
 * Intercept mutating methods and emit events
 */

methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) {
      ob.observeArray(inserted);
    } // notify change


    ob.dep.notify();
    return result;
  });
});
/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */

var shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */


var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);

  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }

    this.observeArray(value);
  } else {
    this.walk(value);
  }
};
/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */


Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};
/**
 * Observe a list of Array items.
 */


Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
}; // helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */


function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */


function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */


function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }

  var ob;

  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */


function defineReactive$$1(obj, key, val, customSetter, shallow) {
  var dep = new Dep();
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;

      if (Dep.target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */


      if ( true && customSetter) {
        customSetter();
      } // #7981: for accessor properties without setter


      if (getter && !setter) {
        return;
      }

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */


function set(target, key, val) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}
/**
 * Delete a property and trigger change if necessary.
 */


function del(target, key) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }

  if (!hasOwn(target, key)) {
    return;
  }

  delete target[key];

  if (!ob) {
    return;
  }

  ob.dep.notify();
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */


function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}
/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */


var strats = config.optionMergeStrategies;
/**
 * Options with restrictions
 */

if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }

    return defaultStrat(parent, child);
  };
}
/**
 * Helper that recursively merges two data objects together.
 */


function mergeData(to, from) {
  if (!from) {
    return to;
  }

  var key, toVal, fromVal;
  var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i]; // in case the object is already observed...

    if (key === '__ob__') {
      continue;
    }

    toVal = to[key];
    fromVal = from[key];

    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }

  return to;
}
/**
 * Data
 */


function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }

    if (!parentVal) {
      return childVal;
    } // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.


    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }

    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */


function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);

  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }

  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */


  if (!childVal) {
    return Object.create(parentVal || null);
  }

  if (true) {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = {};
  extend(ret, parentVal);

  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];

    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }

    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }

  return ret;
};
/**
 * Other object hashes.
 */


strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = Object.create(null);
  extend(ret, parentVal);

  if (childVal) {
    extend(ret, childVal);
  }

  return ret;
};

strats.provide = mergeDataOrFn;
/**
 * Default strategy.
 */

var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */


function checkComponents(options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
    warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
  }

  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */


function normalizeProps(options, vm) {
  var props = options.props;

  if (!props) {
    return;
  }

  var res = {};
  var i, val, name;

  if (Array.isArray(props)) {
    i = props.length;

    while (i--) {
      val = props[i];

      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = {
          type: null
        };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : {
        type: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
  }

  options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */


function normalizeInject(options, vm) {
  var inject = options.inject;

  if (!inject) {
    return;
  }

  var normalized = options.inject = {};

  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = {
        from: inject[i]
      };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({
        from: key
      }, val) : {
        from: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
  }
}
/**
 * Normalize raw function directives into object format.
 */


function normalizeDirectives(options) {
  var dirs = options.directives;

  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];

      if (typeof def$$1 === 'function') {
        dirs[key] = {
          bind: def$$1,
          update: def$$1
        };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
  }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function mergeOptions(parent, child, vm) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child); // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.

  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */


function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }

  var assets = options[type]; // check local registration variations first

  if (hasOwn(assets, id)) {
    return assets[id];
  }

  var camelizedId = camelize(id);

  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }

  var PascalCaseId = capitalize(camelizedId);

  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  } // fallback to prototype chain


  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

  if ( true && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }

  return res;
}
/*  */


function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key]; // boolean casting

  var booleanIndex = getTypeIndex(Boolean, prop.type);

  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);

      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  } // check default value


  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
    // make sure to observe it.

    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }

  if (true) {
    assertProp(prop, key, value, vm, absent);
  }

  return value;
}
/**
 * Get the default value of a prop.
 */


function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }

  var def = prop.default; // warn against non-factory defaults for Object & Array

  if ( true && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  } // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger


  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  } // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context


  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}
/**
 * Assert whether a prop is valid.
 */


function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }

  if (value == null && !prop.required) {
    return;
  }

  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];

  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }

    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i], vm);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  var haveExpectedTypes = expectedTypes.some(function (t) {
    return t;
  });

  if (!valid && haveExpectedTypes) {
    warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
    return;
  }

  var validator = prop.validator;

  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

function assertType(value, type, vm) {
  var valid;
  var expectedType = getType(type);

  if (simpleCheckRE.test(expectedType)) {
    var t = _typeof(value);

    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    try {
      valid = value instanceof type;
    } catch (e) {
      warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
      valid = false;
    }
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}

var functionTypeCheckRE = /^\s*function (\w+)/;
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */

function getType(fn) {
  var match = fn && fn.toString().match(functionTypeCheckRE);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }

  return -1;
}

function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && isExplicable(_typeof(value)) && !isBoolean(expectedType, receivedType)) {
    message += " with value " + styleValue(value, expectedType);
  }

  message += ", got " + receivedType + " "; // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value " + styleValue(value, receivedType) + ".";
  }

  return message;
}

function styleValue(value, type) {
  if (type === 'String') {
    return "\"" + value + "\"";
  } else if (type === 'Number') {
    return "" + Number(value);
  } else {
    return "" + value;
  }
}

var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];

function isExplicable(value) {
  return EXPLICABLE_TYPES.some(function (elem) {
    return value.toLowerCase() === elem;
  });
}

function isBoolean() {
  var args = [],
      len = arguments.length;

  while (len--) {
    args[len] = arguments[len];
  }

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}
/*  */


function handleError(err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();

  try {
    if (vm) {
      var cur = vm;

      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;

        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;

              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }

    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling(handler, context, args, vm, info) {
  var res;

  try {
    res = args ? handler.apply(context, args) : handler.call(context);

    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) {
        return handleError(e, vm, info + " (Promise/async)");
      }); // issue #9511
      // avoid catch triggering multiple times when nested calls

      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }

  return res;
}

function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }

  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (true) {
    warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
  }
  /* istanbul ignore else */


  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}
/*  */


var isUsingMicroTask = false;
var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;

  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
} // Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).


var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:

/* istanbul ignore next, $flow-disable-line */

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();

  timerFunc = function timerFunc() {
    p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.

    if (isIOS) {
      setTimeout(noop);
    }
  };

  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === '[object MutationObserverConstructor]')) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });

  timerFunc = function timerFunc() {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };

  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function timerFunc() {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function timerFunc() {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick(cb, ctx) {
  var _resolve;

  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  if (!pending) {
    pending = true;
    timerFunc();
  } // $flow-disable-line


  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}
/*  */

/* not type checking this file because flow doesn't play well with Proxy */


var initProxy;

if (true) {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function warnNonPresent(target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  var warnReservedPrefix = function warnReservedPrefix(target, key) {
    warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals. ' + 'See: https://vuejs.org/v2/api/#data', target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = (key in target);
      var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

      if (!has && !isAllowed) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return has || !isAllowed;
    }
  };
  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}
/*  */


var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */

function traverse(val) {
  _traverse(val, seenObjects);

  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);

  if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;

    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */

  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function mark(tag) {
      return perf.mark(tag);
    };

    measure = function measure(name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag); // perf.clearMeasures(name)
    };
  }
}
/*  */


var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns, vm) {
  function invoker() {
    var arguments$1 = arguments;
    var fns = invoker.fns;

    if (Array.isArray(fns)) {
      var cloned = fns.slice();

      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
    }
  }

  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
  var name, def$$1, cur, old, event;

  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (isUndef(cur)) {
       true && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }

      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }

      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }

  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}
/*  */


function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }

  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
    // and prevent memory leak

    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}
/*  */


function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;

  if (isUndef(propOptions)) {
    return;
  }

  var res = {};
  var attrs = data.attrs;
  var props = data.props;

  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);

      if (true) {
        var keyInLowerCase = key.toLowerCase();

        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }

      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }

  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];

      if (!preserve) {
        delete hash[key];
      }

      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];

      if (!preserve) {
        delete hash[altKey];
      }

      return true;
    }
  }

  return false;
}
/*  */
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.


function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
} // 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.


function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;

  for (i = 0; i < children.length; i++) {
    c = children[i];

    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }

    lastIndex = res.length - 1;
    last = res[lastIndex]; //  nested

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }

        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }

        res.push(c);
      }
    }
  }

  return res;
}
/*  */


function initProvide(vm) {
  var provide = vm.$options.provide;

  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);

  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]; // #6574 in case the inject object is observed...

      if (key === '__ob__') {
        continue;
      }

      var provideKey = inject[key].from;
      var source = vm;

      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }

        source = source.$parent;
      }

      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (true) {
          warn("Injection \"" + key + "\" not found", vm);
        }
      }
    }

    return result;
  }
}
/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */


function resolveSlots(children, context) {
  if (!children || !children.length) {
    return {};
  }

  var slots = {};

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    } // named slots should only be respected if the vnode was rendered in the
    // same context.


    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);

      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  } // ignore slots that contains only whitespace


  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }

  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}
/*  */


function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
/*  */


function normalizeScopedSlots(slots, normalSlots, prevSlots) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;

  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized;
  } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots;
  } else {
    res = {};

    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  } // expose normal slots on scopedSlots


  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  } // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error


  if (slots && Object.isExtensible(slots)) {
    slots._normalized = res;
  }

  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res;
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function normalized() {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && _typeof(res) === 'object' && !Array.isArray(res) ? [res] // single vnode
    : normalizeChildren(res);
    var vnode = res && res[0];
    return res && (!vnode || res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode) // #9658, #10391
    ) ? undefined : res;
  }; // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.


  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }

  return normalized;
}

function proxyNormalSlot(slots, key) {
  return function () {
    return slots[key];
  };
}
/*  */

/**
 * Runtime helper for rendering v-for lists.
 */


function renderList(val, render) {
  var ret, i, l, keys, key;

  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);

    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);

    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();

      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);

      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }

  if (!isDef(ret)) {
    ret = [];
  }

  ret._isVList = true;
  return ret;
}
/*  */

/**
 * Runtime helper for rendering <slot>
 */


function renderSlot(name, fallbackRender, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;

  if (scopedSlotFn) {
    // scoped slot
    props = props || {};

    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }

      props = extend(extend({}, bindObject), props);
    }

    nodes = scopedSlotFn(props) || (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  } else {
    nodes = this.$slots[name] || (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  }

  var target = props && props.slot;

  if (target) {
    return this.$createElement('template', {
      slot: target
    }, nodes);
  } else {
    return nodes;
  }
}
/*  */

/**
 * Runtime helper for resolving filters
 */


function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}
/*  */


function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */


function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }

  return eventKeyCode === undefined;
}
/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */


function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
       true && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }

      var hash;

      var loop = function loop(key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }

        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);

        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});

            on["update:" + key] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) {
        loop(key);
      }
    }
  }

  return data;
}
/*  */

/**
 * Runtime helper for rendering static trees.
 */


function renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.

  if (tree && !isInFor) {
    return tree;
  } // otherwise, render a fresh tree.


  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__" + index, false);
  return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */


function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}
/*  */


function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};

      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }

  return data;
}
/*  */


function resolveScopedSlots(fns, // see flow/vnode
res, // the following are added in 2.6
hasDynamicKeys, contentHashKey) {
  res = res || {
    $stable: !hasDynamicKeys
  };

  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];

    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }

      res[slot.key] = slot.fn;
    }
  }

  if (contentHashKey) {
    res.$key = contentHashKey;
  }

  return res;
}
/*  */


function bindDynamicKeys(baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];

    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
    }
  }

  return baseObj;
} // helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.


function prependModifier(value, symbol) {
  return typeof value === 'string' ? symbol + value : value;
}
/*  */


function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}
/*  */


function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var this$1 = this;
  var options = Ctor.options; // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check

  var contextVm;

  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent); // $flow-disable-line

    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent; // $flow-disable-line

    parent = parent._original;
  }

  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);

  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
    }

    return this$1.$slots;
  };

  Object.defineProperty(this, 'scopedSlots', {
    enumerable: true,
    get: function get() {
      return normalizeScopedSlots(data.scopedSlots, this.slots());
    }
  }); // support for compiled functional template

  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options; // pre-resolve slots for renderSlot()

    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);

      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }

      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;

  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }

    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);

    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }

    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;

  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }

  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }

  return clone;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}
/*  */

/*  */

/*  */

/*  */
// inline hooks to be invoked on component VNodes during patch


var componentVNodeHooks = {
  init: function init(vnode, hydrating) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow

      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },
  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },
  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }

    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  },
  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  }
};
var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base; // plain options object: turn it into a constructor

  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  } // if at this stage it's not a constructor or an async component factory,
  // reject.


  if (typeof Ctor !== 'function') {
    if (true) {
      warn("Invalid Component definition: " + String(Ctor), context);
    }

    return;
  } // async component


  var asyncFactory;

  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {}; // resolve constructor options in case global mixins are applied after
  // component constructor creation

  resolveConstructorOptions(Ctor); // transform component v-model data into props & events

  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  } // extract props


  var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  } // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners


  var listeners = data.on; // replace with listeners with .native modifier
  // so it gets processed during parent component patch.

  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot
    // work around flow
    var slot = data.slot;
    data = {};

    if (slot) {
      data.slot = slot;
    }
  } // install component management hooks onto the placeholder node


  installComponentHooks(data); // return a placeholder vnode

  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
    Ctor: Ctor,
    propsData: propsData,
    listeners: listeners,
    tag: tag,
    children: children
  }, asyncFactory);
  return vnode;
}

function createComponentInstanceForVnode( // we know it's MountedComponentVNode but flow doesn't
vnode, // activeInstance in lifecycle state
parent) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  }; // check inline-template render functions

  var inlineTemplate = vnode.data.inlineTemplate;

  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }

  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});

  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];

    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1(f1, f2) {
  var merged = function merged(a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };

  merged._merged = true;
  return merged;
} // transform component v-model info (value and callback) into
// prop and event handler respectively.


function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';
  (data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;

  if (isDef(existing)) {
    if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}
/*  */


var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
// without getting yelled at by flow

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }

  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
     true && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  } // object syntax in v-bind


  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }

  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  } // warn against non-primitive key


  if ( true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    {
      warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  } // support single function children as default scoped slot


  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = {
      default: children[0]
    };
    children.length = 0;
  }

  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  var vnode, ns;

  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn) && data.tag !== 'component') {
        warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
      }

      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }

  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) {
      applyNS(vnode, ns);
    }

    if (isDef(data)) {
      registerDeepBindings(data);
    }

    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;

  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }

  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];

      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
} // ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes


function registerDeepBindings(data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }

  if (isObject(data.class)) {
    traverse(data.class);
  }
}
/*  */


function initRender(vm) {
  vm._vnode = null; // the root of the child tree

  vm._staticTrees = null; // v-once cached trees

  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates

  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  }; // normalization is always applied for the public version, used in
  // user-written render functions.


  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  }; // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated


  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */

  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin(Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
    } // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.


    vm.$vnode = _parentVnode; // render self

    var vnode;

    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render"); // return error render result,
      // or previous vnode to prevent render error causing blank component

      /* istanbul ignore else */

      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    } // if the returned array contains only a single node, allow it


    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    } // return empty vnode in case the render function errored out


    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }

      vnode = createEmptyVNode();
    } // set parent


    vnode.parent = _parentVnode;
    return vnode;
  };
}
/*  */


function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }

  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = {
    data: data,
    context: context,
    children: children,
    tag: tag
  };
  return node;
}

function resolveAsyncComponent(factory, baseCtor) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  var owner = currentRenderingInstance;

  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null;
    owner.$on('hook:destroyed', function () {
      return remove(owners, owner);
    });

    var forceRender = function forceRender(renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        owners[i].$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;

        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }

        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)

      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });
    var reject = once(function (reason) {
       true && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });
    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);

          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;

              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;

            if (isUndef(factory.resolved)) {
              reject( true ? "timeout (" + res.timeout + "ms)" : undefined);
            }
          }, res.timeout);
        }
      }
    }

    sync = false; // return in case resolved synchronously

    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}
/*  */


function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];

      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
/*  */

/*  */


function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false; // init parent attached events

  var listeners = vm.$options._parentListeners;

  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn) {
  target.$on(event, fn);
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function createOnceHandler(event, fn) {
  var _target = target;
  return function onceHandler() {
    var res = fn.apply(null, arguments);

    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  };
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;

  Vue.prototype.$on = function (event, fn) {
    var vm = this;

    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }

    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;

    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }

    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this; // all

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    } // array of events


    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }

      return vm;
    } // specific event


    var cbs = vm._events[event];

    if (!cbs) {
      return vm;
    }

    if (!fn) {
      vm._events[event] = null;
      return vm;
    } // specific handler


    var cb;
    var i = cbs.length;

    while (i--) {
      cb = cbs[i];

      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }

    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;

    if (true) {
      var lowerCaseEvent = event.toLowerCase();

      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }

    var cbs = vm._events[event];

    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";

      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }

    return vm;
  };
}
/*  */


var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  };
}

function initLifecycle(vm) {
  var options = vm.$options; // locate first non-abstract parent

  var parent = options.parent;

  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }

    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;
  vm.$children = [];
  vm.$refs = {};
  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.

    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
      /* removeOnly */
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }

    restoreActiveInstance(); // update __vue__ reference

    if (prevEl) {
      prevEl.__vue__ = null;
    }

    if (vm.$el) {
      vm.$el.__vue__ = vm;
    } // if parent is an HOC, update its $el as well


    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    } // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.

  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;

    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;

    if (vm._isBeingDestroyed) {
      return;
    }

    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true; // remove self from parent

    var parent = vm.$parent;

    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    } // teardown watchers


    if (vm._watcher) {
      vm._watcher.teardown();
    }

    var i = vm._watchers.length;

    while (i--) {
      vm._watchers[i].teardown();
    } // remove reference from data ob
    // frozen object may not have observer.


    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    } // call the last hook...


    vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

    vm.__patch__(vm._vnode, null); // fire destroyed hook


    callHook(vm, 'destroyed'); // turn off all instance listeners.

    vm.$off(); // remove __vue__ reference

    if (vm.$el) {
      vm.$el.__vue__ = null;
    } // release circular reference (#6759)


    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;

  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;

    if (true) {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }

  callHook(vm, 'beforeMount');
  var updateComponent;
  /* istanbul ignore if */

  if ( true && config.performance && mark) {
    updateComponent = function updateComponent() {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;
      mark(startTag);

      var vnode = vm._render();

      mark(endTag);
      measure("vue " + name + " render", startTag, endTag);
      mark(startTag);

      vm._update(vnode, hydrating);

      mark(endTag);
      measure("vue " + name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function updateComponent() {
      vm._update(vm._render(), hydrating);
    };
  } // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined


  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true
  /* isRenderWatcher */
  );
  hydrating = false; // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }

  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (true) {
    isUpdatingChildComponent = true;
  } // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.
  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.


  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key || !newScopedSlots && vm.$scopedSlots.$key); // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.

  var needsForceUpdate = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  hasDynamicScopedSlot);
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }

  vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render

  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject; // update props

  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];

    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?

      props[key] = validateProp(key, propOptions, propsData, vm);
    }

    toggleObserving(true); // keep a copy of raw propsData

    vm.$options.propsData = propsData;
  } // update listeners


  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }

  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;

    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }

  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;

    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;

    if (isInInactiveTree(vm)) {
      return;
    }
  }

  if (!vm._inactive) {
    vm._inactive = true;

    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";

  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }

  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  popTarget();
}
/*  */


var MAX_UPDATE_COUNT = 100;
var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;
/**
 * Reset the scheduler's state.
 */

function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};

  if (true) {
    circular = {};
  }

  waiting = flushing = false;
} // Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.


var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)

if (inBrowser && !isIE) {
  var performance = window.performance;

  if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function getNow() {
      return performance.now();
    };
  }
}
/**
 * Flush both queues and run the watchers.
 */


function flushSchedulerQueue() {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id; // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.

  queue.sort(function (a, b) {
    return a.id - b.id;
  }); // do not cache length because more watchers might be pushed
  // as we run existing watchers

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];

    if (watcher.before) {
      watcher.before();
    }

    id = watcher.id;
    has[id] = null;
    watcher.run(); // in dev build, check and stop circular updates.

    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;

      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  } // keep copies of post queues before resetting state


  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();
  resetSchedulerState(); // call component updated and activated hooks

  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue); // devtool hook

  /* istanbul ignore if */

  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks(queue) {
  var i = queue.length;

  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;

    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */


function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true
    /* true */
    );
  }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */


function queueWatcher(watcher) {
  var id = watcher.id;

  if (has[id] == null) {
    has[id] = true;

    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;

      while (i > index && queue[i].id > watcher.id) {
        i--;
      }

      queue.splice(i + 1, 0, watcher);
    } // queue the flush


    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return;
      }

      nextTick(flushSchedulerQueue);
    }
  }
}
/*  */


var uid$2 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
  this.vm = vm;

  if (isRenderWatcher) {
    vm._watcher = this;
  }

  vm._watchers.push(this); // options


  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }

  this.cb = cb;
  this.id = ++uid$2; // uid for batching

  this.active = true;
  this.dirty = this.lazy; // for lazy watchers

  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true ? expOrFn.toString() : undefined; // parse expression for getter

  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);

    if (!this.getter) {
      this.getter = noop;
       true && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }

  this.value = this.lazy ? undefined : this.get();
};
/**
 * Evaluate the getter, and re-collect dependencies.
 */


Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;

  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }

    popTarget();
    this.cleanupDeps();
  }

  return value;
};
/**
 * Add a dependency to this directive.
 */


Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;

  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);

    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};
/**
 * Clean up for dependency collection.
 */


Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var i = this.deps.length;

  while (i--) {
    var dep = this.deps[i];

    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }

  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};
/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */


Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};
/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */


Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();

    if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;

      if (this.user) {
        var info = "callback for watcher \"" + this.expression + "\"";
        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};
/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */


Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};
/**
 * Depend on all deps collected by this watcher.
 */


Watcher.prototype.depend = function depend() {
  var i = this.deps.length;

  while (i--) {
    this.deps[i].depend();
  }
};
/**
 * Remove self from all dependencies' subscriber list.
 */


Watcher.prototype.teardown = function teardown() {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }

    var i = this.deps.length;

    while (i--) {
      this.deps[i].removeSub(this);
    }

    this.active = false;
  }
};
/*  */


var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };

  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;

  if (opts.props) {
    initProps(vm, opts.props);
  }

  if (opts.methods) {
    initMethods(vm, opts.methods);
  }

  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true
    /* asRootData */
    );
  }

  if (opts.computed) {
    initComputed(vm, opts.computed);
  }

  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.

  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent; // root instance props should be converted

  if (!isRoot) {
    toggleObserving(false);
  }

  var loop = function loop(key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */

    if (true) {
      var hyphenatedKey = hyphenate(key);

      if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
        warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }

      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {} // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.


    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) {
    loop(key);
  }

  toggleObserving(true);
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

  if (!isPlainObject(data)) {
    data = {};
     true && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  } // proxy data on instance


  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;

  while (i--) {
    var key = keys[i];

    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn("Method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }

    if (props && hasOwn(props, key)) {
       true && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  } // observe data


  observe(data, true
  /* asRootData */
  );
}

function getData(data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();

  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = {
  lazy: true
};

function initComputed(vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;

    if ( true && getter == null) {
      warn("Getter is missing for computed property \"" + key + "\".", vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
    } // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.


    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      } else if (vm.$options.methods && key in vm.$options.methods) {
        warn("The computed property \"" + key + "\" is already defined as a method.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  var shouldCache = !isServerRendering();

  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }

  if ( true && sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];

    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }

      if (Dep.target) {
        watcher.depend();
      }

      return watcher.value;
    }
  };
}

function createGetterInvoker(fn) {
  return function computedGetter() {
    return fn.call(this, this);
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;

  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn("Method \"" + key + "\" has type \"" + _typeof(methods[key]) + "\" in the component definition. " + "Did you reference the function correctly?", vm);
      }

      if (props && hasOwn(props, key)) {
        warn("Method \"" + key + "\" has already been defined as a prop.", vm);
      }

      if (key in vm && isReserved(key)) {
        warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
      }
    }

    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];

    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }

  if (typeof handler === 'string') {
    handler = vm[handler];
  }

  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};

  dataDef.get = function () {
    return this._data;
  };

  var propsDef = {};

  propsDef.get = function () {
    return this._props;
  };

  if (true) {
    dataDef.set = function () {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };

    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }

  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);
  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;

    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }

    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);

    if (options.immediate) {
      var info = "callback for immediate watcher \"" + watcher.expression + "\"";
      pushTarget();
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
      popTarget();
    }

    return function unwatchFn() {
      watcher.teardown();
    };
  };
}
/*  */


var uid$3 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this; // a uid

    vm._uid = uid$3++;
    var startTag, endTag;
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    } // a flag to avoid this being observed


    vm._isVue = true; // merge options

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */


    if (true) {
      initProxy(vm);
    } else {} // expose real self


    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props

    initState(vm);
    initProvide(vm); // resolve provide after data/props

    callHook(vm, 'created');
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure("vue " + vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;

  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;

    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

      var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }

      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }

  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;

  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }

      modified[key] = latest[key];
    }
  }

  return modified;
}

function Vue(options) {
  if ( true && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }

  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    } // additional parameters


    var args = toArray(arguments, 1);
    args.unshift(this);

    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }

    installedPlugins.push(plugin);
    return this;
  };
}
/*  */


function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}
/*  */


function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;
  /**
   * Class inheritance
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;

    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };

    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.

    if (Sub.options.props) {
      initProps$1(Sub);
    }

    if (Sub.options.computed) {
      initComputed$1(Sub);
    } // allow further extension/mixin/plugin usage


    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use; // create asset registers, so extended classes
    // can have their private assets too.

    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    }); // enable recursive self-lookup

    if (name) {
      Sub.options.components[name] = Sub;
    } // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.


    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options); // cache constructor

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;

  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;

  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}
/*  */


function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }

        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }

        if (type === 'directive' && typeof definition === 'function') {
          definition = {
            bind: definition,
            update: definition
          };
        }

        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}
/*  */


function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;

  for (var key in cache) {
    var entry = cache[key];

    if (entry) {
      var name = entry.name;

      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  var entry = cache[key];

  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy();
  }

  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];
var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },
  methods: {
    cacheVNode: function cacheVNode() {
      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var vnodeToCache = ref.vnodeToCache;
      var keyToCache = ref.keyToCache;

      if (vnodeToCache) {
        var tag = vnodeToCache.tag;
        var componentInstance = vnodeToCache.componentInstance;
        var componentOptions = vnodeToCache.componentOptions;
        cache[keyToCache] = {
          name: getComponentName(componentOptions),
          tag: tag,
          componentInstance: componentInstance
        };
        keys.push(keyToCache); // prune oldest entry

        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }

        this.vnodeToCache = null;
      }
    }
  },
  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },
  destroyed: function destroyed() {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted: function mounted() {
    var this$1 = this;
    this.cacheVNode();
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) {
        return matches(val, name);
      });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) {
        return !matches(val, name);
      });
    });
  },
  updated: function updated() {
    this.cacheVNode();
  },
  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;

    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;

      if ( // not included
      include && (!name || !matches(include, name)) || // excluded
      exclude && name && matches(exclude, name)) {
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance; // make current key freshest

        remove(keys, key);
        keys.push(key);
      } else {
        // delay setting the cache until update
        this.vnodeToCache = vnode;
        this.keyToCache = key;
      }

      vnode.data.keepAlive = true;
    }

    return vnode || slot && slot[0];
  }
};
var builtInComponents = {
  KeepAlive: KeepAlive
};
/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};

  configDef.get = function () {
    return config;
  };

  if (true) {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }

  Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.

  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick; // 2.6 explicit observable API

  Vue.observable = function (obj) {
    observe(obj);
    return obj;
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  }); // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.

  Vue.options._base = Vue;
  extend(Vue.options.components, builtInComponents);
  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
}); // expose FunctionalRenderContext for ssr runtime helper installation

Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});
Vue.version = '2.6.14';
/*  */
// these are reserved for web because they are directly compiled away
// during template compilation

var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

var acceptValue = makeMap('input,textarea,option,select,progress');

var mustUseProp = function mustUseProp(tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function convertEnumeratedValue(key, value) {
  return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
  : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
};

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,' + 'truespeed,typemustmatch,visible');
var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function isXlink(name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function getXlinkProp(name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function isFalsyAttrValue(val) {
  return val == null || val === false;
};
/*  */


function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;

  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;

    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }

  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }

  return renderClass(data.staticClass, data.class);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */


  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }

  if (isObject(value)) {
    return stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */


  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }

      res += stringified;
    }
  }

  return res;
}

function stringifyObject(value) {
  var res = '';

  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }

      res += key;
    }
  }

  return res;
}
/*  */


var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
// contain child elements.

var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isReservedTag = function isReservedTag(tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  } // basic support for MathML
  // note it doesn't support other MathML elements being component roots


  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);

function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }

  if (isReservedTag(tag)) {
    return false;
  }

  tag = tag.toLowerCase();
  /* istanbul ignore if */

  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }

  var el = document.createElement(tag);

  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');
/*  */

/**
 * Query an element selector if it's not an element already.
 */

function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);

    if (!selected) {
       true && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }

    return selected;
  } else {
    return el;
  }
}
/*  */


function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);

  if (tagName !== 'select') {
    return elm;
  } // false or null will remove the attribute but undefined will not


  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }

  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});
/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;

  if (!isDef(key)) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;

  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */


var emptyNode = new VNode('', {}, []);
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && a.asyncFactory === b.asyncFactory && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }

  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;

    if (isDef(key)) {
      map[key] = i;
    }
  }

  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};
  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];

    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }

    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
      return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && config.isUnknownElement(vnode.tag);
  }

  var creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check

    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;

    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }

        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);
      /* istanbul ignore if */

      {
        createChildren(vnode, children, insertedVnodeQueue);

        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }

        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;

    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false
        /* hydrating */
        );
      } // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.


      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);

        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }

        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }

    vnode.elm = vnode.componentInstance.$el;

    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode); // make sure to invoke the insert hook

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i; // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.

    var innerNode = vnode;

    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;

      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }

        insertedVnodeQueue.push(innerNode);
        break;
      }
    } // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself


    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }

      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }

    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }

    i = vnode.data.hook; // Reuse variable

    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }

      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  } // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.


  function setScope(vnode) {
    var i;

    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;

      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }

        ancestor = ancestor.parent;
      }
    } // for slot content they should also get the scopeId from the host instance.


    if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }

      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }

    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;

      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } // recursively invoke hooks on child component root node


      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }

      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }

      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions

    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];

          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }

    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    var seenKeys = {};

    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;

      if (isDef(key)) {
        if (seenKeys[key]) {
          warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];

      if (isDef(c) && sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }

      return;
    } // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.


    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;

    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;

    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }

      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }

    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }

        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }

        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).

  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    } // assert node match


    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true
        /* hydrating */
        );
      }

      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }

    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }

              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;

            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }

              childNode = childNode.nextSibling;
            } // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.


            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }

              return false;
            }
          }
        }
      }

      if (isDef(data)) {
        var fullInvoke = false;

        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }

        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }

    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }

      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);

      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }

          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (true) {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          } // either not server-rendered, or hydration failed.
          // create an empty node and replace it


          oldVnode = emptyNodeAt(oldVnode);
        } // replacing existing element


        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm); // create new node

        createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);

          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }

            ancestor.elm = vnode.elm;

            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              } // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.


              var insert = ancestor.data.hook.insert;

              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }

            ancestor = ancestor.parent;
          }
        } // destroy old node


        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}
/*  */


var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
  var dirsWithInsert = [];
  var dirsWithPostpatch = [];
  var key, oldDir, dir;

  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];

    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);

      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);

      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function callInsert() {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };

    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);

  if (!dirs) {
    // $flow-disable-line
    return res;
  }

  var i, dir;

  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];

    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }

    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  } // $flow-disable-line


  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];

  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];
/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;

  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }

  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }

  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];

    if (old !== cur) {
      setAttr(elm, key, cur, vnode.data.pre);
    }
  } // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max

  /* istanbul ignore if */


  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }

  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value, isInPre) {
  if (isInPre || el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr(el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.

    /* istanbul ignore if */
    if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
      var blocker = function blocker(e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };

      el.addEventListener('input', blocker); // $flow-disable-line

      el.__ieph = true;
      /* IE placeholder patched */
    }

    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};
/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode); // handle transition classes

  var transitionClass = el._transitionClasses;

  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  } // set the class


  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};
/*  */

/*  */

/*  */

/*  */
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.

var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';
/*  */
// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.

function normalizeEvents(on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  } // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4

  /* istanbul ignore if */


  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1(event, handler, capture) {
  var _target = target$1; // save current target element in closure

  return function onceHandler() {
    var res = handler.apply(null, arguments);

    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
} // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.


var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1(name, handler, capture, passive) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;

    handler = original._wrapper = function (e) {
      if ( // no bubbling, should always fire.
      // this is just a safety net in case event.timeStamp is unreliable in
      // certain weird environments...
      e.target === e.currentTarget || // event is fired after handler attachment
      e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
      // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
      // #9681 QtWebEngine event.timeStamp is negative value
      e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
      // electron/nw.js app, since event.timeStamp will be using a different
      // starting reference
      e.target.ownerDocument !== document) {
        return original.apply(this, arguments);
      }
    };
  }

  target$1.addEventListener(name, handler, supportsPassive ? {
    capture: capture,
    passive: passive
  } : capture);
}

function remove$2(name, handler, capture, _target) {
  (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }

  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};
/*  */

var svgContainer;

function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }

  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key]; // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)

    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }

      if (cur === oldProps[key]) {
        continue;
      } // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property


      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur; // avoid resetting cursor position when value is the same

      var strCur = isUndef(cur) ? '' : String(cur);

      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;

      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }

      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if ( // skip the update if old and new VDOM state is the same.
    // `value` is handled separately because the DOM value may be temporarily
    // out of sync with VDOM state due to focus, composition and modifiers.
    // This  #4521 by skipping the unnecessary `checked` update.
    cur !== oldProps[key]) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
} // check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
}

function isNotInFocusAndDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true; // #6157
  // work around IE bug when accessing document.activeElement in an iframe

  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}

  return notInFocus && elm.value !== checkVal;
}

function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime

  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }

    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }

  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};
/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
}); // merge static and dynamic style data on the same vnode

function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it

  return data.staticStyle ? extend(data.staticStyle, style) : style;
} // normalize possible array / string values into Object


function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }

  return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */


function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;

    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;

  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }

  return res;
}
/*  */


var cssVarRE = /^--/;
var importantRE = /\s*!important$/;

var setProp = function setProp(el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);

    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];
var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);

  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }

  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;

    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

  var oldStyle = oldStaticStyle || oldStyleBinding;
  var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.

  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }

  for (name in newStyle) {
    cur = newStyle[name];

    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};
/*  */

var whitespaceRE = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */

function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */


function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}
/*  */


function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  /* istanbul ignore else */


  if (_typeof(def$$1) === 'object') {
    var res = {};

    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }

    extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});
var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation'; // Transition property/event sniffing

var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';

if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }

  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
} // binding to window is necessary to make hot reload work in IE in strict mode


var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
/* istanbul ignore next */
function (fn) {
  return fn();
};

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }

  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;

  if (!type) {
    return cb();
  }

  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;

  var end = function end() {
    el.removeEventListener(event, onEnd);
    cb();
  };

  var onEnd = function onEnd(e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
/*  */


function enter(vnode, toggleDisplay) {
  var el = vnode.elm; // call leave callback now

  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;

    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data)) {
    return;
  }
  /* istanbul ignore if */


  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration; // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.

  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;

  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);
  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }

      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }

    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];

      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }

      enterHook && enterHook(el, cb);
    });
  } // start enter transition


  beforeEnterHook && beforeEnterHook(el);

  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);

      if (!cb.cancelled) {
        addTransitionClass(el, toClass);

        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm; // call enter callback now

  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;

    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data) || el.nodeType !== 1) {
    return rm();
  }
  /* istanbul ignore if */


  if (isDef(el._leaveCb)) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;
  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);
  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }

    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }

      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }

    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    } // record leaving element


    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }

    beforeLeave && beforeLeave(el);

    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);

        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);

          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    leave && leave(el, cb);

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
} // only used in dev mode


function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */


function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }

  var invokerFns = fn.fns;

  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};
var platformModules = [attrs, klass, events, domProps, style, transition];
/*  */
// the directive module should be applied last, after all
// built-in modules have been applied.

var modules = platformModules.concat(baseModules);
var patch = createPatchFunction({
  nodeOps: nodeOps,
  modules: modules
});
/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */

if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;

    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }

      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;

      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.

        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */

        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.

      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);

      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */

  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;

  if (isMultiple && !Array.isArray(value)) {
     true && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }

  var selected, option;

  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];

    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;

      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }

        return;
      }
    }
  }

  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !looseEqual(o, value);
  });
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }

  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
/*  */
// recursively search for possible transition defined inside the component root


function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },
  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;
    /* istanbul ignore if */

    if (!value === !oldValue) {
      return;
    }

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;

    if (transition$$1) {
      vnode.data.show = true;

      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },
  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};
var platformDirectives = {
  model: directive,
  show: show
};
/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
}; // in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered

function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;

  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options; // props

  for (var key in options.propsData) {
    data[key] = comp[key];
  } // events.
  // extract listeners and pass them directly to the transition methods


  var listeners = options._parentListeners;

  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }

  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var isNotTextNode = function isNotTextNode(c) {
  return c.tag || isAsyncPlaceholder(c);
};

var isVShowDirective = function isVShowDirective(d) {
  return d.name === 'show';
};

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,
  render: function render(h) {
    var this$1 = this;
    var children = this.$slots.default;

    if (!children) {
      return;
    } // filter out text nodes (possible whitespaces)


    children = children.filter(isNotTextNode);
    /* istanbul ignore if */

    if (!children.length) {
      return;
    } // warn multiple elements


    if ( true && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode; // warn invalid mode

    if ( true && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0]; // if this is a component root node and the component's
    // parent container node also has transition, skip.

    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    } // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive


    var child = getRealChild(rawChild);
    /* istanbul ignore if */

    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    } // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.


    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild); // mark v-show
    // so that the transition module can hand over the control to the directive

    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }

        var delayedLeave;

        var performLeave = function performLeave() {
          delayedLeave();
        };

        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};
/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
  props: props,
  beforeMount: function beforeMount() {
    var this$1 = this;
    var update = this._update;

    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1); // force removing pass

      this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );

      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },
  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];

      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;
          (c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];

      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();

        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }

      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },
  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';

    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    } // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.


    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation); // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line

    this._reflow = document.body.offsetHeight;
    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },
  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      /* istanbul ignore if */


      if (this._hasMove) {
        return this._hasMove;
      } // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.


      var clone = el.cloneNode();

      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }

      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */


  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};
/*  */
// install platform specific utils

Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents); // install platform patch function

Vue.prototype.__patch__ = inBrowser ? patch : noop; // public mount method

Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
}; // devtools global hook

/* istanbul ignore next */


if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (true) {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }

    if ( true && config.productionTip !== false && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);
}
/*  */


/* harmony default export */ __webpack_exports__["default"] = (Vue);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vuetify/dist/vuetify.js":
/*!**********************************************!*\
  !*** ./node_modules/vuetify/dist/vuetify.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof2(exports)) === 'object' && ( false ? undefined : _typeof2(module)) === 'object') module.exports = factory(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(typeof self !== 'undefined' ? self : this, function (__WEBPACK_EXTERNAL_MODULE_vue__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof2(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/dist/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/index.ts");
      /******/
    }
    /************************************************************************/

    /******/
    ({
      /***/
      "./src/components/VAlert/VAlert.sass":
      /*!*******************************************!*\
        !*** ./src/components/VAlert/VAlert.sass ***!
        \*******************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVAlertVAlertSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VAlert/VAlert.ts":
      /*!*****************************************!*\
        !*** ./src/components/VAlert/VAlert.ts ***!
        \*****************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVAlertVAlertTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VAlert_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VAlert.sass */
        "./src/components/VAlert/VAlert.sass");
        /* harmony import */


        var _VAlert_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VAlert_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../VSheet */
        "./src/components/VSheet/index.ts");
        /* harmony import */


        var _VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../VBtn */
        "./src/components/VBtn/index.ts");
        /* harmony import */


        var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../VIcon */
        "./src/components/VIcon/index.ts");
        /* harmony import */


        var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../mixins/toggleable */
        "./src/mixins/toggleable/index.ts");
        /* harmony import */


        var _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../../mixins/themeable */
        "./src/mixins/themeable/index.ts");
        /* harmony import */


        var _mixins_transitionable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../mixins/transitionable */
        "./src/mixins/transitionable/index.ts");
        /* harmony import */


        var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../util/mixins */
        "./src/util/mixins.ts");
        /* harmony import */


        var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../../util/console */
        "./src/util/console.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Styles
        // Extensions
        // Components
        // Mixins
        // Utilities

        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__["default"])(_VSheet__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_transitionable__WEBPACK_IMPORTED_MODULE_6__["default"]).extend({
          name: 'v-alert',
          props: {
            border: {
              type: String,
              validator: function validator(val) {
                return ['top', 'right', 'bottom', 'left'].includes(val);
              }
            },
            closeLabel: {
              type: String,
              default: '$vuetify.close'
            },
            coloredBorder: Boolean,
            dense: Boolean,
            dismissible: Boolean,
            closeIcon: {
              type: String,
              default: '$cancel'
            },
            icon: {
              default: '',
              type: [Boolean, String],
              validator: function validator(val) {
                return typeof val === 'string' || val === false;
              }
            },
            outlined: Boolean,
            prominent: Boolean,
            text: Boolean,
            type: {
              type: String,
              validator: function validator(val) {
                return ['info', 'error', 'success', 'warning'].includes(val);
              }
            },
            value: {
              type: Boolean,
              default: true
            }
          },
          computed: {
            __cachedBorder: function __cachedBorder() {
              var _a;

              if (!this.border) return null;
              var data = {
                staticClass: 'v-alert__border',
                class: (_a = {}, _a["v-alert__border--" + this.border] = true, _a)
              };

              if (this.coloredBorder) {
                data = this.setBackgroundColor(this.computedColor, data);
                data.class['v-alert__border--has-color'] = true;
              }

              return this.$createElement('div', data);
            },
            __cachedDismissible: function __cachedDismissible() {
              var _this = this;

              if (!this.dismissible) return null;
              var color = this.iconColor;
              return this.$createElement(_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
                staticClass: 'v-alert__dismissible',
                props: {
                  color: color,
                  icon: true,
                  small: true
                },
                attrs: {
                  'aria-label': this.$vuetify.lang.t(this.closeLabel)
                },
                on: {
                  click: function click() {
                    return _this.isActive = false;
                  }
                }
              }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                props: {
                  color: color
                }
              }, this.closeIcon)]);
            },
            __cachedIcon: function __cachedIcon() {
              if (!this.computedIcon) return null;
              return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                staticClass: 'v-alert__icon',
                props: {
                  color: this.iconColor
                }
              }, this.computedIcon);
            },
            classes: function classes() {
              var classes = __assign(__assign({}, _VSheet__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.classes.call(this)), {
                'v-alert--border': Boolean(this.border),
                'v-alert--dense': this.dense,
                'v-alert--outlined': this.outlined,
                'v-alert--prominent': this.prominent,
                'v-alert--text': this.text
              });

              if (this.border) {
                classes["v-alert--border-" + this.border] = true;
              }

              return classes;
            },
            computedColor: function computedColor() {
              return this.color || this.type;
            },
            computedIcon: function computedIcon() {
              if (this.icon === false) return false;
              if (typeof this.icon === 'string' && this.icon) return this.icon;
              if (!['error', 'info', 'success', 'warning'].includes(this.type)) return false;
              return "$" + this.type;
            },
            hasColoredIcon: function hasColoredIcon() {
              return this.hasText || Boolean(this.border) && this.coloredBorder;
            },
            hasText: function hasText() {
              return this.text || this.outlined;
            },
            iconColor: function iconColor() {
              return this.hasColoredIcon ? this.computedColor : undefined;
            },
            isDark: function isDark() {
              if (this.type && !this.coloredBorder && !this.outlined) return true;
              return _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__["default"].options.computed.isDark.call(this);
            }
          },
          created: function created() {
            /* istanbul ignore next */
            if (this.$attrs.hasOwnProperty('outline')) {
              Object(_util_console__WEBPACK_IMPORTED_MODULE_8__["breaking"])('outline', 'outlined', this);
            }
          },
          methods: {
            genWrapper: function genWrapper() {
              var children = [this.$slots.prepend || this.__cachedIcon, this.genContent(), this.__cachedBorder, this.$slots.append, this.$scopedSlots.close ? this.$scopedSlots.close({
                toggle: this.toggle
              }) : this.__cachedDismissible];
              var data = {
                staticClass: 'v-alert__wrapper'
              };
              return this.$createElement('div', data, children);
            },
            genContent: function genContent() {
              return this.$createElement('div', {
                staticClass: 'v-alert__content'
              }, this.$slots.default);
            },
            genAlert: function genAlert() {
              var data = {
                staticClass: 'v-alert',
                attrs: {
                  role: 'alert'
                },
                on: this.listeners$,
                class: this.classes,
                style: this.styles,
                directives: [{
                  name: 'show',
                  value: this.isActive
                }]
              };

              if (!this.coloredBorder) {
                var setColor = this.hasText ? this.setTextColor : this.setBackgroundColor;
                data = setColor(this.computedColor, data);
              }

              return this.$createElement('div', data, [this.genWrapper()]);
            },

            /** @public */
            toggle: function toggle() {
              this.isActive = !this.isActive;
            }
          },
          render: function render(h) {
            var render = this.genAlert();
            if (!this.transition) return render;
            return h('transition', {
              props: {
                name: this.transition,
                origin: this.origin,
                mode: this.mode
              }
            }, [render]);
          }
        });
        /***/
      },

      /***/
      "./src/components/VAlert/index.ts":
      /*!****************************************!*\
        !*** ./src/components/VAlert/index.ts ***!
        \****************************************/

      /*! exports provided: VAlert, default */

      /***/
      function srcComponentsVAlertIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VAlert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VAlert */
        "./src/components/VAlert/VAlert.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VAlert", function () {
          return _VAlert__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = _VAlert__WEBPACK_IMPORTED_MODULE_0__["default"];
        /***/
      },

      /***/
      "./src/components/VApp/VApp.sass":
      /*!***************************************!*\
        !*** ./src/components/VApp/VApp.sass ***!
        \***************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVAppVAppSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VApp/VApp.ts":
      /*!*************************************!*\
        !*** ./src/components/VApp/VApp.ts ***!
        \*************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVAppVAppTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VApp_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VApp.sass */
        "./src/components/VApp/VApp.sass");
        /* harmony import */


        var _VApp_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VApp_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _mixins_themeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../mixins/themeable */
        "./src/mixins/themeable/index.ts");
        /* harmony import */


        var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../util/mixins */
        "./src/util/mixins.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Styles
        // Mixins
        // Utilities

        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])(_mixins_themeable__WEBPACK_IMPORTED_MODULE_1__["default"]).extend({
          name: 'v-app',
          props: {
            dark: {
              type: Boolean,
              default: undefined
            },
            id: {
              type: String,
              default: 'app'
            },
            light: {
              type: Boolean,
              default: undefined
            }
          },
          computed: {
            isDark: function isDark() {
              return this.$vuetify.theme.dark;
            }
          },
          beforeCreate: function beforeCreate() {
            if (!this.$vuetify || this.$vuetify === this.$root) {
              throw new Error('Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object');
            }
          },
          render: function render(h) {
            var wrapper = h('div', {
              staticClass: 'v-application--wrap'
            }, this.$slots.default);
            return h('div', {
              staticClass: 'v-application',
              class: __assign({
                'v-application--is-rtl': this.$vuetify.rtl,
                'v-application--is-ltr': !this.$vuetify.rtl
              }, this.themeClasses),
              attrs: {
                'data-app': true
              },
              domProps: {
                id: this.id
              }
            }, [wrapper]);
          }
        });
        /***/
      },

      /***/
      "./src/components/VApp/index.ts":
      /*!**************************************!*\
        !*** ./src/components/VApp/index.ts ***!
        \**************************************/

      /*! exports provided: VApp, default */

      /***/
      function srcComponentsVAppIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VApp */
        "./src/components/VApp/VApp.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VApp", function () {
          return _VApp__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = _VApp__WEBPACK_IMPORTED_MODULE_0__["default"];
        /***/
      },

      /***/
      "./src/components/VAppBar/VAppBar.sass":
      /*!*********************************************!*\
        !*** ./src/components/VAppBar/VAppBar.sass ***!
        \*********************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVAppBarVAppBarSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VAppBar/VAppBar.ts":
      /*!*******************************************!*\
        !*** ./src/components/VAppBar/VAppBar.ts ***!
        \*******************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVAppBarVAppBarTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VAppBar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VAppBar.sass */
        "./src/components/VAppBar/VAppBar.sass");
        /* harmony import */


        var _VAppBar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VAppBar_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../VToolbar/VToolbar */
        "./src/components/VToolbar/VToolbar.ts");
        /* harmony import */


        var _directives_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../directives/scroll */
        "./src/directives/scroll/index.ts");
        /* harmony import */


        var _mixins_applicationable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../mixins/applicationable */
        "./src/mixins/applicationable/index.ts");
        /* harmony import */


        var _mixins_scrollable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../mixins/scrollable */
        "./src/mixins/scrollable/index.ts");
        /* harmony import */


        var _mixins_ssr_bootable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../../mixins/ssr-bootable */
        "./src/mixins/ssr-bootable/index.ts");
        /* harmony import */


        var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../mixins/toggleable */
        "./src/mixins/toggleable/index.ts");
        /* harmony import */


        var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../util/helpers */
        "./src/util/helpers.ts");
        /* harmony import */


        var _util_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../../util/mixins */
        "./src/util/mixins.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Styles
        // Extensions
        // Directives
        // Mixins
        // Utilities


        var baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_8__["default"])(_VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_scrollable__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_ssr_bootable__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_mixins_applicationable__WEBPACK_IMPORTED_MODULE_3__["default"])('top', ['clippedLeft', 'clippedRight', 'computedHeight', 'invertedScroll', 'isExtended', 'isProminent', 'value']));
        /* @vue/component */

        /* harmony default export */

        __webpack_exports__["default"] = baseMixins.extend({
          name: 'v-app-bar',
          directives: {
            Scroll: _directives_scroll__WEBPACK_IMPORTED_MODULE_2__["default"]
          },
          provide: function provide() {
            return {
              VAppBar: this
            };
          },
          props: {
            clippedLeft: Boolean,
            clippedRight: Boolean,
            collapseOnScroll: Boolean,
            elevateOnScroll: Boolean,
            fadeImgOnScroll: Boolean,
            hideOnScroll: Boolean,
            invertedScroll: Boolean,
            scrollOffScreen: Boolean,
            shrinkOnScroll: Boolean,
            value: {
              type: Boolean,
              default: true
            }
          },
          data: function data() {
            return {
              isActive: this.value
            };
          },
          computed: {
            applicationProperty: function applicationProperty() {
              return !this.bottom ? 'top' : 'bottom';
            },
            canScroll: function canScroll() {
              return _mixins_scrollable__WEBPACK_IMPORTED_MODULE_4__["default"].options.computed.canScroll.call(this) && (this.invertedScroll || this.elevateOnScroll || this.hideOnScroll || this.collapseOnScroll || this.isBooted || // If falsy, user has provided an
              // explicit value which should
              // overwrite anything we do
              !this.value);
            },
            classes: function classes() {
              return __assign(__assign({}, _VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.classes.call(this)), {
                'v-toolbar--collapse': this.collapse || this.collapseOnScroll,
                'v-app-bar': true,
                'v-app-bar--clipped': this.clippedLeft || this.clippedRight,
                'v-app-bar--fade-img-on-scroll': this.fadeImgOnScroll,
                'v-app-bar--elevate-on-scroll': this.elevateOnScroll,
                'v-app-bar--fixed': !this.absolute && (this.app || this.fixed),
                'v-app-bar--hide-shadow': this.hideShadow,
                'v-app-bar--is-scrolled': this.currentScroll > 0,
                'v-app-bar--shrink-on-scroll': this.shrinkOnScroll
              });
            },
            scrollRatio: function scrollRatio() {
              var threshold = this.computedScrollThreshold;
              return Math.max((threshold - this.currentScroll) / threshold, 0);
            },
            computedContentHeight: function computedContentHeight() {
              if (!this.shrinkOnScroll) return _VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.computedContentHeight.call(this);
              var min = this.dense ? 48 : 56;
              var max = this.computedOriginalHeight;
              return min + (max - min) * this.scrollRatio;
            },
            computedFontSize: function computedFontSize() {
              if (!this.isProminent) return undefined;
              var min = 1.25;
              var max = 1.5;
              return min + (max - min) * this.scrollRatio;
            },
            computedLeft: function computedLeft() {
              if (!this.app || this.clippedLeft) return 0;
              return this.$vuetify.application.left;
            },
            computedMarginTop: function computedMarginTop() {
              if (!this.app) return 0;
              return this.$vuetify.application.bar;
            },
            computedOpacity: function computedOpacity() {
              if (!this.fadeImgOnScroll) return undefined;
              return this.scrollRatio;
            },
            computedOriginalHeight: function computedOriginalHeight() {
              var height = _VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.computedContentHeight.call(this);

              if (this.isExtended) height += parseInt(this.extensionHeight);
              return height;
            },
            computedRight: function computedRight() {
              if (!this.app || this.clippedRight) return 0;
              return this.$vuetify.application.right;
            },
            computedScrollThreshold: function computedScrollThreshold() {
              if (this.scrollThreshold) return Number(this.scrollThreshold);
              return this.computedOriginalHeight - (this.dense ? 48 : 56);
            },
            computedTransform: function computedTransform() {
              if (!this.canScroll || this.elevateOnScroll && this.currentScroll === 0 && this.isActive) return 0;
              if (this.isActive) return 0;
              var scrollOffScreen = this.scrollOffScreen ? this.computedHeight : this.computedContentHeight;
              return this.bottom ? scrollOffScreen : -scrollOffScreen;
            },
            hideShadow: function hideShadow() {
              if (this.elevateOnScroll && this.isExtended) {
                return this.currentScroll < this.computedScrollThreshold;
              }

              if (this.elevateOnScroll) {
                return this.currentScroll === 0 || this.computedTransform < 0;
              }

              return (!this.isExtended || this.scrollOffScreen) && this.computedTransform !== 0;
            },
            isCollapsed: function isCollapsed() {
              if (!this.collapseOnScroll) {
                return _VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.isCollapsed.call(this);
              }

              return this.currentScroll > 0;
            },
            isProminent: function isProminent() {
              return _VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.isProminent.call(this) || this.shrinkOnScroll;
            },
            styles: function styles() {
              return __assign(__assign({}, _VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.styles.call(this)), {
                fontSize: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["convertToUnit"])(this.computedFontSize, 'rem'),
                marginTop: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["convertToUnit"])(this.computedMarginTop),
                transform: "translateY(" + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["convertToUnit"])(this.computedTransform) + ")",
                left: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["convertToUnit"])(this.computedLeft),
                right: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["convertToUnit"])(this.computedRight)
              });
            }
          },
          watch: {
            canScroll: 'onScroll',
            computedTransform: function computedTransform() {
              // Normally we do not want the v-app-bar
              // to update the application top value
              // to avoid screen jump. However, in
              // this situation, we must so that
              // the clipped drawer can update
              // its top value when scrolled
              if (!this.canScroll || !this.clippedLeft && !this.clippedRight) return;
              this.callUpdate();
            },
            invertedScroll: function invertedScroll(val) {
              this.isActive = !val || this.currentScroll !== 0;
            },
            hideOnScroll: function hideOnScroll(val) {
              this.isActive = !val || this.currentScroll < this.computedScrollThreshold;
            }
          },
          created: function created() {
            if (this.invertedScroll) this.isActive = false;
          },
          methods: {
            genBackground: function genBackground() {
              var render = _VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.genBackground.call(this);

              render.data = this._b(render.data || {}, render.tag, {
                style: {
                  opacity: this.computedOpacity
                }
              });
              return render;
            },
            updateApplication: function updateApplication() {
              return this.invertedScroll ? 0 : this.computedHeight + this.computedTransform;
            },
            thresholdMet: function thresholdMet() {
              if (this.invertedScroll) {
                this.isActive = this.currentScroll > this.computedScrollThreshold;
                return;
              }

              if (this.hideOnScroll) {
                this.isActive = this.isScrollingUp || this.currentScroll < this.computedScrollThreshold;
              }

              if (this.currentThreshold < this.computedScrollThreshold) return;
              this.savedScroll = this.currentScroll;
            }
          },
          render: function render(h) {
            var render = _VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__["default"].options.render.call(this, h);

            render.data = render.data || {};

            if (this.canScroll) {
              render.data.directives = render.data.directives || [];
              render.data.directives.push({
                arg: this.scrollTarget,
                name: 'scroll',
                value: this.onScroll
              });
            }

            return render;
          }
        });
        /***/
      },

      /***/
      "./src/components/VAppBar/VAppBarNavIcon.ts":
      /*!**************************************************!*\
        !*** ./src/components/VAppBar/VAppBarNavIcon.ts ***!
        \**************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVAppBarVAppBarNavIconTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../VIcon */
        "./src/components/VIcon/index.ts");
        /* harmony import */


        var _VBtn_VBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../VBtn/VBtn */
        "./src/components/VBtn/VBtn.ts");
        /* harmony import */


        var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! vue */
        "vue");
        /* harmony import */


        var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Components
        // Types

        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = vue__WEBPACK_IMPORTED_MODULE_2___default.a.extend({
          name: 'v-app-bar-nav-icon',
          functional: true,
          render: function render(h, _a) {
            var slots = _a.slots,
                listeners = _a.listeners,
                props = _a.props,
                data = _a.data;
            var d = Object.assign(data, {
              staticClass: ("v-app-bar__nav-icon " + (data.staticClass || '')).trim(),
              props: __assign(__assign({}, props), {
                icon: true
              }),
              on: listeners
            });
            var defaultSlot = slots().default;
            return h(_VBtn_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], d, defaultSlot || [h(_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], '$menu')]);
          }
        });
        /***/
      },

      /***/
      "./src/components/VAppBar/VAppBarTitle.ts":
      /*!************************************************!*\
        !*** ./src/components/VAppBar/VAppBarTitle.ts ***!
        \************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVAppBarVAppBarTitleTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _mixins_registrable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../../mixins/registrable */
        "./src/mixins/registrable/index.ts");
        /* harmony import */


        var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../util/helpers */
        "./src/util/helpers.ts");
        /* harmony import */


        var _services_goto_easing_patterns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../services/goto/easing-patterns */
        "./src/services/goto/easing-patterns.ts"); // Mixins
        // Utilities


        var base = Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_0__["inject"])('VAppBar', 'v-app-bar-title', 'v-app-bar');
        /* harmony default export */

        __webpack_exports__["default"] = base.extend().extend({
          name: 'v-app-bar-title',
          data: function data() {
            return {
              contentWidth: 0,
              left: 0,
              width: 0
            };
          },
          watch: {
            '$vuetify.breakpoint.width': 'updateDimensions'
          },
          computed: {
            styles: function styles() {
              if (!this.contentWidth) return {};
              var min = this.width;
              var max = this.contentWidth;
              var ratio = Object(_services_goto_easing_patterns__WEBPACK_IMPORTED_MODULE_2__["easeInOutCubic"])(Math.min(1, this.VAppBar.scrollRatio * 1.5));
              return {
                width: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["convertToUnit"])(min + (max - min) * ratio),
                visibility: this.VAppBar.scrollRatio ? 'visible' : 'hidden'
              };
            }
          },
          mounted: function mounted() {
            this.updateDimensions();
          },
          methods: {
            updateDimensions: function updateDimensions() {
              var dimensions = this.$refs.placeholder.getBoundingClientRect();
              this.width = dimensions.width;
              this.left = dimensions.left;
              this.contentWidth = this.$refs.content.scrollWidth;
            }
          },
          render: function render(h) {
            return h('div', {
              class: 'v-toolbar__title v-app-bar-title'
            }, [h('div', {
              class: 'v-app-bar-title__content',
              style: this.styles,
              ref: 'content'
            }, [this.$slots.default]), h('div', {
              class: 'v-app-bar-title__placeholder',
              style: {
                visibility: this.VAppBar.scrollRatio ? 'hidden' : 'visible'
              },
              ref: 'placeholder'
            }, [this.$slots.default])]);
          }
        });
        /***/
      },

      /***/
      "./src/components/VAppBar/index.ts":
      /*!*****************************************!*\
        !*** ./src/components/VAppBar/index.ts ***!
        \*****************************************/

      /*! exports provided: VAppBar, VAppBarNavIcon, VAppBarTitle, default */

      /***/
      function srcComponentsVAppBarIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VAppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VAppBar */
        "./src/components/VAppBar/VAppBar.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VAppBar", function () {
          return _VAppBar__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony import */


        var _VAppBarNavIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./VAppBarNavIcon */
        "./src/components/VAppBar/VAppBarNavIcon.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VAppBarNavIcon", function () {
          return _VAppBarNavIcon__WEBPACK_IMPORTED_MODULE_1__["default"];
        });
        /* harmony import */


        var _VAppBarTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./VAppBarTitle */
        "./src/components/VAppBar/VAppBarTitle.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VAppBarTitle", function () {
          return _VAppBarTitle__WEBPACK_IMPORTED_MODULE_2__["default"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = {
          $_vuetify_subcomponents: {
            VAppBar: _VAppBar__WEBPACK_IMPORTED_MODULE_0__["default"],
            VAppBarNavIcon: _VAppBarNavIcon__WEBPACK_IMPORTED_MODULE_1__["default"],
            VAppBarTitle: _VAppBarTitle__WEBPACK_IMPORTED_MODULE_2__["default"]
          }
        };
        /***/
      },

      /***/
      "./src/components/VAutocomplete/VAutocomplete.sass":
      /*!*********************************************************!*\
        !*** ./src/components/VAutocomplete/VAutocomplete.sass ***!
        \*********************************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVAutocompleteVAutocompleteSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VAutocomplete/VAutocomplete.ts":
      /*!*******************************************************!*\
        !*** ./src/components/VAutocomplete/VAutocomplete.ts ***!
        \*******************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVAutocompleteVAutocompleteTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VAutocomplete_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VAutocomplete.sass */
        "./src/components/VAutocomplete/VAutocomplete.sass");
        /* harmony import */


        var _VAutocomplete_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VAutocomplete_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../VSelect/VSelect */
        "./src/components/VSelect/VSelect.ts");
        /* harmony import */


        var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../VTextField/VTextField */
        "./src/components/VTextField/VTextField.ts");
        /* harmony import */


        var _util_mergeData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../util/mergeData */
        "./src/util/mergeData.ts");
        /* harmony import */


        var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../util/helpers */
        "./src/util/helpers.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Styles
        // Extensions
        // Utilities


        var defaultMenuProps = __assign(__assign({}, _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__["defaultMenuProps"]), {
          offsetY: true,
          offsetOverflow: true,
          transition: false
        });
        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
          name: 'v-autocomplete',
          props: {
            allowOverflow: {
              type: Boolean,
              default: true
            },
            autoSelectFirst: {
              type: Boolean,
              default: false
            },
            filter: {
              type: Function,
              default: function _default(item, queryText, itemText) {
                return itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1;
              }
            },
            hideNoData: Boolean,
            menuProps: {
              type: _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__["default"].options.props.menuProps.type,
              default: function _default() {
                return defaultMenuProps;
              }
            },
            noFilter: Boolean,
            searchInput: {
              type: String
            }
          },
          data: function data() {
            return {
              lazySearch: this.searchInput
            };
          },
          computed: {
            classes: function classes() {
              return __assign(__assign({}, _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.classes.call(this)), {
                'v-autocomplete': true,
                'v-autocomplete--is-selecting-index': this.selectedIndex > -1
              });
            },
            computedItems: function computedItems() {
              return this.filteredItems;
            },
            selectedValues: function selectedValues() {
              var _this = this;

              return this.selectedItems.map(function (item) {
                return _this.getValue(item);
              });
            },
            hasDisplayedItems: function hasDisplayedItems() {
              var _this = this;

              return this.hideSelected ? this.filteredItems.some(function (item) {
                return !_this.hasItem(item);
              }) : this.filteredItems.length > 0;
            },
            currentRange: function currentRange() {
              if (this.selectedItem == null) return 0;
              return String(this.getText(this.selectedItem)).length;
            },
            filteredItems: function filteredItems() {
              var _this = this;

              if (!this.isSearching || this.noFilter || this.internalSearch == null) return this.allItems;
              return this.allItems.filter(function (item) {
                var value = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["getPropertyFromItem"])(item, _this.itemText);
                var text = value != null ? String(value) : '';
                return _this.filter(item, String(_this.internalSearch), text);
              });
            },
            internalSearch: {
              get: function get() {
                return this.lazySearch;
              },
              set: function set(val) {
                // emit update event only when the new
                // search value is different from previous
                if (this.lazySearch !== val) {
                  this.lazySearch = val;
                  this.$emit('update:search-input', val);
                }
              }
            },
            isAnyValueAllowed: function isAnyValueAllowed() {
              return false;
            },
            isDirty: function isDirty() {
              return this.searchIsDirty || this.selectedItems.length > 0;
            },
            isSearching: function isSearching() {
              return this.multiple && this.searchIsDirty || this.searchIsDirty && this.internalSearch !== this.getText(this.selectedItem);
            },
            menuCanShow: function menuCanShow() {
              if (!this.isFocused) return false;
              return this.hasDisplayedItems || !this.hideNoData;
            },
            $_menuProps: function $_menuProps() {
              var props = _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.$_menuProps.call(this);

              props.contentClass = ("v-autocomplete__content " + (props.contentClass || '')).trim();
              return __assign(__assign({}, defaultMenuProps), props);
            },
            searchIsDirty: function searchIsDirty() {
              return this.internalSearch != null && this.internalSearch !== '';
            },
            selectedItem: function selectedItem() {
              var _this = this;

              if (this.multiple) return null;
              return this.selectedItems.find(function (i) {
                return _this.valueComparator(_this.getValue(i), _this.getValue(_this.internalValue));
              });
            },
            listData: function listData() {
              var data = _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.listData.call(this);

              data.props = __assign(__assign({}, data.props), {
                items: this.virtualizedItems,
                noFilter: this.noFilter || !this.isSearching || !this.filteredItems.length,
                searchInput: this.internalSearch
              });
              return data;
            }
          },
          watch: {
            filteredItems: 'onFilteredItemsChanged',
            internalValue: 'setSearch',
            isFocused: function isFocused(val) {
              if (val) {
                document.addEventListener('copy', this.onCopy);
                this.$refs.input && this.$refs.input.select();
              } else {
                document.removeEventListener('copy', this.onCopy);
                this.blur();
                this.updateSelf();
              }
            },
            isMenuActive: function isMenuActive(val) {
              if (val || !this.hasSlot) return;
              this.lazySearch = null;
            },
            items: function items(val, oldVal) {
              // If we are focused, the menu
              // is not active, hide no data is enabled,
              // and items change
              // User is probably async loading
              // items, try to activate the menu
              if (!(oldVal && oldVal.length) && this.hideNoData && this.isFocused && !this.isMenuActive && val.length) this.activateMenu();
            },
            searchInput: function searchInput(val) {
              this.lazySearch = val;
            },
            internalSearch: 'onInternalSearchChanged',
            itemText: 'updateSelf'
          },
          created: function created() {
            this.setSearch();
          },
          destroyed: function destroyed() {
            document.removeEventListener('copy', this.onCopy);
          },
          methods: {
            onFilteredItemsChanged: function onFilteredItemsChanged(val, oldVal) {
              var _this = this; // TODO: How is the watcher triggered
              // for duplicate items? no idea


              if (val === oldVal) return;

              if (!this.autoSelectFirst) {
                var preSelectedItem_1 = oldVal[this.$refs.menu.listIndex];

                if (preSelectedItem_1) {
                  this.setMenuIndex(val.findIndex(function (i) {
                    return i === preSelectedItem_1;
                  }));
                } else {
                  this.setMenuIndex(-1);
                }

                this.$emit('update:list-index', this.$refs.menu.listIndex);
              }

              this.$nextTick(function () {
                if (!_this.internalSearch || val.length !== 1 && !_this.autoSelectFirst) return;

                _this.$refs.menu.getTiles();

                if (_this.autoSelectFirst && val.length) {
                  _this.setMenuIndex(0);

                  _this.$emit('update:list-index', _this.$refs.menu.listIndex);
                }
              });
            },
            onInternalSearchChanged: function onInternalSearchChanged() {
              this.updateMenuDimensions();
            },
            updateMenuDimensions: function updateMenuDimensions() {
              // Type from menuable is not making it through
              this.isMenuActive && this.$refs.menu && this.$refs.menu.updateDimensions();
            },
            changeSelectedIndex: function changeSelectedIndex(keyCode) {
              // Do not allow changing of selectedIndex
              // when search is dirty
              if (this.searchIsDirty) return;

              if (this.multiple && keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_4__["keyCodes"].left) {
                if (this.selectedIndex === -1) {
                  this.selectedIndex = this.selectedItems.length - 1;
                } else {
                  this.selectedIndex--;
                }
              } else if (this.multiple && keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_4__["keyCodes"].right) {
                if (this.selectedIndex >= this.selectedItems.length - 1) {
                  this.selectedIndex = -1;
                } else {
                  this.selectedIndex++;
                }
              } else if (keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_4__["keyCodes"].backspace || keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_4__["keyCodes"].delete) {
                this.deleteCurrentItem();
              }
            },
            deleteCurrentItem: function deleteCurrentItem() {
              var curIndex = this.selectedIndex;
              var curItem = this.selectedItems[curIndex]; // Do nothing if input or item is disabled

              if (!this.isInteractive || this.getDisabled(curItem)) return;
              var lastIndex = this.selectedItems.length - 1; // Select the last item if
              // there is no selection

              if (this.selectedIndex === -1 && lastIndex !== 0) {
                this.selectedIndex = lastIndex;
                return;
              }

              var length = this.selectedItems.length;
              var nextIndex = curIndex !== length - 1 ? curIndex : curIndex - 1;
              var nextItem = this.selectedItems[nextIndex];

              if (!nextItem) {
                this.setValue(this.multiple ? [] : null);
              } else {
                this.selectItem(curItem);
              }

              this.selectedIndex = nextIndex;
            },
            clearableCallback: function clearableCallback() {
              this.internalSearch = null;

              _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.clearableCallback.call(this);
            },
            genInput: function genInput() {
              var input = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_2__["default"].options.methods.genInput.call(this);

              input.data = Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_3__["default"])(input.data, {
                attrs: {
                  'aria-activedescendant': Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["getObjectValueByPath"])(this.$refs.menu, 'activeTile.id'),
                  autocomplete: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["getObjectValueByPath"])(input.data, 'attrs.autocomplete', 'off')
                },
                domProps: {
                  value: this.internalSearch
                }
              });
              return input;
            },
            genInputSlot: function genInputSlot() {
              var slot = _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.genInputSlot.call(this);

              slot.data.attrs.role = 'combobox';
              return slot;
            },
            genSelections: function genSelections() {
              return this.hasSlot || this.multiple ? _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.genSelections.call(this) : [];
            },
            onClick: function onClick(e) {
              if (!this.isInteractive) return;
              this.selectedIndex > -1 ? this.selectedIndex = -1 : this.onFocus();
              if (!this.isAppendInner(e.target)) this.activateMenu();
            },
            onInput: function onInput(e) {
              if (this.selectedIndex > -1 || !e.target) return;
              var target = e.target;
              var value = target.value; // If typing and menu is not currently active

              if (target.value) this.activateMenu();
              if (!this.multiple && value === '') this.deleteCurrentItem();
              this.internalSearch = value;
              this.badInput = target.validity && target.validity.badInput;
            },
            onKeyDown: function onKeyDown(e) {
              var keyCode = e.keyCode;

              if (e.ctrlKey || ![_util_helpers__WEBPACK_IMPORTED_MODULE_4__["keyCodes"].home, _util_helpers__WEBPACK_IMPORTED_MODULE_4__["keyCodes"].end].includes(keyCode)) {
                _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.onKeyDown.call(this, e);
              } // The ordering is important here
              // allows new value to be updated
              // and then moves the index to the
              // proper location


              this.changeSelectedIndex(keyCode);
            },
            onSpaceDown: function onSpaceDown(e) {},
            onTabDown: function onTabDown(e) {
              _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.onTabDown.call(this, e);

              this.updateSelf();
            },
            onUpDown: function onUpDown(e) {
              // Prevent screen from scrolling
              e.preventDefault(); // For autocomplete / combobox, cycling
              // interfers with native up/down behavior
              // instead activate the menu

              this.activateMenu();
            },
            selectItem: function selectItem(item) {
              _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.selectItem.call(this, item);

              this.setSearch();
            },
            setSelectedItems: function setSelectedItems() {
              _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.setSelectedItems.call(this); // #4273 Don't replace if searching
              // #4403 Don't replace if focused


              if (!this.isFocused) this.setSearch();
            },
            setSearch: function setSearch() {
              var _this = this; // Wait for nextTick so selectedItem
              // has had time to update


              this.$nextTick(function () {
                if (!_this.multiple || !_this.internalSearch || !_this.isMenuActive) {
                  _this.internalSearch = !_this.selectedItems.length || _this.multiple || _this.hasSlot ? null : _this.getText(_this.selectedItem);
                }
              });
            },
            updateSelf: function updateSelf() {
              if (!this.searchIsDirty && !this.internalValue) return;

              if (!this.multiple && !this.valueComparator(this.internalSearch, this.getValue(this.internalValue))) {
                this.setSearch();
              }
            },
            hasItem: function hasItem(item) {
              return this.selectedValues.indexOf(this.getValue(item)) > -1;
            },
            onCopy: function onCopy(event) {
              var _a, _b;

              if (this.selectedIndex === -1) return;
              var currentItem = this.selectedItems[this.selectedIndex];
              var currentItemText = this.getText(currentItem);
              (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.setData('text/plain', currentItemText);
              (_b = event.clipboardData) === null || _b === void 0 ? void 0 : _b.setData('text/vnd.vuetify.autocomplete.item+plain', currentItemText);
              event.preventDefault();
            }
          }
        });
        /***/
      },

      /***/
      "./src/components/VAutocomplete/index.ts":
      /*!***********************************************!*\
        !*** ./src/components/VAutocomplete/index.ts ***!
        \***********************************************/

      /*! exports provided: VAutocomplete, default */

      /***/
      function srcComponentsVAutocompleteIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VAutocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VAutocomplete */
        "./src/components/VAutocomplete/VAutocomplete.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VAutocomplete", function () {
          return _VAutocomplete__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = _VAutocomplete__WEBPACK_IMPORTED_MODULE_0__["default"];
        /***/
      },

      /***/
      "./src/components/VAvatar/VAvatar.sass":
      /*!*********************************************!*\
        !*** ./src/components/VAvatar/VAvatar.sass ***!
        \*********************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVAvatarVAvatarSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VAvatar/VAvatar.ts":
      /*!*******************************************!*\
        !*** ./src/components/VAvatar/VAvatar.ts ***!
        \*******************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVAvatarVAvatarTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VAvatar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VAvatar.sass */
        "./src/components/VAvatar/VAvatar.sass");
        /* harmony import */


        var _VAvatar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VAvatar_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _mixins_colorable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../mixins/colorable */
        "./src/mixins/colorable/index.ts");
        /* harmony import */


        var _mixins_measurable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../mixins/measurable */
        "./src/mixins/measurable/index.ts");
        /* harmony import */


        var _mixins_roundable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../mixins/roundable */
        "./src/mixins/roundable/index.ts");
        /* harmony import */


        var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../util/helpers */
        "./src/util/helpers.ts");
        /* harmony import */


        var _util_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../../util/mixins */
        "./src/util/mixins.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Mixins
        // Utilities

        /* harmony default export */


        __webpack_exports__["default"] = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_5__["default"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_measurable__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_roundable__WEBPACK_IMPORTED_MODULE_3__["default"]).extend({
          name: 'v-avatar',
          props: {
            left: Boolean,
            right: Boolean,
            size: {
              type: [Number, String],
              default: 48
            }
          },
          computed: {
            classes: function classes() {
              return __assign({
                'v-avatar--left': this.left,
                'v-avatar--right': this.right
              }, this.roundedClasses);
            },
            styles: function styles() {
              return __assign({
                height: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["convertToUnit"])(this.size),
                minWidth: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["convertToUnit"])(this.size),
                width: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["convertToUnit"])(this.size)
              }, this.measurableStyles);
            }
          },
          render: function render(h) {
            var data = {
              staticClass: 'v-avatar',
              class: this.classes,
              style: this.styles,
              on: this.$listeners
            };
            return h('div', this.setBackgroundColor(this.color, data), this.$slots.default);
          }
        });
        /***/
      },

      /***/
      "./src/components/VAvatar/index.ts":
      /*!*****************************************!*\
        !*** ./src/components/VAvatar/index.ts ***!
        \*****************************************/

      /*! exports provided: VAvatar, default */

      /***/
      function srcComponentsVAvatarIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VAvatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VAvatar */
        "./src/components/VAvatar/VAvatar.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VAvatar", function () {
          return _VAvatar__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = _VAvatar__WEBPACK_IMPORTED_MODULE_0__["default"];
        /***/
      },

      /***/
      "./src/components/VBadge/VBadge.sass":
      /*!*******************************************!*\
        !*** ./src/components/VBadge/VBadge.sass ***!
        \*******************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVBadgeVBadgeSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VBadge/VBadge.ts":
      /*!*****************************************!*\
        !*** ./src/components/VBadge/VBadge.ts ***!
        \*****************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVBadgeVBadgeTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VBadge_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VBadge.sass */
        "./src/components/VBadge/VBadge.sass");
        /* harmony import */


        var _VBadge_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VBadge_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _VIcon_VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../VIcon/VIcon */
        "./src/components/VIcon/VIcon.ts");
        /* harmony import */


        var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../mixins/colorable */
        "./src/mixins/colorable/index.ts");
        /* harmony import */


        var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../mixins/themeable */
        "./src/mixins/themeable/index.ts");
        /* harmony import */


        var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../mixins/toggleable */
        "./src/mixins/toggleable/index.ts");
        /* harmony import */


        var _mixins_transitionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../../mixins/transitionable */
        "./src/mixins/transitionable/index.ts");
        /* harmony import */


        var _mixins_positionable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../mixins/positionable */
        "./src/mixins/positionable/index.ts");
        /* harmony import */


        var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../util/mixins */
        "./src/util/mixins.ts");
        /* harmony import */


        var _util_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../../util/helpers */
        "./src/util/helpers.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        };

        var __rest = undefined && undefined.__rest || function (s, e) {
          var t = {};

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
          }

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        }; // Styles
        // Components
        // Mixins
        // Utilities

        /* harmony default export */


        __webpack_exports__["default"] = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__["default"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_6__["factory"])(['left', 'bottom']), _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_transitionable__WEBPACK_IMPORTED_MODULE_5__["default"]).extend({
          name: 'v-badge',
          props: {
            avatar: Boolean,
            bordered: Boolean,
            color: {
              type: String,
              default: 'primary'
            },
            content: {
              required: false
            },
            dot: Boolean,
            label: {
              type: String,
              default: '$vuetify.badge'
            },
            icon: String,
            inline: Boolean,
            offsetX: [Number, String],
            offsetY: [Number, String],
            overlap: Boolean,
            tile: Boolean,
            transition: {
              type: String,
              default: 'scale-rotate-transition'
            },
            value: {
              default: true
            }
          },
          computed: {
            classes: function classes() {
              return __assign({
                'v-badge--avatar': this.avatar,
                'v-badge--bordered': this.bordered,
                'v-badge--bottom': this.bottom,
                'v-badge--dot': this.dot,
                'v-badge--icon': this.icon != null,
                'v-badge--inline': this.inline,
                'v-badge--left': this.left,
                'v-badge--overlap': this.overlap,
                'v-badge--tile': this.tile
              }, this.themeClasses);
            },
            computedBottom: function computedBottom() {
              return this.bottom ? 'auto' : this.computedYOffset;
            },
            computedLeft: function computedLeft() {
              if (this.isRtl) {
                return this.left ? this.computedXOffset : 'auto';
              }

              return this.left ? 'auto' : this.computedXOffset;
            },
            computedRight: function computedRight() {
              if (this.isRtl) {
                return this.left ? 'auto' : this.computedXOffset;
              }

              return !this.left ? 'auto' : this.computedXOffset;
            },
            computedTop: function computedTop() {
              return this.bottom ? this.computedYOffset : 'auto';
            },
            computedXOffset: function computedXOffset() {
              return this.calcPosition(this.offsetX);
            },
            computedYOffset: function computedYOffset() {
              return this.calcPosition(this.offsetY);
            },
            isRtl: function isRtl() {
              return this.$vuetify.rtl;
            },
            // Default fallback if offsetX
            // or offsetY are undefined.
            offset: function offset() {
              if (this.overlap) return this.dot ? 8 : 12;
              return this.dot ? 2 : 4;
            },
            styles: function styles() {
              if (this.inline) return {};
              return {
                bottom: this.computedBottom,
                left: this.computedLeft,
                right: this.computedRight,
                top: this.computedTop
              };
            }
          },
          methods: {
            calcPosition: function calcPosition(offset) {
              return "calc(100% - " + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_8__["convertToUnit"])(offset || this.offset) + ")";
            },
            genBadge: function genBadge() {
              var lang = this.$vuetify.lang;
              var label = this.$attrs['aria-label'] || lang.t(this.label);
              var data = this.setBackgroundColor(this.color, {
                staticClass: 'v-badge__badge',
                style: this.styles,
                attrs: {
                  'aria-atomic': this.$attrs['aria-atomic'] || 'true',
                  'aria-label': label,
                  'aria-live': this.$attrs['aria-live'] || 'polite',
                  title: this.$attrs.title,
                  role: this.$attrs.role || 'status'
                },
                directives: [{
                  name: 'show',
                  value: this.isActive
                }]
              });
              var badge = this.$createElement('span', data, [this.genBadgeContent()]);
              if (!this.transition) return badge;
              return this.$createElement('transition', {
                props: {
                  name: this.transition,
                  origin: this.origin,
                  mode: this.mode
                }
              }, [badge]);
            },
            genBadgeContent: function genBadgeContent() {
              // Dot prop shows no content
              if (this.dot) return undefined;
              var slot = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_8__["getSlot"])(this, 'badge');
              if (slot) return slot;
              if (this.content) return String(this.content);
              if (this.icon) return this.$createElement(_VIcon_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], this.icon);
              return undefined;
            },
            genBadgeWrapper: function genBadgeWrapper() {
              return this.$createElement('span', {
                staticClass: 'v-badge__wrapper'
              }, [this.genBadge()]);
            }
          },
          render: function render(h) {
            var badge = [this.genBadgeWrapper()];
            var children = [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_8__["getSlot"])(this)];

            var _a = this.$attrs,
                _x = _a["aria-atomic"],
                _y = _a["aria-label"],
                _z = _a["aria-live"],
                role = _a.role,
                title = _a.title,
                attrs = __rest(_a, ['aria-atomic', 'aria-label', 'aria-live', "role", "title"]);

            if (this.inline && this.left) children.unshift(badge);else children.push(badge);
            return h('span', {
              staticClass: 'v-badge',
              attrs: attrs,
              class: this.classes
            }, children);
          }
        });
        /***/
      },

      /***/
      "./src/components/VBadge/index.ts":
      /*!****************************************!*\
        !*** ./src/components/VBadge/index.ts ***!
        \****************************************/

      /*! exports provided: VBadge, default */

      /***/
      function srcComponentsVBadgeIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VBadge */
        "./src/components/VBadge/VBadge.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VBadge", function () {
          return _VBadge__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = _VBadge__WEBPACK_IMPORTED_MODULE_0__["default"];
        /***/
      },

      /***/
      "./src/components/VBanner/VBanner.sass":
      /*!*********************************************!*\
        !*** ./src/components/VBanner/VBanner.sass ***!
        \*********************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVBannerVBannerSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VBanner/VBanner.ts":
      /*!*******************************************!*\
        !*** ./src/components/VBanner/VBanner.ts ***!
        \*******************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVBannerVBannerTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VBanner_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VBanner.sass */
        "./src/components/VBanner/VBanner.sass");
        /* harmony import */


        var _VBanner_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VBanner_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../VSheet */
        "./src/components/VSheet/index.ts");
        /* harmony import */


        var _VAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../VAvatar */
        "./src/components/VAvatar/index.ts");
        /* harmony import */


        var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../VIcon */
        "./src/components/VIcon/index.ts");
        /* harmony import */


        var _transitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../transitions */
        "./src/components/transitions/index.ts");
        /* harmony import */


        var _mixins_mobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../../mixins/mobile */
        "./src/mixins/mobile/index.ts");
        /* harmony import */


        var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../mixins/toggleable */
        "./src/mixins/toggleable/index.ts");
        /* harmony import */


        var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../util/mixins */
        "./src/util/mixins.ts");
        /* harmony import */


        var _util_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../../util/helpers */
        "./src/util/helpers.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Styles
        // Extensions
        // Components
        // Mixins
        // Utilities

        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__["default"])(_VSheet__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_mobile__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_6__["default"]).extend({
          name: 'v-banner',
          inheritAttrs: false,
          props: {
            app: Boolean,
            icon: String,
            iconColor: String,
            singleLine: Boolean,
            sticky: Boolean,
            value: {
              type: Boolean,
              default: true
            }
          },
          computed: {
            classes: function classes() {
              return __assign(__assign({}, _VSheet__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.classes.call(this)), {
                'v-banner--has-icon': this.hasIcon,
                'v-banner--is-mobile': this.isMobile,
                'v-banner--single-line': this.singleLine,
                'v-banner--sticky': this.isSticky
              });
            },
            hasIcon: function hasIcon() {
              return Boolean(this.icon || this.$slots.icon);
            },
            isSticky: function isSticky() {
              return this.sticky || this.app;
            },
            styles: function styles() {
              var styles = __assign({}, _VSheet__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.styles.call(this));

              if (this.isSticky) {
                var top = !this.app ? 0 : this.$vuetify.application.bar + this.$vuetify.application.top;
                styles.top = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_8__["convertToUnit"])(top);
                styles.position = 'sticky';
                styles.zIndex = 1;
              }

              return styles;
            }
          },
          methods: {
            /** @public */
            toggle: function toggle() {
              this.isActive = !this.isActive;
            },
            iconClick: function iconClick(e) {
              this.$emit('click:icon', e);
            },
            genIcon: function genIcon() {
              if (!this.hasIcon) return undefined;
              var content;

              if (this.icon) {
                content = this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  props: {
                    color: this.iconColor,
                    size: 28
                  }
                }, [this.icon]);
              } else {
                content = this.$slots.icon;
              }

              return this.$createElement(_VAvatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
                staticClass: 'v-banner__icon',
                props: {
                  color: this.color,
                  size: 40
                },
                on: {
                  click: this.iconClick
                }
              }, [content]);
            },
            genText: function genText() {
              return this.$createElement('div', {
                staticClass: 'v-banner__text'
              }, this.$slots.default);
            },
            genActions: function genActions() {
              var _this = this;

              var children = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_8__["getSlot"])(this, 'actions', {
                dismiss: function dismiss() {
                  return _this.isActive = false;
                }
              });
              if (!children) return undefined;
              return this.$createElement('div', {
                staticClass: 'v-banner__actions'
              }, children);
            },
            genContent: function genContent() {
              return this.$createElement('div', {
                staticClass: 'v-banner__content'
              }, [this.genIcon(), this.genText()]);
            },
            genWrapper: function genWrapper() {
              return this.$createElement('div', {
                staticClass: 'v-banner__wrapper'
              }, [this.genContent(), this.genActions()]);
            }
          },
          render: function render(h) {
            var data = {
              staticClass: 'v-banner',
              attrs: this.attrs$,
              class: this.classes,
              style: this.styles,
              directives: [{
                name: 'show',
                value: this.isActive
              }]
            };
            return h(_transitions__WEBPACK_IMPORTED_MODULE_4__["VExpandTransition"], [h('div', this.outlined ? data : this.setBackgroundColor(this.color, data), [this.genWrapper()])]);
          }
        });
        /***/
      },

      /***/
      "./src/components/VBanner/index.ts":
      /*!*****************************************!*\
        !*** ./src/components/VBanner/index.ts ***!
        \*****************************************/

      /*! exports provided: VBanner, default */

      /***/
      function srcComponentsVBannerIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VBanner */
        "./src/components/VBanner/VBanner.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VBanner", function () {
          return _VBanner__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = _VBanner__WEBPACK_IMPORTED_MODULE_0__["default"];
        /***/
      },

      /***/
      "./src/components/VBottomNavigation/VBottomNavigation.sass":
      /*!*****************************************************************!*\
        !*** ./src/components/VBottomNavigation/VBottomNavigation.sass ***!
        \*****************************************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVBottomNavigationVBottomNavigationSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VBottomNavigation/VBottomNavigation.ts":
      /*!***************************************************************!*\
        !*** ./src/components/VBottomNavigation/VBottomNavigation.ts ***!
        \***************************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVBottomNavigationVBottomNavigationTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VBottomNavigation_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VBottomNavigation.sass */
        "./src/components/VBottomNavigation/VBottomNavigation.sass");
        /* harmony import */


        var _VBottomNavigation_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VBottomNavigation_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _mixins_applicationable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../mixins/applicationable */
        "./src/mixins/applicationable/index.ts");
        /* harmony import */


        var _mixins_button_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../mixins/button-group */
        "./src/mixins/button-group/index.ts");
        /* harmony import */


        var _mixins_colorable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../mixins/colorable */
        "./src/mixins/colorable/index.ts");
        /* harmony import */


        var _mixins_measurable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../mixins/measurable */
        "./src/mixins/measurable/index.ts");
        /* harmony import */


        var _mixins_proxyable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../../mixins/proxyable */
        "./src/mixins/proxyable/index.ts");
        /* harmony import */


        var _mixins_scrollable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../mixins/scrollable */
        "./src/mixins/scrollable/index.ts");
        /* harmony import */


        var _mixins_themeable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../mixins/themeable */
        "./src/mixins/themeable/index.ts");
        /* harmony import */


        var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../../mixins/toggleable */
        "./src/mixins/toggleable/index.ts");
        /* harmony import */


        var _util_mixins__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ../../util/mixins */
        "./src/util/mixins.ts");
        /* harmony import */


        var _util_console__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../../util/console */
        "./src/util/console.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Styles
        // Mixins
        // Utilities

        /* harmony default export */


        __webpack_exports__["default"] = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_mixins_applicationable__WEBPACK_IMPORTED_MODULE_1__["default"])('bottom', ['height', 'inputValue']), _mixins_colorable__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_measurable__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_mixins_toggleable__WEBPACK_IMPORTED_MODULE_8__["factory"])('inputValue'), _mixins_proxyable__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_scrollable__WEBPACK_IMPORTED_MODULE_6__["default"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_7__["default"]
        /* @vue/component */
        ).extend({
          name: 'v-bottom-navigation',
          props: {
            activeClass: {
              type: String,
              default: 'v-btn--active'
            },
            backgroundColor: String,
            grow: Boolean,
            height: {
              type: [Number, String],
              default: 56
            },
            hideOnScroll: Boolean,
            horizontal: Boolean,
            inputValue: {
              type: Boolean,
              default: true
            },
            mandatory: Boolean,
            shift: Boolean,
            tag: {
              type: String,
              default: 'div'
            }
          },
          data: function data() {
            return {
              isActive: this.inputValue
            };
          },
          computed: {
            canScroll: function canScroll() {
              return _mixins_scrollable__WEBPACK_IMPORTED_MODULE_6__["default"].options.computed.canScroll.call(this) && (this.hideOnScroll || !this.inputValue);
            },
            classes: function classes() {
              return {
                'v-bottom-navigation--absolute': this.absolute,
                'v-bottom-navigation--grow': this.grow,
                'v-bottom-navigation--fixed': !this.absolute && (this.app || this.fixed),
                'v-bottom-navigation--horizontal': this.horizontal,
                'v-bottom-navigation--shift': this.shift
              };
            },
            styles: function styles() {
              return __assign(__assign({}, this.measurableStyles), {
                transform: this.isActive ? 'none' : 'translateY(100%)'
              });
            }
          },
          watch: {
            canScroll: 'onScroll'
          },
          created: function created() {
            /* istanbul ignore next */
            if (this.$attrs.hasOwnProperty('active')) {
              Object(_util_console__WEBPACK_IMPORTED_MODULE_10__["breaking"])('active.sync', 'value or v-model', this);
            }
          },
          methods: {
            thresholdMet: function thresholdMet() {
              if (this.hideOnScroll) {
                this.isActive = !this.isScrollingUp || this.currentScroll > this.computedScrollThreshold;
                this.$emit('update:input-value', this.isActive);
              }

              if (this.currentThreshold < this.computedScrollThreshold) return;
              this.savedScroll = this.currentScroll;
            },
            updateApplication: function updateApplication() {
              return this.$el ? this.$el.clientHeight : 0;
            },
            updateValue: function updateValue(val) {
              this.$emit('change', val);
            }
          },
          render: function render(h) {
            var data = this.setBackgroundColor(this.backgroundColor, {
              staticClass: 'v-bottom-navigation',
              class: this.classes,
              style: this.styles,
              props: {
                activeClass: this.activeClass,
                mandatory: Boolean(this.mandatory || this.value !== undefined),
                tag: this.tag,
                value: this.internalValue
              },
              on: {
                change: this.updateValue
              }
            });

            if (this.canScroll) {
              data.directives = data.directives || [];
              data.directives.push({
                arg: this.scrollTarget,
                name: 'scroll',
                value: this.onScroll
              });
            }

            return h(_mixins_button_group__WEBPACK_IMPORTED_MODULE_2__["default"], this.setTextColor(this.color, data), this.$slots.default);
          }
        });
        /***/
      },

      /***/
      "./src/components/VBottomNavigation/index.ts":
      /*!***************************************************!*\
        !*** ./src/components/VBottomNavigation/index.ts ***!
        \***************************************************/

      /*! exports provided: VBottomNavigation, default */

      /***/
      function srcComponentsVBottomNavigationIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VBottomNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VBottomNavigation */
        "./src/components/VBottomNavigation/VBottomNavigation.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VBottomNavigation", function () {
          return _VBottomNavigation__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = _VBottomNavigation__WEBPACK_IMPORTED_MODULE_0__["default"];
        /***/
      },

      /***/
      "./src/components/VBottomSheet/VBottomSheet.sass":
      /*!*******************************************************!*\
        !*** ./src/components/VBottomSheet/VBottomSheet.sass ***!
        \*******************************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVBottomSheetVBottomSheetSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VBottomSheet/VBottomSheet.ts":
      /*!*****************************************************!*\
        !*** ./src/components/VBottomSheet/VBottomSheet.ts ***!
        \*****************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVBottomSheetVBottomSheetTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VBottomSheet_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VBottomSheet.sass */
        "./src/components/VBottomSheet/VBottomSheet.sass");
        /* harmony import */


        var _VBottomSheet_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VBottomSheet_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _VDialog_VDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../VDialog/VDialog */
        "./src/components/VDialog/VDialog.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Extensions

        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = _VDialog_VDialog__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
          name: 'v-bottom-sheet',
          props: {
            inset: Boolean,
            maxWidth: [String, Number],
            transition: {
              type: String,
              default: 'bottom-sheet-transition'
            }
          },
          computed: {
            classes: function classes() {
              return __assign(__assign({}, _VDialog_VDialog__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.classes.call(this)), {
                'v-bottom-sheet': true,
                'v-bottom-sheet--inset': this.inset
              });
            }
          }
        });
        /***/
      },

      /***/
      "./src/components/VBottomSheet/index.ts":
      /*!**********************************************!*\
        !*** ./src/components/VBottomSheet/index.ts ***!
        \**********************************************/

      /*! exports provided: VBottomSheet, default */

      /***/
      function srcComponentsVBottomSheetIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VBottomSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VBottomSheet */
        "./src/components/VBottomSheet/VBottomSheet.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VBottomSheet", function () {
          return _VBottomSheet__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = _VBottomSheet__WEBPACK_IMPORTED_MODULE_0__["default"];
        /***/
      },

      /***/
      "./src/components/VBreadcrumbs/VBreadcrumbs.sass":
      /*!*******************************************************!*\
        !*** ./src/components/VBreadcrumbs/VBreadcrumbs.sass ***!
        \*******************************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVBreadcrumbsVBreadcrumbsSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VBreadcrumbs/VBreadcrumbs.ts":
      /*!*****************************************************!*\
        !*** ./src/components/VBreadcrumbs/VBreadcrumbs.ts ***!
        \*****************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVBreadcrumbsVBreadcrumbsTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VBreadcrumbs_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VBreadcrumbs.sass */
        "./src/components/VBreadcrumbs/VBreadcrumbs.sass");
        /* harmony import */


        var _VBreadcrumbs_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VBreadcrumbs_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _VBreadcrumbsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./VBreadcrumbsItem */
        "./src/components/VBreadcrumbs/VBreadcrumbsItem.ts");
        /* harmony import */


        var _VBreadcrumbsDivider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./VBreadcrumbsDivider */
        "./src/components/VBreadcrumbs/VBreadcrumbsDivider.ts");
        /* harmony import */


        var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../mixins/themeable */
        "./src/mixins/themeable/index.ts");
        /* harmony import */


        var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../util/mixins */
        "./src/util/mixins.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Styles
        // Components
        // Mixins
        // Utils

        /* harmony default export */


        __webpack_exports__["default"] = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__["default"])(_mixins_themeable__WEBPACK_IMPORTED_MODULE_3__["default"]
        /* @vue/component */
        ).extend({
          name: 'v-breadcrumbs',
          props: {
            divider: {
              type: String,
              default: '/'
            },
            items: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            large: Boolean
          },
          computed: {
            classes: function classes() {
              return __assign({
                'v-breadcrumbs--large': this.large
              }, this.themeClasses);
            }
          },
          methods: {
            genDivider: function genDivider() {
              return this.$createElement(_VBreadcrumbsDivider__WEBPACK_IMPORTED_MODULE_2__["default"], this.$slots.divider ? this.$slots.divider : this.divider);
            },
            genItems: function genItems() {
              var items = [];
              var hasSlot = !!this.$scopedSlots.item;
              var keys = [];

              for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                keys.push(item.text);
                if (hasSlot) items.push(this.$scopedSlots.item({
                  item: item
                }));else items.push(this.$createElement(_VBreadcrumbsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  key: keys.join('.'),
                  props: item
                }, [item.text]));
                if (i < this.items.length - 1) items.push(this.genDivider());
              }

              return items;
            }
          },
          render: function render(h) {
            var children = this.$slots.default || this.genItems();
            return h('ul', {
              staticClass: 'v-breadcrumbs',
              class: this.classes
            }, children);
          }
        });
        /***/
      },

      /***/
      "./src/components/VBreadcrumbs/VBreadcrumbsDivider.ts":
      /*!************************************************************!*\
        !*** ./src/components/VBreadcrumbs/VBreadcrumbsDivider.ts ***!
        \************************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVBreadcrumbsVBreadcrumbsDividerTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../../util/helpers */
        "./src/util/helpers.ts");
        /* harmony default export */


        __webpack_exports__["default"] = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__["createSimpleFunctional"])('v-breadcrumbs__divider', 'li');
        /***/
      },

      /***/
      "./src/components/VBreadcrumbs/VBreadcrumbsItem.ts":
      /*!*********************************************************!*\
        !*** ./src/components/VBreadcrumbs/VBreadcrumbsItem.ts ***!
        \*********************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVBreadcrumbsVBreadcrumbsItemTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _mixins_routable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../../mixins/routable */
        "./src/mixins/routable/index.ts");
        /* harmony import */


        var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../util/mixins */
        "./src/util/mixins.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        };
        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_mixins_routable__WEBPACK_IMPORTED_MODULE_0__["default"]).extend({
          name: 'v-breadcrumbs-item',
          props: {
            // In a breadcrumb, the currently
            // active item should be dimmed
            activeClass: {
              type: String,
              default: 'v-breadcrumbs__item--disabled'
            },
            ripple: {
              type: [Boolean, Object],
              default: false
            }
          },
          computed: {
            classes: function classes() {
              var _a;

              return _a = {
                'v-breadcrumbs__item': true
              }, _a[this.activeClass] = this.disabled, _a;
            }
          },
          render: function render(h) {
            var _a = this.generateRouteLink(),
                tag = _a.tag,
                data = _a.data;

            return h('li', [h(tag, __assign(__assign({}, data), {
              attrs: __assign(__assign({}, data.attrs), {
                'aria-current': this.isActive && this.isLink ? 'page' : undefined
              })
            }), this.$slots.default)]);
          }
        });
        /***/
      },

      /***/
      "./src/components/VBreadcrumbs/index.ts":
      /*!**********************************************!*\
        !*** ./src/components/VBreadcrumbs/index.ts ***!
        \**********************************************/

      /*! exports provided: VBreadcrumbs, VBreadcrumbsItem, VBreadcrumbsDivider, default */

      /***/
      function srcComponentsVBreadcrumbsIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VBreadcrumbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VBreadcrumbs */
        "./src/components/VBreadcrumbs/VBreadcrumbs.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VBreadcrumbs", function () {
          return _VBreadcrumbs__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony import */


        var _VBreadcrumbsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./VBreadcrumbsItem */
        "./src/components/VBreadcrumbs/VBreadcrumbsItem.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VBreadcrumbsItem", function () {
          return _VBreadcrumbsItem__WEBPACK_IMPORTED_MODULE_1__["default"];
        });
        /* harmony import */


        var _VBreadcrumbsDivider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./VBreadcrumbsDivider */
        "./src/components/VBreadcrumbs/VBreadcrumbsDivider.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VBreadcrumbsDivider", function () {
          return _VBreadcrumbsDivider__WEBPACK_IMPORTED_MODULE_2__["default"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = {
          $_vuetify_subcomponents: {
            VBreadcrumbs: _VBreadcrumbs__WEBPACK_IMPORTED_MODULE_0__["default"],
            VBreadcrumbsItem: _VBreadcrumbsItem__WEBPACK_IMPORTED_MODULE_1__["default"],
            VBreadcrumbsDivider: _VBreadcrumbsDivider__WEBPACK_IMPORTED_MODULE_2__["default"]
          }
        };
        /***/
      },

      /***/
      "./src/components/VBtn/VBtn.sass":
      /*!***************************************!*\
        !*** ./src/components/VBtn/VBtn.sass ***!
        \***************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVBtnVBtnSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VBtn/VBtn.ts":
      /*!*************************************!*\
        !*** ./src/components/VBtn/VBtn.ts ***!
        \*************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVBtnVBtnTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VBtn_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VBtn.sass */
        "./src/components/VBtn/VBtn.sass");
        /* harmony import */


        var _VBtn_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VBtn_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../VSheet */
        "./src/components/VSheet/index.ts");
        /* harmony import */


        var _VProgressCircular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../VProgressCircular */
        "./src/components/VProgressCircular/index.ts");
        /* harmony import */


        var _mixins_groupable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../mixins/groupable */
        "./src/mixins/groupable/index.ts");
        /* harmony import */


        var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../mixins/toggleable */
        "./src/mixins/toggleable/index.ts");
        /* harmony import */


        var _mixins_elevatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../../mixins/elevatable */
        "./src/mixins/elevatable/index.ts");
        /* harmony import */


        var _mixins_positionable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../mixins/positionable */
        "./src/mixins/positionable/index.ts");
        /* harmony import */


        var _mixins_routable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../mixins/routable */
        "./src/mixins/routable/index.ts");
        /* harmony import */


        var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../../mixins/sizeable */
        "./src/mixins/sizeable/index.ts");
        /* harmony import */


        var _util_mixins__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ../../util/mixins */
        "./src/util/mixins.ts");
        /* harmony import */


        var _util_console__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../../util/console */
        "./src/util/console.ts");

        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        };

        var __read = undefined && undefined.__read || function (o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
              r,
              ar = [],
              e;

          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
              ar.push(r.value);
            }
          } catch (error) {
            e = {
              error: error
            };
          } finally {
            try {
              if (r && !r.done && (m = i["return"])) m.call(i);
            } finally {
              if (e) throw e.error;
            }
          }

          return ar;
        }; // Styles
        // Extensions
        // Components
        // Mixins
        // Utilities


        var baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_9__["default"])(_VSheet__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_routable__WEBPACK_IMPORTED_MODULE_7__["default"], _mixins_positionable__WEBPACK_IMPORTED_MODULE_6__["default"], _mixins_sizeable__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_3__["factory"])('btnToggle'), Object(_mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__["factory"])('inputValue')
        /* @vue/component */
        );
        /* harmony default export */

        __webpack_exports__["default"] = baseMixins.extend().extend({
          name: 'v-btn',
          props: {
            activeClass: {
              type: String,
              default: function _default() {
                if (!this.btnToggle) return '';
                return this.btnToggle.activeClass;
              }
            },
            block: Boolean,
            depressed: Boolean,
            fab: Boolean,
            icon: Boolean,
            loading: Boolean,
            outlined: Boolean,
            plain: Boolean,
            retainFocusOnClick: Boolean,
            rounded: Boolean,
            tag: {
              type: String,
              default: 'button'
            },
            text: Boolean,
            tile: Boolean,
            type: {
              type: String,
              default: 'button'
            },
            value: null
          },
          data: function data() {
            return {
              proxyClass: 'v-btn--active'
            };
          },
          computed: {
            classes: function classes() {
              return __assign(__assign(__assign(__assign(__assign(__assign({
                'v-btn': true
              }, _mixins_routable__WEBPACK_IMPORTED_MODULE_7__["default"].options.computed.classes.call(this)), {
                'v-btn--absolute': this.absolute,
                'v-btn--block': this.block,
                'v-btn--bottom': this.bottom,
                'v-btn--disabled': this.disabled,
                'v-btn--is-elevated': this.isElevated,
                'v-btn--fab': this.fab,
                'v-btn--fixed': this.fixed,
                'v-btn--has-bg': this.hasBg,
                'v-btn--icon': this.icon,
                'v-btn--left': this.left,
                'v-btn--loading': this.loading,
                'v-btn--outlined': this.outlined,
                'v-btn--plain': this.plain,
                'v-btn--right': this.right,
                'v-btn--round': this.isRound,
                'v-btn--rounded': this.rounded,
                'v-btn--router': this.to,
                'v-btn--text': this.text,
                'v-btn--tile': this.tile,
                'v-btn--top': this.top
              }), this.themeClasses), this.groupClasses), this.elevationClasses), this.sizeableClasses);
            },
            computedElevation: function computedElevation() {
              if (this.disabled) return undefined;
              return _mixins_elevatable__WEBPACK_IMPORTED_MODULE_5__["default"].options.computed.computedElevation.call(this);
            },
            computedRipple: function computedRipple() {
              var _a;

              var defaultRipple = this.icon || this.fab ? {
                circle: true
              } : true;
              if (this.disabled) return false;else return (_a = this.ripple) !== null && _a !== void 0 ? _a : defaultRipple;
            },
            hasBg: function hasBg() {
              return !this.text && !this.plain && !this.outlined && !this.icon;
            },
            isElevated: function isElevated() {
              return Boolean(!this.icon && !this.text && !this.outlined && !this.depressed && !this.disabled && !this.plain && (this.elevation == null || Number(this.elevation) > 0));
            },
            isRound: function isRound() {
              return Boolean(this.icon || this.fab);
            },
            styles: function styles() {
              return __assign({}, this.measurableStyles);
            }
          },
          created: function created() {
            var _this = this;

            var breakingProps = [['flat', 'text'], ['outline', 'outlined'], ['round', 'rounded']];
            /* istanbul ignore next */

            breakingProps.forEach(function (_a) {
              var _b = __read(_a, 2),
                  original = _b[0],
                  replacement = _b[1];

              if (_this.$attrs.hasOwnProperty(original)) Object(_util_console__WEBPACK_IMPORTED_MODULE_10__["breaking"])(original, replacement, _this);
            });
          },
          methods: {
            click: function click(e) {
              // TODO: Remove this in v3
              !this.retainFocusOnClick && !this.fab && e.detail && this.$el.blur();
              this.$emit('click', e);
              this.btnToggle && this.toggle();
            },
            genContent: function genContent() {
              return this.$createElement('span', {
                staticClass: 'v-btn__content'
              }, this.$slots.default);
            },
            genLoader: function genLoader() {
              return this.$createElement('span', {
                class: 'v-btn__loader'
              }, this.$slots.loader || [this.$createElement(_VProgressCircular__WEBPACK_IMPORTED_MODULE_2__["default"], {
                props: {
                  indeterminate: true,
                  size: 23,
                  width: 2
                }
              })]);
            }
          },
          render: function render(h) {
            var children = [this.genContent(), this.loading && this.genLoader()];

            var _a = this.generateRouteLink(),
                tag = _a.tag,
                data = _a.data;

            var setColor = this.hasBg ? this.setBackgroundColor : this.setTextColor;

            if (tag === 'button') {
              data.attrs.type = this.type;
              data.attrs.disabled = this.disabled;
            }

            data.attrs.value = ['string', 'number'].includes(_typeof(this.value)) ? this.value : JSON.stringify(this.value);
            return h(tag, this.disabled ? data : setColor(this.color, data), children);
          }
        });
        /***/
      },

      /***/
      "./src/components/VBtn/index.ts":
      /*!**************************************!*\
        !*** ./src/components/VBtn/index.ts ***!
        \**************************************/

      /*! exports provided: VBtn, default */

      /***/
      function srcComponentsVBtnIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VBtn */
        "./src/components/VBtn/VBtn.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VBtn", function () {
          return _VBtn__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = _VBtn__WEBPACK_IMPORTED_MODULE_0__["default"];
        /***/
      },

      /***/
      "./src/components/VBtnToggle/VBtnToggle.sass":
      /*!***************************************************!*\
        !*** ./src/components/VBtnToggle/VBtnToggle.sass ***!
        \***************************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVBtnToggleVBtnToggleSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VBtnToggle/VBtnToggle.ts":
      /*!*************************************************!*\
        !*** ./src/components/VBtnToggle/VBtnToggle.ts ***!
        \*************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVBtnToggleVBtnToggleTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VBtnToggle_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VBtnToggle.sass */
        "./src/components/VBtnToggle/VBtnToggle.sass");
        /* harmony import */


        var _VBtnToggle_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VBtnToggle_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _mixins_button_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../mixins/button-group */
        "./src/mixins/button-group/index.ts");
        /* harmony import */


        var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../mixins/colorable */
        "./src/mixins/colorable/index.ts");
        /* harmony import */


        var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../util/mixins */
        "./src/util/mixins.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Styles
        // Mixins
        // Utilities

        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__["default"])(_mixins_button_group__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__["default"]).extend({
          name: 'v-btn-toggle',
          props: {
            backgroundColor: String,
            borderless: Boolean,
            dense: Boolean,
            group: Boolean,
            rounded: Boolean,
            shaped: Boolean,
            tile: Boolean
          },
          computed: {
            classes: function classes() {
              return __assign(__assign(__assign({}, _mixins_button_group__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.classes.call(this)), {
                'v-btn-toggle': true,
                'v-btn-toggle--borderless': this.borderless,
                'v-btn-toggle--dense': this.dense,
                'v-btn-toggle--group': this.group,
                'v-btn-toggle--rounded': this.rounded,
                'v-btn-toggle--shaped': this.shaped,
                'v-btn-toggle--tile': this.tile
              }), this.themeClasses);
            }
          },
          methods: {
            genData: function genData() {
              var data = this.setTextColor(this.color, __assign({}, _mixins_button_group__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.genData.call(this)));
              if (this.group) return data;
              return this.setBackgroundColor(this.backgroundColor, data);
            }
          }
        });
        /***/
      },

      /***/
      "./src/components/VBtnToggle/index.ts":
      /*!********************************************!*\
        !*** ./src/components/VBtnToggle/index.ts ***!
        \********************************************/

      /*! exports provided: VBtnToggle, default */

      /***/
      function srcComponentsVBtnToggleIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VBtnToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VBtnToggle */
        "./src/components/VBtnToggle/VBtnToggle.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VBtnToggle", function () {
          return _VBtnToggle__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = _VBtnToggle__WEBPACK_IMPORTED_MODULE_0__["default"];
        /***/
      },

      /***/
      "./src/components/VCalendar/VCalendar.ts":
      /*!***********************************************!*\
        !*** ./src/components/VCalendar/VCalendar.ts ***!
        \***********************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVCalendarVCalendarTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _mixins_calendar_with_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./mixins/calendar-with-events */
        "./src/components/VCalendar/mixins/calendar-with-events.ts");
        /* harmony import */


        var _util_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./util/props */
        "./src/components/VCalendar/util/props.ts");
        /* harmony import */


        var _util_timestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./util/timestamp */
        "./src/components/VCalendar/util/timestamp.ts");
        /* harmony import */


        var _VCalendarMonthly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./VCalendarMonthly */
        "./src/components/VCalendar/VCalendarMonthly.ts");
        /* harmony import */


        var _VCalendarDaily__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./VCalendarDaily */
        "./src/components/VCalendar/VCalendarDaily.ts");
        /* harmony import */


        var _VCalendarWeekly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./VCalendarWeekly */
        "./src/components/VCalendar/VCalendarWeekly.ts");
        /* harmony import */


        var _VCalendarCategory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./VCalendarCategory */
        "./src/components/VCalendar/VCalendarCategory.ts");
        /* harmony import */


        var _util_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ./util/parser */
        "./src/components/VCalendar/util/parser.ts");

        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        } // Styles
        // import '../../stylus/components/_calendar-daily.styl'


        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Mixins
        // Util
        // Calendars

        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = _mixins_calendar_with_events__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
          name: 'v-calendar',
          props: __assign(__assign(__assign(__assign({}, _util_props__WEBPACK_IMPORTED_MODULE_1__["default"].calendar), _util_props__WEBPACK_IMPORTED_MODULE_1__["default"].weeks), _util_props__WEBPACK_IMPORTED_MODULE_1__["default"].intervals), _util_props__WEBPACK_IMPORTED_MODULE_1__["default"].category),
          data: function data() {
            return {
              lastStart: null,
              lastEnd: null
            };
          },
          computed: {
            parsedValue: function parsedValue() {
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["validateTimestamp"])(this.value) ? Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["parseTimestamp"])(this.value, true) : this.parsedStart || this.times.today;
            },
            parsedCategoryDays: function parsedCategoryDays() {
              return parseInt(this.categoryDays) || 1;
            },
            renderProps: function renderProps() {
              var around = this.parsedValue;
              var component = null;
              var maxDays = this.maxDays;
              var weekdays = this.parsedWeekdays;
              var categories = this.parsedCategories;
              var start = around;
              var end = around;

              switch (this.type) {
                case 'month':
                  component = _VCalendarMonthly__WEBPACK_IMPORTED_MODULE_3__["default"];
                  start = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["getStartOfMonth"])(around);
                  end = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["getEndOfMonth"])(around);
                  break;

                case 'week':
                  component = _VCalendarDaily__WEBPACK_IMPORTED_MODULE_4__["default"];
                  start = this.getStartOfWeek(around);
                  end = this.getEndOfWeek(around);
                  maxDays = 7;
                  break;

                case 'day':
                  component = _VCalendarDaily__WEBPACK_IMPORTED_MODULE_4__["default"];
                  maxDays = 1;
                  weekdays = [start.weekday];
                  break;

                case '4day':
                  component = _VCalendarDaily__WEBPACK_IMPORTED_MODULE_4__["default"];
                  end = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["relativeDays"])(Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["copyTimestamp"])(end), _util_timestamp__WEBPACK_IMPORTED_MODULE_2__["nextDay"], 3);
                  Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["updateFormatted"])(end);
                  maxDays = 4;
                  weekdays = [start.weekday, (start.weekday + 1) % 7, (start.weekday + 2) % 7, (start.weekday + 3) % 7];
                  break;

                case 'custom-weekly':
                  component = _VCalendarWeekly__WEBPACK_IMPORTED_MODULE_5__["default"];
                  start = this.parsedStart || around;
                  end = this.parsedEnd;
                  break;

                case 'custom-daily':
                  component = _VCalendarDaily__WEBPACK_IMPORTED_MODULE_4__["default"];
                  start = this.parsedStart || around;
                  end = this.parsedEnd;
                  break;

                case 'category':
                  var days = this.parsedCategoryDays;
                  component = _VCalendarCategory__WEBPACK_IMPORTED_MODULE_6__["default"];
                  end = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["relativeDays"])(Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["copyTimestamp"])(end), _util_timestamp__WEBPACK_IMPORTED_MODULE_2__["nextDay"], days);
                  Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["updateFormatted"])(end);
                  maxDays = days;
                  weekdays = [];

                  for (var i = 0; i < days; i++) {
                    weekdays.push((start.weekday + i) % 7);
                  }

                  categories = this.getCategoryList(categories);
                  break;

                default:
                  throw new Error(this.type + ' is not a valid Calendar type');
              }

              return {
                component: component,
                start: start,
                end: end,
                maxDays: maxDays,
                weekdays: weekdays,
                categories: categories
              };
            },
            eventWeekdays: function eventWeekdays() {
              return this.renderProps.weekdays;
            },
            categoryMode: function categoryMode() {
              return this.type === 'category';
            },
            title: function title() {
              var _a = this.renderProps,
                  start = _a.start,
                  end = _a.end;
              var spanYears = start.year !== end.year;
              var spanMonths = spanYears || start.month !== end.month;

              if (spanYears) {
                return this.monthShortFormatter(start, true) + ' ' + start.year + ' - ' + this.monthShortFormatter(end, true) + ' ' + end.year;
              }

              if (spanMonths) {
                return this.monthShortFormatter(start, true) + ' - ' + this.monthShortFormatter(end, true) + ' ' + end.year;
              } else {
                return this.monthLongFormatter(start, false) + ' ' + start.year;
              }
            },
            monthLongFormatter: function monthLongFormatter() {
              return this.getFormatter({
                timeZone: 'UTC',
                month: 'long'
              });
            },
            monthShortFormatter: function monthShortFormatter() {
              return this.getFormatter({
                timeZone: 'UTC',
                month: 'short'
              });
            },
            parsedCategories: function parsedCategories() {
              return Object(_util_parser__WEBPACK_IMPORTED_MODULE_7__["getParsedCategories"])(this.categories, this.categoryText);
            }
          },
          watch: {
            renderProps: 'checkChange'
          },
          mounted: function mounted() {
            this.updateEventVisibility();
            this.checkChange();
          },
          updated: function updated() {
            window.requestAnimationFrame(this.updateEventVisibility);
          },
          methods: {
            checkChange: function checkChange() {
              var _a = this,
                  lastStart = _a.lastStart,
                  lastEnd = _a.lastEnd;

              var _b = this.renderProps,
                  start = _b.start,
                  end = _b.end;

              if (!lastStart || !lastEnd || start.date !== lastStart.date || end.date !== lastEnd.date) {
                this.lastStart = start;
                this.lastEnd = end;
                this.$emit('change', {
                  start: start,
                  end: end
                });
              }
            },
            move: function move(amount) {
              if (amount === void 0) {
                amount = 1;
              }

              var moved = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["copyTimestamp"])(this.parsedValue);
              var forward = amount > 0;
              var mover = forward ? _util_timestamp__WEBPACK_IMPORTED_MODULE_2__["nextDay"] : _util_timestamp__WEBPACK_IMPORTED_MODULE_2__["prevDay"];
              var limit = forward ? _util_timestamp__WEBPACK_IMPORTED_MODULE_2__["DAYS_IN_MONTH_MAX"] : _util_timestamp__WEBPACK_IMPORTED_MODULE_2__["DAY_MIN"];
              var times = forward ? amount : -amount;

              while (--times >= 0) {
                switch (this.type) {
                  case 'month':
                    moved.day = limit;
                    mover(moved);
                    break;

                  case 'week':
                    Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["relativeDays"])(moved, mover, _util_timestamp__WEBPACK_IMPORTED_MODULE_2__["DAYS_IN_WEEK"]);
                    break;

                  case 'day':
                    Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["relativeDays"])(moved, mover, 1);
                    break;

                  case '4day':
                    Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["relativeDays"])(moved, mover, 4);
                    break;

                  case 'category':
                    Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["relativeDays"])(moved, mover, this.parsedCategoryDays);
                    break;
                }
              }

              Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["updateWeekday"])(moved);
              Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["updateFormatted"])(moved);
              Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["updateRelative"])(moved, this.times.now);

              if (this.value instanceof Date) {
                this.$emit('input', Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["timestampToDate"])(moved));
              } else if (typeof this.value === 'number') {
                this.$emit('input', Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["timestampToDate"])(moved).getTime());
              } else {
                this.$emit('input', moved.date);
              }

              this.$emit('moved', moved);
            },
            next: function next(amount) {
              if (amount === void 0) {
                amount = 1;
              }

              this.move(amount);
            },
            prev: function prev(amount) {
              if (amount === void 0) {
                amount = 1;
              }

              this.move(-amount);
            },
            timeToY: function timeToY(time, clamp) {
              if (clamp === void 0) {
                clamp = true;
              }

              var c = this.$children[0];

              if (c && c.timeToY) {
                return c.timeToY(time, clamp);
              } else {
                return false;
              }
            },
            timeDelta: function timeDelta(time) {
              var c = this.$children[0];

              if (c && c.timeDelta) {
                return c.timeDelta(time);
              } else {
                return false;
              }
            },
            minutesToPixels: function minutesToPixels(minutes) {
              var c = this.$children[0];

              if (c && c.minutesToPixels) {
                return c.minutesToPixels(minutes);
              } else {
                return -1;
              }
            },
            scrollToTime: function scrollToTime(time) {
              var c = this.$children[0];

              if (c && c.scrollToTime) {
                return c.scrollToTime(time);
              } else {
                return false;
              }
            },
            parseTimestamp: function parseTimestamp(input, required) {
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["parseTimestamp"])(input, required, this.times.now);
            },
            timestampToDate: function timestampToDate(timestamp) {
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["timestampToDate"])(timestamp);
            },
            getCategoryList: function getCategoryList(categories) {
              var _this = this;

              if (!this.noEvents) {
                var categoryMap_1 = categories.reduce(function (map, category, index) {
                  if (_typeof(category) === 'object' && category.categoryName) map[category.categoryName] = {
                    index: index,
                    count: 0
                  };else if (typeof category === 'string') map[category] = {
                    index: index,
                    count: 0
                  };
                  return map;
                }, {});

                if (!this.categoryHideDynamic || !this.categoryShowAll) {
                  var categoryLength_1 = categories.length;
                  this.parsedEvents.forEach(function (ev) {
                    var category = ev.category;

                    if (typeof category !== 'string') {
                      category = _this.categoryForInvalid;
                    }

                    if (!category) {
                      return;
                    }

                    if (category in categoryMap_1) {
                      categoryMap_1[category].count++;
                    } else if (!_this.categoryHideDynamic) {
                      categoryMap_1[category] = {
                        index: categoryLength_1++,
                        count: 1
                      };
                    }
                  });
                }

                if (!this.categoryShowAll) {
                  for (var category in categoryMap_1) {
                    if (categoryMap_1[category].count === 0) {
                      delete categoryMap_1[category];
                    }
                  }
                }

                categories = categories.filter(function (category) {
                  if (_typeof(category) === 'object' && category.categoryName) {
                    return categoryMap_1.hasOwnProperty(category.categoryName);
                  } else if (typeof category === 'string') {
                    return categoryMap_1.hasOwnProperty(category);
                  }

                  return false;
                });
              }

              return categories;
            }
          },
          render: function render(h) {
            var _this = this;

            var _a = this.renderProps,
                start = _a.start,
                end = _a.end,
                maxDays = _a.maxDays,
                component = _a.component,
                weekdays = _a.weekdays,
                categories = _a.categories;
            return h(component, {
              staticClass: 'v-calendar',
              class: {
                'v-calendar-events': !this.noEvents
              },
              props: __assign(__assign({}, this.$props), {
                start: start.date,
                end: end.date,
                maxDays: maxDays,
                weekdays: weekdays,
                categories: categories
              }),
              directives: [{
                modifiers: {
                  quiet: true
                },
                name: 'resize',
                value: this.updateEventVisibility
              }],
              on: __assign(__assign({}, this.$listeners), {
                'click:date': function clickDate(day, e) {
                  if (_this.$listeners.input) {
                    _this.$emit('input', day.date);
                  }

                  if (_this.$listeners['click:date']) {
                    _this.$emit('click:date', day, e);
                  }
                }
              }),
              scopedSlots: this.getScopedSlots()
            });
          }
        });
        /***/
      },

      /***/
      "./src/components/VCalendar/VCalendarCategory.sass":
      /*!*********************************************************!*\
        !*** ./src/components/VCalendar/VCalendarCategory.sass ***!
        \*********************************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVCalendarVCalendarCategorySass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VCalendar/VCalendarCategory.ts":
      /*!*******************************************************!*\
        !*** ./src/components/VCalendar/VCalendarCategory.ts ***!
        \*******************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVCalendarVCalendarCategoryTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VCalendarCategory_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VCalendarCategory.sass */
        "./src/components/VCalendar/VCalendarCategory.sass");
        /* harmony import */


        var _VCalendarCategory_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VCalendarCategory_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _VCalendarDaily__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./VCalendarDaily */
        "./src/components/VCalendar/VCalendarDaily.ts");
        /* harmony import */


        var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../util/helpers */
        "./src/util/helpers.ts");
        /* harmony import */


        var _util_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./util/props */
        "./src/components/VCalendar/util/props.ts");
        /* harmony import */


        var _util_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./util/parser */
        "./src/components/VCalendar/util/parser.ts");

        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        };

        var __read = undefined && undefined.__read || function (o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
              r,
              ar = [],
              e;

          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
              ar.push(r.value);
            }
          } catch (error) {
            e = {
              error: error
            };
          } finally {
            try {
              if (r && !r.done && (m = i["return"])) m.call(i);
            } finally {
              if (e) throw e.error;
            }
          }

          return ar;
        };

        var __spread = undefined && undefined.__spread || function () {
          for (var ar = [], i = 0; i < arguments.length; i++) {
            ar = ar.concat(__read(arguments[i]));
          }

          return ar;
        }; // Styles
        // Mixins
        // Util

        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = _VCalendarDaily__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
          name: 'v-calendar-category',
          props: _util_props__WEBPACK_IMPORTED_MODULE_3__["default"].category,
          computed: {
            classes: function classes() {
              return __assign({
                'v-calendar-daily': true,
                'v-calendar-category': true
              }, this.themeClasses);
            },
            parsedCategories: function parsedCategories() {
              return Object(_util_parser__WEBPACK_IMPORTED_MODULE_4__["getParsedCategories"])(this.categories, this.categoryText);
            }
          },
          methods: {
            genDayHeader: function genDayHeader(day, index) {
              var _this = this;

              var data = {
                staticClass: 'v-calendar-category__columns'
              };

              var scope = __assign(__assign({
                week: this.days
              }, day), {
                index: index
              });

              var children = this.parsedCategories.map(function (category) {
                return _this.genDayHeaderCategory(day, _this.getCategoryScope(scope, category));
              });
              return [this.$createElement('div', data, children)];
            },
            getCategoryScope: function getCategoryScope(scope, category) {
              var cat = _typeof(category) === 'object' && category && category.categoryName === this.categoryForInvalid ? null : category;
              return __assign(__assign({}, scope), {
                category: cat
              });
            },
            genDayHeaderCategory: function genDayHeaderCategory(day, scope) {
              var _this = this;

              var headerTitle = _typeof(scope.category) === 'object' ? scope.category.categoryName : scope.category;
              return this.$createElement('div', {
                staticClass: 'v-calendar-category__column-header',
                on: this.getDefaultMouseEventHandlers(':day-category', function (e) {
                  return _this.getCategoryScope(_this.getSlotScope(day), scope.category);
                })
              }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["getSlot"])(this, 'category', scope) || this.genDayHeaderCategoryTitle(headerTitle), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["getSlot"])(this, 'day-header', scope)]);
            },
            genDayHeaderCategoryTitle: function genDayHeaderCategoryTitle(categoryName) {
              return this.$createElement('div', {
                staticClass: 'v-calendar-category__category'
              }, categoryName === null ? this.categoryForInvalid : categoryName);
            },
            genDays: function genDays() {
              var _this = this;

              var days = [];
              this.days.forEach(function (d, j) {
                var day = new Array(_this.parsedCategories.length || 1);
                day.fill(d);
                days.push.apply(days, __spread(day.map(function (v, i) {
                  return _this.genDay(v, j, i);
                })));
              });
              return days;
            },
            genDay: function genDay(day, index, categoryIndex) {
              var _this = this;

              var category = this.parsedCategories[categoryIndex];
              return this.$createElement('div', {
                key: day.date + '-' + categoryIndex,
                staticClass: 'v-calendar-daily__day',
                class: this.getRelativeClasses(day),
                on: this.getDefaultMouseEventHandlers(':time', function (e) {
                  return _this.getSlotScope(_this.getTimestampAtEvent(e, day));
                })
              }, __spread(this.genDayIntervals(index, category), this.genDayBody(day, category)));
            },
            genDayIntervals: function genDayIntervals(index, category) {
              var _this = this;

              return this.intervals[index].map(function (v) {
                return _this.genDayInterval(v, category);
              });
            },
            genDayInterval: function genDayInterval(interval, category) {
              var _this = this;

              var height = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToUnit"])(this.intervalHeight);
              var styler = this.intervalStyle || this.intervalStyleDefault;
              var data = {
                key: interval.time,
                staticClass: 'v-calendar-daily__day-interval',
                style: __assign({
                  height: height
                }, styler(__assign(__assign({}, interval), {
                  category: category
                })))
              };
              var children = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["getSlot"])(this, 'interval', function () {
                return _this.getCategoryScope(_this.getSlotScope(interval), category);
              });
              return this.$createElement('div', data, children);
            },
            genDayBody: function genDayBody(day, category) {
              var data = {
                staticClass: 'v-calendar-category__columns'
              };
              var children = [this.genDayBodyCategory(day, category)];
              return [this.$createElement('div', data, children)];
            },
            genDayBodyCategory: function genDayBodyCategory(day, category) {
              var _this = this;

              var data = {
                staticClass: 'v-calendar-category__column',
                on: this.getDefaultMouseEventHandlers(':time-category', function (e) {
                  return _this.getCategoryScope(_this.getSlotScope(_this.getTimestampAtEvent(e, day)), category);
                })
              };
              var children = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["getSlot"])(this, 'day-body', function () {
                return _this.getCategoryScope(_this.getSlotScope(day), category);
              });
              return this.$createElement('div', data, children);
            }
          }
        });
        /***/
      },

      /***/
      "./src/components/VCalendar/VCalendarDaily.sass":
      /*!******************************************************!*\
        !*** ./src/components/VCalendar/VCalendarDaily.sass ***!
        \******************************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVCalendarVCalendarDailySass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VCalendar/VCalendarDaily.ts":
      /*!****************************************************!*\
        !*** ./src/components/VCalendar/VCalendarDaily.ts ***!
        \****************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVCalendarVCalendarDailyTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VCalendarDaily_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VCalendarDaily.sass */
        "./src/components/VCalendar/VCalendarDaily.sass");
        /* harmony import */


        var _VCalendarDaily_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VCalendarDaily_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _directives_resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../directives/resize */
        "./src/directives/resize/index.ts");
        /* harmony import */


        var _VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../VBtn */
        "./src/components/VBtn/index.ts");
        /* harmony import */


        var _mixins_calendar_with_intervals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./mixins/calendar-with-intervals */
        "./src/components/VCalendar/mixins/calendar-with-intervals.ts");
        /* harmony import */


        var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../util/helpers */
        "./src/util/helpers.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        };

        var __read = undefined && undefined.__read || function (o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
              r,
              ar = [],
              e;

          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
              ar.push(r.value);
            }
          } catch (error) {
            e = {
              error: error
            };
          } finally {
            try {
              if (r && !r.done && (m = i["return"])) m.call(i);
            } finally {
              if (e) throw e.error;
            }
          }

          return ar;
        };

        var __spread = undefined && undefined.__spread || function () {
          for (var ar = [], i = 0; i < arguments.length; i++) {
            ar = ar.concat(__read(arguments[i]));
          }

          return ar;
        }; // Styles
        // Directives
        // Components
        // Mixins
        // Util

        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = _mixins_calendar_with_intervals__WEBPACK_IMPORTED_MODULE_3__["default"].extend({
          name: 'v-calendar-daily',
          directives: {
            Resize: _directives_resize__WEBPACK_IMPORTED_MODULE_1__["default"]
          },
          data: function data() {
            return {
              scrollPush: 0
            };
          },
          computed: {
            classes: function classes() {
              return __assign({
                'v-calendar-daily': true
              }, this.themeClasses);
            }
          },
          mounted: function mounted() {
            this.init();
          },
          methods: {
            init: function init() {
              this.$nextTick(this.onResize);
            },
            onResize: function onResize() {
              this.scrollPush = this.getScrollPush();
            },
            getScrollPush: function getScrollPush() {
              var area = this.$refs.scrollArea;
              var pane = this.$refs.pane;
              return area && pane ? area.offsetWidth - pane.offsetWidth : 0;
            },
            genHead: function genHead() {
              return this.$createElement('div', {
                staticClass: 'v-calendar-daily__head',
                style: {
                  marginRight: this.scrollPush + 'px'
                }
              }, __spread([this.genHeadIntervals()], this.genHeadDays()));
            },
            genHeadIntervals: function genHeadIntervals() {
              var width = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["convertToUnit"])(this.intervalWidth);
              return this.$createElement('div', {
                staticClass: 'v-calendar-daily__intervals-head',
                style: {
                  width: width
                }
              }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["getSlot"])(this, 'interval-header'));
            },
            genHeadDays: function genHeadDays() {
              return this.days.map(this.genHeadDay);
            },
            genHeadDay: function genHeadDay(day, index) {
              var _this = this;

              return this.$createElement('div', {
                key: day.date,
                staticClass: 'v-calendar-daily_head-day',
                class: this.getRelativeClasses(day),
                on: this.getDefaultMouseEventHandlers(':day', function (nativeEvent) {
                  return __assign({
                    nativeEvent: nativeEvent
                  }, _this.getSlotScope(day));
                })
              }, __spread([this.genHeadWeekday(day), this.genHeadDayLabel(day)], this.genDayHeader(day, index)));
            },
            genDayHeader: function genDayHeader(day, index) {
              var _this = this;

              return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["getSlot"])(this, 'day-header', function () {
                return __assign(__assign({
                  week: _this.days
                }, day), {
                  index: index
                });
              }) || [];
            },
            genHeadWeekday: function genHeadWeekday(day) {
              var color = day.present ? this.color : undefined;
              return this.$createElement('div', this.setTextColor(color, {
                staticClass: 'v-calendar-daily_head-weekday'
              }), this.weekdayFormatter(day, this.shortWeekdays));
            },
            genHeadDayLabel: function genHeadDayLabel(day) {
              return this.$createElement('div', {
                staticClass: 'v-calendar-daily_head-day-label'
              }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["getSlot"])(this, 'day-label-header', day) || [this.genHeadDayButton(day)]);
            },
            genHeadDayButton: function genHeadDayButton(day) {
              var color = day.present ? this.color : 'transparent';
              return this.$createElement(_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
                props: {
                  color: color,
                  fab: true,
                  depressed: true
                },
                on: this.getMouseEventHandlers({
                  'click:date': {
                    event: 'click',
                    stop: true
                  },
                  'contextmenu:date': {
                    event: 'contextmenu',
                    stop: true,
                    prevent: true,
                    result: false
                  }
                }, function (nativeEvent) {
                  return __assign({
                    nativeEvent: nativeEvent
                  }, day);
                })
              }, this.dayFormatter(day, false));
            },
            genBody: function genBody() {
              return this.$createElement('div', {
                staticClass: 'v-calendar-daily__body'
              }, [this.genScrollArea()]);
            },
            genScrollArea: function genScrollArea() {
              return this.$createElement('div', {
                ref: 'scrollArea',
                staticClass: 'v-calendar-daily__scroll-area'
              }, [this.genPane()]);
            },
            genPane: function genPane() {
              return this.$createElement('div', {
                ref: 'pane',
                staticClass: 'v-calendar-daily__pane',
                style: {
                  height: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["convertToUnit"])(this.bodyHeight)
                }
              }, [this.genDayContainer()]);
            },
            genDayContainer: function genDayContainer() {
              return this.$createElement('div', {
                staticClass: 'v-calendar-daily__day-container'
              }, __spread([this.genBodyIntervals()], this.genDays()));
            },
            genDays: function genDays() {
              return this.days.map(this.genDay);
            },
            genDay: function genDay(day, index) {
              var _this = this;

              return this.$createElement('div', {
                key: day.date,
                staticClass: 'v-calendar-daily__day',
                class: this.getRelativeClasses(day),
                on: this.getDefaultMouseEventHandlers(':time', function (nativeEvent) {
                  return __assign({
                    nativeEvent: nativeEvent
                  }, _this.getSlotScope(_this.getTimestampAtEvent(nativeEvent, day)));
                })
              }, __spread(this.genDayIntervals(index), this.genDayBody(day)));
            },
            genDayBody: function genDayBody(day) {
              var _this = this;

              return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["getSlot"])(this, 'day-body', function () {
                return _this.getSlotScope(day);
              }) || [];
            },
            genDayIntervals: function genDayIntervals(index) {
              return this.intervals[index].map(this.genDayInterval);
            },
            genDayInterval: function genDayInterval(interval) {
              var _this = this;

              var height = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["convertToUnit"])(this.intervalHeight);
              var styler = this.intervalStyle || this.intervalStyleDefault;
              var data = {
                key: interval.time,
                staticClass: 'v-calendar-daily__day-interval',
                style: __assign({
                  height: height
                }, styler(interval))
              };
              var children = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["getSlot"])(this, 'interval', function () {
                return _this.getSlotScope(interval);
              });
              return this.$createElement('div', data, children);
            },
            genBodyIntervals: function genBodyIntervals() {
              var _this = this;

              var width = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["convertToUnit"])(this.intervalWidth);
              var data = {
                staticClass: 'v-calendar-daily__intervals-body',
                style: {
                  width: width
                },
                on: this.getDefaultMouseEventHandlers(':interval', function (nativeEvent) {
                  return __assign({
                    nativeEvent: nativeEvent
                  }, _this.getTimestampAtEvent(nativeEvent, _this.parsedStart));
                })
              };
              return this.$createElement('div', data, this.genIntervalLabels());
            },
            genIntervalLabels: function genIntervalLabels() {
              if (!this.intervals.length) return null;
              return this.intervals[0].map(this.genIntervalLabel);
            },
            genIntervalLabel: function genIntervalLabel(interval) {
              var height = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["convertToUnit"])(this.intervalHeight);
              var short = this.shortIntervals;
              var shower = this.showIntervalLabel || this.showIntervalLabelDefault;
              var show = shower(interval);
              var label = show ? this.intervalFormatter(interval, short) : undefined;
              return this.$createElement('div', {
                key: interval.time,
                staticClass: 'v-calendar-daily__interval',
                style: {
                  height: height
                }
              }, [this.$createElement('div', {
                staticClass: 'v-calendar-daily__interval-text'
              }, label)]);
            }
          },
          render: function render(h) {
            return h('div', {
              class: this.classes,
              on: {
                dragstart: function dragstart(e) {
                  e.preventDefault();
                }
              },
              directives: [{
                modifiers: {
                  quiet: true
                },
                name: 'resize',
                value: this.onResize
              }]
            }, [!this.hideHeader ? this.genHead() : '', this.genBody()]);
          }
        });
        /***/
      },

      /***/
      "./src/components/VCalendar/VCalendarMonthly.ts":
      /*!******************************************************!*\
        !*** ./src/components/VCalendar/VCalendarMonthly.ts ***!
        \******************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVCalendarVCalendarMonthlyTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VCalendarWeekly_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VCalendarWeekly.sass */
        "./src/components/VCalendar/VCalendarWeekly.sass");
        /* harmony import */


        var _VCalendarWeekly_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VCalendarWeekly_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _VCalendarWeekly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./VCalendarWeekly */
        "./src/components/VCalendar/VCalendarWeekly.ts");
        /* harmony import */


        var _util_timestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./util/timestamp */
        "./src/components/VCalendar/util/timestamp.ts"); // Styles
        // Mixins
        // Util

        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = _VCalendarWeekly__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
          name: 'v-calendar-monthly',
          computed: {
            staticClass: function staticClass() {
              return 'v-calendar-monthly v-calendar-weekly';
            },
            parsedStart: function parsedStart() {
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["getStartOfMonth"])(Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["parseTimestamp"])(this.start, true));
            },
            parsedEnd: function parsedEnd() {
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["getEndOfMonth"])(Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["parseTimestamp"])(this.end, true));
            }
          }
        });
        /***/
      },

      /***/
      "./src/components/VCalendar/VCalendarWeekly.sass":
      /*!*******************************************************!*\
        !*** ./src/components/VCalendar/VCalendarWeekly.sass ***!
        \*******************************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVCalendarVCalendarWeeklySass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VCalendar/VCalendarWeekly.ts":
      /*!*****************************************************!*\
        !*** ./src/components/VCalendar/VCalendarWeekly.ts ***!
        \*****************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVCalendarVCalendarWeeklyTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VCalendarWeekly_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VCalendarWeekly.sass */
        "./src/components/VCalendar/VCalendarWeekly.sass");
        /* harmony import */


        var _VCalendarWeekly_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VCalendarWeekly_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _VBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../VBtn */
        "./src/components/VBtn/index.ts");
        /* harmony import */


        var _mixins_calendar_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./mixins/calendar-base */
        "./src/components/VCalendar/mixins/calendar-base.ts");
        /* harmony import */


        var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../util/helpers */
        "./src/util/helpers.ts");
        /* harmony import */


        var _util_dateTimeUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../util/dateTimeUtils */
        "./src/util/dateTimeUtils.ts");
        /* harmony import */


        var _util_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./util/props */
        "./src/components/VCalendar/util/props.ts");
        /* harmony import */


        var _util_timestamp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./util/timestamp */
        "./src/components/VCalendar/util/timestamp.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        };

        var __read = undefined && undefined.__read || function (o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
              r,
              ar = [],
              e;

          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
              ar.push(r.value);
            }
          } catch (error) {
            e = {
              error: error
            };
          } finally {
            try {
              if (r && !r.done && (m = i["return"])) m.call(i);
            } finally {
              if (e) throw e.error;
            }
          }

          return ar;
        };

        var __spread = undefined && undefined.__spread || function () {
          for (var ar = [], i = 0; i < arguments.length; i++) {
            ar = ar.concat(__read(arguments[i]));
          }

          return ar;
        }; // Styles
        // Components
        // Mixins
        // Util

        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = _mixins_calendar_base__WEBPACK_IMPORTED_MODULE_2__["default"].extend({
          name: 'v-calendar-weekly',
          props: _util_props__WEBPACK_IMPORTED_MODULE_5__["default"].weeks,
          computed: {
            staticClass: function staticClass() {
              return 'v-calendar-weekly';
            },
            classes: function classes() {
              return this.themeClasses;
            },
            parsedMinWeeks: function parsedMinWeeks() {
              return parseInt(this.minWeeks);
            },
            days: function days() {
              var minDays = this.parsedMinWeeks * this.parsedWeekdays.length;
              var start = this.getStartOfWeek(this.parsedStart);
              var end = this.getEndOfWeek(this.parsedEnd);
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_6__["createDayList"])(start, end, this.times.today, this.weekdaySkips, Number.MAX_SAFE_INTEGER, minDays);
            },
            todayWeek: function todayWeek() {
              var today = this.times.today;
              var start = this.getStartOfWeek(today);
              var end = this.getEndOfWeek(today);
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_6__["createDayList"])(start, end, today, this.weekdaySkips, this.parsedWeekdays.length, this.parsedWeekdays.length);
            },
            monthFormatter: function monthFormatter() {
              if (this.monthFormat) {
                return this.monthFormat;
              }

              var longOptions = {
                timeZone: 'UTC',
                month: 'long'
              };
              var shortOptions = {
                timeZone: 'UTC',
                month: 'short'
              };
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_6__["createNativeLocaleFormatter"])(this.currentLocale, function (_tms, short) {
                return short ? shortOptions : longOptions;
              });
            }
          },
          methods: {
            isOutside: function isOutside(day) {
              var dayIdentifier = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_6__["getDayIdentifier"])(day);
              return dayIdentifier < Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_6__["getDayIdentifier"])(this.parsedStart) || dayIdentifier > Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_6__["getDayIdentifier"])(this.parsedEnd);
            },
            genHead: function genHead() {
              return this.$createElement('div', {
                staticClass: 'v-calendar-weekly__head'
              }, this.genHeadDays());
            },
            genHeadDays: function genHeadDays() {
              var header = this.todayWeek.map(this.genHeadDay);

              if (this.showWeek) {
                header.unshift(this.$createElement('div', {
                  staticClass: 'v-calendar-weekly__head-weeknumber'
                }));
              }

              return header;
            },
            genHeadDay: function genHeadDay(day, index) {
              var outside = this.isOutside(this.days[index]);
              var color = day.present ? this.color : undefined;
              return this.$createElement('div', this.setTextColor(color, {
                key: day.date,
                staticClass: 'v-calendar-weekly__head-weekday',
                class: this.getRelativeClasses(day, outside)
              }), this.weekdayFormatter(day, this.shortWeekdays));
            },
            genWeeks: function genWeeks() {
              var days = this.days;
              var weekDays = this.parsedWeekdays.length;
              var weeks = [];

              for (var i = 0; i < days.length; i += weekDays) {
                weeks.push(this.genWeek(days.slice(i, i + weekDays), this.getWeekNumber(days[i])));
              }

              return weeks;
            },
            genWeek: function genWeek(week, weekNumber) {
              var _this = this;

              var weekNodes = week.map(function (day, index) {
                return _this.genDay(day, index, week);
              });

              if (this.showWeek) {
                weekNodes.unshift(this.genWeekNumber(weekNumber));
              }

              return this.$createElement('div', {
                key: week[0].date,
                staticClass: 'v-calendar-weekly__week'
              }, weekNodes);
            },
            getWeekNumber: function getWeekNumber(determineDay) {
              return Object(_util_dateTimeUtils__WEBPACK_IMPORTED_MODULE_4__["weekNumber"])(determineDay.year, determineDay.month - 1, determineDay.day, this.parsedWeekdays[0], parseInt(this.localeFirstDayOfYear));
            },
            genWeekNumber: function genWeekNumber(weekNumber) {
              return this.$createElement('div', {
                staticClass: 'v-calendar-weekly__weeknumber'
              }, [this.$createElement('small', String(weekNumber))]);
            },
            genDay: function genDay(day, index, week) {
              var outside = this.isOutside(day);
              return this.$createElement('div', {
                key: day.date,
                staticClass: 'v-calendar-weekly__day',
                class: this.getRelativeClasses(day, outside),
                on: this.getDefaultMouseEventHandlers(':day', function (nativeEvent) {
                  return __assign({
                    nativeEvent: nativeEvent
                  }, day);
                })
              }, __spread([this.genDayLabel(day)], Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["getSlot"])(this, 'day', function () {
                return __assign({
                  outside: outside,
                  index: index,
                  week: week
                }, day);
              }) || []));
            },
            genDayLabel: function genDayLabel(day) {
              return this.$createElement('div', {
                staticClass: 'v-calendar-weekly__day-label'
              }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["getSlot"])(this, 'day-label', day) || [this.genDayLabelButton(day)]);
            },
            genDayLabelButton: function genDayLabelButton(day) {
              var color = day.present ? this.color : 'transparent';
              var hasMonth = day.day === 1 && this.showMonthOnFirst;
              return this.$createElement(_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
                props: {
                  color: color,
                  fab: true,
                  depressed: true,
                  small: true
                },
                on: this.getMouseEventHandlers({
                  'click:date': {
                    event: 'click',
                    stop: true
                  },
                  'contextmenu:date': {
                    event: 'contextmenu',
                    stop: true,
                    prevent: true,
                    result: false
                  }
                }, function (nativeEvent) {
                  return __assign({
                    nativeEvent: nativeEvent
                  }, day);
                })
              }, hasMonth ? this.monthFormatter(day, this.shortMonths) + ' ' + this.dayFormatter(day, false) : this.dayFormatter(day, false));
            },
            genDayMonth: function genDayMonth(day) {
              var color = day.present ? this.color : undefined;
              return this.$createElement('div', this.setTextColor(color, {
                staticClass: 'v-calendar-weekly__day-month'
              }), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["getSlot"])(this, 'day-month', day) || this.monthFormatter(day, this.shortMonths));
            }
          },
          render: function render(h) {
            return h('div', {
              staticClass: this.staticClass,
              class: this.classes,
              on: {
                dragstart: function dragstart(e) {
                  e.preventDefault();
                }
              }
            }, __spread([!this.hideHeader ? this.genHead() : ''], this.genWeeks()));
          }
        });
        /***/
      },

      /***/
      "./src/components/VCalendar/index.ts":
      /*!*******************************************!*\
        !*** ./src/components/VCalendar/index.ts ***!
        \*******************************************/

      /*! exports provided: VCalendar, VCalendarCategory, VCalendarDaily, VCalendarWeekly, VCalendarMonthly, default */

      /***/
      function srcComponentsVCalendarIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VCalendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VCalendar */
        "./src/components/VCalendar/VCalendar.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VCalendar", function () {
          return _VCalendar__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony import */


        var _VCalendarDaily__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./VCalendarDaily */
        "./src/components/VCalendar/VCalendarDaily.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VCalendarDaily", function () {
          return _VCalendarDaily__WEBPACK_IMPORTED_MODULE_1__["default"];
        });
        /* harmony import */


        var _VCalendarWeekly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./VCalendarWeekly */
        "./src/components/VCalendar/VCalendarWeekly.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VCalendarWeekly", function () {
          return _VCalendarWeekly__WEBPACK_IMPORTED_MODULE_2__["default"];
        });
        /* harmony import */


        var _VCalendarMonthly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./VCalendarMonthly */
        "./src/components/VCalendar/VCalendarMonthly.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VCalendarMonthly", function () {
          return _VCalendarMonthly__WEBPACK_IMPORTED_MODULE_3__["default"];
        });
        /* harmony import */


        var _VCalendarCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./VCalendarCategory */
        "./src/components/VCalendar/VCalendarCategory.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VCalendarCategory", function () {
          return _VCalendarCategory__WEBPACK_IMPORTED_MODULE_4__["default"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = {
          $_vuetify_subcomponents: {
            VCalendar: _VCalendar__WEBPACK_IMPORTED_MODULE_0__["default"],
            VCalendarCategory: _VCalendarCategory__WEBPACK_IMPORTED_MODULE_4__["default"],
            VCalendarDaily: _VCalendarDaily__WEBPACK_IMPORTED_MODULE_1__["default"],
            VCalendarWeekly: _VCalendarWeekly__WEBPACK_IMPORTED_MODULE_2__["default"],
            VCalendarMonthly: _VCalendarMonthly__WEBPACK_IMPORTED_MODULE_3__["default"]
          }
        };
        /***/
      },

      /***/
      "./src/components/VCalendar/mixins/calendar-base.ts":
      /*!**********************************************************!*\
        !*** ./src/components/VCalendar/mixins/calendar-base.ts ***!
        \**********************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVCalendarMixinsCalendarBaseTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../../../util/mixins */
        "./src/util/mixins.ts");
        /* harmony import */


        var _mixins_colorable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../../mixins/colorable */
        "./src/mixins/colorable/index.ts");
        /* harmony import */


        var _mixins_localable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../../mixins/localable */
        "./src/mixins/localable/index.ts");
        /* harmony import */


        var _mouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./mouse */
        "./src/components/VCalendar/mixins/mouse.ts");
        /* harmony import */


        var _mixins_themeable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../../mixins/themeable */
        "./src/mixins/themeable/index.ts");
        /* harmony import */


        var _times__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./times */
        "./src/components/VCalendar/mixins/times.ts");
        /* harmony import */


        var _directives_resize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../../directives/resize */
        "./src/directives/resize/index.ts");
        /* harmony import */


        var _util_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../util/props */
        "./src/components/VCalendar/util/props.ts");
        /* harmony import */


        var _util_timestamp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../util/timestamp */
        "./src/components/VCalendar/util/timestamp.ts"); // Mixins
        // Directives
        // Util

        /* harmony default export */


        __webpack_exports__["default"] = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_0__["default"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_localable__WEBPACK_IMPORTED_MODULE_2__["default"], _mouse__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_4__["default"], _times__WEBPACK_IMPORTED_MODULE_5__["default"]
        /* @vue/component */
        ).extend({
          name: 'calendar-base',
          directives: {
            Resize: _directives_resize__WEBPACK_IMPORTED_MODULE_6__["default"]
          },
          props: _util_props__WEBPACK_IMPORTED_MODULE_7__["default"].base,
          computed: {
            parsedWeekdays: function parsedWeekdays() {
              return Array.isArray(this.weekdays) ? this.weekdays : (this.weekdays || '').split(',').map(function (x) {
                return parseInt(x, 10);
              });
            },
            weekdaySkips: function weekdaySkips() {
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_8__["getWeekdaySkips"])(this.parsedWeekdays);
            },
            weekdaySkipsReverse: function weekdaySkipsReverse() {
              var reversed = this.weekdaySkips.slice();
              reversed.reverse();
              return reversed;
            },
            parsedStart: function parsedStart() {
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_8__["parseTimestamp"])(this.start, true);
            },
            parsedEnd: function parsedEnd() {
              var start = this.parsedStart;
              var end = this.end ? Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_8__["parseTimestamp"])(this.end) || start : start;
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_8__["getTimestampIdentifier"])(end) < Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_8__["getTimestampIdentifier"])(start) ? start : end;
            },
            days: function days() {
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_8__["createDayList"])(this.parsedStart, this.parsedEnd, this.times.today, this.weekdaySkips);
            },
            dayFormatter: function dayFormatter() {
              if (this.dayFormat) {
                return this.dayFormat;
              }

              var options = {
                timeZone: 'UTC',
                day: 'numeric'
              };
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_8__["createNativeLocaleFormatter"])(this.currentLocale, function (_tms, _short) {
                return options;
              });
            },
            weekdayFormatter: function weekdayFormatter() {
              if (this.weekdayFormat) {
                return this.weekdayFormat;
              }

              var longOptions = {
                timeZone: 'UTC',
                weekday: 'long'
              };
              var shortOptions = {
                timeZone: 'UTC',
                weekday: 'short'
              };
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_8__["createNativeLocaleFormatter"])(this.currentLocale, function (_tms, short) {
                return short ? shortOptions : longOptions;
              });
            }
          },
          methods: {
            getRelativeClasses: function getRelativeClasses(timestamp, outside) {
              if (outside === void 0) {
                outside = false;
              }

              return {
                'v-present': timestamp.present,
                'v-past': timestamp.past,
                'v-future': timestamp.future,
                'v-outside': outside
              };
            },
            getStartOfWeek: function getStartOfWeek(timestamp) {
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_8__["getStartOfWeek"])(timestamp, this.parsedWeekdays, this.times.today);
            },
            getEndOfWeek: function getEndOfWeek(timestamp) {
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_8__["getEndOfWeek"])(timestamp, this.parsedWeekdays, this.times.today);
            },
            getFormatter: function getFormatter(options) {
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_8__["createNativeLocaleFormatter"])(this.locale, function (_tms, _short) {
                return options;
              });
            }
          }
        });
        /***/
      },

      /***/
      "./src/components/VCalendar/mixins/calendar-with-events.sass":
      /*!*******************************************************************!*\
        !*** ./src/components/VCalendar/mixins/calendar-with-events.sass ***!
        \*******************************************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVCalendarMixinsCalendarWithEventsSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VCalendar/mixins/calendar-with-events.ts":
      /*!*****************************************************************!*\
        !*** ./src/components/VCalendar/mixins/calendar-with-events.ts ***!
        \*****************************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVCalendarMixinsCalendarWithEventsTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _calendar_with_events_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./calendar-with-events.sass */
        "./src/components/VCalendar/mixins/calendar-with-events.sass");
        /* harmony import */


        var _calendar_with_events_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_calendar_with_events_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _directives_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../../directives/ripple */
        "./src/directives/ripple/index.ts");
        /* harmony import */


        var _calendar_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./calendar-base */
        "./src/components/VCalendar/mixins/calendar-base.ts");
        /* harmony import */


        var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../../util/helpers */
        "./src/util/helpers.ts");
        /* harmony import */


        var _util_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../util/props */
        "./src/components/VCalendar/util/props.ts");
        /* harmony import */


        var _modes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../modes */
        "./src/components/VCalendar/modes/index.ts");
        /* harmony import */


        var _util_timestamp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../util/timestamp */
        "./src/components/VCalendar/util/timestamp.ts");
        /* harmony import */


        var _util_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../util/events */
        "./src/components/VCalendar/util/events.ts");

        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Styles
        // Directives
        // Mixins
        // Helpers
        // Util


        var WIDTH_FULL = 100;
        var WIDTH_START = 95;
        var MINUTES_IN_DAY = 1440;
        /* @vue/component */

        /* harmony default export */

        __webpack_exports__["default"] = _calendar_base__WEBPACK_IMPORTED_MODULE_2__["default"].extend({
          name: 'calendar-with-events',
          directives: {
            ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_1__["default"]
          },
          props: __assign(__assign(__assign({}, _util_props__WEBPACK_IMPORTED_MODULE_4__["default"].events), _util_props__WEBPACK_IMPORTED_MODULE_4__["default"].calendar), _util_props__WEBPACK_IMPORTED_MODULE_4__["default"].category),
          computed: {
            noEvents: function noEvents() {
              return this.events.length === 0;
            },
            parsedEvents: function parsedEvents() {
              return this.events.map(this.parseEvent);
            },
            parsedEventOverlapThreshold: function parsedEventOverlapThreshold() {
              return parseInt(this.eventOverlapThreshold);
            },
            eventTimedFunction: function eventTimedFunction() {
              var _this = this;

              return typeof this.eventTimed === 'function' ? this.eventTimed : function (event) {
                return !!event[_this.eventTimed];
              };
            },
            eventCategoryFunction: function eventCategoryFunction() {
              var _this = this;

              return typeof this.eventCategory === 'function' ? this.eventCategory : function (event) {
                return event[_this.eventCategory];
              };
            },
            eventTextColorFunction: function eventTextColorFunction() {
              var _this = this;

              return typeof this.eventTextColor === 'function' ? this.eventTextColor : function () {
                return _this.eventTextColor;
              };
            },
            eventNameFunction: function eventNameFunction() {
              var _this = this;

              return typeof this.eventName === 'function' ? this.eventName : function (event, timedEvent) {
                return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["escapeHTML"])(event.input[_this.eventName] || '');
              };
            },
            eventModeFunction: function eventModeFunction() {
              return typeof this.eventOverlapMode === 'function' ? this.eventOverlapMode : _modes__WEBPACK_IMPORTED_MODULE_5__["CalendarEventOverlapModes"][this.eventOverlapMode];
            },
            eventWeekdays: function eventWeekdays() {
              return this.parsedWeekdays;
            },
            categoryMode: function categoryMode() {
              return this.type === 'category';
            }
          },
          methods: {
            eventColorFunction: function eventColorFunction(e) {
              return typeof this.eventColor === 'function' ? this.eventColor(e) : e.color || this.eventColor;
            },
            parseEvent: function parseEvent(input, index) {
              if (index === void 0) {
                index = 0;
              }

              return Object(_util_events__WEBPACK_IMPORTED_MODULE_7__["parseEvent"])(input, index, this.eventStart, this.eventEnd, this.eventTimedFunction(input), this.categoryMode ? this.eventCategoryFunction(input) : false);
            },
            formatTime: function formatTime(withTime, ampm) {
              var formatter = this.getFormatter({
                timeZone: 'UTC',
                hour: 'numeric',
                minute: withTime.minute > 0 ? 'numeric' : undefined
              });
              return formatter(withTime, true);
            },
            updateEventVisibility: function updateEventVisibility() {
              if (this.noEvents || !this.eventMore) {
                return;
              }

              var eventHeight = this.eventHeight;
              var eventsMap = this.getEventsMap();

              for (var date in eventsMap) {
                var _a = eventsMap[date],
                    parent = _a.parent,
                    events = _a.events,
                    more = _a.more;

                if (!more) {
                  break;
                }

                var parentBounds = parent.getBoundingClientRect();
                var last = events.length - 1;
                var eventsSorted = events.map(function (event) {
                  return {
                    event: event,
                    bottom: event.getBoundingClientRect().bottom
                  };
                }).sort(function (a, b) {
                  return a.bottom - b.bottom;
                });
                var hidden = 0;

                for (var i = 0; i <= last; i++) {
                  var bottom = eventsSorted[i].bottom;
                  var hide = i === last ? bottom > parentBounds.bottom : bottom + eventHeight > parentBounds.bottom;

                  if (hide) {
                    eventsSorted[i].event.style.display = 'none';
                    hidden++;
                  }
                }

                if (hidden) {
                  more.style.display = '';
                  more.innerHTML = this.$vuetify.lang.t(this.eventMoreText, hidden);
                } else {
                  more.style.display = 'none';
                }
              }
            },
            getEventsMap: function getEventsMap() {
              var eventsMap = {};
              var elements = this.$refs.events;

              if (!elements || !elements.forEach) {
                return eventsMap;
              }

              elements.forEach(function (el) {
                var date = el.getAttribute('data-date');

                if (el.parentElement && date) {
                  if (!(date in eventsMap)) {
                    eventsMap[date] = {
                      parent: el.parentElement,
                      more: null,
                      events: []
                    };
                  }

                  if (el.getAttribute('data-more')) {
                    eventsMap[date].more = el;
                  } else {
                    eventsMap[date].events.push(el);
                    el.style.display = '';
                  }
                }
              });
              return eventsMap;
            },
            genDayEvent: function genDayEvent(_a, day) {
              var event = _a.event;
              var eventHeight = this.eventHeight;
              var eventMarginBottom = this.eventMarginBottom;
              var dayIdentifier = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_6__["getDayIdentifier"])(day);
              var week = day.week;
              var start = dayIdentifier === event.startIdentifier;
              var end = dayIdentifier === event.endIdentifier;
              var width = WIDTH_START;

              if (!this.categoryMode) {
                for (var i = day.index + 1; i < week.length; i++) {
                  var weekdayIdentifier = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_6__["getDayIdentifier"])(week[i]);

                  if (event.endIdentifier >= weekdayIdentifier) {
                    width += WIDTH_FULL;
                    end = end || weekdayIdentifier === event.endIdentifier;
                  } else {
                    end = true;
                    break;
                  }
                }
              }

              var scope = {
                eventParsed: event,
                day: day,
                start: start,
                end: end,
                timed: false
              };
              return this.genEvent(event, scope, false, {
                staticClass: 'v-event',
                class: {
                  'v-event-start': start,
                  'v-event-end': end
                },
                style: {
                  height: eventHeight + "px",
                  width: width + "%",
                  'margin-bottom': eventMarginBottom + "px"
                },
                attrs: {
                  'data-date': day.date
                },
                key: event.index,
                ref: 'events',
                refInFor: true
              });
            },
            genTimedEvent: function genTimedEvent(_a, day) {
              var event = _a.event,
                  left = _a.left,
                  width = _a.width;

              if (day.timeDelta(event.end) < 0 || day.timeDelta(event.start) >= 1 || Object(_util_events__WEBPACK_IMPORTED_MODULE_7__["isEventHiddenOn"])(event, day)) {
                return false;
              }

              var dayIdentifier = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_6__["getDayIdentifier"])(day);
              var start = event.startIdentifier >= dayIdentifier;
              var end = event.endIdentifier > dayIdentifier;
              var top = start ? day.timeToY(event.start) : 0;
              var bottom = end ? day.timeToY(MINUTES_IN_DAY) : day.timeToY(event.end);
              var height = Math.max(this.eventHeight, bottom - top);
              var scope = {
                eventParsed: event,
                day: day,
                start: start,
                end: end,
                timed: true
              };
              return this.genEvent(event, scope, true, {
                staticClass: 'v-event-timed',
                style: {
                  top: top + "px",
                  height: height + "px",
                  left: left + "%",
                  width: width + "%"
                }
              });
            },
            genEvent: function genEvent(event, scopeInput, timedEvent, data) {
              var _this = this;

              var _a;

              var slot = this.$scopedSlots.event;
              var text = this.eventTextColorFunction(event.input);
              var background = this.eventColorFunction(event.input);
              var overlapsNoon = event.start.hour < 12 && event.end.hour >= 12;
              var singline = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_6__["diffMinutes"])(event.start, event.end) <= this.parsedEventOverlapThreshold;
              var formatTime = this.formatTime;

              var timeSummary = function timeSummary() {
                return formatTime(event.start, overlapsNoon) + ' - ' + formatTime(event.end, true);
              };

              var eventSummary = function eventSummary() {
                var name = _this.eventNameFunction(event, timedEvent);

                if (event.start.hasTime) {
                  var eventSummaryClass = 'v-event-summary';

                  if (timedEvent) {
                    var time = timeSummary();
                    var delimiter = singline ? ', ' : '<br>';
                    return "<span class=\"" + eventSummaryClass + "\"><strong>" + name + "</strong>" + delimiter + time + "</span>";
                  } else {
                    var time = formatTime(event.start, true);
                    return "<span class=\"" + eventSummaryClass + "\"><strong>" + time + "</strong> " + name + "</span>";
                  }
                }

                return name;
              };

              var scope = __assign(__assign({}, scopeInput), {
                event: event.input,
                outside: scopeInput.day.outside,
                singline: singline,
                overlapsNoon: overlapsNoon,
                formatTime: formatTime,
                timeSummary: timeSummary,
                eventSummary: eventSummary
              });

              return this.$createElement('div', this.setTextColor(text, this.setBackgroundColor(background, __assign({
                on: this.getDefaultMouseEventHandlers(':event', function (nativeEvent) {
                  return __assign(__assign({}, scope), {
                    nativeEvent: nativeEvent
                  });
                }),
                directives: [{
                  name: 'ripple',
                  value: (_a = this.eventRipple) !== null && _a !== void 0 ? _a : true
                }]
              }, data))), slot ? slot(scope) : [this.genName(eventSummary)]);
            },
            genName: function genName(eventSummary) {
              return this.$createElement('div', {
                staticClass: 'pl-1',
                domProps: {
                  innerHTML: eventSummary()
                }
              });
            },
            genPlaceholder: function genPlaceholder(day) {
              var height = this.eventHeight + this.eventMarginBottom;
              return this.$createElement('div', {
                style: {
                  height: height + "px"
                },
                attrs: {
                  'data-date': day.date
                },
                ref: 'events',
                refInFor: true
              });
            },
            genMore: function genMore(day) {
              var _a;

              var eventHeight = this.eventHeight;
              var eventMarginBottom = this.eventMarginBottom;
              return this.$createElement('div', {
                staticClass: 'v-event-more pl-1',
                class: {
                  'v-outside': day.outside
                },
                attrs: {
                  'data-date': day.date,
                  'data-more': 1
                },
                directives: [{
                  name: 'ripple',
                  value: (_a = this.eventRipple) !== null && _a !== void 0 ? _a : true
                }],
                on: this.getDefaultMouseEventHandlers(':more', function (nativeEvent) {
                  return __assign({
                    nativeEvent: nativeEvent
                  }, day);
                }),
                style: {
                  display: 'none',
                  height: eventHeight + "px",
                  'margin-bottom': eventMarginBottom + "px"
                },
                ref: 'events',
                refInFor: true
              });
            },
            getVisibleEvents: function getVisibleEvents() {
              var start = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_6__["getDayIdentifier"])(this.days[0]);
              var end = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_6__["getDayIdentifier"])(this.days[this.days.length - 1]);
              return this.parsedEvents.filter(function (event) {
                return Object(_util_events__WEBPACK_IMPORTED_MODULE_7__["isEventOverlapping"])(event, start, end);
              });
            },
            isEventForCategory: function isEventForCategory(event, category) {
              return !this.categoryMode || _typeof(category) === 'object' && category.categoryName && category.categoryName === event.category || typeof event.category === 'string' && category === event.category || typeof event.category !== 'string' && category === null;
            },
            getEventsForDay: function getEventsForDay(day) {
              var identifier = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_6__["getDayIdentifier"])(day);
              var firstWeekday = this.eventWeekdays[0];
              return this.parsedEvents.filter(function (event) {
                return Object(_util_events__WEBPACK_IMPORTED_MODULE_7__["isEventStart"])(event, day, identifier, firstWeekday);
              });
            },
            getEventsForDayAll: function getEventsForDayAll(day) {
              var _this = this;

              var identifier = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_6__["getDayIdentifier"])(day);
              var firstWeekday = this.eventWeekdays[0];
              return this.parsedEvents.filter(function (event) {
                return event.allDay && (_this.categoryMode ? Object(_util_events__WEBPACK_IMPORTED_MODULE_7__["isEventOn"])(event, identifier) : Object(_util_events__WEBPACK_IMPORTED_MODULE_7__["isEventStart"])(event, day, identifier, firstWeekday)) && _this.isEventForCategory(event, day.category);
              });
            },
            getEventsForDayTimed: function getEventsForDayTimed(day) {
              var _this = this;

              var identifier = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_6__["getDayIdentifier"])(day);
              return this.parsedEvents.filter(function (event) {
                return !event.allDay && Object(_util_events__WEBPACK_IMPORTED_MODULE_7__["isEventOn"])(event, identifier) && _this.isEventForCategory(event, day.category);
              });
            },
            getScopedSlots: function getScopedSlots() {
              var _this = this;

              if (this.noEvents) {
                return __assign({}, this.$scopedSlots);
              }

              var mode = this.eventModeFunction(this.parsedEvents, this.eventWeekdays[0], this.parsedEventOverlapThreshold);

              var isNode = function isNode(input) {
                return !!input;
              };

              var getSlotChildren = function getSlotChildren(day, getter, mapper, timed) {
                var events = getter(day);
                var visuals = mode(day, events, timed, _this.categoryMode);

                if (timed) {
                  return visuals.map(function (visual) {
                    return mapper(visual, day);
                  }).filter(isNode);
                }

                var children = [];
                visuals.forEach(function (visual, index) {
                  while (children.length < visual.column) {
                    children.push(_this.genPlaceholder(day));
                  }

                  var mapped = mapper(visual, day);

                  if (mapped) {
                    children.push(mapped);
                  }
                });
                return children;
              };

              var slots = this.$scopedSlots;
              var slotDay = slots.day;
              var slotDayHeader = slots['day-header'];
              var slotDayBody = slots['day-body'];
              return __assign(__assign({}, slots), {
                day: function day(_day) {
                  var children = getSlotChildren(_day, _this.getEventsForDay, _this.genDayEvent, false);

                  if (children && children.length > 0 && _this.eventMore) {
                    children.push(_this.genMore(_day));
                  }

                  if (slotDay) {
                    var slot = slotDay(_day);

                    if (slot) {
                      children = children ? children.concat(slot) : slot;
                    }
                  }

                  return children;
                },
                'day-header': function dayHeader(day) {
                  var children = getSlotChildren(day, _this.getEventsForDayAll, _this.genDayEvent, false);

                  if (slotDayHeader) {
                    var slot = slotDayHeader(day);

                    if (slot) {
                      children = children ? children.concat(slot) : slot;
                    }
                  }

                  return children;
                },
                'day-body': function dayBody(day) {
                  var events = getSlotChildren(day, _this.getEventsForDayTimed, _this.genTimedEvent, true);
                  var children = [_this.$createElement('div', {
                    staticClass: 'v-event-timed-container'
                  }, events)];

                  if (slotDayBody) {
                    var slot = slotDayBody(day);

                    if (slot) {
                      children = children.concat(slot);
                    }
                  }

                  return children;
                }
              });
            }
          }
        });
        /***/
      },

      /***/
      "./src/components/VCalendar/mixins/calendar-with-intervals.ts":
      /*!********************************************************************!*\
        !*** ./src/components/VCalendar/mixins/calendar-with-intervals.ts ***!
        \********************************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVCalendarMixinsCalendarWithIntervalsTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _calendar_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./calendar-base */
        "./src/components/VCalendar/mixins/calendar-base.ts");
        /* harmony import */


        var _util_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../util/props */
        "./src/components/VCalendar/util/props.ts");
        /* harmony import */


        var _util_timestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../util/timestamp */
        "./src/components/VCalendar/util/timestamp.ts"); // Mixins
        // Util

        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = _calendar_base__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
          name: 'calendar-with-intervals',
          props: _util_props__WEBPACK_IMPORTED_MODULE_1__["default"].intervals,
          computed: {
            parsedFirstInterval: function parsedFirstInterval() {
              return parseInt(this.firstInterval);
            },
            parsedIntervalMinutes: function parsedIntervalMinutes() {
              return parseInt(this.intervalMinutes);
            },
            parsedIntervalCount: function parsedIntervalCount() {
              return parseInt(this.intervalCount);
            },
            parsedIntervalHeight: function parsedIntervalHeight() {
              return parseFloat(this.intervalHeight);
            },
            parsedFirstTime: function parsedFirstTime() {
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["parseTime"])(this.firstTime);
            },
            firstMinute: function firstMinute() {
              var time = this.parsedFirstTime;
              return time !== false && time >= 0 && time <= _util_timestamp__WEBPACK_IMPORTED_MODULE_2__["MINUTES_IN_DAY"] ? time : this.parsedFirstInterval * this.parsedIntervalMinutes;
            },
            bodyHeight: function bodyHeight() {
              return this.parsedIntervalCount * this.parsedIntervalHeight;
            },
            days: function days() {
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["createDayList"])(this.parsedStart, this.parsedEnd, this.times.today, this.weekdaySkips, this.maxDays);
            },
            intervals: function intervals() {
              var days = this.days;
              var first = this.firstMinute;
              var minutes = this.parsedIntervalMinutes;
              var count = this.parsedIntervalCount;
              var now = this.times.now;
              return days.map(function (d) {
                return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["createIntervalList"])(d, first, minutes, count, now);
              });
            },
            intervalFormatter: function intervalFormatter() {
              if (this.intervalFormat) {
                return this.intervalFormat;
              }

              var longOptions = {
                timeZone: 'UTC',
                hour: '2-digit',
                minute: '2-digit'
              };
              var shortOptions = {
                timeZone: 'UTC',
                hour: 'numeric',
                minute: '2-digit'
              };
              var shortHourOptions = {
                timeZone: 'UTC',
                hour: 'numeric'
              };
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["createNativeLocaleFormatter"])(this.currentLocale, function (tms, short) {
                return short ? tms.minute === 0 ? shortHourOptions : shortOptions : longOptions;
              });
            }
          },
          methods: {
            showIntervalLabelDefault: function showIntervalLabelDefault(interval) {
              var first = this.intervals[0][0];
              var isFirst = first.hour === interval.hour && first.minute === interval.minute;
              return !isFirst;
            },
            intervalStyleDefault: function intervalStyleDefault(_interval) {
              return undefined;
            },
            getTimestampAtEvent: function getTimestampAtEvent(e, day) {
              var timestamp = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["copyTimestamp"])(day);
              var bounds = e.currentTarget.getBoundingClientRect();
              var baseMinutes = this.firstMinute;
              var touchEvent = e;
              var mouseEvent = e;
              var touches = touchEvent.changedTouches || touchEvent.touches;
              var clientY = touches && touches[0] ? touches[0].clientY : mouseEvent.clientY;
              var addIntervals = (clientY - bounds.top) / this.parsedIntervalHeight;
              var addMinutes = Math.floor(addIntervals * this.parsedIntervalMinutes);
              var minutes = baseMinutes + addMinutes;
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["updateMinutes"])(timestamp, minutes, this.times.now);
            },
            getSlotScope: function getSlotScope(timestamp) {
              var scope = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["copyTimestamp"])(timestamp);
              scope.timeToY = this.timeToY;
              scope.timeDelta = this.timeDelta;
              scope.minutesToPixels = this.minutesToPixels;
              scope.week = this.days;
              return scope;
            },
            scrollToTime: function scrollToTime(time) {
              var y = this.timeToY(time);
              var pane = this.$refs.scrollArea;

              if (y === false || !pane) {
                return false;
              }

              pane.scrollTop = y;
              return true;
            },
            minutesToPixels: function minutesToPixels(minutes) {
              return minutes / this.parsedIntervalMinutes * this.parsedIntervalHeight;
            },
            timeToY: function timeToY(time, clamp) {
              if (clamp === void 0) {
                clamp = true;
              }

              var y = this.timeDelta(time);

              if (y !== false) {
                y *= this.bodyHeight;

                if (clamp) {
                  if (y < 0) {
                    y = 0;
                  }

                  if (y > this.bodyHeight) {
                    y = this.bodyHeight;
                  }
                }
              }

              return y;
            },
            timeDelta: function timeDelta(time) {
              var minutes = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_2__["parseTime"])(time);

              if (minutes === false) {
                return false;
              }

              var min = this.firstMinute;
              var gap = this.parsedIntervalCount * this.parsedIntervalMinutes;
              return (minutes - min) / gap;
            }
          }
        });
        /***/
      },

      /***/
      "./src/components/VCalendar/mixins/mouse.ts":
      /*!**************************************************!*\
        !*** ./src/components/VCalendar/mixins/mouse.ts ***!
        \**************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVCalendarMixinsMouseTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! vue */
        "vue");
        /* harmony import */


        var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony default export */


        __webpack_exports__["default"] = vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
          name: 'mouse',
          methods: {
            getDefaultMouseEventHandlers: function getDefaultMouseEventHandlers(suffix, getEvent) {
              var _a;

              return this.getMouseEventHandlers((_a = {}, _a['click' + suffix] = {
                event: 'click'
              }, _a['contextmenu' + suffix] = {
                event: 'contextmenu',
                prevent: true,
                result: false
              }, _a['mousedown' + suffix] = {
                event: 'mousedown'
              }, _a['mousemove' + suffix] = {
                event: 'mousemove'
              }, _a['mouseup' + suffix] = {
                event: 'mouseup'
              }, _a['mouseenter' + suffix] = {
                event: 'mouseenter'
              }, _a['mouseleave' + suffix] = {
                event: 'mouseleave'
              }, _a['touchstart' + suffix] = {
                event: 'touchstart'
              }, _a['touchmove' + suffix] = {
                event: 'touchmove'
              }, _a['touchend' + suffix] = {
                event: 'touchend'
              }, _a), getEvent);
            },
            getMouseEventHandlers: function getMouseEventHandlers(events, getEvent) {
              var _this = this;

              var on = {};

              var _loop_1 = function _loop_1(event) {
                var eventOptions = events[event];
                if (!this_1.$listeners[event]) return "continue"; // TODO somehow pull in modifiers

                var prefix = eventOptions.passive ? '&' : (eventOptions.once ? '~' : '') + (eventOptions.capture ? '!' : '');
                var key = prefix + eventOptions.event;

                var handler = function handler(e) {
                  var _a, _b;

                  var mouseEvent = e;

                  if (eventOptions.button === undefined || mouseEvent.buttons > 0 && mouseEvent.button === eventOptions.button) {
                    if (eventOptions.prevent) {
                      e.preventDefault();
                    }

                    if (eventOptions.stop) {
                      e.stopPropagation();
                    } // Due to TouchEvent target always returns the element that is first placed
                    // Even if touch point has since moved outside the interactive area of that element
                    // Ref: https://developer.mozilla.org/en-US/docs/Web/API/Touch/target
                    // This block of code aims to make sure touchEvent is always dispatched from the element that is being pointed at


                    if (e && 'touches' in e) {
                      var classSeparator_1 = ' ';
                      var eventTargetClasses_1 = (_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.className.split(classSeparator_1);
                      var currentTargets = document.elementsFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY); // Get "the same kind" current hovering target by checking
                      // If element has the same class of initial touch start element (which has touch event listener registered)

                      var currentTarget = currentTargets.find(function (t) {
                        return t.className.split(classSeparator_1).some(function (c) {
                          return eventTargetClasses_1.includes(c);
                        });
                      });

                      if (currentTarget && !((_b = e.target) === null || _b === void 0 ? void 0 : _b.isSameNode(currentTarget))) {
                        currentTarget.dispatchEvent(new TouchEvent(e.type, {
                          changedTouches: e.changedTouches,
                          targetTouches: e.targetTouches,
                          touches: e.touches
                        }));
                        return;
                      }
                    }

                    _this.$emit(event, getEvent(e), e);
                  }

                  return eventOptions.result;
                };

                if (key in on) {
                  /* istanbul ignore next */
                  if (Array.isArray(on[key])) {
                    on[key].push(handler);
                  } else {
                    on[key] = [on[key], handler];
                  }
                } else {
                  on[key] = handler;
                }
              };

              var this_1 = this;

              for (var event in events) {
                _loop_1(event);
              }

              return on;
            }
          }
        });
        /***/
      },

      /***/
      "./src/components/VCalendar/mixins/times.ts":
      /*!**************************************************!*\
        !*** ./src/components/VCalendar/mixins/times.ts ***!
        \**************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVCalendarMixinsTimesTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! vue */
        "vue");
        /* harmony import */


        var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _util_timestamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../util/timestamp */
        "./src/components/VCalendar/util/timestamp.ts");
        /* harmony default export */


        __webpack_exports__["default"] = vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
          name: 'times',
          props: {
            now: {
              type: String,
              validator: _util_timestamp__WEBPACK_IMPORTED_MODULE_1__["validateTimestamp"]
            }
          },
          data: function data() {
            return {
              times: {
                now: Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_1__["parseTimestamp"])('0000-00-00 00:00', true),
                today: Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_1__["parseTimestamp"])('0000-00-00', true)
              }
            };
          },
          computed: {
            parsedNow: function parsedNow() {
              return this.now ? Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_1__["parseTimestamp"])(this.now, true) : null;
            }
          },
          watch: {
            parsedNow: 'updateTimes'
          },
          created: function created() {
            this.updateTimes();
            this.setPresent();
          },
          methods: {
            setPresent: function setPresent() {
              this.times.now.present = this.times.today.present = true;
              this.times.now.past = this.times.today.past = false;
              this.times.now.future = this.times.today.future = false;
            },
            updateTimes: function updateTimes() {
              var now = this.parsedNow || this.getNow();
              this.updateDay(now, this.times.now);
              this.updateTime(now, this.times.now);
              this.updateDay(now, this.times.today);
            },
            getNow: function getNow() {
              return Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_1__["parseDate"])(new Date());
            },
            updateDay: function updateDay(now, target) {
              if (now.date !== target.date) {
                target.year = now.year;
                target.month = now.month;
                target.day = now.day;
                target.weekday = now.weekday;
                target.date = now.date;
              }
            },
            updateTime: function updateTime(now, target) {
              if (now.time !== target.time) {
                target.hour = now.hour;
                target.minute = now.minute;
                target.time = now.time;
              }
            }
          }
        });
        /***/
      },

      /***/
      "./src/components/VCalendar/modes/column.ts":
      /*!**************************************************!*\
        !*** ./src/components/VCalendar/modes/column.ts ***!
        \**************************************************/

      /*! exports provided: column */

      /***/
      function srcComponentsVCalendarModesColumnTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "column", function () {
          return column;
        });
        /* harmony import */


        var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./common */
        "./src/components/VCalendar/modes/common.ts");

        var FULL_WIDTH = 100;

        var column = function column(events, firstWeekday, overlapThreshold) {
          var handler = Object(_common__WEBPACK_IMPORTED_MODULE_0__["getOverlapGroupHandler"])(firstWeekday);
          return function (day, dayEvents, timed, reset) {
            var visuals = handler.getVisuals(day, dayEvents, timed, reset);

            if (timed) {
              visuals.forEach(function (visual) {
                visual.left = visual.column * FULL_WIDTH / visual.columnCount;
                visual.width = FULL_WIDTH / visual.columnCount;
              });
            }

            return visuals;
          };
        };
        /***/

      },

      /***/
      "./src/components/VCalendar/modes/common.ts":
      /*!**************************************************!*\
        !*** ./src/components/VCalendar/modes/common.ts ***!
        \**************************************************/

      /*! exports provided: getVisuals, hasOverlap, setColumnCount, getRange, getDayRange, getNormalizedRange, getOpenGroup, getOverlapGroupHandler */

      /***/
      function srcComponentsVCalendarModesCommonTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getVisuals", function () {
          return _getVisuals;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "hasOverlap", function () {
          return hasOverlap;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "setColumnCount", function () {
          return setColumnCount;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getRange", function () {
          return getRange;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getDayRange", function () {
          return getDayRange;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getNormalizedRange", function () {
          return getNormalizedRange;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getOpenGroup", function () {
          return getOpenGroup;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getOverlapGroupHandler", function () {
          return getOverlapGroupHandler;
        });
        /* harmony import */


        var _util_timestamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../util/timestamp */
        "./src/components/VCalendar/util/timestamp.ts");

        var __read = undefined && undefined.__read || function (o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
              r,
              ar = [],
              e;

          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
              ar.push(r.value);
            }
          } catch (error) {
            e = {
              error: error
            };
          } finally {
            try {
              if (r && !r.done && (m = i["return"])) m.call(i);
            } finally {
              if (e) throw e.error;
            }
          }

          return ar;
        };

        var MILLIS_IN_DAY = 86400000;

        function _getVisuals(events, minStart) {
          if (minStart === void 0) {
            minStart = 0;
          }

          var visuals = events.map(function (event) {
            return {
              event: event,
              columnCount: 0,
              column: 0,
              left: 0,
              width: 100
            };
          });
          visuals.sort(function (a, b) {
            return Math.max(minStart, a.event.startTimestampIdentifier) - Math.max(minStart, b.event.startTimestampIdentifier) || b.event.endTimestampIdentifier - a.event.endTimestampIdentifier;
          });
          return visuals;
        }

        function hasOverlap(s0, e0, s1, e1, exclude) {
          if (exclude === void 0) {
            exclude = true;
          }

          return exclude ? !(s0 >= e1 || e0 <= s1) : !(s0 > e1 || e0 < s1);
        }

        function setColumnCount(groups) {
          groups.forEach(function (group) {
            group.visuals.forEach(function (groupVisual) {
              groupVisual.columnCount = groups.length;
            });
          });
        }

        function getRange(event) {
          return [event.startTimestampIdentifier, event.endTimestampIdentifier];
        }

        function getDayRange(event) {
          return [event.startIdentifier, event.endIdentifier];
        }

        function getNormalizedRange(event, dayStart) {
          return [Math.max(dayStart, event.startTimestampIdentifier), Math.min(dayStart + MILLIS_IN_DAY, event.endTimestampIdentifier)];
        }

        function getOpenGroup(groups, start, end, timed) {
          for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var intersected = false;

            if (hasOverlap(start, end, group.start, group.end, timed)) {
              for (var k = 0; k < group.visuals.length; k++) {
                var groupVisual = group.visuals[k];

                var _a = __read(timed ? getRange(groupVisual.event) : getDayRange(groupVisual.event), 2),
                    groupStart = _a[0],
                    groupEnd = _a[1];

                if (hasOverlap(start, end, groupStart, groupEnd, timed)) {
                  intersected = true;
                  break;
                }
              }
            }

            if (!intersected) {
              return i;
            }
          }

          return -1;
        }

        function getOverlapGroupHandler(firstWeekday) {
          var handler = {
            groups: [],
            min: -1,
            max: -1,
            reset: function reset() {
              handler.groups = [];
              handler.min = handler.max = -1;
            },
            getVisuals: function getVisuals(day, dayEvents, timed, reset) {
              if (reset === void 0) {
                reset = false;
              }

              if (day.weekday === firstWeekday || reset) {
                handler.reset();
              }

              var dayStart = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_0__["getTimestampIdentifier"])(day);

              var visuals = _getVisuals(dayEvents, dayStart);

              visuals.forEach(function (visual) {
                var _a = __read(timed ? getRange(visual.event) : getDayRange(visual.event), 2),
                    start = _a[0],
                    end = _a[1];

                if (handler.groups.length > 0 && !hasOverlap(start, end, handler.min, handler.max, timed)) {
                  setColumnCount(handler.groups);
                  handler.reset();
                }

                var targetGroup = getOpenGroup(handler.groups, start, end, timed);

                if (targetGroup === -1) {
                  targetGroup = handler.groups.length;
                  handler.groups.push({
                    start: start,
                    end: end,
                    visuals: []
                  });
                }

                var target = handler.groups[targetGroup];
                target.visuals.push(visual);
                target.start = Math.min(target.start, start);
                target.end = Math.max(target.end, end);
                visual.column = targetGroup;

                if (handler.min === -1) {
                  handler.min = start;
                  handler.max = end;
                } else {
                  handler.min = Math.min(handler.min, start);
                  handler.max = Math.max(handler.max, end);
                }
              });
              setColumnCount(handler.groups);

              if (timed) {
                handler.reset();
              }

              return visuals;
            }
          };
          return handler;
        }
        /***/

      },

      /***/
      "./src/components/VCalendar/modes/index.ts":
      /*!*************************************************!*\
        !*** ./src/components/VCalendar/modes/index.ts ***!
        \*************************************************/

      /*! exports provided: CalendarEventOverlapModes */

      /***/
      function srcComponentsVCalendarModesIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "CalendarEventOverlapModes", function () {
          return CalendarEventOverlapModes;
        });
        /* harmony import */


        var _stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./stack */
        "./src/components/VCalendar/modes/stack.ts");
        /* harmony import */


        var _column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./column */
        "./src/components/VCalendar/modes/column.ts");

        var CalendarEventOverlapModes = {
          stack: _stack__WEBPACK_IMPORTED_MODULE_0__["stack"],
          column: _column__WEBPACK_IMPORTED_MODULE_1__["column"]
        };
        /***/
      },

      /***/
      "./src/components/VCalendar/modes/stack.ts":
      /*!*************************************************!*\
        !*** ./src/components/VCalendar/modes/stack.ts ***!
        \*************************************************/

      /*! exports provided: stack */

      /***/
      function srcComponentsVCalendarModesStackTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "stack", function () {
          return stack;
        });
        /* harmony import */


        var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./common */
        "./src/components/VCalendar/modes/common.ts");
        /* harmony import */


        var _util_timestamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../util/timestamp */
        "./src/components/VCalendar/util/timestamp.ts");

        var __values = undefined && undefined.__values || function (o) {
          var s = typeof Symbol === "function" && Symbol.iterator,
              m = s && o[s],
              i = 0;
          if (m) return m.call(o);
          if (o && typeof o.length === "number") return {
            next: function next() {
              if (o && i >= o.length) o = void 0;
              return {
                value: o && o[i++],
                done: !o
              };
            }
          };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };

        var __read = undefined && undefined.__read || function (o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
              r,
              ar = [],
              e;

          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
              ar.push(r.value);
            }
          } catch (error) {
            e = {
              error: error
            };
          } finally {
            try {
              if (r && !r.done && (m = i["return"])) m.call(i);
            } finally {
              if (e) throw e.error;
            }
          }

          return ar;
        };

        var FULL_WIDTH = 100;
        var DEFAULT_OFFSET = 5;
        var WIDTH_MULTIPLIER = 1.7;
        /**
         * Variation of column mode where events can be stacked. The priority of this
         * mode is to stack events together taking up the least amount of space while
         * trying to ensure the content of the event is always visible as well as its
         * start and end. A sibling column has intersecting event content and must be
         * placed beside each other. Non-sibling columns are offset by 5% from the
         * previous column. The width is scaled by 1.7 so the events overlap and
         * whitespace is reduced. If there is a hole in columns the event width is
         * scaled up so it intersects with the next column. The columns have equal
         * width in the space they are given. If the event doesn't have any to the
         * right of it that intersect with it's content it's right side is extended
         * to the right side.
         */

        var stack = function stack(events, firstWeekday, overlapThreshold) {
          var handler = Object(_common__WEBPACK_IMPORTED_MODULE_0__["getOverlapGroupHandler"])(firstWeekday); // eslint-disable-next-line max-statements

          return function (day, dayEvents, timed, reset) {
            var e_1, _a, e_2, _b, e_3, _c;

            if (!timed) {
              return handler.getVisuals(day, dayEvents, timed, reset);
            }

            var dayStart = Object(_util_timestamp__WEBPACK_IMPORTED_MODULE_1__["getTimestampIdentifier"])(day);
            var visuals = Object(_common__WEBPACK_IMPORTED_MODULE_0__["getVisuals"])(dayEvents, dayStart);
            var groups = getGroups(visuals, dayStart);

            try {
              for (var groups_1 = __values(groups), groups_1_1 = groups_1.next(); !groups_1_1.done; groups_1_1 = groups_1.next()) {
                var group = groups_1_1.value;
                var nodes = [];

                try {
                  for (var _d = (e_2 = void 0, __values(group.visuals)), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var visual = _e.value;
                    var child = getNode(visual, dayStart);
                    var index = getNextIndex(child, nodes);

                    if (index === false) {
                      var parent = getParent(child, nodes);

                      if (parent) {
                        child.parent = parent;
                        child.sibling = Object(_common__WEBPACK_IMPORTED_MODULE_0__["hasOverlap"])(child.start, child.end, parent.start, addTime(parent.start, overlapThreshold));
                        child.index = parent.index + 1;
                        parent.children.push(child);
                      }
                    } else {
                      var _f = __read(getOverlappingRange(child, nodes, index - 1, index - 1), 1),
                          parent = _f[0];

                      var children = getOverlappingRange(child, nodes, index + 1, index + nodes.length, true);
                      child.children = children;
                      child.index = index;

                      if (parent) {
                        child.parent = parent;
                        child.sibling = Object(_common__WEBPACK_IMPORTED_MODULE_0__["hasOverlap"])(child.start, child.end, parent.start, addTime(parent.start, overlapThreshold));
                        parent.children.push(child);
                      }

                      try {
                        for (var children_1 = (e_3 = void 0, __values(children)), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                          var grand = children_1_1.value;

                          if (grand.parent === parent) {
                            grand.parent = child;
                          }

                          var grandNext = grand.index - child.index <= 1;

                          if (grandNext && child.sibling && Object(_common__WEBPACK_IMPORTED_MODULE_0__["hasOverlap"])(child.start, addTime(child.start, overlapThreshold), grand.start, grand.end)) {
                            grand.sibling = true;
                          }
                        }
                      } catch (e_3_1) {
                        e_3 = {
                          error: e_3_1
                        };
                      } finally {
                        try {
                          if (children_1_1 && !children_1_1.done && (_c = children_1.return)) _c.call(children_1);
                        } finally {
                          if (e_3) throw e_3.error;
                        }
                      }
                    }

                    nodes.push(child);
                  }
                } catch (e_2_1) {
                  e_2 = {
                    error: e_2_1
                  };
                } finally {
                  try {
                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                  } finally {
                    if (e_2) throw e_2.error;
                  }
                }

                calculateBounds(nodes, overlapThreshold);
              }
            } catch (e_1_1) {
              e_1 = {
                error: e_1_1
              };
            } finally {
              try {
                if (groups_1_1 && !groups_1_1.done && (_a = groups_1.return)) _a.call(groups_1);
              } finally {
                if (e_1) throw e_1.error;
              }
            }

            visuals.sort(function (a, b) {
              return a.left - b.left || a.event.startTimestampIdentifier - b.event.startTimestampIdentifier;
            });
            return visuals;
          };
        };

        function calculateBounds(nodes, overlapThreshold) {
          var e_4, _a;

          try {
            for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
              var node = nodes_1_1.value;
              var visual = node.visual,
                  parent = node.parent;
              var columns = getMaxChildIndex(node) + 1;
              var spaceLeft = parent ? parent.visual.left : 0;
              var spaceWidth = FULL_WIDTH - spaceLeft;
              var offset = Math.min(DEFAULT_OFFSET, FULL_WIDTH / columns);
              var columnWidthMultiplier = getColumnWidthMultiplier(node, nodes);
              var columnOffset = spaceWidth / (columns - node.index + 1);
              var columnWidth = spaceWidth / (columns - node.index + (node.sibling ? 1 : 0)) * columnWidthMultiplier;

              if (parent) {
                visual.left = node.sibling ? spaceLeft + columnOffset : spaceLeft + offset;
              }

              visual.width = hasFullWidth(node, nodes, overlapThreshold) ? FULL_WIDTH - visual.left : Math.min(FULL_WIDTH - visual.left, columnWidth * WIDTH_MULTIPLIER);
            }
          } catch (e_4_1) {
            e_4 = {
              error: e_4_1
            };
          } finally {
            try {
              if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
            } finally {
              if (e_4) throw e_4.error;
            }
          }
        }

        function getColumnWidthMultiplier(node, nodes) {
          if (!node.children.length) {
            return 1;
          }

          var maxColumn = node.index + nodes.length;
          var minColumn = node.children.reduce(function (min, c) {
            return Math.min(min, c.index);
          }, maxColumn);
          return minColumn - node.index;
        }

        function getOverlappingIndices(node, nodes) {
          var e_5, _a;

          var indices = [];

          try {
            for (var nodes_2 = __values(nodes), nodes_2_1 = nodes_2.next(); !nodes_2_1.done; nodes_2_1 = nodes_2.next()) {
              var other = nodes_2_1.value;

              if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["hasOverlap"])(node.start, node.end, other.start, other.end)) {
                indices.push(other.index);
              }
            }
          } catch (e_5_1) {
            e_5 = {
              error: e_5_1
            };
          } finally {
            try {
              if (nodes_2_1 && !nodes_2_1.done && (_a = nodes_2.return)) _a.call(nodes_2);
            } finally {
              if (e_5) throw e_5.error;
            }
          }

          return indices;
        }

        function getNextIndex(node, nodes) {
          var indices = getOverlappingIndices(node, nodes);
          indices.sort();

          for (var i = 0; i < indices.length; i++) {
            if (i < indices[i]) {
              return i;
            }
          }

          return false;
        }

        function getOverlappingRange(node, nodes, indexMin, indexMax, returnFirstColumn) {
          var e_6, _a;

          if (returnFirstColumn === void 0) {
            returnFirstColumn = false;
          }

          var overlapping = [];

          try {
            for (var nodes_3 = __values(nodes), nodes_3_1 = nodes_3.next(); !nodes_3_1.done; nodes_3_1 = nodes_3.next()) {
              var other = nodes_3_1.value;

              if (other.index >= indexMin && other.index <= indexMax && Object(_common__WEBPACK_IMPORTED_MODULE_0__["hasOverlap"])(node.start, node.end, other.start, other.end)) {
                overlapping.push(other);
              }
            }
          } catch (e_6_1) {
            e_6 = {
              error: e_6_1
            };
          } finally {
            try {
              if (nodes_3_1 && !nodes_3_1.done && (_a = nodes_3.return)) _a.call(nodes_3);
            } finally {
              if (e_6) throw e_6.error;
            }
          }

          if (returnFirstColumn && overlapping.length > 0) {
            var first_1 = overlapping.reduce(function (min, n) {
              return Math.min(min, n.index);
            }, overlapping[0].index);
            return overlapping.filter(function (n) {
              return n.index === first_1;
            });
          }

          return overlapping;
        }

        function getParent(node, nodes) {
          var e_7, _a;

          var parent = null;

          try {
            for (var nodes_4 = __values(nodes), nodes_4_1 = nodes_4.next(); !nodes_4_1.done; nodes_4_1 = nodes_4.next()) {
              var other = nodes_4_1.value;

              if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["hasOverlap"])(node.start, node.end, other.start, other.end) && (parent === null || other.index > parent.index)) {
                parent = other;
              }
            }
          } catch (e_7_1) {
            e_7 = {
              error: e_7_1
            };
          } finally {
            try {
              if (nodes_4_1 && !nodes_4_1.done && (_a = nodes_4.return)) _a.call(nodes_4);
            } finally {
              if (e_7) throw e_7.error;
            }
          }

          return parent;
        }

        function hasFullWidth(node, nodes, overlapThreshold) {
          var e_8, _a;

          try {
            for (var nodes_5 = __values(nodes), nodes_5_1 = nodes_5.next(); !nodes_5_1.done; nodes_5_1 = nodes_5.next()) {
              var other = nodes_5_1.value;

              if (other !== node && other.index > node.index && Object(_common__WEBPACK_IMPORTED_MODULE_0__["hasOverlap"])(node.start, addTime(node.start, overlapThreshold), other.start, other.end)) {
                return false;
              }
            }
          } catch (e_8_1) {
            e_8 = {
              error: e_8_1
            };
          } finally {
            try {
              if (nodes_5_1 && !nodes_5_1.done && (_a = nodes_5.return)) _a.call(nodes_5);
            } finally {
              if (e_8) throw e_8.error;
            }
          }

          return true;
        }

        function getGroups(visuals, dayStart) {
          var e_9, _a, e_10, _b;

          var groups = [];

          try {
            for (var visuals_1 = __values(visuals), visuals_1_1 = visuals_1.next(); !visuals_1_1.done; visuals_1_1 = visuals_1.next()) {
              var visual = visuals_1_1.value;

              var _c = __read(Object(_common__WEBPACK_IMPORTED_MODULE_0__["getNormalizedRange"])(visual.event, dayStart), 2),
                  start = _c[0],
                  end = _c[1];

              var added = false;

              try {
                for (var groups_2 = (e_10 = void 0, __values(groups)), groups_2_1 = groups_2.next(); !groups_2_1.done; groups_2_1 = groups_2.next()) {
                  var group = groups_2_1.value;

                  if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["hasOverlap"])(start, end, group.start, group.end)) {
                    group.visuals.push(visual);
                    group.end = Math.max(group.end, end);
                    added = true;
                    break;
                  }
                }
              } catch (e_10_1) {
                e_10 = {
                  error: e_10_1
                };
              } finally {
                try {
                  if (groups_2_1 && !groups_2_1.done && (_b = groups_2.return)) _b.call(groups_2);
                } finally {
                  if (e_10) throw e_10.error;
                }
              }

              if (!added) {
                groups.push({
                  start: start,
                  end: end,
                  visuals: [visual]
                });
              }
            }
          } catch (e_9_1) {
            e_9 = {
              error: e_9_1
            };
          } finally {
            try {
              if (visuals_1_1 && !visuals_1_1.done && (_a = visuals_1.return)) _a.call(visuals_1);
            } finally {
              if (e_9) throw e_9.error;
            }
          }

          return groups;
        }

        function getNode(visual, dayStart) {
          var _a = __read(Object(_common__WEBPACK_IMPORTED_MODULE_0__["getNormalizedRange"])(visual.event, dayStart), 2),
              start = _a[0],
              end = _a[1];

          return {
            parent: null,
            sibling: true,
            index: 0,
            visual: visual,
            start: start,
            end: end,
            children: []
          };
        }

        function getMaxChildIndex(node) {
          var e_11, _a;

          var max = node.index;

          try {
            for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
              var child = _c.value;
              var childMax = getMaxChildIndex(child);

              if (childMax > max) {
                max = childMax;
              }
            }
          } catch (e_11_1) {
            e_11 = {
              error: e_11_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_11) throw e_11.error;
            }
          }

          return max;
        }

        function addTime(identifier, minutes) {
          var removeMinutes = identifier % 100;
          var totalMinutes = removeMinutes + minutes;
          var addHours = Math.floor(totalMinutes / 60);
          var addMinutes = totalMinutes % 60;
          return identifier - removeMinutes + addHours * 100 + addMinutes;
        }
        /***/

      },

      /***/
      "./src/components/VCalendar/util/events.ts":
      /*!*************************************************!*\
        !*** ./src/components/VCalendar/util/events.ts ***!
        \*************************************************/

      /*! exports provided: parseEvent, isEventOn, isEventHiddenOn, isEventStart, isEventOverlapping */

      /***/
      function srcComponentsVCalendarUtilEventsTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "parseEvent", function () {
          return parseEvent;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isEventOn", function () {
          return isEventOn;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isEventHiddenOn", function () {
          return isEventHiddenOn;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isEventStart", function () {
          return isEventStart;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isEventOverlapping", function () {
          return isEventOverlapping;
        });
        /* harmony import */


        var _timestamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./timestamp */
        "./src/components/VCalendar/util/timestamp.ts");

        function parseEvent(input, index, startProperty, endProperty, timed, category) {
          if (timed === void 0) {
            timed = false;
          }

          if (category === void 0) {
            category = false;
          }

          var startInput = input[startProperty];
          var endInput = input[endProperty];
          var startParsed = Object(_timestamp__WEBPACK_IMPORTED_MODULE_0__["parseTimestamp"])(startInput, true);
          var endParsed = endInput ? Object(_timestamp__WEBPACK_IMPORTED_MODULE_0__["parseTimestamp"])(endInput, true) : startParsed;
          var start = Object(_timestamp__WEBPACK_IMPORTED_MODULE_0__["isTimedless"])(startInput) ? Object(_timestamp__WEBPACK_IMPORTED_MODULE_0__["updateHasTime"])(startParsed, timed) : startParsed;
          var end = Object(_timestamp__WEBPACK_IMPORTED_MODULE_0__["isTimedless"])(endInput) ? Object(_timestamp__WEBPACK_IMPORTED_MODULE_0__["updateHasTime"])(endParsed, timed) : endParsed;
          var startIdentifier = Object(_timestamp__WEBPACK_IMPORTED_MODULE_0__["getDayIdentifier"])(start);
          var startTimestampIdentifier = Object(_timestamp__WEBPACK_IMPORTED_MODULE_0__["getTimestampIdentifier"])(start);
          var endIdentifier = Object(_timestamp__WEBPACK_IMPORTED_MODULE_0__["getDayIdentifier"])(end);
          var endOffset = start.hasTime ? 0 : 2359;
          var endTimestampIdentifier = Object(_timestamp__WEBPACK_IMPORTED_MODULE_0__["getTimestampIdentifier"])(end) + endOffset;
          var allDay = !start.hasTime;
          return {
            input: input,
            start: start,
            startIdentifier: startIdentifier,
            startTimestampIdentifier: startTimestampIdentifier,
            end: end,
            endIdentifier: endIdentifier,
            endTimestampIdentifier: endTimestampIdentifier,
            allDay: allDay,
            index: index,
            category: category
          };
        }

        function isEventOn(event, dayIdentifier) {
          return dayIdentifier >= event.startIdentifier && dayIdentifier <= event.endIdentifier;
        }

        function isEventHiddenOn(event, day) {
          return event.end.time === '00:00' && event.end.date === day.date && event.start.date !== day.date;
        }

        function isEventStart(event, day, dayIdentifier, firstWeekday) {
          return dayIdentifier === event.startIdentifier || firstWeekday === day.weekday && isEventOn(event, dayIdentifier);
        }

        function isEventOverlapping(event, startIdentifier, endIdentifier) {
          return startIdentifier <= event.endIdentifier && endIdentifier >= event.startIdentifier;
        }
        /***/

      },

      /***/
      "./src/components/VCalendar/util/parser.ts":
      /*!*************************************************!*\
        !*** ./src/components/VCalendar/util/parser.ts ***!
        \*************************************************/

      /*! exports provided: parsedCategoryText, getParsedCategories */

      /***/
      function srcComponentsVCalendarUtilParserTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "parsedCategoryText", function () {
          return parsedCategoryText;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getParsedCategories", function () {
          return getParsedCategories;
        });

        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        };

        function parsedCategoryText(category, categoryText) {
          return typeof categoryText === 'string' && _typeof(category) === 'object' && category ? category[categoryText] : typeof categoryText === 'function' ? categoryText(category) : category;
        }

        function getParsedCategories(categories, categoryText) {
          if (typeof categories === 'string') return categories.split(/\s*,\s/);

          if (Array.isArray(categories)) {
            return categories.map(function (category) {
              if (typeof category === 'string') return category;
              var categoryName = typeof category.categoryName === 'string' ? category.categoryName : parsedCategoryText(category, categoryText);
              return __assign(__assign({}, category), {
                categoryName: categoryName
              });
            });
          }

          return [];
        }
        /***/

      },

      /***/
      "./src/components/VCalendar/util/props.ts":
      /*!************************************************!*\
        !*** ./src/components/VCalendar/util/props.ts ***!
        \************************************************/

      /*! exports provided: default, validateNumber, validateWeekdays */

      /***/
      function srcComponentsVCalendarUtilPropsTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "validateNumber", function () {
          return validateNumber;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "validateWeekdays", function () {
          return validateWeekdays;
        });
        /* harmony import */


        var _timestamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./timestamp */
        "./src/components/VCalendar/util/timestamp.ts");
        /* harmony import */


        var _modes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../modes */
        "./src/components/VCalendar/modes/index.ts");
        /* harmony default export */


        __webpack_exports__["default"] = {
          base: {
            start: {
              type: [String, Number, Date],
              validate: _timestamp__WEBPACK_IMPORTED_MODULE_0__["validateTimestamp"],
              default: function _default() {
                return Object(_timestamp__WEBPACK_IMPORTED_MODULE_0__["parseDate"])(new Date()).date;
              }
            },
            end: {
              type: [String, Number, Date],
              validate: _timestamp__WEBPACK_IMPORTED_MODULE_0__["validateTimestamp"]
            },
            weekdays: {
              type: [Array, String],
              default: function _default() {
                return [0, 1, 2, 3, 4, 5, 6];
              },
              validate: validateWeekdays
            },
            hideHeader: {
              type: Boolean
            },
            shortWeekdays: {
              type: Boolean,
              default: true
            },
            weekdayFormat: {
              type: Function,
              default: null
            },
            dayFormat: {
              type: Function,
              default: null
            }
          },
          intervals: {
            maxDays: {
              type: Number,
              default: 7
            },
            shortIntervals: {
              type: Boolean,
              default: true
            },
            intervalHeight: {
              type: [Number, String],
              default: 48,
              validate: validateNumber
            },
            intervalWidth: {
              type: [Number, String],
              default: 60,
              validate: validateNumber
            },
            intervalMinutes: {
              type: [Number, String],
              default: 60,
              validate: validateNumber
            },
            firstInterval: {
              type: [Number, String],
              default: 0,
              validate: validateNumber
            },
            firstTime: {
              type: [Number, String, Object],
              validate: _timestamp__WEBPACK_IMPORTED_MODULE_0__["validateTime"]
            },
            intervalCount: {
              type: [Number, String],
              default: 24,
              validate: validateNumber
            },
            intervalFormat: {
              type: Function,
              default: null
            },
            intervalStyle: {
              type: Function,
              default: null
            },
            showIntervalLabel: {
              type: Function,
              default: null
            }
          },
          weeks: {
            localeFirstDayOfYear: {
              type: [String, Number],
              default: 0
            },
            minWeeks: {
              validate: validateNumber,
              default: 1
            },
            shortMonths: {
              type: Boolean,
              default: true
            },
            showMonthOnFirst: {
              type: Boolean,
              default: true
            },
            showWeek: Boolean,
            monthFormat: {
              type: Function,
              default: null
            }
          },
          calendar: {
            type: {
              type: String,
              default: 'month'
            },
            value: {
              type: [String, Number, Date],
              validate: _timestamp__WEBPACK_IMPORTED_MODULE_0__["validateTimestamp"]
            }
          },
          category: {
            categories: {
              type: [Array, String],
              default: ''
            },
            categoryText: {
              type: [String, Function]
            },
            categoryHideDynamic: {
              type: Boolean
            },
            categoryShowAll: {
              type: Boolean
            },
            categoryForInvalid: {
              type: String,
              default: ''
            },
            categoryDays: {
              type: [Number, String],
              default: 1,
              validate: function validate(x) {
                return isFinite(parseInt(x)) && parseInt(x) > 0;
              }
            }
          },
          events: {
            events: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            eventStart: {
              type: String,
              default: 'start'
            },
            eventEnd: {
              type: String,
              default: 'end'
            },
            eventTimed: {
              type: [String, Function],
              default: 'timed'
            },
            eventCategory: {
              type: [String, Function],
              default: 'category'
            },
            eventHeight: {
              type: Number,
              default: 20
            },
            eventColor: {
              type: [String, Function],
              default: 'primary'
            },
            eventTextColor: {
              type: [String, Function],
              default: 'white'
            },
            eventName: {
              type: [String, Function],
              default: 'name'
            },
            eventOverlapThreshold: {
              type: [String, Number],
              default: 60
            },
            eventOverlapMode: {
              type: [String, Function],
              default: 'stack',
              validate: function validate(mode) {
                return mode in _modes__WEBPACK_IMPORTED_MODULE_1__["CalendarEventOverlapModes"] || typeof mode === 'function';
              }
            },
            eventMore: {
              type: Boolean,
              default: true
            },
            eventMoreText: {
              type: String,
              default: '$vuetify.calendar.moreEvents'
            },
            eventRipple: {
              type: [Boolean, Object],
              default: null
            },
            eventMarginBottom: {
              type: Number,
              default: 1
            }
          }
        };

        function validateNumber(input) {
          return isFinite(parseInt(input));
        }

        function validateWeekdays(input) {
          if (typeof input === 'string') {
            input = input.split(',');
          }

          if (Array.isArray(input)) {
            var ints = input.map(function (x) {
              return parseInt(x);
            });

            if (ints.length > _timestamp__WEBPACK_IMPORTED_MODULE_0__["DAYS_IN_WEEK"] || ints.length === 0) {
              return false;
            }

            var visited = {};
            var wrapped = false;

            for (var i = 0; i < ints.length; i++) {
              var x = ints[i];

              if (!isFinite(x) || x < 0 || x >= _timestamp__WEBPACK_IMPORTED_MODULE_0__["DAYS_IN_WEEK"]) {
                return false;
              }

              if (i > 0) {
                var d = x - ints[i - 1];

                if (d < 0) {
                  if (wrapped) {
                    return false;
                  }

                  wrapped = true;
                } else if (d === 0) {
                  return false;
                }
              }

              if (visited[x]) {
                return false;
              }

              visited[x] = true;
            }

            return true;
          }

          return false;
        }
        /***/

      },

      /***/
      "./src/components/VCalendar/util/timestamp.ts":
      /*!****************************************************!*\
        !*** ./src/components/VCalendar/util/timestamp.ts ***!
        \****************************************************/

      /*! exports provided: PARSE_REGEX, PARSE_TIME, DAYS_IN_MONTH, DAYS_IN_MONTH_LEAP, DAYS_IN_MONTH_MIN, DAYS_IN_MONTH_MAX, MONTH_MAX, MONTH_MIN, DAY_MIN, DAYS_IN_WEEK, MINUTES_IN_HOUR, MINUTE_MAX, MINUTES_IN_DAY, HOURS_IN_DAY, HOUR_MAX, FIRST_HOUR, OFFSET_YEAR, OFFSET_MONTH, OFFSET_HOUR, OFFSET_TIME, getStartOfWeek, getEndOfWeek, getStartOfMonth, getEndOfMonth, validateTime, parseTime, validateTimestamp, parseTimestamp, parseDate, getDayIdentifier, getTimeIdentifier, getTimestampIdentifier, updateRelative, isTimedless, updateHasTime, updateMinutes, updateWeekday, updateFormatted, getWeekday, daysInMonth, copyTimestamp, padNumber, getDate, getTime, nextMinutes, nextDay, prevDay, relativeDays, diffMinutes, findWeekday, getWeekdaySkips, timestampToDate, createDayList, createIntervalList, createNativeLocaleFormatter */

      /***/
      function srcComponentsVCalendarUtilTimestampTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "PARSE_REGEX", function () {
          return PARSE_REGEX;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "PARSE_TIME", function () {
          return PARSE_TIME;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DAYS_IN_MONTH", function () {
          return DAYS_IN_MONTH;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DAYS_IN_MONTH_LEAP", function () {
          return DAYS_IN_MONTH_LEAP;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DAYS_IN_MONTH_MIN", function () {
          return DAYS_IN_MONTH_MIN;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DAYS_IN_MONTH_MAX", function () {
          return DAYS_IN_MONTH_MAX;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "MONTH_MAX", function () {
          return MONTH_MAX;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "MONTH_MIN", function () {
          return MONTH_MIN;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DAY_MIN", function () {
          return DAY_MIN;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DAYS_IN_WEEK", function () {
          return DAYS_IN_WEEK;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "MINUTES_IN_HOUR", function () {
          return MINUTES_IN_HOUR;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "MINUTE_MAX", function () {
          return MINUTE_MAX;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "MINUTES_IN_DAY", function () {
          return MINUTES_IN_DAY;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "HOURS_IN_DAY", function () {
          return HOURS_IN_DAY;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "HOUR_MAX", function () {
          return HOUR_MAX;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "FIRST_HOUR", function () {
          return FIRST_HOUR;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "OFFSET_YEAR", function () {
          return OFFSET_YEAR;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "OFFSET_MONTH", function () {
          return OFFSET_MONTH;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "OFFSET_HOUR", function () {
          return OFFSET_HOUR;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "OFFSET_TIME", function () {
          return OFFSET_TIME;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getStartOfWeek", function () {
          return getStartOfWeek;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getEndOfWeek", function () {
          return getEndOfWeek;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getStartOfMonth", function () {
          return getStartOfMonth;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getEndOfMonth", function () {
          return getEndOfMonth;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "validateTime", function () {
          return validateTime;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "parseTime", function () {
          return parseTime;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "validateTimestamp", function () {
          return validateTimestamp;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "parseTimestamp", function () {
          return parseTimestamp;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "parseDate", function () {
          return parseDate;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getDayIdentifier", function () {
          return getDayIdentifier;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getTimeIdentifier", function () {
          return getTimeIdentifier;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getTimestampIdentifier", function () {
          return getTimestampIdentifier;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "updateRelative", function () {
          return updateRelative;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isTimedless", function () {
          return isTimedless;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "updateHasTime", function () {
          return updateHasTime;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "updateMinutes", function () {
          return updateMinutes;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "updateWeekday", function () {
          return updateWeekday;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "updateFormatted", function () {
          return updateFormatted;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getWeekday", function () {
          return getWeekday;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "daysInMonth", function () {
          return daysInMonth;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "copyTimestamp", function () {
          return copyTimestamp;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "padNumber", function () {
          return padNumber;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getDate", function () {
          return getDate;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getTime", function () {
          return getTime;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "nextMinutes", function () {
          return nextMinutes;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "nextDay", function () {
          return nextDay;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "prevDay", function () {
          return prevDay;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "relativeDays", function () {
          return relativeDays;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "diffMinutes", function () {
          return diffMinutes;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "findWeekday", function () {
          return findWeekday;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getWeekdaySkips", function () {
          return getWeekdaySkips;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "timestampToDate", function () {
          return timestampToDate;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "createDayList", function () {
          return createDayList;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "createIntervalList", function () {
          return createIntervalList;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "createNativeLocaleFormatter", function () {
          return createNativeLocaleFormatter;
        });
        /* harmony import */


        var _util_dateTimeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../../../util/dateTimeUtils */
        "./src/util/dateTimeUtils.ts");

        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }

        var PARSE_REGEX = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/;
        var PARSE_TIME = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/;
        var DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var DAYS_IN_MONTH_LEAP = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var DAYS_IN_MONTH_MIN = 28;
        var DAYS_IN_MONTH_MAX = 31;
        var MONTH_MAX = 12;
        var MONTH_MIN = 1;
        var DAY_MIN = 1;
        var DAYS_IN_WEEK = 7;
        var MINUTES_IN_HOUR = 60;
        var MINUTE_MAX = 59;
        var MINUTES_IN_DAY = 24 * 60;
        var HOURS_IN_DAY = 24;
        var HOUR_MAX = 23;
        var FIRST_HOUR = 0;
        var OFFSET_YEAR = 10000;
        var OFFSET_MONTH = 100;
        var OFFSET_HOUR = 100;
        var OFFSET_TIME = 10000;

        function getStartOfWeek(timestamp, weekdays, today) {
          var start = copyTimestamp(timestamp);
          findWeekday(start, weekdays[0], prevDay);
          updateFormatted(start);

          if (today) {
            updateRelative(start, today, start.hasTime);
          }

          return start;
        }

        function getEndOfWeek(timestamp, weekdays, today) {
          var end = copyTimestamp(timestamp);
          findWeekday(end, weekdays[weekdays.length - 1]);
          updateFormatted(end);

          if (today) {
            updateRelative(end, today, end.hasTime);
          }

          return end;
        }

        function getStartOfMonth(timestamp) {
          var start = copyTimestamp(timestamp);
          start.day = DAY_MIN;
          updateWeekday(start);
          updateFormatted(start);
          return start;
        }

        function getEndOfMonth(timestamp) {
          var end = copyTimestamp(timestamp);
          end.day = daysInMonth(end.year, end.month);
          updateWeekday(end);
          updateFormatted(end);
          return end;
        }

        function validateTime(input) {
          return typeof input === 'number' && isFinite(input) || !!PARSE_TIME.exec(input) || _typeof(input) === 'object' && isFinite(input.hour) && isFinite(input.minute);
        }

        function parseTime(input) {
          if (typeof input === 'number') {
            // when a number is given, it's minutes since 12:00am
            return input;
          } else if (typeof input === 'string') {
            // when a string is given, it's a hh:mm:ss format where seconds are optional
            var parts = PARSE_TIME.exec(input);

            if (!parts) {
              return false;
            }

            return parseInt(parts[1]) * 60 + parseInt(parts[3] || 0);
          } else if (_typeof(input) === 'object') {
            // when an object is given, it must have hour and minute
            if (typeof input.hour !== 'number' || typeof input.minute !== 'number') {
              return false;
            }

            return input.hour * 60 + input.minute;
          } else {
            // unsupported type
            return false;
          }
        }

        function validateTimestamp(input) {
          return typeof input === 'number' && isFinite(input) || typeof input === 'string' && !!PARSE_REGEX.exec(input) || input instanceof Date;
        }

        function parseTimestamp(input, required, now) {
          if (required === void 0) {
            required = false;
          }

          if (typeof input === 'number' && isFinite(input)) {
            input = new Date(input);
          }

          if (input instanceof Date) {
            var date = parseDate(input);

            if (now) {
              updateRelative(date, now, date.hasTime);
            }

            return date;
          }

          if (typeof input !== 'string') {
            if (required) {
              throw new Error(input + " is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.");
            }

            return null;
          } // YYYY-MM-DD hh:mm:ss


          var parts = PARSE_REGEX.exec(input);

          if (!parts) {
            if (required) {
              throw new Error(input + " is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.");
            }

            return null;
          }

          var timestamp = {
            date: input,
            time: '',
            year: parseInt(parts[1]),
            month: parseInt(parts[2]),
            day: parseInt(parts[4]) || 1,
            hour: parseInt(parts[6]) || 0,
            minute: parseInt(parts[8]) || 0,
            weekday: 0,
            hasDay: !!parts[4],
            hasTime: !!(parts[6] && parts[8]),
            past: false,
            present: false,
            future: false
          };
          updateWeekday(timestamp);
          updateFormatted(timestamp);

          if (now) {
            updateRelative(timestamp, now, timestamp.hasTime);
          }

          return timestamp;
        }

        function parseDate(date) {
          return updateFormatted({
            date: '',
            time: '',
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            weekday: date.getDay(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            hasDay: true,
            hasTime: true,
            past: false,
            present: true,
            future: false
          });
        }

        function getDayIdentifier(timestamp) {
          return timestamp.year * OFFSET_YEAR + timestamp.month * OFFSET_MONTH + timestamp.day;
        }

        function getTimeIdentifier(timestamp) {
          return timestamp.hour * OFFSET_HOUR + timestamp.minute;
        }

        function getTimestampIdentifier(timestamp) {
          return getDayIdentifier(timestamp) * OFFSET_TIME + getTimeIdentifier(timestamp);
        }

        function updateRelative(timestamp, now, time) {
          if (time === void 0) {
            time = false;
          }

          var a = getDayIdentifier(now);
          var b = getDayIdentifier(timestamp);
          var present = a === b;

          if (timestamp.hasTime && time && present) {
            a = getTimeIdentifier(now);
            b = getTimeIdentifier(timestamp);
            present = a === b;
          }

          timestamp.past = b < a;
          timestamp.present = present;
          timestamp.future = b > a;
          return timestamp;
        }

        function isTimedless(input) {
          return input instanceof Date || typeof input === 'number' && isFinite(input);
        }

        function updateHasTime(timestamp, hasTime, now) {
          if (timestamp.hasTime !== hasTime) {
            timestamp.hasTime = hasTime;

            if (!hasTime) {
              timestamp.hour = HOUR_MAX;
              timestamp.minute = MINUTE_MAX;
              timestamp.time = getTime(timestamp);
            }

            if (now) {
              updateRelative(timestamp, now, timestamp.hasTime);
            }
          }

          return timestamp;
        }

        function updateMinutes(timestamp, minutes, now) {
          timestamp.hasTime = true;
          timestamp.hour = Math.floor(minutes / MINUTES_IN_HOUR);
          timestamp.minute = minutes % MINUTES_IN_HOUR;
          timestamp.time = getTime(timestamp);

          if (now) {
            updateRelative(timestamp, now, true);
          }

          return timestamp;
        }

        function updateWeekday(timestamp) {
          timestamp.weekday = getWeekday(timestamp);
          return timestamp;
        }

        function updateFormatted(timestamp) {
          timestamp.time = getTime(timestamp);
          timestamp.date = getDate(timestamp);
          return timestamp;
        }

        function getWeekday(timestamp) {
          if (timestamp.hasDay) {
            var _ = Math.floor;
            var k = timestamp.day;
            var m = (timestamp.month + 9) % MONTH_MAX + 1;

            var C = _(timestamp.year / 100);

            var Y = timestamp.year % 100 - (timestamp.month <= 2 ? 1 : 0);
            return ((k + _(2.6 * m - 0.2) - 2 * C + Y + _(Y / 4) + _(C / 4)) % 7 + 7) % 7;
          }

          return timestamp.weekday;
        }

        function daysInMonth(year, month) {
          return Object(_util_dateTimeUtils__WEBPACK_IMPORTED_MODULE_0__["isLeapYear"])(year) ? DAYS_IN_MONTH_LEAP[month] : DAYS_IN_MONTH[month];
        }

        function copyTimestamp(timestamp) {
          var date = timestamp.date,
              time = timestamp.time,
              year = timestamp.year,
              month = timestamp.month,
              day = timestamp.day,
              weekday = timestamp.weekday,
              hour = timestamp.hour,
              minute = timestamp.minute,
              hasDay = timestamp.hasDay,
              hasTime = timestamp.hasTime,
              past = timestamp.past,
              present = timestamp.present,
              future = timestamp.future;
          return {
            date: date,
            time: time,
            year: year,
            month: month,
            day: day,
            weekday: weekday,
            hour: hour,
            minute: minute,
            hasDay: hasDay,
            hasTime: hasTime,
            past: past,
            present: present,
            future: future
          };
        }

        function padNumber(x, length) {
          var padded = String(x);

          while (padded.length < length) {
            padded = '0' + padded;
          }

          return padded;
        }

        function getDate(timestamp) {
          var str = padNumber(timestamp.year, 4) + "-" + padNumber(timestamp.month, 2);
          if (timestamp.hasDay) str += "-" + padNumber(timestamp.day, 2);
          return str;
        }

        function getTime(timestamp) {
          if (!timestamp.hasTime) {
            return '';
          }

          return padNumber(timestamp.hour, 2) + ":" + padNumber(timestamp.minute, 2);
        }

        function nextMinutes(timestamp, minutes) {
          timestamp.minute += minutes;

          while (timestamp.minute > MINUTES_IN_HOUR) {
            timestamp.minute -= MINUTES_IN_HOUR;
            timestamp.hour++;

            if (timestamp.hour >= HOURS_IN_DAY) {
              nextDay(timestamp);
              timestamp.hour = FIRST_HOUR;
            }
          }

          return timestamp;
        }

        function nextDay(timestamp) {
          timestamp.day++;
          timestamp.weekday = (timestamp.weekday + 1) % DAYS_IN_WEEK;

          if (timestamp.day > DAYS_IN_MONTH_MIN && timestamp.day > daysInMonth(timestamp.year, timestamp.month)) {
            timestamp.day = DAY_MIN;
            timestamp.month++;

            if (timestamp.month > MONTH_MAX) {
              timestamp.month = MONTH_MIN;
              timestamp.year++;
            }
          }

          return timestamp;
        }

        function prevDay(timestamp) {
          timestamp.day--;
          timestamp.weekday = (timestamp.weekday + 6) % DAYS_IN_WEEK;

          if (timestamp.day < DAY_MIN) {
            timestamp.month--;

            if (timestamp.month < MONTH_MIN) {
              timestamp.year--;
              timestamp.month = MONTH_MAX;
            }

            timestamp.day = daysInMonth(timestamp.year, timestamp.month);
          }

          return timestamp;
        }

        function relativeDays(timestamp, mover, days) {
          if (mover === void 0) {
            mover = nextDay;
          }

          if (days === void 0) {
            days = 1;
          }

          while (--days >= 0) {
            mover(timestamp);
          }

          return timestamp;
        }

        function diffMinutes(min, max) {
          var Y = (max.year - min.year) * 525600;
          var M = (max.month - min.month) * 43800;
          var D = (max.day - min.day) * 1440;
          var h = (max.hour - min.hour) * 60;
          var m = max.minute - min.minute;
          return Y + M + D + h + m;
        }

        function findWeekday(timestamp, weekday, mover, maxDays) {
          if (mover === void 0) {
            mover = nextDay;
          }

          if (maxDays === void 0) {
            maxDays = 6;
          }

          while (timestamp.weekday !== weekday && --maxDays >= 0) {
            mover(timestamp);
          }

          return timestamp;
        }

        function getWeekdaySkips(weekdays) {
          var skips = [1, 1, 1, 1, 1, 1, 1];
          var filled = [0, 0, 0, 0, 0, 0, 0];

          for (var i = 0; i < weekdays.length; i++) {
            filled[weekdays[i]] = 1;
          }

          for (var k = 0; k < DAYS_IN_WEEK; k++) {
            var skip = 1;

            for (var j = 1; j < DAYS_IN_WEEK; j++) {
              var next = (k + j) % DAYS_IN_WEEK;

              if (filled[next]) {
                break;
              }

              skip++;
            }

            skips[k] = filled[k] * skip;
          }

          return skips;
        }

        function timestampToDate(timestamp) {
          var time = padNumber(timestamp.hour, 2) + ":" + padNumber(timestamp.minute, 2);
          var date = timestamp.date;
          return new Date(date + "T" + time + ":00+00:00");
        }

        function createDayList(start, end, now, weekdaySkips, max, min) {
          if (max === void 0) {
            max = 42;
          }

          if (min === void 0) {
            min = 0;
          }

          var stop = getDayIdentifier(end);
          var days = [];
          var current = copyTimestamp(start);
          var currentIdentifier = 0;
          var stopped = currentIdentifier === stop;

          if (stop < getDayIdentifier(start)) {
            throw new Error('End date is earlier than start date.');
          }

          while ((!stopped || days.length < min) && days.length < max) {
            currentIdentifier = getDayIdentifier(current);
            stopped = stopped || currentIdentifier === stop;

            if (weekdaySkips[current.weekday] === 0) {
              current = nextDay(current);
              continue;
            }

            var day = copyTimestamp(current);
            updateFormatted(day);
            updateRelative(day, now);
            days.push(day);
            current = relativeDays(current, nextDay, weekdaySkips[current.weekday]);
          }

          if (!days.length) throw new Error('No dates found using specified start date, end date, and weekdays.');
          return days;
        }

        function createIntervalList(timestamp, first, minutes, count, now) {
          var intervals = [];

          for (var i = 0; i < count; i++) {
            var mins = first + i * minutes;
            var int = copyTimestamp(timestamp);
            intervals.push(updateMinutes(int, mins, now));
          }

          return intervals;
        }

        function createNativeLocaleFormatter(locale, getOptions) {
          var emptyFormatter = function emptyFormatter(_t, _s) {
            return '';
          };

          if (typeof Intl === 'undefined' || typeof Intl.DateTimeFormat === 'undefined') {
            return emptyFormatter;
          }

          return function (timestamp, short) {
            try {
              var intlFormatter = new Intl.DateTimeFormat(locale || undefined, getOptions(timestamp, short));
              return intlFormatter.format(timestampToDate(timestamp));
            } catch (e) {
              return '';
            }
          };
        }
        /***/

      },

      /***/
      "./src/components/VCard/VCard.sass":
      /*!*****************************************!*\
        !*** ./src/components/VCard/VCard.sass ***!
        \*****************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVCardVCardSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VCard/VCard.ts":
      /*!***************************************!*\
        !*** ./src/components/VCard/VCard.ts ***!
        \***************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVCardVCardTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VCard_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VCard.sass */
        "./src/components/VCard/VCard.sass");
        /* harmony import */


        var _VCard_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VCard_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../VSheet */
        "./src/components/VSheet/index.ts");
        /* harmony import */


        var _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../mixins/loadable */
        "./src/mixins/loadable/index.ts");
        /* harmony import */


        var _mixins_routable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../mixins/routable */
        "./src/mixins/routable/index.ts");
        /* harmony import */


        var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../util/mixins */
        "./src/util/mixins.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Styles
        // Extensions
        // Mixins
        // Helpers

        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__["default"])(_mixins_loadable__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_routable__WEBPACK_IMPORTED_MODULE_3__["default"], _VSheet__WEBPACK_IMPORTED_MODULE_1__["default"]).extend({
          name: 'v-card',
          props: {
            flat: Boolean,
            hover: Boolean,
            img: String,
            link: Boolean,
            loaderHeight: {
              type: [Number, String],
              default: 4
            },
            raised: Boolean
          },
          computed: {
            classes: function classes() {
              return __assign(__assign(__assign({
                'v-card': true
              }, _mixins_routable__WEBPACK_IMPORTED_MODULE_3__["default"].options.computed.classes.call(this)), {
                'v-card--flat': this.flat,
                'v-card--hover': this.hover,
                'v-card--link': this.isClickable,
                'v-card--loading': this.loading,
                'v-card--disabled': this.disabled,
                'v-card--raised': this.raised
              }), _VSheet__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.classes.call(this));
            },
            styles: function styles() {
              var style = __assign({}, _VSheet__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.styles.call(this));

              if (this.img) {
                style.background = "url(\"" + this.img + "\") center center / cover no-repeat";
              }

              return style;
            }
          },
          methods: {
            genProgress: function genProgress() {
              var render = _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__["default"].options.methods.genProgress.call(this);

              if (!render) return null;
              return this.$createElement('div', {
                staticClass: 'v-card__progress',
                key: 'progress'
              }, [render]);
            }
          },
          render: function render(h) {
            var _a = this.generateRouteLink(),
                tag = _a.tag,
                data = _a.data;

            data.style = this.styles;

            if (this.isClickable) {
              data.attrs = data.attrs || {};
              data.attrs.tabindex = 0;
            }

            return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
          }
        });
        /***/
      },

      /***/
      "./src/components/VCard/index.ts":
      /*!***************************************!*\
        !*** ./src/components/VCard/index.ts ***!
        \***************************************/

      /*! exports provided: VCard, VCardActions, VCardSubtitle, VCardText, VCardTitle, default */

      /***/
      function srcComponentsVCardIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "VCardActions", function () {
          return VCardActions;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "VCardSubtitle", function () {
          return VCardSubtitle;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "VCardText", function () {
          return VCardText;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "VCardTitle", function () {
          return VCardTitle;
        });
        /* harmony import */


        var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VCard */
        "./src/components/VCard/VCard.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VCard", function () {
          return _VCard__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony import */


        var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../util/helpers */
        "./src/util/helpers.ts");

        var VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["createSimpleFunctional"])('v-card__actions');
        var VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["createSimpleFunctional"])('v-card__subtitle');
        var VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["createSimpleFunctional"])('v-card__text');
        var VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["createSimpleFunctional"])('v-card__title');
        /* harmony default export */

        __webpack_exports__["default"] = {
          $_vuetify_subcomponents: {
            VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__["default"],
            VCardActions: VCardActions,
            VCardSubtitle: VCardSubtitle,
            VCardText: VCardText,
            VCardTitle: VCardTitle
          }
        };
        /***/
      },

      /***/
      "./src/components/VCarousel/VCarousel.sass":
      /*!*************************************************!*\
        !*** ./src/components/VCarousel/VCarousel.sass ***!
        \*************************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVCarouselVCarouselSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VCarousel/VCarousel.ts":
      /*!***********************************************!*\
        !*** ./src/components/VCarousel/VCarousel.ts ***!
        \***********************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVCarouselVCarouselTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VCarousel_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VCarousel.sass */
        "./src/components/VCarousel/VCarousel.sass");
        /* harmony import */


        var _VCarousel_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VCarousel_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../VWindow/VWindow */
        "./src/components/VWindow/VWindow.ts");
        /* harmony import */


        var _VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../VBtn */
        "./src/components/VBtn/index.ts");
        /* harmony import */


        var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../VIcon */
        "./src/components/VIcon/index.ts");
        /* harmony import */


        var _VProgressLinear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../VProgressLinear */
        "./src/components/VProgressLinear/index.ts");
        /* harmony import */


        var _mixins_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../../mixins/button-group */
        "./src/mixins/button-group/index.ts");
        /* harmony import */


        var _util_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../util/helpers */
        "./src/util/helpers.ts");
        /* harmony import */


        var _util_console__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../util/console */
        "./src/util/console.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Styles
        // Extensions
        // Components
        // Mixins
        // TODO: Move this into core components v2.0
        // Utilities

        /* harmony default export */


        __webpack_exports__["default"] = _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
          name: 'v-carousel',
          props: {
            continuous: {
              type: Boolean,
              default: true
            },
            cycle: Boolean,
            delimiterIcon: {
              type: String,
              default: '$delimiter'
            },
            height: {
              type: [Number, String],
              default: 500
            },
            hideDelimiters: Boolean,
            hideDelimiterBackground: Boolean,
            interval: {
              type: [Number, String],
              default: 6000,
              validator: function validator(value) {
                return value > 0;
              }
            },
            mandatory: {
              type: Boolean,
              default: true
            },
            progress: Boolean,
            progressColor: String,
            showArrows: {
              type: Boolean,
              default: true
            },
            verticalDelimiters: {
              type: String,
              default: undefined
            }
          },
          // pass down the parent's theme
          provide: function provide() {
            return {
              parentTheme: this.theme
            };
          },
          data: function data() {
            return {
              internalHeight: this.height,
              slideTimeout: undefined
            };
          },
          computed: {
            classes: function classes() {
              return __assign(__assign({}, _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.classes.call(this)), {
                'v-carousel': true,
                'v-carousel--hide-delimiter-background': this.hideDelimiterBackground,
                'v-carousel--vertical-delimiters': this.isVertical
              });
            },
            isDark: function isDark() {
              return this.dark || !this.light;
            },
            isVertical: function isVertical() {
              return this.verticalDelimiters != null;
            }
          },
          watch: {
            internalValue: 'restartTimeout',
            interval: 'restartTimeout',
            height: function height(val, oldVal) {
              if (val === oldVal || !val) return;
              this.internalHeight = val;
            },
            cycle: function cycle(val) {
              if (val) {
                this.restartTimeout();
              } else {
                clearTimeout(this.slideTimeout);
                this.slideTimeout = undefined;
              }
            }
          },
          created: function created() {
            /* istanbul ignore next */
            if (this.$attrs.hasOwnProperty('hide-controls')) {
              Object(_util_console__WEBPACK_IMPORTED_MODULE_7__["breaking"])('hide-controls', ':show-arrows="false"', this);
            }
          },
          mounted: function mounted() {
            this.startTimeout();
          },
          methods: {
            genControlIcons: function genControlIcons() {
              if (this.isVertical) return null;
              return _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.genControlIcons.call(this);
            },
            genDelimiters: function genDelimiters() {
              return this.$createElement('div', {
                staticClass: 'v-carousel__controls',
                style: {
                  left: this.verticalDelimiters === 'left' && this.isVertical ? 0 : 'auto',
                  right: this.verticalDelimiters === 'right' ? 0 : 'auto'
                }
              }, [this.genItems()]);
            },
            genItems: function genItems() {
              var _this = this;

              var length = this.items.length;
              var children = [];

              for (var i = 0; i < length; i++) {
                var child = this.$createElement(_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  staticClass: 'v-carousel__controls__item',
                  attrs: {
                    'aria-label': this.$vuetify.lang.t('$vuetify.carousel.ariaLabel.delimiter', i + 1, length)
                  },
                  props: {
                    icon: true,
                    small: true,
                    value: this.getValue(this.items[i], i)
                  }
                }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  props: {
                    size: 18
                  }
                }, this.delimiterIcon)]);
                children.push(child);
              }

              return this.$createElement(_mixins_button_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
                props: {
                  value: this.internalValue,
                  mandatory: this.mandatory
                },
                on: {
                  change: function change(val) {
                    _this.internalValue = val;
                  }
                }
              }, children);
            },
            genProgress: function genProgress() {
              return this.$createElement(_VProgressLinear__WEBPACK_IMPORTED_MODULE_4__["default"], {
                staticClass: 'v-carousel__progress',
                props: {
                  color: this.progressColor,
                  value: (this.internalIndex + 1) / this.items.length * 100
                }
              });
            },
            restartTimeout: function restartTimeout() {
              this.slideTimeout && clearTimeout(this.slideTimeout);
              this.slideTimeout = undefined;
              window.requestAnimationFrame(this.startTimeout);
            },
            startTimeout: function startTimeout() {
              if (!this.cycle) return;
              this.slideTimeout = window.setTimeout(this.next, +this.interval > 0 ? +this.interval : 6000);
            }
          },
          render: function render(h) {
            var render = _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__["default"].options.render.call(this, h);

            render.data.style = "height: " + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["convertToUnit"])(this.height) + ";";
            /* istanbul ignore else */

            if (!this.hideDelimiters) {
              render.children.push(this.genDelimiters());
            }
            /* istanbul ignore else */


            if (this.progress || this.progressColor) {
              render.children.push(this.genProgress());
            }

            return render;
          }
        });
        /***/
      },

      /***/
      "./src/components/VCarousel/VCarouselItem.ts":
      /*!***************************************************!*\
        !*** ./src/components/VCarousel/VCarouselItem.ts ***!
        \***************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVCarouselVCarouselItemTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../VWindow/VWindowItem */
        "./src/components/VWindow/VWindowItem.ts");
        /* harmony import */


        var _VImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../VImg */
        "./src/components/VImg/index.ts");
        /* harmony import */


        var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../util/mixins */
        "./src/util/mixins.ts");
        /* harmony import */


        var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../util/helpers */
        "./src/util/helpers.ts");
        /* harmony import */


        var _mixins_routable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../mixins/routable */
        "./src/mixins/routable/index.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Extensions
        // Components
        // Utilities
        // Types


        var baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])(_VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_routable__WEBPACK_IMPORTED_MODULE_4__["default"]);
        /* @vue/component */

        /* harmony default export */

        __webpack_exports__["default"] = baseMixins.extend().extend({
          name: 'v-carousel-item',
          inject: {
            parentTheme: {
              default: {
                isDark: false
              }
            }
          },
          // pass down the parent's theme
          provide: function provide() {
            return {
              theme: this.parentTheme
            };
          },
          inheritAttrs: false,
          methods: {
            genDefaultSlot: function genDefaultSlot() {
              return [this.$createElement(_VImg__WEBPACK_IMPORTED_MODULE_1__["VImg"], {
                staticClass: 'v-carousel__item',
                props: __assign(__assign({}, this.$attrs), {
                  height: this.windowGroup.internalHeight
                }),
                on: this.$listeners,
                scopedSlots: {
                  placeholder: this.$scopedSlots.placeholder
                }
              }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["getSlot"])(this))];
            },
            genWindowItem: function genWindowItem() {
              var _a = this.generateRouteLink(),
                  tag = _a.tag,
                  data = _a.data;

              data.staticClass = 'v-window-item';
              data.directives.push({
                name: 'show',
                value: this.isActive
              });
              return this.$createElement(tag, data, this.genDefaultSlot());
            }
          }
        });
        /***/
      },

      /***/
      "./src/components/VCarousel/index.ts":
      /*!*******************************************!*\
        !*** ./src/components/VCarousel/index.ts ***!
        \*******************************************/

      /*! exports provided: VCarousel, VCarouselItem, default */

      /***/
      function srcComponentsVCarouselIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VCarousel */
        "./src/components/VCarousel/VCarousel.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VCarousel", function () {
          return _VCarousel__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony import */


        var _VCarouselItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./VCarouselItem */
        "./src/components/VCarousel/VCarouselItem.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VCarouselItem", function () {
          return _VCarouselItem__WEBPACK_IMPORTED_MODULE_1__["default"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = {
          $_vuetify_subcomponents: {
            VCarousel: _VCarousel__WEBPACK_IMPORTED_MODULE_0__["default"],
            VCarouselItem: _VCarouselItem__WEBPACK_IMPORTED_MODULE_1__["default"]
          }
        };
        /***/
      },

      /***/
      "./src/components/VCheckbox/VCheckbox.sass":
      /*!*************************************************!*\
        !*** ./src/components/VCheckbox/VCheckbox.sass ***!
        \*************************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVCheckboxVCheckboxSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VCheckbox/VCheckbox.ts":
      /*!***********************************************!*\
        !*** ./src/components/VCheckbox/VCheckbox.ts ***!
        \***********************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVCheckboxVCheckboxTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VCheckbox.sass */
        "./src/components/VCheckbox/VCheckbox.sass");
        /* harmony import */


        var _VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../styles/components/_selection-controls.sass */
        "./src/styles/components/_selection-controls.sass");
        /* harmony import */


        var _styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../VIcon */
        "./src/components/VIcon/index.ts");
        /* harmony import */


        var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../VInput */
        "./src/components/VInput/index.ts");
        /* harmony import */


        var _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../mixins/selectable */
        "./src/mixins/selectable/index.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        };

        var __rest = undefined && undefined.__rest || function (s, e) {
          var t = {};

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
          }

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        }; // Styles
        // Components
        // Mixins

        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__["default"].extend({
          name: 'v-checkbox',
          props: {
            indeterminate: Boolean,
            indeterminateIcon: {
              type: String,
              default: '$checkboxIndeterminate'
            },
            offIcon: {
              type: String,
              default: '$checkboxOff'
            },
            onIcon: {
              type: String,
              default: '$checkboxOn'
            }
          },
          data: function data() {
            return {
              inputIndeterminate: this.indeterminate
            };
          },
          computed: {
            classes: function classes() {
              return __assign(__assign({}, _VInput__WEBPACK_IMPORTED_MODULE_3__["default"].options.computed.classes.call(this)), {
                'v-input--selection-controls': true,
                'v-input--checkbox': true,
                'v-input--indeterminate': this.inputIndeterminate
              });
            },
            computedIcon: function computedIcon() {
              if (this.inputIndeterminate) {
                return this.indeterminateIcon;
              } else if (this.isActive) {
                return this.onIcon;
              } else {
                return this.offIcon;
              }
            },
            // Do not return undefined if disabled,
            // according to spec, should still show
            // a color when disabled and active
            validationState: function validationState() {
              if (this.isDisabled && !this.inputIndeterminate) return undefined;
              if (this.hasError && this.shouldValidate) return 'error';
              if (this.hasSuccess) return 'success';
              if (this.hasColor !== null) return this.computedColor;
              return undefined;
            }
          },
          watch: {
            indeterminate: function indeterminate(val) {
              var _this = this; // https://github.com/vuetifyjs/vuetify/issues/8270


              this.$nextTick(function () {
                return _this.inputIndeterminate = val;
              });
            },
            inputIndeterminate: function inputIndeterminate(val) {
              this.$emit('update:indeterminate', val);
            },
            isActive: function isActive() {
              if (!this.indeterminate) return;
              this.inputIndeterminate = false;
            }
          },
          methods: {
            genCheckbox: function genCheckbox() {
              var _a = this.attrs$,
                  title = _a.title,
                  checkboxAttrs = __rest(_a, ["title"]);

              return this.$createElement('div', {
                staticClass: 'v-input--selection-controls__input'
              }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], this.setTextColor(this.validationState, {
                props: {
                  dense: this.dense,
                  dark: this.dark,
                  light: this.light
                }
              }), this.computedIcon), this.genInput('checkbox', __assign(__assign({}, checkboxAttrs), {
                'aria-checked': this.inputIndeterminate ? 'mixed' : this.isActive.toString()
              })), this.genRipple(this.setTextColor(this.rippleState))]);
            },
            genDefaultSlot: function genDefaultSlot() {
              return [this.genCheckbox(), this.genLabel()];
            }
          }
        });
        /***/
      },

      /***/
      "./src/components/VCheckbox/VSimpleCheckbox.sass":
      /*!*******************************************************!*\
        !*** ./src/components/VCheckbox/VSimpleCheckbox.sass ***!
        \*******************************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVCheckboxVSimpleCheckboxSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VCheckbox/VSimpleCheckbox.ts":
      /*!*****************************************************!*\
        !*** ./src/components/VCheckbox/VSimpleCheckbox.ts ***!
        \*****************************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVCheckboxVSimpleCheckboxTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VSimpleCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VSimpleCheckbox.sass */
        "./src/components/VCheckbox/VSimpleCheckbox.sass");
        /* harmony import */


        var _VSimpleCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VSimpleCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _directives_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../directives/ripple */
        "./src/directives/ripple/index.ts");
        /* harmony import */


        var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! vue */
        "vue");
        /* harmony import */


        var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../VIcon */
        "./src/components/VIcon/index.ts");
        /* harmony import */


        var _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../mixins/colorable */
        "./src/mixins/colorable/index.ts");
        /* harmony import */


        var _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../../mixins/themeable */
        "./src/mixins/themeable/index.ts");
        /* harmony import */


        var _util_mergeData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../util/mergeData */
        "./src/util/mergeData.ts");
        /* harmony import */


        var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../util/helpers */
        "./src/util/helpers.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        }; // Mixins
        // Utilities

        /* harmony default export */


        __webpack_exports__["default"] = vue__WEBPACK_IMPORTED_MODULE_2___default.a.extend({
          name: 'v-simple-checkbox',
          functional: true,
          directives: {
            ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_1__["default"]
          },
          props: __assign(__assign(__assign({}, _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__["default"].options.props), _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__["default"].options.props), {
            disabled: Boolean,
            ripple: {
              type: Boolean,
              default: true
            },
            value: Boolean,
            indeterminate: Boolean,
            indeterminateIcon: {
              type: String,
              default: '$checkboxIndeterminate'
            },
            onIcon: {
              type: String,
              default: '$checkboxOn'
            },
            offIcon: {
              type: String,
              default: '$checkboxOff'
            }
          }),
          render: function render(h, _a) {
            var props = _a.props,
                data = _a.data,
                listeners = _a.listeners;
            var children = [];
            var icon = props.offIcon;
            if (props.indeterminate) icon = props.indeterminateIcon;else if (props.value) icon = props.onIcon;
            children.push(h(_VIcon__WEBPACK_IMPORTED_MODULE_3__["VIcon"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__["default"].options.methods.setTextColor(props.value && props.color, {
              props: {
                disabled: props.disabled,
                dark: props.dark,
                light: props.light
              }
            }), icon));

            if (props.ripple && !props.disabled) {
              var ripple_1 = h('div', _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__["default"].options.methods.setTextColor(props.color, {
                staticClass: 'v-input--selection-controls__ripple',
                directives: [{
                  name: 'ripple',
                  value: {
                    center: true
                  }
                }]
              }));
              children.push(ripple_1);
            }

            return h('div', Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_6__["default"])(data, {
              class: {
                'v-simple-checkbox': true,
                'v-simple-checkbox--disabled': props.disabled
              },
              on: {
                click: function click(e) {
                  e.stopPropagation();

                  if (data.on && data.on.input && !props.disabled) {
                    Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["wrapInArray"])(data.on.input).forEach(function (f) {
                      return f(!props.value);
                    });
                  }
                }
              }
            }), [h('div', {
              staticClass: 'v-input--selection-controls__input'
            }, children)]);
          }
        });
        /***/
      },

      /***/
      "./src/components/VCheckbox/index.ts":
      /*!*******************************************!*\
        !*** ./src/components/VCheckbox/index.ts ***!
        \*******************************************/

      /*! exports provided: VCheckbox, VSimpleCheckbox, default */

      /***/
      function srcComponentsVCheckboxIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VCheckbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VCheckbox */
        "./src/components/VCheckbox/VCheckbox.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VCheckbox", function () {
          return _VCheckbox__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony import */


        var _VSimpleCheckbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./VSimpleCheckbox */
        "./src/components/VCheckbox/VSimpleCheckbox.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VSimpleCheckbox", function () {
          return _VSimpleCheckbox__WEBPACK_IMPORTED_MODULE_1__["default"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = {
          $_vuetify_subcomponents: {
            VCheckbox: _VCheckbox__WEBPACK_IMPORTED_MODULE_0__["default"],
            VSimpleCheckbox: _VSimpleCheckbox__WEBPACK_IMPORTED_MODULE_1__["default"]
          }
        };
        /***/
      },

      /***/
      "./src/components/VChip/VChip.sass":
      /*!*****************************************!*\
        !*** ./src/components/VChip/VChip.sass ***!
        \*****************************************/

      /*! no static exports found */

      /***/
      function srcComponentsVChipVChipSass(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/components/VChip/VChip.ts":
      /*!***************************************!*\
        !*** ./src/components/VChip/VChip.ts ***!
        \***************************************/

      /*! exports provided: default */

      /***/
      function srcComponentsVChipVChipTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VChip_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VChip.sass */
        "./src/components/VChip/VChip.sass");
        /* harmony import */


        var _VChip_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VChip_sass__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../util/mixins */
        "./src/util/mixins.ts");
        /* harmony import */


        var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../transitions */
        "./src/components/transitions/index.ts");
        /* harmony import */


        var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../VIcon */
        "./src/components/VIcon/index.ts");
        /* harmony import */


        var _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../mixins/colorable */
        "./src/mixins/colorable/index.ts");
        /* harmony import */


        var _mixins_groupable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../../mixins/groupable */
        "./src/mixins/groupable/index.ts");
        /* harmony import */


        var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../mixins/themeable */
        "./src/mixins/themeable/index.ts");
        /* harmony import */


        var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../mixins/toggleable */
        "./src/mixins/toggleable/index.ts");
        /* harmony import */


        var _mixins_routable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../../mixins/routable */
        "./src/mixins/routable/index.ts");
        /* harmony import */


        var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ../../mixins/sizeable */
        "./src/mixins/sizeable/index.ts");
        /* harmony import */


        var _util_console__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../../util/console */
        "./src/util/console.ts");

        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return __assign.apply(this, arguments);
        };

        var __read = undefined && undefined.__read || function (o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
              r,
              ar = [],
              e;

          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
              ar.push(r.value);
            }
          } catch (error) {
            e = {
              error: error
            };
          } finally {
            try {
              if (r && !r.done && (m = i["return"])) m.call(i);
            } finally {
              if (e) throw e.error;
            }
          }

          return ar;
        }; // Styles
        // Components
        // Mixins
        // Utilities

        /* @vue/component */

        /* harmony default export */


        __webpack_exports__["default"] = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_sizeable__WEBPACK_IMPORTED_MODULE_9__["default"], _mixins_routable__WEBPACK_IMPORTED_MODULE_8__["default"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_5__["factory"])('chipGroup'), Object(_mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__["factory"])('inputValue')).extend({
          name: 'v-chip',
          props: {
            active: {
              type: Boolean,
              default: true
            },
            activeClass: {
              type: String,
              default: function _default() {
                if (!this.chipGroup) return '';
                return this.chipGroup.activeClass;
              }
            },
            close: Boolean,
            closeIcon: {
              type: String,
              default: '$delete'
            },
            closeLabel: {
              type: String,
              default: '$vuetify.close'
            },
            disabled: Boolean,
            draggable: Boolean,
            filter: Boolean,
            filterIcon: {
              type: String,
              default: '$complete'
            },
            label: Boolean,
            link: Boolean,
            outlined: Boolean,
            pill: Boolean,
            tag: {
              type: String,
              default: 'span'
            },
            textColor: String,
            value: null
          },
          data: function data() {
            return {
              proxyClass: 'v-chip--active'
            };
          },
          computed: {
            classes: function classes() {
              return __assign(__assign(__assign(__assign(__assign({
                'v-chip': true
              }, _mixins_routable__WEBPACK_IMPORTED_MODULE_8__["default"].options.computed.classes.call(this)), {
                'v-chip--clickable': this.isClickable,
                'v-chip--disabled': this.disabled,
                'v-chip--draggable': this.draggable,
                'v-chip--label': this.label,
                'v-chip--link': this.isLink,
                'v-chip--no-color': !this.color,
                'v-chip--outlined': this.outlined,
                'v-chip--pill': this.pill,
                'v-chip--removable': this.hasClose
              }), this.themeClasses), this.sizeableClasses), this.groupClasses);
            },
            hasClose: function hasClose() {
              return Boolean(this.close);
            },
            isClickable: function isClickable() {
              return Boolean(_mixins_routable__WEBPACK_IMPORTED_MODULE_8__["default"].options.computed.isClickable.call(this) || this.chipGroup);
            }
          },
          created: function created() {
            var _this = this;

            var breakingProps = [['outline', 'outlined'], ['selected', 'input-value'], ['value', 'active'], ['@input', '@active.sync']];
            /* istanbul ignore next */

            breakingProps.forEach(function (_a) {
              var _b = __read(_a, 2),
                  original = _b[0],
                  replacement = _b[1];

              if (_this.$attrs.hasOwnProperty(original)) Object(_util_console__WEBPACK_IMPORTED_MODULE_10__["breaking"])(original, replacement, _this);
            });
          },
          methods: {
            click: function click(e) {
              this.$emit('click', e);
              this.chipGroup && this.toggle();
            },
            genFilter: function genFilter() {
              var children = [];

              if (this.isActive) {
                children.push(this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  staticClass: 'v-chip__filter',
                  props: {
                    left: true
                  }
                }, this.filterIcon));
              }

              return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_2__["VExpandXTransition"], children);
            },
            genClose: function genClose() {
              var _this = this;

              return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                staticClass: 'v-chip__close',
                props: {
                  right: true,
                  size: 18
                },
                attrs: {
                  'aria-label': this.$vuetify.lang.t(this.closeLabel)
                },
                on: {
                  click: function click(e) {
                    e.stopPropagation();
                    e.preventDefault();

                    _this.$emit('click:close');

                    _this.$emit('update:active', false);
                  }
                }
              }, this.closeIcon);
            },
            genContent: function genContent() {
              return this.$createElement('span', {
                staticClass: 'v-chip__content'
              }, [this.filter && this.genFilter(), this.$slots.default, this.hasClose && this.genClose()]);
            }
          },
          render: function render(h) {
            var children = [this.genContent()];

            var _a = this.generateRouteLink(),
                tag = _a.tag,
                data = _a.data;

            data.attrs = __assign(__assign({}, data.attrs), {
              draggable: this.draggable ? 'true' : undefined,
              tabindex: this.chipGroup && !this.disabled ? 0 : data.attrs.tabindex
            });
            data.directives.push({
              name: 'show',
              value: this.active
            });
            data = this.setBackgroundColor(this.color, data);
            var color = this.textColor || this.outlined && this.color;
            return h(tag, this.setTextColor(color, data), children);
          }
        });
        /***/
      },

      /***/
      "./src/components/VChip/index.ts":
      /*!***************************************!*\
        !*** ./src/components/VChip/index.ts ***!
        \***************************************/

      /*! exports provided: VChip, default */

      /***/
      function srcComponentsVChipIndexTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _VChip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./VChip */
        "./src/components/VChip/VChip.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "VChip", function () {
          return _VChip__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = _VChip__WEBPACK_IMPORTED_MODULE_0__["default"];
        /***/
      },

      /***/
      "./src/components/VChipGroup/VChipGroup.sass":
      /*!***************************************************!*\
        !*** ./src/components/VChipGroup/VChipGroup.sass ***!
        \***************************************************/

      /*! no static exports found */

      /***/
