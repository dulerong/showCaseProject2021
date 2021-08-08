import Vue from 'vue'

export const routePath = {
  home: {
    title: 'Home',
    path: '',
    name: 'home',
    icon: 'mdi-home'
  },
  stat: {
    title: 'Statistics',
    path: 'stat',
    name: 'stat',
    icon: 'mdi-file-chart'
  },
  japanPopulation: {
    title: 'Japan Population',
    path: 'japan-population',
    name: 'japanPopulation',
    icon: 'mdi-baby-face-outline'
  },
  login: {
    title: 'LOGIN',
    path: 'login', 
    name: 'login',
    icon: 'mdi-login'
  },
}
Vue.prototype.$_routePath = routePath

export const navigation = [
  {
    title: 'GENERAL',
    children: [
      routePath.home,
      routePath.stat,
      routePath.japanPopulation
    ]
  },
]
Vue.prototype.$_navigation = navigation

export const footer_navigation = [
  routePath.home,
  routePath.stat,
  routePath.japanPopulation,
]
Vue.prototype.$_footer_navigation = footer_navigation