"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _state = _interopRequireDefault(require("./state"));

var _getters = _interopRequireDefault(require("./getters"));

var _mutations = _interopRequireDefault(require("./mutations"));

var _actions = _interopRequireDefault(require("./actions"));

var _admin = _interopRequireDefault(require("./admin/admin.js"));

var _moduleECommerce = _interopRequireDefault(require("./ecommerce/moduleECommerce.js"));

var _token = _interopRequireDefault(require("./token/token.js"));

var _package = _interopRequireDefault(require("./package/package.js"));

var _subscription = _interopRequireDefault(require("./subscription/subscription.js"));

var _moduleChat = _interopRequireDefault(require("./chat/moduleChat.js"));

var _galleryModule = _interopRequireDefault(require("./gallery/galleryModule.js"));

var _custom = _interopRequireDefault(require("./custom/custom.js"));

var _formList = _interopRequireDefault(require("./form/formList.js"));

var _setting = _interopRequireDefault(require("./setting/setting.js"));

var _modulePostList = _interopRequireDefault(require("./post/modulePostList.js"));

var _moduleInvoiceList = _interopRequireDefault(require("./invoices/moduleInvoiceList.js"));

var _moduleUserManagement = _interopRequireDefault(require("./user-management/moduleUserManagement.js"));

var _moduleAuth = _interopRequireDefault(require("./auth/moduleAuth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/
_vue["default"].use(_vuex["default"]); // import moduleTodo from './todo/moduleTodo.js'
// import moduleCalendar from './calendar/moduleCalendar.js'
// import moduleChat from './chat/moduleChat.js'
// import moduleEmail from './email/moduleEmail.js'


var _default = new _vuex["default"].Store({
  getters: _getters["default"],
  mutations: _mutations["default"],
  state: _state["default"],
  actions: _actions["default"],
  modules: {
    // todo: moduleTodo,
    // calendar: moduleCalendar,
    // email: moduleEmail,
    admin: _admin["default"],
    eCommerce: _moduleECommerce["default"],
    "package": _package["default"],
    subscription: _subscription["default"],
    token: _token["default"],
    chat: _moduleChat["default"],
    gallery: _galleryModule["default"],
    custom: _custom["default"],
    form: _formList["default"],
    setting: _setting["default"],
    post: _modulePostList["default"],
    invoice: _moduleInvoiceList["default"],
    user: _moduleUserManagement["default"],
    auth: _moduleAuth["default"]
  },
  strict: process.env.NODE_ENV !== 'production'
});

exports["default"] = _default;