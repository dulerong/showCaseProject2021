<template lang="pug">
div
  h1 {{ $t("japanPopulation.title") }}
  v-row(no-gutters)
    v-select(label="prefectures" :items="$_prefectures" v-model="prefectureSelected" item-text="name" item-value="code" return-object multiple chips clearable)
  Chart(:chartData="chartData")
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  components: {
    Chart: require('~components/Chart').default
  },
  data: () => ({
    prefectureSelected: [],
    error: false,
    apiResponse: null,
    chartData: []
  }),
  watch: {
    prefectureSelected: async function (val, oldVal) {
      if (val.length < oldVal.length) {
        const deletedPrefecture = oldVal.find(item => !val.includes(item))
        this.removePrefecture(deletedPrefecture)
      } else {
        const newPrefecture = val.find(item => !oldVal.includes(item))
        await this.fetchData(newPrefecture)
        
        if (this.error) return
        this.chartData.push({ name: newPrefecture.name, data: this.apiResponse})
      }
    },
  },
  methods: {
    ...mapMutations('notification', ['showNotification']),
    fetchData: async function(prefecture) {
      const API_ADDRESS = "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear"
      const params = { prefCode: prefecture.code }
      const API_KEY = process.env.NODE_ENV === 'test' ? 'API_KEY' : process.env.MIX_RESAS_KEY
      const headers = {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY
      }
      return axios.get(API_ADDRESS, { params, headers })
        .then(res => this.apiResponse = res.data.result.data[0].data.map(item => item.value))
        .catch(() => {
          this.error = true
          this.showNotification({ message: 'Error occurred fetching data', color: 'error' })
        })
    },
    removePrefecture(deletedPrefecture) {
      this.chartData = this.chartData.filter(item => item.name !== deletedPrefecture.name)
    }
  }
}
</script>