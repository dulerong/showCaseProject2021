import { validation, hint } from '~/js/validation'

describe('Validation Tests', () => {

  it('age', () => {
    const value = 25
    expect(validation.age(value)).toEqual(true)

    const falseValue = 125
    expect(validation.age(falseValue)).toEqual(hint.age)
  })

  it('required', () => {
    const value = null
    expect(validation.required(value)).toEqual(hint.required)
  })

  it('numbers', () => {
    const value = 123
    expect(validation.numbers(value)).toEqual(true)

    const falseValue = 'Codey'
    expect(validation.numbers(falseValue)).toEqual(hint.numbers)
  })

  it('name', () => {
    const value = '鈴木'
    expect(validation.name(value)).toEqual(true)

    const falseValue = 'Suzuki'
    expect(validation.name(falseValue)).toEqual(hint.name)
  })

  it('email', () => {
    const value = 'codeydu@hotmail.com'
    expect(validation.email(value)).toEqual(true)

    const falseValue = 'falseemail@hotmail'
    expect(validation.email(falseValue)).toEqual(hint.email)
  })

  it('phoneNumber', () => {
    const value = '09012341234'
    expect(validation.phoneNumber(value)).toEqual(true)

    const falseValue = '901'
    expect(validation.phoneNumber(falseValue)).toEqual(hint.phoneNumber)
  })

  it('postalCode', () => {
    const value = '1330001'
    expect(validation.postalCode(value)).toEqual(true)

    const falseValue ='133-0001'
    expect(validation.postalCode(falseValue)).toEqual(hint.postalCode)
  })

})