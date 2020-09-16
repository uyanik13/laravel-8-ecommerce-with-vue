(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/entries */ "./node_modules/@babel/runtime/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: function _default() {}
    }
  },
  watch: {
    isSidebarActive: function isSidebarActive(val) {
      if (!val) return;

      if (_babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(this.data).length === 0) {
        this.initValues();
        this.$validator.reset();
      } else {
        var _JSON$parse = JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.data)),
            id = _JSON$parse.id,
            name = _JSON$parse.name,
            email = _JSON$parse.email,
            phone = _JSON$parse.phone,
            password = _JSON$parse.password;

        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password; //this.photo_url = photo_url

        this.initValues();
      } // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))

    }
  },
  data: function data() {
    return {
      id: null,
      name: "",
      email: null,
      phone: null,
      password: null,
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    };
  },
  computed: {
    isSidebarActiveLocal: {
      get: function get() {
        return this.isSidebarActive;
      },
      set: function set(val) {
        if (!val) {
          this.$emit('closeSidebar'); // this.$validator.reset()
          // this.initValues()
        }
      }
    },
    isFormValid: function isFormValid() {
      return !this.errors.any() && this.name && this.email && this.password && this.phone;
    }
  },
  methods: {
    initValues: function initValues() {
      if (this.data.id) return;
      this.id = null;
      this.name = "";
      this.password = "";
      this.email = null;
      this.phone = null;
    },
    submitData: function submitData() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          var obj = {
            id: _this.id,
            name: _this.name,
            email: _this.email,
            phone: _this.phone,
            password: _this.password
          };

          if (_this.id !== null && _this.id >= 0) {
            _this.$store.dispatch("userManagement/updateUser", obj).catch(function (err) {
              console.error(err);
            });
          } else {
            delete obj.id;
            obj.popularity = 0;

            _this.$store.dispatch("userManagement/addUser", obj).catch(function (err) {
              console.error(err);
            });

            _this.showCreatedSuccess();
          }

          _this.$emit('closeSidebar');

          _this.initValues();
        }
      });
    },
    showCreatedSuccess: function showCreatedSuccess() {
      this.$vs.notify({
        color: 'success',
        title: 'User Created',
        text: 'The selected user was successfully created'
      });
    } // updateCurrImg(input) {
    //   if (input.target.files && input.target.files[0]) {
    //     var reader = new FileReader()
    //     reader.onload = e => {
    //       this.photo_url = e.target.result
    //     }
    //     reader.readAsDataURL(input.target.files[0])
    //   }
    // }

  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_vuexy_extraComponents_agGridStyleOverride_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sass/vuexy/extraComponents/agGridStyleOverride.scss */ "./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss");
