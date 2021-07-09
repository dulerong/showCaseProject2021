// require('./bootstrap');

import Vue from 'vue'
import App from './vue/App.vue'
import vuetify from './vuetify'
import router from './router/router'
import { store } from './store'

// below are plugins
import './plugins/day'

Vue.config.productionTip = false

new Vue ({
  el: '#app',
  vuetify,
  router,
  store,
  components: { App }
})
