import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import HomePage from '~pages/HomePage'

import { clientList } from '~/js/mockData/clientList'

describe('Home Page Tests', () => {
  const localVue = createLocalVue()

  localVue.filter('toYearMonthDayTime', () => 'foo')
  localVue.use(Vuex)

  let vuetify
  let actions
  let getters
  let state 
  let home
  let store

  beforeEach(() => {
    vuetify = new Vuetify()
    actions = {
      retrieveCustomer: jest.fn(),
      retrieveEmployeeList: jest.fn(),
    }
    getters = {
      customers: state => state.customers.length === 0 ? clientList : state.customers
    }
    state = {
      customers: [
        {
          customer_id: 212,
          customer_name: "武蔵",
          employee_id: "9324a608-62e5-43b3-829d-634119f92661",
          employee_name: "Dr. Jaylon Parker",
          visit_location_id: 2,
          visit_location: "宇部店",
          visit_date: "2021-06-03 14:01:00",
          brand_id: 1,
          brand_name: "いえとち本舗"
        }
      ]
    }
    home = {
      namespaced: true,
      state,
      getters,
      actions
    }
    store = new Vuex.Store({
      modules: {
        home
      }
    })
  })

  const shallowMountFunction = options => {
    return shallowMount(HomePage, {
      localVue,
      vuetify,
      store,
      ...options,
    })
  }

  it('Page renders properly', () => {
    const wrapper = shallowMountFunction()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Header contains correct text', () => {
    const wrapper = shallowMountFunction()

    const headerOne = wrapper.find('h1')
    expect(headerOne.exists()).toBe(true)
    expect(headerOne.text()).toBe('ホーム')
  })

  // it('Data is correct and headerTwo properly updated', async () => {
  //   const wrapper = shallowMountFunction()

  //   await wrapper.setData({ headerTwo: '12345'})
  //   expect(wrapper.vm.headerTwo).toBe('12345')

  //   const headerTwo = wrapper.find('h2')
  //   expect(headerTwo.text()).toBe('12345')
  // })

  // it('ChildComponent exists', () => {
  //   const wrapper = shallowMountFunction()

  //   const childComponent = wrapper.findComponent(ChildComponent)
  //   expect(childComponent.exists()).toBe(true)
  // })
})
