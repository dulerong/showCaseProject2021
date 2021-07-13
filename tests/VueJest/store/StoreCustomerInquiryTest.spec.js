import { customerInquiry } from '~/js/storeModules/customerInquiry'
import { apiPath } from '~/js/constantsAPI'

let url = ''
let body = {}
const mockAPIResponse = {
  customer: {
    is_spouse: 0
  },
  customer_handlings: [

  ],
  customer_visits: [
    {}, {}, {}
  ],
  survey: {
    myhome_household1_name: 'John',
    myhome_household2_name: 'Heidi',
    myhome_household3_name: null,
    myhome_household4_name: null,
  },
  survey_responses: [
    { scoring: 1 },
    { scoring: 2 },
    { scoring: 3 }
  ]
}

jest.mock('axios', () => ({
  post: (_url, _body) => {
    return new Promise((resolve) => {
      url = _url
      body = _body
      const res = {
        data: {
          data: {
            response: mockAPIResponse
          }
        }
      }
      resolve(res)
    })
  }
}))

describe('Auth Store Test', () => {
  const state = customerInquiry.state
  const commit = jest.fn()
  const data = { customer_id: 1 }

  customerInquiry.mutations.setCustomerInfo(state, mockAPIResponse)

  it('mutation setCustomerInfo', () => {
    expect(state.info).toEqual(mockAPIResponse)
  })

  it('getter isInside', () => {
    expect(customerInquiry.getters.isInside(state)).toEqual(false)
  })

  it('getter isInfoAvailable', () => {
    expect(customerInquiry.getters.isInfoAvailable(state)).toEqual(true)
  })

  it('getter scoring', () => {
    const totalScoring = mockAPIResponse.survey_responses.reduce((total, item) => total + item.scoring, 0)

    expect(customerInquiry.getters.scoring(state)).toEqual(totalScoring)
  })

  it('getter isSpouse', () => {
    expect(customerInquiry.getters.isSpouse(state)).toEqual(false)
  })

  it('getter isHousehold', () => {
    expect(customerInquiry.getters.isHousehold1(state)).toEqual(true)
    expect(customerInquiry.getters.isHousehold2(state)).toEqual(true)
    expect(customerInquiry.getters.isHousehold3(state)).toEqual(false)
    expect(customerInquiry.getters.isHousehold4(state)).toEqual(false)
  })

  it('action retrieveCustomerInfo', async () => {    
    await customerInquiry.actions.retrieveCustomerInfo({ commit }, data)

    expect(url).toBe(apiPath.customer.getDetail)
    expect(body).toEqual(data)
    expect(commit).toHaveBeenCalledWith('setCustomerInfo', mockAPIResponse)
  })
})