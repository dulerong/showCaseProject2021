import Vue from 'vue'
import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
dayjs.locale(ja)

const dateToday = dayjs()

Vue.prototype.$_dateToday = dateToday

Vue.prototype.$_dateTodayYYYYMMDD = dateToday.format('YYYY-MM-DD')

Vue.prototype.$_time_right_now = dateToday.format('YYYY-MM-DD HH:mm:ss')

Vue.prototype.$_hour_right_now = dateToday.format('HH')