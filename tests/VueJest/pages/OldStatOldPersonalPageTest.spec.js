import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import StatPersonalPage from '~pages/StatPersonalPage'
import StatisticPersonal from '~components/crm/stat/person/StatisticPersonal'

describe('Stat Peronal Page Tests', () => {
  const localVue = createLocalVue()

  localVue.use(Vuex)

  let vuetify
  let statActions
  let stat
  let notificationMutations
  let notificationState
  let notification
  let store

  beforeEach(() => {
    vuetify = new Vuetify()
    statActions = {
      retrieveStatRecord: jest.fn(),
    }
    notificationMutations = {
      showNotification: jest.fn(),
    }
    notificationState = {
      isShow: false,
      message: '',
      timeout: 1500,
      color: '',
      right: false,
    }
    stat = {
      namespaced: true,
      actions: statActions
    }
    notification = {
      namespaced: true,
      state: notificationState,
      mutations: notificationMutations
    }
    store = new Vuex.Store({
      modules: {
        stat,
        notification
      }
    })
  })

  const termSelected = 42

  const mountFunction = options => {
    return mount(StatPersonalPage, {
      localVue,
      vuetify,
      stubs: ['StatisticPersonal'],
      store,
      ...options,
    })
  }

  it('Page renders properly', () => {
    const wrapper = mountFunction()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('StatisticPersonal component exists', () => {
    const wrapper = mountFunction()

    const componentStatisticPersonal = wrapper.findComponent(StatisticPersonal)
    expect(componentStatisticPersonal.exists()).toBe(true)
  })

  it('Store Action: retrieveStatRecord called when term change', async () => {
    const wrapper = mountFunction()

    await wrapper.setData({ termSelected: termSelected })

    expect(statActions.retrieveStatRecord).toHaveBeenCalledWith(expect.any(Object), { term: termSelected })
    expect(statActions.retrieveStatRecord).toHaveBeenCalledTimes(2)
  })

  it('Store Mutation: showNotification called when term change', async () => {
    const wrapper = mountFunction()

    await wrapper.setData({ termSelected: termSelected })
    await wrapper.vm.$nextTick() // this is a very useful command...

    expect(notificationMutations.showNotification).toHaveBeenCalledWith(notification.state, { message: `表示期間：${termSelected}`, right: true })
    expect(notificationMutations.showNotification).toHaveBeenCalledTimes(1)
  })

  it('v-select exists, and can be manipulated to toggle termSelected', async () => {
    const wrapper = mountFunction()
    console.log('termSelected(original value)', wrapper.vm.termSelected) // console.logs local data

    const select = wrapper.find('.v-select')
    expect(select.exists()).toBe(true)

    select.vm.selectItem(termSelected)
    await wrapper.vm.$nextTick()

    console.log('termSelected(new value)',wrapper.vm.termSelected) // console.logs local data
    expect(statActions.retrieveStatRecord).toHaveBeenCalledWith(expect.any(Object), { term: termSelected })
  })
})
