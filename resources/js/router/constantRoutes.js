import Vue from 'vue'

export const routePath = {
  home: {
    title: 'Home',
    path: '/:lang',
    name: 'Home Page',
    icon: 'mdi-home'
  },
  search: {
    title: 'Search',
    path: '/search',
    name: 'search',
    icon: 'mdi-magnify'
  },
  manage: {
    title: 'Manage',
    path: '/manage',
    name: 'manage',
    icon: 'mdi-alpha-m-circle'
  },
  stat: {
    title: 'Statistics',
    path: '/:lang/stat',
    name: 'Stat Page',
    icon: 'mdi-file-chart'
  },
  login: {
    title: 'LOGIN',
    path: '/:lang/login', 
    name: 'login',
    icon: 'mdi-login'
  },
  forgotPassword: {
    title: null,
    path: '/forgot-password',
    name: 'forgotPassword',
    icon: null
  },
  memberPasswordReset: {
    title: 'Password',
    path: '/manage-password',
    name: 'managePassword',
    icon: 'mdi-shield-key'
  },
  test: {
    title: 'test',
    path: '/test',
    name: 'test',
    icon: 'calendar'
  }
}
Vue.prototype.$_routePath = routePath

export const navigation = [
  {
    title: 'GENERAL',
    children: [
      routePath.home,
      routePath.stat,
    ]
  },
  // {
  //   title: '集計管理',
  //   children: [
  //     routePath.statpersonal,
  //     routePath.statbranch,
  //     routePath.statbranchemployee,
  //     routePath.statInsideAll,
  //     routePath.statInsideBranch,
  //   ]
  // },
  // {
  //   title: 'イベント管理',
  //   children: [
  //     routePath.calendar,
  //   ]
  // },
  // {
  //   title: 'OTHERS',
  //   children: [
  //     routePath.memberPasswordReset,
  //   ]
  // },
  // {
  //   title: '暫定的（削除予定）',
  //   children: [
  //     routePath.test
  //   ]
  // }
]
Vue.prototype.$_navigation = navigation
