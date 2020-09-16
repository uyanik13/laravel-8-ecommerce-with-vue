/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/


export default {
  outgoingTokens: (state) => userId => state.tokens.filter((token) => token.from === userId),
  incomingTokens: (state) => userId => state.tokens.filter((token) => token.to === userId),
  pendingTokens:(state) => userId => state.tokens.filter((token) => token.to === userId)
    .filter((token) => token.status === 'pending')
    .map(o => o.amount).reduce((a, c) => a + c, 0),
  completedTokens: (state) => userId => state.tokens.filter((token) => token.to === userId)
    .filter((token) => token.status === 'completed')
    .map(o => o.amount).reduce((a, c) => a + c, 0),
  tokenRequestsAmount: (state) => state.tokenRequests
    .filter((token) => token.status === 'pending').map(o => o.amount)
    .reduce((a, c) => a + c, 0),
  pendingTokensForAdmin: (state) =>  state.tokenRequests
    .filter((token) => token.status === 'pending').flatMap(user => user['amount']),
  isAlreadyRequested: (state) => id => state.tokenRequests.filter((token) => token.status === 'pending')
    .includes(state.tokenRequests.filter((token) => token.status === 'pending').find((user) => user.user_id === id)),
  outgoingTokensAmount: (state) => userId => state.tokens
    .filter((token) => token.from === userId)
    .map(o => o.amount)
    .reduce((a, c) => a + c, 0),
  incomingTokensAmount: (state) => userId => state.tokens
    .filter((token) => token.to === userId)
    .map(o => o.amount)
    .reduce((a, c) => a + c, 0),
    outgoingTokensJustAmount: (state) => userId => state.tokens
    .filter((token) => token.from === userId)
    .filter((token) => token.status === 'completed')
    .flatMap(user => user['amount']),
  incomingTokensJustAmount: (state) => userId => state.tokens
    .filter((token) => token.to === userId)
    .filter((token) => token.status === 'completed')
    .flatMap(user => user['amount']),
  
    
}
