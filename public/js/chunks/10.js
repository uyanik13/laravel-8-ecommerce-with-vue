(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill/dist/quill.bubble.css */ "./node_modules/quill/dist/quill.bubble.css");
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/i18n/i18n */ "./resources/js/src/i18n/i18n.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_9__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_5__["quillEditor"],
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_6___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_8___default.a
  },
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

      if (!this.data.data) {
        this.initValues();
        this.$validator.reset();
      } else {
        var _JSON$parse = JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.data.data)),
            id = _JSON$parse.id,
            title = _JSON$parse.title,
            content = _JSON$parse.content,
            options = _JSON$parse.options,
            files = _JSON$parse.files,
            expires_date = _JSON$parse.expires_date,
            seo_title = _JSON$parse.seo_title,
            seo_description = _JSON$parse.seo_description,
            status = _JSON$parse.status;

        console.log('active:', JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.data.data)));
        this.dataId = id;
        this.dataName = title;
        this.dataDescription = content;
        this.dataFee = JSON.parse(options).price;
        this.profession = JSON.parse(options).profession;
        this.city = JSON.parse(options).city;
        this.country = JSON.parse(options).country;
        this.expires_date = expires_date;
        this.dataSeoTitle = seo_title;
        this.fileList = JSON.parse(files);
        this.dataSeoDescription = seo_description;
        this.dataStatus = status; //this.initValues()
      } // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataUsage_amount } = JSON.parse(JSON.stringify(this.data))

    }
  },
  data: function data() {
    return {
      type: 'service',
      isMounted: false,
      dataId: null,
      dataName: '',
      dataDescription: '',
      expires_date: '',
      dataSeoTitle: '',
      dataSeoDescription: '',
      dataStatus: '',
      dataFee: '',
      search: '',
      profession: [],
      profession_choices: [_i18n_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('aile_hukuku'), _i18n_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('ceza_hukuku')],
      status: '',
      country: '',
      city: '',
      status_choices: [{
        text: _i18n_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('Active'),
        value: 1
      }, {
        text: _i18n_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('Inactive'),
        value: 0
      }],
      site_url: "http://localhost:8000",
      fileUploadApiEndpoint: '/api/uploadAdditionalFiles',
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      },
      editorOption: {// Some Quill options...
      },
      fileList: []
    };
  },
  computed: {
    isSidebarActiveLocal: {
      get: function get() {
        return this.isSidebarActive;
      },
      set: function set(val) {
        if (!val) {
          this.$emit('closeSidebar');
          this.$validator.reset();
          this.initValues();
        }
      },
      categories: function categories() {
        return this.$store.state.post.categories;
      }
    },
    isFormValid: function isFormValid() {
      return !this.errors.any() && this.dataName && this.dataDescription;
    },
    countries: function countries() {
      return this.$store.state.post.countries;
    },
    cities: function cities() {
      return this.$store.state.post.cities;
    },
    filtered: function filtered() {
      var _this = this;

      return this.countries.filter(function (country) {
        return country.includes(_this.search);
      });
    }
  },
  created: function created() {
    this.$store.dispatch('post/fetchItems');
    this.$store.dispatch('post/fetchCountries');
  },
  methods: {
    getPopularityColorTitle: function getPopularityColorTitle(num) {
      if (num > 71) return 'dark';
      if (num >= 60 && num <= 71) return 'success';
      if (num < 60) return 'primary';
      return 'primary';
    },
    getPopularityColorDescription: function getPopularityColorDescription(num) {
      if (num > 160) return 'dark';
      if (num >= 145 && num <= 170) return 'success';
      if (num < 145) return 'primary';
      return 'primary';
    },
    initValues: function initValues() {
      if (this.data.id) return;
      this.dataId = null;
      this.dataName = 'Yazı Başlığı';
      this.dataSeoTitle = 'SEO Başlığı';
      this.dataSeoDescription = 'SEO Açıklaması';
      this.dataDescription = 'İçerik';
      this.dataStatus = 1;
    },
    submitData: function submitData() {
      var _this2 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          var obj = {
            id: _this2.dataId,
            title: _this2.dataName,
            category: 1,
            content1: _this2.dataDescription,
            seo_title: _this2.dataSeoTitle,
            expires_date: _this2.expires_date,
            options: {
              price: _this2.dataFee,
              profession: _this2.profession,
              country: _this2.country.name,
              city: _this2.city.name
            },
            seo_description: _this2.dataSeoDescription,
            status: _this2.dataStatus,
            type: _this2.type
          };

          if (_this2.dataId !== null && _this2.dataId >= 0) {
            _this2.$store.dispatch('post/updateItem', obj).then(function (response) {
              _this2.$vs.notify({
                title: 'Başarılı',
                text: "".concat(response.data.title, " || ").concat(_i18n_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('SuccessfullyUpdated')),
                iconPack: 'feather',
                icon: 'icon-success',
                color: 'success'
              });
            }).catch(function (error) {
              _this2.showAlert(_i18n_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('Error'), _i18n_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('CouldntUpdated'), 'icon-alert-circle', 'danger');
            });
          } else {
            delete obj.id;

            _this2.$store.dispatch('post/addItem', obj).then(function (response) {
              _this2.showAlert(_i18n_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('Success'), _i18n_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('SuccessfullyAdded'), 'icon-success', 'success');
            }).catch(function (error) {
              _this2.showAlert(_i18n_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('Error'), _i18n_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('CouldntAdd'), 'icon-alert-circle', 'danger');
            });
          }

          _this2.$emit('closeSidebar');

          _this2.initValues();
        }
      });
    },
    successUpload: function successUpload(event) {
      this.showAlert(_i18n_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('Success'), _i18n_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('uploadSuccessfull'), 'icon-success', 'success');
    },
    showAlert: function showAlert(title, text, icon, color) {
      this.$vs.notify({
        title: title,
        text: text,
        iconPack: 'feather',
        icon: icon,
        color: color
      });
    },
    findCity: function findCity(code) {
      //console.log('code',code)
      if (code !== 'undefined' || code !== '') {
        this.$store.dispatch('post/fetchCities', code);
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaseSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaseSidebar */ "./resources/js/src/views/pages/user/case/CaseSidebar.vue");
/* harmony import */ var _store_post_modulePostList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/post/modulePostList */ "./resources/js/src/store/post/modulePostList.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/i18n/i18n */ "./resources/js/src/i18n/i18n.js");
/* harmony import */ var _PopupBackground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PopupBackground */ "./resources/js/src/views/pages/user/case/PopupBackground.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CaseSidebar: _CaseSidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    PopupBackground: _PopupBackground__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    data: {
      type: Array,
      default: []
    },
    user: {}
  },
  data: function data() {
    return {
      selected: [],
      itemsPerPage: 12,
      addNewDataSidebar: false,
      sidebarData: {}
    };
  },
  computed: {
    currentPage: function currentPage() {
      if (this.isMounted) {
        return this.$refs.AllList.currentx;
      }

      return 0;
    },
    queriedItems: function queriedItems() {
      return this.$refs.AllList ? this.$refs.AllList.queriedResults.length : this.data.length;
    }
  },
  methods: {
    FollowingForThisUser: function FollowingForThisUser(id) {
      return this.$store.getters['user/amIFollowing'](id);
    },
    addNewData: function addNewData() {
      this.sidebarData = {
        categories: this.categoryList
      };
      this.toggleDataSidebar(true);
    },
    getDateColor: function getDateColor(time) {
      var today = new Date();
      var timeHasBeenSent = new Date(Date.parse(time));
      if (timeHasBeenSent.getFullYear() >= today.getFullYear() && timeHasBeenSent.getMonth() >= today.getMonth() && timeHasBeenSent.getDate() >= today.getDate()) return 'success';
      return 'danger';
    },
    toDate: function toDate(time) {
      var locale = 'en-us'; //LOCALICATION

      var date_obj = new Date(Date.parse(time));
      var monthName = date_obj.toLocaleString(locale, {
        month: 'short'
      });
      return "".concat(date_obj.getDate(), " ").concat(monthName);
    },
    isSameDay: function isSameDay(time) {
      var timeHasBeenSent = new Date(Date.parse(time));
      var today = new Date();
      return timeHasBeenSent.getFullYear() === today.getFullYear() && timeHasBeenSent.getMonth() === today.getMonth() && timeHasBeenSent.getDate() === today.getDate();
    },
    deleteData: function deleteData(id) {
      var _this = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
        type: 'warning',
        title: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('areYouSureToDeleteThis'),
        text: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('areYouSureToDeleteData'),
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('ok'),
        cancelButtonText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('cancel')
      }).then(function (result) {
        if (result.value) {
          console.log(result);

          _this.$store.dispatch('blogPosts/removeItem', id).then(function (response) {
            _this.$vs.notify({
              title: 'Başarılı',
              text: "".concat(response.data.post_title, " || Adl\u0131 i\xE7erik silindi"),
              iconPack: 'feather',
              icon: 'icon-success',
              color: 'success'
            });
          }).catch(function (error) {
            _this.$vs.notify({
              title: 'Hata',
              text: 'İçerik Silinemedi.',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });
          });
        }
      }).catch(function (error) {
        console.log('ERROR:', error);
      });
    },
    editData: function editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = {
        categories: this.categoryList,
        data: data
      };
      this.toggleDataSidebar(true);
    },
    getOrderStatusColor: function getOrderStatusColor(status) {
      // if(status == 'open') return "warning"
      if (status == '1') return 'success';
      if (status == '0') return 'primary';
      return 'primary';
    },
    getPopularityColor: function getPopularityColor(num) {
      if (num > 90) return 'success';
      if (num > 70) return 'primary';
      if (num >= 50) return 'warning';
      if (num < 50) return 'danger';
      return 'primary';
    },
    toggleDataSidebar: function toggleDataSidebar() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.addNewDataSidebar = val;
    }
  },
  created: function created() {
    if (!_store_post_modulePostList__WEBPACK_IMPORTED_MODULE_1__["default"].isRegistered) {
      this.$store.registerModule('blogPosts', _store_post_modulePostList__WEBPACK_IMPORTED_MODULE_1__["default"]);
      _store_post_modulePostList__WEBPACK_IMPORTED_MODULE_1__["default"].isRegistered = true;
    }

    this.$store.dispatch('blogPosts/fetchItems');
    this.$store.dispatch('user/fetchUser');
    this.$store.dispatch('user/fetchMyFollowData');
  },
  mounted: function mounted() {
    this.isMounted = true;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaseSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaseSidebar */ "./resources/js/src/views/pages/user/case/CaseSidebar.vue");
