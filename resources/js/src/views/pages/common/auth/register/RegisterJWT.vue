<!-- =========================================================================================
File Name: RegisterJWT.vue
Description: Register Page for JWT
----------------------------------------------------------------------------------------
Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
Author URL: https://www.dijitalreklam.org
========================================================================================== -->


<template>
  <div class="clearfix">
    <vs-input
      v-validate="'required|min:3'"
      data-vv-validate-on="blur"
      :label-placeholder="$t('NameAndSurname')"
      name="displayName"
      v-model="displayName"
      class="w-full" />
    <span class="text-danger text-sm">{{ errors.first('displayName')? $t('NameRequried') : '' }}</span>

    <vs-input
      v-validate="'required|email'"
      data-vv-validate-on="blur"
      name="email"
      type="email"
      :label-placeholder="$t('Email')"
      v-model="email"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('email')? $t('EmailRequried') : '' }}</span>


    <!--<vs-input
      v-validate="'required|min:10|max:12'"
      data-vv-validate-on="blur"
      name="phone"
      type="phone"
      label-placeholder="Telefon Numarası"
      placeholder="Telefon Numaranızı Giriniz"
      v-model="phone"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('phone') ? 'Telefon No Gerekli' : ''}}</span>-->


    <vs-input
      ref="password"
      type="password"
      data-vv-validate-on="blur"
      v-validate="'required|min:6|max:10'"
      name="password"
      :label-placeholder="$t('Password')"
      v-model="password"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('password') ? $t('PasswordRequired') : ''}}</span>

    <vs-input
      type="password"
      v-validate="'min:6|max:10|confirmed:password'"
      data-vv-validate-on="blur"
      data-vv-as="password"
      name="confirm_password"
      :label-placeholder="$t('PasswordConfirm')"
      v-model="confirm_password"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('confirm_password') ? $t('PasswordConfirmRequired') : ''}}</span>

    <vs-checkbox v-model="isTermsConditionAccepted" class="mt-6">{{$t('TermsAndConditions')}}</vs-checkbox>
    <vs-button  type="border"  @click="loginUser()" class="mt-6">{{$t('GoToLogin')}}</vs-button>
    <vs-button class="float-right mt-6" @click="registerUserJWt" :disabled="!validateForm">{{$t('Register')}}</vs-button>
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
      displayName: '',
      email: '',
      phone: '',
      user_ref_number: '',
      store_name: '',
      password: '',
      confirm_password: '',
      isTermsConditionAccepted: true
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.displayName != '' && this.email != ''   && this.password != '' && this.confirm_password != '' && this.isTermsConditionAccepted === true
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
    registerUserJWt () {
      if (!this.validateForm) return
      this.$vs.loading()
      const payload = {
        userDetails: {
          name: this.displayName,
          phone:this.phone,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirm_password
        },
        notify: this.$vs.notify
      }
      this.$store.dispatch('auth/registerUserJWT', payload)
        .then((response) => {
          this.$vs.loading.close()
          this.showAlert(i18n.t('Success'), i18n.t('yourAccountCreated'), 'icon-success', 'success')
          //console.log('rSTATUS', response.data.status)
          if (response.data.status === 'verification.sent') this.$router.push({ name: 'login'})
        })
        .catch(error => {
          this.$vs.loading.close()
          this.$vs.notify({
            title: 'Error',
            text: error.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
        })
    },
    loginUser () {
      this.$router.push({ name: 'login'}).catch(() => {})
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
