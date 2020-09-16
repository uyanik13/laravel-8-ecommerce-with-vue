<template>
    <div class="vx-col w-full lg:w-1/1 mb-base">
        <vx-card slot="no-body" class="text-center bg-primary-gradient greet-user">
          <feather-icon icon="GiftIcon" class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow" svgClasses="h-8 w-8"></feather-icon>
          <h1 class="mb-6 text-white">{{$t('upgradeYourProfile')}}</h1>
          <p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white">{{$t('underupgradeYourProfileText')}}</p>
        <vs-button class="ml-auto mt-2"  @click="save_changes">{{$t('Upgrade')}}</vs-button>
        </vx-card>
      </div>
</template>

<script>



export default {
  
  data () {
    return {
      name: null,

    }
  },
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
 
  computed: {
    validateForm () {
      return !this.errors.any()
    }
  },
  methods:{
    save_changes () {
      if (!this.validateForm) return
      const payload = {
        id: this.user.id,
      }
      this.$store.dispatch('user/updateCompany', payload)
        .then((response) => {
          this.$vs.loading.close()
          if (response.data) this.$vs.notify({
            title: 'Success',
            text: 'Succesfully updated',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'success'
          })
        })
        .catch(error => {
          this.$vs.loading.close()
          this.$vs.notify({
            title: 'Error',
            text: error.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
        })

    }

  }

}
</script>
