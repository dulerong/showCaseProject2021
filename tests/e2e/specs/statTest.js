// https://docs.cypress.io/api/introduction/api.html

describe('Taipei City Birth Stat Page tests', () => {
  const visit = () => cy.visit('http://127.0.0.1:8000/en/stat')

  beforeEach(() => {
    visit()
  })

  it('User select districts and obtain data', () => {
    cy.window().its('StatPage.data').should('have.length', 0)
    cy.get('[data-testid="statPageSelectDistrict"]').click({ force: true })

    cy.contains('Banqiao').click()
    cy.get('h1:first').click()
    cy.contains('FETCH DATA').click()

    cy.window().its('StatPage.data').should('not.have.length', 0)
  })
});
