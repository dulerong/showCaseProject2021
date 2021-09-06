import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import NavigationDrawer from '~components/NavigationDrawer'
import { navigation } from '~js/router/constantRoutes'

describe('AppBar Component', () => {
  const localVue = createLocalVue()

  let vuetify
  
  beforeEach(() => {
    vuetify = new Vuetify()
  })

  afterEach(() => {    
    jest.clearAllMocks()
  })

  const mountFunction = (isMini = false, options) => {
    return mount(NavigationDrawer, {
      localVue,
      vuetify,
      mocks: {
        $t: (msg) => msg,
        $route: {
          params: { lang: 'en' }
        }
      },
      stubs: ['router-link'],
      propsData: {
        drawer: {
          isMini
        }
      },
      ...options
    })
  }

  it('Renders properly', () => {
    const wrapper = mountFunction(true)

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Opens when passed isMini = true', () => {
    const wrapper = mountFunction(true)

    const naviDrawer = wrapper.find('.v-navigation-drawer--close')
    expect(naviDrawer.exists()).toBeFalsy()  
  })

  it('Contains correct amount of groups', () => {
    const wrapper = mountFunction()

    const group = wrapper.findAll('router-link-stub')
    expect(group.length).toEqual(navigation[0].children.length)
  })
})