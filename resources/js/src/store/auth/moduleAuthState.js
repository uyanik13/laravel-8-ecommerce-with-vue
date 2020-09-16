/*=========================================================================================
  File Name: moduleAuthState.js
  Description: Auth Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/

import Cookies from 'js-cookie'



export default {
  user: localStorage.getItem('userInfo'),
  token: Cookies.get('token'),
  role: Cookies.get('role')
}
