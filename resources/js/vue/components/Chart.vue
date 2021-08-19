<template lang="pug">
ApexChart(ref="chart" type="line" height="350" :options="chartOptions" :series="chartData")
</template>

<script>
export default {
  props: {
    chartData: {
      type: Array,
      required: true
    }
  },
  computed: {
    themeMode() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
    chartTitle() {
      return {
        text: this.$t("japanPopulation.chart.title"),
        align: 'left'
      }
    },
    chartXAxis() {
      return {
        categories: [
          '1960', '1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020', '2025', '2030', '2035', '2040', '2045'
        ],
        title: {
          text: this.$t("japanPopulation.chart.xAxis")
        }
      }
    },
    chartYAxis() {
      return {
        title: {
          text: this.$t("japanPopulation.chart.yAxis")
        },
        labels: {
          formatter: val => val.toLocaleString()
        }
      }
    },
    chartOptions() {
      return {
        theme: {
          mode: this.themeMode
        },
        chart: {
          height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        // colors: ['#77B6EA', '#545454'],
        // dataLabels: {
        //   enabled: true,
        // },
        stroke: {
          curve: 'smooth'
        },
        title: this.chartTitle,
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        markers: {
          size: 1
        },
        xaxis: this.chartXAxis,
        yaxis: this.chartYAxis,
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      }
    }
  },
}
</script>