/* harmony import */ var _store_post_modulePostList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/post/modulePostList */ "./resources/js/src/store/post/modulePostList.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/i18n/i18n */ "./resources/js/src/i18n/i18n.js");
/* harmony import */ var _PopupBackground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PopupBackground */ "./resources/js/src/views/pages/user/case/PopupBackground.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CaseSidebar: _CaseSidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    PopupBackground: _PopupBackground__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    data: {
      type: Array,
      default: []
    },
    user: {}
  },
  data: function data() {
    return {
      selected: [],
      itemsPerPage: 12,
      addNewDataSidebar: false,
      sidebarData: {}
    };
  },
  computed: {
    currentPage: function currentPage() {
      if (this.isMounted) {
        return this.$refs.AllList.currentx;
      }

      return 0;
    },
    queriedItems: function queriedItems() {
      return this.$refs.AllList ? this.$refs.AllList.queriedResults.length : this.data.length;
    }
  },
  methods: {
    FollowingForThisUser: function FollowingForThisUser(id) {
      return this.$store.getters['user/amIFollowing'](id);
    },
    addNewData: function addNewData() {
      this.sidebarData = {
        categories: this.categoryList
      };
      this.toggleDataSidebar(true);
    },
    getDateColor: function getDateColor(time) {
      var today = new Date();
      var timeHasBeenSent = new Date(Date.parse(time));
      if (timeHasBeenSent.getFullYear() >= today.getFullYear() && timeHasBeenSent.getMonth() >= today.getMonth() && timeHasBeenSent.getDate() >= today.getDate()) return 'success';
      return 'danger';
    },
    toDate: function toDate(time) {
      var locale = 'en-us'; //LOCALICATION

      var date_obj = new Date(Date.parse(time));
      var monthName = date_obj.toLocaleString(locale, {
        month: 'short'
      });
      return "".concat(date_obj.getDate(), " ").concat(monthName);
    },
    isSameDay: function isSameDay(time) {
      var timeHasBeenSent = new Date(Date.parse(time));
      var today = new Date();
      return timeHasBeenSent.getFullYear() === today.getFullYear() && timeHasBeenSent.getMonth() === today.getMonth() && timeHasBeenSent.getDate() === today.getDate();
    },
    deleteData: function deleteData(id) {
      var _this = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
        type: 'warning',
        title: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('areYouSureToDeleteThis'),
        text: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('areYouSureToDeleteData'),
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('ok'),
        cancelButtonText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('cancel')
      }).then(function (result) {
        if (result.value) {
          console.log(result);

          _this.$store.dispatch('blogPosts/removeItem', id).then(function (response) {
            _this.$vs.notify({
              title: 'Başarılı',
              text: "".concat(response.data.post_title, " || Adl\u0131 i\xE7erik silindi"),
              iconPack: 'feather',
              icon: 'icon-success',
              color: 'success'
            });
          }).catch(function (error) {
            _this.$vs.notify({
              title: 'Hata',
              text: 'İçerik Silinemedi.',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });
          });
        }
      }).catch(function (error) {
        console.log('ERROR:', error);
      });
    },
    editData: function editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = {
        categories: this.categoryList,
        data: data
      };
      this.toggleDataSidebar(true);
    },
    getOrderStatusColor: function getOrderStatusColor(status) {
      // if(status == 'open') return "warning"
      if (status === '1') return 'success';
      if (status === '0') return 'primary';
      return 'primary';
    },
    getPopularityColor: function getPopularityColor(num) {
      if (num > 90) return 'success';
      if (num > 70) return 'primary';
      if (num >= 50) return 'warning';
      if (num < 50) return 'danger';
      return 'primary';
    },
    toggleDataSidebar: function toggleDataSidebar() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.addNewDataSidebar = val;
    }
  },
  created: function created() {
    this.$store.dispatch('user/fetchMyFollowData');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/PopupBackground.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/PopupBackground.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/i18n/i18n */ "./resources/js/src/i18n/i18n.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    ServiceData: {
      type: Object,
      required: true
    },
    myServices: {// type: ['Object', 'Array'],
      // required: true
    },
    activeUser: {// type: ['Object', 'Array'],
      // required: true
    },
    FollowingForThisUser: {// type: ['Object', 'Array'],
      // required: true
    }
  },
  data: function data() {
    return {
      colorx: '#ffffff',
      popupActive: false,
      chatMsgInput: '',
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    },
    chatData: function chatData() {
      return this.$store.getters['chat/chatOrdered'](this.ServiceData.user.id);
    }
  },
  methods: {
    sendMsg: function sendMsg() {
      if (!this.chatMsgInput) return;
      var payload = {
        //'isPinned': this.isChatPinned,
        //'id' : '_' + Math.random().toString(36).substr(2, 9),
        'from': this.activeUser.id,
        'created_at': new Date(),
        'to': this.ServiceData.user.id,
        'msg': this.chatMsgInput,
        'read': false
      };
      this.$store.dispatch('chat/sendChatMessage', payload);
      this.chatMsgInput = '';
      var scroll_el = this.$refs.chatLogPS.$el || this.$refs.chatLogPS;
      scroll_el.scrollTop = this.$refs.chatLog.scrollHeight;
    },
    isSameDay: function isSameDay(time_to, time_from) {
      var date_time_to = new Date(Date.parse(time_to));
      var date_time_from = new Date(Date.parse(time_from));
      return date_time_to.getFullYear() === date_time_from.getFullYear() && date_time_to.getMonth() === date_time_from.getMonth() && date_time_to.getDate() === date_time_from.getDate();
    },
    toDate: function toDate(time) {
      var locale = 'en-us';
      var date_obj = new Date(Date.parse(time));
      var monthName = date_obj.toLocaleString(locale, {
        month: 'short'
      });
      return "".concat(date_obj.getDate(), " ").concat(monthName);
    },
    scrollToBottom: function scrollToBottom() {
      var _this = this;

      this.$nextTick(function () {
        _this.$parent.$el.scrollTop = _this.$parent.$el.scrollHeight;
      });
    },
    submitData: function submitData(data) {
      var _this2 = this;

      var obj = {
        post_id: data.id,
        from: data.user_id,
        price: JSON.parse(data.options).price
      };
      this.$store.dispatch('post/createContract', obj).then(function (response) {
        _this2.showAlert(_i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Success'), _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Success'), 'icon-success', 'success');
      }).catch(function (error) {
        _this2.showAlert(_i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Error'), _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Error'), 'icon-alert-circle', 'danger');
      });
    },
    follow: function follow(data) {
      var _this3 = this;

      var obj = {
        id: data
      };
      this.$store.dispatch('user/follow', obj).then(function (response) {
        _this3.showAlert(_i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Success'), _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('SuccessfullyFollowed'), 'icon-success', 'success');
      }).catch(function (error) {
        _this3.showAlert(_i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Error'), _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('CouldntFollow'), 'icon-alert-circle', 'danger');
      });
    },
    unFollow: function unFollow(data) {
      var _this4 = this;

      var obj = {
        id: data
      };
      this.$store.dispatch('user/unFollow', obj).then(function (response) {
        _this4.showAlert(_i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Success'), _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('SuccessfullyUnFollowed'), 'icon-success', 'success');
      }).catch(function (error) {
        _this4.showAlert(_i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Error'), _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('CouldntFollow'), 'icon-alert-circle', 'danger');
      });
    },
    showAlert: function showAlert(title, text, icon, color) {
      this.$vs.notify({
        title: title,
        text: text,
        iconPack: 'feather',
        icon: icon,
        color: color
      });
    }
  },
  updated: function updated() {
    this.scrollToBottom();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/PopupContractDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/PopupContractDetail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    ServiceData: {
      type: Object,
      required: true
    },
    activeUser: {}
  },
  data: function data() {
    return {
      colorx: '#ffffff',
      popupActive: false,
      chatMsgInput: '',
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.price >= 49;
    },
    chatData: function chatData() {
      return this.$store.getters['chat/chatOrdered'](this.ServiceData.user.id);
    },
    activeUserImg: function activeUserImg() {
      return this.$store.state.AppActiveUser.photoURL;
    },
    senderImg: function senderImg() {
      var _this = this;

      return function (isSentByActiveUser) {
        if (isSentByActiveUser) return _this.$store.state.AppActiveUser.photoURL;else return _this.$store.getters['chat/contact'](_this.userId).photoURL;
      };
    },
    hasSentPreviousMsg: function hasSentPreviousMsg() {
      return function (last_sender, current_sender) {
        return last_sender === current_sender;
      };
    }
  },
  methods: {
    sendMsg: function sendMsg() {
      if (!this.chatMsgInput) return;
      var payload = {
        //'isPinned': this.isChatPinned,
        //'id' : '_' + Math.random().toString(36).substr(2, 9),
        'from': this.activeUser.id,
        'created_at': new Date(),
        'to': this.ServiceData.user.id,
        'msg': this.chatMsgInput,
        'read': false
      };
      this.$store.dispatch('chat/sendChatMessage', payload);
      this.chatMsgInput = '';
      var scroll_el = this.$refs.chatLogPS.$el || this.$refs.chatLogPS;
      scroll_el.scrollTop = this.$refs.chatLog.scrollHeight;
    },
    isSameDay: function isSameDay(time_to, time_from) {
      var date_time_to = new Date(Date.parse(time_to));
      var date_time_from = new Date(Date.parse(time_from));
      return date_time_to.getFullYear() === date_time_from.getFullYear() && date_time_to.getMonth() === date_time_from.getMonth() && date_time_to.getDate() === date_time_from.getDate();
    },
    toDate: function toDate(time) {
      var locale = 'en-us';
      var date_obj = new Date(Date.parse(time));
      var monthName = date_obj.toLocaleString(locale, {
        month: 'short'
      });
      return "".concat(date_obj.getDate(), " ").concat(monthName);
    },
    scrollToBottom: function scrollToBottom() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.$parent.$el.scrollTop = _this2.$parent.$el.scrollHeight;
      });
    }
  },
  updated: function updated() {
    this.scrollToBottom();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/caseList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/caseList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaseSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaseSidebar */ "./resources/js/src/views/pages/user/case/CaseSidebar.vue");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/i18n/i18n */ "./resources/js/src/i18n/i18n.js");
