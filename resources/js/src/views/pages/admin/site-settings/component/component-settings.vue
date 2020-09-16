<template>
  <vs-tabs :position="isSmallerScreen ? 'top' : 'top'" class="tabs-shadow-none" id="profile-tabs" :key="isSmallerScreen">

    <!-- GENERAL -->
    <vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? $t('general') : ''">
      <div class="tab-general md:ml-4 md:mt-10 mt-4 ml-0">
        <general />
      </div>
    </vs-tab>
    <vs-tab icon-pack="feather" icon="flag" :label="!isSmallerScreen ? $t('HomePage') : ''">
      <div class="tab-change-pwd md:ml-4 md:mt-10 mt-4 ml-0">
        <HomePage />
      </div>
    </vs-tab>
    <!-- <vs-tab icon-pack="feather" icon="flag" :label="!isSmallerScreen ? 'Bayiler' : ''">
      <div class="tab-change-pwd md:ml-4 md:mt-10 mt-4 ml-0">
        <Bayiler />
      </div>
    </vs-tab>
    <vs-tab icon-pack="feather" icon="flag" :label="!isSmallerScreen ? 'Video Galeri' : ''">
      <div class="tab-change-pwd md:ml-4 md:mt-10 mt-4 ml-0">
        <VideoGallery />
      </div>
    </vs-tab> -->
    <!--    <vs-tab icon-pack="feather" icon="icon-info" :label="!isSmallerScreen ? 'Info' : ''">-->
    <!--      <div class="tab-info md:ml-4 md:mt-0 mt-4 ml-0">-->
    <!--        <user-settings-info />-->
    <!--      </div>-->
    <!--    </vs-tab>-->
    <!--    <vs-tab icon-pack="feather" icon="icon-github" :label="!isSmallerScreen ? 'Social Links' : ''">-->
    <!--      <div class="tab-social-links md:ml-4 md:mt-0 mt-4 ml-0">-->
    <!--        <user-settings-social-links />-->
    <!--      </div>-->
    <!--    </vs-tab>-->
    <!--    <vs-tab icon-pack="feather" icon="icon-link-2" :label="!isSmallerScreen ? 'Connections' : ''">-->
    <!--      <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">-->
    <!--        <user-settings-connections />-->
    <!--      </div>-->
    <!--    </vs-tab>-->
    <!--    <vs-tab icon-pack="feather" icon="icon-bell" :label="!isSmallerScreen ? 'Notifications' : ''">-->
    <!--      <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">-->
    <!--        <user-settings-notifications />-->
    <!--      </div>-->
    <!--    </vs-tab>-->
  </vs-tabs>
</template>

<script>
import General from "./General.vue"
import VideoGallery from "./Video-Gallery"
import HomePage from "./HomePage"
import Bayiler from "./Bayiler"


export default {
  components: {
    VideoGallery,
    General,
    HomePage,
    Bayiler,
  },
  data() {
    return {


    }
  },
  computed: {
    isSmallerScreen() {
      return this.$store.state.windowWidth < 768
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
