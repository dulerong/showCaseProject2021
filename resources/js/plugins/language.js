import Vue from 'vue'
import { enLanguage } from './translation/enLanguage'
import { zhLanguage } from './translation/zhLanguage'
import { jpLanguage } from './translation/jpLanguage'

export const language = {
  en: enLanguage,
  zh: zhLanguage,
  jp: jpLanguage,
}
Vue.prototype.$_language = language