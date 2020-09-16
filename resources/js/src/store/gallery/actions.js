/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/

import axios from "../../plugins/axios.js"

export default {
  addItem({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/gallery`, data)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },


  fetchItems({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/gallery")
        .then((response) => {
          console.log('response gallery',response.data)
          commit('SET_ITEM', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  removeItem({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/gallery/${itemId}`)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },


}
