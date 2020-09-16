<!-- =========================================================================================
  File Name: DataListListView.vue
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
========================================================================================== -->

<template>
  <div id="data-list-thumb-view" class="data-list-container">

    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="dataList">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">


        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4 items-per-page-handler">
          <div
            class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }}
              - {{ dataList.length - currentPage * itemsPerPage > 0
              ? currentPage * itemsPerPage : dataList.length }} of {{ queriedItems }}</span>
            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4"/>
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
        <vs-th sort-key="id">{{$t('Id')}}</vs-th>
        <vs-th sort-key="request_id">{{$t('requestId')}}</vs-th>
        <vs-th sort-key="username">{{$t('Name')}}</vs-th>
        <vs-th sort-key="amount">{{$t('Amount')}}</vs-th>
        <vs-th sort-key="status">{{$t('Status')}}</vs-th>
        <vs-th sort-key="type">{{$t('Type')}}</vs-th>
        <vs-th>{{$t('Action')}}</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
          <vs-td>
            <p class="product-name font-medium truncate">{{ tr.id }}</p>
          </vs-td>
          <vs-td>
            <p class="product-name font-medium truncate">{{ tr.request_id }}</p>
          </vs-td>
          <vs-td>
            <p class="product-name font-medium truncate">{{ tr.user.name }}</p>
          </vs-td>
          <vs-td>
            <p class="product-name font-medium truncate">{{ tr.user.token }}</p>
          </vs-td>
          <vs-td>
            <p class="product-name font-medium truncate">{{ tr.status }}</p>
          </vs-td>

          <vs-td>
            <p class="product-name font-medium truncate">{{ tr.user.role }}</p>
          </vs-td>

          <vs-td class="whitespace-no-wrap">
            <feather-icon icon="CheckSquareIcon" svgClasses="w-7 h-7 hover:text-primary stroke-current" @click="editData(tr)"/>
            <feather-icon icon="TrashIcon" svgClasses="w-7 h-7 hover:text-danger stroke-current" class="ml-2"
                          @click.stop="deleteData(tr.id)"/>
          </vs-td>

        </vs-tr>
        </tbody>
      </template>
    </vs-table>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import i18n from '@/i18n/i18n'

export default {
  components: {


  },
  data () {
    return {
      selected: [],
      itemsPerPage: 10
    }
  },
  computed: {
    currentPage () {
      if (this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    dataList () {
      return this.$store.state.token.tokenRequests
    },

    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.dataList.length
    }
  },
  methods: {
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
          this.$store.dispatch('token/removeTokenRequest', id)
            .then((response) => {
              this.showAlert(i18n.t('Success'), i18n.t('SuccessfullyDeleted'), 'icon-success', 'success')
            })
            .catch(error => {
              this.showAlert(i18n.t('Error'), i18n.t('CouldntDelete'), 'icon-alert-circle', 'danger')
            })
        }
      }).catch((error) => {
        console.log('ERROR:', error)
      })
    },
    editData (data) {
      Swal.fire({
        type: 'warning',
        title: i18n.t('areYouSureToConfirmPayment'),
        text: i18n.t('areYouSureToConfirmPaymentDesc'),
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: i18n.t('ok'),
        cancelButtonText: i18n.t('cancel')
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch('token/updateTokenRequest', data)
          this.showAlert(i18n.t('Success'), i18n.t('paymentSuccessfull'), 'icon-success', 'success')
        }
      }).catch((error) => {
        console.log('ERROR:', error)
      })
     
    },
    getOrderStatusColor (status) {
      if (status === '1') return 'success'
      if (status === '0') return '#10163A'
      return '#10163A'
    },
    showAlert (title, text, icon, color) {
      this.$vs.notify({
        title,
        text,
        iconPack: 'feather',
        icon,
        color
      })
    }
  },
  created () {
    this.$store.dispatch('token/fetchTokenRequest')

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

        .vs-table--search {
          padding-top: 0;

          .vs-table--search-input {
            padding: 0.9rem 2.5rem;
            font-size: 1rem;

            & + i {
              left: 1rem;
            }

            &:focus + i {
              left: 1rem;
            }
          }
        }
      }

      .vs-table {
        border-collapse: separate;
        border-spacing: 0 1.3rem;
        padding: 0 1rem;

        tr {
          box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .05);

          td {
            padding: 20px;

            &:first-child {
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }

            &:last-child {
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
          }

          td.td-check {
            padding: 20px !important;
          }
        }
      }

      .vs-table--thead {
        th {
          padding-top: 0;
          padding-bottom: 0;

          .vs-table-text {
            text-transform: uppercase;
            font-weight: 600;
          }
        }

        th.td-check {
          padding: 0 15px !important;
        }

        tr {
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
