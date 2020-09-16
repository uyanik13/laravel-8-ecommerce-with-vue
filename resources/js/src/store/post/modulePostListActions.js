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
      axios.post('/api/post', data)
        .then((response) => {
          console.log('payload', response.data)
          if (response.data.type === 'page')    commit('ADD_PAGE', response.data)
          if (response.data.type === 'post')    commit('ADD_ITEM', response.data)
          if (response.data.type === 'product') commit('ADD_PRODUCT', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  addCategory ({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.post('/api/addCategory', data)
        .then((response) => {
          commit('ADD_CATEGORY', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchItems ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/post')
        .then((response) => {
          //console.log('POST ACTION - POSTS:', response.data)
          response.data.posts.forEach(element => {
            const page = response.data.posts.filter(element => element.type === 'page')
            const post = response.data.posts.filter(element => element.type === 'post')
            const service = response.data.posts.filter(element => element.type === 'service')
            const product = response.data.posts.filter(element => element.type === 'product')
            const certificate = response.data.posts.filter(element => element.type === 'certificate')

            commit('SET_PAGES', page)
            commit('SET_ITEM', post)
            commit('SET_SERVICES', service)
            commit('SET_PRODUCTS', product)
            commit('SET_CERTIFICATE', certificate)
          })
          commit('SET_CATEGORIES', response.data.categories)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  updateItem ({ commit }, data) {
    return new Promise((resolve, reject) => {

      axios.patch(`/api/post/${data.id}`, data)
        .then((response) => {
          console.log('payload', response.data)
          if (data.type === 'post') commit('UPDATE_ITEM', data)
          if (data.type === 'page') commit('UPDATE_PAGE', data)
          if (data.type === 'category') commit('UPDATE_CATEGORY', data)
          if (data.type === 'certificate') commit('UPDATE_CERTIFICATE', data)
          if (data.type === 'service') commit('UPDATE_SERVICES', data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  updateCategory ({ commit }, data) {
    return new Promise((resolve, reject) => {
      //console.log('payload',data)
      axios.post('/api/updateCategory', data)
        .then((response) => {
          commit('UPDATE_CATEGORY', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  removeItem ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/post/${itemId}`)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          commit('REMOVE_PRODUCT', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  removeCategory ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.post('/api/removeCategory', {
        id: itemId
      })
        .then((response) => {
          commit('REMOVE_CATEGORY', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },


  //Custom
  fetchMyCases ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/cases/my-cases')
        .then((response) => {
          // console.log('POST ACTION - POSTS:',response.data.posts)
          response.data.posts.forEach(element => {
            // const page = response.data.posts.filter(element => element.type === 'page');
            // const post = response.data.posts.filter(element => element.type === 'post');
            // const product = response.data.posts.filter(element => element.type === 'product');
            // const certificate = response.data.posts.filter(element => element.type === 'certificate'):
            const service = response.data.posts.filter(element => element.type === 'service')
            commit('SET_MyServices', service)
          })
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchMyContracts ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/contract')
        .then((response) => {
          // console.log('POST ACTION - CONTRACTS:',response.data)
          commit('SET_CONTRACTS', response.data)

          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  createContract ({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.post('/api/contract', data)
        .then((response) => {
          commit('ADD_CONTRACT', Object.assign(data,
            {
              id: response.data.id,
              post_id: data.post_id,
              from:data.id
            }))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  updateContract ({ commit }, data) {
    return new Promise((resolve, reject) => {
      //console.log('payload',data)
      axios.patch(`/api/contract/${data.id}`, data)
        .then((response) => {
          commit('UPDATE_CONTRACTS', data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchCountries ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/geo')
        .then((response) => {
          // console.log('POST ACTION - POSTS:',response.data)
          commit('SET_COUNTRIES', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchCities ({ commit }, data) {
    return new Promise((resolve, reject) => {
      //console.log('payload',data)
      axios.get(`/geo/${data}`)
        .then((response) => {
          commit('SET_CITIES', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }

}
