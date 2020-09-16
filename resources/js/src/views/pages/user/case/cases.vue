<!-- =========================================================================================
  File Name: DataListListView.vue
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
========================================================================================== -->

<template>
  <div id="data-list-list-view" class="data-list-container">
    <case-sidebar  :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />
    <div class="vx-col w-full md:w-12/12 mb-base">
      <vs-tabs position="left" color="danger">
        <vs-tab :label="$t('FindACase')"  icon-pack="feather" icon="icon-file-text">
          <find-a-case :data="blogPosts" :user="activeUser"> </find-a-case>
        </vs-tab>
        <vs-tab :label="$t('OpenCases')"  icon-pack="feather" icon="icon-file-text">
          <open-cases :data="openCases" :user="activeUser"> </open-cases>
        </vs-tab>
        <vs-tab :label="$t('LastMinuteCases')"  icon-pack="feather" icon="icon-file-text">
          <last-minute-cases :data="randomEmergencyOpenCases" :user="activeUser"> </last-minute-cases>
        </vs-tab>
        <vs-tab :label="$t('MyCases')"  icon-pack="feather" icon="icon-file-text">
          <my-cases :data="myServices" :user="activeUser"> </my-cases>
        </vs-tab>
        <vs-tab :label="$t('MyContracts')"  icon-pack="feather" icon="icon-file-text">
          <my-contracts :data="myContracts" :user="activeUser"> </my-contracts>
        </vs-tab>
      </vs-tabs>
    </div>

  </div>
</template>

<script>
import CaseSidebar from './CaseSidebar'
import FindACase from './caseList'
import OpenCases from './OpenCases'
import LastMinuteCases from './LastMinuteCases'
import MyCases from './myCases'
import MyContracts from './myContracts'
import PopupBackground from './PopupBackground'

export default {
  components: {
    CaseSidebar,
    PopupBackground,
    FindACase,
    OpenCases,
    LastMinuteCases,
    MyCases,
    MyContracts
  },
  data () {
    return {
      addNewDataSidebar: false,
      sidebarData: {}
    }
  },
  computed: {

    openCases () {
      return this.$store.getters['post/randomOpenCases']
    },

    randomEmergencyOpenCases () {
      return this.$store.getters['post/randomEmergencyOpenCases']
    },

    myServices () {
      return this.$store.state.post.myServices
    },

    myContracts () {
      return this.$store.state.post.myContracts
    },

    activeUser () {
      return this.$store.state.user.currentUser
    },
    blogPosts () {
      return this.$store.state.post.services
    },
    categoryList () {
      return this.$store.state.post.categories
    },
    

  },
  methods: {
    addNewData () {
      this.sidebarData = {
        categories:this.categoryList
      }
      this.toggleDataSidebar(true)
    },
    toggleDataSidebar (val = false) {
      this.addNewDataSidebar = val
    }
    
  },
  created () {
    this.$store.dispatch('post/fetchItems')
    this.$store.dispatch('post/fetchMyCases')
    this.$store.dispatch('post/fetchMyContracts')
    this.$store.dispatch('chat/fetchChatContacts')
    this.$store.dispatch('chat/fetchChats')
    this.$store.dispatch('user/fetchUser')
    //this.$store.dispatch("user/fetchMyFollowData")

  }

}
</script>

