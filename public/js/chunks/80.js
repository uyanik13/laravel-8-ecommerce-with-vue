(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/errors/ComingSoon.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/errors/ComingSoon.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chenfengyuan/vue-countdown */ "./node_modules/@chenfengyuan/vue-countdown/dist/vue-countdown.js");
/* harmony import */ var _chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0__);
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
      value1: ''
    };
  },
  components: {
    'countdown': _chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/errors/ComingSoon.vue?vue&type=template&id=71dfbbb1&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/errors/ComingSoon.vue?vue&type=template&id=71dfbbb1& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "h-screen flex w-full bg-img vx-row no-gutter justify-center items-center"
    },
    [
      _c(
        "div",
        { staticClass: "vx-col sm:w-1/2 md:w-1/2 lg:w-2/5 m-4" },
        [
          _c(
            "vx-card",
            [
              _c("div", { staticClass: "vx-card__title mb-6" }, [
                _c("h2", { staticClass: "text-center" }, [
                  _vm._v("We are launching soon")
                ])
              ]),
              _vm._v(" "),
              _c("img", {
                staticClass: "mx-auto mb-2",
                attrs: {
                  src: __webpack_require__(/*! @assets/images/pages/rocket.png */ "./resources/assets/images/pages/rocket.png"),
                  alt: "coming-soon",
                  width: "150"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "count-down text-center" },
                [
                  _c("countdown", {
                    attrs: {
                      time:
                        new Date("03/09/2021 00:00:00").getTime() -
                        new Date().getTime()
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(props) {
                          return [
                            _c("div", { staticClass: "single-counter" }, [
                              _c("span", { staticClass: "timer" }, [
                                _vm._v(_vm._s(props.days))
                              ]),
                              _vm._v(" "),
                              _c("span", [_vm._v("Days")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "single-counter" }, [
                              _c("span", { staticClass: "timer" }, [
                                _vm._v(_vm._s(props.hours))
                              ]),
                              _vm._v(" "),
                              _c("span", [_vm._v("Hours")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "single-counter" }, [
                              _c("span", { staticClass: "timer" }, [
                                _vm._v(_vm._s(props.minutes))
                              ]),
                              _vm._v(" "),
                              _c("span", [_vm._v("Minutes")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "single-counter" }, [
                              _c("span", { staticClass: "timer" }, [
                                _vm._v(_vm._s(props.seconds))
                              ]),
                              _vm._v(" "),
                              _c("span", [_vm._v("Seconds")])
                            ])
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("vs-divider", { attrs: { position: "center" } }, [
                _vm._v("Subscribe")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "subscription" },
                [
                  _c("span", [
                    _vm._v(
                      "If you would like to be notified when our app is live, Please subscribe to our mailing list."
                    )
                  ]),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-4",
                    attrs: { type: "email", "label-placeholder": "Email" },
                    model: {
                      value: _vm.value1,
                      callback: function($$v) {
                        _vm.value1 = $$v
                      },
                      expression: "value1"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-button", { staticClass: "w-full" }, [
                    _vm._v("Subscribe")
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/pages/rocket.png":
/*!**************************************************!*\
  !*** ./resources/assets/images/pages/rocket.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/rocket.png?b4878de0b1717b9296ce3f44b929b6c3";

/***/ }),

/***/ "./resources/js/src/views/pages/common/errors/ComingSoon.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/common/errors/ComingSoon.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComingSoon_vue_vue_type_template_id_71dfbbb1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComingSoon.vue?vue&type=template&id=71dfbbb1& */ "./resources/js/src/views/pages/common/errors/ComingSoon.vue?vue&type=template&id=71dfbbb1&");
/* harmony import */ var _ComingSoon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComingSoon.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/common/errors/ComingSoon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComingSoon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComingSoon_vue_vue_type_template_id_71dfbbb1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComingSoon_vue_vue_type_template_id_71dfbbb1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/common/errors/ComingSoon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/common/errors/ComingSoon.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/errors/ComingSoon.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComingSoon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ComingSoon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/errors/ComingSoon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComingSoon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/common/errors/ComingSoon.vue?vue&type=template&id=71dfbbb1&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/errors/ComingSoon.vue?vue&type=template&id=71dfbbb1& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComingSoon_vue_vue_type_template_id_71dfbbb1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ComingSoon.vue?vue&type=template&id=71dfbbb1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/errors/ComingSoon.vue?vue&type=template&id=71dfbbb1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComingSoon_vue_vue_type_template_id_71dfbbb1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComingSoon_vue_vue_type_template_id_71dfbbb1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);