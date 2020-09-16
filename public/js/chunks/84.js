(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/extra-components/I18n.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/extra-components/I18n.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      locale: this.$i18n.locale
    };
  },
  watch: {
    locale: function locale(val) {
      this.$i18n.locale = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/extra-components/I18n.vue?vue&type=template&id=af36ffaa&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/extra-components/I18n.vue?vue&type=template&id=af36ffaa& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-i18n" } },
    [
      _c(
        "vx-card",
        { attrs: { title: "Change Locale" } },
        [
          _c("span", [
            _vm._v("Your Current Locale: "),
            _c("strong", [_vm._v(_vm._s(this.$i18n.locale))])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex flex-col" },
            [
              _c(
                "vs-radio",
                {
                  staticClass: "mt-3",
                  attrs: { "vs-value": "en" },
                  model: {
                    value: _vm.locale,
                    callback: function($$v) {
                      _vm.locale = $$v
                    },
                    expression: "locale"
                  }
                },
                [_c("span", { staticClass: "mr-2" }, [_vm._v("English")])]
              ),
              _vm._v(" "),
              _c(
                "vs-radio",
                {
                  staticClass: "mt-3",
                  attrs: { "vs-value": "fr" },
                  model: {
                    value: _vm.locale,
                    callback: function($$v) {
                      _vm.locale = $$v
                    },
                    expression: "locale"
                  }
                },
                [_c("span", { staticClass: "mr-2" }, [_vm._v("French")])]
              ),
              _vm._v(" "),
              _c(
                "vs-radio",
                {
                  staticClass: "mt-3",
                  attrs: { "vs-value": "de" },
                  model: {
                    value: _vm.locale,
                    callback: function($$v) {
                      _vm.locale = $$v
                    },
                    expression: "locale"
                  }
                },
                [_c("span", { staticClass: "mr-2" }, [_vm._v("German")])]
              ),
              _vm._v(" "),
              _c(
                "vs-radio",
                {
                  staticClass: "mt-3",
                  attrs: { "vs-value": "pt" },
                  model: {
                    value: _vm.locale,
                    callback: function($$v) {
                      _vm.locale = $$v
                    },
                    expression: "locale"
                  }
                },
                [_c("span", { staticClass: "mr-2" }, [_vm._v("Portuguese")])]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vx-card",
            {
              staticClass: "mt-base",
              attrs: {
                title: _vm.$t("demoTitle"),
                "no-shadow": "",
                "card-border": ""
              }
            },
            [_c("p", [_vm._v(_vm._s(_vm.$t("demoText")))])]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/components/extra-components/I18n.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/components/extra-components/I18n.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _I18n_vue_vue_type_template_id_af36ffaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./I18n.vue?vue&type=template&id=af36ffaa& */ "./resources/js/src/views/components/extra-components/I18n.vue?vue&type=template&id=af36ffaa&");
/* harmony import */ var _I18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./I18n.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/extra-components/I18n.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _I18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _I18n_vue_vue_type_template_id_af36ffaa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _I18n_vue_vue_type_template_id_af36ffaa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/extra-components/I18n.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/extra-components/I18n.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/components/extra-components/I18n.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./I18n.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/extra-components/I18n.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/extra-components/I18n.vue?vue&type=template&id=af36ffaa&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/components/extra-components/I18n.vue?vue&type=template&id=af36ffaa& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_template_id_af36ffaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./I18n.vue?vue&type=template&id=af36ffaa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/extra-components/I18n.vue?vue&type=template&id=af36ffaa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_template_id_af36ffaa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_template_id_af36ffaa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);