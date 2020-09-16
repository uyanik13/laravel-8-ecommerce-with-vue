"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../../http/requests/auth/jwt/index.js"));

var types = _interopRequireWildcard(require("../mutation-types"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _axios = _interopRequireDefault(require("axios"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/
var _default = {
  loginJWT: function loginJWT(_ref, payload) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      _jsCookie["default"].remove('XSRF-TOKEN');

      _jsCookie["default"].remove('mini_isletmem_session');

      _index["default"].login(payload.email, payload.password).then(function (response) {
        //console.log('JWT', response)
        commit('SET_BEARER', response.data.access_token);
        commit('UPDATE_USER_INFO', response.data.user, {
          root: true
        });

        _jsCookie["default"].set('token', response.data.access_token);

        setTimeout(function () {
          resolve(response);
        }, 500); //acl => acl.change(response.data.user.role)
      })["catch"](function (error) {
        console.log(error);
        reject({
          message: error
        });
      });
    });
  },
  registerUserJWT: function registerUserJWT(_ref2, payload) {
    var commit = _ref2.commit;
    var _payload$userDetails = payload.userDetails,
        name = _payload$userDetails.name,
        email = _payload$userDetails.email,
        phone = _payload$userDetails.phone,
        user_ref_number = _payload$userDetails.user_ref_number,
        store_name = _payload$userDetails.store_name,
        password = _payload$userDetails.password,
        confirmPassword = _payload$userDetails.confirmPassword;
    return new Promise(function (resolve, reject) {
      // Check confirm password
      if (password !== confirmPassword) {
        reject({
          message: 'Password doesn\'t match. Please try again.'
        });
      }

      _index["default"].registerUser(name, email, phone, user_ref_number, store_name, password, confirmPassword).then(function (response) {
        //router.push(router.currentRoute.query.to || 'login')
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  saveToken: function saveToken(_ref3, payload) {
    var commit = _ref3.commit,
        dispatch = _ref3.dispatch;
    commit(types.SAVE_TOKEN, payload);
  },
  fetchOauthUrl: function fetchOauthUrl(ctx, _ref4) {
    var provider, _ref5, data;

    return regeneratorRuntime.async(function fetchOauthUrl$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            provider = _ref4.provider;
            _context.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].post("/api/oauth/".concat(provider)));

          case 3:
            _ref5 = _context.sent;
            data = _ref5.data;
            return _context.abrupt("return", data.url);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  emailVerifyApi: function emailVerifyApi(_ref6, payload) {
    var commit = _ref6.commit;
    return new Promise(function (resolve, reject) {
      _index["default"].emailVerifyApi(payload).then(function (response) {
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchUser: function fetchUser(_ref7) {
    var commit = _ref7.commit;
    return new Promise(function (resolve, reject) {
      _index["default"].fetchUser().then(function (response) {
        commit('UPDATE_USER_INFO', response.data, {
          root: true
        });
        return response.data;
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchStore: function fetchStore(_ref8) {
    var commit = _ref8.commit;
    return new Promise(function (resolve, reject) {
      _index["default"].fetchStore().then(function (response) {
        return response.data;
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  logout: function logout() {
    if (_jsCookie["default"].get('token')) {
      _axios["default"].post('/api/logout');

      localStorage.removeItem('userInfo');
      localStorage.clear();

      _jsCookie["default"].remove('token');

      _jsCookie["default"].remove('XSRF-TOKEN');

      _jsCookie["default"].remove('legal_props_session');

      _jsCookie["default"].remove('role');

      console.log('LOGOUT');
    } else {
      localStorage.removeItem('userInfo');
      localStorage.clear();

      _jsCookie["default"].remove('token');

      _jsCookie["default"].remove('XSRF-TOKEN');

      _jsCookie["default"].remove('legal_props_session');

      _jsCookie["default"].remove('role');

      console.log('LOGOUT');
    }
  },
  updateUserRole: function updateUserRole(_ref9, payload) {
    var dispatch = _ref9.dispatch;
    // Change client side
    payload.aclChangeRole(payload.role); // Make API call to server for changing role
    // Change userInfo in localStorage and store

    dispatch('updateUserInfo', {
      role: payload.role
    });
  }
};
exports["default"] = _default;