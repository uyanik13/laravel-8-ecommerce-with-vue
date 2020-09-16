/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/


export default {
  ADD_ITEM(state, item) {
    state.AllInvoices.unshift(item)
  },
  SET_INVOICES(state, invoicesData) {
    state.AllInvoices = invoicesData
  },
  // SET_LABELS(state, labels) {
  //   state.eventLabels = labels
  // },
  UPDATE_INVOICE(state, invoice) {
      const invoiceIndex = state.AllInvoices.findIndex((i) => i.id === invoice.id)
      Object.assign(state.AllInvoices[invoiceIndex], invoice)
  },
  REMOVE_ITEM(state, itemId) {
      const ItemIndex = state.AllInvoices.findIndex((i) => i.id === itemId)
      state.AllInvoices.splice(ItemIndex, 1)
  },
}
