<!-- =========================================================================================
    File Name: DashboardEcommerce.vue
    Description: Dashboard - Ecommerce
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div>
        <div class="vx-row">

             <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line
                  v-if="IncomingPaymentsStatisticData()"
                  icon="DollarSignIcon"
                  :statistic="completedPaymentsAmount | k_formatter"
                  :statisticTitle="$t('Payments')"
                  :chartData="IncomingPaymentsStatisticData()"
                  color="success"
                  type="area" />
            </div>

             <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line
                  v-if="IncomingOrdersStatisticData()"
                  icon="DollarSignIcon"
                  :statistic="completedOrdersAmount | k_formatter"
                  :statisticTitle="$t('Orders')"
                  :chartData="IncomingOrdersStatisticData()"
                  color="success"
                  type="area" />
            </div>






        </div>


    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
import i18n from '@/i18n/i18n'

export default{
  components: {
    VueApexCharts,
    StatisticsCardLine,
    VuePerfectScrollbar,
    ChangeTimeDurationDropdown
  },
  data () {
    return {
      settings: { // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    }
  },
  computed: {
    scrollbarTag () { return this.$store.getters.scrollbarTag },
    payments () {
      return this.$store.state.admin.payments
    },
    allUsersCount () {
      return this.$store.getters['user/allUsersCount']
    },
    completedPaymentsAmount () {
      return this.$store.getters['admin/completedPaymentsAmount']
    },
    completedOrdersAmount () {
      return this.$store.getters['admin/completedOrdersAmount']
    },


  },
  methods : {
    chartDataForPayment () {
      return this.$store.getters['admin/chartDataForPayments']
    },
    chartDataForOrders () {
      return this.$store.getters['admin/chartDataForOrders']
    },
    chartDataForUserToken () {
      return this.$store.getters['user/allUsersToken']
    },
    IncomingPaymentsStatisticData () {
      return [{name : i18n.t('Amount'), data : this.chartDataForPayment()}]
    },
    IncomingOrdersStatisticData () {
      return [{name : i18n.t('Amount'), data : this.chartDataForOrders()}]
    },
    UsersStatiscticData () {
      return [{name : i18n.t('UserToken'), data : this.chartDataForUserToken()}]
    },
    pendingTokensForAdminData () {
      return [{name : i18n.t('Amount'), data : this.pendingTokensForAdmin}]
    }
  },
  mounted () {
    //const scroll_el = this.$refs.chatLogPS.$el || this.$refs.chatLogPS
    //scroll_el.scrollTop = this.$refs.chatLog.scrollHeight
  },
  created () {
    this.$store.dispatch('user/fetchUsers')
    this.$store.dispatch('admin/fetchItems')
  }
}
</script>

<style lang="scss">
.chat-card-log {
    height: 400px;

    .chat-sent-msg {
        background-color: #f2f4f7 !important;
    }
}
</style>
