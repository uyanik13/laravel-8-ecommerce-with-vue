"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("../../plugins/axios.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/
var _default = {
  fetchPayments: function fetchPayments(_ref) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].get('/api/admin/payments').then(function (response) {
        commit('SET_PAYMENTS', response.data.payments);
        commit('ADD_TOTAL_AMOUNT', response.data.totalAmount);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  }
};
exports["default"] = _default;