"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueAcl = require("vue-acl");

var _router = _interopRequireDefault(require("@/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueAcl.AclInstaller);

//import jwt from '@/http/requests/auth/jwt/index.js'
var initialRole = 'guest';
var userInfo = JSON.parse(localStorage.getItem('userInfo'));
if (userInfo && userInfo.role) initialRole = userInfo.role;

var _default = new _vueAcl.AclCreate({
  initial: initialRole,
  notfound: '/panel/login',
  router: _router["default"],
  acceptLocalRules: true,
  globalRules: {
    admin: new _vueAcl.AclRule('admin').generate(),
    user: new _vueAcl.AclRule('user').generate(),
    guest: new _vueAcl.AclRule('guest').generate() // public: new AclRule("public").or("admin").or("editor").generate(),

  }
  /*middleware: async acl => {
    jwt.fetchUser()
      .then(response => {
        acl.change(response.data.role)
      })
      .catch(error => { console.log('ERROR jwt.fetchUser()',error) })
   }*/

});

exports["default"] = _default;