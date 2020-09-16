<template>
  <vx-card no-shadow>

    <div class="flex flex-wrap items-center mb-base">
      <vs-avatar :src="logo" v-if="logo === null" size="70px" class="mr-4 mb-4" />
      <vs-avatar :src="logo" v-else size="70px" class="mr-4 mb-4" />
      <div>
        <input type="file" class="hidden" ref="updateImgInput" @change="update_avatar" accept="image/*">
        <vs-button class="mr-4 sm:mb-0 mb-2" @click="$refs.updateImgInput.click()">{{$t('UploadLogo')}}</vs-button>
        <p v-show="logo !== null"> {{$t('SaveYourLogo')}}</p>
      </div>
    </div>

    <vs-input class="w-full mb-base" name="name" :label="$t('CompanyName')" :placeholder="$t('CompanyName')" v-model="name"></vs-input>

    <!-- Bio -->
    <vs-textarea :label="$t('AboutYourCompany')" v-model="bio" :placeholder="$t('AboutYourCompany')" />

    <div class="mt-8 mb-base">
      <label class="text-sm">{{$t('CompanyType')}}</label>
      <div class="mt-2">
        <vs-radio v-model="type" vs-value="law" class="mr-4">{{$t('Law')}}</vs-radio>
        <vs-radio v-model="type" vs-value="other">{{$t('Other')}}</vs-radio>
      </div>
    </div>


    <vs-input class="w-full mb-base"
              v-validate="'required|min:10|max:13'"
              :label="$t('PhoneNumber')"
              :placeholder="$t('PhoneNumber')"
              name="phone"
              v-model="phone"></vs-input>
    <span class="text-danger text-sm"
          v-show="errors.has('phone')">
      {{ errors.first('phone') ? $t('Valid Phone Number Required') : '' }}</span>

    <vs-input class="w-full mb-base"
              v-validate="'email'"
               name="email"
              :label="$t('Email')"
              :placeholder="$t('Email')"
              v-model="email"></vs-input>
    <span class="text-danger text-sm"
          v-show="errors.has('email')">
      {{ errors.first('email') ? $t('Valid Email Required') : '' }}</span>


    <vs-input class="w-full mb-base"
              :label="$t('Address')"
              :placeholder="$t('Address')"
              v-model="address"></vs-input>

    <!-- Website  -->
    <vs-input class="w-full mt-8"
              :label="$t('Website')"
              :label-placeholder="$t('Website')"
              v-model="website" />

    <div class="mt-3">
      <!-- SEO TITLE -->
      <vs-input :label="$t('SeoTitle')" v-model="seo_title" class="mt-5 w-full"  />
      <span class="text-danger text-sm" v-show="errors.has('seo_title')">{{ errors.first('seo_title') ? $t('Seo Title Required | Max 71 Character') : '' }}</span>
      <vs-progress :percent="Number(seo_title ? seo_title.length : 0 )" :color="getPopularityColorTitle(Number(seo_title ? seo_title.length : 0))" class="shadow-md" />

      <!-- SEO DESCRIPTION -->
      <vs-input :label="$t('SeoDescription')" v-model="seo_description" class="mt-5 w-full"  />
      <span class="text-danger text-sm" v-show="errors.has('seo_description')">{{ errors.first('seo_description') ? $t('Seo Description Required | Max 160 Character') : '' }}</span>
      <vs-progress :percent="Number(seo_description ? seo_description.length : 0)" :color="getPopularityColorDescription(Number(seo_description ? seo_description.length : 0))" class="shadow-md" />
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
import axios from 'axios';


export default {
  components: {
    flatPickr,
    vSelect
  },
  created() {
  this.appendData()
  },
  data() {
    return {
      bio: null,
      name: null,
      country: null,
      lang_known: [],
      type: "",
      email: "",
      address: "",
      phone: "",
      website: "",
      logo: "",
      seo_title: "",
      seo_description: "",

    }
  },
  props: {
    user: {
      type: Object,
      default: () => {},
    },
    countryOptions: {
      type: Array,
      default: [],
    },
    langOptions: {
      type: Array,
      default: [],
    },
  },
  watch: {

  },
  computed: {
    validateForm() {
      return !this.errors.any()
    },
  },
  methods:{
    getPopularityColorTitle(num) {
      if(num > 71) return "dark"
      if(num >= 60 && num <= 71) return "success"
      if(num < 60) return "primary"
      return "primary"
    },
    getPopularityColorDescription(num) {
      if(num > 160) return "dark"
      if(num >= 145 && num <= 170) return "success"
      if(num < 145) return "primary"
      return "primary"
    },
    save_changes() {
      if(!this.validateForm) return
      const payload = {
        id: this.user.id,
          bio: this.bio,
          name: this.name,
          email: this.email,
          phone: this.phone,
          address: this.address,
          website: this.website,
          logo: this.logo,
          type: this.type,
          seo_title: this.seo_title,
          seo_description: this.seo_description,
      }
      this.$store.dispatch('user/updateCompany',payload)
        .then((response) => { this.$vs.loading.close()
          if(response.data)
            this.$vs.notify({
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
    appendData(){
      this.bio = this.user.company.bio
      this.name = this.user.company.name
      this.email = this.user.company.email
      this.phone = this.user.company.phone
      this.address =this.user.company.address
      this.website =this.user.company.website
      this.logo =this.user.company.logo
      this.type =this.user.company.type
      this.seo_title =this.user.company.seo_title
      this.seo_description =this.user.company.seo_description
    },
    update_avatar(input) {
      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader()
        reader.onload = e => {
          this.logo = e.target.result
          //console.log('IMAGEURL',e.target.result)
        }
        reader.readAsDataURL(input.target.files[0])
      }
    },

  },

}
</script>
