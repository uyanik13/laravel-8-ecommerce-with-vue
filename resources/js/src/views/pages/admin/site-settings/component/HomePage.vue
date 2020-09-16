<template>
  <div class="vx-col w-full md:w-12/12 mb-base">
      <vs-tabs position="left" color="danger">
        <vs-tab label="Anasayfa Menu Alti Slider" >
          <vx-card no-shadow v-for="(option,index)  in HomeUnderMenuSlider" :key="index">
            <div  class="vx-col  w-full md:w-12/12 mb-base">
              <vs-input :label="'H1 Aciklama'"  v-model="option.h1" class="mt-5 w-full"  />
              <vs-input :label="'H2 Aciklama'"  v-model="option.h2" class="mt-5 w-full"  />
              <vs-input :label="'Resim URL'"  v-model="option.image" class="mt-5 w-full"  />
              <vs-input :label="'Product Url'"  v-model="option.url" class="mt-5 w-full"  />
              <vs-button class="bg-danger" @click="removeThis(index,'HomeUnderMenuSlider')" >{{$t('RemoveThis')}}</vs-button>
            </div>
            <vs-divider></vs-divider>
          </vx-card>
          <vs-button class="mr-6" @click="addOptions('HomeUnderMenuSlider')" >{{$t('AddNew')}}</vs-button>
          <div class="flex flex-wrap items-center justify-end">
            <vs-button class="ml-auto mt-2" @click="SaveData('HomeUnderMenuSlider')">{{$t('save')}}</vs-button>
          </div>
        </vs-tab>
        <vs-tab label="2Li Resim Best Seller Ustu" >
          <vx-card >
              <vs-input :label="'Resim1Url(540x290)'"  v-model="ikiliResim.ikiliResim1" class="mt-5 w-full"  />
              <vs-input :label="'Resim1UrunUrl'"  v-model="ikiliResim.resim1Url" class="mt-5 w-full"  />
                 <vs-divider></vs-divider>
              <vs-input :label="'Resim2Url(540x290)'"  v-model="ikiliResim.ikiliResim2" class="mt-5 w-full"  />
              <vs-input :label="'Resim2UrunUrl'"  v-model="ikiliResim.resim2Url" class="mt-5 w-full"  />
          </vx-card>

          <div class="flex flex-wrap items-center justify-end">
            <vs-button class="ml-auto mt-2" @click="SaveData('ikiliResim')">{{$t('save')}}</vs-button>
          </div>
        </vs-tab>
        <vs-tab label="3lu Resim - 1i Solda Dikey" >
          <vx-card >
              <vs-input :label="'Resim1Url(370x580)'"  v-model="ucluResim.resim1" class="mt-5 w-full"  />
              <vs-input :label="'Resim1UrunUrl'"  v-model="ucluResim.resim1Url" class="mt-5 w-full"  />
                 <vs-divider></vs-divider>
              <vs-input :label="'Resim2Url(540x290)'"  v-model="ucluResim.resim2" class="mt-5 w-full"  />
              <vs-input :label="'Resim2UrunUrl'"  v-model="ucluResim.resim2Url" class="mt-5 w-full"  />
                <vs-divider></vs-divider>
              <vs-input :label="'Resim3Url(540x290)'"  v-model="ucluResim.resim3" class="mt-5 w-full"  />
              <vs-input :label="'Resim3UrunUrl'"  v-model="ucluResim.resim3Url" class="mt-5 w-full"  />
          </vx-card>

          <div class="flex flex-wrap items-center justify-end">
            <vs-button class="ml-auto mt-2" @click="SaveData('ucluResim')">{{$t('save')}}</vs-button>
          </div>
        </vs-tab>
         <vs-tab label="Brand Logos" >
          <vx-card no-shadow v-for="(option,index)  in brandLogos" :key="index">
            <div  class="vx-col  w-full md:w-12/12 mb-base">
              <vs-input :label="'Brand Name'"  v-model="option.name" class="mt-5 w-full"  />
              <vs-input :label="'Brand Image URL'"  v-model="option.image" class="mt-5 w-full"  />
              <vs-input :label="'Brand Url'"  v-model="option.url" class="mt-5 w-full"  />
              <vs-button class="bg-danger"  @click="removeThis(index,'brandLogos')" >{{$t('RemoveThis')}}</vs-button>
            </div>
            <vs-divider></vs-divider>
          </vx-card>
          <vs-button class="mr-6" @click="addOptions('brandLogos')" >{{$t('AddNew')}}</vs-button>
          <div class="flex flex-wrap items-center justify-end">
            <vs-button class="ml-auto mt-2" @click="SaveData('brandLogos')">{{$t('save')}}</vs-button>
          </div>
        </vs-tab>
      </vs-tabs>
  </div>

</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'


export default {
  components: {
    flatPickr,
    vSelect
  },

  data () {
    return {
      HomeUnderMenuSlider:
      [
        {
          h1: '',
          h2: '',
          image: '',
          url: ''
        }
      ],
      brandLogos:
      [
        {
          name: '',
          image: '',
          url: ''
        }
      ],
      ikiliResim :
        {
          ikiliResim1: '',
          resim1Url: '',
          ikiliResim2: '',
          resim2Url: ''
        },
      ucluResim :
        {
          resim1: '',
          resim1Url: '',
          resim2: '',
          resim2Url: '',
          resim3: '',
          resim3Url: ''
        }


    }
  },
  methods:{
    addOptions (type) {
      this[type].push({})
    },
    removeThis (index, type) {
      this[type].splice(index, 1)
    },
    SaveData (dataType) {
      const obj = {
        [dataType]: this[dataType],
        type: dataType
      }
      console.log(obj)
      this.$store.dispatch('custom/addItem', obj).then((response) => {
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
    },

  },
  computed: {
    activeUserInfo () {
      return this.$store.state.AppActiveUser
    }
  },
  created () {
    this.$store.dispatch('custom/fetchItems')
      .then((response) => {
        response.data.forEach(element => {
          if (element.type === 'HomeUnderMenuSlider') {
            this[element.type].push(JSON.parse(element.JsonData)[element.type])
            this[element.type].splice(0, 1)
            this[element.type] = this[element.type][0]
          } else {
            this[element.type] = JSON.parse(element.JsonData)[element.type]
          }

        })

      })
      .catch((error) => { console.log(error) })

  }
}
</script>
