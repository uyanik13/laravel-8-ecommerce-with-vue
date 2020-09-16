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
  newsPackage: function newsPackage(state) {
    return state.packages.filter(function (packageData) {
      return packageData.type === 'news';
    });
  },
  servicePackage: function servicePackage(state) {
    return state.packages.filter(function (packageData) {
      return packageData.type === 'service';
    });
  },
  profilePackage: function profilePackage(state) {
    return state.packages.filter(function (packageData) {
      return packageData.type === 'profile';
    });
  },
  tokenPackage: function tokenPackage(state) {
    return state.packages.filter(function (packageData) {
      return packageData.type === 'token';
    });
  },
  tokenPackagesData: function tokenPackagesData(state) {
    return state.packages.filter(function (packageData) {
      return packageData.type === 'token';
    }).flatMap(function (_ref) {
      var id = _ref.id,
          title = _ref.title,
          monthly_price = _ref.monthly_price;
      return Object.assign({
        id: id,
        title: title,
        monthly_price: monthly_price
      });
    });
  }
};
exports["default"] = _default;