import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import defaultLayout from '~layouts/default'

describe('App Component Tests', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const shallowMountFunction = options => {
    return shallowMount(defaultLayout, {
      localVue,
      vuetify,
      ...options,
    })
  }

  it('App renders properly', () => {
    const wrapper = shallowMountFunction()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('ToggleDrawer changes drawer.isMini correctly', () => {
    const wrapper = shallowMountFunction()
    expect(wrapper.vm.drawer.isMini).toBeFalsy()

    wrapper.vm.toggleDrawer()
    expect(wrapper.vm.drawer.isMini).toBeTruthy()
  })

  it('ToggleSideDrawer changes sideDrawer.isMini correctly', () => {
    const wrapper = shallowMountFunction()
    expect(wrapper.vm.sideDrawer.isMini).toBeFalsy()

    wrapper.vm.toggleSideDrawer()
    expect(wrapper.vm.sideDrawer.isMini).toBeTruthy()
  })
})
