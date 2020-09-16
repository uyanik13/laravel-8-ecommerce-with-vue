import axios from 'axios'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import i18n from '../i18n/i18n'
import router from '@/router'
import store from '@/store/store.js'
import moduleAuth from '../store/auth/moduleAuth.js'
import Vue from 'vue'
import {AclInstaller, AclCreate, AclRule } from 'vue-acl'
Vue.use(AclInstaller)

// Request interceptor


// Response interceptor
axios.interceptors.response.use(response => response, error => {
  const { status } = error.response
  const { config, response } = error
  const originalRequest = config

  //   if (status >= 500) {
  //     Swal.fire({
  //       type: 'error',
  //       title: i18n.t('error_alert_title'),
  //       text: i18n.t('error_alert_text'),
  //       reverseButtons: true,
  //       confirmButtonText: i18n.t('ok'),
  //       cancelButtonText: i18n.t('cancel')
  //     }).then(r => console.log('axios',r))
  //   }
  //console.log('rest', response)

  if (status && status === 401 && response.config.url === '/api/user') {
    Swal.fire({
      type: 'warning',
      title: i18n.t('token_expired_alert_title'),
      text: i18n.t('token_expired_alert_text'),
      reverseButtons: true,
      confirmButtonText: i18n.t('ok')
    }).then((r) => {
      axios.get('/api/refresh')
        .then((response) => {
          console.log('token', response.data)
          originalRequest.headers.Authorization = `Bearer ${response.data}`
          Cookies.remove('token')
          Cookies.set('token', response.data)
        })
      router.push(router.currentRoute.query.to || '/panel/login')
    }).catch((error) => {
      console.log('ERROR:', error)
    })
  }

  return Promise.reject(error)
})


export default axios
