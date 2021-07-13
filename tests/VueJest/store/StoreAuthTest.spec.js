import { auth } from '~/js/storeModules/auth'
import { apiPath } from '~/js/constantsAPI'

let url = ''
let body = {}
const token = 12345

jest.mock('axios', () => ({
  post: (_url, _body) => {
    return new Promise((resolve) => {
      url = _url
      body = _body
      const res = {
        data: {
          access_token: 12345
        }
      }
      resolve(res)
    })
  }
}))

describe('Auth Store Test', () => {
  const state = auth.state
  const commit = jest.fn()
  const credential = {
    username: 'uitest@example.com',
    password: 'passwordTEST'
  }

  it('mutation setToken + getter isLoggedIn', () => {
    auth.mutations.setToken(state, token)

    expect(state.token).toEqual(token)
    expect(auth.getters.isLoggedIn(state)).toEqual(true)
  })

  it('mutation removeToken + getter isLoggedIn', () => {
    auth.mutations.removeToken(state)

    expect(state.token).toEqual(null)
    expect(auth.getters.isLoggedIn(state)).toEqual(false)
  })

  it('action authRequest', async () => {    
    await auth.actions.authRequest({ commit }, credential)

    expect(url).toBe(apiPath.auth.login)
    expect(body).toEqual(credential)
    expect(commit).toHaveBeenCalledWith('setToken', token)
  })

  it('action authLogout', async () => {
    await auth.actions.authLogout({ commit })

    expect(url).toBe(apiPath.logout)
    expect(commit).toHaveBeenCalledWith('removeToken')
  })
})