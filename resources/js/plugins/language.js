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
    settingDrawer: {
      title: 'Settings',
      theme: 'Theme',
      light: 'Light',
      dark: 'Dark',
    },
    footer: {
      tooltip: {
        home: 'Home',
        stat: 'Statistics',
      }
    },
    home: {
      title: 'Home page (ENG), no content yet, coming soon later...7/21...'
    },
    about: {
      title: 'About Page'
    },
    login: {
      greeting: {
        morning: 'Good morning',
        afternoon: 'Good afternoon',
        evening: 'Good evening',
        welcome: 'Welcome back!'
      },
      button: {
        login: 'LOGIN',
        signUp: 'SIGN UP'
      },
      textField: {
        username: {
          label: 'User Name',
          hint: "Showcase use only (You don't have to enter username)"
        },
        password: {
          label: 'Password',
          hint: "Showcase use only (You don't have to enter password)"
        }
      }
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
    settingDrawer: {
      title: '設定選項',
      theme: '主題模式',
      light: '光明',
      dark: '暗黑',
    },
    footer: {
      tooltip: {
        home: '首頁',
        stat: '統計數據',
      }
    },
    home: {
      title: 'Home page (CHN), 目前無內容, 之後會陸續補上...7/21...'
    },
    about: {
      title: '簡介'
    },
    login: {
      greeting: {
        morning: '早安',
        afternoon: '午安',
        evening: '晚安',
        welcome: '歡迎回來!'
      },
      button: {
        login: '登入',
        signUp: '註冊'
      },
      textField: {
        username: {
          label: '使用者名稱',
          hint: "展示用 (不需輸入)"
        },
        password: {
          label: '密碼',
          hint: "展示用 (不需輸入)"
        }
      }
    },
    notFound: {
      title: '頁面不存在'
    }
  }
}
Vue.prototype.$_language = language