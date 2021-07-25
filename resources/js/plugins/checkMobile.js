import Vue from 'vue'

const USER_AGENT_DATA_MOBILE = navigator.userAgentData.mobile

// const MOBILE_REGEX = [
//   /Android/i,
//   /webOS/i,
//   /iPhone/i,
//   /iPad/i,
//   /iPod/i,
//   /BlackBerry/i,
//   /Windows Phone/i
// ]

// const IS_MOBILE = () => MOBILE_REGEX.some(item => navigator.userAgent.match(item))

const IS_TOUCH_SCREEN = () => navigator.maxTouchPoints > 0 || USER_AGENT_DATA_MOBILE
// iOS 12 or below has no navigator.maxTouchPoints, hence need to check userAgent

Vue.prototype.$_IS_TOUCH_SCREEN = IS_TOUCH_SCREEN()