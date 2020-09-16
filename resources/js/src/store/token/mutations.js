/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/


export default {
  //ADD ONLY 1 DATA TO ARRAY
  ADD_ITEM (state, item) {
    state.tokens.unshift(item)
  },

  ADD_TOKEN_REQUEST (state, item) {
    state.tokenRequests.unshift(item)
  },


  //ADD ALL DATA TO ARRAY
  SET_ITEM (state, itemData) {
    state.tokens = itemData
  },
  SET_TOKEN_REQUEST (state, itemData) {
    state.tokenRequests = itemData
  },
 

  //UPDATE DATA IN ARRAY
  UPDATE_ITEM (state, item) {
    const itemIndex = state.tokens.findIndex((i) => i.id === item.id)
    Object.assign(state.tokens[itemIndex], item)
  },
  UPDATE_TOKEN_REQUEST (state, item) {
    const itemIndex = state.tokenRequests.findIndex((i) => i.id === item.id)
    Object.assign(state.tokenRequests[itemIndex], item)
  },


  //REMOVE DATA FROM ARRAY
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.tokens.findIndex((i) => i.id === itemId)
    state.tokens.splice(ItemIndex, 1)
  },
  REMOVE_TOKEN_REQUEST (state, itemId) {
    const ItemIndex = state.tokenRequests.findIndex((i) => i.id === itemId)
    state.tokenRequests.splice(ItemIndex, 1)
  }


}
