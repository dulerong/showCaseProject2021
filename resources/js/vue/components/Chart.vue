<template lang="pug">
apexchart(v-if="this.chartOptions" height="400" :options="chartOptions" :series="series")
</template>

<script>
import { mapState } from 'vuex'
import VueApexCharts from 'vue-apexcharts'
export default {
  components: {
    apexchart: VueApexCharts,
  },
  created() {
    this.setChartOption()
  },
  props: {
    apiGeneral: {
      required: true
    },
    apiMain: {
      required: true
    },
    title: {
      required: true
    },
    chartType: {
      required: true
    },
    axisTitle: {
      required: true
    }
  },
  data: (vm) => ({        
    series: null,
    chartOptions: null
  }),
  computed: {
    ...mapState('stat', ['statBranchRecord']),
  },
  watch: {
    statBranchRecord: {
      handler() {
        this.chartOptions = null
        setTimeout(() => this.setChartOption(), 100)
      },
      deep: true
    },
    chartType: function () {
      this.chartOptions = null
      setTimeout(() => this.setChartOption(), 100)
    }
  },
  methods: {
    setChartOption() {
      this.chartType === '積上' ? this.getDataStackedBar() : this.getData()

      const xAxisData = this.chartType === '積上' ? this.getCategoriesStackedBar() : null

      this.chartOptions = this.$_chartSelector(this.chartType, this.axisTitle, this.title, xAxisData)
    },
    getData() {
      this.series = this.statBranchRecord[this.apiGeneral][this.apiMain].map(item => {
        const monthlyResult = Object.keys(item.result).map(key => Math.floor(item.result[key]))
        return { name: item.name, data: monthlyResult }
      })
    },
    getDataStackedBar() {
      const mockData = [
        { name: '8月', data: [] },
        { name: '9月', data: [] },
        { name: '10月', data: [] },
        { name: '11月', data: [] },
        { name: '12月', data: [] },
        { name: '1月', data: [] },
        { name: '2月', data: [] },
        { name: '3月', data: [] },
        { name: '4月', data: [] },
        { name: '5月', data: [] },
        { name: '6月', data: [] },
        { name: '7月', data: [] },
      ]
      this.series = mockData.map((item, i) => {
        let monthlyResult = this.statBranchRecord[this.apiGeneral][this.apiMain]
          .map(monthlyItem => monthlyItem.result[i + 1])
        monthlyResult.unshift(monthlyResult.pop())

        return { ...item, data: monthlyResult }
      })
    },
    getCategoriesStackedBar() {
      let categories = this.statBranchRecord[this.apiGeneral][this.apiMain]
        .map(item => item.name)
      
      categories.unshift(categories.pop())

      return categories
    }
  }
}
</script>