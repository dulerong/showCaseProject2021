import Vue from 'vue'

const statSites = [
  { value: '新北市板橋區', name: '板橋' },
  { value: '新北市三重區', name: '三重' },
  { value: '新北市中和區', name: '中和' },
  { value: '新北市永和區', name: '永和' },
  { value: '新北市新莊區', name: '新莊' },
  { value: '新北市新店區', name: '新店' },
  { value: '新北市土城區', name: '土城' },
  { value: '新北市蘆洲區', name: '蘆洲' },
  { value: '新北市汐止區', name: '汐止' },
  { value: '新北市樹林區', name: '樹林' },
  { value: '新北市鶯歌區', name: '鶯歌' },
  { value: '新北市三峽區', name: '三峽' },
  { value: '新北市淡水區', name: '淡水' },
  { value: '新北市瑞芳區', name: '瑞芳' },
  { value: '新北市五股區', name: '五股' },
  { value: '新北市泰山區', name: '泰山' },
  { value: '新北市林口區', name: '林口' },
  { value: '新北市深坑區', name: '深坑' },
  { value: '新北市石碇區', name: '石碇' },
  { value: '新北市坪林區', name: '坪林' },
  { value: '新北市三芝區', name: '三芝' },
  { value: '新北市石門區', name: '石門' },
  { value: '新北市八里區', name: '八里' },
  { value: '新北市平溪區', name: '平溪' },
  { value: '新北市雙溪區', name: '雙溪' },
  { value: '新北市貢寮區', name: '貢寮' },
  { value: '新北市金山區', name: '金山' },
  { value: '新北市萬里區', name: '萬里' },
  { value: '新北市烏來區', name: '烏來' },
]
Vue.prototype.$_statSites = statSites

const statMotherAges = [
  '未滿15歲',
  '15～19歲',
  '20～24歲',
  '25～29歲',
  '30～34歲',
  '35～39歲',
  '40～44歲',
  '45～49歲',
  '50歲以上'
]
Vue.prototype.$_statMotherAges = statMotherAges

const statBirthOrders = [
  '1胎',
  '2胎',
  '3胎',
  '4胎',
  '5胎',
  '6胎',
  '7胎',
  '8胎',
  '9胎以上'
]
Vue.prototype.$_statBirthOrders = statBirthOrders

const statSex = [
  '男',
  '女'
]
Vue.prototype.$_statSex = statSex