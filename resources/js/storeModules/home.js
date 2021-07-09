import axios from 'axios'
// import { apiPath } from '~/js/constantsAPI'

// let vm
// let mock = {
//   $_api: axios,
//   $_apiPath: apiPath
// }

export const home = {
  namespaced: true,

  state: {
    customers: [],
    mockData: 'hello world',
    // employeeList: [],
    // loggedUser: {},
    // events: [],
  },
  getters: {
    customers: state => state.customers,
    // employeeNames: state => state.employeeList.map(item => item.name),
    // myEmployeeID: state => state.loggedUser.id,
    // isAdmin: state => state.loggedUser.is_admin === 1,
    // eventNameList: state => state.events.map(item => `${item.name} イベントID: ${item.id}`)
  },
  actions: {
    // async retrieveCustomer({ commit }) {
    //   process.env.NODE_ENV === 'test' ? vm = mock : vm = this._vm

    //   await vm.$_api.post(vm.$_apiPath.customerVisit.customerVisit)
    //     .then(res => commit('setCustomers', res.data.data.response))
    // },
    // async retrieveEmployeeList({ commit }) {
    //   process.env.NODE_ENV === 'test' ? vm = mock : vm = this._vm

    //   return new Promise((resolve, reject) => {
    //     vm.$_api.post(vm.$_apiPath.user.getCompanyUsers)
    //       .then(res => {
    //         commit('updateEmployeeList', res.data.data.response)
    //         resolve()
    //       })
    //       .catch(() => reject)
    //   })
    // },
    // async retrieveLoggedUser({ commit }) {
    //   process.env.NODE_ENV === 'test' ? vm = mock : vm = this._vm

    //   await vm.$_api.post(vm.$_apiPath.user.getLoggedUser)
    //     .then(res => commit('setLoggedUser', res.data.data.response))
    // },
    // async retrieveEventList({ commit }) {
    //   process.env.NODE_ENV === 'test' ? vm = mock : vm = this._vm

    //   await vm.$_api.post(vm.$_apiPath.event.eventGet)
    //     .then(res => commit('setEvents', res.data.data.response))
    // },
  },
  mutations: {
    setCustomers: (state, data) => state.customers = data,
    // updateEmployeeList: (state, data) => state.employeeList = data,
    // setLoggedUser: (state, data) => state.loggedUser = data,
    // setEvents: (state, data) => state.events = data,
  }
}