/* harmony import */ var _sass_vuexy_extraComponents_agGridStyleOverride_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_extraComponents_agGridStyleOverride_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _http_requests_auth_jwt_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/http/requests/auth/jwt/index.js */ "./resources/js/src/http/requests/auth/jwt/index.js");
/* harmony import */ var _store_user_management_moduleUserManagement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/user-management/moduleUserManagement.js */ "./resources/js/src/store/user-management/moduleUserManagement.js");
/* harmony import */ var _cell_renderer_CellRendererLink_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cell-renderer/CellRendererLink.vue */ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererLink.vue");
/* harmony import */ var _cell_renderer_CellRendererStatus_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cell-renderer/CellRendererStatus.vue */ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue");
/* harmony import */ var _cell_renderer_CellRendererVerified_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cell-renderer/CellRendererVerified.vue */ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererVerified.vue");
/* harmony import */ var _cell_renderer_CellRendererActions_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cell-renderer/CellRendererActions.vue */ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererActions.vue");
/* harmony import */ var _QuickViewAndAdd_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../QuickViewAndAdd.vue */ "./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // Store Module

 // Cell Renderer




 //Components


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"],
    DataViewSidebar: _QuickViewAndAdd_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    // Cell Renderer
    CellRendererLink: _cell_renderer_CellRendererLink_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    CellRendererStatus: _cell_renderer_CellRendererStatus_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    CellRendererVerified: _cell_renderer_CellRendererVerified_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    CellRendererActions: _cell_renderer_CellRendererActions_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
      allUsers: {},
      searchQuery: "",
      // AgGrid
      gridApi: null,
      gridOptions: {},
      defaultColDef: {
        sortable: true,
        resizable: true,
        suppressMenu: true
      },
      columnDefs: [{
        headerName: 'ID',
        field: 'id',
        width: 125,
        filter: true,
        checkboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        headerCheckboxSelection: true
      }, {
        headerName: 'İsim',
        field: 'name',
        filter: true,
        width: 200
      }, {
        headerName: 'Email',
        field: 'email',
        filter: true,
        width: 225
      }, {
        headerName: 'Telefon Numarası',
        field: 'phone',
        filter: true,
        width: 210
      }, {
        headerName: 'Rolü',
        field: 'role',
        filter: true,
        width: 150
      }, {
        headerName: 'Doğrulanma',
        field: 'email_verified_at',
        filter: true,
        width: 125,
        cellRendererFramework: 'CellRendererVerified',
        cellClass: "text-center"
      }, {
        headerName: 'Seçenekler',
        field: 'transactions',
        width: 150,
        cellRendererFramework: 'CellRendererActions'
      }],
      // Cell Renderer Components
      components: {
        CellRendererLink: _cell_renderer_CellRendererLink_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
        CellRendererStatus: _cell_renderer_CellRendererStatus_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
        CellRendererVerified: _cell_renderer_CellRendererVerified_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
        CellRendererActions: _cell_renderer_CellRendererActions_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
      }
    };
  },
  watch: {
    roleFilter: function roleFilter(obj) {
      this.setColumnFilter("role", obj.value);
    },
    statusFilter: function statusFilter(obj) {
      this.setColumnFilter("status", obj.value);
    },
    isVerifiedFilter: function isVerifiedFilter(obj) {
      var val = obj.value === "all" ? "all" : obj.value == "yes" ? "true" : "false";
      this.setColumnFilter("is_verified", val);
    },
    departmentFilter: function departmentFilter(obj) {
      this.setColumnFilter("department", obj.value);
    }
  },
  computed: {
    UserList: function UserList() {
      return this.$store.state.user.users;
    },
    paginationPageSize: function paginationPageSize() {
      if (this.gridApi) return this.gridApi.paginationGetPageSize();else return 10;
    },
    totalPages: function totalPages() {
      if (this.gridApi) return this.gridApi.paginationGetTotalPages();else return 0;
    },
    currentPage: {
      get: function get() {
        if (this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1;else return 1;
      },
      set: function set(val) {
        this.gridApi.paginationGoToPage(val - 1);
      }
    }
  },
  methods: {
    addNewData: function addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebarUser(true);
    },
    deleteData: function deleteData(id) {
      this.$store.dispatch("userManagement/removeRecord", id).catch(function (err) {
        console.error(err);
      });
    },
    editData: function editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data;
      this.toggleDataSidebarUser(true);
    },
    toggleDataSidebarUser: function toggleDataSidebarUser() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.addNewDataSidebar = val;
    },
    setColumnFilter: function setColumnFilter(column, val) {
      var filter = this.gridApi.getFilterInstance(column);
      var modelObj = null;

      if (val !== "all") {
        modelObj = {
          type: "equals",
          filter: val
        };
      }

      filter.setModel(modelObj);
      this.gridApi.onFilterChanged();
    },
    resetColFilters: function resetColFilters() {
      // Reset Grid Filter
      this.gridApi.setFilterModel(null);
      this.gridApi.onFilterChanged(); // Reset Filter Options

      this.roleFilter = this.statusFilter = this.isVerifiedFilter = this.departmentFilter = {
        label: 'All',
        value: 'all'
      };
      this.$refs.filterCard.removeRefreshAnimation();
    },
    updateSearchQuery: function updateSearchQuery(val) {
      this.gridApi.setQuickFilter(val);
    },
    fetchUsers: function fetchUsers() {
      var _this = this;

      _http_requests_auth_jwt_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].fetchUsers().then(function (response) {
        // Update user details
        _this.allUsers = response.data;
      });
    },
    confirmDeleteRecord: function confirmDeleteRecord() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Confirm Delete",
        text: "You are about to delete \"".concat(this.params.data.username, "\""),
        accept: this.deleteRecords,
        acceptText: "Delete"
      });
    },
    deleteRecords: function deleteRecords(id) {
      console.log(this.params);
      /* UnComment below lines for enabling true flow if deleting user */
      // this.$store.dispatch("userManagement/removeRecord", this.params.data.id)
      //   .then(()   => { this.showDeleteSuccess() })
      //   .catch(err => { console.error(err)       })
    },
    showDeleteSuccess: function showDeleteSuccess() {
      this.$vs.notify({
        color: 'success',
        title: 'User Deleted',
        text: 'The selected user was successfully deleted'
      });
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    console.log('all users', this.allUsers);
    /* =================================================================
      NOTE:
      Header is not aligned properly in RTL version of agGrid table.
      However, we given fix to this issue. If you want more robust solution please contact them at gitHub
    ================================================================= */

    if (this.$vs.rtl) {
      var header = this.$refs.agGridTable.$el.querySelector(".ag-header-container");
      header.style.left = "-" + String(Number(header.style.transform.slice(11, -3)) + 9) + "px";
    }
  },
  created: function created() {
    if (!_store_user_management_moduleUserManagement_js__WEBPACK_IMPORTED_MODULE_4__["default"].isRegistered) {
      this.$store.registerModule('userManagement', _store_user_management_moduleUserManagement_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
      _store_user_management_moduleUserManagement_js__WEBPACK_IMPORTED_MODULE_4__["default"].isRegistered = true;
    }

    this.$store.dispatch("userManagement/fetchUsers").catch(function (err) {
      console.error(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererActions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererActions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/i18n/i18n */ "./resources/js/src/i18n/i18n.js");
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CellRendererActions',
  methods: {
    editRecord: function editRecord() {
      this.$router.push("/panel/users/edit/" + this.params.data.id).catch(function () {});
      /*
        this.$router.push("/apps/user/user-edit/" + this.params.data.id).catch(() => {})
      */
    },
    confirmDeleteRecord: function confirmDeleteRecord() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('areYouSureToDeleteThis'),
        text: "".concat(_i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('areYouSureToDeleteThis'), " \"").concat(this.params.data.name, "\""),
        accept: this.deleteRecord,
        acceptText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Delete')
      });
    },
    deleteRecord: function deleteRecord() {
      var _this = this;

      /* UnComment below lines for enabling true flow if deleting user */
      this.$store.dispatch("userManagement/removeRecord", this.params.data.id).then(function () {
        _this.showDeleteSuccess();
      }).catch(function (err) {
        console.error(err);
      });
    },
    showDeleteSuccess: function showDeleteSuccess() {
      this.$vs.notify({
        color: 'success',
        title: _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('content_deleted'),
        text: _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('selected_content_deleted')
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererLink.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererLink.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CellRendererLink',
  computed: {
    url: function url() {
      return "/apps/user/user-view/268"; // Below line will be for actual product
      // Currently it's commented due to demo purpose - Above url is for demo purpose
      // return "/apps/user/user-view/" + this.params.data.id
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CellRendererStatus',
  computed: {
    chipColor: function chipColor() {
      return function (value) {
        if (value === "active") return "success";else if (value === "blocked") return "danger";else if (value === "deactivated") return "warning";else "primary";
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererVerified.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererVerified.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CellRendererVerified',
  computed: {
    textColor: function textColor() {
      return this.params.value ? "text-primary" : "text-grey";
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n\n/*=========================================================================================\n    File Name: agGridStyleOverride.scss\n    Description: Override ag-grid table style/SASS vars\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/**\n ****************************\n * Generic Styles\n ****************************\n*/\n\nag-grid, ag-grid-angular, ag-grid-ng2, ag-grid-polymer, ag-grid-aurelia {\n  display: block;\n}\n\n.ag-hidden {\n  display: none !important;\n}\n\n.ag-invisible {\n  visibility: hidden !important;\n}\n\n.ag-faded {\n  opacity: 0.3;\n}\n\n.ag-width-half {\n  display: inline-block;\n  width: 50% !important;\n}\n\n.ag-unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n\n.ag-selectable {\n  -webkit-user-select: text !important;\n     -moz-user-select: text !important;\n      -ms-user-select: text !important;\n          user-select: text !important;\n}\n\n.ag-select-agg-func-popup {\n  position: absolute;\n}\n\n.ag-input-wrapper {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  line-height: normal;\n  position: relative;\n  overflow: hidden;\n}\n\n[dir=ltr] .ag-shake-left-to-right {\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name:  ag-shake-left-to-right-ltr ;\n          animation-name:  ag-shake-left-to-right-ltr ;\n}\n\n[dir=rtl] .ag-shake-left-to-right {\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name:  ag-shake-left-to-right-rtl ;\n          animation-name:  ag-shake-left-to-right-rtl ;\n}\n\n@-webkit-keyframes ag-shake-left-to-right-ltr {\n  from {\n    padding-left: 6px;\n    padding-right: 2px;\n  }\n\n  to {\n    padding-left: 2px;\n    padding-right: 6px;\n  }\n}\n\n@keyframes ag-shake-left-to-right-ltr {\n  from {\n    padding-left: 6px;\n    padding-right: 2px;\n  }\n\n  to {\n    padding-left: 2px;\n    padding-right: 6px;\n  }\n}\n\n@-webkit-keyframes ag-shake-left-to-right-rtl {\n  from {\n    padding-left: 6px;\n    padding-right: 2px;\n  }\n\n  to {\n    padding-left: 2px;\n    padding-right: 6px;\n  }\n}\n\n@keyframes ag-shake-left-to-right-rtl {\n  from {\n    padding-left: 6px;\n    padding-right: 2px;\n  }\n\n  to {\n    padding-left: 2px;\n    padding-right: 6px;\n  }\n}\n\n.ag-root-wrapper {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.ag-root-wrapper.ag-layout-normal {\n  height: 100%;\n}\n\n.ag-root-wrapper .ag-watermark {\n  position: absolute;\n  bottom: 10px;\n  opacity: 0.5;\n  transition: opacity 1s ease-out 3s;\n}\n\n[dir=ltr] .ag-root-wrapper .ag-watermark {\n  right: 25px;\n}\n\n[dir=rtl] .ag-root-wrapper .ag-watermark {\n  left: 25px;\n}\n\n.ag-root-wrapper .ag-watermark:before {\n  content: \"\";\n  -webkit-filter: invert(50%);\n          filter: invert(50%);\n  display: block;\n  height: 60px;\n  width: 110px;\n}\n\n[dir] .ag-root-wrapper .ag-watermark:before {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDk0cHgiIGhlaWdodD0iMjM5cHgiIHZpZXdCb3g9IjAgMCA0OTQgMjM5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ny4xICg0NTQyMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+TG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0wLjYxMjg0OTkzMSwxMDggTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgQzAuNjEyODQ5OTMxLDYyLjEwMDY1MzYgMy40NzE4MzM3OCw1Ny4xNDg3NDgzIDguMTEyODQ5OTMsNTQuNDY5MjU2NCBMOTguMzA2NDI1LDIuMzk1OTcxNTcgTDk4LjMwNjQyNSwyLjM5NTk3MTU3IEMxMDIuOTQ3NDQxLC0wLjI4MzUyMDM1OCAxMDguNjY1NDA5LC0wLjI4MzUyMDM1OCAxMTMuMzA2NDI1LDIuMzk1OTcxNTcgTDExMy4zMDY0MjUsMi4zOTU5NzE1NyBMMjAzLjUsNTQuNDY5MjU2NCBMMjAzLjUsNTQuNDY5MjU2NCBDMjA4LjE0MTAxNiw1Ny4xNDg3NDgzIDIxMSw2Mi4xMDA2NTM2IDIxMSw2Ny40NTk2Mzc0IEwyMTEsMTM4IEwxODEsMTM4IEwxODAuOTk3MDQxLDkzLjk5OTk5OTggTDE4MC45OTYwMzIsOTMuOTk5OTk5OSBDMTgwLjk5NTQ3NSw4NS43MTYxMjI2IDE3NC4yNzk5MDksNzkuMDAxMDA4NyAxNjUuOTk2MDMyLDc5LjAwMTAwODcgTDEyMiw3OC45OTk5OTk5IEMxMTMuNzE1NzI5LDc4Ljk5OTk5OTkgMTA3LDg1LjcxNTcyODYgMTA3LDkzLjk5OTk5OTkgTDEwNywxMzYuMDE1NjIzIEwxMDcsMTM2LjAxNTYyMyBDMTA3LDE0NC4yOTk4OTUgMTEzLjcxNTcyOSwxNTEuMDE1NjIzIDEyMiwxNTEuMDE1NjIzIEwxNjgsMTUxLjAxNTYyMyBMMTY4LDE2MyBDMTY4LDE2NC42NTY4NTQgMTY2LjY1Njg1NCwxNjYgMTY1LDE2NiBMMTIwLDE2NiBMMTIwLDE3OSBMMTY1Ljk5NjAzMiwxNzkgTDE2NS45OTYwMzIsMTc4Ljk5Nzg3NyBDMTc0LjI3OTQ3NCwxNzguOTk3ODc3IDE4MC45OTQ4NiwxNzIuMjgzNDQyIDE4MC45OTYwMzIsMTY0IEwxODEsMTUwLjk2MDU1NCBMMjExLDE1MC45NjA1NTQgTDIxMSwxNzEuNjA2MjA3IEwyMTEsMTcxLjYwNjIwNyBDMjExLDE3Ni45NjUxOTEgMjA4LjE0MTAxNiwxODEuOTE3MDk2IDIwMy41LDE4NC41OTY1ODggTDExMy4zMDY0MjUsMjM2LjY2OTg3MyBMMTEzLjMwNjQyNSwyMzYuNjY5ODczIEMxMDguNjY1NDA5LDIzOS4zNDkzNjUgMTAyLjk0NzQ0MSwyMzkuMzQ5MzY1IDk4LjMwNjQyNSwyMzYuNjY5ODczIEw4LjExMjg0OTkzLDE4NC41OTY1ODggTDguMTEyODQ5OTMsMTg0LjU5NjU4OCBDMy40NzE4MzM3OCwxODEuOTE3MDk2IDAuNjEyODQ5OTMxLDE3Ni45NjUxOTEgMC42MTI4NDk5MzEsMTcxLjYwNjIwNyBMMC42MTI4NDk5MzEsMTIxIEwyNywxMjEgTDI3LDEzNiBDMjcsMTQ0LjI4NDI3MSAzMy43MTU3Mjg3LDE1MSA0MiwxNTEgTDQyLDE1MSBMMTAwLDE1MSBMMTAwLDk0IEMxMDAsODUuNzE1NzI4OCA5My4yODQyNzEyLDc5IDg1LDc5IEwyNyw3OSBMMjcsOTIgTDg0LDkyIEM4NS42NTY4NTQyLDkyIDg3LDkzLjM0MzE0NTggODcsOTUgTDg3LDk1IEw4NywxMDggTDAuNjEyODQ5OTMxLDEwOCBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkxvZ28iPgogICAgICAgICAgICA8cGF0aCBkPSJNNDc3LDU1IEw0OTQsNTUgTDQ5NCwxNTEgTDQzNSwxNTEgQzQyNi43MTU3MjksMTUxIDQyMCwxNDQuMjg0MjcxIDQyMCwxMzYgTDQyMCw5NiBDNDIwLDg3LjcxNTcyODggNDI2LjcxNTcyOSw4MSA0MzUsODEgTDQzNSw4MSBMNDc3LDgxIEw0NzcsNTUgWiBNNDQwLDk4IEM0MzguMzQzMTQ2LDk4IDQzNyw5OS4zNDMxNDU4IDQzNywxMDEgTDQzNywxMzEgQzQzNywxMzIuNjU2ODU0IDQzOC4zNDMxNDYsMTM0IDQ0MCwxMzQgTDQ3NywxMzQgTDQ3Nyw5OCBMNDQwLDk4IFoiIGlkPSJkIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTYuMDAwMDAwLCA1NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTYiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMCAyNiAxNyAyNiAxNyA5NiAwIDk2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aC03IiBmaWxsPSIjRTExRjIyIiBwb2ludHM9IjAgMS4xMzY4NjgzOGUtMTMgMTcgMS4xMzY4NjgzOGUtMTMgMTcgMTcgMCAxNyI+PC9wb2x5Z29uPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMzEsMTUxIEwzNDgsMTUxIEwzNDgsMTAxIEwzNDgsMTAxIEMzNDgsOTkuMzQzMTQ1OCAzNDkuMzQzMTQ2LDk4IDM1MSw5OCBMMzg5LDk4IEwzODksODEgTDM0Niw4MSBMMzQ2LDgxIEMzMzcuNzE1NzI5LDgxIDMzMSw4Ny43MTU3Mjg4IDMzMSw5NiBMMzMxLDE1MSBaIiBpZD0iciIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzI0LDg2IEwzMjQsNzYgTDMyNCw3NiBDMzI0LDY3LjcxNTcyODggMzE3LjI4NDI3MSw2MSAzMDksNjEgTDI0OSw2MSBMMjQ5LDYxIEMyNDAuNzE1NzI5LDYxIDIzNCw2Ny43MTU3Mjg4IDIzNCw3NiBMMjM0LDEzNiBMMjM0LDEzNiBDMjM0LDE0NC4yODQyNzEgMjQwLjcxNTcyOSwxNTEgMjQ5LDE1MSBMMzA5LDE1MSBMMzA5LDE1MSBDMzE3LjI4NDI3MSwxNTEgMzI0LDE0NC4yODQyNzEgMzI0LDEzNiBMMzI0LDEwMCBMMjg3LDEwMCBMMjg3LDExNyBMMzA3LDExNyBMMzA3LDEzMSBMMzA3LDEzMSBDMzA3LDEzMi42NTY4NTQgMzA1LjY1Njg1NCwxMzQgMzA0LDEzNCBMMjU0LDEzNCBMMjU0LDEzNCBDMjUyLjM0MzE0NiwxMzQgMjUxLDEzMi42NTY4NTQgMjUxLDEzMSBMMjUxLDgxIEwyNTEsODEgQzI1MSw3OS4zNDMxNDU4IDI1Mi4zNDMxNDYsNzggMjU0LDc4IEwzMDQsNzggTDMwNCw3OCBDMzA1LjY1Njg1NCw3OCAzMDcsNzkuMzQzMTQ1OCAzMDcsODEgTDMwNyw4NiBMMzI0LDg2IFoiIGlkPSJHIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJhZyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRTExRjIyIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJnIiBmaWxsPSIjRTExRjIyIiB4PSIxMjAiIHk9IjkyIiB3aWR0aD0iNDgiIGhlaWdodD0iNDYiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDAsMTIxIEw4NywxMjEgTDg3LDEzOCBMNDMsMTM4IEw0MywxMzggQzQxLjM0MzE0NTgsMTM4IDQwLDEzNi42NTY4NTQgNDAsMTM1IEw0MCwxMjEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRTExRjIyIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);\n  background-repeat: no-repeat;\n  background-size: 110px 60px;\n}\n\n.ag-root-wrapper .ag-watermark .ag-watermark-text {\n  opacity: 0.5;\n  font-weight: bold;\n  font-family: Impact;\n  font-size: 19px;\n}\n\n.ag-root-wrapper-body {\n  display: flex;\n  flex-direction: row;\n}\n\n.ag-root-wrapper-body.ag-layout-normal {\n  flex: 1 1 auto;\n  height: 0;\n  min-height: 0;\n}\n\n.ag-root {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n[dir] .ag-root {\n  cursor: default;\n}\n\n.ag-root.ag-layout-normal, .ag-root.ag-layout-auto-height {\n  overflow: hidden;\n  flex: 1 1 auto;\n  width: 0;\n}\n\n.ag-root.ag-layout-normal {\n  height: 100%;\n}\n\n/**\n ****************************\n * Viewports\n ****************************\n*/\n\n.ag-header-viewport,\n.ag-floating-top-viewport,\n.ag-body-viewport,\n.ag-pinned-left-cols-viewport,\n.ag-center-cols-viewport,\n.ag-pinned-right-cols-viewport,\n.ag-floating-bottom-viewport,\n.ag-body-horizontal-scroll-viewport,\n.ag-virtual-list-viewport {\n  position: relative;\n  height: 100%;\n  min-width: 0px;\n  overflow: hidden;\n  flex: 1 1 auto;\n}\n\n.ag-body-viewport {\n  display: flex;\n}\n\n.ag-body-viewport.ag-layout-normal {\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.ag-body-viewport:not(.ag-layout-print).ag-force-vertical-scroll {\n  overflow-y: scroll;\n}\n\n.ag-pinned-left-cols-viewport, .ag-pinned-right-cols-viewport {\n  flex-grow: 1000;\n}\n\n.ag-center-cols-viewport {\n  width: 100%;\n  overflow-x: auto;\n}\n\n.ag-body-horizontal-scroll-viewport {\n  overflow-x: scroll;\n}\n\n.ag-virtual-list-viewport {\n  overflow: auto;\n  width: 100%;\n}\n\n/**\n ****************************\n * Containers\n ****************************\n*/\n\n.ag-header-container,\n.ag-floating-top-container,\n.ag-body-container,\n.ag-pinned-right-cols-container,\n.ag-center-cols-container,\n.ag-pinned-left-cols-container,\n.ag-floating-bottom-container,\n.ag-body-horizontal-scroll-container,\n.ag-full-width-container,\n.ag-floating-bottom-full-width-container,\n.ag-virtual-list-container {\n  position: relative;\n}\n\n.ag-header-container, .ag-floating-top-container, .ag-floating-bottom-container {\n  height: 100%;\n  white-space: nowrap;\n}\n\n.ag-body-viewport .ag-center-cols-clipper {\n  min-height: 100%;\n}\n\n.ag-body-viewport.ag-layout-auto-height .ag-center-cols-clipper, .ag-body-viewport.ag-layout-auto-height .ag-center-cols-container {\n  min-height: 50px;\n}\n\n.ag-body-viewport .ag-center-cols-container {\n  display: block;\n}\n\n.ag-body-viewport.ag-layout-print {\n  flex: none;\n}\n\n.ag-body-viewport.ag-layout-print .ag-center-cols-clipper {\n  min-width: 100%;\n}\n\n.ag-pinned-right-cols-container {\n  display: block;\n}\n\n.ag-body-horizontal-scroll-container {\n  height: 100%;\n}\n\n.ag-full-width-container,\n.ag-floating-top-full-width-container,\n.ag-floating-bottom-full-width-container {\n  position: absolute;\n  top: 0px;\n  pointer-events: none;\n}\n\n[dir=ltr] .ag-full-width-container, [dir=ltr] .ag-floating-top-full-width-container, [dir=ltr] .ag-floating-bottom-full-width-container {\n  left: 0px;\n}\n\n[dir=rtl] .ag-full-width-container, [dir=rtl] .ag-floating-top-full-width-container, [dir=rtl] .ag-floating-bottom-full-width-container {\n  right: 0px;\n}\n\n.ag-full-width-container {\n  width: 100%;\n}\n\n.ag-floating-bottom-full-width-container, .ag-floating-top-full-width-container {\n  display: inline-block;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n\n.ag-virtual-list-container {\n  overflow: hidden;\n}\n\n/**\n ****************************\n * Scrollers\n ****************************\n*/\n\n.ag-center-cols-clipper {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n\n.ag-body-horizontal-scroll {\n  min-height: 0;\n  min-width: 0;\n  width: 100%;\n  display: flex;\n  position: relative;\n}\n\n.ag-layout-print .ag-body-horizontal-scroll {\n  display: none;\n}\n\n.ag-horizontal-left-spacer, .ag-horizontal-right-spacer {\n  height: 100%;\n  min-width: 0;\n  flex-grow: 1000;\n  overflow-x: scroll;\n}\n\n.ag-horizontal-left-spacer.ag-scroller-corner, .ag-horizontal-right-spacer.ag-scroller-corner {\n  overflow-x: hidden;\n}\n\n/**\n ****************************\n * Headers\n ****************************\n*/\n\n.ag-header, .ag-pinned-left-header, .ag-pinned-right-header {\n  display: inline-block;\n  overflow: hidden;\n}\n\n[dir] .ag-header .ag-header-cell-sortable, [dir] .ag-pinned-left-header .ag-header-cell-sortable, [dir] .ag-pinned-right-header .ag-header-cell-sortable {\n  cursor: pointer;\n}\n\n.ag-header {\n  display: flex;\n  width: 100%;\n  white-space: nowrap;\n}\n\n.ag-header-icon {\n  display: flex;\n}\n\n.ag-pinned-left-header {\n  height: 100%;\n}\n\n.ag-pinned-right-header {\n  height: 100%;\n}\n\n.ag-header-row {\n  position: absolute;\n  overflow: hidden;\n}\n\n.ag-header-overlay {\n  display: block;\n  position: absolute;\n}\n\n.ag-header-cell {\n  display: inline-flex;\n  align-items: center;\n  position: absolute;\n  height: 100%;\n  overflow: hidden;\n}\n\n.ag-header-group-cell-label, .ag-header-cell-label {\n  display: flex;\n  flex: 1 1 auto;\n  overflow: hidden;\n  align-items: center;\n  text-overflow: ellipsis;\n  align-self: stretch;\n}\n\n.ag-header-cell-label .ag-header-cell-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-numeric-header .ag-header-cell-label {\n  flex-direction: row-reverse;\n}\n\n.ag-header-group-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-header-cell-resize {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  width: 4px;\n}\n\n[dir=ltr] .ag-header-expand-icon {\n  padding-left: 4px;\n}\n\n[dir=rtl] .ag-header-expand-icon {\n  padding-right: 4px;\n}\n\n.ag-header-select-all {\n  display: flex;\n}\n\n/**\n ****************************\n * Columns\n ****************************\n*/\n\n[dir=ltr] .ag-column-moving .ag-cell {\n  transition: left 0.2s;\n}\n\n[dir=rtl] .ag-column-moving .ag-cell {\n  transition: right 0.2s;\n}\n\n[dir=ltr] .ag-column-moving .ag-header-cell {\n  transition: left 0.2s;\n}\n\n[dir=rtl] .ag-column-moving .ag-header-cell {\n  transition: right 0.2s;\n}\n\n[dir=ltr] .ag-column-moving .ag-header-group-cell {\n  transition: left 0.2s, width 0.2s;\n}\n\n[dir=rtl] .ag-column-moving .ag-header-group-cell {\n  transition: right 0.2s, width 0.2s;\n}\n\n/**\n ****************************\n * Column Panel\n ****************************\n*/\n\n.ag-column-panel {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  flex: 1 1 auto;\n}\n\n.ag-column-select-panel {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  flex-grow: 4;\n  flex-shrink: 1;\n  flex-basis: 0;\n}\n\n.ag-column-select-panel .ag-primary-cols-header-panel {\n  display: flex;\n  flex: none;\n}\n\n.ag-column-select-panel .ag-primary-cols-header-panel .ag-column-name-filter {\n  flex: 1 1 auto;\n}\n\n.ag-column-select-panel .ag-primary-cols-header-panel .ag-primary-cols-filter-wrapper {\n  flex: 1 1 auto;\n}\n\n.ag-column-select-panel .ag-primary-cols-header-panel .ag-primary-cols-filter-wrapper input {\n  width: 100%;\n}\n\n.ag-column-select-panel .ag-primary-cols-list-panel {\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\n.ag-column-drop {\n  display: inline-flex;\n  align-items: center;\n  overflow: auto;\n  width: 100%;\n}\n\n.ag-column-drop .ag-column-drop-list {\n  display: flex;\n  align-items: center;\n}\n\n.ag-column-drop .ag-column-drop-list .ag-column-drop-cell {\n  display: flex;\n  align-items: center;\n}\n\n.ag-column-drop .ag-column-drop-list .ag-column-drop-cell .ag-column-drop-cell-text {\n  overflow: hidden;\n  flex: 1 1 auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-column-drop.ag-column-drop-vertical {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  flex: 1 1 0;\n  align-items: stretch;\n}\n\n.ag-column-drop.ag-column-drop-vertical > div {\n  display: flex;\n  align-items: center;\n}\n\n.ag-column-drop.ag-column-drop-vertical .ag-column-drop-list {\n  align-items: stretch;\n  flex-grow: 1;\n  flex-direction: column;\n  overflow-x: auto;\n}\n\n.ag-column-drop.ag-column-drop-vertical .ag-column-drop-empty-message {\n  display: block;\n}\n\n.ag-column-drop.ag-column-drop-horizontal {\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n/**\n ****************************\n * Rows\n ****************************\n*/\n\n.ag-row-animation .ag-row {\n  transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s;\n}\n\n.ag-row-no-animation .ag-row {\n  transition: background-color 0.1s;\n}\n\n.ag-row {\n  white-space: nowrap;\n  width: 100%;\n}\n\n.ag-row-position-absolute {\n  position: absolute;\n}\n\n.ag-row-position-relative {\n  position: relative;\n}\n\n.ag-full-width-row {\n  overflow: hidden;\n  pointer-events: all;\n}\n\n.ag-row-inline-editing {\n  z-index: 1;\n}\n\n.ag-row-dragging {\n  z-index: 2;\n}\n\n.ag-stub-cell {\n  display: flex;\n  align-items: center;\n}\n\n/**\n ****************************\n * Cells\n ****************************\n*/\n\n.ag-cell {\n  display: inline-block;\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-cell-wrapper {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.ag-cell-wrapper.ag-row-group {\n  align-items: flex-start;\n}\n\n.ag-cell-wrapper .ag-cell-value, .ag-cell-wrapper .ag-group-value {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ag-full-width-row.ag-row-group .ag-cell-wrapper {\n  align-items: center;\n}\n\n.ag-cell-with-height {\n  height: 100%;\n}\n\n.ag-group-cell-entire-row {\n  display: inline-block;\n  height: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n\n.ag-footer-cell-entire-row {\n  display: inline-block;\n  height: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n\n.ag-cell-inline-editing {\n  z-index: 1;\n}\n\n.ag-cell-inline-editing .ag-cell-edit-input, .ag-cell-inline-editing .ag-input-wrapper {\n  height: 100%;\n  width: 100%;\n  line-height: normal;\n}\n\n/**\n ****************************\n * Filters\n ****************************\n*/\n\n.ag-set-filter-item {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n}\n\n.ag-set-filter-item > div, .ag-set-filter-item > span {\n  display: flex;\n}\n\n.ag-filter .ag-filter-checkbox {\n  pointer-events: none;\n}\n\n.ag-filter .ag-filter-body-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.ag-filter .ag-filter-filter {\n  flex: 1 1 auto;\n}\n\n/**\n ****************************\n * Floating Filter\n ****************************\n*/\n\n.ag-floating-filter-full-body .ag-react-container, .ag-floating-filter-body .ag-react-container {\n  height: 100%;\n}\n\n.ag-floating-filter-body {\n  display: flex;\n  flex: 1 1 auto;\n  height: 100%;\n}\n\n.ag-floating-filter-body input {\n  flex: 1 1 auto;\n  max-height: calc(100% - 1px);\n}\n\n[dir] .ag-floating-filter-body input {\n  margin: 0;\n}\n\n.ag-floating-filter-full-body {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.ag-floating-filter-full-body > div {\n  flex: 1 1 auto;\n}\n\n.ag-floating-filter-full-body input {\n  width: 100%;\n}\n\n[dir] .ag-floating-filter-full-body input {\n  margin: 0;\n}\n\n.ag-floating-filter-full-body input[type=range] {\n  height: 100%;\n}\n\n.ag-floating-filter {\n  display: inline-block;\n  position: absolute;\n}\n\n.ag-floating-filter-input {\n  width: 100%;\n}\n\n[dir] .ag-floating-filter-input:-moz-read-only {\n  background-color: #eee;\n}\n\n[dir] .ag-floating-filter-input:read-only {\n  background-color: #eee;\n}\n\n.ag-floating-filter-menu {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.ag-floating-filter-button {\n  display: flex;\n  flex: none;\n}\n\n/**\n ****************************\n * Drag & Drop\n ****************************\n*/\n\n.ag-dnd-ghost {\n  display: flex;\n  align-items: center;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 10;\n}\n\n[dir] .ag-dnd-ghost {\n  background: #e5e5e5;\n  border: 1px solid black;\n  cursor: move;\n  padding: 3px;\n}\n\n[dir] .ag-dnd-ghost-icon {\n  padding: 2px;\n}\n\n/**\n ****************************\n * Overlay\n ****************************\n*/\n\n.ag-overlay {\n  height: 100%;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n[dir=ltr] .ag-overlay {\n  left: 0;\n}\n\n[dir=rtl] .ag-overlay {\n  right: 0;\n}\n\n.ag-overlay-panel {\n  display: flex;\n  height: 100%;\n  pointer-events: none;\n  width: 100%;\n}\n\n.ag-overlay-wrapper {\n  display: flex;\n  flex: none;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n[dir] .ag-overlay-wrapper {\n  text-align: center;\n}\n\n.ag-overlay-wrapper.ag-overlay-loading-wrapper {\n  pointer-events: all;\n}\n\n[dir] .ag-overlay-no-rows-wrapper.ag-layout-auto-height {\n  padding-top: 30px;\n}\n\n/**\n ****************************\n * Popup\n ****************************\n*/\n\n.ag-popup > div {\n  z-index: 5;\n}\n\n.ag-popup-backdrop {\n  height: 100%;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n[dir=ltr] .ag-popup-backdrop {\n  left: 0;\n}\n\n[dir=rtl] .ag-popup-backdrop {\n  right: 0;\n}\n\n.ag-popup-editor {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 1;\n}\n\n/**\n ****************************\n * Virtual Lists\n ****************************\n*/\n\n.ag-virtual-list-item {\n  position: absolute;\n  width: 100%;\n}\n\n[dir=ltr] .ag-virtual-list-item span:empty:not(.ag-icon) {\n  border-left: 1px solid transparent;\n}\n\n[dir=rtl] .ag-virtual-list-item span:empty:not(.ag-icon) {\n  border-right: 1px solid transparent;\n}\n\n/**\n ****************************\n * Floating Top and Bottom\n ****************************\n*/\n\n.ag-floating-top {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  position: relative;\n  display: flex;\n}\n\n.ag-pinned-left-floating-top {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n  flex-grow: 1000;\n}\n\n.ag-pinned-right-floating-top {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n  flex-grow: 1000;\n}\n\n.ag-floating-bottom {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  position: relative;\n  display: flex;\n}\n\n.ag-pinned-left-floating-bottom {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n  flex-grow: 1000;\n}\n\n.ag-pinned-right-floating-bottom {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n  flex-grow: 1000;\n}\n\n/**\n ****************************\n * Dialog\n ****************************\n*/\n\n.ag-dialog, .ag-panel {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden;\n}\n\n.ag-dialog .ag-title-bar, .ag-panel .ag-title-bar {\n  display: flex;\n  flex: none;\n  align-items: center;\n}\n\n[dir] .ag-dialog .ag-title-bar, [dir] .ag-panel .ag-title-bar {\n  cursor: default;\n}\n\n.ag-dialog .ag-title-bar .ag-title-bar-title, .ag-panel .ag-title-bar .ag-title-bar-title {\n  flex: 1 1 auto;\n}\n\n.ag-dialog .ag-title-bar .ag-title-bar-buttons, .ag-panel .ag-title-bar .ag-title-bar-buttons {\n  display: flex;\n}\n\n[dir] .ag-dialog .ag-title-bar .ag-title-bar-buttons .ag-button, [dir] .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button {\n  cursor: pointer;\n}\n\n.ag-dialog .ag-panel-content-wrapper, .ag-panel .ag-panel-content-wrapper {\n  display: flex;\n  flex: 1 1 auto;\n  position: relative;\n  overflow: hidden;\n}\n\n.ag-dialog .ag-panel-content-wrapper > div, .ag-panel .ag-panel-content-wrapper > div {\n  width: 100%;\n  height: 100%;\n}\n\n.ag-dialog {\n  position: absolute;\n}\n\n.ag-dialog .ag-resizer {\n  position: absolute;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-topLeft {\n  top: 0;\n  height: 5px;\n  width: 5px;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-topLeft {\n  left: 0;\n  cursor: nwse-resize;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-topLeft {\n  right: 0;\n  cursor: nesw-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-top {\n  top: 0;\n  height: 5px;\n}\n\n[dir] .ag-dialog .ag-resizer.ag-resizer-top {\n  cursor: ns-resize;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-top {\n  left: 5px;\n  right: 5px;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-top {\n  right: 5px;\n  left: 5px;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-topRight {\n  top: 0;\n  height: 5px;\n  width: 5px;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-topRight {\n  right: 0;\n  cursor: nesw-resize;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-topRight {\n  left: 0;\n  cursor: nwse-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-right {\n  top: 5px;\n  bottom: 5px;\n  width: 5px;\n}\n\n[dir] .ag-dialog .ag-resizer.ag-resizer-right {\n  cursor: ew-resize;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-right {\n  right: 0;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-right {\n  left: 0;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-bottomRight {\n  bottom: 0;\n  height: 5px;\n  width: 5px;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-bottomRight {\n  right: 0;\n  cursor: nwse-resize;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-bottomRight {\n  left: 0;\n  cursor: nesw-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-bottom {\n  bottom: 0;\n  height: 5px;\n}\n\n[dir] .ag-dialog .ag-resizer.ag-resizer-bottom {\n  cursor: ns-resize;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-bottom {\n  left: 5px;\n  right: 5px;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-bottom {\n  right: 5px;\n  left: 5px;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-bottomLeft {\n  bottom: 0;\n  height: 5px;\n  width: 5px;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-bottomLeft {\n  left: 0;\n  cursor: nesw-resize;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-bottomLeft {\n  right: 0;\n  cursor: nwse-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-left {\n  top: 5px;\n  bottom: 5px;\n  width: 5px;\n}\n\n[dir] .ag-dialog .ag-resizer.ag-resizer-left {\n  cursor: ew-resize;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-left {\n  left: 0;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-left {\n  right: 0;\n}\n\n.ag-dialog .ag-message-box {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.ag-dialog .ag-message-box .ag-message-box-content {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: center;\n  align-items: center;\n}\n\n.ag-dialog .ag-message-box .ag-message-box-button-bar {\n  display: flex;\n  justify-content: center;\n}\n\n/**\n ****************************\n * Tooltip\n ****************************\n*/\n\n.ag-tooltip {\n  position: absolute;\n  pointer-events: none;\n  z-index: 99999;\n}\n\n.ag-chart-tooltip {\n  display: table;\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  white-space: nowrap;\n  z-index: 99999;\n  font: 12px Verdana, sans-serif;\n  color: black;\n  opacity: 0;\n  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);\n}\n\n[dir] .ag-chart-tooltip {\n  background: #f4f4f4;\n  border-radius: 5px;\n  transform: scale(0.9);\n  transition-property: opacity, transform;\n}\n\n[dir=ltr] .ag-chart-tooltip {\n  box-shadow: 0 0 1px rgba(3, 3, 3, 0.7), 0.5vh 0.5vh 1vh rgba(3, 3, 3, 0.25);\n}\n\n[dir=rtl] .ag-chart-tooltip {\n  box-shadow: 0 0 1px rgba(3, 3, 3, 0.7), -0.5vh 0.5vh 1vh rgba(3, 3, 3, 0.25);\n}\n\n.ag-chart-tooltip.visible {\n  opacity: 1;\n}\n\n[dir] .ag-chart-tooltip.visible {\n  transform: scale(1);\n}\n\n.ag-chart-tooltip .title {\n  font-weight: bold;\n  color: white;\n}\n\n[dir] .ag-chart-tooltip .title {\n  padding: 7px;\n  background-color: #888888;\n}\n\n[dir=ltr] .ag-chart-tooltip .title {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n[dir=rtl] .ag-chart-tooltip .title {\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n\n.ag-chart-tooltip .content {\n  line-height: 1.7em;\n}\n\n[dir] .ag-chart-tooltip .content {\n  padding: 7px;\n}\n\n/**\n ****************************\n * Animations\n ****************************\n*/\n\n.ag-value-slide-out {\n  opacity: 1;\n}\n\n[dir] .ag-value-slide-out {\n  transition-timing-function: linear;\n}\n\n[dir=ltr] .ag-value-slide-out {\n  margin-right: 5px;\n  transition: opacity 3s, margin-right 3s;\n}\n\n[dir=rtl] .ag-value-slide-out {\n  margin-left: 5px;\n  transition: opacity 3s, margin-left 3s;\n}\n\n.ag-value-slide-out-end {\n  opacity: 0;\n}\n\n[dir=ltr] .ag-value-slide-out-end {\n  margin-right: 10px;\n}\n\n[dir=rtl] .ag-value-slide-out-end {\n  margin-left: 10px;\n}\n\n.ag-opacity-zero {\n  opacity: 0 !important;\n}\n\n/**\n ****************************\n * Menu\n ****************************\n*/\n\n.ag-menu {\n  max-height: 100%;\n  overflow-y: auto;\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.ag-menu-column-select-wrapper {\n  height: 265px;\n  overflow: auto;\n  width: 200px;\n}\n\n.ag-menu-list {\n  display: table;\n}\n\n.ag-menu-option, .ag-menu-separator {\n  display: table-row;\n}\n\n.ag-menu-option > span, .ag-menu-separator > span {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.ag-menu-option-text {\n  white-space: nowrap;\n}\n\n.ag-menu-column-select-wrapper .ag-column-select-panel {\n  height: 100%;\n}\n\n/**\n ****************************\n * Rich Select\n ****************************\n*/\n\n.ag-rich-select {\n  outline: none;\n}\n\n[dir] .ag-rich-select {\n  cursor: default;\n}\n\n.ag-rich-select .ag-rich-select-value {\n  display: flex;\n  align-items: center;\n}\n\n.ag-rich-select .ag-rich-select-value > span {\n  flex: 1 1 auto;\n}\n\n.ag-rich-select .ag-rich-select-value > span.ag-icon {\n  order: 1;\n  flex: none;\n}\n\n.ag-rich-select .ag-rich-select-list .ag-virtual-list-item {\n  display: flex;\n}\n\n.ag-rich-select .ag-rich-select-list .ag-virtual-list-item .ag-rich-select-row {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  white-space: nowrap;\n}\n\n/**\n ****************************\n * Pagination\n ****************************\n*/\n\n.ag-paging-panel {\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.ag-paging-panel .ag-paging-row-summary-panel {\n  display: flex;\n}\n\n[dir] .ag-paging-panel .ag-paging-row-summary-panel span {\n  margin: 0 3px;\n}\n\n.ag-paging-page-summary-panel {\n  display: flex;\n  align-items: center;\n}\n\n.ag-paging-page-summary-panel .ag-disabled {\n  pointer-events: none;\n}\n\n.ag-paging-page-summary-panel .ag-paging-button {\n  position: relative;\n  overflow: hidden;\n}\n\n.ag-paging-page-summary-panel .ag-paging-button button {\n  position: absolute;\n}\n\n/**\n ****************************\n * Tool Panel\n ****************************\n*/\n\n.ag-tool-panel-wrapper {\n  display: flex;\n  overflow-y: auto;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 200px;\n}\n\n[dir] .ag-tool-panel-wrapper {\n  cursor: default;\n}\n\n.ag-tool-panel-wrapper .ag-filter-toolpanel-header {\n  line-height: 1.5;\n}\n\n[dir] .ag-tool-panel-wrapper .ag-filter-toolpanel-header {\n  cursor: pointer;\n}\n\n.ag-column-tool-panel-column,\n.ag-column-tool-panel-column-group {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-column-tool-panel-column .ag-column-tool-panel-column,\n.ag-column-tool-panel-column .ag-column-tool-panel-column-group,\n.ag-column-tool-panel-column-group .ag-column-tool-panel-column,\n.ag-column-tool-panel-column-group .ag-column-tool-panel-column-group {\n  flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ag-column-select-checkbox {\n  display: flex;\n}\n\n.ag-tool-panel-horizontal-resize {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: 5px;\n  z-index: 1;\n}\n\n[dir] .ag-tool-panel-horizontal-resize {\n  cursor: col-resize;\n}\n\n[dir=ltr] .ag-rtl .ag-tool-panel-horizontal-resize {\n  transform: translateX(3px);\n}\n\n[dir=rtl] .ag-rtl .ag-tool-panel-horizontal-resize {\n  transform: translateX(-3px);\n}\n\n[dir=ltr] .ag-ltr .ag-tool-panel-horizontal-resize {\n  transform: translateX(-3px);\n}\n\n[dir=rtl] .ag-ltr .ag-tool-panel-horizontal-resize {\n  transform: translateX(3px);\n}\n\n.loading-filter {\n  height: 100%;\n  position: absolute;\n  top: 34px;\n  width: 100%;\n  z-index: 1;\n}\n\n[dir] .loading-filter {\n  background-color: #e6e6e6;\n  padding: 5px;\n}\n\n.ag-details-row {\n  height: 100%;\n  width: 100%;\n}\n\n.ag-details-grid {\n  height: 100%;\n  width: 100%;\n}\n\n.ag-header-group-cell {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n}\n\n.ag-cell-label-container {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  align-items: center;\n  width: 100%;\n}\n\n.ag-numeric-header .ag-cell-label-container {\n  flex-direction: row;\n}\n\n/**\n ****************************\n * Side Bar\n ****************************\n*/\n\n.ag-side-bar {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.ag-side-bar .ag-side-buttons div button {\n  display: block;\n  white-space: nowrap;\n  outline: none;\n}\n\n[dir] .ag-side-bar .ag-side-buttons div button {\n  cursor: pointer;\n}\n\n.ag-side-bar .ag-side-buttons div button span:not(.ag-icon) {\n  -ms-writing-mode: tb;\n      writing-mode: tb;\n  -ms-writing-mode: tb-lr;\n      writing-mode: vertical-lr;\n}\n\n.ag-side-bar .panel-container {\n  width: 180px;\n}\n\n.ag-side-bar.full-width .panel-container {\n  width: 200px;\n}\n\n.ag-rtl .ag-side-bar .ag-side-buttons button span:not(.ag-icon) {\n  -ms-writing-mode: tb-rl;\n      writing-mode: tb-rl;\n  -ms-writing-mode: tb-rl;\n      writing-mode: vertical-rl;\n}\n\n/**\n ****************************\n * Status Bar\n ****************************\n*/\n\n.ag-status-bar {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n}\n\n.ag-status-bar .ag-status-panel {\n  display: inline-flex;\n}\n\n.ag-status-bar-left {\n  display: inline-flex;\n}\n\n.ag-status-bar-center {\n  display: inline-flex;\n}\n\n.ag-status-bar-right {\n  display: inline-flex;\n}\n\n/**\n ****************************\n * Widgets\n ****************************\n*/\n\n.ag-group-component {\n  position: relative;\n  flex: 1 1 100%;\n}\n\n.ag-group-component .ag-group-component-title-bar {\n  display: flex;\n  align-items: center;\n}\n\n.ag-group-component .ag-group-component-toolbar {\n  display: flex;\n  align-items: center;\n}\n\n.ag-group-component .ag-group-component-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.ag-group-component .ag-group-component-container .ag-group-subgroup {\n  display: flex;\n  align-self: stretch;\n}\n\n.ag-group-component .ag-group-item {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n}\n\n.ag-group-component.ag-disabled .ag-group-component-container {\n  pointer-events: none;\n}\n\n.ag-group-component.ag-collapsed .ag-group-component-toolbar, .ag-group-component.ag-collapsed .ag-group-component-container {\n  display: none;\n}\n\n.ag-toggle-button .ag-input-wrapper .ag-icon {\n  position: absolute;\n  top: -1px;\n}\n\n[dir=ltr] .ag-toggle-button .ag-input-wrapper .ag-icon {\n  transition: right 0.3s;\n}\n\n[dir=rtl] .ag-toggle-button .ag-input-wrapper .ag-icon {\n  transition: left 0.3s;\n}\n\n.ag-input-field {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.ag-input-field input, .ag-input-field select, .ag-input-field textarea {\n  flex: 1 1 auto;\n  width: 100%;\n  min-width: 0;\n}\n\n.ag-range-field {\n  display: flex;\n  align-items: center;\n}\n\n.ag-picker-field > .ag-wrapper, .ag-slider > .ag-wrapper, .ag-angle-select > .ag-wrapper {\n  display: flex;\n}\n\n.ag-picker-field > .ag-wrapper > div, .ag-slider > .ag-wrapper > div, .ag-angle-select > .ag-wrapper > div {\n  flex: 1 1 auto;\n}\n\n.ag-angle-select {\n  display: flex;\n  align-items: center;\n}\n\n.ag-angle-select .ag-angle-select-field .ag-parent-circle {\n  display: block;\n  position: relative;\n}\n\n.ag-angle-select .ag-angle-select-field .ag-child-circle {\n  position: absolute;\n}\n\n.ag-picker-field {\n  display: flex;\n  align-items: center;\n}\n\n.ag-picker-field > .ag-wrapper > button {\n  display: flex;\n}\n\n[dir] .ag-picker-field > .ag-wrapper > button {\n  border: 0;\n  padding: 0;\n  margin: 0;\n}\n\n.ag-color-picker > .ag-wrapper {\n  align-items: stretch;\n  overflow: hidden;\n}\n\n[dir] .ag-color-picker button {\n  cursor: pointer;\n}\n\n.ag-labeled.ag-label-align-right label {\n  order: 1;\n}\n\n.ag-labeled.ag-label-align-right > div {\n  flex: none;\n}\n\n.ag-labeled.ag-label-align-top {\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.ag-labeled.ag-label-align-top > div {\n  align-self: stretch;\n}\n\n.ag-color-panel {\n  display: flex;\n  flex-direction: column;\n}\n\n[dir] .ag-color-panel {\n  text-align: center;\n}\n\n.ag-color-panel .ag-spectrum-color {\n  flex: 1 1 auto;\n  position: relative;\n  overflow: hidden;\n}\n\n[dir] .ag-color-panel .ag-spectrum-color {\n  cursor: default;\n}\n\n.ag-color-panel .ag-fill {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n}\n\n[dir=ltr] .ag-color-panel .ag-fill {\n  left: 0;\n  right: 0;\n}\n\n[dir=rtl] .ag-color-panel .ag-fill {\n  right: 0;\n  left: 0;\n}\n\n[dir] .ag-color-panel .ag-spectrum-val {\n  cursor: pointer;\n}\n\n.ag-color-panel .ag-spectrum-dragger {\n  position: absolute;\n  pointer-events: none;\n}\n\n[dir] .ag-color-panel .ag-spectrum-dragger {\n  cursor: pointer;\n}\n\n[dir] .ag-color-panel .ag-spectrum-hue {\n  cursor: default;\n}\n\n[dir=ltr] .ag-color-panel .ag-spectrum-hue {\n  background: linear-gradient(to left, #ff0000 3%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n}\n\n[dir=rtl] .ag-color-panel .ag-spectrum-hue {\n  background: linear-gradient(to right, #ff0000 3%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n}\n\n[dir] .ag-color-panel .ag-spectrum-alpha {\n  cursor: default;\n}\n\n.ag-color-panel .ag-spectrum-hue-background {\n  width: 100%;\n  height: 100%;\n}\n\n.ag-color-panel .ag-spectrum-alpha-background {\n  width: 100%;\n  height: 100%;\n}\n\n[dir=ltr] .ag-color-panel .ag-spectrum-alpha-background {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), black);\n}\n\n[dir=rtl] .ag-color-panel .ag-spectrum-alpha-background {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), black);\n}\n\n[dir] .ag-color-panel .ag-hue-alpha {\n  cursor: pointer;\n}\n\n.ag-color-panel .ag-spectrum-slider {\n  position: absolute;\n  pointer-events: none;\n}\n\n.ag-color-panel .ag-spectrum-text-value {\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n[dir] .ag-color-panel .ag-spectrum-text-value {\n  text-align: center;\n}\n\n.ag-color-panel .ag-spectrum-text-value:focus {\n  outline: none;\n  outline-offset: 0;\n}\n\n.ag-color-panel .ag-recent-colors {\n  display: flex;\n}\n\n[dir] .ag-color-panel .ag-recent-colors > div {\n  cursor: pointer;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=ltr] .ag-ltr {\n  direction: ltr;\n}\n\n[dir=rtl] .ag-ltr {\n  direction: rtl;\n}\n\n.ag-ltr .ag-body, .ag-ltr .ag-floating-top, .ag-ltr .ag-floating-bottom, .ag-ltr .ag-header, .ag-ltr .ag-body-viewport, .ag-ltr .ag-body-horizontal-scroll {\n  flex-direction: row;\n}\n\n[dir=ltr] .ag-ltr .ag-header-cell-resize {\n  right: -4px;\n}\n\n[dir=rtl] .ag-ltr .ag-header-cell-resize {\n  left: -4px;\n}\n\n[dir=ltr] .ag-ltr .ag-pinned-right-header .ag-header-cell-resize {\n  left: -4px;\n}\n\n[dir=rtl] .ag-ltr .ag-pinned-right-header .ag-header-cell-resize {\n  right: -4px;\n}\n\n[dir=ltr] .ag-rtl {\n  direction: rtl;\n}\n\n[dir=rtl] .ag-rtl {\n  direction: ltr;\n}\n\n.ag-rtl .ag-body, .ag-rtl .ag-floating-top, .ag-rtl .ag-floating-bottom, .ag-rtl .ag-header, .ag-rtl .ag-body-viewport, .ag-rtl .ag-body-horizontal-scroll {\n  flex-direction: row-reverse;\n}\n\n[dir=ltr] .ag-rtl .ag-header-cell-resize {\n  left: -4px;\n}\n\n[dir=rtl] .ag-rtl .ag-header-cell-resize {\n  right: -4px;\n}\n\n[dir=ltr] .ag-rtl .ag-pinned-left-header .ag-header-cell-resize {\n  right: -4px;\n}\n\n[dir=rtl] .ag-rtl .ag-pinned-left-header .ag-header-cell-resize {\n  left: -4px;\n}\n\n@media print {\n  .ag-body-viewport {\n    display: block;\n  }\n\n  .ag-row {\n    page-break-inside: avoid;\n  }\n}\n\n.ag-body .ag-pinned-left-cols-viewport, .ag-body .ag-body-viewport, .ag-body .ag-pinned-right-cols-viewport {\n  -webkit-overflow-scrolling: touch;\n}\n\n.ag-chart {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.ag-chart .ag-chart-components-wrapper {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n\n.ag-chart .ag-chart-components-wrapper .ag-chart-canvas-wrapper {\n  position: relative;\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n\n.ag-chart .ag-chart-components-wrapper .ag-chart-canvas-wrapper canvas {\n  display: block;\n}\n\n.ag-chart .ag-chart-components-wrapper .ag-chart-menu {\n  position: absolute;\n  top: 10px;\n  width: 24px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n[dir=ltr] .ag-chart .ag-chart-components-wrapper .ag-chart-menu {\n  right: 20px;\n}\n\n[dir=rtl] .ag-chart .ag-chart-components-wrapper .ag-chart-menu {\n  left: 20px;\n}\n\n.ag-chart:not(.ag-has-menu):hover .ag-chart-menu {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.ag-chart .ag-chart-docked-container {\n  position: relative;\n  width: 0;\n  min-width: 0;\n  transition: min-width 0.4s;\n}\n\n[dir=ltr] .ag-chart .ag-chart-docked-container .ag-panel {\n  border-width: 0 0 0 1px;\n}\n\n[dir=rtl] .ag-chart .ag-chart-docked-container .ag-panel {\n  border-width: 0 1px 0 0;\n}\n\n.ag-chart-tabbed-menu > div {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-tab-header {\n  flex: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-tab-header {\n  cursor: default;\n}\n\n.ag-chart-tabbed-menu .ag-tab-body {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: stretch;\n  overflow: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-tab-body > div {\n  width: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings {\n  overflow-x: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper {\n  position: relative;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar {\n  width: 100%;\n  display: flex;\n  height: 30px;\n  align-items: center;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-nav-card-selector {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex: 1 1 auto;\n  height: 100%;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item {\n  opacity: 0.2;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item.ag-selected {\n  opacity: 1;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn, .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn {\n  position: relative;\n  flex: none;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn button, .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn button {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn button, [dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn button {\n  cursor: pointer;\n}\n\n[dir=ltr] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn button, [dir=ltr] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn button {\n  left: 0;\n}\n\n[dir=rtl] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn button, [dir=rtl] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn button {\n  right: 0;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container {\n  position: relative;\n  flex: 1 1 auto;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper {\n  position: absolute;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n}\n\n[dir=ltr] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper {\n  left: 0;\n}\n\n[dir=rtl] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper {\n  right: 0;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper .ag-group-component {\n  flex: none;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper .ag-group-component-container {\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper .ag-group-component-container .ag-chart-mini-thumbnail {\n  flex: none;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating, [dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating {\n  transition-timing-function: ease-in-out;\n}\n\n[dir=ltr] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating, [dir=ltr] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating {\n  transition: left 0.3s;\n}\n\n[dir=rtl] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating, [dir=rtl] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating {\n  transition: right 0.3s;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail {\n  cursor: pointer;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail canvas {\n  display: block;\n}\n\n.ag-chart-tabbed-menu .ag-chart-data-wrapper, .ag-chart-tabbed-menu .ag-chart-format-wrapper {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.ag-chart-tabbed-menu .ag-chart-data-wrapper > div, .ag-chart-tabbed-menu .ag-chart-format-wrapper > div {\n  display: flex;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-data-wrapper > div, [dir] .ag-chart-tabbed-menu .ag-chart-format-wrapper > div {\n  margin: 0;\n  padding-bottom: 2px;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-data-wrapper > div:not(:first-child), [dir] .ag-chart-tabbed-menu .ag-chart-format-wrapper > div:not(:first-child) {\n  margin-top: 0;\n}\n\n.ag-chart-tabbed-menu .ag-chart-format-wrapper {\n  overflow-x: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-chart-format-wrapper .ag-group-component .ag-group-subgroup {\n  justify-content: space-between;\n}\n\n.ag-chart .ag-chart-canvas-wrapper.ag-chart-empty > canvas {\n  visibility: hidden;\n}\n\n.ag-chart .ag-chart-canvas-wrapper.ag-chart-empty .ag-chart-empty-text {\n  display: flex;\n}\n\n.ag-chart .ag-chart-empty-text {\n  display: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.ag-chart .ag-chart-menu {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.ag-chart .ag-chart-menu > span {\n  opacity: 0.5;\n  line-height: 24px;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n\n[dir] .ag-chart .ag-chart-menu > span {\n  margin: 2px 0;\n  cursor: pointer;\n}\n\n[dir] .ag-chart .ag-chart-menu > span:hover {\n  border-radius: 5px;\n}\n\n.ag-chart .ag-chart-docked-container {\n  min-width: 0;\n  width: 0;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-tab-body {\n  padding: 0;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar {\n  padding: 0 10px;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector {\n  padding: 0 10px;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item {\n  cursor: pointer;\n}\n\n@font-face {\n  font-family: \"agGridMaterial\";\n\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBlYAAAC8AAAAYGNtYXAXVtK8AAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZuX9LmgAAAF4AAASrGhlYWQVtyBHAAAUJAAAADZoaGVhB4kD+wAAFFwAAAAkaG10eN4AJ0kAABSAAAAA6GxvY2GGnoHMAAAVaAAAAHZtYXhwAEQAWQAAFeAAAAAgbmFtZVm8q3EAABYAAAABqnBvc3QAAwAAAAAXrAAAACAAAwP3AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpNQPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6TX//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAQAAawMAAxUACwAAASEVCQEVITUhNychAwD+AAEV/usCAP7V1tYBKwMVVf8A/wBVgNXVAAAAAAQAOf/5A8cDhwAIAA8AFwAfAAABMzUzJwczFTEHIzUHFzUzJScVIxUzFTcFIxUjFzcjNQGrqnLHx3I5csfHcgJVx3Jyx/6OqnLHx3ICTnLHx3I5csfHclXHcqpyx45yx8dyAAABAKsAawNVAxUACQAAExc3ETMRFzcJAas87lbuPP6r/qsBwDzu/fkCB+89AVX+qwACAFUAFQOrA2sAHAAoAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmIxMHJwcnNyc3FzcXBwIAWE5OdCEiIiF0Tk5YWE5OdCEiIiF0Tk5Y1TyZmTyZmTyZmTyZA2siIXROTlhYTk50ISIiIXROTlhYTk50ISL9vDyZmTyZmTyZmTyZAAAAAwDVAJUDKwLrAAQACQANAAATMxEjETczESMREzMRI9WAgO94eO94eAI3/l4BorT9qgJW/qr/AAACAIAAQAOAA0AADwAWAAABISIGFREUFjMhMjY1ETQmASc3FwEXAQMr/aojMjIjAlYjMjL+XdY8mgFEPP6AA0AyI/2qIzIyIwJWIzL9q9U8mQFEPP6AAAAAAgCAAEADgANAAA8AEwAAASEiBhURFBYzITI2NRE0JgMhNSEDK/2qIzIyIwJWIzIyef5WAaoDQDIj/aojMjIjAlYjMv5VVgAAAgCAAEADgANAAAMAEwAAAREhESUhIgYVERQWMyEyNjURNCYDK/2qAlb9qiMyMiMCViMyMgLr/aoCVlUyI/2qIzIyIwJWIzIAAwBzAEgDjQM4AAYACgAWAAAJAQcXCQIhNxchBTAGFRQWMzI2NTQmAv3+VTxm/vcBRQFF/e/MzP5oAkxVMiMjMlUBjQGrPGb+9/67AUXNzUBrKiMyMiMqawAAAAACAKsAawFVAxUAAwAHAAAlIxEzNRUjNQFVqqqqawH/q1dXAAAJAKsAawNVAxUAAwAIAAwAEAAVABkAHgAiACYAABMzNSMBMzUjFSEzNSM1MzUjBTM1IxUBFTM1BTM1IxUBMzUjETM1I6uqqgEAqqr/AKqqqqoBAKqqAQCq/laqqgEAqqqqqgJrqv1WqqqqVqqqqqoBqqqqqqqq/wCq/laqAAAAAAEBYgDAAp4CwAAGAAABJwkBNyc3Ap48/wABADzDwwKEPP8A/wA8xMQAAAAAAwBr/+sDlQOVAAgAGQAdAAABISIGFREzESEXISIGFREUFjMhMjY1ETQmIxEhESECwP4AIzJVAgCA/iskMjIkAdUjMjIj/isB1QOVMiP9qwJVVTIk/asjMjIjAlUkMv1VAlUAAAEA1QCVAysC6wAMAAABJwcnBxcHFzcXNyc3Ays87+887+887+887+8Crzzv7zzv7zzv7zzv7wAABQBVABUDqwNrACUAMgA/AEsAUQAAAT4BNTQmIyIGFRQWMzI2NxcHLgEjIgYVFBYzMjY1NCYnNwEzNQEHIiY1NDYzMhYVFAYjESImNTQ2MzIWFRQGIwEiJjU0NjMyFhUUBgkBFwE1IwGbCAhkR0dkZEcTIxBlZRAjE0dkZEdHZAgIZQErgP3wmyMyMiMjMjIjIzIyIyMyMiMBAAkMDAkJDAwBIv8AVQErgAJ6ECMTR2RkR0dkCAhlZQgIZEdHZGRHEyMQZf7VKwIPDzEkJDExJCQx/gAxJCQxMSQkMQFADAkJDAwJCQwBlf8AVQEqKwAABwCXAL8DaQLBAAwAEAAdACEALQA6AD4AABMiBhUUFjMyNjU0JiMFNSEVAyIGFRQWMzI2NTQmIwUhNSEFMhYVFAYjIiY1NDY3MhYVFAYjIiY1NDYzBSE1IcISGRkSEhkZEgKn/dd+EhkZEhIZGRIB0v6sAVT+Lg0TEw0NExMNEhkZEhIZGRICp/3XAikBFRkSERoaERIZVVZWASsZEhIZGRISGVVVCxMNDRMTDQ0T4RoREhkZEhEaVlUAAAABAKsAawNVAxUACQAAAScHESMRJwcJAQNVPO5W7jwBVQFVAcA87gIH/fnvPf6rAVUAAAAAAQFiAMACngLAAAYAAAEHFwcXCQEBnjzDwzwBAP8AAsA8xMQ8AQABAAAAAAABAJMAxwNtArkARwAAAS4BIyIGByc+ATMyFx4BFxYXDgEHJz4BNyMOAQcnIxcOASMiJicjHgEzMjY3Fw4BIyInLgEnJic+ATcXDgEHMyc+ATMyFhczAqMKXD0iPRZPK2M2Pjk5XyQlFRhYOU8SGAVEBA0IK1BGBAkFIjUJRApcPhMjEEghRyY+OTlfJCUVEz4oXgUGAoYpDSQVIjQJRAHdOk8aF08ZHBMSQi4tNz5lIU8SLRoMFQkqRgEBKR86UAgISA0OExJCLi03MFQgXgoUCyoNECgfAAADAJMAxwNtArkAHAApADUAAAEiBw4BBwYHFhceARcWMzI3PgE3NjcmJy4BJyYjESImNTQ2MzIWFRQGIxEiBhUUFjMyNjU0JgIAPjk5XyQlFRUlJF85OT4+OTlfJCUVFSUkXzk5PkVhYUVFYWFFKTs7KSk7OwK5ExJCLi03Ny0uQhITExJCLi03Ny0uQhIT/mFhRUVhYUVFYQEKOykpOzspKTsAAAMAgADAA4ACwAAEAAgADAAAJTM1IxUBFSE1ASE1IQGrqqr+1QMA/YACAP4AwFVVAgBVVf7VVgAAAgD3AMADCQLAAAUACgAAJSc3JwkBATMRIxEDCcTEPP8AAQD+KlZW/MTEPP8A/wACAP4AAgAAAAACAKsBQANVAkAAAwAIAAABIRUhBSE1IRUDVf1WAqr9VgKq/VYCQFWrVVUAAAYAjgCkA3IC3AAHAAwAEwAXABsAIQAAASEUBisBNTElFSE1IScyFhUhNSEBIzUzNSM1MycjNDYzFQJVAR1DL6sBHf7jAR1yL0P+AAGO/uRycnJy5HJDLwEVL0Jx5HJy40Ivcf3IcXJyci9CcQAAAAACAJMAxwNtArkAHAApAAABIgcOAQcGBxYXHgEXFjMyNz4BNzY3JicuAScmIxEiJjU0NjMyFhUUBiMCAD45OV8kJRUVJSRfOTk+Pjk5XyQlFRUlJF85OT5FYWFFRWFhRQK5ExJCLi03Ny0uQhITExJCLi03Ny0uQhIT/mFhRUVhYUVFYQACAPcAwAMJAsAABgAKAAATFwcXCQEHJTMRI/fExDwBAP8APAG8VlYChMTEPAEAAQA8PP4AAAAAAAEAqwBrA1UDFQAJAAABITcnCQE3JyE1A1X9+e89/qsBVTzuAgcB6+48/qv+qzzuVgAAAAACAOQApAMcAtwAHAAmAAABNxcHMxUjHgEXBycVIzUHJzcjNTMnNx4BFzUzFQczNzUnIwcVHgECOWhQaJOTGjQaUGhyaFBok5NoUBo0GnJoXkNDXkMRIQJJaFBocho0GlBok5NoUGhyaFAaNBqTk/tDXkNDXhEhAAABAIAC6wOAA0AAAwAAEyEVIYADAP0AA0BVAAAAAwCAAMADgALAAAMABwALAAA3ITUhNSE1ITUVITWAAwD9AAMA/QADAMBVgFbVVVUAAQEAAEADAACVAAMAACUhFSEBAAIA/gCVVQAAAAEA1QGVAysB6wAEAAATIRUhNdUCVv2qAetWVgABAWIAwAKeAsAABgAAAQcXBxcJAQGePMPDPAEA/wACwDzExDwBAAEAAAAAAAMAgADAA4ACwAADAAcACwAANyE1IREVITUBITUhgAIA/gADAP0AAwD9AMBVAatVVf7VVgADAFUAFQOrA2sAHAArADoAAAEiBw4BBwYVFBceARcWMzI3PgE3NjU0Jy4BJyYjATQ3PgE3NjMyFhcBLgE1ASImJwEeARUUBw4BBwYjAgBYTk50ISIiIXROTlhYTk50ISIiIXROTlj+qxobXT4+RztrK/4iIiYBVTtrKwHeIiYaG10+PkcDayIhdE5OWFhOTnQhIiIhdE5OWFhOTnQhIv5VRz4+XRsaJiL+IitrO/6rJiIB3itrO0c+Pl0bGgAAAAADAID/6wOAA5UAGAAkACwAAAEjLgEjIgYHIyIGFREUFjMhMjY1ETQmIzEhMhYVFAYjIiY1NDYBIREzFSE1MwMrsw1BKipBDbMjMjIjAlYjMjIj/tUSGRkSEhkZAT39qlYBqlYDQCUwMCUyI/1VIzIyIwKrIzIZEhEZGRESGf0AAquAgAACAK0AbwNTAxEABQASAAAlByc3HgETAQcnBxcHJzcXNyc3AWOOKI4KFMYBNB8e9z5Y9lg9ex4e/Y4ojgoUAgr+zB4eez1Y9lg+9x4fAAAAAAkAOf/5A8cDhwAPABMAFwAgACQALgAyADYAOgAABSEiJjURNDYzITIWFREUBgEjFTMBIREhJQcXByc3HgEXJyMVMyUHJwcnNx4BFzEBIxUzJSMVMzcjFTMDVf1WL0NDLwKqL0ND/dGqqgIA/jkBx/7cQkIpaWkKFQrcqqoB+ChBQihqGjUa/giqqgEd5OTjqqoHQy8Cqi9DQy/9Vi9DARyqAY7+crNCQShpagoUCturMShBQShpGjUaAZaqqqqqqgAAAAABANUAlQMrAusACwAAASERIxEhNSERMxEhAyv/AFb/AAEAVgEAAZX/AAEAVgEA/wAAAAAAAQFiAMACngLAAAYAAAEnCQE3JzcCnjz/AAEAPMPDAoQ8/wD/ADzExAAAAAACAFUAFQOrA2sAHAA5AAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmIxEiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYjAgBYTk50ISIiIXROTlhYTk50ISIiIXROTlhHPj5dGxoaG10+PkdHPj5dGxoaG10+PkcDayIhdE5OWFhOTnQhIiIhdE5OWFhOTnQhIv0AGhtdPj5HRz4+XRsaGhtdPj5HRz4+XRsaAAMAVQAVA6sDawAcADkAVgAAASIHDgEHBhUUFx4BFxYzMjc+ATc2NTQnLgEnJiM1IgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmIxEiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYjAgAsJyc6ERAQETonJywsJyc6ERAQETonJyxYTk50ISIiIXROTlhYTk50ISIiIXROTlhHPj5dGxoaG10+PkdHPj5dGxoaG10+PkcClRAROicnLCwnJzoREBAROicnLCwnJzoRENYiIXROTlhYTk50ISIiIXROTlhYTk50ISL9ABobXT4+R0c+Pl0bGhobXT4+R0c+Pl0bGgABAKsAawNVAxUACQAAAQcXIRUhBxcJAQIAPO79+QIH7jwBVf6rAxU87lbuPAFVAVUAAAAAAgCAAEADgANAAA4AGQAAAREhESMRFBYzITI2NREjBTcXByc3FxEzETEDK/2qVTIjAlYjMlX/AG481dU8blYBwP7VASv+1SMyMiMBKx1uPNXVPG4Bnf5jAAEBKwFVAtUCKwADAAABFzchASvV1f5WAivW1gABAZUA6wJrApUAAwAAAQcXEQJr1tYCldXVAaoAAQGVAOsCawKVAAMAACU3JxEBldbW69XV/lYAAAEBKwFVAtUCKwADAAABNxchASvV1f5WAVXW1gABAIkAogN3At4ABgAAAScHFwEnAQF3sjzuAgA8/jwBG7I97gIAPP49AAAAAAEBYgDAAp4CwAAGAAABBxcHFwkBAZ48w8M8AQD/AALAPMTEPAEAAQAAAAAAAQDVAZUDKwHrAAQAABMhFSE11QJW/aoB61ZWAAEBAAEiAwACXgAFAAABBycHCQECxMTEPAEAAQACXsPDPP8AAQAAAAADAFUA6wOrApUAGgAeADkAABM0NjsBNSMiBw4BBwYVFBceARcWOwE1IyImNRchNSElIxUzMhYVFAYrARUzMjc+ATc2NTQnLgEnJiOmTjeqqiwnJzoREREROicnLKqqN06vAVb+qgGAqqo3Tk43qqosJyc6ERERETonJywBwDdNURAROicnLCwnJzoREFFNNytWqlFNNzdNURAROicnLCwnJzoREAAAAAADAFUAQAOrA0AAFAAYADgAAAEjFTMyFhUUBgcXPgE1NCcuAScmIwcjFzMBFw4BFRQXHgEXFjsBNSMiJjU0NjcXIxUzFxUzFzcBBwLVqqo3TjgrPjRCERE6JycsKl5WCP2qhTpLERE6Jycsqqo3TkUxWB91YUmsNf03NwKVUU03LkYLPhplPiwnJzoREKpWAXWFGGpDLCcnOhEQUU03M0sFWFZhSas2Aso2AAAAAQAAAAEAAG2khpdfDzz1AAsEAAAAAADZaG3lAAAAANlobeUAAP/rA8cDlQAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAADxwABAAAAAAAAAAAAAAAAAAAAOgQAAAAAAAAAAAAAAAIAAAAEAAEABAAAOQQAAKsEAABVBAAA1QQAAIAEAACABAAAgAQAAHMEAACrBAAAqwQAAWIEAABrBAAA1QQAAFUEAACXBAAAqwQAAWIEAACTBAAAkwQAAIAEAAD3BAAAqwQAAI4EAACTBAAA9wQAAKsEAADkBAAAgAQAAIAEAAEABAAA1QQAAWIEAACABAAAVQQAAIAEAACtBAAAOQQAANUEAAFiBAAAVQQAAFUEAACrBAAAgAQAASsEAAGVBAABlQQAASsEAACJBAABYgQAANUEAAEABAAAVQQAAFUAAAAAAAoAFAAeADoAbACEAMgA5AEQATQBWAGGAZgB2AHuAiACPAK0AxIDLANCA64EAAQcBDgETgSGBMgE5AT+BToFSAVgBW4FfAWSBawGDAZOBnYG2AbyBwgHYAfgB/oIJgg0CEIIUAheCHQIigiYCKwJAAlWAAAAAQAAADoAVwAJAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAoAAAABAAAAAAACAAcAewABAAAAAAADAAoAPwABAAAAAAAEAAoAkAABAAAAAAAFAAsAHgABAAAAAAAGAAoAXQABAAAAAAAKABoArgADAAEECQABABQACgADAAEECQACAA4AggADAAEECQADABQASQADAAEECQAEABQAmgADAAEECQAFABYAKQADAAEECQAGABQAZwADAAEECQAKADQAyEFnTWF0ZXJpYWwAQQBnAE0AYQB0AGUAcgBpAGEAbFZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMEFnTWF0ZXJpYWwAQQBnAE0AYQB0AGUAcgBpAGEAbEFnTWF0ZXJpYWwAQQBnAE0AYQB0AGUAcgBpAGEAbFJlZ3VsYXIAUgBlAGcAdQBsAGEAckFnTWF0ZXJpYWwAQQBnAE0AYQB0AGUAcgBpAGEAbEZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format(\"truetype\");\n\n  font-weight: normal;\n\n  font-style: normal;\n}\n\n.ag-theme-material {\n  -webkit-font-smoothing: antialiased;\n  color: rgba(0, 0, 0, 0.87);\n  font-family: inherit;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: normal;\n}\n\n[dir] .ag-theme-material {\n  background-color: #fff;\n}\n\n[dir] .ag-theme-material .ag-tab-header .ag-tab.ag-tab-selected {\n  border-bottom: 2px solid #7367F0;\n}\n\n[dir] .ag-theme-material label {\n  margin-bottom: 0;\n}\n\n.ag-theme-material * {\n  box-sizing: border-box;\n}\n\n.ag-theme-material *:focus, .ag-theme-material * *:before, .ag-theme-material * *:after {\n  outline: none;\n  box-sizing: border-box;\n}\n\n.ag-theme-material .ag-tab {\n  box-sizing: content-box;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-49 {\n  padding-left: 490px;\n}\n\n.ag-theme-material .ag-cell .ag-icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ag-theme-material .ag-checkbox, .ag-theme-material .ag-radio-button, .ag-theme-material .ag-toggle-button {\n  display: flex;\n  align-items: center;\n}\n\n[dir] .ag-theme-material .ag-checkbox, [dir] .ag-theme-material .ag-radio-button, [dir] .ag-theme-material .ag-toggle-button {\n  cursor: default;\n}\n\n[dir] .ag-theme-material .ag-checkbox label, [dir] .ag-theme-material .ag-radio-button label, [dir] .ag-theme-material .ag-toggle-button label {\n  cursor: default;\n}\n\n[dir] .ag-theme-material .ag-checkbox label:empty, [dir] .ag-theme-material .ag-radio-button label:empty, [dir] .ag-theme-material .ag-toggle-button label:empty {\n  margin: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-checkbox:not(.ag-label-align-left) label, [dir=ltr] .ag-theme-material .ag-radio-button:not(.ag-label-align-left) label, [dir=ltr] .ag-theme-material .ag-toggle-button:not(.ag-label-align-left) label {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-checkbox:not(.ag-label-align-left) label, [dir=rtl] .ag-theme-material .ag-radio-button:not(.ag-label-align-left) label, [dir=rtl] .ag-theme-material .ag-toggle-button:not(.ag-label-align-left) label {\n  margin-right: 8px;\n}\n\n.ag-theme-material .ag-cell {\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-leaf-indent {\n  margin-left: 42px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-leaf-indent {\n  margin-right: 42px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-cell {\n  border-right: 1px solid transparent;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-cell {\n  border-left: 1px solid transparent;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=ltr] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=ltr] .ag-theme-material .ag-ltr .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left) {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=rtl] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=rtl] .ag-theme-material .ag-ltr .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left) {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=ltr] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=ltr] .ag-theme-material .ag-ltr .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right) {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=rtl] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=rtl] .ag-theme-material .ag-ltr .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right) {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-leaf-indent {\n  margin-right: 42px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-leaf-indent {\n  margin-left: 42px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-cell {\n  border-left: 1px solid transparent;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-cell {\n  border-right: 1px solid transparent;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=ltr] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=ltr] .ag-theme-material .ag-rtl .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left) {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=rtl] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=rtl] .ag-theme-material .ag-rtl .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left) {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=ltr] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=ltr] .ag-theme-material .ag-rtl .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right) {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=rtl] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=rtl] .ag-theme-material .ag-rtl .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right) {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-value-change-delta {\n  padding-right: 2px;\n}\n\n[dir=rtl] .ag-theme-material .ag-value-change-delta {\n  padding-left: 2px;\n}\n\n.ag-theme-material .ag-value-change-delta-up {\n  color: #43a047;\n}\n\n.ag-theme-material .ag-value-change-delta-down {\n  color: #e53935;\n}\n\n.ag-theme-material .ag-value-change-value {\n  transition: background-color 1s;\n}\n\n[dir] .ag-theme-material .ag-value-change-value {\n  background-color: transparent;\n  border-radius: 1px;\n}\n\n[dir=ltr] .ag-theme-material .ag-value-change-value {\n  padding-left: 1px;\n  padding-right: 1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-value-change-value {\n  padding-right: 1px;\n  padding-left: 1px;\n}\n\n.ag-theme-material .ag-value-change-value-highlight {\n  transition: background-color 0.1s;\n}\n\n[dir] .ag-theme-material .ag-value-change-value-highlight {\n  background-color: #00acc1;\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type]),\n.ag-theme-material .ag-input-wrapper input[type=text],\n.ag-theme-material .ag-input-wrapper input[type=number],\n.ag-theme-material .ag-input-wrapper input[type=tel],\n.ag-theme-material .ag-input-wrapper input[type=date],\n.ag-theme-material .ag-input-wrapper input[type=datetime-local] {\n  color: rgba(0, 0, 0, 0.87);\n  font-family: inherit;\n  font-size: inherit;\n  height: 40px;\n}\n\n[dir] .ag-theme-material .ag-input-wrapper input:not([type]), [dir] .ag-theme-material .ag-input-wrapper input[type=text], [dir] .ag-theme-material .ag-input-wrapper input[type=number], [dir] .ag-theme-material .ag-input-wrapper input[type=tel], [dir] .ag-theme-material .ag-input-wrapper input[type=date], [dir] .ag-theme-material .ag-input-wrapper input[type=datetime-local] {\n  background: transparent;\n  padding-bottom: 8px;\n  border-width: 0;\n  border-bottom: 2px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type]):focus,\n.ag-theme-material .ag-input-wrapper input[type=text]:focus,\n.ag-theme-material .ag-input-wrapper input[type=number]:focus,\n.ag-theme-material .ag-input-wrapper input[type=tel]:focus,\n.ag-theme-material .ag-input-wrapper input[type=date]:focus,\n.ag-theme-material .ag-input-wrapper input[type=datetime-local]:focus {\n  outline: none;\n}\n\n[dir] .ag-theme-material .ag-input-wrapper input:not([type]):focus, [dir] .ag-theme-material .ag-input-wrapper input[type=text]:focus, [dir] .ag-theme-material .ag-input-wrapper input[type=number]:focus, [dir] .ag-theme-material .ag-input-wrapper input[type=tel]:focus, [dir] .ag-theme-material .ag-input-wrapper input[type=date]:focus, [dir] .ag-theme-material .ag-input-wrapper input[type=datetime-local]:focus {\n  border-bottom: 2px solid #7367F0;\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type])::-moz-placeholder, .ag-theme-material .ag-input-wrapper input[type=text]::-moz-placeholder, .ag-theme-material .ag-input-wrapper input[type=number]::-moz-placeholder, .ag-theme-material .ag-input-wrapper input[type=tel]::-moz-placeholder, .ag-theme-material .ag-input-wrapper input[type=date]::-moz-placeholder, .ag-theme-material .ag-input-wrapper input[type=datetime-local]::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type]):-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=text]:-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=number]:-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=tel]:-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=date]:-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=datetime-local]:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type])::-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=text]::-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=number]::-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=tel]::-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=date]::-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=datetime-local]::-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type])::placeholder,\n.ag-theme-material .ag-input-wrapper input[type=text]::placeholder,\n.ag-theme-material .ag-input-wrapper input[type=number]::placeholder,\n.ag-theme-material .ag-input-wrapper input[type=tel]::placeholder,\n.ag-theme-material .ag-input-wrapper input[type=date]::placeholder,\n.ag-theme-material .ag-input-wrapper input[type=datetime-local]::placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n[dir] .ag-theme-material .ag-input-wrapper input:not([type]):disabled, [dir] .ag-theme-material .ag-input-wrapper input[type=text]:disabled, [dir] .ag-theme-material .ag-input-wrapper input[type=number]:disabled, [dir] .ag-theme-material .ag-input-wrapper input[type=tel]:disabled, [dir] .ag-theme-material .ag-input-wrapper input[type=date]:disabled, [dir] .ag-theme-material .ag-input-wrapper input[type=datetime-local]:disabled {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type]):disabled,\n.ag-theme-material .ag-input-wrapper input[type=text]:disabled,\n.ag-theme-material .ag-input-wrapper input[type=number]:disabled,\n.ag-theme-material .ag-input-wrapper input[type=tel]:disabled,\n.ag-theme-material .ag-input-wrapper input[type=date]:disabled,\n.ag-theme-material .ag-input-wrapper input[type=datetime-local]:disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper input[type=date] {\n  flex: 1 1 auto;\n}\n\n[dir] .ag-theme-material .ag-input-wrapper input[type=range] {\n  padding: 0;\n}\n\n.ag-theme-material .ag-input-wrapper textarea {\n  color: rgba(0, 0, 0, 0.87);\n  font-family: inherit;\n  font-size: inherit;\n  height: 40px;\n}\n\n[dir] .ag-theme-material .ag-input-wrapper textarea {\n  background: transparent;\n  padding-bottom: 8px;\n  border-width: 0;\n  border-bottom: 2px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-input-wrapper textarea:focus {\n  outline: none;\n}\n\n[dir] .ag-theme-material .ag-input-wrapper textarea:focus {\n  border-bottom: 2px solid #7367F0;\n}\n\n.ag-theme-material .ag-input-wrapper textarea::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper textarea:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper textarea::-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper textarea::placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n[dir] .ag-theme-material .ag-input-wrapper textarea:disabled {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-input-wrapper textarea:disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-header {\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 600;\n  font-size: inherit;\n  font-family: inherit;\n}\n\n[dir] .ag-theme-material .ag-header {\n  background-color: #fff;\n  border-bottom: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-pinned-right-header {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-pinned-right-header {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-pinned-left-header {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-pinned-left-header {\n  border-left: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-header-row {\n  height: 56px;\n}\n\n[dir] .ag-theme-material .ag-header-row {\n  border: none;\n}\n\n.ag-theme-material .ag-row {\n  height: 48px;\n}\n\n[dir] .ag-theme-material .ag-row {\n  border-style: solid;\n  border-color: #e2e2e2;\n  border-width: 0;\n}\n\n[dir] .ag-theme-material .ag-row:not(.ag-row-first) {\n  border-width: 1px 0 0;\n}\n\n[dir] .ag-theme-material .ag-row.ag-row-last {\n  border-bottom-width: 1px;\n}\n\n[dir=ltr] .ag-theme-material .ag-horizontal-left-spacer {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-horizontal-left-spacer {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-horizontal-left-spacer.ag-scroller-corner {\n  border-right: none;\n}\n\n[dir=rtl] .ag-theme-material .ag-horizontal-left-spacer.ag-scroller-corner {\n  border-left: none;\n}\n\n[dir=ltr] .ag-theme-material .ag-horizontal-right-spacer {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-horizontal-right-spacer {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-horizontal-right-spacer.ag-scroller-corner {\n  border-left: none;\n}\n\n[dir=rtl] .ag-theme-material .ag-horizontal-right-spacer.ag-scroller-corner {\n  border-right: none;\n}\n\n[dir] .ag-theme-material .ag-row-hover {\n  background-color: #fafafa;\n}\n\n[dir=ltr] .ag-theme-material .ag-numeric-cell {\n  text-align: right;\n}\n\n[dir=rtl] .ag-theme-material .ag-numeric-cell {\n  text-align: left;\n}\n\n.ag-theme-material .ag-header-cell-label .ag-header-icon {\n  opacity: 0.87;\n}\n\n[dir=ltr] .ag-theme-material .ag-header-cell-label .ag-header-icon {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-header-cell-label .ag-header-icon {\n  margin-right: 8px;\n}\n\n[dir] .ag-theme-material .ag-header-cell, [dir] .ag-theme-material .ag-header-group-cell {\n  border-style: solid;\n  border-color: #e2e2e2;\n  border-width: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-header-cell, [dir=ltr] .ag-theme-material .ag-header-group-cell {\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-header-cell, [dir=rtl] .ag-theme-material .ag-header-group-cell {\n  padding-right: 24px;\n  padding-left: 24px;\n}\n\n[dir] .ag-theme-material .ag-header-cell.ag-header-cell-moving, [dir] .ag-theme-material .ag-header-group-cell.ag-header-cell-moving {\n  background-color: #f2f2f2;\n}\n\n[dir] .ag-theme-material .ag-header-cell:not(.ag-header-group-cell-no-group), [dir] .ag-theme-material .ag-header-group-cell:not(.ag-header-group-cell-no-group) {\n  border-top-width: 1px;\n}\n\n[dir] .ag-theme-material .ag-header-row:first-child .ag-header-cell, [dir] .ag-theme-material .ag-header-row:first-child .ag-header-group-cell {\n  border-top-width: 0;\n}\n\n[dir] .ag-theme-material .ag-header-group-cell:not(.ag-column-resizing) + .ag-header-group-cell:hover, [dir] .ag-theme-material .ag-header-group-cell:not(.ag-column-resizing) + .ag-header-group-cell.ag-column-resizing, [dir] .ag-theme-material .ag-header-cell:not(.ag-column-resizing) + .ag-header-cell:hover, [dir] .ag-theme-material .ag-header-cell:not(.ag-column-resizing) + .ag-header-cell.ag-column-resizing, [dir] .ag-theme-material .ag-header-group-cell:first-of-type:hover, [dir] .ag-theme-material .ag-header-group-cell:first-of-type.ag-column-resizing, [dir] .ag-theme-material .ag-header-cell:first-of-type:hover, [dir] .ag-theme-material .ag-header-cell:first-of-type.ag-column-resizing {\n  background-color: #f2f2f2;\n}\n\n[dir] .ag-theme-material .ag-header-cell-resize {\n  cursor: col-resize;\n}\n\n[dir=ltr] .ag-theme-material .ag-header-select-all {\n  margin-right: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-header-select-all {\n  margin-left: 24px;\n}\n\n.ag-theme-material .ag-cell {\n  line-height: 46px;\n}\n\n[dir] .ag-theme-material .ag-cell {\n  border: 1px solid transparent;\n}\n\n[dir=ltr] .ag-theme-material .ag-cell {\n  padding-left: 24px;\n  padding-right: 24px;\n  padding-left: 23px;\n  padding-right: 23px;\n}\n\n[dir=rtl] .ag-theme-material .ag-cell {\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-right: 23px;\n  padding-left: 23px;\n}\n\n.ag-theme-material .ag-row-drag {\n  min-width: 42px;\n}\n\n[dir] .ag-theme-material .ag-row-drag {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n[dir] .ag-theme-material .ag-row-dragging, [dir] .ag-theme-material .ag-row-dragging .ag-row-drag {\n  cursor: move;\n}\n\n[dir] .ag-theme-material .ag-column-drag {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.ag-theme-material .ag-row-dragging {\n  opacity: 0.5;\n}\n\n.ag-theme-material .ag-ltr .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected),\n.ag-theme-material .ag-ltr .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell,\n.ag-theme-material .ag-ltr .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle, .ag-theme-material .ag-rtl .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected),\n.ag-theme-material .ag-rtl .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell,\n.ag-theme-material .ag-rtl .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle {\n  outline: initial;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected), [dir] .ag-theme-material .ag-ltr .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell, [dir] .ag-theme-material .ag-ltr .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle, [dir] .ag-theme-material .ag-rtl .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected), [dir] .ag-theme-material .ag-rtl .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell, [dir] .ag-theme-material .ag-rtl .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle {\n  border: 1px solid #7367F0;\n}\n\n.ag-theme-material .ag-header-cell-resize {\n  width: 16px;\n}\n\n[dir] .ag-theme-material .ag-menu {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  padding: 0;\n}\n\n.ag-theme-material .ag-menu .ag-menu-list {\n  width: 100%;\n}\n\n[dir] .ag-theme-material .ag-menu .ag-menu-list {\n  cursor: default;\n  margin-bottom: 8px;\n  margin-top: 8px;\n}\n\n[dir] .ag-theme-material .ag-menu .ag-menu-option-active {\n  background-color: #fafafa;\n}\n\n.ag-theme-material .ag-menu .ag-menu-option-disabled {\n  opacity: 0.5;\n}\n\n[dir=ltr] .ag-theme-material .ag-menu .ag-menu-option-text {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-menu .ag-menu-option-text {\n  margin-right: 8px;\n}\n\n.ag-theme-material .ag-menu .ag-menu-option-icon {\n  min-width: 34px;\n}\n\n[dir=ltr] .ag-theme-material .ag-menu .ag-menu-option-icon {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-menu .ag-menu-option-icon {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-menu .ag-menu-option-shortcut {\n  padding-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-menu .ag-menu-option-shortcut {\n  padding-right: 16px;\n}\n\n.ag-theme-material .ag-menu .ag-menu-separator {\n  height: 16px;\n}\n\n[dir] .ag-theme-material .ag-menu .ag-menu-separator > span {\n  background-image: url(\"data:image/svg+xml,%3Csvg%20width%3D'1'%20height%3D'16px'%20viewBox%3D'0%200%201%2016px'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cline%20x1%3D'0'%20y1%3D'8px'%20x2%3D'1'%20y2%3D'8px'%20stroke-width%3D'1'%20stroke%3D'%23E2E2E2'%2F%3E%3C%2Fsvg%3E\");\n}\n\n.ag-theme-material .ag-menu .ag-menu-option-popup-pointer {\n  width: 34px;\n}\n\n[dir] .ag-theme-material .ag-menu .ag-menu-option-popup-pointer {\n  text-align: center;\n}\n\n.ag-theme-material.ag-dnd-ghost {\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 600;\n  font-size: inherit;\n  font-family: inherit;\n  height: 56px !important;\n  line-height: 56px;\n}\n\n[dir] .ag-theme-material.ag-dnd-ghost {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  border: 1px solid #e2e2e2;\n  margin: 0;\n  padding: 0 16px;\n  transform: translateY(16px);\n}\n\n.ag-theme-material.ag-dnd-ghost span,\n.ag-theme-material.ag-dnd-ghost div {\n  height: 100%;\n}\n\n[dir] .ag-theme-material.ag-dnd-ghost span, [dir] .ag-theme-material.ag-dnd-ghost div {\n  margin: 0;\n  padding: 0;\n}\n\n.ag-theme-material.ag-dnd-ghost .ag-dnd-ghost-icon {\n  opacity: 0.87;\n}\n\n[dir=ltr] .ag-theme-material.ag-dnd-ghost .ag-dnd-ghost-icon {\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material.ag-dnd-ghost .ag-dnd-ghost-icon {\n  margin-left: 8px;\n}\n\n.ag-theme-material .ag-tab-header {\n  min-width: 220px;\n  width: 100%;\n  display: flex;\n}\n\n[dir] .ag-theme-material .ag-tab-header {\n  background: #eee;\n}\n\n.ag-theme-material .ag-tab-header .ag-tab {\n  display: flex;\n  height: 32px;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  flex: 1 1 auto;\n}\n\n[dir] .ag-theme-material .ag-tab-header .ag-tab {\n  border-bottom: 2px solid transparent;\n}\n\n[dir] .ag-theme-material .ag-tab-body {\n  padding: 4px 0;\n}\n\n[dir] .ag-theme-material .ag-tab-body .ag-menu-list {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n[dir] .ag-theme-material .ag-tab-body .ag-menu-list > div:first-child > span {\n  padding-top: 0;\n}\n\n[dir] .ag-theme-material .ag-tab-body .ag-menu-list > div:last-child > span {\n  padding-bottom: 0;\n}\n\n[dir] .ag-theme-material .ag-tab-body .ag-menu-list > div:last-child > .ag-menu-option-popup-pointer {\n  background-position-y: 0;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-select, [dir] .ag-theme-material .ag-filter .ag-filter-body {\n  margin-bottom: 8px;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-body {\n  margin-top: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-filter .ag-filter-filter {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-filter .ag-filter-filter {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-select {\n  margin: 8px;\n}\n\n.ag-theme-material .ag-filter input[type=radio] {\n  width: 12px;\n  height: 17px;\n  vertical-align: top;\n}\n\n[dir=ltr] .ag-theme-material .ag-filter input[type=radio] {\n  margin: 0 3px 0 6px;\n}\n\n[dir=rtl] .ag-theme-material .ag-filter input[type=radio] {\n  margin: 0 6px 0 3px;\n}\n\n[dir=ltr] .ag-theme-material .ag-filter input[type=text], [dir=ltr] .ag-theme-material .ag-filter input[type=date] {\n  padding-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-filter input[type=text], [dir=rtl] .ag-theme-material .ag-filter input[type=date] {\n  padding-right: 8px;\n}\n\n.ag-theme-material .ag-filter .ag-set-filter-list {\n  height: 240px;\n}\n\n.ag-theme-material .ag-filter .ag-set-filter-item {\n  height: 40px;\n}\n\n[dir=ltr] .ag-theme-material .ag-filter .ag-set-filter-item > div, [dir=ltr] .ag-theme-material .ag-filter .ag-set-filter-item > span {\n  margin-left: 5px;\n}\n\n[dir=rtl] .ag-theme-material .ag-filter .ag-set-filter-item > div, [dir=rtl] .ag-theme-material .ag-filter .ag-set-filter-item > span {\n  margin-right: 5px;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-header-container {\n  border-bottom: 1px solid #e2e2e2;\n  padding-bottom: 4px;\n}\n\n.ag-theme-material .ag-filter .ag-filter-apply-panel {\n  display: flex;\n  justify-content: flex-end;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-apply-panel {\n  padding: 8px;\n  padding-top: 16px;\n}\n\n.ag-theme-material .ag-filter .ag-filter-apply-panel button {\n  line-height: 1.5;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  color: #7367F0;\n  font-family: inherit;\n  font-size: inherit;\n  text-transform: uppercase;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-apply-panel button {\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-filter .ag-filter-apply-panel button + button {\n  margin-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-filter .ag-filter-apply-panel button + button {\n  margin-right: 16px;\n}\n\n.ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group,\n.ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column {\n  height: 32px;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox, [dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-tool-panel-column-label, [dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons, [dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox, [dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-tool-panel-column-label, [dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox, [dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-tool-panel-column-label, [dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons, [dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox, [dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-tool-panel-column-label, [dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-column-select-panel .ag-primary-cols-list-panel {\n  border-top: 1px solid #e2e2e2;\n  padding-top: 8px;\n}\n\n[dir] .ag-theme-material .ag-column-select-panel .ag-primary-cols-list-panel > div {\n  cursor: pointer;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {\n  margin-left: 34px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {\n  margin-right: 34px;\n}\n\n.ag-theme-material .ag-primary-cols-header-panel {\n  height: 56px;\n  align-items: center;\n}\n\n[dir] .ag-theme-material .ag-primary-cols-header-panel {\n  border-top: 1px solid #e2e2e2;\n}\n\n[dir] .ag-theme-material .ag-primary-cols-header-panel > div {\n  cursor: pointer;\n  margin: 0 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-primary-cols-header-panel .ag-filter-body {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-primary-cols-header-panel .ag-filter-body {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-tool-panel-wrapper {\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-tool-panel-wrapper {\n  border-left: 0;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel {\n  width: 100%;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance {\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 600;\n  flex: auto;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  display: flex;\n  flex-flow: column nowrap;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance .ag-filter-toolpanel-header {\n  padding: 0 5px;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance .ag-filter-toolpanel-header > div {\n  margin: auto 0;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-body-wrapper {\n  padding-top: 5px;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-air {\n  border: 1px solid #e2e2e2;\n  padding: 8px 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-air {\n  border-left: 0;\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-air {\n  border-right: 0;\n  border-left: 0;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-pivot-mode-panel {\n  height: 56px;\n  display: flex;\n  flex: none;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  display: flex;\n  align-items: center;\n}\n\n[dir=ltr] .ag-theme-material .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  margin-right: 8px;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-column-select-panel {\n  border-bottom: 1px solid #e2e2e2;\n  padding-bottom: 7px;\n  padding-top: 0;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 8px 0;\n  padding-bottom: 16px;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  color: rgba(0, 0, 0, 0.38);\n  font-weight: 600;\n  font-size: inherit;\n  font-family: inherit;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  margin-top: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  padding-left: 34px;\n  padding-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  padding-right: 34px;\n  padding-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-list {\n  cursor: default;\n  margin-top: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop > div:first-child > span:first-child {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop > div:first-child > span:first-child {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop:last-child {\n  border-bottom: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-numeric-header .ag-header-cell-label .ag-header-icon {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-numeric-header .ag-header-cell-label .ag-header-icon {\n  margin-right: 0;\n  margin-left: 8px;\n}\n\n.ag-theme-material .ag-paging-panel {\n  color: rgba(0, 0, 0, 0.54);\n  height: 56px;\n}\n\n[dir] .ag-theme-material .ag-paging-panel {\n  border-top: 1px solid #e2e2e2;\n  padding: 0 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-paging-panel > span {\n  margin-left: 32px;\n}\n\n[dir=rtl] .ag-theme-material .ag-paging-panel > span {\n  margin-right: 32px;\n}\n\n.ag-theme-material .ag-paging-page-summary-panel .ag-icon {\n  width: 18px;\n  height: 18px;\n}\n\n.ag-theme-material .ag-paging-page-summary-panel .ag-paging-button button {\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n}\n\n[dir] .ag-theme-material .ag-paging-page-summary-panel .ag-paging-button button {\n  cursor: pointer;\n  padding: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-paging-page-summary-panel .ag-paging-button button {\n  right: 0;\n  left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-paging-page-summary-panel .ag-paging-button button {\n  left: 0;\n  right: 0;\n}\n\n.ag-theme-material .ag-paging-page-summary-panel .ag-paging-button.ag-disabled .ag-icon {\n  color: rgba(0, 0, 0, 0.38);\n  opacity: 0.38;\n}\n\n[dir] .ag-theme-material .ag-paging-page-summary-panel .ag-paging-button.ag-disabled button {\n  cursor: default;\n}\n\n[dir] .ag-theme-material .ag-paging-page-summary-panel span {\n  margin: 0 8px;\n}\n\n[dir] .ag-theme-material .ag-row-selected {\n  background-color: #eee;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell), [dir] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell) {\n  border: 1px solid transparent;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top, [dir] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top {\n  border-top-color: #7367F0;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right, [dir=ltr] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right {\n  border-right-color: #7367F0;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right, [dir=rtl] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right {\n  border-left-color: #7367F0;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom, [dir] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom {\n  border-bottom-color: #7367F0;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left, [dir=ltr] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left {\n  border-left-color: #7367F0;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left, [dir=rtl] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left {\n  border-right-color: #7367F0;\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.1);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart {\n  background-color: rgba(0, 88, 255, 0.1);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart.ag-cell-range-chart-category {\n  background-color: rgba(0, 255, 132, 0.1);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected-1:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.2);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected-2:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.3);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected-3:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.4);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected-4:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.5);\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-selection-fill-top, [dir] .ag-theme-material .ag-rtl .ag-selection-fill-top {\n  border-top: 1px dashed #7367F0;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-selection-fill-top.ag-cell.ag-cell-range-selected, [dir] .ag-theme-material .ag-rtl .ag-selection-fill-top.ag-cell.ag-cell-range-selected {\n  border-top: 1px dashed #afafaf;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-selection-fill-right, [dir=ltr] .ag-theme-material .ag-rtl .ag-selection-fill-right {\n  border-right: 1px dashed #7367F0;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-selection-fill-right, [dir=rtl] .ag-theme-material .ag-rtl .ag-selection-fill-right {\n  border-left: 1px dashed #7367F0;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-selection-fill-right.ag-cell.ag-cell-range-selected, [dir=ltr] .ag-theme-material .ag-rtl .ag-selection-fill-right.ag-cell.ag-cell-range-selected {\n  border-right: 1px dashed #afafaf;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-selection-fill-right.ag-cell.ag-cell-range-selected, [dir=rtl] .ag-theme-material .ag-rtl .ag-selection-fill-right.ag-cell.ag-cell-range-selected {\n  border-left: 1px dashed #afafaf;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-selection-fill-bottom, [dir] .ag-theme-material .ag-rtl .ag-selection-fill-bottom {\n  border-bottom: 1px dashed #7367F0;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-selection-fill-bottom.ag-cell.ag-cell-range-selected, [dir] .ag-theme-material .ag-rtl .ag-selection-fill-bottom.ag-cell.ag-cell-range-selected {\n  border-bottom: 1px dashed #afafaf;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-selection-fill-left, [dir=ltr] .ag-theme-material .ag-rtl .ag-selection-fill-left {\n  border-left: 1px dashed #7367F0;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-selection-fill-left, [dir=rtl] .ag-theme-material .ag-rtl .ag-selection-fill-left {\n  border-right: 1px dashed #7367F0;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-selection-fill-left.ag-cell.ag-cell-range-selected, [dir=ltr] .ag-theme-material .ag-rtl .ag-selection-fill-left.ag-cell.ag-cell-range-selected {\n  border-left: 1px dashed #afafaf;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-selection-fill-left.ag-cell.ag-cell-range-selected, [dir=rtl] .ag-theme-material .ag-rtl .ag-selection-fill-left.ag-cell.ag-cell-range-selected {\n  border-right: 1px dashed #afafaf;\n}\n\n.ag-theme-material .ag-range-handle, .ag-theme-material .ag-fill-handle {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  bottom: -1px;\n}\n\n[dir] .ag-theme-material .ag-range-handle, [dir] .ag-theme-material .ag-fill-handle {\n  background-color: #7367F0;\n}\n\n[dir=ltr] .ag-theme-material .ag-range-handle, [dir=ltr] .ag-theme-material .ag-fill-handle {\n  right: -1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-range-handle, [dir=rtl] .ag-theme-material .ag-fill-handle {\n  left: -1px;\n}\n\n[dir] .ag-theme-material .ag-fill-handle {\n  cursor: cell;\n}\n\n[dir=ltr] .ag-theme-material .ag-range-handle {\n  cursor: nwse-resize;\n}\n\n[dir=rtl] .ag-theme-material .ag-range-handle {\n  cursor: nesw-resize;\n}\n\n.ag-theme-material .ag-cell.ag-cell-inline-editing {\n  height: 72px;\n}\n\n[dir] .ag-theme-material .ag-cell.ag-cell-inline-editing {\n  padding: 24px;\n}\n\n[dir] .ag-theme-material .ag-cell.ag-cell-inline-editing {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  background-color: #fafafa;\n}\n\n[dir] .ag-theme-material .ag-popup-editor {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  background-color: #fafafa;\n  padding: 0;\n}\n\n.ag-theme-material .ag-popup-editor .ag-large-textarea textarea {\n  height: auto;\n}\n\n[dir] .ag-theme-material .ag-popup-editor .ag-large-textarea textarea {\n  padding: 24px;\n}\n\n.ag-theme-material .ag-virtual-list-container .ag-virtual-list-item {\n  height: 40px;\n}\n\n[dir] .ag-theme-material .ag-rich-select {\n  background-color: #fafafa;\n}\n\n.ag-theme-material .ag-rich-select .ag-rich-select-list {\n  width: 200px;\n  height: 312px;\n}\n\n.ag-theme-material .ag-rich-select .ag-rich-select-value {\n  height: 48px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rich-select .ag-rich-select-value {\n  padding: 0 8px 0 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rich-select .ag-rich-select-value {\n  padding: 0 24px 0 8px;\n}\n\n.ag-theme-material .ag-rich-select .ag-virtual-list-item {\n  height: 48px;\n}\n\n[dir] .ag-theme-material .ag-rich-select .ag-virtual-list-item {\n  cursor: default;\n}\n\n[dir] .ag-theme-material .ag-rich-select .ag-virtual-list-item:hover {\n  background-color: #fafafa;\n}\n\n[dir=ltr] .ag-theme-material .ag-rich-select .ag-rich-select-row {\n  padding-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rich-select .ag-rich-select-row {\n  padding-right: 24px;\n}\n\n[dir] .ag-theme-material .ag-rich-select .ag-rich-select-row-selected {\n  background-color: #eee;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-floating-filter-button {\n  margin-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-floating-filter-button {\n  margin-right: 24px;\n}\n\n.ag-theme-material .ag-floating-filter-button button {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  height: 18px;\n  width: 18px;\n}\n\n[dir] .ag-theme-material .ag-floating-filter-button button {\n  background: transparent;\n  border: 0;\n  padding: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-expanded:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-expanded:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-contracted:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-contracted:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) ~ .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) + .ag-group-value:not(:empty) {\n  margin-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-expanded:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-expanded:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-contracted:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-contracted:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) ~ .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) + .ag-group-value:not(:empty) {\n  margin-right: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) ~ .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-group-expanded:not(.ag-hidden) ~ .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-group-contracted:not(.ag-hidden) ~ .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) ~ .ag-group-checkbox {\n  margin-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) ~ .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-group-expanded:not(.ag-hidden) ~ .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-group-contracted:not(.ag-hidden) ~ .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) ~ .ag-group-checkbox {\n  margin-right: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-group-child-count {\n  margin-left: 2px;\n}\n\n[dir=rtl] .ag-theme-material .ag-group-child-count {\n  margin-right: 2px;\n}\n\n.ag-theme-material .ag-selection-checkbox span {\n  position: relative;\n}\n\n.ag-theme-material .ag-column-drop-horizontal {\n  height: 48px;\n}\n\n[dir] .ag-theme-material .ag-column-drop-horizontal {\n  background-color: #eee;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-drop-horizontal {\n  padding-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-drop-horizontal {\n  padding-right: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-drop-horizontal .ag-icon-group, [dir=ltr] .ag-theme-material .ag-column-drop-horizontal .ag-icon-pivot {\n  margin-right: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-drop-horizontal .ag-icon-group, [dir=rtl] .ag-theme-material .ag-column-drop-horizontal .ag-icon-pivot {\n  margin-left: 24px;\n}\n\n.ag-theme-material .ag-column-drop-horizontal .ag-icon-small-left,\n.ag-theme-material .ag-column-drop-horizontal .ag-icon-small-right {\n  opacity: 0.54;\n}\n\n[dir] .ag-theme-material .ag-column-drop-horizontal .ag-icon-small-left, [dir] .ag-theme-material .ag-column-drop-horizontal .ag-icon-small-right {\n  margin: 0 8px;\n}\n\n.ag-theme-material .ag-column-drop-horizontal .ag-column-drop-empty-message {\n  opacity: 0.38;\n}\n\n.ag-theme-material .ag-column-drop-cell {\n  min-height: 32px;\n}\n\n[dir] .ag-theme-material .ag-column-drop-cell {\n  background: #e2e2e2;\n  border-radius: 32px;\n  padding: 0 4px;\n}\n\n[dir] .ag-theme-material .ag-column-drop-cell .ag-column-drop-cell-text {\n  margin: 0 8px;\n}\n\n.ag-theme-material .ag-column-drop-cell .ag-column-drop-cell-button {\n  min-width: 32px;\n  opacity: 0.54;\n}\n\n[dir] .ag-theme-material .ag-column-drop-cell .ag-column-drop-cell-button {\n  margin: 0 4px;\n}\n\n.ag-theme-material .ag-column-drop-cell .ag-column-drop-cell-button:hover {\n  opacity: 0.87;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-drop-cell .ag-column-drag {\n  margin-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-drop-cell .ag-column-drag {\n  margin-right: 16px;\n}\n\n[dir] .ag-theme-material .ag-column-drop-vertical .ag-column-drop-cell {\n  margin-top: 8px;\n}\n\n.ag-theme-material .ag-select-agg-func-popup {\n  height: 140px;\n}\n\n[dir] .ag-theme-material .ag-select-agg-func-popup {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  background: #fff;\n  padding: 0;\n}\n\n.ag-theme-material .ag-select-agg-func-popup .ag-virtual-list-item {\n  line-height: 40px;\n}\n\n[dir] .ag-theme-material .ag-select-agg-func-popup .ag-virtual-list-item {\n  cursor: default;\n}\n\n[dir=ltr] .ag-theme-material .ag-select-agg-func-popup .ag-virtual-list-item {\n  padding-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-select-agg-func-popup .ag-virtual-list-item {\n  padding-right: 16px;\n}\n\n.ag-theme-material .ag-set-filter-list,\n.ag-theme-material .ag-menu-column-select-wrapper {\n  width: auto;\n}\n\n[dir] .ag-theme-material .ag-column-drop-vertical > .ag-column-drop-cell {\n  margin-top: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-drop-vertical > .ag-column-drop-cell {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-drop-vertical > .ag-column-drop-cell {\n  margin-right: 8px;\n}\n\n[dir] .ag-theme-material .ag-cell-data-changed {\n  background-color: #00acc1 !important;\n}\n\n.ag-theme-material .ag-cell-data-changed-animation {\n  transition: background-color 1s;\n}\n\n[dir] .ag-theme-material .ag-cell-data-changed-animation {\n  background-color: transparent;\n}\n\n[dir] .ag-theme-material .ag-stub-cell {\n  padding-top: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-stub-cell {\n  padding-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-stub-cell {\n  padding-right: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-stub-cell .ag-loading-icon {\n  -webkit-animation-name:  spin-ltr ;\n          animation-name:  spin-ltr ;\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n\n[dir=rtl] .ag-theme-material .ag-stub-cell .ag-loading-icon {\n  -webkit-animation-name:  spin-rtl ;\n          animation-name:  spin-rtl ;\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n\n@-webkit-keyframes spin-ltr {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin-ltr {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes spin-rtl {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(-360deg);\n  }\n}\n\n@keyframes spin-rtl {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(-360deg);\n  }\n}\n\n[dir] .ag-theme-material .ag-stub-cell .ag-loading-text {\n  margin-top: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-stub-cell .ag-loading-text {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-stub-cell .ag-loading-text {\n  margin-right: 8px;\n}\n\n[dir] .ag-theme-material .ag-floating-top {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n[dir] .ag-theme-material .ag-floating-bottom {\n  border-top: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-status-bar {\n  color: rgba(0, 0, 0, 0.38);\n  font-weight: 600;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: 1.5;\n}\n\n[dir] .ag-theme-material .ag-status-bar {\n  background: #fff;\n  border: 1px solid #e2e2e2;\n  border-top-width: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-status-bar {\n  padding-right: 32px;\n  padding-left: 32px;\n}\n\n[dir=rtl] .ag-theme-material .ag-status-bar {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ag-theme-material .ag-name-value-value {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n[dir] .ag-theme-material .ag-status-bar-center {\n  text-align: center;\n}\n\n[dir] .ag-theme-material .ag-name-value {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n[dir=ltr] .ag-theme-material .ag-name-value {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-name-value {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-details-row {\n  padding: 40px;\n}\n\n[dir] .ag-theme-material .ag-overlay-loading-wrapper {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n[dir] .ag-theme-material .ag-overlay-loading-center {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n}\n\n.ag-theme-material .ag-side-bar {\n  position: relative;\n}\n\n[dir] .ag-theme-material .ag-side-bar {\n  background-color: #fafafa;\n  border: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar {\n  border-left-width: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar {\n  border-right-width: 0;\n}\n\n.ag-theme-material .ag-side-bar .ag-side-buttons {\n  width: 22px;\n  position: relative;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons {\n  padding-top: 32px;\n  background: #fff;\n}\n\n.ag-theme-material .ag-side-bar .ag-side-buttons .ag-side-button button {\n  color: rgba(0, 0, 0, 0.87);\n  width: 100%;\n  min-height: 144px;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-side-button button {\n  background: transparent;\n  border: 0;\n  padding: 16px 0 16px 0;\n  margin: 0;\n  border-width: 1px 0 1px 0;\n  border-style: solid;\n  border-color: transparent;\n  background-position-y: center;\n  background-position-x: center;\n  background-repeat: no-repeat;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  background-color: #fafafa;\n  border-color: #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  margin-left: -1px;\n  padding-left: 1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  margin-right: -1px;\n  padding-right: 1px;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar .ag-panel-container {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar .ag-panel-container {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar.full-width .ag-panel-container {\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar.full-width .ag-panel-container {\n  border-left: 0;\n}\n\n.ag-theme-material .ag-side-bar .ag-column-drop {\n  min-height: 50px;\n}\n\n[dir=ltr] .ag-theme-material .ag-primary-cols-filter-wrapper {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-primary-cols-filter-wrapper {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-group-component {\n  background-color: #fdfdfd;\n  padding: 0px;\n  border: 0 solid #efefef;\n  border-top-width: 1px;\n}\n\n.ag-theme-material .ag-group-component.ag-disabled > .ag-group-component-label .ag-group-component-title, .ag-theme-material .ag-group-component.ag-disabled > .ag-group-component-container {\n  opacity: 0.5;\n}\n\n.ag-theme-material .ag-group-component .ag-group-component-title-bar {\n  height: 18px;\n  font-size: inherit;\n  font-family: inherit;\n  height: 26px;\n}\n\n[dir] .ag-theme-material .ag-group-component .ag-group-component-title-bar {\n  background-color: #f0f0f0;\n}\n\n[dir=ltr] .ag-theme-material .ag-group-component:not(.ag-collapsible) > div {\n  margin-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-group-component:not(.ag-collapsible) > div {\n  margin-right: 0;\n}\n\n[dir] .ag-theme-material .ag-group-component:not(.ag-collapsible) > .ag-group-component-title-bar {\n  padding: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-group-component:not(.ag-collapsible) > .ag-group-component-title-bar {\n  margin-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-group-component:not(.ag-collapsible) > .ag-group-component-title-bar {\n  margin-right: 0;\n}\n\n.ag-theme-material .ag-group-component:not(.ag-collapsible) > .ag-group-component-title-bar .ag-column-group-icons {\n  display: none;\n}\n\n[dir] .ag-theme-material .ag-group-component .ag-group-component-toolbar {\n  background-color: #f7f7f7;\n  padding: 8px;\n  border: 0 solid #e2e2e2;\n}\n\n[dir] .ag-theme-material .ag-group-component > .ag-group-component-container {\n  padding: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-group-component > .ag-group-component-container {\n  margin-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-group-component > .ag-group-component-container {\n  margin-right: 16px;\n}\n\n[dir] .ag-theme-material .ag-group-component .ag-group-item {\n  margin: 4px 0;\n}\n\n.ag-theme-material .ag-group-component .ag-group-item .ag-group-component-title-bar {\n  height: 18px;\n}\n\n.ag-theme-material .ag-labeled label {\n  white-space: nowrap;\n}\n\n[dir=ltr] .ag-theme-material .ag-labeled label {\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-labeled label {\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-labeled.ag-label-align-top label {\n  margin-bottom: 4px;\n}\n\n[dir=ltr] .ag-theme-material .ag-slider > .ag-wrapper > div:not(:first-of-type), [dir=ltr] .ag-theme-material .ag-angle-select > .ag-wrapper > div:not(:first-of-type) {\n  margin-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-slider > .ag-wrapper > div:not(:first-of-type), [dir=rtl] .ag-theme-material .ag-angle-select > .ag-wrapper > div:not(:first-of-type) {\n  margin-right: 16px;\n}\n\n.ag-theme-material .ag-angle-select .ag-angle-select-field .ag-parent-circle {\n  width: 24px;\n  height: 24px;\n}\n\n[dir] .ag-theme-material .ag-angle-select .ag-angle-select-field .ag-parent-circle {\n  border-radius: 12px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.9);\n  background-color: #ffffff;\n}\n\n.ag-theme-material .ag-angle-select .ag-angle-select-field .ag-child-circle {\n  top: 4px;\n  width: 6px;\n  height: 6px;\n}\n\n[dir] .ag-theme-material .ag-angle-select .ag-angle-select-field .ag-child-circle {\n  margin-top: -4px;\n  border-radius: 3px;\n  background-color: #4c4c4c;\n}\n\n[dir=ltr] .ag-theme-material .ag-angle-select .ag-angle-select-field .ag-child-circle {\n  left: 12px;\n  margin-left: -3px;\n}\n\n[dir=rtl] .ag-theme-material .ag-angle-select .ag-angle-select-field .ag-child-circle {\n  right: 12px;\n  margin-right: -3px;\n}\n\n.ag-theme-material .ag-toggle-button .ag-input-wrapper {\n  height: 18px;\n  width: 40px;\n}\n\n[dir] .ag-theme-material .ag-toggle-button .ag-input-wrapper {\n  background-color: #fff;\n  border: 1px solid #333;\n  border-radius: 500rem;\n}\n\n.ag-theme-material .ag-toggle-button .ag-input-wrapper .ag-icon {\n  width: 18px;\n  height: 18px;\n}\n\n[dir] .ag-theme-material .ag-toggle-button .ag-input-wrapper .ag-icon {\n  border: 1px solid #333;\n  border-radius: 500rem;\n}\n\n[dir=ltr] .ag-theme-material .ag-toggle-button .ag-input-wrapper .ag-icon {\n  right: calc(100% - 18px);\n}\n\n[dir=rtl] .ag-theme-material .ag-toggle-button .ag-input-wrapper .ag-icon {\n  left: calc(100% - 18px);\n}\n\n[dir] .ag-theme-material .ag-toggle-button.ag-selected .ag-input-wrapper {\n  background-color: #ff4081;\n}\n\n[dir] .ag-theme-material .ag-toggle-button.ag-selected .ag-input-wrapper .ag-icon {\n  background: #fff;\n}\n\n[dir=ltr] .ag-theme-material .ag-toggle-button.ag-selected .ag-input-wrapper .ag-icon {\n  right: -1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-toggle-button.ag-selected .ag-input-wrapper .ag-icon {\n  left: -1px;\n}\n\n[dir] .ag-theme-material .ag-color-picker > .ag-wrapper {\n  border: 1px solid #e2e2e2;\n  border-radius: 5px;\n}\n\n.ag-theme-material .ag-color-picker > .ag-wrapper > div {\n  width: 18px;\n  height: 18px;\n}\n\n[dir] .ag-theme-material .ag-color-picker > .ag-wrapper button {\n  background-color: #fff;\n}\n\n[dir] .ag-theme-material .ag-color-picker > .ag-wrapper button:hover {\n  background-color: #fafafa;\n}\n\n[dir] .ag-theme-material .ag-dialog.ag-color-dialog {\n  border-radius: 5px;\n}\n\n[dir] .ag-theme-material .ag-color-panel {\n  padding: 8px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-color {\n  background-color: red;\n  border-radius: 2px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-tools {\n  padding: 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-color-panel .ag-spectrum-sat {\n  background-image: linear-gradient(to right, white, rgba(204, 154, 129, 0));\n}\n\n[dir=rtl] .ag-theme-material .ag-color-panel .ag-spectrum-sat {\n  background-image: linear-gradient(to left, white, rgba(204, 154, 129, 0));\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-val {\n  background-image: linear-gradient(to top, black, rgba(204, 154, 129, 0));\n}\n\n.ag-theme-material .ag-color-panel .ag-spectrum-dragger {\n  height: 12px;\n  width: 12px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-dragger {\n  border-radius: 12px;\n  border: 1px solid white;\n  background: black;\n  box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.24);\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-hue-background {\n  border-radius: 2px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-alpha-background {\n  border-radius: 2px;\n}\n\n.ag-theme-material .ag-color-panel .ag-hue-alpha {\n  height: 11px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-hue-alpha {\n  margin-bottom: 10px;\n  border-radius: 2px;\n}\n\n.ag-theme-material .ag-color-panel .ag-spectrum-slider {\n  width: 13px;\n  height: 13px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-slider {\n  margin-top: -12px;\n  border-radius: 13px;\n  background-color: #f8f8f8;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n\n.ag-theme-material .ag-color-panel .ag-spectrum-text-value {\n  font-weight: bold;\n  line-height: 20px;\n  color: #333;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-text-value:focus {\n  border: 1px solid #0d77e4;\n  padding: 2px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-recent-colors > div {\n  margin: 0 3px;\n}\n\n[dir=ltr] .ag-theme-material .ag-color-panel .ag-recent-colors > div:first-child {\n  margin-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-color-panel .ag-recent-colors > div:first-child {\n  margin-right: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-color-panel .ag-recent-colors > div:last-child {\n  margin-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-color-panel .ag-recent-colors > div:last-child {\n  margin-left: 0;\n}\n\n[dir=ltr] .ag-theme-material.ag-popup > div:not(.ag-tooltip-custom) {\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);\n}\n\n[dir=rtl] .ag-theme-material.ag-popup > div:not(.ag-tooltip-custom) {\n  box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.3);\n}\n\n[dir] .ag-theme-material .ag-panel {\n  background-color: #fff;\n  border: 1px solid #e2e2e2;\n}\n\n.ag-dragging-range-handle .ag-theme-material .ag-panel.ag-dialog, .ag-dragging-fill-handle .ag-theme-material .ag-panel.ag-dialog {\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.ag-theme-material .ag-panel .ag-title-bar {\n  color: rgba(0, 0, 0, 0.54);\n  height: 56px;\n  font-size: inherit;\n  font-weight: 600;\n  font-family: inherit;\n}\n\n[dir] .ag-theme-material .ag-panel .ag-title-bar {\n  background-color: #fff;\n  border-bottom: 1px solid #fcfcfc;\n  padding: 5px 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-panel .ag-title-bar {\n  padding-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-panel .ag-title-bar {\n  padding-right: 24px;\n}\n\n.ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button {\n  height: 20px;\n  width: 20px;\n}\n\n[dir] .ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button {\n  border-radius: 5px;\n}\n\n.ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button .ag-icon {\n  line-height: 20px;\n  font-size: 20px;\n}\n\n[dir] .ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button:hover, [dir] .ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button.ag-has-popup {\n  background-color: #e6e6e6;\n}\n\n[dir=ltr] .ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button:not(:last-child) {\n  margin-right: 5px;\n}\n\n[dir=rtl] .ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button:not(:last-child) {\n  margin-left: 5px;\n}\n\n.ag-theme-material .ag-panel .ag-message-box .ag-message-box-button-bar {\n  height: 30px;\n}\n\n[dir] .ag-theme-material .ag-panel .ag-message-box .ag-message-box-button-bar {\n  background-color: #fff;\n  padding: 2px;\n}\n\n[dir] .ag-theme-material .ag-panel .ag-message-box .ag-message-box-button-bar button {\n  border-radius: 2px;\n}\n\n.ag-theme-material .ag-tooltip {\n  color: rgba(0, 0, 0, 0.87);\n  transition: opacity 1s;\n}\n\n[dir] .ag-theme-material .ag-tooltip {\n  background-color: #535353;\n  border-radius: 2px;\n  padding: 5px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #ebebeb;\n}\n\n.ag-theme-material .ag-tooltip.ag-tooltip-hiding {\n  opacity: 0;\n}\n\n[dir] .ag-theme-material .ag-chart .ag-chart-menu {\n  border-radius: 5px;\n  background: #fff;\n}\n\n[dir] .ag-theme-material .ag-chart .ag-chart-menu > span:hover {\n  background-color: #e6e6e6;\n}\n\n[dir=ltr] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-group-component-container {\n  margin-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-group-component-container {\n  margin-right: 0;\n}\n\n[dir] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail {\n  border: 1px solid #e2e2e2;\n  border-radius: 5px;\n  margin: 5px;\n}\n\n[dir=ltr] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(2n+2):not(:last-child) {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n[dir=rtl] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(2n+2):not(:last-child) {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n[dir=ltr] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(3n+1) {\n  margin-left: 2px;\n}\n\n[dir=rtl] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(3n+1) {\n  margin-right: 2px;\n}\n\n[dir=ltr] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(3n) {\n  margin-right: 2px;\n}\n\n[dir=rtl] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(3n) {\n  margin-left: 2px;\n}\n\n[dir] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail.ag-selected {\n  border-color: #7367F0;\n}\n\n.ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item {\n  color: rgba(0, 0, 0, 0.87);\n  font-size: inherit-2;\n}\n\n.ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item.ag-selected {\n  color: #7367F0;\n}\n\n[dir] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-format .ag-chart-format-wrapper .ag-group-item {\n  margin: 9.6px 0;\n}\n\n.ag-theme-material .ag-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"agGridMaterial\";\n  speak: none;\n  font-size: 18px;\n  color: #333;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.ag-theme-material .ag-icon-aggregation:before {\n  content: \"\\E900\";\n}\n\n.ag-theme-material .ag-icon-arrows:before {\n  content: \"\\E901\";\n}\n\n.ag-theme-material .ag-icon-asc:before {\n  content: \"\\E902\";\n}\n\n.ag-theme-material .ag-icon-cancel:before {\n  content: \"\\E903\";\n}\n\n.ag-theme-material .ag-icon-chart:before {\n  content: \"\\E904\";\n}\n\n.ag-theme-material .ag-icon-checkbox-checked:before {\n  content: \"\\E905\";\n}\n\n.ag-theme-material .ag-icon-checkbox-indeterminate:before {\n  content: \"\\E906\";\n}\n\n.ag-theme-material .ag-icon-checkbox-unchecked:before {\n  content: \"\\E907\";\n}\n\n.ag-theme-material .ag-icon-color-picker:before {\n  content: \"\\E908\";\n}\n\n.ag-theme-material .ag-icon-column:before {\n  content: \"\\E909\";\n}\n\n.ag-theme-material .ag-icon-columns:before {\n  content: \"\\E90A\";\n}\n\n.ag-theme-material .ag-icon-contracted:before {\n  content: \"\\E90B\";\n}\n\n.ag-theme-material .ag-icon-copy:before {\n  content: \"\\E90C\";\n}\n\n.ag-theme-material .ag-icon-cross:before {\n  content: \"\\E90D\";\n}\n\n.ag-theme-material .ag-icon-cut:before {\n  content: \"\\E90E\";\n}\n\n.ag-theme-material .ag-icon-data:before {\n  content: \"\\E90F\";\n}\n\n.ag-theme-material .ag-icon-desc:before {\n  content: \"\\E910\";\n}\n\n.ag-theme-material .ag-icon-expanded:before {\n  content: \"\\E911\";\n}\n\n.ag-theme-material .ag-icon-eye-slash:before {\n  content: \"\\E912\";\n}\n\n.ag-theme-material .ag-icon-eye:before {\n  content: \"\\E913\";\n}\n\n.ag-theme-material .ag-icon-filter:before {\n  content: \"\\E914\";\n}\n\n.ag-theme-material .ag-icon-first:before {\n  content: \"\\E915\";\n}\n\n.ag-theme-material .ag-icon-grip:before {\n  content: \"\\E916\";\n}\n\n.ag-theme-material .ag-icon-group:before {\n  content: \"\\E917\";\n}\n\n.ag-theme-material .ag-icon-indeterminate:before {\n  content: \"\\E918\";\n}\n\n.ag-theme-material .ag-icon-last:before {\n  content: \"\\E919\";\n}\n\n.ag-theme-material .ag-icon-left:before {\n  content: \"\\E91A\";\n}\n\n.ag-theme-material .ag-icon-linked:before {\n  content: \"\\E934\";\n}\n\n.ag-theme-material .ag-icon-loading:before {\n  content: \"\\E91B\";\n}\n\n.ag-theme-material .ag-icon-maximize:before {\n  content: \"\\E91C\";\n}\n\n.ag-theme-material .ag-icon-menu:before {\n  content: \"\\E91D\";\n}\n\n.ag-theme-material .ag-icon-minimize:before {\n  content: \"\\E91E\";\n}\n\n.ag-theme-material .ag-icon-minus:before {\n  content: \"\\E91F\";\n}\n\n.ag-theme-material .ag-icon-next:before {\n  content: \"\\E920\";\n}\n\n.ag-theme-material .ag-icon-none:before {\n  content: \"\\E921\";\n}\n\n.ag-theme-material .ag-icon-not-allowed:before {\n  content: \"\\E922\";\n}\n\n.ag-theme-material .ag-icon-paste:before {\n  content: \"\\E923\";\n}\n\n.ag-theme-material .ag-icon-pin:before {\n  content: \"\\E924\";\n}\n\n.ag-theme-material .ag-icon-pivot:before {\n  content: \"\\E925\";\n}\n\n.ag-theme-material .ag-icon-plus:before {\n  content: \"\\E926\";\n}\n\n.ag-theme-material .ag-icon-previous:before {\n  content: \"\\E927\";\n}\n\n.ag-theme-material .ag-icon-radio-button-off:before {\n  content: \"\\E928\";\n}\n\n.ag-theme-material .ag-icon-radio-button-on:before {\n  content: \"\\E929\";\n}\n\n.ag-theme-material .ag-icon-right:before {\n  content: \"\\E92A\";\n}\n\n.ag-theme-material .ag-icon-save:before {\n  content: \"\\E92B\";\n}\n\n.ag-theme-material .ag-icon-small-down:before {\n  content: \"\\E92C\";\n}\n\n.ag-theme-material .ag-icon-small-left:before {\n  content: \"\\E92D\";\n}\n\n.ag-theme-material .ag-icon-small-right:before {\n  content: \"\\E92E\";\n}\n\n.ag-theme-material .ag-icon-small-up:before {\n  content: \"\\E92F\";\n}\n\n.ag-theme-material .ag-icon-tick:before {\n  content: \"\\E930\";\n}\n\n.ag-theme-material .ag-icon-tree-closed:before {\n  content: \"\\E931\";\n}\n\n.ag-theme-material .ag-icon-tree-indeterminate:before {\n  content: \"\\E932\";\n}\n\n.ag-theme-material .ag-icon-tree-open:before {\n  content: \"\\E933\";\n}\n\n.ag-theme-material .ag-icon-unlinked:before {\n  content: \"\\E935\";\n}\n\n.ag-theme-material .ag-icon-checkbox-checked,\n.ag-theme-material .ag-icon-checkbox-indeterminate,\n.ag-theme-material .ag-icon-checkbox-unchecked {\n  line-height: 18px;\n}\n\n[dir] .ag-theme-material .ag-icon-checkbox-checked, [dir] .ag-theme-material .ag-icon-checkbox-indeterminate, [dir] .ag-theme-material .ag-icon-checkbox-unchecked {\n  background-color: transparent;\n  border-radius: 3px;\n}\n\n.ag-theme-material .ag-icon-checkbox-checked-readonly,\n.ag-theme-material .ag-icon-checkbox-indeterminate-readonly,\n.ag-theme-material .ag-icon-checkbox-unchecked-readonly {\n  opacity: 0.38;\n}\n\n[dir] .ag-theme-material .ag-icon-checkbox-checked-readonly, [dir] .ag-theme-material .ag-icon-checkbox-indeterminate-readonly, [dir] .ag-theme-material .ag-icon-checkbox-unchecked-readonly {\n  cursor: default;\n}\n\n.ag-theme-material .ag-icon-checkbox-checked {\n  color: #ff4081;\n}\n\n.ag-theme-material .ag-icon-checkbox-checked-readonly:before {\n  content: \"\\E905\";\n}\n\n.ag-theme-material .ag-icon-checkbox-indeterminate-readonly:before {\n  content: \"\\E906\";\n}\n\n.ag-theme-material .ag-icon-checkbox-unchecked-readonly:before {\n  content: \"\\E907\";\n}\n\n.ag-theme-material .ag-icon-row-drag:before {\n  content: \"\\E916\";\n}\n\n.ag-theme-material .ag-right-arrow:before {\n  content: \"\\E91A\";\n}\n\n.ag-theme-material .ag-icon-radio-button-on {\n  color: #ff4081;\n}\n\n.ag-theme-material .ag-right-arrow:before {\n  content: \"\\E92A\";\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl {\n  text-align: right;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl {\n  text-align: left;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-numeric-cell {\n  text-align: left;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-numeric-cell {\n  text-align: right;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-checkbox:not(.ag-label-align-left) label, [dir=ltr] .ag-theme-material .ag-rtl .ag-radio-button:not(.ag-label-align-left) label, [dir=ltr] .ag-theme-material .ag-rtl .ag-toggle-button:not(.ag-label-align-left) label {\n  margin-right: 8px;\n  margin-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-checkbox:not(.ag-label-align-left) label, [dir=rtl] .ag-theme-material .ag-rtl .ag-radio-button:not(.ag-label-align-left) label, [dir=rtl] .ag-theme-material .ag-rtl .ag-toggle-button:not(.ag-label-align-left) label {\n  margin-left: 8px;\n  margin-right: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  margin-left: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  padding-left: 8px;\n  padding-right: 32px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  padding-right: 8px;\n  padding-left: 32px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox, [dir=ltr] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons, [dir=ltr] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox, [dir=ltr] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox, [dir=rtl] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons, [dir=rtl] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox, [dir=rtl] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {\n  margin-left: 0;\n  margin-right: 34px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {\n  margin-right: 0;\n  margin-left: 34px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-header-select-all {\n  margin-left: 24px;\n  margin-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-header-select-all {\n  margin-right: 24px;\n  margin-left: 0;\n}\n\n.ag-theme-material .ag-rtl .ag-selection-checkbox,\n.ag-theme-material .ag-rtl .ag-group-checkbox,\n.ag-theme-material .ag-rtl .ag-group-expanded,\n.ag-theme-material .ag-rtl .ag-group-contracted {\n  display: inline-flex;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-group-value:not(:empty) {\n  margin-right: 24px;\n  margin-left: initial;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-group-value:not(:empty) {\n  margin-left: 24px;\n  margin-right: initial;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-group-checkbox {\n  margin-right: 24px;\n  margin-left: initial;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-group-checkbox {\n  margin-left: 24px;\n  margin-right: initial;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-group-child-count {\n  margin-left: unset;\n  margin-right: 2px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-group-child-count {\n  margin-right: unset;\n  margin-left: 2px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-column-drop-horizontal {\n  padding-right: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-column-drop-horizontal {\n  padding-left: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-column-drop-horizontal .ag-icon-group, [dir=ltr] .ag-theme-material .ag-rtl .ag-column-drop-horizontal .ag-icon-pivot {\n  margin-left: 24px;\n  margin-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-column-drop-horizontal .ag-icon-group, [dir=rtl] .ag-theme-material .ag-rtl .ag-column-drop-horizontal .ag-icon-pivot {\n  margin-right: 24px;\n  margin-left: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-floating-filter-button {\n  margin-right: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-floating-filter-button {\n  margin-left: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-set-filter-item > div, [dir=ltr] .ag-theme-material .ag-rtl .ag-set-filter-item > span {\n  margin-left: 0;\n  margin-right: 5px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-set-filter-item > div, [dir=rtl] .ag-theme-material .ag-rtl .ag-set-filter-item > span {\n  margin-right: 0;\n  margin-left: 5px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-header .ag-header-cell-resize::after {\n  border-left: 1px solid #e2e2e2;\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-header .ag-header-cell-resize::after {\n  border-right: 1px solid #e2e2e2;\n  border-left: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-side-bar .ag-panel-container {\n  border-left: 1px solid #e2e2e2;\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-side-bar .ag-panel-container {\n  border-right: 1px solid #e2e2e2;\n  border-left: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-side-bar.full-width .ag-panel-container {\n  border-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-side-bar.full-width .ag-panel-container {\n  border-right: 0;\n}\n\n.ag-theme-material .sass-variables::after {\n  content: '{ \"autoSizePadding\": \"24px\", \"headerHeight\": \"56px\", \"groupPaddingSize\": \"42px\", \"footerPaddingAddition\": \"32px\", \"virtualItemHeight\": \"40px\", \"aggFuncPopupHeight\": \"140px\", \"checkboxIndentWidth\": \"26px\", \"leafNodePadding\": \"24px\", \"rowHeight\": \"48px\", \"gridSize\": \"8px\", \"iconSize\": \"18px\" }';\n  display: none;\n}\n\n.ag-theme-material .ag-icon-checkbox-checked,\n.ag-theme-material .ag-icon-checkbox-checked-readonly,\n.ag-theme-material .ag-icon-checkbox-unchecked,\n.ag-theme-material .ag-icon-checkbox-unchecked-readonly,\n.ag-theme-material .ag-icon-checkbox-indeterminate,\n.ag-theme-material .ag-icon-checkbox-indeterminate-readonly,\n.ag-theme-material .ag-icon-radio-button-on,\n.ag-theme-material .ag-icon-radio-button-off {\n  height: 24px;\n  width: 24px;\n  font-size: 24px;\n  line-height: 24px;\n}\n\n.ag-theme-material .ag-header-cell, .ag-theme-material .ag-header-group-cell {\n  transition: background-color 0.5s;\n}\n\n[dir] .ag-theme-material .ag-cell-highlight {\n  background-color: #fce4ec !important;\n}\n\n.ag-theme-material .ag-cell-highlight-animation {\n  transition: background-color 1s;\n}\n\n.ag-theme-material .ag-menu-option {\n  height: 38px;\n}\n\n[dir] .ag-theme-material .ag-side-bar {\n  border-bottom: 0;\n  border-top: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar {\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar {\n  border-left: 0;\n}\n\n.ag-theme-material .ag-side-bar .ag-side-buttons button {\n  color: rgba(0, 0, 0, 0.54);\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 600;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons button {\n  border: 0;\n  background: transparent;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-side-button button {\n  background-color: transparent;\n  border-width: 0;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  background-color: #fafafa;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  border-left: 2px solid #7367F0;\n  margin-left: -2px;\n  padding-left: 1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  border-right: 2px solid #7367F0;\n  margin-right: -2px;\n  padding-right: 1px;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-filter-toolpanel-body {\n  background-color: #fff;\n}\n\n[dir] .ag-theme-material .ag-status-bar {\n  border-top-width: 1px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-side-bar .ag-side-buttons .ag-selected button {\n  border-left: 0;\n  margin-left: 0;\n  padding-left: 0;\n  border-right: 2px solid #7367F0;\n  margin-right: -2px;\n  padding-right: 1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-side-bar .ag-side-buttons .ag-selected button {\n  border-right: 0;\n  margin-right: 0;\n  padding-right: 0;\n  border-left: 2px solid #7367F0;\n  margin-left: -2px;\n  padding-left: 1px;\n}\n\n.ag-theme-material .ag-group-expanded .ag-icon-contracted:empty:before {\n  content: \"\\E933\";\n}\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n\n.ag-grid-table {\n  color: inherit !important;\n  height: calc(var(--vh, 1vh) * 100 - 30rem);\n}\n\n@media screen and (max-height: 800px) {\n  .ag-grid-table {\n    height: 620px;\n  }\n}\n\n.ag-grid-table .ag-header-cell .ag-cell-label-container .ag-header-icon.ag-filter-icon {\n  display: none;\n}\n\n[dir] .ag-grid-table .ag-filter-select {\n  padding: 0.3rem;\n  background: transparent;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.ag-grid-table .ag-filter-filter {\n  height: 25px !important;\n}\n\n[dir] .ag-grid-table .ag-filter-filter {\n  padding-bottom: 0 !important;\n  padding-bottom: 0 !important;\n  margin-top: 10px;\n  margin-bottom: 14px !important;\n}\n\n[dir=ltr] .ag-grid-table .ag-filter-filter {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n[dir=rtl] .ag-grid-table .ag-filter-filter {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n[dir] .ag-grid-table .ag-input-text-wrapper input {\n  padding-bottom: 0 !important;\n}\n\n.ag-grid-table .ag-floating-filter-body {\n  height: unset;\n}\n\n.ag-grid-table .ag-cell-inline-editing {\n  height: 62px !important;\n}\n\n[dir] .ag-grid-table .ag-cell-inline-editting, [dir] .ag-grid-table .ag-popup-editor {\n  padding-bottom: 12px;\n}\n\n@media screen and (max-width: 614px) {\n  .ag-grid-table .ag-grid-table-actions-right {\n    flex-grow: 1;\n  }\n}\n\n@media screen and (max-width: 614px) and (min-width: 443px) {\n  .ag-grid-table .ag-grid-table-actions-left {\n    display: flex;\n    flex-grow: 1;\n    justify-content: flex-end;\n  }\n}\n\n.ag-grid-table .ag-horizontal-left-spacer, .ag-grid-table .ag-horizontal-right-spacer {\n  overflow-x: auto;\n}\n\n.ag-grid-table .ag-icon-checkbox-checked,\n.ag-grid-table .ag-icon-checkbox-indeterminate {\n  font-size: 22px;\n  color: rgba(var(--vs-primary), 1) !important;\n}\n\n.ag-grid-table .ag-icon-checkbox-unchecked {\n  color: #b8c2cc !important;\n  font-size: 22px;\n}\n\n.ag-grid-table ::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n[dir] .ag-grid-table ::-webkit-scrollbar-thumb {\n  background: #dae1e7;\n  border-radius: 20px;\n}\n\n[dir] .ag-grid-table ::-webkit-scrollbar-track {\n  background: #f8f8f8;\n  border-radius: 20px;\n}\n\n.theme-dark .ag-grid-table.ag-theme-material {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material {\n  background: transparent;\n}\n\n.theme-dark .ag-grid-table.ag-theme-material .ag-header {\n  color: #fff;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material .ag-header {\n  background: transparent;\n  border-bottom-color: #414561;\n}\n\n[dir=ltr] .theme-dark .ag-grid-table.ag-theme-material .ag-cell-last-left-pinned {\n  border-right-color: #414561 !important;\n}\n\n[dir=rtl] .theme-dark .ag-grid-table.ag-theme-material .ag-cell-last-left-pinned {\n  border-left-color: #414561 !important;\n}\n\n.theme-dark .ag-grid-table.ag-theme-material .ag-floating-filter-input {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material .ag-floating-filter-input {\n  border-bottom-color: #414561;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material .ag-row-hover, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-header-cell:hover {\n  background-color: #262c49;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material .ag-row-selected {\n  background: #262c49;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material .ag-row, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-header-cell, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-header-group-cell, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-row, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-pinned-left-header, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-horizontal-left-spacer, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-horizontal-right-spacer {\n  border-color: #414561;\n}\n\n.theme-dark .ag-grid-table .ag-icon-checkbox-unchecked,\n.theme-dark .ag-grid-table .ag-icon-filter,\n.theme-dark .ag-grid-table .ag-icon-asc,\n.theme-dark .ag-grid-table .ag-icon-desc {\n  color: #c2c6dc !important;\n}\n\n[dir] .theme-dark .ag-grid-table .ag-filter-body-wrapper {\n  background-color: #262c49;\n}\n\n.theme-dark .ag-grid-table .ag-filter-select {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .ag-grid-table .ag-filter-select {\n  border-color: #414561;\n}\n\n[dir] .theme-dark .ag-grid-table option {\n  background-color: #10163a;\n}\n\n.theme-dark .ag-grid-table ::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n[dir] .theme-dark .ag-grid-table ::-webkit-scrollbar-thumb {\n  background: #7367F0;\n  border-radius: 20px;\n}\n\n[dir] .theme-dark .ag-grid-table ::-webkit-scrollbar-track {\n  background: #262c49;\n  border-radius: 20px;\n}\n\n.ag-grid-cell-chip {\n  top: 50%;\n  line-height: 1;\n}\n\n[dir] .ag-grid-cell-chip {\n  transform: translateY(-50%);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=style&index=0&id=cf516660&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=style&index=0&id=cf516660&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-new-data-sidebar[data-v-cf516660]  .vs-sidebar--background {\n  z-index: 52010;\n}\n.add-new-data-sidebar[data-v-cf516660]  .vs-sidebar {\n  z-index: 52010;\n  width: 400px;\n  max-width: 90vw;\n}\n[dir] .add-new-data-sidebar[data-v-cf516660]  .vs-sidebar .img-upload {\n  margin-top: 2rem;\n}\n[dir] .add-new-data-sidebar[data-v-cf516660]  .vs-sidebar .img-upload .con-img-upload {\n  padding: 0;\n}\n.add-new-data-sidebar[data-v-cf516660]  .vs-sidebar .img-upload .con-input-upload {\n  width: 100%;\n}\n[dir] .add-new-data-sidebar[data-v-cf516660]  .vs-sidebar .img-upload .con-input-upload {\n  margin: 0;\n}\n.scroll-area--data-list-add-new[data-v-cf516660] {\n  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#page-user-list .user-list-filters .vs__actions {\n  position: absolute;\n  top: 50%;\n}[dir] #page-user-list .user-list-filters .vs__actions {\n  transform: translateY(-58%);\n}[dir=ltr] #page-user-list .user-list-filters .vs__actions {\n  right: 0;\n}[dir=rtl] #page-user-list .user-list-filters .vs__actions {\n  left: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ag-grid-cell-chip.vs-chip-success {\n  color: rgba(var(--vs-success), 1) !important;\n  font-weight: 500;\n}[dir] .ag-grid-cell-chip.vs-chip-success {\n  background: rgba(var(--vs-success), 0.15);\n}\n.ag-grid-cell-chip.vs-chip-warning {\n  color: rgba(var(--vs-warning), 1) !important;\n  font-weight: 500;\n}\n[dir] .ag-grid-cell-chip.vs-chip-warning {\n  background: rgba(var(--vs-warning), 0.15);\n}\n.ag-grid-cell-chip.vs-chip-danger {\n  color: rgba(var(--vs-danger), 1) !important;\n  font-weight: 500;\n}\n[dir] .ag-grid-cell-chip.vs-chip-danger {\n  background: rgba(var(--vs-danger), 0.15);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=style&index=0&id=cf516660&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=style&index=0&id=cf516660&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuickViewAndAdd.vue?vue&type=style&index=0&id=cf516660&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=style&index=0&id=cf516660&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=template&id=cf516660&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=template&id=cf516660&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    "vs-sidebar",
    {
      staticClass: "add-new-data-sidebar items-no-padding",
      attrs: {
        "click-not-close": "",
        "position-right": "",
        parent: "body",
        "default-index": "1",
        color: "primary",
        spacer: ""
      },
      model: {
        value: _vm.isSidebarActiveLocal,
        callback: function($$v) {
          _vm.isSidebarActiveLocal = $$v
        },
        expression: "isSidebarActiveLocal"
      }
    },
    [
      _c(
        "div",
        { staticClass: "mt-6 flex items-center justify-between px-6" },
        [
          _c("h4", [
            _vm._v(
              _vm._s(
                Object.entries(this.data).length === 0
                  ? _vm.$t("add_new")
                  : _vm.$t("Update")
              )
            )
          ]),
          _vm._v(" "),
          _c("feather-icon", {
            staticClass: "cursor-pointer",
            attrs: { icon: "XIcon" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.isSidebarActiveLocal = false
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-divider", { staticClass: "mb-0" }),
      _vm._v(" "),
      _c(
        "VuePerfectScrollbar",
        {
          key: _vm.$vs.rtl,
          staticClass: "scroll-area--data-list-add-new",
          attrs: { settings: _vm.settings }
        },
        [
          _c(
            "div",
            { staticClass: "p-6" },
            [
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "mt-5 w-full",
                attrs: { label: "Name", name: "name" },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("name"),
                      expression: "errors.has('name')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("name")))]
              ),
              _vm._v(" "),
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required|email",
                    expression: "'required|email'"
                  }
                ],
                staticClass: "mt-5 w-full",
                attrs: { label: "Email", name: "email" },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("email"),
                      expression: "errors.has('email')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("email")))]
              ),
              _vm._v(" "),
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "mt-5 w-full",
                attrs: { label: "Phone", name: "phone" },
                model: {
                  value: _vm.phone,
                  callback: function($$v) {
                    _vm.phone = $$v
                  },
                  expression: "phone"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("phone"),
                      expression: "errors.has('phone')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("phone")))]
              ),
              _vm._v(" "),
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "mt-5 w-full",
                attrs: { label: "Password", name: "password" },
                model: {
                  value: _vm.password,
                  callback: function($$v) {
                    _vm.password = $$v
                  },
                  expression: "password"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("password"),
                      expression: "errors.has('password')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("password")))]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "flex flex-wrap items-center p-6",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "vs-button",
            {
              staticClass: "mr-6",
              attrs: { disabled: !_vm.isFormValid },
              on: { click: _vm.submitData }
            },
            [_vm._v("Submit")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { type: "border", color: "danger" },
              on: {
                click: function($event) {
                  _vm.isSidebarActiveLocal = false
                }
              }
            },
            [_vm._v("Cancel")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=template&id=0787abd4&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=template&id=0787abd4& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "page-user-list" } }, [
    _c(
      "div",
      { staticClass: "vx-card p-6" },
      [
        _c(
          "div",
          { staticClass: "flex flex-wrap items-center" },
          [
            _c(
              "div",
              { staticClass: "flex-grow" },
              [
                _c(
                  "vs-dropdown",
                  {
                    staticClass: "cursor-pointer",
                    attrs: { "vs-trigger-click": "" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
                      },
                      [
                        _c("span", { staticClass: "mr-2" }, [
                          _vm._v(
                            _vm._s(
                              _vm.currentPage * _vm.paginationPageSize -
                                (_vm.paginationPageSize - 1)
                            ) +
                              " - " +
                              _vm._s(
                                _vm.UserList.length -
                                  _vm.currentPage * _vm.paginationPageSize >
                                  0
                                  ? _vm.currentPage * _vm.paginationPageSize
                                  : _vm.UserList.length
                              ) +
                              " of " +
                              _vm._s(_vm.UserList.length)
                          )
                        ]),
                        _vm._v(" "),
                        _c("feather-icon", {
                          attrs: {
                            icon: "ChevronDownIcon",
                            svgClasses: "h-4 w-4"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown-menu",
                      [
                        _c(
                          "vs-dropdown-item",
                          {
                            on: {
                              click: function($event) {
                                return _vm.gridApi.paginationSetPageSize(10)
                              }
                            }
                          },
                          [_c("span", [_vm._v("10")])]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-item",
                          {
                            on: {
                              click: function($event) {
                                return _vm.gridApi.paginationSetPageSize(20)
                              }
                            }
                          },
                          [_c("span", [_vm._v("20")])]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-item",
                          {
                            on: {
                              click: function($event) {
                                return _vm.gridApi.paginationSetPageSize(25)
                              }
                            }
                          },
                          [_c("span", [_vm._v("25")])]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-item",
                          {
                            on: {
                              click: function($event) {
                                return _vm.gridApi.paginationSetPageSize(30)
                              }
                            }
                          },
                          [_c("span", [_vm._v("30")])]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("vs-input", {
              staticClass:
                "sm:mr-4 mr-0 sm:w-auto w-full sm:order-normal order-3 sm:mt-0 mt-4",
              attrs: { placeholder: _vm.$t("search") },
              on: { input: _vm.updateSearchQuery },
              model: {
                value: _vm.searchQuery,
                callback: function($$v) {
                  _vm.searchQuery = $$v
                },
                expression: "searchQuery"
              }
            }),
            _vm._v(" "),
            _c("data-view-sidebar", {
              attrs: {
                isSidebarActive: _vm.addNewDataSidebar,
                data: _vm.sidebarData
              },
              on: { closeSidebar: _vm.toggleDataSidebarUser }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "btn-add-new p-2 mb-2 mr-2 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary",
                on: { click: _vm.addNewData }
              },
              [
                _c("feather-icon", {
                  attrs: { icon: "PlusIcon", svgClasses: "h-4 w-4" }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "ml-2 text-base text-primary" }, [
                  _vm._v(_vm._s(_vm.$t("add_new")))
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-dropdown",
              {
                staticClass: "cursor-pointer",
                attrs: { "vs-trigger-click": "" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "p-3 shadow-drop rounded-lg d-theme-dark-light-bg cursor-pointer flex items-end justify-center text-lg font-medium w-32"
                  },
                  [
                    _c("span", { staticClass: "mr-2 leading-none" }, [
                      _vm._v(_vm._s(_vm.$t("Actions")))
                    ]),
                    _vm._v(" "),
                    _c("feather-icon", {
                      attrs: { icon: "ChevronDownIcon", svgClasses: "h-4 w-4" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-dropdown-menu",
                  [
                    _c("vs-dropdown-item", [
                      _c(
                        "span",
                        { staticClass: "flex items-center" },
                        [
                          _c("feather-icon", {
                            staticClass: "mr-2",
                            attrs: { icon: "TrashIcon", svgClasses: "h-4 w-4" },
                            on: {
                              click: function($event) {
                                return _vm.deleteRecords()
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.$t("Delete")) + "<")])
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("vs-dropdown-item", [
                      _c(
                        "span",
                        { staticClass: "flex items-center" },
                        [
                          _c("feather-icon", {
                            staticClass: "mr-2",
                            attrs: {
                              icon: "ArchiveIcon",
                              svgClasses: "h-4 w-4"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.$t("Archive")))])
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("vs-dropdown-item", [
                      _c(
                        "span",
                        { staticClass: "flex items-center" },
                        [
                          _c("feather-icon", {
                            staticClass: "mr-2",
                            attrs: { icon: "FileIcon", svgClasses: "h-4 w-4" }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.$t("Print")))])
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("vs-dropdown-item", [
                      _c(
                        "span",
                        { staticClass: "flex items-center" },
                        [
                          _c("feather-icon", {
                            staticClass: "mr-2",
                            attrs: { icon: "SaveIcon", svgClasses: "h-4 w-4" }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.$t("Export")))])
                        ],
                        1
                      )
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("ag-grid-vue", {
          ref: "agGridTable",
          staticClass: "ag-theme-material w-100 my-4 ag-grid-table",
          attrs: {
            components: _vm.components,
            gridOptions: _vm.gridOptions,
            columnDefs: _vm.columnDefs,
            defaultColDef: _vm.defaultColDef,
            rowData: _vm.UserList,
            rowSelection: "multiple",
            colResizeDefault: "shift",
            animateRows: true,
            floatingFilter: true,
            pagination: true,
            paginationPageSize: _vm.paginationPageSize,
            suppressPaginationPanel: true,
            enableRtl: _vm.$vs.rtl
          }
        }),
        _vm._v(" "),
        _c("vs-pagination", {
          attrs: { total: _vm.totalPages, max: 50 },
          model: {
            value: _vm.currentPage,
            callback: function($$v) {
              _vm.currentPage = $$v
            },
            expression: "currentPage"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererActions.vue?vue&type=template&id=18ec51fc&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererActions.vue?vue&type=template&id=18ec51fc& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
    { style: { direction: _vm.$vs.rtl ? "rtl" : "ltr" } },
    [
      _c("feather-icon", {
        attrs: {
          icon: "Edit3Icon",
          svgClasses: "h-5 w-5 mr-4 hover:text-primary cursor-pointer"
        },
        on: { click: _vm.editRecord }
      }),
      _vm._v(" "),
      _c("feather-icon", {
        attrs: {
          icon: "Trash2Icon",
          svgClasses: "h-5 w-5 hover:text-danger cursor-pointer"
        },
        on: { click: _vm.confirmDeleteRecord }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererLink.vue?vue&type=template&id=473d3a0b&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererLink.vue?vue&type=template&id=473d3a0b& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "flex items-center" },
    [
      _c("vs-avatar", {
        staticClass: "flex-shrink-0 mr-2",
        attrs: { src: _vm.params.data.avatar, size: "30px" },
        on: {
          click: function($event) {
            return _vm.$router.push(_vm.url)
          }
        }
      }),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "text-inherit hover:text-primary",
          attrs: { to: _vm.url },
          on: {
            click: function($event) {
              $event.stopPropagation()
              $event.preventDefault()
            }
          }
        },
        [_vm._v(_vm._s(_vm.params.value))]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=template&id=ef5f387a&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=template&id=ef5f387a& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
    "vs-chip",
    {
      staticClass: "ag-grid-cell-chip",
      attrs: { color: _vm.chipColor(_vm.params.value) }
    },
    [_c("span", [_vm._v(_vm._s(_vm.params.value))])]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererVerified.vue?vue&type=template&id=22f1ad59&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererVerified.vue?vue&type=template&id=22f1ad59& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("feather-icon", {
    attrs: {
      icon: "CircleIcon",
      svgClasses: ["fill-current h-4 w-4", _vm.textColor]
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuickViewAndAdd_vue_vue_type_template_id_cf516660_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickViewAndAdd.vue?vue&type=template&id=cf516660&scoped=true& */ "./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=template&id=cf516660&scoped=true&");
/* harmony import */ var _QuickViewAndAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickViewAndAdd.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QuickViewAndAdd_vue_vue_type_style_index_0_id_cf516660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuickViewAndAdd.vue?vue&type=style&index=0&id=cf516660&lang=scss&scoped=true& */ "./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=style&index=0&id=cf516660&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuickViewAndAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuickViewAndAdd_vue_vue_type_template_id_cf516660_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuickViewAndAdd_vue_vue_type_template_id_cf516660_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cf516660",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickViewAndAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuickViewAndAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickViewAndAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=style&index=0&id=cf516660&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=style&index=0&id=cf516660&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickViewAndAdd_vue_vue_type_style_index_0_id_cf516660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuickViewAndAdd.vue?vue&type=style&index=0&id=cf516660&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=style&index=0&id=cf516660&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickViewAndAdd_vue_vue_type_style_index_0_id_cf516660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickViewAndAdd_vue_vue_type_style_index_0_id_cf516660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickViewAndAdd_vue_vue_type_style_index_0_id_cf516660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickViewAndAdd_vue_vue_type_style_index_0_id_cf516660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickViewAndAdd_vue_vue_type_style_index_0_id_cf516660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=template&id=cf516660&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=template&id=cf516660&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickViewAndAdd_vue_vue_type_template_id_cf516660_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuickViewAndAdd.vue?vue&type=template&id=cf516660&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/QuickViewAndAdd.vue?vue&type=template&id=cf516660&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickViewAndAdd_vue_vue_type_template_id_cf516660_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickViewAndAdd_vue_vue_type_template_id_cf516660_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/UserList.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/UserList.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserList_vue_vue_type_template_id_0787abd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=0787abd4& */ "./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=template&id=0787abd4&");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserList.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_0787abd4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserList_vue_vue_type_template_id_0787abd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/users/user-list/UserList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=template&id=0787abd4&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=template&id=0787abd4& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_0787abd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=template&id=0787abd4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/UserList.vue?vue&type=template&id=0787abd4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_0787abd4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_0787abd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererActions.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererActions.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CellRendererActions_vue_vue_type_template_id_18ec51fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellRendererActions.vue?vue&type=template&id=18ec51fc& */ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererActions.vue?vue&type=template&id=18ec51fc&");
/* harmony import */ var _CellRendererActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellRendererActions.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CellRendererActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CellRendererActions_vue_vue_type_template_id_18ec51fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CellRendererActions_vue_vue_type_template_id_18ec51fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererActions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererActions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererActions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererActions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererActions.vue?vue&type=template&id=18ec51fc&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererActions.vue?vue&type=template&id=18ec51fc& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererActions_vue_vue_type_template_id_18ec51fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererActions.vue?vue&type=template&id=18ec51fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererActions.vue?vue&type=template&id=18ec51fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererActions_vue_vue_type_template_id_18ec51fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererActions_vue_vue_type_template_id_18ec51fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererLink.vue":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererLink.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CellRendererLink_vue_vue_type_template_id_473d3a0b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellRendererLink.vue?vue&type=template&id=473d3a0b& */ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererLink.vue?vue&type=template&id=473d3a0b&");
/* harmony import */ var _CellRendererLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellRendererLink.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CellRendererLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CellRendererLink_vue_vue_type_template_id_473d3a0b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CellRendererLink_vue_vue_type_template_id_473d3a0b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererLink.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererLink.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererLink.vue?vue&type=template&id=473d3a0b&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererLink.vue?vue&type=template&id=473d3a0b& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererLink_vue_vue_type_template_id_473d3a0b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererLink.vue?vue&type=template&id=473d3a0b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererLink.vue?vue&type=template&id=473d3a0b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererLink_vue_vue_type_template_id_473d3a0b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererLink_vue_vue_type_template_id_473d3a0b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CellRendererStatus_vue_vue_type_template_id_ef5f387a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellRendererStatus.vue?vue&type=template&id=ef5f387a& */ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=template&id=ef5f387a&");
/* harmony import */ var _CellRendererStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellRendererStatus.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CellRendererStatus_vue_vue_type_style_index_0_lang_scss_scpoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true& */ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CellRendererStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CellRendererStatus_vue_vue_type_template_id_ef5f387a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CellRendererStatus_vue_vue_type_template_id_ef5f387a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_style_index_0_lang_scss_scpoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_style_index_0_lang_scss_scpoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_style_index_0_lang_scss_scpoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_style_index_0_lang_scss_scpoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_style_index_0_lang_scss_scpoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_style_index_0_lang_scss_scpoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=template&id=ef5f387a&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=template&id=ef5f387a& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_template_id_ef5f387a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererStatus.vue?vue&type=template&id=ef5f387a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererStatus.vue?vue&type=template&id=ef5f387a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_template_id_ef5f387a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_template_id_ef5f387a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererVerified.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererVerified.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CellRendererVerified_vue_vue_type_template_id_22f1ad59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellRendererVerified.vue?vue&type=template&id=22f1ad59& */ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererVerified.vue?vue&type=template&id=22f1ad59&");
/* harmony import */ var _CellRendererVerified_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellRendererVerified.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererVerified.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CellRendererVerified_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CellRendererVerified_vue_vue_type_template_id_22f1ad59___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CellRendererVerified_vue_vue_type_template_id_22f1ad59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererVerified.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererVerified.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererVerified.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererVerified_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererVerified.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererVerified.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererVerified_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererVerified.vue?vue&type=template&id=22f1ad59&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererVerified.vue?vue&type=template&id=22f1ad59& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererVerified_vue_vue_type_template_id_22f1ad59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererVerified.vue?vue&type=template&id=22f1ad59& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/users/user-list/cell-renderer/CellRendererVerified.vue?vue&type=template&id=22f1ad59&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererVerified_vue_vue_type_template_id_22f1ad59___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererVerified_vue_vue_type_template_id_22f1ad59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss":
/*!***********************************************************************!*\
  !*** ./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!./agGridStyleOverride.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);