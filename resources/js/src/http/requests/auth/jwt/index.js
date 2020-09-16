import axios from 'axios'
import store from '../../../../store/store.js'
import Cookies from 'js-cookie'
import router from '@/router'
// Token Refresh
let isAlreadyFetchingAccessToken = false
let subscribers = []

function onAccessTokenFetched (access_token) {
  subscribers = subscribers.filter(callback => callback(access_token))
}

function addSubscriber (callback) {
  subscribers.push(callback)
}

export default {
  init () {
    axios.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      // const { config, response: { status } } = error
      const { config, response } = error
      const originalRequest = config

      // if (status === 401) {
      if (response && response.status === 401) {
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true
          store.dispatch('auth/refreshToken')
            .then((access_token) => {
              isAlreadyFetchingAccessToken = false
              onAccessTokenFetched(access_token)
            })
        }

        const retryOriginalRequest = new Promise((resolve) => {
          addSubscriber(access_token => {
            originalRequest.headers.Authorization = `Bearer ${access_token}`
            Cookies.set('token', access_token)
            resolve(axios(originalRequest))
            router.push(router.currentRoute.query.to || '/')
          })
        })
        return retryOriginalRequest
      }
      return Promise.reject(error)
    })
  },

  login (email, pwd) {
    return axios.post('/api/login', {email, password: pwd})
  },
  fetchUser () {
    return axios.get('/api/user')
  },

  fetchStore () {
    return axios.get('/api/store')
  },

  fetchUsers () {
    return axios.get('/api/users')
  },
  registerUser (name, email, phone,  password, confirmPassword) {
    return axios.post('/api/register', {name, email, phone,  password, password_confirmation:confirmPassword})
  },
  emailVerifyApi (email) {
    return axios.post('/api/emailResendApi', {email})
  },

  refreshToken () {
    return axios.get('/api/refresh')
  }

}
