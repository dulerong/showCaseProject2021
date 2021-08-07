import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import i18n from '../i18n'
import vuetify from '../vuetify'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from) {
    return to.name === from.name ? {} : { x: 0, y: 0, behavior: 'smooth' }
  },
})

const langList = ['en', 'ch']

router.beforeEach((to, from, next) => {
  const { lang } = to.params
  if (!langList.includes(lang)) return next('en') // if requested language not available, set locale to english and redirect to homepage

  i18n.locale = lang // set current language for i18n.
  vuetify.framework.lang.current = lang // set current language for vuetify
  next()
})
  
export default router