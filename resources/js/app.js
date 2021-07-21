// require('./bootstrap');

import Vue from 'vue'
import App from './vue/App.vue'
import vuetify from './vuetify'
import router from './router/'
import { store } from './store/'

// below are plugins
import './axios'
import './plugins/day'
import './plugins/validation'
import './plugins/statPageConstants'

Vue.config.productionTip = false

new Vue ({
  el: '#app',
  vuetify,
  router,
  store,
  components: { App }
})
