import { shallowMount, createLocalVue } from '@vue/test-utils'
// import Vuetify from 'vuetify'

import HomePage from '~pages/HomePage'

describe('Home Page Tests', () => {
  const localVue = createLocalVue()

  const shallowMountFunction = options => {
    return shallowMount(HomePage, {
      localVue,
      mocks: {
        $t: (msg) => msg
      },
      ...options
    })
  }

  it('Page renders properly', () => {
    const wrapper = shallowMountFunction()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})