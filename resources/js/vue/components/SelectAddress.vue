<template lang="pug">
div(class="mx-5")
  v-text-field(
    label="郵便番号"
    v-model="address.postalCode"
    :rules="postalRules"
    hint="例：1660123"
    background-color="field"
    outlined
    clearable
  )
  v-select(
    label="都道府県"
    v-model="address.prefecture"
    :items="$_prefectures"
    outlined
    clearable
    :rules="addressRules"
    background-color="field"
  )
  v-select(
    label="市区町村"
    v-model="address.city"
    :items="cityList"
    outlined clearable
    :rules="addressRules"
    background-color="field"
  )
  v-text-field(
    label="丁目番地"
    v-model="address.street"
    :rules="textRules"
    hint="例：阿佐谷北３丁目３番３号"
    background-color="field"
    outlined
    clearable
  )
  v-text-field(
    label="ビル名、室番号"
    v-model="address.building"
    :rules="textRules"
    hint="例：サイレントハウス３３３号"
    background-color="field"
    outlined clearable
  )
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  created() {
    if (this.info) this.loadData()
  },
  data: (vm) => ({
    address: {
      prefecture: null,
      city: null,
      street: null,
      building: null,
      postalCode: null
    },
    addressRules: [vm.$_validation.required, vm.$_validation.name],
    textRules: [vm.$_validation.required, vm.$_validation.twentyDigit, vm.$_validation.address],
    postalRules: [vm.$_validation.postalCode, vm.$_validation.required]
  }),
  computed: {
    ...mapState('locationSearch', ['cityList']),
    ...mapState('customerInquiry', ['info']),
    prefectureCode() {
      let index = this.$_prefectures.findIndex(item => item === this.address.prefecture) + 1

      if (index > 0) return index < 10 ? '0' + index : index
      else return null
    }
  },
  watch: {
    address: {
      handler(val) {
        this.$emit('address-data', val)
      },
      deep: true
    },
    prefectureCode: async function(val) {
      if (val) await this.searchCity(val)
      else this.removeCityList()
    },
  },
  methods: {
    ...mapMutations('locationSearch', ['removeCityList']),
    ...mapActions('locationSearch', ['searchCity']),
    loadData() {
      this.address.postalCode = this.info.customer.address_postal_code
      this.address.prefecture = this.info.customer.address_prefecture
      this.address.city = this.info.customer.address_city
      this.address.street = this.info.customer.address_street
      this.address.building = this.info.customer.address_building
    }
  }
}
</script>