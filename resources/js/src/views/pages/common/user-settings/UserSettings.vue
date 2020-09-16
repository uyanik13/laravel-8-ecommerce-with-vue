<template>
  <vs-tabs :position="isSmallerScreen ? 'top' : 'left'" class="tabs-shadow-none" id="profile-tabs" :key="isSmallerScreen">

    <!-- GENERAL -->
    <vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? $t('Account') : ''">
      <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-general />
      </div>
    </vs-tab>



    <vs-tab icon-pack="feather" icon="icon-lock" :label="!isSmallerScreen ? $t('PasswordManagement') : ''">
      <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-change-password />
      </div>
    </vs-tab>
    <vs-tab icon-pack="feather"  icon="icon-info" :label="!isSmallerScreen ? $t('Info') : ''">
      <div class="tab-info md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-info
          v-if="upgradePackage_remaining_days !== 'NoSubscripton'"
          :user="dataList"
          :langOptions="langOptions"
          :countryOptions="countryOptions" />

          <user-settings-get-premium v-else />

      </div>
    </vs-tab>


    <vs-tab icon-pack="feather" icon="icon-octagon" :label="!isSmallerScreen ? $t('CV_Education') : ''">
      <div class="tab-info md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-cv-edu
         v-if="upgradePackage_remaining_days !== 'NoSubscripton'"
          :user="dataList" />
          <user-settings-get-premium v-else />
      </div>
    </vs-tab>
    <vs-tab icon-pack="feather" icon="icon-github" :label="!isSmallerScreen ? $t('SocialLinks') : ''">
      <div class="tab-social-links md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-social-links v-if="upgradePackage_remaining_days !== 'NoSubscripton'" :user="dataList"  />
        <user-settings-get-premium v-else />
      </div>
    </vs-tab>
   <!-- <vs-tab icon-pack="feather" icon="icon-link-2" :label="!isSmallerScreen ? 'Connections' : ''">
      <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-connections />
      </div>
    </vs-tab>-->
    <vs-tab icon-pack="feather" icon="icon-bell" :label="!isSmallerScreen ?  $t('Notifications') : ''">
      <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-notifications :user="dataList"  v-if="upgradePackage_remaining_days !== 'NoSubscripton'" />
         <user-settings-get-premium v-else />
      </div>
    </vs-tab>

  </vs-tabs>
</template>

<script>
import UserSettingsGeneral from './UserSettingsGeneral.vue'
import UserSettingsGetPremium from './UserSettingsGetPremium.vue'
import UserSettingsCvEdu from './UserSettingsCvEdu.vue'
import UserSettingsCompanyFree from './UserSettingsCompanyFree.vue'
import UserSettingsChangePassword from './UserSettingsChangePassword.vue'
import UserSettingsInfo from './UserSettingsInfo.vue'
import UserSettingsSocialLinks from './UserSettingsSocialLinks.vue'
import UserSettingsConnections from './UserSettingsConnections.vue'
import UserSettingsNotifications from './UserSettingsNotifications.vue'
import userManagement from '@/store/user-management/moduleUserManagement'

export default {
  components: {
    UserSettingsGetPremium,
    UserSettingsCvEdu,
    UserSettingsGeneral,
    UserSettingsInfo,
    UserSettingsChangePassword,
    UserSettingsSocialLinks,
    UserSettingsConnections,
    UserSettingsNotifications
  },
  data () {
    return {
      countryOptions: [
        { label: 'Australia',  value: 'australia'  },
        { label: 'France',     value: 'france'     },
        { label: 'Germany',    value: 'germany'    },
        { label: 'India',      value: 'india'      },
        { label: 'Jordan',     value: 'jordan'     },
        { label: 'Morocco',    value: 'morocco'    },
        { label: 'Portuguese', value: 'portuguese' },
        { label: 'Syria',      value: 'syria'      },
        { label: 'USA',        value: 'usa'        }
      ],
      langOptions: [
        { label: 'English',  value: 'english'  },
        { label: 'Spanish',  value: 'spanish'  },
        { label: 'French',   value: 'french'   },
        { label: 'Russian',  value: 'russian'  },
        { label: 'German',   value: 'german'   },
        { label: 'Arabic',   value: 'arabic'   },
        { label: 'Sanskrit', value: 'sanskrit' }
      ]
    }
  },
  computed: {
    isSmallerScreen () {
      return this.$store.state.windowWidth < 768
    },
    dataList () {
      return this.$store.state.user.currentUser
    },
    upgradePackage_remaining_days () {
      return this.$store.state.user.upgradePackage_remaining_days
    }

  },
  created () {
    if (!userManagement.isRegistered) {
      this.$store.registerModule('userManagement', userManagement)
      userManagement.isRegistered = true
    }
    this.$store.dispatch('user/fetchUser')
    this.$store.dispatch('user/fetchPackageInformation')
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
