describe('Various Examples', () => {
  beforeEach(() => {
    cy.visit('/examples')
  })
  it('multi-page testing', () => {
    cy.getDataTest('nav-why-crypress').click()
    cy.location("pathname").should("equal", "/")

    cy.getDataTest('nav-overview').click()
    cy.location("pathname").should("equal", "/overview")

    cy.getDataTest('nav-fundamentals').click()
    cy.location("pathname").should("equal", "/fundamentals")
  })
})