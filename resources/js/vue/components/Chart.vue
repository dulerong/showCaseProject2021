<template lang="pug">
apexchart(ref="chart" type="line" height="350" :options="chartOptions" :series="chartData")
</template>

<script>
export default {
  created() {
    console.log(this.$vuetify.theme.dark)
  },
  props: {
    chartData: {
      type: Array,
      required: true
    }
  },
  computed: {
    chartOptions() {
      const THEME_MODE = this.$vuetify.theme.dark ? 'dark' : 'light'
      return {
        theme: {
          mode: THEME_MODE
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
        title: {
          text: this.$t("japanPopulation.chart.title"),
          align: 'left'
        },
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
        xaxis: {
          categories: [
            '1960', '1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020', '2025', '2030', '2035', '2040', '2045'
          ],
          title: {
            text: this.$t("japanPopulation.chart.xAxis")
          }
        },
        yaxis: {
          title: {
            text: this.$t("japanPopulation.chart.yAxis")
          },
          labels: {
            formatter: val => val.toLocaleString()
          }
        },
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