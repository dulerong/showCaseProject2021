import Vue from 'vue'

// const USER_AGENT_DATA_MOBILE = navigator.userAgentData.mobile

const MOBILE_REGEX = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
]

const IS_MOBILE = () => MOBILE_REGEX.some(item => navigator.userAgent.match(item))

const IS_TOUCH_SCREEN = () => navigator.maxTouchPoints > 0 || IS_MOBILE()
// iOS 12 or below has no navigator.maxTouchPoints, hence need to check userAgent

Vue.prototype.$_IS_TOUCH_SCREEN = IS_TOUCH_SCREEN()

// dark-mode media query matched or not
const IS_DARK = window.matchMedia('(prefers-color-scheme: dark)').matches

Vue.prototype.$_IS_DARK = IS_DARK

// detetct user browser preferred language
export const AVAILABLE_LANG_LIST = [
  { title: 'English', value: 'en' },
  { title: '中文', value: 'zh' },
]
const navigatorLangList = navigator.languages
const preferredLang = navigatorLangList[0]

export const USER_PREFER_LANG = AVAILABLE_LANG_LIST.find(item => preferredLang.includes(item.value)).value

Vue.prototype.$_AVAILABLE_LANG_LIST = AVAILABLE_LANG_LIST
Vue.prototype.$_USER_PREFER_LANG = USER_PREFER_LANG