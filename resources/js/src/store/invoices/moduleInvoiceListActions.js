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
      axios.post(`/api/invoice`, {
        name: data.name,
        description: data.description,
        user_id: data.user_id,
        price: data.price,
      })
        .then((response) => {
          commit('ADD_ITEM', Object.assign(data,
            {id: response.data.id,
              user_name: 'Sayfayı Yenileyiniz.',
              name: data.name,
              description: data.description,
              user_id: data.user_id,
              price: data.price
            }))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchInvoiceListItems({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/invoice")
        .then((response) => {
          console.log('invoices',response.data.data)
          commit('SET_INVOICES', response.data.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  // fetchEventLabels({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     axios.get("/api/apps/calendar/labels")
  //       .then((response) => {
  //         commit('SET_LABELS', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },

  updateItem({ commit }, data) {
    return new Promise((resolve, reject) => {
      console.log('payload',data)
      axios.patch(`/api/invoice/${data.id}`,{
        name: data.name,
        description: data.description,
        user_id: data.user_id,
        price: data.price,
        status: data.status,
      })
        .then((response) => {
          commit('UPDATE_INVOICE', data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  removeItem({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/invoice/${itemId}`)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  findUser({ commit }, userId) {
    return new Promise((resolve, reject) => {
      axios.get(`/api/users/${userId}`)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  // eventDragged({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.post(`/api/apps/calendar/event/dragged/${payload.event.id}`, {payload: payload})
  //       .then((response) => {

  //         // Convert Date String to Date Object
  //         let event = response.data
  //         event.startDate = new Date(event.startDate)
  //         event.endDate = new Date(event.endDate)

  //         commit('UPDATE_EVENT', event)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
}
