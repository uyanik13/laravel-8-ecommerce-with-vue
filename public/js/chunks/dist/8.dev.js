"use strict";

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8], {
  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&":
  /*!********************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js& ***!
    \********************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcComponentsVxAutoSuggestVxAutoSuggestVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @babel/runtime/core-js/object/define-property */
    "./node_modules/@babel/runtime/core-js/object/define-property.js");
    /* harmony import */


    var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @babel/runtime/core-js/object/entries */
    "./node_modules/@babel/runtime/core-js/object/entries.js");
    /* harmony import */


    var _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @babel/runtime/core-js/get-iterator */
    "./node_modules/@babel/runtime/core-js/get-iterator.js");
    /* harmony import */


    var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @babel/runtime/core-js/object/values */
    "./node_modules/@babel/runtime/core-js/object/values.js");
    /* harmony import */


    var _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @babel/runtime/core-js/object/keys */
    "./node_modules/@babel/runtime/core-js/object/keys.js");
    /* harmony import */


    var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function _iterableToArrayLimit(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    } //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      props: {
        placeholder: {
          type: String,
          "default": 'Search..'
        },
        data: {
          type: Object,
          required: true
        },
        initalData: {
          type: Object,
          "default": function _default() {
            return new Object();
          }
        },
        inputClassses: {
          type: [String, Object, Array]
        },
        autoFocus: {
          type: Boolean,
          "default": false
        },
        showPinned: {
          type: Boolean,
          "default": false
        },
        searchLimit: {
          type: Number,
          "default": 4
        },
        hideGroupTitle: {
          type: Boolean,
          "default": false
        }
      },
      data: function data() {
        return {
          searchQuery: '',
          filteredData: {},
          currentSelected: -1,
          inputFocused: false,
          insideSuggestions: false
        };
      },
      watch: {
        // UPDATE SUGGESTIONS LIST
        searchQuery: function searchQuery(val) {
          var _this = this;

          this.$emit('input', val);

          if (val === '') {
            this.inputInit();
          } else {
            var queried_data = {};

            var data_grps = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(this.data);

            data_grps.forEach(function (grp, i) {
              queried_data[data_grps[i]] = _this.filter_grp(_this.data[grp]);
            }); // Check if any of group has at least one queried item

            if (!_babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_3___default()(queried_data).some(function (obj) {
              return obj.length;
            })) {
              this.currentSelected = -1;
            }

            this.filteredData = queried_data;
          }
        },
        autoFocus: function autoFocus(val) {
          if (val) this.focusInput();else this.searchQuery = '';
        },
        filteredData: function filteredData(val) {
          // Auto Select first item if it's not item-404
          var grp_index = null;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_3___default()(val).entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _step$value = _slicedToArray(_step.value, 2),
                  index = _step$value[0],
                  grp_suggestions = _step$value[1];

              if (grp_suggestions.length) {
                grp_index = index;
                break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          if (grp_index !== null) this.currentSelected = "".concat(grp_index, ".0");
        }
      },
      methods: {
        escPressed: function escPressed() {
          this.$emit('closeSearchbar');
          this.searchQuery = '';
        },
        filter_grp: function filter_grp(grp) {
          var _this2 = this;

          var exactEle = grp.data.filter(function (item) {
            return item[grp.key].toLowerCase().startsWith(_this2.searchQuery.toLowerCase());
          });
          var containEle = grp.data.filter(function (item) {
            return !item[grp.key].toLowerCase().startsWith(_this2.searchQuery.toLowerCase()) && item[grp.key].toLowerCase().indexOf(_this2.searchQuery.toLowerCase()) > -1;
          });
          return exactEle.concat(containEle).slice(0, this.searchLimit);
        },
        inputInit: function inputInit() {
          if (_babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(this.initalData).length === 0 && this.initalData.constructor === Object) {
            this.filteredData = {};
          } else {
            this.filteredData = this.initalData;
          }
        },
        updateInputFocus: function updateInputFocus() {
          var _this3 = this;

          var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          if (val) {
            if (this.searchQuery === '') this.inputInit();
            setTimeout(function () {
              _this3.inputFocused = true;
            }, 100);
          } else {
            if (this.insideSuggestions) return;
            setTimeout(function () {
              _this3.inputFocused = false;
            }, 100);
            this.escPressed();
          }
        },
        suggestionSelected: function suggestionSelected() {
          if (this.currentSelected > -1) {
            var _this$currentSelected = this.currentSelected.split('.'),
                _this$currentSelected2 = _slicedToArray(_this$currentSelected, 2),
                grp_index = _this$currentSelected2[0],
                item_index = _this$currentSelected2[1];

            var grp_of_selected_item = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(this.data)[grp_index];

            var selected_item = this.filteredData[grp_of_selected_item][item_index];
            this.$emit('selected', _defineProperty({}, grp_of_selected_item, selected_item));
            this.searchQuery = '';
          }
        },
        increaseIndex: function increaseIndex() {
          var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          /* eslint-disable no-lonely-if */
          // If there's no matching items

          if (!_babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_3___default()(this.filteredData).some(function (grp_items) {
            return grp_items.length;
          })) return;

          var _this$currentSelected3 = this.currentSelected.split('.'),
              _this$currentSelected4 = _slicedToArray(_this$currentSelected3, 2),
              grp_i = _this$currentSelected4[0],
              item_i = _this$currentSelected4[1];

          var grp_arr = _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(this.filteredData);

          var active_grp_total_items = grp_arr[grp_i][1].length;

          if (val) {
            // If active item is not of last item in grp
            if (active_grp_total_items - 1 > item_i) {
              this.currentSelected = "".concat(grp_i, ".").concat(Number(item_i) + 1); // If active item grp is not last in grp list
            } else if (grp_i < grp_arr.length - 1) {
              for (var i = Number(grp_i) + 1; i < grp_arr.length; i++) {
                // If navigating group have items => Then move in that group
                if (grp_arr[i][1].length > 0) {
                  this.currentSelected = "".concat(Number(i), ".0");
                  break;
                }
              }
            }
          } else {
            // If active item is not of first item in grp
            if (Number(item_i)) {
              this.currentSelected = "".concat(grp_i, ".").concat(Number(item_i) - 1); // If active item grp  is not first in grp list
            } else if (Number(grp_i)) {
              for (var _i2 = Number(grp_i) - 1; _i2 >= 0; _i2--) {
                // If navigating group have items => Then move in that group
                if (grp_arr[_i2][1].length > 0) {
                  this.currentSelected = "".concat(_i2, ".").concat(grp_arr[_i2][1].length - 1);
                  break;
                }
              }
            }
          }
          /* eslint-enable no-lonely-if */

        },
        focusInput: function focusInput() {
          this.$refs.input.$el.querySelector('input').focus();
        }
      },
      mounted: function mounted() {
        if (this.autoFocus) this.focusInput();
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&":
  /*!********************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js& ***!
    \********************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsTheFooterVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      name: 'the-footer',
      props: {
        classes: {
          type: String
        }
      },
      inject: {
        components: {
          "default": {}
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js&":
  /*!***********************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js& ***!
    \***********************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsCustomizerTheCustomizerVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! vue-perfect-scrollbar */
    "./node_modules/vue-perfect-scrollbar/dist/index.js");
    /* harmony import */


    var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      props: {
        footerType: {
          type: String,
          required: true
        },
        hideScrollToTop: {
          type: Boolean,
          required: true
        },
        navbarType: {
          type: String,
          required: true
        },
        navbarColor: {
          type: String,
          required: true,
          "default": '#fff'
        },
        routerTransition: {
          type: String,
          required: true
        }
      },
      data: function data() {
        return {
          active: false,
          customPrimaryColor: '#3DC9B3',
          customNavbarColor: '#3DC9B3',
          routerTransitionsList: [{
            text: 'Zoom Fade',
            value: 'zoom-fade'
          }, {
            text: 'Slide Fade',
            value: 'slide-fade'
          }, {
            text: 'Fade Bottom',
            value: 'fade-bottom'
          }, {
            text: 'Fade',
            value: 'fade'
          }, {
            text: 'Zoom Out',
            value: 'zoom-out'
          }, {
            text: 'None',
            value: 'none'
          }],
          settings: {
            maxScrollbarLength: 60,
            wheelSpeed: .60
          },
          themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']
        };
      },
      watch: {
        layoutType: function layoutType(val) {
          // Reset unsupported options
          if (val === 'horizontal') {
            if (this.themeMode === 'semi-dark') this.themeMode = 'light';
            if (this.navbarType === 'hidden') this.navbarTypeLocal = 'floating';
            this.$emit('updateNavbarColor', '#fff');
          }
        }
      },
      computed: {
        footerTypeLocal: {
          get: function get() {
            return this.footerType;
          },
          set: function set(val) {
            this.$emit('updateFooter', val);
          }
        },
        hideScrollToTopLocal: {
          get: function get() {
            return this.hideScrollToTop;
          },
          set: function set(val) {
            this.$emit('toggleHideScrollToTop', val);
          }
        },
        navbarColorInitial: function navbarColorInitial() {
          return this.$store.state.theme === 'dark' ? '#10163a' : '#fff';
        },
        navbarColorOptionClasses: function navbarColorOptionClasses() {
          var _this = this;

          return function (color) {
            var classes = {};
            if (color === _this.navbarColorLocal) classes['shadow-outline'] = true;
            if (_this.navbarTypeLocal === 'static') classes['cursor-not-allowed'] = true;
            return classes;
          };
        },
        navbarColorLocal: {
          get: function get() {
            return this.navbarColor;
          },
          set: function set(val) {
            if (this.navbarType === 'static') return;
            this.$emit('updateNavbarColor', val);
          }
        },
        navbarTypeLocal: {
          get: function get() {
            return this.navbarType;
          },
          set: function set(val) {
            this.$emit('updateNavbar', val);
          }
        },
        layoutType: {
          get: function get() {
            return this.$store.state.mainLayoutType;
          },
          set: function set(val) {
            this.$store.commit('UPDATE_MAIN_LAYOUT_TYPE', val);
          }
        },
        primaryColor: {
          get: function get() {
            return this.$store.state.themePrimaryColor;
          },
          set: function set(val) {
            this.$store.commit('UPDATE_PRIMARY_COLOR', val);
          }
        },
        reduced_sidebar: {
          get: function get() {
            return this.$store.state.reduceButton;
          },
          set: function set(val) {
            this.$store.commit('TOGGLE_REDUCE_BUTTON', val);
          }
        },
        routerTransitionLocal: {
          get: function get() {
            return this.routerTransition;
          },
          set: function set(val) {
            this.$emit('updateRouterTransition', val);
          }
        },
        rtl: {
          get: function get() {
            return this.$vs.rtl;
          },
          set: function set(val) {
            this.$vs.rtl = val;
          }
        },
        themeMode: {
          get: function get() {
            return this.$store.state.theme;
          },
          set: function set(val) {
            this.$store.dispatch('updateTheme', val);
          }
        },
        scrollbarTag: function scrollbarTag() {
          return this.$store.state.is_touch_device ? 'div' : 'VuePerfectScrollbar';
        },
        windowWidth: function windowWidth() {
          return this.$store.state.windowWidth;
        }
      },
      methods: {
        updatePrimaryColor: function updatePrimaryColor(color) {
          this.primaryColor = color;
          this.$vs.theme({
            primary: color
          });
        }
      },
      components: {
        VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js&":
  /*!************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js& ***!
    \************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _HorizontalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./HorizontalNavMenuGroup.vue */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue");
    /* harmony import */


    var _HorizontalNavMenuHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./HorizontalNavMenuHeader.vue */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue");
    /* harmony import */


    var _HorizontalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./HorizontalNavMenuItem.vue */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue"); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      props: {
        // navbarColor  : { type: String, default: "#fff", },
        navMenuItems: {
          type: Array,
          required: true
        }
      },
      components: {
        HNavMenuGroup: _HorizontalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
        HNavMenuHeader: _HorizontalNavMenuHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        HNavMenuItem: _HorizontalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
      },
      computed: {
        navbarColor: function navbarColor() {
          return this.$store.state.theme === 'dark' ? '#10163a' : '#fff';
        }
      },
      methods: {
        checkGrpChildrenActive: function checkGrpChildrenActive(group) {
          var _this = this;

          var path = this.$route.fullPath;
          var active = false;
          var routeParent = this.$route.meta ? this.$route.meta.parent : undefined;

          if (group.submenu) {
            group.submenu.forEach(function (item) {
              if (active) return true;

              if ((path === item.url || routeParent === item.slug) && item.url) {
                active = true;
              } else if (item.submenu) {
                _this.checkGrpChildrenActive(item);
              }
            });
          }

          return active;
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=script&lang=js&":
  /*!*****************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=script&lang=js& ***!
    \*****************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuGroupVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _HorizontalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./HorizontalNavMenuItem.vue */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue"); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // import VNavMenuItem from './VerticalNavMenuItem.vue'

    /* harmony default export */


    __webpack_exports__["default"] = {
      name: 'h-nav-menu-group',
      props: {
        openHover: {
          type: Boolean,
          "default": true
        },
        open: {
          type: Boolean,
          "default": false
        },
        group: {
          type: Object
        },
        groupIndex: {
          type: Number
        },
        bottom: {
          type: Boolean,
          "default": false
        }
      },
      components: {
        HNavMenuItem: _HorizontalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
      },
      data: function data() {
        return {
          openItems: false,
          hovered: false,
          dropLeft: false
        };
      },
      computed: {
        iconClasses: function iconClasses() {
          var classes = 'mr-3 ';
          classes += this.groupIndex % 1 !== 0 ? 'w-3 h-3' : 'w-5 h-5';
          return classes;
        },
        styleItems: function styleItems() {
          var style = {};

          if (this.bottom) {
            style.top = '100%';
            style.left = '0';
          } else {
            style.top = '12px';
            style.left = '100%';
          }

          if (this.dropLeft) {
            style.left = null;
            style.right = '100%';
          }

          if (this.$vs.rtl) {
            var temp = style.left;
            style.left = style.right;
            style.right = temp;
          }

          return style;
        },
        itemIcon: function itemIcon() {
          // return (index) => {
          //   // if (!((index.match(/\./g) || []).length > 1)) return "CircleIcon"
          // }
          return 'CircleIcon';
        },
        isGroupActive: function isGroupActive() {
          var _this = this;

          return function (item) {
            var path = _this.$route.fullPath;
            var open = false;
            var routeParent = _this.$route.meta ? _this.$route.meta.parent : undefined;

            var func = function func(item) {
              if (item.submenu) {
                item.submenu.forEach(function (item) {
                  if ((path === item.url || routeParent === item.slug) && item.url) {
                    open = true;
                  } else if (item.submenu) {
                    func(item);
                  }
                });
              }
            };

            func(item);
            return open;
          };
        }
      },
      watch: {
        hovered: function hovered(val) {
          var _this2 = this;

          this.$nextTick(function () {
            if (val) {
              var dd = _this2.$refs.childDropdown;

              if (window.innerHeight - dd.getBoundingClientRect().top - dd.getBoundingClientRect().height - 28 < 1) {
                var maxHeight = window.innerHeight - dd.getBoundingClientRect().top - 70;
                dd.style.maxHeight = "".concat(maxHeight, "px");
                dd.style.overflowY = 'auto';
                dd.style.overflowX = 'hidden';
              }

              if (dd.getBoundingClientRect().left + dd.offsetWidth - (window.innerWidth - 16) >= 0 || _this2.$parent.dropLeft) {
                _this2.dropLeft = true;
              }

              if (_this2.$vs.rtl) {
                if (dd.getBoundingClientRect().right - dd.offsetWidth - 16 < 0) {
                  _this2.dropLeft = true;
                }
              }
            } else {
              _this2.dropLeft = false;
            }
          });
        }
      },
      methods: {
        mouseover: function mouseover() {
          this.hovered = true;

          if (this.openHover) {
            this.showChildren();
          }
        },
        mouseout: function mouseout() {
          this.hovered = false;

          if (this.openHover) {
            this.showChildren(false);
          }
        },
        showChildren: function showChildren() {
          var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this.openItems = val;
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=script&lang=js&":
  /*!******************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=script&lang=js& ***!
    \******************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuHeaderVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _HorizontalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./HorizontalNavMenuGroup.vue */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue");
    /* harmony import */


    var _HorizontalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./HorizontalNavMenuItem.vue */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue"); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      props: {
        header: {
          type: Object,
          requried: true
        },
        openOnHover: {
          type: Boolean,
          "default": true
        }
      },
      components: {
        HNavMenuGroup: _HorizontalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
        HNavMenuItem: _HorizontalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
      },
      data: function data() {
        return {
          showChildren: false,
          isHovered: false,
          dropRight: false
        };
      },
      computed: {
        isHeaderActive: function isHeaderActive() {
          var _this = this;

          var path = this.$route.fullPath;
          var active = false;
          var routeParent = this.$route.meta ? this.$route.meta.parent : undefined;
          this.header.items.forEach(function (item) {
            // If item is group
            if (item.submenu) {
              if (_this.checkGrpChildrenActive(item)) {
                active = true;
              }
            } else if (item.url) {
              if (path === item.url || routeParent === item.slug) {
                active = true;
              }
            }
          });
          return active;
        }
      },
      watch: {
        showChildren: function showChildren() {
          var _this2 = this;

          this.$nextTick(function () {
            if (_this2.showChildren) {
              var dd = _this2.$refs.headerDropdown;

              if (dd.getBoundingClientRect().left + dd.offsetWidth - (window.innerWidth - 16) >= 0) {
                _this2.dropRight = true;
              }
            }
          });
        }
      },
      methods: {
        checkGrpChildrenActive: function checkGrpChildrenActive(group) {
          var _this3 = this;

          var path = this.$route.fullPath;
          var active = false;
          var routeParent = this.$route.meta ? this.$route.meta.parent : undefined;

          if (group.submenu) {
            group.submenu.forEach(function (item) {
              if ((path === item.url || routeParent === item.slug) && item.slug) active = true;else if (item.submenu) {
                if (_this3.checkGrpChildrenActive(item)) active = true;
              }
            });
          }

          return active;
        },
        hovered: function hovered() {
          var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this.isHovered = val;

          if (this.openOnHover) {
            val ? this.showChildren = true : this.showChildren = false;
          }
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=script&lang=js&":
  /*!****************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=script&lang=js& ***!
    \****************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuItemVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      name: 'v-nav-menu-item',
      props: {
        icon: {
          type: String,
          "default": ''
        },
        iconSmall: {
          type: Boolean,
          "default": false
        },
        iconPack: {
          type: String,
          "default": 'material-icons'
        },
        href: {
          type: [String, null],
          "default": '#'
        },
        to: {
          type: [String, Object, null],
          "default": null
        },
        slug: {
          type: String,
          "default": null
        },
        index: {
          type: [String, Number],
          "default": null
        },
        featherIcon: {
          type: Boolean,
          "default": true
        },
        target: {
          type: String,
          "default": '_self'
        },
        isDisabled: {
          type: Boolean,
          "default": false
        }
      },
      computed: {
        iconClasses: function iconClasses() {
          return this.iconSmall ? 'w-3 h-3 mr-3' : 'w-5 h-5 mr-3';
        },
        canSee: function canSee() {
          var userInfo = JSON.parse(localStorage.getItem("userInfo"));
          this.$acl.check(userInfo.role);
          return this.to ? this.$acl.check(this.$router.match(this.to).meta.rule) : true;
        },
        activeLink: function activeLink() {
          return !!((this.to === this.$route.path || this.$route.meta.parent === this.slug) && this.to);
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js&":
  /*!*************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js& ***!
    \*************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsNavbarTheNavbarHorizontalVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _components_Bookmarks_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/Bookmarks.vue */
    "./resources/js/src/layouts/components/navbar/components/Bookmarks.vue");
    /* harmony import */


    var _components_I18n_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/I18n.vue */
    "./resources/js/src/layouts/components/navbar/components/I18n.vue");
    /* harmony import */


    var _components_SearchBar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/SearchBar.vue */
    "./resources/js/src/layouts/components/navbar/components/SearchBar.vue");
    /* harmony import */


    var _components_CartDropDown_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/CartDropDown.vue */
    "./resources/js/src/layouts/components/navbar/components/CartDropDown.vue");
    /* harmony import */


    var _components_NotificationDropDown_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/NotificationDropDown.vue */
    "./resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue");
    /* harmony import */


    var _components_ProfileDropDown_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/ProfileDropDown.vue */
    "./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue");
    /* harmony import */


    var _Logo_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Logo.vue */
    "./resources/js/src/layouts/components/Logo.vue"); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      name: 'the-navbar-horizontal',
      props: {
        logo: {
          type: String
        },
        navbarType: {
          type: String,
          required: true
        }
      },
      components: {
        Logo: _Logo_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
        Bookmarks: _components_Bookmarks_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
        I18n: _components_I18n_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        SearchBar: _components_SearchBar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        CartDropDown: _components_CartDropDown_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        NotificationDropDown: _components_NotificationDropDown_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        ProfileDropDown: _components_ProfileDropDown_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
      },
      computed: {
        navbarColor: function navbarColor() {
          var color = '#fff';
          if (this.navbarType === 'sticky') color = '#f7f7f7';else if (this.navbarType === 'static') {
            if (this.scrollY < 50) {
              color = '#f7f7f7';
            }
          }

          if (this.isThemedark === 'dark') {
            if (color === '#fff') {
              color = '#10163a';
            } else {
              color = '#262c49';
            }
          }

          return color;
        },
        isThemedark: function isThemedark() {
          return this.$store.state.theme;
        },
        navbarStyle: function navbarStyle() {
          return this.navbarType === 'static' ? {
            transition: 'all .25s ease-in-out'
          } : {};
        },
        navbarClasses: function navbarClasses() {
          return this.scrollY > 5 && this.navbarType === 'static' ? null : 'd-theme-dark-light-bg shadow-none';
        },
        scrollY: function scrollY() {
          return this.$store.state.scrollY;
        },
        verticalNavMenuWidth: function verticalNavMenuWidth() {
          return this.$store.state.verticalNavMenuWidth;
        },
        windowWidth: function windowWidth() {
          return this.$store.state.windowWidth;
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js&":
  /*!***********************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js& ***!
    \***********************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsNavbarTheNavbarVerticalVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _components_Bookmarks_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/Bookmarks.vue */
    "./resources/js/src/layouts/components/navbar/components/Bookmarks.vue");
    /* harmony import */


    var _components_I18n_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/I18n.vue */
    "./resources/js/src/layouts/components/navbar/components/I18n.vue");
    /* harmony import */


    var _components_SearchBar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/SearchBar.vue */
    "./resources/js/src/layouts/components/navbar/components/SearchBar.vue");
    /* harmony import */


    var _components_CartDropDown_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/CartDropDown.vue */
    "./resources/js/src/layouts/components/navbar/components/CartDropDown.vue");
    /* harmony import */


    var _components_NotificationDropDown_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/NotificationDropDown.vue */
    "./resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue");
    /* harmony import */


    var _components_ProfileDropDown_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/ProfileDropDown.vue */
    "./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue"); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      name: 'the-navbar-vertical',
      props: {
        navbarColor: {
          type: String,
          "default": '#fff'
        }
      },
      components: {
        Bookmarks: _components_Bookmarks_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
        I18n: _components_I18n_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        SearchBar: _components_SearchBar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        CartDropDown: _components_CartDropDown_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        NotificationDropDown: _components_NotificationDropDown_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        ProfileDropDown: _components_ProfileDropDown_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
      },
      computed: {
        navbarColorLocal: function navbarColorLocal() {
          return this.$store.state.theme === 'dark' && this.navbarColor === '#fff' ? '#10163a' : this.navbarColor;
        },
        verticalNavMenuWidth: function verticalNavMenuWidth() {
          return this.$store.state.verticalNavMenuWidth;
        },
        textColor: function textColor() {
          return {
            'text-white': this.navbarColor !== '#10163a' && this.$store.state.theme === 'dark' || this.navbarColor !== '#fff' && this.$store.state.theme !== 'dark'
          };
        },
        windowWidth: function windowWidth() {
          return this.$store.state.windowWidth;
        },
        // NAVBAR STYLE
        classObj: function classObj() {
          if (this.verticalNavMenuWidth === 'default') return 'navbar-default';else if (this.verticalNavMenuWidth === 'reduced') return 'navbar-reduced';else if (this.verticalNavMenuWidth) return 'navbar-full';
        }
      },
      methods: {
        showSidebar: function showSidebar() {
          this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true);
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/Bookmarks.vue?vue&type=script&lang=js&":
  /*!**************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/components/Bookmarks.vue?vue&type=script&lang=js& ***!
    \**************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsNavbarComponentsBookmarksVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! vuedraggable */
    "./node_modules/vuedraggable/dist/vuedraggable.common.js");
    /* harmony import */


    var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _components_vx_auto_suggest_VxAutoSuggest_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @/components/vx-auto-suggest/VxAutoSuggest.vue */
    "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue"); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      props: {
        navbarColor: {
          type: String,
          "default": '#fff'
        }
      },
      components: {
        draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_0___default.a,
        VxAutoSuggest: _components_vx_auto_suggest_VxAutoSuggest_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
      },
      data: function data() {
        return {
          showBookmarkPagesDropdown: false
        };
      },
      watch: {
        '$route': function $route() {
          if (this.showBookmarkPagesDropdown) this.showBookmarkPagesDropdown = false;
        }
      },
      computed: {
        navbarSearchAndPinList: function navbarSearchAndPinList() {
          return {
            pages: this.$store.state.navbarSearchAndPinList['pages']
          };
        },
        starredPages: function starredPages() {
          return this.$store.state.starredPages;
        },
        starredPagesLimited: {
          get: function get() {
            return this.starredPages.slice(0, 10);
          },
          set: function set(list) {
            this.$store.dispatch('arrangeStarredPagesLimited', list);
          }
        },
        starredPagesMore: {
          get: function get() {
            return this.starredPages.slice(10);
          },
          set: function set(list) {
            this.$store.dispatch('arrangeStarredPagesMore', list);
          }
        },
        textColor: function textColor() {
          return {
            'text-white': this.$store.state.mainLayoutType === 'vertical' && this.navbarColor !== (this.$store.state.theme === 'dark' ? '#10163a' : '#fff')
          };
        }
      },
      methods: {
        selected: function selected(obj) {
          this.$store.commit('TOGGLE_CONTENT_OVERLAY', false);
          this.showBookmarkPagesDropdown = false;
          this.$router.push(obj.pages.url)["catch"](function () {});
        },
        actionClicked: function actionClicked(item) {
          this.$store.dispatch('updateStarredPage', {
            url: item.url,
            val: !item.is_bookmarked
          }); // this.$refs.bookmarkAutoSuggest.filterData()
        },
        outside: function outside() {
          this.showBookmarkPagesDropdown = false;
        },
        hnd_search_query_update: function hnd_search_query_update(query) {
          // Show overlay if any character is entered
          this.$store.commit('TOGGLE_CONTENT_OVERLAY', !!query);
        }
      },
      directives: {
        'click-outside': {
          bind: function bind(el, binding) {
            var bubble = binding.modifiers.bubble;

            var handler = function handler(e) {
              /* eslint-disable no-mixed-operators */
              if (bubble || !el.contains(e.target) && el !== e.target) {
                /* eslint-enable no-mixed-operators */
                binding.value(e);
              }
            };

            el.__vueClickOutside__ = handler;
            document.addEventListener('click', handler);
          },
          unbind: function unbind(el) {
            document.removeEventListener('click', el.__vueClickOutside__);
            el.__vueClickOutside__ = null;
          }
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/CartDropDown.vue?vue&type=script&lang=js&":
  /*!*****************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/components/CartDropDown.vue?vue&type=script&lang=js& ***!
    \*****************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsNavbarComponentsCartDropDownVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! vue-perfect-scrollbar */
    "./node_modules/vue-perfect-scrollbar/dist/index.js");
    /* harmony import */


    var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      components: {
        VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
      },
      data: function data() {
        return {
          settings: {
            // perfectscrollbar settings
            maxScrollbarLength: 60,
            wheelSpeed: .60
          }
        };
      },
      computed: {
        // CART DROPDOWN
        cartItems: function cartItems() {
          return this.$store.state.eCommerce.cartItems.slice().reverse();
        },
        scrollbarTag: function scrollbarTag() {
          return this.$store.getters.scrollbarTag;
        }
      },
      methods: {
        removeItemFromCart: function removeItemFromCart(item) {
          this.$store.dispatch('eCommerce/toggleItemInCart', item);
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/I18n.vue?vue&type=script&lang=js&":
  /*!*********************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/components/I18n.vue?vue&type=script&lang=js& ***!
    \*********************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsNavbarComponentsI18nVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      computed: {
        i18n_locale_img: function i18n_locale_img() {
          // Use below code to dynamically fetch image instead of if-else
          // NOTE: We used if-else because laravel throws error in 'yarn prod'.
          // If you are not using laravel + Vue, you can use below code to dynamically get image
          // return require(`@assets/images/flags/${this.$i18n.locale}.png`)
          var locale = this.$i18n.locale;
          if (locale === 'en') return __webpack_require__(
          /*! @assets/images/flags/en.png */
          "./resources/assets/images/flags/en.png");else if (locale === 'pt') return __webpack_require__(
          /*! @assets/images/flags/pt.png */
          "./resources/assets/images/flags/pt.png");else if (locale === 'fr') return __webpack_require__(
          /*! @assets/images/flags/fr.png */
          "./resources/assets/images/flags/fr.png");else if (locale === 'de') return __webpack_require__(
          /*! @assets/images/flags/de.png */
          "./resources/assets/images/flags/de.png");else return __webpack_require__(
          /*! @assets/images/flags/en.png */
          "./resources/assets/images/flags/en.png");
        },
        getCurrentLocaleData: function getCurrentLocaleData() {
          var locale = this.$i18n.locale;
          if (locale === 'en') return {
            flag: 'us',
            lang: 'English'
          };else if (locale === 'pt') return {
            flag: 'br',
            lang: 'Portuguese'
          };else if (locale === 'fr') return {
            flag: 'fr',
            lang: 'French'
          };else if (locale === 'de') return {
            flag: 'de',
            lang: 'German'
          };
        }
      },
      methods: {
        updateLocale: function updateLocale(locale) {
          this.$i18n.locale = locale;
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=script&lang=js&":
  /*!*************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=script&lang=js& ***!
    \*************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsNavbarComponentsNotificationDropDownVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! vue-perfect-scrollbar */
    "./node_modules/vue-perfect-scrollbar/dist/index.js");
    /* harmony import */


    var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      components: {
        VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
      },
      data: function data() {
        return {
          unreadNotifications: [{
            index: 0,
            title: 'New Message',
            msg: 'Are your going to meet me tonight?',
            icon: 'MessageSquareIcon',
            time: this.randomDate({
              sec: 10
            }),
            category: 'primary'
          }, {
            index: 1,
            title: 'New Order Recieved',
            msg: 'You got new order of goods.',
            icon: 'PackageIcon',
            time: this.randomDate({
              sec: 40
            }),
            category: 'success'
          }, {
            index: 2,
            title: 'Server Limit Reached!',
            msg: 'Server have 99% CPU usage.',
            icon: 'AlertOctagonIcon',
            time: this.randomDate({
              min: 1
            }),
            category: 'danger'
          }, {
            index: 3,
            title: 'New Mail From Peter',
            msg: 'Cake sesame snaps cupcake',
            icon: 'MailIcon',
            time: this.randomDate({
              min: 6
            }),
            category: 'primary'
          }, {
            index: 4,
            title: 'Bruce\'s Party',
            msg: 'Chocolate cake oat cake tiramisu',
            icon: 'CalendarIcon',
            time: this.randomDate({
              hr: 2
            }),
            category: 'warning'
          }],
          settings: {
            maxScrollbarLength: 60,
            wheelSpeed: .60
          }
        };
      },
      computed: {
        scrollbarTag: function scrollbarTag() {
          return this.$store.getters.scrollbarTag;
        }
      },
      methods: {
        elapsedTime: function elapsedTime(startTime) {
          var x = new Date(startTime);
          var now = new Date();
          var timeDiff = now - x;
          timeDiff /= 1000;
          var seconds = Math.round(timeDiff);
          timeDiff = Math.floor(timeDiff / 60);
          var minutes = Math.round(timeDiff % 60);
          timeDiff = Math.floor(timeDiff / 60);
          var hours = Math.round(timeDiff % 24);
          timeDiff = Math.floor(timeDiff / 24);
          var days = Math.round(timeDiff % 365);
          timeDiff = Math.floor(timeDiff / 365);
          var years = timeDiff;

          if (years > 0) {
            return "".concat(years + (years > 1 ? ' Years ' : ' Year '), "ago");
          } else if (days > 0) {
            return "".concat(days + (days > 1 ? ' Days ' : ' Day '), "ago");
          } else if (hours > 0) {
            return "".concat(hours + (hours > 1 ? ' Hrs ' : ' Hour '), "ago");
          } else if (minutes > 0) {
            return "".concat(minutes + (minutes > 1 ? ' Mins ' : ' Min '), "ago");
          } else if (seconds > 0) {
            return seconds + (seconds > 1 ? ' sec ago' : 'just now');
          }

          return 'Just Now';
        },
        // Method for creating dummy notification time
        randomDate: function randomDate(_ref) {
          var hr = _ref.hr,
              min = _ref.min,
              sec = _ref.sec;
          var date = new Date();
          if (hr) date.setHours(date.getHours() - hr);
          if (min) date.setMinutes(date.getMinutes() - min);
          if (sec) date.setSeconds(date.getSeconds() - sec);
          return date;
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=script&lang=js&":
  /*!********************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=script&lang=js& ***!
    \********************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsNavbarComponentsProfileDropDownVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! js-cookie */
    "./node_modules/js-cookie/src/js.cookie.js");
    /* harmony import */


    var js_cookie__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! axios */
    "./node_modules/axios/index.js");
    /* harmony import */


    var axios__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      data: function data() {
        return {};
      },
      computed: {
        activeUserInfo: function activeUserInfo() {
          return this.$store.state.AppActiveUser;
        }
      },
      methods: {
        logout: function logout() {
          var _this = this;

          this.$store.dispatch('auth/logout').then(function (response) {
            _this.$acl.change('guest');

            _this.$router.push('/panel/login'); // Change role on logout. Same value as initialRole of acj.js

          })["catch"](function (error) {
            console.log(error);
          });
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=script&lang=js&":
  /*!**************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=script&lang=js& ***!
    \**************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsNavbarComponentsSearchBarVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _components_vx_auto_suggest_VxAutoSuggest_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @/components/vx-auto-suggest/VxAutoSuggest.vue */
    "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue"); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      components: {
        VxAutoSuggest: _components_vx_auto_suggest_VxAutoSuggest_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
      },
      data: function data() {
        return {
          navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
          showFullSearch: false
        };
      },
      computed: {
        // below computed property 'get_ext_img' is not required if you are using dynamic image rendering instead of if-else for laravel issue
        get_ext_img: function get_ext_img() {
          return function (ext) {
            if (ext === 'doc') return __webpack_require__(
            /*! @assets/images/file-icons/doc.png */
            "./resources/assets/images/file-icons/doc.png");else if (ext === 'jpg') return __webpack_require__(
            /*! @assets/images/file-icons/jpg.png */
            "./resources/assets/images/file-icons/jpg.png");else if (ext === 'xls') return __webpack_require__(
            /*! @assets/images/file-icons/xls.png */
            "./resources/assets/images/file-icons/xls.png");else if (ext === 'pdf') return __webpack_require__(
            /*! @assets/images/file-icons/pdf.png */
            "./resources/assets/images/file-icons/pdf.png");else return __webpack_require__(
            /*! @assets/images/file-icons/doc.png */
            "./resources/assets/images/file-icons/doc.png");
          };
        }
      },
      methods: {
        selected: function selected(item) {
          if (item.pages) this.$router.push(item.pages.url)["catch"](function () {});
          this.showFullSearch = false;
        },
        hnd_search_query_update: function hnd_search_query_update(query) {
          // Show overlay if any character is entered
          this.$store.commit('TOGGLE_CONTENT_OVERLAY', !!query);
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&":
  /*!********************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js& ***!
    \********************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @babel/runtime/core-js/get-iterator */
    "./node_modules/@babel/runtime/core-js/get-iterator.js");
    /* harmony import */


    var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! vue-perfect-scrollbar */
    "./node_modules/vue-perfect-scrollbar/dist/index.js");
    /* harmony import */


    var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _VerticalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./VerticalNavMenuGroup.vue */
    "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue");
    /* harmony import */


    var _VerticalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./VerticalNavMenuItem.vue */
    "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue");
    /* harmony import */


    var _Logo_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Logo.vue */
    "./resources/js/src/layouts/components/Logo.vue");

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function _iterableToArrayLimit(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    } //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      name: 'v-nav-menu',
      components: {
        VNavMenuGroup: _VerticalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        VNavMenuItem: _VerticalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
        Logo: _Logo_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
      },
      props: {
        logo: {
          type: String
        },
        openGroupHover: {
          type: Boolean,
          "default": false
        },
        parent: {
          type: String
        },
        reduceNotRebound: {
          type: Boolean,
          "default": true
        },
        navMenuItems: {
          type: Array,
          required: true
        },
        title: {
          type: String
        }
      },
      data: function data() {
        return {
          clickNotClose: false,
          // disable close navMenu on outside click
          isMouseEnter: false,
          reduce: false,
          // determines if navMenu is reduce - component property
          showCloseButton: false,
          // show close button in smaller devices
          settings: {
            // perfectScrollbar settings
            maxScrollbarLength: 60,
            wheelSpeed: 1,
            swipeEasing: true
          },
          showShadowBottom: false
        };
      },
      computed: {
        isGroupActive: function isGroupActive() {
          var _this = this;

          return function (item) {
            var path = _this.$route.fullPath;
            var routeParent = _this.$route.meta ? _this.$route.meta.parent : undefined;
            var open = false;

            var func = function func(item) {
              if (item.submenu) {
                item.submenu.forEach(function (item) {
                  if (item.url && (path === item.url || routeParent === item.slug)) {
                    open = true;
                  } else if (item.submenu) {
                    func(item);
                  }
                });
              }
            };

            func(item);
            return open;
          };
        },
        menuItemsUpdated: function menuItemsUpdated() {
          var clone = this.navMenuItems.slice();
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            var _loop = function _loop() {
              var _step$value = _slicedToArray(_step.value, 2),
                  index = _step$value[0],
                  item = _step$value[1];

              if (item.header && item.items.length && (index || 1)) {
                var i = clone.findIndex(function (ix) {
                  return ix.header === item.header;
                });
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (var _iterator2 = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(item.items.entries()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _step2$value = _slicedToArray(_step2.value, 2),
                        subIndex = _step2$value[0],
                        subItem = _step2$value[1];

                    clone.splice(i + 1 + subIndex, 0, subItem);
                  }
                } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                      _iterator2["return"]();
                    }
                  } finally {
                    if (_didIteratorError2) {
                      throw _iteratorError2;
                    }
                  }
                }
              }
            };

            for (var _iterator = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(this.navMenuItems.entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              _loop();
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return clone;
        },
        isVerticalNavMenuActive: {
          get: function get() {
            return this.$store.state.isVerticalNavMenuActive;
          },
          set: function set(val) {
            this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', val);
          }
        },
        layoutType: function layoutType() {
          return this.$store.state.mainLayoutType;
        },
        reduceButton: {
          get: function get() {
            return this.$store.state.reduceButton;
          },
          set: function set(val) {
            this.$store.commit('TOGGLE_REDUCE_BUTTON', val);
          }
        },
        isVerticalNavMenuReduced: function isVerticalNavMenuReduced() {
          return Boolean(this.reduce && this.reduceButton);
        },
        verticalNavMenuItemsMin: function verticalNavMenuItemsMin() {
          return this.$store.state.verticalNavMenuItemsMin;
        },
        scrollbarTag: function scrollbarTag() {
          return this.$store.getters.scrollbarTag;
        },
        windowWidth: function windowWidth() {
          return this.$store.state.windowWidth;
        }
      },
      watch: {
        '$route': function $route() {
          if (this.isVerticalNavMenuActive && this.showCloseButton) this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false);
        },
        reduce: function reduce(val) {
          var verticalNavMenuWidth = val ? 'reduced' : this.$store.state.windowWidth < 1200 ? 'no-nav-menu' : 'default';
          this.$store.dispatch('updateVerticalNavMenuWidth', verticalNavMenuWidth);
          setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
          }, 100);
        },
        layoutType: function layoutType() {
          this.setVerticalNavMenuWidth();
        },
        reduceButton: function reduceButton() {
          this.setVerticalNavMenuWidth();
        },
        windowWidth: function windowWidth() {
          this.setVerticalNavMenuWidth();
        }
      },
      methods: {
        canSee: function canSee(rule) {
          var userInfo = JSON.parse(localStorage.getItem('userInfo'));
          return this.$acl.check(userInfo.role) === rule;
        },
        onMenuSwipe: function onMenuSwipe(event) {
          if (event.direction === 4 && this.$vs.rtl) {
            // Swipe Right
            if (this.isVerticalNavMenuActive && this.showCloseButton) this.isVerticalNavMenuActive = false;
          } else if (event.direction === 2 && !this.$vs.rtl) {
            // Swipe Left
            if (this.isVerticalNavMenuActive && this.showCloseButton) this.isVerticalNavMenuActive = false;
          }
        },
        onSwipeAreaSwipe: function onSwipeAreaSwipe(event) {
          if (event.direction === 4 && !this.$vs.rtl) {
            // Swipe Right
            if (!this.isVerticalNavMenuActive && this.showCloseButton) this.isVerticalNavMenuActive = true;
          } else if (event.direction === 2 && this.$vs.rtl) {
            // Swipe Left
            if (!this.isVerticalNavMenuActive && this.showCloseButton) this.isVerticalNavMenuActive = true;
          }
        },
        psSectionScroll: function psSectionScroll() {
          var scroll_el = this.$refs.verticalNavMenuPs.$el || this.$refs.verticalNavMenuPs;
          this.showShadowBottom = scroll_el.scrollTop > 0;
        },
        mouseEnter: function mouseEnter() {
          if (this.reduce) this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', false);
          this.isMouseEnter = true;
        },
        mouseLeave: function mouseLeave() {
          if (this.reduce) this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', true);
          this.isMouseEnter = false;
        },
        setVerticalNavMenuWidth: function setVerticalNavMenuWidth() {
          if (this.windowWidth > 1200) {
            if (this.layoutType === 'vertical') {
              // Set reduce
              this.reduce = !!this.reduceButton; // Open NavMenu

              this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true); // Set Menu Items Only Icon Mode

              var verticalNavMenuItemsMin = !!(this.reduceButton && !this.isMouseEnter);
              this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', verticalNavMenuItemsMin); // Menu Action buttons

              this.clickNotClose = true;
              this.showCloseButton = false;
              var verticalNavMenuWidth = this.isVerticalNavMenuReduced ? 'reduced' : 'default';
              this.$store.dispatch('updateVerticalNavMenuWidth', verticalNavMenuWidth);
              return;
            }
          } // Close NavMenu


          this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false); // Reduce button

          if (this.reduceButton) this.reduce = false; // Menu Action buttons

          this.showCloseButton = true;
          this.clickNotClose = false; // Update NavMenu Width

          this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu'); // Remove Only Icon in Menu

          this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', false); // if(this.layoutType === 'vertical' || (this.layoutType === 'horizontal' && this.windowWidth < 1200))
          // if (this.windowWidth < 1200) {
          //   // Close NavMenu
          //   this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false)
          //   // Reduce button
          //   if (this.reduceButton) this.reduce = false
          //   // Menu Action buttons
          //   this.showCloseButton = true
          //   this.clickNotClose   = false
          //   // Update NavMenu Width
          //   this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu')
          //   // Remove Only Icon in Menu
          //   this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', false)
          // } else {
          //   // Set reduce
          //   this.reduce = this.reduceButton ? true : false
          //   // Open NavMenu
          //   this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true)
          //   // Set Menu Items Only Icon Mode
          //   const verticalNavMenuItemsMin = (this.reduceButton && !this.isMouseEnter) ? true : false
          //   this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', verticalNavMenuItemsMin)
          //   // Menu Action buttons
          //   this.clickNotClose   = true
          //   this.showCloseButton = false
          //   const verticalNavMenuWidth   = this.isVerticalNavMenuReduced ? "reduced" : "default"
          //   this.$store.dispatch('updateVerticalNavMenuWidth', verticalNavMenuWidth)
          // }
        },
        toggleReduce: function toggleReduce(val) {
          this.reduceButton = val;
          this.setVerticalNavMenuWidth();
        }
      },
      mounted: function mounted() {
        this.setVerticalNavMenuWidth();
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=script&lang=js&":
  /*!*************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=script&lang=js& ***!
    \*************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuGroupVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _VerticalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./VerticalNavMenuItem.vue */
    "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue"); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      name: 'v-nav-menu-group',
      props: {
        openHover: {
          type: Boolean,
          "default": false
        },
        open: {
          type: Boolean,
          "default": false
        },
        group: {
          type: Object
        },
        groupIndex: {
          type: Number
        }
      },
      components: {
        VNavMenuItem: _VerticalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
      },
      data: function data() {
        return {
          maxHeight: '0px',
          openItems: false
        };
      },
      computed: {
        verticalNavMenuItemsMin: function verticalNavMenuItemsMin() {
          return this.$store.state.verticalNavMenuItemsMin;
        },
        styleItems: function styleItems() {
          return {
            maxHeight: this.maxHeight
          };
        },
        canSee: function canSee() {
          //console.log('meun',this.group)
          var userInfo = JSON.parse(localStorage.getItem("userInfo"));
          this.$acl.check(userInfo.role);
          return this.to ? this.$acl.check(this.$router.match(this.group.url).meta.rule) : true;
        },
        itemIcon: function itemIcon() {
          return function (index) {
            if (!((index.match(/\./g) || []).length > 1)) return 'CircleIcon';
          };
        },
        isGroupActive: function isGroupActive() {
          var _this = this;

          return function (item) {
            var path = _this.$route.fullPath;
            var open = false;
            var routeParent = _this.$route.meta ? _this.$route.meta.parent : undefined;

            var func = function func(item) {
              if (item.submenu) {
                item.submenu.forEach(function (item) {
                  if ((path === item.url || routeParent === item.slug) && item.url) {
                    open = true;
                  } else if (item.submenu) {
                    func(item);
                  }
                });
              }
            };

            func(item);
            return open;
          };
        }
      },
      watch: {
        // OPEN & CLOSES DROPDOWN ON ROUTE CHANGE
        '$route': function $route() {
          var _this2 = this;

          if (this.verticalNavMenuItemsMin) return;
          var scrollHeight = this.scrollHeight; // Collapse Group

          if (this.openItems && !this.open) {
            this.maxHeight = "".concat(scrollHeight, "px");
            setTimeout(function () {
              _this2.maxHeight = "".concat(0, "px");
            }, 50); // Expand Group
          } else if (this.open) {
            this.maxHeight = "".concat(scrollHeight, "px");
            setTimeout(function () {
              _this2.maxHeight = 'none';
            }, 300);
          }
        },
        maxHeight: function maxHeight() {
          this.openItems = this.maxHeight !== '0px';
        },
        // OPEN AND CLOSES DROPDOWN MENU ON NavMenu COLLAPSE AND DEFAULT VIEW
        '$store.state.verticalNavMenuItemsMin': function $storeStateVerticalNavMenuItemsMin(val) {
          var _this3 = this;

          var scrollHeight = this.$refs.items.scrollHeight;

          if (!val && this.open) {
            this.maxHeight = "".concat(scrollHeight, "px");
            setTimeout(function () {
              _this3.maxHeight = 'none';
            }, 300);
          } else {
            this.maxHeight = "".concat(scrollHeight, "px");
            setTimeout(function () {
              _this3.maxHeight = '0px';
            }, 50);
          }

          if (val && this.open) {
            this.maxHeight = "".concat(scrollHeight, "px");
            setTimeout(function () {
              _this3.maxHeight = '0px';
            }, 250);
          }
        }
      },
      methods: {
        clickGroup: function clickGroup() {
          var _this4 = this;

          if (!this.openHover) {
            var thisScrollHeight = this.$refs.items.scrollHeight;

            if (this.maxHeight === '0px') {
              this.maxHeight = "".concat(thisScrollHeight, "px");
              setTimeout(function () {
                _this4.maxHeight = 'none';
              }, 300);
            } else {
              this.maxHeight = "".concat(thisScrollHeight, "px");
              setTimeout(function () {
                _this4.maxHeight = "".concat(0, "px");
              }, 50);
            }

            this.$parent.$children.map(function (child) {
              if (child.isGroupActive) {
                if (child !== _this4 && !child.open && child.maxHeight !== '0px') {
                  setTimeout(function () {
                    child.maxHeight = "".concat(0, "px");
                  }, 50);
                }
              }
            });
          }
        },
        mouseover: function mouseover() {
          if (this.openHover) {
            var scrollHeight = this.$refs.items.scrollHeight;
            this.maxHeight = "".concat(scrollHeight, "px");
          }
        },
        mouseout: function mouseout() {
          if (this.openHover) {
            var scrollHeight = 0;
            this.maxHeight = "".concat(scrollHeight, "px");
          }
        }
      },
      mounted: function mounted() {
        this.openItems = this.open;

        if (this.open) {
          this.maxHeight = 'none';
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=script&lang=js&":
  /*!************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=script&lang=js& ***!
    \************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuItemVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      name: 'v-nav-menu-item',
      props: {
        icon: {
          type: String,
          "default": ''
        },
        iconSmall: {
          type: Boolean,
          "default": false
        },
        iconPack: {
          type: String,
          "default": 'material-icons'
        },
        href: {
          type: [String, null],
          "default": '#'
        },
        to: {
          type: [String, Object, null],
          "default": null
        },
        slug: {
          type: String,
          "default": null
        },
        index: {
          type: [String, Number],
          "default": null
        },
        featherIcon: {
          type: Boolean,
          "default": true
        },
        target: {
          type: String,
          "default": '_self'
        },
        isDisabled: {
          type: Boolean,
          "default": false
        }
      },
      computed: {
        canSee: function canSee() {
          //console.log('meun',this.to)
          var userInfo = JSON.parse(localStorage.getItem('userInfo'));
          this.$acl.check(userInfo.role);
          return this.to ? this.$acl.check(this.$router.match(this.to).meta.rule) : true;
        },
        activeLink: function activeLink() {
          return !!(this.to === this.$route.path || this.$route.meta.parent === this.slug && this.to);
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
  /*!*********************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
    \*********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsMainMainVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @babel/runtime/core-js/object/keys */
    "./node_modules/@babel/runtime/core-js/object/keys.js");
    /* harmony import */


    var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var vue_backtotop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! vue-backtotop */
    "./node_modules/vue-backtotop/src/main.js");
    /* harmony import */


    var _layouts_components_horizontal_nav_menu_HorizontalNavMenu_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue");
    /* harmony import */


    var _layouts_components_vertical_nav_menu_navMenuItems_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @/layouts/components/vertical-nav-menu/navMenuItems.js */
    "./resources/js/src/layouts/components/vertical-nav-menu/navMenuItems.js");
    /* harmony import */


    var _layouts_components_customizer_TheCustomizer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @/layouts/components/customizer/TheCustomizer.vue */
    "./resources/js/src/layouts/components/customizer/TheCustomizer.vue");
    /* harmony import */


    var _layouts_components_navbar_TheNavbarHorizontal_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @/layouts/components/navbar/TheNavbarHorizontal.vue */
    "./resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue");
    /* harmony import */


    var _layouts_components_navbar_TheNavbarVertical_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @/layouts/components/navbar/TheNavbarVertical.vue */
    "./resources/js/src/layouts/components/navbar/TheNavbarVertical.vue");
    /* harmony import */


    var _layouts_components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @/layouts/components/TheFooter.vue */
    "./resources/js/src/layouts/components/TheFooter.vue");
    /* harmony import */


    var _themeConfig_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @/../themeConfig.js */
    "./resources/js/themeConfig.js");
    /* harmony import */


    var _layouts_components_vertical_nav_menu_VerticalNavMenu_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @/layouts/components/vertical-nav-menu/VerticalNavMenu.vue */
    "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue"); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //


    var VxTour = function VxTour() {
      return __webpack_require__.e(
      /*! import() */
      31).then(__webpack_require__.bind(null,
      /*! @/components/VxTour.vue */
      "./resources/js/src/components/VxTour.vue"));
    };
    /* harmony default export */


    __webpack_exports__["default"] = {
      components: {
        BackToTop: vue_backtotop__WEBPACK_IMPORTED_MODULE_1__["default"],
        HNavMenu: _layouts_components_horizontal_nav_menu_HorizontalNavMenu_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        TheCustomizer: _layouts_components_customizer_TheCustomizer_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        TheFooter: _layouts_components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
        TheNavbarHorizontal: _layouts_components_navbar_TheNavbarHorizontal_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
        TheNavbarVertical: _layouts_components_navbar_TheNavbarVertical_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
        VNavMenu: _layouts_components_vertical_nav_menu_VerticalNavMenu_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
        VxTour: VxTour
      },
      data: function data() {
        return {
          disableCustomizer: _themeConfig_js__WEBPACK_IMPORTED_MODULE_8__["default"].disableCustomizer,
          disableThemeTour: _themeConfig_js__WEBPACK_IMPORTED_MODULE_8__["default"].disableThemeTour,
          dynamicWatchers: {},
          footerType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_8__["default"].footerType || 'static',
          hideScrollToTop: _themeConfig_js__WEBPACK_IMPORTED_MODULE_8__["default"].hideScrollToTop,
          isNavbarDark: false,
          navbarColor: _themeConfig_js__WEBPACK_IMPORTED_MODULE_8__["default"].navbarColor || '#fff',
          navbarType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_8__["default"].navbarType || 'floating',
          navMenuItems: _layouts_components_vertical_nav_menu_navMenuItems_js__WEBPACK_IMPORTED_MODULE_3__["default"],
          routerTransition: _themeConfig_js__WEBPACK_IMPORTED_MODULE_8__["default"].routerTransition || 'none',
          routeTitle: this.$route.meta.pageTitle,
          steps: [{
            target: '#btnVNavMenuMinToggler',
            content: 'Toggle Collapse Sidebar.'
          }, {
            target: '.vx-navbar__starred-pages',
            content: 'Create your own bookmarks. You can also re-arrange them using drag & drop.'
          }, {
            target: '.i18n-locale',
            content: 'You can change language from here.'
          }, {
            target: '.navbar-fuzzy-search',
            content: 'Try fuzzy search to visit pages in flash.'
          }, {
            target: '.customizer-btn',
            content: 'Customize template based on your preference',
            params: {
              placement: 'left'
            }
          }, {
            target: '.vs-button.buy-now',
            content: 'Buy this awesomeness at affordable price!',
            params: {
              placement: 'top'
            }
          }]
        };
      },
      watch: {
        '$route': function $route() {
          this.routeTitle = this.$route.meta.pageTitle;
        },
        isThemeDark: function isThemeDark(val) {
          var color = this.navbarColor === '#fff' && val ? '#10163a' : '#fff';
          this.updateNavbarColor(color);
        },
        '$store.state.mainLayoutType': function $storeStateMainLayoutType(val) {
          this.setNavMenuVisibility(val);
          this.disableThemeTour = true;
        }
      },
      computed: {
        bodyOverlay: function bodyOverlay() {
          return this.$store.state.bodyOverlay;
        },
        contentAreaClass: function contentAreaClass() {
          if (this.mainLayoutType === 'vertical') {
            if (this.verticalNavMenuWidth === 'default') return 'content-area-reduced';else if (this.verticalNavMenuWidth === 'reduced') return 'content-area-lg';else return 'content-area-full';
          } else return 'content-area-full';
        },
        footerClasses: function footerClasses() {
          return {
            'footer-hidden': this.footerType === 'hidden',
            'footer-sticky': this.footerType === 'sticky',
            'footer-static': this.footerType === 'static'
          };
        },
        isAppPage: function isAppPage() {
          return this.$route.meta.no_scroll;
        },
        isThemeDark: function isThemeDark() {
          return this.$store.state.theme === 'dark';
        },
        layoutTypeClass: function layoutTypeClass() {
          return "main-".concat(this.mainLayoutType);
        },
        mainLayoutType: function mainLayoutType() {
          return this.$store.state.mainLayoutType;
        },
        navbarClasses: function navbarClasses() {
          return {
            'navbar-hidden': this.navbarType === 'hidden',
            'navbar-sticky': this.navbarType === 'sticky',
            'navbar-static': this.navbarType === 'static',
            'navbar-floating': this.navbarType === 'floating'
          };
        },
        verticalNavMenuWidth: function verticalNavMenuWidth() {
          return this.$store.state.verticalNavMenuWidth;
        },
        windowWidth: function windowWidth() {
          return this.$store.state.windowWidth;
        }
      },
      methods: {
        changeRouteTitle: function changeRouteTitle(title) {
          this.routeTitle = title;
        },
        updateNavbar: function updateNavbar(val) {
          if (val === 'static') this.updateNavbarColor(this.isThemeDark ? '#10163a' : '#fff');
          this.navbarType = val;
        },
        updateNavbarColor: function updateNavbarColor(val) {
          this.navbarColor = val;
          if (val === '#fff') this.isNavbarDark = false;else this.isNavbarDark = true;
        },
        updateFooter: function updateFooter(val) {
          this.footerType = val;
        },
        updateRouterTransition: function updateRouterTransition(val) {
          this.routerTransition = val;
        },
        setNavMenuVisibility: function setNavMenuVisibility(layoutType) {
          if (layoutType === 'horizontal' && this.windowWidth >= 1200 || layoutType === 'vertical' && this.windowWidth < 1200) {
            this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false);
            this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu');
          } else {
            this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true);
          }
        },
        toggleHideScrollToTop: function toggleHideScrollToTop(val) {
          this.hideScrollToTop = val;
        }
      },
      created: function created() {
        var _this = this;

        var color = this.navbarColor === '#fff' && this.isThemeDark ? '#10163a' : this.navbarColor;
        this.updateNavbarColor(color);
        this.setNavMenuVisibility(this.$store.state.mainLayoutType); // Dynamic Watchers for tour
        // Reason: Once tour is disabled it is not required to enable it.
        // So, watcher is required for just disabling it.

        this.dynamicWatchers.windowWidth = this.$watch('$store.state.windowWidth', function (val) {
          if (val < 1200) {
            _this.disableThemeTour = true;

            _this.dynamicWatchers.windowWidth();
          }
        });
        this.dynamicWatchers.verticalNavMenuWidth = this.$watch('$store.state.verticalNavMenuWidth', function () {
          _this.disableThemeTour = true;

          _this.dynamicWatchers.verticalNavMenuWidth();
        });
        this.dynamicWatchers.rtl = this.$watch('$vs.rtl', function () {
          _this.disableThemeTour = true;

          _this.dynamicWatchers.rtl();
        });
      },
      beforeDestroy: function beforeDestroy() {
        var _this2 = this;

        _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.dynamicWatchers).map(function (i) {
          _this2.dynamicWatchers[i]();

          delete _this2.dynamicWatchers[i];
        });
      }
    };
    /***/
  },

  /***/
  "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&":
  /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
    \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderLibIndexJsNode_modulesSassLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcComponentsVxAutoSuggestVxAutoSuggestVueVueTypeStyleIndex0LangScss(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(
    /*! ../../../../../node_modules/css-loader/lib/css-base.js */
    "./node_modules/css-loader/lib/css-base.js")(false); // imports
    // module

    exports.push([module.i, "/*=========================================================================================\n  File Name: vxAutoSuggest.scss\n  Description: Styles for vx-auto-suggest component. Imported in VxAutoSuggest.vue file\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vx-auto-suggest {\n  position: relative;\n}\n.vx-auto-suggest .vs-input .vs-con-input .vs-inputx {\n  z-index: 10;\n}\n.vx-auto-suggest .vs-input .vs-con-input .vs-input--placeholder {\n  top: 0;\n  z-index: 50;\n}\n.vx-auto-suggest .auto-suggest-suggestions-list {\n  position: absolute;\n  width: 100%;\n  max-height: 82vh;\n  overflow-y: auto;\n}\n[dir] .vx-auto-suggest .auto-suggest-suggestions-list {\n  background: #fff;\n}\n[dir] .vx-auto-suggest .auto-suggest-suggestions-list .auto-suggest__suggestion-group__suggestion.vx-auto-suggest__current-selected {\n  background: #F1F1F1;\n}", ""]); // exports

    /***/
  },

  /***/
  "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss&":
  /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss& ***!
    \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderLibIndexJsNode_modulesSassLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsCustomizerTheCustomizerVueVueTypeStyleIndex0LangScss(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(
    /*! ../../../../../../node_modules/css-loader/lib/css-base.js */
    "./node_modules/css-loader/lib/css-base.js")(false); // imports
    // module

    exports.push([module.i, "#theme-customizer .vs-sidebar {\n  position: fixed;\n  z-index: 52000;\n  width: 400px;\n  max-width: 90vw;\n}[dir] #theme-customizer .vs-sidebar {\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n}\n.customizer-btn {\n  position: fixed;\n  top: 50%;\n  z-index: 50000;\n}\n[dir=ltr] .customizer-btn {\n  right: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .customizer-btn {\n  left: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr] .customizer-btn .vs-icon {\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite;\n}\n[dir=rtl] .customizer-btn .vs-icon {\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite;\n}\n.scroll-area--customizer {\n  height: calc(100% - 5rem);\n}\n.scroll-area--customizer:not(.ps) {\n  overflow-y: auto;\n}", ""]); // exports

    /***/
  },

  /***/
  "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&":
  /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
    \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderLibIndexJsNode_modulesSassLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuVueVueTypeStyleIndex0LangScss(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(
    /*! ../../../../../../node_modules/css-loader/lib/css-base.js */
    "./node_modules/css-loader/lib/css-base.js")(false); // imports
    // module

    exports.push([module.i, "/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n.menu-item .nav-link {\n  color: inherit;\n}\n.menu-item .disabled-item span {\n  color: #e2e2e2;\n}\n[dir] .h-nav-menu-dd {\n  background-color: #fff;\n}\n\n/* DARK THEME */\n[dir] .theme-dark .h-nav-menu-dd {\n  background-color: #262c49;\n  box-shadow: 0px 0px 30px #0f163a !important;\n}", ""]); // exports

    /***/
  },

  /***/
  "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&lang=scss&":
  /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&lang=scss& ***!
    \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderLibIndexJsNode_modulesSassLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuGroupVueVueTypeStyleIndex0LangScss(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(
    /*! ../../../../../../node_modules/css-loader/lib/css-base.js */
    "./node_modules/css-loader/lib/css-base.js")(false); // imports
    // module

    exports.push([module.i, "/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n[dir] .menu-item > .h-nav-group-open .group-header {\n  background-color: #f6f6f6;\n}\n[dir] .theme-dark .menu-item > .h-nav-group-open .group-header {\n  background-color: #262c49;\n}\n[dir] .header-children .h-nav-group-active {\n  background-color: #f6f6f6;\n}\n[dir] .theme-dark .header-children .h-nav-group-active {\n  background-color: #10163a;\n}\n.h-nav-group-items {\n  min-width: 215px;\n  z-index: 1;\n}\n[dir] .h-nav-group-items {\n  border-radius: 4px;\n}\n[dir=ltr] .h-nav-group-items.dd-left {\n  right: 0rem;\n}\n[dir=rtl] .h-nav-group-items.dd-left {\n  left: 0rem;\n}\n.h-nav-group-items::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n[dir] .h-nav-group-items::-webkit-scrollbar-thumb {\n  background: #dae1e7;\n  border-radius: 20px;\n}\n[dir] .theme-dark .h-nav-group-items::-webkit-scrollbar-thumb {\n  background: #10163a;\n}\n[dir] .h-nav-group-items::-webkit-scrollbar-track {\n  background: #f8f8f8;\n  border-radius: 30px;\n}\n[dir] .theme-dark .h-nav-group-items::-webkit-scrollbar-track {\n  background: #262c49;\n}\n.nav-header .group-header {\n  transition: all 0.2s ease;\n}\n[dir] .nav-header .group-header {\n  padding: 0.75rem 1.5rem;\n}\n[dir=ltr] .nav-header .group-header:hover {\n  transform: translateX(5px);\n}\n[dir=rtl] .nav-header .group-header:hover {\n  transform: translateX(-5px);\n}\n[dir] .menu-item > .h-nav-group .group-header {\n  border-radius: 4px;\n  padding: 0.5rem 1.5rem;\n}\n.menu-item > .h-nav-group-active .group-header {\n  color: #fff;\n}\n[dir] .menu-item > .h-nav-group-active .group-header {\n  box-shadow: 0px 0px 6px 1px rgba(var(--vs-primary), 0.6);\n}\n[dir=ltr] .menu-item > .h-nav-group-active .group-header {\n  background: linear-gradient(118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7)) !important;\n}\n[dir=rtl] .menu-item > .h-nav-group-active .group-header {\n  background: linear-gradient(-118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7)) !important;\n}", ""]); // exports

    /***/
  },

  /***/
  "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&lang=scss&":
  /*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&lang=scss& ***!
    \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderLibIndexJsNode_modulesSassLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuHeaderVueVueTypeStyleIndex0LangScss(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(
    /*! ../../../../../../node_modules/css-loader/lib/css-base.js */
    "./node_modules/css-loader/lib/css-base.js")(false); // imports
    // module

    exports.push([module.i, "/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n[dir] .header-active {\n  box-shadow: 0px 0px 6px 1px rgba(var(--vs-primary), 0.6);\n}\n[dir] .header-label {\n  border-radius: 4px;\n}\n[dir] .header-open {\n  background-color: #f6f6f6;\n}\n.header-children {\n  min-width: 215px;\n  top: 100%;\n  z-index: 1;\n}\n[dir] .header-children {\n  border-radius: 4px;\n}\n[dir=ltr] .header-children.dd-right {\n  right: 1rem;\n}\n[dir=rtl] .header-children.dd-right {\n  left: 1rem;\n}\n[dir] .theme-dark .header-open {\n  background-color: #262c49;\n}", ""]); // exports

    /***/
  },

  /***/
  "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss&":
  /*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss& ***!
    \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderLibIndexJsNode_modulesSassLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuItemVueVueTypeStyleIndex0LangScss(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(
    /*! ../../../../../../node_modules/css-loader/lib/css-base.js */
    "./node_modules/css-loader/lib/css-base.js")(false); // imports
    // module

    exports.push([module.i, "/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n[dir] .menu-item li .h-nav-menu-item a {\n  padding: 0.75rem 1.5rem;\n}\n.menu-item li .h-nav-menu-item > * {\n  transition: 0.25s ease-in-out;\n}\n[dir=ltr] .menu-item li .h-nav-menu-item > *:hover {\n  transform: translateX(5px);\n}\n[dir=rtl] .menu-item li .h-nav-menu-item > *:hover {\n  transform: translateX(-5px);\n}\n[dir] .menu-item li .h-nav-menu-item.h-nav-active-item {\n  background-color: #f6f6f6;\n}\n[dir] .theme-dark .menu-item li .h-nav-menu-item.h-nav-active-item {\n  background-color: #10163a;\n}\n[dir] .menu-link .h-nav-menu-item:hover .nav-link {\n  background: #f6f6f6;\n}\n[dir] .theme-dark .menu-link .h-nav-menu-item:hover .nav-link {\n  background: #262c49;\n}\n.menu-link .h-nav-menu-item.h-nav-active-item a {\n  color: #fff;\n}\n[dir] .menu-link .h-nav-menu-item.h-nav-active-item a {\n  box-shadow: 0px 0px 6px 1px rgba(var(--vs-primary), 0.6);\n}\n[dir=ltr] .menu-link .h-nav-menu-item.h-nav-active-item a {\n  background: linear-gradient(118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7)) !important;\n}\n[dir=rtl] .menu-link .h-nav-menu-item.h-nav-active-item a {\n  background: linear-gradient(-118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7)) !important;\n}\n[dir] .menu-link .h-nav-menu-item a {\n  border-radius: 4px;\n  padding: 0.5rem 1.5rem;\n}", ""]); // exports

    /***/
  },

  /***/
  "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
  /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
    \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderLibIndexJsNode_modulesSassLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuVueVueTypeStyleIndex0LangScss(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(
    /*! ../../../../../../node_modules/css-loader/lib/css-base.js */
    "./node_modules/css-loader/lib/css-base.js")(false); // imports
    // module

    exports.push([module.i, "/*=========================================================================================\n  File Name: verticalNavMenu.scss\n  Description: Styles for v-nav-menu component. Imported in VerticalNavMenu.vue file\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n.v-nav-menu-swipe-area {\n  position: fixed;\n  height: calc(var(--vh, 1vh) * 100);\n  width: 30px;\n  z-index: 1;\n  top: 0;\n}\n[dir] .v-nav-menu-swipe-area {\n  background: transparent;\n}\n[dir=ltr] .v-nav-menu-swipe-area {\n  left: 0;\n}\n[dir=rtl] .v-nav-menu-swipe-area {\n  right: 0;\n}\n.v-nav-menu {\n  white-space: nowrap;\n}\n.v-nav-menu .vs-sidebar--background {\n  z-index: 51000;\n}\n.v-nav-menu .vs-sidebar {\n  z-index: 51000;\n  position: fixed;\n}\n[dir] .v-nav-menu .vs-sidebar .vs-sidebar--items {\n  padding: 0;\n}\n.v-nav-menu .vs-sidebar.vs-sidebar-reduce {\n  max-width: 80px;\n}\n[dir] .v-nav-menu .vs-sidebar.vs-sidebar-reduce:hover {\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08) !important;\n}\n.v-nav-menu .vs-sidebar.vs-sidebar-reduce:hover:not(.vs-sidebar-reduceNotRebound):not(.vs-sidebar-reduceNotHoverExpand) .vs-sidebar-group .group-header i {\n  display: block;\n}\n.v-nav-menu .vs-sidebar.vs-sidebar-reduce .vs-sidebar-group .group-header i {\n  display: none;\n}\n.v-nav-menu .header-sidebar {\n  width: 100%;\n}\n[dir=ltr] .v-nav-menu .header-sidebar {\n  padding: 20px 19px 16px 23px;\n}\n[dir=rtl] .v-nav-menu .header-sidebar {\n  padding: 20px 23px 16px 19px;\n}\n[dir] .v-nav-menu .header-sidebar .logo img {\n  padding: 4px 0;\n}\n.v-nav-menu .header-sidebar .feather-icon svg {\n  color: #7367F0;\n}\n.v-nav-menu .shadow-bottom {\n  position: absolute;\n  z-index: 2;\n  height: 60px;\n  width: 100%;\n  pointer-events: none;\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n}\n[dir] .v-nav-menu .shadow-bottom {\n  margin-top: -1.3rem;\n  background: linear-gradient(white 41%, rgba(255, 255, 255, 0.11) 95%, rgba(255, 255, 255, 0) 100%);\n}\n.v-nav-menu .scroll-area-v-nav-menu {\n  position: relative;\n  width: 100%;\n  height: calc(var(--vh, 1vh) * 100 - 69px);\n}\n[dir] .v-nav-menu .scroll-area-v-nav-menu {\n  margin: auto;\n}\n.v-nav-menu .scroll-area-v-nav-menu:not(.ps) {\n  overflow-y: auto;\n}\n[dir] .v-nav-menu .scroll-area-v-nav-menu > .vs-sidebar-group {\n  padding: 0 15px;\n}\n[dir] .v-nav-menu .scroll-area-v-nav-menu > .vs-sidebar--item {\n  padding: 0 15px;\n}\n.v-nav-menu .navigation-header {\n  font-size: 0.9rem;\n  display: block;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #999;\n}\n[dir] .v-nav-menu .navigation-header {\n  margin-bottom: 0.8rem;\n}\n[dir=ltr] .v-nav-menu .navigation-header {\n  margin-left: 2.2rem;\n}\n[dir=rtl] .v-nav-menu .navigation-header {\n  margin-right: 2.2rem;\n}\n[dir] .v-nav-menu .navigation-header:not(:first-child) {\n  margin-top: 2rem;\n}\n.v-nav-menu .feather-icon {\n  color: #565656;\n}\n[dir=ltr] .v-nav-menu .feather-icon {\n  margin-right: 14px;\n}\n[dir=rtl] .v-nav-menu .feather-icon {\n  margin-left: 14px;\n}\n.v-nav-menu .feather-icon .feather {\n  width: 20px;\n  height: 20px;\n}\n[dir] .v-nav-menu .feather-icon .feather {\n  margin: 1px 0;\n}\n.v-nav-menu .con-vs-chip {\n  min-height: 20px;\n  min-width: 20px;\n}\n[dir] .v-nav-menu .con-vs-chip {\n  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.1);\n}\n.v-nav-menu .con-vs-chip .vs-chip--text {\n  color: #fff;\n  font-size: 0.8rem;\n}\n.v-nav-menu .vs-sidebar--item {\n  transition: none;\n  overflow: visible !important;\n}\n.v-nav-menu .vs-sidebar--item:hover a {\n  color: inherit;\n}\n[dir=ltr] .v-nav-menu .vs-sidebar--item:hover a > * {\n  transform: translateX(5px);\n}\n[dir=rtl] .v-nav-menu .vs-sidebar--item:hover a > * {\n  transform: translateX(-5px);\n}\n.v-nav-menu .vs-sidebar--item.vs-sidebar-item-active {\n  font-weight: 400;\n  z-index: 1;\n  position: relative;\n}\n[dir] .v-nav-menu .vs-sidebar--item.vs-sidebar-item-active {\n  border: none !important;\n}\n.v-nav-menu .vs-sidebar--item a {\n  font-size: 1rem;\n  transition: none;\n  opacity: unset;\n  color: #626262;\n}\n[dir] .v-nav-menu .vs-sidebar--item a {\n  border-radius: 4px;\n  padding: 10px 15px;\n}\n.v-nav-menu .vs-sidebar--item a > * {\n  transition: transform 0.25s ease;\n}\n.v-nav-menu .vs-sidebar--item a span {\n  font-size: 15px;\n}\n.v-nav-menu .vs-sidebar--item.disabled-item a span {\n  color: #e2e2e2;\n}\n.theme-dark .v-nav-menu .vs-sidebar--item.disabled-item a {\n  opacity: 0.3;\n}\n[dir] .v-nav-menu .vs-sidebar--item .router-link-active {\n  box-shadow: 0px 0px 10px 1px rgba(var(--vs-primary), 0.7);\n}\n[dir=ltr] .v-nav-menu .vs-sidebar--item .router-link-active {\n  background: linear-gradient(118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7));\n}\n[dir=rtl] .v-nav-menu .vs-sidebar--item .router-link-active {\n  background: linear-gradient(-118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7));\n}\n.v-nav-menu .vs-sidebar--item .router-link-active .feather-icon {\n  color: #fff;\n}\n.v-nav-menu .vs-sidebar--item .router-link-active span {\n  color: #fff;\n}\n#sidebar-demo .vs-sidebar {\n  z-index: 52000;\n}\n#sidebar-demo .vs-sidebar-staticPosition {\n  z-index: 10000;\n}\n#sidebar-demo #parentx-demo-7 .parentx:not(.show-custom-sidebar) .vs-sidebar {\n  display: none;\n  z-index: 1 !important;\n}", ""]); // exports

    /***/
  },

  /***/
  "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&lang=scss&":
  /*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&lang=scss& ***!
    \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderLibIndexJsNode_modulesSassLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuGroupVueVueTypeStyleIndex0LangScss(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(
    /*! ../../../../../../node_modules/css-loader/lib/css-base.js */
    "./node_modules/css-loader/lib/css-base.js")(false); // imports
    // module

    exports.push([module.i, "/*=========================================================================================\n  File Name: verticalNavMenuGroup.scss\n  Description: Styles for v-nav-menu component. Imported in VerticalNavMenuGroup.vue file\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vs-sidebar-group {\n  overflow: hidden;\n}\n.vs-sidebar-group .group-header {\n  transition: all 0.5s ease;\n  font-size: 15px;\n}\n[dir] .vs-sidebar-group .group-header {\n  padding: 10px 15px;\n  cursor: pointer;\n}\n.vs-sidebar-group .group-header .feather-grp-header-arrow {\n  position: absolute !important;\n  top: 12px;\n  transition: all 0.2s ease-out;\n  display: inline-block;\n}\n[dir] .vs-sidebar-group .group-header .feather-grp-header-arrow {\n  transform: rotate(0deg);\n}\n[dir=ltr] .vs-sidebar-group .group-header .feather-grp-header-arrow {\n  right: 8px;\n}\n[dir=rtl] .vs-sidebar-group .group-header .feather-grp-header-arrow {\n  left: 8px;\n}\n[dir=ltr] .vs-sidebar-group .group-header .feather-grp-header-arrow.rotate90 {\n  transform: rotate(90deg);\n}\n[dir=rtl] .vs-sidebar-group .group-header .feather-grp-header-arrow.rotate90 {\n  transform: rotate(-90deg);\n}\n.vs-sidebar-group .group-header > * {\n  transition: all 0.25s ease;\n}\n[dir=ltr] .vs-sidebar-group .group-header:hover > * {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs-sidebar-group .group-header:hover > * {\n  transform: translateX(-5px);\n}\n[dir] .vs-sidebar-group .group-header .con-vs-chip {\n  margin-bottom: 0;\n}\n.vs-sidebar-group .vs-icon {\n  font-size: 1.5rem;\n}\n[dir] .vs-sidebar-group:hover > .group-header {\n  transform: unset;\n}\n[dir=ltr] .vs-sidebar-group .vs-sidebar-group .group-header {\n  padding-left: 20px;\n}\n[dir=rtl] .vs-sidebar-group .vs-sidebar-group .group-header {\n  padding-right: 20px;\n}\n[dir] .vs-sidebar-group.vs-sidebar-group-open > .group-header, [dir] .vs-sidebar-group.vs-sidebar-group-active > .group-header {\n  background: #f6f6f6;\n  border-radius: 6px;\n}\n[dir=ltr] .vs-sidebar-group.vs-sidebar-group-open > ul, [dir=ltr] .vs-sidebar-group.vs-sidebar-group-active > ul {\n  padding-left: 0 !important;\n}\n[dir=rtl] .vs-sidebar-group.vs-sidebar-group-open > ul, [dir=rtl] .vs-sidebar-group.vs-sidebar-group-active > ul {\n  padding-right: 0 !important;\n}\n[dir] .vs-sidebar-group.vs-sidebar-group-open > .group-header {\n  cursor: pointer;\n  margin-bottom: 7px;\n}\n[dir=ltr] .vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items {\n  padding-left: 0;\n}\n[dir=rtl] .vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items {\n  padding-right: 0;\n}\n[dir=ltr] .vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items .vs-sidebar--item span {\n  padding-left: 0 0 0 2rem;\n}\n[dir=rtl] .vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items .vs-sidebar--item span {\n  padding-right: 0 0 0 2rem;\n}\n[dir] .vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items .vs-sidebar--item:last-child {\n  border-bottom: 0px;\n}\n.vs-sidebar-group.vs-sidebar-group-open .vs-sidebar-group {\n  overflow: visible;\n}\n.vs-sidebar-group .vs-sidebar-group-items {\n  opacity: 0;\n}\n[dir=ltr] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item a {\n  padding: 10px 15px 10px 20px;\n}\n[dir=rtl] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item a {\n  padding: 10px 20px 10px 15px;\n}\n[dir=ltr] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item a .feather-icon {\n  margin-right: 20px;\n}\n[dir=rtl] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item a .feather-icon {\n  margin-left: 20px;\n}\n[dir] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item:last-child a {\n  margin-bottom: 0;\n}\n[dir] .vs-sidebar-group .vs-sidebar-group-items li:last-child {\n  padding-bottom: 7px;\n}\n[dir=ltr] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar-group span .feather-icon {\n  margin-right: 20px;\n}\n[dir=rtl] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar-group span .feather-icon {\n  margin-left: 20px;\n}\n[dir=ltr] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar-group .feather-icon {\n  margin-right: 0px;\n}\n[dir=rtl] .vs-sidebar-group .vs-sidebar-group-items .vs-sidebar-group .feather-icon {\n  margin-left: 0px;\n}\n.vs-sidebar-group.disabled-item span {\n  color: #e2e2e2;\n}", ""]); // exports

    /***/
  },

  /***/
  "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&":
  /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
    \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderIndexJsNode_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderLibIndexJsNode_modulesSassLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcComponentsVxAutoSuggestVxAutoSuggestVueVueTypeStyleIndex0LangScss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& */
    "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&");

    if (typeof content === 'string') content = [[module.i, content, '']];
    var transform;
    var insertInto;
    var options = {
      "hmr": true
    };
    options.transform = transform;
    options.insertInto = undefined;

    var update = __webpack_require__(
    /*! ../../../../../node_modules/style-loader/lib/addStyles.js */
    "./node_modules/style-loader/lib/addStyles.js")(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {}
    /***/

  },

  /***/
  "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss&":
  /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss& ***!
    \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderIndexJsNode_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderLibIndexJsNode_modulesSassLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsCustomizerTheCustomizerVueVueTypeStyleIndex0LangScss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheCustomizer.vue?vue&type=style&index=0&lang=scss& */
    "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss&");

    if (typeof content === 'string') content = [[module.i, content, '']];
    var transform;
    var insertInto;
    var options = {
      "hmr": true
    };
    options.transform = transform;
    options.insertInto = undefined;

    var update = __webpack_require__(
    /*! ../../../../../../node_modules/style-loader/lib/addStyles.js */
    "./node_modules/style-loader/lib/addStyles.js")(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {}
    /***/

  },

  /***/
  "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&":
  /*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
    \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderIndexJsNode_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderLibIndexJsNode_modulesSassLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuVueVueTypeStyleIndex0LangScss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& */
    "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&");

    if (typeof content === 'string') content = [[module.i, content, '']];
    var transform;
    var insertInto;
    var options = {
      "hmr": true
    };
    options.transform = transform;
    options.insertInto = undefined;

    var update = __webpack_require__(
    /*! ../../../../../../node_modules/style-loader/lib/addStyles.js */
    "./node_modules/style-loader/lib/addStyles.js")(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {}
    /***/

  },

  /***/
  "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&lang=scss&":
  /*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&lang=scss& ***!
    \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderIndexJsNode_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderLibIndexJsNode_modulesSassLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuGroupVueVueTypeStyleIndex0LangScss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuGroup.vue?vue&type=style&index=0&lang=scss& */
    "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&lang=scss&");

    if (typeof content === 'string') content = [[module.i, content, '']];
    var transform;
    var insertInto;
    var options = {
      "hmr": true
    };
    options.transform = transform;
    options.insertInto = undefined;

    var update = __webpack_require__(
    /*! ../../../../../../node_modules/style-loader/lib/addStyles.js */
    "./node_modules/style-loader/lib/addStyles.js")(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {}
    /***/

  },

  /***/
  "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&lang=scss&":
  /*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&lang=scss& ***!
    \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderIndexJsNode_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderLibIndexJsNode_modulesSassLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuHeaderVueVueTypeStyleIndex0LangScss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuHeader.vue?vue&type=style&index=0&lang=scss& */
    "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&lang=scss&");

    if (typeof content === 'string') content = [[module.i, content, '']];
    var transform;
    var insertInto;
    var options = {
      "hmr": true
    };
    options.transform = transform;
    options.insertInto = undefined;

    var update = __webpack_require__(
    /*! ../../../../../../node_modules/style-loader/lib/addStyles.js */
    "./node_modules/style-loader/lib/addStyles.js")(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {}
    /***/

  },

  /***/
  "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss&":
  /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss& ***!
    \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderIndexJsNode_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderLibIndexJsNode_modulesSassLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuItemVueVueTypeStyleIndex0LangScss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss& */
    "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss&");

    if (typeof content === 'string') content = [[module.i, content, '']];
    var transform;
    var insertInto;
    var options = {
      "hmr": true
    };
    options.transform = transform;
    options.insertInto = undefined;

    var update = __webpack_require__(
    /*! ../../../../../../node_modules/style-loader/lib/addStyles.js */
    "./node_modules/style-loader/lib/addStyles.js")(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {}
    /***/

  },

  /***/
  "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
  /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
    \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderIndexJsNode_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderLibIndexJsNode_modulesSassLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuVueVueTypeStyleIndex0LangScss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */
    "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");

    if (typeof content === 'string') content = [[module.i, content, '']];
    var transform;
    var insertInto;
    var options = {
      "hmr": true
    };
    options.transform = transform;
    options.insertInto = undefined;

    var update = __webpack_require__(
    /*! ../../../../../../node_modules/style-loader/lib/addStyles.js */
    "./node_modules/style-loader/lib/addStyles.js")(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {}
    /***/

  },

  /***/
  "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&lang=scss&":
  /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&lang=scss& ***!
    \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderIndexJsNode_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderLibIndexJsNode_modulesSassLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuGroupVueVueTypeStyleIndex0LangScss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuGroup.vue?vue&type=style&index=0&lang=scss& */
    "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&lang=scss&");

    if (typeof content === 'string') content = [[module.i, content, '']];
    var transform;
    var insertInto;
    var options = {
      "hmr": true
    };
    options.transform = transform;
    options.insertInto = undefined;

    var update = __webpack_require__(
    /*! ../../../../../../node_modules/style-loader/lib/addStyles.js */
    "./node_modules/style-loader/lib/addStyles.js")(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {}
    /***/

  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&":
  /*!************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25& ***!
    \************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcComponentsVxAutoSuggestVxAutoSuggestVueVueTypeTemplateId3b23de25(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", {
        staticClass: "vx-auto-suggest"
      }, [_c("div", {
        staticClass: "flex items-center relative"
      }, [_c("vs-input", {
        ref: "input",
        staticClass: "z-50",
        "class": _vm.inputClassses,
        attrs: {
          placeholder: _vm.placeholder,
          "icon-pack": "feather",
          icon: "icon-search",
          "icon-no-border": ""
        },
        on: {
          keyup: [function ($event) {
            if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
              return null;
            }

            return _vm.escPressed($event);
          }, function ($event) {
            if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
              return null;
            }

            return _vm.increaseIndex(false);
          }, function ($event) {
            if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
              return null;
            }

            return _vm.increaseIndex($event);
          }, function ($event) {
            if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
              return null;
            }

            return _vm.suggestionSelected($event);
          }],
          focus: _vm.updateInputFocus,
          blur: function blur($event) {
            return _vm.updateInputFocus(false);
          }
        },
        model: {
          value: _vm.searchQuery,
          callback: function callback($$v) {
            _vm.searchQuery = $$v;
          },
          expression: "searchQuery"
        }
      })], 1), _vm._v(" "), _c("ul", {
        ref: "scrollContainer",
        staticClass: "auto-suggest-suggestions-list z-50 rounded-lg mt-2 shadow-lg overflow-x-hidden",
        "class": {
          hidden: !_vm.inputFocused
        },
        attrs: {
          tabindex: "-1"
        },
        on: {
          mouseenter: function mouseenter($event) {
            _vm.insideSuggestions = true;
          },
          mouseleave: function mouseleave($event) {
            _vm.insideSuggestions = false;
          },
          focus: _vm.updateInputFocus,
          blur: function blur($event) {
            return _vm.updateInputFocus(false);
          }
        }
      }, _vm._l(_vm.filteredData, function (suggestion_list, grp_name, grp_index) {
        return _c("li", {
          key: grp_index,
          ref: "grp_list",
          refInFor: true,
          staticClass: "auto-suggest__suggestion-group-container"
        }, [!_vm.hideGroupTitle ? _c("p", {
          staticClass: "auto-suggest__suggestion-group-title pt-3 pb-1 px-4"
        }, [_vm._t("group", null, {
          group_name: grp_name
        })], 2) : _vm._e(), _vm._v(" "), _c("ul", [_vm._l(suggestion_list, function (suggestion, index) {
          return _c("li", {
            key: index,
            staticClass: "auto-suggest__suggestion-group__suggestion py-3 px-4 cursor-pointer",
            "class": {
              "vx-auto-suggest__current-selected": _vm.currentSelected == grp_index + "." + index
            },
            on: {
              mouseenter: function mouseenter($event) {
                _vm.currentSelected = grp_index + "." + index;
              },
              click: _vm.suggestionSelected
            }
          }, [_vm._t(grp_name, null, {
            suggestion: suggestion
          })], 2);
        }), _vm._v(" "), !suggestion_list.length ? _c("li", {
          staticClass: "auto-suggest__suggestion-group__suggestion py-3 px-4 no-results"
        }, [_vm._t("noResult", [_c("p", [_vm._v("No Results Found.")])], {
          group_name: grp_name
        })], 2) : _vm._e()], 2)]);
      }), 0)]);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5&":
  /*!*******************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5& ***!
    \*******************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsLogoVueVueTypeTemplateId212d79e5(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("svg", {
        attrs: {
          id: "Layer_1",
          "data-name": "Layer 1",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 49.4 70"
        }
      }, [_c("path", {
        staticClass: "cls-1",
        attrs: {
          d: "M.42,70.29C2.69,64.1,5.06,58,7.1,51.68a1.81,1.81,0,0,1,.1-.27l.91.17c.11-.67.23-1.31.32-2,0-.27.14-.38.43-.37H26.43l.25,0a1.79,1.79,0,0,1-.3,1.35,1.48,1.48,0,0,0-.06,1.83,1.86,1.86,0,0,0,2,.62,1.46,1.46,0,0,0,1.22-1.41,2.26,2.26,0,0,0-.32-1,1.88,1.88,0,0,1-.29-1.37H43.67a7.44,7.44,0,0,1-.23,1A13.71,13.71,0,0,1,42.68,52a3.43,3.43,0,0,1-3.34,1.68A20.16,20.16,0,0,1,34.77,53l-2.32-.46a.9.9,0,0,0-1.11.59c-.34.9-.66,1.8-.93,2.72s-.23,1,.72,1.17a.4.4,0,0,1,.38.47c0,1.65,0,3.29,0,4.94a1.25,1.25,0,0,0,.21.65c1.67,2.34,3.36,4.66,5,7,.05.08.1.16.14.24Z",
          transform: "translate(0.06 -0.29)"
        }
      }), _vm._v(" "), _c("path", {
        staticClass: "cls-1",
        attrs: {
          d: "M49.33,36.47c-1.11.45-2.21.9-3.33,1.32a.78.78,0,0,0-.54.52c-.16.46-.32.92-.46,1.38A.46.46,0,0,0,45,40a10.18,10.18,0,0,0,.45,1.35,1,1,0,0,1-.23,1.22c-.17.18-.36.34-.54.51.62.68.67,1.16.15,1.68a5.1,5.1,0,0,1-.77.62.75.75,0,0,0-.4.77c0,.39,0,.79,0,1.21h-15c-.51,0-.51,0-.51.53s0,1,0,1.5a2.69,2.69,0,0,0,.48,1.6,1,1,0,0,1-.12,1.38,1.24,1.24,0,0,1-1.56,0,1,1,0,0,1-.09-1.39,2.46,2.46,0,0,0,.45-1.48c0-.53,0-1.06,0-1.59s0-.54-.52-.54H23.1V36.44l.55,0H41.3c.58,0,.58,0,.57-.59s0-.9,0-1.35a3,3,0,0,0-.54-2,1,1,0,0,1,.19-1.29,1.26,1.26,0,0,1,1.54,0,1,1,0,0,1,.19,1.28,2.82,2.82,0,0,0-.53,1.86q0,.81,0,1.62c0,.33.09.43.42.43,2,0,4,0,6,0h.2ZM41.06,44.9c.49,0,1,0,1.43,0,.27,0,.35-.1.35-.35,0-.84,0-1.69,0-2.53,0-.25-.09-.35-.35-.34q-1.92,0-3.84,0c-.26,0-.34.1-.33.35,0,.84,0,1.69,0,2.53,0,.26.09.34.35.34.47,0,.94,0,1.43,0v.5l-.22,0c-.26,0-.38.07-.38.36s.19.32.41.31c.48,0,1,0,1.43,0,.21,0,.34,0,.34-.3s0-.39-.32-.37l-.3,0Z",
          transform: "translate(0.06 -0.29)"
        }
      }), _vm._v(" "), _c("path", {
        staticClass: "cls-1",
        attrs: {
          d: "M31.5,23.56c0,.73,0,1.39,0,2.05,0,.25.08.36.34.35.71,0,1.42.05,2.13,0a3.21,3.21,0,0,0,1.24-.45,1,1,0,0,1,1.47.19,1.24,1.24,0,0,1-.19,1.61,1,1,0,0,1-1.18,0,2.59,2.59,0,0,0-1.7-.51,14.58,14.58,0,0,1-1.62,0c-.38,0-.5.09-.5.48,0,2.25,0,4.51,0,6.76,0,.34-.08.45-.44.45H17.43c-.45,0-.53-.07-.42-.5a3,3,0,0,1,.37-.86,1.47,1.47,0,0,0-.21-2,1.89,1.89,0,0,0-2.43,0,1.49,1.49,0,0,0-.25,2.06,4.8,4.8,0,0,1,.39,1.06c0,.2-.05.32-.28.31s-.64,0-.95,0-.35-.08-.33-.32a2.62,2.62,0,0,0,0-.28V23.59l.43,0H27.44c.59,0,.59,0,.59-.57s0-1.19,0-1.78a2.79,2.79,0,0,0-.52-1.83.9.9,0,0,1,0-1.13,1.16,1.16,0,0,1,1.32-.35.93.93,0,0,1,.66,1,.86.86,0,0,1-.15.44,3.15,3.15,0,0,0-.55,2.13c0,.57,0,1.15,0,1.73,0,.32.11.41.41.41.62,0,1.24,0,1.86,0Zm-1.43,4.06a1,1,0,0,0,0-.28c-.12-.23-.27-.44-.39-.67-.47-.94-.64-1-1.56-.86-.28-.94-.76-1.36-1.47-1.29s-1.1.6-1.14,1.53l-.88.6c-.8-.26-1.45.18-1.32,1Z",
          transform: "translate(0.06 -0.29)"
        }
      }), _vm._v(" "), _c("path", {
        staticClass: "cls-1",
        attrs: {
          d: "M13.32,10.71H28.7c.52,0,.52,0,.52-.52,0-.69,0-1.37,0-2.06a2.57,2.57,0,0,0-.46-1.49,1,1,0,0,1,.1-1.41,1.27,1.27,0,0,1,1.63.06,1,1,0,0,1,.09,1.24,2.75,2.75,0,0,0-.51,1.75c0,.79,0,1.57,0,2.41h1.41v10.9c-.58,0-1.18,0-1.78,0-.05,0-.14-.12-.14-.19a2.3,2.3,0,0,1,.33-1.63,1.46,1.46,0,0,0,.18-1.6,1.65,1.65,0,0,0-1.49-.91,1.83,1.83,0,0,0-1.23.31A1.48,1.48,0,0,0,27,19.72a2.22,2.22,0,0,1,.37,1.61c0,.1-.17.2-.28.27s-.16,0-.24,0h-13c-.51,0-.52,0-.52-.53V10.71ZM15.21,16l.72.68-.09.41c.36.1.7.2,1,.28a.35.35,0,0,0,.29-.12A.94.94,0,0,1,18.5,17l.92-.94-.35-.3c.3-.3,0-.9.61-1,0,0,.05-.12,0-.18-.08-.3-.15-.61-.25-.91,0-.07-.18-.17-.21-.15-.26.16-.34-.06-.47-.19s-.31-.29-.47-.43l.14-.38a6.09,6.09,0,0,0-.75-.26c-.24,0-.59-.27-.64.25,0,0-.11.06-.17.08l-.79.21v-.1c-.15,0-.35-.11-.44,0a9.88,9.88,0,0,0-.81.78c.55.45,0,.83.11,1.23l-.46.1c.08.34.14.65.23,1S15,16.14,15.21,16Z",
          transform: "translate(0.06 -0.29)"
        }
      }), _vm._v(" "), _c("path", {
        staticClass: "cls-1",
        attrs: {
          d: "M41.61,8.76H30.71A2.51,2.51,0,0,1,31,6.94a1.45,1.45,0,0,0,.1-1.8,1.8,1.8,0,0,0-1.86-.7,1.52,1.52,0,0,0-1.34,1.31,1.56,1.56,0,0,0,.21,1,2.78,2.78,0,0,1,.42,2H13.35c0-.14,0-.27,0-.4,0-1.82,0-3.64,0-5.46a.47.47,0,0,1,.27-.5,21.08,21.08,0,0,1,7.82-2A24.89,24.89,0,0,1,33.78,3a23,23,0,0,1,7.65,5.57Z",
          transform: "translate(0.06 -0.29)"
        }
      }), _vm._v(" "), _c("path", {
        staticClass: "cls-1",
        attrs: {
          d: "M3.22,36.43H8.08a1.53,1.53,0,0,1-.29,1.16,1.48,1.48,0,0,0-.09,1.8,1.87,1.87,0,0,0,2,.66,1.48,1.48,0,0,0,1.19-1.4,2.2,2.2,0,0,0-.31-1,1.83,1.83,0,0,1-.31-1.18l.47,0c1.43,0,2.87,0,4.31,0,.37,0,.49-.11.47-.47,0-.51,0-1,0-1.54a2.54,2.54,0,0,0-.47-1.56,1,1,0,0,1,.2-1.46,1.21,1.21,0,0,1,1.63.25.89.89,0,0,1,0,1.07,2.93,2.93,0,0,0-.53,1.94q0,.69,0,1.38c0,.3.09.39.38.39,1.29,0,2.59,0,3.88,0h.48V47.31c-.52,0-1,0-1.53,0-.08,0-.19-.17-.21-.27a4.39,4.39,0,0,1,0-.63,1.92,1.92,0,0,0-.66-1.81c.78-1.05.79-2,0-2.67a1.71,1.71,0,0,0-2.34,0c-.75.72-.73,1.61.1,2.65-.93.68-.68,1.71-.74,2.67h-7c0-.27,0-.55,0-.83,0-1-.06-1.92-.2-2.87A2.14,2.14,0,0,0,8,42.48a32.18,32.18,0,0,1-4.51-5.64C3.38,36.73,3.32,36.61,3.22,36.43Z",
          transform: "translate(0.06 -0.29)"
        }
      }), _vm._v(" "), _c("path", {
        staticClass: "cls-1",
        attrs: {
          d: "M8.33,23.56h3.06V24c0,3.34,0,6.68,0,10,0,.36-.1.49-.46.46s-.69,0-1,0-.31.08-.31.3a17.21,17.21,0,0,0,0,1.9,4.07,4.07,0,0,0,.49,1.26,1.11,1.11,0,0,1,0,1.19,1.25,1.25,0,0,1-1.29.4.94.94,0,0,1-.76-.89,1.33,1.33,0,0,1,.21-.7,2.75,2.75,0,0,0,.47-1.6c0-.6,0-1.2,0-1.86H2.54A.53.53,0,0,1,2,34.11a22.37,22.37,0,0,1-2-7.83c0-.87,0-1.76,0-2.7h7.5c0-.19,0-.32,0-.44,0-.72,0-1.43,0-2.14A2.44,2.44,0,0,0,7,19.52a1,1,0,0,1,.1-1.42,1.25,1.25,0,0,1,1.57,0,1,1,0,0,1,.08,1.39A2.57,2.57,0,0,0,8.33,21Z",
          transform: "translate(0.06 -0.29)"
        }
      }), _vm._v(" "), _c("path", {
        staticClass: "cls-1",
        attrs: {
          d: "M41.2,34.44H33.47v-7a1.63,1.63,0,0,1,1.38.28,1.52,1.52,0,0,0,2.22-.22A1.94,1.94,0,0,0,36.9,25,1.49,1.49,0,0,0,35,24.9a1.73,1.73,0,0,1-1.54.36v-1.7h2.11c0-.86,0-1.67,0-2.46a2.15,2.15,0,0,0-.4-.89,1,1,0,0,1,.12-1.35,1.24,1.24,0,0,1,1.6,0A1,1,0,0,1,37,20.21a2.69,2.69,0,0,0-.48,1.6c0,.56,0,1.13,0,1.74H45.6a4.62,4.62,0,0,1-.2.85,2.81,2.81,0,0,0,0,2,30.53,30.53,0,0,0,2.29,5.28c.42.83.89,1.65,1.33,2.47l.15.3-.31,0H43.73c-.32,0-.46-.11-.38-.41a4.33,4.33,0,0,1,.36-1.14,1.57,1.57,0,0,0,.06-1.81,1.91,1.91,0,0,0-2-.64,1.51,1.51,0,0,0-1.19,1.41,2.12,2.12,0,0,0,.33,1A2.21,2.21,0,0,1,41.2,34.44Z",
          transform: "translate(0.06 -0.29)"
        }
      }), _vm._v(" "), _c("path", {
        staticClass: "cls-1",
        attrs: {
          d: "M33.47,10.71h9.2a.63.63,0,0,1,.62.35,17.17,17.17,0,0,1,2.46,7.63c.06.95,0,1.9,0,2.89H37.19a1.13,1.13,0,0,1,.26-1,1.52,1.52,0,0,0-.34-2.27,1.89,1.89,0,0,0-2.54.47,1.44,1.44,0,0,0,.06,1.7A1.45,1.45,0,0,1,35,21.57h-1.5Zm9.28,9.5a2.51,2.51,0,0,0,.55,0c.17,0,.46-.13.46-.21a7.38,7.38,0,0,0,0-1.15c0-.1-.08-.22-.06-.3a2.34,2.34,0,0,1,.31-.8,1.25,1.25,0,0,0-.32-1.82,1.58,1.58,0,0,0-2.13.44,1.36,1.36,0,0,0,.05,1.3c.17.34.42.82.31,1.1-.37.91-.11,1.45.84,1.45Zm0,0c-.21.11-.5.18-.51.28a.39.39,0,0,0,.48.39c.19,0,.36-.24.53-.38Z",
          transform: "translate(0.06 -0.29)"
        }
      }), _vm._v(" "), _c("path", {
        staticClass: "cls-1",
        attrs: {
          d: "M11.36,21.6H9.23c-.08,0-.23-.12-.23-.18a2.12,2.12,0,0,1,.28-1.56,1.59,1.59,0,0,0,.06-1.94,1.91,1.91,0,0,0-2-.54,1.5,1.5,0,0,0-.8,2.38,2.32,2.32,0,0,1,.33,1.62c0,.08-.21.21-.32.22-.75,0-1.51,0-2.26,0H.41c-.11,0-.21,0-.43,0,.32-1.38.58-2.74,1-4.06a23,23,0,0,1,2.91-6.45.63.63,0,0,1,.62-.36c2.18,0,4.35,0,6.53,0,.27,0,.4,0,.4.36,0,3.42,0,6.83,0,10.25C11.38,21.39,11.37,21.46,11.36,21.6Z",
          transform: "translate(0.06 -0.29)"
        }
      }), _vm._v(" "), _c("path", {
        staticClass: "cls-1",
        attrs: {
          d: "M11.36,8.75H5.55a24.92,24.92,0,0,1,5.81-5.12Z",
          transform: "translate(0.06 -0.29)"
        }
      }), _vm._v(" "), _c("path", {
        staticClass: "cls-1",
        attrs: {
          d: "M42.8,20.22l.5.29c-.17.14-.34.34-.53.38a.39.39,0,0,1-.48-.39C42.3,20.4,42.59,20.33,42.8,20.22Z",
          transform: "translate(0.06 -0.29)"
        }
      }), _vm._v(" "), _c("path", {
        staticClass: "cls-1",
        attrs: {
          d: "M38.93,44.35V42.24H42.2v2.11Z",
          transform: "translate(0.06 -0.29)"
        }
      }), _vm._v(" "), _c("path", {
        staticClass: "cls-1",
        attrs: {
          d: "M15.55,14.74a1.6,1.6,0,0,1,1.59-1.58,1.6,1.6,0,1,1,0,3.2A1.61,1.61,0,0,1,15.55,14.74Z",
          transform: "translate(0.06 -0.29)"
        }
      }), _vm._v(" "), _c("path", {
        staticClass: "cls-1",
        attrs: {
          d: "M41.87,17a.84.84,0,0,1,.58-.84,1,1,0,0,1,1.07.26.83.83,0,0,1,0,.95c-.17.31-.28.64-.44,1-.07.12-.22.28-.33.28a.52.52,0,0,1-.35-.26c-.18-.33-.32-.68-.47-1A2.46,2.46,0,0,1,41.87,17Z",
          transform: "translate(0.06 -0.29)"
        }
      })]);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&functional=true&":
  /*!****************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&functional=true& ***!
    \****************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsTheFooterVueVueTypeTemplateId287afc22FunctionalTrue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render(_h, _vm) {
      var _c = _vm._c;
      return _c("footer", {
        staticClass: "the-footer flex-wrap justify-between",
        "class": _vm.classes
      }, [_c("span", [_vm._v("COPYRIGHT © " + _vm._s(new Date().getFullYear()) + " "), _c("a", {
        attrs: {
          href: "#",
          target: "_blank",
          rel: "nofollow"
        }
      }, [_vm._v("MIND FACTORY")]), _vm._v(", All rights Reserved")]), _vm._v(" "), _c("span", {
        staticClass: "md:flex hidden items-center"
      })]);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=547b72da&":
  /*!***************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=547b72da& ***!
    \***************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsCustomizerTheCustomizerVueVueTypeTemplateId547b72da(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", {
        attrs: {
          id: "theme-customizer"
        }
      }, [_c("vs-button", {
        staticClass: "customizer-btn",
        attrs: {
          color: "primary",
          type: "filled",
          "icon-pack": "feather",
          icon: "icon-settings"
        },
        on: {
          click: function click($event) {
            $event.stopPropagation();
            _vm.active = !_vm.active;
          }
        }
      }), _vm._v(" "), _c("vs-sidebar", {
        staticClass: "items-no-padding",
        attrs: {
          "click-not-close": "",
          "hidden-background": "",
          "position-right": ""
        },
        model: {
          value: _vm.active,
          callback: function callback($$v) {
            _vm.active = $$v;
          },
          expression: "active"
        }
      }, [_c("div", {
        staticClass: "h-full"
      }, [_c("div", {
        staticClass: "customizer-header mt-6 flex items-center justify-between px-6"
      }, [_c("div", [_c("h4", [_vm._v("THEME CUSTOMIZER")]), _vm._v(" "), _c("small", [_vm._v("Customize & Preview in Real Time")])]), _vm._v(" "), _c("feather-icon", {
        staticClass: "cursor-pointer",
        attrs: {
          icon: "XIcon"
        },
        on: {
          click: function click($event) {
            $event.stopPropagation();
            _vm.active = false;
          }
        }
      })], 1), _vm._v(" "), _c("vs-divider", {
        staticClass: "mb-0"
      }), _vm._v(" "), _c(_vm.scrollbarTag, {
        key: _vm.$vs.rtl,
        tag: "component",
        staticClass: "scroll-area--customizer pt-4 pb-6",
        attrs: {
          settings: _vm.settings
        }
      }, [_c("div", {
        staticClass: "px-6"
      }, [_c("div", {
        staticClass: "mt-4"
      }, [_c("h5", {
        staticClass: "mb-2"
      }, [_vm._v("Layout Type")]), _vm._v(" "), _c("div", [_c("vs-radio", {
        staticClass: "mr-4",
        attrs: {
          "vs-value": "vertical",
          "vs-name": "layout-type-vertical"
        },
        model: {
          value: _vm.layoutType,
          callback: function callback($$v) {
            _vm.layoutType = $$v;
          },
          expression: "layoutType"
        }
      }, [_vm._v("Vertical")]), _vm._v(" "), _c("vs-radio", {
        staticClass: "mr-4",
        attrs: {
          "vs-value": "horizontal",
          "vs-name": "layout-type-horizontal"
        },
        model: {
          value: _vm.layoutType,
          callback: function callback($$v) {
            _vm.layoutType = $$v;
          },
          expression: "layoutType"
        }
      }, [_vm._v("Horizontal")])], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", [_c("h5", {
        staticClass: "mb-4"
      }, [_vm._v("Theme Color")]), _vm._v(" "), _c("ul", {
        staticClass: "clearfix"
      }, [_vm._l(_vm.themeColors, function (color) {
        return _c("li", {
          key: color,
          staticClass: "w-10 cursor-pointer h-10 rounded-lg m-2 float-left",
          "class": {
            "shadow-outline": color == _vm.primaryColor
          },
          style: {
            backgroundColor: color
          },
          on: {
            click: function click($event) {
              return _vm.updatePrimaryColor(color);
            }
          }
        });
      }), _vm._v(" "), _c("li", {
        staticClass: "w-10 cursor-pointer h-10 rounded-lg m-2 float-left",
        "class": {
          "shadow-outline": _vm.customPrimaryColor == _vm.primaryColor
        },
        style: {
          backgroundColor: _vm.customPrimaryColor
        },
        on: {
          click: function click($event) {
            return _vm.updatePrimaryColor(_vm.customPrimaryColor);
          }
        }
      }), _vm._v(" "), _c("li", {
        staticClass: "float-left"
      }, [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.customPrimaryColor,
          expression: "customPrimaryColor"
        }],
        staticClass: "w-10 cursor-pointer h-10 rounded-lg m-2",
        attrs: {
          type: "color"
        },
        domProps: {
          value: _vm.customPrimaryColor
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) {
              return;
            }

            _vm.customPrimaryColor = $event.target.value;
          }
        }
      })])], 2)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
        staticClass: "mt-4"
      }, [_c("h5", {
        staticClass: "mb-2"
      }, [_vm._v("Theme Mode")]), _vm._v(" "), _c("div", [_c("vs-radio", {
        staticClass: "mr-4",
        attrs: {
          "vs-value": "light",
          "vs-name": "theme-mode-light"
        },
        model: {
          value: _vm.themeMode,
          callback: function callback($$v) {
            _vm.themeMode = $$v;
          },
          expression: "themeMode"
        }
      }, [_vm._v("Light")]), _vm._v(" "), _c("vs-radio", {
        staticClass: "mr-4",
        attrs: {
          "vs-value": "dark",
          "vs-name": "theme-mode-dark"
        },
        model: {
          value: _vm.themeMode,
          callback: function callback($$v) {
            _vm.themeMode = $$v;
          },
          expression: "themeMode"
        }
      }, [_vm._v("Dark")]), _vm._v(" "), _vm.layoutType === "vertical" ? _c("vs-radio", {
        attrs: {
          "vs-value": "semi-dark",
          "vs-name": "theme-mode-semi-dark"
        },
        model: {
          value: _vm.themeMode,
          callback: function callback($$v) {
            _vm.themeMode = $$v;
          },
          expression: "themeMode"
        }
      }, [_vm._v("Semi Dark")]) : _vm._e()], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _vm.layoutType === "vertical" ? [_c("div", {
        staticClass: "mt-4 flex justify-between"
      }, [_c("h5", [_vm._v("Collapse Sidebar")]), _vm._v(" "), _c("vs-switch", {
        model: {
          value: _vm.reduced_sidebar,
          callback: function callback($$v) {
            _vm.reduced_sidebar = $$v;
          },
          expression: "reduced_sidebar"
        }
      })], 1), _vm._v(" "), _c("vs-divider")] : _vm._e(), _vm._v(" "), _vm.layoutType === "vertical" ? [_c("div", {
        staticClass: "mt-4"
      }, [_c("h5", [_vm._v("Navbar Color")]), _vm._v(" "), _c("ul", {
        staticClass: "clearfix"
      }, [_c("li", {
        staticClass: "w-10 m-2 h-10 rounded-lg float-left cursor-pointer border border-solid d-theme-border-grey-light",
        "class": _vm.navbarColorOptionClasses(_vm.navbarColorInitial),
        style: {
          background: _vm.navbarColorInitial
        },
        on: {
          click: function click($event) {
            _vm.navbarColorLocal = _vm.navbarColorInitial;
          }
        }
      }), _vm._v(" "), _vm._l(_vm.themeColors, function (color) {
        return _c("li", {
          key: color,
          staticClass: "w-10 cursor-pointer h-10 rounded-lg m-2 float-left",
          "class": _vm.navbarColorOptionClasses(color),
          style: {
            backgroundColor: color
          },
          on: {
            click: function click($event) {
              _vm.navbarColorLocal = color;
            }
          }
        });
      }), _vm._v(" "), _c("li", {
        staticClass: "w-10 cursor-pointer h-10 rounded-lg m-2 float-left",
        "class": _vm.navbarColorOptionClasses(_vm.navbarColorOptionClasses),
        style: {
          backgroundColor: _vm.customNavbarColor
        },
        on: {
          click: function click($event) {
            _vm.navbarColorLocal = _vm.customNavbarColor;
          }
        }
      }), _vm._v(" "), _c("li", {
        staticClass: "float-left"
      }, [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.customNavbarColor,
          expression: "customNavbarColor"
        }],
        staticClass: "w-10 cursor-pointer h-10 rounded-lg m-2",
        attrs: {
          type: "color"
        },
        domProps: {
          value: _vm.customNavbarColor
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) {
              return;
            }

            _vm.customNavbarColor = $event.target.value;
          }
        }
      })])], 2)]), _vm._v(" "), _c("vs-divider")] : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "mt-4"
      }, [_c("h5", {
        staticClass: "mb-2"
      }, [_vm._v(_vm._s(_vm.layoutType === "vertical" || _vm.windowWidth < 1200 ? "Navbar" : "Nav Menu") + " Type")]), _vm._v(" "), _c("div", [_vm.layoutType === "vertical" || _vm.windowWidth < 1200 ? _c("vs-radio", {
        staticClass: "mr-4",
        attrs: {
          "vs-value": "hidden",
          "vs-name": "navbar-type-hidden"
        },
        model: {
          value: _vm.navbarTypeLocal,
          callback: function callback($$v) {
            _vm.navbarTypeLocal = $$v;
          },
          expression: "navbarTypeLocal"
        }
      }, [_vm._v("Hidden")]) : _vm._e(), _vm._v(" "), _c("vs-radio", {
        staticClass: "mr-4",
        attrs: {
          "vs-value": "static",
          "vs-name": "navbar-type-static"
        },
        model: {
          value: _vm.navbarTypeLocal,
          callback: function callback($$v) {
            _vm.navbarTypeLocal = $$v;
          },
          expression: "navbarTypeLocal"
        }
      }, [_vm._v("Static")]), _vm._v(" "), _c("vs-radio", {
        staticClass: "mr-4",
        attrs: {
          "vs-value": "sticky",
          "vs-name": "navbar-type-sticky"
        },
        model: {
          value: _vm.navbarTypeLocal,
          callback: function callback($$v) {
            _vm.navbarTypeLocal = $$v;
          },
          expression: "navbarTypeLocal"
        }
      }, [_vm._v("Sticky")]), _vm._v(" "), _c("vs-radio", {
        attrs: {
          "vs-value": "floating",
          "vs-name": "navbar-type-floating"
        },
        model: {
          value: _vm.navbarTypeLocal,
          callback: function callback($$v) {
            _vm.navbarTypeLocal = $$v;
          },
          expression: "navbarTypeLocal"
        }
      }, [_vm._v("Floating")])], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
        staticClass: "mt-4"
      }, [_c("h5", {
        staticClass: "mb-2"
      }, [_vm._v("Footer Type")]), _vm._v(" "), _c("div", [_c("vs-radio", {
        staticClass: "mr-4",
        attrs: {
          "vs-value": "hidden",
          "vs-name": "footer-type-hidden"
        },
        model: {
          value: _vm.footerTypeLocal,
          callback: function callback($$v) {
            _vm.footerTypeLocal = $$v;
          },
          expression: "footerTypeLocal"
        }
      }, [_vm._v("Hidden")]), _vm._v(" "), _c("vs-radio", {
        staticClass: "mr-4",
        attrs: {
          "vs-value": "static",
          "vs-name": "footer-type-static"
        },
        model: {
          value: _vm.footerTypeLocal,
          callback: function callback($$v) {
            _vm.footerTypeLocal = $$v;
          },
          expression: "footerTypeLocal"
        }
      }, [_vm._v("Static")]), _vm._v(" "), _c("vs-radio", {
        attrs: {
          "vs-value": "sticky",
          "vs-name": "footer-type-sticky"
        },
        model: {
          value: _vm.footerTypeLocal,
          callback: function callback($$v) {
            _vm.footerTypeLocal = $$v;
          },
          expression: "footerTypeLocal"
        }
      }, [_vm._v("Sticky")])], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
        staticClass: "mt-4 flex justify-between"
      }, [_c("h5", {
        staticClass: "mb-2"
      }, [_vm._v("RTL")]), _vm._v(" "), _c("vs-switch", {
        model: {
          value: _vm.rtl,
          callback: function callback($$v) {
            _vm.rtl = $$v;
          },
          expression: "rtl"
        }
      })], 1), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
        staticClass: "mt-4 flex justify-between"
      }, [_c("h5", {
        staticClass: "mb-2"
      }, [_vm._v("Hide Scroll To Top")]), _vm._v(" "), _c("vs-switch", {
        model: {
          value: _vm.hideScrollToTopLocal,
          callback: function callback($$v) {
            _vm.hideScrollToTopLocal = $$v;
          },
          expression: "hideScrollToTopLocal"
        }
      })], 1), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
        staticClass: "mt-4"
      }, [_c("h5", {
        staticClass: "mb-2"
      }, [_vm._v("Router Animation " + _vm._s(_vm.routerTransitionLocal))]), _vm._v(" "), _c("vs-select", {
        model: {
          value: _vm.routerTransitionLocal,
          callback: function callback($$v) {
            _vm.routerTransitionLocal = $$v;
          },
          expression: "routerTransitionLocal"
        }
      }, _vm._l(_vm.routerTransitionsList, function (item, index) {
        return _c("vs-select-item", {
          key: index,
          attrs: {
            value: item.value,
            text: item.text
          }
        });
      }), 1)], 1)], 2)])], 1)])], 1);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=24182a17&":
  /*!****************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=24182a17& ***!
    \****************************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuVueVueTypeTemplateId24182a17(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", {
        staticClass: "relative"
      }, [_c("div", {
        staticClass: "vx-navbar-wrapper nav-menu-wrapper"
      }, [_c("vs-navbar", {
        staticClass: "vx-navbar navbar-custom navbar-skelton",
        attrs: {
          color: _vm.navbarColor
        }
      }, [_c("ul", {
        staticClass: "menu-items flex flex-wrap w-full items-center"
      }, _vm._l(_vm.navMenuItems, function (item, index) {
        return _c("li", {
          key: index,
          staticClass: "menu-item",
          "class": {
            "mr-2": !(_vm.navMenuItems.length === index + 1)
          }
        }, [item.header ? [_c("h-nav-menu-header", {
          staticClass: "menu-header relative",
          attrs: {
            header: item
          }
        })] : item.submenu ? [_c("h-nav-menu-group", {
          key: "group-" + index,
          staticClass: "menu-group relative py-4",
          attrs: {
            bottom: "",
            group: item,
            groupIndex: index,
            open: _vm.checkGrpChildrenActive(item)
          }
        })] : item.url ? _c("div", {
          staticClass: "menu-link"
        }, [_c("h-nav-menu-item", {
          staticClass: "relative py-4 cursor-pointer",
          attrs: {
            to: item.slug !== "external" ? item.url : null,
            href: item.slug === "external" ? item.url : null,
            icon: item.icon,
            target: item.target,
            isDisabled: item.isDisabled,
            slug: item.slug
          }
        }, [_c("span", {
          staticClass: "truncate"
        }, [_vm._v(_vm._s(_vm.$t(item.i18n) || item.name))]), _vm._v(" "), item.tag ? _c("vs-chip", {
          attrs: {
            color: item.tagColor
          }
        }, [_vm._v(_vm._s(item.tag))]) : _vm._e()], 1)], 1) : _vm._e()], 2);
      }), 0)])], 1)]);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=template&id=3d04d158&":
  /*!*********************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=template&id=3d04d158& ***!
    \*********************************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuGroupVueVueTypeTemplateId3d04d158(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", {
        staticClass: "h-nav-group relative",
        "class": [{
          "h-nav-group-open": _vm.openItems
        }, {
          "h-nav-group-active": _vm.open
        }, {
          "disabled-item pointer-events-none": _vm.group.isDisabled
        }],
        on: {
          mouseover: _vm.mouseover,
          mouseleave: _vm.mouseout
        }
      }, [_c("div", {
        staticClass: "group-header w-full flex items-center"
      }, [_c("span", {
        staticClass: "flex items-center w-full"
      }, [_vm.group.icon || this.groupIndex > Math.floor(this.groupIndex) ? _c("feather-icon", {
        attrs: {
          icon: _vm.group.icon || "CircleIcon",
          svgClasses: _vm.iconClasses
        }
      }) : _vm._e(), _vm._v(" "), _c("span", {
        staticClass: "truncate mr-3 select-none"
      }, [_vm._v(_vm._s(_vm.$t(_vm.group.i18n) || _vm.group.name))])], 1), _vm._v(" "), _c("feather-icon", {
        "class": [{
          rotate90: _vm.openItems
        }, "feather-grp-header-arrow"],
        attrs: {
          icon: _vm.bottom ? "ChevronDownIcon" : _vm.$vs.rtl ? "ChevronLeftIcon" : "ChevronRightIcon",
          "svg-classes": "w-4 h-4"
        }
      })], 1), _vm._v(" "), _c("transition", {
        attrs: {
          name: "fade-bottom-2x"
        }
      }, [_c("ul", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: _vm.openItems,
          expression: "openItems"
        }],
        ref: "childDropdown",
        staticClass: "h-nav-group-items h-nav-menu-dd absolute shadow-drop py-2",
        style: _vm.styleItems
      }, _vm._l(_vm.group.submenu, function (groupItem, index) {
        return _c("li", {
          key: index
        }, [groupItem.submenu ? _c("h-nav-menu-group", {
          attrs: {
            group: groupItem,
            groupIndex: Number(_vm.groupIndex + "." + (index + 1)),
            open: _vm.isGroupActive(groupItem),
            openHover: _vm.openHover
          }
        }) : _c("h-nav-menu-item", {
          attrs: {
            "icon-small": "",
            index: _vm.groupIndex + "." + index,
            to: groupItem.slug !== "external" ? groupItem.url : null,
            href: groupItem.slug === "external" ? groupItem.url : null,
            icon: _vm.itemIcon,
            slug: groupItem.slug,
            target: groupItem.target
          }
        }, [_c("span", {
          staticClass: "truncate"
        }, [_vm._v(_vm._s(_vm.$t(groupItem.i18n) || groupItem.name))]), _vm._v(" "), groupItem.tag ? _c("vs-chip", {
          staticClass: "ml-auto",
          attrs: {
            color: groupItem.tagColor
          }
        }, [_vm._v(_vm._s(groupItem.tag))]) : _vm._e()], 1)], 1);
      }), 0)])], 1);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=template&id=e0ba01f8&":
  /*!**********************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=template&id=e0ba01f8& ***!
    \**********************************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuHeaderVueVueTypeTemplateIdE0ba01f8(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", {
        staticClass: "nav-header py-4",
        on: {
          mouseover: _vm.hovered,
          mouseleave: function mouseleave($event) {
            return _vm.hovered(false);
          },
          click: function click($event) {
            _vm.showChildren = !_vm.showChildren;
          }
        }
      }, [_c("div", {
        staticClass: "header-label flex items-center cursor-pointer relative px-5 py-2",
        "class": [{
          "text-white bg-primary-gradient header-active": _vm.isHeaderActive
        }, {
          "header-open": _vm.isHovered || _vm.showChildren
        }]
      }, [_c("feather-icon", {
        staticClass: "mr-3",
        attrs: {
          icon: _vm.header.icon,
          svgClasses: "h-5 w-5"
        }
      }), _vm._v(" "), _c("span", {
        staticClass: "whitespace-no-wrap"
      }, [_vm._v(_vm._s(_vm.$t(_vm.header.i18n) || _vm.header.header))]), _vm._v(" "), _c("feather-icon", {
        staticClass: "ml-1",
        attrs: {
          icon: "ChevronDownIcon",
          svgClasses: "h-4 w-4"
        }
      })], 1), _vm._v(" "), _c("transition", {
        attrs: {
          name: "fade-top-2x"
        }
      }, [_c("ul", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: _vm.showChildren,
          expression: "showChildren"
        }],
        ref: "headerDropdown",
        staticClass: "header-children h-nav-menu-dd shadow-drop text-intial absolute shadow-lg py-2",
        "class": {
          "dd-right": _vm.dropRight
        }
      }, _vm._l(_vm.header.items, function (item, index) {
        return _c("li", {
          key: item.name
        }, [!item.submenu ? [_c("h-nav-menu-item", {
          attrs: {
            to: item.slug != "external" ? item.url : "",
            href: item.slug == "external" ? item.url : "",
            icon: item.icon,
            target: item.target,
            isDisabled: item.isDisabled,
            slug: item.slug
          }
        }, [_c("span", {
          staticClass: "truncate"
        }, [_vm._v(_vm._s(_vm.$t(item.i18n) || item.name))]), _vm._v(" "), item.tag ? _c("vs-chip", {
          attrs: {
            color: item.tagColor
          }
        }, [_vm._v(_vm._s(item.tag))]) : _vm._e()], 1)] : [_c("h-nav-menu-group", {
          key: "group-" + index,
          attrs: {
            openHover: "",
            group: item,
            groupIndex: index,
            open: _vm.checkGrpChildrenActive(item)
          }
        })]], 2);
      }), 0)])], 1);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=template&id=1964704a&":
  /*!********************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=template&id=1964704a& ***!
    \********************************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuItemVueVueTypeTemplateId1964704a(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _vm.canSee ? _c("div", {
        staticClass: "h-nav-menu-item",
        "class": [{
          "h-nav-active-item text-primary font-medium": _vm.activeLink
        }, {
          "disabled-item pointer-events-none": _vm.isDisabled
        }]
      }, [_vm.to ? _c("router-link", {
        "class": [{
          "router-link-active": _vm.activeLink
        }, "nav-link flex items-center"],
        attrs: {
          exact: "",
          to: _vm.to,
          target: _vm.target
        }
      }, [!_vm.featherIcon ? _c("vs-icon", {
        attrs: {
          "icon-pack": _vm.iconPack,
          icon: _vm.icon
        }
      }) : _c("feather-icon", {
        "class": _vm.iconClasses,
        attrs: {
          icon: _vm.icon
        }
      }), _vm._v(" "), _vm._t("default")], 2) : _c("a", {
        staticClass: "nav-link flex items-center",
        attrs: {
          target: _vm.target,
          href: _vm.href
        }
      }, [!_vm.featherIcon ? _c("vs-icon", {
        attrs: {
          "icon-pack": _vm.iconPack,
          icon: _vm.icon
        }
      }) : _c("feather-icon", {
        "class": _vm.iconClasses,
        attrs: {
          icon: _vm.icon
        }
      }), _vm._v(" "), _vm._t("default")], 2)], 1) : _vm._e();
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=23f1c760&":
  /*!*****************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=23f1c760& ***!
    \*****************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsNavbarTheNavbarHorizontalVueVueTypeTemplateId23f1c760(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", {
        staticClass: "relative"
      }, [_c("div", {
        staticClass: "vx-navbar-wrapper navbar-full p-0"
      }, [_c("vs-navbar", {
        staticClass: "navbar-custom navbar-skelton",
        "class": _vm.navbarClasses,
        style: _vm.navbarStyle,
        attrs: {
          color: _vm.navbarColor
        }
      }, [_vm.windowWidth >= 992 ? _c("bookmarks", {
        attrs: {
          navbarColor: _vm.navbarColor
        }
      }) : _vm._e(), _vm._v(" "), _c("router-link", {
        staticClass: "vx-logo cursor-pointer mx-auto flex items-center",
        attrs: {
          tag: "div",
          to: "/"
        }
      }, [_c("logo", {
        staticClass: "w-10 mr-4 fill-current text-primary"
      }), _vm._v(" "), _c("span", {
        staticClass: "vx-logo-text text-primary"
      }, [_vm._v("Vuexy")])], 1), _vm._v(" "), _c("i18n"), _vm._v(" "), _c("search-bar"), _vm._v(" "), _c("cart-drop-down"), _vm._v(" "), _c("notification-drop-down"), _vm._v(" "), _c("profile-drop-down")], 1)], 1)]);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=2c25fa9c&":
  /*!***************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=2c25fa9c& ***!
    \***************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsNavbarTheNavbarVerticalVueVueTypeTemplateId2c25fa9c(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", {
        staticClass: "relative"
      }, [_c("div", {
        staticClass: "vx-navbar-wrapper",
        "class": _vm.classObj
      }, [_c("vs-navbar", {
        staticClass: "vx-navbar navbar-custom navbar-skelton",
        "class": _vm.textColor,
        attrs: {
          color: _vm.navbarColorLocal
        }
      }, [_c("feather-icon", {
        staticClass: "sm:inline-flex xl:hidden cursor-pointer p-2",
        attrs: {
          icon: "MenuIcon"
        },
        on: {
          click: function click($event) {
            $event.stopPropagation();
            return _vm.showSidebar($event);
          }
        }
      }), _vm._v(" "), _c("vs-button", {
        staticClass: "shadow-lg btn-back-to-top",
        attrs: {
          "icon-pack": "feather",
          icon: "icon-link",
          href: "/",
          target: "_blank"
        }
      }, [_vm._v(" " + _vm._s(_vm.$t("GoToTheWebSite")))]), _vm._v(" "), _c("vs-spacer"), _vm._v(" "), _c("profile-drop-down")], 1)], 1)]);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/Bookmarks.vue?vue&type=template&id=f0f3dace&":
  /*!******************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/components/Bookmarks.vue?vue&type=template&id=f0f3dace& ***!
    \******************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsNavbarComponentsBookmarksVueVueTypeTemplateIdF0f3dace(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", {
        staticClass: "navbar-bookmarks flex items-center"
      }, [_c("ul", {
        staticClass: "vx-navbar__starred-pages"
      }, [_c("draggable", {
        staticClass: "flex cursor-move",
        attrs: {
          group: {
            name: "pinList"
          }
        },
        model: {
          value: _vm.starredPagesLimited,
          callback: function callback($$v) {
            _vm.starredPagesLimited = $$v;
          },
          expression: "starredPagesLimited"
        }
      }, _vm._l(_vm.starredPagesLimited, function (page) {
        return _c("li", {
          key: page.url,
          staticClass: "starred-page"
        }, [_c("vx-tooltip", {
          attrs: {
            text: page.title,
            position: "bottom",
            delay: ".3s"
          }
        }, [_c("feather-icon", {
          staticClass: "p-2 cursor-pointer",
          attrs: {
            svgClasses: ["h-6 w-6 stroke-current", _vm.textColor],
            icon: page.icon
          },
          on: {
            click: function click($event) {
              _vm.$router.push(page.url)["catch"](function () {});
            }
          }
        })], 1)], 1);
      }), 0)], 1), _vm._v(" "), _vm.starredPagesMore.length ? _c("div", {
        staticClass: "vx-navbar__starred-pages--more-dropdown"
      }, [_c("vs-dropdown", {
        staticClass: "cursor-pointer",
        attrs: {
          "vs-custom-content": "",
          "vs-trigger-click": ""
        }
      }, [_c("feather-icon", {
        staticClass: "cursor-pointer p-2",
        attrs: {
          icon: "ChevronDownIcon",
          svgClasses: "h-4 w-4"
        }
      }), _vm._v(" "), _c("vs-dropdown-menu", [_c("ul", {
        staticClass: "vx-navbar__starred-pages-more--list"
      }, [_c("draggable", {
        staticClass: "cursor-move",
        attrs: {
          group: {
            name: "pinList"
          }
        },
        model: {
          value: _vm.starredPagesMore,
          callback: function callback($$v) {
            _vm.starredPagesMore = $$v;
          },
          expression: "starredPagesMore"
        }
      }, _vm._l(_vm.starredPagesMore, function (page) {
        return _c("li", {
          key: page.url,
          staticClass: "starred-page--more flex items-center cursor-pointer",
          on: {
            click: function click($event) {
              _vm.$router.push(page.url)["catch"](function () {});
            }
          }
        }, [_c("feather-icon", {
          staticClass: "ml-2 mr-1",
          attrs: {
            icon: page.icon,
            svgClasses: ["h-5 w-5 stroke-current", _vm.textColor]
          }
        }), _vm._v(" "), _c("span", {
          staticClass: "px-2 pt-2 pb-1"
        }, [_vm._v(_vm._s(page.title))])], 1);
      }), 0)], 1)])], 1)], 1) : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "bookmark-container"
      }, [_c("feather-icon", {
        staticClass: "cursor-pointer p-2",
        attrs: {
          icon: "StarIcon",
          svgClasses: ["stoke-current text-warning", _vm.textColor]
        },
        on: {
          click: function click($event) {
            $event.stopPropagation();
            _vm.showBookmarkPagesDropdown = !_vm.showBookmarkPagesDropdown;
          }
        }
      }), _vm._v(" "), _vm.showBookmarkPagesDropdown ? _c("div", {
        directives: [{
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.outside,
          expression: "outside"
        }],
        staticClass: "absolute bookmark-list w-1/3 xl:w-1/4 mt-4"
      }, [_c("vx-auto-suggest", {
        ref: "bookmarkAutoSuggest",
        attrs: {
          autoFocus: true,
          data: _vm.navbarSearchAndPinList,
          initalData: {
            pages: _vm.starredPagesLimited.concat(_vm.starredPagesMore)
          },
          searchLimit: 5,
          placeholder: "Explore Vuexy...",
          inputClassses: "w-full",
          "show-action": "",
          "show-pinned": "",
          hideGroupTitle: "",
          "background-overlay": ""
        },
        on: {
          input: _vm.hnd_search_query_update,
          selected: _vm.selected
        },
        scopedSlots: _vm._u([{
          key: "pages",
          fn: function fn(ref) {
            var suggestion = ref.suggestion;
            return [_c("div", {
              staticClass: "flex items-center justify-between"
            }, [_c("div", {
              staticClass: "flex items-end leading-none py-1"
            }, [_c("feather-icon", {
              staticClass: "mr-4",
              attrs: {
                icon: suggestion.icon,
                svgClasses: "h-5 w-5"
              }
            }), _vm._v(" "), _c("span", {
              staticClass: "mt-1"
            }, [_vm._v(_vm._s(suggestion.title))])], 1), _vm._v(" "), _c("feather-icon", {
              attrs: {
                icon: "StarIcon",
                svgClasses: [{
                  "text-warning": suggestion.is_bookmarked
                }, "h-5 w-5 stroke-current mt-1"]
              },
              on: {
                click: function click($event) {
                  $event.stopPropagation();
                  return _vm.actionClicked(suggestion);
                }
              }
            })], 1)];
          }
        }], null, false, 648118384)
      })], 1) : _vm._e()], 1)]);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/CartDropDown.vue?vue&type=template&id=1883e685&":
  /*!*********************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/components/CartDropDown.vue?vue&type=template&id=1883e685& ***!
    \*********************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsNavbarComponentsCartDropDownVueVueTypeTemplateId1883e685(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("vs-dropdown", {
        staticClass: "cursor-pointer",
        attrs: {
          "vs-custom-content": "",
          "vs-trigger-click": ""
        }
      }, [_c("feather-icon", {
        staticClass: "cursor-pointer ml-4 mr-6 mt-1",
        attrs: {
          icon: "ShoppingCartIcon",
          badge: _vm.cartItems.length
        }
      }), _vm._v(" "), _c("vs-dropdown-menu", {
        staticClass: "cart-dropdown vx-navbar-dropdown",
        "class": {
          "dropdown-custom": _vm.cartItems.length
        }
      }, [_vm.cartItems.length ? [_c("div", {
        staticClass: "notification-header text-center p-5 bg-primary text-white"
      }, [_c("h3", {
        staticClass: "text-white"
      }, [_vm._v(_vm._s(_vm.cartItems.length) + " Item"), _c("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: _vm.cartItems.length > 1,
          expression: "cartItems.length > 1"
        }]
      }, [_vm._v("s")])]), _vm._v(" "), _c("p", {
        staticClass: "opacity-75"
      }, [_vm._v("In Your Cart")])]), _vm._v(" "), _c(_vm.scrollbarTag, {
        key: _vm.$vs.rtl,
        ref: "mainSidebarPs",
        tag: "component",
        staticClass: "scroll-area--cart-items-dropdowm p-0 mb-10",
        attrs: {
          settings: _vm.settings
        }
      }, [_c("ul", {
        staticClass: "bordered-items"
      }, _vm._l(_vm.cartItems, function (item) {
        return _c("li", {
          key: item.objectID,
          staticClass: "vx-row no-gutter cart-item cursor-pointer",
          on: {
            click: function click($event) {
              _vm.$router.push({
                name: "ecommerce-item-detail-view",
                params: {
                  item_id: item.objectID
                }
              })["catch"](function () {});
            }
          }
        }, [_c("div", {
          staticClass: "vx-col w-1/5 item-img-container bg-white flex items-center justify-center"
        }, [_c("img", {
          staticClass: "cart-dropdown-item-img p-4",
          attrs: {
            src: item.image,
            alt: "item"
          }
        })]), _vm._v(" "), _c("div", {
          staticClass: "vx-col w-4/5 pr-4 pl-2 py-4 flex flex-col justify-center"
        }, [_c("span", {
          staticClass: "font-medium block cart-item-title truncate"
        }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("small", {
          staticClass: "truncate mb-2"
        }, [_vm._v(_vm._s(item.description))]), _vm._v(" "), _c("div", {
          staticClass: "flex items-center justify-between"
        }, [_c("span", {
          staticClass: "text-sm font-medium"
        }, [_vm._v(_vm._s(item.quantity) + " "), _c("small", [_vm._v("x")]), _vm._v(" $" + _vm._s(item.price))]), _vm._v(" "), _c("feather-icon", {
          staticClass: "hover:text-danger",
          attrs: {
            icon: "XIcon",
            svgClasses: "h-4 w-4 cursor-pointer text-danger"
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.removeItemFromCart(item);
            }
          }
        })], 1)])]);
      }), 0)]), _vm._v(" "), _c("div", {
        staticClass: " checkout-footer fixed bottom-0 rounded-b-lg text-primary font-semibold w-full p-2 text-center border border-b-0 border-l-0 border-r-0 border-solid d-theme-border-grey-light cursor-pointer",
        on: {
          click: function click($event) {
            _vm.$router.push("/apps/eCommerce/checkout")["catch"](function () {});
          }
        }
      }, [_c("span", {
        staticClass: "flex items-center justify-center"
      }, [_c("feather-icon", {
        attrs: {
          icon: "ShoppingCartIcon",
          svgClasses: "h-4 w-4"
        }
      }), _vm._v(" "), _c("span", {
        staticClass: "ml-2"
      }, [_vm._v("Checkout")])], 1)])] : [_c("p", {
        staticClass: "p-4"
      }, [_vm._v("Your Cart Is Empty.")])]], 2)], 1);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/I18n.vue?vue&type=template&id=7f0786b2&":
  /*!*************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/components/I18n.vue?vue&type=template&id=7f0786b2& ***!
    \*************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsNavbarComponentsI18nVueVueTypeTemplateId7f0786b2(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("vs-dropdown", {
        staticClass: "cursor-pointer",
        attrs: {
          "vs-custom-content": "",
          "vs-trigger-click": ""
        }
      }, [_c("span", {
        staticClass: "cursor-pointer flex items-center i18n-locale"
      }, [_c("img", {
        staticClass: "h-4 w-5",
        attrs: {
          src: _vm.i18n_locale_img,
          alt: _vm.$i18n.locale
        }
      }), _vm._v(" "), _c("span", {
        staticClass: "hidden sm:block ml-2"
      }, [_vm._v(_vm._s(_vm.getCurrentLocaleData.lang))])]), _vm._v(" "), _c("vs-dropdown-menu", {
        staticClass: "w-48 i18n-dropdown vx-navbar-dropdown"
      }, [_c("vs-dropdown-item", {
        on: {
          click: function click($event) {
            return _vm.updateLocale("en");
          }
        }
      }, [_c("img", {
        staticClass: "h-4 w-5 mr-1",
        attrs: {
          src: __webpack_require__(
          /*! @assets/images/flags/en.png */
          "./resources/assets/images/flags/en.png"),
          alt: "en"
        }
      }), _vm._v("  English")]), _vm._v(" "), _c("vs-dropdown-item", {
        on: {
          click: function click($event) {
            return _vm.updateLocale("fr");
          }
        }
      }, [_c("img", {
        staticClass: "h-4 w-5 mr-1",
        attrs: {
          src: __webpack_require__(
          /*! @assets/images/flags/fr.png */
          "./resources/assets/images/flags/fr.png"),
          alt: "fr"
        }
      }), _vm._v("  French")]), _vm._v(" "), _c("vs-dropdown-item", {
        on: {
          click: function click($event) {
            return _vm.updateLocale("de");
          }
        }
      }, [_c("img", {
        staticClass: "h-4 w-5 mr-1",
        attrs: {
          src: __webpack_require__(
          /*! @assets/images/flags/de.png */
          "./resources/assets/images/flags/de.png"),
          alt: "de"
        }
      }), _vm._v("  German")]), _vm._v(" "), _c("vs-dropdown-item", {
        on: {
          click: function click($event) {
            return _vm.updateLocale("pt");
          }
        }
      }, [_c("img", {
        staticClass: "h-4 w-5 mr-1",
        attrs: {
          src: __webpack_require__(
          /*! @assets/images/flags/pt.png */
          "./resources/assets/images/flags/pt.png"),
          alt: "pt"
        }
      }), _vm._v("  Portuguese")])], 1)], 1);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=template&id=4a684060&":
  /*!*****************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=template&id=4a684060& ***!
    \*****************************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsNavbarComponentsNotificationDropDownVueVueTypeTemplateId4a684060(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("vs-dropdown", {
        staticClass: "cursor-pointer",
        attrs: {
          "vs-custom-content": "",
          "vs-trigger-click": ""
        }
      }, [_c("feather-icon", {
        staticClass: "cursor-pointer mt-1 sm:mr-6 mr-2",
        attrs: {
          icon: "BellIcon",
          badge: _vm.unreadNotifications.length
        }
      }), _vm._v(" "), _c("vs-dropdown-menu", {
        staticClass: "notification-dropdown dropdown-custom vx-navbar-dropdown"
      }, [_c("div", {
        staticClass: "notification-top text-center p-5 bg-primary text-white"
      }, [_c("h3", {
        staticClass: "text-white"
      }, [_vm._v(_vm._s(_vm.unreadNotifications.length) + " New")]), _vm._v(" "), _c("p", {
        staticClass: "opacity-75"
      }, [_vm._v("App Notifications")])]), _vm._v(" "), _c(_vm.scrollbarTag, {
        key: _vm.$vs.rtl,
        ref: "mainSidebarPs",
        tag: "component",
        staticClass: "scroll-area--nofications-dropdown p-0 mb-10",
        attrs: {
          settings: _vm.settings
        }
      }, [_c("ul", {
        staticClass: "bordered-items"
      }, _vm._l(_vm.unreadNotifications, function (ntf) {
        return _c("li", {
          key: ntf.index,
          staticClass: "flex justify-between px-4 py-4 notification cursor-pointer"
        }, [_c("div", {
          staticClass: "flex items-start"
        }, [_c("feather-icon", {
          attrs: {
            icon: ntf.icon,
            svgClasses: ["text-" + ntf.category, "stroke-current mr-1 h-6 w-6"]
          }
        }), _vm._v(" "), _c("div", {
          staticClass: "mx-2"
        }, [_c("span", {
          staticClass: "font-medium block notification-title",
          "class": ["text-" + ntf.category]
        }, [_vm._v(_vm._s(ntf.title))]), _vm._v(" "), _c("small", [_vm._v(_vm._s(ntf.msg))])])], 1), _vm._v(" "), _c("small", {
          staticClass: "mt-1 whitespace-no-wrap"
        }, [_vm._v(_vm._s(_vm.elapsedTime(ntf.time)))])]);
      }), 0)]), _vm._v(" "), _c("div", {
        staticClass: "\n      checkout-footer\n      fixed\n      bottom-0\n      rounded-b-lg\n      text-primary\n      w-full\n      p-2\n      font-semibold\n      text-center\n      border\n      border-b-0\n      border-l-0\n      border-r-0\n      border-solid\n      d-theme-border-grey-light\n      cursor-pointer"
      }, [_c("span", [_vm._v("View All Notifications")])])], 1)], 1);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=template&id=3a9ac416&":
  /*!************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=template&id=3a9ac416& ***!
    \************************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsNavbarComponentsProfileDropDownVueVueTypeTemplateId3a9ac416(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _vm.activeUserInfo ? _c("div", {
        staticClass: "the-navbar__user-meta flex items-center"
      }, [_c("div", {
        staticClass: "text-right leading-tight hidden sm:block"
      }, [_c("p", {
        staticClass: "font-semibold"
      }, [_vm._v(_vm._s(_vm.activeUserInfo.name))]), _vm._v(" "), _c("small", [_vm._v(_vm._s(_vm.$t("Avaible")))])]), _vm._v(" "), _c("vs-dropdown", {
        staticClass: "cursor-pointer",
        attrs: {
          "vs-custom-content": "",
          "vs-trigger-click": ""
        }
      }, [_c("div", {
        staticClass: "con-img ml-3"
      }, [_vm.activeUserInfo.avatar ? _c("img", {
        key: "onlineImg",
        staticClass: "rounded-full shadow-md cursor-pointer block",
        attrs: {
          src: _vm.activeUserInfo.avatar,
          alt: "user-img",
          width: "40",
          height: "40"
        }
      }) : _vm._e()]), _vm._v(" "), _c("vs-dropdown-menu", {
        staticClass: "vx-navbar-dropdown"
      }, [_c("ul", {
        staticStyle: {
          "min-width": "9rem"
        }
      }, [_c("li", {
        staticClass: "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
        on: {
          click: function click($event) {
            _vm.$router.push("/panel/profile")["catch"](function () {});
          }
        }
      }, [_c("feather-icon", {
        attrs: {
          icon: "UserIcon",
          svgClasses: "w-4 h-4"
        }
      }), _vm._v(" "), _c("span", {
        staticClass: "ml-2"
      }, [_vm._v(_vm._s(_vm.$t("Profile")))])], 1), _vm._v(" "), _c("vs-divider", {
        staticClass: "m-1"
      }), _vm._v(" "), _c("li", {
        staticClass: "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
        on: {
          click: _vm.logout
        }
      }, [_c("feather-icon", {
        attrs: {
          icon: "LogOutIcon",
          svgClasses: "w-4 h-4"
        }
      }), _vm._v(" "), _c("span", {
        staticClass: "ml-2"
      }, [_vm._v("Çıkış Yap")])], 1)], 1)])], 1)], 1) : _vm._e();
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=template&id=aa08d232&":
  /*!******************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=template&id=aa08d232& ***!
    \******************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsNavbarComponentsSearchBarVueVueTypeTemplateIdAa08d232(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", {
        staticClass: "flex"
      }, [_c("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: _vm.showFullSearch,
          expression: "showFullSearch"
        }],
        staticClass: "search-full-container w-full h-full absolute left-0 top-0",
        "class": {
          flex: _vm.showFullSearch
        }
      }, [_c("vx-auto-suggest", {
        ref: "navbarSearch",
        staticClass: "w-full",
        attrs: {
          autoFocus: _vm.showFullSearch,
          data: _vm.navbarSearchAndPinList,
          search_key: "title",
          "background-overlay": "",
          inputClassses: "w-full vs-input-no-border vs-input-no-shdow-focus",
          icon: "SearchIcon",
          placeholder: "Explore Vuexy..."
        },
        on: {
          input: _vm.hnd_search_query_update,
          selected: _vm.selected,
          closeSearchbar: function closeSearchbar($event) {
            _vm.showFullSearch = false;
          }
        },
        scopedSlots: _vm._u([{
          key: "group",
          fn: function fn(ref) {
            var group_name = ref.group_name;
            return [_c("p", {
              staticClass: "font-semibold text-primary"
            }, [_vm._v(_vm._s(_vm._f("title")(group_name)))])];
          }
        }, {
          key: "pages",
          fn: function fn(ref) {
            var suggestion = ref.suggestion;
            return [_c("div", {
              staticClass: "flex items-end leading-none py-1"
            }, [_c("feather-icon", {
              staticClass: "mr-4",
              attrs: {
                icon: suggestion.icon,
                svgClasses: "h-5 w-5"
              }
            }), _vm._v(" "), _c("span", {
              staticClass: "mt-1"
            }, [_vm._v(_vm._s(suggestion.title))])], 1)];
          }
        }, {
          key: "files",
          fn: function fn(ref) {
            var suggestion = ref.suggestion;
            return [_c("div", {
              staticClass: "flex items-center justify-between"
            }, [_c("div", {
              staticClass: "flex items-center"
            }, [_c("div", {
              staticClass: "img-container w-8 mr-3 flex"
            }, [_c("img", {
              staticClass: "responsive",
              attrs: {
                src: _vm.get_ext_img(suggestion.file_ext),
                alt: suggestion.file_name
              }
            })]), _vm._v(" "), _c("div", {
              staticClass: "leading-none mt-1"
            }, [_c("p", {
              staticClass: "mb-1"
            }, [_vm._v(_vm._s(suggestion.file_name))]), _vm._v(" "), _c("small", [_vm._v("by " + _vm._s(suggestion.from))])])]), _vm._v(" "), _c("small", [_vm._v(_vm._s(suggestion.size))])])];
          }
        }, {
          key: "contacts",
          fn: function fn(ref) {
            var suggestion = ref.suggestion;
            return [_c("div", {
              staticClass: "flex items-center justify-between"
            }, [_c("div", {
              staticClass: "flex items-center"
            }, [_c("img", {
              staticClass: "w-8 h-8 mr-3 rounded-full",
              attrs: {
                src: suggestion.img,
                alt: suggestion.name
              }
            }), _vm._v(" "), _c("div", {
              staticClass: "leading-none mt-1"
            }, [_c("p", [_vm._v(_vm._s(suggestion.name))]), _vm._v(" "), _c("small", [_vm._v(_vm._s(suggestion.email))])])]), _vm._v(" "), _c("small", [_vm._v(_vm._s(suggestion.time))])])];
          }
        }, {
          key: "noResult",
          fn: function fn(ref) {
            var group_name = ref.group_name;
            return [_c("div", {
              staticClass: "flex items-center"
            }, [_c("feather-icon", {
              staticClass: "mr-4",
              attrs: {
                icon: "InfoIcon",
                svgClasses: "h-5 w-5"
              }
            }), _vm._v(" "), _c("span", [_vm._v("No results found.")])], 1)];
          }
        }])
      }), _vm._v(" "), _c("div", {
        staticClass: "absolute right-0 h-full z-50"
      }, [_c("feather-icon", {
        staticClass: "px-4 cursor-pointer h-full close-search-icon",
        attrs: {
          icon: "XIcon"
        },
        on: {
          click: function click($event) {
            _vm.showFullSearch = false;
          }
        }
      })], 1)], 1), _vm._v(" "), _c("feather-icon", {
        staticClass: "cursor-pointer navbar-fuzzy-search ml-4",
        attrs: {
          icon: "SearchIcon"
        },
        on: {
          click: function click($event) {
            _vm.showFullSearch = true;
          }
        }
      })], 1);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=667d9133&":
  /*!************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=667d9133& ***!
    \************************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuVueVueTypeTemplateId667d9133(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", {
        staticClass: "parentx"
      }, [_c("vs-sidebar", {
        directives: [{
          name: "hammer",
          rawName: "v-hammer:swipe",
          value: _vm.onMenuSwipe,
          expression: "onMenuSwipe",
          arg: "swipe"
        }],
        ref: "verticalNavMenu",
        staticClass: "v-nav-menu items-no-padding",
        attrs: {
          "default-index": "-1",
          "click-not-close": _vm.clickNotClose,
          "reduce-not-rebound": _vm.reduceNotRebound,
          parent: _vm.parent,
          hiddenBackground: _vm.clickNotClose,
          reduce: _vm.reduce
        },
        model: {
          value: _vm.isVerticalNavMenuActive,
          callback: function callback($$v) {
            _vm.isVerticalNavMenuActive = $$v;
          },
          expression: "isVerticalNavMenuActive"
        }
      }, [_c("div", {
        on: {
          mouseenter: _vm.mouseEnter,
          mouseleave: _vm.mouseLeave
        }
      }, [_c("div", {
        staticClass: "header-sidebar flex items-end justify-between",
        attrs: {
          slot: "header"
        },
        slot: "header"
      }, [_c("router-link", {
        staticClass: "vx-logo cursor-pointer flex items-center",
        attrs: {
          tag: "div",
          to: "/panel/dashboard"
        }
      }, [_c("logo", {
        staticClass: "w-10 mr-4 fill-current text-primary"
      }), _vm._v(" "), _vm.title ? _c("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: _vm.isMouseEnter || !_vm.reduce,
          expression: "isMouseEnter || !reduce"
        }],
        staticClass: "vx-logo-text text-primary"
      }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()], 1), _vm._v(" "), _c("div", [_vm.showCloseButton ? [_c("feather-icon", {
        staticClass: "m-0 cursor-pointer",
        attrs: {
          icon: "XIcon"
        },
        on: {
          click: function click($event) {
            return _vm.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", false);
          }
        }
      })] : !_vm.showCloseButton && !_vm.verticalNavMenuItemsMin ? [_c("feather-icon", {
        staticClass: "mr-0 cursor-pointer",
        attrs: {
          id: "btnVNavMenuMinToggler",
          icon: _vm.reduce ? "CircleIcon" : "DiscIcon",
          "svg-classes": "stroke-current text-primary"
        },
        on: {
          click: function click($event) {
            return _vm.toggleReduce(!_vm.reduce);
          }
        }
      })] : _vm._e()], 2)], 1), _vm._v(" "), _c("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: _vm.showShadowBottom,
          expression: "showShadowBottom"
        }],
        staticClass: "shadow-bottom"
      }), _vm._v(" "), _c(_vm.scrollbarTag, {
        key: _vm.$vs.rtl,
        ref: "verticalNavMenuPs",
        tag: "component",
        staticClass: "scroll-area-v-nav-menu pt-2",
        attrs: {
          settings: _vm.settings
        },
        on: {
          "ps-scroll-y": _vm.psSectionScroll,
          scroll: _vm.psSectionScroll
        }
      }, [_vm._l(_vm.menuItemsUpdated, function (item, index) {
        return [item.header && !_vm.verticalNavMenuItemsMin ? _c("span", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.canSee(item.rule),
            expression: "canSee(item.rule)"
          }],
          key: "header-" + index,
          staticClass: "navigation-header truncate"
        }, [_vm._v("\n            " + _vm._s(_vm.$t(item.i18n) || item.header) + "\n          ")]) : !item.header ? [!item.submenu ? _c("v-nav-menu-item", {
          key: "item-" + index,
          attrs: {
            index: index,
            to: item.slug !== "external" ? item.url : null,
            href: item.slug === "external" ? item.url : null,
            icon: item.icon,
            target: item.target,
            isDisabled: item.isDisabled,
            slug: item.slug
          }
        }, [_c("span", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !_vm.verticalNavMenuItemsMin,
            expression: "!verticalNavMenuItemsMin"
          }],
          staticClass: "truncate"
        }, [_vm._v(_vm._s(_vm.$t(item.i18n) || item.name))]), _vm._v(" "), item.tag && (_vm.isMouseEnter || !_vm.reduce) ? _c("vs-chip", {
          staticClass: "ml-auto",
          attrs: {
            color: item.tagColor
          }
        }, [_vm._v(_vm._s(item.tag))]) : _vm._e()], 1) : [_c("v-nav-menu-group", {
          key: "group-" + index,
          attrs: {
            openHover: _vm.openGroupHover,
            group: item,
            groupIndex: index,
            open: _vm.isGroupActive(item)
          }
        })]] : _vm._e()];
      })], 2)], 1)]), _vm._v(" "), !_vm.isVerticalNavMenuActive ? _c("div", {
        directives: [{
          name: "hammer",
          rawName: "v-hammer:swipe",
          value: _vm.onSwipeAreaSwipe,
          expression: "onSwipeAreaSwipe",
          arg: "swipe"
        }],
        staticClass: "v-nav-menu-swipe-area"
      }) : _vm._e()], 1);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=template&id=b6a10888&":
  /*!*****************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=template&id=b6a10888& ***!
    \*****************************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuGroupVueVueTypeTemplateIdB6a10888(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: _vm.canSee,
          expression: "canSee"
        }],
        staticClass: "vs-sidebar-group",
        "class": [{
          "vs-sidebar-group-open": _vm.openItems
        }, {
          "vs-sidebar-group-active": _vm.open
        }, {
          "disabled-item pointer-events-none": _vm.group.isDisabled
        }],
        on: {
          mouseover: _vm.mouseover,
          mouseout: _vm.mouseout
        }
      }, [_c("div", {
        staticClass: "group-header w-full",
        on: {
          click: _vm.clickGroup
        }
      }, [_c("span", {
        staticClass: "flex items-center w-full"
      }, [_vm.group.icon || this.groupIndex > Math.floor(this.groupIndex) ? _c("feather-icon", {
        attrs: {
          icon: _vm.group.icon || "CircleIcon",
          svgClasses: {
            "w-3 h-3": this.groupIndex % 1 != 0
          }
        }
      }) : _vm._e(), _vm._v(" "), _c("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !_vm.verticalNavMenuItemsMin,
          expression: "!verticalNavMenuItemsMin"
        }],
        staticClass: "truncate mr-3 select-none"
      }, [_vm._v(_vm._s(_vm.$t(_vm.group.i18n) || _vm.group.name))]), _vm._v(" "), _vm.group.tag && !_vm.verticalNavMenuItemsMin ? _c("vs-chip", {
        staticClass: "ml-auto mr-4",
        attrs: {
          color: _vm.group.tagColor
        }
      }, [_vm._v(_vm._s(_vm.group.tag))]) : _vm._e()], 1), _vm._v(" "), _c("feather-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !_vm.verticalNavMenuItemsMin,
          expression: "!verticalNavMenuItemsMin"
        }],
        "class": [{
          rotate90: _vm.openItems
        }, "feather-grp-header-arrow"],
        attrs: {
          icon: _vm.$vs.rtl ? "ChevronLeftIcon" : "ChevronRightIcon",
          "svg-classes": "w-4 h-4"
        }
      }), _vm._v(" "), _c("span", {
        staticClass: "vs-sidebar--tooltip"
      }, [_vm._v(_vm._s(_vm.$t(_vm.group.i18n) || _vm.group.name))])], 1), _vm._v(" "), _c("ul", {
        ref: "items",
        staticClass: "vs-sidebar-group-items",
        style: _vm.styleItems
      }, _vm._l(_vm.group.submenu, function (groupItem, index) {
        return _c("li", {
          key: index
        }, [groupItem.submenu ? _c("v-nav-menu-group", {
          attrs: {
            group: groupItem,
            groupIndex: Number(_vm.groupIndex + "." + (index + 1)),
            open: _vm.isGroupActive(groupItem),
            openHover: _vm.openHover
          }
        }) : _c("v-nav-menu-item", {
          attrs: {
            "icon-small": "",
            index: _vm.groupIndex + "." + index,
            to: groupItem.slug !== "external" ? groupItem.url : null,
            href: groupItem.slug === "external" ? groupItem.url : null,
            icon: _vm.itemIcon(_vm.groupIndex + "." + index),
            slug: groupItem.slug,
            target: groupItem.target
          }
        }, [_c("span", {
          staticClass: "truncate"
        }, [_vm._v(_vm._s(_vm.$t(groupItem.i18n) || groupItem.name))]), _vm._v(" "), groupItem.tag ? _c("vs-chip", {
          staticClass: "ml-auto",
          attrs: {
            color: groupItem.tagColor
          }
        }, [_vm._v(_vm._s(groupItem.tag))]) : _vm._e()], 1)], 1);
      }), 0)]);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=template&id=4e48e966&":
  /*!****************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=template&id=4e48e966& ***!
    \****************************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuItemVueVueTypeTemplateId4e48e966(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _vm.canSee ? _c("div", {
        staticClass: "vs-sidebar--item",
        "class": [{
          "vs-sidebar-item-active": _vm.activeLink
        }, {
          "disabled-item pointer-events-none": _vm.isDisabled
        }]
      }, [_vm.to ? _c("router-link", {
        "class": [{
          "router-link-active": _vm.activeLink
        }],
        attrs: {
          tabindex: "-1",
          exact: "",
          to: _vm.to,
          target: _vm.target
        }
      }, [!_vm.featherIcon ? _c("vs-icon", {
        attrs: {
          "icon-pack": _vm.iconPack,
          icon: _vm.icon
        }
      }) : _c("feather-icon", {
        "class": {
          "w-3 h-3": _vm.iconSmall
        },
        attrs: {
          icon: _vm.icon
        }
      }), _vm._v(" "), _vm._t("default")], 2) : _c("a", {
        attrs: {
          target: _vm.target,
          href: _vm.href,
          tabindex: "-1"
        }
      }, [!_vm.featherIcon ? _c("vs-icon", {
        attrs: {
          "icon-pack": _vm.iconPack,
          icon: _vm.icon
        }
      }) : _c("feather-icon", {
        "class": {
          "w-3 h-3": _vm.iconSmall
        },
        attrs: {
          icon: _vm.icon
        }
      }), _vm._v(" "), _vm._t("default")], 2)], 1) : _vm._e();
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&":
  /*!*************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70& ***!
    \*************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsSrcLayoutsMainMainVueVueTypeTemplateId22fa5a70(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", {
        staticClass: "layout--main",
        "class": [_vm.layoutTypeClass, _vm.navbarClasses, _vm.footerClasses, {
          "no-scroll": _vm.isAppPage
        }]
      }, [!_vm.disableThemeTour && _vm.windowWidth >= 1200 && _vm.mainLayoutType === "vertical" && _vm.verticalNavMenuWidth == "default" ? _c("vx-tour", {
        attrs: {
          steps: _vm.steps
        }
      }) : _vm._e(), _vm._v(" "), !_vm.disableCustomizer ? _c("the-customizer", {
        attrs: {
          footerType: _vm.footerType,
          hideScrollToTop: _vm.hideScrollToTop,
          navbarType: _vm.navbarType,
          navbarColor: _vm.navbarColor,
          routerTransition: _vm.routerTransition
        },
        on: {
          toggleHideScrollToTop: _vm.toggleHideScrollToTop,
          updateFooter: _vm.updateFooter,
          updateNavbar: _vm.updateNavbar,
          updateNavbarColor: _vm.updateNavbarColor,
          updateRouterTransition: _vm.updateRouterTransition
        }
      }) : _vm._e(), _vm._v(" "), _c("v-nav-menu", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: this.$acl.check("user") || this.$acl.check("admin"),
          expression: "this.$acl.check('user') || this.$acl.check('admin')"
        }],
        attrs: {
          navMenuItems: _vm.navMenuItems,
          title: "Mind Factory",
          parent: ".layout--main"
        }
      }), _vm._v(" "), _c("div", {
        "class": [_vm.contentAreaClass, {
          "show-overlay": _vm.bodyOverlay
        }],
        attrs: {
          id: "content-area"
        }
      }, [_c("div", {
        attrs: {
          id: "content-overlay"
        }
      }), _vm._v(" "), _vm.mainLayoutType === "horizontal" && _vm.windowWidth >= 1200 ? [_c("the-navbar-horizontal", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: this.$acl.check("lawyerOrCompany") || this.$acl.check("admin"),
          expression: "this.$acl.check('lawyerOrCompany') || this.$acl.check('admin')"
        }],
        "class": [{
          "text-white": _vm.isNavbarDark && !_vm.isThemeDark
        }, {
          "text-base": !_vm.isNavbarDark && _vm.isThemeDark
        }],
        attrs: {
          navbarType: _vm.navbarType
        }
      }), _vm._v(" "), _vm.navbarType === "static" ? _c("div", {
        staticStyle: {
          height: "62px"
        }
      }) : _vm._e(), _vm._v(" "), _c("h-nav-menu", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: this.$acl.check("lawyerOrCompany") || this.$acl.check("admin"),
          expression: "this.$acl.check('lawyerOrCompany') || this.$acl.check('admin')"
        }],
        "class": [{
          "text-white": _vm.isNavbarDark && !_vm.isThemeDark
        }, {
          "text-base": !_vm.isNavbarDark && _vm.isThemeDark
        }],
        attrs: {
          navMenuItems: _vm.navMenuItems
        }
      })] : [_c("the-navbar-vertical", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: this.$acl.check("lawyerOrCompany") || this.$acl.check("admin"),
          expression: "this.$acl.check('lawyerOrCompany') || this.$acl.check('admin')"
        }],
        "class": [{
          "text-white": _vm.isNavbarDark && !_vm.isThemeDark
        }, {
          "text-base": !_vm.isNavbarDark && _vm.isThemeDark
        }],
        attrs: {
          navbarColor: _vm.navbarColor
        }
      })], _vm._v(" "), _c("div", {
        staticClass: "content-wrapper"
      }, [_c("div", {
        staticClass: "router-view"
      }, [_c("div", {
        staticClass: "router-content"
      }, [_c("transition", {
        attrs: {
          name: _vm.routerTransition
        }
      }, [_vm.$route.meta.breadcrumb || _vm.$route.meta.pageTitle ? _c("div", {
        staticClass: "router-header flex flex-wrap items-center mb-6"
      }, [_c("div", {
        staticClass: "content-area__heading",
        "class": {
          "pr-4 border-0 md:border-r border-solid border-grey-light": _vm.$route.meta.breadcrumb
        }
      }, [_c("h2", {
        staticClass: "mb-1"
      }, [_vm._v(_vm._s(_vm.$t(_vm.routeTitle)))])]), _vm._v(" "), _vm.$route.meta.breadcrumb ? _c("vx-breadcrumb", {
        staticClass: "ml-4 md:block hidden"
      }) : _vm._e(), _vm._v(" "), _c("vs-dropdown", {
        staticClass: "ml-auto md:block hidden cursor-pointer",
        attrs: {
          "vs-trigger-click": ""
        }
      }, [_c("vs-button", {
        attrs: {
          radius: "",
          icon: "icon-settings",
          "icon-pack": "feather"
        }
      }), _vm._v(" "), _c("vs-dropdown-menu", {
        staticClass: "w-32"
      }, [_c("vs-dropdown-item", [_c("div", {
        staticClass: "flex items-center",
        on: {
          click: function click($event) {
            _vm.$router.push("/pages/profile")["catch"](function () {});
          }
        }
      }, [_c("feather-icon", {
        staticClass: "inline-block mr-2",
        attrs: {
          icon: "UserIcon",
          svgClasses: "w-4 h-4"
        }
      }), _vm._v(" "), _c("span", [_vm._v("Profile")])], 1)]), _vm._v(" "), _c("vs-dropdown-item", [_c("div", {
        staticClass: "flex items-center",
        on: {
          click: function click($event) {
            _vm.$router.push("/apps/todo")["catch"](function () {});
          }
        }
      }, [_c("feather-icon", {
        staticClass: "inline-block mr-2",
        attrs: {
          icon: "CheckSquareIcon",
          svgClasses: "w-4 h-4"
        }
      }), _vm._v(" "), _c("span", [_vm._v("Tasks")])], 1)]), _vm._v(" "), _c("vs-dropdown-item", [_c("div", {
        staticClass: "flex items-center",
        on: {
          click: function click($event) {
            _vm.$router.push("/apps/email")["catch"](function () {});
          }
        }
      }, [_c("feather-icon", {
        staticClass: "inline-block mr-2",
        attrs: {
          icon: "MailIcon",
          svgClasses: "w-4 h-4"
        }
      }), _vm._v(" "), _c("span", [_vm._v("Inbox")])], 1)])], 1)], 1)], 1) : _vm._e()]), _vm._v(" "), _c("div", {
        staticClass: "content-area__content"
      }, [!_vm.hideScrollToTop ? _c("back-to-top", {
        attrs: {
          bottom: "5%",
          right: _vm.$vs.rtl ? "calc(100% - 2.2rem - 38px)" : "30px",
          visibleoffset: "500"
        }
      }, [_c("vs-button", {
        staticClass: "shadow-lg btn-back-to-top",
        attrs: {
          "icon-pack": "feather",
          icon: "icon-arrow-up"
        }
      })], 1) : _vm._e(), _vm._v(" "), _c("transition", {
        attrs: {
          name: _vm.routerTransition,
          mode: "out-in"
        }
      }, [_c("router-view", {
        on: {
          changeRouteTitle: _vm.changeRouteTitle,
          setAppClasses: function setAppClasses(classesStr) {
            return _vm.$emit("setAppClasses", classesStr);
          },
          update_nav_menu: function update_nav_menu(fn) {
            return fn(_vm.navMenuItems);
          }
        }
      })], 1)], 1)], 1)])]), _vm._v(" "), _c("the-footer")], 2)], 1);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./resources/assets/images/file-icons/doc.png":
  /*!****************************************************!*\
    !*** ./resources/assets/images/file-icons/doc.png ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsImagesFileIconsDocPng(module, exports) {
    module.exports = "/images/doc.png?5d02571df6e9a0c50916330daa817747";
    /***/
  },

  /***/
  "./resources/assets/images/file-icons/jpg.png":
  /*!****************************************************!*\
    !*** ./resources/assets/images/file-icons/jpg.png ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsImagesFileIconsJpgPng(module, exports) {
    module.exports = "/images/jpg.png?af5b421a864fd53988f2e23b61b7bb84";
    /***/
  },

  /***/
  "./resources/assets/images/file-icons/pdf.png":
  /*!****************************************************!*\
    !*** ./resources/assets/images/file-icons/pdf.png ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsImagesFileIconsPdfPng(module, exports) {
    module.exports = "/images/pdf.png?63e0df68422fbcd4404f9b6efebdb3fc";
    /***/
  },

  /***/
  "./resources/assets/images/file-icons/xls.png":
  /*!****************************************************!*\
    !*** ./resources/assets/images/file-icons/xls.png ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsImagesFileIconsXlsPng(module, exports) {
    module.exports = "/images/xls.png?cec7307e53ac24771d151806ae183144";
    /***/
  },

  /***/
  "./resources/assets/images/flags/de.png":
  /*!**********************************************!*\
    !*** ./resources/assets/images/flags/de.png ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsImagesFlagsDePng(module, exports) {
    module.exports = "/images/de.png?5d9561246523cf6183928756fd605e25";
    /***/
  },

  /***/
  "./resources/assets/images/flags/en.png":
  /*!**********************************************!*\
    !*** ./resources/assets/images/flags/en.png ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsImagesFlagsEnPng(module, exports) {
    module.exports = "/images/en.png?83b065848d14d33c0d10a13e01862f34";
    /***/
  },

  /***/
  "./resources/assets/images/flags/fr.png":
  /*!**********************************************!*\
    !*** ./resources/assets/images/flags/fr.png ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsImagesFlagsFrPng(module, exports) {
    module.exports = "/images/fr.png?134bee9f9d794dc5c0922d1b9bdbb710";
    /***/
  },

  /***/
  "./resources/assets/images/flags/pt.png":
  /*!**********************************************!*\
    !*** ./resources/assets/images/flags/pt.png ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsImagesFlagsPtPng(module, exports) {
    module.exports = "/images/pt.png?eba93d33545c78cc67915d9be8323661";
    /***/
  },

  /***/
  "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue":
  /*!***********************************************************************!*\
    !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcComponentsVxAutoSuggestVxAutoSuggestVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./VxAutoSuggest.vue?vue&type=template&id=3b23de25& */
    "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&");
    /* harmony import */


    var _VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./VxAutoSuggest.vue?vue&type=script&lang=js& */
    "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& */
    "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&");
    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["render"], _VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&":
  /*!************************************************************************************************!*\
    !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js& ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcComponentsVxAutoSuggestVxAutoSuggestVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&":
  /*!*********************************************************************************************************!*\
    !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
    \*********************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesJsSrcComponentsVxAutoSuggestVxAutoSuggestVueVueTypeStyleIndex0LangScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& */
    "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&");
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) {
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/
  },

  /***/
  "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&":
  /*!******************************************************************************************************!*\
    !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25& ***!
    \******************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcComponentsVxAutoSuggestVxAutoSuggestVueVueTypeTemplateId3b23de25(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=template&id=3b23de25& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/Logo.vue":
  /*!******************************************************!*\
    !*** ./resources/js/src/layouts/components/Logo.vue ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsLogoVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Logo.vue?vue&type=template&id=212d79e5& */
    "./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5&");
    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

    var script = {};
    /* normalize component */

    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, _Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__["render"], _Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/Logo.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5&":
  /*!*************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5& ***!
    \*************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsLogoVueVueTypeTemplateId212d79e5(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=212d79e5& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/TheFooter.vue":
  /*!***********************************************************!*\
    !*** ./resources/js/src/layouts/components/TheFooter.vue ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsTheFooterVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _TheFooter_vue_vue_type_template_id_287afc22_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./TheFooter.vue?vue&type=template&id=287afc22&functional=true& */
    "./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&functional=true&");
    /* harmony import */


    var _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./TheFooter.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _TheFooter_vue_vue_type_template_id_287afc22_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"], _TheFooter_vue_vue_type_template_id_287afc22_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], true, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/TheFooter.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&":
  /*!************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js& ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsTheFooterVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&functional=true&":
  /*!**********************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&functional=true& ***!
    \**********************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsTheFooterVueVueTypeTemplateId287afc22FunctionalTrue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=template&id=287afc22&functional=true& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&functional=true&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/customizer/TheCustomizer.vue":
  /*!**************************************************************************!*\
    !*** ./resources/js/src/layouts/components/customizer/TheCustomizer.vue ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsCustomizerTheCustomizerVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _TheCustomizer_vue_vue_type_template_id_547b72da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./TheCustomizer.vue?vue&type=template&id=547b72da& */
    "./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=547b72da&");
    /* harmony import */


    var _TheCustomizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./TheCustomizer.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _TheCustomizer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./TheCustomizer.vue?vue&type=style&index=0&lang=scss& */
    "./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss&");
    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_TheCustomizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _TheCustomizer_vue_vue_type_template_id_547b72da___WEBPACK_IMPORTED_MODULE_0__["render"], _TheCustomizer_vue_vue_type_template_id_547b72da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/customizer/TheCustomizer.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js&":
  /*!***************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js& ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsCustomizerTheCustomizerVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheCustomizer.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss&":
  /*!************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss& ***!
    \************************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesJsSrcLayoutsComponentsCustomizerTheCustomizerVueVueTypeStyleIndex0LangScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheCustomizer.vue?vue&type=style&index=0&lang=scss& */
    "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss&");
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) {
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=547b72da&":
  /*!*********************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=547b72da& ***!
    \*********************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsCustomizerTheCustomizerVueVueTypeTemplateId547b72da(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_template_id_547b72da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheCustomizer.vue?vue&type=template&id=547b72da& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=547b72da&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_template_id_547b72da___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_template_id_547b72da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue":
  /*!***************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _HorizontalNavMenu_vue_vue_type_template_id_24182a17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./HorizontalNavMenu.vue?vue&type=template&id=24182a17& */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=24182a17&");
    /* harmony import */


    var _HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./HorizontalNavMenu.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&");
    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _HorizontalNavMenu_vue_vue_type_template_id_24182a17___WEBPACK_IMPORTED_MODULE_0__["render"], _HorizontalNavMenu_vue_vue_type_template_id_24182a17___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js&":
  /*!****************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js& ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&":
  /*!*************************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
    \*************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuVueVueTypeStyleIndex0LangScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& */
    "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&");
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) {
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=24182a17&":
  /*!**********************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=24182a17& ***!
    \**********************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuVueVueTypeTemplateId24182a17(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_template_id_24182a17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=template&id=24182a17& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=24182a17&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_template_id_24182a17___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_template_id_24182a17___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue":
  /*!********************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuGroupVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _HorizontalNavMenuGroup_vue_vue_type_template_id_3d04d158___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./HorizontalNavMenuGroup.vue?vue&type=template&id=3d04d158& */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=template&id=3d04d158&");
    /* harmony import */


    var _HorizontalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./HorizontalNavMenuGroup.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _HorizontalNavMenuGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./HorizontalNavMenuGroup.vue?vue&type=style&index=0&lang=scss& */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&lang=scss&");
    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_HorizontalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _HorizontalNavMenuGroup_vue_vue_type_template_id_3d04d158___WEBPACK_IMPORTED_MODULE_0__["render"], _HorizontalNavMenuGroup_vue_vue_type_template_id_3d04d158___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=script&lang=js&":
  /*!*********************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=script&lang=js& ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuGroupVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuGroup.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&lang=scss&":
  /*!******************************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&lang=scss& ***!
    \******************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuGroupVueVueTypeStyleIndex0LangScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuGroup.vue?vue&type=style&index=0&lang=scss& */
    "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=style&index=0&lang=scss&");
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) {
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=template&id=3d04d158&":
  /*!***************************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=template&id=3d04d158& ***!
    \***************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuGroupVueVueTypeTemplateId3d04d158(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_template_id_3d04d158___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuGroup.vue?vue&type=template&id=3d04d158& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue?vue&type=template&id=3d04d158&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_template_id_3d04d158___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_template_id_3d04d158___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue":
  /*!*********************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuHeaderVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _HorizontalNavMenuHeader_vue_vue_type_template_id_e0ba01f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./HorizontalNavMenuHeader.vue?vue&type=template&id=e0ba01f8& */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=template&id=e0ba01f8&");
    /* harmony import */


    var _HorizontalNavMenuHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./HorizontalNavMenuHeader.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _HorizontalNavMenuHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./HorizontalNavMenuHeader.vue?vue&type=style&index=0&lang=scss& */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&lang=scss&");
    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_HorizontalNavMenuHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _HorizontalNavMenuHeader_vue_vue_type_template_id_e0ba01f8___WEBPACK_IMPORTED_MODULE_0__["render"], _HorizontalNavMenuHeader_vue_vue_type_template_id_e0ba01f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=script&lang=js&":
  /*!**********************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=script&lang=js& ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuHeaderVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuHeader.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&lang=scss&":
  /*!*******************************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&lang=scss& ***!
    \*******************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuHeaderVueVueTypeStyleIndex0LangScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuHeader.vue?vue&type=style&index=0&lang=scss& */
    "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=style&index=0&lang=scss&");
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) {
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=template&id=e0ba01f8&":
  /*!****************************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=template&id=e0ba01f8& ***!
    \****************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuHeaderVueVueTypeTemplateIdE0ba01f8(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_template_id_e0ba01f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuHeader.vue?vue&type=template&id=e0ba01f8& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue?vue&type=template&id=e0ba01f8&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_template_id_e0ba01f8___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeader_vue_vue_type_template_id_e0ba01f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue":
  /*!*******************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuItemVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _HorizontalNavMenuItem_vue_vue_type_template_id_1964704a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./HorizontalNavMenuItem.vue?vue&type=template&id=1964704a& */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=template&id=1964704a&");
    /* harmony import */


    var _HorizontalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./HorizontalNavMenuItem.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _HorizontalNavMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss& */
    "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss&");
    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_HorizontalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _HorizontalNavMenuItem_vue_vue_type_template_id_1964704a___WEBPACK_IMPORTED_MODULE_0__["render"], _HorizontalNavMenuItem_vue_vue_type_template_id_1964704a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=script&lang=js&":
  /*!********************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=script&lang=js& ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuItemVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuItem.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss&":
  /*!*****************************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss& ***!
    \*****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuItemVueVueTypeStyleIndex0LangScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss& */
    "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss&");
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) {
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=template&id=1964704a&":
  /*!**************************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=template&id=1964704a& ***!
    \**************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsHorizontalNavMenuHorizontalNavMenuItemVueVueTypeTemplateId1964704a(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_template_id_1964704a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuItem.vue?vue&type=template&id=1964704a& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue?vue&type=template&id=1964704a&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_template_id_1964704a___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_template_id_1964704a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue":
  /*!****************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarTheNavbarHorizontalVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _TheNavbarHorizontal_vue_vue_type_template_id_23f1c760___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./TheNavbarHorizontal.vue?vue&type=template&id=23f1c760& */
    "./resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=23f1c760&");
    /* harmony import */


    var _TheNavbarHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./TheNavbarHorizontal.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TheNavbarHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _TheNavbarHorizontal_vue_vue_type_template_id_23f1c760___WEBPACK_IMPORTED_MODULE_0__["render"], _TheNavbarHorizontal_vue_vue_type_template_id_23f1c760___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js&":
  /*!*****************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js& ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarTheNavbarHorizontalVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbarHorizontal.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=23f1c760&":
  /*!***********************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=23f1c760& ***!
    \***********************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarTheNavbarHorizontalVueVueTypeTemplateId23f1c760(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarHorizontal_vue_vue_type_template_id_23f1c760___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbarHorizontal.vue?vue&type=template&id=23f1c760& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=23f1c760&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarHorizontal_vue_vue_type_template_id_23f1c760___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarHorizontal_vue_vue_type_template_id_23f1c760___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/navbar/TheNavbarVertical.vue":
  /*!**************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/TheNavbarVertical.vue ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarTheNavbarVerticalVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _TheNavbarVertical_vue_vue_type_template_id_2c25fa9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./TheNavbarVertical.vue?vue&type=template&id=2c25fa9c& */
    "./resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=2c25fa9c&");
    /* harmony import */


    var _TheNavbarVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./TheNavbarVertical.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TheNavbarVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _TheNavbarVertical_vue_vue_type_template_id_2c25fa9c___WEBPACK_IMPORTED_MODULE_0__["render"], _TheNavbarVertical_vue_vue_type_template_id_2c25fa9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/navbar/TheNavbarVertical.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js&":
  /*!***************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js& ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarTheNavbarVerticalVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbarVertical.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=2c25fa9c&":
  /*!*********************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=2c25fa9c& ***!
    \*********************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarTheNavbarVerticalVueVueTypeTemplateId2c25fa9c(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarVertical_vue_vue_type_template_id_2c25fa9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbarVertical.vue?vue&type=template&id=2c25fa9c& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=2c25fa9c&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarVertical_vue_vue_type_template_id_2c25fa9c___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarVertical_vue_vue_type_template_id_2c25fa9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/Bookmarks.vue":
  /*!*****************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/Bookmarks.vue ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsBookmarksVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _Bookmarks_vue_vue_type_template_id_f0f3dace___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Bookmarks.vue?vue&type=template&id=f0f3dace& */
    "./resources/js/src/layouts/components/navbar/components/Bookmarks.vue?vue&type=template&id=f0f3dace&");
    /* harmony import */


    var _Bookmarks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Bookmarks.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/navbar/components/Bookmarks.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Bookmarks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _Bookmarks_vue_vue_type_template_id_f0f3dace___WEBPACK_IMPORTED_MODULE_0__["render"], _Bookmarks_vue_vue_type_template_id_f0f3dace___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/navbar/components/Bookmarks.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/Bookmarks.vue?vue&type=script&lang=js&":
  /*!******************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/Bookmarks.vue?vue&type=script&lang=js& ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsBookmarksVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bookmarks.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/Bookmarks.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/Bookmarks.vue?vue&type=template&id=f0f3dace&":
  /*!************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/Bookmarks.vue?vue&type=template&id=f0f3dace& ***!
    \************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsBookmarksVueVueTypeTemplateIdF0f3dace(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_template_id_f0f3dace___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bookmarks.vue?vue&type=template&id=f0f3dace& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/Bookmarks.vue?vue&type=template&id=f0f3dace&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_template_id_f0f3dace___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_template_id_f0f3dace___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/CartDropDown.vue":
  /*!********************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/CartDropDown.vue ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsCartDropDownVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _CartDropDown_vue_vue_type_template_id_1883e685___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./CartDropDown.vue?vue&type=template&id=1883e685& */
    "./resources/js/src/layouts/components/navbar/components/CartDropDown.vue?vue&type=template&id=1883e685&");
    /* harmony import */


    var _CartDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./CartDropDown.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/navbar/components/CartDropDown.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CartDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _CartDropDown_vue_vue_type_template_id_1883e685___WEBPACK_IMPORTED_MODULE_0__["render"], _CartDropDown_vue_vue_type_template_id_1883e685___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/navbar/components/CartDropDown.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/CartDropDown.vue?vue&type=script&lang=js&":
  /*!*********************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/CartDropDown.vue?vue&type=script&lang=js& ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsCartDropDownVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartDropDown.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/CartDropDown.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/CartDropDown.vue?vue&type=template&id=1883e685&":
  /*!***************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/CartDropDown.vue?vue&type=template&id=1883e685& ***!
    \***************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsCartDropDownVueVueTypeTemplateId1883e685(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropDown_vue_vue_type_template_id_1883e685___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartDropDown.vue?vue&type=template&id=1883e685& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/CartDropDown.vue?vue&type=template&id=1883e685&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropDown_vue_vue_type_template_id_1883e685___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropDown_vue_vue_type_template_id_1883e685___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/I18n.vue":
  /*!************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/I18n.vue ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsI18nVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _I18n_vue_vue_type_template_id_7f0786b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./I18n.vue?vue&type=template&id=7f0786b2& */
    "./resources/js/src/layouts/components/navbar/components/I18n.vue?vue&type=template&id=7f0786b2&");
    /* harmony import */


    var _I18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./I18n.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/navbar/components/I18n.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_I18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _I18n_vue_vue_type_template_id_7f0786b2___WEBPACK_IMPORTED_MODULE_0__["render"], _I18n_vue_vue_type_template_id_7f0786b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/navbar/components/I18n.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/I18n.vue?vue&type=script&lang=js&":
  /*!*************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/I18n.vue?vue&type=script&lang=js& ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsI18nVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./I18n.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/I18n.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/I18n.vue?vue&type=template&id=7f0786b2&":
  /*!*******************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/I18n.vue?vue&type=template&id=7f0786b2& ***!
    \*******************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsI18nVueVueTypeTemplateId7f0786b2(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_template_id_7f0786b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./I18n.vue?vue&type=template&id=7f0786b2& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/I18n.vue?vue&type=template&id=7f0786b2&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_template_id_7f0786b2___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_template_id_7f0786b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue":
  /*!****************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsNotificationDropDownVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _NotificationDropDown_vue_vue_type_template_id_4a684060___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./NotificationDropDown.vue?vue&type=template&id=4a684060& */
    "./resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=template&id=4a684060&");
    /* harmony import */


    var _NotificationDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./NotificationDropDown.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NotificationDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _NotificationDropDown_vue_vue_type_template_id_4a684060___WEBPACK_IMPORTED_MODULE_0__["render"], _NotificationDropDown_vue_vue_type_template_id_4a684060___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=script&lang=js&":
  /*!*****************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=script&lang=js& ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsNotificationDropDownVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationDropDown.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=template&id=4a684060&":
  /*!***********************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=template&id=4a684060& ***!
    \***********************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsNotificationDropDownVueVueTypeTemplateId4a684060(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropDown_vue_vue_type_template_id_4a684060___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationDropDown.vue?vue&type=template&id=4a684060& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/NotificationDropDown.vue?vue&type=template&id=4a684060&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropDown_vue_vue_type_template_id_4a684060___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropDown_vue_vue_type_template_id_4a684060___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue":
  /*!***********************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsProfileDropDownVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _ProfileDropDown_vue_vue_type_template_id_3a9ac416___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ProfileDropDown.vue?vue&type=template&id=3a9ac416& */
    "./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=template&id=3a9ac416&");
    /* harmony import */


    var _ProfileDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ProfileDropDown.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProfileDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _ProfileDropDown_vue_vue_type_template_id_3a9ac416___WEBPACK_IMPORTED_MODULE_0__["render"], _ProfileDropDown_vue_vue_type_template_id_3a9ac416___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=script&lang=js&":
  /*!************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=script&lang=js& ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsProfileDropDownVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileDropDown.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=template&id=3a9ac416&":
  /*!******************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=template&id=3a9ac416& ***!
    \******************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsProfileDropDownVueVueTypeTemplateId3a9ac416(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDropDown_vue_vue_type_template_id_3a9ac416___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileDropDown.vue?vue&type=template&id=3a9ac416& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue?vue&type=template&id=3a9ac416&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDropDown_vue_vue_type_template_id_3a9ac416___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDropDown_vue_vue_type_template_id_3a9ac416___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/SearchBar.vue":
  /*!*****************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/SearchBar.vue ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsSearchBarVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _SearchBar_vue_vue_type_template_id_aa08d232___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./SearchBar.vue?vue&type=template&id=aa08d232& */
    "./resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=template&id=aa08d232&");
    /* harmony import */


    var _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./SearchBar.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _SearchBar_vue_vue_type_template_id_aa08d232___WEBPACK_IMPORTED_MODULE_0__["render"], _SearchBar_vue_vue_type_template_id_aa08d232___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/navbar/components/SearchBar.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=script&lang=js&":
  /*!******************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=script&lang=js& ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsSearchBarVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=template&id=aa08d232&":
  /*!************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=template&id=aa08d232& ***!
    \************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsNavbarComponentsSearchBarVueVueTypeTemplateIdAa08d232(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_aa08d232___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=template&id=aa08d232& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/SearchBar.vue?vue&type=template&id=aa08d232&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_aa08d232___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_aa08d232___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue":
  /*!***********************************************************************************!*\
    !*** ./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _VerticalNavMenu_vue_vue_type_template_id_667d9133___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./VerticalNavMenu.vue?vue&type=template&id=667d9133& */
    "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=667d9133&");
    /* harmony import */


    var _VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./VerticalNavMenu.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */
    "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");
    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _VerticalNavMenu_vue_vue_type_template_id_667d9133___WEBPACK_IMPORTED_MODULE_0__["render"], _VerticalNavMenu_vue_vue_type_template_id_667d9133___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&":
  /*!************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js& ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
  /*!*********************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
    \*********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuVueVueTypeStyleIndex0LangScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */
    "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) {
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=667d9133&":
  /*!******************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=667d9133& ***!
    \******************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuVueVueTypeTemplateId667d9133(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_667d9133___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=template&id=667d9133& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=667d9133&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_667d9133___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_667d9133___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue":
  /*!****************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuGroupVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _VerticalNavMenuGroup_vue_vue_type_template_id_b6a10888___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./VerticalNavMenuGroup.vue?vue&type=template&id=b6a10888& */
    "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=template&id=b6a10888&");
    /* harmony import */


    var _VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./VerticalNavMenuGroup.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _VerticalNavMenuGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./VerticalNavMenuGroup.vue?vue&type=style&index=0&lang=scss& */
    "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&lang=scss&");
    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _VerticalNavMenuGroup_vue_vue_type_template_id_b6a10888___WEBPACK_IMPORTED_MODULE_0__["render"], _VerticalNavMenuGroup_vue_vue_type_template_id_b6a10888___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=script&lang=js&":
  /*!*****************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=script&lang=js& ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuGroupVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuGroup.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&lang=scss&":
  /*!**************************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&lang=scss& ***!
    \**************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuGroupVueVueTypeStyleIndex0LangScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuGroup.vue?vue&type=style&index=0&lang=scss& */
    "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=style&index=0&lang=scss&");
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) {
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=template&id=b6a10888&":
  /*!***********************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=template&id=b6a10888& ***!
    \***********************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuGroupVueVueTypeTemplateIdB6a10888(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_b6a10888___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuGroup.vue?vue&type=template&id=b6a10888& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue?vue&type=template&id=b6a10888&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_b6a10888___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_b6a10888___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue":
  /*!***************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuItemVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _VerticalNavMenuItem_vue_vue_type_template_id_4e48e966___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./VerticalNavMenuItem.vue?vue&type=template&id=4e48e966& */
    "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=template&id=4e48e966&");
    /* harmony import */


    var _VerticalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./VerticalNavMenuItem.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_VerticalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _VerticalNavMenuItem_vue_vue_type_template_id_4e48e966___WEBPACK_IMPORTED_MODULE_0__["render"], _VerticalNavMenuItem_vue_vue_type_template_id_4e48e966___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=script&lang=js&":
  /*!****************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=script&lang=js& ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuItemVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuItem.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=template&id=4e48e966&":
  /*!**********************************************************************************************************************!*\
    !*** ./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=template&id=4e48e966& ***!
    \**********************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsComponentsVerticalNavMenuVerticalNavMenuItemVueVueTypeTemplateId4e48e966(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItem_vue_vue_type_template_id_4e48e966___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuItem.vue?vue&type=template&id=4e48e966& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue?vue&type=template&id=4e48e966&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItem_vue_vue_type_template_id_4e48e966___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItem_vue_vue_type_template_id_4e48e966___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/src/layouts/components/vertical-nav-menu/navMenuItems.js":
  /*!*******************************************************************************!*\
    !*** ./resources/js/src/layouts/components/vertical-nav-menu/navMenuItems.js ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsComponentsVerticalNavMenuNavMenuItemsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /*=========================================================================================
      File Name: sidebarItems.js
      Description: Sidebar Items list. Add / Remove menu items from here.
      Strucutre:
              url     => router path
              name    => name to display in sidebar
              slug    => router path name
              icon    => Feather Icon component/icon name
              tag     => text to display on badge
              tagColor  => class to apply on badge element
              i18n    => Internationalization
              submenu   => submenu of current item (current item will become dropdown )
                    NOTE: Submenu don't have any icon(you can add icon if u want to display)
              isDisabled  => disable sidebar item/group
      ----------------------------------------------------------------------------------------
      Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
      Author URL: https://www.dijitalreklam.org
    ==========================================================================================*/

    /* harmony default export */


    __webpack_exports__["default"] = [{
      url: '/panel/dashboard',
      slug: '/panel/dashboard',
      name: 'dashboard',
      // tag: "2",
      // tagColor: "warning",
      icon: 'HomeIcon',
      i18n: 'Dashboard'
    }, {
      header: 'User',
      icon: 'PackageIcon',
      i18n: 'User',
      rule: 'user',
      items: [//USER AREA
      {
        url: '/panel/chat',
        name: 'Chat',
        slug: '/panel/chat',
        icon: 'MessageSquareIcon',
        i18n: 'Chat'
      }, {
        url: '/panel/token',
        name: 'Token',
        slug: '/panel/token',
        icon: 'DollarSignIcon',
        i18n: 'Token'
      }, {
        url: '/panel/doping',
        name: 'Doping',
        slug: '/panel/doping',
        icon: 'SendIcon',
        i18n: 'AccountDoping'
      }, {
        url: '/panel/cases',
        slug: '/panel/cases',
        name: 'Cases',
        icon: 'BriefcaseIcon',
        i18n: 'Cases'
      }, {
        url: '/panel/following',
        name: 'Following',
        slug: '/panel/following',
        icon: 'ActivityIcon',
        i18n: 'Following'
      }, {
        url: '/panel/blog-post',
        slug: '/panel/blog-post',
        name: 'blog-post',
        icon: 'FileTextIcon',
        i18n: 'Blog'
      }, {
        url: '/panel/file-manager',
        name: 'FileManager',
        icon: 'UploadIcon',
        i18n: 'FileManager',
        submenu: [{
          url: '/panel/file-manager-upload',
          slug: '/panel/file-manager-upload',
          name: 'FileUpload',
          icon: 'UploadIcon',
          i18n: 'FileUpload'
        }, {
          url: '/panel/file-manager-list',
          slug: '/panel/file-manager-list',
          name: 'FileList',
          icon: 'UploadIcon',
          i18n: 'FileList'
        }]
      }]
    }, {
      header: 'Admin',
      icon: 'PackageIcon',
      i18n: 'Admin',
      rule: 'admin',
      items: [//ADMIN AREA
      {
        url: '/panel/packages',
        slug: '/panel/packages',
        name: 'packages',
        icon: 'PackageIcon',
        i18n: 'Packages'
      }, {
        url: '/panel/subscriptions',
        slug: '/panel/subscriptions',
        name: 'subscriptions',
        icon: 'UserPlusIcon',
        i18n: 'Subscriptions'
      }, {
        url: '/panel/token-requests',
        slug: '/panel/token-requests',
        name: 'token-requests',
        icon: 'DollarSignIcon',
        i18n: 'tokenRequests'
      }, {
        url: '/panel/components',
        slug: '/panel/components',
        name: 'components',
        icon: 'CreditCardIcon',
        i18n: 'Components'
      }, {
        url: '/panel/users',
        slug: '/panel/users',
        name: 'Users',
        icon: 'UserIcon',
        i18n: 'Users'
      }]
      /*   {
           url:'/panel/main-pages',
           name: 'MainPages',
           icon: "FileIcon",
           i18n: "Content",
           submenu:[
             {
               url:'/panel/pages',
               slug: "/panel/pages",
               name: "Pages",
               icon: "FileIcon",
               i18n: "Pages",
             },
             {
               url:'/panel/posts',
               slug: "/panel/posts",
               name: "Posts",
               icon: "FileTextIcon",
               i18n: "Posts",
             },
             {
               url:'/panel/products',
               slug: "/panel/products",
               name: "Products",
               icon: "FileTextIcon",
               i18n: "Products",
             },
             {
               url:'/panel/certificates',
               slug: "/panel/certificates",
               name: "Certificates",
               icon: "FileTextIcon",
               i18n: "Certificates",
             },
             {
               url:'/panel/categories',
               slug: "/panel/categories",
               name: "Categories",
               icon: "PauseIcon",
               i18n: "Categories",
             },
             {
               url:'/panel/forms',
               slug: "/panel/forms",
               name: "Forms",
               icon: "PauseIcon",
               i18n: "Forms",
             },
           ]
         },*/

    }];
    /***/
  },

  /***/
  "./resources/js/src/layouts/main/Main.vue":
  /*!************************************************!*\
    !*** ./resources/js/src/layouts/main/Main.vue ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsMainMainVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Main.vue?vue&type=template&id=22fa5a70& */
    "./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&");
    /* harmony import */


    var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Main.vue?vue&type=script&lang=js& */
    "./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["render"], _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/src/layouts/main/Main.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
  /*!*************************************************************************!*\
    !*** ./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsSrcLayoutsMainMainVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&":
  /*!*******************************************************************************!*\
    !*** ./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70& ***!
    \*******************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsSrcLayoutsMainMainVueVueTypeTemplateId22fa5a70(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=22fa5a70& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  }
}]);