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
      <h4>{{ Object.entries(this.data).length === 0 ? $t('addCategory'): $t('editCategory') }}</h4>
      <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

      <div class="p-6">


        <div class="vx-row match-height">
          <div class="vx-col w-full md:w-11/12 mb-base">
            <vx-card>
              <vs-tabs>
                <vs-tab :label="$t('textArea')">
                             <v-select
                            :label="$t('parentName')"
                            class="w-full mt-5"
                            v-model="parent_id"
                            :options="parentCategories"
                            @search="query => search = query"
                            :getOptionLabel="option => option.title"
                            :filterable="true"/>



                  <div class="mt-3">
                    <!-- NAME -->
                    <vs-input :label="$t('CategoryName')" v-model="dataName" class="mt-5 w-full" name="dataName" v-validate="'required'" />
                    <span class="text-danger text-sm" v-show="errors.has('dataName')">{{ errors.first('dataName') ? 'Başlık Gerekli' : ''}}</span>

                  </div>




                </vs-tab>
                <vs-tab :label="$t('SeoArea')">
                  <div class="mt-3">
                    <!-- SEO TITLE -->
                    <vs-input :label="$t('seoTitle')" v-model="dataSeoTitle" class="mt-5 w-full" name="dataSeoTitle" v-validate="'required'" />
                    <span class="text-danger text-sm" v-show="errors.has('dataSeoTitle')">{{ errors.first('dataSeoTitle') ? 'Seo Başlığı Gerekli ve max 71 karakter' : '' }}</span>
                    <vs-progress :percent="Number(dataSeoTitle.length)" :color="getPopularityColorTitle(Number(dataSeoTitle.length))" class="shadow-md" />

                    <!-- SEO DESCRIPTION -->
                    <vs-input :label="$t('seoDescription')" v-model="dataSeoDescription" class="mt-5 w-full" name="dataSeoDescription" v-validate="'required'" />
                    <span class="text-danger text-sm" v-show="errors.has('dataSeoDescription')">{{ errors.first('dataSeoDescription') ? 'Seo Açıklaması Gerekli ve max 160 karakter' : '' }}</span>
                    <vs-progress :percent="Number(dataSeoDescription.length)" :color="getPopularityColorDescription(Number(dataSeoDescription.length))" class="shadow-md" />
                  </div>
                </vs-tab>
              </vs-tabs>
            </vx-card>
          </div>
        </div>

        <div class="flex flex-wrap items-center p-6" slot="footer">
          <vs-button class="mr-6" @click="submitData" :disabled="!isFormValid">{{$t('save')}}</vs-button>
          <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">{{$t('cancel')}}</vs-button>
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
  import modulePostList from "@/store/post/modulePostList";
  import { quillEditor } from 'vue-quill-editor'
  import vSelect from 'vue-select'
import i18n from '@/i18n/i18n'

  export default {
    props: {
      isSidebarActive: {
        type: Boolean,
        required: true
      },
      data: {
        type: Object,
        default: () => {},
      }
    },
    watch: {
      isSidebarActive(val) {
        if(!val) return
        if(Object.entries(this.data).length === 0) {
          this.initValues()
          this.$validator.reset()
        }else {
          let {  id, title,seo_title,parent_id,seo_description} = JSON.parse(JSON.stringify(this.data))
          console.log('active:',this.data)
          this.dataId = id
          this.dataId = id
          this.parent_id = parent_id
          this.dataName = title
          this.dataSeoTitle = seo_title
          this.dataSeoDescription = seo_description
          this.initValues()
        }
        // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataUsage_amount } = JSON.parse(JSON.stringify(this.data))
      }
    },
    data() {
      return {
        isMounted: false,
        dataId: null,
        search: '',
        dataName: "",
        parent_id: "",
        type: "category",
        dataDescription: "",
        dataSeoTitle: "",
        dataSeoDescription: "",
        settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
        },
        editorOption: {
          // Some Quill options...
        }
      }
    },
    computed: {
      isSidebarActiveLocal: {
        get() {
          return this.isSidebarActive
        },
        set(val) {
          if(!val) {
            this.$emit('closeSidebar')
            //this.$validator.reset()
            //this.initValues()
          }
        },
      },
      isFormValid() {
        return !this.errors.any() && this.dataName
      },

     filtered () {
      return this.parentCategories.filter(category => category.includes(this.search))
    },
    parentCategories() {
          return this.$store.getters['post/parentCategories']
      },

    },
    created() {
      if(!modulePostList.isRegistered) {
        this.$store.registerModule('blogPosts', modulePostList)
        modulePostList.isRegistered = true
      }
      this.$store.dispatch("blogPosts/fetchItems")
    },
    mounted() {
      this.isMounted = true;
    },
    methods: {
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
      initValues() {
        if(this.data.id) return
        this.dataId = null
        this.dataName = "Kategori Adı"
        this.dataSeoTitle = "SEO Başlığı"
        this.dataSeoDescription = "SEO Açıklaması"
      },
      submitData() {
        this.$validator.validateAll().then(result => {
          if (result) {
            const obj = {
              id: this.dataId,
              title: this.dataName,
              parent_id: this.parent_id.id,
              seo_title:this.dataSeoTitle,
              seo_description:this.dataSeoDescription,
              type:this.type,
            }
            if(this.dataId !== null && this.dataId >= 0) {
              this.$store.dispatch("post/updateCategory", obj).then((response) => {
              this.$vs.notify({
                title: 'Başarılı',
                text: response.data.post_title + ' || Adlı içerik Başarıyla Düzenlendi',
                iconPack: 'feather',
                icon: 'icon-success',
                color: 'success'
              })

            }).catch(error => {
          this.$vs.notify({
            title: 'Hata',
            text: 'İçerik Düzenlenemedi.',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
        })
            }else{
              delete obj.id
              this.$store.dispatch("post/addCategory", obj).then((response) => {
                this.$vs.notify({
                  title: 'Başarılı',
                  text: response.data.post_title + ' || Adlı içerik Eklendi',
                  iconPack: 'feather',
                  icon: 'icon-success',
                  color: 'success'
                })
              })
                .catch(error => {
                  this.$vs.notify({
                    title: 'Hata',
                    text: 'İçerik Eklenemedi.' + error,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                  })
                })
            }
            this.$emit('closeSidebar')
            this.initValues()
          }
        })
      },

    },
    components: {
        'v-select': vSelect,
      VuePerfectScrollbar,
      quillEditor,
    }
  }
</script>

<style lang="scss" scoped>
  .add-new-data-sidebar {
    ::v-deep .vs-sidebar--background {
      z-index: 52010;
    }

    .vs-sidebar {
      max-width: 720px !important;
    }
    ::v-deep .vs-sidebar {
      z-index: 52010;
      width: 720px !important;
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


</style>
