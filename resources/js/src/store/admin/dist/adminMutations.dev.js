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
  //ADD ONLY 1 DATA TO ARRAY
  ADD_PAYMENT: function ADD_PAYMENT(state, item) {
    state.payments.unshift(item);
  },
  ADD_TOTAL_AMOUNT: function ADD_TOTAL_AMOUNT(state, item) {
    state.totalAmount = item;
  },
  ADD_CATEGORY: function ADD_CATEGORY(state, item) {
    state.categories.unshift(item);
  },
  ADD_PRODUCT: function ADD_PRODUCT(state, item) {
    state.products.unshift(item);
  },
  ADD_CERTIFICATE: function ADD_CERTIFICATE(state, item) {
    state.certificates.unshift(item);
  },
  //ADD ALL DATA TO ARRAY
  SET_PAYMENTS: function SET_PAYMENTS(state, itemData) {
    state.payments = itemData;
  },
  SET_CATEGORIES: function SET_CATEGORIES(state, itemData) {
    state.categories = itemData;
  },
  SET_PAGES: function SET_PAGES(state, itemData) {
    state.HomePageSlider = itemData;
  },
  SET_PRODUCTS: function SET_PRODUCTS(state, itemData) {
    state.products = itemData;
  },
  SET_CERTIFICATE: function SET_CERTIFICATE(state, itemData) {
    state.certificates = itemData;
  },
  //UPDATE DATA IN ARRAY
  UPDATE_PAYMENTS: function UPDATE_PAYMENTS(state, item) {
    var itemIndex = state.payments.findIndex(function (i) {
      return i.id === item.id;
    });
    Object.assign(state.payments[itemIndex], item);
  },
  UPDATE_SLIDER: function UPDATE_SLIDER(state, item) {
    var itemIndex = state.HomePageSlider.findIndex(function (i) {
      return i.id === item.id;
    });
    Object.assign(state.HomePageSlider[itemIndex], item);
  },
  UPDATE_CATEGORY: function UPDATE_CATEGORY(state, item) {
    var itemIndex = state.categories.findIndex(function (i) {
      return i.id === item.id;
    });
    Object.assign(state.categories[itemIndex], item);
  },
  UPDATE_PRODUCT: function UPDATE_PRODUCT(state, item) {
    var itemIndex = state.products.findIndex(function (i) {
      return i.id === item.id;
    });
    Object.assign(state.products[itemIndex], item);
  },
  UPDATE_CERTIFICATE: function UPDATE_CERTIFICATE(state, item) {
    var itemIndex = state.certificates.findIndex(function (i) {
      return i.id === item.id;
    });
    Object.assign(state.certificates[itemIndex], item);
  },
  //REMOVE DATA FROM ARRAY
  REMOVE_ITEM: function REMOVE_ITEM(state, itemId) {
    var ItemIndex = state.bayiler.findIndex(function (i) {
      return i.id === itemId;
    });
    state.bayiler.splice(ItemIndex, 1);
  },
  REMOVE_SLIDER: function REMOVE_SLIDER(state, itemId) {
    var ItemIndex = state.HomePageSlider.findIndex(function (i) {
      return i.id === itemId;
    });
    state.HomePageSlider.splice(ItemIndex, 1);
  },
  REMOVE_CATEGORY: function REMOVE_CATEGORY(state, itemId) {
    var ItemIndex = state.categories.findIndex(function (i) {
      return i.id === itemId;
    });
    state.categories.splice(ItemIndex, 1);
  },
  REMOVE_PRODUCT: function REMOVE_PRODUCT(state, itemId) {
    var ItemIndex = state.products.findIndex(function (i) {
      return i.id === itemId;
    });
    state.products.splice(ItemIndex, 1);
  },
  REMOVE_CERTIFICATE: function REMOVE_CERTIFICATE(state, itemId) {
    var ItemIndex = state.certificates.findIndex(function (i) {
      return i.id === itemId;
    });
    state.certificates.splice(ItemIndex, 1);
  }
};
exports["default"] = _default;