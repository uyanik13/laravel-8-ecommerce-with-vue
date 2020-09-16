"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*=========================================================================================
  File Name: moduleChatMutations.js
  Description: Chat Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
var _default = {
  UPDATE_ABOUT_CHAT: function UPDATE_ABOUT_CHAT(state, obj) {
    obj.rootState.AppActiveUser.about = obj.value;
  },
  UPDATE_STATUS_CHAT: function UPDATE_STATUS_CHAT(state, obj) {
    obj.rootState.AppActiveUser.status = obj.value;
  },
  // API AFTER
  SEND_CHAT_MESSAGE: function SEND_CHAT_MESSAGE(state, payload) {
    //console.log(payload)
    if (payload.chatData) {
      state.chats[Object.keys(state.chats).find(function (key) {
        return key === payload.to;
      })].push(payload);
    } else {
      // Create New chat and add msg
      var chatId = payload.to;

      _vue["default"].set(state.chats, [chatId], [{
        from: payload.from,
        to: payload.to,
        msg: payload.msg,
        created_at: payload.created_at,
        read: false
      }]);
    }
  },
  UPDATE_CONTACTS: function UPDATE_CONTACTS(state, contacts) {
    state.contacts = contacts;
  },
  UPDATE_CHAT_CONTACTS: function UPDATE_CHAT_CONTACTS(state, chatContacts) {
    state.chatContacts = chatContacts;
  },
  UPDATE_CHATS: function UPDATE_CHATS(state, chats) {
    state.chats = chats;
  },
  SET_CHAT_SEARCH_QUERY: function SET_CHAT_SEARCH_QUERY(state, query) {
    state.chatSearchQuery = query;
  },
  MARK_SEEN_ALL_MESSAGES: function MARK_SEEN_ALL_MESSAGES(state, payload) {
    //console.log('MARK_SEEN_ALL_MESSAGES',payload.chatData)
    payload.chatData.forEach(function (msg) {
      msg.read = true;
    });
  },
  TOGGLE_IS_PINNED: function TOGGLE_IS_PINNED(state, payload) {
    state.chats[Object.keys(state.chats).find(function (key) {
      return key === payload.id;
    })].isPinned = payload.value;
  }
};
exports["default"] = _default;