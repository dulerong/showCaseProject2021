import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Chart from '~components/Chart'

describe('SettingDrawer Component', () => {
  const localVue = createLocalVue()

  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const mountFunction = (chartData = [], options) => {
    return mount(Chart, {
      localVue,
      vuetify,
      mocks: {
        $t: (msg) => msg,
      },
      propsData: {
        chartData
      },
      stubs: {
        ApexChart: true,
      },
      ...options
    })
  }

  it('Renders properly', () => {
    const wrapper = mountFunction()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Computed property: themeMode returns dark or light correctly', () => {
    const localThis = (darkMode) => {
      return {
        $vuetify: {
          theme: {
            dark: darkMode
          }
        }
      }
    }

    expect(Chart.computed.themeMode.call(localThis(false))).toEqual('light')

    expect(Chart.computed.themeMode.call(localThis(true))).toEqual('dark')
  })

  it('Computed translatedChartData: returns correct translation', () => {
    const mockChartData = [
      { name: 'California', data: [1, 2, 3] }
    ]
    const translatedChartData = mockChartData.map(item => ({
      ...item,
      name: `japanPopulation.prefectures.${item.name}`
    }))
    const wrapper = mountFunction(mockChartData)

    expect(wrapper.vm.translatedChartData).toStrictEqual(translatedChartData)
  })
})