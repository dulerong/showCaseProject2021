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
    stat: {
      title: 'New Taipei City Birth Statistics (Year: 2019)',
      result: 'Total Born',
      form: {
        site: 'District',
        motherAge: 'Mother Age',
        birthOrder: 'Birth Order',
        birthSex: 'Birth Sex'
      },
      button: {
        fetch: 'FETCH DATA',
        reset: 'RESET FILTER',
        clear: 'CLEAR DATA'
      },
      notification: {
        fetch: 'Data Fetched',
        reset: 'Filter Reset',
        clear: 'Data Cleared'
      },
      tableHeader: {
        site: 'District',
        motherAge: 'Mother Age',
        birthOrder: 'Birth Order',
        birthSex: 'Birth Sex',
        birthCount: 'Birth Count'
      },
      site: {
        banqiao: 'Banqiao',
        sanchong: 'Sanchong',
        zhonghe: 'Zhonghe',
        yonghe: 'Yonghe',
        xinzhuang: 'Xinzhuang',
        xindian: 'Xindian',
        tucheng: 'Tucheng',
        xizhi: 'Xizhi',
        shuling: 'Shuling',
        yingge: 'Yingge',
        sanxia: 'Sanxia',
        danshui: 'Danshui',
        ruifang: 'Ruifang',
      },
      motherAges: {
        ageUnder15: 'Under 15',
        age15To19: '15 - 19',
        age20To24: '20 - 24',
        age25To29: '25 - 29',
        age30To34: '30 - 34',
        age35To39: '35 - 39',
        age40To44: '40 - 44',
        age45To49: '45 - 49',
        age50Above: '50 and above'
      },
      birthOrders: {
        birth1: '1st',
        birth2: '2nd',
        birth3: '3rd',
        birth4: '4th',
        birth5: '5th',
        birth6: '6th',
        birth7: '7th',
        birth8: '8th',
        birth9: '9th and above',
      },
      birthSex: {
        male: 'Male',
        female: 'Female'
      }
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
    stat: {
      title: '新北市出生數據統計 (2019年)',
      result: '總出生人數',
      form: {
        site: '區域',
        motherAge: '母親年齡',
        birthOrder: '胎數',
        birthSex: '性別'
      },
      button: {
        fetch: '查詢資料',
        reset: '重設選項',
        clear: '清除資料'
      },
      notification: {
        fetch: '資料取得',
        reset: '選項清空',
        clear: '資料清除'
      },
      tableHeader: {
        site: '區域',
        motherAge: '母親年齡',
        birthOrder: '胎數',
        birthSex: '性別',
        birthCount: '出生人數'
      },
      site: {
        banqiao: '板橋',
        sanchong: '三重',
        zhonghe: '中和',
        yonghe: '永和',
        xinzhuang: '新莊',
        xindian: '新店',
        tucheng: '土城',
        xizhi: '汐止',
        shuling: '樹林',
        yingge: '鶯歌',
        sanxia: '三峽',
        danshui: '淡水',
        ruifang: '瑞芳',
      },
      motherAges: {
        ageUnder15: '未滿15歲',
        age15To19: '15～19歲',
        age20To24: '20～24歲',
        age25To29: '25～29歲',
        age30To34: '30～34歲',
        age35To39: '35～39歲',
        age40To44: '40～44歲',
        age45To49: '45～49歲',
        age50Above: '50歲以上'
      },
      birthOrders: {
        birth1: '1胎',
        birth2: '2胎',
        birth3: '3胎',
        birth4: '4胎',
        birth5: '5胎',
        birth6: '6胎',
        birth7: '7胎',
        birth8: '8胎',
        birth9: '9胎以上',
      },
      birthSex: {
        male: '男',
        female: '女'
      }
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