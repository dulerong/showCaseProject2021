import Vue from 'vue'

const statSites = [
  { value: '新北市板橋區', name: 'banqiao' },
  { value: '新北市三重區', name: 'sanchong' },
  { value: '新北市中和區', name: 'zhonghe' },
  { value: '新北市永和區', name: 'yonghe' },
  { value: '新北市新莊區', name: 'xinzhuang' },
  { value: '新北市新店區', name: 'xindian' },
  { value: '新北市土城區', name: 'tucheng' },
  { value: '新北市汐止區', name: 'xizhi' },
  { value: '新北市樹林區', name: 'shuling' },
  { value: '新北市鶯歌區', name: 'yingge' },
  { value: '新北市三峽區', name: 'sanxia' },
  { value: '新北市淡水區', name: 'danshui' },
  { value: '新北市瑞芳區', name: 'ruifang' },
]
Vue.prototype.$_statSites = statSites

const statMotherAges = [
  { value: '未滿15歲', name: 'ageUnder15' },
  { value: '15～19歲', name: 'age15To19' },
  { value: '20～24歲', name: 'age20To24' },
  { value: '25～29歲', name: 'age25To29' },
  { value: '30～34歲', name: 'age30To34' },
  { value: '35～39歲', name: 'age35To39' },
  { value: '40～44歲', name: 'age40To44' },
  { value: '45～49歲', name: 'age45To49' },
  { value: '50歲以上', name: 'age50Above' }
]
Vue.prototype.$_statMotherAges = statMotherAges

const statBirthOrders = [
  { value: '1胎', name: 'birth1' },
  { value: '2胎', name: 'birth2' },
  { value: '3胎', name: 'birth3' },
  { value: '4胎', name: 'birth4' },
  { value: '5胎', name: 'birth5' },
  { value: '6胎', name: 'birth6' },
  { value: '7胎', name: 'birth7' },
  { value: '8胎', name: 'birth8' },
  { value: '9胎以上', name: 'birth9' }
]
Vue.prototype.$_statBirthOrders = statBirthOrders

const statSex = [
  { value: '男', name: 'male' },
  { value: '女', name: 'female' }
]
Vue.prototype.$_statSex = statSex