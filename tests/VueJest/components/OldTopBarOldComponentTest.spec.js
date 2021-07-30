import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from '~/js/routes'
import { routePath } from '~/js/constantsRoutes'

import TopBar from '~components/crm/TopBar'

describe('TopBar Component Test', () => {
  const localVue = createLocalVue()

  localVue.use(Vuex)
  localVue.use(VueRouter)

  let vuetify
  let actions
  let auth
  let home
  let homeState
  let homeActions
  let store
  let router

  const loggedUser = {
    id: "9324a608-62e5-43b3-829d-634119f92661",
    name: "Dr. Jaylon Parker",
    name_kana: "-",
    is_admin: 1,
    email: "admin@example.com",
    department_id: 2,
    department_name: "I-Style",
    branch_id: 4,
    branch_name: "周南店",
    company_id: 1,
    company_name: "イケダグループホールディングス"
  }

  beforeEach(() => {
    vuetify = new Vuetify()
    router = new VueRouter({ routes })
    actions = {
      authLogout: jest.fn()
    }
    homeState = {
      loggedUser
    },
    homeActions = {
      retrieveLoggedUser: jest.fn()
    }
    auth = {
      namespaced: true,
      actions
    }
    home = {
      namespaced: true,
      state: homeState,
      actions: homeActions
    }
    store = new Vuex.Store({
      modules: {
        auth,
        home,
      }
    })
  })

  const propsData = {
    toggle: jest.fn()
  }

  const mountFunction = options => {
    return mount(TopBar, {
      localVue,
      vuetify,
      store,
      router,
      propsData,
      ...options,
    })
  }

  it('Component renders properly', () => {
    const wrapper = mountFunction()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Profile account contains correct username', () => {
    const wrapper = mountFunction()

    const accountName = wrapper.find('.v-toolbar__title')
    expect(accountName.exists()).toBe(true)
    expect(accountName.text()).toBe(loggedUser.name)
  })

  it('Logout action fired when profile button clicked', async () => {
    const wrapper = mountFunction()

    const button = wrapper.findAll('.v-btn').at(1)
    expect(button.exists()).toBe(true)

    await button.trigger('click')
    await wrapper.vm.$nextTick()

    expect(actions.authLogout).toHaveBeenCalled()
    expect(wrapper.vm.$route.name).toBe(routePath.login.name)
  })

  it('Toggle is fired when nav bar icon is clicked', async () => {
    const wrapper = mountFunction()

    const button = wrapper.find('.v-app-bar__nav-icon')
    expect(button.exists()).toBe(true)

    await button.trigger('click')
    await wrapper.vm.$nextTick()

    expect(propsData.toggle).toHaveBeenCalled()
  })
})