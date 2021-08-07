// require('./bootstrap');

import Vue from 'vue'
import App from './vue/App.vue'
import vuetify from './vuetify'
import router from './router/'
import { store } from './store/'
import i18n from './i18n'

// below are plugins
import './axios'
import './plugins/day'
import './plugins/statPageConstants'
import './plugins/checkMobile'
import './plugins/checkScreenSize'
import './plugins/language'
import './plugins/japanPrefectures'

Vue.config.productionTip = false

new Vue ({
  el: '#app',
  vuetify,
  router,
  store,
  i18n,
  components: { App }
})
