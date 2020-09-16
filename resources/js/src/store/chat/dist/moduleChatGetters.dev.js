"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*=========================================================================================
  File Name: moduleChatGetters.js
  Description: Chat Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
// import contacts from '@/views/apps/chat/contacts'
var _default = {
  chatOrdered: function chatOrdered(state) {
    return function (id) {
      var chats = state.chats[id]; //console.log('chats',chats)

      if (chats) {
        var duplicated_array = chats.slice();
        var sorted_array = duplicated_array.sort(function (a, b) {
          return a.id - b.id;
        });
        return sorted_array;
      } else return false;
    };
  },
  chatContacts: function chatContacts(state, getters) {
    var chatContacts = state.chatContacts.filter(function (contact) {
      return contact.name.toLowerCase().includes(state.chatSearchQuery.toLowerCase());
    });
    chatContacts.sort(function (x, y) {
      var timeX = getters.chatLastMessaged(x.id).id;
      var timeY = getters.chatLastMessaged(y.id).id;
      return new Date(timeY) - new Date(timeX);
    });
    return chatContacts.sort(function (x, y) {
      var chatDataX = getters.chatOrdered(x.id);
      var chatDataY = getters.chatOrdered(y.id);
      if (chatDataX && chatDataY) return chatDataY.isPinned - chatDataX.isPinned;else return 0;
    });
  },
  contacts: function contacts(state) {
    return state.contacts.filter(function (contact) {
      return contact.name.toLowerCase().includes(state.chatSearchQuery.toLowerCase());
    });
  },
  contact: function contact(state) {
    return function (id) {
      return state.contacts.find(function (contact) {
        return contact.id === id;
      });
    };
  },
  chats: function chats(state) {
    return state.chats;
  },
  chatUser: function chatUser(state, getters, rootState) {
    return function (id) {
      return state.contacts.find(function (contact) {
        return contact.id === id;
      }) || rootState.AppActiveUser;
    };
  },
  chatLastMessaged: function chatLastMessaged(state, getters) {
    return function (id) {
      if (getters.chatOrdered(id)) {
        var last_message = getters.chatOrdered(id)[getters.chatOrdered(id).length - 1];
        return last_message.msg;
      } else return '...';
    };
  },
  chatUnseenMessages: function chatUnseenMessages(state, getters) {
    return function (id) {
      var unseenMsg = 0;
      var chatData = getters.chatOrdered(id);

      if (chatData) {
        //console.log('chatUnseenMessages',id)
        chatData.map(function (msg) {
          if (msg.from === id && !msg.read) unseenMsg++;
        });
      }

      return unseenMsg;
    };
  }
};
exports["default"] = _default;