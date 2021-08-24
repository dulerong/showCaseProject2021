import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import SettingDrawer from '~components/SettingDrawer'

describe('SettingDrawer Component', () => {
  const localVue = createLocalVue()

  let vuetify
  
  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const mountFunction = (isMini = true, options) => {
    return mount(SettingDrawer, {
      localVue,
      vuetify,
      mocks: {
        $t: (msg) => msg,
      },
      propsData: {
        sideDrawer: {
          isMini
        }
      },
      ...options
    })
  }

  it('Renders properly', () => {
    const wrapper = mountFunction()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Method toggleThemeLight & toggleThemeDark: sets vuetify to light/dark mode', () => {
    const wrapper = mountFunction()

    wrapper.vm.toggleThemeDark()
    expect(wrapper.vm.$vuetify.theme.dark).toBeTruthy()

    wrapper.vm.toggleThemeLight()
    expect(wrapper.vm.$vuetify.theme.dark).toBeFalsy()
  })

  it('Computed isDark: returns correct vuetify theme value', () => {
    const localThis = {
      $vuetify: {
        theme: {
          dark: true
        }
      }
    }

    expect(SettingDrawer.computed.isDark.call(localThis)).toBeTruthy()
  })

  it('Light/Dark button: on click triggers toggleThemeLight/Dark method', async () => {
    const mockToggleThemeDark = jest.spyOn(SettingDrawer.methods, 'toggleThemeDark')
    const mockToggleThemeLight = jest.spyOn(SettingDrawer.methods, 'toggleThemeLight')
    const wrapper = mountFunction()

    const darkButton = wrapper.findAll('.v-btn').at(1)
    const lightButton = wrapper.findAll('.v-btn').at(0)
    expect(darkButton.text()).toBe('settingDrawer.dark')
    expect(lightButton.text()).toBe('settingDrawer.light')

    darkButton.trigger('click')
    await wrapper.vm.$nextTick()
    expect(mockToggleThemeDark).toHaveBeenCalled()

    lightButton.trigger('click')
    await wrapper.vm.$nextTick()
    expect(mockToggleThemeLight).toHaveBeenCalled()
  })
})