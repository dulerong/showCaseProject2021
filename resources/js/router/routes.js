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
import AboutPage from '~pages/AboutPage'

// import { store } from './store'
import i18n from '../i18n'

export default [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: 'about',
        name: 'about',
        component: AboutPage,
        meta: { layout: DefaultLayout }
      },
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
  },
]