import { zhJapanPrefectures } from "./zhJapanPrefectures"

export const zhLanguage = {
  appBar: {
    otherSettings: '其他設定',
    translate: '語言',
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
        stat: '新北市出生統計數據',
        japanPopulation: '日本人口推移'
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
      stat: '新北市出生統計數據',
      japanPopulation: '日本人口成長率'
    }
  },
  home: {
    title: '首頁',
    content: '目前網頁的功能為下列',
    page: {
      first: '新北市出生數據統計',
      second: '日本人口成長率'
    },
    description: '網站是以Vue.js為framework，並以下列的Vue ecosystem整合'
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
  japanPopulation: {
    title: '日本人口成長遷移 (1960 - 2045)',
    chart: {
      title: '日本人口成長率',
      xAxis: '年',
      yAxis: '人口',
    },
    selectFieldLabel: '日本各都道府縣',
    prefectures: zhJapanPrefectures
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