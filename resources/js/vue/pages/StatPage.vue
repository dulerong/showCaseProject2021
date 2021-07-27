<template lang="pug">
div
  h1 {{ $t("stat.title") }}
  v-form(v-model="isValid")
    v-row(no-gutters)
        v-select(:label="$t('stat.form.site')" :items="sites" v-model="siteSelected" item-text="name" item-value="value" multiple chips clearable)
    v-row(no-gutters)
        v-select(:label="$t('stat.form.motherAge')" :items="motherAges" v-model="motherAgeSelected" item-text="name" item-value="value" multiple chips clearable)
    v-row(no-gutters)
        v-select(:label="$t('stat.form.birthOrder')" :items="birthOrders" v-model="birthOrderSelected" multiple chips clearable)
    v-row(no-gutters)
      div(style="width: 150px") 
        v-select(:label="$t('stat.form.birthSex')" :items="birthSex" v-model="sexSelected" item-text="name" item-value="value" multiple chips clearable)
    v-row(no-gutters justify="space-between" justify-lg="start")
      v-btn(@click="fetchData" color="success" :disabled="!isValid" :small="$_screenWidthUnder450" :class="{ 'mr-2' : !$_screenWidthUnder450 }") {{ $t("stat.button.fetch") }}
      v-btn(@click="resetFilter" color="info" :small="$_screenWidthUnder450" :class="{ 'mx-2' : !$_screenWidthUnder450 }") {{ $t("stat.button.reset") }}
      v-btn(@click="clearData(true)" color="warning" :small="$_screenWidthUnder450" :class="{ 'mx-2' : !$_screenWidthUnder450 }") {{ $t("stat.button.clear") }}
  v-row(no-gutters class="my-3")
    h3 {{ $t("stat.result") }}: {{ totalNumberCount }} {{ totalNumberCount ? 'born' : '' }}
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
    birthOrders: vm.$_statBirthOrders,
    sexSelected: null,
    siteSelected: null,
    motherAgeSelected: null,
    birthOrderSelected: null,
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
    },
    headers() {
      return [
        { text: this.$t("stat.tableHeader.site"), align: 'start', sortable: false, value: 'site_id', },
        { text: this.$t("stat.tableHeader.birthOrder"), value: 'birth_order' },
        { text: this.$t("stat.tableHeader.birthSex"), value: 'birth_sex' },
        { text: this.$t("stat.tableHeader.motherAge"), value: 'mother_age' },
        { text: this.$t("stat.tableHeader.birthCount"), value: 'birth_count' },
      ]
    },
    sites() {
      return this.$_statSites.map(item => ({ ...item, name: this.$t(`stat.site.${item.name}`) }))
    },
    motherAges() {
      return this.$_statMotherAges.map(item => ({ ...item, name: this.$t(`stat.motherAges.${item.name}`) }))
    },
    birthSex() {
      return this.$_statSex.map(item => ({ ...item, name: this.$t(`stat.birthSex.${item.name}`) }))
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

      this.showNotification({ message: this.$t("stat.notification.fetch"), color: 'success' })
    },
    clearData(isButtonClick = false) {
      this.data = []
      if (isButtonClick) this.showNotification({ message: this.$t("stat.notification.clear"), color: 'warning' })
    },
    resetFilter() {
      this.siteSelected = null
      this.motherAgeSelected = null
      this.birthOrderSelected = null
      this.sexSelected = null
      this.showNotification({ message: this.$t("stat.notification.reset"), color: 'info' })
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