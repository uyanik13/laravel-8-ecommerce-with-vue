/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// import moduleTodo from './todo/moduleTodo.js'
// import moduleCalendar from './calendar/moduleCalendar.js'
// import moduleChat from './chat/moduleChat.js'
// import moduleEmail from './email/moduleEmail.js'

import moduleAdmin from './admin/admin.js'
import moduleECommerce from './ecommerce/moduleECommerce.js'
import tokenModule from './token/token.js'
import packageModule from './package/package.js'
import subscriptionModule from './subscription/subscription.js'
import moduleChat from './chat/moduleChat.js'
import ModuleGallery from './gallery/galleryModule.js'
import custom from './custom/custom.js'
import formList from './form/formList.js'
import setting from './setting/setting.js'
import modulePostList from './post/modulePostList.js'
import moduleInvoiceList from './invoices/moduleInvoiceList.js'
import moduleUserManagement from './user-management/moduleUserManagement.js'
import moduleAuth from './auth/moduleAuth.js'


export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  modules: {
    // todo: moduleTodo,
    // calendar: moduleCalendar,
    // email: moduleEmail,
    admin: moduleAdmin,
    eCommerce: moduleECommerce,
    package: packageModule,
    subscription: subscriptionModule,
    token: tokenModule,
    chat: moduleChat,
    gallery: ModuleGallery,
    custom,
    form: formList,
    setting,
    post: modulePostList,
    invoice: moduleInvoiceList,
    user: moduleUserManagement,
    auth: moduleAuth
  },
  strict: process.env.NODE_ENV !== 'production'
})
