<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: https://www.dijitalreklam.org
========================================================================================== -->


<template functional>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
        <span>COPYRIGHT &copy; {{ new Date().getFullYear() }} <a href="#" target="_blank" rel="nofollow">MIND FACTORY</a>, All rights Reserved</span>
        <span class="md:flex hidden items-center">
        </span>

    </footer>
</template>

<script>


export default {
  name: 'the-footer',
  props: {
    classes: {
      type: String
    }
  },
  inject: {
    components:{
      default: {

      }
    }
  }
}
</script>
