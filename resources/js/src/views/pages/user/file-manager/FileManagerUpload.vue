<template>
    <vs-upload multiple
               id="primaryImageUploadId"
               :text="$t('FileUpload')"
               automatic :action="fileUploadApiEndpoint"
               fileName="files[]"
               @on-success="successUpload" />
</template>

<script>

import i18n from '@/i18n/i18n'
export default {
  components: {

  },
  data () {
    return {
      site_url:process.env.MIX_APP_URL,
      fileUploadApiEndpoint: '/api/gallery'
    }
  },
  computed: {
    isSmallerScreen () {
      return this.$store.state.windowWidth < 768
    }
  },
  methods:{
    successUpload (event) {
      this.$vs.notify(
        {
          color:'success',
          title:i18n.t('Success'),
          text:i18n.t('uploadSuccessfull'),
          } )
      //let filePath = event.currentTarget.response

      //this.$store.commit('productManagement/SET_PRODUCT_PHOTO_FILE_PATH', filePath)
    }
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
