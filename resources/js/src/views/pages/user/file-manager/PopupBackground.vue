<!-- =========================================================================================
    File Name: PopupBackground.vue
    Description: Change background when popup opens
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: https://www.dijitalreklam.org
========================================================================================== -->


<template>
  <div class="align-content-center">
    <vs-button color="primary" type="filled" icon-pack="feather" @click="popupActive=true" icon="icon-eye"></vs-button>
    <vs-popup background-color="rgba(152,152,152,.7)"
              :background-color-popup="colorx"
              class="bg-primary-gradient"
              fullscreen
              :title="File.file_name" :active.sync="popupActive">


        <img :src="File.slug" alt="content-img" class="fullscreen " >




    </vs-popup>
  </div>
</template>

<script>




export default {
  props: {
    File: {
      type: Object,
      required: true
    },
  },
    data() {
        return {
            shopierData:null,
            normalPrice : true,
            price : 49.99,
            plan_name : "İşletme Paketi",
            colorx:"#ffffff",
            popupActive: false,
        }
    },
    computed: {
      validateForm() {
        return !this.errors.any() && this.price >= 49;
      },
    },
  methods: {
    submitData() {
      if (!this.validateForm ) return
      const payload = {
          price: this.price,
          plan_name: this.plan_name
      }
      this.$store.dispatch('user/createPayment', payload)
        .then((response) => {
          this.$vs.notify({
            title: 'Başarılı',
            text: 'Şimdi Güvenli Ödeme Yapabilirsiniz.',
            iconPack: 'feather',
            icon: 'icon-info',
            color: 'success'
          })
          console.log('SHOPIER RESPONSE',response)
          this.shopierData = response.data;
        })
        .catch(error => {
          this.$vs.notify({
            title: 'Error',
            text: error.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
        })
    },

  },
}
</script>
