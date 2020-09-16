/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/


export default {
  // getItem: state => (productId) => state.products.find((product) => product.id == productId),

  openCases: (state) => state.services.filter((service) => service.status === 1),

  myCases: (state) =>   state.myServices,

  parentCategories: (state) =>   state.categories.flatMap(({ id, title }) => Object.assign({ id, title })),

  myCasesTitle: (state) =>   state.myServices.flatMap(service => service['title']),

  myPosts: (state) => (userId) => state.posts.filter((post) => post.user_id === userId),

  myCasesId: (state) =>   state.myServices.flatMap(service => service['id']),

  myCasesTitleAndId: (state) =>   state.myServices.flatMap(({ id, title }) => Object.assign({ id, title })),

  emergencyCases: (state) => state.services.filter((service) => service.status === 1 && service.emergency === 1),

  randomOpenCases : (state, getters) =>  getters.openCases.sort(() => Math.random() - Math.random()).slice(0, 12),

  randomEmergencyOpenCases : (state, getters) =>  getters.emergencyCases.sort(() => Math.random() - Math.random()).slice(0, 12)

}

