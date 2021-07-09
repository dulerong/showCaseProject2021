import axios from 'axios'
import Vue from 'vue'
// import { store } from './store'
// import router from './router'
// import { routePath } from '~js/router/constantRoutes'
// import { apiPath } from './constantsAPI'

const baseURL = '/'

const myAPI = axios.create({
  baseURL: baseURL,
  timeout: 30000, // unit = millisecond
  headers: {
    "Content-Type": "application/json"
  }
})

// const getAuthToken = () => `Bearer ${localStorage.getItem('user-token')}`

// const authInterceptor = (config) => {
//   config.headers['Authorization'] = getAuthToken()
//   return config
// }

// myAPI.interceptors.request.use(authInterceptor)

// const errorInterceptor = err => {
//   switch(err.response.status) {
//     case 400:
//       console.log(err.response)
//       errorFourZeroZero(err)
//       break
//     case 401:
//       console.log(err.response)
//       errorFourZeroOne(err)
//     default:
//       console.log(err.response)
//       showNotification(err.response.status, '管理会社へお問合せください', 'error', -1)
//   }
//   store.commit('loading/loadingStop')
//   return Promise.reject(err)
// }

// const noAuthRedirect = () => {
//   localStorage.removeItem('user-token')
//   store.commit('auth/removeToken')
//   router.push(routePath.login.path)
// }

// const errorFourZeroZero = (err) => {
//   switch(err.response.config.url) {
//     case apiPath.customer.getDetail:
//       router.push(routePath.search.path)
//       showNotification('無効の顧客ID', '顧客検索ページに転送', 'error', -1)
//       break
//     case apiPath.auth.login:
//       showNotification('ログインIDかパスワードが間違っています', '', 'error', -1)
//       break
//     default:
//       showNotification(err.response.status, '管理会社へお問合せください', 'error', -1)
//   }
// }

// const errorFourZeroOne = (err) => {
//   switch(err.response.config.url) {
//     case apiPath.auth.changePassword:
//       break
//     default:
//       showNotification('ユーザー認証失敗', 'ログイン画面に転送', 'error', -1)
//       return noAuthRedirect()
//   }
// }

// const showNotification = (status, message, color, timeout) => {
//   store.commit('notification/showNotification', {
//     message: `エラー: ${status}, ${message}`,
//     color: color,
//     timeout: timeout
//   })
// }

// const responseInterceptor = res => {
//   switch(res.status) {
//     case 200:
//       console.log('response 200')
//       break;
//     default:
//       console.log(res)
//   }
//   return res
// }

// myAPI.interceptors.response.use(responseInterceptor, errorInterceptor)

export default myAPI

Vue.prototype.$_api = myAPI