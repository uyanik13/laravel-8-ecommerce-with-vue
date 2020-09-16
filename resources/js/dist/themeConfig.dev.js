"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuesax = _interopRequireDefault(require("vuesax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*=========================================================================================
  File Name: themeConfig.js
  Description: Theme configuration
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.dijitalreklam.org
==========================================================================================*/
var colors = {
  primary: '#F93E0B',
  success: '#28C76F',
  danger: '#EA5455',
  warning: '#FF9F43',
  dark: '#1E1E1E'
}; // CONFIGS

var themeConfig = {
  disableCustomizer: true,
  // options[Boolean] : true, false(default)
  disableThemeTour: true,
  // options[Boolean] : true, false(default)
  footerType: 'sticky',
  // options[String]  : static(default) / sticky / hidden
  hideScrollToTop: false,
  // options[Boolean] : true, false(default)
  mainLayoutType: 'vertical',
  // options[String]  : vertical(default) / horizontal
  navbarColor: '#fff',
  // options[String]  : HEX color / rgb / rgba / Valid HTML Color name - (default: #fff)
  navbarType: 'floating',
  // options[String]  : floating(default) / static / sticky / hidden
  routerTransition: 'zoom-fade',
  // options[String]  : zoom-fade / slide-fade / fade-bottom / fade / zoom-out / none(default)
  rtl: false,
  // options[Boolean] : true, false(default)
  sidebarCollapsed: false,
  // options[Boolean] : true, false(default)
  theme: 'semi-dark',
  // options[String]  : "light"(default), "dark", "semi-dark"
  // Not required yet - WIP
  userInfoLocalStorageKey: 'userInfo' // NOTE: themeTour will be disabled in screens < 1200. Please refer docs for more info.

};

_vue["default"].use(_vuesax["default"], {
  theme: {
    colors: colors
  },
  rtl: themeConfig.rtl
});

var _default = themeConfig;
exports["default"] = _default;