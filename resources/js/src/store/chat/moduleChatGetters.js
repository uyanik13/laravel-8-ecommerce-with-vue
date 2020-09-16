/*=========================================================================================
  File Name: moduleChatGetters.js
  Description: Chat Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


// import contacts from '@/views/apps/chat/contacts'

export default {
  chatOrdered: (state) => id => {
    const chats = state.chats[id]
    //console.log('chats',chats)
    if (chats) {
      const duplicated_array = chats.slice()
      const sorted_array = duplicated_array.sort((a, b) => a.id - b.id)
      return  sorted_array
    } else return false
  },

  chatContacts: (state, getters) => {
    const chatContacts = state.chatContacts.filter((contact) => contact.name.toLowerCase().includes(state.chatSearchQuery.toLowerCase()))

    chatContacts.sort((x, y) => {
      const timeX = getters.chatLastMessaged(x.id).id
      const timeY = getters.chatLastMessaged(y.id).id
      return new Date(timeY) - new Date(timeX)
    })

    return chatContacts.sort((x, y) => {
      const chatDataX = getters.chatOrdered(x.id)
      const chatDataY = getters.chatOrdered(y.id)
      if (chatDataX && chatDataY) return chatDataY.isPinned - chatDataX.isPinned
      else return 0
    })
  },
  contacts: (state) => state.contacts.filter((contact) => contact.name.toLowerCase().includes(state.chatSearchQuery.toLowerCase())),
  contact: (state) => id => state.contacts.find((contact) => contact.id === id),
  chats: (state) => state.chats,
  chatUser: (state, getters, rootState) => id => state.contacts.find((contact) => contact.id === id) || rootState.AppActiveUser,

  chatLastMessaged: (state, getters) => id => {

    if (getters.chatOrdered(id)) {
      const last_message = getters.chatOrdered(id)[getters.chatOrdered(id).length - 1]
      return last_message.msg
    } else return '...'
  },
  chatUnseenMessages: (state, getters) => id => {
    let unseenMsg = 0
    const chatData = getters.chatOrdered(id)
    if (chatData) {
      //console.log('chatUnseenMessages',id)
      chatData.map((msg) => {
        if (msg.from === id && !msg.read) unseenMsg++
      })
    }
    return unseenMsg
  }


}
