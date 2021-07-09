import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// Translation provided by Vuetify (javascript)
// import ja from 'vuetify/es5/locale/ja'

Vue.use(Vuetify)

const opts = {
  lang: {
    // locales: { ja },
    // current: 'ja'
  },
  theme: {
    themes: {
      light: {
        primary: '#1976D2',
        deleteBtn: '#CD5542',
        editBtn: '#E79F3C',
        detailBtn: '#F4F4F4',
        field: '#ECEFF1',
      }
    }
  }
}

export default new Vuetify(opts)