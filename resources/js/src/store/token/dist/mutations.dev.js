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
    state.tokens.unshift(item);
  },
  ADD_TOKEN_REQUEST: function ADD_TOKEN_REQUEST(state, item) {
    state.tokenRequests.unshift(item);
  },
  //ADD ALL DATA TO ARRAY
  SET_ITEM: function SET_ITEM(state, itemData) {
    state.tokens = itemData;
  },
  SET_TOKEN_REQUEST: function SET_TOKEN_REQUEST(state, itemData) {
    state.tokenRequests = itemData;
  },
  //UPDATE DATA IN ARRAY
  UPDATE_ITEM: function UPDATE_ITEM(state, item) {
    var itemIndex = state.tokens.findIndex(function (i) {
      return i.id === item.id;
    });
    Object.assign(state.tokens[itemIndex], item);
  },
  UPDATE_TOKEN_REQUEST: function UPDATE_TOKEN_REQUEST(state, item) {
    var itemIndex = state.tokenRequests.findIndex(function (i) {
      return i.id === item.id;
    });
    Object.assign(state.tokenRequests[itemIndex], item);
  },
  //REMOVE DATA FROM ARRAY
  REMOVE_ITEM: function REMOVE_ITEM(state, itemId) {
    var ItemIndex = state.tokens.findIndex(function (i) {
      return i.id === itemId;
    });
    state.tokens.splice(ItemIndex, 1);
  },
  REMOVE_TOKEN_REQUEST: function REMOVE_TOKEN_REQUEST(state, itemId) {
    var ItemIndex = state.tokenRequests.findIndex(function (i) {
      return i.id === itemId;
    });
    state.tokenRequests.splice(ItemIndex, 1);
  }
};
exports["default"] = _default;