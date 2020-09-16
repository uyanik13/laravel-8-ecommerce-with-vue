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

  fetchItems ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/admin')
        .then((response) => {
          commit('SET_ORDERS', response.data.orders)
          commit('SET_PAYMENTS', response.data.payments)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  updateOrder ({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.patch(`/api/order/${data.id}`, data)
        .then((response) => {
          console.log('payload', response.data)
          commit('UPDATE_ORDER', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },


}
