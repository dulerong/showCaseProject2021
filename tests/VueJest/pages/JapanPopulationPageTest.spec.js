import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import JapanPopulationPage from '~pages/JapanPopulationPage'
import prefectures from '~js/plugins/japanPrefectures'

let url = ''
let config = {}
let mockError = false

jest.mock('axios', () => ({
  get: (_url, _config) => {
    return new Promise((resolve, reject) => {
      if (mockError) reject()

      url = _url
      config = _config
      resolve(true)
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

  it('Watch prefectureSelected: upon change will trigger fetchData method with correct argument', async () => {
    const fetchDataMethod = jest.spyOn(JapanPopulationPage.methods, 'fetchData')
    const prefectureSelected = { name: '北海道', code: 1 }
    const wrapper = mountFunction()
    expect(fetchDataMethod).not.toHaveBeenCalled()

    await wrapper.setData({ prefectureSelected: [prefectureSelected] })
    expect(fetchDataMethod).toHaveBeenCalledWith(prefectureSelected)
  })

  it('Method fetchData: upon trigger makes axios GET request with correct parameters', async () => {
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
  })

  it('Method fetchData: upon axios GET failure, triggers showNotification', async () => {
    const wrapper = mountFunction()
    const prefectureSelected = { name: '北海道', code: 1 }
    
    mockError = true

    await wrapper.vm.fetchData(prefectureSelected)
    expect(mutations.showNotification).toHaveBeenCalled()
  })
})