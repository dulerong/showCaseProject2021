import Vue from 'vue'

export const language = {
  en: { 
    appBar: {
      translate: 'Languages',
      userButton: {
        profile: 'Profile',
        logout: 'Logout'
      },
      tooltip: {
        sideDrawer: 'Side Drawer',
        settings: 'Settings'
      }
    },
    naviDrawer: {
      mainTitle: 'WEB Application',
      subTitle: 'Front End',
      GENERAL: {
        name: 'GENERAL',
        children: {
          home: 'Home',
          stat: 'Statistics'
        }
      }
    },
    footer: {
      tooltip: {
        home: 'home',
        email: 'email',
      }
    },
    home: {
      title: 'Home page (ENG), no content yet, coming soon later...7/21...'
    },
    about: {
      title: 'About Page'
    },
    notFound: {
      title: 'Page Not Found'
    }
  },
  ch: {
    appBar: {
      translate: '其他語言',
      userButton: {
        profile: '個人檔案',
        logout: '登出'
      },
      tooltip: {
        sideDrawer: '橫向抽屜',
        settings: '設定'
      }
    },
    naviDrawer: {
      mainTitle: 'WEB應用程式',
      subTitle: '前端',
      GENERAL: {
        name: '一般',
        children: {
          home: '首頁',
          stat: '統計數據'
        }
      }
    },
    footer: {
      tooltip: {
        home: '首頁',
        email: '電子郵件',
      }
    },
    home: {
      title: 'Home page (CHN), 目前無內容, 之後會陸續補上...7/21...'
    },
    about: {
      title: '簡介'
    },
    notFound: {
      title: '頁面不存在'
    }
  }
}
Vue.prototype.$_language = language