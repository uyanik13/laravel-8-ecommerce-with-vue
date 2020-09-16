<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>{{ Object.entries(this.data).length === 0 ? $t('AddCase'): $t('Update Case') }}</h4>
      <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

      <div class="p-6">


        <div class="vx-row match-height">
          <div class="vx-col w-full md:w-12/12 mb-base">
            <vs-tabs>
              <vs-tab :label="$t('ServiceArea')">
                <div class="mt-3">
                  <!-- NAME -->
                  <vs-input :label="$t('ServiceName')" v-model="dataName" class="mt-5 w-full" name="dataName" v-validate="'required'" />
                  <span class="text-danger text-sm" v-show="errors.has('dataName')">{{ errors.first('dataName') ? $t('Name Required') : ''}}</span>

                  <div class="flex flex-wrap items-center mb-20 mt-20 h-full">
                    <span>{{$t('ServiceContent')}}</span>
                    <quill-editor  :options="editorOption" :label="$t('postContent')" name="dataDescription" v-model="dataDescription"></quill-editor>
                    <span class="text-danger text-sm" v-show="errors.has('dataDescription')">{{ errors.first('dataDescription') ? $t('Content Required') : ''}}</span>
                  </div>

                  <vs-input :label="$t('ServiceFee_TOKEN')" v-model="dataFee" class="mt-5 w-full" name="dataFee" v-validate="'numeric'" />
                  <span class="text-danger text-sm" v-show="errors.has('dataFee')">{{ errors.first('dataFee') ? $t('Service Fee Required') : ''}}</span>


                  <br>
                  <span>{{$t('Profession')}}</span>
                  <!-- <v-select multiple :closeOnSelect="false" v-model="profession" :options="profession_choices" :dir="$vs.rtl ? 'rtl' : 'ltr'" /><br>-->
                  <v-select  :closeOnSelect="false" v-model="profession" :options="profession_choices" :dir="$vs.rtl ? 'rtl' : 'ltr'" /><br>


                  <br>
                  <span>{{$t('ServeArea')}}</span>
                  <!-- <v-select multiple :closeOnSelect="false" v-model="profession" :options="profession_choices" :dir="$vs.rtl ? 'rtl' : 'ltr'" /><br>-->
               <br>
                          <v-select
                            v-validate="'required'"
                            class="w-full mt-5"
                            v-model="country"
                            @input="findCity(country.code)"
                            :options="countries"
                            @search="query => search = query"
                            :getOptionLabel="option => option.name"
                            :filterable="true"/>

                            <v-select
                            v-validate="'required'"
                            class="w-full mt-5"
                            v-model="city"
                            :options="cities"
                            @search="query => search = query"
                            :getOptionLabel="option => option.name"
                            :filterable="true"/>

                  <br>
                  <span>{{$t('ServiceDeadline')}} :</span>
                  <flat-pickr v-model="expires_date" />


                  <!--  STATUS -->
                  <vs-select v-model="dataStatus" :label="$t('Status')"  name="dataStatus" class="mt-5 w-full">
                    <vs-select-item :key="status.value" :value="status.value" :text="status.text" v-for="status in status_choices" />
                    <span class="text-danger text-sm" v-show="errors.has('dataStatus')">{{ errors.first('dataStatus') ? $t('Status Required') : '' }}</span>
                  </vs-select>

                </div>
              </vs-tab>
              <vs-tab :label="$t('AdditionalFiles')">
                <div class="mt-3">
                  <div class="mt-8 mb-base">
                    <vs-upload   id="CvUpload"
                                 multiple
                                 automatic
                                 accept=".doc,.docx,.pdf,.mpeg,.mp4"
                                 :text="$t('UploadFiles')"
                                 :action="fileUploadApiEndpoint"
                                 fileName="files[]"
                                 @on-success="successUpload" />
                    <span>{{$t('Max_file_size_is_5MB_Suitable_files_are_doc_docx_rft_pdf_mpeg_mp4')}}</span>

                    <div  v-for="(file,index) in fileList" :key="index" class="vx-col w-full sm:w-1/6 lg:w-1/6 mb-base">
                      {{$t('IfYouAddNewFilesThenBelowFilesWillBeRemoved')}}
                      <h5 class="mb-2">{{ file }}</h5>
                    </div>

                  </div>
                  <vs-divider></vs-divider>
                </div>
              </vs-tab>
              <vs-tab :label="$t('SeoArea')">
                <div class="mt-3">
                  <!-- SEO TITLE -->
                  <vs-input :label="$t('SeoTitle')" v-model="dataSeoTitle" class="mt-5 w-full" name="dataSeoTitle" v-validate="'required'" />
                  <span class="text-danger text-sm" v-show="errors.has('dataSeoTitle')">{{ errors.first('dataSeoTitle') ? 'Seo Başlığı Gerekli ve max 71 karakter' : '' }}</span>
                  <vs-progress :percent="Number(dataSeoTitle.length)" :color="getPopularityColorTitle(Number(dataSeoTitle.length))" class="shadow-md" />

                  <!-- SEO DESCRIPTION -->
                  <vs-input :label="$t('SeoDescription')" v-model="dataSeoDescription" class="mt-5 w-full" name="dataSeoDescription" v-validate="'required'" />
                  <span class="text-danger text-sm" v-show="errors.has('dataSeoDescription')">{{ errors.first('dataSeoDescription') ? 'Seo Açıklaması Gerekli ve max 160 karakter' : '' }}</span>
                  <vs-progress :percent="Number(dataSeoDescription.length)" :color="getPopularityColorDescription(Number(dataSeoDescription.length))" class="shadow-md" />
                </div>
              </vs-tab>
            </vs-tabs>
          </div>
        </div>

        <div class="flex flex-wrap items-center p-6" slot="footer">
          <vs-button class="mr-6" @click="submitData" :disabled="!isFormValid">{{$t('Save')}}</vs-button>
          <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">{{$t('Cancel')}}</vs-button>
        </div>

      </div>
    </VuePerfectScrollbar>


  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import vSelect from 'vue-select'
