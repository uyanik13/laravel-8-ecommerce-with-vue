"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _navbarSearchAndPinList = _interopRequireDefault(require("@/layouts/components/navbar/navbarSearchAndPinList"));

var _themeConfig = _interopRequireDefault(require("@/../themeConfig.js"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _axios = _interopRequireDefault(require("axios"));

var _router = _interopRequireDefault(require("../router"));

var _moduleAuth = _interopRequireDefault(require("./auth/moduleAuth"));

var _jwt = _interopRequireDefault(require("../http/requests/auth/jwt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/
// /////////////////////////////////////////////
// Helper
// /////////////////////////////////////////////
// *From Auth - Data will be received from auth provider
var userDefaults = {};
var userInfoLocalStorage = JSON.parse(localStorage.getItem('userInfo')) || {}; // Set default values for active-user
// More data can be added by auth provider or other plugins/packages

var getUserInfo = function getUserInfo() {
  var userInfo = {}; // Update property in user

  Object.keys(userDefaults).forEach(function (key) {
    // If property is defined in localStorage => Use that
    userInfo[key] = userInfoLocalStorage[key] ? userInfoLocalStorage[key] : userDefaults[key];
  }); // Include properties from localStorage

  Object.keys(userInfoLocalStorage).forEach(function (key) {
    if (userInfo[key] == undefined && userInfoLocalStorage[key] != null) userInfo[key] = userInfoLocalStorage[key];
  });
  return userInfo;
};

var is_touch_device = function is_touch_device() {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

  var mq = function mq(query) {
    return window.matchMedia(query).matches;
  };

  if ('ontouchstart' in window || window.DocumentTouch) {
    return true;
  } // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH


  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}; // /////////////////////////////////////////////
// State
// /////////////////////////////////////////////


var state = {
  AppActiveUser: getUserInfo(),
  ActiveUser: _moduleAuth["default"].actions.fetchUser,
  bodyOverlay: false,
  isVerticalNavMenuActive: true,
  is_touch_device: is_touch_device(),
  mainLayoutType: _themeConfig["default"].mainLayoutType || 'vertical',
  navbarSearchAndPinList: _navbarSearchAndPinList["default"],
  reduceButton: _themeConfig["default"].sidebarCollapsed,
  verticalNavMenuWidth: 'default',
  verticalNavMenuItemsMin: false,
  scrollY: 0,
  starredPages: _navbarSearchAndPinList["default"]['pages'].data.filter(function (page) {
    return page.is_bookmarked;
  }),
  theme: _themeConfig["default"].theme || 'light',
  themePrimaryColor: _themeConfig["default"].primary,
  // Can be used to get current window with
  // Note: Above breakpoint state is for internal use of sidebar & navbar component
  windowWidth: null
};
var _default = state;
exports["default"] = _default;