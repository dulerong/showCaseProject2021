import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import AppBar from '~components/AppBar'

describe('AppBar Component', () => {
  const localVue = createLocalVue()

  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  afterEach(() => {    
    jest.clearAllMocks()
  })

  const mountFunction = options => {
    return mount(AppBar, {
      localVue,
      vuetify,
      mocks: {
        $t: (msg) => msg,
        $route: {
          name: 'home'
        }
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

  it('Renders properly', () => {
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