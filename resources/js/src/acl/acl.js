import Vue from 'vue'
import {AclInstaller, AclCreate, AclRule } from 'vue-acl'
Vue.use(AclInstaller)
import router from '@/router'
//import jwt from '@/http/requests/auth/jwt/index.js'
let initialRole = 'guest'

const userInfo = JSON.parse(localStorage.getItem('userInfo'))
if (userInfo && userInfo.role) initialRole = userInfo.role


export default new AclCreate({


  initial: initialRole,
  notfound: '/panel/login',
  router,
  acceptLocalRules: true,
  globalRules: {
    admin: new AclRule('admin').generate(),
    user: new AclRule('user').generate(),
    common: new AclRule('user').or('admin').generate(),
    guest: new AclRule('guest').generate()
    // public: new AclRule("public").or("admin").or("editor").generate(),
  }
  /*middleware: async acl => {
    jwt.fetchUser()
      .then(response => {
        acl.change(response.data.role)
      })
      .catch(error => { console.log('ERROR jwt.fetchUser()',error) })

  }*/


})

