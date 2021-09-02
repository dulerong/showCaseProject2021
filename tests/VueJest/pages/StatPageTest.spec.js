import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'

import { filterStatData } from '~js/plugins/statPageConstants'

import StatPage from '~pages/StatPage'
import mockData from '~js/mockData/stat'

const mockRecords = mockData.result.records

describe('Stat Page', () => {
  const localVue = createLocalVue()

  localVue.use(Vuex)
  localVue.use(VueI18n)

  let vuetify
  let i18n
  const i18nConfig = {
    locale: 'en'
  }
  let store
  let notification
  let notificationMutations

  beforeEach(() => {
    vuetify = new Vuetify()
    i18n = new VueI18n(i18nConfig)
    notificationMutations = {
      showNotification: jest.fn(),
    }
    notification = {
      namespaced: true,
      mutations: notificationMutations
    }
    store = new Vuex.Store({
      modules: {
        notification
      }
    })
  })

  afterEach(() => {    
    jest.clearAllMocks()
  })

  const mountFunction = options => {
    return mount(StatPage, {
      localVue,
      vuetify,
      store,
      i18n,
      mocks: {
        $t: (msg) => msg
      },
      ...options
    })
  }

  it('Page renders properly', () => {
    const wrapper = mountFunction()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Method fetchData: populates data property', async () => {
    const wrapper = mountFunction()
    const siteSelected = ['新北市板橋區']
    const sexSelected = ['男']
    const numberRecordsMatched = filterStatData(
      mockRecords,
      siteSelected,
      null,
      null,
      sexSelected
    ).length

    await wrapper.setData({ siteSelected, sexSelected })

    const button = wrapper.find('.v-btn')
    expect(button.text()).toEqual('stat.button.fetch')

    button.vm.$emit('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.data.length).toEqual(numberRecordsMatched)
  })

  it('Method clearData: clears data to empty array', () => {
    const options = {
      data: () => ({
        data: mockRecords
      }),
    }
    const wrapper = mountFunction(options)
    expect(wrapper.vm.data.length).not.toEqual(0)

    wrapper.vm.clearData()
    expect(wrapper.vm.data.length).toEqual(0)
  })

  it('Method resetFilter: resets filter to null', () => {
    const options = {
      data: () => ({
        siteSelected: ['新北市板橋區'],
      })
    }
    const wrapper = mountFunction(options)
    expect(wrapper.vm.siteSelected).not.toEqual([])

    wrapper.vm.resetFilter()
    expect(wrapper.vm.siteSelected).toEqual([])
  })

  it('Computed property: totalNumberCount calculates correctly', () => {
    const siteSelected = ['新北市板橋區']
    const sexSelected = ['男']
    const numberRecordsMatched = filterStatData(
      mockRecords,
      siteSelected,
      null,
      null,
      sexSelected
    )

    const actualNumberCount = numberRecordsMatched.reduce((total, item) => {
      return total + Number(item.birth_count)
    }, 0)

    const localThis = { data: numberRecordsMatched }

    expect(StatPage.computed.totalNumberCount.call(localThis))
      .toEqual(actualNumberCount)
  })

  it('Computed property: isFilterOn works correctly', () => {
    const localThisWithFilterOff = {
      siteSelected: [],
      motherAgeSelected: [],
      birthOrderSelected: [],
      sexSelected: []
    }
    expect(StatPage.computed.isFilterOn.call(localThisWithFilterOff))
      .toBeFalsy()

    const localThisWithFilterOn = {
      ...localThisWithFilterOff,
      siteSelected: ['新北市板橋區']
    }
    expect(StatPage.computed.isFilterOn.call(localThisWithFilterOn))
      .toBeTruthy()
  })

  it('Watch locale: fetchData triggerd when locale changes', async () => {
    const mockFetchData = jest.spyOn(StatPage.methods, 'fetchData')
    const wrapper = mountFunction()

    wrapper.vm.$i18n.locale = 'en'
    await wrapper.vm.$nextTick()
    expect(mockFetchData).not.toHaveBeenCalled()

    wrapper.vm.$i18n.locale = 'ch'
    await wrapper.vm.$nextTick()
    expect(mockFetchData).toHaveBeenCalled()
  })

  it('Watch filterSelected: triggers clearData', async () => {
    const mockClearData = jest.spyOn(StatPage.methods, 'clearData')
    const wrapper = mountFunction()

    await wrapper.setData({ siteSelected: [] })
    const initialFilterSelected = wrapper.vm.filterSelected
    expect(mockClearData).not.toHaveBeenCalled()

    await wrapper.setData({ siteSelected: ['新北市板橋區'] })
    const currentFilterSelected = wrapper.vm.filterSelected
    expect(currentFilterSelected).not.toEqual(initialFilterSelected)
    expect(mockClearData).toHaveBeenCalled()
  })

  it('Store Mutation: showNotification called at correct time', async () => {
    const wrapper = mountFunction()
    const siteSelected = ['新北市板橋區']

    wrapper.vm.fetchData()

    expect(notificationMutations.showNotification).not.toHaveBeenCalled()

    await wrapper.setData({ siteSelected })
    wrapper.vm.fetchData()

    expect(notificationMutations.showNotification).toHaveBeenCalled()
  })
})