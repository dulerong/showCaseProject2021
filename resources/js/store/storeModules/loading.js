export const loading = {
  namespaced: true,

  state: {
    isLoading: false,
    message: '',
    isLoadingButton: false,
    buttonEvent: null,
  },
  getters: {

  },
  actions: {

  },
  mutations: {
    loadingStart(state, message = '読込中') {
      state.message = message
      state.isLoading = true
    },
    loadingStop(state) {
      state.message = ''
      state.isLoading = false
    },
    loadingButtonStart(state, event) {
      state.isLoadingButton = true
      state.buttonEvent = event
    },
    loadingButtonStop(state) {
      state.isLoadingButton = false
      state.buttonEvent = null
    }
  }
}