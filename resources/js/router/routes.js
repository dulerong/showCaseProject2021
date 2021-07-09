// route paths
import { routePath } from './constantRoutes'

// layouts
import DefaultLayout from '~layouts/default'
import LoginLayout from '~layouts/login'

// pages
import HomePage from '~pages/HomePage'
import LoginPage from '~pages/LoginPage'
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
    path: routePath.login.path,
    name: routePath.login.name,
    component: LoginPage,
    meta: { layout: LoginLayout }
  },
  // { 
  //   path: routePath.home.path, 
  //   name: routePath.home.name, 
  //   component: HomePage, 
  //   meta: { layout:  DefaultLayout, requiresAuth: true } 
  // },
  // { 
  //   path: routePath.search.path, 
  //   name: routePath.search.name, 
  //   component: CustomerSearch, 
  //   meta: { layout:  DefaultLayout, requiresAuth: true },
  // },
  // {
  //   path: routePath.register.path,
  //   name: routePath.register.name,
  //   component: CustomerCreate,
  //   meta: { layout: DefaultLayout, requiresAuth: true }
  // },
  // {
  //   path: routePath.edit.path,
  //   name: routePath.edit.name,
  //   component: CustomerEdit,
  //   meta: { layout: DefaultLayout, requiresAuth: true },
  //   beforeEnter: (to, from, next) => {
  //     if (store.getters['customerInquiry/isInfoAvailable']) next()
  //     else next({ name: routePath.search.name })
  //   }
  // },
  // {
  //   path: routePath.manage.path,
  //   name: routePath.manage.name,
  //   component: CustomerManage,
  //   meta: { layout: DefaultLayout, requiresAuth: true }
  // },
  // {
  //   path: routePath.inquiry.path,
  //   name: routePath.inquiry.name,
  //   component: CustomerInquiry,
  //   meta: { layout: DefaultLayout, requiresAuth: true },
  // },
  // { 
  //   path: routePath.calendar.path, 
  //   name: routePath.calendar.name, 
  //   component: CalendarPage, 
  //   meta: { layout: DefaultLayout, requiresAuth: true } 
  // },
  // { 
  //   path: routePath.insidesales.path, 
  //   name: routePath.insidesales.name, 
  //   component: InsideSales, 
  //   meta: { layout: DefaultLayout, requiresAuth: true } 
  // },
  // { 
  //   path: routePath.nosales.path, 
  //   name: routePath.nosales.name, 
  //   component: CustomerNoSales, 
  //   meta: { layout: DefaultLayout, requiresAuth: true } 
  // },
  // {
  //   path: routePath.statpersonal.path,
  //   name: routePath.statpersonal.name,
  //   component: StatPersonalPage,
  //   meta: { layout: DefaultLayout, requiresAuth: true }
  // },
  // {
  //   path: routePath.statbranch.path,
  //   name: routePath.statbranch.name,
  //   component: StatBranchPage,
  //   meta: { layout: DefaultLayout, requiresAuth: true }
  // },
  // {
  //   path: routePath.statbranchemployee.path,
  //   name: routePath.statbranchemployee.name,
  //   component: StatBranchEmployeePage,
  //   meta: { layout: DefaultLayout, requiresAuth: true }
  // },
  // {
  //   path: routePath.statInsideAll.path,
  //   name: routePath.statInsideAll.name,
  //   component: StatInsideAllPage,
  //   meta: { layout: DefaultLayout, requiresAuth: true }
  // },
  // {
  //   path: routePath.statInsideBranch.path,
  //   name: routePath.statInsideBranch.name,
  //   component: StatInsideBranchPage,
  //   meta: { layout: DefaultLayout, requiresAuth: true }
  // },
  // {
  //   path: routePath.sales.path,
  //   name: routePath.sales.name,
  //   component: SalesPage,
  //   meta: { layout: SalesLayout, requiresAuth: true },
  // },
  // { 
  //   path: routePath.memberPasswordReset.path, 
  //   name: routePath.memberPasswordReset.name, 
  //   component: MemberPasswordResetPage, 
  //   meta: { layout:  DefaultLayout, requiresAuth: true } 
  // },
  // { 
  //   path: routePath.login.path, 
  //   name: routePath.login.name, 
  //   component: LoginPage, 
  //   meta: { layout:  LoginLayout, requiresVisitor: true } 
  // },
  // { 
  //   path: routePath.forgotPassword.path, 
  //   name: routePath.forgotPassword.name, 
  //   component: ForgotPasswordPage, 
  //   meta: { layout:  LoginLayout, requiresVisitor: true } 
  // },
  // { 
  //   path: routePath.test.path, 
  //   name: routePath.test.name, 
  //   component: TestPage, 
  //   meta: { layout:  DefaultLayout } 
  // },
  {
    path: '*',
    component: NotFoundPage,
    meta: { layout: DefaultLayout, requiresAuth: true }
  }
]