<template lang="pug">
div
  h1 New Taipei City Birth Statistics (2019)
  v-form(v-model="isValid")
    v-row(no-gutters)
        v-select(label="Site" :items="sites" v-model="siteSelected" :rules="rulesSelect" item-text="name" item-value="value" multiple chips clearable)
    v-row(no-gutters)
        v-select(label="Mother Age" :items="motherAges" v-model="motherAgeSelected" :rules="rulesSelect" multiple chips clearable)
    v-row(no-gutters)
        v-select(label="Birth Order" :items="birthOrders" v-model="birthOrderSelected" :rules="rulesSelect" multiple chips clearable)
    v-row(no-gutters)
      div(style="width: 150px") 
        v-select(label="Birth Sex" :items="sex" v-model="sexSelected" :rules="rulesSelect" multiple chips clearable)
    v-row(no-gutters justify="space-between" justify-lg="start")
      v-btn(@click="fetchData" color="success" :disabled="!isValid" :x-small="screenWidthUnder400" :class="{ 'mr-2' : !screenWidthUnder400 }") Fetch Data
      v-btn(@click="resetData" color="info" :x-small="screenWidthUnder400" :class="{ 'mx-2' : !screenWidthUnder400 }") Reset Data
      v-btn(@click="clearData(true)" color="warning" :x-small="screenWidthUnder400" :class="{ 'mx-2' : !screenWidthUnder400 }") Clear Data
  v-row(no-gutters class="my-3")
    h3 Result: {{ totalNumberCount }} {{ totalNumberCount ? 'born' : '' }}
  v-data-table(:headers="headers" :items="data")
    template(v-slot:item.birth_count="{ item }")
      v-chip(:color="getColor(item.birth_count)" dark) {{ item.birth_count }}
</template>

<script>
import mockData from '~js/mockData/stat'
import { mapMutations } from 'vuex'
export default {
  data: (vm) => ({
    isValid: false,
    sites: vm.$_statSites,
    motherAges: vm.$_statMotherAges,
    birthOrders: vm.$_statBirthOrders,
    sex: vm.$_statSex,
    sexSelected: null,
    siteSelected: null,
    motherAgeSelected: null,
    birthOrderSelected: null,
    rulesSelect: [],
    headers: [
      { text: 'Site', align: 'start', sortable: false, value: 'site_id', },
      { text: 'Birth Order', value: 'birth_order' },
      { text: 'Birth Sex', value: 'birth_sex' },
      { text: 'Mother Age', value: 'mother_age' },
      { text: 'Birth Count', value: 'birth_count' },
    ],
    data: [],
  }),
  computed: {
    filterSelected() {
      return `${this.siteSelected}|${this.motherAgeSelected}|${this.birthOrderSelected}|${this.sexSelected}`
    },
    screenWidthUnder400() {
      return screen.width < 400
    },
    totalNumberCount() {
      return this.data.reduce((total, item) => total + Number(item.birth_count), 0)
    }
  },
  watch: {
    filterSelected: function () {
      this.clearData()
    }
  },
  methods: {
    ...mapMutations('notification', ['showNotification']),
    fetchData() {
      this.data = mockData.result.records
        .filter(item => this.siteSelected ? this.siteSelected.includes(item.site_id) : true)
        .filter(item => this.birthOrderSelected ? this.birthOrderSelected.includes(item.birth_order) : true)
        .filter(item => this.motherAgeSelected ?  this.motherAgeSelected.includes(item.mother_age) : true)
        .filter(item => this.sexSelected ? this.sexSelected.includes(item.birth_sex) : true)
        .filter(item => item.birth_count > 0)

      this.showNotification({ message: 'Data Fetched', color: 'success' })
    },
    clearData(isButtonClick = false) {
      this.data = []
      if (isButtonClick) this.showNotification({ message: 'Data Cleared', color: 'warning' })
    },
    resetData() {
      this.data = mockData.result.records
      this.showNotification({ message: 'Data Reset', color: 'info' })
    },
    getColor(count) {
      return count > 0 ? 'red' : ''
    }
  }
}
</script>