/* harmony import */ var _PopupBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PopupBackground */ "./resources/js/src/views/pages/user/case/PopupBackground.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CaseSidebar: _CaseSidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    PopupBackground: _PopupBackground__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    data: {
      type: Array,
      default: []
    },
    user: {}
  },
  data: function data() {
    return {
      selected: [],
      itemsPerPage: 10,
      addNewDataSidebar: false,
      sidebarData: {}
    };
  },
  computed: {
    currentPage: function currentPage() {
      if (this.isMounted) {
        return this.$refs.AllList.currentx;
      }

      return 0;
    },
    queriedItems: function queriedItems() {
      return this.$refs.AllList ? this.$refs.AllList.queriedResults.length : this.data.length;
    }
  },
  methods: {
    FollowingForThisUser: function FollowingForThisUser(id) {
      return this.$store.getters['user/amIFollowing'](id);
    },
    addNewData: function addNewData() {
      this.sidebarData = {
        categories: this.categoryList
      };
      this.toggleDataSidebar(true);
    },
    deleteData: function deleteData(id) {
      var _this = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
        type: 'warning',
        title: _i18n_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t('areYouSureToDeleteThis'),
        text: _i18n_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t('areYouSureToDeleteData'),
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t('ok'),
        cancelButtonText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t('cancel')
      }).then(function (result) {
        if (result.value) {
          console.log(result);

          _this.$store.dispatch('blogPosts/removeItem', id).then(function (response) {
            _this.$vs.notify({
              title: 'Başarılı',
              text: "".concat(response.data.post_title, " || Adl\u0131 i\xE7erik silindi"),
              iconPack: 'feather',
              icon: 'icon-success',
              color: 'success'
            });
          }).catch(function (error) {
            _this.$vs.notify({
              title: 'Hata',
              text: 'İçerik Silinemedi.',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });
          });
        }
      }).catch(function (error) {
        console.log('ERROR:', error);
      });
    },
    editData: function editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = {
        categories: this.categoryList,
        data: data
      };
      this.toggleDataSidebar(true);
    },
    toggleDataSidebar: function toggleDataSidebar() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.addNewDataSidebar = val;
    },
    getOrderStatusColor: function getOrderStatusColor(status) {
      // if(status == 'open') return "warning"
      if (status === 1) return 'success';
      if (status === 0) return 'warning';
      return 'warning';
    },
    getDateColor: function getDateColor(time) {
      var today = new Date();
      var timeHasBeenSent = new Date(Date.parse(time));
      if (timeHasBeenSent.getFullYear() >= today.getFullYear() && timeHasBeenSent.getMonth() >= today.getMonth() && timeHasBeenSent.getDate() >= today.getDate()) return 'success';
      return 'danger';
    },
    toDate: function toDate(time) {
      var locale = 'en-us'; //LOCALICATION

      var date_obj = new Date(Date.parse(time));
      var monthName = date_obj.toLocaleString(locale, {
        month: 'short'
      });
      return "".concat(date_obj.getDate(), " ").concat(monthName);
    },
    isSameDay: function isSameDay(time) {
      var timeHasBeenSent = new Date(Date.parse(time));
      var today = new Date();
      return timeHasBeenSent.getFullYear() === today.getFullYear() && timeHasBeenSent.getMonth() === today.getMonth() && timeHasBeenSent.getDate() === today.getDate();
    }
  },
  created: function created() {
    this.$store.dispatch('user/fetchMyFollowData'); //this.$store.dispatch("user/fetchMyFollowData")
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/cases.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/cases.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaseSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaseSidebar */ "./resources/js/src/views/pages/user/case/CaseSidebar.vue");
/* harmony import */ var _caseList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caseList */ "./resources/js/src/views/pages/user/case/caseList.vue");
/* harmony import */ var _OpenCases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpenCases */ "./resources/js/src/views/pages/user/case/OpenCases.vue");
/* harmony import */ var _LastMinuteCases__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LastMinuteCases */ "./resources/js/src/views/pages/user/case/LastMinuteCases.vue");
/* harmony import */ var _myCases__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myCases */ "./resources/js/src/views/pages/user/case/myCases.vue");
/* harmony import */ var _myContracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myContracts */ "./resources/js/src/views/pages/user/case/myContracts.vue");
/* harmony import */ var _PopupBackground__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PopupBackground */ "./resources/js/src/views/pages/user/case/PopupBackground.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CaseSidebar: _CaseSidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    PopupBackground: _PopupBackground__WEBPACK_IMPORTED_MODULE_6__["default"],
    FindACase: _caseList__WEBPACK_IMPORTED_MODULE_1__["default"],
    OpenCases: _OpenCases__WEBPACK_IMPORTED_MODULE_2__["default"],
    LastMinuteCases: _LastMinuteCases__WEBPACK_IMPORTED_MODULE_3__["default"],
    MyCases: _myCases__WEBPACK_IMPORTED_MODULE_4__["default"],
    MyContracts: _myContracts__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      addNewDataSidebar: false,
      sidebarData: {}
    };
  },
  computed: {
    openCases: function openCases() {
      return this.$store.getters['post/randomOpenCases'];
    },
    randomEmergencyOpenCases: function randomEmergencyOpenCases() {
      return this.$store.getters['post/randomEmergencyOpenCases'];
    },
    myServices: function myServices() {
      return this.$store.state.post.myServices;
    },
    myContracts: function myContracts() {
      return this.$store.state.post.myContracts;
    },
    activeUser: function activeUser() {
      return this.$store.state.user.currentUser;
    },
    blogPosts: function blogPosts() {
      return this.$store.state.post.services;
    },
    categoryList: function categoryList() {
      return this.$store.state.post.categories;
    }
  },
  methods: {
    addNewData: function addNewData() {
      this.sidebarData = {
        categories: this.categoryList
      };
      this.toggleDataSidebar(true);
    },
    toggleDataSidebar: function toggleDataSidebar() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.addNewDataSidebar = val;
    }
  },
  created: function created() {
    this.$store.dispatch('post/fetchItems');
    this.$store.dispatch('post/fetchMyCases');
    this.$store.dispatch('post/fetchMyContracts');
    this.$store.dispatch('chat/fetchChatContacts');
    this.$store.dispatch('chat/fetchChats');
    this.$store.dispatch('user/fetchUser'); //this.$store.dispatch("user/fetchMyFollowData")
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/myCases.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/myCases.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaseSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaseSidebar */ "./resources/js/src/views/pages/user/case/CaseSidebar.vue");
/* harmony import */ var _store_post_modulePostList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/post/modulePostList */ "./resources/js/src/store/post/modulePostList.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/i18n/i18n */ "./resources/js/src/i18n/i18n.js");
/* harmony import */ var _PopupBackground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PopupBackground */ "./resources/js/src/views/pages/user/case/PopupBackground.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CaseSidebar: _CaseSidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    PopupBackground: _PopupBackground__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    data: {
      type: Array,
      default: []
    },
    user: {}
  },
  data: function data() {
    return {
      selected: [],
      itemsPerPage: 10,
      addNewDataSidebar: false,
      sidebarData: {}
    };
  },
  computed: {
    currentPage: function currentPage() {
      if (this.isMounted) {
        return this.$refs.AllList.currentx;
      }

      return 0;
    },
    queriedItems: function queriedItems() {
      return this.$refs.AllList ? this.$refs.AllList.queriedResults.length : this.data.length;
    }
  },
  methods: {
    addNewData: function addNewData() {
      this.sidebarData = {
        categories: this.categoryList
      };
      this.toggleDataSidebar(true);
    },
    getDateColor: function getDateColor(time) {
      var today = new Date();
      var timeHasBeenSent = new Date(Date.parse(time));
      if (timeHasBeenSent.getFullYear() >= today.getFullYear() && timeHasBeenSent.getMonth() >= today.getMonth() && timeHasBeenSent.getDate() >= today.getDate()) return 'success';
      return 'danger';
    },
    toDate: function toDate(time) {
      var locale = 'en-us'; //LOCALICATION

      var date_obj = new Date(Date.parse(time));
      var monthName = date_obj.toLocaleString(locale, {
        month: 'short'
      });
      return "".concat(date_obj.getDate(), " ").concat(monthName);
    },
    isSameDay: function isSameDay(time) {
      var timeHasBeenSent = new Date(Date.parse(time));
      var today = new Date();
      return timeHasBeenSent.getFullYear() === today.getFullYear() && timeHasBeenSent.getMonth() === today.getMonth() && timeHasBeenSent.getDate() === today.getDate();
    },
    deleteData: function deleteData(id) {
      var _this = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
        type: 'warning',
        title: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('areYouSureToDeleteThis'),
        text: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('areYouSureToDeleteData'),
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('ok'),
        cancelButtonText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('cancel')
      }).then(function (result) {
        if (result.value) {
          console.log(result);

          _this.$store.dispatch('blogPosts/removeItem', id).then(function (response) {
            _this.$vs.notify({
              title: 'Başarılı',
              text: "".concat(response.data.post_title, " || Adl\u0131 i\xE7erik silindi"),
              iconPack: 'feather',
              icon: 'icon-success',
              color: 'success'
            });
          }).catch(function (error) {
            _this.$vs.notify({
              title: 'Hata',
              text: 'İçerik Silinemedi.',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });
          });
        }
      }).catch(function (error) {
        console.log('ERROR:', error);
      });
    },
    editData: function editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = {
        categories: this.categoryList,
        data: data
      };
      this.toggleDataSidebar(true);
    },
    getOrderStatusColor: function getOrderStatusColor(status) {
      // if(status == 'open') return "warning"
      if (status == '1') return 'success';
      if (status == '0') return 'primary';
      return 'primary';
    },
    getPopularityColor: function getPopularityColor(num) {
      if (num > 90) return 'success';
      if (num > 70) return 'primary';
      if (num >= 50) return 'warning';
      if (num < 50) return 'danger';
      return 'primary';
    },
    toggleDataSidebar: function toggleDataSidebar() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.addNewDataSidebar = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaseSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaseSidebar */ "./resources/js/src/views/pages/user/case/CaseSidebar.vue");
