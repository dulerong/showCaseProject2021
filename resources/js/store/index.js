import Vue from 'vue'
import Vuex from 'vuex'

// import { auth } from './storeModules/auth'
// import { customerManage } from './storeModules/customerManage'
// import { customerSearch } from './storeModules/customerSearch'
// import { customerInquiry } from './storeModules/customerInquiry'
// import { customerInsideSales } from './storeModules/customerInsideSales'
// import { customerUndecided } from './storeModules/customerUndecided'
// import { locationSearch } from './storeModules/locationSearch'
import { home } from './storeModules/home'
// import { loading } from './storeModules/loading'
// import { salesTheme } from './storeModules/salesTheme'
// import { notification } from './storeModules/notification'
// import { stat } from './storeModules/stat'
// import { calendar } from './storeModules/calendar'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    // auth,
    // customerManage,
    // customerSearch,
    // customerInquiry,
    // customerInsideSales,
    // customerUndecided,
    // locationSearch,
    home,
    // loading,
    // salesTheme,
    // notification,
    // stat,
    // calendar,
  }
})