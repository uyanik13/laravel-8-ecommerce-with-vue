/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/

import axios from '../../plugins/axios.js'

export default {
  addItem ({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.post('/api/token', data)
        .then((response) => {
          commit('ADD_ITEM', data)
          //console.log(response)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },


  fetchItems ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/token')
        .then((response) => {
          //console.log('data from subs',response.data)
          commit('SET_ITEM', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },


  updateItem ({ commit }, data) {
    return new Promise((resolve, reject) => {
      //console.log('payload',data)
      axios.patch(`/api/token/${data.id}`, data)
        .then((response) => {
          commit('UPDATE_ITEM', data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },


  removeItem ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/token/${itemId}`)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },


  //token request
  fetchTokenRequest ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/token-request')
        .then((response) => {
          //console.log('data from subs',response.data)
          commit('SET_TOKEN_REQUEST', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  addTokenRequest ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.post('/api/token-request')
        .then((response) => {
          console.log(response.data.item)
          commit('ADD_TOKEN_REQUEST', response.data.item)
          //console.log(response)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  removeTokenRequest ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/token-request/${itemId}`)
        .then((response) => {
          commit('REMOVE_TOKEN_REQUEST', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  updateTokenRequest ({ commit }, data) {
    return new Promise((resolve, reject) => {
      //console.log('payload',data)
      axios.patch(`/api/token-request/${data.id}`, data)
        .then((response) => {
          commit('UPDATE_TOKEN_REQUEST', data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
