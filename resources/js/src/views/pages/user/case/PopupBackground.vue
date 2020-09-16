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
              :background-color-popup="colorx"
              class="bg-primary-gradient"
              :title="ServiceData.title" :active.sync="popupActive">


      <vx-card>
        <vs-tabs  color="danger">
          <vs-tab :label="$t('ServiceInformation')"  icon-pack="feather" icon="icon-file-text">
            <div class="vx-row">
              <vx-card>
                <h5 class="mb-2">{{ ServiceData.user.name }} - {{ $t('Service') }}</h5>
                <div class="my-6">
                  <h5 class="mb-2">{{ ServiceData.title }}</h5>
                  <p class="text-grey">{{ ServiceData.content }}</p>
                </div>
                <vs-divider></vs-divider>
                <div class="flex justify-between flex-wrap">
                        <span>
                            <p class="text-xl">{{ $t('ServiceFee') }}</p>
                            <p class="text-grey">{{ JSON.parse(ServiceData.options).price }} Token</p>
                        </span>
                  <span>
                            <p class="text-xl">{{ $t('ServiceExpiredDate') }}</p>
                            <p class="text-grey">{{ ServiceData.expires_date }}</p>
                        </span>
                </div>
              </vx-card>
            </div>
          </vs-tab>
          <vs-tab :label="$t('GetContact')"  v-show="ServiceData.user_id !== activeUser.id" icon-pack="feather" icon="icon-file-text">
            <div class="vx-row">
              <vx-card title="Chat" class="overflow-hidden">
                <template slot="no-body">
                  <div class="chat-card-log">
                    <VuePerfectScrollbar ref="chatLogPS" class="scroll-area pt-6 px-6" :settings="settings" :key="$vs.rtl">
                      <ul ref="chatLog">
                        <li class="flex items-start" :class="{'flex-row-reverse': msg.to === ServiceData.user.id , 'mt-4': index}" v-for="(msg, index) in chatData" :key="index">
                          <vs-avatar size="40px" class="m-0 flex-shrink-0" :class="msg.to === ServiceData.user.id  ? 'ml-3' : 'mr-3'" :src="msg.to !== ServiceData.user.id ? activeUser.avatar : ServiceData.user.avatar"></vs-avatar>
                          <div class="msg relative bg-white shadow-md py-3 px-4 mb-2 rounded-lg max-w-md" :class="msg.to === ServiceData.user.id ? 'bg-primary-gradient text-white': 'border border-solid border-transparent bg-white'">
                            <span>{{ msg.msg }}</span>
                          </div>
                        </li>
                      </ul>
                    </VuePerfectScrollbar>
                  </div>
                  <div class="flex bg-white p-6 chat-input-container">
                    <vs-input class="mr-3 w-full" v-model="chatMsgInput" @keyup.enter="sendMsg" :placeholder="$t('TypeYourMessage')" ></vs-input>
                    <vs-button icon-pack="feather" icon="icon-send" @click="sendMsg"></vs-button>
                  </div>
                </template>
              </vx-card>
            </div>
          </vs-tab>
          <vs-tab :label="$t('Deal')" v-show="ServiceData.user_id !== activeUser.id"  icon-pack="feather" icon="icon-file-text">
            <div class="vx-row">
              <vx-card class="p-2">
                <vs-avatar class="mx-auto mb-6 block" size="80px" :src="ServiceData.user.avatar" />
                <div class="text-center">
                  <h4>{{ ServiceData.user.name }}</h4>
                  <p class="text-grey">{{ ServiceData.user.role }}</p>
                </div>
                <div class="flex justify-between flex-wrap">
                  <vs-button  @click="submitData(ServiceData)" class="mt-4 mr-2  shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">{{ $t('Deal') }}</vs-button>


                  <vs-button class="mt-4" v-if="FollowingForThisUser"
                             @click="unFollow(ServiceData.user.id)" type="border"
                             color="#c93c1d">{{ $t('UnFollow') }}</vs-button>

                  <vs-button class="mt-4" v-else
                             @click="follow(ServiceData.user.id)" type="border"
                             color="#b9b9b9">{{ $t('Follow') }}</vs-button>


                </div>

                  <vs-divider />
                  <div class="flex justify-between">
                            <span class="flex items-center">
                                <feather-icon icon="StarIcon" svgClasses="h-5 w-5 text-warning stroke-current" />
                                <span class="ml-2">4.9</span>
                            </span>
                    <span class="flex items-center">
                                <feather-icon icon="BriefCaseicon" svgClasses="h-5 w-5 text-primary stroke-current" />
                                <span class="ml-2">{{myServices.length}} {{$t('Services')}}</span>
                            </span>
                  </div>
              </vx-card>
            </div>
          </vs-tab>
        </vs-tabs>

      </vx-card>


    </vs-popup>
  </div>
</template>

<script>


import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import i18n from '@/i18n/i18n'

export default {
  components:{
    VuePerfectScrollbar
  },
  props: {
    ServiceData: {
      type: Object,
      required: true
    },
    myServices: {
      // type: ['Object', 'Array'],
      // required: true
    },
    activeUser: {
      // type: ['Object', 'Array'],
      // required: true
    },
    FollowingForThisUser: {
      // type: ['Object', 'Array'],
      // required: true
    }
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
      return !this.errors.any()
    },
    chatData () {
      return this.$store.getters['chat/chatOrdered'](this.ServiceData.user.id)
    },
   
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
    },
    submitData (data) {
      const obj = {
        post_id: data.id,
        from: data.user_id,
        price: JSON.parse(data.options).price
      }
      this.$store.dispatch('post/createContract', obj).then((response) => {
        this.showAlert(i18n.t('Success'), i18n.t('Success'), 'icon-success', 'success')
      })
        .catch(error => {
          this.showAlert(i18n.t('Error'), i18n.t('Error'), 'icon-alert-circle', 'danger')
        })
    },
    follow (data) {
      const obj = {id: data}
      this.$store.dispatch('user/follow',  obj).then((response) => {
        this.showAlert(i18n.t('Success'), i18n.t('SuccessfullyFollowed'), 'icon-success', 'success')
      })
        .catch(error => {
          this.showAlert(i18n.t('Error'), i18n.t('CouldntFollow'), 'icon-alert-circle', 'danger')
        })
    },
    unFollow (data) {
      const obj = {id: data}
      this.$store.dispatch('user/unFollow', obj).then((response) => {
        this.showAlert(i18n.t('Success'), i18n.t('SuccessfullyUnFollowed'), 'icon-success', 'success')
      })
        .catch(error => {
          this.showAlert(i18n.t('Error'), i18n.t('CouldntFollow'), 'icon-alert-circle', 'danger')
        })
    },
    showAlert (title, text, icon, color) {
      this.$vs.notify({
        title,
        text,
        iconPack: 'feather',
        icon,
        color
      })
    }
  },
  updated () {
    this.scrollToBottom()
  },
 

}
</script>
