export const notification = {
  namespaced: true,

  state: {
    isShow: false,
    message: '',
    timeout: 1500,
    color: '',
    right: false,
  },
  getters: {

  },
  actions: {

  },
  mutations: {
    showNotification(state, { message = '通知です', color = 'primary', timeout = 1500, right = false }) {
      state.message = ''
      state.color = ''
      state.timeout = 1500
      state.isShow = false

      setTimeout(() => {
        state.message = message
        state.color = color
        state.timeout = timeout
        state.isShow = true
        state.right = right
      }, 100)

    },
    hideNotification(state) {
      state.message = ''
      state.isShow = false
    }
  }
}