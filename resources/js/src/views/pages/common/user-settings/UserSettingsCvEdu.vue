<template>
  <vx-card no-shadow>

    <div class="mt-8 mb-base">
        <vs-upload   id="CvUpload"
                     accept=".doc,.docx,.pdf"
                     :text="$t('UploadCV')"
                     automatic :action="filePostUrl"
                     fileName="file"
                     @on-success="successUpload" />
      <span>{{$t('Max_file_size_is_5MB_Suitable_files_are_doc_docx_rft_pdf')}}</span>
    </div>
    <vs-divider></vs-divider>

    <vx-card no-shadow v-for="(option,index)  in EduData" :key="index">
        <vs-input :label="$t('SchoolName')"  v-model="option.school" class="mt-5 w-full"  />
        <vs-input :label="$t('SchoolGraduateYear')"  v-model="option.year" class="mt-5 w-full"  />
        <vs-button class="bg-danger" @click="removeEduData(index)" >{{$t('RemoveThis')}}</vs-button>
    </vx-card>
    <vs-button class="demo-text-dark" @click="AddEduData" >{{$t('AddNew')}}</vs-button>
    <vs-divider></vs-divider>

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2"  @click="SaveEdu">{{$t('Save')}}</vs-button>
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
      filePostUrl: 'http://localhost:8000/api/uploadCv',
      EduData: [
        {
          school: '',
          year: '',
        }
      ],
    }
  },
  props: {
    user: {
      type: Object,
      default: () => {
      },
    },
  },
  watch: {},
  computed: {
    validateForm() {
      return !this.errors.any()
    },
  },
  methods: {
    AddEduData() {
      this.EduData.push({
        year: '',
        school: '',
      });
    },
    removeEduData(index) {
      this.EduData.splice(index, 1);
    },
    SaveEdu() {
      const obj = {
        id: this.user.id,
        user_data: {
          EduData: this.EduData,
          type: 'EduData',
        }

      }
      this.$store.dispatch("user/updateUser", obj).then((response) => {
        this.$vs.notify({
          title: 'Başarılı',
          text: ' İçerik Başarıyla Eklendi',
          iconPack: 'feather',
          icon: 'icon-success',
          color: 'success'
        })

      }).catch(error => {
        this.$vs.notify({
          title: 'Hata',
          text: 'İçerik Eklenemedi.',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
      })
    },
    save_changes() {
      if (!this.validateForm) return
      const payload = {
        id: this.user.id,
        about_data: {
          bio: this.bio,
          dob: this.dob,
          country: this.country,
          lang_known: this.lang_known,
          website: this.website,
          gender: this.gender,
        }
      }
      this.$store.dispatch('user/updateUser', payload)
        .then((response) => {
          this.$vs.loading.close()
          if (response.data)
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
    appendData() {
      this.bio = this.user.about_data.bio
      this.dob = this.user.about_data.dob
      this.country = this.user.about_data.country
      this.lang_known = this.user.about_data.lang_known
      this.gender = this.user.about_data.gender
      this.website = this.user.about_data.website
    },
    successUpload(event) {
      this.$vs.notify({color: 'success', title: 'Upload Success', text: 'Lorem ipsum dolor sit amet, consectetur'})
      let filePath = event.currentTarget.response

      //this.$store.commit('productManagement/SET_PRODUCT_PHOTO_FILE_PATH', filePath)
    },
    appendEdu() {
      this.EduData.push(this.user.user_data.EduData)
      this.EduData.splice(0, 1)
      this.EduData = this.EduData[0]
    },
  },
  created() {
    this.appendEdu()
  },
}
</script>
