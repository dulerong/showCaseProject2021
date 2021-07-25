import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { language } from './plugins/language'

Vue.use(VueI18n)

const messages = language

export default new VueI18n({
  locale: 'en',
  messages
})