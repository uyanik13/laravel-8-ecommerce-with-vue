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
      _axios["default"].post('/api/token', data).then(function (response) {
        commit('ADD_ITEM', data); //console.log(response)

        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchItems: function fetchItems(_ref2) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].get('/api/token').then(function (response) {
        //console.log('data from subs',response.data)
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
      _axios["default"].patch("/api/token/".concat(data.id), data).then(function (response) {
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
      _axios["default"]["delete"]("/api/token/".concat(itemId)).then(function (response) {
        commit('REMOVE_ITEM', itemId);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  //token request
  fetchTokenRequest: function fetchTokenRequest(_ref5) {
    var commit = _ref5.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].get('/api/token-request').then(function (response) {
        //console.log('data from subs',response.data)
        commit('SET_TOKEN_REQUEST', response.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  addTokenRequest: function addTokenRequest(_ref6) {
    var commit = _ref6.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].post('/api/token-request').then(function (response) {
        console.log(response.data.item);
        commit('ADD_TOKEN_REQUEST', response.data.item); //console.log(response)

        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  removeTokenRequest: function removeTokenRequest(_ref7, itemId) {
    var commit = _ref7.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"]["delete"]("/api/token-request/".concat(itemId)).then(function (response) {
        commit('REMOVE_TOKEN_REQUEST', itemId);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  updateTokenRequest: function updateTokenRequest(_ref8, data) {
    var commit = _ref8.commit;
    return new Promise(function (resolve, reject) {
      //console.log('payload',data)
      _axios["default"].patch("/api/token-request/".concat(data.id), data).then(function (response) {
        commit('UPDATE_TOKEN_REQUEST', data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  }
};
exports["default"] = _default;