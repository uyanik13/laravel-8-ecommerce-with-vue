"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("../../../../plugins/axios.js"));

var _store = _interopRequireDefault(require("../../../../store/store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Token Refresh
var isAlreadyFetchingAccessToken = false;
var subscribers = [];

function onAccessTokenFetched(access_token) {
  subscribers = subscribers.filter(function (callback) {
    return callback(access_token);
  });
}

function addSubscriber(callback) {
  subscribers.push(callback);
}

var _default = {
  init: function init() {
    _axios["default"].interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      // const { config, response: { status } } = error
      var config = error.config,
          response = error.response;
      var originalRequest = config; // if (status === 401) {

      if (response && response.status === 401) {
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true; // store.dispatch('auth/fetchAccessToken')
          //   .then((access_token) => {
          //     isAlreadyFetchingAccessToken = false
          //     onAccessTokenFetched(access_token)
          //   })
        }

        var retryOriginalRequest = new Promise(function (resolve) {
          addSubscriber(function (access_token) {
            originalRequest.headers.Authorization = "Bearer ".concat(access_token);
            resolve((0, _axios["default"])(originalRequest));
          });
        });
        return retryOriginalRequest;
      }

      return Promise.reject(error);
    });
  },
  login: function login(email, pwd) {
    return _axios["default"].post("/api/login", {
      email: email,
      password: pwd
    });
  },
  fetchUser: function fetchUser() {
    return _axios["default"].get("/api/user");
  },
  fetchStore: function fetchStore() {
    return _axios["default"].get("/api/store");
  },
  fetchUsers: function fetchUsers() {
    return _axios["default"].get("/api/users");
  },
  registerUser: function registerUser(name, email, phone, user_ref_number, store_name, password, confirmPassword) {
    return _axios["default"].post("/api/register", {
      name: name,
      email: email,
      phone: phone,
      user_ref_number: user_ref_number,
      store_name: store_name,
      password: password,
      password_confirmation: confirmPassword
    });
  },
  emailVerifyApi: function emailVerifyApi(email) {
    return _axios["default"].post("/api/emailResendApi", {
      email: email
    });
  }
};
exports["default"] = _default;