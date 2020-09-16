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
  ADD_ITEM: function ADD_ITEM(state, item) {
    state.posts.unshift(item);
  },
  ADD_PAGE: function ADD_PAGE(state, item) {
    state.pages.unshift(item);
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
  ADD_SERVICE: function ADD_SERVICE(state, item) {
    state.services.unshift(item);
  },
  ADD_CONTRACT: function ADD_CONTRACT(state, item) {
    state.myContracts.unshift(item);
  },
  ///SET
  SET_MyServices: function SET_MyServices(state, itemData) {
    state.myServices = itemData;
  },
  SET_CONTRACTS: function SET_CONTRACTS(state, itemData) {
    state.myContracts = itemData;
  },
  SET_ITEM: function SET_ITEM(state, itemData) {
    state.posts = itemData;
  },
  SET_CATEGORIES: function SET_CATEGORIES(state, itemData) {
    state.categories = itemData;
  },
  SET_PAGES: function SET_PAGES(state, itemData) {
    state.pages = itemData;
  },
  SET_PRODUCTS: function SET_PRODUCTS(state, itemData) {
    state.products = itemData;
  },
  SET_CERTIFICATE: function SET_CERTIFICATE(state, itemData) {
    state.certificates = itemData;
  },
  SET_SERVICES: function SET_SERVICES(state, itemData) {
    state.services = itemData;
  },
  SET_COUNTRIES: function SET_COUNTRIES(state, itemData) {
    state.countries = itemData;
  },
  SET_CITIES: function SET_CITIES(state, itemData) {
    state.cities = itemData;
  },
  //UPDATE DATA IN ARRAY
  UPDATE_ITEM: function UPDATE_ITEM(state, item) {
    var itemIndex = state.posts.findIndex(function (i) {
      return i.id === item.id;
    });
    Object.assign(state.posts[itemIndex], item);
  },
  UPDATE_PAGE: function UPDATE_PAGE(state, item) {
    var itemIndex = state.pages.findIndex(function (i) {
      return i.id === item.id;
    });
    Object.assign(state.pages[itemIndex], item);
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
  UPDATE_SERVICES: function UPDATE_SERVICES(state, item) {
    var itemIndex = state.services.findIndex(function (i) {
      return i.id === item.id;
    });
    Object.assign(state.services[itemIndex], item);
  },
  UPDATE_CONTRACTS: function UPDATE_CONTRACTS(state, item) {
    var itemIndex = state.myContracts.findIndex(function (i) {
      return i.id === item.id;
    });
    Object.assign(state.myContracts[itemIndex], item);
  },
  //REMOVE DATA FROM ARRAY
  REMOVE_ITEM: function REMOVE_ITEM(state, itemId) {
    var ItemIndex = state.posts.findIndex(function (i) {
      return i.id === itemId;
    });
    state.posts.splice(ItemIndex, 1);
  },
  REMOVE_PAGE: function REMOVE_PAGE(state, itemId) {
    var ItemIndex = state.pages.findIndex(function (i) {
      return i.id === itemId;
    });
    state.pages.splice(ItemIndex, 1);
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
  },
  REMOVE_SERVICE: function REMOVE_SERVICE(state, itemId) {
    var ItemIndex = state.services.findIndex(function (i) {
      return i.id === itemId;
    });
    state.services.splice(ItemIndex, 1);
  },
  REMOVE_CONTRACT: function REMOVE_CONTRACT(state, itemId) {
    var ItemIndex = state.myContracts.findIndex(function (i) {
      return i.id === itemId;
    });
    state.myContracts.splice(ItemIndex, 1);
  }
};
exports["default"] = _default;