/*=========================================================================================
  File Name: moduleChatActions.js
  Description: Chat Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '../../plugins/axios.js'

export default {
  setChatSearchQuery ({ commit }, query) {
    commit('SET_CHAT_SEARCH_QUERY', query)
  },
  updateAboutChat ({ commit, rootState }, value) {
    commit('UPDATE_ABOUT_CHAT', {
      rootState,
      value
    })
  },
  updateStatusChat ({ commit, rootState }, value) {
    commit('UPDATE_STATUS_CHAT', {
      rootState,
      value
    })
  },

  // API CALLS
  sendChatMessage ({ getters, commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      axios.post('/api/message', {payload})
        .then((response) => {
          payload.chatData = getters.chatOrdered(payload.to)
          if (!payload.chatData) { dispatch('fetchChatContacts') }
          commit('SEND_CHAT_MESSAGE', payload)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
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
  fetchChatContacts ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/user/contacts')
        .then((response) => {
          //console.log('chat',response.data.my_following_data)
          commit('UPDATE_CHAT_CONTACTS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  // Get chats from server. Also change in store
  fetchChats ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/message')
        .then((response) => {
          commit('UPDATE_CHATS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  markSeenAllMessages ({ getters, commit }, id) {

    return new Promise((resolve, reject) => {
      axios.post('/api/MarkAllSeen', {id})
        .then((response) => {
          commit('MARK_SEEN_ALL_MESSAGES', {
            id,
            chatData: getters.chatOrdered(id)
          })
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  toggleIsPinned ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.post('/api/apps/chat/set-pinned/', {contactId: payload.id,
        value: payload.value})
        .then((response) => {
          commit('TOGGLE_IS_PINNED', payload)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  sendChatMessageForMutation ({ getters, commit, dispatch }, payload) {
    payload.chatData = getters.chatOrdered(payload.to)
    if (!payload.chatData) { dispatch('fetchChatContacts') }
    commit('SEND_CHAT_MESSAGE', payload)
  }


}
