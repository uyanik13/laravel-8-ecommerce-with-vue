"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("../../plugins/axios.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*=========================================================================================
  File Name: moduleChatActions.js
  Description: Chat Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
var _default = {
  setChatSearchQuery: function setChatSearchQuery(_ref, query) {
    var commit = _ref.commit;
    commit('SET_CHAT_SEARCH_QUERY', query);
  },
  updateAboutChat: function updateAboutChat(_ref2, value) {
    var commit = _ref2.commit,
        rootState = _ref2.rootState;
    commit('UPDATE_ABOUT_CHAT', {
      rootState: rootState,
      value: value
    });
  },
  updateStatusChat: function updateStatusChat(_ref3, value) {
    var commit = _ref3.commit,
        rootState = _ref3.rootState;
    commit('UPDATE_STATUS_CHAT', {
      rootState: rootState,
      value: value
    });
  },
  // API CALLS
  sendChatMessage: function sendChatMessage(_ref4, payload) {
    var getters = _ref4.getters,
        commit = _ref4.commit,
        dispatch = _ref4.dispatch;
    return new Promise(function (resolve, reject) {
      _axios["default"].post('/api/message', {
        payload: payload
      }).then(function (response) {
        payload.chatData = getters.chatOrdered(payload.to);

        if (!payload.chatData) {
          dispatch('fetchChatContacts');
        }

        commit('SEND_CHAT_MESSAGE', payload);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },

  /*
  // Get contacts from server. Also change in store
  fetchContacts ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/contacts', {params: {q: ''}})
        .then((response) => {
          //console.log('contacts',response.data)
          commit('UPDATE_CONTACTS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  */
  // Get chat-contacts from server. Also change in store
  fetchChatContacts: function fetchChatContacts(_ref5) {
    var commit = _ref5.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].get('/api/user/contacts').then(function (response) {
        //console.log('chat',response.data.my_following_data)
        commit('UPDATE_CHAT_CONTACTS', response.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  // Get chats from server. Also change in store
  fetchChats: function fetchChats(_ref6) {
    var commit = _ref6.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].get('/api/message').then(function (response) {
        commit('UPDATE_CHATS', response.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  markSeenAllMessages: function markSeenAllMessages(_ref7, id) {
    var getters = _ref7.getters,
        commit = _ref7.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].post('/api/MarkAllSeen', {
        id: id
      }).then(function (response) {
        commit('MARK_SEEN_ALL_MESSAGES', {
          id: id,
          chatData: getters.chatOrdered(id)
        });
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  toggleIsPinned: function toggleIsPinned(_ref8, payload) {
    var commit = _ref8.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].post('/api/apps/chat/set-pinned/', {
        contactId: payload.id,
        value: payload.value
      }).then(function (response) {
        commit('TOGGLE_IS_PINNED', payload);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  sendChatMessageForMutation: function sendChatMessageForMutation(_ref9, payload) {
    var getters = _ref9.getters,
        commit = _ref9.commit,
        dispatch = _ref9.dispatch;
    payload.chatData = getters.chatOrdered(payload.to);

    if (!payload.chatData) {
      dispatch('fetchChatContacts');
    }

    commit('SEND_CHAT_MESSAGE', payload);
  }
};
exports["default"] = _default;