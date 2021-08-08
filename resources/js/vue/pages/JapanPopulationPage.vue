<template lang="pug">
div
  h1 Japan Population Page
  v-row(no-gutters)
    v-select(label="prefectures" :items="prefectureList" v-model="prefectureSelected" item-text="name" item-value="code" return-object multiple chips clearable)
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  data: (vm) => ({
    prefectureList: vm.$_prefectures,
    prefectureSelected: [],
    data: [],
    error: false,
    apiResponse: null,
  }),
  watch: {
    prefectureSelected: function (val, oldVal) {
      const DIFF = val.find(item => !oldVal.includes(item))
      this.fetchData(DIFF.code)
    }
  },
  methods: {
    ...mapMutations('notification', ['showNotification']),
    fetchData(prefCode) {
      const API_ADDRESS = "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear"
      const params = { prefCode }
      const API_KEY = process.env.NODE_ENV === 'test' ? 'API_KEY' : process.env.MIX_RESAS_KEY
      const headers = {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY
      }
      axios.get(API_ADDRESS, { params, headers })
        .then(res => this.apiResponse = res.data.result.data[0].data)
        .catch(() => {
          this.error = true
          this.showNotification({ message: 'Error occurred fetching data', color: 'error' })
        })
    }
  }
}
</script>