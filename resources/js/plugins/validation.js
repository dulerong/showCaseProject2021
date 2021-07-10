import Vue from 'vue'

export const hint = {
  age: '1歳以上、９９歳未満',
  required: '必須',
  numbers: '半角数字で入力',
  name: '全角(漢字、ひらがな、カタカナ)で入力',
  email: '不正メール形式、例：suzuki@tokyo.co.jp',
  phoneNumber: '半角数字１０〜１１桁必須、先頭にゼロ必須、例：09012345678(携帯), 0312345678(家電), ',
  postalCode: '半角数字７桁必須、ハイフン無し',
}

export const validation = {
  age: value => {
    return value < 99 && value > 0 || hint.age
  },
  required: value => {
    return value === 0 ?
      true :
      !!value || hint.required
  },
  numbers: value => {
    const pattern = /^[0-9]+$/
    return value ? pattern.test(value) || hint.numbers : true
  },
  furigana: value => {
    const pattern = /^[ア-ン゛゜ァ-ォャ-ョー「」、 　]+$/
    return pattern.test(value) || '全角、カタカナ必須'
  },
  name: value => {
    // \u30A0-\u30FF --- カタカナ regex https://www.javadrive.jp/regex-basic/sample/index8.html
    // \u3040-\u309F --- ひらがな regex https://www.javadrive.jp/regex-basic/sample/index8.html
    // \u4E00-\u9FFF --- 漢字    regex https://www.javadrive.jp/regex-basic/sample/index9.html

    const pattern = /^$|^[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF々 　]+$/
    return pattern.test(value) || hint.name
  },
  address: value => {
    const pattern = /^[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF々０-９ー 0-9- A-Ｚａ-ｚ　 ]+$/
    return pattern.test(value) || '全角(漢字、数字、英語、ひらがな、カタカナ、ハイフン), 半角(英数字、ハイフン)で入力'
  },
  text: value => {
    const pattern = /^[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\n々￥０-９ー　、。・：\w A-Ｚａ-ｚ,.?! -]+$/
    return value === null || value === '' ? 
      true : 
      pattern.test(value) || '全角：漢字、英数字、ひらがな、カタカナ、スペース、符号（、。・：？！）半角：英数字、符号（,.?!-）、スペース'
  },
  email: value => {
    const pattern = /^[\w-\.+]+@([\w-]+\.)+[\w-]{2,4}$/
    return pattern.test(value) || hint.email
  },
  phoneNumber: value => {
    // const pattern = /^(?:\d{10}|\d{3}-\d{3}-\d{4}|\d{2}-\d{4}-\d{4}|\d{3}-\d{4}-\d{4})$/
    const pattern = /^[0]\d{9,10}$/
    return pattern.test(value) || hint.phoneNumber
  },
  postalCode: value => {
    // const pattern = /^\d{3}-\d{4}$/
    const pattern = /^\d{7}$/
    return pattern.test(value) || hint.postalCode
  },
  twoDigitNumber: value => {
    const pattern = /^[0-9]{1,2}?$/
    return pattern.test(value) || '半角英数、２桁以内'
  },
  fiveDigit: value => {
    return value ? value.length <= 5 || '５文字数以内' : true
  },
  tenDigit: value => {
    return value ? value.length <= 10 || '１０文字数以内' : true
  },
  twentyDigit: value => {
    return value ? value.length <= 20 || '２０文字数以内' : true
  },
  fourtyDigit: value => {
    return value ? value.length <= 40 || '４０文字数以内' : true
  },
  oneHundredDigit: value => {
    return value ? value.length <= 100 || '１００文字数以内' : true
  },
  twoHundredDigit: value => {
    return value ? value.length <= 200 || '２００文字数以内' : true
  },
  password: value => {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return pattern.test(value) || '最小文字数８桁：英数字ごと最低１個必須'
  }
}

Vue.prototype.$_validation = validation