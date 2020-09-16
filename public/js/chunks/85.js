(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/extra-components/access-control/AccessControl.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/extra-components/access-control/AccessControl.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      userRole: this.$acl.get[0]
    };
  },
  watch: {
    userRole: function userRole(val) {
      this.$store.dispatch('updateUserRole', {
        aclChangeRole: this.$acl.change,
        userRole: val
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/extra-components/access-control/AccessControl.vue?vue&type=template&id=7346554b&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/extra-components/access-control/AccessControl.vue?vue&type=template&id=7346554b& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "access-conttrol-editor" } },
    [
      _c(
        "vx-card",
        [
          _c("p", [
            _vm._v("Your current role is "),
            _c("strong", [_vm._v(_vm._s(_vm.$acl.get[0]))]),
            _vm._v(".")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "demo-alignment mb-base" },
            [
              _c(
                "vs-radio",
                {
                  attrs: { "vs-value": "editor" },
                  model: {
                    value: _vm.userRole,
                    callback: function($$v) {
                      _vm.userRole = $$v
                    },
                    expression: "userRole"
                  }
                },
                [_vm._v("Editor")]
              ),
              _vm._v(" "),
              _c(
                "vs-radio",
                {
                  attrs: { "vs-value": "admin" },
                  model: {
                    value: _vm.userRole,
                    callback: function($$v) {
                      _vm.userRole = $$v
                    },
                    expression: "userRole"
                  }
                },
                [_vm._v("Admin")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vx-card",
            {
              attrs: {
                title: "Buttons",
                "no-shadow": "",
                "card-border": "",
                "code-toggler": ""
              }
            },
            [
              _c(
                "vs-button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.$acl.check("editor"),
                      expression: "$acl.check('editor')"
                    }
                  ],
                  staticClass: "mr-4 mb-2"
                },
                [_vm._v("Editor And Admin")]
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.$acl.check("admin"),
                      expression: "$acl.check('admin')"
                    }
                  ]
                },
                [_vm._v("Only Admin")]
              ),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  '\n<vs-button v-show="$acl.check(\'editor\')" class="mr-4">Editor And Admin</vs-button>\n<vs-button v-show="$acl.check(\'admin\')">Only Admin</vs-button>\n                '
                )
              ])
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "vx-card",
            {
              staticClass: "mt-base",
              attrs: {
                title: "Collapse",
                "no-shadow": "",
                "card-border": "",
                "code-toggler": ""
              }
            },
            [
              _c(
                "div",
                { attrs: { slot: "no-body" }, slot: "no-body" },
                [
                  _c(
                    "vs-collapse",
                    [
                      _c("vs-collapse-item", [
                        _c(
                          "div",
                          { attrs: { slot: "header" }, slot: "header" },
                          [_vm._v("Article 1")]
                        ),
                        _vm._v(
                          "\n\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante. Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a tortor viverra, ornare tellus in, consectetur leo.\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit. Vestibulum iaculis nibh commodo neque ultrices lobortis. Cras magna massa, pretium vitae mattis varius, pharetra nec massa. Aliquam ac ex enim. Quisque consequat dui libero, vel blandit lorem porttitor sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam sed lobortis nisl, quis eleifend metus.\n                  "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-collapse-item", [
                        _c(
                          "div",
                          { attrs: { slot: "header" }, slot: "header" },
                          [_vm._v("Article 2")]
                        ),
                        _vm._v(
                          "\n\n                    Nunc auctor et leo vitae suscipit. Nullam aliquet purus scelerisque enim hendrerit tristique. Maecenas tincidunt dui arcu, a aliquet nisl venenatis vitae. Praesent mauris ligula, porta at maximus ac, rutrum vitae sapien. Donec a sapien id erat dapibus dignissim sodales in est. Donec gravida dapibus sapien at sollicitudin. Maecenas iaculis quam ex,\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    eu aliquam erat sagittis eget. Suspendisse mollis felis nec ipsum vehicula, at posuere libero viverra. Nam hendrerit dapibus eleifend. Aliquam elit nulla, tincidunt pellentesque enim mollis, consectetur placerat enim. Integer condimentum tristique ante et ullamcorper. Mauris placerat pretium ex. Nam aliquam sed tortor sit amet\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    efficitur. Mauris quis faucibus nulla. Pellentesque egestas non ipsum vel maximus.\n                  "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-collapse-item",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.$acl.check("admin"),
                              expression: "$acl.check('admin')"
                            }
                          ]
                        },
                        [
                          _c(
                            "div",
                            { attrs: { slot: "header" }, slot: "header" },
                            [_vm._v("Article 3 - Only Admin")]
                          ),
                          _vm._v(
                            "\n\n                    Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu\n                  "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("vs-collapse-item", [
                        _c(
                          "div",
                          { attrs: { slot: "header" }, slot: "header" },
                          [_vm._v("Article 4")]
                        ),
                        _vm._v(
                          "\n\n                    Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus nisl. Nunc venenatis tempus finibus.\n                  "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("template", { slot: "codeContainer" }, [
                    _vm._v(
                      '\n<vs-collapse>\n    <vs-collapse-item>\n        <div slot="header">\n            Article 1\n        </div>\n        Lorem....metus.\n    </vs-collapse-item>\n    <vs-collapse-item>\n        <div slot="header">\n            Article 2\n        </div>\n        Nunc....maximus.\n    </vs-collapse-item>\n    <vs-collapse-item v-show="$acl.check(\'admin\')">\n        <div slot="header">\n            Article 3 - Only Admin\n        </div>\n        Suspendisse....eu\n    </vs-collapse-item>\n    <vs-collapse-item>\n        <div slot="header">\n            Article 4\n        </div>\n        Suspendisse....finibus.\n    </vs-collapse-item>\n</vs-collapse>\n                '
                    )
                  ])
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "vx-card",
            {
              staticClass: "mt-base",
              attrs: {
                title: "Route Protection",
                "no-shadow": "",
                "card-border": "",
                "code-toggler": ""
              }
            },
            [
              _c("p", [
                _vm._v("You can add "),
                _c("strong", [_vm._v("route protection")]),
                _vm._v(
                  " using vue-acl. Only admin can visit eCommerce Dashboard."
                )
              ]),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "mt-4",
                  attrs: {
                    to: "/dashboard/ecommerce",
                    color: _vm.$acl.check("admin") ? "primary" : "danger"
                  }
                },
                [_vm._v("visit")]
              )
            ],
            1
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

/***/ "./resources/js/src/views/components/extra-components/access-control/AccessControl.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/components/extra-components/access-control/AccessControl.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccessControl_vue_vue_type_template_id_7346554b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessControl.vue?vue&type=template&id=7346554b& */ "./resources/js/src/views/components/extra-components/access-control/AccessControl.vue?vue&type=template&id=7346554b&");
/* harmony import */ var _AccessControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccessControl.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/extra-components/access-control/AccessControl.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccessControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccessControl_vue_vue_type_template_id_7346554b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccessControl_vue_vue_type_template_id_7346554b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/extra-components/access-control/AccessControl.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/extra-components/access-control/AccessControl.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/extra-components/access-control/AccessControl.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccessControl.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/extra-components/access-control/AccessControl.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/extra-components/access-control/AccessControl.vue?vue&type=template&id=7346554b&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/extra-components/access-control/AccessControl.vue?vue&type=template&id=7346554b& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessControl_vue_vue_type_template_id_7346554b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccessControl.vue?vue&type=template&id=7346554b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/extra-components/access-control/AccessControl.vue?vue&type=template&id=7346554b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessControl_vue_vue_type_template_id_7346554b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessControl_vue_vue_type_template_id_7346554b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);