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
      v-btn(@click="fetchData" color="success" :disabled="!isValid" :small="$_screenWidthUnder450" :class="{ 'mr-2' : !$_screenWidthUnder450 }") Fetch Data
      v-btn(@click="resetFilter" color="info" :small="$_screenWidthUnder450" :class="{ 'mx-2' : !$_screenWidthUnder450 }") Reset Filter
      v-btn(@click="clearData(true)" color="warning" :small="$_screenWidthUnder450" :class="{ 'mx-2' : !$_screenWidthUnder450 }") Clear Data
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
    isFilterOn() {
      return !!this.siteSelected || !!this.motherAgeSelected || !!this.birthOrderSelected || !!this.sexSelected
    },
    filterSelected() {
      return `${this.siteSelected}|${this.motherAgeSelected}|${this.birthOrderSelected}|${this.sexSelected}`
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
      if (!this.isFilterOn) return

      this.data = this.filterData(mockData.result.records, this.siteSelected, this.birthOrderSelected, this.motherAgeSelected, this.sexSelected)

      this.showNotification({ message: 'Data Fetched', color: 'success' })
    },
    clearData(isButtonClick = false) {
      this.data = []
      if (isButtonClick) this.showNotification({ message: 'Data Cleared', color: 'warning' })
    },
    resetFilter() {
      this.siteSelected = null
      this.motherAgeSelected = null
      this.birthOrderSelected = null
      this.sexSelected = null
      this.showNotification({ message: 'Filter Reset', color: 'info' })
    },
    filterData(data, siteSelected, birthOrderSelected, motherAgeSelected, sexSelected) {
      return data
        .filter(item => siteSelected && siteSelected.length > 0 ? siteSelected.includes(item.site_id) : true)
        .filter(item => birthOrderSelected && birthOrderSelected.length > 0 ? birthOrderSelected.includes(item.birth_order) : true)
        .filter(item => motherAgeSelected && motherAgeSelected.length > 0 ?  motherAgeSelected.includes(item.mother_age) : true)
        .filter(item => sexSelected && sexSelected.length > 0 ? sexSelected.includes(item.birth_sex) : true)
        .filter(item => item.birth_count > 0)
    },
    getColor(count) {
      return count > 0 ? 'red' : ''
    }
  }
}
</script>