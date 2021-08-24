import { enJapanPrefectures } from "./enJapanPrefectures"

export const enLanguage = {
  appBar: {
    otherSettings: 'Other Settings',
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
        stat: 'New Taipei City Birth Statistics',
        japanPopulation: 'Japan Population Trend'
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
      stat: 'New Taipei City Birth Statistics',
      japanPopulation: 'Japan Population Trend'
    }
  },
  home: {
    title: 'Home page',
    content: 'Currently, this web app contains the following pages',
    page: {
      first: 'Birth Statistics of New Taipei City',
      second: 'Population Trend of Japan'
    },
    description: 'This website is constructed with Vue.js framework, with the following ecosystem'
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
  japanPopulation: {
    title: 'Japanese Population (1960 - 2045)',
    chart: {
      title: 'Japan Population Trend',
      xAxis: 'Year',
      yAxis: 'Population',
    },
    selectFieldLabel: 'Japan Prefectures',
    prefectures: enJapanPrefectures
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
}