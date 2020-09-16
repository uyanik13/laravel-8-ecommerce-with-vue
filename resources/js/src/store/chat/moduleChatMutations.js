/*=========================================================================================
  File Name: moduleChatMutations.js
  Description: Chat Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'

export default {
  UPDATE_ABOUT_CHAT (state, obj) {
    obj.rootState.AppActiveUser.about = obj.value
  },
  UPDATE_STATUS_CHAT (state, obj) {
    obj.rootState.AppActiveUser.status = obj.value
  },

  // API AFTER
  SEND_CHAT_MESSAGE (state, payload) {
    //console.log(payload)
    if (payload.chatData) {
      state.chats[Object.keys(state.chats)
        .find(key => key === payload.to)]
        .push(payload)
    } else {
      // Create New chat and add msg
      const chatId = payload.to
      Vue.set(state.chats, [chatId], [
        {  
          from : payload.from,
          to : payload.to,
          msg  : payload.msg,
          created_at : payload.created_at,
          read : false
        }
      ]
      )
    }
  },
  UPDATE_CONTACTS (state, contacts) {
    state.contacts = contacts
  },
  UPDATE_CHAT_CONTACTS (state, chatContacts) {
    state.chatContacts = chatContacts
  },
  UPDATE_CHATS (state, chats) {
    state.chats = chats
  },
  SET_CHAT_SEARCH_QUERY (state, query) {
    state.chatSearchQuery = query
  },
  MARK_SEEN_ALL_MESSAGES (state, payload) {
    //console.log('MARK_SEEN_ALL_MESSAGES',payload.chatData)
    payload.chatData.forEach((msg) => {
      msg.read = true
    })
  },
  TOGGLE_IS_PINNED (state, payload) {
    state.chats[Object.keys(state.chats).find(key => key === payload.id)].isPinned = payload.value
  }
}

