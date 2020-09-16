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
  addItem: function addItem(_ref, data) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].post('/api/package', data).then(function (response) {
        commit('ADD_ITEM', data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchItems: function fetchItems(_ref2) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].get('/api/package').then(function (response) {
        // console.log('data from content',response.data)
        commit('SET_ITEM', response.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  updateItem: function updateItem(_ref3, data) {
    var commit = _ref3.commit;
    return new Promise(function (resolve, reject) {
      //console.log('payload',data)
      _axios["default"].patch("/api/package/".concat(data.id), data).then(function (response) {
        commit('UPDATE_ITEM', data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  removeItem: function removeItem(_ref4, itemId) {
    var commit = _ref4.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"]["delete"]("/api/package/".concat(itemId)).then(function (response) {
        commit('REMOVE_ITEM', itemId);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  }
};
exports["default"] = _default;