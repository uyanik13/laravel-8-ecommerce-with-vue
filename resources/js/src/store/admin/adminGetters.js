/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/


export default {

  chartDataForPayments: (state) =>  state.payments.flatMap(payment => payment['amount']),
  pendingPayments:(state) =>  state.payments.filter((payment) => payment.status === 'pending'),
  pendingPaymentsAmount:(state) => state.payments.filter((payment) => payment.status === 'pending').map(o => o.amount).reduce((a, c) => a + c, 0),
  completedPayments: (state) => state.payments.filter((token) => token.status === 'completed'),
  completedPaymentsAmount: (state) => state.payments.filter((token) => token.status === 'completed').map(o => o.amount).reduce((a, c) => a + c, 0),

  chartDataForOrders: (state) =>  state.orders.flatMap(payment => payment['price']),
  pendingOrders:(state) =>  state.orders.filter((payment) => payment.status === 'pending'),
  pendingOrdersAmount:(state) => state.orders.filter((payment) => payment.status === 'pending').map(o => o.price).reduce((a, c) => a + c, 0),
  completedOrders: (state) => state.orders.filter((token) => token.status === 'completed'),
  completedOrdersAmount: (state) => state.orders.filter((token) => token.status === 'completed').map(o => o.price).reduce((a, c) => a + c, 0),



}
