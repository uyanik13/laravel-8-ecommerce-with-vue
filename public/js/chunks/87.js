(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/extra-components/import-export/ExportSelected.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/extra-components/import-export/ExportSelected.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
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
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      fileName: '',
      formats: ['xlsx', 'csv', 'txt'],
      cellAutoWidth: true,
      selectedFormat: 'xlsx',
      headerTitle: ['Id', 'Email', 'Username', 'Name', 'Website'],
      headerVal: ['id', 'email', 'username', 'name', 'website'],
      users: [{
        'id': 1,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'website': 'hildegard.org'
      }, {
        'id': 2,
        'name': 'Ervin Howell',
        'username': 'Antonette',
        'email': 'Shanna@melissa.tv',
        'website': 'anastasia.net'
      }, {
        'id': 3,
        'name': 'Clementine Bauch',
        'username': 'Samantha',
        'email': 'Nathan@yesenia.net',
        'website': 'ramiro.info'
      }, {
        'id': 4,
        'name': 'Patricia Lebsack',
        'username': 'Karianne',
        'email': 'Julianne.OConner@kory.org',
        'website': 'kale.biz'
      }, {
        'id': 5,
        'name': 'Chelsey Dietrich',
        'username': 'Kamren',
        'email': 'Lucio_Hettinger@annie.ca',
        'website': 'demarco.info'
      }, {
        'id': 6,
        'name': 'Mrs. Dennis Schulist',
        'username': 'Leopoldo_Corkery',
        'email': 'Karley_Dach@jasper.info',
        'website': 'ola.org'
      }, {
        'id': 7,
        'name': 'Kurtis Weissnat',
        'username': 'Elwyn.Skiles',
        'email': 'Telly.Hoeger@billy.biz',
        'website': 'elvis.io'
      }, {
        'id': 8,
        'name': 'Nicholas Runolfsdottir V',
        'username': 'Maxime_Nienow',
        'email': 'Sherwood@rosamond.me',
        'website': 'jacynthe.com'
      }, {
        'id': 9,
        'name': 'Glenna Reichert',
        'username': 'Delphine',
        'email': 'Chaim_McDermott@dana.io',
        'website': 'conrad.com'
      }, {
        'id': 10,
        'name': 'Clementina DuBuque',
        'username': 'Moriah.Stanton',
        'email': 'Rey.Padberg@karina.biz',
        'website': 'ambrose.net'
      }],
      selectedUsers: [],
      activePrompt: false
    };
  },
  methods: {
    exportToExcel: function exportToExcel() {
      var _this = this;

      Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! @/vendor/Export2Excel */ "./resources/js/src/vendor/Export2Excel.js")).then(function (excel) {
        var list = _this.selectedUsers;

        var data = _this.formatJson(_this.headerVal, list);

        excel.export_json_to_excel({
          header: _this.headerTitle,
          data: data,
          filename: _this.fileName,
          autoWidth: _this.cellAutoWidth,
          bookType: _this.selectedFormat
        });

        _this.clearFields();
      });
    },
    formatJson: function formatJson(filterVal, jsonData) {
      return jsonData.map(function (v) {
        return filterVal.map(function (j) {
          // Add col name which needs to be translated
          // if (j === 'timestamp') {
          //   return parseTime(v[j])
          // } else {
          //   return v[j]
          // }
          return v[j];
        });
      });
    },
    clearFields: function clearFields() {
      this.fileName = '';
      this.cellAutoWidth = true;
      this.selectedFormat = 'xlsx';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/extra-components/import-export/ExportSelected.vue?vue&type=template&id=4ac6ab0f&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/extra-components/import-export/ExportSelected.vue?vue&type=template&id=4ac6ab0f& ***!
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
    "vx-card",
    [
      _c(
        "vs-prompt",
        {
          staticClass: "export-options",
          attrs: {
            title: "Export To Excel",
            "accept-text": "Export",
            active: _vm.activePrompt
          },
          on: {
            cancle: _vm.clearFields,
            accept: _vm.exportToExcel,
            close: _vm.clearFields,
            "update:active": function($event) {
              _vm.activePrompt = $event
            }
          }
        },
        [
          _c("vs-input", {
            staticClass: "w-full",
            attrs: { placeholder: "Enter File Name.." },
            model: {
              value: _vm.fileName,
              callback: function($$v) {
                _vm.fileName = $$v
              },
              expression: "fileName"
            }
          }),
          _vm._v(" "),
          _c("v-select", {
            staticClass: "my-4",
            attrs: { options: _vm.formats },
            model: {
              value: _vm.selectedFormat,
              callback: function($$v) {
                _vm.selectedFormat = $$v
              },
              expression: "selectedFormat"
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex" },
            [
              _c("span", { staticClass: "mr-4" }, [_vm._v("Cell Auto Width:")]),
              _vm._v(" "),
              _c(
                "vs-switch",
                {
                  model: {
                    value: _vm.cellAutoWidth,
                    callback: function($$v) {
                      _vm.cellAutoWidth = $$v
                    },
                    expression: "cellAutoWidth"
                  }
                },
                [_vm._v("Cell Auto Width")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "export-table" },
        [
          _c(
            "vs-table",
            {
              attrs: { data: _vm.users, multiple: "", search: "" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(tr, indextr) {
                      return _c(
                        "vs-tr",
                        { key: indextr, attrs: { data: tr } },
                        [
                          _c("vs-td", [_vm._v(_vm._s(data[indextr].email))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(data[indextr].username))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(data[indextr].website))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(data[indextr].id))])
                        ],
                        1
                      )
                    })
                  }
                }
              ]),
              model: {
                value: _vm.selectedUsers,
                callback: function($$v) {
                  _vm.selectedUsers = $$v
                },
                expression: "selectedUsers"
              }
            },
            [
              _c(
                "template",
                { slot: "header" },
                [
                  _c(
                    "vs-button",
                    {
                      on: {
                        click: function($event) {
                          _vm.activePrompt = true
                        }
                      }
                    },
                    [_vm._v("Export Selected")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v(" Email   ")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v(" Name    ")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v(" Website ")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v(" Nro     ")])
                ],
                1
              )
            ],
            2
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

/***/ "./resources/js/src/views/components/extra-components/import-export/ExportSelected.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/components/extra-components/import-export/ExportSelected.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExportSelected_vue_vue_type_template_id_4ac6ab0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExportSelected.vue?vue&type=template&id=4ac6ab0f& */ "./resources/js/src/views/components/extra-components/import-export/ExportSelected.vue?vue&type=template&id=4ac6ab0f&");
/* harmony import */ var _ExportSelected_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExportSelected.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/extra-components/import-export/ExportSelected.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExportSelected_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExportSelected_vue_vue_type_template_id_4ac6ab0f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExportSelected_vue_vue_type_template_id_4ac6ab0f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/extra-components/import-export/ExportSelected.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/extra-components/import-export/ExportSelected.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/extra-components/import-export/ExportSelected.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExportSelected_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExportSelected.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/extra-components/import-export/ExportSelected.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExportSelected_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/extra-components/import-export/ExportSelected.vue?vue&type=template&id=4ac6ab0f&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/extra-components/import-export/ExportSelected.vue?vue&type=template&id=4ac6ab0f& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExportSelected_vue_vue_type_template_id_4ac6ab0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExportSelected.vue?vue&type=template&id=4ac6ab0f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/extra-components/import-export/ExportSelected.vue?vue&type=template&id=4ac6ab0f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExportSelected_vue_vue_type_template_id_4ac6ab0f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExportSelected_vue_vue_type_template_id_4ac6ab0f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);