"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/
var _default = {
  SET_USERS: function SET_USERS(state, users) {
    state.users = users;
  },
  SET_USER: function SET_USER(state, users) {
    state.currentUser = users;
  },
  SET_FOLLOWER: function SET_FOLLOWER(state, data) {
    state.myFollowers = data;
  },
  SET_FOLLOWING: function SET_FOLLOWING(state, data) {
    state.myFollows = data;
  },
  SET_UPGRADE_PACKAGE_LEFT: function SET_UPGRADE_PACKAGE_LEFT(state, data) {
    state.upgradePackage_remaining_days = data;
  },
  SET_PROFILE_DOPING_PACKAGE_LEFT: function SET_PROFILE_DOPING_PACKAGE_LEFT(state, data) {
    state.profileDopingPackage_remaining_days = data;
  },
  SET_NEWS_DOPING_PACKAGE_LEFT: function SET_NEWS_DOPING_PACKAGE_LEFT(state, data) {
    state.newsDopingPackage_remaining_days = data;
  },
  SET_SERVICE_DOPING_PACKAGE_LEFT: function SET_SERVICE_DOPING_PACKAGE_LEFT(state, data) {
    state.serviceDopingPackage_remaining_days = data;
  },
  ADD_USERS: function ADD_USERS(state, item) {
    state.users.unshift(item);
  },
  ADD_USER: function ADD_USER(state, item) {
    state.currentUser.unshift(item);
  },
  ADD_FOLLOWER: function ADD_FOLLOWER(state, item) {
    state.myFollowers.unshift(item);
  },
  ADD_FOLLOWING: function ADD_FOLLOWING(state, item) {
    state.myFollows.unshift(item);
  },
  REMOVE_RECORD: function REMOVE_RECORD(state, itemId) {
    var userIndex = state.users.findIndex(function (u) {
      return u.id == itemId;
    });
    state.users.splice(userIndex, 1);
  },
  REMOVE_USER: function REMOVE_USER(state, itemId) {
    var userIndex = state.currentUser.findIndex(function (u) {
      return u.id == itemId;
    });
    state.currentUser.splice(userIndex, 1);
  },
  REMOVE_FOLLOWER: function REMOVE_FOLLOWER(state, itemId) {
    var userIndex = state.myFollowers.findIndex(function (u) {
      return u.id == itemId;
    });
    state.myFollowers.splice(userIndex, 1);
  },
  REMOVE_FOLLOWING: function REMOVE_FOLLOWING(state, itemId) {
    var userIndex = state.myFollows.findIndex(function (u) {
      return u.id == itemId;
    });
    state.myFollows.splice(userIndex, 1);
  }
};
exports["default"] = _default;