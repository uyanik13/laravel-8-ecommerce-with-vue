"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/
var _default = {
  myFollower: function myFollower(state) {
    return state.myFollowers;
  },
  myFollowing: function myFollowing(state) {
    return state.myFollows;
  },
  amIFollowing: function amIFollowing(state) {
    return function (id) {
      return state.myFollows.includes(state.myFollows.find(function (user) {
        return user.id === id;
      }));
    };
  },
  allUsersCount: function allUsersCount(state) {
    return state.users.length;
  },
  allUsersToken: function allUsersToken(state) {
    return state.users.flatMap(function (user) {
      return user['token'];
    });
  }
};
exports["default"] = _default;