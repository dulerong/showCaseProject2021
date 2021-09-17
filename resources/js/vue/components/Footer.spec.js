import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import Footer from '~components/Footer'

describe('Footer Component', () => {
  const localVue = createLocalVue()
  const footerNavigation = [1, 2, 3]

  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const mountFunction = options => {
    return mount(Footer, {
      localVue,
      vuetify,
      mocks: {
        $t: msg => msg,
        $_dateToday: {
          format: date => date
        },
        $i18n: {
          locale: 'en'
        },
        $_footer_navigation: footerNavigation
      },
      stubs: ['router-link'],
      ...options
    })
  }

  it('Renders properly', () => {
    const wrapper = mountFunction()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Number of footer route is correct', () => {
    const wrapper = mountFunction()

    const buttons = wrapper.findAll('.v-btn')
    expect(buttons.length).toEqual(footerNavigation.length)
  })
})