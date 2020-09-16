<template>
  <div class="vx-row">
    <div  v-for="(file,index) in List" :key="index"
          class="vx-col w-full sm:w-1/5 lg:w-1/5 mb-base">
      <vx-card >
        <div slot="no-body">
          <img height="90px" width="60px" src="/images/site_settings/pdf.png" :alt="file.file_name" v-if="file.type === 'pdf'"  >
          <img height="90px" width="60px" src="/images/site_settings/doc.png" :alt="file.file_name" v-else-if="file.type === 'doc' || file.type === 'docx'" >
          <img height="90px" width="60px" src="/images/site_settings/xls.png" :alt="file.file_name" v-else-if="file.type === 'xls' || file.type === 'xlsx'"  >
          <img height="100px" width="100px" :src="file.slug" :alt="file.file_name" v-else  class="responsive" >
        </div>
        <h5 class="mb-2">{{ file.file_name }}</h5>
        <div class="flex justify-between flex-wrap">
          <popup-background v-show="file.type === 'png' || file.type === 'jpeg' || file.type === 'jpg'" :File="file"/>
          <vs-button color="warning" type="filled" icon-pack="feather"
                     v-clipboard:copy="file.slug"
                     v-clipboard:success="copySlug" icon="icon-copy"></vs-button>
          <vs-button color="danger" type="filled" icon-pack="feather" @click.stop="deleteData(file.id)" icon="icon-trash"></vs-button>
        </div>
      </vx-card>
    </div>

  </div>
</template>

<script>

import PopupBackground from './PopupBackground.vue'
import Swal from 'sweetalert2'
import i18n from '@/i18n/i18n'
export default {
  components:{
    PopupBackground
  },
  data () {
    return {
      site_url:process.env.MIX_APP_URL
    }
  },
  computed: {
    isSmallerScreen () {
      return this.$store.state.windowWidth < 768
    },
    List () {
      return this.$store.state.gallery.galleryList
    }
  },
  methods:{
    closeCardAnimationDemo (card) {
      card.removeRefreshAnimation(3000)
    },
    copySlug () {
      this.$vs.notify({
        title: 'Başarılı',
        text: 'Link Kopyalandı',
        color: 'success',
        iconPack: 'feather',
        position: 'top-center',
        icon:'icon-check-circle'
      })
    },
    deleteData (id) {
      Swal.fire({
        type: 'warning',
        title: i18n.t('areYouSureToDeleteThis'),
        text: i18n.t('areYouSureToDeleteData'),
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: i18n.t('ok'),
        cancelButtonText: i18n.t('cancel')
      }).then((result) => {
        if (result.value) {
          console.log(result)
          this.$store.dispatch('gallery/removeItem', id)
            .then((response) => {
              this.$vs.notify({
                title: 'Başarılı',
                text: 'içerik silindi',
                iconPack: 'feather',
                icon: 'icon-success',
                color: 'success'
              })

            })
            .catch(error => {
              this.$vs.notify({
                title: 'Hata',
                text: 'İçerik Silinemedi.',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger'
              })
            })
        }
      }).catch((error) => {
        console.log('ERROR:', error)
      })
    }
  },
  created () {
    this.$store.dispatch('gallery/fetchItems')
  }
}
</script>

<style lang="scss">
#profile-tabs {
  .vs-tabs--content {
    padding: 0;
  }
}
</style>
