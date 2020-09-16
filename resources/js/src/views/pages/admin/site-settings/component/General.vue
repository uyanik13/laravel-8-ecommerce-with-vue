<template>
  <vx-card no-shadow>


<!--    <vs-input class="w-full mb-base" name="username" disabled="" label-placeholder="Username" v-model="currentUserData.username"></vs-input>-->


    <div class="flex flex-wrap items-center mb-base">
      <vs-avatar :src="logo"  size="120px" class="mr-4 mb-4" />
      <div>
        <input type="file" class="hidden" ref="updateImgInput" @change="update_avatar" accept="image/*">
        <vs-button class="mr-4 sm:mb-0 mb-2" @click="$refs.updateImgInput.click()">Logo Yükle</vs-button>
      </div>
    </div>
    <vs-input class="w-full mb-base" name="facebook" icon-pack="feather" icon="icon-facebook"  :label-placeholder="$t('Facebook')" v-model="facebook"></vs-input>
    <vs-input class="w-full mb-base" name="instagram" icon-pack="feather" icon="icon-instagram" :label-placeholder="$t('Instagram')" v-model="instagram"></vs-input>
    <vs-input class="w-full mb-base" name="youtube" icon-pack="feather" icon="icon-youtube" :label-placeholder="$t('Youtube')" v-model="youtube"></vs-input>
    <vs-input class="w-full mb-base" name="linkedin" icon-pack="feather" icon="icon-linkedin" :label-placeholder="$t('Linkedin')" v-model="linkedin"></vs-input>
    <vs-input class="w-full mb-base" name="twitter"  icon-pack="feather" icon="icon-twitter" :label-placeholder="$t('Twitter')" v-model="twitter"></vs-input>
    <vs-input class="w-full mb-base" name="google"  icon-pack="material" icon="mdi-google" :label-placeholder="$t('Google')" v-model="google"></vs-input>
    <vs-input class="w-full mb-base" name="pinterest" icon-pack="feather" icon="icon-pinterest" :label-placeholder="$t('Pinterest')" v-model="pinterest"></vs-input>
    <vs-input class="w-full mb-base" name="address" icon-pack="feather" icon="icon-map-pin" :label-placeholder="$t('Address')" v-model="address"></vs-input>
    <vs-input class="w-full mb-base" name="phone" icon-pack="feather" icon="icon-phone" :label-placeholder="$t('Phone')" v-model="phone"></vs-input>
    <vs-input class="w-full mb-base" name="email" icon-pack="feather" icon="icon-mail" :label-placeholder="$t('Email')" v-model="email"></vs-input>
    <vs-input class="w-full mb-base" name="site_url" icon-pack="feather" icon="icon-link" :label-placeholder="$t('SiteUrl')" v-model="site_url"></vs-input>
    <vs-input class="w-full mb-base" name="map_iframe" icon-pack="feather" icon="icon-map" :label-placeholder="$t('map_iframe')" v-model="map_iframe"></vs-input>
    <vs-input class="w-full mb-base" name="site_name" icon-pack="feather" icon="icon-airplay" :label-placeholder="$t('site_name')" v-model="site_name"></vs-input>
    <vs-input class="w-full mb-base" name="site_video" icon-pack="feather" icon="icon-play" :label-placeholder="$t('site_video')" v-model="site_video"></vs-input>
    <vs-input class="w-full mb-base" name="currency" icon-pack="feather" icon="icon-dollar-sign" :label-placeholder="$t('currency')" v-model="currency"></vs-input>


    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2" @click="save_changes">Kaydet</vs-button>
<!--      <vs-button class="ml-4 mt-2" type="border" color="warning">Reset</vs-button>-->
    </div>
  </vx-card>
</template>

<script>

import setting from '@/store/setting/setting'

export default {
  created () {
    if (!setting.isRegistered) {
      this.$store.registerModule('settings', setting)
      setting.isRegistered = true
    }
    this.$store.dispatch('settings/fetchItems')
      .then((response) => {
        response.data.forEach(element => {
          return this[element.name] = element.value
        }
        )
      })
  },
  mounted () {
    this.isMounted = true
  },
  data () {
    return {
      logo :'',
      facebook :'',
      instagram :'',
      youtube :'',
      linkedin :'',
      twitter :'',
      google :'',
      pinterest :'',
      address :'',
      phone :'',
      email :'',
      site_url :'',
      map_iframe :'',
      site_name :'',
      site_video :'',
      currency :'',
      settingsDataAll:[]
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any()
    },
    settingsData () {
      return this.$store.state.setting.settings
    }
  },
  methods:{
    update_avatar (input) {
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.logo = e.target.result
          console.log('IMAGEURL', e.target.result)
        }
        reader.readAsDataURL(input.target.files[0])
      }
    },
    save_changes () {
      if (!this.validateForm) return
      const payload = {
        logo: this.logo,
        facebook: this.facebook,
        instagram :this.instagram,
        linkedin :this.linkedin,
        youtube :this.youtube,
        twitter :this.twitter,
        google :this.google,
        pinterest :this.pinterest,
        address :this.address,
        phone :this.phone,
        email :this.email,
        site_url :this.site_url,
        map_iframe :this.map_iframe,
        site_name :this.site_name,
        site_video :this.site_video,
        currency :this.currency
      }
      this.$store.dispatch('setting/addItem', payload)
        .then((response) => {
          this.$vs.loading.close()
          if (response.data) this.$vs.notify({
            title: 'Başarılı',
            text: 'Başarıyla Güncellendi',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'success'
          })
        })
        .catch(error => {
          this.$vs.loading.close()
          this.$vs.notify({
            title: 'Hata',
            text: error.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
        })

    }

  }
}
</script>
