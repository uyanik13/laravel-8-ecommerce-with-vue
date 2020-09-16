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
  // addItem({ commit }, item) {
  //   return new Promise((resolve, reject) => {
  //     axios.post("/api/data-list/products/", {item: item})
  //       .then((response) => {
  //         commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  fetchUsers: function fetchUsers(_ref) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].get('/api/users').then(function (response) {
        // console.log('fetchUsers',response.data)
        commit('SET_USERS', response.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchUser: function fetchUser(_ref2) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].get('/api/user').then(function (response) {
        //console.log('user',response.data)
        commit('SET_USER', response.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  findUser: function findUser(_ref3, userId) {
    var commit = _ref3.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].get("/api/users/".concat(userId)).then(function (response) {
        console.log('user', response);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  addUser: function addUser(_ref4, data) {
    var commit = _ref4.commit;
    return new Promise(function (resolve, reject) {
      console.log('payload', data);

      _axios["default"].post('/api/users', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password
      }).then(function (response) {
        commit('ADD_USERS', Object.assign(data, {
          id: response.data.id,
          name: data.name,
          email: data.email,
          phone: data.phone
        }));
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  updateUser: function updateUser(payload, data) {
    return new Promise(function (resolve, reject) {
      if (data.new_password !== data.confirm_new_password) {
        reject({
          message: 'Password doesn\'t match. Please try again.'
        });
      }

      console.log('payload', data);

      _axios["default"].patch("/api/users/".concat(data.id), data).then(function (response) {
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  updateCompany: function updateCompany(payload, data) {
    return new Promise(function (resolve, reject) {
      console.log('payload', data);

      _axios["default"].post('/api/updateCompany', data).then(function (response) {
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  removeRecord: function removeRecord(_ref5, userId) {
    var commit = _ref5.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"]["delete"]("/api/users/".concat(userId)).then(function (response) {
        commit('REMOVE_RECORD', userId);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  createPayment: function createPayment(payload, data) {
    return new Promise(function (resolve, reject) {
      // console.log('payload',data)
      _axios["default"].post('/api/createPayment', {
        price: data.price,
        plan_name: data.plan_name
      }).then(function (response) {
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  follow: function follow(_ref6, data) {
    var commit = _ref6.commit;
    return new Promise(function (resolve, reject) {
      console.log('payload', data);

      _axios["default"].post('/api/user/follow', data).then(function (response) {
        commit('ADD_FOLLOWING', response.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  unFollow: function unFollow(_ref7, data) {
    var commit = _ref7.commit;
    return new Promise(function (resolve, reject) {
      //console.log('payload',data)
      _axios["default"].post('/api/user/un-follow', data).then(function (response) {
        commit('REMOVE_FOLLOWING', response.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchMyFollowData: function fetchMyFollowData(_ref8) {
    var commit = _ref8.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].get('/api/user/my-follow-data').then(function (response) {
        //console.log('user',response.data.my_following_data)
        commit('SET_FOLLOWING', response.data.my_following_data);
        commit('SET_FOLLOWER', response.data.my_followers_data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchPackageInformation: function fetchPackageInformation(_ref9) {
    var commit = _ref9.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].get('/api/user/my-packages').then(function (response) {
        //console.log('user',response.data)
        commit('SET_UPGRADE_PACKAGE_LEFT', response.data.upgradePackage_remaining_days);
        commit('SET_PROFILE_DOPING_PACKAGE_LEFT', response.data.profileDopingPackage_remaining_days);
        commit('SET_NEWS_DOPING_PACKAGE_LEFT', response.data.newsDopingPackage_remaining_days);
        commit('SET_SERVICE_DOPING_PACKAGE_LEFT', response.data.serviceDopingPackage_remaining_days);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  }
};
exports["default"] = _default;