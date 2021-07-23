// route paths
import { routePath } from './constantRoutes'

// layouts
import DefaultLayout from '~layouts/default'
import LoginLayout from '~layouts/login'

// pages
import HomePage from '~pages/HomePage'
import LoginPage from '~pages/LoginPage'
import StatPage from '~pages/StatPage'
import NotFoundPage from '~pages/NotFoundPage'

// import { store } from './store'

export default [
  {
    path: routePath.home.path,
    name: routePath.home.name,
    component: HomePage,
    meta: { layout: DefaultLayout }
  },
  {
    path: routePath.stat.path,
    name: routePath.stat.name,
    component: StatPage,
    meta: { layout: DefaultLayout }
  },
  {
    path: routePath.login.path,
    name: routePath.login.name,
    component: LoginPage,
    meta: { layout: LoginLayout }
  },
  {
    path: '*',
    component: NotFoundPage,
    meta: { layout: DefaultLayout, requiresAuth: true }
  }
]