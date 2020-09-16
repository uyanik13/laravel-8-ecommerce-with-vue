"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/
var _default = {
  outgoingTokens: function outgoingTokens(state) {
    return function (userId) {
      return state.tokens.filter(function (token) {
        return token.from === userId;
      });
    };
  },
  incomingTokens: function incomingTokens(state) {
    return function (userId) {
      return state.tokens.filter(function (token) {
        return token.to === userId;
      });
    };
  },
  pendingTokens: function pendingTokens(state) {
    return function (userId) {
      return state.tokens.filter(function (token) {
        return token.to === userId;
      }).filter(function (token) {
        return token.status === 'pending';
      }).map(function (o) {
        return o.amount;
      }).reduce(function (a, c) {
        return a + c;
      }, 0);
    };
  },
  completedTokens: function completedTokens(state) {
    return function (userId) {
      return state.tokens.filter(function (token) {
        return token.to === userId;
      }).filter(function (token) {
        return token.status === 'completed';
      }).map(function (o) {
        return o.amount;
      }).reduce(function (a, c) {
        return a + c;
      }, 0);
    };
  },
  tokenRequestsAmount: function tokenRequestsAmount(state) {
    return state.tokenRequests.filter(function (token) {
      return token.status === 'pending';
    }).map(function (o) {
      return o.amount;
    }).reduce(function (a, c) {
      return a + c;
    }, 0);
  },
  pendingTokensForAdmin: function pendingTokensForAdmin(state) {
    return state.tokenRequests.filter(function (token) {
      return token.status === 'pending';
    }).flatMap(function (user) {
      return user['amount'];
    });
  },
  isAlreadyRequested: function isAlreadyRequested(state) {
    return function (id) {
      return state.tokenRequests.filter(function (token) {
        return token.status === 'pending';
      }).includes(state.tokenRequests.filter(function (token) {
        return token.status === 'pending';
      }).find(function (user) {
        return user.user_id === id;
      }));
    };
  },
  outgoingTokensAmount: function outgoingTokensAmount(state) {
    return function (userId) {
      return state.tokens.filter(function (token) {
        return token.from === userId;
      }).map(function (o) {
        return o.amount;
      }).reduce(function (a, c) {
        return a + c;
      }, 0);
    };
  },
  incomingTokensAmount: function incomingTokensAmount(state) {
    return function (userId) {
      return state.tokens.filter(function (token) {
        return token.to === userId;
      }).map(function (o) {
        return o.amount;
      }).reduce(function (a, c) {
        return a + c;
      }, 0);
    };
  },
  outgoingTokensJustAmount: function outgoingTokensJustAmount(state) {
    return function (userId) {
      return state.tokens.filter(function (token) {
        return token.from === userId;
      }).filter(function (token) {
        return token.status === 'completed';
      }).flatMap(function (user) {
        return user['amount'];
      });
    };
  },
  incomingTokensJustAmount: function incomingTokensJustAmount(state) {
    return function (userId) {
      return state.tokens.filter(function (token) {
        return token.to === userId;
      }).filter(function (token) {
        return token.status === 'completed';
      }).flatMap(function (user) {
        return user['amount'];
      });
    };
  }
};
exports["default"] = _default;