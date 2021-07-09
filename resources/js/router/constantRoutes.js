import Vue from 'vue'

export const routePath = {
  home: {
    title: 'Home',
    path: '/',
    name: 'home',
    icon: 'mdi-home'
  },
  search: {
    title: 'Search',
    path: '/search',
    name: 'search',
    icon: 'mdi-magnify'
  },
  register: {
    title: null,
    path: '/register',
    name: 'register',
    icon: null
  },
  edit: {
    title: null,
    path: '/edit',
    name: 'edit',
    icon: null
  },
  manage: {
    title: 'Manage',
    path: '/manage',
    name: 'manage',
    icon: 'mdi-alpha-m-circle'
  },
  inquiry: {
    title: null,
    path: '/inquiry/:id',
    name: 'inquiry',
    icon: null
  },
  calendar: {
    title: 'イベントカレンダー',
    path: '/calendar', 
    name: 'calendar',
    icon: 'calendar'
  },
  insidesales: {
    title: 'インサイドセールス管理',
    path: '/inside_sales',
    name: 'insideSales',
    icon: 'insideSales'
  },
  nosales: {
    title: '担当未設定顧客管理',
    path: '/no_sales',
    name: 'noSales',
    icon: 'insideSales'
  },
  statpersonal: {
    title: '個人集計',
    path: '/stat_personal',
    name: 'statPersonal',
    icon: 'statPersonal'
  },
  statbranch: {
    title: '店舗集計',
    path: '/stat_branch',
    name: 'statBranch',
    icon: 'statStore'
  },
  statbranchemployee: {
    title: '店舗集計(担当者別)',
    path: '/stat_branch_employee',
    name: 'statBranchEmployee',
    icon: 'statStore'
  },
  statInsideAll: {
    title: '全店インサイド集計',
    path: '/stat_inside_all',
    name: 'statInsideAll',
    icon: 'statInsideSales'
  },
  statInsideBranch: {
    title: '店舗別インサイド集計',
    path: '/stat_inside_branch',
    name: 'statInsideBranch',
    icon: 'statInsideSales'
  },
  sales: {
    title: null,
    path: '/sales/:id',
    name: 'sales',
    icon: null
  },
  login: {
    title: 'LOGIN',
    path: '/login', 
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
      routePath.search,
      routePath.manage,
      // routePath.insidesales,
      // routePath.nosales
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
  //     // {
  //     //   title: '集客力グラフ',
  //     //   path: '/storedata',
  //     //   icon: 'stat'
  //     // },
  //     // {
  //     //   title: '店舗別契約数及び契約率',
  //     //   path: '/storedata',
  //     //   icon: 'stat'
  //     // },
  //     // {
  //     //   title: '媒体別販促・単価集計',
  //     //   path: '/storedata',
  //     //   icon: 'statMedia'
  //     // },
  //   ]
  // },
  // {
  //   title: 'イベント管理',
  //   children: [
  //     routePath.calendar,
  //   ]
  // },
  {
    title: 'OTHERS',
    children: [
      routePath.login,
      routePath.memberPasswordReset,
    ]
  },
  // {
  //   title: '暫定的（削除予定）',
  //   children: [
  //     routePath.test
  //   ]
  // }
]
Vue.prototype.$_navigation = navigation
