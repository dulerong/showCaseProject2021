<template lang="pug">
div
  v-form(v-model="isValid")
    v-row(no-gutters justify="space-between")
      div(style="width: 150px")
        v-select(label="Site" :items="sites" v-model="siteSelected" :rules="rulesSelect" item-text="name" item-value="value" multiple chips clearable)
      div(style="width: 150px")
        v-select(label="Mother Age" :items="motherAges" v-model="motherAgeSelected" :rules="rulesSelect" clearable)
      div(style="width: 150px")
        v-select(label="Birth Order" :items="birthOrders" v-model="birthOrderSelected" :rules="rulesSelect" clearable)
      div(style="width: 150px") 
        v-select(label="Birth Sex" :items="sex" v-model="sexSelected" :rules="rulesSelect" clearable)
    v-row(no-gutters justify="space-between" justify-sm="start")
      //- v-btn(class="mr-1" @click="fetchData" :disabled="!isValid" ) Fetch Data
      v-btn(class="mr-1" @click="resetData" color="info") Reset Data
      v-btn(class="ml-1" @click="clearData" color="warning") Clear Data
  v-data-table(:headers="headers" :items="data")
    template(v-slot:item.birth_count="{ item }")
      v-chip(:color="getColor(item.birth_count)" dark) {{ item.birth_count }}
</template>

<script>
import mockData from '~js/mockData/stat'
export default {
  created() {
    this.data = mockData.result.records
  },
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
    }
  },
  watch: {
    filterSelected: function () {
      this.fetchData()
    }
  },
  methods: {
    fetchData() {
      this.data = mockData.result.records
        .filter(item => this.siteSelected ? this.siteSelected.includes(item.site_id) : true)
        .filter(item => this.birthOrderSelected ? item.birth_order === this.birthOrderSelected : true)
        .filter(item => this.motherAgeSelected ? item.mother_age === this.motherAgeSelected : true)
        .filter(item => this.sexSelected ? item.birth_sex === this.sexSelected : true)
    },
    clearData() {
      this.data = []
    },
    resetData() {
      this.data = mockData.result.records
    },
    getColor(count) {
      return count > 0 ? 'red' : ''
    }
  }
}
</script>