// https://docs.cypress.io/api/introduction/api.html

describe('Japan Population Page tests', () => {
  const visit = () => cy.visit('http://127.0.0.1:8000/en/japan-population')

  beforeEach(() => {
    visit()
  })

  it('Page contains correct title', () => {
    cy.contains('h1', 'Japanese Population')
  })

  it('User select prefectures and obtain chart data series', () => {
    cy.window().its('JapanPopulationPage.chartData').should('have.length', 0)
    cy.get('[data-testid="japanPrefectureSelect"]').click({ force: true })

    cy.contains('Hokkaido').click()
    cy.contains('Aomori').click()
    cy.get('h1:first').click()

    cy.window().its('JapanPopulationPage.chartData').should('have.length', 2)
  })
});
