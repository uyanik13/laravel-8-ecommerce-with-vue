"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _sweetalert = _interopRequireDefault(require("sweetalert2"));

var _i18n = _interopRequireDefault(require("../i18n/i18n"));

var _router = _interopRequireDefault(require("@/router"));

var _moduleAuth = _interopRequireDefault(require("../store/auth/moduleAuth.js"));

var _vue = _interopRequireDefault(require("vue"));

var _vueAcl = require("vue-acl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueAcl.AclInstaller); // Request interceptor


var token = _jsCookie["default"].get('token'); // Request interceptor


_axios["default"].interceptors.request.use(function (request) {
  if (token) {
    request.headers.common['Authorization'] = "Bearer ".concat(token);
  }

  return request;
}); // Response interceptor


_axios["default"].interceptors.response.use(function (response) {
  return response;
}, function (error) {
  var status = error.response.status;

  if (status >= 500) {
    _sweetalert["default"].fire({
      type: 'error',
      title: _i18n["default"].t('error_alert_title'),
      text: _i18n["default"].t('error_alert_text'),
      reverseButtons: true,
      confirmButtonText: _i18n["default"].t('ok'),
      cancelButtonText: _i18n["default"].t('cancel')
    }).then(function (r) {
      return console.log('axios', r);
    });
  } // if (status === 401 && moduleAuth.state.user) {
  //   Swal.fire({
  //     type: 'warning',
  //     title: i18n.t('token_expired_alert_title'),
  //     text: i18n.t('token_expired_alert_text'),
  //     reverseButtons: true,
  //     confirmButtonText: i18n.t('ok'),
  //   }).then((r) => {
  //     moduleAuth.actions.logout()
  //     acl => acl.change('guest')
  //     router.push(router.currentRoute.query.to || 'login')
  //   }).catch((error) => {
  //     console.log('ERROR:', error)
  //   });
  // }


  return Promise.reject(error);
});

var _default = _axios["default"];
exports["default"] = _default;