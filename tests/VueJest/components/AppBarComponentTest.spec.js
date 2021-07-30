import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'

import AppBar from '~components/AppBar'

describe('AppBar Component', () => {
  const localVue = createLocalVue()

  localVue.use(VueI18n)
  localVue.use(VueRouter)

  let vuetify
  let i18n
  const i18nConfig = {
    locale: 'en'
  }

  beforeEach(() => {
    vuetify = new Vuetify()
    i18n = new VueI18n(i18nConfig)
  })

  afterEach(() => {    
    jest.clearAllMocks()
  })

  const mountFunction = options => {
    return mount(AppBar, {
      localVue,
      vuetify,
      i18n,
      mocks: {
        $t: (msg) => msg
      },
      stubs: {
        MenuLanguage: true,
        AppBarProfileMenu: true
      },
      propsData: {
        toggle: jest.fn(),
        toggleSide: jest.fn()
      },
      ...options
    })
  }

  it('Page renders properly', () => {
    const wrapper = mountFunction()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('AppBar Nav button: on click toggle fn is called', async () => {
    const wrapper = mountFunction()

    const button = wrapper.find('[data-testid="toggleButton"]')
    expect(button.exists()).toBe(true)

    await button.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.toggle).toHaveBeenCalled()
  })

  it('Translate button: on click toggleSide fn is called', async () => {
    const wrapper = mountFunction()

    const button = wrapper.find('[data-testid="toggleSideButton"]')
    expect(button.exists()).toBe(true)

    await button.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.toggleSide).toHaveBeenCalled()
  })
})