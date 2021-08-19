import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import i18n from '../i18n'
import vuetify from '../vuetify'
import { AVAILABLE_LANG_LIST, USER_PREFER_LANG } from '~js/plugins/checkMobile'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from) {
    return to.name === from.name ? {} : { x: 0, y: 0, behavior: 'smooth' }
  },
})

const langList = AVAILABLE_LANG_LIST.map(item => item.value)

router.beforeEach((to, from, next) => {
  const { lang } = to.params

  // if requested language not available, set locale to user preferred language and redirect to homepage
  if (!langList.includes(lang)) {
    return next(USER_PREFER_LANG)
  }

  i18n.locale = lang // set current language for i18n.
  vuetify.framework.lang.current = lang // set current language for vuetify
  next()
})
  
export default router