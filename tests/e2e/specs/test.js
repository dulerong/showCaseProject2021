// https://docs.cypress.io/api/introduction/api.html

describe("Home Page Test", () => {
  const visit = () => cy.visit('http://127.0.0.1:8000/')

  beforeEach(() => {
    visit()
  })

  it("Visits the app root url", () => {
    cy.contains("h1", "Home page")
  })

  it("Changes language correctly, ", () => {
    cy.get('[data-testid="menu-language"]').click()
    cy.contains("Languages")

    cy.contains("中文").click()
    cy.contains("目前無內容, 之後會陸續補上")
    cy.url().should('eq', 'http://127.0.0.1:8000/ch/')
  })
});
