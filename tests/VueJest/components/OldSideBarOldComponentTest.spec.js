import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import routes from '~/js/routes'

import SideBar from '~components/crm/SideBar'

describe('App Component Tests', () => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)

  const router = new VueRouter({ routes })

  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const propsData = {
    drawer: {
      isMini: true
    }
  }

  const mountFunction = options => {
    return mount(SideBar, {
      localVue,
      router,
      vuetify,
      propsData,
      ...options,
    })
  }

  it('App renders properly', () => {
    const wrapper = mountFunction()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  // it('Clicking SideBar tab', async () => {
  //   const wrapper = mountFunction()

  //   expect(wrapper.vm.$route.name).toBe('home')

  //   const button = wrapper.findAll('.v-list-item').at(2)
  //   button.trigger('click')

  //   expect(wrapper.vm.$route.name).toBe('search')
  // })
})
