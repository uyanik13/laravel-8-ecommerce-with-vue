(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/@babel/runtime/core-js/object/define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/object/define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_ui_elements_card_analyticsData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/ui-elements/card/analyticsData.js */ "./resources/js/src/views/ui-elements/card/analyticsData.js");


function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = (_defineProperty({
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  created: function created() {
    /* axios.get("/api/user")
       .then((response) => { this.currentUserData = response.data })
       .catch((error) => { console.log(error) })*/
  },
  data: function data() {
    return {
      name: '',
      address: '',
      phone: '',
      email: '',
      city: '',
      map: '',
      analyticsData: _views_ui_elements_card_analyticsData_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      TumBayiler: []
    };
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  methods: {
    submitData: function submitData() {
      var _this = this;

      var obj = {
        name: this.name,
        address: this.address,
        phone: this.phone,
        email: this.email,
        city: this.city,
        map: this.map,
        type: 'BayiFormu'
      };
      this.$store.dispatch("custom/addItem", obj).then(function (response) {
        _this.$vs.notify({
          title: 'Başarılı',
          text: ' İçerik Başarıyla Eklendi',
          iconPack: 'feather',
          icon: 'icon-success',
          color: 'success'
        });
      }).catch(function (error) {
        _this.$vs.notify({
          title: 'Hata',
          text: 'İçerik Eklenemedi.',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    }
  }
}, "created", function created() {
  var _this2 = this;

  this.$store.dispatch("custom/fetchItems").then(function (response) {
    response.data.forEach(function (element) {
      element.type === 'BayiFormu' ? _this2.TumBayiler.push(JSON.parse(element.JsonData)) : '';
    });
  }).catch(function (error) {
    console.log(error);
  });
  console.log('tumbayiler', this.TumBayiler);
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_setting_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/setting/setting */ "./resources/js/src/store/setting/setting.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    var _this = this;

    if (!_store_setting_setting__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered) {
      this.$store.registerModule('settings', _store_setting_setting__WEBPACK_IMPORTED_MODULE_0__["default"]);
      _store_setting_setting__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered = true;
    }

    this.$store.dispatch('settings/fetchItems').then(function (response) {
      response.data.forEach(function (element) {
        return _this[element.name] = element.value;
      });
    });
  },
  mounted: function mounted() {
    this.isMounted = true;
  },
  data: function data() {
    return {
      logo: '',
      facebook: '',
      instagram: '',
      youtube: '',
      linkedin: '',
      twitter: '',
      google: '',
      pinterest: '',
      address: '',
      phone: '',
      email: '',
      site_url: '',
      map_iframe: '',
      site_name: '',
      site_video: '',
      currency: '',
      settingsDataAll: []
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    },
    settingsData: function settingsData() {
      return this.$store.state.setting.settings;
    }
  },
  methods: {
    update_avatar: function update_avatar(input) {
      var _this2 = this;

      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this2.logo = e.target.result;
          console.log('IMAGEURL', e.target.result);
        };

        reader.readAsDataURL(input.target.files[0]);
      }
    },
    save_changes: function save_changes() {
      var _this3 = this;

      if (!this.validateForm) return;
      var payload = {
        logo: this.logo,
        facebook: this.facebook,
        instagram: this.instagram,
        linkedin: this.linkedin,
        youtube: this.youtube,
        twitter: this.twitter,
        google: this.google,
        pinterest: this.pinterest,
        address: this.address,
        phone: this.phone,
        email: this.email,
        site_url: this.site_url,
        map_iframe: this.map_iframe,
        site_name: this.site_name,
        site_video: this.site_video,
        currency: this.currency
      };
      this.$store.dispatch('setting/addItem', payload).then(function (response) {
        _this3.$vs.loading.close();

        if (response.data) _this3.$vs.notify({
          title: 'Başarılı',
          text: 'Başarıyla Güncellendi',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'success'
        });
      }).catch(function (error) {
        _this3.$vs.loading.close();

        _this3.$vs.notify({
          title: 'Hata',
          text: error.message,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_3__);


function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      HomeUnderMenuSlider: [{
        h1: '',
        h2: '',
        image: '',
        url: ''
      }],
      brandLogos: [{
        name: '',
        image: '',
        url: ''
      }],
      ikiliResim: {
        ikiliResim1: '',
        resim1Url: '',
        ikiliResim2: '',
        resim2Url: ''
      },
      ucluResim: {
        resim1: '',
        resim1Url: '',
        resim2: '',
        resim2Url: '',
        resim3: '',
        resim3Url: ''
      }
    };
  },
  methods: {
    addOptions: function addOptions(type) {
      this[type].push({});
    },
    removeThis: function removeThis(index, type) {
      this[type].splice(index, 1);
    },
    SaveData: function SaveData(dataType) {
      var _obj,
          _this = this;

      var obj = (_obj = {}, _defineProperty(_obj, dataType, this[dataType]), _defineProperty(_obj, "type", dataType), _obj);
      console.log(obj);
      this.$store.dispatch('custom/addItem', obj).then(function (response) {
        _this.$vs.notify({
          title: 'Başarılı',
          text: ' İçerik Başarıyla Eklendi',
          iconPack: 'feather',
          icon: 'icon-success',
          color: 'success'
        });
      }).catch(function (error) {
        _this.$vs.notify({
          title: 'Hata',
          text: 'İçerik Eklenemedi.',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    }
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  created: function created() {
    var _this2 = this;

    this.$store.dispatch('custom/fetchItems').then(function (response) {
      response.data.forEach(function (element) {
        if (element.type === 'HomeUnderMenuSlider') {
          _this2[element.type].push(JSON.parse(element.JsonData)[element.type]);

          _this2[element.type].splice(0, 1);

          _this2[element.type] = _this2[element.type][0];
        } else {
          _this2[element.type] = JSON.parse(element.JsonData)[element.type];
        }
      });
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
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
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      VideoGallery: [{
        url: '',
        title: ''
      }]
    };
  },
  methods: {
    AddVideoGallery: function AddVideoGallery() {
      this.VideoGallery.push({
        url: '',
        title: ''
      });
    },
    removeVideoGallery: function removeVideoGallery(index) {
      this.VideoGallery.splice(index, 1);
    },
    SaveVideoGallery: function SaveVideoGallery() {
      var _this = this;

      var obj = {
        VideoGallery: this.VideoGallery,
        type: 'VideoGallery'
      };
      this.$store.dispatch("custom/addItem", obj).then(function (response) {
        _this.$vs.notify({
          title: 'Başarılı',
          text: ' İçerik Başarıyla Eklendi',
          iconPack: 'feather',
          icon: 'icon-success',
          color: 'success'
        });
      }).catch(function (error) {
        _this.$vs.notify({
          title: 'Hata',
          text: 'İçerik Eklenemedi.',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    }
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  created: function created() {
    var _this2 = this;

    this.$store.dispatch("custom/fetchItems").then(function (response) {
      response.data.forEach(function (element) {
        element.type === 'VideoGallery' ? _this2.VideoGallery.push(JSON.parse(element.JsonData).VideoGallery) : '';
      });

      _this2.VideoGallery.splice(0, 1);

      _this2.VideoGallery = _this2.VideoGallery[0];
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _General_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General.vue */ "./resources/js/src/views/pages/admin/site-settings/component/General.vue");
/* harmony import */ var _Video_Gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Video-Gallery */ "./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue");
/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage */ "./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue");
/* harmony import */ var _Bayiler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bayiler */ "./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VideoGallery: _Video_Gallery__WEBPACK_IMPORTED_MODULE_1__["default"],
    General: _General_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    HomePage: _HomePage__WEBPACK_IMPORTED_MODULE_2__["default"],
    Bayiler: _Bayiler__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {};
  },
  computed: {
    isSmallerScreen: function isSmallerScreen() {
      return this.$store.state.windowWidth < 768;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] #profile-tabs .vs-tabs--content {\n  padding: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./component-settings.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=template&id=b2a3de26&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=template&id=b2a3de26& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("vx-card", [
    _c(
      "div",
      { staticClass: "vx-col w-full md:w-12/12 mb-base" },
      [
        _c(
          "vx-card",
          [
            _c(
              "vs-tabs",
              [
                _c(
                  "vs-tab",
                  { attrs: { label: "Bayiler" } },
                  [
                    _c("vx-card", { attrs: { title: "Bayiler" } }, [
                      _c(
                        "div",
                        {
                          staticClass: "mt-4",
                          attrs: { slot: "no-body" },
                          slot: "no-body"
                        },
                        [
                          _c(
                            "vs-table",
                            {
                              staticClass: "table-dark-inverted",
                              attrs: { data: _vm.TumBayiler },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var data = ref.data
                                    return _vm._l(data, function(tr, indextr) {
                                      return _c(
                                        "vs-tr",
                                        { key: indextr },
                                        [
                                          _c(
                                            "vs-td",
                                            {
                                              attrs: {
                                                data: data[indextr].name
                                              }
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(data[indextr].name)
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-td",
                                            {
                                              attrs: {
                                                data: data[indextr].address
                                              }
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(data[indextr].address)
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-td",
                                            {
                                              attrs: {
                                                data: data[indextr].phone
                                              }
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(data[indextr].phone)
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-td",
                                            {
                                              attrs: {
                                                data: data[indextr].email
                                              }
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(data[indextr].email)
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-td",
                                            {
                                              attrs: { data: data[indextr].map }
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(data[indextr].map)
                                                )
                                              ])
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    })
                                  }
                                }
                              ])
                            },
                            [
                              _c(
                                "template",
                                { slot: "thead" },
                                [
                                  _c("vs-th", [_vm._v("İsim")]),
                                  _vm._v(" "),
                                  _c("vs-th", [_vm._v("Eposta")]),
                                  _vm._v(" "),
                                  _c("vs-th", [_vm._v("Telefon")]),
                                  _vm._v(" "),
                                  _c("vs-th", [_vm._v("Şehir")]),
                                  _vm._v(" "),
                                  _c("vs-th", [_vm._v("Adres")]),
                                  _vm._v(" "),
                                  _c("vs-th", [_vm._v("Harita")])
                                ],
                                1
                              )
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("vs-tab", { attrs: { label: "Bayi Ekle" } }, [
                  _c(
                    "div",
                    { staticClass: "mt-3" },
                    [
                      _c("vs-input", {
                        staticClass: "mt-5 w-full",
                        attrs: { label: "Bayi Adı", name: "dataSeoTitle" },
                        model: {
                          value: _vm.name,
                          callback: function($$v) {
                            _vm.name = $$v
                          },
                          expression: "name"
                        }
                      }),
                      _vm._v(" "),
                      _c("vs-input", {
                        staticClass: "mt-5 w-full",
                        attrs: { label: "Bayi Adresi", name: "dataSeoTitle" },
                        model: {
                          value: _vm.address,
                          callback: function($$v) {
                            _vm.address = $$v
                          },
                          expression: "address"
                        }
                      }),
                      _vm._v(" "),
                      _c("vs-input", {
                        staticClass: "mt-5 w-full",
                        attrs: { label: "Bayi Telefonu", name: "dataSeoTitle" },
                        model: {
                          value: _vm.phone,
                          callback: function($$v) {
                            _vm.phone = $$v
                          },
                          expression: "phone"
                        }
                      }),
                      _vm._v(" "),
                      _c("vs-input", {
                        staticClass: "mt-5 w-full",
                        attrs: { label: "Bayi Eposta", name: "dataSeoTitle" },
                        model: {
                          value: _vm.email,
                          callback: function($$v) {
                            _vm.email = $$v
                          },
                          expression: "email"
                        }
                      }),
                      _vm._v(" "),
                      _c("vs-input", {
                        staticClass: "mt-5 w-full",
                        attrs: { label: "Bayi Harita", name: "dataSeoTitle" },
                        model: {
                          value: _vm.map,
                          callback: function($$v) {
                            _vm.map = $$v
                          },
                          expression: "map"
                        }
                      }),
                      _vm._v(" "),
                      _c("vs-input", {
                        staticClass: "mt-5 w-full",
                        attrs: { label: "Bayi Şehri", name: "dataSeoTitle" },
                        model: {
                          value: _vm.city,
                          callback: function($$v) {
                            _vm.city = $$v
                          },
                          expression: "city"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        { staticClass: "mr-6", on: { click: _vm.submitData } },
                        [_vm._v(_vm._s(_vm.$t("Add")))]
                      )
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
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=template&id=cfd962aa&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=template&id=cfd962aa& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { "no-shadow": "" } },
    [
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center mb-base" },
        [
          _c("vs-avatar", {
            staticClass: "mr-4 mb-4",
            attrs: { src: _vm.logo, size: "120px" }
          }),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("input", {
                ref: "updateImgInput",
                staticClass: "hidden",
                attrs: { type: "file", accept: "image/*" },
                on: { change: _vm.update_avatar }
              }),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "mr-4 sm:mb-0 mb-2",
                  on: {
                    click: function($event) {
                      return _vm.$refs.updateImgInput.click()
                    }
                  }
                },
                [_vm._v("Logo Yükle")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "facebook",
          "icon-pack": "feather",
          icon: "icon-facebook",
          "label-placeholder": _vm.$t("Facebook")
        },
        model: {
          value: _vm.facebook,
          callback: function($$v) {
            _vm.facebook = $$v
          },
          expression: "facebook"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "instagram",
          "icon-pack": "feather",
          icon: "icon-instagram",
          "label-placeholder": _vm.$t("Instagram")
        },
        model: {
          value: _vm.instagram,
          callback: function($$v) {
            _vm.instagram = $$v
          },
          expression: "instagram"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "youtube",
          "icon-pack": "feather",
          icon: "icon-youtube",
          "label-placeholder": _vm.$t("Youtube")
        },
        model: {
          value: _vm.youtube,
          callback: function($$v) {
            _vm.youtube = $$v
          },
          expression: "youtube"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "linkedin",
          "icon-pack": "feather",
          icon: "icon-linkedin",
          "label-placeholder": _vm.$t("Linkedin")
        },
        model: {
          value: _vm.linkedin,
          callback: function($$v) {
            _vm.linkedin = $$v
          },
          expression: "linkedin"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "twitter",
          "icon-pack": "feather",
          icon: "icon-twitter",
          "label-placeholder": _vm.$t("Twitter")
        },
        model: {
          value: _vm.twitter,
          callback: function($$v) {
            _vm.twitter = $$v
          },
          expression: "twitter"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "google",
          "icon-pack": "material",
          icon: "mdi-google",
          "label-placeholder": _vm.$t("Google")
        },
        model: {
          value: _vm.google,
          callback: function($$v) {
            _vm.google = $$v
          },
          expression: "google"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "pinterest",
          "icon-pack": "feather",
          icon: "icon-pinterest",
          "label-placeholder": _vm.$t("Pinterest")
        },
        model: {
          value: _vm.pinterest,
          callback: function($$v) {
            _vm.pinterest = $$v
          },
          expression: "pinterest"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "address",
          "icon-pack": "feather",
          icon: "icon-map-pin",
          "label-placeholder": _vm.$t("Address")
        },
        model: {
          value: _vm.address,
          callback: function($$v) {
            _vm.address = $$v
          },
          expression: "address"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "phone",
          "icon-pack": "feather",
          icon: "icon-phone",
          "label-placeholder": _vm.$t("Phone")
        },
        model: {
          value: _vm.phone,
          callback: function($$v) {
            _vm.phone = $$v
          },
          expression: "phone"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "email",
          "icon-pack": "feather",
          icon: "icon-mail",
          "label-placeholder": _vm.$t("Email")
        },
        model: {
          value: _vm.email,
          callback: function($$v) {
            _vm.email = $$v
          },
          expression: "email"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "site_url",
          "icon-pack": "feather",
          icon: "icon-link",
          "label-placeholder": _vm.$t("SiteUrl")
        },
        model: {
          value: _vm.site_url,
          callback: function($$v) {
            _vm.site_url = $$v
          },
          expression: "site_url"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "map_iframe",
          "icon-pack": "feather",
          icon: "icon-map",
          "label-placeholder": _vm.$t("map_iframe")
        },
        model: {
          value: _vm.map_iframe,
          callback: function($$v) {
            _vm.map_iframe = $$v
          },
          expression: "map_iframe"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "site_name",
          "icon-pack": "feather",
          icon: "icon-airplay",
          "label-placeholder": _vm.$t("site_name")
        },
        model: {
          value: _vm.site_name,
          callback: function($$v) {
            _vm.site_name = $$v
          },
          expression: "site_name"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "site_video",
          "icon-pack": "feather",
          icon: "icon-play",
          "label-placeholder": _vm.$t("site_video")
        },
        model: {
          value: _vm.site_video,
          callback: function($$v) {
            _vm.site_video = $$v
          },
          expression: "site_video"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "currency",
          "icon-pack": "feather",
          icon: "icon-dollar-sign",
          "label-placeholder": _vm.$t("currency")
        },
        model: {
          value: _vm.currency,
          callback: function($$v) {
            _vm.currency = $$v
          },
          expression: "currency"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center justify-end" },
        [
          _c(
            "vs-button",
            { staticClass: "ml-auto mt-2", on: { click: _vm.save_changes } },
            [_vm._v("Kaydet")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=template&id=7d23dddb&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=template&id=7d23dddb& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "vx-col w-full md:w-12/12 mb-base" },
    [
      _c(
        "vs-tabs",
        { attrs: { position: "left", color: "danger" } },
        [
          _c(
            "vs-tab",
            { attrs: { label: "Anasayfa Menu Alti Slider" } },
            [
              _vm._l(_vm.HomeUnderMenuSlider, function(option, index) {
                return _c(
                  "vx-card",
                  { key: index, attrs: { "no-shadow": "" } },
                  [
                    _c(
                      "div",
                      { staticClass: "vx-col  w-full md:w-12/12 mb-base" },
                      [
                        _c("vs-input", {
                          staticClass: "mt-5 w-full",
                          attrs: { label: "H1 Aciklama" },
                          model: {
                            value: option.h1,
                            callback: function($$v) {
                              _vm.$set(option, "h1", $$v)
                            },
                            expression: "option.h1"
                          }
                        }),
                        _vm._v(" "),
                        _c("vs-input", {
                          staticClass: "mt-5 w-full",
                          attrs: { label: "H2 Aciklama" },
                          model: {
                            value: option.h2,
                            callback: function($$v) {
                              _vm.$set(option, "h2", $$v)
                            },
                            expression: "option.h2"
                          }
                        }),
                        _vm._v(" "),
                        _c("vs-input", {
                          staticClass: "mt-5 w-full",
                          attrs: { label: "Resim URL" },
                          model: {
                            value: option.image,
                            callback: function($$v) {
                              _vm.$set(option, "image", $$v)
                            },
                            expression: "option.image"
                          }
                        }),
                        _vm._v(" "),
                        _c("vs-input", {
                          staticClass: "mt-5 w-full",
                          attrs: { label: "Product Url" },
                          model: {
                            value: option.url,
                            callback: function($$v) {
                              _vm.$set(option, "url", $$v)
                            },
                            expression: "option.url"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            staticClass: "bg-danger",
                            on: {
                              click: function($event) {
                                return _vm.removeThis(
                                  index,
                                  "HomeUnderMenuSlider"
                                )
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("RemoveThis")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("vs-divider")
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "mr-6",
                  on: {
                    click: function($event) {
                      return _vm.addOptions("HomeUnderMenuSlider")
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("AddNew")))]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex flex-wrap items-center justify-end" },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "ml-auto mt-2",
                      on: {
                        click: function($event) {
                          return _vm.SaveData("HomeUnderMenuSlider")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("save")))]
                  )
                ],
                1
              )
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "vs-tab",
            { attrs: { label: "2Li Resim Best Seller Ustu" } },
            [
              _c(
                "vx-card",
                [
                  _c("vs-input", {
                    staticClass: "mt-5 w-full",
                    attrs: { label: "Resim1Url(540x290)" },
                    model: {
                      value: _vm.ikiliResim.ikiliResim1,
                      callback: function($$v) {
                        _vm.$set(_vm.ikiliResim, "ikiliResim1", $$v)
                      },
                      expression: "ikiliResim.ikiliResim1"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "mt-5 w-full",
                    attrs: { label: "Resim1UrunUrl" },
                    model: {
                      value: _vm.ikiliResim.resim1Url,
                      callback: function($$v) {
                        _vm.$set(_vm.ikiliResim, "resim1Url", $$v)
                      },
                      expression: "ikiliResim.resim1Url"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-divider"),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "mt-5 w-full",
                    attrs: { label: "Resim2Url(540x290)" },
                    model: {
                      value: _vm.ikiliResim.ikiliResim2,
                      callback: function($$v) {
                        _vm.$set(_vm.ikiliResim, "ikiliResim2", $$v)
                      },
                      expression: "ikiliResim.ikiliResim2"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "mt-5 w-full",
                    attrs: { label: "Resim2UrunUrl" },
                    model: {
                      value: _vm.ikiliResim.resim2Url,
                      callback: function($$v) {
                        _vm.$set(_vm.ikiliResim, "resim2Url", $$v)
                      },
                      expression: "ikiliResim.resim2Url"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex flex-wrap items-center justify-end" },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "ml-auto mt-2",
                      on: {
                        click: function($event) {
                          return _vm.SaveData("ikiliResim")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("save")))]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-tab",
            { attrs: { label: "3lu Resim - 1i Solda Dikey" } },
            [
              _c(
                "vx-card",
                [
                  _c("vs-input", {
                    staticClass: "mt-5 w-full",
                    attrs: { label: "Resim1Url(370x580)" },
                    model: {
                      value: _vm.ucluResim.resim1,
                      callback: function($$v) {
                        _vm.$set(_vm.ucluResim, "resim1", $$v)
                      },
                      expression: "ucluResim.resim1"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "mt-5 w-full",
                    attrs: { label: "Resim1UrunUrl" },
                    model: {
                      value: _vm.ucluResim.resim1Url,
                      callback: function($$v) {
                        _vm.$set(_vm.ucluResim, "resim1Url", $$v)
                      },
                      expression: "ucluResim.resim1Url"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-divider"),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "mt-5 w-full",
                    attrs: { label: "Resim2Url(540x290)" },
                    model: {
                      value: _vm.ucluResim.resim2,
                      callback: function($$v) {
                        _vm.$set(_vm.ucluResim, "resim2", $$v)
                      },
                      expression: "ucluResim.resim2"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "mt-5 w-full",
                    attrs: { label: "Resim2UrunUrl" },
                    model: {
                      value: _vm.ucluResim.resim2Url,
                      callback: function($$v) {
                        _vm.$set(_vm.ucluResim, "resim2Url", $$v)
                      },
                      expression: "ucluResim.resim2Url"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-divider"),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "mt-5 w-full",
                    attrs: { label: "Resim3Url(540x290)" },
                    model: {
                      value: _vm.ucluResim.resim3,
                      callback: function($$v) {
                        _vm.$set(_vm.ucluResim, "resim3", $$v)
                      },
                      expression: "ucluResim.resim3"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "mt-5 w-full",
                    attrs: { label: "Resim3UrunUrl" },
                    model: {
                      value: _vm.ucluResim.resim3Url,
                      callback: function($$v) {
                        _vm.$set(_vm.ucluResim, "resim3Url", $$v)
                      },
                      expression: "ucluResim.resim3Url"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex flex-wrap items-center justify-end" },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "ml-auto mt-2",
                      on: {
                        click: function($event) {
                          return _vm.SaveData("ucluResim")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("save")))]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-tab",
            { attrs: { label: "Brand Logos" } },
            [
              _vm._l(_vm.brandLogos, function(option, index) {
                return _c(
                  "vx-card",
                  { key: index, attrs: { "no-shadow": "" } },
                  [
                    _c(
                      "div",
                      { staticClass: "vx-col  w-full md:w-12/12 mb-base" },
                      [
                        _c("vs-input", {
                          staticClass: "mt-5 w-full",
                          attrs: { label: "Brand Name" },
                          model: {
                            value: option.name,
                            callback: function($$v) {
                              _vm.$set(option, "name", $$v)
                            },
                            expression: "option.name"
                          }
                        }),
                        _vm._v(" "),
                        _c("vs-input", {
                          staticClass: "mt-5 w-full",
                          attrs: { label: "Brand Image URL" },
                          model: {
                            value: option.image,
                            callback: function($$v) {
                              _vm.$set(option, "image", $$v)
                            },
                            expression: "option.image"
                          }
                        }),
                        _vm._v(" "),
                        _c("vs-input", {
                          staticClass: "mt-5 w-full",
                          attrs: { label: "Brand Url" },
                          model: {
                            value: option.url,
                            callback: function($$v) {
                              _vm.$set(option, "url", $$v)
                            },
                            expression: "option.url"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            staticClass: "bg-danger",
                            on: {
                              click: function($event) {
                                return _vm.removeThis(index, "brandLogos")
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("RemoveThis")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("vs-divider")
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "mr-6",
                  on: {
                    click: function($event) {
                      return _vm.addOptions("brandLogos")
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("AddNew")))]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex flex-wrap items-center justify-end" },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "ml-auto mt-2",
                      on: {
                        click: function($event) {
                          return _vm.SaveData("brandLogos")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("save")))]
                  )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=template&id=58fa1963&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=template&id=58fa1963& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "vx-col w-full md:w-12/12 mb-base" },
    [
      _vm._l(_vm.VideoGallery, function(option, index) {
        return _c(
          "vx-card",
          { key: index, attrs: { "no-shadow": "" } },
          [
            _c(
              "div",
              { staticClass: "vx-col  w-full md:w-12/12 mb-base" },
              [
                _c("vs-input", {
                  staticClass: "mt-5 w-full",
                  attrs: { label: "Video URL" },
                  model: {
                    value: option.url,
                    callback: function($$v) {
                      _vm.$set(option, "url", $$v)
                    },
                    expression: "option.url"
                  }
                }),
                _vm._v(" "),
                _c("vs-input", {
                  staticClass: "mt-5 w-full",
                  attrs: { label: "Video Başlığı" },
                  model: {
                    value: option.title,
                    callback: function($$v) {
                      _vm.$set(option, "title", $$v)
                    },
                    expression: "option.title"
                  }
                }),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    staticClass: "bg-danger",
                    on: {
                      click: function($event) {
                        return _vm.removeVideoGallery(index)
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.$t("RemoveThis")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("vs-divider")
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "vs-button",
        { staticClass: "mr-6", on: { click: _vm.AddVideoGallery } },
        [_vm._v(_vm._s(_vm.$t("AddNew")))]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center justify-end" },
        [
          _c(
            "vs-button",
            {
              staticClass: "ml-auto mt-2",
              on: { click: _vm.SaveVideoGallery }
            },
            [_vm._v(_vm._s(_vm.$t("save")))]
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=template&id=6a48e3e0&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=template&id=6a48e3e0& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
    "vs-tabs",
    {
      key: _vm.isSmallerScreen,
      staticClass: "tabs-shadow-none",
      attrs: {
        position: _vm.isSmallerScreen ? "top" : "top",
        id: "profile-tabs"
      }
    },
    [
      _c(
        "vs-tab",
        {
          attrs: {
            "icon-pack": "feather",
            icon: "icon-user",
            label: !_vm.isSmallerScreen ? _vm.$t("general") : ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "tab-general md:ml-4 md:mt-10 mt-4 ml-0" },
            [_c("general")],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-tab",
        {
          attrs: {
            "icon-pack": "feather",
            icon: "flag",
            label: !_vm.isSmallerScreen ? _vm.$t("HomePage") : ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "tab-change-pwd md:ml-4 md:mt-10 mt-4 ml-0" },
            [_c("HomePage")],
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

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bayiler_vue_vue_type_template_id_b2a3de26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bayiler.vue?vue&type=template&id=b2a3de26& */ "./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=template&id=b2a3de26&");
/* harmony import */ var _Bayiler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bayiler.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bayiler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bayiler_vue_vue_type_template_id_b2a3de26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Bayiler_vue_vue_type_template_id_b2a3de26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bayiler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bayiler.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bayiler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=template&id=b2a3de26&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=template&id=b2a3de26& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bayiler_vue_vue_type_template_id_b2a3de26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bayiler.vue?vue&type=template&id=b2a3de26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=template&id=b2a3de26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bayiler_vue_vue_type_template_id_b2a3de26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bayiler_vue_vue_type_template_id_b2a3de26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/General.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/General.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _General_vue_vue_type_template_id_cfd962aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General.vue?vue&type=template&id=cfd962aa& */ "./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=template&id=cfd962aa&");
/* harmony import */ var _General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./General.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _General_vue_vue_type_template_id_cfd962aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _General_vue_vue_type_template_id_cfd962aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/site-settings/component/General.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./General.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=template&id=cfd962aa&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=template&id=cfd962aa& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_cfd962aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./General.vue?vue&type=template&id=cfd962aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=template&id=cfd962aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_cfd962aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_cfd962aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomePage_vue_vue_type_template_id_7d23dddb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=7d23dddb& */ "./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=template&id=7d23dddb&");
/* harmony import */ var _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomePage_vue_vue_type_template_id_7d23dddb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomePage_vue_vue_type_template_id_7d23dddb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/site-settings/component/HomePage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=template&id=7d23dddb&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=template&id=7d23dddb& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_7d23dddb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=template&id=7d23dddb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=template&id=7d23dddb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_7d23dddb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_7d23dddb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Video_Gallery_vue_vue_type_template_id_58fa1963___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Video-Gallery.vue?vue&type=template&id=58fa1963& */ "./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=template&id=58fa1963&");
/* harmony import */ var _Video_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Video-Gallery.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Video_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Video_Gallery_vue_vue_type_template_id_58fa1963___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Video_Gallery_vue_vue_type_template_id_58fa1963___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Video-Gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=template&id=58fa1963&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=template&id=58fa1963& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_Gallery_vue_vue_type_template_id_58fa1963___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Video-Gallery.vue?vue&type=template&id=58fa1963& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=template&id=58fa1963&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_Gallery_vue_vue_type_template_id_58fa1963___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_Gallery_vue_vue_type_template_id_58fa1963___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_settings_vue_vue_type_template_id_6a48e3e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-settings.vue?vue&type=template&id=6a48e3e0& */ "./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=template&id=6a48e3e0&");
/* harmony import */ var _component_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-settings.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _component_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-settings.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _component_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _component_settings_vue_vue_type_template_id_6a48e3e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _component_settings_vue_vue_type_template_id_6a48e3e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/site-settings/component/component-settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./component-settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./component-settings.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=template&id=6a48e3e0&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=template&id=6a48e3e0& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_template_id_6a48e3e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./component-settings.vue?vue&type=template&id=6a48e3e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=template&id=6a48e3e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_template_id_6a48e3e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_template_id_6a48e3e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);