import i18n from '@/i18n/i18n'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

export default {
  components: {
    VuePerfectScrollbar,
    quillEditor,
    'v-select': vSelect,
    flatPickr
  },
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    isSidebarActive (val) {
      if (!val) return
      if (!this.data.data) {
        this.initValues()
        this.$validator.reset()
      } else {
        const {  id, title, content, options, files, expires_date, seo_title, seo_description, status} = JSON.parse(JSON.stringify(this.data.data))
        console.log('active:', JSON.parse(JSON.stringify(this.data.data)))
        this.dataId = id
        this.dataName = title
        this.dataDescription = content
        this.dataFee = JSON.parse(options).price
        this.profession = JSON.parse(options).profession
        this.city = JSON.parse(options).city
        this.country = JSON.parse(options).country
        this.expires_date = expires_date
        this.dataSeoTitle = seo_title
        this.fileList = JSON.parse(files)
        this.dataSeoDescription = seo_description
        this.dataStatus = status
        //this.initValues()
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataUsage_amount } = JSON.parse(JSON.stringify(this.data))
    }

  },
  data () {
    return {
      type: 'service',
      isMounted: false,
      dataId: null,
      dataName: '',
      dataDescription: '',
      expires_date: '',
      dataSeoTitle: '',
      dataSeoDescription: '',
      dataStatus: '',
      dataFee: '',
      search: '',
      profession: [],
      profession_choices: [i18n.t('aile_hukuku'), i18n.t('ceza_hukuku')],
      status:'',
      country:'',
      city:'',
      status_choices: [{text:i18n.t('Active'), value:1}, {text:i18n.t('Inactive'), value:0}],
      site_url:process.env.MIX_APP_URL,
      fileUploadApiEndpoint: '/api/uploadAdditionalFiles',
      settings: { // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      },
      editorOption: {
        // Some Quill options...
      },
      fileList : []
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get () {
        return this.isSidebarActive
      },
      set (val) {
        if (!val) {
          this.$emit('closeSidebar')
          this.$validator.reset()
          this.initValues()
        }
      },
      categories () {
        return this.$store.state.post.categories
      }

    },
    isFormValid () {
      return !this.errors.any() && this.dataName && this.dataDescription
    },
    countries () {
      return this.$store.state.post.countries
    },
    cities () {
      return this.$store.state.post.cities
    },
    filtered () {
      return this.countries.filter(country => country.includes(this.search))
    }

  },
  created () {
    this.$store.dispatch('post/fetchItems')
    this.$store.dispatch('post/fetchCountries')
  },

  methods: {
    getPopularityColorTitle (num) {
      if (num > 71) return 'dark'
      if (num >= 60 && num <= 71) return 'success'
      if (num < 60) return 'primary'
      return 'primary'
    },
    getPopularityColorDescription (num) {
      if (num > 160) return 'dark'
      if (num >= 145 && num <= 170) return 'success'
      if (num < 145) return 'primary'
      return 'primary'
    },
    initValues () {
      if (this.data.id) return
      this.dataId = null
      this.dataName = 'Yazı Başlığı'
      this.dataSeoTitle = 'SEO Başlığı'
      this.dataSeoDescription = 'SEO Açıklaması'
      this.dataDescription = 'İçerik'
      this.dataStatus = 1
    },
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            id: this.dataId,
            title: this.dataName,
            category: 1,
            content1:this.dataDescription,
            seo_title:this.dataSeoTitle,
            expires_date:this.expires_date,
            options:{
              price:this.dataFee,
              profession:this.profession,
              country:this.country.name,
              city:this.city.name
            },
            seo_description:this.dataSeoDescription,
            status: this.dataStatus,
            type: this.type
          }
          if (this.dataId !== null && this.dataId >= 0) {
            this.$store.dispatch('post/updateItem', obj).then((response) => {
              this.$vs.notify({
                title: 'Başarılı',
                text: `${response.data.title  } || ${i18n.t('SuccessfullyUpdated')}`,
                iconPack: 'feather',
                icon: 'icon-success',
                color: 'success'
              })

            }).catch(error => {
              this.showAlert(i18n.t('Error'), i18n.t('CouldntUpdated'), 'icon-alert-circle', 'danger')
            })
          } else {
            delete obj.id
            this.$store.dispatch('post/addItem', obj).then((response) => {
               this.showAlert(i18n.t('Success'), i18n.t('SuccessfullyAdded'), 'icon-success', 'success')
            })
              .catch(error => {
                this.showAlert(i18n.t('Error'), i18n.t('CouldntAdd'), 'icon-alert-circle', 'danger')
              })
          }
          this.$emit('closeSidebar')
          this.initValues()
        }
      })
    },
    successUpload (event) {
      this.showAlert(i18n.t('Success'), i18n.t('uploadSuccessfull'), 'icon-success', 'success')
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
    findCity (code) {
      //console.log('code',code)
      if (code !== 'undefined' || code !== '') {
        this.$store.dispatch('post/fetchCities', code)
      }
      return false
    }
  }


}
</script>

<style lang="scss" scoped>
  .add-new-data-sidebar {
    ::v-deep .vs-sidebar--background {
      z-index: 52010;
    }

    .vs-sidebar {
      max-width: 1240px !important;
    }
    ::v-deep .vs-sidebar {
      z-index: 52010;
      width: 1240px !important;
      max-width: 90vw ;

      .img-upload {
        margin-top: 2rem;

        .con-img-upload {
          padding: 0;
        }

        .con-input-upload {
          width: 100%;
          margin: 0;
        }
      }
    }
  }

  .scroll-area--data-list-add-new {
    // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
    height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
  }


  input[type="file"]{
    position: absolute;
    top: -500px;
  }

  div.file-listing{
    width: 200px;
  }

  span.remove-file{
    color: red;
    cursor: pointer;
    float: right;
  }

</style>
