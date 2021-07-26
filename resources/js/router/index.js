import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import i18n from '../i18n'
import vuetify from '../vuetify'
// import { store } from './store'
// import { routePath } from './constantsRoutes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0, behavior: 'smooth' }
  },
})

const langList = ['en', 'ch']

router.beforeEach((to, from, next) => {
  const { lang } = to.params
  if (!langList.includes(lang)) return next('en') // if requested language not available, set locale to english and redirect to homepage

  i18n.locale = lang // set current language for i18n.
  vuetify.framework.lang.current = lang // set current language for vuetify
  next()

  // if (to.path === '/') next({ name: 'login', params: { lang: 'en' } })
  // if (!langList.includes(lang)) next({ name: to.name, params: { lang: 'en' } })
  // else next()
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.layout !== from.meta.layout) store.commit('notification/hideNotification')

//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     store.getters['auth/isLoggedIn'] ? next() : next({ name: routePath.login.name })
//   } else if (to.matched.some(record => record.meta.requiresVisitor)) {
//     store.getters['auth/isLoggedIn'] ? next({ name: routePath.home.name }) : next()
//   } else {
//     next()
//   }
// })
  
export default router