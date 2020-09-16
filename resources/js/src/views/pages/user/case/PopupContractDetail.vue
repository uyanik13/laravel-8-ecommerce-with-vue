<!-- =========================================================================================
    File Name: PopupBackground.vue
    Description: Change background when popup opens
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: https://www.dijitalreklam.org
========================================================================================== -->


<template>
  <div class="align-content-center mt-5">
    <feather-icon icon="EyeIcon" svgClasses="w-7 h-7 hover:text-primary stroke-current" @click="popupActive=true" />

    <vs-popup background-color="rgba(152,152,152,.7)"
              fullscreen
              :background-color-popup="colorx"
              class="bg-primary-gradient"
              :title="ServiceData.post.title" :active.sync="popupActive">


      <div class="vx-row mt-4 md:flex-row flex-col-reverse">
          <vs-tabs position="left" color="danger">
            <vs-tab :label="$t('ServiceDetail')"  icon-pack="feather" icon="icon-file-text">
              <div class="vx-row mt-4 mr-5 ml-5 md:flex-row ">
                <vx-card>
                <div class="my-6">
                  <h5 class="mb-2">{{ ServiceData.post.title }}</h5>
                  {{ ServiceData.post.content }}
                </div>
                <vs-divider></vs-divider>
                <div class="flex justify-between flex-wrap">
                        <span>
                            <p class="text-xl">{{ $t('ServiceFee') }}</p>
                            <p class="text-grey">{{ JSON.parse(ServiceData.post.options).price }} Token</p>
                        </span>
                  <span>
                            <p class="text-xl">{{ $t('ServiceExpiredDate') }}</p>
                            <p class="text-grey">{{ ServiceData.post.expires_date }}</p>
                        </span>
                </div>
                </vx-card>
              </div>
            </vs-tab>
            <vs-tab :label="$t('ServiceFiles')" icon-pack="feather" icon="icon-briefcase">
                <vx-card>
                  <div  v-for="(file,index) in JSON.parse(ServiceData.post.files)" :key="index" class="vx-col w-full sm:w-6/6 lg:w-6/6 mb-base">
                    <h5> {{$t("File") +" - "+ index }}</h5>
                    <a :href="file"><iframe align="middle" frameborder="0" height="600" scrolling="yes" :src="file" width="100%"></iframe></a>
                  </div>
                </vx-card>
            </vs-tab>
          </vs-tabs>


      </div>


    </vs-popup>
  </div>
</template>

<script>


import VuePerfectScrollbar from 'vue-perfect-scrollbar'


export default {
  components:{
    VuePerfectScrollbar
  },
  props: {
    ServiceData: {
      type: Object,
      required: true
    },
    activeUser: { }
  },
  data () {
    return {
      colorx:'#ffffff',
      popupActive: false,
      chatMsgInput: '',
      settings: { // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.price >= 49
    },
    chatData () {
      return this.$store.getters['chat/chatOrdered'](this.ServiceData.user.id)
    },
    activeUserImg () {
      return this.$store.state.AppActiveUser.photoURL
    },
    senderImg () {
      return (isSentByActiveUser) => {
        if (isSentByActiveUser) return this.$store.state.AppActiveUser.photoURL
        else return this.$store.getters['chat/contact'](this.userId).photoURL
      }
    },
    hasSentPreviousMsg () {
      return (last_sender, current_sender) => last_sender === current_sender
    }

  },
  methods: {
    sendMsg () {
      if (!this.chatMsgInput) return
      const payload = {
        //'isPinned': this.isChatPinned,
        //'id' : '_' + Math.random().toString(36).substr(2, 9),
        'from' : this.activeUser.id,
        'created_at' : new Date(),
        'to' : this.ServiceData.user.id,
        'msg'  : this.chatMsgInput,
        'read' : false
      }
      this.$store.dispatch('chat/sendChatMessage', payload)
      this.chatMsgInput = ''

      const scroll_el = this.$refs.chatLogPS.$el || this.$refs.chatLogPS
      scroll_el.scrollTop = this.$refs.chatLog.scrollHeight
    },
    isSameDay (time_to, time_from) {
      const date_time_to = new Date(Date.parse(time_to))
      const date_time_from = new Date(Date.parse(time_from))
      return date_time_to.getFullYear() === date_time_from.getFullYear() &&
        date_time_to.getMonth() === date_time_from.getMonth() &&
        date_time_to.getDate() === date_time_from.getDate()
    },
    toDate (time) {
      const locale = 'en-us'
      const date_obj = new Date(Date.parse(time))
      const monthName = date_obj.toLocaleString(locale, {
        month: 'short'
      })
      return `${date_obj.getDate()  } ${   monthName}`
    },
    scrollToBottom () {
      this.$nextTick(() => {
        this.$parent.$el.scrollTop = this.$parent.$el.scrollHeight
      })
    }

  },
  updated () {
    this.scrollToBottom()
  },


}
</script>
