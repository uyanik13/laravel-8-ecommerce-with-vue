"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _vuesax = _interopRequireDefault(require("vuesax"));

require("./http/requests");

require("../themeConfig.js");

require("./plugins/index.js");

var _acl = _interopRequireDefault(require("./acl/acl"));

require("./globalComponents.js");

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store/store"));

var _i18n = _interopRequireDefault(require("./i18n/i18n"));

require("./filters/filters");

var _vueClipboard = _interopRequireDefault(require("vue-clipboard2"));

var _vueTour = _interopRequireDefault(require("vue-tour"));

var _veeValidate = _interopRequireDefault(require("vee-validate"));

var VueGoogleMaps = _interopRequireWildcard(require("vue2-google-maps"));

var _vue2Hammer = require("vue2-hammer");

require("prismjs");

require("prismjs/themes/prism-tomorrow.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.dijitalreklam.org
==========================================================================================*/
// Vuesax Component Framework
_vue["default"].use(_vuesax["default"]); // axios
//import axios from './axios.js'
//Vue.prototype.$http = axios
// API Calls


_vue["default"].use(_vueClipboard["default"]); // Tour


_vue["default"].use(_vueTour["default"]);

require('vue-tour/dist/vue-tour.css'); // VeeValidate


_vue["default"].use(_veeValidate["default"]); // Google Maps


_vue["default"].use(VueGoogleMaps, {
  load: {
    // Add your API key here
    key: 'AIzaSyB4DDathvvwuwlwnUu7F4Sow3oU22y5T1Y',
    libraries: 'places' // This is required if you use the Auto complete plug-in

  }
}); // Vuejs - Vue wrapper for hammerjs


_vue["default"].use(_vue2Hammer.VueHammer); // PrismJS


// Feather font icon
require('@assets/css/iconfont.css'); //import Echo from 'laravel-echo'


window.Pusher = require('pusher-js'); //console.log(process.env.MIX_PUSHER_APP_CLUSTER)

window.Pusher.logToConsole = false;
window.pusher = new Pusher(process.env.MIX_PUSHER_APP_KEY, {
  authEndpoint: '/api/channels/authorize',
  broadcaster: 'pusher',
  key: process.env.MIX_PUSHER_APP_KEY,
  cluster: process.env.MIX_PUSHER_APP_CLUSTER,
  encrypted: true
}); // window.Echo = new Echo({
//   namespace: 'App.Events',
//   //host: window.location.protocol + '//' + window.location.hostname + ':8000',
//   broadcaster: 'pusher',
//   key: process.env.MIX_PUSHER_APP_KEY,
//   cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//   encrypted: false
// })
// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';

_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  i18n: _i18n["default"],
  acl: _acl["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');