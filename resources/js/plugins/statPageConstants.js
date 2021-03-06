import Vue from 'vue'

export const statSites = [
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

export const statMotherAges = [
  { value: '未滿15歲', name: 'ageUnder15' },
  { value: '15～19歲', name: 'age15To19' },
  { value: '20～24歲', name: 'age20To24' },
  { value: '25～29歲', name: 'age25To29' },
  { value: '30～34歲', name: 'age30To34' },
  { value: '35～39歲', name: 'age35To39' },
  { value: '40～44歲', name: 'age40To44' },
  { value: '45～49歲', name: 'age45To49' },
  { value: '50歲以上', name: 'age50Above' },
]
Vue.prototype.$_statMotherAges = statMotherAges

export const statBirthOrders = [
  { value: '1胎', name: 'birth1' },
  { value: '2胎', name: 'birth2' },
  { value: '3胎', name: 'birth3' },
  { value: '4胎', name: 'birth4' },
  { value: '5胎', name: 'birth5' },
  { value: '6胎', name: 'birth6' },
  { value: '7胎', name: 'birth7' },
  { value: '8胎', name: 'birth8' },
  { value: '9胎以上', name: 'birth9' },
]
Vue.prototype.$_statBirthOrders = statBirthOrders

export const statSex = [
  { value: '男', name: 'male' },
  { value: '女', name: 'female' },
]
Vue.prototype.$_statSex = statSex

export const filterStatData = (
  data,
  siteSelected,
  birthOrderSelected,
  motherAgeSelected,
  sexSelected
) => {
  return data
    .filter(item =>
      siteSelected && siteSelected.length > 0
        ? siteSelected.includes(item.site_id)
        : true
    )
    .filter(item =>
      birthOrderSelected && birthOrderSelected.length > 0
        ? birthOrderSelected.includes(item.birth_order)
        : true
    )
    .filter(item =>
      motherAgeSelected && motherAgeSelected.length > 0
        ? motherAgeSelected.includes(item.mother_age)
        : true
    )
    .filter(item =>
      sexSelected && sexSelected.length > 0
        ? sexSelected.includes(item.birth_sex)
        : true
    )
    .filter(item => item.birth_count > 0)
}
Vue.prototype.$_filterStatData = filterStatData

export const sortMotherAges = (a, b) => {
  a = a.slice(0, 1)
  b = b.slice(0, 1)

  if (isNaN(a)) a = 0
  if (isNaN(b)) b = 0

  return a - b
}
Vue.prototype.$_sortMotherAges = sortMotherAges

export const translateData = data => {
  return data.map(({ birth_count, ...item }) => ({
    site_id: translateDisctrict(item.site_id),
    mother_age: translateMotherAges(item.mother_age),
    birth_order: translateBirthOrders(item.birth_order),
    birth_sex: translateBirthSex(item.birth_sex),
    birth_count,
  }))
}
Vue.prototype.$_translateData = translateData

export const translateDisctrict = site => {
  switch (site) {
    case '新北市板橋區':
      return 'banqiao'
    case '新北市三重區':
      return 'sanchong'
    case '新北市中和區':
      return 'zhonghe'
    case '新北市永和區':
      return 'yonghe'
    case '新北市新莊區':
      return 'xinzhuang'
    case '新北市新店區':
      return 'xindian'
    case '新北市土城區':
      return 'tucheng'
    case '新北市汐止區':
      return 'xizhi'
    case '新北市樹林區':
      return 'shuling'
    case '新北市鶯歌區':
      return 'yingge'
    case '新北市三峽區':
      return 'sanxia'
    case '新北市淡水區':
      return 'danshui'
    case '新北市瑞芳區':
      return 'ruifang'
  }
}

export const translateMotherAges = age => {
  switch (age) {
    case '未滿15歲':
      return 'ageUnder15'
    case '15～19歲':
      return 'age15To19'
    case '20～24歲':
      return 'age20To24'
    case '25～29歲':
      return 'age25To29'
    case '30～34歲':
      return 'age30To34'
    case '35～39歲':
      return 'age35To39'
    case '40～44歲':
      return 'age40To44'
    case '45～49歲':
      return 'age45To49'
    case '50歲以上':
      return 'age50Above'
  }
}

export const translateBirthOrders = order => {
  switch (order) {
    case '1胎':
      return 'birth1'
    case '2胎':
      return 'birth2'
    case '3胎':
      return 'birth3'
    case '4胎':
      return 'birth4'
    case '5胎':
      return 'birth5'
    case '6胎':
      return 'birth6'
    case '7胎':
      return 'birth7'
    case '8胎':
      return 'birth8'
    case '9胎以上':
      return 'birth9'
  }
}

export const translateBirthSex = sex => {
  switch (sex) {
    case '男':
      return 'male'
    case '女':
      return 'female'
  }
}
