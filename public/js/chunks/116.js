(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[116],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardActions.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ui-elements/card/CardActions.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
  methods: {
    closeCardAnimationDemo: function closeCardAnimationDemo(card) {
      card.removeRefreshAnimation(3000);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardActions.vue?vue&type=template&id=9fd09252&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ui-elements/card/CardActions.vue?vue&type=template&id=9fd09252& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "vx-row" }, [
    _c(
      "div",
      { staticClass: "vx-col w-full mb-base" },
      [
        _c(
          "vx-card",
          {
            attrs: { title: "Card Actions", "action-buttons": "" },
            on: { refresh: _vm.closeCardAnimationDemo }
          },
          [
            _c(
              "table",
              {
                staticClass: "border-collapse",
                staticStyle: { width: "100%" }
              },
              [
                _c("tr", [
                  _c(
                    "th",
                    {
                      staticClass:
                        "p-2 border border-solid d-theme-border-grey-light"
                    },
                    [_vm._v("Action")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticClass:
                        "p-2 border border-solid d-theme-border-grey-light text-center"
                    },
                    [_vm._v("Icon")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticClass:
                        "p-2 border border-solid d-theme-border-grey-light"
                    },
                    [_vm._v("Detail")]
                  )
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c(
                    "td",
                    {
                      staticClass:
                        "p-2 border border-solid d-theme-border-grey-light"
                    },
                    [_vm._v("Collapse")]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass:
                        "border border-solid d-theme-border-grey-light text-center"
                    },
                    [
                      _c("feather-icon", {
                        attrs: {
                          icon: "ChevronDownIcon",
                          svgClasses: "h-5 w-5"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass:
                        "p-2 border border-solid d-theme-border-grey-light"
                    },
                    [_vm._v("Collapse card content using collapse action.")]
                  )
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c(
                    "td",
                    {
                      staticClass:
                        "p-2 border border-solid d-theme-border-grey-light"
                    },
                    [_vm._v("Refresh Content")]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass:
                        "border border-solid d-theme-border-grey-light text-center"
                    },
                    [
                      _c("feather-icon", {
                        attrs: { icon: "RotateCwIcon", svgClasses: "h-4 w-4" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass:
                        "p-2 border border-solid d-theme-border-grey-light"
                    },
                    [_vm._v("Refresh your card content using refresh action.")]
                  )
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c(
                    "td",
                    {
                      staticClass:
                        "p-2 border border-solid d-theme-border-grey-light"
                    },
                    [_vm._v("Remove Card")]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass:
                        "border border-solid d-theme-border-grey-light text-center"
                    },
                    [
                      _c("feather-icon", {
                        attrs: { icon: "XIcon", svgClasses: "h-5 w-5" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass:
                        "p-2 border border-solid d-theme-border-grey-light"
                    },
                    [_vm._v("Remove card from page using remove card action")]
                  )
                ])
              ]
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base" },
      [
        _c(
          "vx-card",
          { attrs: { title: "Collapsable Card", "collapse-action": "" } },
          [
            _c("p", { staticClass: "mb-3" }, [
              _vm._v("You can create collapsible content card by setting "),
              _c("code", [_vm._v("collapse-action")]),
              _vm._v(" prop to "),
              _c("code", [_vm._v("true")]),
              _vm._v(". By default it is set to false.")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "mb-3" }, [
              _vm._v("You can also get this action if you set "),
              _c("code", [_vm._v("action-buttons")]),
              _vm._v(" prop to "),
              _c("code", [_vm._v("true")]),
              _vm._v(".")
            ]),
            _vm._v(" "),
            _c(
              "p",
              [
                _vm._v("Click on "),
                _c("feather-icon", {
                  staticClass: "align-middle",
                  attrs: { icon: "ChevronDownIcon", svgClasses: "h-5 w-5" }
                }),
                _vm._v(" icon to see card collapse in action.")
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base" },
      [
        _c(
          "vx-card",
          { attrs: { title: "Remove Card", "remove-card-action": "" } },
          [
            _c("p", { staticClass: "mb-3" }, [
              _vm._v("You can add remove card action by setting "),
              _c("code", [_vm._v("remove-card-action")]),
              _vm._v(" prop to "),
              _c("code", [_vm._v("true")]),
              _vm._v(". By default it is set to false.")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "mb-3" }, [
              _vm._v("You can also get this action if you set "),
              _c("code", [_vm._v("action-buttons")]),
              _vm._v(" prop to "),
              _c("code", [_vm._v("true")]),
              _vm._v(".")
            ]),
            _vm._v(" "),
            _c(
              "p",
              [
                _vm._v("Click on "),
                _c("feather-icon", {
                  staticClass: "align-middle",
                  attrs: { icon: "XIcon", svgClasses: "h-4 w-4" }
                }),
                _vm._v(" icon to see close card in action.")
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base" },
      [
        _c(
          "vx-card",
          {
            attrs: { title: "Refresh Content", "refresh-content-action": "" },
            on: { refresh: _vm.closeCardAnimationDemo }
          },
          [
            _c("p", { staticClass: "mb-3" }, [
              _vm._v("You can add refresh content action by setting "),
              _c("code", [_vm._v("refresh-content-action")]),
              _vm._v(" prop to "),
              _c("code", [_vm._v("true")]),
              _vm._v(". By default it is set to false.")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "mb-3" }, [
              _vm._v("You can also get this action if you set "),
              _c("code", [_vm._v("action-buttons")]),
              _vm._v(" prop to "),
              _c("code", [_vm._v("true")]),
              _vm._v(".")
            ]),
            _vm._v(" "),
            _c(
              "p",
              [
                _vm._v("Click on "),
                _c("feather-icon", {
                  staticClass: "align-middle",
                  attrs: { icon: "RotateCwIcon", svgClasses: "h-4 w-4" }
                }),
                _vm._v(" icon to see refresh card content in action.")
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 md:mt-0" },
      [
        _c(
          "vx-card",
          {
            attrs: { title: "Action Buttons", "action-buttons": "" },
            on: { refresh: _vm.closeCardAnimationDemo }
          },
          [
            _c("p", { staticClass: "mb-2" }, [
              _vm._v("You can add all three action by setting "),
              _c("code", [_vm._v("action-buttons")]),
              _vm._v(" prop to "),
              _c("code", [_vm._v("true")]),
              _vm._v(". By default it is set to false.")
            ]),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "mb-1" },
              [
                _vm._v("Click on "),
                _c("feather-icon", {
                  staticClass: "align-middle",
                  attrs: { icon: "ChevronDownIcon", svgClasses: "h-5 w-5" }
                }),
                _vm._v(" icon to see card collapse in action.")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "mb-1" },
              [
                _vm._v("Click on "),
                _c("feather-icon", {
                  staticClass: "align-middle",
                  attrs: { icon: "RotateCwIcon", svgClasses: "h-4 w-4" }
                }),
                _vm._v(" icon to see refresh card content in action.")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "mb-1" },
              [
                _vm._v("Click on "),
                _c("feather-icon", {
                  staticClass: "align-middle",
                  attrs: { icon: "XIcon", svgClasses: "h-4 w-4" }
                }),
                _vm._v(" icon to see close card in action.")
              ],
              1
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardActions.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardActions.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardActions_vue_vue_type_template_id_9fd09252___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardActions.vue?vue&type=template&id=9fd09252& */ "./resources/js/src/views/ui-elements/card/CardActions.vue?vue&type=template&id=9fd09252&");
/* harmony import */ var _CardActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardActions.vue?vue&type=script&lang=js& */ "./resources/js/src/views/ui-elements/card/CardActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardActions_vue_vue_type_template_id_9fd09252___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardActions_vue_vue_type_template_id_9fd09252___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/ui-elements/card/CardActions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardActions.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardActions.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardActions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardActions.vue?vue&type=template&id=9fd09252&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardActions.vue?vue&type=template&id=9fd09252& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardActions_vue_vue_type_template_id_9fd09252___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardActions.vue?vue&type=template&id=9fd09252& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardActions.vue?vue&type=template&id=9fd09252&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardActions_vue_vue_type_template_id_9fd09252___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardActions_vue_vue_type_template_id_9fd09252___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);