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


    <div id="AllList" class="data-list-container">
      <vs-table ref="AllList"  multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="data">

        <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">


          <!-- ITEMS PER PAGE -->
          <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4 items-per-page-handler">
            <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
              <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ data.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : data.length }} of {{ queriedItems }}</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
            <vs-dropdown-menu>

              <vs-dropdown-item @click="itemsPerPage=4">
                <span>4</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage=10">
                <span>10</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage=15">
                <span>15</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage=20">
                <span>20</span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>

        <template slot="thead">
          <vs-th>{{$t('Action')}}</vs-th>
          <vs-th sort-key="user.name">{{$t('ServiceProvider')}}</vs-th>
          <vs-th sort-key="title">{{$t('ServiceName')}}</vs-th>
          <vs-th sort-key="profession">{{$t('ServiceProfession')}}</vs-th>
          <vs-th sort-key="price">{{$t('ServicePrice')}}</vs-th>
          <vs-th sort-key="expires_date">{{$t('ExpiresDate')}}</vs-th>
          <vs-th sort-key="status">{{$t('Status')}}</vs-th>
        </template>

        <template slot-scope="{data}">
          <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

            <vs-td class="whitespace-no-wrap">
              <popup-contract-detail 
              v-show="tr.read_permission === 1 && tr.post.user_id !== user.id" 
              :activeUser="user"
               :ServiceData="tr"/>
              <i class="material-icons" v-show="tr.post.user_id === user.id"  @click="GiveThePermissionJob(tr)"> find_in_page </i>
              <i class="material-icons" v-show="tr.post.user_id === user.id"  @click="CompleteTheJob(tr)"> thumb_up_alt </i>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.user.name.substring(0, 15) }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.post.title.substring(0, 22)  }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ $t(JSON.parse(tr.post.options).profession) }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">${{ JSON.parse(tr.post.options).price }}</p>
            </vs-td>

            <vs-td>
              <vs-chip :color="getDateColor(tr.post.expires_date)" class="product-order-status">{{ toDate(tr.post.expires_date)}}</vs-chip>
            </vs-td>

            <vs-td>
              <vs-chip :color="getOrderStatusColor(tr.status)" class="product-order-status">{{ tr.status == 'pending' ? $t('Pending') : $t('Completed')}}</vs-chip>
            </vs-td>


          </vs-tr>
          </tbody>
        </template>
      </vs-table>
    </div>

  </div>
</template>


<script>
import CaseSidebar from './CaseSidebar'
import modulePostList from '@/store/post/modulePostList'
import Swal from 'sweetalert2'
import i18n from '@/i18n/i18n'
import PopupContractDetail from './PopupContractDetail'

