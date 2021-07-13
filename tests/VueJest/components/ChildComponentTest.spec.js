import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import ChildComponent from '~components/crm/ChildComponent'
import axios from 'axios'

jest.mock('axios')

describe('Child Component Tests', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const shallowMountFunction = options => {
    return shallowMount(ChildComponent, {
      localVue,
      vuetify,
      ...options,
    })
  }

  it('ChildComponent renders properly', () => {
    const wrapper = shallowMountFunction({
      propsData: {
        message: 'header number three is updated'
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('ChildComponent props confirm', () => {
    const wrapper = shallowMountFunction({
      propsData: {
        message: 'header number three is updated'
      }
    })

    expect(wrapper.props().message).toBe('header number three is updated')

    const headerThree = wrapper.find('h3')
    expect(headerThree.text()).toMatch('is updated')
  })

  it('ChildComponent props confirm', async () => {
    const clickMe = jest.spyOn(ChildComponent.methods, 'clickMe')
    const wrapper = mount(ChildComponent, {
      localVue,
      vuetify,
      propsData: {
        message: 'something I like'
      },
      data() {
        return {
          counter: 1
        }
      }
    })
    const response = {
      data: 'responseData'
    }
    axios.get.mockResolvedValue(response)

    expect(wrapper.html()).toMatchSnapshot()

    const button = wrapper.find('.v-btn')
    expect(button.exists()).toBe(true)

    const emitEvent = jest.fn()
    wrapper.vm.$on('click-event', emitEvent)
    
    await button.trigger('click')
    expect(clickMe).toHaveBeenCalled()
    expect(emitEvent).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.counter).toBe(2)

    expect(wrapper.vm.webData).toBe('responseData')
  })
})
