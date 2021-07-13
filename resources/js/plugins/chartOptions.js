import Vue from 'vue'

export const chartOptionsLine = (axisTitle, chartTitle) => {
  return {
    chart: {
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    markers: {
      size: 5
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: `${chartTitle}`,
      align: 'left'
    },
    legend: {
      position: 'left'
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },   
      yaxis: {
        lines: {
          show: true
        }
      },
    },
    xaxis: {
      categories: ['8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月', '6月', '7月'],
    },
    yaxis: {
      opposite: true,
      title: {
        text: axisTitle
      }
    },
  }
}
Vue.prototype.$_chartOptionsLine = chartOptionsLine

export const chartOptionsBar = (axisTitle, chartTitle) => {
  return {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: `${chartTitle}`,
      align: 'left'
    },
    xaxis: {
      categories: ['8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月', '6月', '7月'],
    },
    yaxis: {
      title: {
        text: axisTitle
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    }
  }
}
Vue.prototype.$_chartOptionsBar = chartOptionsBar

export const chartOptionsStackedBar = (axisTitle, chartTitle, xAxisData) => {
  return {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800', '#E91E63', '#E91E63', '#E91E63', '#E91E63', '#E91E63', '#E91E63', '#E91E63'],
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: `${chartTitle}`,
      align: 'left'
    },
    xaxis: {
      categories: xAxisData,
      title: {
        text: axisTitle
      },
      labels: {
        formatter: function (val) {
          return val
        }
      }
    },
    yaxis: {
      title: {
        text: undefined
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40
    }
  }
}
Vue.prototype.$_chartOptionsStackedBar= chartOptionsStackedBar

export const chartSelector = (type, axisTitle, chartTitle, xAxisData) => {
  switch(type) {
    case '折線':
      return chartOptionsLine(axisTitle, chartTitle)
    case '棒':
      return chartOptionsBar(axisTitle, chartTitle)
    case '積上':
      return chartOptionsStackedBar(axisTitle, chartTitle, xAxisData)
  }
}
Vue.prototype.$_chartSelector = chartSelector