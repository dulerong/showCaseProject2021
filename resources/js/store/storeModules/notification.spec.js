import { notification } from '~/js/store/storeModules/notification'

describe('Auth Store Test', () => {
  const state = notification.state

  const values = {
    message: 'Test Message',
    timeout: 2000,
    right: true
  }

  jest.useFakeTimers() // swap timers with jest fake timers for control of time

  it('mutation showNotification: sets state with correct value', () => {
    notification.mutations.showNotification(state, values)

    jest.runAllTimers() // fast-forward until all timers executed

    expect(state.message).toEqual(values.message)
    expect(state.color).toEqual('primary')
    expect(state.timeout).toEqual(values.timeout)
    expect(state.right).toEqual(values.right)
  })

  it('mutation hideNotification: sets state with correct value', () => {
    notification.mutations.hideNotification(state)

    expect(state.message).toEqual('')
    expect(state.isShow).toEqual(false)
  })
})