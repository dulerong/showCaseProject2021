import Vue from 'vue'
import Vuex from 'vuex'

import { notification } from './storeModules/notification'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    notification,
  }
})