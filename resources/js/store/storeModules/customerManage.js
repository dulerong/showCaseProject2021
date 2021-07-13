import axios from 'axios'
import { apiPath } from '~/js/constantsAPI'

let vm
let mock = {
  $_api: axios,
  $_apiPath: apiPath
}

export const customerManage = {
  namespaced: true,

  state: {
    customers: [],
    customersDialog: [],
    isUpdate: true,
    file: '',
  },
  getters: {

  },
  actions: {
    async retrieveOwnCustomers({ commit }, pagination) {
      process.env.NODE_ENV === 'test' ? vm = mock : vm = this._vm

      await vm.$_api.post(vm.$_apiPath.customer.getOwnCustomers, pagination)
        .then(res => {
          commit('setCustomers', res.data.data.response.own_customers)
        })
    },
    async registerData({ commit, state }) {
      process.env.NODE_ENV === 'test' ? vm = mock : vm = this._vm

      let formData = new FormData();
      formData.append('file', state.file)

      const headers = {
        'Content-Type': 'multipart/form-data'
      }
      return new Promise((resolve, reject) => {
        vm.$_api.post(vm.$_apiPath.customer.customerImportCSV, formData, { headers })
          .then(res => {
            commit('removeFile')
            resolve(res)
          })
          .catch(err => {
            commit('removeFile')
            reject(err)
          })
      })
    },
    async loadCSV({ commit, state }, csvFile) {
      process.env.NODE_ENV === 'test' ? vm = mock : vm = this._vm 

      await new Promise(resolve => {
        setTimeout(() => {
          commit('setFile', csvFile)
          resolve()
        }, 500)
      })   

      return new Promise(resolve => {
        vm.$papa.parse(state.file, {
          header: true,
          skipEmptyLines: true,
          transform: function(val) {
            return val.trim()
          },
          complete: function(result) {
            const keys = Object.keys(result.data[0])
            const data = result.data.map(item => ({
              name: item[keys[0]],
              email: item[keys[3]],
              phone: item[keys[4]],
              prefecture: item[keys[8]],
              city: item[keys[9]],
              address: item[keys[10]],
              contactDate: item[keys[keys.length - 1]]
            }))
            commit('setCustomersDialog', data)
            resolve()
          }
        })
      })
    },
  },
  mutations: {
    setCustomers(state, data) {
      state.customers = data
    },
    setCustomersDialog(state, data) {
      state.customersDialog = data
    },
    updateCustomerData(state, data) {
      state.customers = [...state.customers, ...data]
    },
    replaceCustomerData(state, data) {
      state.customers = data
    },
    clearCustomerDialogData(state) {
      state.customersDialog = []
    },
    setFile(state, data) {
      state.file = data
    },
    removeFile(state) {
      state.file = ''
    },
  }
}