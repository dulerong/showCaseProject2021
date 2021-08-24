import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import JapanPopulationPage from '~pages/JapanPopulationPage'
import prefectures from '~js/plugins/japanPrefectures'

let url = ''
let config = {}
let mockError = false

const mockResult = {
  data: {
    result: {
      data: [
        {
          data: [
            { value: 1 },
            { value: 2 },
            { value: 3 },
          ]
        }
      ]
    }
  }
}

jest.mock('axios', () => ({
  get: (_url, _config) => {
    return new Promise((resolve, reject) => {
      if (mockError) reject()

      url = _url
      config = _config
      resolve(mockResult)
    })
  }
}))

describe('Japan Population Page', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  localVue.$_prefectures = prefectures

  const mutations = { showNotification: jest.fn() }
  const mockStore = new Vuex.Store({
    modules: {
      notification: {
        namespaced: true,
        mutations,
      },
    },
  })

  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const mountFunction = options => {
    return mount(JapanPopulationPage, {
      localVue,
      vuetify,
      mocks: {
        $t: (msg) => msg,
        $store: mockStore
      },
      stubs: {
        ApexChart: true,
      },
      ...options
    })
  }

  it('Page renders properly', () => {
    const wrapper = mountFunction()

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Computed prefectures: return array of prefectures with names translated', () => {
    const prefectures = [
      { name: 'California', code: 1}
    ]
    const translateMock = (msgText) => `japanPopulation.prefectures.${msgText}`
    const translatedPrefectures = prefectures.map(item => ({
      ...item,
      translatedName: translateMock(item.name)
    }))
    const localThis = {
      $_prefectures: prefectures,
      $t: msg => msg
    }

    expect(JapanPopulationPage.computed.prefectures.call(localThis)).toStrictEqual(translatedPrefectures)
  })

  it('Watch prefectureSelected: upon change will trigger fetchData method with correct argument', async () => {
    const fetchDataMethod = jest.spyOn(JapanPopulationPage.methods, 'fetchData')
    const prefectureSelected = { name: '北海道', code: 1 }
    const wrapper = mountFunction()
    expect(fetchDataMethod).not.toHaveBeenCalled()

    await wrapper.setData({ prefectureSelected: [prefectureSelected] })
    expect(fetchDataMethod).toHaveBeenCalledWith(prefectureSelected)
  })

  it('Watch prefectureSelected: triggers removePrefecture method when user removes selected prefectures', async () => {
    const removePrefectureMethod = jest.spyOn(JapanPopulationPage.methods, 'removePrefecture')
    const prefectureSelected = [
      { name: 'California' },
      { name: 'Washington' },
    ]
    const data = () => ({ prefectureSelected })
    const wrapper = mountFunction({ data })

    await wrapper.setData({ prefectureSelected: prefectureSelected.slice(-1) })

    expect(removePrefectureMethod).toHaveBeenCalledWith(prefectureSelected.slice(0, 1))
  })

  it('Method removePrefecture: removes prefecture from chartData', async () => {
    const chartData = [
      { name: 'California' },
      { name: 'Washington' },
    ]
    const data = () => ({ chartData })
    const wrapper = mountFunction({ data })

    const deletedPrefecture = chartData.slice(0, 1)
    await wrapper.vm.removePrefecture(deletedPrefecture)
    
    const remainingPrefecture = chartData.filter(item => !deletedPrefecture.some(pref => pref.name === item.name))
    expect(wrapper.vm.chartData).toEqual(remainingPrefecture)
  })

  it('Method fetchData: axios GET request with correct parameters and call addPrefecture method with correct arguments', async () => {
    const addPrefectureMethod = jest.spyOn(JapanPopulationPage.methods, 'addPrefecture')
    const wrapper = mountFunction()
    const prefectureSelected = { name: '北海道', code: 1 }

    const API_ADDRESS = "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear"
    const params = { prefCode: prefectureSelected.code }
    const headers = {
      "Content-Type": "application/json",
      "X-API-KEY": 'API_KEY'
    }

    await wrapper.vm.fetchData(prefectureSelected)
    expect(url).toBe(API_ADDRESS)
    expect(config).toStrictEqual({params, headers})
    expect(addPrefectureMethod).toHaveBeenCalledWith([1, 2, 3], prefectureSelected.name)
  })

  it('Method fetchData: upon axios GET failure, triggers showNotification', async () => {
    const wrapper = mountFunction()
    const prefectureSelected = { name: '北海道', code: 1 }
    
    mockError = true

    await wrapper.vm.fetchData(prefectureSelected)
    expect(mutations.showNotification).toHaveBeenCalled()
  })

  it('Method addPrefecture: push new prefecture data into chartData correctly', async () => {
    const wrapper = mountFunction()
    expect(wrapper.vm.chartData).toEqual([])

    const data = [1, 2, 3]
    const prefectureName = 'California'
    await wrapper.vm.addPrefecture(data, prefectureName)

    expect(wrapper.vm.chartData).toEqual([{ name: prefectureName, data }])
  })
})