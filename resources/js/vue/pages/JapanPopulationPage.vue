<template lang="pug">
div
  h1 Japan Population Page
  v-row(v-if="prefectureList" no-gutters)
    v-select(label="prefectures" :items="prefectureList" v-model="prefectureSelected" item-text="name" item-value="code" return-object multiple chips clearable)
</template>

<script>
import axios from 'axios'
export default {
  created() {
    const LIST = this.$_prefectures.map((item, i) => ({name: item, code: i+1}))
    this.prefectureList = LIST
  },
  data: () => ({
    prefectureList: null,
    prefectureSelected: [],
    data: []
  }),
  watch: {
    prefectureSelected: function (val, oldVal) {
      const DIFF = val.find(item => !oldVal.includes(item))
      this.fetchData(DIFF.code)
    }
  },
  methods: {
    fetchData(prefCode) {
      const API_ADDRESS = "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear"
      const params = { prefCode }
      const headers = {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.MIX_RESAS_KEY
      }
      axios.get(API_ADDRESS, { params, headers })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }
}
</script>