"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _adminState = _interopRequireDefault(require("./adminState.js"));

var _adminMutations = _interopRequireDefault(require("./adminMutations.js"));

var _adminActions = _interopRequireDefault(require("./adminActions.js"));

var _adminGetters = _interopRequireDefault(require("./adminGetters.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*=========================================================================================
  File Name: moduleSchoolThingsList.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/
var _default = {
  isRegistered: false,
  namespaced: true,
  state: _adminState["default"],
  mutations: _adminMutations["default"],
  actions: _adminActions["default"],
  getters: _adminGetters["default"]
};
exports["default"] = _default;