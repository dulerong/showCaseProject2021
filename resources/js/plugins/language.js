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
    footer: {
      tooltip: {
        home: 'home',
        email: 'email',
      }
    },
    home: {
      title: 'Home page (ENG), no content yet, coming soon later...7/21...'
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
    footer: {
      tooltip: {
        home: '首頁',
        email: '電子郵件',
      }
    },
    home: {
      title: 'Home page (CHN), 目前無內容, 之後會陸續補上...7/21...'
    }
  }
}
Vue.prototype.$_language = language