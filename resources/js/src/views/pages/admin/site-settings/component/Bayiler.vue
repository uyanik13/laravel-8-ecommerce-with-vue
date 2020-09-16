<template>
  <vx-card >

    <div class="vx-col w-full md:w-12/12 mb-base">
      <vx-card>
        <vs-tabs>
          <vs-tab label="Bayiler">
              <vx-card title="Bayiler">
                <div slot="no-body" class="mt-4">
                  <vs-table :data="TumBayiler" class="table-dark-inverted">
                    <template slot="thead">
                      <vs-th>İsim</vs-th>
                      <vs-th>Eposta</vs-th>
                      <vs-th>Telefon</vs-th>
                      <vs-th>Şehir</vs-th>
                      <vs-th>Adres</vs-th>
                      <vs-th>Harita</vs-th>

                    </template>

                    <template slot-scope="{data}">
                      <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                        <vs-td :data="data[indextr].name">
                          <span>{{data[indextr].name}}</span>
                        </vs-td>
                        <vs-td :data="data[indextr].address">
                          <span>{{data[indextr].address}}</span>
                        </vs-td>
                        <vs-td :data="data[indextr].phone">
                          <span>{{data[indextr].phone}}</span>
                        </vs-td>
                        <vs-td :data="data[indextr].email">
                          <span>{{data[indextr].email}}</span>
                        </vs-td>
                        <vs-td :data="data[indextr].map">
                          <span>{{data[indextr].map}}</span>
                        </vs-td>

                      </vs-tr>
                    </template>
                  </vs-table>
                </div>

              </vx-card>
          </vs-tab>
          <vs-tab label="Bayi Ekle">
            <div class="mt-3">
              <vs-input label="Bayi Adı" v-model="name" class="mt-5 w-full" name="dataSeoTitle"  />
              <vs-input label="Bayi Adresi" v-model="address" class="mt-5 w-full" name="dataSeoTitle"  />
              <vs-input label="Bayi Telefonu" v-model="phone" class="mt-5 w-full" name="dataSeoTitle"  />
              <vs-input label="Bayi Eposta" v-model="email" class="mt-5 w-full" name="dataSeoTitle"  />
              <vs-input label="Bayi Harita" v-model="map" class="mt-5 w-full" name="dataSeoTitle"  />
              <vs-input label="Bayi Şehri" v-model="city" class="mt-5 w-full" name="dataSeoTitle"  />
              <vs-button class="mr-6" @click="submitData" >{{$t('Add')}}</vs-button>
            </div>
          </vs-tab>
        </vs-tabs>
      </vx-card>
    </div>

  </vx-card>
 </template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'
import axios from 'axios';
import analyticsData from '@/views/ui-elements/card/analyticsData.js'

export default {
  components: {
    flatPickr,
    vSelect
  },
  created() {
   /* axios.get("/api/user")
      .then((response) => { this.currentUserData = response.data })
      .catch((error) => { console.log(error) })*/
  },
  data() {
    return {
          name: '' ,
          address: '',
          phone: '',
          email: '',
          city: '',
          map: '',
      analyticsData: analyticsData,
      TumBayiler : []
  }
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser
    },


  },
  methods:{
    submitData() {
          const obj = {
             name: this.name,
            address:this.address,
            phone:this.phone,
            email:this.email,
            city:this.city,
            map:this.map,
            type:'BayiFormu',
          }
            this.$store.dispatch("custom/addItem", obj).then((response) => {
              this.$vs.notify({
                title: 'Başarılı',
                text:' İçerik Başarıyla Eklendi',
                iconPack: 'feather',
                icon: 'icon-success',
                color: 'success'
              })

            }).catch(error => {
              this.$vs.notify({
                title: 'Hata',
                text: 'İçerik Eklenemedi.',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger'
              })
            })
        }
    },
  created(){
    this.$store.dispatch("custom/fetchItems")
      .then((response) => {
        response.data.forEach(element =>{
          element.type === 'BayiFormu' ? this.TumBayiler.push(JSON.parse(element.JsonData)) : '';
        });
      })
      .catch((error) => { console.log(error)})
    console.log('tumbayiler',this.TumBayiler)
  }
}
</script>
