<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="dashboard-analytics">
    <div class="vx-row">

      <!-- CARD 1: CONGRATS -->
      <div class="vx-col w-full lg:w-1/2 mb-base">
        <vx-card slot="no-body" class="text-center bg-primary-gradient greet-user">
                    <img src="@assets/images/elements/decore-left.png" class="decore-left" alt="Decore Left" width="200" >
                    <img src="@assets/images/elements/decore-right.png" class="decore-right" alt="Decore Right" width="175">
          <feather-icon icon="AwardIcon" class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow" svgClasses="h-8 w-8"></feather-icon>
          <h1 class="mb-6 text-white">{{$t('Welcome')}} {{ activeUser.name }}</h1>
          <p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white">{{$t('underWelcomeText')}}</p>
        </vx-card>
      </div>

      <!-- CARD 2: SUBSCRIBERS GAINED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
       
      
       <statistics-card-line
                  icon="ArrowUpIcon"
                  :statistic="outgoingTokensAmount | k_formatter"
                  :statisticTitle="$t('OutgoingPayments')"
                  :chartData="OutGoingPaymentsStatisticData()"
                  color="warning"
                  type="area" />
        
            </div>
   

      <!-- CARD 3: ORDER RECIEVED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <statistics-card-line
                  icon="ArrowDownIcon"
                  :statistic="incomingTokensAmount | k_formatter"
                  :statisticTitle="$t('IncomingPayments')"
                  :chartData="IncomingPaymentsStatisticData()"
                  color="warning"
                  type="area" />
        
      </div>
    </div>


  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from './ui-elements/card/analyticsData.js'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
import VxTimeline from '@/components/timeline/VxTimeline'
import i18n from '@/i18n/i18n'
export default {
  data () {
    return {
      analyticsData
    }
  },
  components: {
    VueApexCharts,
    StatisticsCardLine,
    ChangeTimeDurationDropdown,
    VxTimeline
  },
  computed : {
    activeUser () {
      return this.$store.state.user.currentUser
    },
    outgoingTokensAmount () {
      return this.$store.getters['token/outgoingTokensAmount'](this.activeUser.id)
    },
    incomingTokensAmount () {
      return this.$store.getters['token/incomingTokensAmount'](this.activeUser.id)
    }
  },
  methods:{
    outgoingTokensJustAmount () {
      return this.$store.getters['token/outgoingTokensJustAmount'](this.activeUser.id)
    },
    incomingTokensJustAmount () {
      return this.$store.getters['token/incomingTokensJustAmount'](this.activeUser.id)
    },
    OutGoingPaymentsStatisticData () {
      return [{name : i18n.t('Amount'), data : this.outgoingTokensJustAmount()}]
    },
    IncomingPaymentsStatisticData () {
      return [{name : i18n.t('Amount'), data : this.incomingTokensJustAmount()}]
    }
  },
  created () {
    this.$store.dispatch('token/fetchItems')
    this.$store.dispatch('user/fetchUser')
    // this.$store.dispatch('blogPosts/fetchItems')
  }
}
</script>

<style lang="scss">
/*! rtl:begin:ignore */
#dashboard-analytics {
  .greet-user{
    position: relative;

    .decore-left{
      position: absolute;
      left:0;
      top: 0;
    }
    .decore-right{
      position: absolute;
      right:0;
      top: 0;
    }
  }

  @media(max-width: 576px) {
    .decore-left, .decore-right{
      width: 140px;
    }
  }
}
/*! rtl:end:ignore */
</style>
