import { jpJapanPrefectures } from "./jpJapanPrefectures"

export const jpLanguage = {
  appBar: {
    otherSettings: '設定',
    translate: '言語',
    userButton: {
      profile: 'プロフィール',
      logout: 'ログアウト'
    },
    tooltip: {
      sideDrawer: '引き出し',
      settings: '設定'
    }
  },
  naviDrawer: {
    mainTitle: 'WEBアプリ',
    subTitle: 'フロントエンド',
    GENERAL: {
      name: '一般',
      children: {
        home: 'ホーム',
        stat: '新北市出産統計',
        japanPopulation: '日本人口推移'
      }
    }
  },
  settingDrawer: {
    title: '設定項目',
    theme: 'テーマ',
    light: 'ライト',
    dark: 'ダーク',
  },
  footer: {
    tooltip: {
      home: 'ホーム',
      stat: '新北市出産統計',
      japanPopulation: '日本人口成長率'
    }
  },
  home: {
    title: 'ホーム',
    content: '下記：現状の実装済み機能',
    page: {
      first: '新北市（台湾の都市）出産統計データ',
      second: '日本人口成長率'
    },
    description: 'フレームワーク：Vue.js、プラス下記のVue ecosystemで統合'
  },
  about: {
    title: '簡介'
  },
  stat: {
    title: '新北市出産統計データ (2019年)',
    result: '出産人数',
    form: {
      site: '区',
      motherAge: '母親年齢',
      birthOrder: '胎數',
      birthSex: '性別'
    },
    button: {
      fetch: '検索',
      reset: 'リセット',
      clear: 'クリア'
    },
    notification: {
      fetch: 'データ取得',
      reset: 'フィルターリセット',
      clear: '検索結果クリア'
    },
    tableHeader: {
      site: '区',
      motherAge: '母親年齢',
      birthOrder: '胎數',
      birthSex: '性別',
      birthCount: '出産人数'
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
    title: '日本人口成長推移 (1960 - 2045)',
    chart: {
      title: '日本人口成長率',
      xAxis: '年',
      yAxis: '人口',
    },
    selectFieldLabel: '日本各都道府縣',
    prefectures: jpJapanPrefectures
  },
  login: {
    greeting: {
      morning: 'おはようございます',
      afternoon: 'こんにちは',
      evening: 'こんばんは',
      welcome: 'お帰り！'
    },
    button: {
      login: '登入',
      signUp: '註冊'
    },
    textField: {
      username: {
        label: 'ログイン名',
        hint: "展示用 (入力不要)"
      },
      password: {
        label: '密碼',
        hint: "展示用 (入力不要)"
      }
    }
  },
  notFound: {
    title: 'ページが存在していません'
  }
}