/* harmony import */ var _store_post_modulePostList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/post/modulePostList */ "./resources/js/src/store/post/modulePostList.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/i18n/i18n */ "./resources/js/src/i18n/i18n.js");
/* harmony import */ var _PopupContractDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PopupContractDetail */ "./resources/js/src/views/pages/user/case/PopupContractDetail.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CaseSidebar: _CaseSidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    PopupContractDetail: _PopupContractDetail__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    data: {
      type: Array,
      default: []
    },
    user: {}
  },
  data: function data() {
    return {
      selected: [],
      itemsPerPage: 10,
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {}
    };
  },
  computed: {
    currentPage: function currentPage() {
      if (this.isMounted) {
        return this.$refs.AllList.currentx;
      }

      return 0;
    },
    queriedItems: function queriedItems() {
      return this.$refs.AllList ? this.$refs.AllList.queriedResults.length : this.data.length;
    }
  },
  methods: {
    getDateColor: function getDateColor(time) {
      var today = new Date();
      var timeHasBeenSent = new Date(Date.parse(time));
      if (timeHasBeenSent.getFullYear() >= today.getFullYear() && timeHasBeenSent.getMonth() >= today.getMonth() && timeHasBeenSent.getDate() >= today.getDate()) return 'success';
      return 'danger';
    },
    toDate: function toDate(time) {
      var locale = 'en-us'; //LOCALICATION

      var date_obj = new Date(Date.parse(time));
      var monthName = date_obj.toLocaleString(locale, {
        month: 'short'
      });
      return "".concat(date_obj.getDate(), " ").concat(monthName, " ").concat(date_obj.getFullYear());
    },
    isSameDay: function isSameDay(time) {
      var timeHasBeenSent = new Date(Date.parse(time));
      var today = new Date();
      return timeHasBeenSent.getFullYear() === today.getFullYear() && timeHasBeenSent.getMonth() === today.getMonth() && timeHasBeenSent.getDate() === today.getDate();
    },
    CompleteTheJob: function CompleteTheJob(tr) {
      var _this = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
        type: 'warning',
        title: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Are you sure ?'),
        text: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Are you sure to complete this job ?'),
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('ok'),
        cancelButtonText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('cancel')
      }).then(function (result) {
        console.log('result', result);

        if (result.value) {
          _this.$store.dispatch('blogPosts/updateContract', {
            id: tr.id,
            status: 'completed'
          }).then(function (response) {
            _this.$vs.notify({
              title: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Success'),
              text: tr.post.title + _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Contract has been completed'),
              iconPack: 'feather',
              icon: 'icon-success',
              color: 'success'
            });
          }).catch(function (error) {
            console.log('ERROR COMPLETED', error);

            _this.$vs.notify({
              title: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Error'),
              text: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('You are not authorized for this action'),
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });
          });
        }
      }).catch(function (error) {
        console.log('ERROR:', error);
      });
    },
    GiveThePermissionJob: function GiveThePermissionJob(tr) {
      var _this2 = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
        type: 'warning',
        title: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Are you sure ?'),
        text: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Are you sure to give the read permission for this job ?'),
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('ok'),
        cancelButtonText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('cancel')
      }).then(function (result) {
        console.log('result', result);

        if (result.value) {
          _this2.$store.dispatch('blogPosts/updateContract', {
            id: tr.id,
            read_permission: 1
          }).then(function (response) {
            _this2.$vs.notify({
              title: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Success'),
              text: tr.post.title + _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Read permission has been given'),
              iconPack: 'feather',
              icon: 'icon-success',
              color: 'success'
            });
          }).catch(function (error) {
            console.log('ERROR COMPLETED', error);

            _this2.$vs.notify({
              title: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Error'),
              text: _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('You are not authorized for this action'),
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });
          });
        }
      }).catch(function (error) {
        console.log('ERROR:', error);
      });
    },
    getOrderStatusColor: function getOrderStatusColor(status) {
      // if(status == 'open') return "warning"
      if (status == 'pending') return '#0e025a';
      if (status == 'completed') return 'primary';
      return 'primary';
    },
    getPopularityColor: function getPopularityColor(num) {
      if (num > 90) return 'success';
      if (num > 70) return 'primary';
      if (num >= 50) return 'warning';
      if (num < 50) return 'danger';
      return 'primary';
    },
    toggleDataSidebar: function toggleDataSidebar() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.addNewDataSidebar = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=style&index=0&id=43f01da8&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=style&index=0&id=43f01da8&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-new-data-sidebar[data-v-43f01da8]  .vs-sidebar--background {\n  z-index: 52010;\n}\n.add-new-data-sidebar .vs-sidebar[data-v-43f01da8] {\n  max-width: 1240px !important;\n}\n.add-new-data-sidebar[data-v-43f01da8]  .vs-sidebar {\n  z-index: 52010;\n  width: 1240px !important;\n  max-width: 90vw;\n}\n[dir] .add-new-data-sidebar[data-v-43f01da8]  .vs-sidebar .img-upload {\n  margin-top: 2rem;\n}\n[dir] .add-new-data-sidebar[data-v-43f01da8]  .vs-sidebar .img-upload .con-img-upload {\n  padding: 0;\n}\n.add-new-data-sidebar[data-v-43f01da8]  .vs-sidebar .img-upload .con-input-upload {\n  width: 100%;\n}\n[dir] .add-new-data-sidebar[data-v-43f01da8]  .vs-sidebar .img-upload .con-input-upload {\n  margin: 0;\n}\n.scroll-area--data-list-add-new[data-v-43f01da8] {\n  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);\n}\ninput[type=file][data-v-43f01da8] {\n  position: absolute;\n  top: -500px;\n}\ndiv.file-listing[data-v-43f01da8] {\n  width: 200px;\n}\nspan.remove-file[data-v-43f01da8] {\n  color: red;\n}\n[dir] span.remove-file[data-v-43f01da8] {\n  cursor: pointer;\n}\n[dir=ltr] span.remove-file[data-v-43f01da8] {\n  float: right;\n}\n[dir=rtl] span.remove-file[data-v-43f01da8] {\n  float: left;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#data-list-list-view .vs-con-table {\n  /*\n    Below media-queries is fix for responsiveness of action buttons\n    Note: If you change action buttons or layout of this page, Please remove below style\n  */\n}\n@media (max-width: 689px) {\n#data-list-list-view .vs-con-table .vs-table--search {\n    max-width: unset;\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-left: 0;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-right: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--search .vs-table--search-input {\n    width: 100%;\n}\n}\n@media (max-width: 461px) {\n#data-list-list-view .vs-con-table .items-per-page-handler {\n    display: none;\n}\n}\n@media (max-width: 341px) {\n#data-list-list-view .vs-con-table .data-list-btn-container {\n    width: 100%;\n}\n#data-list-list-view .vs-con-table .data-list-btn-container .dd-actions,\n#data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-right: 0 !important;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-left: 0 !important;\n}\n}\n#data-list-list-view .vs-con-table .product-name {\n  max-width: 23rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header {\n  display: flex;\n  flex-wrap: wrap;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header > span {\n  display: flex;\n  flex-grow: 1;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search {\n  padding-top: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  font-size: 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  padding: 0.9rem 2.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  right: 1rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  right: 1rem;\n}\n#data-list-list-view .vs-con-table .vs-table {\n  border-collapse: separate;\n  border-spacing: 0 1.3rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table {\n  padding: 0 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td {\n  padding: 20px;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td.td-check {\n  padding: 20px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--thead th .vs-table-text {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th.td-check {\n  padding: 0 15px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead tr {\n  background: none;\n  box-shadow: none;\n}\n#data-list-list-view .vs-con-table .vs-table--pagination {\n  justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#data-list-list-view .vs-con-table {\n  /*\n    Below media-queries is fix for responsiveness of action buttons\n    Note: If you change action buttons or layout of this page, Please remove below style\n  */\n}\n@media (max-width: 689px) {\n#data-list-list-view .vs-con-table .vs-table--search {\n    max-width: unset;\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-left: 0;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-right: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--search .vs-table--search-input {\n    width: 100%;\n}\n}\n@media (max-width: 461px) {\n#data-list-list-view .vs-con-table .items-per-page-handler {\n    display: none;\n}\n}\n@media (max-width: 341px) {\n#data-list-list-view .vs-con-table .data-list-btn-container {\n    width: 100%;\n}\n#data-list-list-view .vs-con-table .data-list-btn-container .dd-actions,\n#data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-right: 0 !important;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-left: 0 !important;\n}\n}\n#data-list-list-view .vs-con-table .product-name {\n  max-width: 23rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header {\n  display: flex;\n  flex-wrap: wrap;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header > span {\n  display: flex;\n  flex-grow: 1;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search {\n  padding-top: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  font-size: 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  padding: 0.9rem 2.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  right: 1rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  right: 1rem;\n}\n#data-list-list-view .vs-con-table .vs-table {\n  border-collapse: separate;\n  border-spacing: 0 1.3rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table {\n  padding: 0 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td {\n  padding: 20px;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td.td-check {\n  padding: 20px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--thead th .vs-table-text {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th.td-check {\n  padding: 0 15px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead tr {\n  background: none;\n  box-shadow: none;\n}\n#data-list-list-view .vs-con-table .vs-table--pagination {\n  justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/caseList.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/caseList.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#data-list-list-view .vs-con-table {\n  /*\n    Below media-queries is fix for responsiveness of action buttons\n    Note: If you change action buttons or layout of this page, Please remove below style\n  */\n}\n@media (max-width: 689px) {\n#data-list-list-view .vs-con-table .vs-table--search {\n    max-width: unset;\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-left: 0;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-right: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--search .vs-table--search-input {\n    width: 100%;\n}\n}\n@media (max-width: 461px) {\n#data-list-list-view .vs-con-table .items-per-page-handler {\n    display: none;\n}\n}\n@media (max-width: 341px) {\n#data-list-list-view .vs-con-table .data-list-btn-container {\n    width: 100%;\n}\n#data-list-list-view .vs-con-table .data-list-btn-container .dd-actions,\n#data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-right: 0 !important;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-left: 0 !important;\n}\n}\n#data-list-list-view .vs-con-table .product-name {\n  max-width: 23rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header {\n  display: flex;\n  flex-wrap: wrap;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header > span {\n  display: flex;\n  flex-grow: 1;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search {\n  padding-top: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  font-size: 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  padding: 0.9rem 2.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  right: 1rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  right: 1rem;\n}\n#data-list-list-view .vs-con-table .vs-table {\n  border-collapse: separate;\n  border-spacing: 0 1.3rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table {\n  padding: 0 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td {\n  padding: 20px;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td.td-check {\n  padding: 20px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--thead th .vs-table-text {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th.td-check {\n  padding: 0 15px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead tr {\n  background: none;\n  box-shadow: none;\n}\n#data-list-list-view .vs-con-table .vs-table--pagination {\n  justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/myCases.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/myCases.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#data-list-list-view .vs-con-table {\n  /*\n    Below media-queries is fix for responsiveness of action buttons\n    Note: If you change action buttons or layout of this page, Please remove below style\n  */\n}\n@media (max-width: 689px) {\n#data-list-list-view .vs-con-table .vs-table--search {\n    max-width: unset;\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-left: 0;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-right: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--search .vs-table--search-input {\n    width: 100%;\n}\n}\n@media (max-width: 461px) {\n#data-list-list-view .vs-con-table .items-per-page-handler {\n    display: none;\n}\n}\n@media (max-width: 341px) {\n#data-list-list-view .vs-con-table .data-list-btn-container {\n    width: 100%;\n}\n#data-list-list-view .vs-con-table .data-list-btn-container .dd-actions,\n#data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-right: 0 !important;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-left: 0 !important;\n}\n}\n#data-list-list-view .vs-con-table .product-name {\n  max-width: 23rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header {\n  display: flex;\n  flex-wrap: wrap;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header > span {\n  display: flex;\n  flex-grow: 1;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search {\n  padding-top: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  font-size: 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  padding: 0.9rem 2.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  right: 1rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  right: 1rem;\n}\n#data-list-list-view .vs-con-table .vs-table {\n  border-collapse: separate;\n  border-spacing: 0 1.3rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table {\n  padding: 0 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td {\n  padding: 20px;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td.td-check {\n  padding: 20px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--thead th .vs-table-text {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th.td-check {\n  padding: 0 15px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead tr {\n  background: none;\n  box-shadow: none;\n}\n#data-list-list-view .vs-con-table .vs-table--pagination {\n  justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#data-list-list-view .vs-con-table {\n  /*\n    Below media-queries is fix for responsiveness of action buttons\n    Note: If you change action buttons or layout of this page, Please remove below style\n  */\n}\n@media (max-width: 689px) {\n#data-list-list-view .vs-con-table .vs-table--search {\n    max-width: unset;\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-left: 0;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-right: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--search .vs-table--search-input {\n    width: 100%;\n}\n}\n@media (max-width: 461px) {\n#data-list-list-view .vs-con-table .items-per-page-handler {\n    display: none;\n}\n}\n@media (max-width: 341px) {\n#data-list-list-view .vs-con-table .data-list-btn-container {\n    width: 100%;\n}\n#data-list-list-view .vs-con-table .data-list-btn-container .dd-actions,\n#data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-right: 0 !important;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-left: 0 !important;\n}\n}\n#data-list-list-view .vs-con-table .product-name {\n  max-width: 23rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header {\n  display: flex;\n  flex-wrap: wrap;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header > span {\n  display: flex;\n  flex-grow: 1;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search {\n  padding-top: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  font-size: 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  padding: 0.9rem 2.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  right: 1rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  right: 1rem;\n}\n#data-list-list-view .vs-con-table .vs-table {\n  border-collapse: separate;\n  border-spacing: 0 1.3rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table {\n  padding: 0 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td {\n  padding: 20px;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td.td-check {\n  padding: 20px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--thead th .vs-table-text {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th.td-check {\n  padding: 0 15px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead tr {\n  background: none;\n  box-shadow: none;\n}\n#data-list-list-view .vs-con-table .vs-table--pagination {\n  justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=style&index=0&id=43f01da8&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=style&index=0&id=43f01da8&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CaseSidebar.vue?vue&type=style&index=0&id=43f01da8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=style&index=0&id=43f01da8&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LastMinuteCases.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OpenCases.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/caseList.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/caseList.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./caseList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/caseList.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/myCases.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/myCases.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./myCases.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/myCases.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./myContracts.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=template&id=43f01da8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=template&id=43f01da8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
                  ? _vm.$t("AddCase")
                  : _vm.$t("Update Case")
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
          _c("div", { staticClass: "p-6" }, [
            _c("div", { staticClass: "vx-row match-height" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full md:w-12/12 mb-base" },
                [
                  _c(
                    "vs-tabs",
                    [
                      _c(
                        "vs-tab",
                        { attrs: { label: _vm.$t("ServiceArea") } },
                        [
                          _c(
                            "div",
                            { staticClass: "mt-3" },
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
                                attrs: {
                                  label: _vm.$t("ServiceName"),
                                  name: "dataName"
                                },
                                model: {
                                  value: _vm.dataName,
                                  callback: function($$v) {
                                    _vm.dataName = $$v
                                  },
                                  expression: "dataName"
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
                                      value: _vm.errors.has("dataName"),
                                      expression: "errors.has('dataName')"
                                    }
                                  ],
                                  staticClass: "text-danger text-sm"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first("dataName")
                                        ? _vm.$t("Name Required")
                                        : ""
                                    )
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex flex-wrap items-center mb-20 mt-20 h-full"
                                },
                                [
                                  _c("span", [
                                    _vm._v(_vm._s(_vm.$t("ServiceContent")))
                                  ]),
                                  _vm._v(" "),
                                  _c("quill-editor", {
                                    attrs: {
                                      options: _vm.editorOption,
                                      label: _vm.$t("postContent"),
                                      name: "dataDescription"
                                    },
                                    model: {
                                      value: _vm.dataDescription,
                                      callback: function($$v) {
                                        _vm.dataDescription = $$v
                                      },
                                      expression: "dataDescription"
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
                                          value: _vm.errors.has(
                                            "dataDescription"
                                          ),
                                          expression:
                                            "errors.has('dataDescription')"
                                        }
                                      ],
                                      staticClass: "text-danger text-sm"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first("dataDescription")
                                            ? _vm.$t("Content Required")
                                            : ""
                                        )
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("vs-input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "numeric",
                                    expression: "'numeric'"
                                  }
                                ],
                                staticClass: "mt-5 w-full",
                                attrs: {
                                  label: _vm.$t("ServiceFee_TOKEN"),
                                  name: "dataFee"
                                },
                                model: {
                                  value: _vm.dataFee,
                                  callback: function($$v) {
                                    _vm.dataFee = $$v
                                  },
                                  expression: "dataFee"
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
                                      value: _vm.errors.has("dataFee"),
                                      expression: "errors.has('dataFee')"
                                    }
                                  ],
                                  staticClass: "text-danger text-sm"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first("dataFee")
                                        ? _vm.$t("Service Fee Required")
                                        : ""
                                    )
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(_vm._s(_vm.$t("Profession")))
                              ]),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  closeOnSelect: false,
                                  options: _vm.profession_choices,
                                  dir: _vm.$vs.rtl ? "rtl" : "ltr"
                                },
                                model: {
                                  value: _vm.profession,
                                  callback: function($$v) {
                                    _vm.profession = $$v
                                  },
                                  expression: "profession"
                                }
                              }),
                              _c("br"),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("span", [_vm._v(_vm._s(_vm.$t("ServeArea")))]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("v-select", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                staticClass: "w-full mt-5",
                                attrs: {
                                  options: _vm.countries,
                                  getOptionLabel: function(option) {
                                    return option.name
                                  },
                                  filterable: true
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.findCity(_vm.country.code)
                                  },
                                  search: function(query) {
                                    return (_vm.search = query)
                                  }
                                },
                                model: {
                                  value: _vm.country,
                                  callback: function($$v) {
                                    _vm.country = $$v
                                  },
                                  expression: "country"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-select", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                staticClass: "w-full mt-5",
                                attrs: {
                                  options: _vm.cities,
                                  getOptionLabel: function(option) {
                                    return option.name
                                  },
                                  filterable: true
                                },
                                on: {
                                  search: function(query) {
                                    return (_vm.search = query)
                                  }
                                },
                                model: {
                                  value: _vm.city,
                                  callback: function($$v) {
                                    _vm.city = $$v
                                  },
                                  expression: "city"
                                }
                              }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(_vm._s(_vm.$t("ServiceDeadline")) + " :")
                              ]),
                              _vm._v(" "),
                              _c("flat-pickr", {
                                model: {
                                  value: _vm.expires_date,
                                  callback: function($$v) {
                                    _vm.expires_date = $$v
                                  },
                                  expression: "expires_date"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "vs-select",
                                {
                                  staticClass: "mt-5 w-full",
                                  attrs: {
                                    label: _vm.$t("Status"),
                                    name: "dataStatus"
                                  },
                                  model: {
                                    value: _vm.dataStatus,
                                    callback: function($$v) {
                                      _vm.dataStatus = $$v
                                    },
                                    expression: "dataStatus"
                                  }
                                },
                                [
                                  _vm._l(_vm.status_choices, function(status) {
                                    return _c("vs-select-item", {
                                      key: status.value,
                                      attrs: {
                                        value: status.value,
                                        text: status.text
                                      }
                                    })
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.errors.has("dataStatus"),
                                          expression: "errors.has('dataStatus')"
                                        }
                                      ],
                                      staticClass: "text-danger text-sm"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first("dataStatus")
                                            ? _vm.$t("Status Required")
                                            : ""
                                        )
                                      )
                                    ]
                                  )
                                ],
                                2
                              )
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-tab",
                        { attrs: { label: _vm.$t("AdditionalFiles") } },
                        [
                          _c(
                            "div",
                            { staticClass: "mt-3" },
                            [
                              _c(
                                "div",
                                { staticClass: "mt-8 mb-base" },
                                [
                                  _c("vs-upload", {
                                    attrs: {
                                      id: "CvUpload",
                                      multiple: "",
                                      automatic: "",
                                      accept: ".doc,.docx,.pdf,.mpeg,.mp4",
                                      text: _vm.$t("UploadFiles"),
                                      action: _vm.fileUploadApiEndpoint,
                                      fileName: "files[]"
                                    },
                                    on: { "on-success": _vm.successUpload }
                                  }),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(
                                          "Max_file_size_is_5MB_Suitable_files_are_doc_docx_rft_pdf_mpeg_mp4"
                                        )
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.fileList, function(file, index) {
                                    return _c(
                                      "div",
                                      {
                                        key: index,
                                        staticClass:
                                          "vx-col w-full sm:w-1/6 lg:w-1/6 mb-base"
                                      },
                                      [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(
                                              _vm.$t(
                                                "IfYouAddNewFilesThenBelowFilesWillBeRemoved"
                                              )
                                            ) +
                                            "\n                    "
                                        ),
                                        _c("h5", { staticClass: "mb-2" }, [
                                          _vm._v(_vm._s(file))
                                        ])
                                      ]
                                    )
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("vs-divider")
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("vs-tab", { attrs: { label: _vm.$t("SeoArea") } }, [
                        _c(
                          "div",
                          { staticClass: "mt-3" },
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
                              attrs: {
                                label: _vm.$t("SeoTitle"),
                                name: "dataSeoTitle"
                              },
                              model: {
                                value: _vm.dataSeoTitle,
                                callback: function($$v) {
                                  _vm.dataSeoTitle = $$v
                                },
                                expression: "dataSeoTitle"
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
                                    value: _vm.errors.has("dataSeoTitle"),
                                    expression: "errors.has('dataSeoTitle')"
                                  }
                                ],
                                staticClass: "text-danger text-sm"
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.errors.first("dataSeoTitle")
                                      ? "Seo Başlığı Gerekli ve max 71 karakter"
                                      : ""
                                  )
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("vs-progress", {
                              staticClass: "shadow-md",
                              attrs: {
                                percent: Number(_vm.dataSeoTitle.length),
                                color: _vm.getPopularityColorTitle(
                                  Number(_vm.dataSeoTitle.length)
                                )
                              }
                            }),
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
                              attrs: {
                                label: _vm.$t("SeoDescription"),
                                name: "dataSeoDescription"
                              },
                              model: {
                                value: _vm.dataSeoDescription,
                                callback: function($$v) {
                                  _vm.dataSeoDescription = $$v
                                },
                                expression: "dataSeoDescription"
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
                                    value: _vm.errors.has("dataSeoDescription"),
                                    expression:
                                      "errors.has('dataSeoDescription')"
                                  }
                                ],
                                staticClass: "text-danger text-sm"
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.errors.first("dataSeoDescription")
                                      ? "Seo Açıklaması Gerekli ve max 160 karakter"
                                      : ""
                                  )
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("vs-progress", {
                              staticClass: "shadow-md",
                              attrs: {
                                percent: Number(_vm.dataSeoDescription.length),
                                color: _vm.getPopularityColorDescription(
                                  Number(_vm.dataSeoDescription.length)
                                )
                              }
                            })
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
            ]),
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
                  [_vm._v(_vm._s(_vm.$t("Save")))]
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
                  [_vm._v(_vm._s(_vm.$t("Cancel")))]
                )
              ],
              1
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=template&id=13daac8e&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=template&id=13daac8e& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      staticClass: "data-list-container",
      attrs: { id: "data-list-list-view" }
    },
    [
      _c("case-sidebar", {
        attrs: {
          isSidebarActive: _vm.addNewDataSidebar,
          data: _vm.sidebarData
        },
        on: { closeSidebar: _vm.toggleDataSidebar }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex flex-wrap-reverse items-center data-list-btn-container"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary",
              on: { click: _vm.addNewData }
            },
            [
              _c("feather-icon", {
                attrs: { icon: "PlusIcon", svgClasses: "h-4 w-4" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2 text-base text-primary" }, [
                _vm._v(_vm._s(_vm.$t("AddNew")))
              ])
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "data-list-container", attrs: { id: "AllList" } },
        [
          _c(
            "vs-table",
            {
              ref: "AllList",
              attrs: {
                multiple: "",
                pagination: "",
                "max-items": _vm.itemsPerPage,
                search: "",
                data: _vm.data
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return [
                      _c(
                        "tbody",
                        _vm._l(data, function(tr, indextr) {
                          return _c(
                            "vs-tr",
                            { key: indextr, attrs: { data: tr } },
                            [
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(tr.user.name.substring(0, 15)) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(tr.title.substring(0, 25)) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                $" +
                                        _vm._s(
                                          _vm.$t(
                                            JSON.parse(tr.options).profession
                                          )
                                        ) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(JSON.parse(tr.options).country)
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                $" +
                                        _vm._s(JSON.parse(tr.options).price) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                [
                                  _c(
                                    "vs-chip",
                                    {
                                      staticClass: "product-order-status",
                                      attrs: {
                                        color: _vm.getDateColor(tr.expires_date)
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.toDate(tr.expires_date))
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                [
                                  _c(
                                    "vs-chip",
                                    {
                                      staticClass: "product-order-status",
                                      attrs: {
                                        color: _vm.getOrderStatusColor(
                                          tr.status
                                        )
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          tr.status == "1"
                                            ? _vm.$t("Active")
                                            : _vm.$t("Inactive")
                                        )
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { staticClass: "whitespace-no-wrap" },
                                [
                                  _c("popup-background", {
                                    attrs: {
                                      myServices: data,
                                      activeUser: _vm.user,
                                      FollowingForThisUser: _vm.FollowingForThisUser(
                                        tr.user_id
                                      ),
                                      ServiceData: tr
                                    }
                                  }),
                                  _vm._v(
                                    "\n                            />\n                            "
                                  ),
                                  _c("feather-icon", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: tr.user_id === _vm.user.id,
                                        expression: "tr.user_id === user.id"
                                      }
                                    ],
                                    attrs: {
                                      icon: "EditIcon",
                                      svgClasses:
                                        "w-7 h-7 hover:text-primary stroke-current"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.editData(tr)
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "flex flex-wrap-reverse items-center flex-grow justify-between",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c(
                    "vs-dropdown",
                    {
                      staticClass:
                        "cursor-pointer mb-4 mr-4 items-per-page-handler",
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
                                _vm.currentPage * _vm.itemsPerPage -
                                  (_vm.itemsPerPage - 1)
                              ) +
                                "\n                            -\n                            " +
                                _vm._s(
                                  _vm.data.length -
                                    _vm.currentPage * _vm.itemsPerPage >
                                    0
                                    ? _vm.currentPage * _vm.itemsPerPage
                                    : _vm.data.length
                                ) +
                                "\n                            of " +
                                _vm._s(_vm.queriedItems)
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
                                  _vm.itemsPerPage = 4
                                }
                              }
                            },
                            [_c("span", [_vm._v("4")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 10
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
                                  _vm.itemsPerPage = 15
                                }
                              }
                            },
                            [_c("span", [_vm._v("15")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 20
                                }
                              }
                            },
                            [_c("span", [_vm._v("20")])]
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
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", { attrs: { "sort-key": "user.name" } }, [
                    _vm._v(_vm._s(_vm.$t("ServiceProvider")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "title" } }, [
                    _vm._v(_vm._s(_vm.$t("ServiceName")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "profession" } }, [
                    _vm._v(_vm._s(_vm.$t("ServiceProfession")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "options.country" } }, [
                    _vm._v(_vm._s(_vm.$t("Country")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "price" } }, [
                    _vm._v(_vm._s(_vm.$t("ServicePrice")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "expires_date" } }, [
                    _vm._v(_vm._s(_vm.$t("ExpiresDate")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "status" } }, [
                    _vm._v(_vm._s(_vm.$t("Status")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v(_vm._s(_vm.$t("Action")))])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=template&id=4f3da5b9&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=template&id=4f3da5b9& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      staticClass: "data-list-container",
      attrs: { id: "data-list-list-view" }
    },
    [
      _c("case-sidebar", {
        attrs: {
          isSidebarActive: _vm.addNewDataSidebar,
          data: _vm.sidebarData
        },
        on: { closeSidebar: _vm.toggleDataSidebar }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex flex-wrap-reverse items-center data-list-btn-container"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary",
              on: { click: _vm.addNewData }
            },
            [
              _c("feather-icon", {
                attrs: { icon: "PlusIcon", svgClasses: "h-4 w-4" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2 text-base text-primary" }, [
                _vm._v(_vm._s(_vm.$t("AddNew")))
              ])
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "data-list-container", attrs: { id: "AllList" } },
        [
          _c(
            "vs-table",
            {
              ref: "AllList",
              attrs: {
                multiple: "",
                pagination: "",
                "max-items": _vm.itemsPerPage,
                search: "",
                data: _vm.data
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return [
                      _c(
                        "tbody",
                        _vm._l(data, function(tr, indextr) {
                          return _c(
                            "vs-tr",
                            { key: indextr, attrs: { data: tr } },
                            [
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(tr.user.name.substring(0, 15)) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(tr.title.substring(0, 25)) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          _vm.$t(
                                            JSON.parse(tr.options).profession
                                          )
                                        ) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(JSON.parse(tr.options).country)
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                $" +
                                        _vm._s(JSON.parse(tr.options).price) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                [
                                  _c(
                                    "vs-chip",
                                    {
                                      staticClass: "product-order-status",
                                      attrs: {
                                        color: _vm.getDateColor(tr.expires_date)
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.toDate(tr.expires_date))
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                [
                                  _c(
                                    "vs-chip",
                                    {
                                      staticClass: "product-order-status",
                                      attrs: {
                                        color: _vm.getOrderStatusColor(
                                          tr.status
                                        )
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          tr.status == "1"
                                            ? _vm.$t("Active")
                                            : _vm.$t("Inactive")
                                        )
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { staticClass: "whitespace-no-wrap" },
                                [
                                  _c("popup-background", {
                                    attrs: {
                                      myServices: data,
                                      activeUser: _vm.user,
                                      FollowingForThisUser: _vm.FollowingForThisUser(
                                        tr.user_id
                                      ),
                                      ServiceData: tr
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: tr.user_id === _vm.user.id,
                                        expression: "tr.user_id === user.id"
                                      }
                                    ],
                                    attrs: {
                                      icon: "EditIcon",
                                      svgClasses:
                                        "w-7 h-7 hover:text-primary stroke-current"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.editData(tr)
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "flex flex-wrap-reverse items-center flex-grow justify-between",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c(
                    "vs-dropdown",
                    {
                      staticClass:
                        "cursor-pointer mb-4 mr-4 items-per-page-handler",
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
                                _vm.currentPage * _vm.itemsPerPage -
                                  (_vm.itemsPerPage - 1)
                              ) +
                                "\n                            -\n                            " +
                                _vm._s(
                                  _vm.data.length -
                                    _vm.currentPage * _vm.itemsPerPage >
                                    0
                                    ? _vm.currentPage * _vm.itemsPerPage
                                    : _vm.data.length
                                ) +
                                "\n                            of " +
                                _vm._s(_vm.queriedItems)
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
                                  _vm.itemsPerPage = 4
                                }
                              }
                            },
                            [_c("span", [_vm._v("4")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 10
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
                                  _vm.itemsPerPage = 15
                                }
                              }
                            },
                            [_c("span", [_vm._v("15")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 20
                                }
                              }
                            },
                            [_c("span", [_vm._v("20")])]
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
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", { attrs: { "sort-key": "user.name" } }, [
                    _vm._v(_vm._s(_vm.$t("ServiceProvider")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "title" } }, [
                    _vm._v(_vm._s(_vm.$t("ServiceName")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "profession" } }, [
                    _vm._v(_vm._s(_vm.$t("ServiceProfession")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "options.country" } }, [
                    _vm._v(_vm._s(_vm.$t("Country")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "price" } }, [
                    _vm._v(_vm._s(_vm.$t("ServicePrice")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "expires_date" } }, [
                    _vm._v(_vm._s(_vm.$t("ExpiresDate")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "status" } }, [
                    _vm._v(_vm._s(_vm.$t("Status")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v(_vm._s(_vm.$t("Action")))])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/PopupBackground.vue?vue&type=template&id=2119cf1a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/PopupBackground.vue?vue&type=template&id=2119cf1a& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "align-content-center mt-5" },
    [
      _c("feather-icon", {
        attrs: {
          icon: "EyeIcon",
          svgClasses: "w-7 h-7 hover:text-primary stroke-current"
        },
        on: {
          click: function($event) {
            _vm.popupActive = true
          }
        }
      }),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "bg-primary-gradient",
          attrs: {
            "background-color": "rgba(152,152,152,.7)",
            "background-color-popup": _vm.colorx,
            title: _vm.ServiceData.title,
            active: _vm.popupActive
          },
          on: {
            "update:active": function($event) {
              _vm.popupActive = $event
            }
          }
        },
        [
          _c(
            "vx-card",
            [
              _c(
                "vs-tabs",
                { attrs: { color: "danger" } },
                [
                  _c(
                    "vs-tab",
                    {
                      attrs: {
                        label: _vm.$t("ServiceInformation"),
                        "icon-pack": "feather",
                        icon: "icon-file-text"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "vx-row" },
                        [
                          _c(
                            "vx-card",
                            [
                              _c("h5", { staticClass: "mb-2" }, [
                                _vm._v(
                                  _vm._s(_vm.ServiceData.user.name) +
                                    " - " +
                                    _vm._s(_vm.$t("Service"))
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "my-6" }, [
                                _c("h5", { staticClass: "mb-2" }, [
                                  _vm._v(_vm._s(_vm.ServiceData.title))
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "text-grey" }, [
                                  _vm._v(_vm._s(_vm.ServiceData.content))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("vs-divider"),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "flex justify-between flex-wrap"
                                },
                                [
                                  _c("span", [
                                    _c("p", { staticClass: "text-xl" }, [
                                      _vm._v(_vm._s(_vm.$t("ServiceFee")))
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "text-grey" }, [
                                      _vm._v(
                                        _vm._s(
                                          JSON.parse(_vm.ServiceData.options)
                                            .price
                                        ) + " Token"
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("span", [
                                    _c("p", { staticClass: "text-xl" }, [
                                      _vm._v(
                                        _vm._s(_vm.$t("ServiceExpiredDate"))
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "text-grey" }, [
                                      _vm._v(
                                        _vm._s(_vm.ServiceData.expires_date)
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-tab",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.ServiceData.user_id !== _vm.activeUser.id,
                          expression: "ServiceData.user_id !== activeUser.id"
                        }
                      ],
                      attrs: {
                        label: _vm.$t("GetContact"),
                        "icon-pack": "feather",
                        icon: "icon-file-text"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "vx-row" },
                        [
                          _c(
                            "vx-card",
                            {
                              staticClass: "overflow-hidden",
                              attrs: { title: "Chat" }
                            },
                            [
                              _c("template", { slot: "no-body" }, [
                                _c(
                                  "div",
                                  { staticClass: "chat-card-log" },
                                  [
                                    _c(
                                      "VuePerfectScrollbar",
                                      {
                                        key: _vm.$vs.rtl,
                                        ref: "chatLogPS",
                                        staticClass: "scroll-area pt-6 px-6",
                                        attrs: { settings: _vm.settings }
                                      },
                                      [
                                        _c(
                                          "ul",
                                          { ref: "chatLog" },
                                          _vm._l(_vm.chatData, function(
                                            msg,
                                            index
                                          ) {
                                            return _c(
                                              "li",
                                              {
                                                key: index,
                                                staticClass: "flex items-start",
                                                class: {
                                                  "flex-row-reverse":
                                                    msg.to ===
                                                    _vm.ServiceData.user.id,
                                                  "mt-4": index
                                                }
                                              },
                                              [
                                                _c("vs-avatar", {
                                                  staticClass:
                                                    "m-0 flex-shrink-0",
                                                  class:
                                                    msg.to ===
                                                    _vm.ServiceData.user.id
                                                      ? "ml-3"
                                                      : "mr-3",
                                                  attrs: {
                                                    size: "40px",
                                                    src:
                                                      msg.to !==
                                                      _vm.ServiceData.user.id
                                                        ? _vm.activeUser.avatar
                                                        : _vm.ServiceData.user
                                                            .avatar
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "msg relative bg-white shadow-md py-3 px-4 mb-2 rounded-lg max-w-md",
                                                    class:
                                                      msg.to ===
                                                      _vm.ServiceData.user.id
                                                        ? "bg-primary-gradient text-white"
                                                        : "border border-solid border-transparent bg-white"
                                                  },
                                                  [
                                                    _c("span", [
                                                      _vm._v(_vm._s(msg.msg))
                                                    ])
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          }),
                                          0
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex bg-white p-6 chat-input-container"
                                  },
                                  [
                                    _c("vs-input", {
                                      staticClass: "mr-3 w-full",
                                      attrs: {
                                        placeholder: _vm.$t("TypeYourMessage")
                                      },
                                      on: {
                                        keyup: function($event) {
                                          if (
                                            !$event.type.indexOf("key") &&
                                            _vm._k(
                                              $event.keyCode,
                                              "enter",
                                              13,
                                              $event.key,
                                              "Enter"
                                            )
                                          ) {
                                            return null
                                          }
                                          return _vm.sendMsg($event)
                                        }
                                      },
                                      model: {
                                        value: _vm.chatMsgInput,
                                        callback: function($$v) {
                                          _vm.chatMsgInput = $$v
                                        },
                                        expression: "chatMsgInput"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("vs-button", {
                                      attrs: {
                                        "icon-pack": "feather",
                                        icon: "icon-send"
                                      },
                                      on: { click: _vm.sendMsg }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-tab",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.ServiceData.user_id !== _vm.activeUser.id,
                          expression: "ServiceData.user_id !== activeUser.id"
                        }
                      ],
                      attrs: {
                        label: _vm.$t("Deal"),
                        "icon-pack": "feather",
                        icon: "icon-file-text"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "vx-row" },
                        [
                          _c(
                            "vx-card",
                            { staticClass: "p-2" },
                            [
                              _c("vs-avatar", {
                                staticClass: "mx-auto mb-6 block",
                                attrs: {
                                  size: "80px",
                                  src: _vm.ServiceData.user.avatar
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "text-center" }, [
                                _c("h4", [
                                  _vm._v(_vm._s(_vm.ServiceData.user.name))
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "text-grey" }, [
                                  _vm._v(_vm._s(_vm.ServiceData.user.role))
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "flex justify-between flex-wrap"
                                },
                                [
                                  _c(
                                    "vs-button",
                                    {
                                      staticClass: "mt-4 mr-2  shadow-lg",
                                      attrs: {
                                        type: "gradient",
                                        color: "#7367F0",
                                        "gradient-color-secondary": "#CE9FFC"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.submitData(_vm.ServiceData)
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.$t("Deal")))]
                                  ),
                                  _vm._v(" "),
                                  _vm.FollowingForThisUser
                                    ? _c(
                                        "vs-button",
                                        {
                                          staticClass: "mt-4",
                                          attrs: {
                                            type: "border",
                                            color: "#c93c1d"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.unFollow(
                                                _vm.ServiceData.user.id
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(_vm.$t("UnFollow")))]
                                      )
                                    : _c(
                                        "vs-button",
                                        {
                                          staticClass: "mt-4",
                                          attrs: {
                                            type: "border",
                                            color: "#b9b9b9"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.follow(
                                                _vm.ServiceData.user.id
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(_vm.$t("Follow")))]
                                      )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("vs-divider"),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "flex justify-between" },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "flex items-center" },
                                    [
                                      _c("feather-icon", {
                                        attrs: {
                                          icon: "StarIcon",
                                          svgClasses:
                                            "h-5 w-5 text-warning stroke-current"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "ml-2" }, [
                                        _vm._v("4.9")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "flex items-center" },
                                    [
                                      _c("feather-icon", {
                                        attrs: {
                                          icon: "BriefCaseicon",
                                          svgClasses:
                                            "h-5 w-5 text-primary stroke-current"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "ml-2" }, [
                                        _vm._v(
                                          _vm._s(_vm.myServices.length) +
                                            " " +
                                            _vm._s(_vm.$t("Services"))
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/PopupContractDetail.vue?vue&type=template&id=773b8522&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/PopupContractDetail.vue?vue&type=template&id=773b8522& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "align-content-center mt-5" },
    [
      _c("feather-icon", {
        attrs: {
          icon: "EyeIcon",
          svgClasses: "w-7 h-7 hover:text-primary stroke-current"
        },
        on: {
          click: function($event) {
            _vm.popupActive = true
          }
        }
      }),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "bg-primary-gradient",
          attrs: {
            "background-color": "rgba(152,152,152,.7)",
            fullscreen: "",
            "background-color-popup": _vm.colorx,
            title: _vm.ServiceData.post.title,
            active: _vm.popupActive
          },
          on: {
            "update:active": function($event) {
              _vm.popupActive = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "vx-row mt-4 md:flex-row flex-col-reverse" },
            [
              _c(
                "vs-tabs",
                { attrs: { position: "left", color: "danger" } },
                [
                  _c(
                    "vs-tab",
                    {
                      attrs: {
                        label: _vm.$t("ServiceDetail"),
                        "icon-pack": "feather",
                        icon: "icon-file-text"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "vx-row mt-4 mr-5 ml-5 md:flex-row " },
                        [
                          _c(
                            "vx-card",
                            [
                              _c("div", { staticClass: "my-6" }, [
                                _c("h5", { staticClass: "mb-2" }, [
                                  _vm._v(_vm._s(_vm.ServiceData.post.title))
                                ]),
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.ServiceData.post.content) +
                                    "\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-divider"),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "flex justify-between flex-wrap"
                                },
                                [
                                  _c("span", [
                                    _c("p", { staticClass: "text-xl" }, [
                                      _vm._v(_vm._s(_vm.$t("ServiceFee")))
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "text-grey" }, [
                                      _vm._v(
                                        _vm._s(
                                          JSON.parse(
                                            _vm.ServiceData.post.options
                                          ).price
                                        ) + " Token"
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("span", [
                                    _c("p", { staticClass: "text-xl" }, [
                                      _vm._v(
                                        _vm._s(_vm.$t("ServiceExpiredDate"))
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "text-grey" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.ServiceData.post.expires_date
                                        )
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-tab",
                    {
                      attrs: {
                        label: _vm.$t("ServiceFiles"),
                        "icon-pack": "feather",
                        icon: "icon-briefcase"
                      }
                    },
                    [
                      _c(
                        "vx-card",
                        _vm._l(JSON.parse(_vm.ServiceData.post.files), function(
                          file,
                          index
                        ) {
                          return _c(
                            "div",
                            {
                              key: index,
                              staticClass:
                                "vx-col w-full sm:w-6/6 lg:w-6/6 mb-base"
                            },
                            [
                              _c("h5", [
                                _vm._v(
                                  " " + _vm._s(_vm.$t("File") + " - " + index)
                                )
                              ]),
                              _vm._v(" "),
                              _c("a", { attrs: { href: file } }, [
                                _c("iframe", {
                                  attrs: {
                                    align: "middle",
                                    frameborder: "0",
                                    height: "600",
                                    scrolling: "yes",
                                    src: file,
                                    width: "100%"
                                  }
                                })
                              ])
                            ]
                          )
                        }),
                        0
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
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/caseList.vue?vue&type=template&id=577699de&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/caseList.vue?vue&type=template&id=577699de& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      staticClass: "data-list-container",
      attrs: { id: "data-list-list-view" }
    },
    [
      _c("case-sidebar", {
        attrs: {
          isSidebarActive: _vm.addNewDataSidebar,
          data: _vm.sidebarData
        },
        on: { closeSidebar: _vm.toggleDataSidebar }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex flex-wrap-reverse items-center data-list-btn-container"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary",
              on: { click: _vm.addNewData }
            },
            [
              _c("feather-icon", {
                attrs: { icon: "PlusIcon", svgClasses: "h-4 w-4" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2 text-base text-primary" }, [
                _vm._v(_vm._s(_vm.$t("AddNew")))
              ])
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "data-list-container", attrs: { id: "AllList" } },
        [
          _c(
            "vs-table",
            {
              ref: "AllList",
              attrs: {
                multiple: "",
                pagination: "",
                "max-items": _vm.itemsPerPage,
                search: "",
                data: _vm.data
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return [
                      _c(
                        "tbody",
                        _vm._l(data, function(tr, indextr) {
                          return _c(
                            "vs-tr",
                            { key: indextr, attrs: { data: tr } },
                            [
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(tr.user.name.substring(0, 15))
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [_vm._v(_vm._s(tr.title.substring(0, 25)))]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(
                                          JSON.parse(tr.options).profession
                                        )
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(JSON.parse(tr.options).country)
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      "$" + _vm._s(JSON.parse(tr.options).price)
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                [
                                  _c(
                                    "vs-chip",
                                    {
                                      staticClass: "product-order-status",
                                      attrs: {
                                        color: _vm.getDateColor(tr.expires_date)
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.toDate(tr.expires_date))
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                [
                                  _c(
                                    "vs-chip",
                                    {
                                      staticClass: "product-order-status",
                                      attrs: {
                                        color: _vm.getOrderStatusColor(
                                          tr.status
                                        )
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          tr.status == "1"
                                            ? _vm.$t("Active")
                                            : _vm.$t("Inactive")
                                        )
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { staticClass: "whitespace-no-wrap" },
                                [
                                  _c("popup-background", {
                                    attrs: {
                                      myServices: data,
                                      activeUser: _vm.user,
                                      FollowingForThisUser: _vm.FollowingForThisUser(
                                        tr.user_id
                                      ),
                                      ServiceData: tr
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: tr.user_id === _vm.user.id,
                                        expression: "tr.user_id === user.id"
                                      }
                                    ],
                                    attrs: {
                                      icon: "EditIcon",
                                      svgClasses:
                                        "w-7 h-7 hover:text-primary stroke-current"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.editData(tr)
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "flex flex-wrap-reverse items-center flex-grow justify-between",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c(
                    "vs-dropdown",
                    {
                      staticClass:
                        "cursor-pointer mb-4 mr-4 items-per-page-handler",
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
                                _vm.currentPage * _vm.itemsPerPage -
                                  (_vm.itemsPerPage - 1)
                              ) +
                                " - " +
                                _vm._s(
                                  _vm.data.length -
                                    _vm.currentPage * _vm.itemsPerPage >
                                    0
                                    ? _vm.currentPage * _vm.itemsPerPage
                                    : _vm.data.length
                                ) +
                                " of " +
                                _vm._s(_vm.queriedItems)
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
                                  _vm.itemsPerPage = 4
                                }
                              }
                            },
                            [_c("span", [_vm._v("4")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 10
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
                                  _vm.itemsPerPage = 15
                                }
                              }
                            },
                            [_c("span", [_vm._v("15")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 20
                                }
                              }
                            },
                            [_c("span", [_vm._v("20")])]
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
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", { attrs: { "sort-key": "user.name" } }, [
                    _vm._v(_vm._s(_vm.$t("ServiceProvider")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "title" } }, [
                    _vm._v(_vm._s(_vm.$t("ServiceName")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "profession" } }, [
                    _vm._v(_vm._s(_vm.$t("ServiceProfession")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "options.country" } }, [
                    _vm._v(_vm._s(_vm.$t("Country")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "price" } }, [
                    _vm._v(_vm._s(_vm.$t("ServicePrice")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "expires_date" } }, [
                    _vm._v(_vm._s(_vm.$t("ExpiresDate")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "status" } }, [
                    _vm._v(_vm._s(_vm.$t("Status")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v(_vm._s(_vm.$t("Action")))])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/cases.vue?vue&type=template&id=17079d03&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/cases.vue?vue&type=template&id=17079d03& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      staticClass: "data-list-container",
      attrs: { id: "data-list-list-view" }
    },
    [
      _c("case-sidebar", {
        attrs: {
          isSidebarActive: _vm.addNewDataSidebar,
          data: _vm.sidebarData
        },
        on: { closeSidebar: _vm.toggleDataSidebar }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-12/12 mb-base" },
        [
          _c(
            "vs-tabs",
            { attrs: { position: "left", color: "danger" } },
            [
              _c(
                "vs-tab",
                {
                  attrs: {
                    label: _vm.$t("FindACase"),
                    "icon-pack": "feather",
                    icon: "icon-file-text"
                  }
                },
                [
                  _c("find-a-case", {
                    attrs: { data: _vm.blogPosts, user: _vm.activeUser }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-tab",
                {
                  attrs: {
                    label: _vm.$t("OpenCases"),
                    "icon-pack": "feather",
                    icon: "icon-file-text"
                  }
                },
                [
                  _c("open-cases", {
                    attrs: { data: _vm.openCases, user: _vm.activeUser }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-tab",
                {
                  attrs: {
                    label: _vm.$t("LastMinuteCases"),
                    "icon-pack": "feather",
                    icon: "icon-file-text"
                  }
                },
                [
                  _c("last-minute-cases", {
                    attrs: {
                      data: _vm.randomEmergencyOpenCases,
                      user: _vm.activeUser
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-tab",
                {
                  attrs: {
                    label: _vm.$t("MyCases"),
                    "icon-pack": "feather",
                    icon: "icon-file-text"
                  }
                },
                [
                  _c("my-cases", {
                    attrs: { data: _vm.myServices, user: _vm.activeUser }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-tab",
                {
                  attrs: {
                    label: _vm.$t("MyContracts"),
                    "icon-pack": "feather",
                    icon: "icon-file-text"
                  }
                },
                [
                  _c("my-contracts", {
                    attrs: { data: _vm.myContracts, user: _vm.activeUser }
                  })
                ],
                1
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/myCases.vue?vue&type=template&id=1c9cc6b7&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/myCases.vue?vue&type=template&id=1c9cc6b7& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      staticClass: "data-list-container",
      attrs: { id: "data-list-list-view" }
    },
    [
      _c("case-sidebar", {
        attrs: {
          isSidebarActive: _vm.addNewDataSidebar,
          data: _vm.sidebarData
        },
        on: { closeSidebar: _vm.toggleDataSidebar }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex flex-wrap-reverse items-center data-list-btn-container"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary",
              on: { click: _vm.addNewData }
            },
            [
              _c("feather-icon", {
                attrs: { icon: "PlusIcon", svgClasses: "h-4 w-4" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2 text-base text-primary" }, [
                _vm._v(_vm._s(_vm.$t("AddNew")))
              ])
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "data-list-container", attrs: { id: "AllList" } },
        [
          _c(
            "vs-table",
            {
              ref: "AllList",
              attrs: {
                multiple: "",
                pagination: "",
                "max-items": _vm.itemsPerPage,
                search: "",
                data: _vm.data
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return [
                      _c(
                        "tbody",
                        _vm._l(data, function(tr, indextr) {
                          return _c(
                            "vs-tr",
                            { key: indextr, attrs: { data: tr } },
                            [
                              _c("vs-td", { staticClass: "img-container" }, [
                                _c("img", {
                                  staticClass: "product-img",
                                  attrs: {
                                    src: tr.user.avatar,
                                    height: "50px",
                                    width: "50px"
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(tr.user.name.substring(0, 15))
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [_vm._v(_vm._s(tr.title.substring(0, 25)))]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(
                                          JSON.parse(tr.options).profession
                                        )
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      "$" + _vm._s(JSON.parse(tr.options).price)
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                [
                                  _c(
                                    "vs-chip",
                                    {
                                      staticClass: "product-order-status",
                                      attrs: {
                                        color: _vm.getDateColor(tr.expires_date)
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.toDate(tr.expires_date))
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                [
                                  _c(
                                    "vs-chip",
                                    {
                                      staticClass: "product-order-status",
                                      attrs: {
                                        color: _vm.getOrderStatusColor(
                                          tr.status
                                        )
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          tr.status == "1"
                                            ? _vm.$t("Active")
                                            : _vm.$t("Inactive")
                                        )
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { staticClass: "whitespace-no-wrap" },
                                [
                                  _c("popup-background", {
                                    attrs: {
                                      activeUser: _vm.user,
                                      ServiceData: tr
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: tr.user_id === _vm.user.id,
                                        expression: "tr.user_id === user.id"
                                      }
                                    ],
                                    attrs: {
                                      icon: "EditIcon",
                                      svgClasses:
                                        "w-7 h-7 hover:text-primary stroke-current"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.editData(tr)
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "flex flex-wrap-reverse items-center flex-grow justify-between",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c(
                    "vs-dropdown",
                    {
                      staticClass:
                        "cursor-pointer mb-4 mr-4 items-per-page-handler",
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
                                _vm.currentPage * _vm.itemsPerPage -
                                  (_vm.itemsPerPage - 1)
                              ) +
                                " - " +
                                _vm._s(
                                  _vm.data.length -
                                    _vm.currentPage * _vm.itemsPerPage >
                                    0
                                    ? _vm.currentPage * _vm.itemsPerPage
                                    : _vm.data.length
                                ) +
                                " of " +
                                _vm._s(_vm.queriedItems)
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
                                  _vm.itemsPerPage = 4
                                }
                              }
                            },
                            [_c("span", [_vm._v("4")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 10
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
                                  _vm.itemsPerPage = 15
                                }
                              }
                            },
                            [_c("span", [_vm._v("15")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 20
                                }
                              }
                            },
                            [_c("span", [_vm._v("20")])]
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
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", { attrs: { "sort-key": "img" } }, [
                    _vm._v(_vm._s(_vm.$t("Image")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "user.name" } }, [
                    _vm._v(_vm._s(_vm.$t("ServiceProvider")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "title" } }, [
                    _vm._v(_vm._s(_vm.$t("ServiceName")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "profession" } }, [
                    _vm._v(_vm._s(_vm.$t("ServiceProfession")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "price" } }, [
                    _vm._v(_vm._s(_vm.$t("ServicePrice")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "expires_date" } }, [
                    _vm._v(_vm._s(_vm.$t("ExpiresDate")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "status" } }, [
                    _vm._v(_vm._s(_vm.$t("Status")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v(_vm._s(_vm.$t("Action")))])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=template&id=62120015&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=template&id=62120015& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      staticClass: "data-list-container",
      attrs: { id: "data-list-list-view" }
    },
    [
      _c(
        "div",
        { staticClass: "data-list-container", attrs: { id: "AllList" } },
        [
          _c(
            "vs-table",
            {
              ref: "AllList",
              attrs: {
                multiple: "",
                pagination: "",
                "max-items": _vm.itemsPerPage,
                search: "",
                data: _vm.data
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return [
                      _c(
                        "tbody",
                        _vm._l(data, function(tr, indextr) {
                          return _c(
                            "vs-tr",
                            { key: indextr, attrs: { data: tr } },
                            [
                              _c(
                                "vs-td",
                                { staticClass: "whitespace-no-wrap" },
                                [
                                  _c("popup-contract-detail", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value:
                                          tr.read_permission === 1 &&
                                          tr.post.user_id !== _vm.user.id,
                                        expression:
                                          "tr.read_permission === 1 && tr.post.user_id !== user.id"
                                      }
                                    ],
                                    attrs: {
                                      activeUser: _vm.user,
                                      ServiceData: tr
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "i",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            tr.post.user_id === _vm.user.id,
                                          expression:
                                            "tr.post.user_id === user.id"
                                        }
                                      ],
                                      staticClass: "material-icons",
                                      on: {
                                        click: function($event) {
                                          return _vm.GiveThePermissionJob(tr)
                                        }
                                      }
                                    },
                                    [_vm._v(" find_in_page ")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "i",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            tr.post.user_id === _vm.user.id,
                                          expression:
                                            "tr.post.user_id === user.id"
                                        }
                                      ],
                                      staticClass: "material-icons",
                                      on: {
                                        click: function($event) {
                                          return _vm.CompleteTheJob(tr)
                                        }
                                      }
                                    },
                                    [_vm._v(" thumb_up_alt ")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(tr.user.name.substring(0, 15))
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(tr.post.title.substring(0, 22))
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(
                                          JSON.parse(tr.post.options).profession
                                        )
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [
                                    _vm._v(
                                      "$" +
                                        _vm._s(
                                          JSON.parse(tr.post.options).price
                                        )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                [
                                  _c(
                                    "vs-chip",
                                    {
                                      staticClass: "product-order-status",
                                      attrs: {
                                        color: _vm.getDateColor(
                                          tr.post.expires_date
                                        )
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.toDate(tr.post.expires_date))
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                [
                                  _c(
                                    "vs-chip",
                                    {
                                      staticClass: "product-order-status",
                                      attrs: {
                                        color: _vm.getOrderStatusColor(
                                          tr.status
                                        )
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          tr.status == "pending"
                                            ? _vm.$t("Pending")
                                            : _vm.$t("Completed")
                                        )
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "flex flex-wrap-reverse items-center flex-grow justify-between",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c(
                    "vs-dropdown",
                    {
                      staticClass:
                        "cursor-pointer mb-4 mr-4 items-per-page-handler",
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
                                _vm.currentPage * _vm.itemsPerPage -
                                  (_vm.itemsPerPage - 1)
                              ) +
                                " - " +
                                _vm._s(
                                  _vm.data.length -
                                    _vm.currentPage * _vm.itemsPerPage >
                                    0
                                    ? _vm.currentPage * _vm.itemsPerPage
                                    : _vm.data.length
                                ) +
                                " of " +
                                _vm._s(_vm.queriedItems)
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
                                  _vm.itemsPerPage = 4
                                }
                              }
                            },
                            [_c("span", [_vm._v("4")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 10
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
                                  _vm.itemsPerPage = 15
                                }
                              }
                            },
                            [_c("span", [_vm._v("15")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 20
                                }
                              }
                            },
                            [_c("span", [_vm._v("20")])]
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
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v(_vm._s(_vm.$t("Action")))]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "user.name" } }, [
                    _vm._v(_vm._s(_vm.$t("ServiceProvider")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "title" } }, [
                    _vm._v(_vm._s(_vm.$t("ServiceName")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "profession" } }, [
                    _vm._v(_vm._s(_vm.$t("ServiceProfession")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "price" } }, [
                    _vm._v(_vm._s(_vm.$t("ServicePrice")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "expires_date" } }, [
                    _vm._v(_vm._s(_vm.$t("ExpiresDate")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "status" } }, [
                    _vm._v(_vm._s(_vm.$t("Status")))
                  ])
                ],
                1
              )
            ],
            2
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

/***/ "./resources/js/src/views/pages/user/case/CaseSidebar.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/CaseSidebar.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaseSidebar_vue_vue_type_template_id_43f01da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaseSidebar.vue?vue&type=template&id=43f01da8&scoped=true& */ "./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=template&id=43f01da8&scoped=true&");
/* harmony import */ var _CaseSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaseSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CaseSidebar_vue_vue_type_style_index_0_id_43f01da8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CaseSidebar.vue?vue&type=style&index=0&id=43f01da8&lang=scss&scoped=true& */ "./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=style&index=0&id=43f01da8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CaseSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CaseSidebar_vue_vue_type_template_id_43f01da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CaseSidebar_vue_vue_type_template_id_43f01da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "43f01da8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/user/case/CaseSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CaseSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=style&index=0&id=43f01da8&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=style&index=0&id=43f01da8&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseSidebar_vue_vue_type_style_index_0_id_43f01da8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CaseSidebar.vue?vue&type=style&index=0&id=43f01da8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=style&index=0&id=43f01da8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseSidebar_vue_vue_type_style_index_0_id_43f01da8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseSidebar_vue_vue_type_style_index_0_id_43f01da8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseSidebar_vue_vue_type_style_index_0_id_43f01da8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseSidebar_vue_vue_type_style_index_0_id_43f01da8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseSidebar_vue_vue_type_style_index_0_id_43f01da8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=template&id=43f01da8&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=template&id=43f01da8&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseSidebar_vue_vue_type_template_id_43f01da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CaseSidebar.vue?vue&type=template&id=43f01da8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/CaseSidebar.vue?vue&type=template&id=43f01da8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseSidebar_vue_vue_type_template_id_43f01da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseSidebar_vue_vue_type_template_id_43f01da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/user/case/LastMinuteCases.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/LastMinuteCases.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LastMinuteCases_vue_vue_type_template_id_13daac8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LastMinuteCases.vue?vue&type=template&id=13daac8e& */ "./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=template&id=13daac8e&");
/* harmony import */ var _LastMinuteCases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LastMinuteCases.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LastMinuteCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LastMinuteCases.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LastMinuteCases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LastMinuteCases_vue_vue_type_template_id_13daac8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LastMinuteCases_vue_vue_type_template_id_13daac8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/user/case/LastMinuteCases.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastMinuteCases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LastMinuteCases.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastMinuteCases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LastMinuteCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LastMinuteCases.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LastMinuteCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LastMinuteCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LastMinuteCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LastMinuteCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LastMinuteCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=template&id=13daac8e&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=template&id=13daac8e& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LastMinuteCases_vue_vue_type_template_id_13daac8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LastMinuteCases.vue?vue&type=template&id=13daac8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/LastMinuteCases.vue?vue&type=template&id=13daac8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LastMinuteCases_vue_vue_type_template_id_13daac8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LastMinuteCases_vue_vue_type_template_id_13daac8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/user/case/OpenCases.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/OpenCases.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenCases_vue_vue_type_template_id_4f3da5b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OpenCases.vue?vue&type=template&id=4f3da5b9& */ "./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=template&id=4f3da5b9&");
/* harmony import */ var _OpenCases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OpenCases.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OpenCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpenCases.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OpenCases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OpenCases_vue_vue_type_template_id_4f3da5b9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OpenCases_vue_vue_type_template_id_4f3da5b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/user/case/OpenCases.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenCases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OpenCases.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenCases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OpenCases.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=template&id=4f3da5b9&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=template&id=4f3da5b9& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenCases_vue_vue_type_template_id_4f3da5b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OpenCases.vue?vue&type=template&id=4f3da5b9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/OpenCases.vue?vue&type=template&id=4f3da5b9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenCases_vue_vue_type_template_id_4f3da5b9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenCases_vue_vue_type_template_id_4f3da5b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/user/case/PopupBackground.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/PopupBackground.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopupBackground_vue_vue_type_template_id_2119cf1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupBackground.vue?vue&type=template&id=2119cf1a& */ "./resources/js/src/views/pages/user/case/PopupBackground.vue?vue&type=template&id=2119cf1a&");
/* harmony import */ var _PopupBackground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopupBackground.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/user/case/PopupBackground.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PopupBackground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PopupBackground_vue_vue_type_template_id_2119cf1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PopupBackground_vue_vue_type_template_id_2119cf1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/user/case/PopupBackground.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/PopupBackground.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/PopupBackground.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupBackground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PopupBackground.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/PopupBackground.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupBackground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/PopupBackground.vue?vue&type=template&id=2119cf1a&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/PopupBackground.vue?vue&type=template&id=2119cf1a& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupBackground_vue_vue_type_template_id_2119cf1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PopupBackground.vue?vue&type=template&id=2119cf1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/PopupBackground.vue?vue&type=template&id=2119cf1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupBackground_vue_vue_type_template_id_2119cf1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupBackground_vue_vue_type_template_id_2119cf1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/user/case/PopupContractDetail.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/PopupContractDetail.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopupContractDetail_vue_vue_type_template_id_773b8522___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupContractDetail.vue?vue&type=template&id=773b8522& */ "./resources/js/src/views/pages/user/case/PopupContractDetail.vue?vue&type=template&id=773b8522&");
/* harmony import */ var _PopupContractDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopupContractDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/user/case/PopupContractDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PopupContractDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PopupContractDetail_vue_vue_type_template_id_773b8522___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PopupContractDetail_vue_vue_type_template_id_773b8522___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/user/case/PopupContractDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/PopupContractDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/PopupContractDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupContractDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PopupContractDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/PopupContractDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupContractDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/PopupContractDetail.vue?vue&type=template&id=773b8522&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/PopupContractDetail.vue?vue&type=template&id=773b8522& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupContractDetail_vue_vue_type_template_id_773b8522___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PopupContractDetail.vue?vue&type=template&id=773b8522& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/PopupContractDetail.vue?vue&type=template&id=773b8522&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupContractDetail_vue_vue_type_template_id_773b8522___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupContractDetail_vue_vue_type_template_id_773b8522___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/user/case/caseList.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/caseList.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _caseList_vue_vue_type_template_id_577699de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caseList.vue?vue&type=template&id=577699de& */ "./resources/js/src/views/pages/user/case/caseList.vue?vue&type=template&id=577699de&");
/* harmony import */ var _caseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caseList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/user/case/caseList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _caseList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caseList.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/user/case/caseList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _caseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _caseList_vue_vue_type_template_id_577699de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _caseList_vue_vue_type_template_id_577699de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/user/case/caseList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/caseList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/caseList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_caseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./caseList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/caseList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_caseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/caseList.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/caseList.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_caseList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./caseList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/caseList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_caseList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_caseList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_caseList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_caseList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_caseList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/caseList.vue?vue&type=template&id=577699de&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/caseList.vue?vue&type=template&id=577699de& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_caseList_vue_vue_type_template_id_577699de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./caseList.vue?vue&type=template&id=577699de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/caseList.vue?vue&type=template&id=577699de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_caseList_vue_vue_type_template_id_577699de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_caseList_vue_vue_type_template_id_577699de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/user/case/cases.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/cases.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cases_vue_vue_type_template_id_17079d03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cases.vue?vue&type=template&id=17079d03& */ "./resources/js/src/views/pages/user/case/cases.vue?vue&type=template&id=17079d03&");
/* harmony import */ var _cases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cases.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/user/case/cases.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cases_vue_vue_type_template_id_17079d03___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cases_vue_vue_type_template_id_17079d03___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/user/case/cases.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/cases.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/cases.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./cases.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/cases.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/cases.vue?vue&type=template&id=17079d03&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/cases.vue?vue&type=template&id=17079d03& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cases_vue_vue_type_template_id_17079d03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./cases.vue?vue&type=template&id=17079d03& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/cases.vue?vue&type=template&id=17079d03&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cases_vue_vue_type_template_id_17079d03___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cases_vue_vue_type_template_id_17079d03___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/user/case/myCases.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/myCases.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myCases_vue_vue_type_template_id_1c9cc6b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myCases.vue?vue&type=template&id=1c9cc6b7& */ "./resources/js/src/views/pages/user/case/myCases.vue?vue&type=template&id=1c9cc6b7&");
/* harmony import */ var _myCases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myCases.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/user/case/myCases.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _myCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myCases.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/user/case/myCases.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _myCases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _myCases_vue_vue_type_template_id_1c9cc6b7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _myCases_vue_vue_type_template_id_1c9cc6b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/user/case/myCases.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/myCases.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/myCases.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myCases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./myCases.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/myCases.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myCases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/myCases.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/myCases.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_myCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./myCases.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/myCases.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_myCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_myCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_myCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_myCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_myCases_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/myCases.vue?vue&type=template&id=1c9cc6b7&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/myCases.vue?vue&type=template&id=1c9cc6b7& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_myCases_vue_vue_type_template_id_1c9cc6b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./myCases.vue?vue&type=template&id=1c9cc6b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/myCases.vue?vue&type=template&id=1c9cc6b7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_myCases_vue_vue_type_template_id_1c9cc6b7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_myCases_vue_vue_type_template_id_1c9cc6b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/user/case/myContracts.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/myContracts.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myContracts_vue_vue_type_template_id_62120015___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myContracts.vue?vue&type=template&id=62120015& */ "./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=template&id=62120015&");
/* harmony import */ var _myContracts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myContracts.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _myContracts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myContracts.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _myContracts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _myContracts_vue_vue_type_template_id_62120015___WEBPACK_IMPORTED_MODULE_0__["render"],
  _myContracts_vue_vue_type_template_id_62120015___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/user/case/myContracts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myContracts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./myContracts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myContracts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_myContracts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./myContracts.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_myContracts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_myContracts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_myContracts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_myContracts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_myContracts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=template&id=62120015&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=template&id=62120015& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_myContracts_vue_vue_type_template_id_62120015___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./myContracts.vue?vue&type=template&id=62120015& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user/case/myContracts.vue?vue&type=template&id=62120015&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_myContracts_vue_vue_type_template_id_62120015___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_myContracts_vue_vue_type_template_id_62120015___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);