import Vue from 'vue'
import { enLanguage } from './translation/enLanguage'
import { zhLanguage } from './translation/zhLanguage'

export const language = {
  en: enLanguage,
  zh: zhLanguage
}
Vue.prototype.$_language = language