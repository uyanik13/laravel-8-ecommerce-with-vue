<template>
  <vx-card no-shadow>
<span>{{$t('VideoAboutYou')}}</span><br>
  <div class="flex flex-wrap items-center mb-base">
      <video :src="video"  height="250px" width="250px" class="mr-4 mb-4" />
      <div>
        <input type="file" class="hidden" ref="updateImgInput" @change="update_video" accept="video/*">
        <vs-button class="mr-4 sm:mb-0 mb-2" @click="$refs.updateImgInput.click()">{{$t('UploadVideoAboutYou')}}</vs-button>
        <p v-show="video !== null">{{$t('saveYourVideo')}}</p>
      </div>
    </div>

    <!-- Bio -->
    <vs-textarea label="Bio" v-model="bio" placeholder="Your bio..." />

    <!-- DOB -->
    <div class="mt-8">
      <label class="text-sm">Birth Date</label>
      <flat-pickr v-model="dob" :config="{ dateFormat: 'd F Y' }" class="w-full" />
    </div>

    <!-- Country -->
    <div class="mt-8">
      <label class="text-sm">Country</label>
      <v-select v-model="country" :options="countryOptions" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    </div>

    <!-- Languages -->
    <div class="mt-8">
      <label class="text-sm">Languages</label>
      <v-select v-model="lang_known" multiple :closeOnSelect="false" :options="langOptions" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    </div>

    <!-- Website  -->
    <vs-input class="w-full mt-8" label-placeholder="Website" v-model="website" />

    <!-- Gender -->
    <div class="mt-8 mb-base">
      <label class="text-sm">Gender</label>
      <div class="mt-2">
        <vs-radio v-model="gender" vs-value="male" class="mr-4">Male</vs-radio>
        <vs-radio v-model="gender" vs-value="female" class="mr-4">Female</vs-radio>
        <vs-radio v-model="gender" vs-value="other">Other</vs-radio>
      </div>
    </div>

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2"  @click="save_changes">{{$t('Save')}}</vs-button>
    </div>
  </vx-card>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'
import axios from 'axios'
import i18n from '@/i18n/i18n'

export default {
  components: {
    flatPickr,
    vSelect
  },
  created () {
    this.appendData()
  },
  data () {
    return {
      bio: null,
      dob: null,
      country: null,
      lang_known: [],
      gender: '',
      website: '',
      video: ''

    }
  },
  props: {
    user: {
      type: Object,
      default: () => {}
    },
    countryOptions: {
      type: Array,
      default: []
    },
    langOptions: {
      type: Array,
      default: []
    }
  },
  watch: {

  },
  computed: {
    validateForm () {
      return !this.errors.any()
    }
  },
  methods:{
    save_changes () {
      if (!this.validateForm) return
      const payload = {
        id: this.user.id,
        about_data :{
          bio: this.bio,
          dob: this.dob,
          country: this.country,
          lang_known: this.lang_known,
          website: this.website,
          gender: this.gender
        },
        video: this.video
      }
      this.$store.dispatch('user/updateUser', payload)
        .then((response) => {
          this.$vs.loading.close()
          if (response.data) this.$vs.notify({
            title: 'Success',
            text: 'Succesfully updated',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'success'
          })
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
    appendData () {
      this.bio = this.user.about_data[0].bio
      this.dob = this.user.about_data[0].dob
      this.country = this.user.about_data[0].country
      this.lang_known = this.user.about_data[0].lang_known
      this.gender = this.user.about_data[0].gender
      this.website = this.user.about_data[0].website
      this.video = this.user.about_data[0].video
    },
    update_video (input) {

      if (input.target.files[0].size > 100388000) {
        this.showAlert(i18n.t('Error'), i18n.t('Max100MbUploadLimited'), 'icon-alert-circle', 'danger')
      } else if (input.target.files && input.target.files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.video = e.target.result
          //console.log('IMAGEURL',e.target.result)
        }
        reader.readAsDataURL(input.target.files[0])
      }
    },
    showAlert (title, text, icon, color) {
      this.$vs.notify({
        title,
        text,
        iconPack: 'feather',
        icon,
        color
      })
    }

  }

}
</script>
