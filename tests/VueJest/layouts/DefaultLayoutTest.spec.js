import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import defaultLayout from '~layouts/default'
import TopBar from '~components/crm/TopBar'
import SideBar from '~components/crm/SideBar'
import Footer from '~components/crm/Footer'

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

  it('Component exists', () => {
    const wrapper = shallowMountFunction()

    const componentTopBar = wrapper.findComponent(TopBar)
    expect(componentTopBar.exists()).toBe(true)

    const componentSideBar = wrapper.findComponent(SideBar)
    expect(componentSideBar.exists()).toBe(true)

    const componentFooter = wrapper.findComponent(Footer)
    expect(componentFooter.exists()).toBe(true)
  })
})
