// https://docs.cypress.io/api/introduction/api.html

describe('Login Page tests', () => {
  const visit = () => cy.visit('http://127.0.0.1:8000/en/login')

  beforeEach(() => {
    visit()
  })

  it('Page renders correctly', () => {
    cy.contains('button', 'LOGIN')
  })

  it('Click on login button directs to home page', () => {
    cy.contains('button', 'LOGIN').click()

    cy.contains('h1', 'Home page')
  })
});
