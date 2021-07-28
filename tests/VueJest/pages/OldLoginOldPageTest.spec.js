import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from '~/js/routes'

import LoginPage from '~pages/LoginPage'
import { validation } from '~/js/validation'

describe('Login Page Tests', () => {
  const localVue = createLocalVue()

  localVue.use(Vuex)
  localVue.use(VueRouter)
  localVue.$_validation = validation

  let vuetify
  let actions
  let auth
  let store
  let router

  beforeEach(() => {
    vuetify = new Vuetify()
    router = new VueRouter({ routes })
    actions = {
      authRequest: jest.fn()
    }
    auth = {
      namespaced: true,
      actions
    }
    store = new Vuex.Store({
      modules: {
        auth
      }
    })
  })

  const mountFunction = options => {
    return mount(LoginPage, {
      localVue,
      vuetify,
      store,
      router,
      ...options,
    })
  }

  const credential = {
    username: 'admin@example.com',
    password: 'password'
  }

  it('Page renders properly', () => {
    const wrapper = mountFunction()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Header contains correct text', () => {
    const wrapper = mountFunction()

    const headerOne = wrapper.find('h1')
    expect(headerOne.exists()).toBe(true)
    expect(headerOne.text()).toBe('Login Page')
  })

  it('If insufficient credential, cannot push login button', async () => {
    const wrapper = mountFunction()

    const button = wrapper.find('.v-btn')
    expect(button.exists()).toBe(true)
    expect(button.props('disabled')).toBe(true)

    const usernameTextField = wrapper.findAll("input").at(0)
    const passwordTextField = wrapper.findAll("input").at(1)
    expect(usernameTextField.exists()).toBe(true)
    expect(passwordTextField.exists()).toBe(true)
    
    await usernameTextField.setValue(credential.username)
    await passwordTextField.setValue(credential.password)
    expect(wrapper.vm.username).toBe(credential.username)
    expect(wrapper.vm.password).toBe(credential.password)

    await wrapper.vm.$nextTick() // this saved my life!!!

    expect(wrapper.vm.isValid).toBe(true)
    
    expect(wrapper.find('.v-btn').props('disabled')).toBe(false)
  })

  it('Router pushes home path', async () => {
    const wrapper = mountFunction()

    router.push('/login') // if i don't do this, route name will be home, don't know why
    await wrapper.vm.$nextTick()

    await wrapper.setData(credential)

    await wrapper.vm.$nextTick()

    const form = wrapper.find('.v-form')
    expect(form.exists()).toBe(true)
    await form.trigger('submit')

    await wrapper.vm.$nextTick()

    expect(actions.authRequest).toHaveBeenCalledWith(expect.any(Object), credential)
    expect(wrapper.vm.$route.name).toBe('home')
  })
})
