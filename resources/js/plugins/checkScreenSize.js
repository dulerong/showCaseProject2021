import Vue from 'vue'

export const screenWidthUnder450 = () => screen.width < 450

Vue.prototype.$_screenWidthUnder450 = screenWidthUnder450()