<template>
  <div>
    <vs-input
        v-validate="'required|email|min:3'"
        data-vv-validate-on="blur"
        name="email"
        icon-no-border
        icon="icon icon-user"
        icon-pack="feather"
        :label-placeholder="$t('Email')"
        v-model="email"
        class="w-full"/>
    <span class="text-danger text-sm">{{ errors.first('email')? $t('EmailRequired') : '' }}</span>

    <vs-input
        data-vv-validate-on="blur"
        v-validate="'required|min:6|max:24'"
        type="password"
        name="password"
        icon-no-border
        icon="icon icon-lock"
        icon-pack="feather"
        :label-placeholder="$t('Password')"
        v-model="password"
        @keyup.enter="loginJWT"
        class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('password')? $t('PasswordRequired') : '' }}</span>

    <div class="flex flex-wrap justify-between my-5">
        <vs-checkbox v-model="checkbox_remember_me" class="mb-3">{{$t('RememberMe')}}</vs-checkbox>
        <router-link to="/panel/password/email">{{$t('ForgotPassword')}}</router-link>
    </div>
    <div class="flex flex-wrap justify-between mb-3">
      <vs-button  type="border" @click="registerUser">{{$t('Register')}}</vs-button>
      <vs-button :disabled="!validateForm"   @click="loginJWT">{{$t('Login')}}</vs-button>
    </div>
  </div>
</template>

<script>

import i18n from '@/i18n/i18n'

export default {
  created () {
    this.checkLogin()
  },
  data () {
    return {
      email: '',
      password: '',
      checkbox_remember_me: false
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.email !== '' && this.password !== ''
    }
  },
  methods: {
    checkLogin () {
      // If user is already logged in notify
      if (this.$acl.check('user')) {
        this.showAlert(i18n.t('Error'), i18n.t('you_are_logged_in'), 'icon-alert-circle', 'warning')
        return this.$router.push({ name: 'dashboard'})
      } else if (this.$acl.check('admin')) {
        this.showAlert(i18n.t('Error'), i18n.t('you_are_logged_in'), 'icon-alert-circle', 'warning')
        return this.$router.push({ name: 'admin-dashboard'})
      }
      return true
    },
    loginJWT () {
      this.$vs.loading()
      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('auth/loginJWT', payload)
        .then((response) => {
          // console.log('İÇ',response)
          this.$vs.loading.close()
          this.$acl.change(response.data.user.role)
          //this.$router.push({ name: 'user', params: { userId: '123' } })
          this.checkLogin()
        })
        .catch(error => {
          console.log(error)
          this.$vs.loading.close()
          this.showAlert(i18n.t('Error'), i18n.t('you_are_logged_in'), 'icon-alert-circle', 'warning')
        })
    },
    registerUser () {
      this.$router.push('/panel/register').catch(() => {})
    },
    showAlert (title, text, icon, color) {
      this.$vs.notify({
        title,
        text,
        iconPack: 'feather',
        icon,
        color
      })
    },
  }
}

</script>

