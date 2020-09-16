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
      axios.post(`/api/subscription`, data)
        .then((response) => {
          commit('ADD_ITEM', data)
          //console.log(response)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },


  fetchItems({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/subscription")
        .then((response) => {
         //console.log('data from subs',response.data)
          commit('SET_ITEM', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },


  updateItem({ commit }, data) {
    return new Promise((resolve, reject) => {
      //console.log('payload',data)
      axios.patch(`/api/subscription/${data.id}`,data)
        .then((response) => {
          commit('UPDATE_ITEM', data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },


  removeItem({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/subscription/${itemId}`)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },


}
