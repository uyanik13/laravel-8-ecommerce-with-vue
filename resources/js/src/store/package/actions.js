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
      axios.post('/api/package', data)
        .then((response) => {
          commit('ADD_ITEM', data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },


  fetchItems ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/package')
        .then((response) => {
          // console.log('data from content',response.data)
          commit('SET_ITEM', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },


  updateItem ({ commit }, data) {
    return new Promise((resolve, reject) => {
      //console.log('payload',data)
      axios.patch(`/api/package/${data.id}`, data)
        .then((response) => {
          commit('UPDATE_ITEM', data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },


  removeItem ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/package/${itemId}`)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }


}
