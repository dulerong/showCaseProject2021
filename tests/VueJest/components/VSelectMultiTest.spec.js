import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import VSelectMulti from '~components/VSelectMulti'

describe('VSelectMulti Component', () => {
  const localVue = createLocalVue()

  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const mountFunction = options => {
    return mount(VSelectMulti, {
      localVue,
      vuetify,
      propsData: {
        label: 'label',
        items: [],
      },
      ...options
    })
  }

  it('Renders properly', () => {
    const wrapper = mountFunction()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Watch selected: emits data correctly', async () => {
    const wrapper = mountFunction()

    const firstDataChange = ['California']
    const secondDataChange = ['New Jersey', 'Maine']

    await wrapper.setData({ selected: firstDataChange })
    await wrapper.setData({ selected: secondDataChange })

    expect(wrapper.emitted()['selected-data'].length).toBe(2)
    expect(wrapper.emitted()['selected-data'][0]).toEqual([firstDataChange])
  })
})