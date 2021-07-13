import { withCommas, toYearMonthDayTime, toYearMonthDay } from '~/js/filter'
import dayjs from 'dayjs'

describe('Filter Tests', () => {
  const today = dayjs()

  it('filter: toYearMonthDay', () => {
    const regEx = /^\d{4}[/]\d{2}[/]\d{2}$/
    const result = toYearMonthDay(today)

    expect(regEx.test(result)).toEqual(true)
  })

  it('filter: toYearMonthDayTime', () => {
    const regEx = /[0-9]{4}(\/)(0[1-9]|1[0-2])(\/)(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/
    const result = toYearMonthDayTime(today)

    expect(regEx.test(result)).toEqual(true)
  })

  it('filter: withCommas', () => {
    const num = Math.floor(Math.random() * 1000000000) + 1

    expect(withCommas(num)).toEqual(num.toLocaleString())
  })
})