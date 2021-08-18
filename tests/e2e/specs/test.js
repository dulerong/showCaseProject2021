// https://docs.cypress.io/api/introduction/api.html

describe('Route tests', () => {
  const visit = () => cy.visit('http://127.0.0.1:8000/')
  const openNaviDrawer = () => {
    cy.get('[data-testid="toggleButton"]').click()
    cy.contains('GENERAL').click()
  }

  beforeEach(() => {
    visit()
  })

  it('Visits the app root url', () => {
    cy.contains('h1', 'Home page')
  })

  it('Changes language correctly,', () => {
    cy.get('[data-testid="menu-language"]').click()
    cy.contains('Languages')

    cy.contains('中文').click()
    cy.url().should('eq', 'http://127.0.0.1:8000/ch/')
  })

  it('New Taipei City Statistics page renders correctly', () => {
    openNaviDrawer()
    cy.contains('New Taipei City').click()

    cy.contains('New Taipei City Birth Statistics')
    cy.url().should('eq', 'http://127.0.0.1:8000/en/stat')
  })

  it('Japan population page renders correctly', () => {
    openNaviDrawer()
    cy.contains('Japan Population Trend').click()

    cy.contains('Japanese Population (1960 - 2045)')
    cy.url().should('eq', 'http://127.0.0.1:8000/en/japan-population')
  })

  it('Logout page renders correctly', () => {
    cy.get('[data-testid="profileMenu"]').click()
    cy.contains('Logout').click()

    cy.url().should('include', '/login')
  })
});
