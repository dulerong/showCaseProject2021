import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import LoginPage from '~pages/LoginPage'

describe('Login Page', () => {
  const localVue = createLocalVue()
  const mockRoutes = {
    home: {
      name: 'home'
    }
  }

  localVue.use(Vuex)

  let vuetify
  let store
  let notification
  let notificationMutations

  beforeEach(() => {
    vuetify = new Vuetify()
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
    return mount(LoginPage, {
      localVue,
      vuetify,
      store,
      mocks: {
        $t: msg => msg,
        $router: [],
        $_routePath: mockRoutes
      },
      ...options
    })
  }

  it('Page renders properly', () => {
    const wrapper = mountFunction()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Computed greetingMessage returns correct message', () => {
    const localThis = (mockHour) => ({
      $t: msg => msg,
      $_hour_right_now: mockHour
    })

    expect(LoginPage.computed.greetingMessage.call(localThis(5)))
      .toEqual('login.greeting.morning')

    expect(LoginPage.computed.greetingMessage.call(localThis(14)))
      .toEqual('login.greeting.afternoon')

    expect(LoginPage.computed.greetingMessage.call(localThis(20)))
      .toEqual('login.greeting.evening')
  })

  it('Method login works correctly', async () => {
    jest.useFakeTimers();
    const wrapper = mountFunction()

    await wrapper.vm.login()
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 2500)
    expect(wrapper.vm.loading).toBeTruthy()

    jest.runAllTimers()
    expect(wrapper.vm.loading).toBeFalsy()
    expect(wrapper.vm.$router).toStrictEqual([
      { name: wrapper.vm.$_routePath.home.name }
    ])
    expect(notificationMutations.showNotification)
      .toHaveBeenCalledWith({}, { message: 'login.greeting.welcome' })
  })
})