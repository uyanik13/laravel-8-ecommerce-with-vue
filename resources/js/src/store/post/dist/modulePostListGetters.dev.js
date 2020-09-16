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
  // getItem: state => (productId) => state.products.find((product) => product.id == productId),
  openCases: function openCases(state) {
    return state.services.filter(function (service) {
      return service.status === 1;
    });
  },
  myCases: function myCases(state) {
    return state.myServices;
  },
  myCasesTitle: function myCasesTitle(state) {
    return state.myServices.flatMap(function (service) {
      return service['title'];
    });
  },
  myPosts: function myPosts(state) {
    return function (userId) {
      return state.posts.filter(function (post) {
        return post.user_id === userId;
      });
    };
  },
  myCasesId: function myCasesId(state) {
    return state.myServices.flatMap(function (service) {
      return service['id'];
    });
  },
  myCasesTitleAndId: function myCasesTitleAndId(state) {
    return state.myServices.flatMap(function (_ref) {
      var id = _ref.id,
          title = _ref.title;
      return Object.assign({
        id: id,
        title: title
      });
    });
  },
  emergencyCases: function emergencyCases(state) {
    return state.services.filter(function (service) {
      return service.status === 1 && service.emergency === 1;
    });
  },
  randomOpenCases: function randomOpenCases(state, getters) {
    return getters.openCases.sort(function () {
      return Math.random() - Math.random();
    }).slice(0, 12);
  },
  randomEmergencyOpenCases: function randomEmergencyOpenCases(state, getters) {
    return getters.emergencyCases.sort(function () {
      return Math.random() - Math.random();
    }).slice(0, 12);
  }
};
exports["default"] = _default;