export default {
  components: {
    CaseSidebar,
    PopupContractDetail
  },
  props: {
    data: {
      type: Array,
      default: []
    },
    user: { }
  },
  data () {
    return {
      selected: [],
      itemsPerPage: 10,

      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {}
    }
  },
  computed: {
    currentPage () {
      if (this.isMounted) {
        return this.$refs.AllList.currentx
      }
      return 0
    },
    queriedItems () {
      return this.$refs.AllList ? this.$refs.AllList.queriedResults.length : this.data.length
    }


  },
  methods: {
    getDateColor (time) {
      const today = new Date()
      const timeHasBeenSent = new Date(Date.parse(time))
      if (timeHasBeenSent.getFullYear() >= today.getFullYear() &&
          timeHasBeenSent.getMonth() >= today.getMonth() &&
          timeHasBeenSent.getDate() >= today.getDate()) return 'success'
      return 'danger'
    },
    toDate (time) {
      const locale = 'en-us' //LOCALICATION
      const date_obj = new Date(Date.parse(time))
      const monthName = date_obj.toLocaleString(locale, { month: 'short'})
      return `${date_obj.getDate()  } ${   monthName} ${date_obj.getFullYear()}`
    },
    isSameDay (time) {
      const timeHasBeenSent = new Date(Date.parse(time))
      const today = new Date()
      return timeHasBeenSent.getFullYear() === today.getFullYear() &&
          timeHasBeenSent.getMonth() === today.getMonth() &&
          timeHasBeenSent.getDate() === today.getDate()
    },
    CompleteTheJob (tr) {
      Swal.fire({
        type: 'warning',
        title: i18n.t('Are you sure ?'),
        text: i18n.t('Are you sure to complete this job ?'),
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: i18n.t('ok'),
        cancelButtonText: i18n.t('cancel')
      }).then((result) => {
        console.log('result', result)
        if (result.value) {
          this.$store.dispatch('blogPosts/updateContract', {
            id:tr.id,
            status:'completed'
          })
            .then((response) => {
              this.$vs.notify({
                title: i18n.t('Success'),
                text: tr.post.title +  i18n.t('Contract has been completed'),
                iconPack: 'feather',
                icon: 'icon-success',
                color: 'success'
              })

            })
            .catch(error => {
              console.log('ERROR COMPLETED', error)
              this.$vs.notify({
                title: i18n.t('Error'),
                text: i18n.t('You are not authorized for this action'),
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger'
              })
            })
        }
      }).catch((error) => {
        console.log('ERROR:', error)
      })
    },
    GiveThePermissionJob (tr) {
      Swal.fire({
        type: 'warning',
        title: i18n.t('Are you sure ?'),
        text: i18n.t('Are you sure to give the read permission for this job ?'),
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: i18n.t('ok'),
        cancelButtonText: i18n.t('cancel')
      }).then((result) => {
        console.log('result', result)
        if (result.value) {
          this.$store.dispatch('blogPosts/updateContract', {
            id:tr.id,
            read_permission:1
          })
            .then((response) => {
              this.$vs.notify({
                title: i18n.t('Success'),
                text: tr.post.title +  i18n.t('Read permission has been given'),
                iconPack: 'feather',
                icon: 'icon-success',
                color: 'success'
              })

            })
            .catch(error => {
              console.log('ERROR COMPLETED', error)
              this.$vs.notify({
                title: i18n.t('Error'),
                text: i18n.t('You are not authorized for this action'),
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger'
              })
            })
        }
      }).catch((error) => {
        console.log('ERROR:', error)
      })
    },
    getOrderStatusColor (status) {
      // if(status == 'open') return "warning"
      if (status == 'pending') return '#0e025a'
      if (status == 'completed') return 'primary'
      return 'primary'
    },
    getPopularityColor (num) {
      if (num > 90) return 'success'
      if (num > 70) return 'primary'
      if (num >= 50) return 'warning'
      if (num < 50) return 'danger'
      return 'primary'
    },
    toggleDataSidebar (val = false) {
      this.addNewDataSidebar = val
    }
  }

}
</script>

<style lang="scss">
  #data-list-list-view {
    .vs-con-table {

      /*
        Below media-queries is fix for responsiveness of action buttons
        Note: If you change action buttons or layout of this page, Please remove below style
      */
      @media (max-width: 689px) {
        .vs-table--search {
          margin-left: 0;
          max-width: unset;
          width: 100%;

          .vs-table--search-input {
            width: 100%;
          }
        }
      }

      @media (max-width: 461px) {
        .items-per-page-handler {
          display: none;
        }
      }

      @media (max-width: 341px) {
        .data-list-btn-container {
          width: 100%;

          .dd-actions,
          .btn-add-new {
            width: 100%;
            margin-right: 0 !important;
          }
        }
      }

      .product-name {
        max-width: 23rem;
      }

      .vs-table--header {
        display: flex;
        flex-wrap: wrap;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        > span {
          display: flex;
          flex-grow: 1;
        }

        .vs-table--search{
          padding-top: 0;

          .vs-table--search-input {
            padding: 0.9rem 2.5rem;
            font-size: 1rem;

            &+i {
              left: 1rem;
            }

            &:focus+i {
              left: 1rem;
            }
          }
        }
      }

      .vs-table {
        border-collapse: separate;
        border-spacing: 0 1.3rem;
        padding: 0 1rem;

        tr{
          box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
          td{
            padding: 20px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
          }
          td.td-check{
            padding: 20px !important;
          }
        }
      }

      .vs-table--thead{
        th {
          padding-top: 0;
          padding-bottom: 0;

          .vs-table-text{
            text-transform: uppercase;
            font-weight: 600;
          }
        }
        th.td-check{
          padding: 0 15px !important;
        }
        tr{
          background: none;
          box-shadow: none;
        }
      }

      .vs-table--pagination {
        justify-content: center;
      }
    }
  }
</style>
